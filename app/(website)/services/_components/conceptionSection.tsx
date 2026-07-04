import { conceptionFeatures, conceptionSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceCard } from "@/components/shared/service-card"

export function ConceptionSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container-section">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Conception & Production
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Fabrication{" "}
            <span className="text-primary">haute performance</span>
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            Polaris Industrie Hosp conçoit et fabrique ses propres produits. De la
            formulation en laboratoire jusqu&apos;au conditionnement final, chaque
            étape est maîtrisée pour garantir une qualité constante.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {conceptionFeatures.map(({ icon, label, description }) => (
            <ServiceCard key={label} icon={icon} label={label} description={description} />
          ))}
        </div>

        {/* Process */}
        <ServiceProcess title="De la formule au produit fini" steps={conceptionSteps} />

      </div>
    </section>
  )
}