import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "itispritampaul@gmail.com",
    href: "mailto:itispritampaul@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9679874114",
    href: "tel:+919679874114",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    href: null,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/prtmplish",
    href: "https://linkedin.com/in/prtmplish",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Prtmplish",
    href: "https://github.com/Prtmplish",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#080D14]/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="section-divider mx-auto" />

        <p className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Whether it's a research collaboration, teaching opportunity, or software project —
          I'd love to connect. Feel free to reach out through any of the channels below.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-xl p-5 card-hover flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <a href="mailto:itispritampaul@gmail.com">
          <Button
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
          >
            <Mail className="w-4 h-4" />
            Send Me a Message
          </Button>
        </a>
      </div>
    </section>
  );
}
