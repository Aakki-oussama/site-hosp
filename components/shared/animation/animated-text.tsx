"use client"

import { motion } from "motion/react"
import type { TargetAndTransition } from "motion/react"
import type { ReactNode } from "react"

export type AnimationVariant =
  | "fade"
  | "fade-left"
  | "fade-up"
  | "fade-down"

interface AnimatedTextProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
}

const variants: Record<
  AnimationVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition }
> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "fade-left": {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  "fade-up": {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
}

export function AnimatedText({
  children,
  variant = "fade-left",
  delay = 0,
  duration = 0.5,
  className,
}: AnimatedTextProps) {
  const { initial, animate } = variants[variant]

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}