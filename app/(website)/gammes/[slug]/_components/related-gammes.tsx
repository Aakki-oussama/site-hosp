import { gammesDetails } from "@/data/gammes/gammes-detail"
import { GammeCard } from "@/app/(website)/gammes/_components/gamme-card"

interface RelatedGammesProps {
  currentSlug: string
}

export function RelatedGammes({ currentSlug }: RelatedGammesProps) {
  const related = gammesDetails.filter((g) => g.slug !== currentSlug)

  if (related.length === 0) return null

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-section">

        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          Découvrez aussi
        </p>
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8">
          Autres gammes
        </h2>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {related.map((gamme) => (
            <GammeCard
              key={gamme.slug}
              title={gamme.name}
              description={gamme.description}
              icon={gamme.icon}
              slug={gamme.slug}
              productCount={gamme.productCount}
              usagePlaces={gamme.usagePlaces}
            />
          ))}
        </div>

      </div>
    </section>
  )
}