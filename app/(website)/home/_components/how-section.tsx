import { HowCard } from "./how/how-card"
import { HowContent } from "./how/how-content"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function HowSection() {
  return (
    <section className="bg-background py-12 ">
      <div className="container-section">
        <RevealOnScroll direction="up">
          <div className="space-y-8 lg:space-y-14">
            <HowContent />
            <HowCard />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
