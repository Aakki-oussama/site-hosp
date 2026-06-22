"use client"

import { Clock } from "lucide-react"
import { BrandCard } from "@/components/shared/brand-card"
import { companyInfo } from "@/config/infos"

export function BusinessHours() {
  return (
    <BrandCard
      icon={<Clock className="size-[18px]" aria-hidden="true" />}
      title="Heures d'ouverture"
    >
      <div className="space-y-3">
        {companyInfo.businessHours.map((item) => (
          <div key={item.label}>
            <p className="font-medium text-foreground">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.hours}</p>
          </div>
        ))}
      </div>
    </BrandCard>
  )
}