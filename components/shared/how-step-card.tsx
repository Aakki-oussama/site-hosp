import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import type { Etape } from "@/data/about/etapes"

interface HowStepCardProps {
  etape: Etape
  imageSrc: string
  textTop: boolean
}

export function HowStepCard({ etape, imageSrc, textTop }: HowStepCardProps) {
  return (
    <div className="group grid grid-rows-[auto_auto_auto] md:grid-rows-[1fr_auto_auto] xl:grid-rows-subgrid xl:row-span-3">
      <div className="flex h-full flex-col justify-center text-center">
        {textTop ? (
          <>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              {etape.titre}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {etape.description}
            </p>
          </>
        ) : (
          <div className="relative mx-auto size-32 xl:size-48 overflow-hidden rounded-full border border-border shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
            <Image
              src={imageSrc}
              alt={etape.titre}
              width={192}
              height={192}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
      </div>

      <div className="my-8 flex items-center gap-4">
        <Separator className="flex-1 transition-colors duration-300 group-hover:bg-primary" />

        <span className="font-heading text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
          {etape.numero}
        </span>

        <Separator className="flex-1 transition-colors duration-300 group-hover:bg-primary" />
      </div>

      <div className="flex h-full flex-col justify-center text-center">
        {textTop ? (
          <div className="relative mx-auto size-32 xl:size-48 overflow-hidden rounded-full border border-border shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
            <Image
              src={imageSrc}
              alt={etape.titre}
              width={192}
              height={192}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              {etape.titre}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {etape.description}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
