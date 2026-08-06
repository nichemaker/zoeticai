/** Placeholder guide listings for the homepage until content is authored. */
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
    title: "Frameworks vs. enterprise platforms",
    excerpt:
      "When to build on LangGraph or CrewAI — and when a managed enterprise stack is the safer bet.",
    category: "Strategy",
    readTime: "6 min",
    date: "2026-02-10",
  },
  {
    slug: "mcp-and-tool-calling-explained",
    title: "MCP and tool calling, explained",
    excerpt:
      "What Model Context Protocol means for agent interoperability, and which platforms support it today.",
    category: "Technical",
    readTime: "7 min",
    date: "2026-01-28",
  },
];
