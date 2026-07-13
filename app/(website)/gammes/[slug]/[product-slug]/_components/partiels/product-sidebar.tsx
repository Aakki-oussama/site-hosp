import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Product } from "@/data/product/product"

interface ProductSidebarProps {
  product: Product
}

export function ProductSidebar({ product }: ProductSidebarProps) {
  return (
    <aside className="flex flex-col gap-5">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Conditionnement
        </p>
        <div className="flex flex-wrap gap-2">
          {product.formats.map((format) => (
            <Badge
              key={format}
              variant="default"
              className="rounded-full px-3 py-1 text-sm font-semibold"
            >
              {format}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="bg-border" />

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Destinations d&apos;usage
        </p>
        <ul className="flex flex-col gap-2">
          {product.surface.map((s) => (
            <li key={s} className="flex items-start gap-2">
              <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <Separator className="bg-border" />

      {product.domaine?.length ? (
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Domaines d&apos;utilisation
          </p>
          <ul className="flex flex-col gap-2.5">
            {product.domaine.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-3.5 text-primary" />
                </div>
                <span className="text-sm text-foreground/80">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  )
}
