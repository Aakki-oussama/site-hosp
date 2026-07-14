"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const slides = [
  {
    title: "Solutions d'hygiène professionnelle certifiées",
    description:
      "Produits de nettoyage adaptés aux établissements de santé, hôteliers et industriels au Maroc. Fabriqués localement, certifiés pour exiger le meilleur.",
  },
  {
    title: "Désinfectants certifiés EN/NF pour professionnels",
    description:
      "Éliminez 99,9% des agents pathogènes avec nos solutions de désinfection homologuées pour hôpitaux, cliniques et industries au Maroc.",
  },
]

const primaryWords = ["hygiène", "Désinfectants", "désinfection", "certifiés", "certifiées"]

export function HeroText() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setAnimating(false)
      }, 400)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <div
      className={cn(
        "transition-all duration-400",
        animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      )}
    >
      <h1 className="font-heading text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mb-6 leading-tight">
        {slide.title.split(" ").map((word, i) => (
          <span
            key={i}
            className={primaryWords.includes(word) ? "text-primary" : "text-white"}
          >
            {word}{" "}
          </span>
        ))}
      </h1>
      <p className="text-base text-white/80 leading-relaxed max-w-2xl sm:text-lg">
        {slide.description}
      </p>

      {/* Slide indicators */}
      <div className="mt-6 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              i === current ? "w-8 bg-primary" : "w-4 bg-green-400"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}