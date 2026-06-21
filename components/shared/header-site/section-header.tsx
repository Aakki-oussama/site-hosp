import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Icon, MessageCircleMore, Clock } from "@/components/shared/icons"
import { HeaderDecorations } from "@/components/shared/header-site/header-decorations"

export interface SectionHeaderProps {
  /**
   * The main title text or elements.
   */
  title: ReactNode

  /**
   * Optional text/element to highlight (rendered in primary color after title).
   */
  highlight?: ReactNode

  /**
   * The tag to use for the title (important for SEO semantic hierarchy).
   * Defaults to 'h2'. Use 'h1' for Hero headers.
   */
  titleTag?: "h1" | "h2" | "h3" | "h4"

  /**
   * Alias for titleTag (for compatibility).
   */
  headingLevel?: "h1" | "h2" | "h3" | "h4"

  /**
   * Optional HTML id attribute for the heading (e.g. for aria-labelledby).
   */
  headingId?: string

  /**
   * Optional badge text or React element placed above the title.
   */
  badge?: ReactNode

  /**
   * Optional description text below the title.
   */
  description?: ReactNode

  /**
   * Optional secondary note text (often rendered below description).
   */
  note?: ReactNode

  /**
   * Alignment of the header. Defaults to 'left'.
   */
  align?: "left" | "center" | "right"

  /**
   * Visual variant:
   * - 'hero': full relative container with background, large paddings, and all floating decorations.
   * - 'section': relative container with compact paddings and subtle geometric decorations.
   * - 'simple': just the badge, title, description, and children with no background decorations.
   */
  variant?: "hero" | "section" | "simple"

  /**
   * Custom background color/classes. Defaults to 'bg-muted/30' for hero.
   */
  bgClassName?: string

  /**
   * Optional extra className for the outer wrapper container.
   */
  className?: string

  /**
   * Optional children rendered below the title and description.
   */
  children?: ReactNode
}

export function SectionHeader({
  title,
  highlight,
  titleTag,
  headingLevel = "h2",
  headingId,
  badge,
  description,
  note,
  align = "left",
  variant = "simple",
  bgClassName = "bg-muted",
  className,
  children,
}: SectionHeaderProps) {
  const TitleComp = titleTag || headingLevel

  // Alignment styles
  const alignmentClass = cn({
    "text-left items-start": align === "left",
    "text-center items-center mx-auto": align === "center",
    "text-right items-end ml-auto": align === "right",
  })

  // Header content block
  const headerContent = (
    <div className={cn("relative w-full max-w-3xl flex flex-col z-10", alignmentClass)}>
      {/* Badge */}
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green px-3 py-1 text-md font-medium text-primary">
          <Icon icon={MessageCircleMore} size="md" color="primary" />
          {badge}
        </div>
      )}

      {/* Title */}
      <TitleComp 
        id={headingId}
        className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl"
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-primary">{highlight}</span>
          </>
        )}
      </TitleComp>

      {/* Underline divider*/}
      <div
        className={cn(
          "mt-3 mb-4 h-1 w-12 rounded-full bg-brand-green",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
        aria-hidden="true"
      />

      {/* Description */}
      {description && (
        <p className={cn(
          "text-foreground/80 leading-relaxed mb-6 max-w-2xl",
          TitleComp === "h1" ? "text-lg sm:text-xl" : "text-base sm:text-lg"
        )}>
          {description}
        </p>
      )}

      {/* Optional Note */}
      {note && (
        <div
          className={cn(
            "flex items-center gap-2.5 text-sm text-foreground/70 mb-6",
            align === "right" && "justify-end",
            align === "center" && "justify-center"
          )}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-card shadow-xs ring-1 ring-border">
           <Icon icon={Clock} size="md" color="primary" />
          </span>
          <p>{note}</p>
        </div>
      )}

      {/* Children elements (forms, buttons, etc.) */}
      {children && <div className="w-full mt-2">{children}</div>}
    </div>
  )

  // Layout config per mode
  const layoutConfig = {
    hero:    "relative py-20 lg:py-28 overflow-hidden",
    section: "relative py-12 lg:py-16 overflow-hidden bg-card/50 border-y border-border/20",
    simple:  "relative w-full",
  }

  const Wrapper = variant === "simple" ? "div" : "section"

  return (
    <Wrapper className={cn(layoutConfig[variant], bgClassName, className)}>
      {variant !== "simple" && <HeaderDecorations layout={variant} align={align} />}
      <div className={cn(variant !== "simple" && "max-w-7xl mx-auto px-6 lg:px-8 relative")}>
        {headerContent}
      </div>
    </Wrapper>
  )
}