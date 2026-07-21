import Image from "next/image"

export function AboutImages() {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-10 md:mx-0 md:max-w-none md:pb-20 lg:pb-24">

      {/* Main image — left, taller */}
      <div className="relative mr-auto h-[22rem] w-[72%] overflow-hidden rounded-3xl sm:h-[26rem] lg:h-[32rem]">
        <Image
          src="/images/home/about-images.webp"
          alt="Hygiène professionnelle Polaris Industrie Hosp"
          fill
          sizes="(max-width: 768px) 85vw, 45vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Small image — bottom-right, half inside half outside */}
      <div className="absolute bottom-4 right-0 h-[12rem] w-[42%] overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-[20rem] lg:h-[20rem]">
        <Image
          src="/images/home/gel.webp"
          alt="Solutions désinfection certifiées Polaris"
          fill
          sizes="(max-width: 768px) 55vw, 25vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}