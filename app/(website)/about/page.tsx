import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/header-site/section-header"
import { StatsSection } from "@/components/shared/stats-section"
import { MissionSection } from "@/app/(website)/about/_components/mission-section"
import { ValuesSection } from "@/app/(website)/about/_components/values-section"
import { TimelineSection } from "@/app/(website)/about/_components/timeline-section"
import { CTASection } from "@/components/shared/cta-button"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez notre histoire, notre mission et les valeurs qui guident notre engagement dans la fabrication de solutions d'hygiène professionnelle.",
  keywords: [
    "Polaris Industrie Hosp",
    "hygiène professionnelle Maroc",
    "solutions désinfection Maroc",
    "fabricant hygiène Rabat",
    "produits hygiène hospitalière",
    "désinfectant professionnel Maroc",
    "histoire entreprise hygiène",
    "valeurs entreprise hygiène Maroc",
  ],
  openGraph: {
    title: "À propos | Polaris Industrie Hosp",
    description:
      "Depuis plus de 10 ans, Polaris Industrie Hosp conçoit et distribue des solutions d'hygiène certifiées pour les professionnels au Maroc.",
    url: "https://polaris-industriehosp.com/about",
    siteName: "Polaris Industrie HOSP",
    locale: "fr_MA",
    type: "website",
  },
  alternates: {
    canonical: "https://polaris-industriehosp.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <SectionHeader
        variant="hero"
        headingLevel="h1"
        headingId="about-heading"
        align="left"
        badge="À propos de nous"
        title="Notre engagement pour"
        highlight="l'hygiène professionnelle"
        description="Depuis plus de 10 ans, Polaris Industrie Hosp conçoit et distribue des solutions d'hygiène certifiées pour les établissements de santé et les professionnels."
      />

      <main>
        <ValuesSection />
        <StatsSection />
        <MissionSection />
        <TimelineSection />
        <CTASection />
      </main>
    </>
  )
}
