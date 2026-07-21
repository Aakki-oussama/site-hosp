import { Boxes, ShieldCheck, Sparkles, Truck } from "lucide-react"
import { ServiceCardHome } from "@/components/shared/cards/service-card-home"

const services = [
  {
    icon: ShieldCheck,
    label: "Désinfection & Nettoyage",
    description:
      "Des solutions de nettoyage et de désinfection fiables pour les environnements professionnels, sanitaires et industriels.",
  },
  {
    icon: Sparkles,
    label: "Conception & Production",
    description:
      "Une production adaptée à vos besoins avec des formulations pensées pour performance, sécurité et conformité.",
  },
  {
    icon: Boxes,
    label: "Vente & Distribution",
    description:
      "Un réseau de distribution structuré pour répondre rapidement aux besoins de nos clients et partenaires.",
  },
  {
    icon: Truck,
    label: "Livraison & Logistique",
    description:
      "Une logistique organisée et réactive pour garantir des livraisons ponctuelles et sécurisées.",
  },
]

export function HomeServices() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map(({ icon: Icon, label, description }) => (
          <ServiceCardHome
            key={label}
            icon={<Icon className="size-[18px]" aria-hidden="true" />}
            title={label}
            description={description}
          />
        ))}
      </div>

      {/* Trust text */}
      <p className="text-center text-sm text-muted-foreground">
        Tous nos produits sont{" "}
        <span className="font-semibold bg-gradient-to-r from-primary to-brand-green bg-clip-text text-transparent">
          testés et certifiés
        </span>{" "}
        avant livraison.{" "}
        <span className="font-semibold bg-gradient-to-r from-primary to-brand-green bg-clip-text text-transparent">
          Votre satisfaction est notre priorité.
        </span>
      </p>
    </div>
  )
}
