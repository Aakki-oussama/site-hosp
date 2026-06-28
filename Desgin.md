# DESIGN SYSTEM — Polaris Industrie HOSP
# Based on globals.css — never hardcode values outside this file

---

## PHILOSOPHY

Every section must have a **unique visual identity**.
Design must feel **human-crafted** — not AI-generated.
Generous whitespace. Micro-interactions on every interactive element.
Mobile-first. Accessible. No decorative elements without purpose.

---

## COLOR TOKENS — globals.css only

Never hardcode hex or oklch values. Use only these Tailwind classes:

### Base
| Token | Class | Usage |
|---|---|---|
| Background | `bg-background` | Page background |
| Foreground | `text-foreground` | Primary text |
| Card | `bg-card` | Card surfaces |
| Card text | `text-card-foreground` | Text on cards |
| Muted bg | `bg-muted` | Subtle sections, footer |
| Muted text | `text-muted-foreground` | Secondary text, captions |
| Border | `border-border` | All borders |
| Input | `border-input` | Form inputs |
| Ring | `ring-ring` | Focus rings |

### Brand
| Token | Class | Usage |
|---|---|---|
| Primary (blue) | `bg-primary` / `text-primary` | CTA, active states, accents |
| Primary fg | `text-primary-foreground` | Text on primary bg |
| Brand blue | `bg-brand-blue` / `text-brand-blue` | Blue decorations |
| Brand green | `bg-brand-green` / `text-brand-green` | Green accents, dividers |
| Brand green fg | `text-brand-green-foreground` | Text on green bg |
| Surface | `bg-surface` | Elevated panels |
| Surface muted | `bg-surface-muted` | Subtle panel variant |

### Gradients
```tsx
// Brand gradient — blue → green
className="text-gradient-brand"   // utility in globals.css
// or inline
style={{ background: "var(--gradient-brand)" }}
```

### Opacity variants allowed
```tsx
bg-primary/10     // light primary tint
bg-brand-green/15 // soft green glow
text-foreground/80
border-border/50
```

---

## TYPOGRAPHY

```tsx
// Titles — always font-heading (Montserrat)
className="font-heading text-3xl font-bold tracking-tight"
className="font-heading text-6xl font-black leading-tight"

// Body — always font-sans (Instrument Sans)
className="font-sans text-base leading-relaxed"
className="font-sans text-sm text-muted-foreground"

// Badge / label
className="font-heading text-xs font-bold uppercase tracking-wider"
```

### Type scale
| Role | Classes |
|---|---|
| Hero H1 | `font-heading text-5xl sm:text-7xl font-black tracking-tight` |
| Section H2 | `font-heading text-3xl sm:text-5xl font-bold tracking-tight` |
| Card H3 | `font-heading text-xl font-bold` |
| Body lg | `text-lg leading-relaxed text-foreground/80` |
| Body base | `text-base leading-relaxed text-foreground/80` |
| Caption | `text-sm text-muted-foreground` |
| Badge | `text-xs font-bold uppercase tracking-wider` |

---

## SPACING & LAYOUT

```tsx
// Page container — always use this utility
className="container-page"   // defined in globals.css

// Section vertical rhythm
className="py-20 lg:py-28"   // hero
className="py-16 lg:py-24"   // standard section
className="py-12 lg:py-16"   // compact section

// Section gap between elements
className="mt-4"   // badge → title
className="mt-3"   // title → divider
className="mt-6"   // divider → description
className="mt-10"  // description → content
className="mt-16"  // content → next block
```

---

## BORDER RADIUS

From `--radius: 0.625rem` in globals.css:

| Class | Value | Usage |
|---|---|---|
| `rounded-sm` | ~0.375rem | Small chips |
| `rounded-md` | ~0.5rem | Inputs, small cards |
| `rounded-lg` | 0.625rem | Standard cards |
| `rounded-xl` | ~0.875rem | Large cards |
| `rounded-2xl` | ~1.125rem | Panels |
| `rounded-3xl` | ~1.375rem | Hero blobs |
| `rounded-full` | 999px | Badges, pills, dots |

---

## ANIMATIONS — tw-animate-css (already imported)

Available via `tw-animate-css`. Use sparingly and purposefully.

```tsx
// Entrance — scroll reveals
className="animate-fade-up"
className="animate-fade-in"
className="animate-slide-in-from-left"
className="animate-slide-in-from-right"

// Ambient — background only
className="animate-pulse"    // subtle glow blobs
className="animate-spin"     // loading states only

// Interactive — hover micro-interactions
"transition-all duration-300"
"hover:-translate-y-1"
"hover:shadow-lg"
"group-hover:scale-105"
"group-hover:w-3"            // dot expand (already used in footer)
```

