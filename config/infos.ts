import type { LucideIcon } from "lucide-react"
import { Mail, Phone, MapPin, Building2 } from "lucide-react"

export const companyInfo = {
  name: "Polaris Industrie HOSP",
  tagline: "Leader de la fabrication de produits d'hygiène et désinfectants au Maroc",
  description: "Polaris Industrie HOSP fabrique des produits d'hygiène et de désinfection professionnelle de haute qualité pour les hôpitaux, pharmacies, hôtels, entreprises et particuliers au Maroc.",
  phone: "+212 537 570 035",
  fax: "+212 537 570 034",
  phoneDisplay: "+212 537 570 035",
  whatsapp: "+212XXXXXXXXX",
  country: "Maroc",
  email: "contact@polaris-industriehosp.com",
  emailInfo: "info@polaris-industriehosp.com",
  emailSales: "sales@polaris-industriehosp.com",
  address: "Villa N°6 Bloc J Rue Zofa Sect 4 Hay Riad, Rabat",
  factory: "205 Av Hassan II · Témara",
  businessHours: [
    { label: "Lundi à Vendredi", hours: "8h00 - 16h00" },
    { label: "Samedi", hours: "8h00 - 10h00" },
  ],
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  url: "https://polaris-industriehosp.com",
}

export type ContactItem = {
  icon: LucideIcon
  iconClassName: string
  title: string
  label: string
  href?: string
  note?: string
}

export const contactItems: ContactItem[] = [
  {
    icon: Phone,
    iconClassName: "text-primary",
    title: "Téléphone",
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
    label: companyInfo.phoneDisplay,
    note: "Devis rapide sur nos produits d'hygiène",
  },

  {
    icon: Phone,
    iconClassName: "text-primary",
    title: "FAX",
    href: `tel:${companyInfo.fax.replace(/\s/g, "")}`,
    label: companyInfo.fax,
    note: "Envoi de documents et confirmations",
  },

  /*
  {
    icon: Mail,
    iconClassName: "text-primary",
    title: "Email général",
    href: `mailto:${companyInfo.email}`,
    label: companyInfo.email,
    note: "Contact client et information générale",
  },*/

  {
    icon: Mail,
    iconClassName: "text-primary",
    title: "Email information",
    href: `mailto:${companyInfo.emailInfo}`,
    label: companyInfo.emailInfo,
    note: "Demandez nos fiches produits",
  },
  {
    icon: Mail,
    iconClassName: "text-primary",
    title: "Email commercial",
    href: `mailto:${companyInfo.emailSales}`,
    label: companyInfo.emailSales,
    note: "Devis et commandes de désinfectants",
  },

  {
    icon: MapPin,
    iconClassName: "text-primary",
    title: "Adresse principale",
    label: `${companyInfo.address}, ${companyInfo.country}`,
    note: "Visite sur rendez-vous",
  },
  /*
  {
    icon: Building2,
    iconClassName: "text-primary",
    title: "Usine de production",
    label: companyInfo.factory,
    note: "Production locale au Maroc",
  },
  */
]

/*for footer contact items*/
export const footerContact: ContactItem[] = [
  {
    icon: Phone,
    iconClassName: "text-primary",
    title: "Téléphone",
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
    label: companyInfo.phoneDisplay,
  },
  {
    icon: Mail,
    iconClassName: "text-primary",
    title: "Email",
    href: `mailto:${companyInfo.email}`,
    label: companyInfo.email,
  },

{
    icon: Building2,
    iconClassName: "text-primary",
    title: "Adresse",
    label: companyInfo.address,
  },

  {
    icon: Building2,
    iconClassName: "text-primary",
    title: "Usine de production",
    label: companyInfo.factory,
  },
]