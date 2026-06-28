"use client"

import { useEffect, useRef, useState } from "react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "Clients satisfaits" },
  { value: 10,  prefix: "+", suffix: " ans", label: "D'expérience" },
  { value: 5,   prefix: "+", suffix: "", label: "Régions couvertes" },
  { value: 25, prefix: "+", suffix: "", label: "Produits" },
]

// ─── Hook: count-up ───────────────────────────────────────────────────────────

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

// ─── Stat Item ────────────────────────────────────────────────────────────────

function StatItem({
  value,
  prefix,
  suffix,
  label,
  active,
  index,
}: {
  value: number
  prefix: string
  suffix: string
  label: string
  active: boolean
  index: number
}) {
  const count = useCountUp(value, active, 1400 + index * 100)

  return (
    <div className="flex flex-col items-center gap-1.5 px-2 py-1 sm:px-4">

      {/* Number */}
      <p className="font-heading text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
        {prefix}{active ? count : 0}{suffix}
      </p>

      {/* Label */}
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 sm:text-xs sm:tracking-[0.2em]">
        {label}
      </p>

    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-6 lg:py-8"
      aria-label="Chiffres clés"
    >
      <div className="container-page relative">

        {/* Eyebrow */}
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted sm:text-xs">
          Polaris industrie Hosp en chiffres
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-y-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              <StatItem {...stat} active={active} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}