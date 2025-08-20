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
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 120 },
  { month: 'Mar', value: 110 },
  { month: 'Apr', value: 140 },
  { month: 'May', value: 160 },
  { month: 'Jun', value: 180 },
]

const chartConfig = {
  value: {
    label: 'Value',
    color: 'hsl(var(--primary))',
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
                Vault Analytics Dashboard
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
                    <CartesianGrid vertical={false} stroke="#000000" strokeOpacity={0.1} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                      stroke="#000000"
                    />
                    <YAxis stroke="#000000" axisLine={false} tickLine={false} tickMargin={8} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="value"
                      type="natural"
                      fill="url(#chartGradient)"
                      stroke="var(--color-primary)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
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
