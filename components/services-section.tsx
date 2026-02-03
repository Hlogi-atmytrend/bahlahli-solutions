"use client"

const services = [
  {
    number: "01",
    title: "Educational Software Solutions",
    description: "Developing and implementing e-learning platforms, school learner management systems, and digital education tools.",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "02",
    title: "Hardware Supply",
    description: "Delivering high-quality laptops, desktops, servers, and accessories at scale.",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "03",
    title: "IT Infrastructure & Networking",
    description: "Designing, installing, and maintaining robust network systems to ensure seamless connectivity.",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "04",
    title: "Solar Energy Solutions",
    description: "Providing renewable energy and backup power systems for sustainable operations.",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    number: "05",
    title: "Assistive Technology Reselling",
    description: "Supplying specialized devices that ensure accessibility and inclusion in the workplace and public sector.",
    hasImage: true,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">Our Products & Services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Specialized solutions for corporates & government
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-5 border-t border-l border-border">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-r border-b border-border p-6 flex flex-col min-h-[320px] group hover:bg-secondary/50 transition-colors"
            >
              <span className="text-accent text-sm font-medium mb-auto">
                {service.number}
              </span>

              {service.hasImage && service.image && (
                <div className="my-4">
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
