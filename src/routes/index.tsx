import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Product Manager · GTM Specialist
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Zach Benalayat
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              I take a forensic approach to data analytics. Messy or incomplete data
              isn&apos;t a blocker to great insight — it&apos;s a puzzle to solve. I work
              end-to-end, from success metrics and KPIs through post-launch analysis and
              continuous improvement.
            </p>
            <p className="text-base text-muted-foreground">
              Products shipped across B2B sales, SaaS, e-commerce, telecom, and non-profit.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                About me <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work — Masonry */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Selected Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Case Studies
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Tap any project to expand the full Problem / Role / Strategy / Insights /
                Outcome breakdown.
              </p>
            </div>
            <Link
              to="/about"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:inline-flex"
            >
              See full experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="columns-1 gap-6 space-y-6 md:columns-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
            Open to collaborations, advisory roles, and product leadership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:zacharia.benalayat@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary-foreground/90"
            >
              Send an email <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              View contact options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
