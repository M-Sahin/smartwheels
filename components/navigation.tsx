"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleRouteChange = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [mobileMenuOpen]);

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

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white"
            aria-label="Open navigation menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>

          {/* Navigation Links (Desktop) */}
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

          {/* CTA Buttons (Desktop) */}
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
              <Link href="/offerte">Offerte Aanvragen</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900/95 backdrop-blur-sm shadow-lg z-50 animate-slide-down">
            <div className="flex flex-col items-center gap-6 py-6">
              <Link href="/diensten" className="text-zinc-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                Diensten
              </Link>
              <Link href="/projecten" className="text-zinc-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                Projecten
              </Link>
              <Link href="/over-ons" className="text-zinc-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                Over Ons
              </Link>
              <Link href="/contact" className="text-zinc-300 hover:text-white text-lg" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button
                asChild
                variant="outline"
                className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent w-full"
              >
                <a href="https://www.marktplaats.nl/u/smartwheels/47376108/" target="_blank" rel="noopener noreferrer">
                  Naar Marktplaats
                </a>
              </Button>
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                <Link href="/offerte">Direct Offerte Aanvragen</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
