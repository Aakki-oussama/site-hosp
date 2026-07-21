import { valeurs, type Valeur } from "@/data/about/valus"
import { Icon, ShieldCheck } from "@/components/shared/icons"
import { Badge } from "@/components/ui/badge"

export function ValuesSection() {
  return (
    <section className="relative bg-background py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <div className="mb-12 max-w-2xl">
          <Badge variant="subtle" className="mb-3 gap-2">
            <ShieldCheck aria-hidden="true" />
            Ce qui nous définit
          </Badge>
          <h2 className="h-title"
          >
            Nos {" "}
            <span className="text-gradient">
              Valeurs
            </span>{" "}
            .
          </h2>
          <p className="section-description mp-2">
            Les principes qui guident notre engagement au quotidien dans la fabrication et la distribution de nos solutions d&apos;hygiène.
          </p>
        </div>

        {/* 4 Cards in one line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valeurs.map((valeur: Valeur) => (
            <div
              key={valeur.id}
              className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="absolute -top-3 -left-3 text-5xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors select-none">
                {valeur.numero}
              </div>

              <div className="relative">
                <div className="mb-4 inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon icon={valeur.icone} size="md" color="primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{valeur.titre}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{valeur.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
