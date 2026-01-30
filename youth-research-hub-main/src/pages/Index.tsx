import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FlaskConical, GraduationCap, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { number: "500+", label: "Students Mentored" },
  { number: "50+", label: "Research Papers Published" },
  { number: "25+", label: "Partner Institutions" },
  { number: "95%", label: "Placement Rate" },
];

const partners = [
  { name: "MIT", logo: "MIT" },
  { name: "Toronto Metropolitan University", logo: "TMU" },
  { name: "Western University", logo: "Western" },
  { name: "York University", logo: "York" },
  { name: "Aurora Public Library", logo: "APL" },
];

const features = [
  {
    icon: FlaskConical,
    title: "Lab Positions",
    description:
      "Gain hands-on experience in cutting-edge research laboratories at top universities.",
  },
  {
    icon: BookOpen,
    title: "Paper Publishing",
    description:
      "Get guidance on writing and publishing your research in peer-reviewed journals.",
  },
  {
    icon: GraduationCap,
    title: "Internships",
    description:
      "Secure internships at hospitals, biotech firms, and leading research institutions.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Connect with experts from MIT, TMU, Western, York, and industry professionals.",
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-glow">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Empowering Young Researchers
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
              Your Gateway to
              <span className="text-gradient block">Research Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-delay-2">
              The Youth Center for Research connects ambitious students with
              world-class experts from MIT, TMU, Western, York, and more—opening
              doors to internships, publications, and careers in science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/programs">
                  Explore Programs
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-y border-border bg-card/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="text-muted-foreground mt-2 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Launch Your Research Career
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-24 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Our Partners
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Collaborating with World-Class Institutions
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="partner-logo px-6 py-4 rounded-lg bg-secondary/50 border border-border"
              >
                <span className="font-display font-bold text-xl md:text-2xl text-foreground">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative hero-glow">
        <div className="section-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Start Your
            <span className="text-gradient block mt-2">Research Journey?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join hundreds of students who have transformed their academic
            careers through our programs. Applications are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
