import Image from "next/image"

import { Certification } from "@/components/shared/certificat"

export function AboutImages() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-sm pb-10 md:mx-0 md:max-w-none md:pb-12 lg:max-w-lg lg:pb-14">
      <div className="relative h-[22rem] w-full overflow-hidden rounded-3xl bg-surface-muted sm:h-[24rem] lg:h-[30rem] shiny-glass">
        <Image
          src="/images/services/Nettoyage.webp"
          alt="Produits de désinfection professionnelle Polaris"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute right-3 top-3 z-20 md:right-4 md:top-4">
          <Certification />
        </div>
      </div>
    </div>
  )
}