"use client";

import { Star, Quote } from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/use-scroll-animation";

const advantages = [
  "Proven capability in delivering enterprise-level IT and infrastructure projects",
  "Strong reputation for professionalism and reliability in corporate and public sector",
  "Expertise in integrating IT with renewable energy and assistive technology",
  "Commitment to timely delivery and long-term support",
  "South African company with local insight and global technology standards",
  "Customer-focused solutions tailored to your unique needs",
];

export function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const {
    ref: cardsRef,
    isVisible: cardsVisible,
    getStaggerDelay,
  } = useStaggeredAnimation(2);
  const {
    ref: advantagesRef,
    isVisible: advantagesVisible,
    getStaggerDelay: getAdvantageDelay,
  } = useStaggeredAnimation(advantages.length);

  return (
    <section id="why-us" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 animate-fade-left ${
            headerVisible ? "visible" : ""
          }`}
        >
          <p className="text-accent font-medium mb-2">Why Choose Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            The preferred technology
            <br />
            partner
          </h2>
        </div>

        {/* Mission & Vision */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className={`bg-white rounded-3xl p-8 hover-lift hover-glow animate-fade-up ${
              cardsVisible ? "visible" : ""
            }`}
            style={getStaggerDelay(0)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-lg">
                Our Mission
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              To deliver innovative and sustainable IT solutions that empower
              corporates and governments to achieve efficiency, productivity,
              and inclusive growth.
            </p>
          </div>
          <div
            className={`bg-primary rounded-3xl p-8 hover-lift animate-fade-up ${
              cardsVisible ? "visible" : ""
            }`}
            style={getStaggerDelay(1)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-white text-lg">Our Vision</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              To be the preferred technology partner for corporates and
              government institutions across South Africa, recognized for
              innovation, excellence, and reliability.
            </p>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div
          ref={advantagesRef}
          className={`bg-white rounded-3xl p-8 md:p-12 hover-glow animate-fade-up ${
            advantagesVisible ? "visible" : ""
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-primary mb-8">
            Our Competitive Advantage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 group animate-fade-up ${
                  advantagesVisible ? "visible" : ""
                }`}
                style={getAdvantageDelay(index)}
              >
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <Star className="w-3 h-3 text-accent" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
