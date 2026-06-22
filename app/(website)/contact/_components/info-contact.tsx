import { BrandCard } from "@/components/shared/brand-card"
import { contactItems } from "@/config/infos"
import type { LucideIcon } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="w-full space-y-6">
      <h2 className="font-heading text-3xl font-bold text-foreground">
        Contactez-nous
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon as LucideIcon

          const content = item.href ? (
            <a
              href={item.href}
              className="hover:text-primary transition-colors duration-200 break-all"
              aria-label={`${item.title}: ${item.label}`}
            >
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )

          return (
            <BrandCard
              key={index}
              title={item.title}
              note={item.note}
              icon={<IconComponent className="size-[18px]" aria-hidden="true" />}
            >
              {content}
            </BrandCard>
          )
        })}
      </div>
    </div>
  )
}