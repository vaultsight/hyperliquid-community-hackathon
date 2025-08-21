'use client'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent } from '@/components/ui/card'
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const mockData = [
  { month: "Jan", vault: 1000, btc: 800, eth: 600 },
  { month: "Feb", vault: 1150, btc: 850, eth: 700 },
  { month: "Mar", vault: 1300, btc: 950, eth: 850 },
  { month: "Apr", vault: 1250, btc: 1000, eth: 900 },
  { month: "May", vault: 1450, btc: 1100, eth: 1000 },
  { month: "Jun", vault: 1600, btc: 1200, eth: 1150 },
]

const chartConfig = {
  vault: {
    label: "Vault Performance",
    color: "hsl(var(--chart-1))",
  },
  btc: {
    label: "Bitcoin (BTC)",
    color: "hsl(var(--chart-2))",
  },
  eth: {
    label: "Ethereum (ETH)",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function SolutionSection() {
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
                Benchmark Performance Comparison
              </h3>
              <div className="h-64 w-full">
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={mockData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} stroke="#000000" strokeOpacity={0.2} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                      stroke="#000000"
                    />
                    <YAxis
                      stroke="#000000"
                      axisLine={false}
                      tickLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <ChartTooltip
                      cursor={true}
                      content={<ChartTooltipContent indicator="dot" labelClassName="text-foreground" />}
                    />
                    <Area
                      dataKey="vault"
                      type="natural"
                      fill="var(--color-vault)"
                      fillOpacity={0.4}
                      stroke="var(--color-vault)"
                      stackId="a"
                    />
                    <Area
                      dataKey="btc"
                      type="natural"
                      fill="var(--color-btc)"
                      fillOpacity={0.3}
                      stroke="var(--color-btc)"
                      strokeDasharray="4 4"
                      stackId="b"
                    />
                    <Area
                      dataKey="eth"
                      type="natural"
                      fill="var(--color-eth)"
                      fillOpacity={0.2}
                      stroke="var(--color-eth)"
                      strokeDasharray="8 8"
                      stackId="c"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-card-foreground/70">Vault vs. Bitcoin & Ethereum benchmarks</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}