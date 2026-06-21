"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { companyInfo } from "@/config/infos"
import{ navLinks } from "@/config/navigation"
import { cn } from "@/lib/utils"

function isActiveLink(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isTransparent = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex shrink-0 items-center">
            <span
              className={cn(
                "font-heading font-bold text-lg tracking-tight transition-colors",
                isTransparent ? "text-white" : "text-gradient-brand"
              )}
            >
              {companyInfo.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors group",
                    isTransparent
                      ? isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-all duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors",
                isTransparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>

            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-xs tracking-wide"
            >
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              className={cn(
                "p-2 rounded-md transition-colors",
                isTransparent ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-72 p-0">
          <SheetHeader className="border-b border-border p-6 pb-4">
            <SheetTitle className="sr-only">{companyInfo.name}</SheetTitle>
            <SheetDescription className="sr-only">
              Menu de navigation du site
            </SheetDescription>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex shrink-0 items-center"
            >
              <span className="font-heading text-lg font-bold tracking-tight text-gradient-brand">
                {companyInfo.name}
              </span>
            </Link>
          </SheetHeader>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              )
            })}
          </nav>
          <div className="p-4 pt-2 border-t border-border mt-auto">
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-muted-foreground py-2"
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phoneDisplay}
            </a>
            <Button asChild className="mt-3 w-full font-heading font-semibold text-sm">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
