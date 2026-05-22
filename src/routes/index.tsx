import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zach Benalayat — Product Manager & GTM Specialist" },
      {
        name: "description",
        content:
          "Product portfolio of Zach Benalayat — Seamless API, Data Engine 4.0, Inseego Connect, and more. A forensic approach to data and product strategy.",
      },
      { property: "og:title", content: "Zach Benalayat — Product Portfolio" },
      {
        property: "og:description",
        content:
          "Case studies in product management, GTM, and data analytics across B2B SaaS, IoT, and digital scholarship.",
      },
    ],
  }),
  component: Index,
});

const skills = [
  {
    title: "Data Forensics",
    body: "Messy or incomplete data isn't a blocker — it's a puzzle. I dig into raw datasets to surface the patterns and reconciliation gaps everyone else overlooked, then turn them into product decisions.",
  },
  {
    title: "Full PDLC Ownership",
    body: "I own the product development lifecycle end-to-end: discovery, PRDs, success metrics, launch, post-launch analysis, and the next iteration. Strategy doesn't stop at MVP — that's where it starts.",
  },
  {
    title: "Cross-Functional GTM",
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
              Status
            </span>
            <span className="font-medium text-primary">Open to new roles</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Hello! I&apos;m Zach Benalayat, a{" "}
            <span className="text-primary">
              Product Manager &amp; GTM Specialist
            </span>{" "}
            with a forensic approach to data.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I work end-to-end — from success metrics and KPIs through post-launch analysis
            and continuous improvement. Products shipped across B2B sales, SaaS,
            e-commerce, telecom, and non-profit.
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
            >
              Get in touch
            </Link>
          </div>
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
                A role where the data actually drives the decision.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I&apos;m not chasing a title — I&apos;m chasing impact. Over the last
                several years I&apos;ve owned the full product development lifecycle on
                products that ship measurable revenue: $750k ARR in year one on Seamless
                API, $1M+ ARR uplift on Inseego Connect, 20% AWS savings on Data Engine
                4.0.
              </p>
              <p>
                I resonate deeply with teams that treat strategy as a continuous process,
                not a one-time deck. I thrive in environments that value out-of-the-box
                thinking, qualitative + quantitative rigor, and tight communication
                between product, engineering, and GTM.
              </p>
              <p>
                I bring extensive experience working with startups and scale-ups —
                guiding products from ideation through growth, with the receipts to prove
                each step moved the business forward.
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
            Open to collaborations, advisory roles, and product leadership opportunities.
            Let&apos;s build something great.
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
