import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Award,
  BadgeCheck,
} from "lucide-react";

import { companyInfo } from "@/config/infos";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-background" />

      <div
        aria-hidden
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-green/5 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Parlons de votre projet
        </p>

        <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight lg:text-5xl">
          Besoin d&apos;une solution{" "}
          <span className="text-primary">
            d&apos;hygiène professionnelle
          </span>{" "}
          ?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/80">
          Nous accompagnons les établissements hospitaliers, hôteliers et
          industriels avec des solutions fiables, certifiées et adaptées à
          leurs exigences.
        </p>

        {/* Trust points */}
<div className="mt-8 flex flex-wrap items-start justify-center gap-8">
  <div className="flex items-start gap-3 text-left">
    <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />

    <div>
      <p className="text-sm font-semibold text-foreground">
        Devis personnalisé
      </p>

      <p className="text-xs text-muted-foreground">
        Adapté à vos volumes
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3 text-left">
    <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />

    <div>
      <p className="text-sm font-semibold text-foreground">
        Certifications ISO
      </p>

      <p className="text-xs text-muted-foreground">
        ISO 9001 & ISO 13485
      </p>
    </div>
  </div>
</div>
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Demander un devis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href={`tel:${companyInfo.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              {companyInfo.phone}
            </Link>
          </Button>
        </div>

        {/* Support note */}
        <p className="mt-6 text-sm text-muted-foreground">
          Réponse sous 24 h pendant les jours ouvrables • Support disponible du
          lundi au vendredi
        </p>
      </div>
    </section>
  );
}