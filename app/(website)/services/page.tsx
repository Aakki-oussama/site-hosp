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
    "Découvrez nos produits de nettoyage et de désinfection professionnelle certifiés pour les établissements hospitaliers, hôteliers et industriels au Maroc.",
  keywords: [
    "produits nettoyage professionnel Maroc",
    "désinfectant hospitalier certifié",
    "solutions hygiène professionnelle Maroc",
    "produits désinfection EN NF",
    "nettoyage industriel Maroc",
    "hygiène hôpital Maroc",
    "désinfection professionnelle Rabat",
    "Polaris produits hygiène",
  ],
  openGraph: {
    title: "Nos Services | Polaris Industrie Hosp",
    description:
      "Produits de nettoyage et désinfection certifiés pour les professionnels de santé, de l'hôtellerie et de l'industrie au Maroc.",
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
        variant="hero"
        headingLevel="h1"
        headingId="services-heading"
        align="left"
        badge="Nos Services"
        title="Des solutions d'hygiène"
        highlight="certifiées et fiables"
        description="Polaris Industrie Hosp conçoit et distribue des produits de nettoyage et de désinfection professionnelle adaptés aux exigences des établissements de santé, hôteliers et industriels au Maroc."
      />

      <main>
        <NettoyageSection />
        <DesinfectionSection />
        <StatsSection />
        <ConceptionSection />
        <VenteSection />
        <LivraisonSection />
        <ClientsSection/>
        <CTASection />
      </main>
    </>
  )
}