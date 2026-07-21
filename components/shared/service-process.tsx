import { ChevronRight, ChevronDown } from "lucide-react"
import type { Step } from "@/data/services/services"
import { ReactNode } from "react"

interface ServiceProcessProps {
  title: ReactNode
  steps: Step[]
}

export function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <div className="mt-18">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6 text-center">
        {title}
      </p>

      {/* Mobile — vertical stack */}
      <div className="flex flex-col items-center md:hidden">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            {/* Step */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="inline-flex items-center justify-center size-8 rounded-full bg-primary text-white font-heading font-bold text-xs shrink-0">
                {step.number}
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground font-heading">
                {step.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
            {/* Down arrow */}
            {index < steps.length - 1 && (
              <ChevronDown className="size-4 text-primary my-2" aria-hidden />
            )}
          </div>
        ))}
      </div>

      {/* Desktop — horizontal row */}
      <div className="hidden md:flex items-start gap-0">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-start flex-1">
            {/* Step content */}
            <div className="flex flex-col items-center text-center flex-1 px-2">
              <div className="inline-flex items-center justify-center size-8 rounded-full bg-primary text-white font-heading font-bold text-xs shrink-0">
                {step.number}
              </div>
              <p className="mt-2 text-sm font-semibold text-foreground font-heading">
                {step.title}
              </p>
              <p className="mt-1 text-xs text-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
            {/* Right arrow */}
            {index < steps.length - 1 && (
              <div aria-hidden className="flex items-center mt-3.5 shrink-0">
                <div className="w-4 h-px bg-primary" />
                <ChevronRight className="size-4 text-primary -ml-1" />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}