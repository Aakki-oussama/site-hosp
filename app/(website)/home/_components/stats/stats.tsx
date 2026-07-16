"use client"

import { Marquee } from "@/components/shared/marque"
import { clientSectors } from "@/data/client"

export function StatsClients() {
  return (
<section className="mx-4 my-6 rounded-2xl bg-muted py-4 lg:mx-8 lg:py-4">
  <div className="flex flex-col gap-4 px-5 lg:flex-row lg:items-center lg:gap-4 lg:px-6">
    {/* Left */}
    <div className="shrink-0 max-w-xs">
  <h2 className="text-base font-semibold leading-tight lg:text-lg">
    Professionnels & particuliers{" "}
    <span className="bg-gradient-to-r from-primary to-brand-green bg-clip-text text-transparent">
      nous font confiance.
    </span>
  </h2>
</div>

    {/* Right */}
    <div className="flex-1 overflow-hidden">
      <Marquee speed={25}>
        {clientSectors.map((sector) => (
          <div
            key={sector}
            className="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium"
          >
            {sector}
          </div>
        ))}
      </Marquee>
    </div>
  </div>
</section>
  )
}