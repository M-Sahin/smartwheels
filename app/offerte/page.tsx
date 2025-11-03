import { Metadata } from 'next'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { OfferteClient } from "./offerte-client"

export const metadata: Metadata = {
  title: "Offerte Aanvragen - SmartWheels",
  description: "Vraag eenvoudig een vrijblijvende offerte aan voor velgenreparatie, poedercoaten of CNC afdraaien. Snel antwoord gegarandeerd!",
  keywords: ["offerte", "prijsopgave", "vrijblijvend", "velgenservice", "aanvraag"],
  openGraph: {
    title: "Offerte Aanvragen - SmartWheels",
    description: "Vraag direct een vrijblijvende offerte aan voor uw velgen.",
  },
}

export default function OffertePage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Vraag uw vrijblijvende offerte aan</h1>
            <p className="text-zinc-400 text-lg">
              Vul de onderstaande gegevens in en upload foto's van uw velgen voor een nauwkeurige prijsopgave.
            </p>
          </div>

          <OfferteClient />
        </div>
      </div>
    </div>
  )
}