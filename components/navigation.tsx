"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            SmartWheels
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/diensten" className="text-zinc-300 hover:text-white transition-colors">
              Diensten
            </Link>
            <Link href="/projecten" className="text-zinc-300 hover:text-white transition-colors">
              Projecten
            </Link>
            <Link href="/over-ons" className="text-zinc-300 hover:text-white transition-colors">
              Over Ons
            </Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
            >
              <a href="https://www.marktplaats.nl/u/smartwheels/47376108/" target="_blank" rel="noopener noreferrer">
                Naar Marktplaats
              </a>
            </Button>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/offerte">Direct Offerte Aanvragen</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
