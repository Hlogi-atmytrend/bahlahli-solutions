import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden">
      {/* Orange CTA Banner */}
      <div className="bg-accent py-16 px-6 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-4xl text-white max-w-md leading-tight">
            Ready to transform your technology infrastructure?
          </h2>
          <a href="#contact">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-accent rounded-full px-8 py-6"
            >
              Contact Us
            </Button>
          </a>
        </div>
        {/* Decorative notch */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full" />
        </div>
      </div>

      {/* About Content */}
      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="max-w-lg">
              <p className="text-accent font-medium mb-4">Our Story</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
                Guiding your journey to technology excellence
              </h2>
              <p className="text-muted-foreground mb-8">
                Founded in 2020 in Mokopane, Limpopo, Bahlahli Business Solutions specializes in delivering innovative, scalable, and reliable technology services. By integrating advanced technology with sustainable practices, we help our clients improve efficiency, reduce costs, and drive long-term impact.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact">
                  <Button className="bg-accent text-white hover:bg-accent/90 rounded-full px-8 py-6">
                    Contact Us
                  </Button>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-primary">+27 82 586 5672</span>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Technology circuit board"
                    className="rounded-2xl w-full"
                  />
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-6 h-6 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="text-[8px] text-white/70 uppercase tracking-wider">Since 2020</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Solar energy panels"
                    className="rounded-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
