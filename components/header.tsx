"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home", sectionId: null },
  { href: "#overview", label: "About", sectionId: "overview" },
  { href: "#services", label: "Services", sectionId: "services" },
  { href: "#about", label: "Our Story", sectionId: "about" },
  { href: "#leadership", label: "Leadership", sectionId: "leadership" },
  { href: "#why-us", label: "Why Us", sectionId: "why-us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => link.sectionId)
      .map((link) => link.sectionId as string);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also observe for when user scrolls to top (Home)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (sectionId: string | null) => {
    if (sectionId === null) {
      return activeSection === null;
    }
    return activeSection === sectionId;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/bahlahli-logo.png"
            alt="Bahlahli Business Solutions"
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-white hover:text-white/80 transition-colors font-medium py-1 ${
                isActive(link.sectionId)
                  ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6 font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-white py-2 font-medium border-l-2 pl-3 transition-colors ${
                  isActive(link.sectionId)
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full w-full mt-4 font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
