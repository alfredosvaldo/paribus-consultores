#import <CoreGraphics/CoreGraphics.h>
#import <Foundation/Foundation.h>
#import <ImageIO/ImageIO.h>

static void fail(NSString *message) {
  fprintf(stderr, "%s\n", message.UTF8String);
  exit(1);
}

static CGFloat smoothstep(CGFloat edge0, CGFloat edge1, CGFloat value) {
  CGFloat t = fmin(fmax((value - edge0) / (edge1 - edge0), 0.0), 1.0);
  return t * t * (3.0 - 2.0 * t);
}

int main(int argc, const char *argv[]) {
  @autoreleasepool {
    if (argc != 3) {
      fail(@"Usage: remove-portrait-background <input> <output>");
    }

    NSURL *inputURL = [NSURL fileURLWithPath:[NSString stringWithUTF8String:argv[1]]];
    NSURL *outputURL = [NSURL fileURLWithPath:[NSString stringWithUTF8String:argv[2]]];
    CGImageSourceRef source = CGImageSourceCreateWithURL((__bridge CFURLRef)inputURL, NULL);
    if (source == NULL) {
      fail(@"Could not read the source portrait.");
    }

    CGImageRef original = CGImageSourceCreateImageAtIndex(source, 0, NULL);
    CFRelease(source);
    if (original == NULL) {
      fail(@"Could not decode the source portrait.");
    }

    // The source is 1026 x 1600. Crop to comfortable headroom, shoulders,
    // crossed arms and upper torso; exclude the chair and lower body.
    CGRect editorialCrop = CGRectMake(150, 50, 820, 1220);
    CGImageRef cropped = CGImageCreateWithImageInRect(original, editorialCrop);
    CGImageRelease(original);
    if (cropped == NULL) {
      fail(@"Could not crop the source portrait.");
    }

    size_t width = CGImageGetWidth(cropped);
    size_t height = CGImageGetHeight(cropped);
    size_t bytesPerRow = width * 4;
    uint8_t *pixels = calloc(height, bytesPerRow);
    CGColorSpaceRef colourSpace = CGColorSpaceCreateWithName(kCGColorSpaceSRGB);
    CGContextRef context = CGBitmapContextCreate(
      pixels,
      width,
      height,
      8,
      bytesPerRow,
      colourSpace,
      kCGImageAlphaPremultipliedLast | kCGBitmapByteOrder32Big
    );
    CGColorSpaceRelease(colourSpace);
    if (context == NULL) {
      CGImageRelease(cropped);
      free(pixels);
      fail(@"Could not create the portrait extraction buffer.");
    }

    CGContextDrawImage(context, CGRectMake(0, 0, width, height), cropped);
    CGImageRelease(cropped);

    // The original backdrop occupies a narrow neutral-grey range. Pixels with
    // colour or meaningful luminance separation are retained; only that source-
    // specific grey range is removed. Edge colour is decontaminated before
    // premultiplication so the transparent PNG does not carry a grey fringe.
    for (size_t y = 0; y < height; y++) {
      for (size_t x = 0; x < width; x++) {
        uint8_t *pixel = pixels + y * bytesPerRow + x * 4;
        CGFloat red = pixel[0] / 255.0;
        CGFloat green = pixel[1] / 255.0;
        CGFloat blue = pixel[2] / 255.0;
        CGFloat high = fmax(red, fmax(green, blue));
        CGFloat low = fmin(red, fmin(green, blue));
        CGFloat chroma = high - low;
        CGFloat luma = red * 0.2126 + green * 0.7152 + blue * 0.0722;
        CGFloat outsideGrey = fmax(0.0, fmax(0.255 - luma, luma - 0.405));
        CGFloat evidence = chroma * 2.4 + outsideGrey * 1.45;
        CGFloat alpha = smoothstep(0.045, 0.140, evidence);
        alpha = smoothstep(0.12, 0.88, alpha);

        pixel[0] = (uint8_t)lrint(red * alpha * 255.0);
        pixel[1] = (uint8_t)lrint(green * alpha * 255.0);
        pixel[2] = (uint8_t)lrint(blue * alpha * 255.0);
        pixel[3] = (uint8_t)lrint(alpha * 255.0);
      }
    }

    CGImageRef output = CGBitmapContextCreateImage(context);
    CGContextRelease(context);
    free(pixels);
    if (output == NULL) {
      fail(@"Could not render the portrait cutout.");
    }

    CGImageDestinationRef destination = CGImageDestinationCreateWithURL(
      (__bridge CFURLRef)outputURL,
      CFSTR("public.png"),
      1,
      NULL
    );
    if (destination == NULL) {
      CGImageRelease(output);
      fail(@"Could not create the cutout PNG destination.");
    }
    CGImageDestinationAddImage(destination, output, NULL);
    BOOL wroteFile = CGImageDestinationFinalize(destination);
    CFRelease(destination);
    CGImageRelease(output);
    if (!wroteFile) {
      fail(@"Could not write the cutout PNG.");
    }
  }
  return 0;
}
