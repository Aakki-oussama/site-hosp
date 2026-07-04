"use client"

import { Children, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  speed?: number
  pauseOnHover?: boolean
  gap?: string
  className?: string
  fade?: boolean
}

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  gap = "1rem",
  className,
  fade = true,
}: MarqueeProps) {
  const vertical = direction === "up" || direction === "down"
  const reverse = direction === "right" || direction === "down"
  const items = Children.toArray(children)
  const animationName = vertical ? "marquee-y" : "marquee-x"

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        vertical ? "h-full flex-col" : "w-full flex-row",
        fade && !vertical && "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        fade && vertical && "[mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
      style={{ "--gap": gap } as CSSProperties}
    >
      {[0, 1].map((dup) => (
        <div
          key={dup}
          aria-hidden={dup === 1 ? "true" : undefined}
          className={cn(
            "flex shrink-0 items-center",
            vertical ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{
            gap,
            animationName,
            animationDuration: `${speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {items.map((child, i) => (
            <div key={i} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}