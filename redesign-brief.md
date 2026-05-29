# Redesign-Brief — die-elektroheizungen.ch (Apitec CD)

## Strategischer Brief

1. **Primäres Website-Ziel:** Anfragen für Elektroheizungen generieren (Telefon, Mail, Kontaktformular) — die Seite ist Lead-Generator für die Apitec-Sales/Beratung. Sekundär: Bestandskunden Service (Reparatur, Ersatzteile, Showroom).
2. **Zielgruppe:** Hausbesitzer 40–75 mit alter Nachtspeicherheizung (Hauptgruppe); Renovierer/Sanierer für Direktheizungen; Liegenschaftsverwaltungen.
3. **Primäre Conversion:** Anruf auf 041 210 15 00 ODER Mail an info@apitec.ch ODER „Beratung vor Ort"-Anfrage.
4. **5-Sekunden-Botschaft:** „Apitec — Schweizer Spezialist für Elektroheizungen, 25 Jahre, all-inclusive von Beratung bis Montage."
5. **Vertrauensbeweise sichtbar:** „Über 25 Jahre Erfahrung"; Marken-Logos Siemens/Bauknecht/Dimplex; konkrete Adresse Meggen; klare Telefon/Mail; Showroom-Besichtigung möglich; auch Reparaturservice.
6. **Content erhalten:** alle 4 Produkt-Kategorien, All-Inclusive-Bullets, Reparatur-Service-Hinweis, Apitec-25-Jahre-Erfahrung.
7. **Content kürz-/verschiebbar:** „Design by DE Media & Design" (rein dekorativ); doppelte Telefon-/Mail-Nennungen.
8. **Risiken beim Redesign:** Bestehende SEO-URLs müssen gleich bleiben (`/speichergeraete/`, `/teilspeichergerate/`, `/direktheizgeraet/`, `/monoblock-warmepumpe-x-one/`, `/beratung-vor-ort/`); ältere Nutzer dürfen nicht überfordert werden (klare Schrift, hoher Kontrast); Telefonnummer muss above-the-fold sein.

## UX/Conversion-Diagnose

