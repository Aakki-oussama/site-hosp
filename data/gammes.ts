export type Gamme = {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  color: "blue" | "green"
}

export const gammes: Gamme[] = [
  {
    id: "home",
    slug: "home",
    name: "Gamme Home",
    description:
      "Solutions d'hygiène professionnelles pour usage domestique intensif",
    icon: "Home",
    color: "blue",
  },
  {
    id: "medical",
    slug: "medical",
    name: "Gamme Médical",
    description:
      "Désinfectants certifiés pour environnements médicaux et hospitaliers",
    icon: "Stethoscope",
    color: "green",
  },
  /*{
    id: "aqua",
    slug: "aqua",
    name: "Gamme Aqua",
    description:
      "Traitement et purification de l'eau pour usage industriel",
    icon: "Droplets",
    color: "blue",
  },*/
  {
    id: "Agroalimentaire",
    slug: "agroalimentaire",
    name: "Gamme Agroalimentaire",
    description:
      "Formules écologiques et biodégradables pour une hygiène responsable",
    icon: "Leaf",
    color: "green",
  },
]