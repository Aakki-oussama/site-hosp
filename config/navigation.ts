export type NavLink = {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/nos-gammes", label: "Nos Gammes" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
]