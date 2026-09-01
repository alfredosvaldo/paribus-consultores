type BrandSealProps = {
  className?: string;
  size?: number;
};

export function BrandSeal({ className, size }: BrandSealProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.4" y="3.4" width="33.2" height="33.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="9.2" y1="31.1" x2="31.4" y2="9.4" stroke="currentColor" strokeWidth="2.15" />
      <circle cx="10.9" cy="25.4" r="1.4" fill="currentColor" />
      <circle cx="11.7" cy="31.8" r="1.4" fill="currentColor" />
      <circle cx="16.7" cy="18.5" r="1.4" fill="currentColor" />
      <circle cx="17" cy="25" r="1.4" fill="currentColor" />
      <circle cx="23.6" cy="19.4" r="1.4" fill="currentColor" />
      <circle cx="24.3" cy="14.2" r="1.4" fill="currentColor" />
      <circle cx="30.7" cy="14.2" r="1.4" fill="currentColor" />
    </svg>
  );
}
