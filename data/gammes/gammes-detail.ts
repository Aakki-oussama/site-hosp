import { Home, Droplets, Stethoscope, type LucideIcon, Factory } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

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
    image: "/images/gamme/gamme-medical.webp",
  },
  {
    slug: "home",
    title: "Gamme",
    highlightedTitle: "Home",
    description: "Solutions d'hygiène professionnelles pour usage domestique intensif.",
    icon: Home,
    usagePlaces: ["Résidence", "Hôtel", "Home"],
    // TODO: replace with /images/gammes/home.webp
    image: "/images/gamme/gamme-home.webp",
  },
  /*{
    slug: "aqua",
    title: "Gamme",
    highlightedTitle: "Aqua",
    description: "Traitement et purification de l'eau pour usage industriel et collectif.",
    icon: Droplets,
    usagePlaces: ["Industrie", "Piscine", "Collectivité"],
    image: "/images/products/Sans-zo.webp",
  },*/
  {
    slug: "agroalimentaire",
    title: "Gamme",
    highlightedTitle: "Agroalimentaire",
    description: "Détergent et désinfectant professionnel pour le nettoyage des surfaces et équipements de l'industrie agro-alimentaire.",
    icon: Factory,
    usagePlaces: ["Industrie Agro-alimentaire"],
    image: "/images/gamme/Agroalimentaire-gamme.webp",
  },
]
