'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wrench, Cog, Target, Droplet, Hammer, ShoppingCart, CheckCircle, Search, X } from "lucide-react"

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  category?: string
}

const services: Service[] = [
  {
    icon: Droplet,
    title: "Poedercoaten",
    description: "Hoogwaardige poedercoating in elke gewenste kleur voor een duurzame en stijlvolle afwerking van uw velgen.",
    category: "Coating",
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
    description: "Precisie CNC bewerkingen voor perfecte velgen. Wij draaien uw velgen af met de nieuwste CNC-technologie voor een fabrieksmatige afwerking.",
    category: "Bewerking",
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
    description: "Professioneel richten van beschadigde velgen. Wij beschikken over moderne richtapparatuur om uw velgen weer perfect rond te maken.",
    category: "Reparatie",
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
    description: "Grondig ontlakken en stralen voor een perfecte basis. Wij verwijderen oude lak en corrosie volledig voor een optimaal resultaat.",
    category: "Voorbereiding",
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
    description: "Vakkundige reparatie van alle soorten velgschade. Van kleine krassen tot zware beschadigingen, wij maken uw velgen weer als nieuw.",
    category: "Reparatie",
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
    description: "Ruime voorraad velgen in diverse maten en stijlen. Wij kopen ook uw gebruikte velgen in voor een eerlijke prijs.",
    category: "Verkoop",
    features: [
      "Grote voorraad occasions",
      "Diverse merken en maten",
      "Inkoop van gebruikte velgen",
      "Eerlijke prijzen",
      "Bekijk onze voorraad op Marktplaats",
    ],
  },
]

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className="bg-zinc-800/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-700/50 hover:border-orange-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/20 group"
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <service.icon className="w-12 h-12 sm:w-14 sm:h-14 text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-600 transition-colors">
              {service.title}
            </h3>
            {service.category && (
              <span className="inline-block mt-2 px-3 py-1 bg-orange-600/20 text-orange-400 text-xs font-medium rounded-full">
                {service.category}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features - Always Visible */}
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Wat wij bieden:</h4>
          <ul className="space-y-2 sm:space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>

          {service.title === "In- & Verkoop Velgen" && (
            <Button asChild className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base">
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
    </div>
  )
}

export function ServicesContent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(services.map(s => s.category))).sort() as string[]

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = !selectedCategory || service.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Filters */}
      <div className="bg-zinc-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-zinc-700/50">
        {/* Search */}
        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-zinc-500" />
            <Input
              type="text"
              placeholder="Zoek diensten..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 sm:pl-12 text-sm sm:text-base bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 h-9 sm:h-10"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-zinc-300 mb-3 sm:mb-4">Filter op categorie:</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                !selectedCategory
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-zinc-700/50 text-zinc-300 border border-zinc-600 hover:border-orange-600/50'
              }`}
            >
              Alles
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-zinc-700/50 text-zinc-300 border border-zinc-600 hover:border-orange-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-zinc-400">
          {filteredServices.length} van {services.length} diensten
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))
        ) : (
          <div className="md:col-span-2 text-center py-12 sm:py-20">
            <p className="text-zinc-400 text-sm sm:text-lg mb-4">
              Geen diensten gevonden die voldoen aan uw criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory(null)
              }}
              className="text-orange-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            >
              Filters opnieuw instellen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}