import { ShieldCheck } from "@/components/shared/icons"
import { Badge } from "@/components/ui/badge"
import { gammesDetails } from "@/data/gammes/gammes-detail"

interface CategoryHeaderProps {
  slug: string
}

export function CategoryHeader({ slug }: CategoryHeaderProps) {
  const gamme = gammesDetails.find((g) => g.slug === slug)

  if (!gamme) return null

  const GammeIcon = gamme.icon

  return (
    <div className="container-section pt-24 pb-10 lg:pt-38 lg:pb-14">

      {/* Eyebrow */}
      <Badge variant="subtle" className="mb-3 gap-2">
        <ShieldCheck aria-hidden="true" />
        Gamme Polaris industrie hosp
      </Badge>

      {/* Title + Icon */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <GammeIcon className="size-5 text-primary" />
        </div>
        <h1 className="feature-title">
          {gamme.title}{" "}
          {gamme.highlightedTitle && (
            <span className="text-gradient">
              {gamme.highlightedTitle}
            </span>
          )}
        </h1>
      </div>

      {/* Description */}
      <p className="text-base text-foreground/80 leading-relaxed max-w-2xl">
        {gamme.description}
      </p>

    </div>
  )
}