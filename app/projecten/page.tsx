import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"
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

export default async function ProjectenPage() {
  const projects = await getProjects()

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

      {/* Projects Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-zinc-800/50 rounded-3xl overflow-hidden border border-zinc-700/50"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Images Section */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Before Image */}
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={urlFor(project.beforeImage).width(400).height(400).fit('crop').url()}
                        alt="Voor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* After Image */}
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={urlFor(project.afterImage).width(400).height(400).fit('crop').url()}
                        alt="Na"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {project.title}
                    </h2>
                    
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold text-zinc-400 mb-4">
                        Uitgevoerde diensten:
                      </h3>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-5 py-2.5 bg-zinc-700/80 text-white rounded-full text-sm font-medium border border-zinc-600/50"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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