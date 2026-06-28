import { type LucideIcon } from "lucide-react"
import { ShieldCheck, Sparkles, HeartHandshake, Leaf } from "@/components/shared/icons"

export interface Valeur {
  id: string
  numero: string
  titre: string
  icone: LucideIcon
  description: string
}

export const valeurs: Valeur[] = [
  {
    id: "qualite",
    numero: "01",
    titre: "Qualité",
    icone: ShieldCheck,
    description: "Produits certifiés selon les normes internationales (EN/NF), testés rigoureusement pour une efficacité optimale.",
  },
  {
    id: "innovation",
    numero: "02",
    titre: "Innovation",
    icone: Sparkles,
    description: "Recherche continue pour des solutions d'hygiène toujours plus performantes et adaptées à vos besoins.",
  },
  {
    id: "confiance",
    numero: "03",
    titre: "Confiance",
    icone: HeartHandshake,
    description: "Partenaire des professionnels depuis plus de 10 ans, engagé dans une relation durable et transparente.",
  },
  {
    id: "durabilite",
    numero: "04",
    titre: "Durabilité",
    icone: Leaf,
    description: "Engagement pour des produits respectueux de l'environnement et d'une production responsable.",
  },
]