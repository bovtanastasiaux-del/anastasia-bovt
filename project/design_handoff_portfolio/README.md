# Handoff: Anastasia Bovt — Portfolio (2026)

## Overview
A personal portfolio site for **Anastasia Bovt**, Product Designer. Three page types:

1. **Homepage** (`index.html`) — hero, selected work grid (6 cases), about, recognition, contact, footer.
2. **All Projects index** (`projects.html`) — filterable, list-or-grid view of 6 case studies with a cursor-following preview.
3. **Six case study pages** — `case-yezzz.html`, `case-phlex.html`, `case-tutorly.html`, `case-fractl.html`, `case-olas.html`, `case-careyou.html`. Each shares the same shell: head + meta block, large hero mockup, sticky ToC + scroll progress, image-first article with figures, results band, "next case" pager, footer.

The site features a **Tweaks panel** (toolbar-triggered in the design tool) that exposes theme, accent color, hero motion variant, layout, grain intensity, and cursor FX. In production this can be dropped, kept as a real UI, or kept as a behind-the-flag dev tool — your call.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look, layout, motion, and interaction. **They are not production code to ship as-is.** Treat them as the source of truth for visual decisions (colors, type scale, spacing, motion, micro-interactions, copy), and rebuild them in whatever the target stack is.

Recommended stack for production (no existing codebase): **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**. The site is largely static — perfect for SSG / ISR on Vercel — with one client-side bit per case (the scroll-progress + active ToC) and one global (the cursor spotlight). If you prefer Astro, that's an even leaner fit; React only where needed for state.

## Fidelity
**High-fidelity.** These mocks specify exact colors, typography, spacing, border-radii, motion durations, easing curves, and copy. Recreate them pixel-perfectly using the chosen stack's component patterns. Where the HTML uses bespoke CSS techniques (`color-mix(in oklab, …)`, `backdrop-filter`, `mix-blend-mode: difference`, `clip-path` polygon charts, animated mesh gradients), preserve the visual effect — re-implement in Tailwind/CSS-in-JS as needed.

The **placeholder images** in each case (gradient + glass card with italic "Fig 0X" label) are intentional — Anastasia will replace them with real screenshots/mockups. Keep them as labeled `<Placeholder>` components.

---

## Pages / Screens

### 1. Homepage — `index.html`

**Layout (1440px container, 16-col implicit grid):**
- **Fixed nav** (top, full-width, blur backdrop) — brand left, page links center, "Let's talk" CTA right.
- **Hero** (100svh) — status row top, oversized two-line serif headline middle, lede + meta-grid bottom, scroll cue bottom-right. Background switches between four motion variants (see "Hero motion variants" below).
- **Marquee strip** (~60px) — tag list scrolling horizontally between two hairlines.
- **Work section** — `[01 / WORK]` eyebrow + "Selected projects" title row, then 2-column staggered grid of 6 work cards. Even cards are nudged 80px down from odd cards.
- **View-all link** — centered, oversized italic serif "View all projects ↗" with magnetic hover.
- **About section** — 2-col (sticky visual placeholder left, body text + stats + skills right).
- **Recognition section** — 4-col grid of awards/press rows.
- **Contact section** — oversized 3-line headline, pill email CTA, social row, ambient glow background.
- **Footer** — full-bleed oversized serif "Bovt Anastasia — 2026", then 4-col meta grid (Index / Elsewhere / Colophon / Status).

**Hero motion variants** (driven by `body[data-hero="..."]`):
- `spotlight` (default) — radial gradient at cursor position, ~500px circle, blurred 40px.
- `gradient` — animated mesh of 3 overlapping radial gradients drifting on a 18s ease-in-out loop.
- `marquee` — giant italic serif "Product · Systems · Interaction · …" scrolling at 14vw scale, 14% opacity.
- `quiet` — none.

**Work card hover:**
- Image (`.shot .image`) scales to 1.04 over 1.2s ease-out.
- Border lightens from `--line` to `--line-2`.
- Tag marquee fades in at top of card (animates 14s linear loop).
- Bottom gradient overlay fades in (`linear-gradient(to top, rgba(0,0,0,0.55), transparent 45%)`), revealing "Case study" eyebrow + filled pill CTA.

### 2. All Projects — `projects.html`

