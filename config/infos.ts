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
  label: string
  href?: string
}

export const contactItems: ContactItem[] = [
  {
    icon: Phone,
    iconClassName: "text-primary",
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
    label: companyInfo.phoneDisplay,
  },
  {
    icon: Mail,
    iconClassName: "text-primary",
    href: `mailto:${companyInfo.email}`,
    label: companyInfo.email,
  },
  {
    icon: MapPin,
    iconClassName: "text-primary",
    label: `${companyInfo.address}, ${companyInfo.country}`,
  },
  {
    icon: Building2,
    iconClassName: "text-primary",
    label: companyInfo.factory,
  },
]