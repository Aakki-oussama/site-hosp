import { venteFeatures, venteSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceFeatureCard } from "@/components/shared/cards/service-feature-card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "@/components/shared/icons"

export function VenteSection() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="container-section">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <Badge variant="subtle" className="mb-3 gap-2">
            <ShieldCheck aria-hidden="true" />
            Vente & Distribution
          </Badge>

          <h2 className="h-title mb-4">
            Catalogue complet,{" "}
            <span className="text-gradient">
              tarifs professionnels
            </span>
          </h2>
          <p className="section-description mb-4">
            Nous proposons des produits d&apos;hygiène et de désinfection professionnelle
            avec des tarifs adaptés à chaque établissement. Un accompagnement personnalisé
            pour chaque client, de la première commande au réapprovisionnement.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {venteFeatures.map(({ icon, label, description }, index) => (
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

        {/* Process */}
        <ServiceProcess
          title={
            <>
              Comment{" "}
              <span className="text-gradient">
                passer commande
              </span>
            </>
          }
          steps={venteSteps}
        />
      </div>
    </section>
  )
}