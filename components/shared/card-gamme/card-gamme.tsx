import Image from "next/image"
import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface CardGammeProps {
  title: string
  highlightedTitle?: string
  description: string
  href: string
  image?: string
  imageAlt?: string
  icon?: LucideIcon
  productCount?: number
  usagePlaces?: string[]
  ctaLabel?: string
  className?: string
}

export function CardGamme({
  title,
  highlightedTitle,
  description,
  href,
  image,
  imageAlt,
  icon: Icon,
  productCount,
  usagePlaces,
  ctaLabel = "Découvrir",
  className,
}: CardGammeProps) {
  const imageLabel = imageAlt ?? `${title}${highlightedTitle ? ` ${highlightedTitle}` : ""}`.trim()
  const hasUsage = usagePlaces && usagePlaces.length > 0

  return (
    <Link href={href} className={className ?? "block h-full"}>
      <Card className="h-full overflow-hidden border-border/70 bg-background/80 py-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image}
              alt={imageLabel}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-3">
              {Icon ? (
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-primary shadow-sm sm:h-10 sm:w-10">
                  <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
              ) : null}

              {typeof productCount === "number" ? (
                <Badge
                  variant="secondary"
                  className="rounded-full border border-white/40 bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm"
                >
                  {productCount} produits
                </Badge>
              ) : null}
            </div>
          </div>
        ) : null}

        <CardHeader className="gap-1 px-4 sm:px-5">
          {!image && Icon ? (
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {typeof productCount === "number" ? (
                <Badge
                  variant="secondary"
                  className="rounded-full border border-foreground/20 px-2.5 py-1 text-[11px] font-semibold text-primary"
                >
                  {productCount} produits
                </Badge>
              ) : null}
            </div>
          ) : null}

          <div className="space-y-2">
            <CardTitle className="text-lg leading-snug sm:text-[1.05rem]">
              {title}
              {highlightedTitle && <span className="text-gradient"> {highlightedTitle}</span>}
            </CardTitle>
            <CardDescription className="text-sm leading-6 text-foreground">
              {description}
            </CardDescription>

            {!hasUsage ? (
              <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </div>
            ) : null}
          </div>
        </CardHeader>

        {hasUsage ? (
          <CardContent className="space-y-3 px-4 pb-4 sm:px-5">
            <div className="flex items-center gap-3">
              <Separator className="flex-1 bg-primary/20" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                Utilisé dans
              </span>
              <Separator className="flex-1 bg-primary/20" />
            </div>

            <div className="flex flex-wrap gap-2">
              {usagePlaces?.map((place) => (
                <Badge
                  key={place}
                  variant="outline"
                  className="rounded-full border-primary/20 bg-primary/5 text-primary"
                >
                  {place}
                </Badge>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-end pt-1">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
