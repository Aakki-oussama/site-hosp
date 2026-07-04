import Image from "next/image"
import { desinfectionFeatures, desinfectionSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"
import { ServiceCard } from "@/components/shared/service-card"

export function DesinfectionSection() {
  return (
    <section className="py-12 lg:py-24 bg-muted">
      <div className="container-section">

        {/* Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Text Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Désinfection
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Désinfection{" "}
              <span className="text-primary">certifiée & fiable</span>
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-8">
              Nos solutions de désinfection répondent aux normes les plus strictes
              du secteur médical et industriel. Conçues pour éliminer tous types
              d&apos;agents pathogènes et protéger durablement vos environnements.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            
              {desinfectionFeatures.map(({ icon, label, description }) => (
                <ServiceCard key={label} icon={icon} label={label} description={description} />
              ))}
            </div>
          </div>

          {/* Image Right */}
          
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background">
            <Image
              src="/images/services/desinfection.webp"
              alt="Produits de désinfection professionnelle Polaris"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* Process */}
        <ServiceProcess title="Protocole de désinfection" steps={desinfectionSteps} />

      </div>
    </section>
  )
}