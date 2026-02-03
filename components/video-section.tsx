"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="relative">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 96"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96V0C240 0 240 48 480 48C720 48 720 0 960 0C1200 0 1200 48 1440 48V96H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Video Container */}
      <div className="relative h-[500px] md:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="IT infrastructure and networking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

      </div>
    </section>
  )
}
