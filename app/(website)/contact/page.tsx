import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/header-site/section-header"
import { companyInfo } from "@/config/infos"
import { ListInfo } from "./_components/list-info"
import { BusinessHours } from "./_components/timer"
import { FormContact } from "./_components/form-contact"
import { FAQContact } from "@/components/shared/faq-contact"
import { MapContact } from "./_components/map-contact"
import { Toaster } from "sonner"

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
        title="Parlons de vos"
        highlight="besoins"
        headingLevel="h1"
        headingId="contact-heading"
        align="center"

      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Form (60%) */}
          <div className="lg:col-span-3 space-y-8">
            { <FormContact /> }
            <MapContact />
          </div>

          {/* Right: Contact Info (40%) */}
          <div className="lg:col-span-2 space-y-8">
            <ListInfo />
            <BusinessHours />
          </div>
        </div>
      </main>
      <Toaster richColors closeButton position="top-right" />
      <FAQContact />
    </>
  )
}
