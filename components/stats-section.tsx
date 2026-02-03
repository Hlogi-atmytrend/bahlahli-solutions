"use client";

import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/use-scroll-animation";

const stats = [
  {
    value: "5+",
    label: "Years of Excellence",
    description: "Delivering enterprise-level IT solutions since 2020",
    featured: true,
  },
  {
    value: "100+",
    label: "Projects Delivered",
    description:
      "Successful implementations for corporates and government institutions",
    featured: false,
  },
  {
    value: "100%",
    label: "Client Commitment",
    description:
      "Dedicated to timely delivery and long-term support for every client",
    featured: false,
  },
];

export function StatsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const {
    ref: statsRef,
    isVisible: statsVisible,
    getStaggerDelay,
  } = useStaggeredAnimation(stats.length);

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 max-w-3xl mx-auto animate-fade-up ${
            headerVisible ? "visible" : ""
          }`}
        >
          <p className="font-serif text-2xl md:text-3xl text-primary leading-relaxed">
            We combine technical excellence, customer-focused solutions, and
            sustainable practices to deliver innovation that fuels growth,{" "}
            inclusivity, and long-term success.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl hover-lift animate-fade-up ${
                statsVisible ? "visible" : ""
              } ${
                stat.featured
                  ? "bg-primary text-white"
                  : "bg-white border border-border hover-glow"
              }`}
              style={getStaggerDelay(index)}
            >
              <div
                className={`text-5xl md:text-6xl font-light mb-4 ${
                  stat.featured ? "text-accent" : "text-accent"
                }`}
              >
                {stat.value}
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  stat.featured ? "text-white" : "text-primary"
                }`}
              >
                {stat.label}
              </h3>
              <p
                className={`text-sm ${
                  stat.featured ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
