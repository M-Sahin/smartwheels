'use client'

import { useState, useEffect, useRef } from "react"
import { CheckCircle, Clock, Award } from "lucide-react"

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

export function HomeClient() {
  return (
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
  )
}