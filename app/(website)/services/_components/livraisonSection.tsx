import Image from "next/image"
import { livraisonFeatures, livraisonSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceFeatureCard } from "@/components/shared/cards/service-feature-card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "@/components/shared/icons"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function LivraisonSection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container-section">

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Left */}
          <RevealOnScroll direction="left">
            <div className="order-2 lg:order-none relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/services/shipping.webp"
                alt="Livraison professionnelle Polaris Industrie Hosp au Maroc"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          {/* Right — Header + Cards */}
          <RevealOnScroll direction="right">
            <div>
              {/* Header */}
              <Badge variant="subtle" className="mb-3 gap-2">
                <ShieldCheck aria-hidden="true" />
                Livraison & Logistique
              </Badge>

              <h2 className="h-title mb-4">
                Rapide, fiable,{" "}
                <span className="text-gradient">
                  partout au Maroc
                </span>
              </h2>
              <p className="section-description mb-8">
                Nous assurons la livraison de vos produits d&apos;hygiène et de
                désinfection sur l&apos;ensemble du territoire marocain.
              </p>

              {/* Cards 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {livraisonFeatures.map(({ icon, label, description }, index) => (
                  <ServiceFeatureCard
                    key={label}
                    icon={icon}
                    title={label}
                    description={description}
                    number={index + 1}
                    variant="green"
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Process */}
        <RevealOnScroll direction="up">
        <ServiceProcess
          title={
            <>
              Notre{" "}
              <span className="text-gradient">
                processus
              </span>
            </>
          }
          steps={livraisonSteps}
        />
        </RevealOnScroll>
      </div>
    </section>
  )
}