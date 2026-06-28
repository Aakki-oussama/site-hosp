import { CheckCircle, Award, Globe } from "lucide-react"

const missionPoints = [
  "Protéger la santé dans les établissements de soins",
  "Accompagner chaque client avec un service personnalisé",
  "Innover en permanence pour des solutions plus efficaces",
  "Respecter l'environnement avec des formules biosourcées",
]

const visionStats = [
  { icon: Award, label: "Qualité certifiée", sub: "Normes EN/NF" },
  { icon: Globe, label: "+10 ans", sub: "D'expérience" },
]

export function MissionSection() {
  return (
    <section className="py-12 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Notre Mission */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Pourquoi nous existons
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Notre Mission
            </h2>
            <p className="text-foreground text-base leading-relaxed mb-8">
              Fournir aux professionnels de santé et aux industriels des solutions d&apos;hygiène innovantes,
              efficaces et durables qui protègent les personnes, les environnements et la réputation de nos clients.
            </p>
            <ul className="flex flex-col gap-3">
              {missionPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="size-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Notre Vision */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Où nous allons
            </p>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Notre Vision
            </h3>
            <p className="text-foreground text-base leading-relaxed mb-8">
              Devenir le partenaire de référence de l&apos;hygiène professionnelle au Maroc, reconnu pour
              la fiabilité de nos produits, la réactivité de notre service et notre engagement envers
              l&apos;environnement.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {visionStats.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <Icon className="size-5 text-primary" />
                  <span className="font-heading text-base font-bold text-foreground">{label}</span>
                  <span className="text-xs text-muted-foreground">{sub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
