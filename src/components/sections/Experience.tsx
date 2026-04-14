import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Experience</h2>
        <div className="section-divider" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-8 md:gap-12">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background mt-6 teal-glow" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 card-hover mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                        <h3 className="font-semibold text-foreground text-base leading-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                      {exp.department && (
                        <p className="text-muted-foreground text-xs mt-0.5">{exp.department}</p>
                      )}
                      <p className="text-muted-foreground text-xs">{exp.location}</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted/50 border border-border px-3 py-1 rounded-full whitespace-nowrap self-start flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
