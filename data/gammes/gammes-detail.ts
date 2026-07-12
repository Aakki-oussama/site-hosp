import { Home, Droplets, Leaf, Stethoscope, type LucideIcon } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

// TODO: Actuellement inutilisé. Sera utilisé dans le futur pour associer des icônes aux lieux d'utilisation (usagePlaces).
export type UsagePlace = {
  label: string
  icon: LucideIcon
}


export type GammeDetail = {
  slug: string
  name: string
  description: string
  icon: LucideIcon
  usagePlaces: string[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const gammesDetails: GammeDetail[] = [
  {
    slug: "medical",
    name: "Gamme Médical",
    description: "Désinfectants certifiés pour environnements médicaux et hospitaliers.",
    icon: Stethoscope,
    usagePlaces: ["Hôpital", "Clinique", "Laboratoire"],
  },
  {
    slug: "home",
    name: "Gamme Home",
    description: "Solutions d'hygiène professionnelles pour usage domestique intensif.",
    icon: Home,
    usagePlaces: ["Résidence", "Hôtel", "Home"],
  },
  {
    slug: "aqua",
    name: "Gamme Aqua",
    description: "Traitement et purification de l'eau pour usage industriel et collectif.",
    icon: Droplets,
    usagePlaces: ["Industrie", "Piscine", "Collectivité"],
  },
  {
    slug: "bio",
    name: "Gamme Bio",
    description: "Formules écologiques et biodégradables pour une hygiène responsable.",
    icon: Leaf,
    usagePlaces: ["Restaurant", "Hôtel", "Résidence"],
  },
]