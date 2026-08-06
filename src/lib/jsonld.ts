/**
 * JSON-LD builders — prefer a single @graph with stable @id links.
 */
import { site } from "../data/site";
import { buildCanonical, buildImageUrl, type JsonLd } from "./seo";

export type BreadcrumbItem = {
  /** Visible name */
  name: string;
  /** Site path e.g. /guides/ or absolute URL */
  path: string;
};

function originFrom(url: string): string {
  try {
    return new URL(url).origin;
  } catch {
    return site.url.replace(/\/$/, "");
  }
}

function absUrl(pathOrUrl: string, origin: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    const u = new URL(pathOrUrl);
    return `${u.origin}${u.pathname}`;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return new URL(path, `${origin}/`).href;
}

/** Stable entity IDs for the site */
export function siteIds(origin = site.url.replace(/\/$/, "")) {
  return {
    organization: `${origin}/#organization`,
    website: `${origin}/#website`,
    project: `${origin}/#project`,
  } as const;
}

export function organizationNode(origin = site.url.replace(/\/$/, "")): JsonLd {
  const ids = siteIds(origin);
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: site.brand,
    alternateName: site.name,
    url: `${origin}/`,
    email: site.email,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: absUrl("/favicon.svg", origin),
    },
  };
}

/**
 * WebSite + SearchAction (platforms listing).
 */
export function websiteNode(origin = site.url.replace(/\/$/, "")): JsonLd {
  const ids = siteIds(origin);
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: site.name,
    alternateName: site.brand,
    url: `${origin}/`,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ids.organization },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${origin}/platforms/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Optional Project node — Zoetic AI as the directory project.
 */
export function projectNode(origin = site.url.replace(/\/$/, "")): JsonLd {
  const ids = siteIds(origin);
  return {
    "@type": "Project",
    "@id": ids.project,
    name: `${site.brand} Agent Platforms Directory`,
    alternateName: site.name,
    description: site.description,
    url: `${origin}/`,
    creator: { "@id": ids.organization },
    parentOrganization: { "@id": ids.organization },
  };
}

