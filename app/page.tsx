import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, CheckCircle, Clock, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const services = [
    {
      icon: Droplet,
      title: "Poedercoaten",
      description: "Hoogwaardige poedercoating in elke gewenste kleur",
    },
    {
      icon: Cog,
      title: "CNC Afdraaien",
      description: "Precisie CNC bewerkingen voor perfecte velgen",
    },
    {
      icon: Target,
      title: "Richten van Velgen",
      description: "Professioneel richten van beschadigde velgen",
    },
    {
      icon: Wrench,
      title: "Ontlakken & Stralen",
      description: "Grondig ontlakken en stralen voor een perfecte basis",
    },
    {
      icon: Hammer,
      title: "Velgen Reparatie",
      description: "Vakkundige reparatie van alle soorten velgschade",
    },
    {
      icon: ShoppingCart,
      title: "In- & Verkoop Velgen",
      description: "Ruime voorraad velgen in diverse maten en stijlen",
      hasButton: true,
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/high-end-luxury-car-wheel-close-up-dark-automotive.jpg"
            alt="Premium velg"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-zinc-900/80 to-zinc-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/50 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-semibold">Specialist sinds 2010</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance animate-fade-in-up [animation-delay:100ms]">
            Uw Specialist in <span className="text-orange-500">Velgen</span>.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms]">
            Van reparatie en poedercoaten tot CNC afdraaien. Wij maken uw velgen weer als nieuw.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-105"
            >
              <Link href="/offerte">Vraag Offerte Aan</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 text-lg px-8 bg-transparent hover:border-orange-600 transition-all"
            >
              <Link href="/diensten">Bekijk Onze Diensten</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-orange-500" />
                <div className="text-4xl font-bold text-white">5000+</div>
              </div>
              <p className="text-zinc-400">Velgen Behandeld</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-orange-500" />
                <div className="text-4xl font-bold text-white">15+</div>
              </div>
              <p className="text-zinc-400">Jaar Ervaring</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-orange-500" />
                <div className="text-4xl font-bold text-white">100%</div>
              </div>
              <p className="text-zinc-400">Klanttevredenheid</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Wat Wij Doen</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Onze Expertise</h2>
            <p className="text-zinc-400 text-lg">Professionele velgenservice met jarenlange ervaring</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-orange-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/20 transition-colors">
                    <service.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-400 mb-4">{service.description}</p>
                  {service.hasButton && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent transition-all"
                    >
                      <a
                        href="https://www.marktplaats.nl/u/smartwheels/47376108/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bekijk Voorraad
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Recent Werk</h2>
            <p className="text-zinc-400 text-lg">Bekijk onze transformaties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {/* Featured large project */}
            <div className="relative aspect-square md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group">
              <Image
                src="/before-and-after-car-wheel-restoration-damaged-whe.jpg"
                alt="Project 1"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-orange-500 font-semibold text-sm mb-2">FEATURED PROJECT</span>
                <p className="text-white font-bold text-2xl mb-2">Voor & Na: Velgreparatie</p>
                <p className="text-zinc-300 text-sm">Complete restauratie met poedercoating</p>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="/powder-coated-car-wheels-glossy-black-finish-premi.jpg"
                alt="Project 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4">
                  <span className="text-orange-500 text-xs font-semibold">POEDERCOATING</span>
                  <p className="text-white font-semibold">Glanzend Zwart</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <Image
                src="/cnc-machined-car-wheel-precision-finish-automotive.jpg"
                alt="Project 3"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4">
                  <span className="text-orange-500 text-xs font-semibold">CNC AFDRAAIEN</span>
                  <p className="text-white font-semibold">Precisiewerk</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square md:col-span-2 rounded-xl overflow-hidden group">
              <Image
                src="/restored-alloy-wheels-custom-color-powder-coating.jpg"
                alt="Project 4"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-orange-500 text-xs font-semibold">CUSTOM KLEUR</span>
                  <p className="text-white font-bold text-xl">Metallic Blauw Finish</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent hover:border-orange-600 transition-all"
            >
              <Link href="/projecten">Bekijk alle projecten</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-sports-car-wheels-close-up-dramatic-lightin.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-orange-900/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Klaar om uw velgen te <span className="text-orange-500">transformeren</span>?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvende offerte
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-12 py-6 shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all hover:scale-105"
          >
            <Link href="/offerte">Start Vandaag Nog Uw Offerte</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Column 1: Logo & About */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SmartWheels</h3>
              <p className="text-zinc-400 leading-relaxed">
                Uw betrouwbare partner voor alle velgenservice. Met jarenlange ervaring en vakmanschap zorgen wij ervoor
                dat uw velgen er weer als nieuw uitzien.
              </p>
            </div>

            {/* Column 2: Sitemap */}
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

            {/* Column 3: Contact */}
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
