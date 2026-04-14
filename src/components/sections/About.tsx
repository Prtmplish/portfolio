import { BookOpen, Code2, FlaskConical, Users } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "Publications", value: "3" },
  { icon: FlaskConical, label: "ML Projects", value: "4+" },
  { icon: Users, label: "Students Mentored", value: "100+" },
  { icon: Code2, label: "Years Coding", value: "6+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Text */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm a Computer Science professional and <span className="text-foreground font-medium">UGC NET qualified</span> Assistant
              Professor at Brainware University, where I teach undergraduate AI courses and work as
              a member of the{" "}
              <span className="text-primary font-medium">AI Research & Development Cell</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              My research interests span <span className="text-foreground font-medium">Graph Neural Networks</span>,
              healthcare AI, and data-driven systems. I've published work on arrhythmia detection,
              stroke classification, and logistics optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Outside academia, I build cross-platform mobile applications using{" "}
              <span className="text-foreground font-medium">Flutter & Firebase</span>, and have
              previously interned at Dell Technologies working on enterprise data center solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm passionate about community building — having served as faculty at{" "}
              <span className="text-primary font-medium">GirlScript Siliguri</span> for 2 years,
              mentoring students in app development and organizing technical workshops.
            </p>

            {/* Languages & Interests */}
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                  Languages
                </p>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>English — Full Professional</li>
                  <li>Bengali — Native</li>
                  <li>Hindi — Intermediate</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                  Interests
                </p>
                <ul className="space-y-1 text-sm text-foreground">
                  <li>Painting & Sketching</li>
                  <li>Chess</li>
                  <li>Technology Innovation</li>
                  <li>R&D</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-5 card-hover text-center"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
