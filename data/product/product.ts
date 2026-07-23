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
  SprayCan,
  Utensils,
  Sparkles,
  Shield,
  ShieldCheck,
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
      { icon: Hospital, label: "Hôpitaux et Cliniques" },
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
      { icon: Hospital, label: "Hôpitaux et Cliniques" },
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
      { icon: Hospital, label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
      { icon: Users, label: "Collectivités" },
      { icon: Factory, label: "Industrie Agroalimentaire" },
    ],
  },

  {
    id: "med-4",
    slug: "Polasteril",
    name: "Polasteril",
    shortDescription: "Désinfectant thermochimique à triple action pour générateurs de dialyse.",
    fullDescription: "Désinfectant thermochimique des générateurs de dialyse POLASTERIL est un produit de triples actions des générateurs de dialyse. Il peut jouer le rôle d'un détaratant pour éliminer le carbonate de calcium et de magnésium.",
    image: "/images/products/Polasteril.webp",
    gammeSlug: "medical",
    tags: ["Désinfectant", "Detartant", "Nettoyant", "Usage professionnel"],
    formats: ["750ml", "5L"],
    surface: ["Surface", "Générateurs de dialyse"],
    benefits: [
      { icon: ShieldPlus, label: "USAGE DIALYSEE", description: "Conçu pour la désinfection des générateurs de dialyse" },
      { icon: ShieldPlus, label: "ACTION DÉTARTRANTE", description: "Élimine les dépôts de carbonate de calcium et de magnésium." },
      { icon: ShieldPlus, label: "TRIPLE ACTION", description: "Désinfecte et élimine les dépôts minéraux." },
    ],
    domaine: [
      { icon: Hospital, label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
      { icon: Users, label: "Collectivités" },
    ],
  },

  {
    id: "med-5",
    slug: "Poloxyd-2.5",
    name: "Poloxyd-2.5",
    shortDescription: "Désinfectant à froid pour générateurs d'hémodialyse et dispositifs de traitement d'eau.",
    fullDescription: "Désinfectant à froid prêt à l'emploi pour désinfection et détartrage des générateurs d'hémodialyse et dispositif de traitement d'eau.",
    image: "/images/products/Poloxyd-2.5.webp",
    gammeSlug: "medical",
    tags: ["Désinfectant", "Détartrant", "Usage professionnel"],
    formats: ["10L", "5L"],
    surface: ["Générateurs d'hémodialyse", "Dispositifs de traitement d'eau"],
    benefits: [
      { icon: ShieldPlus, label: "PRÊT À L'EMPLOI", description: "Solution prête à l'emploi pour une utilisation pratique." },
      { icon: ShieldPlus, label: "ACTION DÉTARTRANTE", description: "Permet le détartrage des générateurs d'hémodialyse." },
      { icon: ShieldPlus, label: "DÉSINFECTION", description: "Destiné à la désinfection des générateurs d'hémodialyse." },
    ],
    domaine: [
      { icon: Hospital, label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Stethoscope, label: "Cabinets Médicaux" },
    ],
  },

  {
    id: "med-6",
    slug: "Paragen-2",
    name: "Paragen-2%",
    shortDescription: "Nettoyant et désinfectant pour surfaces et équipements en milieu médical et agro-alimentaire.",
    fullDescription: "Produit nettoyant et désinfectant des surfaces, des équipements des générateyr d'hémodialyse. Il s'utilise aussi dans les hôpitaux, les cliniques et dans l'industrie agro-alimentaire pour la désinfection de surfaces et des équipements.",
    image: "/images/products/Paragen-2.webp",
    gammeSlug: "medical",
    tags: ["Nettoyant", "Désinfectant", "Usage professionnel"],
    formats: ["750ml", "5L"],
    surface: [
      "Surfaces",
      "Équipements",
      "Générateurs d'hémodialyse"
    ],
    benefits: [
      { icon: ShieldPlus, label: "NETTOYANT & DÉSINFECTANT", description: "Nettoie et désinfecte les surfaces et les équipements." },
      { icon: Hospital, label: "USAGE MÉDICAL", description: "Adapté aux hôpitaux, cliniques et générateurs d'hémodialyse." },
      { icon: Factory, label: "AGRO-ALIMENTAIRE", description: "Utilisable pour la désinfection des surfaces et équipements." },
    ],

    domaine: [
      { icon: Hospital, label: "Hôpitaux et Cliniques" },
      { icon: FlaskConical, label: "Laboratoires" },
      { icon: Factory, label: "Industrie Agro-alimentaire" },
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

  // ─── Gamme Agroalimentaire ──────────────────────────────────────────────────────
  {
    id: "Agro-1",
    slug: "Polifoam-CL",
    name: "Polifoam-CL",
    shortDescription: "Détergent et désinfectant alcalin chloré pour l'industrie agro-alimentaire.",
    fullDescription: "Détergent et désinfectant alcalin chloré spécialement formulé pour le nettoyage et la désinfection avec des équipements à projection de mousse sure les surfaces ouvertes et les équipements de l'industrie agro-alimentaire en générale et particulièrement de l'industrie des viandes et des produits cariés.\
     \nEt pour éviter la formation de film sous lequel peuvent se nicher les bactéries, on utilise le POLIFAOM-AC par alternance avec POLIFAM-CL.",
    image: "/images/products/polifoam-cl.webp",
    gammeSlug: "agroalimentaire",
    tags: ["Détergent", "Désinfectant", "Alcalin chloré", "Agro-alimentaire",],
    formats: ["25kg"],
    surface: ["Surfaces ouvertes", "Équipements",],
    benefits: [
      { icon: Sparkles, label: "NETTOYAGE PUISSANT", description: "Favorise un nettoyage approfondi.", },
      { icon: ShieldCheck, label: "HYGIÈNE RENFORCÉE", description: "Contribue à une désinfection efficace.", },
      { icon: SprayCan, label: "APPLICATION PAR MOUSSE", description: "Permet une application uniforme.", },
    ],
    domaine: [
      { icon: Factory, label: "Industrie Agro-alimentaire", },
    ],
  },

  {
    id: "Agro-2",
    slug: "Polinet",
    name: "Polinet",
    shortDescription: "Détergent totalement soluble dans l'eau, avec une excellente rinçabilité.",
    fullDescription: "Totalement soluble dans l'eau et insensible à sa dureté. Il offre une excellente rinçabilité ainsi qu'un bon pouvoir peptisant et mouillant.\
    \nIl ne réagit pas avec le CO₂, ce qui permet d'éviter les risques de chute de pression liés à la neutralisation.",
    image: "/images/products/polinet.webp",
    gammeSlug: "agroalimentaire",
    tags: ["Détergent", "Soluble dans l'eau", "Rinçage facile", "Pouvoir mouillant",],
    formats: ["25kg"],
    surface: ["Surfaces ouvertes", "Équipements"],
    benefits: [
      { icon: Droplet, label: "RINÇAGE SIMPLIFIÉ", description: "Facilite les opérations de rinçage.", },
      { icon: ShieldCheck, label: "PERFORMANCE CONSTANTE", description: "Reste efficace malgré la dureté de l'eau.", },
      { icon: Sparkles, label: "BONNE COUVERTURE", description: "Favorise un contact efficace avec les surfaces.", },
    ],
    domaine: [
      { icon: Factory, label: "Industrie Agro-alimentaire", },
    ],
  },

  {
    id: "Agro-3",
    slug: "Polixol",
    name: "Polixol",
    shortDescription: "Détergent et désinfectant chloré puissant, adapté aux eaux de très forte dureté.",
    fullDescription: "Spécialement indiqué pour les eaux de très forte dureté. Il évite la formation de pierre de lait et de Bierstein. Totalement exempt de formation de mousse, il possède un important pouvoir détergent et un chlore très stable.\
     \nIl offre un fort pouvoir désinfectant et une action bactéricide à large spectre. Non corrosif vis-à-vis de l'inox, du caoutchouc et des matières plastiques. Ne convient pas à l'aluminium. Le produit, concentré ou en solution d'emploi, ne doit pas être neutralisé ni mis en milieu acide.",
    image: "/images/products/polixol.webp",
    gammeSlug: "agroalimentaire",
    tags: ["Détergent", "Désinfectant", "Chloré", "Bactéricide", "Eaux très dures",],
    formats: ["25kg"],
    surface: ["Acier inoxydable", "Caoutchouc", "Matières plastiques",],
    benefits: [
      { icon: Sparkles, label: "RESPECT DES MATÉRIAUX", description: "Compatible avec les surfaces adaptées.", },
      { icon: ShieldCheck, label: "HYGIÈNE RENFORCÉE", description: "Assure une désinfection efficace..", },
      { icon: Shield, label: "NETTOYAGE PUISSANT", description: "Élimine efficacement les salissures.", },
    ],
    domaine: [
      { icon: Factory, label: "Industrie Agro-alimentaire", },
    ],
  }
]