import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps {
  title: ReactNode
  highlight?: ReactNode
  description?: ReactNode
  titleTag?: "h1" | "h2" | "h3" | "h4"
  headingLevel?: "h1" | "h2" | "h3" | "h4"
  headingId?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeader({
  title,
  highlight,
  titleTag,
  headingLevel = "h2",
  headingId,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const TitleComp = titleTag || headingLevel

  return (
    <section className="w-full bg-gradient-to-br from-primary via-background to-primary/20 pt-26 lg:pt-40 pb-8">
      <div className={cn("animate-slide-up max-w-7xl mx-auto px-6 lg:px-8 flex flex-col", className)}>
        <TitleComp
          id={headingId}
          className={cn(
            "font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl",
            align === "center" && "text-center",
            align === "right" && "text-right"
          )}
        >
          {title}
          {highlight && <span className="text-gradient"> {highlight}</span>}
        </TitleComp>

        {/* Divider */}
        <div
          className={cn(
            "animate-slide-up-delay-1 mt-3 h-1 w-12 rounded-full bg-brand-green",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto"
          )}
          aria-hidden="true"
        />
        {/* Description */}
        {description && (
          <p className={cn(
            "animate-slide-up-delay-2 mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl",
            align === "center" && "text-center mx-auto",
            align === "right" && "text-right ml-auto"
          )}>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}