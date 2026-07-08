import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CategoryHeader } from "./_components/header"
import { gammesDetails } from "@/data/gammes/gammes-detail"
import { RelatedGammes } from "./_components/related-gammes"
import { CTASection } from "@/components/shared/cta-button"
import { StatsSection } from "@/components/shared/stats-section"
import { ProductGrid } from "./_components/product-grid"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const gamme = gammesDetails.find((g) => g.slug === slug)

  if (!gamme) {
    return {
      title: "Gamme non trouvée",
    }
  }

  // Mots-clés spécifiques à chaque gamme pour un SEO B2B optimal
  const keywordsMap: Record<string, string[]> = {
    home: [
      "produits nettoyage maison Maroc",
      "hygiène domestique professionnelle",
      "détergents ménagers Rabat",
      "nettoyant sols maison",
    ],
    medical: [
      "désinfectant médical Maroc",
      "hygiène hospitalière Rabat",
      "gel hydroalcoolique certifié",
      "désinfection surfaces clinique",
      "normes EN 14476 Maroc",
    ],
    aqua: [
      "traitement eau piscine Maroc",
      "chlore choc piscine Rabat",
      "alguicide eau piscine",
      "régulateur pH piscine Maroc",
    ],
    bio: [
      "produits nettoyage écologiques Maroc",
      "détergent biosourcé professionnel",
      "hygiène éco-responsable Rabat",
      "savon végétal professionnel",
    ],
  }

  const keywords = keywordsMap[slug] || ["produits hygiène professionnelle Maroc"]

  return {
    // Le template du layout racine ajoute automatiquement "| Polaris Industrie Hosp"
    title: gamme.name,
    description: gamme.description,
    keywords: [
      ...keywords,
      "Polaris Industrie Hosp",
      "hygiène professionnelle Maroc",
      "fabricant désinfectants Rabat",
    ],
    openGraph: {
      title: `${gamme.name} | Polaris Industrie Hosp`,
      description: gamme.description,
      url: `https://polaris-industriehosp.com/gammes/${slug}`,
      siteName: "Polaris Industrie HOSP",
      locale: "fr_MA",
      type: "website",
    },
    alternates: {
      canonical: `https://polaris-industriehosp.com/gammes/${slug}`,
    },
  }
}


export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const gammeExists = gammesDetails.some((g) => g.slug === slug)

  if (!gammeExists) {
    notFound()
  }

  return (
    <>
      <CategoryHeader slug={slug} />
      <main>
        <ProductGrid slug={slug} />
        <RelatedGammes currentSlug={slug} />
        <StatsSection />
      </main>
      <CTASection />
    </>
  )
}
