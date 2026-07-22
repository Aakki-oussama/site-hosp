import { conceptionFeatures, conceptionSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceFeatureCard } from "@/components/shared/cards/service-feature-card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "@/components/shared/icons"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function ConceptionSection() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container-section">

        {/* Header */}
        <RevealOnScroll direction="left">
          <div className="mb-12 max-w-2xl">
            <Badge variant="subtle" className="mb-3 gap-2">
              <ShieldCheck aria-hidden="true" />
              Conception & Production
            </Badge>

            <h2 className="h-title mb-4">
              Fabrication{" "}
              <span className="text-gradient">
                haute performance
              </span>
            </h2>
            <p className="section-description mb-4">
              Polaris Industrie Hosp conçoit et fabrique ses propres produits. De la
              formulation en laboratoire jusqu&apos;au conditionnement final, chaque
              étape est maîtrisée pour garantir une qualité constante.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conceptionFeatures.map(({ icon, label, description }, index) => (
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
        </RevealOnScroll>

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
            steps={conceptionSteps}
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}