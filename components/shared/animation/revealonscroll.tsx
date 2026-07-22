"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up"
}

export function RevealOnScroll({
  children,
  className,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    // Respect users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // animate once only
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-section",
        `reveal-${direction}`,
        visible && "reveal-visible",
        className
      )}
    >
      {children}
    </div>
  )
}