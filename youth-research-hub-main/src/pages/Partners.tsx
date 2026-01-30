import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Massachusetts Institute of Technology",
    short: "MIT",
    description:
      "Collaborating with MIT's research departments to provide students access to cutting-edge STEM research opportunities and mentorship from world-renowned scientists.",
    link: "https://www.mit.edu",
    type: "University",
  },
  {
    name: "Toronto Metropolitan University",
    short: "TMU",
    description:
      "Working with TMU's Faculty of Science to create pathways for local students to engage in biomedical and health sciences research.",
    link: "https://www.torontomu.ca",
    type: "University",
  },
  {
    name: "Western University",
    short: "Western",
    description:
      "Partnering with Western's Schulich School of Medicine & Dentistry to offer clinical research exposure and health sciences mentorship.",
    link: "https://www.uwo.ca",
    type: "University",
  },
  {
    name: "York University",
    short: "York",
    description:
      "Connecting with York's Lassonde School of Engineering and Faculty of Science for interdisciplinary research projects.",
    link: "https://www.yorku.ca",
    type: "University",
  },
  {
    name: "Aurora Public Library",
    short: "APL",
    description:
      "Our community hub for workshops, study groups, and accessible resources. The library hosts many of our introductory programs and community events.",
    link: "https://www.aurorapl.ca",
    type: "Community",
  },
];

const impactStats = [
  { number: "15+", label: "Active Research Labs" },
  { number: "100+", label: "Mentors Available" },
  { number: "5", label: "Partner Institutions" },
  { number: "3", label: "Countries Represented" },
];

const Partners = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 hero-glow">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Our Partners
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
              World-Class
              <span className="text-gradient block">Collaborations</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-delay-2">
              We're proud to work with leading universities and community
              organizations to create meaningful research opportunities for
              students.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number text-4xl md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-muted-foreground mt-2 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="space-y-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-32 shrink-0">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-secondary flex items-center justify-center">
                      <span className="font-display font-bold text-2xl lg:text-3xl text-primary">
                        {partner.short}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="text-xs text-primary uppercase tracking-wider">
                          {partner.type}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                          {partner.name}
                        </h3>
                      </div>
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 md:py-24 bg-card/50 border-t border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-4">Become a Partner</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Join Our Network
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Are you a university, research institution, hospital, or
                biotech company interested in mentoring the next generation of
                researchers? We'd love to explore partnership opportunities.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Access to motivated students",
                "Research assistance",
                "Community impact",
                "Talent pipeline",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <p className="text-foreground font-medium text-sm">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
