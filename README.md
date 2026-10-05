# KAI Nuvari — Next.js Infrastructure Platform

> **Turning trusted real-world data into sustainable economic opportunity.**  
> Next.js 15 (App Router), React 19, TypeScript strict, Tailwind CSS v4, Framer Motion, and Zod.

---

## 🌲 Overview

KAI Nuvari builds infrastructure connecting verified conservation data, real-world assets and sustainable economic opportunities for Community Forest Associations (CFAs), tree nurseries, agroforestry growers, and creative artisans across Kenya and globally.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router), React 19, TypeScript strict |
| **Styling** | Tailwind CSS v4 with CSS-first tokens (`@theme`) |
| **Motion** | Framer Motion (`framer-motion`), reduced-motion safe |
| **Icons** | `lucide-react` |
| **Typography** | `next/font/google` (Fraunces, Inter, JetBrains Mono) |
| **Forms & Validation** | `react-hook-form` + `zod` |
| **API** | Next.js Route Handlers (`/api/partner`) |
| **SEO & Metadata** | Metadata API, Dynamic Open Graph, JSON-LD Schema, Sitemap & Robots |

---

## 🎨 Design System & Palette

- **Deep Green (`#0C2818`)**: Primary dark surface, headings on light.
- **Forest Green (`#28603D`)**: Primary brand, links, buttons on light.
- **Lime (`#C7EA46`)**: Accent on dark surfaces, active states, key data points.
- **Gold (`#C6A15B`)**: Decorative accent, tags, and secondary commission split.
- **Off White (`#F6F4EA`)**: Warm default page background.

---

## 📂 Architecture

```
├── app/
│   ├── layout.tsx            # Global font injection, JSON-LD, Navbar, Footer
│   ├── page.tsx              # Master marketing landing page composition
│   ├── globals.css           # Tailwind v4 @theme, semantic tokens, focus rings
│   ├── api/
│   │   └── partner/route.ts  # POST: Zod validation, honeypot anti-spam
│   ├── sitemap.ts            # Dynamic sitemap for SEO
│   └── robots.ts             # Robots.txt
├── components/
│   ├── layout/               # Navbar (sticky blur + mobile drawer), Footer
│   ├── ui/                   # Button, Tag, Card, Eyebrow, Section, Container, Reveal
│   ├── graphics/             # ProvenanceLine (SVG animation), LifecycleStrip
│   └── sections/             # Hero, Problem, Solution, MethodologyFlow, ProductGrid, BusinessModel, Dao, Tech, PartnerCTA
├── content/                  # Pure typed content layer (no hardcoded copy in UI)
│   ├── site.ts
│   ├── hero.ts
│   ├── problem.ts
│   ├── solution.ts
│   ├── methodology.ts
│   ├── products.ts
│   ├── businessModel.ts
│   ├── dao.ts
│   └── technology.ts
└── types/
    └── content.ts            # Strict content types & status tag union definitions
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
