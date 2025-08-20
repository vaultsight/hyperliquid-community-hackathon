import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-foreground mb-6">Get in Touch</h2>
          <p className="text-xl font-open-sans text-muted-foreground leading-relaxed">
            Ready to transform your vault analysis? Connect with us to learn more about VaultSight.
          </p>
        </div>

        <Card className="bg-card border-border max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl font-black font-montserrat text-primary-foreground">VS</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold font-montserrat text-card-foreground mb-6">Fodé Diop</h3>

            <div className="space-y-4">
              <a
                href="mailto:fode@alchemexlabs.com"
                className="flex items-center justify-center text-card-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-open-sans">fode@alchemexlabs.com</span>
              </a>

              <a
                href="https://vaultsight.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-card-foreground hover:text-primary transition-colors group"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-open-sans">vaultsight.io</span>
              </a>

              <a
                href="https://x.com/vaultsight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-card-foreground hover:text-primary transition-colors group"
              >
                <Twitter className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-open-sans">@vaultsight</span>
              </a>
            </div>

            {/* Hackathon Achievement */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm font-open-sans text-card-foreground/70 flex items-center justify-center">
                <span className="mr-2">🏆</span>
                From idea to launch during the Hyperliquid Community Hackathon, August 2025.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
