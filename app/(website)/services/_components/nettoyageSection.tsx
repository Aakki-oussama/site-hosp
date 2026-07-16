import Image from "next/image"
import { nettoyageFeatures, nettoyageSteps } from "@/data/services/services"
import { ServiceProcess } from "@/components/shared/service-process"

export function NettoyageSection() {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container-section">

        {/* Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Left */}
          <div className="order-2 lg:order-none relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/images/services/nettoyage.webp"
              alt="Produits de nettoyage professionnel Polaris"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text Right */}
          <div>
            <p className="order-1 lg:order-nonetext-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Nettoyage
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Produits de nettoyage{" "}
              <span className="text-primary">haute performance</span>
            </h2>
            <p className="text-base text-foreground leading-relaxed mb-8">
              Nos produits de nettoyage sont formulés pour répondre aux exigences
              des environnements professionnels les plus exigeants. Efficaces,
              concentrés et adaptés à une utilisation intensive quotidienne.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nettoyageFeatures.map(({ icon: Icon, label, description }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-muted border border-border">
                  <div className="inline-flex items-center justify-center size-8 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-foreground mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <ServiceProcess title="Notre processus" steps={nettoyageSteps} />

      </div>
    </section>
  )
}