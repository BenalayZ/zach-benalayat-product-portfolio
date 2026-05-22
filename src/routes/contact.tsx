import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zach Benalayat" },
      {
        name: "description",
        content:
          "Get in touch with Zach Benalayat for product leadership, GTM, and analytics opportunities.",
      },
      { property: "og:title", content: "Contact — Zach Benalayat" },
      {
        property: "og:description",
        content:
          "Email or connect on LinkedIn for collaborations, advisory roles, and product leadership opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "zacharia.benalayat@gmail.com",
      href: "mailto:zacharia.benalayat@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/zach-benalayat",
      href: "https://www.linkedin.com/in/zach-benalayat",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Contact
        </p>
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
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-muted-foreground">{channel.label}</p>
              <p className="font-medium text-card-foreground">{channel.value}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground" />
          </a>
        ))}
      </div>
    </div>
  );
}
