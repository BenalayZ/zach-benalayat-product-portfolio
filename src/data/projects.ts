import seamlessApi from "@/assets/projects/seamless-api.jpg";
import dataEngine from "@/assets/projects/data-engine.jpg";
import seamlessMcp from "@/assets/projects/seamless-mcp.jpg";
import seamlessFastData from "@/assets/projects/seamless-fast-data.jpg";
import inseegoConnect from "@/assets/projects/inseego-connect.jpg";
import latinHyperTexts from "@/assets/projects/latin-hyper-texts.jpg";
import theArc from "@/assets/projects/the-arc.png";

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
    slug: "seamless-api",
    title: "Seamless API",
    date: "May 2025",
    headline: "0→1 launch to $1M ARR — enterprise upside ahead",
    summary: "Built and scaled a customer-facing API from zero to $1M ARR across SMB and mid-market, with enterprise expansion underway.",
    image: seamlessApi,
    tags: ["0→1", "B2B SaaS", "Customer-Facing", "Agentic AI", "SQL", "Power BI", "Full PDLC", "GTM"],
    problem:
      "Stand up a net-new, customer-facing API that lets users integrate Seamless Contact & Company data directly into their pipelines — no browser, no manual workflows.",
    role: "Product Manager & Analytics — 0→1 owner",
    strategy:
      "Ship a focused MVP that mirrors the core Seamless experience async and browserless, then scale coverage, reliability, and segment fit toward enterprise.",
    insights:
      "User interviews guided framing. Competitive analysis informed technical docs and architecture. Internal developer interviews surfaced reconciliation gaps, and stakeholder scrums highlighted marketing and sales blind spots.",
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
    tags: ["ETL", "Snowflake", "Python", "Data Architecture", "A/B Testing", "Statistical Analysis"],
    problem: "Improve the overall data quality and health of the Seamless AI Data Engine.",
    role: "Product Owner & Analytics Lead",
    strategy:
      "Perform an end-to-end review of the existing Data Engine architecture and follow up on delivery time, quality, deduplication, and cost.",
    insights:
      "Interviews with stakeholders on prior DE releases and discussions with Data Engineering leadership uncovered re-architecture and cost-savings opportunities.",
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
    tags: ["Real-Time", "Event Streaming", "Data Pipelines"],
    problem: "Decrease the lag between updated data hitting the data lake and being live in the app.",
    role: "Product Owner",
    strategy:
      "Focus on the most important and relevant data attributes first, then scale outward.",
    insights:
      "Mapped the change-data flow across event broker, real-time processing, cloud storage, and the data warehouse to identify the highest-leverage transformations.",
    outcome:
      "Went from a twice-monthly update cycle to weekly to every two hours with zero platform downtime. Execution time down 15x; resource usage down 30%.",
    signals: ["Senior PM"],
  },
  {
    slug: "inseego-connect",
    title: "Inseego Connect",
    date: "Mar 2022",
    headline: "$1M+ ARR uplift via GTM re-targeting",
    summary: "Re-targeted GTM toward IoT-heavy state contracts — $1M+ ARR uplift.",
    image: inseegoConnect,
    tags: ["Customer-Facing", "B2B", "IoT", "SQL", "Python", "Power BI", "Funnel Analysis", "Market Research"],
    problem: "Inseego IoT products were underperforming within Inseego Connect partner channels.",
    role: "Product Owner & Analyst",
    strategy:
      "Follow the money. Analyzed existing government contracts (Connect's primary customer base) and compared their value, focus, and our market share versus competitors.",
    insights:
      "Python-based data transformation and PowerBI dashboards revealed that the highest-value Connect contracts were almost entirely phone provisioning, not IoT. Smaller state-level contracts had far more IoT buying power. Funnel analysis showed we were pushing IoT at the wrong segment.",
    outcome:
      "Leadership shifted outreach and sales strategy toward IoT-friendly contracts. Immediate MoM IoT sales growth and stronger California/New York state relationships worth $1M+ ARR.",
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
