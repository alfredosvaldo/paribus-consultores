import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    es: `${siteUrl}/es`,
    en: `${siteUrl}/en`,
    "x-default": `${siteUrl}/es`,
  };

  return ["es", "en"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: locale === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
