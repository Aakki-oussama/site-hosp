import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { gammesDetails } from "@/data/gammes/gammes-detail"
import { Card, CardTitle } from "@/components/ui/card"

export function GammesCard() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {gammesDetails.map((gamme) => (
        <Link
          key={gamme.slug}
          href={`/gammes/${gamme.slug}`}
          className="group block h-full"
        >
          <Card className="relative h-full min-h-[280px] overflow-hidden border-border/60 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[320px]">
            <Image
              src={gamme.image}
              alt={`${gamme.title} ${gamme.highlightedTitle ?? ""}`.trim()}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
              <CardTitle className="font-heading text-lg font-semibold text-white">
                {gamme.title}
                {gamme.highlightedTitle ? (
                  <span className="text-background"> {gamme.highlightedTitle}</span>
                ) : null}
              </CardTitle>

              <p className="text-sm leading-relaxed text-white/85 max-sm:line-clamp-2 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-h-24 sm:group-hover:opacity-100">
                {gamme.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                Découvrir
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
