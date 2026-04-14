import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080D14]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Key Projects</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-xl p-6 card-hover flex flex-col gap-4"
            >
              {/* Number + Title row */}
              <div className="flex items-start gap-3">
                <span className="text-3xl font-bold text-primary/20 leading-none font-mono select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground text-sm leading-snug">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="text-xs border-primary/30 text-primary/80 bg-primary/5 hover:border-primary hover:text-primary transition-colors"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
