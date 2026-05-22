import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="block w-full text-left"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full object-cover"
          />
          {project.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Featured
            </span>
          )}
        </div>
        <div className="p-6">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
            <span className="shrink-0 text-xs font-medium text-muted-foreground">
              {project.date}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {open ? "Hide case study" : "Read case study"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>
      </button>

      {open && (
        <div className="space-y-4 border-t border-border bg-muted/30 px-6 py-6 text-sm leading-relaxed text-foreground">
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
