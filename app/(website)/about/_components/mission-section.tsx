import { CheckCircle, Award, Globe, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"

const missionPoints = [
  "Protéger la santé dans les établissements de soins",
  "Accompagner chaque client avec un service personnalisé",
  "Innover en permanence pour des solutions plus efficaces",
  "Respecter l'environnement avec des formules biosourcées",
]

const visionStats = [
  { icon: Award, label: "Qualité certifiée", sub: "Normes EN/NF" },
  { icon: Globe, label: "+50 ans", sub: "D'expérience" },
]

export function MissionSection() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <RevealOnScroll direction="left">
            
            {/* Notre Mission */}
            <div>
              <Badge variant="subtle" className="mb-3 gap-2">
                <ShieldCheck aria-hidden="true" />
                Pourquoi nous existons
              </Badge>
              <h2 className="h-title mb-2"
              >
                Notre {" "}
                <span className="text-gradient">
                  Misson
                </span>{" "}
                .
              </h2>
              <p className="section-description mb-8">
                Fournir aux professionnels de santé et aux industriels des solutions d&apos;hygiène innovantes,
                efficaces et durables qui protègent les personnes, les environnements et la réputation de nos clients.
              </p>
              <ul className="flex flex-col gap-3">
                {missionPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 feature-item">
                    <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Notre Vision */}
          <RevealOnScroll direction="right">
            <div>
              <Badge variant="subtle" className="mb-3 gap-2">
                <ShieldCheck aria-hidden="true" />
                Où nous voulons aller
              </Badge>
              <h3 className="h-title mb-2"
              >
                Notre {" "}
                <span className="text-gradient">
                  Vision
                </span>{" "}
                .
              </h3>
              <p className="section-description mb-8">
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
          </RevealOnScroll>

        </div>
      </div>
    </section>
  )
}
