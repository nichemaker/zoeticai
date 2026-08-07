import type { Tool, ToolCategory } from "../types/tool";

/** Guide listings for homepage, hubs, and related-reading blocks. */
export type GuidePreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

/**
 * Canonical guide list — newest first (by date, then editorial priority).
 * Homepage “Latest guides” and /guides/ both consume this order.
 */
export const latestGuides: GuidePreview[] = [
  {
    slug: "ai-agent-platforms-guide",
    title:
      "AI Agent Platforms Guide 2026 — How to Choose, Compare & Evaluate",
    excerpt:
      "Definitive hub for AI agent platforms: market lanes, evaluation criteria, decision paths, and every comparison and TCO deep-dive in this cluster.",
    category: "Pillar",
    readTime: "18 min",
    date: "2026-08-01",
  },
  {
    slug: "mcp-server-implementation",
    title: "How to Build and Run MCP Servers (Implementation Guide)",
    excerpt:
      "Developer-focused MCP server guide: core concepts, SDKs, a minimal build walkthrough, common patterns, production concerns, and when function calling is enough.",
    category: "Technical",
    readTime: "14 min",
    date: "2026-08-07",
  },
  {
    slug: "best-ai-coding-agents-2026",
    title: "Best AI Coding Agents in 2026",
    excerpt:
      "Developer-focused roundup: IDE, CLI, cloud, and open-source coding agents — ranked picks, comparison table, and who should use what.",
    category: "Roundup",
    readTime: "14 min",
    date: "2026-07-28",
  },
  {
    slug: "ai-agent-platforms-tco-2026",
    title:
      "What AI Agent Platforms Actually Cost in 2026 (A Practical TCO Guide)",
    excerpt:
      "Full cost stack beyond list price — meters, models, people, hidden costs, and rough TCO reality by company size.",
    category: "Buying",
    readTime: "13 min",
    date: "2026-07-22",
  },
  {
    slug: "lindy-vs-relevance-ai-vs-dust",
    title:
      "Lindy vs Relevance AI vs Dust in 2026: Which No-Code AI Agent Platform Should You Choose?",
    excerpt:
      "No-code agent platforms compared — personal productivity vs multi-agent workforces vs team knowledge, with pricing and a clear pick framework.",
    category: "Comparison",
    readTime: "14 min",
    date: "2026-07-15",
  },
  {
    slug: "best-ai-agent-platforms-for-smbs-2026",
    title: "Best AI Agent Platforms for SMBs and Startups in 2026",
    excerpt:
      "Founder-friendly shortlist: SMB evaluation criteria, no-code vs technical picks, comparison table, pricing reality, and a simple decision framework.",
    category: "Roundup",
    readTime: "14 min",
    date: "2026-07-08",
  },
  {
    slug: "n8n-vs-make-vs-zapier-agents",
    title:
      "n8n vs Make vs Zapier Agents in 2026: Which Is Best for AI Agents?",
    excerpt:
      "Practical comparison for real AI agents and automations — capabilities, ease of use, integrations, self-hosting, pricing, and TCO.",
    category: "Comparison",
    readTime: "15 min",
    date: "2026-07-01",
  },
  {
    slug: "best-open-source-ai-agent-frameworks-2026",
    title: "Best Open-Source AI Agent Frameworks in 2026",
    excerpt:
      "Ranked open-source agent frameworks for control, multi-agent, state, production readiness — plus when OSS beats enterprise suites.",
    category: "Roundup",
    readTime: "14 min",
    date: "2026-05-20",
  },
  {
    slug: "copilot-studio-vs-agentforce",
    title:
      "Microsoft Copilot Studio vs Salesforce Agentforce in 2026: Which Enterprise Agent Platform Should You Choose?",
    excerpt:
      "Enterprise agent platforms compared — grounding, governance, lock-in, pricing/TCO, and when to pick Microsoft vs Salesforce.",
    category: "Comparison",
    readTime: "15 min",
    date: "2026-05-12",
  },
  {
    slug: "claude-code-vs-cursor",
    title: "Claude Code vs Cursor in 2026: Which AI Coding Agent Should You Use?",
    excerpt:
      "IDE-first vs terminal-first coding agents — workflow, autonomy, refactors, ecosystem, pricing, and when to use both.",
    category: "Comparison",
    readTime: "13 min",
    date: "2026-05-05",
  },
  {
    slug: "langgraph-vs-crewai",
    title:
      "LangGraph vs CrewAI in 2026: Which Multi-Agent Framework Should You Choose?",
    excerpt:
      "Graph-first vs role-first multi-agent frameworks — architecture, state, HITL, DX, and when to pick each.",
    category: "Comparison",
    readTime: "14 min",
    date: "2026-04-28",
  },
  {
    slug: "mcp-and-tool-calling-explained",
    title: "MCP and Tool Calling Explained — Why It Matters for AI Agents",
    excerpt:
      "What Model Context Protocol means for agent interoperability, and which platforms support it today.",
    category: "Technical",
    readTime: "11 min",
    date: "2026-04-15",
  },
  {
    slug: "frameworks-vs-enterprise-platforms",
    title: "Frameworks vs Enterprise AI Agent Platforms — When to Choose Which",
    excerpt:
      "When to build on LangGraph or CrewAI — and when a managed enterprise stack is the safer bet.",
    category: "Strategy",
    readTime: "10 min",
    date: "2026-04-08",
  },
  {
    slug: "how-to-evaluate-ai-agent-platforms",
    title: "How to Evaluate AI Agent Platforms in 2026",
    excerpt:
      "A practical checklist for capability, governance, integrations, and total cost before you pilot.",
    category: "Buying",
    readTime: "12 min",
    date: "2026-04-01",
  },
];

