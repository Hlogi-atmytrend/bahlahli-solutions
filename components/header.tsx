"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Announcement Bar *
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>
          Empowering corporates and government institutions across South Africa.{" "}
          <Link href="#contact" className="underline hover:no-underline">
            Get in touch today
          </Link>
        </p>
      </div>
      /}

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/images/bahlahli-logo.png" 
            alt="Bahlahli Business Solutions" 
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="#overview" className="text-white hover:text-white/80 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-white hover:text-white/80 transition-colors">
            Services
          </Link>
          <Link href="#leadership" className="text-white hover:text-white/80 transition-colors">
            Leadership
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#contact">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6">
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
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-white py-2">Home</Link>
            <Link href="#overview" className="text-white py-2">About</Link>
            <Link href="#services" className="text-white py-2">Services</Link>
            <Link href="#leadership" className="text-white py-2">Leadership</Link>
            <Link href="#contact">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full w-full mt-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
