import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ServiceCardHomeProps {
  icon: ReactNode
  title: string
  description?: string
  className?: string
}

export function ServiceCardHome({ icon, title, description, className }: ServiceCardHomeProps) {
  return (
    <Card
      className={cn(
        "group h-full border-border/70 bg-surface/70 py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="flex h-full flex-col gap-3 p-6">
        <div className="flex items-center gap-2.5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
            {icon}
          </div>

          <h3 className="font-heading text-sm font-semibold text-foreground">
            {title}
          </h3>
        </div>

        <div className="">
          <div className="mt-2 h-px w-full bg-border/80" />
          {description ? (
            <p className="mt-3 text-[0.95rem] leading-7 text-foreground/80">
              {description}
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
