import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeatureMarquee } from "@/components/feature-marquee"
import { ProcessSteps } from "@/components/process-steps"
import { StatsSection } from "@/components/stats-section"
import { ExpertCta } from "@/components/expert-cta"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeatureMarquee />
      <ProcessSteps />
      <StatsSection />
      <ExpertCta />
      <ServicesSection />
      <AboutSection />
      <VideoSection />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
