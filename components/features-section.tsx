import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Shield, Dna } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Comprehensive Leaderboard",
      description:
        "Discover and screen vaults by TVL, age, PnL, and risk-adjusted return. Compare performance across the entire ecosystem.",
    },
    {
      icon: Shield,
      title: "Institutional-Grade Risk Metrics",
      description:
        "Analyze Maximum Drawdown, Sharpe Ratio, and Volatility to quantify a vault's true risk profile with precision.",
    },
    {
      icon: Dna,
      title: "Strategy DNA Analysis",
      description:
        "Deconstruct a leader's trading style, from frequency and holding period to asset concentration and leverage patterns.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-foreground mb-6">Core Features</h2>
          <p className="text-xl font-open-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools designed for sophisticated investors who demand transparency and precision in their due
            diligence process.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <feature.icon className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-montserrat text-card-foreground mb-4">{feature.title}</h3>
                <p className="font-open-sans text-card-foreground/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
