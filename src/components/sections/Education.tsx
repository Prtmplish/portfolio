import { GraduationCap } from "lucide-react";
import { educations } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Education</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-3 gap-6">
          {educations.map((edu, i) => (
            <div
              key={i}
              className="relative bg-card border border-border rounded-xl p-6 card-hover flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.period}</p>
              </div>

              {/* Score badge */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  {edu.scoreLabel}
                </span>
                <span className="font-bold text-primary text-sm">{edu.score}</span>
              </div>

              {/* Accent line */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary rounded-t-xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
