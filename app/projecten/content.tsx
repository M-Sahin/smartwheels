'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import imageUrlBuilder from '@sanity/image-url'
import { ChevronDown, Search, X } from 'lucide-react'
import { client } from "@/sanity/lib/client"

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

// Image Comparison Component
function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: { beforeSrc: string; afterSrc: string; beforeAlt: string; afterAlt: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const position = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  return (
    <div
      className="relative aspect-square rounded-xl overflow-hidden cursor-col-resize group touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        className="object-cover"
        draggable={false}
        priority
      />
      
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-orange-500 cursor-col-resize transition-all"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 sm:p-3 shadow-lg group-hover:scale-110 transition-transform">
          <div className="flex gap-1">
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white -rotate-90" />
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white rotate-90" />
          </div>
        </div>
      </div>

      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-3 py-1 bg-black/50 text-white text-xs font-medium rounded">
        Voor
      </span>
      <span className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-1 bg-black/50 text-white text-xs font-medium rounded">
        Na
      </span>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, allServices }: { project: Project; allServices: string[] }) {
  return (
    <div className="bg-zinc-800/50 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-700/50 hover:border-orange-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-900/20">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8 md:p-12">
        {/* Interactive Before/After */}
        <div>
          <BeforeAfterSlider
            beforeSrc={urlFor(project.afterImage).width(1200).height(1200).fit('crop').auto('format').url()}
            afterSrc={urlFor(project.beforeImage).width(1200).height(1200).fit('crop').auto('format').url()}
            beforeAlt="Voor"
            afterAlt="Na"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-orange-600 transition-colors">
            {project.title}
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-400 mb-3 sm:mb-4">
              Uitgevoerde diensten:
            </h3>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-zinc-700/80 text-white rounded-full text-xs sm:text-sm font-medium border border-zinc-600/50 hover:bg-zinc-700 hover:border-orange-600/50 transition-all cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Client Component for Interactive Features
export function ProjectsContent({ projects, allServices }: { projects: Project[]; allServices: string[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesServices = selectedServices.length === 0 ||
        selectedServices.some(service => project.services.includes(service))
      
      return matchesSearch && matchesServices
    })
  }, [searchTerm, selectedServices])

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

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
              placeholder="Zoek projecten..."
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

        {/* Service Filters */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold text-zinc-300 mb-3 sm:mb-4">Filter op diensten:</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {allServices.map(service => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedServices.includes(service)
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-zinc-700/50 text-zinc-300 border border-zinc-600 hover:border-orange-600/50'
                }`}
              >
                {service}
              </button>
            ))}
            {selectedServices.length > 0 && (
              <button
                onClick={() => setSelectedServices([])}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-zinc-700/30 text-zinc-300 hover:bg-zinc-700/50 transition-all border border-zinc-600"
              >
                Wissen
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-zinc-400">
          {filteredProjects.length} van {projects.length} projecten
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6 sm:space-y-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project._id} project={project} allServices={allServices} />
          ))
        ) : (
          <div className="text-center py-12 sm:py-20">
            <p className="text-zinc-400 text-sm sm:text-lg">Geen projecten gevonden die voldoen aan uw criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedServices([])
              }}
              className="mt-4 text-orange-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            >
              Filters opnieuw instellen
            </button>
          </div>
        )}
      </div>
    </div>
  )
}