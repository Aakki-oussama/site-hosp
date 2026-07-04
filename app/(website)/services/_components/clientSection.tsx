"use client"

import { Marquee } from "@/components/shared/marque"
import { clientSectors } from "@/data/client"

export function ClientsSection() {
  return (
    <section className="py-12 lg:py-20 bg-muted">
      <div className="container-section">

        {/* Header */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Nos clients
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Des solutions pour{" "}
            <span className="text-primary">chaque secteur</span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Nous accompagnons des professionnels de secteurs variés avec des
            produits adaptés à leurs exigences spécifiques.
          </p>
        </div>

        {/* Marquee */}
        <Marquee speed={25}>
          {clientSectors.map((sector) => (
            <div
              key={sector}
              className="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground"
            >
              {sector}
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  )
}