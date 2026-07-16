import { ShieldCheck } from "lucide-react"

const TEXT = "ISO 9001 • ISO 45001 • "

export function Certification() {
  const chars = TEXT.split("")
  const step = 360 / chars.length

  return (
    <div
      className="relative size-20 shrink-0 sm:size-24 lg:size-28"
    >
      <div className="absolute inset-0 rounded-full border border-primary/10 bg-primary/60 shadow-sm" />

      <div
        className="absolute inset-0 animate-[spin_20s_linear_infinite]"
        aria-hidden
      >
        {chars.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="absolute inset-0 flex justify-center"
            style={{ transform: `rotate(${index * step}deg)` }}
          >
            <span className="mt-1.5 text-[7px] font-bold uppercase leading-none text-foreground sm:mt-2 sm:text-[8px] lg:text-[9px]">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </div>

      <div className="absolute inset-[22%] z-10 flex items-center justify-center rounded-full bg-background/95 shadow-inner">
        <div className="flex size-[88%] items-center justify-center rounded-full bg-primary/10">
          <ShieldCheck className="size-5 text-primary sm:size-6 lg:size-7" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  )
}
