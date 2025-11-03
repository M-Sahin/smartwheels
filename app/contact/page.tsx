import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { MapPin, Mail, Clock, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact - SmartWheels Andelst",
  description: "Neem contact op met SmartWheels. Bezoek ons in Andelst of bel voor een afspraak. Maandag t/m vrijdag 08:00 - 17:00.",
  keywords: ["contact", "locatie Andelst", "telefoonnummer", "openingstijden"],
  openGraph: {
    title: "Contact - SmartWheels",
    description: "Contactgegevens en locatie van SmartWheels in Andelst.",
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: (
        <>
          Expeditieweg 8F
          <br />
          6673DV Andelst
          <br />
          Nederland
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a
          href="mailto:smartwheels1@outlook.com"
          className="text-zinc-300 hover:text-orange-600 transition-colors"
        >
          smartwheels1@outlook.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Openingstijden",
      content: (
        <div className="space-y-1 text-zinc-300 leading-relaxed">
          <p>Maandag - Vrijdag: 08:00 - 17:00</p>
          <p>Zaterdag: Op afspraak</p>
          <p>Zondag: Gesloten</p>
        </div>
      ),
    },
    {
      icon: Phone,
      title: "Telefonisch Contact",
      content: "Bel of mail ons voor vragen of om een afspraak te maken. Wij helpen u graag verder!",
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
            alt="Contact"
            fill
            className="object-cover opacity-20 animate-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700">
            Neem Contact Op
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto text-balance leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Heeft u vragen of wilt u een afspraak maken? Wij staan voor u klaar!
          </p>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-zinc-800 border-zinc-700 animate-in fade-in slide-in-from-left-8 duration-700 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all"
                  style={{ animationDelay: `${100 * index}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <info.icon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1 animate-in zoom-in duration-700" style={{ animationDelay: `${100 * index + 200}ms` }} />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                        <div className="text-zinc-300 leading-relaxed">{info.content}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                asChild
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all hover:shadow-lg hover:shadow-orange-600/50 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400"
              >
                <Link href="/offerte">Direct Offerte Aanvragen</Link>
              </Button>
            </div>

            {/* Google Maps */}
            <div className="lg:sticky lg:top-24 h-fit animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20 transition-all">
                <CardContent className="p-0">
                  <div className="aspect-square lg:aspect-auto lg:h-[600px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.8!2d5.7!3d51.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a0e0e0e0e0e0%3A0x0!2sExpeditieweg%208F%2C%206673DV%20Andelst!5e0!3m2!1snl!2snl!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SmartWheels Locatie"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Route Description */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Routebeschrijving</h2>
                <div className="text-zinc-300 leading-relaxed space-y-3">
                  <p className="animate-in fade-in duration-700 delay-200">
                    SmartWheels is gemakkelijk te bereiken vanaf de A15 en A50. Neem afslag Andelst en volg de borden
                    richting het industrieterrein.
                  </p>
                  <p className="animate-in fade-in duration-700 delay-300">
                    Wij bevinden ons op Expeditieweg 8F, een moderne bedrijfslocatie met voldoende parkeergelegenheid
                    voor onze klanten.
                  </p>
                  <p className="font-semibold text-white animate-in fade-in duration-700 delay-400">
                    Tip: Maak vooraf een afspraak, zodat wij voldoende tijd voor u kunnen reserveren en u direct
                    geholpen kunt worden.
                  </p>
                </div>
              </CardContent>
            </Card>
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