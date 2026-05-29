# Redesign TODO — die-elektroheizungen.ch (Apitec CD)

**Zielsystem:** Multi-File HTML/CSS/JS (Standard)

## Phase 1 — Homepage + Conversion-Strecke (in Arbeit)
- [x] Recherche: Apitec-CD (Farben, Schriften, Layout)
- [x] Markenbiografie, SEO-Baseline, Content-Inventory, Redesign-Brief
- [ ] Homepage `index.html` mit Hero, Produkten, All-Inclusive, Service, CTA, Footer
- [ ] Kontakt-CTA-Sektion (Telefon/Mail klickbar) als Teil der Homepage
- [ ] Wichtigste Produkt-Übersicht (4 Karten mit Detail-Inhalten direkt auf Homepage)
- [ ] CSS mit Apitec-CD-Tokens (Rot #EB1E25, Grün #50C05C, Off-White #FBFBF6)
- [ ] JS für Mobile-Nav, Toast bei nicht-implementierten Links, Smooth-Scroll
- [ ] Accessibility-Check (Focus-States, Tastatur, ARIA, Kontraste)
- [ ] SEO-Check (Meta, OG, Schema-Markup LocalBusiness, robots.txt-Hinweis)

## Phase 2 — Produkt-Unterseiten (in Arbeit)
- [x] `/speichergeraete/` — Detail Einzelspeicher VFE (Subhero, VFE-Line, Austausch-erlaubt-Callout, Sparen, Achtung-380V, Vorteile, PV/X-ONE-Cross-Sell, CTA)
- [x] `/teilspeichergerate/` — Detail MARU Comfort (Subhero, Erklär-Split, Vorteile, Über uns/Preis, All-Inclusive-Steps, CTA)
- [x] `/direktheizgeraet/` — Detail Direktheizungen (Subhero, 4 Modell-Karten DTD/FPE/PLX/H260E, Vorteile, Smart-Climate-Split, CTA)
- [x] `/monoblock-warmepumpe-x-one/` — Detail X-ONE (Subhero, Panorama-Banner, 1:1-Ersatz, Komplettaustausch, CTA)
- [x] Produkt-Karten der Homepage verlinken jetzt direkt auf die 4 Unterseiten (Toast entfernt)
- [x] Wiederverwendbare Subpage-CSS-Bausteine in `style.css` (subhero, breadcrumb, facts, checklist, prose, callout, benefits, split, banner)
- [x] Pro Seite: eigener Title/Description/Canonical/OG + JSON-LD Product + BreadcrumbList

## Phase 2 — noch offen (nach Rücksprache)
- [ ] `/beratung-vor-ort/` — Vor-Ort-Service-Seite
- [ ] `/positive-messergebnisse/` — MARU-Comfort-Messdaten
- [ ] `/kontakt-direktheizung/` — Kontaktformular Direktheizung
- [ ] `/kontakt-speicherheizgeraet/` — Kontaktformular Speicher
- [ ] Vollständiges Kontaktformular mit Validierung + Datenschutz-Hinweis
- [ ] Datenschutz / Impressum (rechtlich)
- [ ] „Technische Daten" je Modell (Datenblätter/PDF) — aktuell Toast
- [ ] PRO-Elektroheizungen-PDF hinterlegen unter `/wp-content/uploads/2023/09/`
