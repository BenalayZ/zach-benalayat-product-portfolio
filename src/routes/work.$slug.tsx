import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const dateMap: Record<string, string> = {
  "May 2025": "2025-05",
  "Dec 2024": "2024-12",
  "2025": "2025",
  "Mar 2022": "2022-03",
  "Apr 2022": "2022-04",
  "2020": "2020",
};

function makeArticleSchema(project: (typeof projects)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.headline ?? project.summary,
    image: project.image,
    author: {
      "@type": "Person",
      name: "Zach Benalayat",
      url: "https://www.linkedin.com/in/zach-benalayat/",
    },
    datePublished: dateMap[project.date],
    url: `https://zachbenalayat.com/work/${project.slug}`,
  };
}

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Case study — Zach Benalayat" }] };
    const title = `${p.title} — Zach Benalayat`;
    const description = p.headline ?? p.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `/work/${p.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/work/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(makeArticleSchema(p)),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-foreground">Case study not found</h1>
      <p className="mt-3 text-muted-foreground">
        That project doesn&apos;t exist — it may have been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        <ArrowLeft className="h-4 w-4" /> Back to work
      </Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const sections = [
    { label: "Problem", value: project.problem },
    { label: "My Role", value: project.role },
    { label: "Strategy", value: project.strategy },
    { label: "Key Insights", value: project.insights },
    { label: "Outcome", value: project.outcome },
  ];

  return (
    <article>
      <div className="mx-auto max-w-3xl px-6 pt-12 md:pt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </div>

      <header className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Case Study · {project.date}
        </p>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {project.title}
        </h1>
        {project.headline && (
          <p className="mt-5 text-xl font-semibold text-primary md:text-2xl">
            {project.headline}
          </p>
        )}
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.label}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                {section.label}
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                {section.value}
              </p>
            </section>
          ))}
        </div>
      </div>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: nextProject.slug }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Next: {nextProject.title} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
