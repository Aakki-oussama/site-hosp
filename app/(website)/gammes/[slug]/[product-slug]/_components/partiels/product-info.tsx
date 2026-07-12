import type { LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/data/product/product"

interface ProductInfoProps {
  product: Product
  gammeName: string
  gammeIcon: LucideIcon
}

export function ProductInfo({ product, gammeName, gammeIcon: GammeIcon }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
          <GammeIcon className="size-4 text-primary" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {gammeName}
        </p>
      </div>

      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {product.name}
      </h1>

      <p className="text-base leading-relaxed text-foreground/80">
        {product.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="rounded-full border-primary/20 bg-primary/5 text-primary"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="border-t border-border pt-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-foreground">
          Description détaillée
        </h2>
        <p className="whitespace-pre-line text-base leading-relaxed text-foreground/80">
          {product.fullDescription}
        </p>
      </div>
    </div>
  )
}
