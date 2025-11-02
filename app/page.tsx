"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, CheckCircle, Clock, Award, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { client } from "@/sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'

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

// Animated countup that triggers on scroll into view
function StatCountUp({ end, suffix = '', duration = 1200, className = '' }: { end: number; suffix?: string; duration?: number; className?: string }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(true)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!visible) return
    let start = 0
    if (start === end) return
    let increment = Math.max(1, Math.ceil(end / (duration / 16)))
    let current = start
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      setCount(current)
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, visible])

  return <div ref={ref} className={className}>{count.toLocaleString()}{suffix}</div>
}

export default function Home() {
  const [recentProjects, setRecentProjects] = useState<Project[]>([])
  const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({})
  const pathname = usePathname()

  useEffect(() => {
    async function fetchRecentProjects() {
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
      const projects = await client.fetch(query)
      setRecentProjects(projects)
    }
    fetchRecentProjects()
  }, [])

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

  // Animation utility for fade-in-up
  const fadeInUp = "animate-fade-in-up"

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
          <div className={`inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/50 rounded-full px-4 py-2 mb-6 ${fadeInUp}`}>
            <Award className="w-4 h-4 text-orange-500 animate-bounce" />
            <span className="text-orange-500 text-sm font-semibold">Specialist sinds 2010</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 text-balance ${fadeInUp} [animation-delay:100ms]`}>
            Uw Specialist in <span className="text-orange-500 animate-pulse">Velgen</span>.
          </h1>
          <p className={`text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto text-balance ${fadeInUp} [animation-delay:200ms]`}>
            Van reparatie en poedercoaten tot CNC afdraaien. Wij maken uw velgen weer als nieuw.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${fadeInUp} [animation-delay:300ms]`}>
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
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-orange-500 group-hover:animate-spin" />
                <StatCountUp end={5000} duration={3500} suffix="+" className="text-4xl font-bold text-white" />
              </div>
              <p className="text-zinc-400">Velgen Behandeld</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-orange-500 group-hover:animate-spin" />
                <StatCountUp end={15} duration={2500} suffix="+" className="text-4xl font-bold text-white" />
              </div>
              <p className="text-zinc-400">Jaar Ervaring</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-orange-500 group-hover:animate-bounce" />
                <StatCountUp end={100} duration={2500} suffix="%" className="text-4xl font-bold text-white" />
              </div>
              <p className="text-zinc-400">Klanttevredenheid</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Project Preview Section - Now Dynamic */}
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
                      {showMore[project._id]
                        ? project.description
                        : project.description.slice(0, 80) + (project.description.length > 80 ? "..." : "")}
                    </p>
                    {project.description.length > 80 && (
                      <button
                        className="text-orange-500 text-xs mt-1 underline"
                        onClick={e => {
                          e.preventDefault()
                          setShowMore(prev => ({ ...prev, [project._id]: !prev[project._id] }))
                        }}
                      >
                        {showMore[project._id] ? "Minder weergeven" : "Meer weergeven"}
                      </button>
                    )}
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
            {/* Column 1: Logo & About */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SmartWheels</h3>
              <p className="text-zinc-400 leading-relaxed">
                Uw betrouwbare partner voor alle velgenservice. Met jarenlange ervaring en vakmanschap zorgen wij ervoor
                dat uw velgen er weer als nieuw uitzien.
              </p>
            </div>
            {/* Column 2: Handige links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Handige links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/diensten" className={
                    `transition-colors ${pathname === "/diensten" ? "text-orange-600 font-bold" : "text-zinc-400 hover:text-orange-600"}`
                  }>
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="/projecten" className={
                    `transition-colors ${pathname === "/projecten" ? "text-orange-600 font-bold" : "text-zinc-400 hover:text-orange-600"}`
                  }>
                    Projecten
                  </Link>
                </li>
                <li>
                  <Link href="/over-ons" className={
                    `transition-colors ${pathname === "/over-ons" ? "text-orange-600 font-bold" : "text-zinc-400 hover:text-orange-600"}`
                  }>
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={
                    `transition-colors ${pathname === "/contact" ? "text-orange-600 font-bold" : "text-zinc-400 hover:text-orange-600"}`
                  }>
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