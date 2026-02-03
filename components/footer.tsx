'use client';

import Link from "next/link"
import { Linkedin, Facebook, Twitter, ArrowUp, MapPin, Phone, Mail, Globe } from "lucide-react"

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
    { label: "Our Team", href: "#team" },
    { label: "Core Values", href: "#values" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="relative">
      {/* Image Band */}
      <div className="grid md:grid-cols-2 h-64 md:h-80">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Office meeting"
            className="w-full h-full object-cover"
          />
          {/* Curved edge */}
          <div className="absolute top-0 right-0 w-16 h-full bg-background rounded-bl-[80px]" />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Technology circuit board"
            className="w-full h-full object-cover"
          />
          {/* Curved edge */}
          <div className="absolute top-0 left-0 w-16 h-full bg-background rounded-br-[80px]" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="9" height="9" rx="2" fill="#e86a33" />
                  <rect x="13" y="2" width="9" height="9" rx="2" fill="#e86a33" opacity="0.7" />
                  <rect x="2" y="13" width="9" height="9" rx="2" fill="#e86a33" opacity="0.7" />
                  <rect x="13" y="13" width="9" height="9" rx="2" fill="#e86a33" />
                </svg>
                <span className="text-xl font-semibold">Bahlahli</span>
              </Link>
              <div className="w-12 h-px bg-white/30 mb-6" />
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Delivering innovative, scalable, and reliable technology services to meet the evolving needs of corporate organizations and government institutions across South Africa.
              </p>
              <p className="text-white/50 text-sm">
                © 2025 Bahlahli Business Solutions. All Rights Reserved.
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
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-white/70 text-sm">
                    <p className="mb-1">2536 Protea Mews, Noordwyk, Midrand, Johannesburg</p>
                    <p>358 Phomolong Street, Mosesetjane Zone 2, Mokopane, Limpopo, 0601</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="text-white/70 text-sm">
                    <p>+27 82 586 5672 / +27 83 983 7092</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:jakes@bahlahlisolutions.co.za" className="text-white/70 hover:text-white text-sm transition-colors">
                    jakes@bahlahlisolutions.co.za
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="https://www.bahlahlisolutions.co.za" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">
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
  )
}