- **Page top** — 2-col (oversized serif "The index, 2021–2026" left, italicized last word; small mono note right).
- **Sticky filter bar** (top 72px) with backdrop-blur. Categories: All · Product · UX/UI · Mobile · Web · Systems. View toggle: List / Grid.
- **List view (default)** — 6-col grid rows (num · title · desc · tags · year · arrow). Hover → row scrolls right 6px, title turns accent. A floating 360×270 `idx-preview` follows the cursor showing the corresponding gradient card.
- **Grid view** — 3-col cards with 4:3 image + meta row + sub-description.
- Footer.

### 3. Case study pages — `case-*.html`

All share the same layout (driven by `case.css` + `case.js`). Variations per case are only:
- Hero mockup contents (mobile chrome for Yezzz/Phlex/OLAS, web chrome for Tutorly/Fractl/Care You).
- Glow tint (`.violet`, `.aqua`, `.amber`, `.coral`, `.deep`, `.fresh` — see Design Tokens).
- ToC sections vary in count and labels.

**Sections, in order:**
1. **Nav** (shared).
2. **Case head** — 3:2 grid. Left: breadcrumb (Index / Case 0X / Title) → giant serif H1 (2 lines, italic accent on last word of L1) → sub-paragraph. Right: 2×3 meta grid (Client / Year / Role / Platforms / Scope / Outcome).
3. **Hero frame** — 16:9 rounded card with tinted blurred glow + browser/mobile chrome inside. Bezel inset 8% (web) or 4%/30% (mobile).
4. **Article layout** — 220px sticky ToC + 1fr article column. ToC: section list with `01–0N` numerals, progress bar + percentage at bottom.
5. **Article** — alternating sections, each with: small section label ("`01 — Overview`"), serif H2 (italic accent), body paragraphs, optional blockquote, optional bulleted list, optional figure (full-bleed, escapes article width by 80px each side).
6. **Results band** — 3-col stat card on a `--bg-2` surface with `--line` border. Each stat: mono label · giant italic serif value · small description.
7. **Next case** — full-width link with `[Next case — 0X / 06]` + giant serif title + 320×240 preview card (placeholder gradient).
8. **Footer** (shared).

**Figures:**
- Default: 16:10 rounded card, full-bleed width within article column (overshoots both sides by 80px).
- `.grid2` variant: side-by-side panel comparison (e.g., before/after).
- Each figure has a `figcaption` in mono with caption + page count (`"05 / 09"`).
- Placeholder contents: tinted radial-gradient background + glass card centered with italic serif label and uppercase mono sub-label.

---

## Interactions & Behavior

| Interaction | Detail |
|---|---|
| Custom cursor | 8px accent dot, `mix-blend-mode: difference`, follows mouse via lerp (`0.22`). Grows to 64px on hover over `a, button, .hoverable`. Disabled via `body.cursor-on` toggle. |
| Scroll reveal | `.reveal` elements fade up 24px → 0 over 900ms `cubic-bezier(.16,1,.3,1)`. Triggered by IntersectionObserver at 12% visibility. Delay classes `.d1 / .d2 / .d3 / .d4` step at +80ms each. |
| Magnetic links | `[data-magnetic]` elements translate 15% toward cursor on `mousemove`. Reset on `mouseleave`. |
| Hero spotlight | `mousemove` updates `--mx` / `--my` custom props (percent) on `.hero`; CSS uses them in `background: radial-gradient(500px circle at var(--mx) var(--my), …)`. |
| Hero motion swap | Body `data-hero` attr swaps CSS rules (spotlight / gradient / marquee / quiet). |
| Project card hover | See "Work card hover" above. |
| Index list hover | Row title slides right 6px and turns accent; floating preview panel fades + scales from 0.94 → 1, positioned at `(clientX + 140, clientY)`. |
| Filter bar | Re-renders the project list, swapping in only items matching the active category. |
| List/Grid toggle | Adds `.off` to list / `.on` to grid. |
| Sticky ToC | Active section highlighted by tracking section.offsetTop ≤ scrollY + 35% viewport. Progress bar reflects total scroll percent. |
| Smooth scroll | `[data-scroll]` links scroll to `targetTop - 80px` smoothly. |

**No real client-side routing** — every page is a separate file. Replace with Next.js `<Link>` (App Router routes per case) or your framework equivalent.

---

## State

Almost everything is **stateless render-once**. Stateful pieces:

