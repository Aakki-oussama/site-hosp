import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { WhyImages } from "./why/why-images"
import { WhyContent } from "./why/why-content"
import { WhyUsFeatures } from "./why/why-features"

export function WhySection() {
  return (
    <section className="bg-surface py-12">
      <div className="container-section">
        <div className="grid items-start gap-2 md:gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-16">

          {/* Left — image */}
          <WhyImages />

          {/* Right — content */}
          <div className="flex flex-col gap-4 md:gap-4 lg:gap-6">
            <WhyContent />
            <Separator />
            <WhyUsFeatures />

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