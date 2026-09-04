import type { PracticeIconKind } from "@/content/site-content";

const paths: Record<PracticeIconKind, React.ReactNode> = {
  // overlapping market curves
  markets: (
    <>
      <path d="M3 17 L9 10 L13 13 L21 5" />
      <path d="M21 5 L21 10 M21 5 L16 5" />
    </>
  ),
  // scales of justice
  competition: (
    <>
      <path d="M12 3 V20" />
      <path d="M7 20 H17" />
      <path d="M4 8 H10 M14 8 H20" />
      <path d="M4 8 L2 13 A3 3 0 0 0 8 13 L6 8" />
      <path d="M18 8 L16 13 A3 3 0 0 0 22 13 L20 8" />
      <path d="M12 3 L18 8 M12 3 L6 8" />
    </>
  ),
  // public building / columns
  tax: (
    <>
      <path d="M3 9 L12 4 L21 9" />
      <path d="M4 9 H20" />
      <path d="M5 9 V19 M9 9 V19 M15 9 V19 M19 9 V19" />
      <path d="M3 19 H21" />
    </>
  ),
  // pickaxe
  minerals: (
    <>
      <path d="M2 12 Q12 1 22 8" />
      <path d="M10 3 L20 22" />
    </>
  ),
  // legislative document with a checkmark clause
  legislation: (
    <>
      <path d="M6 3 H15 L19 7 V21 H6 Z" />
      <path d="M15 3 V7 H19" />
      <path d="M9 12 H15 M9 15 H15 M9 18 H13" />
    </>
  ),
  // globe with an inbound investment arrow
  fdi: (
    <>
      <circle cx="10" cy="13" r="7" />
      <path d="M3 13 H17 M10 6 C7 9 7 17 10 20 M10 6 C13 9 13 17 10 20" />
      <path d="M15 3 L21 3 L21 9" />
      <path d="M21 3 L14 10" />
    </>
  ),
  // leaf with a rising growth line
  esg: (
    <>
      <path d="M6 20 C4 12 8 5 17 4 C17 13 11 18 6 20 Z" />
      <path d="M6 20 C8 15 11 11 17 4" />
      <path d="M3 14 L8 10 L11 12 L15 7" />
    </>
  ),
};

export function PracticeIcon({ kind }: { kind: PracticeIconKind }) {
  return (
    <svg
      className="practice-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[kind]}
    </svg>
  );
}
