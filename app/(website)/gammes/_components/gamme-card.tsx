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

interface GammeCardProps {
  title: string
  description: string
  icon: LucideIcon
  slug: string
  productCount: number
  usagePlaces: string[]
}

export function GammeCard({
  title,
  description,
  icon: Icon,
  slug,
  productCount,
  usagePlaces,
}: GammeCardProps) {
  return (
    <Link href={`/gammes/${slug}`} className="block h-full">
      <Card className="h-full border-border/70 bg-background/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
        <CardHeader className="gap-3 px-4 pb-3 pt-4 sm:px-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <Badge
              variant="secondary"
              className="rounded-full border border-foreground/20 px-2.5 py-1 text-[11px] font-semibold text-primary"
            >
              {productCount} produits
            </Badge>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-lg leading-snug sm:text-[1.05rem]">
              {title}
            </CardTitle>
            <CardDescription className="text-sm leading-6 text-foreground">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 px-4 pb-4 sm:px-5">
          <div className="flex items-center gap-3">
            <Separator className="flex-1 bg-primary/20" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
              Utilisé dans
            </span>
            <Separator className="flex-1 bg-primary/20" />
          </div>

          <div className="flex flex-wrap gap-2">
            {usagePlaces.map((place) => (
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
              Voir plus
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
