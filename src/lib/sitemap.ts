/**
 * Helpers for @astrojs/sitemap serialize: lastmod, changefreq, priority.
 */
import { SITE_ORIGIN } from "../data/site";
import { tools } from "../data/tools";
import { latestGuides } from "../data/guides";
import { categories } from "../data/categories";

export type SitemapMeta = {
  lastmod: Date;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

/** Build-time fallback when content has no explicit date */
const BUILD_DATE = new Date();

function parseDate(isoDate: string): Date {
  // YYYY-MM-DD → UTC midnight
  const d = new Date(`${isoDate}T00:00:00.000Z`);
  return Number.isNaN(d.getTime()) ? BUILD_DATE : d;
}

function pathnameOf(pageUrl: string): string {
  try {
    return new URL(pageUrl).pathname;
  } catch {
    return pageUrl;
  }
}

/**
 * Map a full page URL to sitemap metadata.
 */
export function getSitemapMeta(pageUrl: string): SitemapMeta {
  const path = pathnameOf(pageUrl).replace(/\/$/, "") || "/";

  // Tool detail — use editorial lastUpdated
  const toolMatch = path.match(/^\/tools\/([^/]+)$/);
  if (toolMatch) {
    const tool = tools.find((t) => t.slug === toolMatch[1]);
    return {
      lastmod: tool ? parseDate(tool.lastUpdated) : BUILD_DATE,
      changefreq: "weekly",
      priority: 0.85,
    };
  }

  // Guide article — use guide date; topic hubs get higher priority
  // Supports nested slugs (e.g. /guides/claude-code/pricing/)
  const guideMatch = path.match(/^\/guides\/(.+)$/);
  if (guideMatch && guideMatch[1]) {
    const guideSlug = guideMatch[1];
    const guide = latestGuides.find((g) => g.slug === guideSlug);
    const hubSlugs = new Set([
      "ai-agent-platforms-guide",
      "best-ai-coding-agents-2026",
    ]);
    const isHub = hubSlugs.has(guideSlug);
    return {
      lastmod: guide ? parseDate(guide.date) : BUILD_DATE,
      changefreq: isHub ? "weekly" : "monthly",
      priority: isHub ? 0.92 : 0.8,
    };
  }

  // Category detail
  const catMatch = path.match(/^\/categories\/([^/]+)$/);
  if (catMatch) {
    const known = categories.some((c) => c.slug === catMatch[1]);
    return {
      lastmod: BUILD_DATE,
      changefreq: "weekly",
      priority: known ? 0.85 : 0.5,
    };
  }

  // Key hubs
  const hubs: Record<string, SitemapMeta> = {
    "/": { lastmod: BUILD_DATE, changefreq: "daily", priority: 1 },
    "/platforms": {
      lastmod: BUILD_DATE,
      changefreq: "daily",
      priority: 0.95,
    },
    "/categories": {
      lastmod: BUILD_DATE,
      changefreq: "weekly",
      priority: 0.9,
    },
    "/guides": {
      lastmod: BUILD_DATE,
      changefreq: "weekly",
      priority: 0.85,
    },
    "/methodology": {
      lastmod: BUILD_DATE,
      changefreq: "monthly",
      priority: 0.75,
    },
    "/about": {
      lastmod: BUILD_DATE,
      changefreq: "monthly",
      priority: 0.7,
    },
    "/contact": {
      lastmod: BUILD_DATE,
      changefreq: "yearly",
      priority: 0.6,
    },
    "/privacy": {
      lastmod: BUILD_DATE,
      changefreq: "yearly",
      priority: 0.3,
    },
    "/terms": {
      lastmod: BUILD_DATE,
      changefreq: "yearly",
      priority: 0.3,
    },
  };

  return (
    hubs[path] ?? {
      lastmod: BUILD_DATE,
      changefreq: "monthly",
      priority: 0.5,
    }
  );
}

/** Pages that should not appear in the sitemap */
export function shouldIncludeInSitemap(pageUrl: string): boolean {
  // Sitemap locs must be the HTTPS www origin — never http:// or a preview host
  if (!pageUrl.startsWith(SITE_ORIGIN)) return false;
  const path = pathnameOf(pageUrl);
  if (path.includes("404")) return false;
  // No query-string URLs should appear; @astrojs/sitemap uses clean paths
  if (path.includes("?")) return false;
  return true;
}
