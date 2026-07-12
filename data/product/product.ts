import type { LucideIcon } from "lucide-react"
import {
  Building2,
  FlaskConical,
  Hotel,
  UtensilsCrossed,
  Factory,
  Users,
  Stethoscope,
  Droplets,
  Hospital,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export type Benefit = {
  icon: LucideIcon
  label: string
}

export type Domaine = {
  icon: LucideIcon
  label: string
}

export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription?: string  // Optionnel pour les produits de base
  image: string             // Image principale (fiche produit)
  cardImage?: string        // Optionnel : Image spécifique pour la carte de la gamme
  gammeSlug: string
  tags: string[]
  formats: string[]
  surface: string[]
  benefits?: Benefit[]      // Optionnel pour les produits de base
  domaine?: Domaine[]       // Optionnel pour les produits de base
}

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [

  // ─── Gamme Home ─────────────────────────────────────────────────────────────
  {
    id: "home-1",
    slug: "nettoyant-multi-surfaces",
    name: "Nettoyant Multi-surfaces",
    shortDescription: "Nettoie, dégraisse et fait briller toutes les surfaces sans laisser de traces.",
    fullDescription:
      "Le Nettoyant Multi-surfaces Polaris est une solution polyvalente conçue pour nettoyer et dégraisser efficacement toutes les surfaces lavables. Sa formule avancée élimine les salissures tenaces tout en laissant un film protecteur brillant. Idéal pour un usage intensif en milieu professionnel ou domestique.",
    image: "/images/products/nettoyant-multi-surfaces.webp",
    // cardImage: optionnel, utilisera automatiquement "image" par défaut
    gammeSlug: "home",
    tags: ["Toutes surfaces", "Sans rinçage", "Parfumé"],
    formats: ["750ml", "1L", "5L"],
    surface: ["Plans de travail", "Tables", "Appareils électroménagers"],
    benefits: [
      { icon: Droplets, label: "Nettoie efficacement" },
      { icon: FlaskConical, label: "Dégraisse en profondeur" },
      { icon: Building2, label: "Sans laisser de traces" },
    ],
    domaine: [
      { icon: Building2, label: "Résidences" },
      { icon: Hotel, label: "Hôtels" },
      { icon: UtensilsCrossed, label: "Restauration" },
    ],
  },
  {
    id: "home-2",
    slug: "liquide-vaisselle-concentre",
    name: "Liquide Vaisselle Concentré",
    shortDescription: "Formule ultra-dégraissante douce pour les mains avec une agréable odeur de citron.",
    image: "/images/services/livraison.webp",
    gammeSlug: "home",
    tags: ["Dégraissant", "Formule douce", "Vaisselle"],
    formats: ["500ml", "1L", "5L"],
    surface: ["Vaisselle", "Couverts", "Ustensiles de cuisine"],
  },
  {
    id: "home-3",
    slug: "nettoyant-sols-brillance",
    name: "Nettoyant Sols Brillance",
    shortDescription: "Idéal pour le carrelage, le marbre et les parquets. Laisse un parfum frais longue durée.",
    image: "/images/services/livraison.webp",
    gammeSlug: "home",
    tags: ["Brillance", "Parfumé", "Tous sols"],
    formats: ["1L", "5L"],
    surface: ["Carrelages", "Marbres", "Parquets", "Sols plastiques"],
  },

  // ─── Gamme Médical ──────────────────────────────────────────────────────────
  {
    id: "med-1",
    slug: "megasept-sdc",
    name: "Megasept SDC",
    shortDescription: "Savon liquide à base de surfactifs amphotères pour lavage simple des mains.",
    fullDescription:
      "Megasept SDC est un savon liquide professionnel destiné au lavage simple des mains eu milieu hospitalier, médical, paramédical, laboratoire, collectivité et industrie.\nSa formule à base de Cocamidopropyl Betaine, surfactif amphotére doux, associée au Sodium Lauret Sulfate, assure un nettoyage efficace, une mousse agréable et un rinçage facile, tout en respectant la peau lors des utilisation fréquentes.",
    image: "/images/products/megasept-sd.webp",
    gammeSlug: "medical",
    tags: ["Non-parfumé", "Usage fréquent", "Main sensible", "Usage professionnel"],
    formats: ["500ml", "1L", "5L"],
    surface: ["Mains", "Friction cutanée hygiénique"],
    benefits: [
      { icon: Droplets, label: "Nettoie efficacement" },
      { icon: FlaskConical, label: "Respecte la peau" },
      { icon: Building2, label: "Rinçage facile" },
    ],
    domaine: [
      { icon: Hospital , label: "Hôpitaux et Cliniques" },
      { icon: Factory, label: "Industrie Agroalimentaire" },
      { icon: Users, label: "Collectivités" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
    ],
  },
  {
    id: "med-2",
    slug: "spray-desinfectant-surfaces",
    name: "Spray Désinfectant Surfaces",
    shortDescription: "Désinfectant à action rapide pour les dispositifs médicaux non invasifs et surfaces.",
    image: "/images/services/livraison.webp",
    gammeSlug: "medical",
    tags: ["Désinfection", "Action rapide", "Médical"],
    formats: ["750ml", "1L", "5L"],
    surface: ["Mobilier médical", "Lits d'examen", "Plans de travail", "Surfaces inox"],
  },
  {
    id: "med-3",
    slug: "detergent-pre-desinfection",
    name: "Détergent Pré-désinfection",
    shortDescription: "Nettoyage et pré-désinfection de l'instrumentation médico-chirurgicale par trempage.",
    image: "/images/services/livraison.webp",
    gammeSlug: "medical",
    tags: ["Décontamination", "Instrumentation", "Trempage"],
    formats: ["1L", "5L"],
    surface: ["Instruments médico-chirurgicaux", "Matériel d'endoscopie"],
  },


  // ─── Gamme Aqua ─────────────────────────────────────────────────────────────
  {
    id: "aqua-1",
    slug: "chlore-choc-pastilles",
    name: "Chlore Choc en Pastilles",
    shortDescription: "Désinfection rapide de l'eau de piscine et traitement choc contre les algues.",
    fullDescription:
      "Le Chlore Choc en Pastilles Polaris est un traitement intensif pour la désinfection rapide de l'eau de piscine. Sa formule concentrée élimine efficacement les bactéries, virus et algues en quelques heures. Idéal pour les remises en service, les fortes chaleurs ou les situations de contamination.",
    image: "/images/products/chlore-choc.webp",
    gammeSlug: "aqua",
    tags: ["Action rapide", "Anti-algues", "Usage piscine"],
    formats: ["1kg", "5kg", "25kg"],
    surface: ["Eau de piscine", "Parois des bassins"],
    benefits: [
      { icon: Droplets, label: "Action rapide" },
      { icon: FlaskConical, label: "Élimine algues et bactéries" },
      { icon: Building2, label: "Facile à doser" },
    ],
    domaine: [
      { icon: Building2, label: "Piscines publiques" },
      { icon: Hotel, label: "Hôtels & Résidences" },
      { icon: Users, label: "Collectivités" },
    ],
  },
  {
    id: "aqua-2",
    slug: "alguicide-liquide-concentre",
    name: "Alguicide Concentré",
    shortDescription: "Prévient et élimine la formation des algues dans les bassins et réseaux d'eau.",
    image: "/images/services/livraison.webp",
    gammeSlug: "aqua",
    tags: ["Anti-algues", "Traitement eau", "Concentré"],
    formats: ["1L", "5L", "20L"],
    surface: ["Canalisations", "Parois de bassins", "Systèmes de filtration"],
  },
  {
    id: "aqua-3",
    slug: "regulateur-ph-moins",
    name: "Régulateur pH Moins",
    shortDescription: "Permet de baisser et de stabiliser le pH de l'eau pour un confort de baignade optimal.",
    image: "/images/services/livraison.webp",
    gammeSlug: "aqua",
    tags: ["Équilibre eau", "Régulation pH", "Sécurité eau"],
    formats: ["1L", "5L", "25kg"],
    surface: ["Eau de piscine (ajustement de pH)"],
  },

  // ─── Gamme Bio ──────────────────────────────────────────────────────────────
  {
    id: "bio-1",
    slug: "degraissant-ecologique",
    name: "Dégraissant Écologique",
    shortDescription: "Dégraissant puissant à base d'ingrédients biosourcés pour cuisines et industries.",
    fullDescription:
      "Le Dégraissant Écologique Polaris est formulé à partir d'ingrédients biosourcés pour offrir une performance de dégraissage optimale tout en respectant l'environnement. Sa formule biodégradable est sans danger pour les surfaces traitées et les utilisateurs. Certifié éco-responsable, il convient aux cuisines professionnelles, aux industries agroalimentaires et aux collectivités soucieuses de leur impact environnemental.",
    image: "/images/products/degraissant-eco.webp",
    gammeSlug: "bio",
    tags: ["Biosourcé", "Biodégradable", "Certifié éco"],
    formats: ["750ml", "5L"],
    surface: ["Fours", "Plaques", "Hottes", "Inox"],
    benefits: [
      { icon: Droplets, label: "Dégraisse en profondeur" },
      { icon: FlaskConical, label: "100% biodégradable" },
      { icon: Building2, label: "Respecte les surfaces" },
    ],
    domaine: [
      { icon: UtensilsCrossed, label: "Restauration" },
      { icon: Factory, label: "Industrie agroalimentaire" },
      { icon: Users, label: "Collectivités" },
      { icon: Hotel, label: "Hôtellerie" },
    ],
  },
  {
    id: "bio-2",
    slug: "savon-mains-vegetal",
    name: "Savon Mains Végétal",
    shortDescription: "Savon doux pour le lavage fréquent des mains à base de glycérine végétale bio.",
    image: "/images/services/livraison.webp",
    gammeSlug: "bio",
    tags: ["Végétal", "Doux pour la peau", "Écologique"],
    formats: ["500ml", "5L"],
    surface: ["Mains (usage fréquent professionnel)"],
  },
  {
    id: "bio-3",
    slug: "nettoyant-vitres-bio",
    name: "Nettoyant Vitres Éco",
    shortDescription: "Formule biodégradable qui nettoie efficacement les vitres et surfaces modernes.",
    image: "/images/services/livraison.webp",
    gammeSlug: "bio",
    tags: ["Anti-traces", "Formule éco", "Séchage rapide"],
    formats: ["750ml", "5L"],
    surface: ["Vitres", "Miroirs", "Surfaces vitrées", "Écrans"],
  },
]