# Relaunch-Risiken & offene Punkte

## Datenschutz / nDSG (Schweizer Recht)

| Risiko | Status | Empfehlung |
|---|---|---|
| **Google Fonts via CDN** | ⚠️ in Phase 1 aktiv (Inter, Fraunces, JetBrains Mono werden von fonts.googleapis.com geladen) | Bei strenger Auslegung consent-pflichtig (IP-Adresse geht an Google). Empfehlung: in Phase 2 die Fonts selbst hosten (woff2-Dateien lokal ablegen, via `@font-face` einbinden). |
| **Datenschutzerklärung** | ❌ noch nicht vorhanden | Footer-Link führt aktuell auf einen Toast „Datenschutz — noch nicht umgesetzt". Muss vor Live-Schaltung erstellt werden (Apitec hat auf der Mutterseite eine — könnte adaptiert werden). |
| **Impressum** | ❌ noch nicht vorhanden | Gleiche Situation wie Datenschutz — adaptieren von apitec.ch/impressum. |
| **Cookie-/Consent-Banner** | ❌ nicht vorhanden | Solange nur Google Fonts geladen werden, im niederschwelligen Fall vertretbar. Bei Einbindung von Analytics, Google Maps oder Newsletter-Tool: zwingend Consent-Banner. |
| **Externe Embeds** (Google Maps, YouTube, Analytics) | ✅ aktuell keine | Falls später eine Anfahrtskarte gewünscht ist: Static-Map-Image statt iframe verwenden (verhindert Consent-Pflicht). |
| **Kontaktformular** | ❌ nicht in Phase 1 | Wenn in Phase 2 implementiert: muss klaren Datenschutz-Hinweis und Verlinkung zur Datenschutzerklärung enthalten. Daten dürfen nur zweckgebunden gespeichert/verarbeitet werden. |
| **Heilversprechen / rechtlich kritische Inhalte** | ✅ unproblematisch | Heizungstechnik ist keine Gesundheitsbranche; Original-Wording wurde übernommen, keine eigenen Versprechen ergänzt. |

## SEO / Ranking-Risiken

| Risiko | Status | Empfehlung |
|---|---|---|
| **URL-Struktur** | ✅ identisch erhalten | Alle alten Pfade bleiben: `/speichergeraete/`, `/teilspeichergerate/`, `/direktheizgeraet/`, `/monoblock-warmepumpe-x-one/`, `/beratung-vor-ort/`, `/positive-messergebnisse/`, `/kontakt-direktheizung/`, `/kontakt-speicherheizgeraet/`. Keine 301-Redirects nötig — vorausgesetzt diese Unterseiten werden in Phase 2 unter denselben Pfaden gebaut. |
| **Title-Tag** | ✅ optimiert | `Elektroheizungen in der Schweiz | Apitec AG` — 50 Zeichen, Hauptkeyword + Marke + Region. |
| **Meta-Description** | ✅ optimiert | 220 Zeichen — etwas länger als die ideal 155-160, sollte für die Phase-2-Welt ggf. gekürzt werden auf rund 155 Zeichen. |
| **H1** | ✅ 1× vorhanden | „Elektroheizungen, die mit der Energiewende heizen." — die Original-Seite hatte keine klare H1, das ist eine Verbesserung. |
| **JSON-LD Schema-Markup** | ✅ `LocalBusiness` mit voller Adresse, Telefon, Mail, Angeboten | Beim Live-Gang prüfen mit Google Rich Results Test. |
| **AI-Bot-Policy** | ⏳ **muss entschieden werden** | Aktuell wurde keine `robots.txt`-Anpassung gemacht (Phase 1 ist nur statisches Markup). **Empfehlung:** für Apitec ist AI-Sichtbarkeit ein Plus (GPTBot, PerplexityBot, ClaudeBot, Google-Extended erlauben), da Elektroheizungen-Beratung gut in AI-Suchen platziert werden kann. Wenn Apitec aber Wettbewerbsvorteil aus eigenem Wissen erhalten möchte → blockieren. **Bitte beim Live-Gang aktiv entscheiden.** |
| **Sitemap.xml** | ❌ noch nicht | Sobald Phase 2 fertig ist, sitemap.xml generieren und in `<head>` + robots.txt referenzieren. |

## Accessibility-Status

| Kriterium | Status |
|---|---|
| Sichtbare Focus-States | ✅ rotes 2px-Outline auf allen interaktiven Elementen |
| Tastatur-Navigation | ✅ Skip-Link, sticky Header, alle Buttons fokussierbar |
| Sprechende Button-Texte | ✅ „Beratung anfragen", „Mehr erfahren", keine „hier klicken" |
| Mobile-Nav `aria-expanded` + `aria-controls` | ✅ implementiert mit Burger-Animation |
| Touch-Targets ≥ 44px | ✅ alle Buttons und Links erfüllen das |
| Kontraste | ✅ Hauptkombinationen: `#1A1A1A` auf `#FBFBF6` (≈16:1), `#4A4A4A` auf `#FBFBF6` (≈8:1), CTA-Green-Button auf Weiss (Kontrast über Schriftfarbe `#0E2D14` ≈10:1). Roter CTA-Block: Weiss auf Rot ≈4.6:1 (genügt für AA bei grossem Text und Body). |
| `lang="de-CH"` | ✅ gesetzt |
| `alt`-Texte | ✅ beschreibend, nicht „Bild" oder Dateiname |
| Reduced-Motion-Support | ✅ via `prefers-reduced-motion` |

## Performance

- Hero-Bild ist 70 KB (Apitec-Original-JPG, bereits gut komprimiert).
- Produktbilder zwischen 116 KB und 451 KB. Das `xone-klimageraet.png` (451 KB) könnte als WebP unter 100 KB. Empfehlung für Phase 2: alle Produktbilder als WebP/AVIF konvertieren.
- 3 Fonts via Google CDN (Inter, Fraunces, JetBrains Mono) — siehe Datenschutz-Hinweis oben.
- Kein render-blockierendes JavaScript (`defer` ist gesetzt).
- Geschätzte Lighthouse-Performance: 85–92 Mobile (abhängig von der Bild-Optimierung).

## Inhaltlich offene Punkte für den Nutzer

1. **Telefon-Erreichbarkeit:** Originaltext sagt nichts über Geschäftszeiten — ich habe im CTA-Channel „Mo–Fr, Geschäftszeiten" geschrieben. Falls falsch, anpassen.
2. **Antwort-SLA:** „Antwort innert 1 Werktag" ist eine Annahme. Bestätigen oder ändern.
3. **„30 Jahre Garantie"** ist als Flag auf der MARU-Karte ausgewiesen — Original-Wording bestätigt das.
4. **„Beratung vor Ort"** — die Original-Seite sagt das ist „Neu". Falls das schon länger im Angebot ist, das „Neu"-Badge entfernen.
5. **„Copyright DE Media & Design"** — wurde umformuliert auf „Design: DE Media & Design · Refresh 2026". Falls nicht erwünscht, einfach in der `index.html` ändern.
6. **Hi-Res-Produktfotos**: Die jetzigen sind ok, aber höher aufgelöst wäre besser, vor allem für die Karten-Bilder.
