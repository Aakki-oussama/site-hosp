import { Badge } from "@/components/ui/badge"

export function AboutContent() {
  return (
    <div className="space-y-4 md:space-y-5">
      <Badge
        variant="outline"
        className="w-fit rounded-full border-primary/15 bg-primary/5 px-3 py-1 md:px-3.5 md:py-1.5"
      >
        <span className="mr-2 flex size-2 shrink-0 rounded-full bg-brand-green" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary md:text-xs">
          À propos
        </span>
      </Badge>

      <h2 className="font-heading text-2xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-3xl md:text-[1.85rem] lg:text-[2.5rem] lg:leading-[1.15]">
        Votre partenaire de confiance en hygiène et désinfection
      </h2>

      <p className=" text-sm leading-6 text-muted-foreground md:text-[15px] md:leading-7 lg:text-base lg:leading-7">
        Depuis plusieurs années, Polaris Industrie Hosp accompagne les
        professionnels et les particuliers avec une gamme de solutions
        performantes, fiables et certifiées pour répondre aux exigences
        d&apos;hygiène, de désinfection et de sécurité.
      </p>
    </div>
  )
}
