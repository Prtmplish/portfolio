import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="section-divider" />

        <div className="space-y-8">
          {skills.map((group, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-muted/50 text-foreground border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {skill}
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
