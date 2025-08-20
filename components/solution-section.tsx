import { Card, CardContent } from "@/components/ui/card"

const mockData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 110 },
  { month: "Apr", value: 140 },
  { month: "May", value: 160 },
  { month: "Jun", value: 180 },
]

export function SolutionSection() {
  const maxValue = Math.max(...mockData.map(d => d.value))
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0A2F2A] to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-montserrat text-foreground mb-6">
              Actionable Intelligence for Confident Investing
            </h2>
            <p className="text-xl font-open-sans text-muted-foreground mb-8 leading-relaxed">
              VaultSight provides a comprehensive suite of performance and risk metrics, enabling deep, data-driven due
              diligence. Transform uncertainty into confidence with institutional-grade analytics.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-open-sans text-foreground">Real-time performance tracking</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-open-sans text-foreground">Risk-adjusted return analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="font-open-sans text-foreground">Strategy DNA profiling</span>
              </div>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-montserrat text-card-foreground mb-6">
                Vault Analytics Dashboard
              </h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {mockData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-primary rounded-t-sm transition-all duration-500 hover:bg-primary/80"
                      style={{ 
                        height: `${(data.value / maxValue) * 200}px`,
                        minHeight: '8px'
                      }}
                    ></div>
                    <span className="text-xs font-medium text-card-foreground mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-card-foreground/70">Performance over time</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
