import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutImages } from "./about/about-images"
import { AboutContent } from "./about/about-content"
import { AboutStatCard } from "./about/card-content"
import { AboutFeatures } from "./about/feature-about"
import { AboutProgress } from "./about/about-progress"

export function AboutSection() {
  return (
    <section className="bg-surface py-14 md:py-16 lg:py-20">
      <div className="container-section">
        <div className="grid items-start gap-2 md:gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-4">
          {/* Left — image placeholders */}
          <AboutImages />

          {/* Right — content */}
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-8">
            <AboutContent />

            {/*
              Mobile:  full-width card → features → progress (seal hidden)
              Tablet+: card + features + seal on one row
            */}
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-4 lg:gap-6">
              <AboutStatCard />
              <AboutFeatures />
            </div>

            <AboutProgress />

            <Button asChild className="w-full gap-2 sm:w-fit">
              <Link href="/about">
                En savoir plus
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
