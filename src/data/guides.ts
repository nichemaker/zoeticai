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
];

export function guideHref(slug: string): string {
  return `/guides/${slug}/`;
}

export function getGuideBySlug(slug: string): GuidePreview | undefined {
  return latestGuides.find((g) => g.slug === slug);
}

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
  const slugs = new Set<string>(["how-to-evaluate-ai-agent-platforms"]);

  const cats = tool.categories;
  if (cats.includes("Frameworks") || cats.includes("Enterprise")) {
    slugs.add("frameworks-vs-enterprise-platforms");
  }
  if (cats.includes("Frameworks")) {
    slugs.add("langgraph-vs-crewai");
  }
  if (tool.slug === "langgraph" || tool.slug === "crewai") {
    slugs.add("langgraph-vs-crewai");
  }
  if (
    tool.features.mcpSupport ||
    tool.features.computerUse ||
    cats.includes("Browser") ||
    cats.includes("Coding")
  ) {
    slugs.add("mcp-and-tool-calling-explained");
  }
  if (cats.includes("No-Code") || cats.includes("Workflow")) {
    slugs.add("frameworks-vs-enterprise-platforms");
  }

  return latestGuides.filter((g) => slugs.has(g.slug));
}

/**
 * Related guides for a category hub — pick the most useful articles for that lane.
 */
export function getRelatedGuidesForCategory(
  category: ToolCategory,
): GuidePreview[] {
  const byCat: Record<ToolCategory, string[]> = {
    Enterprise: [
      "frameworks-vs-enterprise-platforms",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Frameworks: [
      "langgraph-vs-crewai",
      "frameworks-vs-enterprise-platforms",
      "mcp-and-tool-calling-explained",
      "how-to-evaluate-ai-agent-platforms",
    ],
    "No-Code": [
      "how-to-evaluate-ai-agent-platforms",
      "frameworks-vs-enterprise-platforms",
    ],
    Coding: [
      "mcp-and-tool-calling-explained",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Browser: [
      "mcp-and-tool-calling-explained",
      "how-to-evaluate-ai-agent-platforms",
    ],
    Workflow: [
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
};
