import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Linkedin, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { home, site, withBase, OG_IMAGE } from "@/content";
import seamlessLogo from "@/assets/logos/seamless.png";
import inseegoLogo from "@/assets/logos/inseego.png";
import caseworthyLogo from "@/assets/logos/caseworthy.png";
import arcLogo from "@/assets/logos/arc.svg";
import butlerLogo from "@/assets/logos/butler.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: home.seo.title },
      { name: "description", content: home.seo.description },
      { property: "og:title", content: home.seo.title },
      { property: "og:description", content: home.seo.ogDescription },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: home.seo.title },
      { name: "twitter:description", content: home.seo.ogDescription },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

// To add a new logo: drop the file in src/assets/logos/, import it above,
// and add it here keyed by the `"key"` value used in content/home.json.
const logoMap: Record<string, string> = {
  seamless: seamlessLogo,
  inseego: inseegoLogo,
  caseworthy: caseworthyLogo,
  arc: arcLogo,
  butler: butlerLogo,
};

function Index() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero — orbital data precision */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Background — orbital rings + ghost monogram + data-node graph */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {/* Ghost monogram — large, low-opacity, behind everything */}
          <div
            aria-hidden
            className="absolute select-none font-sans text-[28vw] font-extrabold uppercase leading-none tracking-tighter text-secondary opacity-[0.07] lg:text-[22vw]"
          >
            {home.hero.monogram}
          </div>

          {/* Orbital rings — 3 weights, one dashed */}
          <div className="absolute aspect-square w-[55vw] rounded-full border border-secondary/40 lg:w-[34vw]" />
          <div className="absolute aspect-square w-[80vw] rounded-full border border-dashed border-secondary/30 lg:w-[52vw]" />
          <div className="absolute aspect-square w-[115vw] rounded-full border border-secondary/15 lg:w-[72vw]" />

          {/* Soft radial glow */}
          <div className="absolute h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[140px]" />

          {/* Orbiting data points on the rings */}
          <div className="absolute aspect-square w-[80vw] animate-orbit-slow lg:w-[52vw]">
            <span className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(201,168,76,0.7)]" />
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
            <span className="absolute bottom-0 left-1/3 h-1 w-1 rounded-full bg-secondary" />
          </div>
          <div className="absolute aspect-square w-[55vw] animate-orbit-fast lg:w-[34vw]">
            <span className="absolute top-1/4 -right-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span className="absolute bottom-1/4 -left-1 h-1 w-1 rounded-full bg-foreground/40" />
          </div>

          {/* Abstract geometric data-node connectors behind the headline */}
          <svg
            aria-hidden
            className="absolute h-[22rem] w-[44rem] max-w-[95vw] opacity-[0.22]"
            viewBox="0 0 800 400"
            fill="none"
          >
            <defs>
              <linearGradient id="dataLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.74 0.13 85)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.74 0.13 85)" stopOpacity="1" />
                <stop offset="100%" stopColor="oklch(0.74 0.13 85)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="url(#dataLine)" strokeWidth="0.75">
              <line x1="80" y1="120" x2="280" y2="60" />
              <line x1="280" y1="60" x2="520" y2="180" />
              <line x1="520" y1="180" x2="720" y2="90" />
              <line x1="80" y1="120" x2="220" y2="280" />
              <line x1="220" y1="280" x2="460" y2="320" />
              <line x1="460" y1="320" x2="660" y2="260" />
              <line x1="280" y1="60" x2="220" y2="280" />
              <line x1="520" y1="180" x2="460" y2="320" />
              <line x1="720" y1="90" x2="660" y2="260" />
            </g>
            <g fill="oklch(0.74 0.13 85)">
              <circle cx="80" cy="120" r="3" />
              <circle cx="280" cy="60" r="4" />
              <circle cx="520" cy="180" r="3.5" />
              <circle cx="720" cy="90" r="3" />
              <circle cx="220" cy="280" r="3" />
              <circle cx="460" cy="320" r="4" />
              <circle cx="660" cy="260" r="3" />
            </g>
            <g stroke="oklch(0.50 0.10 162)" strokeWidth="0.5" opacity="0.6">
              <line x1="0" y1="200" x2="800" y2="200" strokeDasharray="2 6" />
              <line x1="400" y1="0" x2="400" y2="400" strokeDasharray="2 6" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center md:py-28">
          <p className="mb-4 font-sans text-xs font-extrabold uppercase tracking-[0.35em] text-foreground/80">
            {home.hero.nameLabel}
          </p>

          <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            {home.hero.eyebrow}
          </p>

          <h1 className="max-w-4xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            <span className="text-primary">{home.hero.headlineLine1}</span>{" "}
            <span className="text-primary">{home.hero.headlineLine2}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base font-medium text-foreground/90 md:text-xl">
            {home.hero.tagline}
          </p>


          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground md:text-sm">
            {home.hero.metaPoints.map((mp, i) => (
              <li key={mp} className="inline-flex items-center gap-1.5">
                {i === 0 ? (
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <span className="h-1 w-1 rounded-full bg-primary" />
                )}
                {mp}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(201,168,76,0.45)] active:scale-95"
              >
                {home.hero.ctaPrimary} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={withBase(site.resumeFile)}
                download
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-foreground/5 px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> {home.hero.ctaResume}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs font-medium text-muted-foreground">
              <a
                href={`mailto:${site.ownerEmail}`}
                className="transition-colors hover:text-primary"
              >
                {site.ownerEmail}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {home.hero.availability}
            </span>
          </div>

          <dl className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {home.hero.proofStats.map((m) => (
              <div key={m.label} className="bg-background p-6 text-left">
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

        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 opacity-40 md:block"
        >
          <div className="relative h-12 w-0.5 overflow-hidden bg-foreground/20">
            <div className="absolute left-0 top-0 h-1/2 w-full animate-scroll-cue bg-primary" />
          </div>
        </div>
      </section>


      {/* Organizations I've worked with — wordmark band */}
      <section aria-label={home.logosBand.label} className="border-y border-border bg-foreground">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <p className="mb-6 text-center font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-background/60 md:text-left">
            {home.logosBand.label}
          </p>
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-6">
            {home.logosBand.logos.map(({ name, key }) => (
              <li key={name} className="flex h-16 items-center justify-center md:h-20">
                <img
                  src={logoMap[key]}
                  alt={`${name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-[160px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* Positioning / Approach */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="border-t border-secondary/60 pt-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="flex flex-col md:col-span-7">
                <div className="mb-8 flex items-center gap-4">
                  <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary md:text-xs">
                    {home.approach.eyebrow}
                  </span>
                  <div className="h-px w-12 bg-primary" />
                </div>
                <h2 className="font-sans text-5xl font-extrabold leading-[0.95] tracking-tighter text-foreground md:text-7xl">
                  {home.approach.headlineLine1}
                  <span className="mt-2 block">{home.approach.headlineLine2}</span>
                </h2>
              </div>

              <div className="flex flex-col justify-center border-l border-secondary/60 py-2 pl-8 md:col-span-5 md:pl-12">
                <div className="max-w-sm">
                  <p className="font-sans text-lg font-normal leading-relaxed text-foreground/90 md:text-xl">
                    {home.approach.body1}
                  </p>
                  <p className="mt-6 font-sans text-base leading-relaxed text-foreground/60 md:text-lg">
                    {home.approach.body2}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-24 flex w-full items-end justify-between">
              <div className="h-[2px] w-24 bg-secondary/60" />
              <span
                aria-hidden="true"
                className="pointer-events-none translate-y-8 select-none font-sans text-8xl font-extrabold leading-none text-secondary/30"
              >
                {home.approach.sectionNumber}
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Toolkit — two-column with sticky title rail */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[16rem_1fr] md:gap-16">
            <aside className="md:sticky md:top-24 md:self-start">
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                {home.toolkit.eyebrow}
              </p>
              <h2 className="font-sans text-3xl font-extrabold leading-[1] tracking-tighter text-foreground md:text-5xl">
                {home.toolkit.headlineLine1}
                <br />
                {home.toolkit.headlineLine2}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {home.toolkit.subtitle}
              </p>
            </aside>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {home.toolkit.groups.map((group, i) => {
                const primaries = group.items.filter((it) => "primary" in it && it.primary);
                const supporting = group.items.filter((it) => !("primary" in it) || !it.primary);
                return (
                  <div key={group.label} className="flex flex-col bg-background p-7">
                    <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
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
          </div>

          <div className="sr-only">
            <p>Keywords // ATS-searchable</p>
            <p>{home.toolkit.atsKeywords}</p>
          </div>
        </div>
      </section>




      {/* Featured Projects */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-b border-secondary/40 pb-6">
            <h2 className="font-sans text-4xl font-extrabold tracking-tighter text-foreground md:text-6xl">
              {home.featuredHeading}
            </h2>
            <div className="flex items-baseline gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              <span>{home.featuredEyebrow}</span>
              <span className="h-px w-8 translate-y-[-3px] bg-primary/60" />
              <span>01 / 02</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10 hidden justify-end md:flex">
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Full experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Top Skills */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            {home.skills.eyebrow}
          </p>
          <h2 className="mb-16 max-w-3xl font-sans text-4xl font-extrabold leading-[1] tracking-tighter text-foreground md:text-6xl">
            {home.skills.headline}
          </h2>

          <div className="divide-y divide-border border-y border-border">
            {home.skills.items.map((skill, i) => (
              <div
                key={skill.title}
                className="grid grid-cols-[3rem_1fr] gap-6 py-8 md:grid-cols-[5rem_minmax(0,18rem)_1fr] md:gap-10 md:py-10"
              >
                <span className="font-sans text-3xl font-extrabold leading-none tracking-tighter text-primary md:text-5xl">
                  0{i + 1}
                </span>
                <h3 className="font-sans text-xl font-bold leading-tight text-foreground md:text-2xl">
                  {skill.title}
                </h3>
                <p className="col-span-2 text-base leading-relaxed text-muted-foreground md:col-span-1 md:max-w-md">
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
          <div className="mb-16 md:ml-auto md:max-w-xl md:text-right">
            <h2 className="font-sans text-4xl font-extrabold leading-[1] tracking-tighter text-foreground md:text-5xl">
              {home.engagement.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {home.engagement.subtitle}
            </p>
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              {home.engagement.eyebrow}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-12">
            {home.engagement.models.map((m, i) => {
              const featuredCard = i === 0;
              return (
                <div
                  key={m.label}
                  className={`${featuredCard ? "md:col-span-6" : "md:col-span-3"} flex flex-col justify-between bg-background p-8`}
                >
                  <div>
                    <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      {m.label}
                    </p>
                    <h3
                      className={`mb-4 font-sans font-bold text-foreground ${
                        featuredCard ? "text-2xl md:text-3xl tracking-tighter" : "text-lg"
                      }`}
                    >
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-16">
            <div className="md:sticky md:top-24 md:self-start">
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                {home.faq.eyebrow}
              </p>
              <h2 className="font-sans text-3xl font-extrabold leading-[1] tracking-tighter text-foreground md:text-4xl">
                {home.faq.headlineLine1}
                <br />
                {home.faq.headlineLine2}
              </h2>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {home.faq.items.map((f, i) => (
                <div key={f.q} className="grid gap-3 py-7 md:grid-cols-[auto_1fr] md:gap-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Q_{String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="font-sans text-lg font-bold text-foreground">{f.q}</dt>
                    <dd className="mt-2 text-base leading-relaxed text-muted-foreground">{f.a}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>


      {/* More Work */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="mb-10 flex items-baseline gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            <span>02 / 02</span>
            <span className="h-px flex-1 bg-secondary/40" />
            <span className="text-muted-foreground">{home.moreEyebrow}</span>
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
            {home.cta.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg font-medium text-primary-foreground/80">
            {home.cta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.ownerEmail}`}
              className="inline-flex items-center gap-2 bg-background px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-transform hover:scale-105"
            >
              {home.cta.emailLabel} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> {home.cta.linkedinLabel}
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}
