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

const trustLogos = [
  "Seamless.AI",
  "Inseego",
  "T-Mobile",
  "CaseWorthy",
  "The Arc",
  "UT Austin",
  "Dickinson College",
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
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-semibold uppercase tracking-widest text-muted-foreground">
              Available
            </span>
            <span className="font-medium text-primary">Full-time, fractional &amp; contract</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Hello! I&apos;m Zach Benalayat, a Product Analyst and Manager who
            finds the <span className="text-primary">signal in the noise</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Equal parts analyst and PM — I turn raw data into product strategy,
            then ship B2B SaaS, IoT, and AI platforms end-to-end across the
            full PDLC.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              See my work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Zach_J_Benalayat.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <a
              href="https://www.linkedin.com/in/zach-benalayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
            >
              Get in touch
            </Link>
          </div>

          {/* Outcome metrics */}
          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-3 sm:gap-4">
            {[
              { value: "$750k ARR", label: "Seamless API, year one" },
              { value: "$1M+ ARR", label: "Inseego Connect uplift" },
              { value: "20% lower", label: "AWS spend on Data Engine 4.0" },
            ].map((m, i) => (
              <div
                key={m.value}
                className={
                  i > 0
                    ? "sm:border-l sm:border-border sm:pl-6"
                    : undefined
                }
              >
                <dt className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Experience across
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustLogos.map((name) => (
              <li
                key={name}
                className="text-base font-semibold tracking-tight text-muted-foreground/80 md:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>




      {/* Positioning / Bio */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                What I&apos;m looking for
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                A role where analytics and product management share the wheel.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I operate at the intersection of data analysis and product management —
                digging into raw datasets, building the funnels and dashboards, and
                using what I find to shape PRDs, roadmaps, and launch strategy.
              </p>
              <p>
                That dual lens has shipped real outcomes: $750k ARR in year one on
                Seamless API, $1M+ ARR uplift on Inseego Connect, and 20% AWS savings
                on Data Engine 4.0 — each one driven by analytics work that pointed
                product decisions in the right direction.
              </p>
              <p>
                I thrive in teams that treat strategy as a continuous, evidence-led
                process and that value tight communication between product, data,
                engineering, and GTM. Startups and scale-ups, ideation through
                growth — with the receipts to prove each step moved the business
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Selected Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
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

      {/* Top Skills */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              How I work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Top Skills
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {skills.map((skill) => (
              <div key={skill.title}>
                <h3 className="mb-3 text-xl font-bold text-foreground">{skill.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {skill.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Common questions
            </h2>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr] md:gap-12">
                <dt className="text-lg font-semibold text-foreground">{f.q}</dt>
                <dd className="text-base leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>



      {/* More Work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              More case studies
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
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
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Here&apos;s your chance.
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
            Open to full-time PM/Analyst roles, fractional engagements, and defined-scope
            contract work. Let&apos;s build something great.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:zacharia.benalayat@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary-foreground/90"
            >
              Send an email <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Zach_J_Benalayat.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
            <a
              href="https://www.linkedin.com/in/zach-benalayat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground/80 transition-all hover:text-primary-foreground"
            >
              View contact options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
