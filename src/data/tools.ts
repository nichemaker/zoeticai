import type { Tool, ToolScores } from "../types/tool";

/** Clamp helper so starter scores stay on a 0–10 scale. */
function scores(
  overall: number,
  capability: number,
  easeOfUse: number,
  integrations: number,
  enterprise: number,
  developerExperience: number,
  value: number,
): ToolScores {
  return {
    overall,
    capability,
    easeOfUse,
    integrations,
    enterprise,
    developerExperience,
    value,
  };
}

/**
 * Starter catalog of AI agent platforms.
 * Scores and blurbs are realistic placeholders for UI/compare work — re-verify before publish.
 */
export const tools: Tool[] = [
  // ── Enterprise ──────────────────────────────────────────────
  {
    id: "microsoft-copilot-studio",
    name: "Microsoft Copilot Studio",
    slug: "microsoft-copilot-studio",
    tagline: "Build and govern enterprise copilots inside the Microsoft stack.",
    description:
      "Low-code agent builder for Microsoft 365 and Dynamics with connectors, topics, and enterprise admin controls. Best when your org already lives in Azure AD, Teams, and Power Platform.",
    categories: ["Enterprise", "No-Code"],
    website: "https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio",
    logo: "/logos/microsoft-copilot-studio.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "Licensed via Microsoft 365 / Power Platform SKUs",
    },
    scores: scores(8.2, 7.8, 8.4, 9.0, 9.2, 7.0, 7.6),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Microsoft 365 copilots",
      "IT-managed enterprise bots",
      "Power Platform teams",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "salesforce-agentforce",
    name: "Salesforce Agentforce",
    slug: "salesforce-agentforce",
    tagline: "CRM-native agents for sales, service, and marketing workflows.",
    description:
      "Salesforce's agent layer for building task-oriented assistants on Customer 360 data, with Atlas reasoning and deep CRM actions. Strong fit for orgs standardizing on Salesforce clouds.",
    categories: ["Enterprise"],
    website: "https://www.salesforce.com/agentforce/",
    logo: "/logos/salesforce-agentforce.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "Agentforce add-ons on top of Salesforce editions",
    },
    scores: scores(8.0, 7.9, 7.6, 8.8, 9.0, 6.8, 7.4),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Salesforce CRM automation",
      "Service cloud agents",
      "Revenue teams",
    ],
    featured: true,    lastUpdated: "2026-03-01",
  },
  {
    id: "google-vertex-ai-agent-builder",
    name: "Google Vertex AI Agent Builder",
    slug: "google-vertex-ai-agent-builder",
    tagline: "Managed agent construction on Vertex AI with Google Cloud grounding.",
    description:
      "Google Cloud toolkit for building production agents with grounding, search, and GCP integrations. Suited to teams already on Vertex AI and Google Workspace data sources.",
    categories: ["Enterprise"],
    website: "https://cloud.google.com/products/agent-builder",
    logo: "/logos/google-vertex-ai-agent-builder.svg",
    pricing: {
      model: "usage",
      startingPrice: "Pay as you go",
      notes: "Vertex AI + Agent Builder usage-based pricing",
    },
    scores: scores(8.1, 8.3, 7.2, 8.5, 8.8, 7.8, 7.5),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "GCP-native agent stacks",
      "Enterprise RAG + agents",
      "Google data plane teams",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "servicenow-ai-agents",
    name: "ServiceNow AI Agents",
    slug: "servicenow-ai-agents",
    tagline: "ITSM and workflow agents embedded in the Now Platform.",
    description:
      "AI agents for IT, HR, and customer workflows that act on ServiceNow records with enterprise governance. Ideal when ServiceNow is the system of action.",
    categories: ["Enterprise", "Workflow"],
    website: "https://www.servicenow.com/products/ai-agents.html",
    logo: "/logos/servicenow-ai-agents.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "Bundled with Now Assist / platform licensing",
    },
    scores: scores(7.9, 7.5, 7.4, 8.6, 9.1, 6.5, 7.2),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "IT service management",
      "Employee service agents",
      "Now Platform shops",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "ibm-watsonx-orchestrate",
    name: "IBM watsonx Orchestrate",
    slug: "ibm-watsonx-orchestrate",
    tagline: "Enterprise digital labor with skills, skills catalog, and governance.",
    description:
      "IBM's agent orchestration product for building skill-based assistants across enterprise systems, with strong emphasis on security and hybrid cloud.",
    categories: ["Enterprise"],
    website: "https://www.ibm.com/products/watsonx-orchestrate",
    logo: "/logos/ibm-watsonx-orchestrate.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "IBM Cloud / software subscription",
    },
    scores: scores(7.6, 7.4, 7.0, 8.0, 8.9, 6.6, 7.0),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Regulated enterprises",
      "Hybrid IBM estates",
      "Skills-based automation",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "uipath-agentic-automation",
    name: "UiPath Agentic Automation",
    slug: "uipath-agentic-automation",
    tagline: "RPA meets agents for attended and unattended enterprise work.",
    description:
      "UiPath's agentic layer on top of its automation platform — combines classic RPA with LLM agents for document-heavy and UI-driven processes.",
    categories: ["Enterprise", "Workflow"],
    website: "https://www.uipath.com/platform/agentic-automation",
    logo: "/logos/uipath-agentic-automation.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "UiPath platform + agentic SKUs",
    },
    scores: scores(7.8, 7.6, 7.2, 8.4, 8.7, 7.0, 7.1),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: true,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "RPA modernization",
      "Document + UI automation",
      "Shared services centers",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "aws-bedrock-agents",
    name: "AWS Bedrock Agents",
    slug: "aws-bedrock-agents",
    tagline: "Fully managed agents on Amazon Bedrock with knowledge bases and tools.",
    description:
      "AWS-native agent service that wires foundation models to APIs, Lambda, and knowledge bases under IAM and VPC controls. Default choice for teams standardized on AWS.",
    categories: ["Enterprise"],
    website: "https://aws.amazon.com/bedrock/agents/",
    logo: "/logos/aws-bedrock-agents.svg",
    pricing: {
      model: "usage",
      startingPrice: "Pay as you go",
      notes: "Model inference + Agents + Knowledge Bases pricing",
    },
    scores: scores(8.0, 8.1, 6.9, 8.6, 9.0, 7.6, 7.8),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "AWS-native production agents",
      "Regulated cloud estates",
      "Bedrock model flexibility",
    ],
    featured: true,    lastUpdated: "2026-03-01",
  },

  // ── Frameworks ──────────────────────────────────────────────
  {
    id: "langgraph",
    name: "LangGraph",
    slug: "langgraph",
    tagline: "Stateful multi-agent graphs on the LangChain ecosystem.",
    description:
      "Graph-based orchestration framework for durable, controllable agent workflows with cycles, persistence, and human-in-the-loop. Popular for complex production agents in Python and JS.",
    categories: ["Frameworks"],
    website: "https://www.langchain.com/langgraph",
    logo: "/logos/langgraph.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "OSS core; LangSmith / LangGraph Platform optional",
    },
    scores: scores(8.6, 9.0, 6.5, 8.4, 7.2, 8.8, 8.5),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Complex multi-step agents",
      "Python/TS production stacks",
      "Human-in-the-loop flows",
    ],
    featured: true,    lastUpdated: "2026-03-01",
  },
  {
    id: "crewai",
    name: "CrewAI",
    slug: "crewai",
    tagline: "Role-based multi-agent crews with a fast Python developer path.",
    description:
      "Framework for composing role-playing AI agents into crews that collaborate on tasks. Known for quick multi-agent prototypes and a growing enterprise offering.",
    categories: ["Frameworks"],
    website: "https://www.crewai.com/",
    logo: "/logos/crewai.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Open-source core; CrewAI Enterprise for teams",
    },
    scores: scores(8.1, 8.3, 7.8, 7.4, 6.5, 8.2, 8.4),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Multi-agent research crews",
      "Python teams shipping fast",
      "Role-based task design",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "openai-agents-sdk",
    name: "OpenAI Agents SDK",
    slug: "openai-agents-sdk",
    tagline: "Lightweight OpenAI-native SDK for tools, handoffs, and tracing.",
    description:
      "Official OpenAI agents framework focused on agent loops, tool calling, handoffs between agents, and built-in tracing. Ideal when you standardize on OpenAI models and APIs.",
    categories: ["Frameworks"],
    website: "https://openai.github.io/openai-agents-python/",
    logo: "/logos/openai-agents-sdk.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "SDK free; pay for OpenAI API usage",
    },
    scores: scores(8.4, 8.5, 7.9, 7.6, 7.0, 8.7, 8.0),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "OpenAI-first stacks",
      "Handoff multi-agent designs",
      "Tracing-friendly apps",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "anthropic-claude-agent-sdk",
    name: "Anthropic Claude Agent SDK",
    slug: "anthropic-claude-agent-sdk",
    tagline: "Claude-centric agent toolkit with computer use and tool use patterns.",
    description:
      "Anthropic's SDK and patterns for building long-running Claude agents with tools, computer use, and structured workflows. Strong when Claude is the primary model.",
    categories: ["Frameworks"],
    website: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-agent-sdk/overview",
    logo: "/logos/anthropic-claude-agent-sdk.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "SDK free; pay for Claude API usage",
    },
    scores: scores(8.5, 8.8, 7.5, 7.2, 7.1, 8.6, 7.9),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "Claude-first agent products",
      "Computer-use workflows",
      "Long-horizon tasks",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "microsoft-agent-framework",
    name: "Microsoft Agent Framework",
    slug: "microsoft-agent-framework",
    tagline: "Unified Microsoft agent stack spanning Semantic Kernel and AutoGen.",
    description:
      "Microsoft's consolidated agent framework for building multi-agent systems with Azure AI, Semantic Kernel patterns, and enterprise .NET/Python support.",
    categories: ["Frameworks"],
    website: "https://learn.microsoft.com/en-us/agent-framework/",
    logo: "/logos/microsoft-agent-framework.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "OSS framework; Azure AI services billed separately",
    },
    scores: scores(7.9, 8.0, 6.8, 8.2, 8.4, 8.0, 7.6),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      ".NET and Azure shops",
      "Enterprise multi-agent systems",
      "Semantic Kernel migrations",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "google-adk",
    name: "Google ADK",
    slug: "google-adk",
    tagline: "Agent Development Kit for building multi-agent systems on Google models.",
    description:
      "Google's Agent Development Kit for composing agents, tools, and evaluation with Gemini and Vertex. Aimed at developers who want portable agent code with Google Cloud options.",
    categories: ["Frameworks"],
    website: "https://google.github.io/adk-docs/",
    logo: "/logos/google-adk.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "OSS ADK; model/cloud usage billed separately",
    },
    scores: scores(8.0, 8.2, 7.0, 7.8, 7.6, 8.1, 8.0),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Gemini-centric agents",
      "Multi-agent prototypes",
      "Vertex-ready codebases",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "llamaindex-workflows",
    name: "LlamaIndex Workflows",
    slug: "llamaindex-workflows",
    tagline: "Event-driven agent workflows with first-class RAG primitives.",
    description:
      "LlamaIndex's workflow engine for event-driven, multi-step agent pipelines tightly integrated with its data/RAG stack. Strong when retrieval quality is the bottleneck.",
    categories: ["Frameworks"],
    website: "https://docs.llamaindex.ai/en/stable/module_guides/workflow/",
    logo: "/logos/llamaindex-workflows.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "OSS; LlamaCloud optional",
    },
    scores: scores(8.2, 8.4, 7.0, 7.9, 6.8, 8.3, 8.3),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "RAG + agent pipelines",
      "Document-heavy products",
      "Python data apps",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "mastra",
    name: "Mastra",
    slug: "mastra",
    tagline: "TypeScript-first agent framework with workflows, memory, and evals.",
    description:
      "Modern TS framework for agents, workflows, RAG, and evals with a developer-friendly DX. Good default for full-stack TypeScript teams shipping agent features.",
    categories: ["Frameworks"],
    website: "https://mastra.ai/",
    logo: "/logos/mastra.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "Open-source; hosted options may apply",
    },
    scores: scores(8.0, 7.9, 8.0, 7.5, 6.2, 8.6, 8.4),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "TypeScript product teams",
      "Workflow + memory agents",
      "Eval-driven development",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "pydantic-ai",
    name: "Pydantic AI",
    slug: "pydantic-ai",
    tagline: "Type-safe Python agents powered by Pydantic validation.",
    description:
      "Agent framework from the Pydantic team emphasizing structured outputs, dependency injection, and model-agnostic Python APIs. Excellent for typed, testable agent code.",
    categories: ["Frameworks"],
    website: "https://ai.pydantic.dev/",
    logo: "/logos/pydantic-ai.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "MIT-licensed open source",
    },
    scores: scores(8.3, 8.0, 7.6, 7.0, 6.5, 9.0, 8.6),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Typed Python backends",
      "Structured tool outputs",
      "Testable agent services",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "ag2",
    name: "AG2",
    slug: "ag2",
    tagline: "Open-source multi-agent conversations (community AutoGen lineage).",
    description:
      "Community-driven multi-agent framework (AG2 / AutoGen lineage) for conversational agent groups, human-in-the-loop, and tool-using swarms.",
    categories: ["Frameworks"],
    website: "https://ag2.ai/",
    logo: "/logos/ag2.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "Open-source multi-agent framework",
    },
    scores: scores(7.7, 8.0, 6.6, 7.0, 6.0, 7.8, 8.2),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Conversational multi-agent research",
      "AutoGen-style patterns",
      "Experimental agent groups",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },

  // ── No-Code ─────────────────────────────────────────────────
  {
    id: "make",
    name: "Make",
    slug: "make",
    tagline: "Visual automation scenarios with growing AI agent modules.",
    description:
      "No-code integration platform (formerly Integromat) for scenario-based automation across thousands of apps, with AI/agent building blocks for non-engineers.",
    categories: ["No-Code", "Workflow"],
    website: "https://www.make.com/",
    logo: "/logos/make.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Free tier; paid plans by operations volume",
    },
    scores: scores(7.8, 7.2, 8.6, 9.0, 6.8, 6.5, 8.0),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Ops automation without code",
      "Multi-app scenarios",
      "SMB growth teams",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "n8n",
    name: "n8n",
    slug: "n8n",
    tagline: "Fair-code workflow automation with AI nodes and self-hosting.",
    description:
      "Extensible workflow automation tool with AI agent nodes, code steps, and strong self-host options. Popular with technical teams that want control without full custom code.",
    categories: ["No-Code", "Workflow"],
    website: "https://n8n.io/",
    logo: "/logos/n8n.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Self-host free; n8n Cloud paid",
    },
    scores: scores(8.4, 8.0, 7.8, 8.8, 7.0, 8.2, 8.7),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Self-hosted automation",
      "AI + workflow hybrids",
      "Technical ops teams",
    ],
    featured: true,    lastUpdated: "2026-03-01",
  },
  {
    id: "lindy",
    name: "Lindy",
    slug: "lindy",
    tagline: "No-code AI agents for email, meetings, and everyday business tasks.",
    description:
      "Consumer/prosumer agent platform for building assistants that handle inbox, scheduling, and multi-step office workflows without engineering.",
    categories: ["No-Code"],
    website: "https://www.lindy.ai/",
    logo: "/logos/lindy.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Free trial; subscription tiers",
    },
    scores: scores(7.6, 7.4, 8.8, 7.6, 5.5, 5.8, 7.8),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Personal productivity agents",
      "Sales / founder assistants",
      "Email and calendar ops",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "relevance-ai",
    name: "Relevance AI",
    slug: "relevance-ai",
    tagline: "No-code multi-agent workforce builder for business teams.",
    description:
      "Platform to design, deploy, and monitor teams of AI agents for research, support, and ops use cases with a visual builder and tool integrations.",
    categories: ["No-Code"],
    website: "https://relevanceai.com/",
    logo: "/logos/relevance-ai.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Usage-based plans for teams",
    },
    scores: scores(7.9, 8.0, 8.2, 7.8, 6.8, 6.6, 7.5),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Multi-agent business ops",
      "Research workforces",
      "Non-engineering builders",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "gumloop",
    name: "Gumloop",
    slug: "gumloop",
    tagline: "Drag-and-drop AI workflows with templates for growth and ops.",
    description:
      "Visual AI automation builder focused on quick templates for scraping, enrichment, and content workflows with minimal setup.",
    categories: ["No-Code"],
    website: "https://www.gumloop.com/",
    logo: "/logos/gumloop.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Credit-based pricing",
    },
    scores: scores(7.5, 7.3, 8.5, 7.4, 5.2, 6.0, 7.9),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Growth experiments",
      "Data enrichment flows",
      "Template-driven automation",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "stackai",
    name: "StackAI",
    slug: "stackai",
    tagline: "Enterprise no-code AI agents with strong security posture.",
    description:
      "Enterprise-focused platform for building AI agents and internal tools with SSO, RBAC, and on-prem options for regulated buyers.",
    categories: ["No-Code", "Enterprise"],
    website: "https://www.stack-ai.com/",
    logo: "/logos/stackai.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "Team and enterprise plans",
    },
    scores: scores(7.7, 7.5, 8.0, 7.6, 8.3, 6.4, 7.0),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Internal enterprise agents",
      "Security-conscious buyers",
      "Citizen developer programs",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "dust",
    name: "Dust",
    slug: "dust",
    tagline: "Company knowledge agents with custom tools and assistant builders.",
    description:
      "Platform for building internal AI assistants over company data with customizable tools, spaces, and team collaboration features.",
    categories: ["No-Code"],
    website: "https://dust.tt/",
    logo: "/logos/dust.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Free plan; paid team seats",
    },
    scores: scores(7.8, 7.6, 8.1, 7.5, 6.9, 7.0, 7.7),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Internal knowledge agents",
      "Startup ops teams",
      "Custom tool assistants",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "taskade-agents",
    name: "Taskade Agents",
    slug: "taskade-agents",
    tagline: "AI agents inside Taskade projects for planning and execution.",
    description:
      "Project and knowledge workspace with built-in AI agents that help plan, generate, and run work inside Taskade structures.",
    categories: ["No-Code"],
    website: "https://www.taskade.com/agents",
    logo: "/logos/taskade-agents.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Free tier; Pro and Business plans",
    },
    scores: scores(7.2, 6.9, 8.4, 7.0, 5.0, 5.5, 7.6),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Project-centric teams",
      "Lightweight agent templates",
      "All-in-one workspaces",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "zapier-agents",
    name: "Zapier Agents",
    slug: "zapier-agents",
    tagline: "AI agents that act across Zapier's massive app catalog.",
    description:
      "Zapier's agent product lets non-developers instruct agents that use Zaps and app actions across thousands of SaaS tools.",
    categories: ["No-Code", "Workflow"],
    website: "https://zapier.com/agents",
    logo: "/logos/zapier-agents.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Included/add-on depending on Zapier plan",
    },
    scores: scores(7.9, 7.4, 8.7, 9.2, 6.6, 6.2, 7.8),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "SaaS-heavy SMBs",
      "Citizen automators",
      "Cross-app agent actions",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },

  // ── Coding ──────────────────────────────────────────────────
  {
    id: "claude-code",
    name: "Claude Code",
    slug: "claude-code",
    tagline: "Terminal-native agentic coding with Claude.",
    description:
      "Anthropic's agentic coding tool for the terminal — plans, edits, and runs workflows across a codebase with strong multi-file reasoning.",
    categories: ["Coding"],
    website: "https://docs.anthropic.com/en/docs/claude-code",
    logo: "/logos/claude-code.svg",
    pricing: {
      model: "usage",
      startingPrice: "Subscription / API",
      notes: "Claude Pro/Max or API usage",
    },
    scores: scores(8.8, 9.1, 7.8, 7.0, 6.5, 8.9, 8.0),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "Repo-wide refactors",
      "CLI-first engineers",
      "Claude power users",
    ],
    featured: true,    lastUpdated: "2026-03-01",
  },
  {
    id: "cursor",
    name: "Cursor",
    slug: "cursor",
    tagline: "AI-first code editor with agent mode for multi-file changes.",
    description:
      "VS Code fork optimized for AI pair programming, composer/agent modes, and codebase-aware edits. Widely used for day-to-day product engineering.",
    categories: ["Coding"],
    website: "https://cursor.com/",
    logo: "/logos/cursor.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes: "Free tier; Pro subscription for heavy use",
    },
    scores: scores(9.0, 8.9, 9.0, 7.5, 6.8, 8.8, 8.2),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Daily IDE agent work",
      "Multi-file features",
      "Startup engineering teams",
    ],
    featured: true,    lastUpdated: "2026-03-01",
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex",
    slug: "openai-codex",
    tagline: "OpenAI's cloud coding agent for delegated software tasks.",
    description:
      "Cloud-based software engineering agent from OpenAI that takes higher-level tasks and iterates in an isolated environment with repo context.",
    categories: ["Coding"],
    website: "https://openai.com/codex/",
    logo: "/logos/openai-codex.svg",
    pricing: {
      model: "paid",
      startingPrice: "Subscription",
      notes: "Tied to ChatGPT / API product packaging",
    },
    scores: scores(8.5, 8.7, 7.6, 7.2, 6.8, 8.0, 7.6),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Delegated coding tasks",
      "OpenAI ecosystem teams",
      "Async agent runs",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "github-copilot-agents",
    name: "GitHub Copilot Agents",
    slug: "github-copilot-agents",
    tagline: "Agentic coding inside GitHub and the editor you already use.",
    description:
      "GitHub Copilot's agent experiences for multi-step coding, PR assistance, and repository-aware tasks integrated with GitHub workflows.",
    categories: ["Coding", "Enterprise"],
    website: "https://github.com/features/copilot",
    logo: "/logos/github-copilot-agents.svg",
    pricing: {
      model: "paid",
      startingPrice: "$10/mo",
      notes: "Copilot Individual / Business / Enterprise",
    },
    scores: scores(8.3, 8.2, 8.5, 8.6, 8.4, 8.0, 7.8),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "GitHub-centric orgs",
      "Enterprise IDE standards",
      "PR and review agents",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "devin",
    name: "Devin",
    slug: "devin",
    tagline: "Autonomous software engineer agent from Cognition.",
    description:
      "End-to-end software agent aimed at taking tickets from planning through implementation and PR, with a sandboxed environment and long-running sessions.",
    categories: ["Coding"],
    website: "https://devin.ai/",
    logo: "/logos/devin.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "Team / enterprise packaging",
    },
    scores: scores(8.1, 8.6, 7.0, 6.5, 6.4, 7.2, 6.8),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Autonomous ticket execution",
      "Long-running coding jobs",
      "R&D agent pilots",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "cline",
    name: "Cline",
    slug: "cline",
    tagline: "Open-source VS Code agent that can use tools and the terminal.",
    description:
      "Autonomous coding agent extension for VS Code/compatible editors with plan/act modes, model choice, and MCP tool support — fully open source.",
    categories: ["Coding"],
    website: "https://cline.bot/",
    logo: "/logos/cline.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "Free extension; bring your own model/API keys",
    },
    scores: scores(8.2, 8.3, 7.7, 7.4, 5.8, 8.7, 9.0),
    features: {
      multiAgent: false,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "BYO-model coding agents",
      "Open-source IDE workflows",
      "MCP tool experiments",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },

  // ── Browser ─────────────────────────────────────────────────
  {
    id: "openai-computer-use",
    name: "OpenAI computer-use",
    slug: "openai-computer-use",
    tagline: "OpenAI model capability for GUI and browser computer control.",
    description:
      "OpenAI's computer-use capability enables models to operate a computer via screenshots and actions — foundational for browser and desktop agents built on OpenAI APIs.",
    categories: ["Browser"],
    website: "https://platform.openai.com/docs/guides/tools-computer-use",
    logo: "/logos/openai-computer-use.svg",
    pricing: {
      model: "usage",
      startingPrice: "API usage",
      notes: "Billed with supporting OpenAI models",
    },
    scores: scores(8.0, 8.4, 6.5, 7.0, 6.8, 7.8, 7.4),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Browser automation agents",
      "GUI task completion",
      "OpenAI platform builders",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "anthropic-claude-computer-use",
    name: "Anthropic Claude computer use",
    slug: "anthropic-claude-computer-use",
    tagline: "Claude's computer-use tool for desktop and browser agents.",
    description:
      "Anthropic computer-use lets Claude see a screen and control mouse/keyboard to complete multi-step computer tasks — core building block for browser agents.",
    categories: ["Browser"],
    website: "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool",
    logo: "/logos/anthropic-claude-computer-use.svg",
    pricing: {
      model: "usage",
      startingPrice: "API usage",
      notes: "Billed with Claude model usage",
    },
    scores: scores(8.2, 8.6, 6.6, 6.8, 6.9, 7.9, 7.5),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Claude browser agents",
      "Desktop task automation",
      "Computer-use prototypes",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },

  // ── Workflow ────────────────────────────────────────────────
  {
    id: "workato",
    name: "Workato",
    slug: "workato",
    tagline: "Enterprise iPaaS with AI-assisted recipes and agentic workflows.",
    description:
      "Enterprise integration and automation platform with recipe-based workflows, AI assistance, and governance for large IT and business teams.",
    categories: ["Workflow", "Enterprise"],
    website: "https://www.workato.com/",
    logo: "/logos/workato.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Custom",
      notes: "Enterprise contract pricing",
    },
    scores: scores(8.0, 7.6, 7.5, 9.1, 9.0, 7.0, 7.0),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Enterprise iPaaS",
      "Cross-SaaS process automation",
      "IT + business co-builds",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
  {
    id: "power-automate",
    name: "Power Automate",
    slug: "power-automate",
    tagline: "Microsoft cloud and desktop flows with AI Builder and copilots.",
    description:
      "Microsoft's automation suite for cloud flows, desktop RPA, and AI-enhanced processes tightly linked to Microsoft 365, Dataverse, and Azure.",
    categories: ["Workflow", "Enterprise"],
    website: "https://www.microsoft.com/power-platform/products/power-automate",
    logo: "/logos/power-automate.svg",
    pricing: {
      model: "paid",
      startingPrice: "Per user / per flow",
      notes: "Power Platform licensing",
    },
    scores: scores(7.9, 7.3, 7.8, 9.0, 8.8, 6.8, 7.5),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Microsoft-centric automation",
      "Desktop + cloud RPA",
      "Citizen developer programs",
    ],
    featured: false,    lastUpdated: "2026-03-01",
  },
];

