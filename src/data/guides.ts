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

export const latestGuides: GuidePreview[] = [
  {
    slug: "how-to-evaluate-ai-agent-platforms",
    title: "How to Evaluate AI Agent Platforms in 2026",
    excerpt:
      "A practical checklist for capability, governance, integrations, and total cost before you pilot.",
    category: "Buying",
    readTime: "12 min",
    date: "2026-04-01",
  },
  {
    slug: "frameworks-vs-enterprise-platforms",
    title: "Frameworks vs Enterprise AI Agent Platforms — When to Choose Which",
    excerpt:
      "When to build on LangGraph or CrewAI — and when a managed enterprise stack is the safer bet.",
    category: "Strategy",
    readTime: "10 min",
    date: "2026-04-01",
  },
  {
    slug: "mcp-and-tool-calling-explained",
    title: "MCP and Tool Calling Explained — Why It Matters for AI Agents",
    excerpt:
      "What Model Context Protocol means for agent interoperability, and which platforms support it today.",
    category: "Technical",
    readTime: "11 min",
    date: "2026-04-01",
  },
  {
    slug: "langgraph-vs-crewai",
    title:
      "LangGraph vs CrewAI in 2026: Which Multi-Agent Framework Should You Choose?",
    excerpt:
      "Graph-first vs role-first multi-agent frameworks — architecture, state, HITL, DX, and when to pick each.",
    category: "Comparison",
    readTime: "14 min",
    date: "2026-04-01",
  },
  {
    slug: "claude-code-vs-cursor",
    title: "Claude Code vs Cursor in 2026: Which AI Coding Agent Should You Use?",
    excerpt:
      "IDE-first vs terminal-first coding agents — workflow, autonomy, refactors, ecosystem, pricing, and when to use both.",
    category: "Comparison",
    readTime: "13 min",
    date: "2026-04-01",
  },
  {
    slug: "copilot-studio-vs-agentforce",
    title:
      "Microsoft Copilot Studio vs Salesforce Agentforce in 2026: Which Enterprise Agent Platform Should You Choose?",
    excerpt:
      "Enterprise agent platforms compared — grounding, governance, lock-in, pricing/TCO, and when to pick Microsoft vs Salesforce.",
    category: "Comparison",
    readTime: "15 min",
    date: "2026-04-01",
  },
  {
    slug: "best-open-source-ai-agent-frameworks-2026",
    title: "Best Open-Source AI Agent Frameworks in 2026",
    excerpt:
      "Ranked open-source agent frameworks for control, multi-agent, state, production readiness — plus when OSS beats enterprise suites.",
    category: "Roundup",
    readTime: "14 min",
    date: "2026-04-01",
  },
  {
    slug: "n8n-vs-make-vs-zapier-agents",
    title:
      "n8n vs Make vs Zapier Agents in 2026: Which Is Best for AI Agents?",
    excerpt:
      "Practical comparison for real AI agents and automations — capabilities, ease of use, integrations, self-hosting, pricing, and TCO.",
    category: "Comparison",
    readTime: "15 min",
    date: "2026-04-01",
  },
];

export function guideHref(slug: string): string {
  return `/guides/${slug}/`;
}

export function getGuideBySlug(slug: string): GuidePreview | undefined {
  return latestGuides.find((g) => g.slug === slug);
}

/** Head-to-head comparison guides used for cross-linking */
export const comparisonGuideSlugs = [
  "langgraph-vs-crewai",
  "claude-code-vs-cursor",
  "copilot-studio-vs-agentforce",
  "n8n-vs-make-vs-zapier-agents",
] as const;

export type ComparisonGuideSlug = (typeof comparisonGuideSlugs)[number];

/** Short anchor text for SEO-friendly internal links */
export const comparisonLinkLabels: Record<ComparisonGuideSlug, string> = {
  "langgraph-vs-crewai": "LangGraph vs CrewAI comparison",
  "claude-code-vs-cursor": "Claude Code vs Cursor comparison",
  "copilot-studio-vs-agentforce":
    "Copilot Studio vs Agentforce comparison",
  "n8n-vs-make-vs-zapier-agents": "n8n vs Make vs Zapier Agents comparison",
};

export function isComparisonGuide(slug: string): slug is ComparisonGuideSlug {
  return (comparisonGuideSlugs as readonly string[]).includes(slug);
}

export function comparisonLinkLabel(slug: string): string {
  if (isComparisonGuide(slug)) return comparisonLinkLabels[slug];
  return getGuideBySlug(slug)?.title ?? slug;
}

/** Other head-to-head guides (excludes current) */
export function getRelatedComparisons(currentSlug: string): GuidePreview[] {
  return latestGuides.filter(
    (g) => isComparisonGuide(g.slug) && g.slug !== currentSlug,
  );
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

  // Primary head-to-head first (when this tool is in one)
  const primary = getPrimaryComparisonForTool(tool.slug);
  if (primary) add(primary.slug);

  add("how-to-evaluate-ai-agent-platforms");

  const cats = tool.categories;
  if (cats.includes("Frameworks") || cats.includes("Enterprise")) {
    add("frameworks-vs-enterprise-platforms");
  }
  if (cats.includes("Enterprise")) add("copilot-studio-vs-agentforce");
  if (cats.includes("Frameworks")) {
    add("langgraph-vs-crewai");
    add("best-open-source-ai-agent-frameworks-2026");
  }
  if (tool.features.openSource && cats.includes("Frameworks")) {
    add("best-open-source-ai-agent-frameworks-2026");
  }
  if (cats.includes("Coding")) add("claude-code-vs-cursor");
  if (
    tool.features.mcpSupport ||
    tool.features.computerUse ||
    cats.includes("Browser") ||
    cats.includes("Coding")
  ) {
    add("mcp-and-tool-calling-explained");
  }
  if (cats.includes("No-Code") || cats.includes("Workflow")) {
    add("n8n-vs-make-vs-zapier-agents");
    add("frameworks-vs-enterprise-platforms");
  }

  return ordered
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is GuidePreview => Boolean(g));
}

/**
 * Related guides for a category hub — pick the most useful articles for that lane.
 */
export function getRelatedGuidesForCategory(
  category: ToolCategory,
): GuidePreview[] {
  const byCat: Record<ToolCategory, string[]> = {
    Enterprise: [
      "copilot-studio-vs-agentforce",
      "frameworks-vs-enterprise-platforms",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Frameworks: [
      "best-open-source-ai-agent-frameworks-2026",
      "langgraph-vs-crewai",
      "frameworks-vs-enterprise-platforms",
      "mcp-and-tool-calling-explained",
      "how-to-evaluate-ai-agent-platforms",
    ],
    "No-Code": [
      "n8n-vs-make-vs-zapier-agents",
      "how-to-evaluate-ai-agent-platforms",
      "frameworks-vs-enterprise-platforms",
    ],
    Coding: [
      "claude-code-vs-cursor",
      "mcp-and-tool-calling-explained",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Browser: [
      "mcp-and-tool-calling-explained",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Workflow: [
      "n8n-vs-make-vs-zapier-agents",
      "how-to-evaluate-ai-agent-platforms",
      "frameworks-vs-enterprise-platforms",
    ],
  };

  const slugs = byCat[category] ?? ["how-to-evaluate-ai-agent-platforms"];
  return latestGuides.filter((g) => slugs.includes(g.slug));
}

/** Example tools to surface from guides (stable slugs). */
export const guideExampleTools: Record<
  string,
  { label: string; slugs: string[] }
> = {
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
};
