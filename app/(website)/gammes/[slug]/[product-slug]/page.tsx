import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CTASection } from "@/components/shared/cta-button"
import { products } from "@/data/product/product"
import { gammesDetails } from "@/data/gammes/gammes-detail"
import { ProductImage } from "./_components/partiels/product-image"
import { ProductInfo } from "./_components/partiels/product-info"
import { ProductSidebar } from "./_components/partiels/product-sidebar"
import { ProductFicheTechnique } from "./_components/partiels/product-fiche-technique"
import { ProductBenefits } from "./_components/partiels/product-benefits"
import{ RelatedProducts } from "@/components/shared/related-product"

interface PageProps {
  params: Promise<{
    slug: string
    "product-slug": string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, "product-slug": productSlug } = await params
  const product = products.find(
    (p) => p.slug === productSlug && p.gammeSlug === slug
  )

  if (!product) {
    return { title: "Produit non trouvé" }
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `https://polaris-industriehosp.com/gammes/${slug}/${productSlug}`,
    },
    openGraph: {
  title: `${product.name} | Polaris Industrie Hosp`,
  description: product.shortDescription,
  url: `https://polaris-industriehosp.com/gammes/${slug}/${productSlug}`,
  siteName: "Polaris Industrie HOSP",
  locale: "fr_MA",
  type: "website",
},
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug, "product-slug": productSlug } = await params

  const product = products.find(
    (p) => p.slug === productSlug && p.gammeSlug === slug
  )
  const gamme = gammesDetails.find((g) => g.slug === slug)

  if (!product || !gamme) {
    notFound()
  }

  // Safe fallback to prevent crashes on missing optional fields (like domaines mapping)
  const mergedProduct = {
    ...product,
    fullDescription: product.fullDescription || "Fiche technique détaillée en cours de rédaction par nos équipes. Pour toute question, veuillez nous contacter.",
    domaine: product.domaine || [],
  }

  return (
    <>
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-5 lg:px-6 pt-24 pb-4 lg:pt-28">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/gammes">Gammes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/gammes/${slug}`}>{gamme.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{mergedProduct.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main>
        <section className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-5 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div className="lg:col-span-4 lg:pr-2 lg:sticky lg:top-8">
              <ProductImage product={mergedProduct} />
            </div>
            <div className="lg:col-span-5">
              <ProductInfo
                product={mergedProduct}
                gammeName={gamme.name}
                gammeIcon={gamme.icon}
              />
            </div>
            <div className="rounded-2xl border border-border/70 bg-muted/50 p-5 lg:col-span-3 lg:p-6">
              <ProductSidebar product={mergedProduct} />
            </div>
          </div>

          <div className="mt-6 lg:mt-8 flex flex-col gap-4">
            {mergedProduct.benefits && mergedProduct.benefits.length > 0 && (
              <ProductBenefits benefits={mergedProduct.benefits} />
            )}
            <ProductFicheTechnique />
          </div>
        </section>
        <RelatedProducts
         currentSlug={productSlug}
        gammeSlug={slug}
          />
      </main>
      <CTASection />
    </>
  )
}
