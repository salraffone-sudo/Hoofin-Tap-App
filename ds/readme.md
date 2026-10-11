# OAC Design System

Design system for **OAC** — a publication brand (Substack newsletter) with an identity rooted in the intersection of engineering and art. The brand's own inspiration board names its contrasts: **PRECISION + CRAFT · ENGINEERING + ART · CONSTRUCTION + THEORY · DETAIL + SKETCH**, with reference imagery of Porsche livery, a Veglia tachometer (Ducati), and architectural stencils. The identity pairs a hand-sketched stencil logomark with a disciplined, restrained palette and workmanlike type (Roboto / Roboto Serif).

## Sources provided

- `assets/source/OAC style guide.pdf` — light + dark mode palettes (exact hex), BODY = Roboto, HEADLINE = Roboto Serif, inspiration board (uploaded as `uploads/OAC style gide.pdf`)
- `assets/source/OAC logomark.pdf` — logomark lockups on brand-color panels + stencil alphabet reference
- `assets/headers/substack-header-dark.png` — Substack header, white hand-sketched "O.a.C." stencil on #434343
- `assets/headers/substack-header-light.png` — Substack header, black hatched "OAC" caps on white

No codebase, Figma, or product screens were provided — so there are **no UI kits**; components are a standard set styled from the brand foundations (see "Intentional additions").

## Content fundamentals

Very little product copy was provided; what exists is terse and technical:

- **All-caps labels** used as structural devices: `BODY`, `HEADLINE`, `INSPIRATION`, `CONTRASTS`, `PORSCHE LIVERY`, `VEGLIA TACHOMETER (DUCATI)`, `ARCHITECTURAL STENCIL`.
- **Paired contrasts joined with "+"** is a signature copy pattern: "PRECISION + CRAFT", "DETAIL + SKETCH". Reuse this construction for section headers and taglines.
- Tone: spec-sheet declarative. Short noun phrases over full sentences. No exclamation, no emoji, no first-person warmth. Think engineering drawing title-block, not marketing.
- Casing: ALL-CAPS (letterspaced) for labels/eyebrows; sentence case for body prose.

*(Inferred from limited material — refine when real newsletter copy is available.)*

## Visual foundations

- **Color**: disciplined 8-color palette. Navy `#073763` is the primary/heading color; light blue `#CFE2F3` its soft companion; deep red `#990000` (+ rose `#EA9999`) is the sparing accent — racing-livery red, used like a tachometer redline, never as a large field. Neutrals: ink `#434343`, cream `#E5DECC`, light gray `#EFEFEF`, white. Full light/dark mode mapping in `tokens/colors.css` (`[data-theme="dark"]`, dark bg = ink `#434343`).
- **Type**: Roboto Serif for headlines, Roboto for body. Stencil letterforms are reserved for the brand mark / display moments (`--font-stencil`, see Iconography for the substitution note). Wide-tracked caps (`--tracking-wide`) for eyebrows.
- **Texture**: the logomark is hand-sketched with diagonal hatching. `--texture-hatch` (a 45° repeating-linear-gradient) echoes it for fills/dividers — use at low opacity, small doses.
- **Backgrounds**: flat solids only — light gray or cream pages, white cards, ink for dark mode. No gradients, no photography-as-background provided.
- **Corners**: near-square (2–3px; 6px max) — engineering-drawing crispness.
- **Borders**: hairline 1px `#c9c9c9`; strong 1.5px ink rules for emphasis (drafting rules).
- **Shadows**: flat and restrained (`--shadow-card` = 0 1px 2px @12%); overlays slightly deeper. Never soft/glowy.
- **Cards**: white surface, hairline border, 3px radius, minimal shadow.
- **Motion**: quick and precise — 120–200ms, standard easing, no bounce or spring.
- **Hover**: darken toward navy / underline links shift to red; press: slight darken, no shrink.
- **Transparency/blur**: not part of the brand; avoid glassmorphism.
- **Imagery vibe** (from inspiration board): mechanical, warm-neutral, analog — liveried race cars, gauge faces, stencil plates. Prefer technical/analog subjects; avoid glossy stock.

## Iconography

- **No icon set was provided.** No icon font, no SVG library, no emoji anywhere in the brand material. Emoji: do not use.
- Recommended substitute (flagged): **Lucide** via CDN at 1.5px stroke, sized 16/20px, colored `currentColor` — its drafting-line character suits the brand. Swap out if OAC supplies real icons.
- Unicode glyphs (·, +, →) fit the spec-sheet tone for inline separators; the brand's own "+" pairing pattern is encouraged.
- Logomark assets (extracted from the real Substack headers — never redraw the mark):
  - `assets/logo/oac-logomark-on-white.png` (black hatched OAC, white bg)
  - `assets/logo/oac-logomark-on-dark.png` (white sketch O.a.C., ink bg)
  - `assets/logo/oac-logomark-black-transparent.png` / `oac-logomark-white-transparent.png` (keyed alpha versions)
  - Vector source: `assets/source/OAC logomark.pdf`

## Font substitution flag

Roboto and Roboto Serif are the guide's own choices (shipped as woff2 in `assets/fonts/`). The stencil display face is **Stardos Stencil** (Google Fonts) — the nearest match to the serif-stencil alphabet in the logomark PDF. **If OAC has the actual stencil font file, please provide it.**

## Intentional additions

No source defined components, so a standard set was authored from the brand foundations: Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Tooltip, Toast — plus `SectionHeader` (the brand's "CONTRASTS"-style eyebrow + rule pattern).

## Index

- `styles.css` — global entry point (imports everything below)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `assets/` — `logo/`, `headers/`, `fonts/`, `source/` (original PDFs)
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — reusable React primitives + component cards
- `SKILL.md` — agent skill entry point
