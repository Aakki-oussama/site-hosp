"use client"

import { Progress } from "@/components/ui/progress"

const metrics = [
  { label: "Satisfaction clients", value: 94 },
  { label: "Conformité normes EN / NF", value: 100 },
]

export function AboutProgress() {
  return (
    <div className="space-y-4 md:space-y-5">
      {metrics.map(({ label, value }) => (
        <div key={label} className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-foreground md:text-sm">
              {label}
            </span>
            <span className="text-xs font-bold tabular-nums text-primary md:text-sm">
              {value}%
            </span>
          </div>
          <Progress
            value={value}
            aria-label={`${label}: ${value}%`}
            className="h-2 bg-muted md:h-2.5 [&_[data-slot=progress-indicator]]:bg-primary"
          />
        </div>
      ))}
    </div>
  )
}
