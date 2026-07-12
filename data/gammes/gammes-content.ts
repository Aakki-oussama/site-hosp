export interface Product {
  id: string
  slug: string
  name: string
  description: string
  image: string
  gammeSlug: string
  formats: string[]
  surface: string[]
}

export const products: Product[] = [
  // ─── Gamme Home ─────────────────────────────────────────────────────────────
  {
    id: "home-1",
    slug: "nettoyant-multi-surfaces",
    name: "Nettoyant Multi-surfaces",
    description: "Nettoie, dégraisse et fait briller toutes les surfaces de la maison sans laisser de traces.",
    image: "/images/services/livraison.webp",
    gammeSlug: "home",
    formats: ["750ml", "1L", "5L"],
    surface: ["Toutes surfaces lavables (plans de travail, tables)"],
  },
  {
    id: "home-2",
    slug: "liquide-vaisselle-concentre",
    name: "Liquide Vaisselle Concentré",
    description: "Formule ultra-dégraissante douce pour les mains avec une agréable odeur de citron.",
    image: "/images/services/livraison.webp",
    gammeSlug: "home",
    formats: ["500ml", "1L", "5L"],
    surface: ["Vaisselle, couverts et ustensiles de cuisine"],
  },
  {
    id: "home-3",
    slug: "nettoyant-sols-brillance",
    name: "Nettoyant Sols Brillance",
    description: "Idéal pour le carrelage, le marbre et les parquets. Laisse un parfum frais longue durée.",
    image: "/images/services/livraison.webp",
    gammeSlug: "home",
    formats: ["1L", "5L"],
    surface: ["Carrelages, marbres, parquets et sols plastiques"],
  },

  // ─── Gamme Médical ──────────────────────────────────────────────────────────
  {
    id: "med-1",
    slug: "megasept-sdc",
    name: "Megasept SDC",
    description: "Savon liquide à base de surfactifs amphotères pour lavage simple des mains.",
    image: "/images/products/megasept-sd.webp",
    gammeSlug: "medical",
    formats: ["500ml", "1L", "5L"],
    surface: ["Mains", "Friction cutanée hygiénique"],
  },
  {
    id: "med-2",
    slug: "spray-desinfectant-surfaces",
    name: "Spray Désinfectant Surfaces",
    description: "Désinfectant à action rapide pour les dispositifs médicaux non invasifs et surfaces.",
    image: "/images/services/livraison.webp",
    gammeSlug: "medical",
    formats: ["750ml", "1L", "5L"],
    surface: ["Mobilier médical", "lits", "plans de travail", "inox"],
  },
  {
    id: "med-3",
    slug: "detergent-pre-desinfection",
    name: "Détergent Pré-désinfection",
    description: "Nettoyage et pré-désinfection de l'instrumentation médico-chirurgicale par trempage.",
    image: "/images/services/livraison.webp",
    gammeSlug: "medical",
    formats: ["1L", "5L"],
    surface: ["Instruments médico-chirurgicaux & endoscopes"],
  },

  // ─── Gamme Aqua ─────────────────────────────────────────────────────────────
  {
    id: "aqua-1",
    slug: "chlore-choc-pastilles",
    name: "Chlore Choc en Pastilles",
    description: "Désinfection rapide de l'eau de piscine et traitement choc contre les algues.",
    image: "/images/services/livraison.webp",
    gammeSlug: "aqua",
    formats: ["1kg", "5kg", "25kg"],
    surface: ["Eau de piscine et parois des bassins"],
  },
  {
    id: "aqua-2",
    slug: "alguicide-liquide-concentre",
    name: "Alguicide Concentré",
    description: "Prévient et élimine la formation des algues dans les bassins et réseaux d'eau.",
    image: "/images/services/livraison.webp",
    gammeSlug: "aqua",
    formats: ["1L", "5L", "20L"],
    surface: ["Canalisations, parois de bassins & filtres"],
  },
  {
    id: "aqua-3",
    slug: "regulateur-ph-moins",
    name: "Régulateur pH Moins",
    description: "Permet de baisser et de stabiliser le pH de l'eau pour un confort de baignade optimal.",
    image: "/images/services/livraison.webp",
    gammeSlug: "aqua",
    formats: ["1L", "5L", "25kg"],
    surface: ["Eau de piscine (ajustement du pH)"],
  },

  // ─── Gamme Bio ──────────────────────────────────────────────────────────────
  {
    id: "bio-1",
    slug: "degraissant-ecologique",
    name: "Dégraissant Écologique",
    description: "Dégraissant puissant à base d'ingrédients biosourcés pour cuisines et industries.",
    image: "/images/services/livraison.webp",
    gammeSlug: "bio",
    formats: ["750ml", "5L"],
    surface: ["Fours, plaques, hottes, inox et graisses tenaces"],
  },
  {
    id: "bio-2",
    slug: "savon-mains-vegetal",
    name: "Savon Mains Végétal",
    description: "Savon doux pour le lavage fréquent des mains à base de glycérine végétale bio.",
    image: "/images/services/livraison.webp",
    gammeSlug: "bio",
    formats: ["500ml", "5L"],
    surface: ["Mains (usage fréquent professionnel)"],
  },
  {
    id: "bio-3",
    slug: "nettoyant-vitres-bio",
    name: "Nettoyant Vitres Éco",
    description: "Formule biodégradable qui nettoie efficacement les vitres et surfaces modernes.",
    image: "/images/services/livraison.webp",
    gammeSlug: "bio",
    formats: ["750ml", "5L"],
    surface: ["Vitres, miroirs, écrans et surfaces vitrées"],
  },
]
