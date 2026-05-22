import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zach Benalayat" },
      {
        name: "description",
        content:
          "Zach Benalayat is a product manager and data analyst — experience at Seamless, Inseego, and CaseWorthy.",
      },
      { property: "og:title", content: "About — Zach Benalayat" },
      {
        property: "og:description",
        content:
          "Experience, education, product strategy principles, and process — from Seamless API to non-profit implementations.",
      },
    ],
  }),
  component: AboutPage,
});

const experience = [
  {
    period: "2024 — 2026",
    company: "Seamless",
    role: "Product Manager",
    points: [
      "Owned Seamless Find & API PDLC end-to-end.",
      "Drove product strategy for data integration initiatives.",
    ],
  },
  {
    period: "2022 — 2024",
    company: "Inseego",
    role: "Business Analyst",
    points: [
      "Identified opportunities within T-Mobile partnerships.",
      "Generated insights that drove product adoption inside Inseego Connect.",
    ],
  },
  {
    period: "2019 — 2022",
    company: "CaseWorthy Inc.",
    role: "Systems Analyst",
    points: [
      "Built custom CaseWorthy implementations for non-profit customers.",
      "Drafted technical and functional specs for custom database architecture.",
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
    focus: "Archaeology · Forensics · Anthropology",
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
    label: "Product",
    tools: ["PRDs & Specs", "Roadmapping", "Jira", "Linear", "Figma", "Notion"],
  },
  {
    label: "Data & Analytics",
    tools: ["SQL", "Python", "PowerBI", "A/B Testing", "Statistical Analysis", "Funnel Analysis"],
  },
  {
    label: "Engineering & Architecture",
    tools: ["REST APIs", "MCP", "ETL Pipelines", "Event Streaming", "AWS", "Data Modeling"],
  },
  {
    label: "Research & Discovery",
    tools: ["User Interviews", "Qualtrics Surveys", "Competitive Analysis", "Stakeholder Scrums"],
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
          Product Manager · Data Analyst
        </p>
      </div>

      <div className="space-y-6 text-base leading-relaxed text-foreground">
        <p>
          Hello — I&apos;m Zach. I&apos;m an experienced product manager and data analyst
          who takes a rigorous approach to data analytics. I&apos;m a firm believer that
          messy or incomplete data isn&apos;t a blocker to great insights, it&apos;s a
          puzzle that needs solving.
        </p>
        <p>
          I specialize in working end-to-end — from developing success metrics and KPIs, to
          analyzing qualitative post-launch data and implementing improvements during the
          product lifecycle.
        </p>
        <p>
          I&apos;ve launched and improved products across B2B Sales, SaaS, E-Commerce,
          Telecommunications, and Non-Profit businesses.
        </p>
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
    </div>
  );
}
