import type { McpServer, McpServerCategory } from "../types/mcpServer";

/**
 * MCP server directory — selective profiles for AI agent builders.
 * Expand by appending objects; listing + detail pages read from this list.
 */
export const mcpServers: McpServer[] = [
  {
    slug: "playwright",
    name: "Playwright MCP",
    tagline: "Browser automation for agents that need to click, fill, and verify the real UI.",
    category: "Browser",
    secondaryCategory: "Dev tools",
    summary:
      "Exposes Playwright-driven browser tools so an MCP client (Claude Code, Cursor, and others) can open pages, interact with the accessibility tree, and validate flows beyond reading source files.",
    bestFor: [
      "UI smoke checks after agent code edits",
      "End-to-end flow verification in staging",
      "Form and navigation debugging with a live browser",
    ],
    agentValue:
      "Coding agents often “finish” when TypeScript compiles. Playwright MCP lets the agent prove a user path still works — login shells, critical CTAs, and regressions that only show up in the browser.",
    setupOverview: [
      "Install a maintained Playwright MCP package (prefer official / Microsoft-linked packaging when available).",
      "Register the server in your client (e.g. Claude Code MCP config or `claude mcp add` patterns).",
      "Ensure Node and browser binaries resolve in the same environment the agent launches.",
      "Start with a narrow task (“open staging login, assert title”) before full E2E suites.",
    ],
    useCases: [
      "After a frontend change, open the app and confirm the happy path still works",
      "Capture failures when CSS/layout breaks what unit tests miss",
      "Drive multi-step UI scripts the agent authors and re-runs",
    ],
    caveats: [
      "Heavier than pure file tools — browsers cost CPU/RAM; do not leave on for every chat.",
      "Auth walls and CAPTCHAs still need human design (test accounts, staged envs).",
      "Prefer staging over production; never store prod passwords in MCP config committed to git.",
    ],
    setupDifficulty: "Medium",
    featured: true,
    relatedSlugs: ["github", "figma"],
    website: "https://github.com/microsoft/playwright-mcp",
    relatedToolSlugs: ["claude-code", "cursor"],
    lastUpdated: "2026-08-12",
  },
  {
    slug: "figma",
    name: "Figma MCP",
    tagline: "Design-to-code context from live Figma structure, not screenshots alone.",
    category: "Design",
    summary:
      "Connects agents to Figma (typically Dev Mode MCP) so they can read frame structure, layout hints, components, and tokens from what you have selected or linked — improving UI implementation fidelity.",
    bestFor: [
      "Frontend engineers implementing Figma designs",
      "Design-system-aware component generation",
      "Reducing “guess the spacing” agent output",
    ],
    agentValue:
      "Claude Code and IDE agents write better UI when they see hierarchy and constraints from Figma instead of inventing layout from a vague prompt. Pair with a clear design file (auto-layout, components).",
    setupOverview: [
      "Use Figma’s documented MCP / Dev Mode server path for your client.",
      "Authenticate with least-privilege access to the files you need.",
      "Confirm the agent can read the active selection or file link you intend.",
      "Keep design files tidy — messy frames produce messy code.",
    ],
    useCases: [
      "Generate a React/Vue component matching a selected frame",
      "Extract spacing/typography tokens into CSS variables",
      "Diff implemented UI against design structure during review",
    ],
    caveats: [
      "Quality tracks Figma hygiene; absolute-position spaghetti still confuses agents.",
      "File permissions and org SSO can block agents silently — test auth early.",
      "Not a substitute for design review or accessibility judgment.",
    ],
    setupDifficulty: "Medium",
    featured: true,
    relatedSlugs: ["playwright", "github"],
    website: "https://www.figma.com/",
    relatedToolSlugs: ["claude-code", "cursor"],
    lastUpdated: "2026-08-12",
  },
  {
    slug: "github",
    name: "GitHub MCP",
    tagline: "Issues, PRs, and repo operations inside the agent loop.",
    category: "Dev tools",
    summary:
      "Gives agents structured access to GitHub — search code, read issues, open or comment on PRs, and operate on repositories without copy-pasting URLs and diffs by hand.",
    bestFor: [
      "Teams whose work already lives on GitHub",
      "Agent-assisted PR and issue workflows",
      "Repo-aware coding sessions in Claude Code",
    ],
    agentValue:
      "Coding agents become delivery tools when they can open PRs, reference issues, and pull remote context. Highest leverage MCP for most software teams on GitHub.",
    setupOverview: [
      "Prefer official or well-maintained GitHub MCP packaging for your client.",
      "Create a fine-scoped token or OAuth app (read-only first if possible).",
      "Register the server with env-based secrets — never commit tokens.",
      "Enable only the tool subsets you need to reduce context noise.",
    ],
    useCases: [
      "Draft a PR description from the current branch and open it",
      "Summarize open issues labeled for the next sprint",
      "Comment review notes or link a fix to an issue",
    ],
    caveats: [
      "Write scopes can close issues or merge PRs — use least privilege and human gates for prod.",
      "Large tool surfaces crowd the model’s tool list; trim unused capabilities.",
      "Org SAML/SSO and allowlists often break first installs — fix auth before blaming the model.",
    ],
    setupDifficulty: "Easy",
    featured: true,
    relatedSlugs: ["playwright", "slack", "notion"],
    website: "https://github.com/github/github-mcp-server",
    relatedToolSlugs: ["claude-code", "cursor", "github-copilot-agents"],
    lastUpdated: "2026-08-12",
  },
  {
    slug: "notion",
    name: "Notion MCP",
    tagline: "Specs and wikis as agent context — when Notion is actually the source of truth.",
    category: "Productivity",
    secondaryCategory: "Data",
    summary:
      "Lets agents read (and sometimes write) Notion pages and databases so PRDs, runbooks, and project docs can ground coding and ops work without paste dumps.",
    bestFor: [
      "Teams with living specs in Notion",
      "Agents that implement tickets from written requirements",
      "Runbook-aware incident and ops helpers",
    ],
    agentValue:
      "When requirements live in Notion, MCP beats pasting walls of text each session. Claude Code can implement against the current page instead of a stale export.",
    setupOverview: [
      "Install a maintained Notion MCP server compatible with your client.",
      "Create an integration with access only to the pages/databases required.",
      "Point the agent at specific parent pages — avoid whole-workspace sprawl.",
      "Test read-only before enabling write tools.",
    ],
    useCases: [
      "Implement a feature from a PRD page and cite section constraints",
      "Update a project status block after a successful deploy (if write enabled)",
      "Pull runbook steps during a debugging session",
    ],
    caveats: [
      "Worthless if Notion is a graveyard — clean structure first.",
      "Over-broad workspace access is a data leak risk; scope tightly.",
      "Write tools can trash docs — prefer human approval for mutations.",
    ],
    setupDifficulty: "Medium",
    featured: true,
    relatedSlugs: ["slack", "github"],
    website: "https://www.notion.so/",
    relatedToolSlugs: ["claude-code"],
    lastUpdated: "2026-08-12",
  },
  {
    slug: "slack",
    name: "Slack MCP",
    tagline: "Channel and thread context for agents — powerful and easy to misuse.",
    category: "Communication",
    summary:
      "Connects agents to Slack so they can search channels, read threads, and optionally draft or post messages — useful for decisions and incident context buried in chat.",
    bestFor: [
      "Incident and on-call context gathering",
      "Product decisions captured in threads",
      "Status updates with a human in the loop",
    ],
    agentValue:
      "Agents often lack the “why” that only exists in Slack. MCP pulls that context into Claude Code sessions; posting should stay gated.",
    setupOverview: [
      "Use a trusted Slack MCP implementation; review its permission model.",
      "Start with read-only bot/user tokens limited to needed channels.",
      "Register secrets via environment variables in the MCP client config.",
      "Disable or gate message-send tools until policy is clear.",
    ],
    useCases: [
      "Summarize the last 24h of #incidents for a postmortem draft",
      "Find the thread where an API contract was agreed",
      "Draft a release note message for human approval before send",
    ],
    caveats: [
      "Read access can expose private channels — treat tokens like production keys.",
      "Auto-posting without review is how agents spam or leak info.",
      "Retention and compliance policies may forbid certain bot uses — check with security.",
    ],
    setupDifficulty: "Medium",
    featured: true,
    relatedSlugs: ["github", "notion"],
    website: "https://slack.com/",
    relatedToolSlugs: ["claude-code"],
    lastUpdated: "2026-08-12",
  },
];

export const mcpServerCategories: McpServerCategory[] = [
  "Browser",
  "Design",
  "Dev tools",
  "Productivity",
  "Data",
  "Communication",
];

export function getMcpServerBySlug(slug: string): McpServer | undefined {
  return mcpServers.find((s) => s.slug === slug);
}

export function getMcpServersByCategory(
  category: McpServerCategory,
): McpServer[] {
  return mcpServers.filter(
    (s) => s.category === category || s.secondaryCategory === category,
  );
}

export function getFeaturedMcpServers(): McpServer[] {
  return mcpServers.filter((s) => s.featured);
}

export function getRelatedMcpServers(server: McpServer): McpServer[] {
  const slugs = server.relatedSlugs ?? [];
  return slugs
    .map((slug) => getMcpServerBySlug(slug))
    .filter((s): s is McpServer => Boolean(s));
}

export function mcpServerHref(slug: string): string {
  return `/guides/mcp-servers/${slug}/`;
}
