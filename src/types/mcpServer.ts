/**
 * MCP server directory types — lightweight profiles for agent builders.
 */

/** Browse groups on the MCP servers listing page. */
export type McpServerCategory =
  | "Browser"
  | "Design"
  | "Dev tools"
  | "Productivity"
  | "Data"
  | "Communication";

export type McpSetupDifficulty = "Easy" | "Medium" | "Hard";

export interface McpServer {
  /** URL slug under /guides/mcp-servers/[slug]/ */
  slug: string;
  /** Display name, e.g. "Playwright MCP" */
  name: string;
  /** One-line pitch */
  tagline: string;
  category: McpServerCategory;
  /** Optional second label for browse filters */
  secondaryCategory?: McpServerCategory;
  /** What the server enables for agents */
  summary: string;
  /** Who should install it */
  bestFor: string[];
  /** How it helps Claude Code / MCP-compatible agents */
  agentValue: string;
  /** High-level setup steps (not vendor-specific secrets) */
  setupOverview: string[];
  /** Concrete agent use cases */
  useCases: string[];
  /** Permissions, trust, and ops caveats */
  caveats: string[];
  setupDifficulty: McpSetupDifficulty;
  /** Featured on listing homepage */
  featured?: boolean;
  /** Related MCP server slugs on this site */
  relatedSlugs?: string[];
  /** Optional docs / project URL */
  website?: string;
  /** Related Zoetic tool pages if any */
  relatedToolSlugs?: string[];
  /** ISO date of last editorial pass */
  lastUpdated: string;
}