9. **Konkrete Aufgabe:** Komplexes technisches Thema („Welche der 4 Heizsysteme passt zu meinem Haus?") so vereinfachen, dass der Besucher zum Telefonhörer greift, statt sich allein zu entscheiden.
10. **Wahrscheinliche Einwände der Zielgruppe:**
    - „Elektroheizung ist doch ineffizient/teuer?" → Antwort: grüner Strom + moderne effiziente Geräte (Apitec-Narrativ).
    - „Wer baut das ein? Brauche ich einen Elektriker?" → Antwort: All-Inclusive-Angebot inkl. Montage.
    - „Was ist mit meiner alten Anlage?" → Antwort: Demontage + Entsorgung inklusive; Reparatur-Service ebenfalls.
    - „Garantie / Sicherheit?" → 30 Jahre Garantie auf MARU; etablierte Marken (Siemens/Bauknecht/Dimplex).
11. **Wo entsteht Vertrauen:** 25 Jahre Tradition, konkrete Schweizer Adresse, Markennamen der Hersteller, persönlicher Beratungs-Anspruch, Reparatur-Service, Showroom.
12. **Wo verliert die alte Seite Vertrauen:** Copyright von 2020 (wirkt outdated); Hero-Bild „Frau im Bett" wirkt eher Möbel-Werbung als Heizungstechnik; keine klare H1; Karten-Layout zwar bunt aber visuell zu eng; Footer-Block in knall-rot mit weiss überfordert.
13. **CTA-Struktur:** Primärer CTA „Beratung anfragen" (Telefon/Mail) gehört in Header-Bar (sticky), Hero, jede Produkt-Karte und CTA-Block vor Footer. Sekundärer CTA „Produktinfos / Mehr erfahren" pro Karte.
14. **Conversion-stützende Inhalte:** 4 Produkt-Kategorien klar getrennt, All-Inclusive-Liste, Trust-Streifen (Marken + 25 Jahre), Service-Bereich (Reparatur + Showroom), Kontakt-Daten redundant.
15. **Kritische Nutzerpfade:**
    - Erstbesucher → versteht Apitec ist Spezialist → schaut Produkt-Kategorien → ruft an / mailt.
    - Bestandskunde → sucht Reparatur/Service → findet Reparatur-Sektion → ruft an.
    - Verwaltung → braucht schnellen Überblick „all-inclusive" → klickt All-Inclusive-Sektion → fordert Offerte an.

## Design-Konzept

### 1. Stilrichtung: Swiss Editorial mit Apitec-CD-Anker

Schweizer Sachlichkeit, viel Whitespace, klare Hierarchie, linksbündige Texte, asymmetrischer Hero. Begründung: Apitec-Original ist bereits sehr nüchtern-funktional, die Zielgruppe schätzt das, und „25 Jahre"-Tradition rechtfertigt einen ruhigen, kompetenten Auftritt. Trotzdem: ein subtiler Display-Akzent für Headlines hebt es vom „reines IT-CMS-Layout"-Look ab und vermeidet das „AI-Default-Sans-Sans-Pairing".

### 2. Schrift-Pairing

- **Display / Headlines:** `Fraunces` (Google Fonts) — moderne, charaktervolle Display-Serif mit warmem, leicht handwerklichem Touch. Passt zu „25 Jahre Erfahrung" und schweizerischer Tradition, ohne altbacken zu wirken.
- **Body / UI:** `Inter` — neutral, gut lesbar, Apitec-tauglich (entspricht in der Wirkung dem System-Stack der Original-Apitec-Seite, aber edler).
- **Mono (für Daten/Telefonnummer/Adresse):** `JetBrains Mono` — gibt technischen Daten einen eigenen visuellen Anker und nimmt die „Engineering"-Tonalität auf.

### 3. Farbpalette (Apitec-CI als Basis)

```
--cd-red:     #EB1E25   /* Apitec-Primär — Marken-Anker */
--cd-red-dk:  #B81519   /* Hover/Active für Rot */
--cd-green:   #50C05C   /* Apitec-Sekundär CTA */
--cd-green-dk:#3A9E45   /* Hover für Grün */
--cd-orange:  #FDA100   /* Tertiär — Akzent für Hinweis-Labels */
--bg:         #FBFBF6   /* Warm-Off-White (Apitec-Original) */
--bg-elev:    #FFFFFF   /* Reines Weiss für Karten */
--bg-soft:    #F2F0E8   /* Sektion-Trenner */
--ink:        #1A1A1A   /* Headlines */
--ink-2:      #4A4A4A   /* Body */
--ink-3:      #767676   /* Meta */
--line:       #E1DFD7   /* Trennlinien */
```

Begründung: Rot + Grün ist eine ungewöhnliche Marken-Kombination (üblich wären Blau+Orange im Heizungssektor). Apitec hat sie historisch — wir bleiben dran, weil sie *funktional* ist (Rot = Wärme, Grün = Sustainability/Action) und damit Marke + Geschäftsmodell verbindet.

### 4. Hero-Konzept (NICHT zentrierter Text mit Button)

Asymmetrisch, 2-spaltig auf Desktop. **Links** (~55%): Display-Headline mit Editorial-Charakter („Elektroheizungen, die mit der Energiewende heizen.") + kurzer Sub-Text + zwei klare CTAs (Primär grün „Beratung anfragen", Sekundär outline „Produkte ansehen") + kleine Meta-Zeile mit Telefonnummer in Mono. **Rechts** (~45%): das echte Apitec-Hero-Bild „Dimplex Quantum VFE mit Wind-/Solarpanel-Display + Wärme-Glow" — das Bild trägt die ganze Markenbotschaft.

Auf Mobile: Bild oben, dann Text — kein Tausch, aber gestapelt.

### 5. Authentizitäts-Anker (mindestens 2-3 sichtbar)

1. **„Seit über 25 Jahren"** prominent in der Hero-Meta-Zeile oder Trust-Block.
2. **„Apitec AG, Sentibühlstrasse 2, 6045 Meggen"** konkret im Footer (nicht generisch „Schweiz").
3. **„041 210 15 00"** direkt klickbar im Header und Hero — typografisch in Mono.
4. **Marken-Logos Siemens / Bauknecht / Dimplex** als Trust-Streifen.
5. **„Auch Reparaturen alter Geräte"** als eigener kleiner Trust-Hinweis.

## Pflicht-Sektionen der Homepage (Phase 1)

1. **Top-Bar:** Beratung vor Ort (Neu-Pill) · Pro Elektroheizungen (PDF-Download) · MARU Messungen · Sprache (pour la Romandie) · Telefon · Mail
2. **Header:** Apitec-Logo + Hauptnavigation (Produkte, All-Inclusive, Service, Kontakt) + primärer CTA-Button
3. **Hero:** Headline links, Hero-Bild rechts, Telefon-Anker
4. **Produkte (4 Karten):** Speichergeräte, Teilspeicher MARU Comfort, Direktheizungen, X-ONE Monoblock-Wärmepumpe
5. **Trust-Streifen:** „Seit über 25 Jahren" + Marken-Logos
6. **All-Inclusive-Angebot:** 4-stufige Leistungsliste (Beratung → Demontage/Entsorgung → Montage → Inbetriebnahme)
7. **Service & Showroom:** Reparatur + Besichtigung in Meggen
8. **CTA-Block:** „Beratung anfragen" mit Telefon/Mail prominent
9. **Footer:** Adresse, Kontakt, Schwester-Sites, Rechtliches

## Zielsystem

Multi-File HTML/CSS/JS — Default, da der Nutzer nichts Anderes spezifiziert hat. Strukturiert mit semantischem HTML5, CSS-Custom-Properties, klar abgrenzbaren Sektionen — falls später auf WordPress/Webflow übertragen, bleibt es portierbar.
