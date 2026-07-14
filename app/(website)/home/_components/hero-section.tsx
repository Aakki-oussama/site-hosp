import Image from "next/image"
import { HeroBadge } from "./hero/hero-badge"
import { HeroText } from "./hero/hero-text"
import { HeroCta } from "./hero/hero-cta"
import { AvatarGroupCountExample } from "./hero/avatar"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-start overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home/hero-hero.webp"
          alt="Polaris Industrie Hosp — Hygiène professionnelle au Maroc"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-section pb-16 lg:pb-24 pt-32 flex flex-col gap-4">
        <HeroBadge />
        <HeroText />
        <HeroCta />
        <AvatarGroupCountExample />
      </div>

    </section>
  )
}