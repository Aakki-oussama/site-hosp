import {
  Droplets, Leaf, FlaskConical, ShieldCheck,
  Microscope, Award, Sprout,
  Beaker, Settings, ClipboardCheck, PackageCheck,
  BookOpen, Tag, Headphones,
  Truck, MapPin, Clock,
  Building2, Hotel, Factory, UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export type Feature = {
  icon: LucideIcon
  label: string
  description: string
}

export type Step = {
  number: string
  title: string
  description: string
}

export type Client = {
  icon: LucideIcon
  label: string
}

// ─── Nettoyage ────────────────────────────────────────────────────────────────

export const nettoyageFeatures: Feature[] = [
  { icon: Droplets, label: "Formules concentrées", description: "Rendement optimal pour un coût maîtrisé" },
  { icon: Leaf, label: "Éco-responsable", description: "Formules biodégradables respectueuses de l'environnement" },
  { icon: FlaskConical, label: "Haute efficacité", description: "Résultats prouvés sur toutes surfaces professionnelles" },
  { icon: ShieldCheck, label: "Sécurité professionnelle", description: "Produits conformes aux normes de sécurité en vigueur" },
]

export const nettoyageSteps: Step[] = [
  { number: "01", title: "Évaluation", description: "Analyse de vos surfaces et besoins spécifiques" },
  { number: "02", title: "Sélection", description: "Choix du produit le plus adapté à votre environnement" },
  { number: "03", title: "Application", description: "Protocole d'utilisation fourni avec chaque produit" },
  { number: "04", title: "Résultat", description: "Vérification de l'efficacité sur vos surfaces" },
]

// ─── Désinfection ─────────────────────────────────────────────────────────────

export const desinfectionFeatures: Feature[] = [
  { icon: ShieldCheck, label: "Certifiés EN/NF", description: "Conformes aux normes européennes de désinfection" },
  { icon: Microscope, label: "Large spectre", description: "Contre bactéries, virus et champignons" },
  { icon: Award, label: "Usage médical", description: "Adapté aux établissements de santé et industriels" },
  { icon: Sprout, label: "Biosourcés", description: "Formules respectueuses de l'environnement" },
]

export const desinfectionSteps: Step[] = [
  { number: "01", title: "Nettoyage", description: "Élimination des salissures visibles" },
  { number: "02", title: "Application", description: "Pulvérisation du désinfectant" },
  { number: "03", title: "Contact", description: "Respect du temps de contact" },
  { number: "04", title: "Protection", description: "Surface assainie durablement" },
]

// ─── Conception & Production ──────────────────────────────────────────────────

export const conceptionFeatures: Feature[] = [
  { icon: Beaker, label: "Formulation maison", description: "Formules développées en interne par nos experts" },
  { icon: Settings, label: "Production certifiée", description: "Fabrication selon les normes EN/NF en vigueur" },
  { icon: ClipboardCheck, label: "Contrôle qualité", description: "Chaque lot testé et validé avant expédition" },
  { icon: PackageCheck, label: "Conditionnement pro", description: "Emballages adaptés aux usages professionnels intensifs" },
]

export const conceptionSteps: Step[] = [
  { number: "01", title: "R&D", description: "Développement de nouvelles formules en laboratoire" },
  { number: "02", title: "Production", description: "Fabrication en conditions contrôlées et certifiées" },
  { number: "03", title: "Contrôle", description: "Tests qualité rigoureux sur chaque lot" },
  { number: "04", title: "Conditionnement", description: "Mise en flacon, étiquetage et préparation à l'expédition" },
]

// ─── Vente & Distribution ─────────────────────────────────────────────────────

export const venteFeatures: Feature[] = [
  { icon: BookOpen, label: "Catalogue complet", description: "Gamme de produits d'hygiène et désinfection professionnelle" },
  { icon: Tag, label: "Tarifs professionnels", description: "Prix adaptés selon volumes et fréquence de commande" },
  { icon: Headphones, label: "Accompagnement dédié", description: "Conseil personnalisé pour choisir les bons produits" },
  { icon: Truck, label: "Livraison incluse", description: "Expédition sur tout le territoire marocain" },
]

export const venteSteps: Step[] = [
  { number: "01", title: "Consultation", description: "Échange pour identifier vos besoins en hygiène" },
  { number: "02", title: "Devis", description: "Proposition tarifaire personnalisée sous 24h" },
  { number: "03", title: "Commande", description: "Validation et traitement de votre commande" },
  { number: "04", title: "Suivi", description: "Accompagnement continu et réapprovisionnement facilité" },
]

// ─── Livraison & Logistique ───────────────────────────────────────────────────

export const livraisonFeatures: Feature[] = [
  { icon: Truck, label: "Livraison fiable", description: "Expédition selon les délais convenus" },
  { icon: MapPin, label: "Partout au Maroc", description: "Livraison sur tout le territoire marocain" },
  { icon: PackageCheck, label: "Contrôle qualité", description: "Chaque commande vérifiée avant expédition" },
  { icon: Clock, label: "Suivi de commande", description: "Transparence à chaque étape de la livraison" },
]

export const livraisonSteps: Step[] = [
  { number: "01", title: "Confirmation", description: "Validation et préparation de commande" },
  { number: "02", title: "Conformité", description: "Contrôle qualité avant expédition" },
  { number: "03", title: "Expédition", description: "Délai convenu selon votre commande" },
  { number: "04", title: "Livraison", description: "Livraison directement chez vous" },

]

// ─── Clients ──────────────────────────────────────────────────────────────────

export const clients: Client[] = [
  { icon: Building2, label: "Hôpitaux & Cliniques" },
  { icon: Hotel, label: "Hôtels & Résidences" },
  { icon: Factory, label: "Industries & Usines" },
  { icon: UtensilsCrossed, label: "Restaurants & Collectivités" },
]