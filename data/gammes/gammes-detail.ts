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
  productCount: number
  usagePlaces: string[]
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const gammesDetails: GammeDetail[] = [
  {
    slug: "home",
    name: "Gamme Home",
    description: "Solutions d'hygiène professionnelles pour usage domestique intensif.",
    icon: Home,
    productCount: 3,
    usagePlaces: ["Résidence", "Hôtel", "Home"],
  },
  {
    slug: "medical",
    name: "Gamme Médical",
    description: "Désinfectants certifiés pour environnements médicaux et hospitaliers.",
    icon: Stethoscope,
    productCount: 4,
    usagePlaces: ["Hôpital", "Clinique", "Laboratoire"],
  },
  {
    slug: "aqua",
    name: "Gamme Aqua",
    description: "Traitement et purification de l'eau pour usage industriel et collectif.",
    icon: Droplets,
    productCount: 2,
    usagePlaces: ["Industrie", "Piscine", "Collectivité"],
  },
  {
    slug: "bio",
    name: "Gamme Bio",
    description: "Formules écologiques et biodégradables pour une hygiène responsable.",
    icon: Leaf,
    productCount: 3,
    usagePlaces: ["Restaurant", "Hôtel", "Résidence"],
  },
]