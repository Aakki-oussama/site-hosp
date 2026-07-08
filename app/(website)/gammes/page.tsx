import type { Metadata } from "next"
import { GammeHeader } from "@/app/(website)/gammes/_components/header"
import { GammeClient } from "./_components/gamme-client"
import { CTASection } from "@/components/shared/cta-button"

export const metadata: Metadata = {
  title: "Gammes de produits d'hygiène et de désinfection au Maroc",
  description:
    "Découvrez nos gammes de produits de nettoyage, désinfection et hygiène professionnelle conçues pour les établissements de santé, hôtellerie, industrie et collectivités au Maroc.",
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
    title: "Gammes de produits d'hygiène et de désinfection au Maroc | Polaris Industrie HOSP",
    description:
      "Explorez les gammes de produits de nettoyage et de désinfection professionnelles de Polaris Industrie HOSP pour répondre aux besoins des professionnels au Maroc.",
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