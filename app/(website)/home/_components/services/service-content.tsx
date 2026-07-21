import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ServiceContent() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
      <div className="flex-1 max-w-3xl space-y-4">
        <Badge variant="subtle" className="gap-2">
          <span className="size-2 rounded-full bg-brand-green" />
          Nos Services
        </Badge>

        <h2 className="home-title">
          Des solutions professionnelles pour{" "}
          <span className="text-gradient">
            l&apos;hygiène et la désinfection
          </span>
          .
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
