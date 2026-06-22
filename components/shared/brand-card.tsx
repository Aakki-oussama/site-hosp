import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BrandCardProps {
  icon: ReactNode
  title: string
  note?: string
  children: ReactNode
  className?: string
}

export function BrandCard({ icon, title, children, note, className }: BrandCardProps) {
  return (
    <Card
      className={cn(
        "group relative bg-muted/50 border-border py-0",
        "transition-all duration-300 ease-in-out",
        "hover:bg-card hover:border-primary/50",
        className
      )}
    >
      <span
        className="absolute top-3 right-3 size-1.5 rounded-full bg-brand-green opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <CardContent className="!p-0">
        <div className="px-4 py-3">

          {/* Icon + title */}
          <div className="flex items-center gap-2.5 mb-1">
            <div className="flex size-[32px] shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
              <span className="text-primary transition-colors duration-300 group-hover:text-primary-foreground">
                {icon}
              </span>
            </div>
            <p className="font-heading text-sm font-medium text-primary">
              {title}
            </p>
          </div>

          {/* Value + note */}
          <div className="pl-[44px]">
            <div className="text-sm text-foreground">
              {children}
            </div>
            {note && (
              <p className="text-xs text-foreground mt-0.5">
                {note}
              </p>
            )}
          </div>

        </div>
      </CardContent>
    </Card>
  )
}