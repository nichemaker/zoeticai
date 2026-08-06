import type { ToolCategory } from "../types/tool";
import { getToolsByCategory } from "./tools";

export type CategoryMeta = {
  id: ToolCategory;
  slug: string;
  name: string;
  description: string;
  /** Short label for card eyebrow / icon glyph */
  icon: string;
};

/** Editorial copy for Browse by Category cards and future category pages. */
export const categories: CategoryMeta[] = [
  {
    id: "Enterprise",
    slug: "enterprise",
    name: "Enterprise",
    description:
      "Governed agent platforms from Microsoft, Salesforce, Google, AWS, and more.",
    icon: "E",
  },
  {
    id: "Frameworks",
    slug: "frameworks",
    name: "Frameworks",
    description:
      "Developer kits for multi-agent systems — LangGraph, CrewAI, SDKs, and beyond.",
    icon: "F",
  },
  {
    id: "No-Code",
    slug: "no-code",
    name: "No-Code",
    description:
      "Visual builders so ops and product teams can ship agents without a full eng squad.",
    icon: "N",
  },
  {
    id: "Coding",
    slug: "coding",
    name: "Coding",
    description:
      "Agentic IDEs and autonomous engineers — Cursor, Claude Code, Copilot, Devin.",
    icon: "C",
  },
  {
    id: "Browser",
    slug: "browser",
    name: "Browser",
    description:
      "Computer-use capabilities that let models operate GUIs and the open web.",
    icon: "B",
  },
  {
    id: "Workflow",
    slug: "workflow",
    name: "Workflow",
    description:
      "iPaaS and automation suites adding agentic steps to enterprise process flows.",
    icon: "W",
  },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryHref(category: CategoryMeta | ToolCategory): string {
  if (typeof category === "string") {
    const meta = categories.find((c) => c.id === category);
    return meta ? `/categories/${meta.slug}/` : "/categories/";
  }
  return `/categories/${category.slug}/`;
}

export function getCategoryCounts(): { meta: CategoryMeta; count: number }[] {
  return categories.map((meta) => ({
    meta,
    count: getToolsByCategory(meta.id).length,
  }));
}
