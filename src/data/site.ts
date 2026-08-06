/** Shared site config for layout, nav, schema, and SEO defaults. */

export const site = {
  name: "AI Directory",
  /** Brand used in long-form and About copy */
  brand: "Zoetic AI",
  tagline: "Discover, compare, and choose AI tools and agents.",
  description:
    "A curated directory of AI agents, tools, and platforms — browse categories, compare options, and find the right fit.",
  /** Canonical origin — keep aligned with astro.config `site` and deploy host */
  url: "https://www.zoeticai.com",
  email: "hello@zoeticai.com",
  locale: "en_US",
  themeColor: "#4f46e5",
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

export const footerGroups: FooterGroup[] = [
  {
    heading: "Explore",
    links: [
      { href: "/platforms/", label: "All platforms" },
      { href: "/categories/", label: "Categories" },
      { href: "/guides/", label: "Guides" },
      { href: "/methodology/", label: "Methodology" },
    ],
  },
  {
    heading: "Learn",
    links: [
      {
        href: "/guides/how-to-evaluate-ai-agent-platforms/",
        label: "Evaluation guide",
      },
      { href: "/guides/langgraph-vs-crewai/", label: "LangGraph vs CrewAI" },
      {
        href: "/guides/claude-code-vs-cursor/",
        label: "Claude Code vs Cursor",
      },
      {
        href: "/guides/copilot-studio-vs-agentforce/",
        label: "Copilot Studio vs Agentforce",
      },
      {
        href: "/guides/frameworks-vs-enterprise-platforms/",
        label: "Frameworks vs enterprise",
      },
      {
        href: "/guides/mcp-and-tool-calling-explained/",
        label: "MCP & tool calling",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about/", label: "About" },
      { href: "/contact/", label: "Contact" },
      { href: "/methodology/", label: "Methodology" },
    ],
  },
];

/** Always shown in the footer legal row */
export const footerLegal: NavLink[] = [
  { href: "/about/", label: "About" },
  { href: "/methodology/", label: "Methodology" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
];
