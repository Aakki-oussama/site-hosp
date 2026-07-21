import type { LucideIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type ServiceFeatureCardVariant = "green" | "blue"

const variantStyles: Record<
  ServiceFeatureCardVariant,
  { border: string; number: string; icon: string }
> = {
  green: {
    border: "hover:border-brand-green/35",
    number: "text-brand-green/10 group-hover:text-brand-green/20",
    icon: "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-brand-green-foreground",
  },
  blue: {
    border: "hover:border-primary/35",
    number: "text-primary/10 group-hover:text-primary/20",
    icon: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  },
}

export interface ServiceFeatureCardProps {
  icon: LucideIcon
  title: string
  description?: string
  /** Display index shown as "01", "02", … — or pass a custom string */
  number?: number | string
  variant?: ServiceFeatureCardVariant
  className?: string
}

function formatFeatureNumber(value: number | string): string {
  if (typeof value === "number") {
    return String(value).padStart(2, "0")
  }
  return value
}

export function ServiceFeatureCard({
  icon: Icon,
  title,
  description,
  number = 1,
  variant = "green",
  className,
}: ServiceFeatureCardProps) {
  const styles = variantStyles[variant]

  return (
    <Card
      data-variant={variant}
      className={cn(
        "group relative h-full overflow-hidden border-border/60 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
        styles.border,
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute -right-0.5 -top-1 font-heading text-4xl font-black transition-colors duration-300",
          styles.number
        )}
        aria-hidden
      >
        {formatFeatureNumber(number)}
      </span>

      <CardContent className="relative flex h-full flex-col gap-1.5 px-3.5 py-3">
        <div
          className={cn(
            "flex size-8 items-center justify-center rounded-md transition-colors duration-300",
            styles.icon
          )}
        >
          <Icon className="size-3.5" aria-hidden />
        </div>

        <CardTitle className="font-heading text-sm font-semibold">
          {title}
        </CardTitle>

        {description ? (
          <CardDescription className="text-xs leading-relaxed">
            {description}
          </CardDescription>
        ) : null}
      </CardContent>
    </Card>
  )
}