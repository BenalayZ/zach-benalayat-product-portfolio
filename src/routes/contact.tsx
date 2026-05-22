import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zach Benalayat" },
      { name: "description", content: "Get in touch with Zach Benalayat for collaborations, advisory roles, and product leadership opportunities." },
      { property: "og:title", content: "Contact — Zach Benalayat" },
      { property: "og:description", content: "Get in touch with Zach Benalayat for collaborations, advisory roles, and product leadership opportunities." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "zach@example.com",
      href: "mailto:zach@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/zachbenalayat",
      href: "https://www.linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/zachbenalayat",
      href: "https://github.com",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Let&apos;s connect
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Open to collaborations, advisory roles, and product leadership opportunities.
        </p>
      </div>

      <div className="space-y-4">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <channel.icon className="h-5 w-5" />
            </div>
            <div className="min-w-1 flex-1">
              <p className="text-sm font-medium text-muted-foreground">{channel.label}</p>
              <p className="font-medium text-card-foreground">{channel.value}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-1 text-muted-foreground" />
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-8 text-center">
        <h2 className="mb-2 text-lg font-bold text-foreground">Prefer a call?</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          I&apos;m happy to jump on a quick 15-minute call to discuss opportunities.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
        >
          Book a time <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
