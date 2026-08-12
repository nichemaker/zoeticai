import type { PricingPlan, Tool, ToolScores } from "../types/tool";

/** Score helper — dimensions are 0–10; overall should sit near a capability-weighted blend. */
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
 * AI agent platforms catalog.
 * Editorial scores and copy are buyer-oriented snapshots — re-verify pricing before publish.
 * lastUpdated reflects the most recent data pass (YYYY-MM-DD).
 */
export const tools: Tool[] = [
  // ── Enterprise ──────────────────────────────────────────────
  {
    id: "microsoft-copilot-studio",
    name: "Microsoft Copilot Studio",
    slug: "microsoft-copilot-studio",
    tagline: "Governed copilots and agents inside Microsoft 365 and Power Platform.",
    description:
      "Copilot Studio is Microsoft’s low-code environment for building chat and autonomous agents that run against Microsoft Graph, Dataverse, and hundreds of connectors. You design topics, tools, and knowledge sources in a studio UI, then publish into Teams, M365 Copilot, or custom channels with Azure AD auth and DLP policies. It is strongest when IT already standardizes on Power Platform licensing and needs agents that admins can manage, not greenfield multi-agent research stacks. Expect deep Microsoft integration and enterprise controls, with less flexibility outside that ecosystem than open frameworks.",
    categories: ["Enterprise", "No-Code"],
    website:
      "https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio",
    logo: "/logos/microsoft-copilot-studio.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales / M365 SKUs",
      notes:
        "Typically sold via Microsoft 365 Copilot, Power Platform, or message-based capacity packs—not a simple public starter price.",
    },
    scores: scores(8.3, 7.9, 8.5, 9.1, 9.3, 6.9, 7.5),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Internal Microsoft 365 copilots",
      "IT-owned agent governance",
      "Teams-first employee assistants",
      "Dynamics / Dataverse workflows",
      "Enterprises standardized on Power Platform",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
    searchVolume: 74000,
    searchTrend: "stable",
    searchLabel: "Solid enterprise demand, suite-led discovery",
    relatedComparisons: [
      {
        title: "Copilot Studio vs Agentforce",
        href: "/guides/copilot-studio-vs-agentforce/",
        note: "Popular comparison",
      },
      {
        title: "Frameworks vs enterprise platforms",
        href: "/guides/frameworks-vs-enterprise-platforms/",
      },
    ],
  },
  {
    id: "salesforce-agentforce",
    name: "Salesforce Agentforce",
    slug: "salesforce-agentforce",
    tagline: "CRM-native agents that act on Customer 360 data and Salesforce flows.",
    description:
      "Agentforce is Salesforce’s agent layer for building task-oriented assistants that read and write CRM objects, trigger flows, and ground answers in trusted org data. It is designed for sales, service, and marketing use cases where the system of record is already Salesforce, not for general-purpose coding agents. Buyers get Atlas-style reasoning, low-code setup for admins, and enterprise identity/compliance aligned with the Salesforce trust model. Plan for Salesforce edition dependencies and add-on licensing rather than a standalone freemium product.",
    categories: ["Enterprise"],
    website: "https://www.salesforce.com/agentforce/",
    logo: "/logos/salesforce-agentforce.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales",
      notes:
        "Agentforce is sold as Salesforce add-ons/SKU bundles on top of existing cloud editions; public list pricing is limited.",
    },
    scores: scores(8.1, 8.0, 7.7, 8.9, 9.1, 6.7, 7.3),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Service cloud case deflection",
      "Sales opportunity assistants",
      "CRM-grounded Q&A for reps",
      "Marketing journey agents",
      "Orgs standardized on Salesforce",
    ],
    featured: true,
    lastUpdated: "2026-04-01",
    searchVolume: 49000,
    searchTrend: "rising",
    searchLabel: "Growing CRM-agent interest",
    relatedComparisons: [
      {
        title: "Copilot Studio vs Agentforce",
        href: "/guides/copilot-studio-vs-agentforce/",
        note: "Popular comparison",
      },
      {
        title: "AI Agent Pricing Index 2026",
        href: "/guides/ai-agent-platforms-tco-2026/",
      },
    ],
  },
  {
    id: "google-vertex-ai-agent-builder",
    name: "Google Vertex AI Agent Builder",
    slug: "google-vertex-ai-agent-builder",
    tagline: "Managed agents on Vertex AI with grounding, search, and GCP IAM.",
    description:
      "Vertex AI Agent Builder helps teams assemble production agents on Google Cloud with connectors to data stores, search, and Gemini models under GCP project controls. It suits organizations that already run workloads on GCP and want managed orchestration, grounding, and observability without operating their own agent runtime. Compared with pure open-source frameworks, you trade portability for IAM, VPC-SC, and billing integration with the rest of Google Cloud. Best evaluated alongside ADK if you need more code-level control.",
    categories: ["Enterprise"],
    website: "https://cloud.google.com/products/agent-builder",
    logo: "/logos/google-vertex-ai-agent-builder.svg",
    pricing: {
      model: "usage",
      startingPrice: "Usage-based",
      notes:
        "Pay for model inference, Agent Builder resources, and related Vertex services; free trial credits may apply on GCP.",
    },
    scores: scores(8.2, 8.4, 7.1, 8.6, 8.9, 7.7, 7.6),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "GCP-native production agents",
      "Grounded enterprise search + agents",
      "Gemini-first platform teams",
      "Regulated data in Google Cloud",
      "Managed alternative to self-hosted graphs",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "servicenow-ai-agents",
    name: "ServiceNow AI Agents",
    slug: "servicenow-ai-agents",
    tagline: "ITSM and employee service agents that act on the Now Platform.",
    description:
      "ServiceNow AI Agents automate work inside IT, HR, and customer service processes by creating and updating Now Platform records under existing ACLs and workflows. They are a fit when ServiceNow is already the system of action and you need agents that open incidents, fulfill requests, or guide employees—not generic multi-cloud agent frameworks. Governance, audit, and role models follow ServiceNow patterns, which is a strength for large enterprises and a constraint for teams outside the platform. Licensing typically rides Now Assist / platform entitlements.",
    categories: ["Enterprise", "Workflow"],
    website: "https://www.servicenow.com/products/ai-agents.html",
    logo: "/logos/servicenow-ai-agents.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales",
      notes:
        "Packaged with Now Assist and platform licensing; expect enterprise contract pricing.",
    },
    scores: scores(7.9, 7.6, 7.3, 8.7, 9.2, 6.4, 7.1),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "IT service management automation",
      "Employee service desks",
      "HR case and request agents",
      "Now Platform process owners",
      "Audit-heavy enterprise workflows",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "ibm-watsonx-orchestrate",
    name: "IBM watsonx Orchestrate",
    slug: "ibm-watsonx-orchestrate",
    tagline: "Skill-based digital labor for hybrid and regulated enterprises.",
    description:
      "watsonx Orchestrate focuses on assembling “skills” and assistants that automate business processes across enterprise systems, with IBM’s governance and hybrid-cloud story. It appeals to large organizations that want digital labor with security reviews, skill catalogs, and optional on-prem or private cloud deployment patterns. You will not get the same indie-dev velocity as LangGraph or CrewAI; the tradeoff is procurement fit, support, and IBM ecosystem integration. Evaluate against ServiceNow/Microsoft if those platforms already own your process layer.",
    categories: ["Enterprise"],
    website: "https://www.ibm.com/products/watsonx-orchestrate",
    logo: "/logos/ibm-watsonx-orchestrate.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales",
      notes:
        "IBM Cloud or software subscription; pricing is quote-based for most buyers.",
    },
    scores: scores(7.6, 7.4, 6.9, 8.0, 9.0, 6.5, 6.9),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Regulated industry digital labor",
      "Hybrid / private cloud estates",
      "Skills catalog governance",
      "IBM stack modernization",
      "Process automation with enterprise support",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "uipath-agentic-automation",
    name: "UiPath Agentic Automation",
    slug: "uipath-agentic-automation",
    tagline: "RPA plus LLM agents for UI, document, and process automation.",
    description:
      "UiPath’s agentic layer extends classic RPA robots with LLM-driven agents that can plan steps, handle documents, and interact with applications when APIs are weak. It is aimed at shared services, finance, and operations teams already invested in UiPath Orchestrator, not at pure software engineers building custom multi-agent products. Strengths are attended/unattended automation at scale, governance, and computer-use style UI automation; weaknesses are vendor lock-in and cost for shops without an existing RPA footprint. Compare with Power Automate if you are Microsoft-centric.",
    categories: ["Enterprise", "Workflow"],
    website: "https://www.uipath.com/platform/agentic-automation",
    logo: "/logos/uipath-agentic-automation.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales",
      notes:
        "Platform + robot/agent capacity licensing; expect multi-year enterprise deals.",
    },
    scores: scores(7.9, 7.7, 7.1, 8.5, 8.8, 7.0, 7.0),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: true,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "RPA modernization with LLMs",
      "Document-heavy back office work",
      "UI automation without stable APIs",
      "Shared services centers",
      "Attended desktop agent scenarios",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "aws-bedrock-agents",
    name: "AWS Bedrock Agents",
    slug: "aws-bedrock-agents",
    tagline: "Managed agents on Bedrock with knowledge bases, tools, and IAM.",
    description:
      "Bedrock Agents lets you wire foundation models to action groups (APIs/Lambda), knowledge bases, and guardrails inside an AWS account. It is the default managed path for teams that want production agents without running orchestration infrastructure, with VPC endpoints, IAM, CloudWatch, and multi-model choice via Bedrock. Setup is more console/IaC-oriented than no-code tools, and complex multi-agent graphs may still need LangGraph or similar on top. Pricing is usage-based across models, Agents, and Knowledge Bases—forecast carefully for high-traffic apps.",
    categories: ["Enterprise"],
    website: "https://aws.amazon.com/bedrock/agents/",
    logo: "/logos/aws-bedrock-agents.svg",
    pricing: {
      model: "usage",
      startingPrice: "Usage-based",
      notes:
        "Charged for model tokens, Agents runtime, Knowledge Bases, and related AWS services; free tier limited.",
    },
    scores: scores(8.1, 8.2, 6.8, 8.7, 9.1, 7.7, 7.7),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "AWS-native production agents",
      "RAG + tool calling under IAM",
      "Multi-model Bedrock stacks",
      "Regulated workloads on AWS",
      "Teams that prefer managed runtimes",
    ],
    featured: true,
    lastUpdated: "2026-04-01",
  },

  // ── Frameworks ──────────────────────────────────────────────
  {
    id: "langgraph",
    name: "LangGraph",
    slug: "langgraph",
    tagline: "Stateful agent graphs with cycles, checkpoints, and human-in-the-loop.",
    description:
      "LangGraph is a graph-based orchestration library for building durable multi-step agents in Python and JavaScript on the LangChain ecosystem. You model nodes, edges, and state so agents can loop, branch, persist, and pause for human approval—capabilities that matter for production workflows beyond simple ReAct loops. It pairs with LangSmith for tracing and optional LangGraph Platform for deployment. Expect a steeper learning curve than no-code tools, but strong control for complex systems that must be debuggable and long-running.",
    categories: ["Frameworks"],
    website: "https://www.langchain.com/langgraph",
    logo: "/logos/langgraph.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes:
        "Open-source library is free; LangSmith and LangGraph Platform are optional paid products.",
    },
    scores: scores(8.7, 9.1, 6.4, 8.5, 7.3, 8.9, 8.6),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Complex multi-step production agents",
      "Human-in-the-loop approvals",
      "Python or TypeScript agent backends",
      "Stateful workflows with retries",
      "Teams already on LangChain",
    ],
    featured: true,
    lastUpdated: "2026-04-01",
    searchVolume: 33100,
    searchTrend: "rising",
    searchLabel: "Niche but growing among agent builders",
    relatedComparisons: [
      {
        title: "LangChain vs LangGraph",
        href: "/guides/langchain-vs-langgraph/",
        note: "Popular comparison",
      },
      {
        title: "LangGraph vs CrewAI",
        href: "/guides/langgraph-vs-crewai/",
      },
      {
        title: "Best open-source AI agent frameworks 2026",
        href: "/guides/best-open-source-ai-agent-frameworks-2026/",
      },
      {
        title: "Frameworks vs enterprise platforms",
        href: "/guides/frameworks-vs-enterprise-platforms/",
      },
    ],
  },
  {
    id: "crewai",
    name: "CrewAI",
    slug: "crewai",
    tagline: "Role-based multi-agent crews with a fast Python developer path.",
    description:
      "CrewAI models agents as roles (researcher, writer, reviewer) that collaborate in crews and flows to complete tasks. It is popular for quickly spinning up multi-agent research and content pipelines in Python with a relatively readable API. Open-source core covers most experimentation; CrewAI Enterprise adds ops and team features for companies that outgrow local scripts. Less graph-control-oriented than LangGraph, more “crew of specialists” than arbitrary state machines—pick based on whether roles or graphs match your mental model.",
    categories: ["Frameworks"],
    website: "https://www.crewai.com/",
    logo: "/logos/crewai.svg",
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      notes:
        "OSS framework free; enterprise/cloud plans for collaboration, deployment, and support (contact for enterprise).",
    },
    scores: scores(8.2, 8.4, 7.9, 7.5, 6.6, 8.3, 8.5),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Role-based research crews",
      "Content and analysis pipelines",
      "Fast multi-agent prototypes in Python",
      "Startups moving from scripts to crews",
      "Teams that want OSS plus optional enterprise",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
    searchVolume: 27100,
    searchTrend: "stable",
    searchLabel: "Stable multi-agent framework demand",
    relatedComparisons: [
      {
        title: "LangGraph vs CrewAI",
        href: "/guides/langgraph-vs-crewai/",
        note: "Popular comparison",
      },
      {
        title: "Best open-source AI agent frameworks 2026",
        href: "/guides/best-open-source-ai-agent-frameworks-2026/",
      },
    ],
  },
  {
    id: "openai-agents-sdk",
    name: "OpenAI Agents SDK",
    slug: "openai-agents-sdk",
    tagline: "Official OpenAI SDK for agent loops, handoffs, tools, and tracing.",
    description:
      "The OpenAI Agents SDK is a lightweight framework for building agents that call tools, hand off to other agents, and emit traces for debugging. It is the path of least resistance when your product is standardized on OpenAI models and you want first-party patterns rather than a large abstraction layer. Computer-use and tool integrations are available through the broader OpenAI platform, but multi-cloud model portability is not the goal. SDK is open source; runtime cost is almost entirely API usage.",
    categories: ["Frameworks"],
    website: "https://openai.github.io/openai-agents-python/",
    logo: "/logos/openai-agents-sdk.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0 + API usage",
      notes:
        "SDK is free/open source; you pay OpenAI API (and any tool) usage. No separate SDK license fee.",
    },
    scores: scores(8.5, 8.6, 8.0, 7.7, 7.1, 8.8, 8.1),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "OpenAI-first product backends",
      "Agent-to-agent handoff designs",
      "Tracing and eval-friendly apps",
      "Tool-calling production services",
      "Teams minimizing framework sprawl",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "anthropic-claude-agent-sdk",
    name: "Anthropic Claude Agent SDK",
    slug: "anthropic-claude-agent-sdk",
    tagline: "Claude-native agents with tools, MCP, and computer-use patterns.",
    description:
      "Anthropic’s agent tooling and SDK patterns help you build long-running Claude agents that use tools, MCP servers, and computer-use for GUI tasks. It is the natural choice when Claude is your primary model and you want vendor-aligned guidance for tool use, structured workflows, and safety controls. Like other model SDKs, you still own hosting and orchestration choices; the value is tight fit with Claude capabilities rather than a full enterprise suite. Cost is Claude API usage plus any infrastructure you run.",
    categories: ["Frameworks"],
    website:
      "https://docs.anthropic.com/en/docs/agents-and-tools/claude-agent-sdk/overview",
    logo: "/logos/anthropic-claude-agent-sdk.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0 + API usage",
      notes:
        "SDK/docs patterns are free to use; billed via Anthropic API (and computer-use) consumption.",
    },
    scores: scores(8.6, 8.9, 7.6, 7.3, 7.2, 8.7, 8.0),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "Claude-first agent products",
      "Long-horizon tool-using tasks",
      "MCP tool ecosystems",
      "Computer-use heavy workflows",
      "Teams aligned on Anthropic safety patterns",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "microsoft-agent-framework",
    name: "Microsoft Agent Framework",
    slug: "microsoft-agent-framework",
    tagline: "Open multi-agent framework for .NET and Python on Azure AI.",
    description:
      "Microsoft Agent Framework consolidates patterns from Semantic Kernel and AutoGen into a supported open-source stack for multi-agent systems. It is aimed at enterprise engineering teams on Azure and .NET/Python who need Microsoft documentation, identity, and Azure AI Foundry alignment. Expect solid enterprise story and multi-agent primitives, with a learning curve if you are not already in the Microsoft AI stack. Framework is free; Azure AI and model usage are billed separately.",
    categories: ["Frameworks"],
    website: "https://learn.microsoft.com/en-us/agent-framework/",
    logo: "/logos/microsoft-agent-framework.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0 + Azure usage",
      notes:
        "OSS framework; pay for Azure OpenAI / Azure AI services and hosting as used.",
    },
    scores: scores(8.0, 8.1, 6.7, 8.3, 8.5, 8.1, 7.6),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      ".NET enterprise agent services",
      "Azure AI Foundry stacks",
      "Semantic Kernel migrations",
      "Multi-agent systems with Microsoft support",
      "Hybrid Python + .NET teams",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "google-adk",
    name: "Google ADK",
    slug: "google-adk",
    tagline: "Agent Development Kit for multi-agent systems with Gemini.",
    description:
      "Google’s Agent Development Kit (ADK) is an open toolkit for composing agents, tools, and evaluation loops, with a natural path onto Vertex and Gemini. It targets developers who want code-first multi-agent apps with Google models but still keep portable project structure. Compared with Vertex Agent Builder, ADK is more of a developer kit than a fully managed console product. Free to use; model and cloud usage are separate.",
    categories: ["Frameworks"],
    website: "https://google.github.io/adk-docs/",
    logo: "/logos/google-adk.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0 + model usage",
      notes:
        "OSS ADK; Gemini/Vertex and hosting billed separately when you deploy to Google Cloud.",
    },
    scores: scores(8.1, 8.3, 7.1, 7.9, 7.7, 8.2, 8.1),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Gemini-centric multi-agent apps",
      "Code-first Google Cloud teams",
      "Agent evaluation experiments",
      "Portable agent project structure",
      "Prototypes that may later use Vertex",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "llamaindex-workflows",
    name: "LlamaIndex Workflows",
    slug: "llamaindex-workflows",
    tagline: "Event-driven agent workflows with first-class RAG building blocks.",
    description:
      "LlamaIndex Workflows is an event-driven orchestration layer for multi-step agents tightly coupled to LlamaIndex’s document loaders, indexes, and retrieval tools. Choose it when retrieval quality and document pipelines are central to the product, not only tool calling. Python-first teams can ship RAG+agent systems without bolting a separate graph library onto an unrelated data stack. OSS core; LlamaCloud is optional for managed indexing.",
    categories: ["Frameworks"],
    website: "https://docs.llamaindex.ai/en/stable/module_guides/workflow/",
    logo: "/logos/llamaindex-workflows.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes:
        "Open-source framework free; LlamaCloud and model APIs are optional paid services.",
    },
    scores: scores(8.3, 8.5, 7.0, 8.0, 6.9, 8.4, 8.4),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Document-heavy RAG agents",
      "Knowledge assistant backends",
      "Python data and search products",
      "Event-driven multi-step pipelines",
      "Teams standardized on LlamaIndex",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "mastra",
    name: "Mastra",
    slug: "mastra",
    tagline: "TypeScript agent framework with workflows, memory, RAG, and evals.",
    description:
      "Mastra is a TypeScript-first framework for shipping agents inside modern web stacks—workflows, memory, RAG, and evals with a DX aimed at full-stack TS teams. It is a strong default when your product is Node/Next and you want coherent primitives without switching to Python. Open source with optional hosted paths as the project matures. Less enterprise-suite packaging than Microsoft/AWS, more product-engineering velocity.",
    categories: ["Frameworks"],
    website: "https://mastra.ai/",
    logo: "/logos/mastra.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes:
        "Open-source core; model APIs and any hosted Mastra offerings billed separately.",
    },
    scores: scores(8.1, 8.0, 8.1, 7.6, 6.3, 8.7, 8.5),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "TypeScript / Node product teams",
      "Agents embedded in web apps",
      "Workflow + memory features",
      "Eval-driven agent development",
      "Startups avoiding Python-only stacks",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "pydantic-ai",
    name: "Pydantic AI",
    slug: "pydantic-ai",
    tagline: "Type-safe Python agents with structured outputs and Pydantic validation.",
    description:
      "Pydantic AI brings Pydantic’s validation culture to agents: typed dependencies, structured tool results, and model-agnostic Python APIs that are easy to test. It fits backend teams that care more about correctness and maintainability than visual builders or multi-agent role metaphors. Multi-agent patterns are supported but the headline value is structured, production-grade Python. MIT-licensed OSS; you pay only for models and infra.",
    categories: ["Frameworks"],
    website: "https://ai.pydantic.dev/",
    logo: "/logos/pydantic-ai.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "MIT-licensed open source; model and hosting costs only.",
    },
    scores: scores(8.4, 8.1, 7.7, 7.1, 6.6, 9.1, 8.7),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Typed Python microservices",
      "Structured tool outputs and validation",
      "Testable agent unit/integration suites",
      "Model-agnostic Python backends",
      "Teams already using Pydantic heavily",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "ag2",
    name: "AG2",
    slug: "ag2",
    tagline: "Open multi-agent conversations from the AutoGen community lineage.",
    description:
      "AG2 continues the conversational multi-agent style popularized by AutoGen: groups of agents that talk, use tools, and involve humans when needed. It is useful for research-style agent swarms and experimental group dynamics more than turnkey enterprise procurement. Open source and self-hostable, with a community-driven pace of change—verify production readiness for your risk profile. Free framework; model costs still apply.",
    categories: ["Frameworks"],
    website: "https://ag2.ai/",
    logo: "/logos/ag2.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0",
      notes: "Open-source multi-agent framework; bring your own models and hosting.",
    },
    scores: scores(7.7, 8.0, 6.5, 7.0, 5.9, 7.8, 8.3),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Conversational multi-agent research",
      "AutoGen-style group chats",
      "Human-in-the-loop experiments",
      "Academic and R&D prototypes",
      "Tool-using agent swarms",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },

  // ── No-Code ─────────────────────────────────────────────────
  {
    id: "make",
    name: "Make",
    slug: "make",
    tagline: "Visual scenario automation across thousands of apps with AI steps.",
    description:
      "Make (formerly Integromat) is a visual automation platform where you connect apps in scenarios and increasingly add AI modules for classification, generation, and agent-like steps. It is built for ops and growth teams who think in multi-step flows, not for engineers who want self-hosted multi-agent graphs. Strengths are breadth of connectors and visual debugging; limits include enterprise governance depth versus Workato and less code-level control than n8n. Pricing scales with operations volume.",
    categories: ["No-Code", "Workflow"],
    website: "https://www.make.com/",
    logo: "/logos/make.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free tier; paid from ~$9+/mo",
      notes:
        "Free plan with limits; Core/Pro/Teams scale by monthly operations. Enterprise available.",
    },
    scores: scores(7.8, 7.2, 8.7, 9.1, 6.7, 6.4, 8.1),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Multi-app ops automation",
      "SMB and mid-market growth teams",
      "Visual scenario builders",
      "Marketing and revops glue work",
      "Teams that outgrew simple zaps",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "n8n",
    name: "n8n",
    slug: "n8n",
    tagline: "Fair-code automation with AI agent nodes and full self-hosting.",
    description:
      "n8n is a workflow automation tool with a visual editor, code nodes, and AI/agent nodes—plus a genuine self-host option that technical teams value for data control. It sits between pure no-code (Zapier/Make) and full frameworks: non-engineers can build flows, while engineers can drop into JS and self-host on Kubernetes. Fair-code licensing means source is available with commercial terms for some uses; n8n Cloud is the hosted path. Excellent value when you need AI-in-the-loop automation without SaaS lock-in.",
    categories: ["No-Code", "Workflow"],
    website: "https://n8n.io/",
    logo: "/logos/n8n.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Self-host free; Cloud from ~$20+/mo",
      notes:
        "Self-host community edition free; n8n Cloud billed by executions. Enterprise for advanced features.",
    },
    scores: scores(8.5, 8.1, 7.9, 8.9, 7.2, 8.3, 8.8),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Self-hosted automation with AI",
      "Technical ops and platform teams",
      "Hybrid low-code + code workflows",
      "Data-sensitive process automation",
      "AI agent steps inside business flows",
    ],
    featured: true,
    lastUpdated: "2026-04-01",
    searchVolume: 110000,
    searchTrend: "rising",
    searchLabel: "Strong and rising automation demand",
    relatedComparisons: [
      {
        title: "n8n vs Make vs Zapier Agents",
        href: "/guides/n8n-vs-make-vs-zapier-agents/",
        note: "Popular comparison",
      },
      {
        title: "Best AI agent platforms for SMBs",
        href: "/guides/best-ai-agent-platforms-for-smbs-2026/",
      },
      {
        title: "AI Agent Pricing Index 2026",
        href: "/guides/ai-agent-platforms-tco-2026/",
      },
    ],
  },
  {
    id: "lindy",
    name: "Lindy",
    slug: "lindy",
    tagline: "No-code agents for email, meetings, and everyday knowledge work.",
    description:
      "Lindy targets founders and operators who want personal or team agents for inbox triage, scheduling, research, and multi-step office tasks without writing code. The product emphasizes natural-language agent setup and SaaS integrations rather than enterprise IAM or self-hosting. It is not a substitute for Bedrock or LangGraph in production engineering stacks, but it can remove hours of repetitive admin work for small teams. Expect subscription tiers; exact public pricing changes often.",
    categories: ["No-Code"],
    website: "https://www.lindy.ai/",
    logo: "/logos/lindy.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free trial; paid plans ~$50+/mo",
      notes:
        "Trial/free limits vary; paid plans by agent usage and seats. Check site for current tiers.",
    },
    scores: scores(7.7, 7.5, 8.9, 7.7, 5.4, 5.7, 7.7),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Founder and exec assistants",
      "Email and calendar automation",
      "Meeting follow-up agents",
      "Sales SDR-style outreach helpers",
      "Non-technical team productivity",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "relevance-ai",
    name: "Relevance AI",
    slug: "relevance-ai",
    tagline: "Visual multi-agent workforces for research, support, and ops.",
    description:
      "Relevance AI lets business teams design multi-agent “workforces” for research, support, and operational tasks with a visual builder, tools, and monitoring. It is oriented to non-engineers who still need multi-step agent collaboration, not to developers shipping SDKs into their own products. Useful for GTM and ops experiments; enterprise features exist but deep self-host/open-source is not the core pitch. Pricing is typically usage- and seat-based—confirm current plans on the site.",
    categories: ["No-Code"],
    website: "https://relevanceai.com/",
    logo: "/logos/relevance-ai.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free tier; paid usage-based",
      notes:
        "Free/starter available; team plans scale with credits and seats. Enterprise on request.",
    },
    scores: scores(8.0, 8.1, 8.3, 7.9, 6.9, 6.5, 7.6),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Multi-agent research workforces",
      "Support and ops process agents",
      "GTM teams without engineers",
      "Visual agent orchestration",
      "Business-user agent monitoring",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "gumloop",
    name: "Gumloop",
    slug: "gumloop",
    tagline: "Template-first AI workflows for scraping, enrichment, and content.",
    description:
      "Gumloop is a drag-and-drop AI automation builder focused on templates for web scraping, data enrichment, and content pipelines. It optimizes for time-to-first-workflow for growth and ops users, not for enterprise RPA or self-hosted agent frameworks. Credit-based pricing makes cost predictable for experiments but can climb with volume. Choose it for quick GTM automation; choose n8n/Make for broader integration-centric ops.",
    categories: ["No-Code"],
    website: "https://www.gumloop.com/",
    logo: "/logos/gumloop.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free credits; paid plans credit-based",
      notes:
        "Usage/credit pricing; free tier for trials. Higher tiers unlock more credits and features.",
    },
    scores: scores(7.5, 7.3, 8.6, 7.4, 5.1, 6.0, 7.9),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Lead and data enrichment",
      "Web scraping pipelines",
      "Content generation workflows",
      "Growth experiment automation",
      "Template-driven AI ops",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "stackai",
    name: "StackAI",
    slug: "stackai",
    tagline: "Enterprise no-code agents with SSO, RBAC, and deployment options.",
    description:
      "StackAI targets enterprises that want no-code or low-code internal agents with stronger security packaging—SSO, RBAC, and deployment options including private environments. It is a fit for citizen-developer programs inside banks, healthcare, and large IT orgs that reject pure consumer agent tools. Expect sales-led pricing and longer pilots than self-serve no-code apps. Less developer framework flexibility than LangGraph; more procurement-friendly than indie tools.",
    categories: ["No-Code", "Enterprise"],
    website: "https://www.stack-ai.com/",
    logo: "/logos/stackai.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales",
      notes:
        "Team and enterprise plans; quote-based. Often includes security/compliance packaging.",
    },
    scores: scores(7.8, 7.6, 8.0, 7.7, 8.4, 6.4, 7.0),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Internal enterprise knowledge agents",
      "Citizen developer programs",
      "SSO/RBAC-required environments",
      "Private or VPC deployments",
      "Security-reviewed no-code AI",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "dust",
    name: "Dust",
    slug: "dust",
    tagline: "Company knowledge assistants with tools, spaces, and team workflows.",
    description:
      "Dust helps teams build internal assistants over company data with customizable tools, shared spaces, and collaboration features. It is popular with startups and mid-size product orgs that want governed knowledge agents without standing up a full agent framework. Open-source roots and self-host options appeal to technical buyers; hosted plans serve everyone else. Not a full CRM/ITSM agent suite—think internal knowledge and workflow helpers.",
    categories: ["No-Code"],
    website: "https://dust.tt/",
    logo: "/logos/dust.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free plan; paid seats",
      notes:
        "Free tier available; paid plans by seats/usage. Self-host options for technical teams.",
    },
    scores: scores(7.9, 7.7, 8.2, 7.6, 7.0, 7.1, 7.8),
    features: {
      multiAgent: true,
      openSource: true,
      selfHost: true,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Internal company knowledge agents",
      "Startup ops and support teams",
      "Custom tool-augmented assistants",
      "Shared team AI workspaces",
      "Self-host-friendly knowledge bots",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "taskade-agents",
    name: "Taskade Agents",
    slug: "taskade-agents",
    tagline: "Agents inside Taskade projects for planning, generation, and execution.",
    description:
      "Taskade Agents live inside Taskade’s project and knowledge workspace, helping teams outline plans, generate content, and run lightweight agent templates where work already happens. It is an all-in-one productivity play rather than a standalone agent platform for enterprise process automation. Best for small teams already considering Taskade for notes and projects; not for deep CRM/ITSM automation. Freemium pricing with Pro/Business upgrades.",
    categories: ["No-Code"],
    website: "https://www.taskade.com/agents",
    logo: "/logos/taskade-agents.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free tier; Pro from ~$8–20/user/mo",
      notes:
        "Free plan with limits; Pro/Business unlock more AI/agent usage. Confirm current AI quotas.",
    },
    scores: scores(7.2, 6.9, 8.5, 7.0, 5.0, 5.5, 7.6),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Project planning with AI agents",
      "Small team all-in-one workspaces",
      "Lightweight agent templates",
      "Content and outline generation",
      "Taskade-native collaboration",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "zapier-agents",
    name: "Zapier Agents",
    slug: "zapier-agents",
    tagline: "Natural-language agents that act across Zapier’s app ecosystem.",
    description:
      "Zapier Agents let non-developers describe goals that agents pursue using Zapier’s massive catalog of app actions and Zaps. The value is breadth of SaaS connectivity and familiar Zapier account management, not advanced multi-agent graph control or self-hosting. Ideal for SMBs already paying for Zapier who want more autonomous workflows; large enterprises may prefer Workato or platform-native agents. Pricing ties to Zapier plans and agent usage limits.",
    categories: ["No-Code", "Workflow"],
    website: "https://zapier.com/agents",
    logo: "/logos/zapier-agents.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Included/add-on with Zapier plans",
      notes:
        "Availability and limits depend on Zapier plan tier; higher tiers unlock more agent activity.",
    },
    scores: scores(7.9, 7.4, 8.8, 9.3, 6.5, 6.1, 7.8),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "SaaS-heavy small businesses",
      "Citizen automators on Zapier",
      "Cross-app agent actions",
      "Lightweight GTM automation",
      "Teams avoiding custom engineering",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },

  // ── Coding ──────────────────────────────────────────────────
  {
    id: "claude-code",
    name: "Claude Code",
    slug: "claude-code",
    tagline: "Terminal-native agentic coding with deep multi-file Claude reasoning.",
    description:
      "Claude Code is Anthropic’s CLI-oriented coding agent that plans changes, edits files, runs commands, and works across large repos with Claude’s long-context strengths. It fits engineers who live in the terminal and want an agent that can execute workflows, not only autocomplete in an IDE. MCP support extends tools beyond the default environment; it is not a hosted “ticket to PR” product like Devin. Access is typically via Claude subscription tiers or API-linked usage—confirm current packaging.",
    categories: ["Coding"],
    website: "https://docs.anthropic.com/en/docs/claude-code",
    logo: "/logos/claude-code.svg",
    pricing: {
      model: "usage",
      startingPrice: "Claude Pro/Max or API usage",
      notes:
        "Often gated by Claude subscription (Pro/Max) or API spend; no separate self-serve “free forever” pro tier guaranteed.",
    },
    scores: scores(8.9, 9.2, 7.7, 7.1, 6.4, 9.0, 7.9),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "Repo-wide refactors and migrations",
      "CLI-first senior engineers",
      "Long-context multi-file edits",
      "MCP-extended coding workflows",
      "Claude-centric development teams",
    ],
    featured: true,
    lastUpdated: "2026-04-01",
    searchVolume: 165000,
    searchTrend: "rising",
    searchLabel: "Strong and rising interest",
    relatedComparisons: [
      {
        title: "Claude Code Guide Hub",
        href: "/guides/claude-code/",
        note: "Setup, pricing, skills, MCP",
      },
      {
        title: "Claude Code vs Cursor",
        href: "/guides/claude-code-vs-cursor/",
        note: "Popular comparison",
      },
      {
        title: "Claude Code vs Codex",
        href: "/guides/claude-code/vs-codex/",
      },
      {
        title: "Claude Code pricing",
        href: "/guides/claude-code/pricing/",
      },
      {
        title: "Install & set up Claude Code",
        href: "/guides/claude-code/setup/",
      },
      {
        title: "Best MCP servers for Claude Code",
        href: "/guides/claude-code/mcp/",
      },
      {
        title: "Best AI coding agents 2026",
        href: "/guides/best-ai-coding-agents-2026/",
      },
    ],
  },
  {
    id: "cursor",
    name: "Cursor",
    slug: "cursor",
    tagline: "AI-native IDE with agent mode for multi-file product engineering.",
    description:
      "Cursor is a VS Code–based editor built around AI pair programming: Tab completion, Composer/agent modes, codebase indexing, and multi-file edits that stay in the developer’s daily loop. It is the default “agentic IDE” choice for many startup and product engineering teams that want speed without leaving the editor. Model choice and privacy modes matter for enterprise buyers; self-hosting the IDE is not the product model. Free tier exists; heavy agent use generally needs Pro or Business.",
    categories: ["Coding"],
    website: "https://cursor.com/",
    logo: "/logos/cursor.svg",
    pricing: {
      model: "freemium",
      startingPrice: "Free tier; Pro ~$20/mo",
      notes:
        "Hobby free with limits; Pro/Business for higher limits, teams, and admin. Usage caps vary by plan.",
    },
    scores: scores(9.0, 8.9, 9.1, 7.6, 6.9, 8.9, 8.3),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "Day-to-day product engineering",
      "Multi-file feature implementation",
      "Startup and scale-up eng teams",
      "Developers who want an AI-first IDE",
      "Codebase-aware refactors in-editor",
    ],
    featured: true,
    lastUpdated: "2026-04-01",
    searchVolume: 246000,
    searchTrend: "rising",
    searchLabel: "Very high demand, still rising",
    relatedComparisons: [
      {
        title: "Claude Code vs Cursor",
        href: "/guides/claude-code-vs-cursor/",
        note: "Popular comparison",
      },
      {
        title: "Claude Code vs Codex",
        href: "/guides/claude-code/vs-codex/",
      },
      {
        title: "Best AI coding agents 2026",
        href: "/guides/best-ai-coding-agents-2026/",
      },
      {
        title: "AI Agent Pricing Index",
        href: "/guides/ai-agent-platforms-tco-2026/",
      },
    ],
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex",
    slug: "openai-codex",
    tagline: "Cloud coding agent for delegated software tasks in OpenAI’s stack.",
    description:
      "OpenAI Codex (as a product/agent experience) targets delegated software work: higher-level tasks run in a cloud environment with repo context rather than only inline IDE completion. It fits teams already on ChatGPT/OpenAI who want async coding agents tightly bound to that ecosystem. Compared with Cursor, you trade local IDE control for cloud agent runs; compared with Devin, packaging and positioning differ by OpenAI’s current product surface. Pricing is subscription- or usage-linked to OpenAI offerings—not a free self-host tool.",
    categories: ["Coding"],
    website: "https://openai.com/codex/",
    logo: "/logos/openai-codex.svg",
    pricing: {
      model: "paid",
      startingPrice: "Subscription / usage-based",
      notes:
        "Tied to ChatGPT Plus/Pro/Team/Enterprise or API packaging; check OpenAI for current access and limits.",
    },
    scores: scores(8.5, 8.7, 7.5, 7.3, 6.9, 8.0, 7.5),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Delegated cloud coding tasks",
      "OpenAI-standardized eng orgs",
      "Async agent implementation runs",
      "Teams already on ChatGPT Enterprise",
      "Prototyping agentic software work",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
    relatedComparisons: [
      {
        title: "Claude Code vs Codex",
        href: "/guides/claude-code/vs-codex/",
        note: "Popular comparison",
      },
      {
        title: "Claude Code vs Cursor",
        href: "/guides/claude-code-vs-cursor/",
      },
      {
        title: "Best AI coding agents 2026",
        href: "/guides/best-ai-coding-agents-2026/",
      },
      {
        title: "AI Agent Pricing Index",
        href: "/guides/ai-agent-platforms-tco-2026/",
      },
    ],
  },
  {
    id: "github-copilot-agents",
    name: "GitHub Copilot Agents",
    slug: "github-copilot-agents",
    tagline: "Agentic coding and PR help inside GitHub and your existing editor.",
    description:
      "GitHub Copilot’s agent experiences extend beyond autocomplete into multi-step coding, issue/PR assistance, and repository-aware tasks integrated with GitHub’s workflow. For enterprises already on GitHub Enterprise Cloud, it is often the lowest-friction path to standardized AI coding with admin controls and SSO. MCP and multi-agent capabilities continue to expand inside the GitHub/Microsoft ecosystem. Pricing is clear: Individual, Business, and Enterprise SKUs rather than pure usage mystery.",
    categories: ["Coding", "Enterprise"],
    website: "https://github.com/features/copilot",
    logo: "/logos/github-copilot-agents.svg",
    pricing: {
      model: "paid",
      startingPrice: "From ~$10/user/mo",
      notes:
        "Copilot Individual ~$10/mo; Business ~$19/user/mo; Enterprise higher with policies. Verify current list prices.",
    },
    scores: scores(8.4, 8.3, 8.6, 8.7, 8.5, 8.1, 7.9),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: true,
      computerUse: false,
    },
    bestFor: [
      "GitHub-centric engineering orgs",
      "Enterprise IDE and policy standards",
      "PR review and issue-to-code agents",
      "Teams needing SSO and admin controls",
      "Mixed VS Code / JetBrains fleets",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "devin",
    name: "Devin",
    slug: "devin",
    tagline: "Autonomous software engineer agent for long-running tickets and PRs.",
    description:
      "Devin (Cognition) is positioned as an autonomous software engineer: plan, implement, and open PRs for tickets in a sandboxed environment with long-running sessions. Buyers pilot it for backlog burn-down and well-scoped engineering tasks, not as a free daily IDE replacement like Cursor. Computer-use style capabilities help it operate tools in its environment; enterprise packaging and access are sales-led. Expect custom pricing and careful ROI measurement on real ticket types.",
    categories: ["Coding"],
    website: "https://devin.ai/",
    logo: "/logos/devin.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales / team plans",
      notes:
        "Primarily team/enterprise packaging; not a classic freemium IDE. Ask for current ACU or seat pricing.",
    },
    scores: scores(8.2, 8.7, 6.9, 6.6, 6.5, 7.1, 6.7),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Autonomous ticket-to-PR pilots",
      "Long-running implementation jobs",
      "Well-scoped backlog burn-down",
      "R&D evaluation of software agents",
      "Teams willing to adapt workflow to agents",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "cline",
    name: "Cline",
    slug: "cline",
    tagline: "Open-source VS Code agent with plan/act modes, tools, and MCP.",
    description:
      "Cline is an open-source autonomous coding agent for VS Code and compatible editors, with plan/act workflows, terminal tools, and MCP for extending capabilities. You bring your own model API keys, which means maximum model flexibility and control—and you own cost and ops. Ideal for power users and teams that refuse closed IDE lock-in; enterprise support and polish vary versus Cursor/Copilot. Free extension; spend is on models.",
    categories: ["Coding"],
    website: "https://cline.bot/",
    logo: "/logos/cline.svg",
    pricing: {
      model: "open-source",
      startingPrice: "$0 + your model APIs",
      notes:
        "Extension is free/open source; you pay OpenAI, Anthropic, or other providers for tokens.",
    },
    scores: scores(8.3, 8.4, 7.6, 7.5, 5.7, 8.8, 9.1),
    features: {
      multiAgent: false,
      openSource: true,
      selfHost: true,
      mcpSupport: true,
      computerUse: true,
    },
    bestFor: [
      "BYO-model coding agents",
      "Open-source IDE agent workflows",
      "MCP tool experimentation",
      "Cost-controlled power users",
      "Teams avoiding IDE lock-in",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },

  // ── Browser ─────────────────────────────────────────────────
  {
    id: "openai-computer-use",
    name: "OpenAI computer-use",
    slug: "openai-computer-use",
    tagline: "Model capability for GUI and browser control via the OpenAI API.",
    description:
      "OpenAI computer-use is a model/tool capability—not a full product suite—that lets models observe screenshots and emit actions to operate a computer or browser. Builders embed it in agents for form filling, QA, and legacy UI automation when APIs do not exist. You still need a runtime host, safety layers, and evaluation; this is a primitive. Billing is through supporting model usage on the OpenAI platform.",
    categories: ["Browser"],
    website: "https://platform.openai.com/docs/guides/tools-computer-use",
    logo: "/logos/openai-computer-use.svg",
    pricing: {
      model: "usage",
      startingPrice: "API usage-based",
      notes:
        "No standalone SKU; billed with eligible OpenAI model/tool usage. Watch token and step costs.",
    },
    scores: scores(8.0, 8.5, 6.4, 7.0, 6.7, 7.9, 7.3),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Browser automation agents",
      "Legacy GUI task completion",
      "QA and form-filling bots",
      "OpenAI-platform builders",
      "API-scarce enterprise UIs",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "anthropic-claude-computer-use",
    name: "Anthropic Claude computer use",
    slug: "anthropic-claude-computer-use",
    tagline: "Claude tool for screen-grounded mouse and keyboard computer control.",
    description:
      "Claude computer use lets Claude see a screen and control mouse/keyboard to complete multi-step computer tasks—core infrastructure for browser and desktop agents. Like OpenAI’s equivalent, it is a capability you integrate, not a no-code product with connectors and SLAs. Strong when your agent stack is already Claude-centric and tasks require UI interaction. Priced via Claude API usage; design tight allowlists and human review for production.",
    categories: ["Browser"],
    website:
      "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool",
    logo: "/logos/anthropic-claude-computer-use.svg",
    pricing: {
      model: "usage",
      startingPrice: "API usage-based",
      notes:
        "Billed with Claude model/tool usage. No separate flat “computer use product” price.",
    },
    scores: scores(8.3, 8.7, 6.5, 6.9, 6.8, 8.0, 7.4),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Claude-based browser agents",
      "Desktop task automation",
      "Computer-use prototypes",
      "UI workflows without APIs",
      "Safety-conscious computer-use pilots",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },

  // ── Workflow ────────────────────────────────────────────────
  {
    id: "workato",
    name: "Workato",
    slug: "workato",
    tagline: "Enterprise iPaaS with AI-assisted recipes and process automation.",
    description:
      "Workato is an enterprise integration and automation platform (iPaaS) where recipes connect SaaS and on-prem systems with governance, environments, and AI-assisted building. It is aimed at IT and business technologists who need audited cross-app processes—not indie multi-agent experiments. Agentic features enhance recipes and automation; the core value remains enterprise integration depth. Pricing is contract-based and often material—budget for platform + recipe volume.",
    categories: ["Workflow", "Enterprise"],
    website: "https://www.workato.com/",
    logo: "/logos/workato.svg",
    pricing: {
      model: "enterprise",
      startingPrice: "Contact sales",
      notes:
        "Enterprise contracts; pricing typically reflects workspace, recipes, and support tier.",
    },
    scores: scores(8.1, 7.7, 7.4, 9.2, 9.1, 7.0, 6.9),
    features: {
      multiAgent: true,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: false,
    },
    bestFor: [
      "Enterprise iPaaS programs",
      "Cross-SaaS process automation",
      "IT + business co-built recipes",
      "Governed multi-environment automation",
      "Complex B2B integration estates",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
  },
  {
    id: "power-automate",
    name: "Power Automate",
    slug: "power-automate",
    tagline: "Microsoft cloud flows and desktop RPA with AI Builder copilots.",
    description:
      "Power Automate provides cloud flows, desktop RPA, and AI Builder capabilities tightly linked to Microsoft 365, Dataverse, and Azure AD. It is the default automation layer for Microsoft-centric enterprises and citizen developers who need approvals, connectors, and desktop UI automation. Not a general multi-agent framework, but a practical place to embed AI into business processes you already run on Power Platform. Licensing is per-user, per-flow, or capacity-based—map carefully before scale.",
    categories: ["Workflow", "Enterprise"],
    website:
      "https://www.microsoft.com/power-platform/products/power-automate",
    logo: "/logos/power-automate.svg",
    pricing: {
      model: "paid",
      startingPrice: "Per user / per flow plans",
      notes:
        "Premium connectors and RPA need paid plans; often bundled with Microsoft 365/Power Platform. See Microsoft licensing guides.",
    },
    scores: scores(8.0, 7.4, 7.9, 9.1, 8.9, 6.7, 7.5),
    features: {
      multiAgent: false,
      openSource: false,
      selfHost: false,
      mcpSupport: false,
      computerUse: true,
    },
    bestFor: [
      "Microsoft 365 process automation",
      "Desktop RPA for legacy apps",
      "Citizen developer programs",
      "Approval and document workflows",
      "Dataverse-centric ops teams",
    ],
    featured: false,
    lastUpdated: "2026-04-01",
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
export function getToolsByCategory(
  category: Tool["categories"][number],
): Tool[] {
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
  const sorted = [...tools].sort(
    (a, b) => b.scores.overall - a.scores.overall,
  );
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

  const ranked = (
    sameCategory.length >= limit
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

/** Vendor / company line for detail heroes. */
export function getToolCompany(tool: Tool): string {
  if (tool.company) return tool.company;
  try {
    const host = new URL(tool.website).hostname.replace(/^www\./, "");
    const root = host.split(".")[0] ?? host;
    return root.charAt(0).toUpperCase() + root.slice(1);
  } catch {
    return "Independent vendor";
  }
}

/** 1-based rank by overall score within the primary category (or full catalog). */
export function getCategoryRank(tool: Tool): { rank: number; total: number } {
  const primary = tool.categories[0];
  const pool = primary
    ? tools.filter((t) => t.categories.includes(primary))
    : [...tools];
  const sorted = [...pool].sort((a, b) => b.scores.overall - a.scores.overall);
  const idx = sorted.findIndex((t) => t.id === tool.id);
  return {
    rank: idx >= 0 ? idx + 1 : sorted.length,
    total: sorted.length,
  };
}

/**
 * Pricing cards for the detail page.
 * Uses explicit `pricing.plans` when present; otherwise synthesizes tiers from model data.
 */
export function getPricingPlans(tool: Tool): PricingPlan[] {
  if (tool.pricing.plans && tool.pricing.plans.length > 0) {
    return tool.pricing.plans;
  }

  const start = tool.pricing.startingPrice ?? "See website";
  const notes = tool.pricing.notes;
  const siteCta = "Visit website";

  switch (tool.pricing.model) {
    case "free":
      return [
        {
          id: "free",
          name: "Free",
          price: start.includes("$") ? start : "$0",
          period: "/month",
          description: "Core product available at no charge.",
          features: [
            "Public free tier",
            notes ?? "Confirm limits on vendor site",
            "Community support",
          ],
          cta: siteCta,
          popular: true,
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          description: "Security, admin, and volume options when offered.",
          features: [
            "SSO / admin controls when available",
            "Priority support",
            "Custom terms",
          ],
          cta: "Contact sales",
        },
      ];
    case "open-source":
      return [
        {
          id: "oss",
          name: "Open source",
          price: "$0",
          description: "Self-host the core stack.",
          features: [
            "Open-source license",
            "Self-host / self-manage",
            notes ?? "Optional paid cloud or support",
          ],
          cta: siteCta,
          popular: true,
        },
        {
          id: "cloud",
          name: "Managed / cloud",
          price: start.includes("Contact") ? "Custom" : start,
          description: "Optional hosted or enterprise add-ons.",
          features: [
            "Managed runtime when offered",
            "Team collaboration",
            "Vendor support",
          ],
          cta: siteCta,
        },
      ];
    case "freemium":
      return [
        {
          id: "free",
          name: "Free",
          price: "$0",
          period: "/month",
          description: "Try before you buy.",
          features: [
            "Limited free tier",
            "Core agent features",
            "Community docs",
          ],
          cta: "Get started",
        },
        {
          id: "plus",
          name: "Pro / Plus",
          price: start.replace(/\/mo(nth)?/i, "").trim() || "$20",
          period: "/month",
          description: "For individuals shipping agents daily.",
          features: [
            "Higher limits",
            "Priority model access when applicable",
            notes ?? "Confirm current list price",
          ],
          cta: siteCta,
          popular: true,
        },
        {
          id: "team",
          name: "Team",
          price: "Custom",
          period: "/seat",
          description: "Shared workspaces and admin.",
          features: [
            "Team seats",
            "Shared workspaces",
            "Admin controls",
          ],
          cta: siteCta,
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          description: "Security, SSO, and procurement fit.",
          features: ["SSO / SCIM", "Security review", "Dedicated support"],
          cta: "Contact sales",
        },
      ];
    case "usage":
      return [
        {
          id: "usage",
          name: "Usage-based",
          price: start,
          description: "Pay for tokens, runs, or capacity used.",
          features: [
            "Metered usage",
            notes ?? "Forecast carefully for high volume",
            "Scale with demand",
          ],
          cta: siteCta,
          popular: true,
        },
        {
          id: "committed",
          name: "Committed / enterprise",
          price: "Custom",
          description: "Discounts and capacity packs for scale.",
          features: [
            "Volume commitments",
            "Enterprise support",
            "Security & compliance packages",
          ],
          cta: "Contact sales",
        },
      ];
    case "enterprise":
      return [
        {
          id: "standard",
          name: "Platform",
          price: start.includes("Contact") ? "Custom" : start,
          description: "Sold via enterprise agreements.",
          features: [
            notes ?? "Tied to existing cloud / suite licensing",
            "Admin & governance",
            "Vendor support",
          ],
          cta: "Contact sales",
          popular: true,
        },
        {
          id: "enterprise",
          name: "Enterprise+",
          price: "Custom",
          description: "Security reviews, SLAs, and custom capacity.",
          features: [
            "SSO / IAM integration",
            "Procurement & legal packaging",
            "Dedicated success when available",
          ],
          cta: "Contact sales",
        },
      ];
    case "paid":
    default:
      return [
        {
          id: "starter",
          name: "Starter",
          price: start.replace(/\/mo(nth)?/i, "").trim() || "Paid",
          period: start.toLowerCase().includes("mo") ? "/month" : undefined,
          description: "Entry paid plan.",
          features: [
            "Full product access on starter tier",
            notes ?? "Confirm limits on vendor site",
            "Standard support",
          ],
          cta: siteCta,
        },
        {
          id: "pro",
          name: "Pro",
          price: "See website",
          period: "/month",
          description: "Higher limits for power users.",
          features: [
            "Higher usage caps",
            "Team features when offered",
            "Priority support",
          ],
          cta: siteCta,
          popular: true,
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          description: "For larger orgs and compliance needs.",
          features: ["SSO", "Admin controls", "Custom contracts"],
          cta: "Contact sales",
        },
      ];
  }
}

