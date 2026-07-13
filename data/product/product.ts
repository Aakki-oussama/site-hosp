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
  Droplet,
  ShieldPlus,
  Hospital,
  HandCoins,
  HandHelping,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export type Benefit = {
  icon: LucideIcon
  label: string
  description: string
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
      { icon: Droplets, label: "Nettoie efficacement", description: "Élimine salissures et graisses du quotidien en un seul passage." },
      { icon: FlaskConical, label: "Dégraisse en profondeur", description: "Formule concentrée qui attaque les dépôts tenaces sans abîmer les surfaces." },
      { icon: Building2, label: "Sans laisser de traces", description: "Finition propre et brillante sur toutes les surfaces lisses." },
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
    fullDescription: "Megasept SDC est un savon liquide professionnel destiné au lavage simple des mains eu milieu hospitalier, médical, paramédical, laboratoire, collectivité et industrie.\nSa formule à base de Cocamidopropyl Betaine, surfactif amphotére doux, associée au Sodium Lauret Sulfate, assure un nettoyage efficace, une mousse agréable et un rinçage facile, tout en respectant la peau lors des utilisation fréquentes.",
    image: "/images/products/Megasept-sdc.webp",
    gammeSlug: "medical",
    tags: ["Non-parfumé", "Usage fréquent", "Main sensible", "Usage professionnel"],
    formats: ["500ml", "5L"],
    surface: ["Mains", "Avant-bras"],
    benefits: [
      { icon: Droplets, label: "Nettoie efficacement", description: "" },
      { icon: FlaskConical, label: "Respecte la peau", description: "" },
      { icon: HandCoins, label: "Rinçage facile", description: "" },

    ],
    domaine: [
      { icon: Hospital , label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
      { icon: Users, label: "Collectivités" },
      { icon: Factory, label: "Industrie Agroalimentaire" },
    ],
  },
  {
    id: "med-2",
    slug: "Megasept-Sa",
    name: "Megasept-Sa",
    shortDescription: "Savon antiseptique à large spectre à base de dérivé biguanide en solution à action bactéricide, virucide et fongicide.",
    fullDescription: "MEGASEPT SA et un savon antiseptique hydrosoluble pour le traitement hygiénique et chirurgical des main et avant-bras par lavage en milieu hospitalier, médical, paramédical, laboratoire et agroalimentaire. \nSa formule à base de dérivé biguanide maintient l'hydratation de la peau et évite l'élimanation des acides gras constitutifs.Solution moussante à large spectre.",
    image: "/images/products/Megasept-sa.webp",
    gammeSlug: "medical",
    tags: ["Usage fréquent", "Usage professionnel", "Non parfumé", "Sans colorant"],
    formats: ["750ml", "5L"],
    surface: ["Mains", "Avant-bras"],
    benefits: [
      { icon: ShieldPlus, label: "ACTION BACTERICIDE", description: "Elimne efficacement les bactéries" },
      { icon: ShieldPlus, label: "ACTION VIRUCIDE", description: "Actif sur les virus enveloppés." },
      { icon: ShieldPlus, label: "ACTION LEVURICIDE", description: "Actif sur les levures et moisissures." },
      { icon: HandCoins, label: "DOUX POUR LA PEAU", description: "Recpecter l'équilibre cutané." },
      { icon: ShieldPlus, label: "USAGE MEDICAL", description: "Formule adaptée au milieu médical." },
    ],
    domaine: [
      { icon: Hospital , label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
      { icon: Users, label: "Collectivités" },
      { icon: Factory, label: "Industrie Agroalimentaire" },
    ],
  },

  {
    id: "med-3",
    slug: "Sans-Zo",
    name: "Sans-Zo",
    shortDescription: "Gel Sans-zo destiné à la désinfection de mains par frctions.",
    fullDescription: "Gel HYDROALCOOLIQUE à base d'alcool éthylique au alcool propylique ou alccol isopropylique à une concentration entre 60% et 80% ou entre 550 et 700 mg/g. \nSans odeur ni parfum, contenant un agent hydratant.A action BACTERICIDE et LEVURICIDE.",
    image: "/images/products/Sans-Zo.webp",
    gammeSlug: "medical",
    tags: ["Usage fréquent", "Usage professionnel"],
    formats: ["750ml", "5L"],
    surface: ["Mains", "Avant-bras"],
    benefits: [
      { icon: ShieldPlus, label: "ACTION BACTERICIDE", description: "Elimne efficacement les bactéries" },
      { icon: ShieldPlus, label: "ACTION VIRUCIDE", description: "Actif sur les virus enveloppés." },
      { icon: ShieldPlus, label: "ACTION LEVURICIDE", description: "Actif sur les levures et moisissures." },
      { icon: Droplet, label: "SANS EAU", description: "Ne nécessite ni eau ni rinçage." },
      { icon: HandHelping, label: "SECHAGE RAPIDE", description: "Sans rinçage, utilisation rapide." },
      { icon: ShieldPlus, label: "USAGE MEDICAL", description: "Formule adaptée au milieu médical." },
    ],
    domaine: [
      { icon: Hospital , label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
      { icon: Users, label: "Collectivités" },
      { icon: Factory, label: "Industrie Agroalimentaire" },
    ],
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
      { icon: Droplets, label: "Action rapide", description: "Traitement choc efficace en quelques heures, même en cas de forte contamination." },
      { icon: FlaskConical, label: "Élimine algues et bactéries", description: "Spectre large contre les micro-organismes et les proliférations algales." },
      { icon: Building2, label: "Facile à doser", description: "Pastilles pré-dosées pour un traitement précis sans erreur de mesure." },
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
      { icon: Droplets, label: "Dégraisse en profondeur", description: "Actifs biosourcés puissants qui décollent les graisses cuites sans récurer." },
      { icon: FlaskConical, label: "100% biodégradable", description: "Formule à dégradation rapide respectueuse des écosystèmes aquatiques." },
      { icon: Building2, label: "Respecte les surfaces", description: "Compatible inox, émail, vitrocéramique et revêtements alimentaires." },
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