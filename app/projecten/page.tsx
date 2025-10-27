import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function ProjectenPage() {
  const projects = [
    {
      title: "Voor & Na: Complete Velgreparatie",
      description:
        "Deze velgen kwamen binnen met zware randschade en corrosie. Na richten, reparatie en poedercoaten in glanzend zwart zien ze er weer uit als nieuw.",
      image: "/before-and-after-car-wheel-restoration-damaged-whe.jpg",
      services: ["Richten", "Reparatie", "Poedercoaten"],
    },
    {
      title: "Poedercoating: Glanzend Zwart",
      description:
        "Een set premium velgen voorzien van een hoogwaardige glanzend zwarte poedercoating. Het resultaat is een diepe, duurzame glans die jaren meegaat.",
      image: "/powder-coated-car-wheels-glossy-black-finish-premi.jpg",
      services: ["Ontlakken", "Poedercoaten"],
    },
    {
      title: "CNC Afdraaien: Precisiewerk",
      description:
        "Deze velgen zijn volledig gerestaureerd en voorzien van een prachtige CNC-afwerking. De diamant-cut finish geeft een luxe uitstraling.",
      image: "/cnc-machined-car-wheel-precision-finish-automotive.jpg",
      services: ["CNC Afdraaien", "Poedercoaten"],
    },
    {
      title: "Custom Kleur: Metallic Blauw",
      description:
        "Een unieke custom kleur voor deze velgen. De metallic blauwe poedercoating geeft de auto een opvallende en persoonlijke uitstraling.",
      image: "/restored-alloy-wheels-custom-color-powder-coating.jpg",
      services: ["Ontlakken", "Poedercoaten"],
    },
    {
      title: "Premium Restauratie",
      description:
        "Complete restauratie van deze high-end velgen. Van ontlakken tot poedercoaten en CNC afdraaien, alles is met de grootste zorg uitgevoerd.",
      image: "/luxury-sports-car-wheels-close-up-dramatic-lightin.jpg",
      services: ["Ontlakken", "Reparatie", "CNC Afdraaien", "Poedercoaten"],
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
            alt="Projecten"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Onze Projecten</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Bekijk een selectie van onze recent afgeronde projecten. Van complete restauraties tot custom
            poedercoatings, elk project wordt met dezelfde toewijding en vakmanschap uitgevoerd.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-square md:aspect-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-zinc-300 mb-6 leading-relaxed">{project.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-400 mb-2">Uitgevoerde diensten:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm border border-zinc-600"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-zinc-400">Velgen gerestaureerd</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-zinc-400">Jaar ervaring</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-zinc-400">Klanttevredenheid</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Wilt u ook zo'n resultaat?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Laat ons uw velgen transformeren. Vraag vandaag nog een vrijblijvende offerte aan.
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
