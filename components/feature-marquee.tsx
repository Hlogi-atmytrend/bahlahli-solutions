"use client"

import { CheckCircle, Shield, Zap, Sun, Monitor, Accessibility } from "lucide-react"

const features = [
  { icon: CheckCircle, text: "Integrity & Transparency" },
  { icon: Zap, text: "Innovation-Driven" },
  { icon: Shield, text: "Mission-Critical Reliability" },
  { icon: Monitor, text: "IT Infrastructure Experts" },
  { icon: Sun, text: "Sustainable Energy Solutions" },
  { icon: Accessibility, text: "Inclusive Technology" },
]

export function FeatureMarquee() {
  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...features, ...features].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <feature.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
