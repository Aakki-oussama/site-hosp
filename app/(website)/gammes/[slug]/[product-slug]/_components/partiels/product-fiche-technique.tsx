import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductFicheTechnique() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-muted/50 p-5 sm:flex-row sm:items-center sm:justify-between lg:p-6">
      <div className="flex items-start gap-4 sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <FileText className="size-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">
            Besoin de la fiche technique complète ?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Remplissez le formulaire
          </p>
        </div>
      </div>

      <Button asChild className="w-full shrink-0 gap-2 sm:w-auto">
        <Link href="/contact">
          Demander la fiche technique
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
