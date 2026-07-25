import type { Metadata } from "next"
import { GammeHeader } from "@/app/(website)/gammes/_components/header"
import { GammeClient } from "./_components/gamme-client"
import { CTASection } from "@/components/shared/cta-button"

export const metadata: Metadata = {
  title: "Nos Gammes",
  description:
    "Découvrez nos gammes de produits de nettoyage et désinfection professionnelle certifiés pour les établissements de santé, hôtellerie et industrie au Maroc.",
  keywords: [
    "gammes produits hygiène Maroc",
    "produits nettoyage professionnel Maroc",
    "désinfectant professionnel Maroc",
    "gamme hygiène hospitalière",
    "produits désinfection industrie Maroc",
    "solutions hygiène professionnelle Rabat",
    "produits de nettoyage certifiés",
    "Polaris Industrie HOSP",
  ],
  openGraph: {
    title: "Nos Gammes | Polaris Industrie HOSP",
    description:
      "Explorez nos gammes de produits de nettoyage et désinfection professionnels certifiés EN/NF pour les professionnels au Maroc.",
    url: "https://polaris-industriehosp.com/gammes",
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
    canonical: "https://polaris-industriehosp.com/gammes",
  },
}

export default function GammesPage() {
  return (
    <>
      <GammeHeader />
      <main>
       <GammeClient />
       <CTASection/>
      </main>
    </>
  )
}