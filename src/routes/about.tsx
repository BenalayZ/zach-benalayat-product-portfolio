import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";


export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Zach Benalayat" },
      {
        name: "description",
        content:
          "About Zach Benalayat. Senior Product Analyst, BA, DA, and BI. SQL, Python, Power BI, and Snowflake. Experience across B2B SaaS, IoT/Telecom, AI platforms, consumer marketplaces, and operations.",
      },
      { property: "og:title", content: "About Zach Benalayat" },
      {
        property: "og:description",
        content:
          "Senior Product Analyst, BA, DA, and BI. 6+ years across B2B SaaS, IoT, and AI. SQL, Python, Power BI, and Snowflake.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const experience = [
  {
    period: "2024–2026",
    company: "Seamless.AI",
    role: "Product Manager II · Data Operations & Tech Projects",
    points: [
      "Defined product OKRs and analytics frameworks measuring API adoption, engagement, and conversion across customer touchpoints.",
      "Behavioral funnel analysis across search, discovery, and purchase. Surfaced UX changes that reduced search time by 25%.",
      "Designed internal Power BI / Looker dashboards for exec leadership, Sales, and RevOps to monitor product performance and customer behavior.",
      "Spearheaded identity resolution overhaul: +10% contact coverage vs LinkedIn company-contact baseline, +25% confidence in email and phone records, delivered in 3 months.",
      "Owned the 0→1 launch of the customer-facing B2B Public API to $1M booked ARR in year one. SMB and mid-market first; enterprise expansion underway. Automated analytics workflows with Claude + N8N, cutting idea-to-design cycle time by 15%.",
    ],
  },
  {
    period: "2022–2024",
    company: "Inseego",
    role: "Business Systems Analyst · Sales Analytics",
    points: [
      "SQL + Python analysis of customer, sales, and federal contracting datasets. Recommended a microtargeting shift that sales leadership adopted, driving $1M+ in enterprise contract uplift in the first re-targeting cycle.",
      "Built Power BI analytics frameworks tracking adoption, engagement, and bundling performance on US Navy contracts.",
      "Ran market and competitive data analysis to support product positioning and carrier partnerships.",
      "Translated business + data insights into technical product requirements (DCMA 14-Point compliant).",
    ],
  },
  {
    period: "2019–2022",
    company: "CaseWorthy",
    role: "Systems Analyst",
    points: [
      "Built SQL stored procedures, database tables, and ETL pipelines supporting analytics and reporting workflows for nonprofit and government clients.",
      "Developed scalable software configurations that accelerated implementation timelines.",
      "Partnered with customer success teams to define functional and analytics requirements.",
    ],
  },
  {
    period: "2018–2023",
    company: "Latin Hyper-Texts, Butler School of Music",
    role: "Data Architect",
    points: [
      "Designed and implemented the relational database architecture supporting 200K+ digitized manuscripts and large-scale research datasets.",
      "Structured metadata frameworks enabling efficient data retrieval, analysis, and digital archiving.",
      "Analyzed Qualtrics training and user data to improve docs and onboarding. Reduced required training sessions by 33%.",
    ],
  },
];

const education = [
  {
    period: "2017–2019",
    school: "University of Texas at Austin",
    focus: "Information Science · Database Administration · Data Analysis",
  },
  {
    period: "2013–2017",
    school: "Dickinson College",
    focus: "Data Science · Forensics · Anthropology",
  },
];

const northStars = [
  {
    title: "A moment that stuck",
    quote:
      "The first time a Power BI dashboard talked a sales VP out of a roadmap ask, I stopped writing decks for that kind of meeting. The dashboard does the arguing now.",
  },
  {
    title: "Unpopular opinion",
    quote:
      "Most annual roadmaps are a confidence ritual. A team that can change direction inside a sprint beats one with a beautifully prioritized 12-month plan, every time.",
  },
  {
    title: "Rule of thumb",
    quote:
      "Name the metric. Ship the smallest thing that moves it. Look at it on Monday.",
  },
  {
    title: "A question I ask early",
    quote:
      "If nobody can tell me what decision changes when this number moves, why are we building the dashboard?",
  },
];

const steps = [
  "Pin down what we're actually trying to move.",
  "Get the data, get the context, talk to whoever's closest to the problem.",
  "Frame the KPI tree and instrument it.",
  "Ship the smallest thing that proves or kills the bet.",
  "Measure honestly. Roll forward or roll back.",
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
      { name: "Power BI", primary: true, children: ["DAX", "Semantic Modeling", "RLS", "Incremental Refresh"] },
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
          Hi, I&apos;m Zach.
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          SQL · Python · Power BI · Snowflake · Product Analytics · Forecasting
        </p>
      </div>

      <div className="space-y-6 text-base leading-relaxed text-foreground">
        <p>
          I lead with the analysis. SQL on Snowflake, funnels and dashboards in Power BI / Looker / Tableau, A/B tests, forecasting, and Python when the transforms get heavy.
        </p>
        <p>
          I anchor every scope call to the metric that actually monetizes. The PRDs, OKRs, and roadmap bets fall out of what the data says.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["B2B SaaS", "Consumer Marketplaces", "Advertising / Marketplace Dynamics", "IoT / Telecom", "AI Platforms", "E-Commerce", "Non-Profit"].map(
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

        <div className="pt-2">
          <a
            href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Zach_J_Benalayat.pdf`}
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
        <h2 className="text-2xl font-bold text-foreground">How I work a problem</h2>
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
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((group, i) => {
          const primaries = group.items.filter((it) => it.primary);
          const supporting = group.items.filter((it) => !it.primary);
          return (
            <div key={group.label} className="flex flex-col bg-background p-6">
              <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                0{i + 1} · {group.label}
              </p>


              <ul className="space-y-3">
                {primaries.map((it) => (
                  <li key={it.name}>
                    <p className="font-sans text-base font-bold text-foreground">{it.name}</p>
                    {"children" in it && it.children && (
                      <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                        {it.children.join(" · ")}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {supporting.length > 0 && (
                <ul className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
                  {supporting.map((it) => (
                    <li key={it.name}>{it.name}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
