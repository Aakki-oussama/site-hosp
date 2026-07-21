import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  note?: string
  children: ReactNode
  className?: string
}

export function InfoCard({
  icon: Icon,
  title,
  note,
  children,
  className,
}: InfoCardProps) {
  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden border-border/60 bg-card py-0 shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      <Icon
        className="pointer-events-none absolute -right-2 -top-2 size-20 text-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/25"
        aria-hidden
      />

      <CardContent className="relative flex h-full flex-col gap-1.5 px-4 py-3.5">
        <CardTitle className="font-heading text-sm font-semibold text-primary">
          {title}
        </CardTitle>

        <div className="text-base font-semibold tracking-tight text-foreground break-words [&_a]:transition-colors [&_a]:hover:text-primary">
          {children}
        </div>

        {note ? (
          <CardDescription className="mt-auto text-xs leading-relaxed">
            {note}
          </CardDescription>
        ) : null}
      </CardContent>
    </Card>
  )
}
