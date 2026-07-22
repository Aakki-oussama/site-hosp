import Image from "next/image"
import { desinfectionFeatures, desinfectionSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceFeatureCard } from "@/components/shared/cards/service-feature-card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "@/components/shared/icons"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function DesinfectionSection() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="container-section">
        {/* Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Text Left */}
          <RevealOnScroll direction="left">
            <div>
              <Badge variant="subtle" className="mb-3 gap-2">
                <ShieldCheck aria-hidden="true" />
                Désinfectant
              </Badge>
              <h2 className="h-title mb-6">
                Désinfection{" "}
                <span className="text-gradient">
                  certifiée & fiable
                </span>
              </h2>
              <p className="section-description mb-8">
                Nos solutions de désinfection répondent aux normes les plus strictes
                du secteur médical et industriel. Conçues pour éliminer tous types
                d&apos;agents pathogènes et protéger durablement vos environnements.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {desinfectionFeatures.map(({ icon, label, description }, index) => (
                  <ServiceFeatureCard
                    key={label}
                    icon={icon}
                    title={label}
                    description={description}
                    number={index + 1}
                    variant="blue"
                  />
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Image Right */}
          <RevealOnScroll direction="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background">
              <Image
                src="/images/services/desinfectant.webp"
                alt="Produits de désinfection professionnelle Polaris"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
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
            steps={desinfectionSteps}
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}
