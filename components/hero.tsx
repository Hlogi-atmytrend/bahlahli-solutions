"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/happy-it-team.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-white/80 text-sm mb-4 tracking-wide uppercase">
            {" "}
            The best is here.
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Delivering innovative IT solutions for your success.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            Empowering corporates and governments with scalable technology
            services across South Africa since 2020.
          </p>
          <a href="#contact">
            <Button
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-white rounded-full px-8 py-6 text-base"
            >
              Contact us
            </Button>
          </a>
        </div>

        {/* Navigation Arrows */}
      </div>
    </section>
  );
}