/** How many cards to show in homepage “Latest guides”. */
export const HOMEPAGE_LATEST_GUIDES_COUNT = 6;

/** Newest guides for homepage / featured strips (preserves latestGuides order). */
export function getLatestGuides(limit = HOMEPAGE_LATEST_GUIDES_COUNT): GuidePreview[] {
  return latestGuides.slice(0, limit);
}

export function guideHref(slug: string): string {
  return `/guides/${slug}/`;
}

export function getGuideBySlug(slug: string): GuidePreview | undefined {
  return latestGuides.find((g) => g.slug === slug);
}

/** Resolve slugs in order, dropping missing entries. */
function resolveGuideSlugs(slugs: string[], exclude?: string): GuidePreview[] {
  return slugs
    .filter((s) => s !== exclude)
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is GuidePreview => Boolean(g));
}

/** Head-to-head comparison guides used for cross-linking */
export const comparisonGuideSlugs = [
  "langgraph-vs-crewai",
  "claude-code-vs-cursor",
  "copilot-studio-vs-agentforce",
  "n8n-vs-make-vs-zapier-agents",
  "lindy-vs-relevance-ai-vs-dust",
] as const;

export type ComparisonGuideSlug = (typeof comparisonGuideSlugs)[number];

/** Short anchor text for SEO-friendly internal links */
export const comparisonLinkLabels: Record<ComparisonGuideSlug, string> = {
  "langgraph-vs-crewai": "LangGraph vs CrewAI comparison",
  "claude-code-vs-cursor": "Claude Code vs Cursor comparison",
  "copilot-studio-vs-agentforce":
    "Copilot Studio vs Agentforce comparison",
  "n8n-vs-make-vs-zapier-agents": "n8n vs Make vs Zapier Agents comparison",
  "lindy-vs-relevance-ai-vs-dust": "Lindy vs Relevance AI vs Dust comparison",
};

export function isComparisonGuide(slug: string): slug is ComparisonGuideSlug {
  return (comparisonGuideSlugs as readonly string[]).includes(slug);
}

export function comparisonLinkLabel(slug: string): string {
  if (isComparisonGuide(slug)) return comparisonLinkLabels[slug];
  return getGuideBySlug(slug)?.title ?? slug;
}

/** Short labels for long technical guides in hub / related lists. */
const shortGuideLabels: Record<string, string> = {
  "mcp-and-tool-calling-explained": "MCP and tool calling explained",
  "mcp-server-implementation": "How to build and run MCP servers",
};

/** Display title for related-link cards (shorter labels for comparisons). */
export function guideLinkLabel(slug: string): string {
  if (isComparisonGuide(slug)) return comparisonLinkLabels[slug];
  if (shortGuideLabels[slug]) return shortGuideLabels[slug];
  return getGuideBySlug(slug)?.title ?? slug;
}

/** Other head-to-head guides (excludes current), newest first via latestGuides. */
export function getRelatedComparisons(currentSlug: string): GuidePreview[] {
  return latestGuides.filter(
    (g) => isComparisonGuide(g.slug) && g.slug !== currentSlug,
  );
}

/**
 * Contextual related guides per article — newest high-signal pieces first,
 * only where they make sense. Used by RelatedComparisons + GuideExplore.
 * Hub pillar pages are listed first on their spokes.
 */
