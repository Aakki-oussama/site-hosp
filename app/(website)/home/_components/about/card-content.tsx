"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

// ─── Constants ────────────────────────────────────────────────────────────────

const COMPANY_FOUNDED_YEAR = 1975
const ANIMATION_DURATION = 1000 // ms

// ─── Component ────────────────────────────────────────────────────────────────

export function AboutStatCard() {
  const currentYear = new Date().getFullYear()
  const target = currentYear - COMPANY_FOUNDED_YEAR

  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const startedRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const previousValueRef = useRef(-1)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return

        startedRef.current = true
        observer.disconnect()

        // Respect users who prefer reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(target)
          return
        }

        let startTime: number | null = null

        const animate = (timestamp: number) => {
          if (startTime === null) startTime = timestamp

          const progress = Math.min(
            (timestamp - startTime) / ANIMATION_DURATION,
            1
          )
          const value = Math.floor(progress * target)

          // Prevent unnecessary re-renders
          if (value !== previousValueRef.current) {
            previousValueRef.current = value
            setCount(value)
          }

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate)
          } else {
            setCount(target)
            animationFrameRef.current = null
          }
        }

        animationFrameRef.current = requestAnimationFrame(animate)
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [target])

  return (
    <div ref={containerRef}>
      <Card className="w-full rounded-2xl py-0 shadow-sm md:size-[7.5rem] md:w-auto lg:size-32">
        <CardContent className="flex h-full flex-row items-center justify-center gap-4 px-5 py-5 text-center md:flex-col md:gap-0 md:px-3 md:py-0">
          <p className="font-heading text-4xl font-bold leading-none text-primary md:text-[2.5rem] lg:text-5xl">
            {count}
            <span className="text-brand-green">+</span>
          </p>
          <p className="max-w-[8rem] text-left text-xs leading-snug text-muted-foreground md:mt-2 md:max-w-[5.5rem] md:text-center md:text-[11px] lg:text-xs">
            Années d&apos;expérience
          </p>
        </CardContent>
      </Card>
    </div>
  )
}