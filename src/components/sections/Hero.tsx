import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_50%_40%] from-[#00C6E0]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Open to Research Collaborations
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none">
          <span className="text-foreground">Pritam </span>
          <span
            style={{
              background: "linear-gradient(135deg, #00C6E0 0%, #00E5FF 50%, #8FA4B3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Paul
          </span>
        </h1>

        {/* Title */}
        <p className="text-lg md:text-xl text-muted-foreground font-medium mb-3 tracking-wide">
          Assistant Professor &amp; Software Developer
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Kolkata, India
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            Brainware University
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            UGC NET Qualified
          </span>
        </div>

        {/* Summary */}
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10 text-sm md:text-base">
          Computer Science professional with expertise in Machine Learning, Software Engineering,
          and App Development. Passionate about building AI-driven solutions and nurturing the
          next generation of technologists.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="https://linkedin.com/in/prtmplish" target="_blank" rel="noopener noreferrer">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/Prtmplish" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="gap-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </Button>
          </a>
          <a href="mailto:itispritampaul@gmail.com">
            <Button
              variant="outline"
              className="gap-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
          </a>
          <a href="tel:+919679874114">
            <Button
              variant="ghost"
              className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5"
            >
              <Phone className="w-4 h-4" />
              +91-9679874114
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