const relatedGuidesBySlug: Record<string, string[]> = {
  "ai-agent-platforms-guide": [
    "how-to-evaluate-ai-agent-platforms",
    "ai-agent-platforms-tco-2026",
    "frameworks-vs-enterprise-platforms",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
    "langgraph-vs-crewai",
    "copilot-studio-vs-agentforce",
    "n8n-vs-make-vs-zapier-agents",
    "lindy-vs-relevance-ai-vs-dust",
    "best-ai-agent-platforms-for-smbs-2026",
    "best-open-source-ai-agent-frameworks-2026",
    "best-ai-coding-agents-2026",
  ],
  "langgraph-vs-crewai": [
    "ai-agent-platforms-guide",
    "best-open-source-ai-agent-frameworks-2026",
    "ai-agent-platforms-tco-2026",
    "best-ai-agent-platforms-for-smbs-2026",
    "frameworks-vs-enterprise-platforms",
    "how-to-evaluate-ai-agent-platforms",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
  ],
  "claude-code-vs-cursor": [
    "best-ai-coding-agents-2026",
    "ai-agent-platforms-guide",
    "ai-agent-platforms-tco-2026",
    "how-to-evaluate-ai-agent-platforms",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
  ],
  "copilot-studio-vs-agentforce": [
    "ai-agent-platforms-guide",
    "ai-agent-platforms-tco-2026",
    "frameworks-vs-enterprise-platforms",
    "how-to-evaluate-ai-agent-platforms",
    "best-ai-agent-platforms-for-smbs-2026",
  ],
  "n8n-vs-make-vs-zapier-agents": [
    "ai-agent-platforms-guide",
    "lindy-vs-relevance-ai-vs-dust",
    "best-ai-agent-platforms-for-smbs-2026",
    "ai-agent-platforms-tco-2026",
    "how-to-evaluate-ai-agent-platforms",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
  ],
  "lindy-vs-relevance-ai-vs-dust": [
    "ai-agent-platforms-guide",
    "n8n-vs-make-vs-zapier-agents",
    "best-ai-agent-platforms-for-smbs-2026",
    "ai-agent-platforms-tco-2026",
    "how-to-evaluate-ai-agent-platforms",
  ],
  "how-to-evaluate-ai-agent-platforms": [
    "ai-agent-platforms-guide",
    "ai-agent-platforms-tco-2026",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
    "best-ai-agent-platforms-for-smbs-2026",
    "best-ai-coding-agents-2026",
    "lindy-vs-relevance-ai-vs-dust",
    "n8n-vs-make-vs-zapier-agents",
    "frameworks-vs-enterprise-platforms",
    "langgraph-vs-crewai",
    "claude-code-vs-cursor",
    "copilot-studio-vs-agentforce",
  ],
  "frameworks-vs-enterprise-platforms": [
    "ai-agent-platforms-guide",
    "langgraph-vs-crewai",
    "copilot-studio-vs-agentforce",
    "best-open-source-ai-agent-frameworks-2026",
    "ai-agent-platforms-tco-2026",
    "best-ai-agent-platforms-for-smbs-2026",
    "how-to-evaluate-ai-agent-platforms",
    "mcp-and-tool-calling-explained",
  ],
  "mcp-and-tool-calling-explained": [
    "mcp-server-implementation",
    "ai-agent-platforms-guide",
    "best-ai-coding-agents-2026",
    "best-open-source-ai-agent-frameworks-2026",
    "how-to-evaluate-ai-agent-platforms",
    "langgraph-vs-crewai",
  ],
  "mcp-server-implementation": [
    "mcp-and-tool-calling-explained",
    "ai-agent-platforms-guide",
    "best-ai-coding-agents-2026",
    "best-open-source-ai-agent-frameworks-2026",
    "how-to-evaluate-ai-agent-platforms",
    "claude-code-vs-cursor",
    "langgraph-vs-crewai",
  ],
  "best-open-source-ai-agent-frameworks-2026": [
    "ai-agent-platforms-guide",
    "langgraph-vs-crewai",
    "ai-agent-platforms-tco-2026",
    "frameworks-vs-enterprise-platforms",
    "best-ai-agent-platforms-for-smbs-2026",
    "how-to-evaluate-ai-agent-platforms",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
  ],
  "best-ai-coding-agents-2026": [
    "ai-agent-platforms-guide",
    "claude-code-vs-cursor",
    "ai-agent-platforms-tco-2026",
    "mcp-and-tool-calling-explained",
    "mcp-server-implementation",
    "how-to-evaluate-ai-agent-platforms",
  ],
  "ai-agent-platforms-tco-2026": [
    "ai-agent-platforms-guide",
    "how-to-evaluate-ai-agent-platforms",
    "best-ai-agent-platforms-for-smbs-2026",
    "n8n-vs-make-vs-zapier-agents",
    "lindy-vs-relevance-ai-vs-dust",
    "best-ai-coding-agents-2026",
    "copilot-studio-vs-agentforce",
  ],
  "best-ai-agent-platforms-for-smbs-2026": [
    "ai-agent-platforms-guide",
    "n8n-vs-make-vs-zapier-agents",
    "lindy-vs-relevance-ai-vs-dust",
    "ai-agent-platforms-tco-2026",
    "how-to-evaluate-ai-agent-platforms",
    "best-ai-coding-agents-2026",
  ],
};

