import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, ArrowUpRight, FileDown, Clock } from "lucide-react";
import { contact, site, withBase, OG_IMAGE, SITE_URL } from "@/content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: contact.seo.title },
      { name: "description", content: contact.seo.description },
      { property: "og:title", content: contact.seo.title },
      { property: "og:description", content: contact.seo.ogDescription },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: contact.seo.title },
      { name: "twitter:description", content: contact.seo.ogDescription },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
});

const iconMap = { mail: Mail, linkedin: Linkedin, resume: FileDown } as const;

function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          {contact.header.eyebrow}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {contact.header.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          {contact.header.subtitle}
        </p>
        <ul className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {contact.badges.map((b) => (
            <li key={b} className="border border-border px-3 py-1">{b}</li>
          ))}
        </ul>
        <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <Clock className="h-3.5 w-3.5" /> {contact.responseNote}
        </p>
      </div>

      <div className="space-y-3">
        {contact.channels.map((channel) => {
          const Icon = iconMap[channel.icon as keyof typeof iconMap];
          const isPrimary = "primary" in channel && channel.primary;
          const href = "isResume" in channel && channel.isResume ? withBase(site.resumeFile) : channel.href!;
          return (
            <a
              key={channel.label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={"download" in channel && channel.download ? "" : undefined}
              className={
                isPrimary
                  ? "flex items-center gap-4 rounded-2xl border-2 border-primary bg-primary/10 p-5 shadow-lg shadow-primary/10 transition-all hover:bg-primary/15"
                  : "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              }
            >
              <div
                className={
                  isPrimary
                    ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"
                    : "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                }
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={isPrimary ? "text-sm font-bold uppercase tracking-widest text-primary" : "text-sm font-medium text-muted-foreground"}>
                  {channel.label}
                </p>
                <p className="font-medium text-card-foreground">{channel.value}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </a>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {contact.footerNote}
      </p>
    </div>
  );
}
