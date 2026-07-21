import { ServiceContent } from "./services/service-content"
import { HomeServices } from "./services/service-card"

export function ServicesSection() {
  return (
    <section className="bg-background py-12">
      <div className="container-section">
        <div className="space-y-8">
          <ServiceContent />
          <HomeServices />
        </div>
      </div>
    </section>
  )
}
