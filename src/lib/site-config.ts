const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const normalizedSiteUrl = configuredSiteUrl?.replace(/\/+$/, "");

export const siteOrigin = normalizedSiteUrl
	? new URL(normalizedSiteUrl)
	: undefined;