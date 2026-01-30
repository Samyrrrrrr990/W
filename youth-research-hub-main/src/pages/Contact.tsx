import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@youthcenterforresearch.org",
    link: "mailto:info@youthcenterforresearch.org",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(416) 555-0123",
    link: "tel:+14165550123",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Aurora, Ontario, Canada",
    link: null,
  },
];

const inquiryTypes = [
  "Student Application",
  "Partnership Inquiry",
  "Mentorship Opportunity",
  "General Question",
  "Media/Press",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll be in touch soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 hero-glow">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
              Let's Start a
              <span className="text-gradient block">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-delay-2">
              Whether you're a student, educator, or potential partner, we'd
              love to hear from you. Reach out and let's explore how we can work
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center p-12 rounded-2xl bg-card border border-border text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. Our team will review your
                      inquiry and get back to you within 2-3 business days.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                    Send a Message
                  </h2>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your interest in the Youth Center for Research..."
                        required
                        rows={6}
                        className="bg-secondary/50 resize-none"
                      />
                    </div>

                    <Button variant="hero" size="lg" type="submit" className="w-full">
                      Send Message
                      <Send className="ml-2" size={18} />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 md:py-24 bg-card/50 border-t border-border">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Common questions about our programs and application process.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {[
              {
                q: "Do I need prior research experience?",
                a: "No! Our programs are designed to help students gain their first research experience with proper mentorship.",
              },
              {
                q: "Is there a cost to participate?",
                a: "We are a non-profit and offer most programs free of charge. Some advanced programs may have minimal fees, with financial aid available.",
              },
              {
                q: "How long are the programs?",
                a: "Programs range from 3 months to 12 months depending on the track. Most students participate for one academic year.",
              },
              {
                q: "Can international students apply?",
                a: "We primarily serve students in the Greater Toronto Area, but may consider exceptional candidates from elsewhere.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
