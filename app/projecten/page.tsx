import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { ProjectsContent } from "./content"

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

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    beforeImage {
      asset->{
        _id,
        url
      }
    },
    afterImage {
      asset->{
        _id,
        url
      }
    },
    services,
    order
  }`
  return client.fetch(query)
}

export const revalidate = 60

export default async function ProjectenPage() {
  const projects = await getProjects()
  
  // Get all unique services for filtering
  const allServices = Array.from(
    new Set(projects.flatMap(p => p.services))
  ).sort()

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">Onze Projecten</h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed px-2">
            Bekijk een selectie van onze recent afgeronde projecten. Van complete restauraties tot custom
            poedercoatings, elk project wordt met dezelfde toewijding en vakmanschap uitgevoerd.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <ProjectsContent projects={projects} allServices={allServices} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto text-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm sm:text-base text-zinc-400">Velgen gerestaureerd</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm sm:text-base text-zinc-400">Jaar ervaring</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm sm:text-base text-zinc-400">Klanttevredenheid</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">Wilt u ook zo'n resultaat?</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Laat ons uw velgen transformeren. Vraag vandaag nog een vrijblijvende offerte aan.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 h-10 sm:h-11">
            <Link href="/offerte">Vraag Offerte Aan</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">SmartWheels</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Uw betrouwbare partner voor alle velgenservice. Met jarenlange ervaring en vakmanschap zorgen wij ervoor
                dat uw velgen er weer als nieuw uitzien.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Sitemap</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
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
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contactgegevens</h4>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-zinc-400">
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
                  <a href="mailto:smartwheels1@outlook.com" className="hover:text-orange-600 transition-colors break-all">
                    smartwheels1@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-zinc-500 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} SmartWheels. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}