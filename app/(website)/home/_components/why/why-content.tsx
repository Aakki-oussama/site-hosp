import { ShieldCheck, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { RevealOnScroll } from "@/components/shared/animation/revealonscroll"


const features = [
    { icon: ShieldCheck, label: "Fabricant direct certifié" },
    { icon: Sparkles, label: "Solutions sur mesure" },
]

export function WhyContent() {
    return (
        <div className="space-y-4 md:space-y-5">

            {/* Badge */}
            <Badge variant="subtle" className="gap-2">
                <span className="size-2 rounded-full bg-brand-green" />
                Pourquoi nous choisir ?
            </Badge>

            {/* Title */}
            <h2 className="home-title">
                Pourquoi choisir{" "}
                <span className="text-gradient">
                    Polaris Industrie Hosp
                </span>{" "}
                ?
            </h2>

            {/* Description */}
            <p className=" section-description">
                Depuis plus de 51 ans, nous accompagnons les professionnels avec des
                produits d&apos;hygiène fiables, certifiés et fabriqués localement au Maroc.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="size-5 text-primary" />
                        </div>
                        <span className="feature-item">{label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}