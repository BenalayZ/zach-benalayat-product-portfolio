import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  component: Index,
});

const faqs = [
  {
    q: "What kinds of engagements are you open to?",
    a: "Full-time Product Manager or Product Analyst roles, plus fractional and contract work — analytics audits, KPI/instrumentation design, PRD authoring, launch support, and end-to-end PDLC ownership for shorter-scope projects.",
  },
  {
    q: "What types of products have you shipped?",
    a: "B2B SaaS, IoT and telecom hardware, AI platforms (including MCP integrations on the GPT and Claude stores), data infrastructure, and non-profit case-management systems. Recent flagship work includes Seamless API ($750k ARR year one) and Inseego Connect ($1M+ ARR uplift driven by Power BI funnel analysis).",
  },
  {
    q: "Do you lead analytics or product strategy?",
    a: "Both — that's the point. I write the SQL, build the funnels and dashboards in Power BI / Looker / Tableau against Snowflake, and run the A/B tests myself, then translate findings into PRDs, OKRs, and roadmap bets. Python for heavier transforms and modeling.",
  },
  {
    q: "What does your typical process look like from idea to launch?",
    a: "Identify objectives, research and competitive analysis, design the analytics framework and KPIs, write the PRD, ship with engineering, then run post-launch funnel and cohort analysis to drive the next iteration. MVP is the starting point, not the finish line.",
  },
  {
    q: "How do I get in touch?",
    a: "Email zacharia.benalayat@gmail.com or message on LinkedIn at linkedin.com/in/zach-benalayat. Resume is downloadable from any page on the site.",
  },
];


const byTheNumbers = [
  { value: "25%", label: "Search time reduced via funnel analysis" },
  { value: "$2M+", label: "ARR influenced by analytics work" },
  { value: "200K+", label: "Records modeled & maintained" },
  { value: "7", label: "Launches owned end-to-end" },
];

const skills = [
  {
    title: "Product Analytics",
    body: "Behavioral funnel and cohort analysis in SQL and Python — A/B testing, KPI design, activation and retention frameworks. The 25% search-time reduction on Seamless came out of this work.",
  },
  {
    title: "Data & SQL Modeling",
    body: "SQL stored procedures, ETL pipelines, Snowflake, identity resolution. Modeled 200K+ records at Butler School of Music; +10% contact coverage and +25% data quality on Seamless.",
  },
  {
    title: "BI & Dashboarding",
    body: "Executive Power BI, Looker, and Tableau dashboards that drive GTM decisions. A single Power BI funnel surfaced the $1M+ ARR microtargeting shift at Inseego.",
  },
  {
    title: "Analytics → Product Strategy",
    body: "Translates findings into PRDs, OKRs, and roadmap bets. Analytics framework design first, then engineering scope — so KPIs are built into the product, not bolted on.",
  },
];

type ToolkitItem = { name: string; primary?: boolean; children?: string[] };
type ToolkitGroup = { label: string; subtitle: string; items: ToolkitItem[] };

const toolkit: ToolkitGroup[] = [
  {
    label: "Certifications",
    subtitle: "Formal credentials.",
    items: [
      { name: "Agile / Scrum Certified", primary: true, children: ["Atlassian"] },
      { name: "Data Management", primary: true, children: ["UT Austin"] },
    ],
  },
  {
    label: "Languages & Querying",
    subtitle: "What I write in.",
    items: [
      { name: "SQL", primary: true, children: ["PostgreSQL", "MySQL", "ELT", "ETL"] },
      { name: "Python", primary: true, children: ["pandas", "NumPy", "matplotlib"] },
      { name: "R" },
    ],
  },
  {
    label: "Data Platforms",
    subtitle: "Where data lives and how it moves.",
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
    subtitle: "How findings get seen and acted on.",
    items: [
      { name: "Power BI", primary: true },
      { name: "Tableau", primary: true },
      { name: "Amplitude", primary: true },
      { name: "Looker" },
      { name: "Google Analytics" },
      { name: "Excel / Sheets" },
    ],
  },
  {
    label: "Product & Delivery",
    subtitle: "How work gets shipped.",
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

const frameworks = [
  "A/B Testing",
  "Funnel Analysis",
  "Cohort Analysis",
  "Linear Regression",
  "Cost Modeling",
  "Identity Resolution",
  "ETL & ELT",
  "Data Warehousing",
  "Database Design",
  "Data Mining",
  "Unit Testing",
  "Time to Value",
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

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center md:py-32">
          {/* Availability badge */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Available — Full-time, fractional &amp; contract
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-7xl">
            I&apos;m <span className="text-primary">Zach Benalayat</span>. I find the
            signal in the noise.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
            Product &amp; Business Analytics PM — SQL, Python, Power BI, Looker, Snowflake. I design the analytics frameworks, define the KPIs, and use what I find to drive PRDs and roadmaps across B2B SaaS, IoT, and AI.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              Explore work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/Zach_J_Benalayat.pdf`}
              download
              className="inline-flex items-center gap-2 border border-foreground/20 bg-foreground/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <a
              href="https://www.linkedin.com/in/zach-benalayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Get in touch
            </Link>
          </div>

          {/* Outcome metrics */}
          <dl className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-10 border-t border-border pt-12 md:grid-cols-3">
            {[
              { value: "$750k", label: "Seamless API ARR" },
              { value: "$1M+", label: "Inseego Connect uplift" },
              { value: "20%", label: "AWS savings on Data Engine 4.0" },
            ].map((m) => (
              <div key={m.label} className="group">
                <dt className="text-4xl font-extrabold tracking-tighter text-primary transition-transform group-hover:scale-110 md:text-5xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>



      {/* By the numbers */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-10">
            {byTheNumbers.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-4">
                <span className="font-sans text-5xl font-light tracking-tighter text-primary">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary underline decoration-2 underline-offset-8">
                Mission Control
              </p>
              <h2 className="font-sans text-4xl font-extrabold leading-[1.1] tracking-tighter text-foreground md:text-5xl">
                A role where analytics and product management share the wheel.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I partner with product and engineering to design the analytics framework first — KPI tree, instrumentation, dashboards in Power BI / Looker / Tableau on Snowflake — then use what surfaces to shape PRDs, roadmaps, and launch strategy.
              </p>
              <p>
                That analytics-first lens has shipped real outcomes: $750k ARR in year one on Seamless API, $1M+ ARR uplift on Inseego Connect (out of a single Power BI funnel), and 20% AWS savings on Data Engine 4.0 — each one driven by SQL, Python, and dashboard work that pointed product decisions in the right direction.
              </p>
              <p>
                I thrive in teams that treat strategy as a continuous, evidence-led process and value tight communication between product, data, engineering, and GTM.
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
                  <p className="mb-6 text-xs leading-relaxed text-muted-foreground">
                    {group.subtitle}
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

          <div className="mt-16 border-t border-border pt-12">
            <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Frameworks & Methods // 02
            </p>
            <ul className="flex flex-wrap gap-2">
              {frameworks.map((f) => (
                <li
                  key={f}
                  className="border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {f}
                </li>
              ))}
            </ul>
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
            Open to full-time PM/Analyst roles, fractional engagements, and defined-scope
            contract work. Let&apos;s build something significant.
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
            <a
              href="/Zach_J_Benalayat.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
