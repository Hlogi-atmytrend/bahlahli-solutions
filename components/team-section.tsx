"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TeamSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section id="leadership" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Section Header */}
          <div
            ref={textRef}
            className={`md:col-span-5 animate-fade-left ${
              textVisible ? "visible" : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="font-medium text-accent">Our Leadership</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
              Driven by vision, powered by expertise
            </h2>
            <p className="text-muted-foreground mb-8">
              Founded by Jacob Tlhatlha, a visionary entrepreneur with a passion
              for technology and sustainable solutions, Bahlahli Business
              Solutions is driven by a mission to empower businesses and
              communities through innovation.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of IT specialists, project managers, and consultants
              brings extensive experience in delivering high-impact technology
              projects for corporates and government institutions. Together, we
              foster a culture of innovation, reliability, and customer-focused
              service.
            </p>
          </div>

          {/* Founder Card */}
          <div
            ref={cardRef}
            className={`md:col-span-7 animate-fade-right ${
              cardVisible ? "visible" : ""
            }`}
          >
            <div className="relative group">
              <div className="bg-secondary rounded-3xl p-8 md:p-12 hover-lift">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-primary/10 img-zoom">
                    <img
                      src="images/founder.png"
                      alt="Jacob Tlhatlha - Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      Jacob Tlhatlha
                    </h3>
                    <p className="text-accent font-medium mb-6">
                      Founder & CEO
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white rounded-full px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white transition-colors cursor-default">
                        Technology Leader
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white transition-colors cursor-default">
                        Innovation Driver
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10 transition-all duration-500 ${
                  cardVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              />
              <div
                className={`absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10 transition-all duration-500 ${
                  cardVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
