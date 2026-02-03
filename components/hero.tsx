"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1.5s] ease-out ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
        style={{
          backgroundImage: `url('images/happy-it-team.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <p
            className={`text-white/80 text-sm mb-4 tracking-wide uppercase transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            The best is here.
          </p>
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Delivering innovative IT solutions for your success.
          </h1>
          <p
            className={`text-white/80 text-lg mb-8 max-w-xl transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Empowering corporates and governments with scalable technology
            services across South Africa since 2020.
          </p>
          <a
            href="#contact"
            className={`inline-block transition-all duration-700 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-white rounded-full px-8 py-6 text-base hover:scale-105 transition-transform"
            >
              Contact us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
