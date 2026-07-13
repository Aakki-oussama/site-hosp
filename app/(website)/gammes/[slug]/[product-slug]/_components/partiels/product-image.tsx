import Image from "next/image"
import type { Product } from "@/data/product/product"

interface ProductImageProps {
  product: Product
}

export function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl bg-muted lg:max-w-none">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority
          className="object-cover"
        />
      </div>
    </div>
  )
}
