import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Award, Users, Wrench, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Over SmartWheels - Uw Partner in Velgenservice",
  description: "Leer over SmartWheels: 15+ jaar ervaring, vakmanschap, moderne apparatuur en passie voor velgen. Ontdek ons verhaal!",
  keywords: ["over ons", "SmartWheels", "velgenspecialist", "ervaring", "vakmanschap"],
  openGraph: {
    title: "Over SmartWheels - Uw Partner in Velgenservice",
    description: "Specialist in velgenservice met passie voor perfectie en vakmanschap.",
  },
}

export default function OverOnsPage() {
  const values = [
    {
      icon: Award,
      title: "Vakmanschap",
      description: "Jarenlange ervaring en continue ontwikkeling zorgen voor het hoogste kwaliteitsniveau.",
    },
    {
      icon: Users,
      title: "Persoonlijke Service",
      description: "Elk project krijgt onze volledige aandacht. Uw tevredenheid staat bij ons centraal.",
    },
    {
      icon: Wrench,
      title: "Moderne Apparatuur",
      description: "We investeren continu in de nieuwste technologie voor het beste resultaat.",
    },
    {
      icon: Heart,
      title: "Passie voor Velgen",
      description: "Onze liefde voor auto's en velgen is te zien in elk project dat we uitvoeren.",
    },
  ]

  const whyChooseUs = [
    {
      title: "Alles onder één dak",
      description: "Van reparatie tot poedercoaten en CNC afdraaien. U hoeft niet naar meerdere bedrijven, wij regelen alles voor u.",
    },
    {
      title: "Eerlijke prijzen",
      description: "Transparante prijzen zonder verborgen kosten. U weet vooraf precies waar u aan toe bent.",
    },
    {
      title: "Snelle levertijd",
      description: "Wij begrijpen dat u snel weer de weg op wilt. Daarom werken we efficiënt zonder in te leveren op kwaliteit.",
    },
    {
      title: "Persoonlijk advies",
      description: "Niet zeker welke service u nodig heeft? Wij denken graag met u mee en adviseren u vrijblijvend.",
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
            alt="Over Ons"
            fill
            className="object-cover opacity-20 animate-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700">
            Over SmartWheels
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Uw specialist in velgenservice met passie voor perfectie
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ons Verhaal</h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed">
                  <p>
                    SmartWheels is ontstaan uit een passie voor auto's en een oog voor detail. Wat begon als een kleine
                    onderneming is uitgegroeid tot een gespecialiseerd bedrijf in velgenservice, waar kwaliteit en
                    vakmanschap voorop staan.
                  </p>
                  <p>
                    Met meer dan 10 jaar ervaring in de branche hebben wij ons ontwikkeld tot een betrouwbare partner
                    voor particulieren en bedrijven. Of het nu gaat om een complete restauratie, een custom
                    poedercoating of precisie CNC-werk, wij behandelen elke velg met dezelfde zorg en aandacht.
                  </p>
                  <p>
                    Ons team bestaat uit ervaren vakmensen die hun kennis en kunde dagelijks inzetten om het beste
                    resultaat te behalen. We investeren continu in de nieuwste apparatuur en technieken, zodat we onze
                    klanten altijd de hoogste kwaliteit kunnen bieden.
                  </p>
                  <p>
                    Bij SmartWheels draait het niet alleen om velgen, maar om de complete ervaring. Van het eerste
                    contact tot de oplevering, wij zorgen voor een persoonlijke en professionele service. Uw
                    tevredenheid is onze grootste motivatie.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4 animate-in fade-in slide-in-from-top-6 duration-700">
            Onze Kernwaarden
          </h2>
          <p className="text-zinc-400 text-center mb-12 text-lg animate-in fade-in duration-700 delay-100">
            Waar wij voor staan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border-zinc-700 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 hover:scale-105 hover:border-orange-600 transition-all"
                style={{ animationDelay: `${100 * (index + 1)}ms` }}
              >
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 animate-in fade-in slide-in-from-top-6 duration-700">
              Waarom SmartWheels?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 border-zinc-700 animate-in fade-in slide-in-from-left-8 duration-700 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all"
                  style={{ animationDelay: `${150 * index}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700">
            Klaar om kennis te maken?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto animate-in fade-in duration-700 delay-100">
            Neem contact met ons op of vraag direct een vrijblijvende offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 transition-all hover:shadow-lg hover:shadow-orange-600/50">
              <Link href="/offerte">Vraag Offerte Aan</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent transition-all hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20"
            >
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="animate-in fade-in duration-700">
              <h3 className="text-2xl font-bold text-white mb-4">SmartWheels</h3>
              <p className="text-zinc-400 leading-relaxed">
                Uw betrouwbare partner voor alle velgenservice. Met jarenlange ervaring en vakmanschap zorgen wij ervoor
                dat uw velgen er weer als nieuw uitzien.
              </p>
            </div>

            <div className="animate-in fade-in duration-700 delay-100">
              <h4 className="text-lg font-semibold text-white mb-4">Sitemap</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/diensten" className="text-zinc-400 hover:text-orange-600 transition-colors hover:translate-x-1 inline-block">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="/projecten" className="text-zinc-400 hover:text-orange-600 transition-colors hover:translate-x-1 inline-block">
                    Projecten
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className="text-zinc-400 hover:text-orange-600 transition-colors hover:translate-x-1 inline-block">
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-orange-600 transition-colors hover:translate-x-1 inline-block">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.marktplaats.nl/u/smartwheels/47376108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-orange-600 transition-colors hover:translate-x-1 inline-block"
                  >
                    Marktplaats
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-in fade-in duration-700 delay-200">
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