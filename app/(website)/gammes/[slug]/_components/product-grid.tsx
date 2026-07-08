import { products } from "@/data/gammes/gammes-content"
import { ProductCard } from "./product-card"

interface ProductGridProps {
  slug: string
}

export function ProductGrid({ slug }: ProductGridProps) {
  const gammeProducts = products.filter((p) => p.gammeSlug === slug)

  if (gammeProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-base text-muted-foreground">
          Aucun produit disponible pour cette gamme pour le moment.
        </p>
      </div>
    )
  }

  return (
    <section className="w-full bg-muted py-8 lg:py-12">
      <div className="container-section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gammeProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              priority={index === 0}
              />
          ))}
        </div>
      </div>
    </section>
  )
}
