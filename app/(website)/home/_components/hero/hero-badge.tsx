import { ShieldCheck } from "lucide-react"

export function HeroBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
      <ShieldCheck className="size-4 text-primary" />
      <span className="text-xs font-semibold uppercase tracking-widest text-white">
        Polaris Industrie Hosp — Maroc
      </span>
    </div>
  )
}