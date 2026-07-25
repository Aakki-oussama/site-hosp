import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/header-site/section-header"
import { StatsSection } from "@/components/shared/stats-section"
import { CTASection } from "@/components/shared/cta-button"
import { NettoyageSection } from "./_components/nettoyageSection"
import { DesinfectionSection } from "./_components/desinfectionSection"
import { ConceptionSection } from "./_components/conceptionSection"
import { VenteSection } from "./_components/venteSection"
import { ClientsSection } from "./_components/clientSection"
import { LivraisonSection } from "./_components/livraisonSection"

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Nettoyage, désinfection et distribution de solutions d'hygiène certifiées EN/NF pour établissements de santé, hôtellerie et industrie au Maroc.",
  keywords: [
    "services hygiène professionnelle Maroc",
    "service nettoyage professionnel Rabat",
    "désinfection professionnelle Maroc",
    "conseil hygiène hospitalière Maroc",
    "distribution produits hygiène Rabat",
    "services désinfection industriels Maroc",
    "nettoyage hospitalier Maroc",
    "Polaris Industrie HOSP",
  ],
  openGraph: {
    title: "Nos Services | Polaris Industrie HOSP",
    description:
      "Nettoyage, désinfection, conseil et livraison de produits d'hygiène certifiés pour les professionnels au Maroc.",
    url: "https://polaris-industriehosp.com/services",
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
    canonical: "https://polaris-industriehosp.com/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <SectionHeader
        headingLevel="h1"
        headingId="services-heading"
        align="center"
        title="Des solutions d'hygiène"
        highlight="certifiées et fiables"
        description="Polaris Industrie HOSP propose des services de nettoyage, désinfection, conseil et livraison de solutions professionnelles adaptées aux besoins des établissements au Maroc."
      />

      <main>
        <NettoyageSection />
        <DesinfectionSection />
        <StatsSection />
        <ConceptionSection />
        <VenteSection />
        <LivraisonSection />
        <ClientsSection/>
      </main>
      <CTASection />
    </>
  )
}