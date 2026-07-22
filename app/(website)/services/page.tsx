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
  title: "Services d'hygiène professionnelle au Maroc",
  description:
    "Découvrez nos services de nettoyage, désinfection, conseil et distribution de solutions professionnelles certifiées pour les établissements de santé, hôtellerie, industrie et collectivités au Maroc.",
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
    title: "Services d'hygiène professionnelle au Maroc | Polaris Industrie HOSP",
    description:
      "Polaris Industrie HOSP propose des services de nettoyage, désinfection, conseil et livraison de solutions professionnelles adaptées aux besoins des établissements au Maroc.",
    url: "https://polaris-industriehosp.com/services",
    siteName: "Polaris Industrie HOSP",
    locale: "fr_MA",
    type: "website",
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