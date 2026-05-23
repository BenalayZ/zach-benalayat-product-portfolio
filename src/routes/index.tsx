import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Linkedin, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import seamlessLogo from "@/assets/logos/seamless.jpg";
import inseegoLogo from "@/assets/logos/inseego.jpg";
import caseworthyLogo from "@/assets/logos/caseworthy.jpg";
import arcLogo from "@/assets/logos/arc.jpg";
import butlerLogo from "@/assets/logos/butler.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zach Benalayat — Data Analyst & Product Manager" },
      {
        name: "description",
        content:
          "Data Analyst & Product Manager. 6+ yrs across B2B SaaS, IoT, and AI. SQL, Python, Power BI on Snowflake. I run the analysis, then ship the product bet that comes out of it.",
      },
      { property: "og:title", content: "Zach Benalayat — Data Analyst & Product Manager" },
      {
        property: "og:description",
        content:
          "SQL, Python, Power BI on Snowflake. I run the analysis, then ship the product bet that comes out of it.",
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
    a: "Full-time Senior Analyst, Staff Analyst, BI Lead, or analytics-led PM — plus contract and scoped consulting (analytics audits, KPI design, BI builds, PRDs, 0→1 launches).",
  },
  {
    q: "What types of products have you shipped?",
    a: "B2B SaaS, IoT/telecom, AI platforms (MCP on the GPT and Claude stores), data infra, and non-profit case management.",
  },
  {
    q: "Do you lead analytics or product strategy?",
    a: "Both. I write the SQL, build the dashboards, run the A/B tests — then translate findings into PRDs, OKRs, and roadmap bets.",
  },
  {
    q: "What does your typical process look like from idea to launch?",
    a: "Objectives → research → KPI framework → PRD → ship → post-launch funnel and cohort analysis. MVP is the starting line.",
  },
  {
    q: "How do I get in touch?",
    a: "Email zacharia.benalayat@gmail.com or LinkedIn at linkedin.com/in/zach-benalayat. Resume downloads from any page.",
  },
];


const skills = [
  {
    title: "BI & Executive Dashboarding",
    body: "Power BI, Looker, Tableau on Snowflake — with the modeling and ETL underneath.",
  },
  {
    title: "Product Analytics & Experimentation",
    body: "A/B tests, funnel and cohort analysis, KPI design in SQL and Python.",
  },
  {
    title: "Data & SQL Engineering",
    body: "Stored procedures, ETL pipelines, Snowflake, identity resolution.",
  },
  {
    title: "Analytics-Led Product Delivery",
    body: "PRDs, OKRs, and roadmap bets that come out of the analysis — not the other way around.",
  },
];

const engagementModels = [
  {
    label: "Full-Time",
    title: "Senior Analyst · Staff Analyst · BI Lead · Senior PM",
    body: "Embedded ownership of analytics, BI, or analytics-first product. Remote-first, open to hybrid.",
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
      { name: "Power BI", primary: true, children: ["Microsoft Fabric"] },
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
      { name: "Claude" },
    ],
  },
];


function Index() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero — centered with orbital rings */}
      <section className="relative overflow-hidden">
        {/* Background orbital graphics */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="absolute aspect-square w-[140vw] rounded-full border border-primary/10 animate-orbit-slow lg:w-[100vw]" />
          <div className="absolute aspect-square w-[110vw] rounded-full border border-foreground/5 animate-orbit-mid lg:w-[70vw]" />
          <div className="absolute aspect-square w-[80vw] rounded-full border border-primary/20 animate-orbit-fast lg:w-[45vw]" />
          <div className="absolute h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute h-64 w-64 rotate-45 border border-primary/30 animate-pulse" />
          <div className="select-none font-sans text-[20vw] font-extrabold tracking-tighter text-foreground opacity-[0.025] lg:text-[15vw]">
            ZACH BENALAYAT
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center md:py-28">
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Available — Full-Time or Contract
            </span>
          </div>

          {/* Eyebrow: stat-anchored */}
          <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            6+ yrs · B2B SaaS · IoT · AI
          </p>

          {/* Role-anchored H1 */}
          <h1 className="max-w-4xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            <span className="text-primary">Data Analyst</span> &amp;{" "}
            <span className="text-primary">Product Manager</span> — one operator.
          </h1>

          <p className="mt-6 max-w-3xl text-base font-medium text-foreground/90 md:text-xl">
            SQL · Python · Power BI on Snowflake. I run the analysis, then ship the product bet that comes out of it.
          </p>


          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground md:text-sm">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Austin, Texas · Remote-first, open to hybrid
            </li>
          </ul>

          {/* CTAs — tightened to 3 */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                See the work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Zach_J_Benalayat.pdf`}
                download
                className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              <a
                href="mailto:zacharia.benalayat@gmail.com"
                className="transition-colors hover:text-primary"
              >
                Email
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

          {/* Role-tagged proof grid */}
          <dl className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              { track: "Senior BI", value: "$1M+ ARR", label: "Inseego Connect — Power BI funnel" },
              { track: "Staff Analyst", value: "46%", label: "Faster intake — Arc workflow analytics" },
              { track: "Senior PM", value: "$1M ARR", label: "Seamless API 0→1" },
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
              { role: "Analyst stack", items: ["SQL", "Python", "Snowflake", "dbt", "Fabric"] },
              { role: "BI stack", items: ["Power BI", "Amplitude", "Looker", "Tableau", "DAX"] },
              { role: "PM stack", items: ["Agile Certification", "Full Cycle Documentation", "GTM Strategy", "A/B Testing", "Funnel & Cohort", "Roadmap", "OKRs"] },
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
      </section>


      {/* Where I've shipped — wordmark band */}
      <section aria-label="Companies and organizations where I've shipped product" className="border-y border-border bg-foreground">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <p className="mb-6 text-center font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-background/60 md:text-left">
            Where I&apos;ve shipped product
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:justify-between md:gap-x-6">
            {[
              { name: "Seamless.AI", src: seamlessLogo },
              { name: "Inseego", src: inseegoLogo },
              { name: "CaseWorthy", src: caseworthyLogo },
              { name: "The Arc Southern Maryland", src: arcLogo },
              { name: "Butler School of Music", src: butlerLogo },
            ].map(({ name, src }) => (
              <li key={name} className="flex items-center">
                <img
                  src={src}
                  alt={`${name} logo`}
                  loading="lazy"
                  className="h-10 w-auto max-w-[140px] object-contain transition-transform duration-300 hover:scale-105 md:h-12"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* Positioning */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary underline decoration-2 underline-offset-8">
                Approach
              </p>
              <h2 className="font-sans text-4xl font-extrabold leading-[1.1] tracking-tighter text-foreground md:text-5xl">
                The analysis comes first. The product bet comes out of it.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I lead with the analysis. KPI tree, instrumentation, dashboards in Power BI / Looker / Tableau on Snowflake — then the PRD, roadmap, and launch fall out of what the data says.
              </p>
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

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
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
              Full-time is the priority — contract and consulting fill the gap when the seat isn&apos;t open yet.
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
            Open to full-time Senior PM, Staff Analyst, or Senior BI roles — plus contract and
            consulting engagements. Let&apos;s build something significant.
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
