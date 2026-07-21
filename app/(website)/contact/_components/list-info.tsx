import { contactItems } from "@/config/infos"

export function ListInfo() {
  return (
    <div className="w-full space-y-6">
      <h2 className="h-title">
        Contactez <span className="text-gradient">-Nous</span>.
      </h2>

      <div className="space-y-3 rounded-2xl border border-border/60 bg-surface/70 p-3 shadow-sm">
        {contactItems.map((item) => {
          const IconComponent = item.icon

          const content = item.href ? (
            <a
              href={item.href}
              className="break-all text-sm text-foreground/90 transition-colors hover:text-primary"
              aria-label={`${item.title}: ${item.label}`}
            >
              {item.label}
            </a>
          ) : (
            <span className="break-words text-sm text-foreground/90">{item.label}</span>
          )

          return (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border-b border-border/60 px-2 py-3 transition-colors duration-200 hover:bg-primary/5 hover:shadow-sm last:border-b-0"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IconComponent className="h-[18px] w-[18px]" />
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                {content}
                {item.note ? (
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}