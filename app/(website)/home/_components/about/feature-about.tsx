import { Check } from "lucide-react"

const features = [
  "Produits certifiés répondant aux normes de qualité",
  "Solutions adaptées aux professionnels et particuliers",
  "Large gamme d'hygiène et de désinfection",
  "Livraison rapide partout au Maroc",
]

export function AboutFeatures() {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 md:gap-3">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-green text-brand-green-foreground md:size-5">
            <Check className="size-3" />
          </span>
          <span className="feature-item">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  )
}
