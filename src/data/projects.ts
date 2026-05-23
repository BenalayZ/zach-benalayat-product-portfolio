import seamlessApi from "@/assets/projects/seamless-api.jpg";
import dataEngine from "@/assets/projects/data-engine.jpg";
import seamlessMcp from "@/assets/projects/seamless-mcp.jpg";
import seamlessFastData from "@/assets/projects/seamless-fast-data.jpg";
import inseegoConnect from "@/assets/projects/inseego-connect.jpg";
import latinHyperTexts from "@/assets/projects/latin-hyper-texts.jpg";
import theArc from "@/assets/projects/the-arc.png";
import productAnalysis from "@/assets/projects/seamless-product-analysis.jpg";

export type RoleSignal = "Senior PM" | "Staff Analyst" | "Senior BI";

export type Project = {
  slug: string;
  title: string;
  date: string;
  headline?: string;
  summary: string;
  image: string;
  tags: string[];
  problem: string;
  role: string;
  strategy: string;
  insights: string;
  outcome: string;
  featured?: boolean;
  signals?: RoleSignal[];
};

export const projects: Project[] = [
  {
    slug: "product-tier-analysis",
    title: "Seamless Tier × CRM-Connect Analysis",
    date: "May 2022",
    headline: "Reframed the growth bet from 'more Free signups' to 'CRM-connect the Basic base'",
    summary: "First analysis shipped at Seamless.AI. Segmented ~590K searches by license tier and CRM-connection status to find where product value actually accrued.",
    image: productAnalysis,
    tags: ["Product Analytics", "Segmentation", "Funnel Analysis", "SQL", "Monetization", "Negative Result"],
    problem:
      "Onboarding deliverable at Seamless.AI. Leadership assumed Free-tier acquisition was the growth lever. Test the assumption against actual search and CRM-connection behavior across ~590K searches.",
    role: "Product Analyst — independent contributor",
    strategy:
      "Segment every search by license tier (Free / Basic / Premium) crossed with CRM-connection status. CRM-connected searches are the monetizable signal — Free is locked out of CRM by design. Three tiers × two states = one chart that answers 'where does the value actually live?'",
    insights:
      "Free generated the largest raw volume (~159K searches) but zero CRM signal by definition. Basic was the real conversion battleground — searches split nearly 50/50 connected vs not (~111K / ~102K). Premium was overwhelmingly connected (~65K / ~22K), proving the funnel works once users get there. A separate filter-usage analysis killed a planned advanced-filter UI bet — filter usage was uniform across tiers, no Premium 'power user' pattern existed.",
    outcome:
      "Killed the planned advanced-filter UI investment outright and redirected the roadmap slot to a CRM-connect funnel for Basic users. Reframed the growth thesis from 'more Free signups' to 'CRM-connect the Basic base.' Became the baseline segmentation the product org referenced through the following planning cycle.",
    featured: true,
    signals: ["Staff Analyst", "Senior BI"],
  },
  {
    slug: "seamless-api",
    title: "Seamless API",
    date: "May 2025",
    headline: "0→1 launch to $1M ARR — enterprise upside ahead",
    summary: "Built and scaled a customer-facing API from zero to $1M ARR across SMB and mid-market, with enterprise expansion underway.",
    image: seamlessApi,
    tags: ["0→1", "B2B SaaS", "Customer-Facing", "Agentic AI", "SQL", "Power BI", "Full PDLC", "Scope Trade-offs", "GTM"],
    problem:
      "Stand up a net-new, customer-facing API that lets users integrate Seamless Contact & Company data directly into their pipelines — no browser, no manual workflows.",
    role: "Analytics Lead & Product Owner — 0→1",
    strategy:
      "Ship a focused MVP that mirrors the core Seamless experience async and browserless, then scale coverage, reliability, and segment fit toward enterprise. Anchored every scope decision to one metric: async credit consumption — because credits are how the API monetizes.",
    insights:
      "User interviews guided framing; competitive analysis informed technical docs and architecture; internal developer interviews surfaced reconciliation gaps; and stakeholder scrums highlighted marketing and sales blind spots. Deliberately de-scoped Seamless Connect and email-campaign automation from v1 — neither consumed credits, so neither moved the revenue metric the MVP existed to prove. Both were re-scoped into the MCP launch where the surface area justified the build.",
    outcome:
      "Took the product from inception to $1M ARR in year one — primarily SMB and mid-market, where enterprise represents the larger remaining wedge. Integrated with every major AI platform and set up as the scaling lane for the next ARR tier.",
    featured: true,
    signals: ["Senior PM"],
  },
  {
    slug: "data-engine-4",
    title: "Data Engine 4.0",
    date: "Dec 2024",
    headline: "20% lower AWS spend, deduped data",
    summary: "Rebuilt the Seamless AI Data Engine — better coverage, deduped data, 20% AWS savings.",
    image: dataEngine,
    tags: ["ETL", "Snowflake", "Python", "Data Architecture", "Semantic Modeling", "Holdout Validation", "Statistical Analysis"],
    problem: "Improve the overall data quality and health of the Seamless AI Data Engine.",
    role: "Product Owner & Analytics Lead",
    strategy:
      "End-to-end review of the existing Data Engine: source ingestion, identity resolution, the star-schema semantic layer feeding downstream reporting, and incremental refresh cadence. Optimized for delivery time, quality, deduplication, and unit cost.",
    insights:
      "Interviews with stakeholders on prior DE releases and Data Engineering leadership surfaced re-architecture and cost-savings opportunities. New dedup logic was validated with a champion/challenger holdout — ran the old and new identity-resolution passes against a labeled sample, measured false-merge and miss rates before promoting the challenger to production. The semantic layer was rebuilt around a stable surrogate-key dimension to make incremental refresh safe.",
    outcome:
      "Increased contact data coverage and quality, shipped a unique ID system to handle data updates over time, and reduced AWS costs by 20%.",
    featured: true,
    signals: ["Staff Analyst", "Senior BI"],
  },
  {
    slug: "seamless-mcp",
    title: "Seamless MCP",
    date: "2025",
    headline: "Launched on GPT + Claude in one quarter",
    summary: "Launched API 2.0 alongside MCP on the GPT and Claude stores in a single quarter.",
    image: seamlessMcp,
    tags: ["Customer-Facing", "Agentic AI", "MCP", "PRD", "Cross-functional"],
    problem: "Integrate existing and future Seamless API functionality with modern AI platforms.",
    role: "Product Manager & Analytics",
    strategy: "Don't reinvent the wheel — focus on the shortest path to delivering core functionality.",
    insights:
      "Conversations with senior AI engineers identified MCP as the most efficient path versus custom automation. Wrote PRD and functional requirements; engineering implemented.",
    outcome:
      "Simultaneous launch of API 2.0 and MCP on the GPT and Claude stores, covering the full Seamless feature set — inception to release in one quarter.",
    signals: ["Senior PM"],
  },
  {
    slug: "seamless-fast-data",
    title: "Seamless Fast Data",
    date: "2025",
    headline: "15x faster execution, 30% less compute",
    summary: "Cut data lag from twice-monthly to every two hours, 15x faster execution.",
    image: seamlessFastData,
    tags: ["Real-Time", "Event Streaming", "Data Pipelines", "Scope Trade-offs"],
    problem: "Decrease the lag between updated data hitting the data lake and being live in the app.",
    role: "Product Owner",
    strategy:
      "Focus on the highest-demand attributes first — job changes and individual contact name updates. De-scoped real-time ingest of corporate structure and acquisitions from the pipeline; demand signal was weak and the pipeline cost didn't justify it.",
    insights:
      "Mapped the change-data flow across event broker, real-time processing, cloud storage, and the data warehouse to identify the highest-leverage transformations.",
    outcome:
      "Went from a twice-monthly update cycle to weekly to every two hours with zero platform downtime. Execution time down 15x; resource usage down 30%.",
    signals: ["Senior PM"],
  },
  {
    slug: "inseego-connect",
    title: "Inseego Connect — Sales BI Model",
    date: "Mar 2022 (model still in production)",
    headline: "$1M+ ARR uplift via GTM re-targeting — model still in production",
    summary: "Power BI semantic model on government contracts. Still in production — sales leadership reviews weekly, drives ongoing IoT targeting decisions.",
    image: inseegoConnect,
    tags: ["Power BI", "Semantic Modeling", "Star Schema", "RLS", "DAX", "Incremental Refresh", "SQL", "Python", "Recurring BI Artifact"],
    problem: "Inseego IoT products were underperforming within Inseego Connect partner channels. Sales needed an always-on view of where IoT actually belonged in the government-contract book — not a one-off slide.",
    role: "BI Analyst & Owner",
    strategy:
      "Build a recurring BI artifact, not a slide deck. Python ETL into a star-schema semantic model (contracts → segments → products), surrogate keys for incremental refresh, RLS by sales region so each rep only sees their book, DAX measures for contract-value share and IoT attach rate. Published to a workspace sales leadership reviews on a weekly cadence.",
    insights:
      "The model surfaced that the highest-value Connect contracts were almost entirely phone provisioning, not IoT. Smaller state-level contracts had far more IoT buying power. Funnel analysis exposed that we were pushing IoT at the wrong segment. Because the model refreshes incrementally, the same insight kept compounding as new contract data landed — California and New York targeting decisions trace back to a measure on this dashboard.",
    outcome:
      "$1M+ ARR uplift in the first re-targeting cycle. Model is still the system of record for IoT-vs-phone contract mix — referenced in QBRs, used to size new state-contract bids, and the template later teams cloned for adjacent segments.",
    featured: true,
    signals: ["Staff Analyst", "Senior BI"],
  },
  {
    slug: "latin-hyper-texts",
    title: "Latin Hyper-Texts",
    date: "Apr 2022",
    headline: "Cited in dozens of musicology journals",
    summary: "A student-managed platform for annotating digitized Latin manuscripts.",
    image: latinHyperTexts,
    tags: ["Customer-Facing", "Digital Scholarship", "Full PDLC", "UX Design", "Survey Metrics"],
    problem:
      "Create a platform for students to research, annotate, and collaborate on archives of digitized Latin manuscripts.",
    role: "Product Owner & Lead Developer",
    strategy:
      "Divide and conquer. Build a full-service database with image hosting and integrate an existing digital annotation tool — all maintainable by low-tech students.",
    insights:
      "Qualtrics surveys after every training session shaped UX. Competitive analysis informed hosting and database tooling choices.",
    outcome:
      "Launched with a student-managed database and Digital Mappa annotation tool. Cited in dozens of musicology journals.",
    featured: true,
    signals: ["Senior BI"],
  },
  {
    slug: "the-arc",
    title: "The Arc Southern Maryland",
    date: "2020",
    headline: "−1 FTE, 46% faster course turnaround",
    summary: "CaseWorthy rollout cut billing headcount by 1 FTE and course turnaround by 46%.",
    image: theArc,
    tags: ["Customer-Facing", "Non-Profit", "Implementation", "ETL", "UX Design"],
    problem:
      "Build a custom CaseWorthy implementation to give The Arc a centralized operational hub and learning management system.",
    role: "Integration Specialist & Owner",
    strategy:
      "Identify key needs. Arc wanted a smooth transition with minimal training — keep it simple.",
    insights:
      "Regular customer meetings refined project scope; data engineering check-ins kept ETL aligned with input formats. Focused on clean, easy UX.",
    outcome:
      "Reduced billing staffing needs by one FTE. Records are auto-validated against billing rules before entering the queue. Course turnaround time down 46%.",
    signals: ["Staff Analyst"],
  },
];
