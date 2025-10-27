import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DienstenPage() {
  const services = [
    {
      icon: Droplet,
      title: "Poedercoaten",
      description:
        "Hoogwaardige poedercoating in elke gewenste kleur voor een duurzame en stijlvolle afwerking van uw velgen.",
      features: [
        "Keuze uit honderden RAL-kleuren",
        "Mat, glanzend of metallic finish",
        "Duurzame bescherming tegen corrosie",
        "Milieuvriendelijk proces",
        "Snelle levertijd",
      ],
    },
    {
      icon: Cog,
      title: "CNC Afdraaien",
      description:
        "Precisie CNC bewerkingen voor perfecte velgen. Wij draaien uw velgen af met de nieuwste CNC-technologie voor een fabrieksmatige afwerking.",
      features: [
        "Hoogwaardige CNC-machines",
        "Precisie tot op de micron",
        "Diamant-afwerking mogelijk",
        "Geschikt voor alle velgtypen",
        "Professionele nabehandeling",
      ],
    },
    {
      icon: Target,
      title: "Richten van Velgen",
      description:
        "Professioneel richten van beschadigde velgen. Wij beschikken over moderne richtapparatuur om uw velgen weer perfect rond te maken.",
      features: [
        "Radiaal en axiaal richten",
        "Geschikt voor stalen en lichtmetalen velgen",
        "Controle op balansmachine",
        "Geen garantieverlies",
        "Ook voor zwaar beschadigde velgen",
      ],
    },
    {
      icon: Wrench,
      title: "Ontlakken & Stralen",
      description:
        "Grondig ontlakken en stralen voor een perfecte basis. Wij verwijderen oude lak en corrosie volledig voor een optimaal resultaat.",
      features: [
        "Chemisch ontlakken",
        "Zandstralen of glasparelstralen",
        "Verwijdering van alle oude coating",
        "Perfecte hechting voor nieuwe coating",
        "Milieuvriendelijk proces",
      ],
    },
    {
      icon: Hammer,
      title: "Velgen Reparatie",
      description:
        "Vakkundige reparatie van alle soorten velgschade. Van kleine krassen tot zware beschadigingen, wij maken uw velgen weer als nieuw.",
      features: [
        "Reparatie van krassen en deuken",
        "Lassen van scheuren",
        "Herstel van randschade",
        "Verwijdering van corrosie",
        "Volledige restauratie mogelijk",
      ],
    },
    {
      icon: ShoppingCart,
      title: "In- & Verkoop Velgen",
      description:
        "Ruime voorraad velgen in diverse maten en stijlen. Wij kopen ook uw gebruikte velgen in voor een eerlijke prijs.",
      features: [
        "Grote voorraad occasions",
        "Diverse merken en maten",
        "Inkoop van gebruikte velgen",
        "Eerlijke prijzen",
        "Bekijk onze voorraad op Marktplaats",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/high-end-luxury-car-wheel-close-up-dark-automotive.jpg"
            alt="Diensten"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Onze Diensten</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Bij SmartWheels bieden wij een compleet pakket aan velgenservices. Van reparatie en poedercoaten tot CNC
            afdraaien en in- en verkoop. Alles onder één dak met jarenlange ervaring en vakmanschap.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    <div className="md:col-span-1">
                      <service.icon className="w-16 h-16 text-orange-600 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4">Wat wij bieden:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.title === "In- & Verkoop Velgen" && (
                        <Button asChild className="mt-6 bg-orange-600 hover:bg-orange-700 text-white">
                          <a
                            href="https://www.marktplaats.nl/u/smartwheels/47376108/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Bekijk Voorraad op Marktplaats
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Interesse in één van onze diensten?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Vraag vandaag nog een vrijblijvende offerte aan en ontdek wat wij voor u kunnen betekenen.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8">
            <Link href="/offerte">Vraag Offerte Aan</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SmartWheels</h3>
              <p className="text-zinc-400 leading-relaxed">
                Uw betrouwbare partner voor alle velgenservice. Met jarenlange ervaring en vakmanschap zorgen wij ervoor
                dat uw velgen er weer als nieuw uitzien.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sitemap</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/diensten" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="/projecten" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Projecten
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-orange-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.marktplaats.nl/u/smartwheels/47376108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-orange-600 transition-colors"
                  >
                    Marktplaats
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contactgegevens</h4>
              <div className="space-y-2 text-zinc-400">
                <p>
                  <span className="font-semibold text-white">Adres:</span>
                  <br />
                  Expeditieweg 8F
                  <br />
                  6673DV Andelst
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a href="mailto:smartwheels1@outlook.com" className="hover:text-orange-600 transition-colors">
                    smartwheels1@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
            <p>&copy; {new Date().getFullYear()} SmartWheels. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
