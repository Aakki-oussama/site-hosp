"use client"

import { Marquee } from "@/components/shared/marque"
import { clientSectors } from "@/data/client"

export function StatsClients() {
  return (
    <section className="w-full bg-muted">
      <div className="w-full overflow-hidden  bg-surface p-2">
        <Marquee speed={25}>
          {clientSectors.map((sector) => (
            <div
              key={sector}
              className="mx-4 flex h-12 items-center justify-center rounded-lg bg-muted px-6 text-sm font-medium"
            >
              {sector}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}