### Animation rules
- Entrance animations: scroll-triggered only — never on page load for all elements
- Max 2 ambient animations visible at once
- Hover transitions: `duration-200` for fast feedback, `duration-300` for transforms
- Never animate text content — only containers and decorative elements
- Always respect `prefers-reduced-motion`

```tsx
// Reduced motion safe pattern
className="transition-transform duration-300 motion-reduce:transition-none"
```

---

## DOT GRID — utility from globals.css

```tsx
// Already defined as @layer utilities
className="dot-grid opacity-30"

// Or inline (same output)
style={{
  backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
}}
```

---

## SHARED COMPONENTS — never duplicate

### `<SectionHeader>` — `@/components/website/section-header`
Use for ALL section titles. Props: `title`, `highlight`, `badge`, `description`, `note`, `align`, `variant`, `headingLevel`.

```tsx
<SectionHeader
  variant="simple"
  badge="Nos Services"
  title="Ce que nous"
  highlight="offrons"
  description="..."
  align="center"
  headingLevel="h2"
/>
```

### `<Icon>` — `@/components/shared/icon`
Use for all icons with CVA variants. Never use raw Lucide in UI without this wrapper unless styling manually.

```tsx
<Icon icon={Phone} size="sm" color="primary" />
<Icon icon={MapPin} size="md" color="green" />
```

### `next/image` — always, never `<img>`
```tsx
<Image src="/..." alt="description" width={} height={} className="..." />
```

### `next/link` — internal navigation
### `<a>` — external links and `tel:` / `mailto:`

---

## SECTION IDENTITY RULES

Each section MUST have a visually distinct personality. Forbidden: two consecutive sections with the same background, layout direction, or decoration style.

| Section | Background | Layout | Signature element |
|---|---|---|---|
| Hero | `bg-background` transparent | Full screen, split | Animated slider, floating icons |
| About | `bg-muted` | Left text / right visual | Stat counters, accent border-left |
| Services | `bg-background` | Grid 3 cols | Cards with hover glow + icon bg |
| Valeurs | `bg-surface` | Alternating or 2-col | Large number accent per valeur |
| Gammes | `bg-muted` | Cards grid | Color-coded by gamme, dot grid bg |
| Clients | `bg-background` | Full-width carousel | Logo strip + testimonial slider |
| Contact | `bg-surface` | Split 60/40 | Map or info panel right side |

---

## DECORATIVE PATTERNS

### Divider line — after every section title
```tsx
<div className="mt-3 h-1 w-12 rounded-full bg-brand-green" aria-hidden="true" />
```

### Dot grid overlay
```tsx
<div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden="true" />
```

### Blob accent
```tsx
<div className="absolute -bottom-16 -left-16 size-72 rounded-full bg-brand-green/15 blur-3xl pointer-events-none" aria-hidden="true" />
<div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden="true" />
```

### Vertical line
```tsx
<div className="absolute top-0 left-1/4 w-px h-full bg-border/60" aria-hidden="true" />
```

### Badge
```tsx
<div className="inline-flex items-center gap-2 rounded-full border border-brand-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
  <Icon icon={Sparkles} size="xs" color="primary" />
  Label
</div>
```

---

## ACCESSIBILITY CHECKLIST

- `lang="fr"` on `<html>` ✅
- All decorative icons: `aria-hidden="true"` ✅
- All interactive elements: `aria-label` if no visible text
- All images: meaningful `alt`
- Semantic HTML: `<section>`, `<nav>`, `<main>`, `<footer>`, `<article>`
- Focus ring visible: `focus-visible:ring-2 focus-visible:ring-ring`
- Color contrast: minimum 4.5:1 on all text
- Skip link at top of page

---

## PERFORMANCE CHECKLIST

- `"use client"` only for: sliders, forms, scroll listeners, animations
- All images: `next/image` with explicit `width` + `height`
- All fonts: `next/font` — never `@import`
- Icons: named imports only — never `import * as Icons`
- No `any` type — strict TypeScript
- No `console.log` in production
- Sections with data: wrap in `<Suspense>` with skeleton fallback

---

## CODE RULES — NEVER DO THIS

```tsx
❌ style={{ color: '#0a5ea8' }}         // hardcoded color
❌ <img src="..." />                     // use next/image
❌ import * as Icons from "lucide-react" // named imports only
❌ const data: any = {}                  // no any
❌ { params }: { params: { id: string }}// must be async in Next.js 16
❌ console.log(data)                     // no logs
❌ "Polaris Industrie" hardcoded         // import from @/config/info
```