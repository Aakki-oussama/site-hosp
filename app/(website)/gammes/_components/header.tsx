import { ShieldCheck } from "@/components/shared/icons";
import { Badge } from "@/components/ui/badge";

export function GammeHeader() {
  return (
    <div className="container-section pt-24 pb-6 lg:pt-38 lg:pb-6">

      {/* Eyebrow */}
      <Badge variant="subtle" className="mb-3 gap-2">
        <ShieldCheck aria-hidden="true" />
        Nos Gammes
      </Badge>

      {/* Title */}
      <h1 className="feature-title">
        Découvrez{" "}
        <span className="text-gradient"> Nos produits</span>
      </h1>

    </div>
  )
}