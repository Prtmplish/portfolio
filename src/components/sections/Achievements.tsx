import { Trophy, Star, Cpu, Users } from "lucide-react";
import { achievements } from "@/data/portfolio";

const icons = [Users, Trophy, Cpu, Star];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Achievements & Leadership</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 card-hover flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
