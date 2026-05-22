import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="block w-full text-left"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold tracking-tight text-card-foreground">
              {project.title}
            </h3>
            <span className="shrink-0 pt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {project.date}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              {open ? "Hide" : "View"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div className="space-y-4 border-t border-border bg-muted/30 px-6 py-6 text-sm leading-relaxed">
          {[
            { label: "Problem", value: project.problem },
            { label: "My Role", value: project.role },
            { label: "Strategy", value: project.strategy },
            { label: "Key Insights", value: project.insights },
            { label: "Outcome", value: project.outcome },
          ].map((row) => (
            <div key={row.label}>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {row.label}
              </p>
              <p className="text-muted-foreground">{row.value}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
