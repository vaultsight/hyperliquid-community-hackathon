import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/vaultsight-logo.svg"
            alt="VaultSight Logo"
            width={200}
            height={80}
            className="h-20 w-auto"
          />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold font-montserrat text-foreground mb-6 leading-tight">
          The Definitive Due Diligence Platform for Hyperliquid Vaults
        </h2>

        {/* Live Data Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Now tracking over 1,284 vaults live</span>
          </div>
        </div>

        <p className="text-lg md:text-xl font-open-sans text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transforming raw on-chain data into actionable intelligence. Empowering depositors to make smarter, safer
          capital allocation decisions.
        </p>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg font-open-sans group"
        >
          View Live Demo
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}
