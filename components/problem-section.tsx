import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, HelpCircle, Target } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: HelpCircle,
      title: "Skill vs. Luck",
      description: "Is high APR a result of consistent skill or a single lucky, high-leverage trade?",
    },
    {
      icon: AlertTriangle,
      title: "Real Risk",
      description: "What is the leader's actual risk tolerance? What is their maximum drawdown?",
    },
    {
      icon: Target,
      title: "Benchmark Comparison",
      description: "How does their performance compare to a simple benchmark, like holding Bitcoin?",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-[#0A2F2A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-foreground mb-6">
            The Due Diligence Dilemma
          </h2>
          <p className="text-xl font-open-sans text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Depositors are effectively 'hiring' a money manager, yet they lack the tools to properly vet them. Critical
            questions remain unanswered in the current ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <problem.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-montserrat text-card-foreground mb-4">{problem.title}</h3>
                <p className="font-open-sans text-card-foreground/80 leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
