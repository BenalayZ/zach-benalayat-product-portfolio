import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zach Benalayat" },
      { name: "description", content: "Learn more about Zach Benalayat, his background in product management, and the products he has shipped." },
      { property: "og:title", content: "About — Zach Benalayat" },
      { property: "og:description", content: "Learn more about Zach Benalayat, his background in product management, and the products he has shipped." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">About</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Zach Benalayat
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">Product Manager &middot; Builder &middot; Strategist</p>
      </div>

      <div className="space-y-8 text-base leading-relaxed text-foreground">
        <p>
          I am a product manager with a passion for turning complex technical systems into
          intuitive, human-centered products. My work spans API platforms, IoT connectivity,
          and enterprise SaaS — always with a focus on developer experience and measurable
          business impact.
        </p>

        <p>
          Most recently, I led product for{" "}
          <strong className="text-primary">Seamless API</strong>, a unified developer
          experience that reduced integration time from weeks to hours, and{" "}
          <strong className="text-primary">Inseego Connect</strong>, an IoT device management
          platform scaling to 500K+ connected devices.
        </p>

        <p>
          Before that, I spent years shipping products across analytics, data infrastructure,
          and consumer-facing tools. I believe great product work sits at the intersection of
          user empathy, technical depth, and business acumen.
        </p>
      </div>

      <hr className="my-12 border-border" />

      <h2 className="mb-8 text-2xl font-bold text-foreground">Experience</h2>
      <div className="space-y-10">
        {[
          {
            company: "Seamless API",
            role: "Senior Product Manager",
            period: "2022 — Present",
            description:
              "Led end-to-end product strategy for a developer-facing API platform. Defined the roadmap, built the KPI framework, and shipped v1 to production with 40+ enterprise customers.",
          },
          {
            company: "Inseego",
            role: "Product Manager",
            period: "2019 — 2022",
            description:
              "Drove the product vision for Inseego Connect, scaling the platform from 10K to 500K+ devices. Owned the enterprise roadmap, pricing, and go-to-market strategy.",
          },
          {
            company: "Earlier",
            role: "Product & Analytics Roles",
            period: "2015 — 2019",
            description:
              "Built analytics dashboards, data pipelines, and consumer-facing features across startups and mid-stage companies.",
          },
        ].map((job) => (
          <div key={job.company} className="group">
            <div className="mb-1 flex items-baseline justify-between">
              <h3 className="text-lg font-bold text-card-foreground">{job.company}</h3>
              <span className="text-sm text-muted-foreground">{job.period}</span>
            </div>
            <p className="mb-2 text-sm font-medium text-primary">{job.role}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>
          </div>
        ))}
      </div>

      <hr className="my-12 border-border" />

      <h2 className="mb-8 text-2xl font-bold text-foreground">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "Product Strategy",
          "API Design",
          "Developer Experience",
          "IoT Platforms",
          "Data Analytics",
          "User Research",
          "Go-to-Market",
          "Agile / Scrum",
          "A/B Testing",
          "Stakeholder Management",
          "Technical Writing",
          "Growth Metrics",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
