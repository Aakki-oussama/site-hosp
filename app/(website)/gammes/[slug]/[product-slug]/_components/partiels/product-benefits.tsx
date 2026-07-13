import { Separator } from "@/components/ui/separator"
import type { Benefit } from "@/data/product/product"

interface ProductBenefitsProps {
  benefits: Benefit[]
}

export function ProductBenefits({ benefits }: ProductBenefitsProps) {
  if (!benefits || benefits.length === 0) return null

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        Points clés
      </p>

      <div className="flex flex-col lg:flex-row items-stretch rounded-2xl border border-border/70 bg-background overflow-hidden">
        {benefits.map(({ icon: Icon, label, description }, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-stretch flex-1">

            {/* Benefit Item */}
            <div className="flex items-center gap-3 px-4 py-5 flex-1">
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              {/* Title + Description */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {label}
                </p>
                {description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Separator : horizontal sur mobile, vertical sur desktop */}
            {index < benefits.length - 1 && (
              <>
                <Separator orientation="horizontal" className="lg:hidden" />
                <Separator orientation="vertical" className="hidden lg:block self-stretch h-auto" />
              </>
            )}

          </div>
        ))}
      </div>
    </div>
  )
}
