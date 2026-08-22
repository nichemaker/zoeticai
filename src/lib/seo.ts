import { SITE_ORIGIN, site } from "../data/site";

export { SITE_ORIGIN };

/** Indexable contact path — query strings are never part of the canonical. */
export const CONTACT_PATH = "/contact/";

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
 * Trailing-slash paths to match `trailingSlash: 'always'`.
 * File-like paths (robots.txt, sitemap.xml) are left unchanged.
 */
export function normalizeCanonicalPath(pathname: string): string {
  const cleaned = cleanUrlPath(pathname).trim() || "/";
  const path = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  if (path === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Canonical origin for tags, schema, and absolute URLs.
 * Always `SITE_ORIGIN` — never `Astro.url` / request host, which can be http.
 */
export function getSiteOrigin(_astroSite?: URL | undefined): string {
  return SITE_ORIGIN;
}

/**
 * Build an https://www.zoeticai.com canonical with no query or hash.
 * Absolute overrides keep their path only; host and protocol are replaced.
 */
export function buildCanonical(
  pathname: string,
  options?: {
    override?: string;
    /** Ignored — canonicals always use SITE_ORIGIN. */
    origin?: string;
  },
): string {
  const origin = SITE_ORIGIN;
  let path: string;

  if (options?.override) {
    const cleaned = cleanUrlPath(options.override);
    if (/^https?:\/\//i.test(cleaned)) {
      path = new URL(cleaned).pathname;
    } else {
      path = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
    }
  } else {
    path = cleanUrlPath(pathname || "/");
  }

  const href = new URL(normalizeCanonicalPath(path), `${origin}/`).href;
  return href.replace(/^http:\/\//i, "https://");
}

/**
 * Contact href that keeps subject prefill without an indexable query URL.
 * Hash fragments are not distinct pages; `/contact/?subject=` is.
 */
export function contactHref(subject?: string): string {
  const trimmed = subject?.trim();
  if (!trimmed) return CONTACT_PATH;
  return `${CONTACT_PATH}#${new URLSearchParams({ subject: trimmed }).toString()}`;
}

/**
 * Absolute URL for OG/Twitter images.
 */
export function buildImageUrl(
  image: string | undefined,
  _origin: string = SITE_ORIGIN,
): string {
  const path = image ?? site.defaultOgImage;
  if (/^https?:\/\//i.test(path)) {
    const u = new URL(path);
    if (u.hostname === "www.zoeticai.com" || u.hostname === "zoeticai.com") {
      u.protocol = "https:";
      u.hostname = "www.zoeticai.com";
      return u.href;
    }
    if (u.protocol === "http:") {
      u.protocol = "https:";
      return u.href;
    }
    return path;
  }
  return new URL(
    path.startsWith("/") ? path : `/${path}`,
    `${SITE_ORIGIN}/`,
  ).href;
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
