/** Shared site config for layout, nav, schema, and SEO defaults. */

/**
 * Single canonical origin for every absolute URL this site emits
 * (canonical, og:url, JSON-LD, sitemap, robots). HTTPS + www only.
 */
export const SITE_ORIGIN = "https://www.zoeticai.com" as const;

export const site = {
  name: "AI Directory",
  /** Brand used in long-form and About copy */
  brand: "Zoetic AI",
  tagline: "Discover, compare, and choose AI tools and agents.",
  description:
    "A curated directory of AI agents, tools, and platforms — browse categories, compare options, and find the right fit.",
  /** Canonical origin — keep aligned with astro.config `site` and deploy host */
  url: SITE_ORIGIN,
  email: "hello@zoeticai.com",
  locale: "en_US",
  themeColor: "#6657f5",
  /** Default social preview (site-relative path) */
  defaultOgImage: "/images/guides/evaluate-ai-agent-platforms-hero.jpg",
  /** Appended to page titles unless titleAbsolute */
  titleSeparator: "·",
  cta: {
    label: "Need production AI agents built?",
    href: "/contact/",
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const primaryNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/platforms/", label: "Platforms" },
  { href: "/categories/", label: "Categories" },
  { href: "/guides/", label: "Guides" },
];

export type FooterGroup = {
  heading: string;
  links: NavLink[];
};

/** Footer link columns — compact structure matching a clean directory layout */
export const footerGroups: FooterGroup[] = [
  {
    heading: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/platforms/", label: "Platforms" },
      { href: "/categories/", label: "Categories" },
      { href: "/guides/", label: "Guides" },
      { href: "/methodology/", label: "Methodology" },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        href: "/guides/ai-agent-platforms-guide/",
        label: "Platforms Guide 2026",
      },
      {
        href: "/guides/best-ai-coding-agents-2026/",
        label: "Coding agents 2026",
      },
      {
        href: "/guides/how-to-evaluate-ai-agent-platforms/",
        label: "Evaluation guide",
      },
      {
        href: "/guides/ai-agent-platforms-tco-2026/",
        label: "Pricing index",
      },
      {
        href: "/guides/best-ai-agent-platforms-for-smbs-2026/",
        label: "Best for SMBs",
      },
      { href: "/about/", label: "About" },
      { href: "/contact/", label: "Contact" },
    ],
  },
];

/** Legal column links */
export const footerLegal: NavLink[] = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Use" },
  { href: "/contact/", label: "Contact" },
  { href: "/about/", label: "About" },
];
