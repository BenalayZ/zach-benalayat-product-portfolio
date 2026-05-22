import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zach Benalayat — Product Analyst & Manager" },
      {
        name: "description",
        content:
          "Product Analyst and Manager shipping B2B SaaS, IoT, and AI platforms end-to-end. Open to full-time, fractional, and contract engagements.",
      },
      { property: "og:title", content: "Zach Benalayat — Product Analyst & Manager" },
      {
        property: "og:description",
        content:
          "Case studies across B2B SaaS, IoT, and AI platforms — and analytics-driven product strategy. Available for full-time, fractional, and contract work.",
      },
      { property: "og:image", content: "https://zachbenalayat.com/og-image.jpg" },
      { name: "twitter:image", content: "https://zachbenalayat.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    q: "What kinds of engagements are you open to?",
    a: "Full-time Product Manager or Product Analyst roles, plus fractional and contract work — analytics audits, PRD authoring, launch support, and end-to-end PDLC ownership for shorter-scope projects.",
  },
  {
    q: "What types of products have you shipped?",
    a: "B2B SaaS, IoT and telecom hardware, AI platforms (including MCP integrations on the GPT and Claude stores), data infrastructure, and non-profit case-management systems. Recent flagship work includes Seamless API ($750k ARR year one) and Inseego Connect ($1M+ ARR uplift).",
  },
  {
    q: "Do you lead analytics or product strategy?",
    a: "Both — that's the point. I build the funnels, dashboards, and statistical analyses myself, then use those findings to drive PRDs, roadmaps, and GTM strategy. SQL, Python, PowerBI, A/B testing on the analytics side; PRDs, roadmapping, and stakeholder scrums on the product side.",
  },
  {
    q: "What does your typical process look like from idea to launch?",
    a: "Identify objectives, research and competitive analysis, develop strategy, write the PRD and success metrics, ship with engineering, then run post-launch analysis to drive the next iteration. MVP is the starting point, not the finish line.",
  },
  {
    q: "How do I get in touch?",
    a: "Email zacharia.benalayat@gmail.com or message on LinkedIn at linkedin.com/in/zach-benalayat. Resume is downloadable from any page on the site.",
  },
];


const byTheNumbers = [
  { value: "6+", label: "Years shipping product" },
  { value: "7", label: "Launches owned end-to-end" },
  { value: "$2M+", label: "ARR influenced" },
  { value: "5", label: "Industries served" },
];

const skills = [
  {
    title: "Data Analysis",
    body: "Messy or incomplete data isn't a blocker — it's a puzzle. I work through raw datasets to surface the patterns and reconciliation gaps everyone else overlooked, then turn them into product decisions.",
  },
  {
    title: "Full PDLC Ownership",
    body: "I own the product development lifecycle end-to-end: discovery, PRDs, success metrics, launch, post-launch analysis, and the next iteration. Strategy doesn't stop at MVP — that's where it starts.",
  },
  {
    title: "Cross-Functional Leadership",
    body: "I translate product capability into pipeline. Working closely with sales, marketing, and engineering, I ship launches that hit revenue targets — $750k ARR in year one on Seamless API, $1M+ ARR uplift on Inseego Connect.",
  },
  {
    title: "Data Storytelling",
    body: "The story of any product lives in the data. I build dashboards, funnel analyses, and narratives that get stakeholders aligned and unlock the next round of investment — not just reports that sit on a wiki.",
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
            Equal parts analyst and PM — turning raw data into product strategy
            to ship B2B SaaS, IoT, and AI platforms across the full PDLC.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              Explore work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Zach_J_Benalayat.pdf"
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
                I operate at the intersection of data analysis and product management —
                digging into raw datasets, building the funnels and dashboards, and using
                what I find to shape PRDs, roadmaps, and launch strategy.
              </p>
              <p>
                That dual lens has shipped real outcomes: $750k ARR in year one on Seamless
                API, $1M+ ARR uplift on Inseego Connect, and 20% AWS savings on Data
                Engine 4.0 — each one driven by analytics work that pointed product
                decisions in the right direction.
              </p>
              <p>
                I thrive in teams that treat strategy as a continuous, evidence-led process
                and value tight communication between product, data, engineering, and GTM.
              </p>
            </div>
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
