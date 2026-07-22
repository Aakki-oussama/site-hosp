import type { Metadata } from "next"
import { SectionHeader } from "@/components/shared/header-site/section-header"
import { StatsSection } from "@/components/shared/stats-section"
import { MissionSection } from "@/app/(website)/about/_components/mission-section"
import { ValuesSection } from "@/app/(website)/about/_components/values-section"
import { TimelineSection } from "@/app/(website)/about/_components/timeline-section"
import { CTASection } from "@/components/shared/cta-button"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

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
        headingLevel="h1"
        headingId="about-heading"
        align="center"
        title="Notre engagement pour"
        highlight="l'hygiène professionnelle"
        description="Depuis plus de 10 ans, Polaris Industrie Hosp conçoit et distribue des solutions d'hygiène certifiées pour les professionnels au Maroc."
      />

      <main>
        <RevealOnScroll direction="left">
        <ValuesSection />
        </RevealOnScroll>
        <StatsSection />
        <MissionSection />
        <TimelineSection />
        <RevealOnScroll direction="up">
        <CTASection />
        </RevealOnScroll>
      </main>
    </>
  )
}
