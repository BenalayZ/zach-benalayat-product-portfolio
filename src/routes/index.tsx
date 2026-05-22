import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import seamlessImg from "@/assets/seamless-api.jpg";
import inseegoImg from "@/assets/inseego-connect.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zach Benalayat — Product Manager" },
      { name: "description", content: "Product portfolio of Zach Benalayat, featuring Seamless API, Inseego Connect, and more." },
      { property: "og:title", content: "Zach Benalayat — Product Manager" },
      { property: "og:description", content: "Product portfolio of Zach Benalayat, featuring Seamless API, Inseego Connect, and more." },
    ],
  }),
  component: Index,
});

const products = [
  {
    id: "seamless-api",
    title: "Seamless API",
    tagline: "Unified developer experience for multi-platform APIs.",
    description:
      "Led product strategy for a developer-facing API aggregation layer, reducing integration time from weeks to hours. Built the roadmap, defined KPIs, and shipped v1 to production.",
    image: seamlessImg,
    tags: ["API Design", "Developer Experience", "B2B SaaS"],
    link: "#",
    featured: true,
  },
  {
    id: "inseego-connect",
    title: "Inseego Connect",
    tagline: "IoT device management at enterprise scale.",
    description:
      "Drove the product vision for a cloud-based IoT management platform serving Fortune 500 clients. Scaled from 10K to 500K+ connected devices while maintaining 99.9% uptime.",
    image: inseegoImg,
    tags: ["IoT", "Enterprise", "Platform"],
    link: "#",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    tagline: "Real-time insights for product teams.",
    description:
      "Designed and shipped an analytics dashboard that gave product teams real-time visibility into user behavior, leading to a 34% increase in feature adoption rates.",
    image: null,
    tags: ["Analytics", "Data", "UX"],
    link: "#",
    featured: false,
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Product Manager
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
                Zach Benalayat
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                I build products that bridge complex technology and human needs.
                Currently focused on API platforms and IoT connectivity.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  About me <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:zach@example.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Abstract tech illustration"
                width={1536}
                height={1024}
                className="rounded-2xl object-cover shadow-xl"
                style={{ aspectRatio: "3/2" }}
              />
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Products shipped</p>
                    <p className="text-lg font-bold text-foreground">15+</p>
                  </div>
                </div>
              </div>
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
                Featured Products
              </h2>
            </div>
            <Link
              to="/about"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:inline-flex"
            >
              See all experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 gap-6 space-y-6 md:columns-2">
            {products.map((product) => (
              <article
                key={product.id}
                className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg"
              >
                {product.image && (
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                    {product.featured && (
                      <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Featured
                      </span>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-primary">{product.tagline}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Capabilities
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What I do
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Product Strategy",
                description:
                  "Defining vision, roadmaps, and go-to-market strategies that align engineering, design, and business goals.",
              },
              {
                title: "API & Platform Design",
                description:
                  "Building developer-first products with clean abstractions, strong documentation, and intuitive workflows.",
              },
              {
                title: "Growth & Metrics",
                description:
                  "Establishing KPIs, cohort analysis, and feedback loops to iterate and scale products effectively.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="mb-3 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
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
              href="mailto:zach@example.com"
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
