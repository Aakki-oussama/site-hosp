"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { timeline } from "@/data/about/timeline"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "@/components/shared/icons"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".timeline-item")
    if (!items) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-background py-12 lg:py-16"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="up">
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="subtle" className="mb-3 gap-2">
              <ShieldCheck aria-hidden="true" />
              Depuis 2022
            </Badge>
            <h2
              id="timeline-heading"
              className="h-title"
            >
              Notre{" "}
              <span className="text-gradient">
                Parcours
              </span>
            </h2>
            <p className="section-description mt-4">
              De notre fondation à aujourd&apos;hui, une croissance portée par
              l&apos;expertise et la confiance de nos partenaires.
            </p>
          </header>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">

          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[4px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <ol aria-label="Chronologie de l'entreprise">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <li
                  key={item.year}
                  className="timeline-item relative grid grid-cols-1 py-8 md:grid-cols-2 md:py-10"
                >
                  {/* Desktop Left */}
                  <div
                    className={cn(
                      "hidden md:block md:px-10",
                      isLeft ? "text-right" : ""
                    )}
                  >
                    {isLeft && <TimelineContent {...item} />}
                  </div>

                  {/* Center Dot */}
                  <span
                    aria-hidden
                    className="timeline-dot absolute -left-[1.5px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:top-8 md:-translate-x-1/2"
                  />

                  {/* Desktop Right */}
                  <div className="hidden md:block md:px-10">
                    {!isLeft && <TimelineContent {...item} />}
                  </div>

                  {/* Mobile */}
                  <div className="pl-8 md:hidden">
                    <TimelineContent {...item} />
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function TimelineContent({
  year,
  title,
  description,
}: {
  year: string
  title: string
  description: string
}) {
  return (
    <>
      <p className="timeline-year text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        {year}
      </p>
      <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </>
  )
}