export function breadcrumbListNode(
  items: BreadcrumbItem[],
  pageUrl: string,
  origin = originFrom(pageUrl),
): JsonLd {
  const listId = `${pageUrl.replace(/\/$/, "")}/#breadcrumb`;
  return {
    "@type": "BreadcrumbList",
    "@id": listId,
    itemListElement: items.map((item, index) => {
      const itemUrl = absUrl(item.path, origin);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

export function webPageNode(options: {
  pageUrl: string;
  name: string;
  description: string;
  origin?: string;
  /** @id of BreadcrumbList if present */
  breadcrumbId?: string;
  dateModified?: string;
  imageUrl?: string;
}): JsonLd {
  const origin = options.origin ?? originFrom(options.pageUrl);
  const ids = siteIds(origin);
  const pageId = options.pageUrl.replace(/\/$/, "") || `${origin}/`;

  const node: JsonLd = {
    "@type": "WebPage",
    "@id": `${pageId}/#webpage`,
    url: options.pageUrl.endsWith("/") ? options.pageUrl : `${options.pageUrl}/`,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.project },
    publisher: { "@id": ids.organization },
    inLanguage: "en",
  };

  if (options.breadcrumbId) {
    node.breadcrumb = { "@id": options.breadcrumbId };
  }
  if (options.dateModified) {
    node.dateModified = options.dateModified;
  }
  if (options.imageUrl) {
    node.primaryImageOfPage = {
      "@type": "ImageObject",
      url: options.imageUrl,
    };
  }

  return node;
}

export function articleNode(options: {
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  origin?: string;
  breadcrumbId?: string;
}): JsonLd {
  const origin = options.origin ?? originFrom(options.pageUrl);
  const ids = siteIds(origin);
  const pageId = options.pageUrl.replace(/\/$/, "");

  const node: JsonLd = {
    "@type": "Article",
    "@id": `${pageId}/#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageId}/#webpage`,
    },
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: { "@id": ids.organization },
    publisher: { "@id": ids.organization },
    isPartOf: { "@id": ids.website },
    inLanguage: "en",
  };

  if (options.imageUrl) {
    node.image = [options.imageUrl];
  }
  if (options.breadcrumbId) {
    node.breadcrumb = { "@id": options.breadcrumbId };
  }

  return node;
}

/**
 * Single JSON-LD document with @graph (preferred output).
 */
export function buildJsonLdGraph(nodes: JsonLd[]): JsonLd {
  // Drop empties; ensure no nested @context on graph nodes
  const cleaned = nodes
    .filter(Boolean)
    .map(({ ["@context"]: _c, ...rest }) => rest);
  return {
    "@context": "https://schema.org",
    "@graph": cleaned,
  };
}

/**
 * Sitewide base entities (Organization, WebSite, Project).
 */
export function baseSiteGraph(origin: string): JsonLd[] {
  return [
    organizationNode(origin),
    websiteNode(origin),
    projectNode(origin),
  ];
}

/**
 * Homepage graph: site entities only (WebPage home optional).
 */
export function buildHomeGraph(origin: string): JsonLd {
  const ids = siteIds(origin);
  const homeUrl = `${origin}/`;
  const homePage = webPageNode({
    pageUrl: homeUrl,
    name: `${site.name} — AI Agent Platforms Directory`,
    description: site.description,
    origin,
  });
  // Homepage is the main entity of the WebSite
  return buildJsonLdGraph([
    ...baseSiteGraph(origin),
    {
      ...homePage,
      "@id": `${origin}/#webpage`,
      url: homeUrl,
      name: "AI Agent Platforms Directory",
      isPartOf: { "@id": ids.website },
    },
  ]);
}

export function buildWebPageGraph(options: {
  origin: string;
  pageUrl: string;
  name: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  dateModified?: string;
  imageUrl?: string;
}): JsonLd {
  const pageUrl = options.pageUrl.endsWith("/")
    ? options.pageUrl
    : `${options.pageUrl}/`;
  const crumbs = breadcrumbListNode(
    options.breadcrumbs,
    pageUrl,
    options.origin,
  );
  const breadcrumbId = crumbs["@id"] as string;
  const page = webPageNode({
    pageUrl,
    name: options.name,
    description: options.description,
    origin: options.origin,
    breadcrumbId,
    dateModified: options.dateModified,
    imageUrl: options.imageUrl,
  });
  return buildJsonLdGraph([
    ...baseSiteGraph(options.origin),
    page,
    crumbs,
  ]);
}

export function buildArticleGraph(options: {
  origin: string;
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  breadcrumbs: BreadcrumbItem[];
}): JsonLd {
  const pageUrl = options.pageUrl.endsWith("/")
    ? options.pageUrl
    : `${options.pageUrl}/`;
  const crumbs = breadcrumbListNode(
    options.breadcrumbs,
    pageUrl,
    options.origin,
  );
  const breadcrumbId = crumbs["@id"] as string;
  const page = webPageNode({
    pageUrl,
    name: options.headline,
    description: options.description,
    origin: options.origin,
    breadcrumbId,
    dateModified: options.dateModified ?? options.datePublished,
    imageUrl: options.imageUrl,
  });
  const article = articleNode({
    pageUrl,
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    imageUrl: options.imageUrl,
    origin: options.origin,
    breadcrumbId,
  });
  return buildJsonLdGraph([
    ...baseSiteGraph(options.origin),
    page,
    article,
    crumbs,
  ]);
}

/** Helper for pages that already know their path */
export function pageUrlFromPath(path: string, origin: string): string {
  return buildCanonical(path, { origin });
}

export function resolveImage(
  image: string | undefined,
  origin: string,
): string {
  return buildImageUrl(image, origin);
}
