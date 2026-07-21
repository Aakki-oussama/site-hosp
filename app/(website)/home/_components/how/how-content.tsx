import { Badge } from "@/components/ui/badge"

export function HowContent() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="max-w-3xl space-y-4">
        <Badge variant="subtle" className="gap-2">
          <span className="size-2 rounded-full bg-brand-green" />
          Processus simplifié
        </Badge>

        <h2 className="home-title">
          Découvrez comment nous transformons vos besoins en{" "}
          <span className="text-gradient">
            4 étapes simples
          </span>
          .
        </h2>
      </div>
    </div>
  )
}