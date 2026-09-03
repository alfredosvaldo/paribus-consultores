#import <CoreGraphics/CoreGraphics.h>
#import <CoreImage/CoreImage.h>
#import <Foundation/Foundation.h>
#import <ImageIO/ImageIO.h>
#import <Vision/Vision.h>

// Unlike remove-portrait-background.m (which keys out a specific neutral-grey
// backdrop), this uses Vision's subject-lift to extract the person regardless
// of backdrop colour. Use this when the source photo has a colourful/uneven
// background that a colour-keying heuristic can't safely remove.

static void fail(NSString *message) {
  fprintf(stderr, "%s\n", message.UTF8String);
  exit(1);
}

int main(int argc, const char *argv[]) {
  @autoreleasepool {
    if (argc != 3) {
      fail(@"Usage: lift-portrait-subject <input> <output>");
    }

    NSURL *inputURL = [NSURL fileURLWithPath:[NSString stringWithUTF8String:argv[1]]];
    NSURL *outputURL = [NSURL fileURLWithPath:[NSString stringWithUTF8String:argv[2]]];

    CGImageSourceRef source = CGImageSourceCreateWithURL((__bridge CFURLRef)inputURL, NULL);
    if (source == NULL) fail(@"Could not read the source portrait.");
    CGImageRef original = CGImageSourceCreateImageAtIndex(source, 0, NULL);
    CFRelease(source);
    if (original == NULL) fail(@"Could not decode the source portrait.");

    VNGenerateForegroundInstanceMaskRequest *request =
      [[VNGenerateForegroundInstanceMaskRequest alloc] init];
    VNImageRequestHandler *handler =
      [[VNImageRequestHandler alloc] initWithCGImage:original options:@{}];

    NSError *error = nil;
    [handler performRequests:@[ request ] error:&error];
    if (error != nil) fail([NSString stringWithFormat:@"Vision request failed: %@", error]);

    VNInstanceMaskObservation *result = request.results.firstObject;
    if (result == nil) fail(@"No subject found in the source portrait.");

    NSIndexSet *allInstances = result.allInstances;
    CVPixelBufferRef maskBuffer = nil;
    @try {
      maskBuffer = [result generateMaskForInstances:allInstances error:&error];
    } @catch (NSException *exception) {
      fail([NSString stringWithFormat:@"Mask generation threw: %@", exception]);
    }
    if (error != nil || maskBuffer == NULL) {
      fail([NSString stringWithFormat:@"Could not generate subject mask: %@", error]);
    }

    CIImage *maskImage = [CIImage imageWithCVPixelBuffer:maskBuffer];
    CIImage *sourceImage = [CIImage imageWithCGImage:original];
    CGFloat scaleX = sourceImage.extent.size.width / maskImage.extent.size.width;
    CGFloat scaleY = sourceImage.extent.size.height / maskImage.extent.size.height;
    CIImage *scaledMask = [maskImage imageByApplyingTransform:CGAffineTransformMakeScale(scaleX, scaleY)];

    CIImage *transparentBackground =
      [[CIImage imageWithColor:[CIColor colorWithRed:0 green:0 blue:0 alpha:0]]
        imageByCroppingToRect:sourceImage.extent];

    CIFilter *blend = [CIFilter filterWithName:@"CIBlendWithMask"];
    [blend setValue:sourceImage forKey:kCIInputImageKey];
    [blend setValue:transparentBackground forKey:kCIInputBackgroundImageKey];
    [blend setValue:scaledMask forKey:kCIInputMaskImageKey];

    CIContext *ciContext = [CIContext contextWithOptions:nil];
    CGImageRef output = [ciContext createCGImage:blend.outputImage fromRect:sourceImage.extent];
    CGImageRelease(original);
    if (output == NULL) fail(@"Could not render the lifted subject.");

    CGImageDestinationRef destination = CGImageDestinationCreateWithURL(
      (__bridge CFURLRef)outputURL, CFSTR("public.png"), 1, NULL);
    if (destination == NULL) {
      CGImageRelease(output);
      fail(@"Could not create the cutout PNG destination.");
    }
    CGImageDestinationAddImage(destination, output, NULL);
    BOOL wroteFile = CGImageDestinationFinalize(destination);
    CFRelease(destination);
    CGImageRelease(output);
    if (!wroteFile) fail(@"Could not write the cutout PNG.");
  }
  return 0;
}
