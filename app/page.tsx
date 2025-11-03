import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, Award, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: "SmartWheels - Velgenservice Specialist in Andelst",
  description: "Professionele velgenreparatie, poedercoaten en CNC afdraaien. 5000+ velgen behandeld, 15+ jaar ervaring. Vraag uw offerte aan!",
  keywords: ["velgen reparatie", "poedercoaten velgen", "CNC afdraaien", "velgenservice Andelst", "velgen restauratie"],
  openGraph: {
    title: "SmartWheels - Velgenservice Specialist",
    description: "Van reparatie tot poedercoaten. Maak uw velgen weer als nieuw met SmartWheels.",
    images: [
      {
        url: "https://smartwheels.nl/high-end-luxury-car-wheel-close-up-dark-automotive.jpg",
        width: 1200,
        height: 630,
        alt: "Premium velgen",
      },
    ],
  },
}

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  beforeImage: any
  afterImage: any
  services: string[]
  order: number
}

async function getRecentProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(_createdAt desc)[0..2] {
    _id,
    title,
    slug,
    description,
    beforeImage,
    afterImage,
    services,
    order
  }`
  return client.fetch(query)
}

export default async function Home() {
  const recentProjects = await getRecentProjects()

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
      description: "Professionele richten van beschadigde velgen",
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
      description: "Bekijk direct onze actuele voorraad velgen op Marktplaats",
      hasButton: true,
    },
  ];

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
            <Award className="w-4 h-4 text-orange-500 animate-bounce" />
            <span className="text-orange-500 text-sm font-semibold">Specialist sinds 2010</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance animate-fade-in-up [animation-delay:100ms]">
            Uw Specialist in <span className="text-orange-500 animate-pulse">Velgen</span>.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms]">
            Van reparatie en poedercoaten tot CNC afdraaien. Wij maken uw velgen weer als nieuw.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-105 animate-shake"
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

      {/* Stats Section */}
      <HomeClient />

      {/* Services Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-float" />
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
                className="bg-zinc-800/50 backdrop-blur border-zinc-700 hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 hover:-translate-y-1 group animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-orange-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/20 transition-colors">
                    <service.icon className="w-8 h-8 text-orange-500 group-hover:animate-bounce" />
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
            <p className="text-zinc-400 text-lg">Bekijk onze nieuwste transformaties</p>
          </div>
          {recentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {recentProjects.map((project, index) => (
                <Link
                  key={project._id}
                  href={`/projecten#${project.slug.current}`}
                  className={`relative rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={urlFor(project.afterImage).width(800).height(800).fit('crop').url()}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {index === 0 && (
                      <span className="text-orange-500 font-semibold text-sm mb-2 animate-pulse">NIEUWSTE PROJECT</span>
                    )}
                    <p className={`text-white font-bold ${index === 0 ? 'text-2xl' : 'text-xl'} mb-2`}>
                      {project.title}
                    </p>
                    <p className="text-zinc-300 text-sm line-clamp-2">
                      {project.description.slice(0, 80) + (project.description.length > 80 ? "..." : "")}
                    </p>
                    {project.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.services.slice(0, 3).map((service, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-orange-600/20 text-orange-500 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-zinc-400 mb-8">
              <p>Nog geen projecten beschikbaar. Voeg projecten toe via de Sanity Studio.</p>
            </div>
          )}
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

      {/* Instagram Reels Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-float" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-600/50 rounded-full px-4 py-2 mb-4">
              <Instagram className="w-5 h-5 text-pink-500 animate-bounce" />
              <span className="text-pink-500 text-sm font-semibold">Volg Ons Op Instagram</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Bekijk Onze Reels</h2>
            <p className="text-zinc-400 text-lg">Zie onze transformaties in actie</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <Instagram className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-bounce" />
                <p className="text-zinc-300 text-lg mb-2">
                  Bekijk onze nieuwste velgtransformaties en werkplaats updates
                </p>
                <p className="text-zinc-400 text-sm">
                  Dagelijks nieuwe content op Instagram
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 transition-all hover:scale-105"
              >
                <a
                  href="https://www.instagram.com/smart.7952/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Bekijk Onze Reels
                </a>
              </Button>
              <div className="mt-6 pt-6 border-t border-zinc-700">
                <p className="text-zinc-500 text-sm">
                  @smart.7952
                </p>
              </div>
            </div>
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
            Klaar om uw velgen te <span className="text-orange-500 animate-pulse">transformeren</span>?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvende offerte
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-12 py-6 shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all hover:scale-105 animate-shake"
          >
            <Link href="/offerte">Offerte</Link>
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
              <h4 className="text-lg font-semibold text-white mb-4">Handige links</h4>
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