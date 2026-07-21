import { etapes } from "@/data/about/etapes"
import { HowStepCard } from "@/components/shared/how-step-card"

const stepImages = [
  "/images/home/consultation.webp",
  "/images/home/devis.webp",
  "/images/home/shipping.webp",
  "/images/home/support.webp",
]

export function HowCard() {
  return (
    <>
      {/* Mobile & Tablet */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:hidden">
        {etapes.map((etape, index) => (
          <HowStepCard
            key={etape.id}
            etape={etape}
            imageSrc={stepImages[index]}
            textTop={true}
          />
        ))}
      </div>

      {/* Desktop */}
<div className="hidden xl:grid xl:grid-cols-4 xl:grid-rows-[1fr_auto_1fr] xl:gap-x-8">
  {etapes.map((etape, index) => (
    <div key={etape.id} className="xl:row-span-3 xl:grid xl:grid-rows-subgrid">
      <HowStepCard
        etape={etape}
        imageSrc={stepImages[index]}
        textTop={index % 2 === 0}
      />
    </div>
  ))}
</div>
    </>
  )
}
