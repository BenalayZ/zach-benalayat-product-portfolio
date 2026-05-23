import seamlessApi from "@/assets/projects/seamless-api.jpg";
import dataEngine from "@/assets/projects/data-engine.jpg";
import seamlessMcp from "@/assets/projects/seamless-mcp.jpg";
import seamlessFastData from "@/assets/projects/seamless-fast-data.jpg";
import inseegoConnect from "@/assets/projects/inseego-connect.jpg";
import latinHyperTexts from "@/assets/projects/latin-hyper-texts.jpg";
import theArc from "@/assets/projects/the-arc.png";
import productAnalysis from "@/assets/projects/seamless-product-analysis.jpg";

export type RoleSignal = "Senior PM" | "Senior BI";

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
    headline: "Killed a planned UI investment and reframed the monetization bet from 'more Free signups' to 'CRM-connect the Basic base'",
    summary: "First analysis shipped at Seamless.AI. Segmented ~590K searches by license tier and CRM-connection status to find where monetizable value actually accrued — and where it didn't.",
    image: productAnalysis,
    tags: ["Product Analytics", "Monetization", "SQL", "Roadmap Judgment"],
    problem:
      "Onboarding deliverable at Seamless.AI. Leadership assumed Free-tier acquisition was the growth lever. Stress-test that assumption against actual search and CRM-connection behavior across ~590K searches — and decide where the next monetization investment should land.",
    role: "Product Analyst — independent contributor",
    strategy:
      "Segment every search by license tier (Free / Basic / Premium) crossed with CRM-connection status — the proxy for monetizable signal, since Free is locked out of CRM by design. Three tiers × two states = one chart that answers 'where does the monetizable value live, and where is it being left on the table?'",
    insights:
      "Free generated the largest raw volume (~159K searches) but zero monetizable signal by definition. Basic was the real conversion battleground — searches split nearly 50/50 connected vs not (~111K / ~102K), meaning half the Basic base was paying without ever wiring up the revenue-driving integration. Premium was overwhelmingly connected (~65K / ~22K), proving the upgrade path monetizes once users get there. A parallel filter-usage analysis killed a planned advanced-filter UI bet outright — filter usage was uniform across tiers, no Premium 'power user' pattern existed to justify the build.",
    outcome:
      "Killed the planned advanced-filter UI bet and redirected the slot to a CRM-connect funnel for Basic users. Reframed growth from 'more Free signups' to 'CRM-connect the Basic base' — the baseline segmentation the product org referenced through the next planning cycle.",
    featured: true,
    signals: ["Senior BI"],
  },
  {
    slug: "seamless-api",
    title: "Seamless API",
    date: "May 2025",
    headline: "0→1 monetization launch — $1M booked ARR in year one, forecast model still drives the next-tier sales plan",
    summary: "Built and scaled a customer-facing API from zero to $1M ARR. Every scope call was anchored to one revenue metric: async credit consumption. Year-two MoM run-rate forecast informs enterprise expansion planning.",
    image: seamlessApi,
    tags: ["0→1", "Monetization", "B2B SaaS", "Forecasting"],
    problem:
      "Stand up a net-new, customer-facing API that monetizes — let users integrate Seamless Contact & Company data directly into their pipelines, no browser, no manual workflows, and prove the revenue model before scaling coverage.",
    role: "Analytics Lead & Product Owner — 0→1",
    strategy:
      "Ship a focused MVP that mirrors the core Seamless experience async and browserless, then scale coverage, reliability, and segment fit toward enterprise. Anchored every scope decision to one metric: async credit consumption — because credits are how the API monetizes. Stood up a MoM credit-consumption + ARR run-rate forecast in Power BI to size the enterprise wedge and pace the GTM plan.",
    insights:
      "User interviews guided framing; competitive analysis informed technical docs and architecture; internal developer interviews surfaced reconciliation gaps; stakeholder scrums highlighted marketing and sales blind spots. Deliberately de-scoped Seamless Connect and email-campaign automation from v1 — neither consumed credits, so neither moved the revenue metric the MVP existed to prove. Both were re-scoped into the MCP launch where the surface area justified the build. The forecast model surfaced that mid-market credit velocity was outpacing the SMB curve, redirecting GTM toward mid-market sooner than the original plan.",
    outcome:
      "Took the product from inception to $1M booked ARR in year one — primarily SMB and mid-market, where enterprise represents the larger remaining wedge. Integrated with every major AI platform. Forecast model became the basis of the year-two sales plan and the scaling lane for the next ARR tier.",
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
      "Increased contact data coverage and quality, shipped a unique ID system to handle data updates over time, and cut AWS spend 20% across the first 3 months in production.",
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
    strategy: "Use MCP instead of building custom agent integrations per platform. Same surface area, a fraction of the build cost.",
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
    headline: "Shipped a student-run research platform that's still in active scholarly use",
    summary: "A student-managed platform for annotating digitized Latin manuscripts — built to be maintained by the researchers using it.",
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
      "Launched a student-managed manuscript database integrated with the Digital Mappa annotation tool. Adopted by the Butler School of Music research program and used as primary-source infrastructure in subsequent musicology research.",
    signals: ["Senior BI"],
  },
  {
    slug: "the-arc",
    title: "Arc of Southern Maryland — Service Operations Analytics",
    date: "2020 · CaseWorthy client engagement",
    headline: "−1 FTE billing headcount, 46% faster service throughput, auto-SLA on every record",
    summary: "Service Operations Analytics build for Arc of Southern Maryland, delivered as a CaseWorthy client engagement: cohort-tracked throughput, automated billing-rule validation, and an exec ops dashboard that absorbed one full FTE of manual reconciliation.",
    image: theArc,
    tags: ["Operations Analytics", "Throughput", "SLA", "Cohort Analysis", "ETL", "Power BI", "Workflow Automation"],
    problem:
      "Arc of Southern Maryland's service-delivery org was running on spreadsheets — billing reconciliation absorbed a full FTE, course-completion turnaround was opaque, and leadership had no recurring view of throughput by program or cohort. Engaged via CaseWorthy as the analyst owner on the rollout.",
    role: "Operations Analyst & Implementation Owner — CaseWorthy engagement at Arc of Southern Maryland",
    strategy:
      "Treat it as an ops-analytics build, not a system rollout. Map the service-delivery funnel (intake → enrollment → course completion → billing) end-to-end, instrument each stage, and stand up a recurring dashboard leadership reviews on the same cadence as payroll. Auto-validate every record against billing rules at the point of entry so exceptions surface before they hit the queue, not after.",
    insights:
      "Cohort throughput by program revealed which courses bottlenecked turnaround — that's where the 46% gain came from, not from a blanket process change. The billing-rule validation layer turned reconciliation from a downstream cleanup task into an upstream gate, which is what eliminated the FTE. Customer-facing UX kept training cost near zero so the ops gains weren't eaten back by adoption drag.",
    outcome:
      "Eliminated 1 FTE of billing reconciliation. Course turnaround down 46%. Every record auto-validated against billing rules before entering the queue. Ops leadership got a recurring throughput dashboard that replaced the monthly spreadsheet review.",
    featured: true,
    signals: ["Staff Analyst", "Senior BI"],
  },
];
