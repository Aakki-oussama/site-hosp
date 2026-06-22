import Link from "next/link"
import { companyInfo , footerContact } from "@/config/infos"
import { gammes } from "@/data/gammes"
import { cn } from "@/lib/utils"
import{ navLinks } from "@/config/navigation"

const sectionTitleClass =
  "font-heading text-sm font-bold uppercase tracking-wider text-foreground"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 border-t border-border bg-muted">
      <div className="container-page pt-16 pb-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-heading text-lg font-black text-gradient-brand">
              {companyInfo.name}
            </span>
            <div className="mt-1 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground">
              {companyInfo.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className={sectionTitleClass}>Nos Gammes</p>
            <div className="mt-1 h-1 w-16 rounded-full bg-primary" />
            <ul className="mt-5 space-y-3">
              {gammes.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/gamme/${g.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-foreground transition-colors"
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-all group-hover:w-3",
                        g.color === "blue" ? "bg-brand-blue" : "bg-brand-green"
                      )}
                    />
                    {g.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className={sectionTitleClass}>Navigation</p>
            <div className="mt-1 h-1 w-16 rounded-full bg-primary" />
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className={sectionTitleClass}>Contact</p>
            <div className="mt-1 h-1 w-16 rounded-full bg-primary" />
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              {footerContact.map(({ icon: Icon, iconClassName, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    className={cn("mt-0.5 h-4 w-4 shrink-0", iconClassName)}
                    aria-hidden="true"
                  />
                  {href ? (
                    <a href={href} className="hover:text-primary">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {companyInfo.name}. Tous droits réservés.
          </p>
          <p className="font-heading italic">{companyInfo.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
