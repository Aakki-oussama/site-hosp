import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function AboutContent() {
  return (
    <RevealOnScroll direction="right">
    <div className="space-y-4 md:space-y-5">
      <Badge variant="subtle" className="gap-2">
        <span className="size-2 rounded-full bg-brand-green" />
        À propos
      </Badge>

      <h2 className="home-title">
        Votre partenaire de confiance en{" "}
        <span className="text-gradient">
          hygiène et désinfection
        </span>
        .
      </h2>

      <p className="section-description">
        Depuis plusieurs années, Polaris Industrie Hosp accompagne les
        professionnels et les particuliers avec une gamme de solutions
        performantes, fiables et certifiées pour répondre aux exigences
        d&apos;hygiène, de désinfection et de sécurité.
      </p>
    </div>
    </RevealOnScroll>
  )
}
