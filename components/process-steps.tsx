import { Shield, Lightbulb, Award, CheckCircle, TrendingUp } from "lucide-react"

const coreValues = [
  { title: "Integrity", description: "We act with transparency and accountability", icon: Shield },
  { title: "Innovation", description: "We leverage technology to create future-ready solutions", icon: Lightbulb },
  { title: "Excellence", description: "We consistently deliver high-quality results", icon: Award },
  { title: "Reliability", description: "We ensure dependable solutions for mission-critical operations", icon: CheckCircle },
  { title: "Impact", description: "We prioritize solutions that drive measurable value", icon: TrendingUp },
]

export function ProcessSteps() {
  return (
    <section id="overview" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-accent mx-auto mb-8" />
          <p className="text-accent font-medium mb-4">Company Overview</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
            Your success depends
            <br />
            on the right technology partner
          </h2>
          <p className="text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Bahlahli Business Solutions is a professional IT and technology solutions provider founded in 2020 in Mokopane, Limpopo, South Africa. We specialize in delivering innovative, scalable, and reliable technology services to meet the evolving needs of corporate organizations and government institutions. <br /><br />Our expertise spans educational software, IT infrastructure, hardware supply, solar energy solutions, and assistive technology. By integrating advanced technology with sustainable practices, we help our clients improve efficiency, reduce costs, and drive long-term impact.
          </p>
        </div>

        {/* Core Values */}
        <div className="pt-12 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-10">
            
            <p className="text-primary font-medium">Our Core Values</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Cards - Hidden */}
        {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="group relative rounded-2xl overflow-hidden bg-primary p-8 text-white">
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-accent">Our Mission</span>
            </h3>
            <p className="text-white/90 leading-relaxed">
              To deliver innovative and sustainable IT solutions that empower corporates and governments to achieve efficiency, productivity, and inclusive growth.
            </p>
          </div>
          <div className="group relative rounded-2xl overflow-hidden bg-accent p-8 text-white">
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="text-white">Our Vision</span>
            </h3>
            <p className="text-white/90 leading-relaxed">
              To be the preferred technology partner for corporates and government institutions across South Africa, recognized for innovation, excellence, and reliability.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
