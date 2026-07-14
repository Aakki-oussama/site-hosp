import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroCta() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild size="lg" className="gap-2">
        <Link href="/gammes">
          Découvrir nos gammes
          <ArrowRight className="size-4" />
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="gap-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
      >
        <Link href="/contact">
          <Phone className="size-4" />
          Nous contacter
        </Link>
      </Button>
    </div>
  )
}