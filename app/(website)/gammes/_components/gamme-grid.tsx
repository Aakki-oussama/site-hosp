import { GammeCard } from "./gamme-card"
import { gammesDetails } from "@/data/gammes/gammes-detail"
import { products } from "@/data/product/product"

interface GammeGridProps {
  selected: string
}

export function GammeGrid({ selected }: GammeGridProps) {
  const filteredGammes =
    selected === "tous"
      ? gammesDetails
      : gammesDetails.filter((gamme) => gamme.slug === selected)

  return (
    <section className="w-full bg-muted py-8 lg:py-12">
      <div className="container-section">
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {filteredGammes.map((gamme) => (
          <GammeCard
            key={gamme.slug}
            title={gamme.name}
            description={gamme.description}
            icon={gamme.icon}
            slug={gamme.slug}
            productCount={products.filter((p) => p.gammeSlug === gamme.slug).length}
            usagePlaces={gamme.usagePlaces}
          />
        ))}
        </div>
      </div>
    </section>
  )
}
