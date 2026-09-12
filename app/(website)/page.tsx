import type { Metadata } from "next"
import { HeroSection } from "./home/_components/hero-section"
import { StatsClients } from "./home/_components/stats/stats"
import { AboutSection } from "./home/_components/about-section"
import { ServicesSection } from "./home/_components/services-section"
import { StatsSection } from "@/components/shared/stats-section"
import { WhySection } from "./home/_components/why-us"
import { HowSection } from "./home/_components/how-section"
import { GammesSection } from "./home/_components/gammes-section"
import { CTASection } from "@/components/shared/cta-button"
import { FAQContact } from "@/components/shared/faq-contact"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export const metadata: Metadata = {

  description:
    "Fabricant marocain de produits d'hygiène et de désinfection professionnelle certifiés EN/NF. Solutions adaptées aux hôpitaux, hôtels et industries au Maroc.",
  keywords: [
    "hygiène professionnelle Maroc",
    "désinfectant certifié Maroc",
    "produits nettoyage professionnel Rabat",
    "fabricant hygiène Maroc",
    "désinfection hospitalière Maroc",
    "produits certifiés EN NF Maroc",
    "hygiène hôtel industrie Maroc",
    "Polaris Industrie Hosp",
    "nettoyant professionnel Rabat",
    "désinfectant surface Maroc",
  ],
  openGraph: {
    title: "Polaris Industrie HOSP - Hygiène et Désinfection | Maroc",
    description:
      "Fabricant marocain de produits d'hygiène et de désinfection professionnelle certifiés EN/NF. Solutions adaptées aux hôpitaux, hôtels et industries au Maroc.",
    url: "https://polaris-industriehosp.com",
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
    canonical: "https://polaris-industriehosp.com",
  },
}

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsClients />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <GammesSection/>
        <HowSection />
        <WhySection /> 
      </main>

      <RevealOnScroll direction="up">
      <CTASection/>
      </RevealOnScroll>
      <RevealOnScroll direction="up">
      <FAQContact/>
      </RevealOnScroll>
    </>
  )
}