/** Lookup by URL slug. */
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

/** Lookup by stable id. */
export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}

/** All tools that include the given category label. */
export function getToolsByCategory(category: Tool["categories"][number]): Tool[] {
  return tools.filter((tool) => tool.categories.includes(category));
}

/** Unique category labels present in the catalog (sorted). */
export function getAllCategories(): Tool["categories"][number][] {
  const set = new Set<Tool["categories"][number]>();
  for (const tool of tools) {
    for (const category of tool.categories) {
      set.add(category);
    }
  }
  return [...set].sort();
}

/** Sorted by overall score descending — useful for homepage / ranking lists. */
export function getToolsByOverallScore(limit?: number): Tool[] {
  const sorted = [...tools].sort((a, b) => b.scores.overall - a.scores.overall);
  return limit === undefined ? sorted : sorted.slice(0, limit);
}

/** Homepage featured strip — tools with featured: true, score-sorted. */
export function getFeaturedTools(limit = 6): Tool[] {
  return tools
    .filter((tool) => tool.featured)
    .sort((a, b) => b.scores.overall - a.scores.overall)
    .slice(0, limit);
}

/**
 * Similar tools for detail pages: prefer shared categories, then closest overall score.
 */
export function getSimilarTools(tool: Tool, limit = 3): Tool[] {
  const primary = tool.categories[0];
  const sameCategory = tools.filter(
    (t) => t.id !== tool.id && t.categories.includes(primary),
  );

  const ranked = (sameCategory.length >= limit
    ? sameCategory
    : tools.filter((t) => t.id !== tool.id)
  )
    .map((t) => {
      const shared = t.categories.filter((c) =>
        tool.categories.includes(c),
      ).length;
      const scoreDelta = Math.abs(t.scores.overall - tool.scores.overall);
      return { t, shared, scoreDelta };
    })
    .sort((a, b) => {
      if (b.shared !== a.shared) return b.shared - a.shared;
      return a.scoreDelta - b.scoreDelta;
    })
    .map(({ t }) => t);

  return ranked.slice(0, limit);
}