- **Cursor position** (transient, RAF-driven). No persistence.
- **Tweaks panel state** — theme, accent, hero motion variant, layout, grain, cursor flag. In the design tool these persist via `window.parent.postMessage({type: '__edit_mode_set_keys', edits})`. In production, drop this entirely **or** keep as user preferences (e.g., `localStorage`-backed theme toggle in nav).
- **Active filter / view toggle** on the index page (in-memory only).
- **Scroll progress + active ToC section** on case pages (derived from scroll, not stored).

---

## Design Tokens

### Color (dark theme — default)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0e0e10` | Page background |
| `--bg-2` | `#141418` | Strip / footer accent / results band |
| `--surface` | `#1a1a1e` | Card backgrounds |
| `--surface-2` | `#2a2a2d` | Hover surface / progress track |
| `--line` | `#26262b` | Hairlines |
| `--line-2` | `#34343a` | Stronger borders, buttons |
| `--fg` | `#f5f5f5` | Primary text |
| `--fg-2` | `#b8b8be` | Secondary text |
| `--fg-3` | `#76767e` | Muted text |
| `--fg-4` | `#4a4a52` | Faint mono labels |
| `--accent` | `#a78bff` | Italic emphasis, CTAs, progress fill, hover |
| `--accent-2` | `#c9b8ff` | Cursor hover ring, secondary accent |

### Color (light theme — `html[data-theme="light"]`)
| Token | Value |
|---|---|
| `--bg` | `#f5f2ec` |
| `--bg-2` | `#efece5` |
| `--surface` | `#ebe7df` |
| `--surface-2` | `#e2ddd2` |
| `--line` | `#d8d2c5` |
| `--line-2` | `#c6bfaf` |
| `--fg` | `#111113` |
| `--fg-2` | `#434349` |
| `--fg-3` | `#6b6b72` |
| `--fg-4` | `#9a9aa0` |
| `--accent` | `#6b56d9` |
| `--accent-2` | `#7f6ee6` |

### Glow tints (used on hero/figure cards)
- `violet` — `radial(#a78bff)` + `radial(#6bc5ff)`
- `aqua` — `radial(#6bc5ff)` + `radial(#7affc4)`
- `amber` — `radial(#ffb86a)` + `radial(#ff8a6a)`
- `coral` — `radial(#ff8a6a)` + `radial(#ffd36a)`
- `deep` — `radial(#6b7aff)` + `radial(#a78bff)`
- `fresh` — `radial(#7affc4)` + `radial(#cfff7a)`
All glows are `filter: blur(40–60px); opacity: 0.85`.

### Typography
| Family | Use | Weights |
|---|---|---|
| **Instrument Serif** (Google Fonts) | Display headlines, italic accents, oversized footer text, blockquotes | 400 (italic when used for emphasis) |
| **Inter Tight** (Google Fonts) | Body text, lede, navigation, buttons | 300 / 400 / 500 / 600 / 700 |
| **JetBrains Mono** (Google Fonts) | Eyebrows, labels, meta, breadcrumbs, captions, status | 400 / 500 |

**Type scale (clamped to viewport):**
- Hero H1: `clamp(64px, 14.5vw, 240px)` · line 0.88 · tracking `-0.035em`
- Page H1 (projects / case head): `clamp(56px, 10vw, 160px)`
- Footer big: `clamp(64px, 14vw, 220px)`
- Section H2: `clamp(40px, 5.5vw, 76px)` (case) / `clamp(36px, 5vw, 72px)` (home)
- Card title (serif): 22–40px
- Lede paragraph (serif): `clamp(24px, 2.4vw, 32px)`
- Body paragraph: 18px · line 1.55 · tracking `-0.005em` · `max-width: 66ch` · `text-wrap: pretty`
- Eyebrow / label (mono): 10–12px · tracking `0.08–0.16em` · UPPERCASE
- Font feature settings on body: `"ss01", "cv11"`

### Spacing
- Container max-width: **1440px**
- Side gutter: `clamp(20px, 3vw, 48px)` (custom prop `--gutter`)
- Section vertical rhythm: 80–140px top padding for major sections
- Card / pill radius: **999px** (full pill) or **10–16px** (cards / panels)
- Hairlines: 1px, semitransparent

### Motion
- Easing tokens:
  - `--ease`: `cubic-bezier(.2,.7,.2,1)`
  - `--ease-out`: `cubic-bezier(.16,1,.3,1)`