/**
 * Non-comparison related guides for a page (excludes other head-to-heads
 * when those are already listed under Related comparisons).
 */
export function getRelatedGuidesForArticle(
  currentSlug: string,
  options: { excludeComparisons?: boolean; limit?: number } = {},
): GuidePreview[] {
  const { excludeComparisons = false, limit = 6 } = options;
  const mapped = relatedGuidesBySlug[currentSlug] ?? [
    "ai-agent-platforms-tco-2026",
    "best-ai-agent-platforms-for-smbs-2026",
    "how-to-evaluate-ai-agent-platforms",
  ];
  let guides = resolveGuideSlugs(mapped, currentSlug);
  if (excludeComparisons) {
    guides = guides.filter((g) => !isComparisonGuide(g.slug));
  }
  return guides.slice(0, limit);
}

/**
 * Full related reading list for GuideExplore / RelatedLinks (comparisons + guides).
 */
export function getRelatedReadingForArticle(
  currentSlug: string,
  limit = 8,
): GuidePreview[] {
  const ordered: string[] = [];
  const add = (slug: string) => {
    if (slug !== currentSlug && !ordered.includes(slug)) ordered.push(slug);
  };

  // Prefer mapped related order
  for (const slug of relatedGuidesBySlug[currentSlug] ?? []) add(slug);

  // Then other comparisons (newest first from latestGuides)
  for (const g of latestGuides) {
    if (isComparisonGuide(g.slug)) add(g.slug);
  }

  // Fill with remaining newest guides
  for (const g of latestGuides) add(g.slug);

  return resolveGuideSlugs(ordered, currentSlug).slice(0, limit);
}

/**
 * Primary comparison article for a tool page (if any).
 */
export function getPrimaryComparisonForTool(
  toolSlug: string,
): GuidePreview | undefined {
  const map: Record<string, ComparisonGuideSlug> = {
    langgraph: "langgraph-vs-crewai",
    crewai: "langgraph-vs-crewai",
    "claude-code": "claude-code-vs-cursor",
    cursor: "claude-code-vs-cursor",
    "microsoft-copilot-studio": "copilot-studio-vs-agentforce",
    "salesforce-agentforce": "copilot-studio-vs-agentforce",
    n8n: "n8n-vs-make-vs-zapier-agents",
    make: "n8n-vs-make-vs-zapier-agents",
    "zapier-agents": "n8n-vs-make-vs-zapier-agents",
    lindy: "lindy-vs-relevance-ai-vs-dust",
    "relevance-ai": "lindy-vs-relevance-ai-vs-dust",
    dust: "lindy-vs-relevance-ai-vs-dust",
  };
  const slug = map[toolSlug];
  return slug ? getGuideBySlug(slug) : undefined;
}

/** Tool profiles featured in a comparison guide (2 or 3 platforms). */
export type ComparisonToolProfile = { slug: string; label: string };

export const comparisonToolProfiles: Record<
  ComparisonGuideSlug,
  ComparisonToolProfile[]
> = {
  "langgraph-vs-crewai": [
    { slug: "langgraph", label: "LangGraph platform profile" },
    { slug: "crewai", label: "CrewAI platform profile" },
  ],
  "claude-code-vs-cursor": [
    { slug: "cursor", label: "Cursor platform profile" },
    { slug: "claude-code", label: "Claude Code platform profile" },
  ],
  "copilot-studio-vs-agentforce": [
    {
      slug: "microsoft-copilot-studio",
      label: "Microsoft Copilot Studio profile",
    },
    {
      slug: "salesforce-agentforce",
      label: "Salesforce Agentforce profile",
    },
  ],
  "n8n-vs-make-vs-zapier-agents": [
    { slug: "n8n", label: "n8n platform profile" },
    { slug: "make", label: "Make platform profile" },
    { slug: "zapier-agents", label: "Zapier Agents platform profile" },
  ],
  "lindy-vs-relevance-ai-vs-dust": [
    { slug: "lindy", label: "Lindy platform profile" },
    { slug: "relevance-ai", label: "Relevance AI platform profile" },
    { slug: "dust", label: "Dust platform profile" },
  ],
};

