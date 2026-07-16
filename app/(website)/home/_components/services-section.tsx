import { ServiceContent } from "./services/service-content"
import { ServiceCard } from "./services/service-card"

export function ServicesSection() {
  return (
    <section className="bg-background py-14 md:py-16 lg:py-20">
      <div className="container-section">
        <div className="space-y-8">
          <ServiceContent />
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}
