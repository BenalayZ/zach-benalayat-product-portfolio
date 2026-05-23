import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, ArrowUpRight, FileDown, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "zacharia.benalayat@gmail.com",
      href: "mailto:zacharia.benalayat@gmail.com?subject=Hello%20Zach",
      primary: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/zach-benalayat",
      href: "https://www.linkedin.com/in/zach-benalayat",
    },
    {
      icon: FileDown,
      label: "Resume",
      value: "Zach_J_Benalayat.pdf",
      href: `${import.meta.env.BASE_URL.replace(/\/$/, "")}/Zach_J_Benalayat.pdf`,
      download: true,
    },
  ];

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Let&apos;s connect
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Open to Senior Product Manager and Analyst roles, fractional engagements, and defined-scope contract work.
        </p>
        <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <Clock className="h-3.5 w-3.5" /> Usually responds within 24 hours
        </p>
      </div>

      <div className="space-y-3">
        {channels.map((channel) => {
          const isPrimary = "primary" in channel && channel.primary;
          return (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={(channel as { download?: boolean }).download ? "" : undefined}
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
                <channel.icon className="h-5 w-5" />
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
        Prefer a form? Email is fastest — I check it every weekday.
      </p>
    </div>
  );
}
