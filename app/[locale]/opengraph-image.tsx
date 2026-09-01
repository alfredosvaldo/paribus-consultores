import { ImageResponse } from "next/og";
import { BrandSeal } from "@/components/BrandSeal";
import { isLocale, siteContent } from "@/content/site-content";

export const alt = "paribus";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = siteContent[isLocale(locale) ? locale : "es"];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "62px 72px",
        background: "#26211D",
        color: "#F4F1EA",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <BrandSeal size={46} />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 0.8 }}>paribus</span>
            <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.22em", lineHeight: 1, opacity: 0.72 }}>CONSULTORES</span>
          </div>
        </div>
        <span style={{ color: "rgba(244, 241, 234, 0.72)", fontSize: 17 }}>
          {content.hero.descriptor}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <span style={{ fontSize: 82, fontWeight: 600, lineHeight: 1.03, letterSpacing: "-0.025em" }}>
            {content.hero.title}
          </span>
        </div>
      </div>
    </div>,
    size,
  );
}
