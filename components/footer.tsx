"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Facebook,
  Twitter,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  Clock,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const footerLinks = {
  services: [
    { label: "Educational Software", href: "#services" },
    { label: "Hardware Supply", href: "#services" },
    { label: "IT Infrastructure", href: "#services" },
    { label: "Solar Energy", href: "#services" },
    { label: "Assistive Technology", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#leadership" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

const serviceOptions = [
  "Educational Software Solutions",
  "Hardware Supply",
  "IT Infrastructure & Networking",
  "Solar Energy Solutions",
  "Assistive Technology",
  "General Inquiry",
];

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  return (
    <footer id="contact" className="relative">
      {/* Contact Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 animate-fade-up ${
              headerVisible ? "visible" : ""
            }`}
          >
            <p className="text-accent font-medium mb-2">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              Let&apos;s discuss your project
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your technology infrastructure? Contact us
              today and let our team of experts help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div
              ref={contactRef}
              className={`md:col-span-5 animate-fade-left ${
                contactVisible ? "visible" : ""
              }`}
            >
              <div className="bg-primary rounded-3xl p-8 md:p-10 text-white h-full hover-lift">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <p className="text-white/70 mb-8">
                  Reach out to us through any of the following channels.
                  We&apos;re here to help!
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Our Offices</p>
                      <p className="text-white/70 text-sm">
                        2536 Protea Mews, Noordwyk, Midrand, Johannesburg
                      </p>
                      <p className="text-white/70 text-sm mt-1">
                        358 Phomolong Street, Mosesetjane Zone 2, Mokopane,
                        Limpopo
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-white/70 text-sm">+27 82 586 5672</p>
                      <p className="text-white/70 text-sm">+27 83 983 7092</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href="mailto:jakes@bahlahlisolutions.co.za"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        jakes@bahlahlisolutions.co.za
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-white/70 text-sm">
                        Mon - Fri: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-white/70 text-sm">Sat - Sun: Closed</p>
                    </div>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="font-medium mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className={`md:col-span-7 animate-fade-right ${
                formVisible ? "visible" : ""
              }`}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover-glow">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Send us a message
                </h3>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                    Thank you for your message! We&apos;ll get back to you
                    shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                        placeholder="+27 12 345 6789"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Band */}
      <div className="grid md:grid-cols-2 h-64 md:h-80">
        <div className="relative overflow-hidden">
          <img
            src="images/working-it-team.jpg"
            alt="Office meeting"
            className="w-full h-full object-cover"
          />
          {/* Curved edge */}
          <div className="absolute top-0 right-0 w-16 h-full bg-secondary rounded-bl-[80px]" />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Technology circuit board"
            className="w-full h-full object-cover"
          />
          {/* Curved edge */}
          <div className="absolute top-0 left-0 w-16 h-full bg-secondary rounded-br-[80px]" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img
                  src="/images/bahlahli-logo.png"
                  alt="Bahlahli Business Solutions"
                  className="w-20 h-auto"
                />
              </Link>
              <div className="w-full h-px bg-white/30 mb-6" />
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Delivering innovative, scalable, and reliable technology
                services to meet the evolving needs of corporate organizations
                and government institutions across South Africa.
              </p>
              <p className="text-white/50 text-sm">
                © 2026 Bahlahli Business Solutions. All Rights Reserved. Powered
                by{" "}
                <a
                  href="https://www.mytrend.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  MyTrend Technologies
                </a>
              </p>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-white/70 text-sm">
                    <p className="mb-1">
                      2536 Protea Mews, Noordwyk, Midrand, Johannesburg
                    </p>
                    <p>
                      358 Phomolong Street, Mosesetjane Zone 2, Mokopane,
                      Limpopo, 0601
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div className="text-white/70 text-sm">
                    <p>+27 82 586 5672 / +27 83 983 7092</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a
                    href="mailto:jakes@bahlahlisolutions.co.za"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    jakes@bahlahlisolutions.co.za
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-accent shrink-0" />

                  <a
                    href="https://www.bahlahlisolutions.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    www.bahlahlisolutions.co.za
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-2 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
