import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/header-site/section-header"
import { companyInfo } from "@/config/infos"
import { ContactInfo } from "./_components/info-contact"
import { BusinessHours} from "./_components/timer"

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Contactez ${companyInfo.name} à Rabat pour un devis personnalisé sur nos produits d'hygiène et désinfection professionnelle. Réponse rapide garantie.`,
  keywords: [
    "contact Polaris Industrie",
    "devis hygiène Maroc",
    "désinfectant professionnel Rabat",
    "hygiène hospitalière Maroc",
    "produits désinfection Témara",
  ],
  openGraph: {
    title: "Contact | Polaris Industrie HOSP",
    description:
      "Demandez un devis ou posez vos questions sur nos solutions d'hygiène et désinfection professionnelle au Maroc.",
    url: "https://polaris-industriehosp.com/contact",
    siteName: "Polaris Industrie HOSP",
    locale: "fr_MA",
    type: "website",
  },
  alternates: {
    canonical: "https://polaris-industriehosp.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <SectionHeader
        variant="hero"
        badge="Contactez-nous"
        title="Parlons de vos"
        highlight="besoins"
        description={
          <>
            Demandez un devis, posez vos questions ou sollicitez un accompagnement pour vos
            projets d&apos;hygiène et de désinfection professionnelle au{" "}
            <span className="font-medium text-primary">Maroc</span>.
          </>
        }
        note={
          <>
            Notre équipe vous répond dans les{" "}
            <span className="font-medium text-primary">meilleurs délais</span>.
          </>
        }
        headingLevel="h1"
        headingId="contact-heading"
        align="left"
      />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 space-y-16">
        <ContactInfo />
        <BusinessHours/>
      </main>
    </>
  )
}
    