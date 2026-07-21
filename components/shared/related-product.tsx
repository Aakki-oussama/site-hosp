import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/product/product"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface RelatedProductsProps {
  currentSlug: string
  gammeSlug: string
}

export function RelatedProducts({ currentSlug, gammeSlug }: RelatedProductsProps) {
  const related = products.filter(
    (p) => p.gammeSlug === gammeSlug && p.slug !== currentSlug
  )

  if (related.length === 0) return null

  return (
    <section className="bg-muted border-t border-border py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-5 lg:px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Dans la même gamme
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Autres produits
            </h2>
          </div>

          {/* Back button */}
          <Link
            href={`/gammes`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline shrink-0"
          >
            Voir tous les gammes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>


        {/* Horizontal scroll strip */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 w-max">
            {related.map((product) => (
              <Link
                key={product.slug}
                href={`/gammes/${product.gammeSlug}/${product.slug}`}
                className="w-[260px] shrink-0 flex-none block"
              >
                <Card className="group h-full bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  {/* Image — negative margin to touch top edge of card */}
                  <div className="relative -mt-4 h-40 w-full overflow-hidden bg-muted rounded-t-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="260px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Format badge */}
                    <div className="absolute bottom-2 left-2">
                      <Badge
                        variant="outline"
                        className="rounded-full bg-background/90 text-[11px] font-semibold backdrop-blur-sm"
                      >
                        {product.formats[0]}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="flex flex-col gap-2 p-4">
                    <p className="font-heading text-sm font-bold text-foreground leading-snug line-clamp-2">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs font-medium text-primary">
                      Voir le produit
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </CardContent>

                </Card>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}