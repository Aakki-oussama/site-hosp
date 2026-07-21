import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps {
  title: ReactNode
  highlight?: ReactNode
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
  align = "left",
  className,
}: SectionHeaderProps) {
  const TitleComp = titleTag || headingLevel

  return (
    <section className="w-full bg-gradient-to-br from-primary via-background to-primary/20 pt-22 lg:pt-40 pb-8">
      <div className={cn("max-w-7xl mx-auto px-6 lg:px-8 flex flex-col", className)}>
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
            "mt-3 h-1 w-12 rounded-full bg-brand-green",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto"
          )}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}