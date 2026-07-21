import { Home, Droplets, Leaf, Stethoscope, type LucideIcon } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

// TODO: Actuellement inutilisé. Sera utilisé dans le futur pour associer des icônes aux lieux d'utilisation (usagePlaces).
export type UsagePlace = {
  label: string
  icon: LucideIcon
}

export type GammeDetail = {
  slug: string
  title: string
  highlightedTitle?: string
  description: string
  icon: LucideIcon
  usagePlaces: string[]
  /** Cover image for home / marketing cards — path under /public */
  image: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const gammesDetails: GammeDetail[] = [
  {
    slug: "medical",
    title: "Gamme",
    highlightedTitle: "Médical",
    description: "Désinfectants certifiés pour environnements médicaux et hospitaliers.",
    icon: Stethoscope,
    usagePlaces: ["Hôpital", "Clinique", "Laboratoires"],
    image: "/images/gamme/medical-1.webp",
  },
  {
    slug: "home",
    title: "Gamme",
    highlightedTitle: "Home",
    description: "Solutions d'hygiène professionnelles pour usage domestique intensif.",
    icon: Home,
    usagePlaces: ["Résidence", "Hôtel", "Home"],
    // TODO: replace with /images/gammes/home.webp
    image: "/images/products/Megasept-sa.webp",
  },
  {
    slug: "aqua",
    title: "Gamme",
    highlightedTitle: "Aqua",
    description: "Traitement et purification de l'eau pour usage industriel et collectif.",
    icon: Droplets,
    usagePlaces: ["Industrie", "Piscine", "Collectivité"],
    // TODO: replace with /images/gammes/aqua.webp
    image: "/images/products/Sans-zo.webp",
  },
  {
    slug: "bio",
    title: "Gamme",
    highlightedTitle: "Bio",
    description: "Formules écologiques et biodégradables pour une hygiène responsable.",
    icon: Leaf,
    usagePlaces: ["Restaurant", "Hôtel", "Résidence"],
    // TODO: replace with /images/gammes/bio.webp
    image: "/images/products/Megasept-sdc.webp",
  },
]
