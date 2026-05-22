import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zach Benalayat" },
      {
        name: "description",
        content:
          "Zach Benalayat — Product & Business Analytics PM. SQL, Python, Power BI, Looker, Snowflake. Analytics frameworks and KPI design across B2B SaaS, IoT, and AI platforms.",
      },
      { property: "og:title", content: "About — Zach Benalayat" },
      {
        property: "og:description",
        content:
          "Experience, education, and the analytics stack — SQL, Python, Power BI / Looker / Tableau on Snowflake — used to ship product across B2B SaaS, IoT, and AI.",
      },
      { property: "og:image", content: "https://zachbenalayat.com/og-image.jpg" },
      { name: "twitter:image", content: "https://zachbenalayat.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const experience = [
  {
    period: "2024 — 2026",
    company: "Seamless",
    role: "Product Manager II — Data Operations & Tech Projects",
    points: [
      "Defined product OKRs and analytics frameworks measuring API adoption, engagement, and conversion across customer touchpoints.",
      "Behavioral funnel analysis across search, discovery, and purchase — surfaced UX changes that reduced search time by 25%.",
      "Designed internal Power BI / Looker dashboards for exec leadership, Sales, and RevOps to monitor product performance and customer behavior.",
      "Spearheaded identity resolution overhaul — +10% contact coverage and +25% data quality in 3 months.",
      "Owned end-to-end launch of the B2B Public API ($750k ARR) and automated analytics workflows with Claude + N8N (−15% idea-to-design cycle time).",
    ],
  },
  {
    period: "2022 — 2024",
    company: "Inseego",
    role: "Business Systems Analyst — Sales Analytics",
    points: [
      "SQL + Python analysis of customer, sales, and federal contracting datasets — surfaced microtargeting opportunities worth $1M+ in enterprise contracts.",
      "Built Power BI analytics frameworks tracking adoption, engagement, and bundling performance on US Navy contracts.",
      "Ran market and competitive data analysis to support product positioning and carrier partnerships.",
      "Translated business + data insights into technical product requirements (DCMA 14-Point compliant).",
    ],
  },
  {
    period: "2019 — 2022",
    company: "CaseWorthy",
    role: "Systems Analyst",
    points: [
      "Built SQL stored procedures, database tables, and ETL pipelines supporting analytics and reporting workflows for nonprofit and government clients.",
      "Developed scalable software configurations that accelerated implementation timelines.",
      "Partnered with customer success teams to define functional and analytics requirements.",
    ],
  },
  {
    period: "2018 — 2023",
    company: "Latin Hyper-Texts, Butler School of Music",
    role: "Data Architect",
    points: [
      "Designed and implemented the relational database architecture supporting 200K+ digitized manuscripts and large-scale research datasets.",
      "Structured metadata frameworks enabling efficient data retrieval, analysis, and digital archiving.",
      "Analyzed Qualtrics training and user data to improve docs and onboarding — reduced required training sessions by 33%.",
    ],
  },
];

const education = [
  {
    period: "2017 — 2019",
    school: "University of Texas at Austin",
    focus: "Information Science · Database Administration · Data Analysis",
  },
  {
    period: "2013 — 2017",
    school: "Dickinson College",
    focus: "Data Science · Forensics · Anthropology",
  },
];

const northStars = [
  {
    title: "Agile Leadership",
    quote:
      "Product strategy must be built on scalability and rapid response. Agile product teams can preempt market shifts and emerge as leaders.",
  },
  {
    title: "Stakeholder Communication",
    quote:
      "A bundle of arrows does not break. Ensuring every key department is locked in on product strategy is key to success.",
  },
  {
    title: "Continuous Improvement",
    quote:
      "Success and failure are both learning opportunities. I never rest on laurels — MVP is a starting point, not an end goal.",
  },
  {
    title: "80/20 Mindset",
    quote:
      "The little things really do matter. What might seem like a small amount of work has a significant impact on user behavior.",
  },
  {
    title: "Technical Skill",
    quote:
      "In the modern era, everyone needs to understand the how, not just the what, of product functionality. Understanding is key to growth.",
  },
  {
    title: "Data Storytelling",
    quote:
      "The story of your product is always in the data. A skilled product manager knows how to leverage it, not just find it.",
  },
];

const steps = [
  "Identifying objectives",
  "Research and preparation",
  "Developing strategies",
  "Plans of action",
  "Measuring progress",
  "Continuous improvement",
  "Analyzing outcomes",
  "Focusing on the future",
];

