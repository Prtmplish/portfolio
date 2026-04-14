import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/portfolio";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 bg-[#080D14]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Publications</h2>
        <div className="section-divider" />

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="relative bg-card border border-border rounded-xl p-6 card-hover flex gap-5"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-l-xl" />

              {/* Icon */}
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 flex-wrap mb-2">
                  <span className="text-xs font-bold text-primary/60 font-mono">
                    [{i + 1}]
                  </span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      pub.status === "communicated"
                        ? "border-yellow-500/40 text-yellow-400/80 bg-yellow-500/5"
                        : "border-green-500/40 text-green-400/80 bg-green-500/5"
                    }`}
                  >
                    {pub.status === "communicated" ? "Communicated" : "Published"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{pub.year}</span>
                </div>

                <h3 className="font-medium text-foreground text-sm leading-snug mb-1.5">
                  {pub.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{pub.authors}</p>
                <p className="text-xs text-primary/70 italic">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
