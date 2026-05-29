# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A from-scratch redesign of **die-elektroheizungen.ch** — the electric-heating site of **Apitec AG** (Meggen LU, Switzerland). It is a static, hand-written **multi-file HTML/CSS/JS** site with **no build system, no dependencies, no package.json**. Output is meant to stay portable to WordPress/Webflow later.

Created via the `website-redesign` skill: the original site was scraped, brand assets extracted, and a redesign brief written before any code.

## Running / previewing

No build, no install. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Relative paths (`assets/...`, `css/...`) work from a server root or `file://`. There are no tests, no linter, no CI.

## Architecture

- `index.html` — the entire Phase-1 homepage. Single file, semantic HTML5, sections in source order: topbar → header → hero → produkte → trust → all-inclusive → service → contact CTA → footer. JSON-LD `LocalBusiness` schema lives in `<head>`.
- `css/style.css` — all styles, one file. BEM-ish class names (`.card`, `.card__title`, `.card--featured`). Design tokens are CSS custom properties in `:root` (the `--cd-*` Apitec brand palette). No CSS framework.
- `js/main.js` — vanilla JS in a single IIFE, no dependencies. Three concerns only: mobile-nav toggle (with `aria-expanded`), the `data-not-implemented` toast (see below), and reduced-motion-aware smooth-scroll for in-page anchors.

### The `data-not-implemented` convention

Links to Phase-2 subpages (e.g. `speichergeraete/`, `beratung-vor-ort/`, contact forms, Impressum/Datenschutz) carry a `data-not-implemented="<label>"` attribute. `main.js` intercepts the click, calls `preventDefault()`, and shows a toast instead of navigating. When you actually build one of those pages, **remove that attribute** so the link works. The `href` is already set to the correct final path.

### CSS is the source of truth, not the brief

`redesign-brief.md` proposes a Fraunces/Inter/JetBrains-Mono Google-Fonts pairing. **The shipped `style.css` deliberately rejected that** in favor of strict Apitec CD: the original system-font stack (`--ff-system`) and light-weight (300) red headings — no Google Fonts are loaded at all. So `relaunch-risks.md`'s warnings about Google-Fonts consent are stale. When in doubt about the actual design, read the CSS, not the planning docs.

## Hard constraints

- **URL paths must not change.** Old SEO paths (`/speichergeraete/`, `/teilspeichergerate/`, `/direktheizgeraet/`, `/monoblock-warmepumpe-x-one/`, `/beratung-vor-ort/`, `/positive-messergebnisse/`, `/kontakt-direktheizung/`, `/kontakt-speicherheizgeraet/`) must be preserved exactly so no 301-redirects are needed. Build Phase-2 pages at these exact paths. See `seo-baseline.md`.
- **Content is authentic, not invented.** All copy traces to the real Apitec site via `content-inventory.md` (every original section has a documented keep/rewrite/move decision). Don't add product claims, warranties, or numbers that aren't in the source material.
- **Swiss German (`lang="de-CH"`):** use `ss`, never `ß`.
- **Audience is 40–75-year-old homeowners.** Keep high contrast, large legible type, phone number above the fold, sprechende link/button text ("Beratung anfragen", not "hier klicken"). Accessibility status is tracked in `relaunch-risks.md`.

## Phases

- **Phase 1 (done):** homepage `index.html` — hero, 4 product cards, trust strip, all-inclusive steps, service cards, contact CTA, footer.
- **Phase 2 (product pages done):** the four product subpages are built at their exact SEO paths — `speichergeraete/`, `teilspeichergerate/`, `direktheizgeraet/`, `monoblock-warmepumpe-x-one/` (each `index.html`). They reuse `css/style.css` plus a "Subpages (Phase 2)" block appended to it (subhero, breadcrumb, facts, checklist, prose, callout, benefits, split, banner). Subpages live one directory deep, so they use `../` relative paths and per-page Product + BreadcrumbList JSON-LD. The homepage product cards now link straight to them (toast removed).
- **Phase 2 (still open):** `beratung-vor-ort/`, `positive-messergebnisse/`, the two `kontakt-*` form pages, a real contact form with validation + privacy notice, and **Impressum / Datenschutz** (legally required before go-live). Per-model "Technische Daten" links are still `data-not-implemented`. See `TODO.md`.

## Reference material (read-only context, not site code)

- `redesign-brief.md`, `content-inventory.md`, `seo-baseline.md`, `relaunch-risks.md`, `markenbiografie.md`, `old-website-links.md` — planning/strategy docs.
- `raw-scrape/` and `apitec-cd/` — scraped originals (HTML/CSS/content/images) of die-elektroheizungen.ch and apitec.ch. Source of truth for brand colors and original copy.
- `reference/*.png` — before/after and iteration screenshots.
- `assets/images/` — the images actually used by `index.html`.
