import Image from "next/image"
import { livraisonFeatures, livraisonSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceCard } from "@/components/shared/service-card"

export function LivraisonSection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container-section">

        {/* Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Left */}
          <div className="order-2 lg:order-none relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/images/services/livraison.webp"
              alt="Livraison professionnelle Polaris Industrie Hosp au Maroc"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right — Header + Cards */}
          <div>

            {/* Header */}
            <p className="order-1 lg:order-none text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Livraison & Logistique
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Rapide, fiable,{" "}
              <span className="text-primary">partout au Maroc</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Nous assurons la livraison de vos produits d&apos;hygiène et de
              désinfection sur l&apos;ensemble du territoire marocain.
            </p>

            {/* Cards 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {livraisonFeatures.map(({ icon, label, description }) => (
                <ServiceCard key={label} icon={icon} label={label} description={description} />
              ))}
            </div>

          </div>
        </div>

        {/* Process */}
        <ServiceProcess title="De la commande à la livraison" steps={livraisonSteps} />

      </div>
    </section>
  )
}