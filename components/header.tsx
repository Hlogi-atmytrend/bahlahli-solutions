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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsLoaded(true);

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

    // Also observe for when user scrolls to top (Home) and track scroll state
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(null);
      }
      setIsScrolled(window.scrollY > 50);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-xl py-0"
          : "bg-primary shadow-lg"
      }`}
    >
      {/* Main Navigation */}
      <nav
        className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <img
            src="/images/bahlahli-logo.png"
            alt="Bahlahli Business Solutions"
            className={`w-auto transition-all duration-300 ${
              isScrolled ? "h-16" : "h-24"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-white hover:text-white/80 transition-all duration-300 font-medium py-1 ${
                isActive(link.sectionId)
                  ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full after:animate-[scaleX_0.3s_ease-out]"
                  : ""
              } ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`hidden md:block transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link href="#contact">
            <Button className="bg-white text-primary hover:bg-white/90 hover:scale-105 rounded-full px-6 font-semibold transition-transform">
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
      <div
        className={`md:hidden bg-primary/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-white py-2 font-medium border-l-2 pl-3 transition-all duration-300 ${
                isActive(link.sectionId)
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              } ${
                mobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`transition-all duration-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full w-full mt-4 font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
