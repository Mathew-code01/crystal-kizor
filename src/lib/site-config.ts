const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteOrigin = configuredSiteUrl
	? new URL(configuredSiteUrl)
	: undefined;