/** Methodology is not a guide slug but is core trust content. */
export const methodologyLink = {
  href: "/methodology/",
  title: "How we evaluate AI agent platforms",
  excerpt: "Six scoring dimensions, overall score derivation, and production-readiness criteria.",
} as const;

/**
 * Related guides for a tool page — category-aware, plus MCP when relevant.
 */
export function getRelatedGuidesForTool(tool: Tool): GuidePreview[] {
  const ordered: string[] = [];
  const add = (slug: string) => {
    if (!ordered.includes(slug)) ordered.push(slug);
  };

  // Topic hubs first (coding agents hub and/or platforms pillar)
  for (const hub of getHubsForTool(tool.slug)) {
    add(hub.slug);
  }

  // Primary head-to-head (when this tool is in one)
  const primary = getPrimaryComparisonForTool(tool.slug);
  if (primary) add(primary.slug);

  add("how-to-evaluate-ai-agent-platforms");
  add("ai-agent-platforms-tco-2026");

  const cats = tool.categories;
  if (cats.includes("Frameworks") || cats.includes("Enterprise")) {
    add("frameworks-vs-enterprise-platforms");
  }
  if (cats.includes("Enterprise")) add("copilot-studio-vs-agentforce");
  if (cats.includes("Frameworks")) {
    add("langgraph-vs-crewai");
    add("best-open-source-ai-agent-frameworks-2026");
    add("best-ai-agent-platforms-for-smbs-2026");
  }
  if (tool.features.openSource && cats.includes("Frameworks")) {
    add("best-open-source-ai-agent-frameworks-2026");
  }
  if (cats.includes("Coding")) {
    add("best-ai-coding-agents-2026");
    add("claude-code-vs-cursor");
  }
  if (
    tool.features.mcpSupport ||
    tool.features.computerUse ||
    cats.includes("Browser") ||
    cats.includes("Coding")
  ) {
    add("mcp-and-tool-calling-explained");
    add("mcp-server-implementation");
  }
  if (cats.includes("No-Code") || cats.includes("Workflow")) {
    add("best-ai-agent-platforms-for-smbs-2026");
    add("n8n-vs-make-vs-zapier-agents");
    add("lindy-vs-relevance-ai-vs-dust");
    add("frameworks-vs-enterprise-platforms");
  }

  return resolveGuideSlugs(ordered);
}

/**
 * Related guides for a category hub — order is intentional (newest / most useful first).
 */
