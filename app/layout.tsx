import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartWheels - Uw Specialist in Velgenservice | Reparatie & Poedercoaten",
  description: "SmartWheels specialiseert zich in professionele velgenservice: reparatie, poedercoaten, CNC afdraaien & meer. 10+ jaar ervaring. Vrijblijvende offerte!",
  keywords: ["velgen", "velgenreparatie", "poedercoaten", "CNC afdraaien", "velgenservice", "Andelst"],
  metadataBase: new URL("https://smartwheels.nl"),
  openGraph: {
    title: "SmartWheels - Uw Specialist in Velgenservice",
    description: "Professionele velgenservice: reparatie, poedercoaten, CNC afdraaien en meer met 10+ jaar ervaring.",
    url: "https://smartwheels.nl",
    siteName: "SmartWheels",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://smartwheels.nl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmartWheels - Velgenservice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartWheels - Uw Specialist in Velgenservice",
    description: "Professionele velgenservice in Andelst. Reparatie, poedercoaten, CNC afdraaien.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://smartwheels.nl",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SmartWheels",
              description: "Professionele velgenservice en reparatie",
              url: "https://smartwheels.nl",
              telephone: "+31-contact-number",
              email: "smartwheels1@outlook.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Expeditieweg 8F",
                addressLocality: "Andelst",
                postalCode: "6673DV",
                addressCountry: "NL",
              },
              sameAs: [
                "https://www.instagram.com/smart.7952/",
                "https://www.marktplaats.nl/u/smartwheels/47376108/",
              ],
              areaServed: "NL",
              priceRange: "€€",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}