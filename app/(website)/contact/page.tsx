import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/header-site/section-header"
import { companyInfo } from "@/config/infos"
import { ListInfo } from "./_components/list-info"
import { BusinessHours } from "./_components/timer"
import { FormContact } from "./_components/form-contact"
import { FAQContact } from "@/components/shared/faq-contact"
import { MapContact } from "./_components/map-contact"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Contactez ${companyInfo.name} à Rabat pour un devis personnalisé sur nos produits d'hygiène et désinfection professionnelle. Réponse rapide garantie.`,
 keywords: [
  "contact Polaris Industrie Hosp",
  "devis hygiène professionnelle Maroc",
  "désinfectant professionnel Rabat",
  "hygiène hospitalière Maroc",
  "produits désinfection Témara",
  "demande devis désinfection Maroc",
  "contact fabricant hygiène Rabat",
],
  openGraph: {
    title: "Contact | Polaris Industrie HOSP",
    description:
      "Contactez Polaris Industrie Hosp pour un devis sur nos produits d'hygiène et désinfection certifiés. Notre équipe vous répond rapidement.",
    url: "https://polaris-industriehosp.com/contact",
    siteName: "Polaris Industrie HOSP",
    locale: "fr_MA",
    type: "website",
  },
  
robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://polaris-industriehosp.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
        <Toaster richColors closeButton position="top-right" />
      <SectionHeader
        title="Parlons de vos"
        highlight="besoins"
        headingLevel="h1"
        headingId="contact-heading"
        align="center"
        description="Contactez-nous pour un devis personnalisé sur nos produits d'hygiène et désinfection professionnelle."
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Form (60%) */}
          <div className="lg:col-span-3 space-y-8">
            <RevealOnScroll direction="left">
              <FormContact />
              </RevealOnScroll>

            <RevealOnScroll direction="left">
              <MapContact />
            </RevealOnScroll>
          </div>

          {/* Right: Contact Info (40%) */}
          <div className="lg:col-span-2 space-y-8">
            <RevealOnScroll direction="right">
              <ListInfo />
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <BusinessHours />
            </RevealOnScroll>
          </div>
        </div>
      </main>
      <RevealOnScroll direction="up">
        <FAQContact />
      </RevealOnScroll>
    </>
  )
}