export function getRelatedGuidesForCategory(
  category: ToolCategory,
): GuidePreview[] {
  const byCat: Record<ToolCategory, string[]> = {
    Enterprise: [
      "ai-agent-platforms-guide",
      "copilot-studio-vs-agentforce",
      "ai-agent-platforms-tco-2026",
      "frameworks-vs-enterprise-platforms",
      "how-to-evaluate-ai-agent-platforms",
      "best-ai-agent-platforms-for-smbs-2026",
    ],
    Frameworks: [
      "ai-agent-platforms-guide",
      "best-open-source-ai-agent-frameworks-2026",
      "langgraph-vs-crewai",
      "ai-agent-platforms-tco-2026",
      "best-ai-agent-platforms-for-smbs-2026",
      "frameworks-vs-enterprise-platforms",
      "mcp-and-tool-calling-explained",
      "mcp-server-implementation",
      "how-to-evaluate-ai-agent-platforms",
    ],
    "No-Code": [
      "ai-agent-platforms-guide",
      "lindy-vs-relevance-ai-vs-dust",
      "best-ai-agent-platforms-for-smbs-2026",
      "n8n-vs-make-vs-zapier-agents",
      "ai-agent-platforms-tco-2026",
      "how-to-evaluate-ai-agent-platforms",
      "frameworks-vs-enterprise-platforms",
    ],
    Coding: [
      "best-ai-coding-agents-2026",
      "claude-code-vs-cursor",
      "ai-agent-platforms-guide",
      "ai-agent-platforms-tco-2026",
      "mcp-and-tool-calling-explained",
      "mcp-server-implementation",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Browser: [
      "ai-agent-platforms-guide",
      "mcp-and-tool-calling-explained",
      "mcp-server-implementation",
      "ai-agent-platforms-tco-2026",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Workflow: [
      "ai-agent-platforms-guide",
      "n8n-vs-make-vs-zapier-agents",
      "best-ai-agent-platforms-for-smbs-2026",
      "lindy-vs-relevance-ai-vs-dust",
      "ai-agent-platforms-tco-2026",
      "how-to-evaluate-ai-agent-platforms",
      "frameworks-vs-enterprise-platforms",
    ],
  };

  const slugs = byCat[category] ?? [
    "ai-agent-platforms-guide",
    "how-to-evaluate-ai-agent-platforms",
  ];
  return resolveGuideSlugs(slugs);
}

/** Featured (first) guide for category hero callouts. */
export function getFeaturedGuideForCategory(
  category: ToolCategory,
): GuidePreview | undefined {
  return getRelatedGuidesForCategory(category)[0];
}

/* -------------------------------------------------------------------------- */
/* Topic clusters (hub & spoke)                                               */
/* -------------------------------------------------------------------------- */

export type TopicHubId = "coding-agents" | "agent-platforms";

export type HubSpokeGuide = {
  slug: string;
  /** Short blurb for hub navigation cards */
  blurb: string;
};

export type HubSpokeTool = {
  slug: string;
  blurb: string;
};

export type HubSpokeBacklink = {
  label: string;
  detail: string;
};

export type TopicHub = {
  id: TopicHubId;
  /** Hub page guide slug */
  slug: string;
  /** Short label for badges / chips */
  name: string;
  /** Full hub title */
  title: string;
  description: string;
  /** Spoke → hub anchor text, e.g. “Part of our AI Agent Platforms Guide” */
  backlinkLabel: string;
  /** Secondary line under the backlink */
  backlinkDetail: string;
  /** Optional per-spoke natural language for hub backlinks */
  spokeBacklinks?: Record<string, HubSpokeBacklink>;
  spokeGuides: HubSpokeGuide[];
  spokeTools?: HubSpokeTool[];
};

/** Resolve natural backlink copy for a spoke (guide or tool) on a hub. */
export function getHubBacklinkCopy(
  hub: TopicHub,
  spokeSlug?: string,
): HubSpokeBacklink {
  if (spokeSlug && hub.spokeBacklinks?.[spokeSlug]) {
    return hub.spokeBacklinks[spokeSlug];
  }
  return { label: hub.backlinkLabel, detail: hub.backlinkDetail };
}

/**
 * Editorial topic clusters. Hubs are central overview pages; spokes link back.
 */
export const topicHubs: TopicHub[] = [
  {
    id: "coding-agents",
    slug: "best-ai-coding-agents-2026",
    name: "AI Coding Agents",
    title: "Best AI Coding Agents in 2026",
    description:
      "Hub for IDE, CLI, cloud, and open-source coding agents — ranked picks, the Claude Code vs Cursor deep-dive, and scored tool profiles.",
    backlinkLabel: "See the full Best AI Coding Agents guide",
    backlinkDetail:
      "Part of our AI Coding Agents topic cluster — ranked picks, comparison, and directory profiles.",
    spokeGuides: [
      {
        slug: "claude-code-vs-cursor",
        blurb:
          "Head-to-head: IDE-first Cursor vs terminal-first Claude Code — workflow, autonomy, pricing, and when to use both.",
      },
    ],
    spokeTools: [
      { slug: "cursor", blurb: "AI-native IDE — default daily driver for many product teams." },
      {
        slug: "claude-code",
        blurb: "Terminal coding agent for multi-file refactors and long sessions.",
      },
      {
        slug: "github-copilot-agents",
        blurb: "Agentic coding in the GitHub + Copilot ecosystem.",
      },
      {
        slug: "cline",
        blurb: "Open-source VS Code agent with plan/act and MCP.",
      },
      {
        slug: "openai-codex",
        blurb: "Cloud coding agent in the OpenAI stack.",
      },
      {
        slug: "devin",
        blurb: "Autonomous software engineer for scoped tickets.",
      },
    ],
  },
  {
    id: "agent-platforms",
    slug: "ai-agent-platforms-guide",
    name: "AI Agent Platforms",
    title:
      "AI Agent Platforms Guide 2026 — How to Choose, Compare & Evaluate",
    description:
      "Pillar hub for choosing, comparing, and evaluating AI agent platforms — frameworks, enterprise suites, no-code, workflow, TCO, and head-to-heads.",
    backlinkLabel: "See the full AI Agent Platforms Guide",
    backlinkDetail:
      "More comparisons, decision frameworks, evaluation criteria, and TCO guidance in one place.",
    /** Natural copy keyed by spoke slug (falls back to backlinkLabel / Detail). */
    spokeBacklinks: {
      "langgraph-vs-crewai": {
        label:
          "This comparison is part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for frameworks vs enterprise, OSS roundups, and more head-to-heads.",
      },
      "copilot-studio-vs-agentforce": {
        label:
          "This comparison is part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for enterprise buying paths, TCO, and related comparisons.",
      },
      "n8n-vs-make-vs-zapier-agents": {
        label:
          "This comparison is part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for workflow vs no-code lanes and SMB shortlists.",
      },
      "lindy-vs-relevance-ai-vs-dust": {
        label:
          "This comparison is part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for no-code vs frameworks and evaluation checklists.",
      },
      "claude-code-vs-cursor": {
        label:
          "This comparison is part of our complete AI Agent Platforms Guide",
        detail:
          "Coding agents sit in a separate lane — the full guide maps every platform category.",
      },
      "best-ai-agent-platforms-for-smbs-2026": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for decision paths, comparisons, and how to evaluate any platform.",
      },
      "best-open-source-ai-agent-frameworks-2026": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for frameworks vs enterprise and multi-agent comparisons.",
      },
      "ai-agent-platforms-tco-2026": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for cost-aware decision paths and platform shortlists.",
      },
      "frameworks-vs-enterprise-platforms": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for lane orientation and every related comparison.",
      },
      "how-to-evaluate-ai-agent-platforms": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "See the full guide for decision paths and head-to-head comparisons after you score options.",
      },
      "mcp-and-tool-calling-explained": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "Tool calling and MCP sit under platform evaluation — see decision paths and related deep-dives.",
      },
      "mcp-server-implementation": {
        label: "Part of our complete AI Agent Platforms Guide",
        detail:
          "Implementation detail for teams building tool servers — see the pillar for platform selection context.",
      },
      "best-ai-coding-agents-2026": {
        label:
          "See the full AI Agent Platforms Guide for more comparisons and decision frameworks",
        detail:
          "Coding agents are one lane — the platforms pillar maps frameworks, enterprise, no-code, and workflow too.",
      },
    },
    spokeGuides: [
      {
        slug: "langgraph-vs-crewai",
        blurb:
          "Graph-first vs role-first multi-agent frameworks for engineering teams.",
      },
      {
        slug: "copilot-studio-vs-agentforce",
        blurb:
          "Microsoft vs Salesforce enterprise agent platforms — grounding, governance, lock-in, TCO.",
      },
      {
        slug: "n8n-vs-make-vs-zapier-agents",
        blurb:
          "Workflow automation platforms compared for real AI agents and ops automations.",
      },
      {
        slug: "lindy-vs-relevance-ai-vs-dust",
        blurb:
          "No-code agent builders: personal productivity vs multi-agent workforces vs team knowledge.",
      },
      {
        slug: "best-ai-agent-platforms-for-smbs-2026",
        blurb:
          "Founder-friendly shortlist and decision framework for SMBs and startups.",
      },
      {
        slug: "best-open-source-ai-agent-frameworks-2026",
        blurb:
          "Ranked OSS frameworks for control, multi-agent, and production readiness.",
      },
      {
        slug: "ai-agent-platforms-tco-2026",
        blurb:
          "What platforms actually cost — seats, runs, models, people, and hidden spend.",
      },
      {
        slug: "frameworks-vs-enterprise-platforms",
        blurb:
          "When to build on frameworks vs buy a managed enterprise suite.",
      },
      {
        slug: "how-to-evaluate-ai-agent-platforms",
        blurb:
          "Seven-criteria evaluation checklist and scoring sheet you can copy.",
      },
      {
        slug: "mcp-and-tool-calling-explained",
        blurb:
          "What tool calling and MCP mean for agent interoperability and platform choice.",
      },
      {
        slug: "mcp-server-implementation",
        blurb:
          "How to build and run MCP servers — tools, patterns, production, and when not to bother.",
      },
      {
        slug: "best-ai-coding-agents-2026",
        blurb:
          "IDE, CLI, and cloud coding agents — separate buying lane for software teams.",
      },
      {
        slug: "claude-code-vs-cursor",
        blurb:
          "IDE-first vs terminal-first coding agents — the two most common daily drivers.",
      },
    ],
  },
];

