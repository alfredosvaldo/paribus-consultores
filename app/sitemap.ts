import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    es: `${siteUrl}/es`,
    en: `${siteUrl}/en`,
    "x-default": `${siteUrl}/es`,
  };

  return ["es", "en"].flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? 1 : 0.9,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/${locale}/news`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: { languages: { es: `${siteUrl}/es/news`, en: `${siteUrl}/en/news` } },
    },
  ]);
}
