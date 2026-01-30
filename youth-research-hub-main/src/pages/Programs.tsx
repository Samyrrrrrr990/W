import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FlaskConical,
  BookOpen,
  Building2,
  Stethoscope,
  Calendar,
  CheckCircle,
} from "lucide-react";

const programs = [
  {
    icon: FlaskConical,
    title: "Research Lab Placements",
    description:
      "Work alongside researchers at university labs, gaining hands-on experience with cutting-edge equipment and methodologies.",
    highlights: [
      "Access to university research facilities",
      "One-on-one mentorship",
      "Real research projects",
      "Letters of recommendation",
    ],
    duration: "3-6 months",
  },
  {
    icon: BookOpen,
    title: "Academic Publishing Program",
    description:
      "Learn the art and science of academic writing, from hypothesis formation to peer-reviewed publication.",
    highlights: [
      "Writing workshops",
      "Peer review training",
      "Journal submission guidance",
      "Citation and ethics training",
    ],
    duration: "4-8 months",
  },
  {
    icon: Stethoscope,
    title: "Hospital Research Internships",
    description:
      "Experience clinical research environments and contribute to studies that impact patient care.",
    highlights: [
      "Clinical exposure",
      "IRB/Ethics training",
      "Patient interaction (supervised)",
      "Medical research methodologies",
    ],
    duration: "6-12 months",
  },
  {
    icon: Building2,
    title: "Biotech Industry Placements",
    description:
      "Bridge the gap between academia and industry with placements at leading biotech companies.",
    highlights: [
      "Industry experience",
      "Networking opportunities",
      "Career pathway guidance",
      "Professional skill development",
    ],
    duration: "3-6 months",
  },
];

const timeline = [
  { step: 1, title: "Apply Online", description: "Submit your application with transcripts and statement of interest" },
  { step: 2, title: "Interview", description: "Meet with our team to discuss your goals and interests" },
  { step: 3, title: "Matching", description: "We pair you with mentors and opportunities aligned with your interests" },
  { step: 4, title: "Onboarding", description: "Begin your research journey with orientation and training" },
];

const Programs = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 hero-glow">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Our Programs
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
              Pathways to
              <span className="text-gradient block">Research Success</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-delay-2">
              Discover programs designed to give you real-world research
              experience, from lab placements to publication support.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Calendar size={14} />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <CheckCircle
                        size={16}
                        className="text-primary shrink-0"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 md:py-28 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Application Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-4">Who Can Apply</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Eligibility Requirements
              </h2>
              <ul className="space-y-4">
                {[
                  "High school students (Grade 10-12) or undergraduate students",
                  "Minimum GPA of 3.0 or equivalent",
                  "Strong interest in STEM fields",
                  "Commitment to program duration",
                  "Ability to work independently and in teams",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <p className="text-primary font-medium mb-2">
                Applications Open
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Fall 2026 Cohort
              </h3>
              <p className="text-muted-foreground mb-6">
                Limited spots available. Apply early to secure your place.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Application
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
