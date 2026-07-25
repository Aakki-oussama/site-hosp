import { ServiceContent } from "./services/service-content"
import { HomeServices } from "./services/service-card"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

export function ServicesSection() {
  return (
    <section className="bg-background py-12">
      <div className="container-section">
        <RevealOnScroll direction="up">
          <div className="space-y-8">
            <ServiceContent />
            <HomeServices />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
