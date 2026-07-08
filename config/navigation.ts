export type NavLink = {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/gammes", label: "Nos Gammes" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
]