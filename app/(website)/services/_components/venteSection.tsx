import { venteFeatures, venteSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceCard } from "@/components/shared/service-card"

export function VenteSection() {
  return (
    <section className="py-12 lg:py-24 bg-muted">
      <div className="container-section">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Vente & Distribution
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Catalogue complet,{" "}
            <span className="text-primary">tarifs professionnels</span>
          </h2>
          <p className="text-base text-foreground leading-relaxed">
  Nous proposons des produits d&apos;hygiène et de désinfection professionnelle
  avec des tarifs adaptés à chaque établissement. Un accompagnement personnalisé
  pour chaque client, de la première commande au réapprovisionnement.
         </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {venteFeatures.map(({ icon, label, description }) => (
          <ServiceCard key={label} icon={icon} label={label} description={description} />
          ))}
        </div>

        {/* Process */}
        <ServiceProcess title="Comment passer commande" steps={venteSteps} />

      </div>
    </section>
  )
}