import Image from "next/image"
import { nettoyageFeatures, nettoyageSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceFeatureCard } from "@/components/shared/cards/service-feature-card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "@/components/shared/icons"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function NettoyageSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-section">
        {/* Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Left */}
          <RevealOnScroll direction="left">
            <div className="order-2 lg:order-none relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/services/nettoyage.webp"
                alt="Produits de nettoyage professionnel Polaris"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          {/* Text Right */}
          <RevealOnScroll direction="right">
            <div>
              <Badge variant="subtle" className="mb-3 gap-2">
                <ShieldCheck aria-hidden="true" />
                Nettoyage
              </Badge>
              <h2 className="h-title mb-6">
                Produits de nettoyage{" "}
                <span className="text-gradient">
                  haute performance
                </span>
              </h2>
              <p className="section-description mb-4">
                Nos produits de nettoyage sont formulés pour répondre aux exigences
                des environnements professionnels les plus exigeants. Efficaces,
                concentrés et adaptés à une utilisation intensive quotidienne.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nettoyageFeatures.map(({ icon, label, description }, index) => (
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
            steps={nettoyageSteps}
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}
