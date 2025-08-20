import { Card, CardContent } from "@/components/ui/card"

export function TechStackSection() {
  const techStack = [
    { name: "Python", description: "High-performance backend processing" },
    { name: "FastAPI", description: "Modern, fast web framework" },
    { name: "PostgreSQL", description: "Robust data integrity" },
    { name: "Redis", description: "Lightning-fast caching" },
    { name: "Next.js", description: "Responsive frontend framework" },
    { name: "React", description: "Dynamic user interfaces" },
  ]

  return (
    <section className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-foreground mb-6">
            Built on a Modern, Scalable Stack
          </h2>
          <p className="text-xl font-open-sans text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Our architecture leverages cutting-edge technologies to deliver institutional-grade performance and
            reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techStack.map((tech, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold font-montserrat text-card-foreground mb-2">{tech.name}</h3>
                <p className="font-open-sans text-card-foreground/70 text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold font-montserrat text-card-foreground mb-6">Architecture Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-card-foreground mb-3">Data Ingestion</h4>
                <p className="font-open-sans text-card-foreground/80 leading-relaxed">
                  Leverages Allium's indexed Hyperliquid database for complete, queryable SQL access to historical trade
                  data, bypassing native API limitations.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-card-foreground mb-3">Backend Engine</h4>
                <p className="font-open-sans text-card-foreground/80 leading-relaxed">
                  A high-performance Python FastAPI backend with Pandas and NumPy for complex statistical calculations
                  and real-time analytics.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-card-foreground mb-3">Database & Caching</h4>
                <p className="font-open-sans text-card-foreground/80 leading-relaxed">
                  Robust PostgreSQL for data integrity, supercharged with a Redis caching layer for a lightning-fast
                  user experience.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold font-montserrat text-card-foreground mb-3">
                  Frontend & Visualization
                </h4>
                <p className="font-open-sans text-card-foreground/80 leading-relaxed">
                  A responsive and dynamic UI built with Next.js, React, and Recharts for clear, interactive data
                  visualization.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
