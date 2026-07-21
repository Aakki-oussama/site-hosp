import { Clock } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { companyInfo } from "@/config/infos"

export function BusinessHours() {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="flex items-center gap-2.5 border-b border-border/60 px-4 py-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Clock className="size-4" aria-hidden />
          </div>
          <CardTitle className="font-heading text-sm font-semibold">
            Heures d&apos;ouverture
          </CardTitle>
        </div>

        <ul className="divide-y divide-border/60">
          {companyInfo.businessHours.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="font-heading text-sm font-semibold text-foreground tabular-nums">
                {item.hours}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