const toolGroups = [
  {
    label: "Languages & Querying",
    subtitle: "What I write in.",
    items: [
      { name: "SQL", primary: true },
      { name: "Python", primary: true, children: ["pandas", "NumPy", "matplotlib"] },
      { name: "R" },
    ],
  },
  {
    label: "Data Platforms",
    subtitle: "Where data lives and how it moves.",
    items: [
      { name: "Snowflake", primary: true },
      { name: "dbt", primary: true },
      { name: "BigQuery" },
      { name: "Amazon S3" },
      { name: "ETL & ELT" },
      { name: "Data Warehousing" },
      { name: "Database Design" },
      { name: "Data Mining" },
    ],
  },
  {
    label: "BI & Reporting",
    subtitle: "How findings get seen and acted on.",
    items: [
      { name: "Power BI", primary: true },
      { name: "Looker", primary: true },
      { name: "Tableau" },
      { name: "Google Analytics" },
      { name: "Excel / Sheets" },
    ],
  },
  {
    label: "Product & Delivery",
    subtitle: "How work gets shipped.",
    items: [
      { name: "Jira", primary: true },
      { name: "Agile", primary: true },
      { name: "Scrum" },
      { name: "Kanban" },
      { name: "Confluence" },
      { name: "GitHub" },
      { name: "SharePoint" },
      { name: "ServiceNow" },
      { name: "N8N" },
      { name: "Claude" },
    ],
  },
  {
    label: "Methods & Frameworks",
    subtitle: "The analyses behind the decisions.",
    items: [
      { name: "A/B Testing", primary: true },
      { name: "Funnel Analysis", primary: true },
      { name: "Cohort Analysis", primary: true },
      { name: "Linear Regression" },
      { name: "Cost Modeling" },
      { name: "Identity Resolution" },
      { name: "Unit Testing" },
      { name: "Time to Value" },
    ],
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">About</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Zach Benalayat
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Product &amp; Business Analytics PM · SQL · Python · Power BI
        </p>
      </div>

      <div className="space-y-6 text-base leading-relaxed text-foreground">
        <p>
          Hello — I&apos;m Zach. I partner with product and engineering teams to design
          analytics frameworks, define the KPIs, and analyze product usage data to guide
          strategic decisions.
        </p>
        <p>
          Day to day that means writing the SQL, building the funnels and dashboards in
          Power BI / Looker / Tableau against Snowflake, and running the A/B tests myself —
          then translating findings into PRDs, OKRs, and the next roadmap bet. Python for
          heavier transforms and modeling.
        </p>
        <p>
          I&apos;ve launched and improved products across B2B SaaS, IoT/Telecom, AI
          platforms, E-Commerce, and Non-Profit organizations.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["B2B SaaS", "IoT / Telecom", "AI Platforms", "E-Commerce", "Non-Profit"].map(
            (industry) => (
              <span
                key={industry}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {industry}
              </span>
            ),
          )}
        </div>
        <blockquote className="border-l-2 border-primary pl-4 text-lg italic text-foreground">
          &ldquo;Success is a <strong>process</strong>, not an end goal.{" "}
          <strong>Continuous Improvement</strong> is my mantra, and data is meaningless
          without clear communication.&rdquo;
        </blockquote>
        <div className="pt-2">
          <a
            href="/Zach_J_Benalayat.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Download className="h-4 w-4" /> Download resume
          </a>
        </div>
      </div>

      <hr className="my-12 border-border" />

      <h2 className="mb-8 text-2xl font-bold text-foreground">Experience</h2>
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company}>
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-bold text-card-foreground">{job.company}</h3>
              <span className="shrink-0 text-sm text-muted-foreground">{job.period}</span>
            </div>
            <p className="mb-3 text-sm font-medium text-primary">{job.role}</p>
            <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="my-12 border-border" />

      <h2 className="mb-8 text-2xl font-bold text-foreground">Education</h2>
      <div className="space-y-6">
        {education.map((ed) => (
          <div key={ed.school}>
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-bold text-card-foreground">{ed.school}</h3>
              <span className="shrink-0 text-sm text-muted-foreground">{ed.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{ed.focus}</p>
          </div>
        ))}
      </div>

      <hr className="my-12 border-border" />

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Principles
        </p>
        <h2 className="text-2xl font-bold text-foreground">Product Strategy North Stars</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {northStars.map((ns) => (
          <div
            key={ns.title}
            className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <h3 className="mb-3 text-base font-bold text-card-foreground">{ns.title}</h3>
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              &ldquo;{ns.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>

      <hr className="my-12 border-border" />

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Process
        </p>
        <h2 className="text-2xl font-bold text-foreground">How I Achieve Success</h2>
      </div>
      <ol className="relative space-y-6 border-l border-border pl-6">
        {steps.map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {i + 1}
            </span>
            <p className="text-base font-medium text-foreground">{step}</p>
          </li>
        ))}
      </ol>

      <hr className="my-12 border-border" />

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Toolkit
        </p>
        <h2 className="text-2xl font-bold text-foreground">Tools &amp; Methods</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {toolGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
