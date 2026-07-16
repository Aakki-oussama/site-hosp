import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ServiceContent() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
      <div className="flex-1 max-w-3xl space-y-4">
        <Badge
          variant="outline"
          className="w-fit rounded-full border-primary/15 bg-primary/5 px-3 py-1 md:px-3.5 md:py-1.5"
        >
          <span className="mr-2 flex size-2 shrink-0 rounded-full bg-brand-green" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary md:text-xs">
            Services
          </span>
        </Badge>

        <h2 className="font-heading text-2xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-[1.85rem] lg:text-[2.5rem] lg:leading-[1.15]">
          Des solutions professionnelles pour l&apos;hygiène et la désinfection.
        </h2>
      </div>

      <Button asChild size="lg" className="w-fit">
        <Link href="/services">
          Voir nos services
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  )
}