- Durations: 200ms (small state) · 300–500ms (hover) · 600–1200ms (entrance) · 14–42s (marquees / drifting backgrounds)
- Cursor lerp factor: `0.22` per frame
- Grain: SVG `feTurbulence` noise rendered into a 240×240 SVG, fixed-positioned, `mix-blend-mode: overlay`, opacity controlled by `--grain` (default 0.06).

### Shadows
- Card / chrome: `0 30px 80px rgba(0,0,0,0.35) + inset 0 1px 0 rgba(255,255,255,0.06)`
- Hero mockup: `0 40px 80px rgba(0,0,0,0.5) + inset 0 1px 0 rgba(255,255,255,0.06)`
- Tweaks panel: `0 20px 60px rgba(0,0,0,0.4)`

---

## Assets

- **Fonts:** all three families load from Google Fonts via `<link>` in each HTML head. In production, self-host with `next/font` (or equivalent) for performance.
- **Imagery:** ALL images in the design are placeholders — gradient + glass card constructions, no real screenshots. Anastasia will provide real shots. Maintain the placeholder as a `<Placeholder variant="violet" label="Fig 01" small="Funnel"/>` component so swapping is trivial.
- **Icons:** essentially none. The few glyphs used (`↗`, `→`, `●`, `✦`) are inline Unicode. Keep them as text rather than introducing an icon library.

---

## Files (in this bundle)

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `projects.html` | All projects index (filterable list + grid) |
| `case-yezzz.html` | Case 01 — Yezzz mobile operator funnel |
| `case-phlex.html` | Case 02 — Phlex swim performance tracker |
| `case-tutorly.html` | Case 03 — Tutorly dual-role learning platform |
| `case-fractl.html` | Case 04 — Fractl low-code platform |
| `case-olas.html` | Case 05 — OLAS maritime safety |
| `case-careyou.html` | Case 06 — Care You multi-role healthcare |
| `shared.css` | Tokens, base styles, nav, footer, tweaks panel, cursor, buttons |
| `shared.js` | Scroll reveal, cursor, magnetic links, hero spotlight, tweaks |
| `case.css` | Case-study-specific layout (head, hero frame, ToC, article, figures, results band, next-case) |
| `case.js` | Case-study scroll progress + active ToC |

---

## Suggested Implementation in Next.js (App Router)

```
app/
├── layout.tsx                  // global Nav, Footer, Cursor, Tweaks?, font loading
├── page.tsx                    // Homepage
├── projects/
│   └── page.tsx                // Index with filters
├── work/
│   ├── yezzz/page.tsx
│   ├── phlex/page.tsx
│   ├── tutorly/page.tsx
│   ├── fractl/page.tsx
│   ├── olas/page.tsx
│   └── careyou/page.tsx
└── (case-shell)/
    └── layout.tsx              // optional: shared case ToC + scroll progress

components/
├── nav.tsx
├── footer.tsx
├── cursor.tsx                  // 'use client' — RAF loop
├── hero/
│   ├── hero.tsx
│   ├── hero-spotlight.tsx
│   ├── hero-gradient.tsx
│   ├── hero-marquee.tsx
│   └── hero-quiet.tsx
├── work-card.tsx
├── case-head.tsx
├── case-hero-frame.tsx         // generic 16:9 frame, slot the inner mockup
├── case-toc.tsx                // 'use client' — IntersectionObserver
├── case-article.tsx            // Section, Figure, Quote, ResultsBand
├── placeholder.tsx             // tinted-glow gradient card
└── tweaks-panel.tsx            // optional, behind a feature flag

content/
└── cases/
    ├── yezzz.mdx
    ├── phlex.mdx
    └── …                       // case body as MDX — easy to edit
```

Move case **copy into MDX** (or a CMS like Sanity/Contentful) so editing doesn't require touching JSX. The figure and result-band components become MDX shortcodes.

## Notes for the developer
- The home/case heroes are the highest-effort visuals — get them right first, the rest cascades.
- Real screenshots will replace placeholders. Plan an aspect-ratio-stable `<Placeholder>` → `<Image>` swap.
- The light theme is fully specified — keep it shippable.
- Accessibility: the design uses oversized type but check focus rings (currently relies on browser default — add a visible ring against dark BG), `prefers-reduced-motion` short-circuits for the cursor / marquees / reveals, and SR-only labels for nav icons.
- Performance: all motion is CSS-driven or RAF-light. The cursor and reveals are cheap. Mesh-gradient hero is the heaviest; consider pausing on `prefers-reduced-motion`.
