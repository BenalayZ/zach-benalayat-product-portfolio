import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md"
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
        {project.headline && (
          <p className="mb-2 text-sm font-semibold text-primary">
            {project.headline}
          </p>
        )}
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
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5">
            Read case study <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
