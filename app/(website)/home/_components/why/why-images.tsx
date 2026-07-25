import Image from "next/image"

export function WhyImages() {
  return (
    <div className="relative mx-auto w-full max-w-sm pb-10 md:mx-0 md:max-w-none md:pb-20 lg:pb-24">

      {/* Main image — right, taller */}
      <div className="relative ml-auto h-[22rem] w-[72%] overflow-hidden rounded-3xl border-4 border-background shadow-xl sm:h-[26rem] lg:h-[32rem] ">
        <Image
          src="/images/home/why-us.webp"
          alt="Hygiène professionnelle Polaris Industrie Hosp"
          fill
          sizes="(max-width: 768px) 85vw, 45vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>

      {/* Small image — bottom-left, half inside half outside */}
      <div className="absolute bottom-4 left-0 h-[12rem] w-[42%] overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-[20rem] lg:h-[20rem]">
        <Image
          src="/images/home/why-us-1.webp"
          alt="Solutions désinfection certifiées Polaris"
          fill
          sizes="(max-width: 768px) 55vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  )
}