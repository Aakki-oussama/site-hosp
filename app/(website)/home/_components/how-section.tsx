import { HowCard } from "./how/how-card"
import { HowContent } from "./how/how-content"

export function HowSection() {
  return (
    <section className="bg-background py-12 ">
      <div className="container-section">
        <div className="space-y-8 lg:space-y-14">
          <HowContent />
          <HowCard />
        </div>
      </div>
    </section>
  )
}
