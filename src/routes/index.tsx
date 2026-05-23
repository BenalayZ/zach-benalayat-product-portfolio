import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Linkedin, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import seamlessLogo from "@/assets/logos/seamless.png";
import inseegoLogo from "@/assets/logos/inseego.png";
import caseworthyLogo from "@/assets/logos/caseworthy.png";
import arcLogo from "@/assets/logos/arc.svg";
import butlerLogo from "@/assets/logos/butler.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zach Benalayat — Product & Data Analyst" },
      {
        name: "description",
        content:
          "Zach Benalayat — Senior Product Analyst, BA, DA, and BI. 6+ years across B2B SaaS, IoT, and AI. SQL, Python, Power BI on Snowflake. Most recently Product Manager II at Seamless.AI. Available now.",
      },
      { property: "og:title", content: "Zach Benalayat — Product & Data Analyst" },
      {
        property: "og:description",
        content:
          "SQL, Python, Power BI on Snowflake. Most recently Product Manager II at Seamless.AI — shipped a customer-facing API to $1M booked ARR. Available now.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});


const faqs = [
  {
    q: "What kinds of engagements are you open to?",
    a: "Full-time Senior Analyst, Staff Analyst, BI Lead, or analytics-led PM. Open to contract too — analytics audits, KPI design, BI builds, PRDs, 0→1 launches.",
  },
  {
    q: "What types of products have you shipped?",
    a: "B2B SaaS, IoT and telecom, AI platforms (MCP shipped on the GPT and Claude stores), data infrastructure, and nonprofit case management.",
  },
  {
    q: "Do you lead analytics or product strategy?",
    a: "Both. I write the SQL, build the dashboards, run the A/B tests — then translate findings into PRDs, OKRs, and roadmap bets.",
  },
  {
    q: "What does your typical process look like from idea to launch?",
    a: "Objectives, then research, then the KPI framework, then the PRD, then ship, then watch the funnels and cohorts. The launch is the start of the work, not the end.",
  },
  {
    q: "How do I get in touch?",
    a: "Email zacharia.benalayat@gmail.com or LinkedIn at linkedin.com/in/zach-benalayat. Resume downloads from any page.",
  },
];


const skills = [
  {
    title: "BI & Executive Dashboarding",
    body: "Power BI, Looker, Tableau on Snowflake — and the semantic modeling and ETL that make them trustworthy.",
  },
  {
    title: "Product Analytics & Experimentation",
    body: "A/B tests, funnels, and cohorts in SQL and Python. I design the KPI before I touch the dashboard.",
  },
  {
    title: "Data & SQL Engineering",
    body: "Stored procedures, ETL pipelines, identity resolution. The plumbing nobody notices until it breaks.",
  },
  {
    title: "Analytics-Led Product Delivery",
    body: "PRDs, OKRs, and roadmap bets that come from the analysis — not the other way around.",
  },
];

const engagementModels = [
  {
    label: "Full-Time",
    title: "Senior Analyst · Staff Analyst · BI Lead · Analytics-Led PM",
    body: "Embedded ownership of analytics, BI, or an analytics-led product team. Remote-first, open to hybrid.",
  },
  {
    label: "Contract",
    title: "3–12 month embedded engagement",
    body: "Drop-in analyst, BI, or PM ownership for a launch, replatform, or BI rebuild.",
  },
  {
    label: "Consulting",
    title: "Scoped audits & deliverables",
    body: "Analytics audits, KPI trees, dashboards, instrumentation reviews, PRDs.",
  },
];

type ToolkitItem = { name: string; primary?: boolean; children?: string[] };
type ToolkitGroup = { label: string; items: ToolkitItem[] };

const toolkit: ToolkitGroup[] = [
  {
    label: "Certifications",
    items: [
      { name: "Agile / Scrum Certified", primary: true, children: ["Atlassian"] },
      { name: "Data Management", primary: true, children: ["UT Austin"] },
    ],
  },
  {
    label: "Languages & Querying",
    items: [
      { name: "SQL", primary: true, children: ["PostgreSQL", "MySQL", "ELT", "ETL"] },
      { name: "Python", primary: true, children: ["pandas", "NumPy", "matplotlib"] },
      { name: "R" },
    ],
  },
  {
    label: "Data Platforms",
    items: [
      { name: "Snowflake", primary: true },
      { name: "Databricks", primary: true },
      { name: "Redshift", primary: true },
      { name: "dbt", primary: true },
      { name: "BigQuery" },
      { name: "Amazon S3" },
    ],
  },
  {
    label: "BI & Reporting",
    items: [
      { name: "Power BI", primary: true, children: ["Microsoft Fabric", "DAX", "Semantic Modeling", "RLS"] },
      { name: "Tableau", primary: true },
      { name: "Amplitude", primary: true },
      { name: "Looker" },
      { name: "Google Analytics" },
      { name: "Excel / Sheets" },
    ],
  },
  {
    label: "Product & Delivery",
    items: [
      { name: "Jira", primary: true },
      { name: "Confluence", primary: true },
      { name: "GitHub", primary: true },
      { name: "Notion", primary: true },
      { name: "Kanban", primary: true },
      { name: "SharePoint" },
      { name: "ServiceNow" },
      { name: "N8N" },
    ],
  },
  {
    label: "AI & Agentic Tooling",
    items: [
      { name: "Claude Code", primary: true },
      { name: "OpenAI Agents", primary: true },
      { name: "GitHub Copilot", primary: true },
      { name: "Lovable" },
      { name: "Claude Cowork" },
      { name: "Cursor" },
    ],
  },
];


function Index() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero — orbital data precision */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background — orbital rings + ghost monogram + data-node graph */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Ghost monogram — large, low-opacity, behind everything */}
          <div
            aria-hidden
            className="absolute select-none font-sans text-[28vw] font-extrabold uppercase leading-none tracking-tighter text-secondary opacity-[0.07] lg:text-[22vw]"
          >
            BENALAYAT
          </div>

          {/* Orbital rings — 3 weights, one dashed */}
          <div className="absolute aspect-square w-[55vw] rounded-full border border-secondary/40 lg:w-[34vw]" />
          <div className="absolute aspect-square w-[80vw] rounded-full border border-dashed border-secondary/30 lg:w-[52vw]" />
          <div className="absolute aspect-square w-[115vw] rounded-full border border-secondary/15 lg:w-[72vw]" />

          {/* Soft radial glow */}
          <div className="absolute h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[140px]" />

          {/* Orbiting data points on the rings */}
          <div className="absolute aspect-square w-[80vw] animate-orbit-slow lg:w-[52vw]">
            <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(201,168,76,0.7)]" />
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
            <span className="absolute bottom-0 left-1/3 h-1 w-1 rounded-full bg-secondary" />
          </div>
          <div className="absolute aspect-square w-[55vw] animate-orbit-fast lg:w-[34vw]">
            <span className="absolute top-1/4 -right-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span className="absolute bottom-1/4 -left-1 h-1 w-1 rounded-full bg-foreground/40" />
          </div>

          {/* Abstract geometric data-node connectors behind the headline */}
          <svg
            aria-hidden
            className="absolute h-[22rem] w-[44rem] max-w-[95vw] opacity-[0.22]"
            viewBox="0 0 800 400"
            fill="none"
          >
            <defs>
              <linearGradient id="dataLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.74 0.13 85)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.74 0.13 85)" stopOpacity="1" />
                <stop offset="100%" stopColor="oklch(0.74 0.13 85)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="url(#dataLine)" strokeWidth="0.75">
              <line x1="80" y1="120" x2="280" y2="60" />
              <line x1="280" y1="60" x2="520" y2="180" />
              <line x1="520" y1="180" x2="720" y2="90" />
              <line x1="80" y1="120" x2="220" y2="280" />
              <line x1="220" y1="280" x2="460" y2="320" />
              <line x1="460" y1="320" x2="660" y2="260" />
              <line x1="280" y1="60" x2="220" y2="280" />
              <line x1="520" y1="180" x2="460" y2="320" />
              <line x1="720" y1="90" x2="660" y2="260" />
            </g>
            <g fill="oklch(0.74 0.13 85)">
              <circle cx="80" cy="120" r="3" />
              <circle cx="280" cy="60" r="4" />
              <circle cx="520" cy="180" r="3.5" />
              <circle cx="720" cy="90" r="3" />
              <circle cx="220" cy="280" r="3" />
              <circle cx="460" cy="320" r="4" />
              <circle cx="660" cy="260" r="3" />
            </g>
            <g stroke="oklch(0.50 0.10 162)" strokeWidth="0.5" opacity="0.6">
              <line x1="0" y1="200" x2="800" y2="200" strokeDasharray="2 6" />
              <line x1="400" y1="0" x2="400" y2="400" strokeDasharray="2 6" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center md:py-28">
          {/* Name micro-label */}
          <p className="mb-4 font-sans text-xs font-extrabold uppercase tracking-[0.35em] text-foreground/80">
            Zach Benalayat
          </p>

          {/* Eyebrow: stat-anchored */}
          <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            6+ years · B2B SaaS · IoT · AI
          </p>

          {/* Role-anchored H1 */}
          <h1 className="max-w-4xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            <span className="text-primary">Product &amp; Data</span>{" "}
            <span className="text-primary">Analyst</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base font-medium text-foreground/90 md:text-xl">
            SQL, Python, Power BI on Snowflake. I dig into the data, find what&apos;s actually driving revenue, and ship the call that comes out of it.
          </p>


          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground md:text-sm">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Austin, Texas · Remote-first, open to hybrid
            </li>
            <li className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Most recently: Product Manager II, Seamless.AI
            </li>
          </ul>

          {/* CTAs — tightened to 3 */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(201,168,76,0.45)] active:scale-95"
              >
                See the work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Zach_J_Benalayat.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-foreground/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs font-medium text-muted-foreground">
              <a
                href="mailto:zacharia.benalayat@gmail.com"
                className="transition-colors hover:text-primary"
              >
                zacharia.benalayat@gmail.com
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
              <a
                href="https://www.linkedin.com/in/zach-benalayat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Availability badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Available now — Full-Time or Contract
            </span>
          </div>

          {/* Role-tagged proof grid */}
          <dl className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              { track: "Senior BI", value: "$1M+ ARR", label: "Inseego Connect — Power BI funnel" },
              { track: "Staff Analyst", value: "46%", label: "Faster intake — Arc of Southern Maryland service operations analytics" },
              { track: "Analytics-Led PM", value: "$1M ARR", label: "Seamless API 0→1" },
            ].map((m) => (
              <div key={m.track} className="bg-background p-6 text-left">
                <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {m.track}
                </p>
                <dt className="font-sans text-3xl font-extrabold tracking-tighter text-foreground md:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* Stack by role */}
          <div className="mt-10 w-full max-w-4xl space-y-3 text-left">
            {[
              { role: "Analyst stack", items: ["SQL", "Python", "R", "Snowflake", "dbt", "Fabric", "A/B"] },
              { role: "BI stack", items: ["Power BI", "Tableau", "Looker", "DAX", "Semantic Modeling", "RLS", "Incremental Refresh", "Amplitude"] },
              { role: "PM stack", items: ["Agile", "Jira", "Notion", "Competitive Analysis", "GTM Strategy", "Gap Analysis", "OKRs"] },
            ].map((row) => (
              <div key={row.role} className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="w-28 shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {row.role}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {row.items.map((it) => (
                    <li
                      key={it}
                      className="border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 opacity-40 md:block"
        >
          <div className="relative h-12 w-0.5 overflow-hidden bg-foreground/20">
            <div className="absolute left-0 top-0 h-1/2 w-full animate-scroll-cue bg-primary" />
          </div>
        </div>
      </section>


      {/* Organizations I've worked with — wordmark band */}
      <section aria-label="Companies and organizations I've worked with" className="border-y border-border bg-foreground">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <p className="mb-6 text-center font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-background/60 md:text-left">
            Organizations I&apos;ve worked with
          </p>
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-6">
            {[
              { name: "Seamless.AI", src: seamlessLogo },
              { name: "Inseego", src: inseegoLogo },
              { name: "CaseWorthy", src: caseworthyLogo },
              { name: "The Arc Southern Maryland", src: arcLogo },
              { name: "Butler School of Music", src: butlerLogo },
            ].map(({ name, src }) => (
              <li key={name} className="flex h-16 items-center justify-center md:h-20">
                <img
                  src={src}
                  alt={`${name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-[160px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* Positioning / Approach */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="border-t border-secondary/60 pt-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              {/* Left: eyebrow + headline */}
              <div className="flex flex-col md:col-span-7">
                <div className="mb-8 flex items-center gap-4">
                  <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary md:text-xs">
                    Approach
                  </span>
                  <div className="h-px w-12 bg-primary" />
                </div>
                <h2 className="font-sans text-5xl font-extrabold leading-[0.95] tracking-tighter text-foreground md:text-7xl">
                  The analysis comes first.
                  <span className="mt-2 block">The product bet comes out of it.</span>
                </h2>
              </div>

              {/* Right: body, vertically centered within headline block via self-center */}
              <div className="flex flex-col justify-center border-l border-secondary/60 py-2 pl-8 md:col-span-5 md:pl-12">
                <div className="max-w-sm">
                  <p className="font-sans text-lg font-normal leading-relaxed text-foreground/90 md:text-xl">
                    Most product calls I&apos;ve shipped started as a dashboard or a SQL query, not a meeting.
                  </p>
                  <p className="mt-6 font-sans text-base leading-relaxed text-foreground/60 md:text-lg">
                    I build the KPI tree and the instrumentation first; the PRD, the roadmap, and the launch follow what the data shows.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom accent: hairline + ghost 01 */}
            <div className="mt-24 flex w-full items-end justify-between">
              <div className="h-[2px] w-24 bg-secondary/60" />
              <span
                aria-hidden="true"
                className="pointer-events-none translate-y-8 select-none font-sans text-8xl font-extrabold leading-none text-secondary/30"
              >
                01
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Toolkit */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Toolkit // 01
            </p>
            <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
              The stack I actually use
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((group, i) => {
              const primaries = group.items.filter((it) => it.primary);
              const supporting = group.items.filter((it) => !it.primary);
              return (
                <div key={group.label} className="flex flex-col bg-background p-8">
                  <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    0{i + 1} — {group.label}
                  </p>


                  <ul className="space-y-3">
                    {primaries.map((it) => (
                      <li key={it.name}>
                        <p className="font-sans text-base font-bold text-foreground">{it.name}</p>
                        {it.children && (
                          <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                            {it.children.join(" · ")}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  {supporting.length > 0 && (
                    <ul className="mt-6 space-y-1.5 border-t border-border pt-5 text-sm text-muted-foreground">
                      {supporting.map((it) => (
                        <li key={it.name}>{it.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>




          {/* ATS-searchable keyword row — hidden visually, present for crawlers */}
          <div className="sr-only">
            <p>Keywords // ATS-searchable</p>
            <p>
              Product Manager, Senior Product Manager, Data Analyst, Product Analytics, Business Analyst,
              SQL, Python, R, pandas, NumPy, Snowflake, Databricks, Redshift, BigQuery, dbt, ETL, ELT, Data Warehousing,
              Power BI, Tableau, Looker, Amplitude, Google Analytics, A/B Testing, Funnel Analysis, Cohort Analysis,
              KPI Design, OKRs, PRD, Roadmap, Agile, Scrum, Kanban, Jira, Confluence, GitHub, B2B SaaS, IoT, Telecom,
              Agentic AI, MCP, GTM Strategy, Identity Resolution, Cost Modeling, Time to Value.
            </p>
          </div>
        </div>
      </section>



      {/* Featured Projects */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Selected Work // 01
              </p>
              <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/about"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:inline-flex"
            >
              Full experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Skills — grid with hairline dividers */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              How I work
            </p>
            <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
              Top Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, i) => (
              <div key={skill.title} className="bg-background p-8">
                <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  0{i + 1}
                </p>
                <h3 className="mb-4 font-sans text-xl font-bold text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Engagement Models // 01
            </p>
            <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
              Three ways to work together
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Full-time is the priority. Contract and consulting are how I help while the right seat opens up.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <div key={m.label} className="flex flex-col bg-background p-8">
                <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  0{i + 1} — {m.label}
                </p>
                <h3 className="mb-4 font-sans text-xl font-bold text-foreground">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>
            <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
              Common questions
            </h2>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="grid gap-4 py-8 md:grid-cols-[auto_1fr_2fr] md:gap-8"
              >
                <span className="hidden font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary md:block">
                  Q_{String(i + 1).padStart(2, "0")}
                </span>
                <dt className="font-sans text-lg font-bold text-foreground">{f.q}</dt>
                <dd className="text-base leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* More Work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Selected Work // 02
            </p>
            <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
              The rest of the portfolio
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {more.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-sans text-5xl font-extrabold tracking-tighter md:text-7xl">
            Ready to ship?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg font-medium text-primary-foreground/80">
            Open to full-time Senior PM, Staff Analyst, or Senior BI roles, plus contract and
            consulting work. If you&apos;ve got a problem worth solving, send it over.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:zacharia.benalayat@gmail.com"
              className="inline-flex items-center gap-2 bg-background px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-transform hover:scale-105"
            >
              Send an email <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/zach-benalayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}
