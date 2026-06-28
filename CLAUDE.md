@AGENTS.md
# CLAUDE.md — Instructions for AI Assistants
# Read this file FIRST before writing any code

---

## STEP 1 — READ BEFORE CODING

Before writing any component, page, or section:

1. **Read `DESIGN.md`** — all color tokens, typography, spacing, shared components, and section identity rules
2. **Read `PROJECT-CONTEXT.md`** — folder structure, Next.js 16 rules, cache strategy, skeleton rules, SEO rules
3. **Read `@/config/info.ts`** — all company data (name, phone, email, address, navLinks)
4. **Read the relevant `@/data/` file** — gammes, products, services, clients, testimonials

---

## STEP 2 — BEFORE YOU WRITE A SINGLE LINE

Ask yourself:

- [ ] Does a shared component already exist for this? (`SectionHeader`, `Icon`, `Button`, `Sheet`...)
- [ ] Am I about to hardcode a color? → use a token from `globals.css`
- [ ] Am I about to hardcode text? → import from `@/config/info` or `@/data/`
- [ ] Am I using `<img>`? → replace with `next/image`
- [ ] Am I importing icons with wildcard? → use named imports from `lucide-react`
- [ ] Does this component need `"use client"`? → only if it uses hooks, scroll, or browser APIs
- [ ] Is this a dynamic page with `params`? → params must be `async` in Next.js 16
- [ ] Does this section read from a data file? → wrap in `<Suspense>` with a skeleton

---

## STEP 3 — SHARED COMPONENTS TO REUSE

Never rebuild what already exists:

| Need | Use |
|---|---|
| Section title + badge + description | `<SectionHeader>` from `@/components/website/section-header` |
| Icon with size/color variants | `<Icon>` from `@/components/shared/icon` |
| Navigation | `<Navbar>` from `@/components/website/navbar` |
| Page footer | `<Footer>` from `@/components/website/footer` |
| Button | `<Button>` from `@/components/ui/button` |
| Mobile drawer | `<Sheet>` from `@/components/ui/sheet` |
| Background decorations | `<HeaderDecorations>` from `@/components/website/header-decorations` |

---

## STEP 4 — SECTION IDENTITY

Every section must look different from the previous one. Check `DESIGN.md` → Section Identity Rules table before designing a section.

**Forbidden:**
- Two consecutive sections with the same background color
- Same layout direction (both left-aligned, both centered)
- Same decoration style (two dot grids, two blob accents)
- All cards looking identical across sections

---

## STEP 5 — QUALITY CHECKLIST BEFORE SUBMITTING CODE

### TypeScript
- [ ] Zero `any` types
- [ ] All props properly typed with interfaces
- [ ] Dynamic page params are `async`

### Styling
- [ ] Zero hardcoded colors (`#xxx`, `oklch(...)`, `rgb(...)`)
- [ ] Zero hardcoded text — all from data files or config
- [ ] All classes from `globals.css` tokens or Tailwind utilities

### Images & Icons
- [ ] All images use `next/image` with `alt`, `width`, `height`
- [ ] All icons use named imports from `lucide-react`
- [ ] All decorative icons have `aria-hidden="true"`

### Performance
- [ ] `"use client"` only where strictly needed
- [ ] Sections with data wrapped in `<Suspense fallback={<Skeleton />}>`
- [ ] Static sections have no unnecessary client components

### Accessibility
- [ ] All interactive elements have `aria-label` if no visible text
- [ ] Semantic HTML used (`<section>`, `<nav>`, `<main>`, `<article>`)
- [ ] Focus styles visible on all focusable elements

### SEO (for pages)
- [ ] `export const metadata` defined
- [ ] `title`, `description`, `keywords`, `openGraph`, `alternates.canonical`
- [ ] Description between 120–155 characters
- [ ] `generateMetadata` used for dynamic pages

### Next.js 16
- [ ] `params` and `searchParams` are `Promise<{...}>` and awaited
- [ ] `"use cache"` + `cacheLife()` on data-fetching sections that rarely change

---

## FOLDER RULES

```
app/(website)/[section]/
├── page.tsx              ← metadata + layout assembly only
├── loading.tsx           ← skeleton (if section reads data)
└── _components/
    ├── [section]-left.tsx
    └── [section]-right.tsx

components/
├── website/              ← shared layout components (navbar, footer, section-header...)
└── shared/               ← truly generic (icon wrapper, skeletons...)

data/                     ← pure .ts files — no React, no JSX
config/info.ts            ← single source of truth for company data
```

---

## LANGUAGE

- All UI text in **French**
- All code comments in **English** or **French** — be consistent per file
- All `alt` text in **French**
- All `aria-label` in **French**

---

## WHAT THIS PROJECT IS

**Polaris Industrie HOSP** — Moroccan manufacturer of hygiene and disinfectant products.
B2B + B2C market. Professional tone. Clean, trustworthy, modern design.
Stack: Next.js 16.2 + TypeScript strict + Tailwind CSS v4 + Shadcn/ui + Lucide React.