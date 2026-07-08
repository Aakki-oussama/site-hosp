import { gammesDetails } from "@/data/gammes/gammes-detail"

interface CategoryHeaderProps {
  slug: string
}

export function CategoryHeader({ slug }: CategoryHeaderProps) {
  const gamme = gammesDetails.find((g) => g.slug === slug)

  if (!gamme) return null

  const GammeIcon = gamme.icon

  return (
    <div className="container-section py-10 lg:py-14">

      {/* Eyebrow */}
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground mb-3">
        Gamme Polaris industrie hosp
      </p>

      {/* Title + Icon */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <GammeIcon className="size-5 text-primary" />
        </div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {gamme.name}
        </h1>
      </div>

      {/* Description */}
      <p className="text-base text-foreground/80 leading-relaxed max-w-2xl">
        {gamme.description}
      </p>

    </div>
  )
}