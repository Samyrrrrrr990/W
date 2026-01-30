import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue the highest standards in research, mentorship, and academic achievement.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We encourage creative thinking and novel approaches to solving complex problems.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "We believe every student deserves access to research opportunities regardless of background.",
  },
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Executive Director",
    affiliation: "Former MIT Research Fellow",
  },
  {
    name: "Prof. Michael Torres",
    role: "Academic Advisor",
    affiliation: "Western University",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Program Director",
    affiliation: "Toronto Metropolitan University",
  },
  {
    name: "James Wright",
    role: "Community Partnerships",
    affiliation: "Aurora Public Library",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 hero-glow">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
              Bridging Students to
              <span className="text-gradient block">World-Class Research</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-delay-2">
              The Youth Center for Research is a non-profit organization
              dedicated to giving students early exposure to scientific
              research, helping them secure internships, lab positions, and
              publish their work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Empowering the Next Generation of Scientists
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work hand-in-hand with experts from MIT, Toronto Metropolitan
                University, Western University, York University, and the Aurora
                Public Library to create pathways for ambitious students.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our programs connect students with mentors, provide real
                research experience, and guide them through the process of
                academic publishing—setting them up for success in hospitals,
                biotech firms, and research institutions worldwide.
              </p>
              <Button variant="hero" asChild>
                <Link to="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-primary/10 p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="stat-number text-6xl md:text-7xl mb-4">
                      10+
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Years of Impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Leadership & Advisors
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-1">{member.role}</p>
                <p className="text-muted-foreground text-xs">
                  {member.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-card/50 border-t border-border">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Want to Join Our Mission?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you're a student looking for opportunities or an expert
            wanting to mentor, we'd love to hear from you.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
