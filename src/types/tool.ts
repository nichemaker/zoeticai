/**
 * Domain types for the AI Agent Platforms directory.
 * Keep listing data in `src/data/tools.ts` typed against these interfaces.
 */

/** High-level product segment used for filtering and category pages. */
export type ToolCategory =
  | "Enterprise"
  | "Frameworks"
  | "No-Code"
  | "Coding"
  | "Browser"
  | "Workflow";

/** How the product is typically sold / licensed. */
export type PricingModel =
  | "free"
  | "freemium"
  | "paid"
  | "usage"
  | "enterprise"
  | "open-source";

/** Optional structured tier for detail-page pricing cards. */
export interface PricingPlan {
  id: string;
  name: string;
  /** Display price, e.g. "$0", "$20", "Custom". */
  price: string;
  /** e.g. "/month", "/seat". */
  period?: string;
  /** Short blurb under the price. */
  description?: string;
  features: string[];
  cta: string;
  /** Highlight as most popular plan. */
  popular?: boolean;
}

export interface ToolPricing {
  /** Primary commercial model. */
  model: PricingModel;
  /** Human-readable starting point, e.g. "$0", "$20/mo", "Custom". */
  startingPrice?: string;
  /** Optional short pricing note shown on listing cards. */
  notes?: string;
  /**
   * Optional explicit tiers for the detail page.
   * When omitted, the detail page synthesizes cards from model + startingPrice.
   */
  plans?: PricingPlan[];
}

/**
 * Review scores on a 0–10 scale.
 * `overall` is the headline score; the six dimensions support compare views.
 */
export interface ToolScores {
  overall: number;
  /** Depth of agent capabilities (reasoning, tools, memory, autonomy). */
  capability: number;
  /** How quickly a non-expert can get a useful agent running. */
  easeOfUse: number;
  /** Ecosystem connectors, APIs, and third-party tool support. */
  integrations: number;
  /** Security, admin, compliance, and scale for large orgs. */
  enterprise: number;
  /** DX: SDKs, docs, local dev, observability, extensibility. */
  developerExperience: number;
  /** Price-to-capability fit for typical buyers. */
  value: number;
}

/** Boolean capability flags for filters and comparison tables. */
export interface ToolFeatures {
  multiAgent: boolean;
  openSource: boolean;
  selfHost: boolean;
  mcpSupport: boolean;
  computerUse: boolean;
}

export interface Tool {
  /** Stable unique id (kebab-case). */
  id: string;
  /** Display name. */
  name: string;
  /** URL slug for `/tools/[slug]`. */
  slug: string;
  /** One-line pitch for cards and meta. */
  tagline: string;
  /** Longer summary for detail pages. */
  description: string;
  /** One or more category labels. */
  categories: ToolCategory[];
  /** Official product website. */
  website: string;
  /** Path or URL to logo asset (placeholder path OK until assets land). */
  logo: string;
  /** Optional vendor / company line under the product name. */
  company?: string;
  pricing: ToolPricing;
  scores: ToolScores;
  features: ToolFeatures;
  /** Short use-case bullets for "Best for" sections. */
  bestFor: string[];
  /** Highlight on homepage Featured section when true. */
  featured: boolean;
  /** ISO date string (YYYY-MM-DD) of last editorial refresh. */
  lastUpdated: string;
}