export function getTopicHub(id: TopicHubId): TopicHub {
  const hub = topicHubs.find((h) => h.id === id);
  if (!hub) throw new Error(`Unknown topic hub: ${id}`);
  return hub;
}

export function getHubBySlug(slug: string): TopicHub | undefined {
  return topicHubs.find((h) => h.slug === slug);
}

export function isHubPage(slug: string): boolean {
  return topicHubs.some((h) => h.slug === slug);
}

/** Hubs that list this guide as a spoke (excludes the hub page itself). */
export function getHubsForGuide(guideSlug: string): TopicHub[] {
  return topicHubs.filter(
    (h) =>
      h.slug !== guideSlug &&
      h.spokeGuides.some((s) => s.slug === guideSlug),
  );
}

/** Hubs that list this tool as a spoke. */
export function getHubsForTool(toolSlug: string): TopicHub[] {
  return topicHubs.filter((h) =>
    h.spokeTools?.some((s) => s.slug === toolSlug),
  );
}

export function getHubSpokeGuides(hub: TopicHub): GuidePreview[] {
  return resolveGuideSlugs(hub.spokeGuides.map((s) => s.slug));
}

export function getHubPreview(hub: TopicHub): GuidePreview | undefined {
  return getGuideBySlug(hub.slug);
}

