const fallbackUrl = "http://localhost:3000";

function getConfiguredUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

export const configuredSiteUrl = getConfiguredUrl();
export const siteUrl = configuredSiteUrl ?? fallbackUrl;
export const isIndexable = Boolean(configuredSiteUrl);
