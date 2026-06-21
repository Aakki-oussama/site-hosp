import { ShieldCheck, Droplets, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export interface HeaderDecorationsProps {
  layout: "hero" | "section" | "simple"
  align: "left" | "center" | "right"
}

/**
 * Reusable component that renders background decorations, vertical lines,
 * concentric circles, animated floating elements, and dot grid overlays.
 * Can be used standalone or inside SectionHeader.
 */
export function HeaderDecorations({ layout, align }: HeaderDecorationsProps) {
  if (layout === "simple") return null

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Geometric lines (vertical lines) */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-border/80" />

      {layout === "hero" && (
        <>
          {/* Decorative circles top-right */}
          <div className="absolute -top-24 -right-24 size-96 rounded-full border border-brand-green/50" />
          <div className="absolute -top-12 -right-12 size-64 rounded-full border border-brand-green/40" />

          {/* Floating animated molecule — top-right */}
          <div className="absolute top-8 right-8 lg:top-12 lg:right-16 opacity-80">
            <div className="relative size-20 lg:size-24">
              <div className="absolute inset-3 rounded-full border border-primary/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Droplets className="size-7 lg:size-9 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Scattered small icons — right side decoration */}
          <div className="absolute top-1/3 right-1/4 opacity-80 hidden lg:block">
            <ShieldCheck className="size-10 text-brand-green" aria-hidden="true" />
          </div>
          <div className="absolute bottom-1/4 right-12 opacity-80 hidden lg:block">
            <Sparkles className="size-8 text-primary" aria-hidden="true" />
          </div>

          {/* Gradient blob bottom-left decorative accent */}
          <div className="absolute -bottom-16 -left-16 size-72 rounded-full bg-brand-green/15 blur-3xl" />
        </>
      )}

      {/* Dot grid pattern overlay */}
      <div
       className={cn(
        "dot-grid absolute top-0 w-1/2 h-full opacity-[0.5] hidden md:block",
        align === "center" ? "left-1/4" : "right-0"
         )}
            />
    </div>
  )
}
