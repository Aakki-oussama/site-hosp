import { type LucideIcon } from "lucide-react"
import { Phone, FileText, Truck, Headphones } from "lucide-react"

export interface Etape {
  id: string
  numero: string
  titre: string
  icone: LucideIcon
  description: string
}

export const etapes: Etape[] = [
  {
    id: "consultation",
    numero: "01",
    titre: "Consultation",
    icone: Phone,
    description: "Contactez-nous par téléphone, email ou via le formulaire. Un expert vous écoute et analyse vos besoins."
  },
  {
    id: "devis",
    numero: "02",
    titre: "Devis personnalisé",
    icone: FileText,
    description: "Nous élaborons un devis détaillé et gratuit, adapté à vos volumes et contraintes. Transparence totale."
  },
  {
    id: "livraison",
    numero: "03",
    titre: "Livraison",
    icone: Truck,
    description: "Vos produits sont préparés avec soin et livrés rapidement, avec un accompagnement professionnel adapté à vos besoins."
  },
  {
    id: "suivi",
    numero: "04",
    titre: "Suivi & Support",
    icone: Headphones,
    description: "Notre équipe reste à votre disposition pour le suivi, réapprovisionnements et questions techniques."
  }
]