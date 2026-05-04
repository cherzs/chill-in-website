import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { FeaturedEquipment } from "@/components/featured-equipment"
import { AdventureSection } from "@/components/adventure-section"
import { CollectionSection } from "@/components/collection-section"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { PricingCTA } from "@/components/pricing-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <IntroSection />
      <FeaturedEquipment />
      <AdventureSection />
      <CollectionSection />
      <HowItWorks />
      <Testimonials />
      <PricingCTA />
      <Footer />
    </main>
  )
}
