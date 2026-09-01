import { BrandSeal } from "@/components/BrandSeal";

type BrandLockupProps = {
  showDescriptor?: boolean;
};

export function BrandLockup({ showDescriptor = true }: BrandLockupProps) {
  return (
    <span className="brand-lockup">
      <BrandSeal className="brand-seal" />
      <span className="brand-lockup-copy">
        <span className="brand-wordmark">paribus</span>
        {showDescriptor ? <span className="brand-lockup-descriptor">consultores</span> : null}
      </span>
    </span>
  );
}
