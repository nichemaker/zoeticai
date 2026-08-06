import { site } from "../data/site";

/** Open Graph / document type for social previews */
export type SeoOgType = "website" | "article" | "profile";

export type JsonLd = Record<string, unknown>;

export type SeoInput = {
  /** Page title (site name appended unless titleAbsolute) */
  title: string;
  description?: string;
  /**
   * Canonical path (`/about/`) or absolute URL.
   * Query strings and hashes are always stripped.
   */
  canonical?: string;
  /** Site-relative path or absolute image URL */
  image?: string;
  type?: SeoOgType;
  /** noindex, nofollow, or both */
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  /** One or more JSON-LD objects */
  jsonLd?: JsonLd | JsonLd[];
  /** Use `title` exactly as provided (no site suffix) */
  titleAbsolute?: boolean;
};

/**
 * Strip query/hash and normalize for canonical use.
 */
export function cleanUrlPath(urlOrPath: string): string {
  const withoutHash = urlOrPath.split("#")[0] ?? urlOrPath;
  const withoutQuery = withoutHash.split("?")[0] ?? withoutHash;
  return withoutQuery;
}

/**
 * Resolve site origin from Astro.site or config fallback.
 */
export function getSiteOrigin(astroSite?: URL | undefined): string {
  if (astroSite) return astroSite.origin;
  return site.url.replace(/\/$/, "");
}

/**
 * Build absolute canonical URL with no query parameters.
 */
export function buildCanonical(
  pathname: string,
  options?: {
    override?: string;
    origin?: string;
  },
): string {
  const origin = (options?.origin ?? site.url).replace(/\/$/, "");

  if (options?.override) {
    const cleaned = cleanUrlPath(options.override);
    if (/^https?:\/\//i.test(cleaned)) {
      const u = new URL(cleaned);
      return `${u.origin}${u.pathname}`;
    }
    const path = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
    return new URL(path, `${origin}/`).href;
  }

  const path = cleanUrlPath(pathname || "/");
  return new URL(path.startsWith("/") ? path : `/${path}`, `${origin}/`).href;
}

/**
 * Absolute URL for OG/Twitter images.
 */
export function buildImageUrl(
  image: string | undefined,
  origin: string,
): string {
  const path = image ?? site.defaultOgImage;
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path.startsWith("/") ? path : `/${path}`, `${origin}/`).href;
}

/**
 * Document title with optional site name suffix.
 */
export function buildDocumentTitle(
  title: string,
  titleAbsolute = false,
): string {
  if (titleAbsolute) return title;
  if (title === site.name || title.includes(site.name)) return title;
  return `${title} ${site.titleSeparator} ${site.name}`;
}

/**
 * Normalize robots content.
 */
export function buildRobotsContent(robots?: SeoInput["robots"]): string {
  const index = robots?.index !== false;
  const follow = robots?.follow !== false;
  return `${index ? "index" : "noindex"}, ${follow ? "follow" : "nofollow"}`;
}

export function asJsonLdArray(
  jsonLd: JsonLd | JsonLd[] | undefined,
): JsonLd[] {
  if (!jsonLd) return [];
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd];
}
