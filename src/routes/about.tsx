import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { about, withBase, site, OG_IMAGE, SITE_URL } from "@/content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: about.seo.title },
      { name: "description", content: about.seo.description },
      { property: "og:title", content: about.seo.title },
      { property: "og:description", content: about.seo.ogDescription },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: about.seo.title },
      { name: "twitter:description", content: about.seo.ogDescription },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">{about.header.eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {about.header.heading}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{about.header.subtitle}</p>
      </div>

      <div className="space-y-6 text-base leading-relaxed text-foreground">
        {about.bio.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <div className="flex flex-wrap gap-2 pt-1">
          {about.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <a
            href={withBase(site.resumeFile)}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Download className="h-4 w-4" /> {about.resumeButtonLabel}
          </a>
        </div>
      </div>

      <hr className="my-12 border-border" />

      <h2 className="mb-8 text-2xl font-bold text-foreground">{about.experienceHeading}</h2>
      <div className="space-y-10">
        {about.experience.map((job) => (
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

      <h2 className="mb-8 text-2xl font-bold text-foreground">{about.educationHeading}</h2>
      <div className="space-y-6">
        {about.education.map((ed) => (
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

      <div className="mb-8 border-l-2 border-primary pl-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          {about.principles.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-foreground">{about.principles.heading}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {about.principles.items.map((ns) => (
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

      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-3">
        <h2 className="text-2xl font-bold text-foreground">{about.process.heading}</h2>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
          {about.process.stepsLabel}
        </p>
      </div>
      <ol className="relative space-y-6 border-l border-border pl-6">
        {about.process.steps.map((step, i) => (
          <li key={step} className="relative">
            <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {i + 1}
            </span>
            <p className="text-base font-medium text-foreground">{step}</p>
          </li>
        ))}
      </ol>

      <hr className="my-12 border-border" />

      <h2 className="mb-8 text-2xl font-bold text-foreground">
        {about.toolkit.heading}
        <span className="ml-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary align-middle">
          {about.toolkit.suffixLabel}
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {about.toolkit.groups.map((group, i) => {
          const primaries = group.items.filter((it) => "primary" in it && it.primary);
          const supporting = group.items.filter((it) => !("primary" in it) || !it.primary);
          return (
            <div key={group.label} className="flex flex-col bg-background p-6">
              <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                0{i + 1} · {group.label}
              </p>


              <ul className="space-y-3">
                {primaries.map((it) => (
                  <li key={it.name}>
                    <p className="font-sans text-base font-bold text-foreground">{it.name}</p>
                    {"children" in it && it.children && (
                      <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                        {it.children.join(" · ")}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              {supporting.length > 0 && (
                <ul className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
                  {supporting.map((it) => (
                    <li key={it.name}>{it.name}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