/** Example tools to surface from guides (stable slugs). */
export const guideExampleTools: Record<
  string,
  { label: string; slugs: string[] }
> = {
  "ai-agent-platforms-guide": {
    label: "Example platforms across lanes",
    slugs: [
      "langgraph",
      "microsoft-copilot-studio",
      "n8n",
      "lindy",
      "cursor",
      "relevance-ai",
    ],
  },
  "how-to-evaluate-ai-agent-platforms": {
    label: "Start with a few scored profiles",
    slugs: ["cursor", "langgraph", "aws-bedrock-agents", "n8n"],
  },
  "frameworks-vs-enterprise-platforms": {
    label: "Compare frameworks and enterprise suites",
    slugs: [
      "langgraph",
      "crewai",
      "microsoft-copilot-studio",
      "salesforce-agentforce",
      "aws-bedrock-agents",
    ],
  },
  "mcp-and-tool-calling-explained": {
    label: "Platforms with strong tool / MCP stories",
    slugs: [
      "anthropic-claude-agent-sdk",
      "cursor",
      "cline",
      "langgraph",
      "openai-agents-sdk",
    ],
  },
  "mcp-server-implementation": {
    label: "Hosts and stacks that pair well with custom MCP servers",
    slugs: [
      "cursor",
      "claude-code",
      "cline",
      "langgraph",
      "openai-agents-sdk",
      "anthropic-claude-agent-sdk",
    ],
  },
  "langgraph-vs-crewai": {
    label: "Compare these multi-agent frameworks",
    slugs: ["langgraph", "crewai", "openai-agents-sdk", "pydantic-ai", "mastra"],
  },
  "claude-code-vs-cursor": {
    label: "Compare coding agents",
    slugs: ["cursor", "claude-code", "github-copilot-agents", "cline", "devin"],
  },
  "copilot-studio-vs-agentforce": {
    label: "Compare enterprise agent platforms",
    slugs: [
      "microsoft-copilot-studio",
      "salesforce-agentforce",
      "aws-bedrock-agents",
      "servicenow-ai-agents",
      "google-vertex-ai-agent-builder",
    ],
  },
  "best-open-source-ai-agent-frameworks-2026": {
    label: "Open-source frameworks in this roundup",
    slugs: [
      "langgraph",
      "crewai",
      "openai-agents-sdk",
      "pydantic-ai",
      "mastra",
      "llamaindex-workflows",
    ],
  },
  "n8n-vs-make-vs-zapier-agents": {
    label: "Compare these workflow automation platforms",
    slugs: ["n8n", "make", "zapier-agents"],
  },
  "best-ai-agent-platforms-for-smbs-2026": {
    label: "SMB-friendly platforms in this roundup",
    slugs: [
      "n8n",
      "make",
      "zapier-agents",
      "lindy",
      "relevance-ai",
      "langgraph",
      "crewai",
    ],
  },
  "lindy-vs-relevance-ai-vs-dust": {
    label: "Compare these no-code agent platforms",
    slugs: ["lindy", "relevance-ai", "dust"],
  },
  "best-ai-coding-agents-2026": {
    label: "Coding agents in this roundup",
    slugs: [
      "cursor",
      "claude-code",
      "github-copilot-agents",
      "cline",
      "openai-codex",
      "devin",
    ],
  },
  "ai-agent-platforms-tco-2026": {
    label: "Example platforms when modeling TCO",
    slugs: [
      "n8n",
      "make",
      "cursor",
      "langgraph",
      "microsoft-copilot-studio",
      "relevance-ai",
    ],
  },
};
