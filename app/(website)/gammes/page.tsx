import type { Metadata } from "next"
import { GammeHeader } from "@/app/(website)/gammes/_components/header"
import { GammeClient } from "./_components/gamme-client"
import { CTASection } from "@/components/shared/cta-button"

export const metadata: Metadata = {
  title: "Nos Gammes",
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
    title: "Nos Gammes | Polaris Industrie Hosp",
    description:
      "Produits de nettoyage et désinfection certifiés pour les professionnels de santé, de l'hôtellerie et de l'industrie au Maroc.",
    url: "https://polaris-industriehosp.com/gammes",
    siteName: "Polaris Industrie HOSP",
    locale: "fr_MA",
    type: "website",
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