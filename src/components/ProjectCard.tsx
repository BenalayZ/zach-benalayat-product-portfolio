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
        {/* Lead with the outcome — the only number a recruiter cares about */}
        {project.headline && (
          <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            Outcome
          </p>
        )}
        {project.headline && (
          <p className="mb-4 text-xl font-extrabold tracking-tighter text-primary md:text-2xl">
            {project.headline}
          </p>
        )}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-base font-bold tracking-tight text-card-foreground">
            {project.title}
          </h3>
          <span className="shrink-0 pt-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            {project.date}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        {project.signals && project.signals.length > 0 && (
          <div className="mt-5 border-t border-border pt-4">
            <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Strongest signal for
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.signals.map((s) => (
                <span
                  key={s}
                  className="border border-primary/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
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
