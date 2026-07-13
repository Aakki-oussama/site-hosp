import type { Metadata } from "next"
import { HeroSection } from "@/app/(website)/home/_components/hero-section"

export const metadata: Metadata = {
  title: "Polaris Industrie HOSP - Hygiène et Désinfection | Maroc",
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
  alternates: {
    canonical: "https://polaris-industriehosp.com",
  },
}

export default function HomePage() {
  return (
    <>
      <main>
              <HeroSection />
      </main>
    </>
  )
}