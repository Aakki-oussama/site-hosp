import Image from "next/image"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"


export function AboutImages() {
  return (
    <RevealOnScroll direction="left">
    <div className="relative mx-auto w-full max-w-sm pb-10 md:mx-0 md:max-w-none md:pb-20 lg:pb-0 lg:h-full lg:flex lg:items-center ">

      {/* Main image — left, taller */}
      
      <div className="relative w-full min-h-[24rem] overflow-hidden rounded-3xl border-4 border-background shadow-xl md:min-h-[28rem] lg:min-h-[32rem]">
        <Image
          src="/images/home/about-us-2.webp"
          alt="Hygiène professionnelle Polaris Industrie Hosp"
          fill
          sizes="(max-width: 768px) 85vw, 45vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>

      {/* Circular text badge — bottom-right */}
      <div className="absolute bottom-4 right-0 z-10 flex h-[12rem] w-[42%] items-center justify-center sm:h-[20rem]">
      </div>
    </div>
          </RevealOnScroll>
  )
}