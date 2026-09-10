# Sanctum India — Design System (Master)

Generated via `ui-ux-pro-max` (style/color/typography domain queries) and hand-tuned: the
skill's color/style database is generic SaaS-oriented and has no India-specific temple
aesthetic, so the palette below is a deliberate synthesis of its "Luxury/Premium",
"Church/Religious", and "Restaurant" (warm red+gold) results — not a literal query output.

## Style pattern

- **Primary:** `parallax-storytelling` — scroll-driven, layered, cinematic. Drives the
  animated story-chapter timeline on every temple detail page (the platform's signature
  interaction).
- **Secondary:** `editorial-grid-magazine` — asymmetric grid, pull quotes, drop caps.
  Drives long-form content blocks (History, Architecture) so dense text stays readable and
  feels like a crafted publication, not a wall of text.
- Both are `cost:high` / `risk:high` per the skill's accessibility notes — every scroll
  animation MUST have a static fallback under `prefers-reduced-motion`, and parallax/pin
  sections need a mobile-safe non-pinned variant (per `references/quick-reference.md`).

## Color tokens (dark-first — this is a "cinematic pilgrimage" product, dark base with warm
temple accents reads as premium; light mode is a full parity fallback, not an afterthought)

| Token | Dark | Light | Use |
|---|---|---|---|
| `--color-background` | `#0F0B08` | `#FBF6EE` | page base |
| `--color-foreground` | `#F3E9DA` | `#241813` | body text |
| `--color-card` | `#17120D` | `#FFFFFF` | cards/panels |
| `--color-card-foreground` | `#F3E9DA` | `#241813` | text on card |
| `--color-primary` | `#8C1D28` | `#8C1D28` | oxblood/maroon — primary actions, active nav |
| `--color-primary-foreground` | `#FBF6EE` | `#FBF6EE` | text on primary |
| `--color-accent` | `#D4AF37` | `#A9821E` | temple gold — CTAs, highlights, dividers |
| `--color-accent-foreground` | `#17120D` | `#17120D` | text on accent |
| `--color-secondary` | `#B54A2C` | `#B54A2C` | terracotta — secondary tags (e.g. Shakti Peetha badge vs Jyotirlinga badge) |
| `--color-muted` | `#1C1611` | `#F1EAE0` | subtle backgrounds |
| `--color-muted-foreground` | `#B8A98E` | `#5C5145` | secondary text |
| `--color-border` | `#3A2E22` | `#E4D9C7` | dividers, card borders |
| `--color-ring` | `#D4AF37` | `#8C1D28` | focus ring |
| `--color-destructive` | `#DC2626` | `#DC2626` | errors only |

Jyotirlinga badge = `--color-primary` (maroon). Shakti Peetha badge = `--color-secondary`
(terracotta). Keeps the two pilgrimage tracks visually distinct across every list/grid.

Contrast checked: `#F3E9DA` on `#0F0B08` and `#241813` on `#FBF6EE` both exceed 4.5:1 for
body text; `#17120D` on `#D4AF37` exceeds 4.5:1 for accent-button labels.

## Typography

**Pairing: Classic Elegant** (from typography domain search — "luxury, sophisticated,
timeless, premium, editorial", exactly the register this content needs).

- Heading: `Playfair Display` (serif, high-contrast strokes — reads as carved/ornate,
  fits temple architecture and legend titles without literally using a "temple font")
- Body: `Inter` (clean, highly legible at long-form reading lengths — the story chapters
  and history sections are dense)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

Tailwind: `font-serif` → Playfair Display, `font-sans` → Inter (default body).

## Motion

- Story chapter timeline: Framer Motion `useScroll` + `useTransform` per chapter section,
  opacity/translateY reveal, NOT full GSAP ScrollTrigger pinning for MVP (simpler, matches
  the client's existing Framer Motion dependency, avoids adding GSAP unless a specific
  section needs pin-and-scrub).
- Standard transitions: 200-300ms ease for hover/focus states.
- Every animated component must check `prefers-reduced-motion` and render the final state
  immediately when it's set — this is a hard requirement from the skill's checklist, not
  optional polish.

## Pre-delivery checklist (from the skill, kept here as the standing bar for every page)

- [ ] No emoji-as-icons — SVG icons only (Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states, 150-300ms transitions
- [ ] Text contrast ≥ 4.5:1 in both themes
- [ ] Visible focus ring on every interactive element
- [ ] `prefers-reduced-motion` respected everywhere motion is used
- [ ] Responsive at 375 / 768 / 1024 / 1440px
