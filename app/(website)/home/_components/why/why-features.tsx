import { Check } from "lucide-react"

const features = [
  "Fabricant marocain certifié EN/NF",
  "Produits testés et validés avant livraison",
  "Gamme complète hygiène & désinfection professionnelle",
  "Accompagnement personnalisé pour chaque client",
]

export function WhyUsFeatures() {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2">
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
