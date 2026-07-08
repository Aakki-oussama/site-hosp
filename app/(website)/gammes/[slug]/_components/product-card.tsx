import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Product } from "@/data/gammes/gammes-content"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/70 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Format badges overlay */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {product.formats.map((format) => (
            <Badge
              key={format}
              className="rounded-full bg-background/90 px-2.5 py-0.5 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur-sm"
              variant="outline"
            >
              {format}
            </Badge>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <CardHeader className="gap-2 px-5 pb-2 pt-4">
        <CardTitle className="text-base font-bold leading-snug text-foreground sm:text-[1.05rem]">
          {product.name}
        </CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </CardHeader>

      {/* Surface cible */}
      <CardContent className="flex-1 px-5 pb-3">
        <div className="flex flex-col gap-1.5 rounded-lg bg-primary/5 px-3 py-2">
          {product.surface.map((s) => (
            <div key={s} className="flex items-center gap-2">
              <Plus className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="text-xs leading-relaxed text-primary">{s}</span>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Card Footer — always at bottom */}
      <CardFooter className="px-5 pb-4 pt-3">
        <Button
          asChild
          variant="default"
          className="w-full gap-2"
          size="sm"
        >
          <Link href={`/gammes/${product.gammeSlug}/${product.slug}`}>
            Voir la fiche produit
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>

    </Card>
  )
}