import { GammeContent } from "./gammes/gammes-content"
import { GammesCard } from "./gammes/gammes-card"

export function GammesSection() {
  return (
    <section className="bg-surface py-12">
      <div className="container-section">
        <div className="space-y-8">
          <GammeContent />
          <GammesCard/>
        </div>
      </div>
    </section>
  )
}
