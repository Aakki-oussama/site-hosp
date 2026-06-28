import { type LucideIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

const iconSizes = cva("shrink-0", {
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
    color: {
      primary: "text-primary",
      muted: "text-muted-foreground",
      foreground: "text-foreground",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "foreground",
  },
})

interface IconProps extends VariantProps<typeof iconSizes> {
  icon: LucideIcon
  className?: string
}

export function Icon({ icon: Icon, size, color, className }: IconProps) {
  return (
    <Icon className={iconSizes({ size, color, className })} aria-hidden="true" />
  )
}

export {Sparkles, ShieldCheck, HeartHandshake, Leaf, Phone, Mail, MapPin, Factory, MessageCircleMore, Clock, HelpCircle } from "lucide-react"