import { type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  label: string
  description?: string
}

export function ServiceCard({ icon: Icon, label, description }: ServiceCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <CardContent className="flex flex-col gap-3">

        {/* Icon */}
        <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="size-5 text-primary" />
        </div>

        {/* Label */}
        <p className="font-heading text-base font-bold text-foreground">
          {label}
        </p>

        {/* Description — optional */}
        {description && (
          <p className="text-sm text-foreground/80 leading-relaxed">
            {description}
          </p>
        )}

      </CardContent>
    </Card>
  )
}