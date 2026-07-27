# Fisify Design System

A design system for **Fisify** — a Spanish digital physiotherapy startup from Bilbao (2020) that uses AI and computer vision to assess and treat musculoskeletal injuries remotely. Fisify is B2B2C: it partners with insurers and employers to deliver 24/7 personalized physiotherapy to their members.

> Brand mission: **"Diseñar la nueva era de la fisioterapia"** — *Designing the new era of physiotherapy.*

This system contains the visual foundations (color, type, spacing), brand voice, logos, iconography guidance, and a React/HTML UI kit for the Fisify mobile app and marketing web surfaces.

## Sources

- **Brandbook PDF** — `New Brandbook Fisify.pdf` (attached codebase: `New Brandbook Fisify/`). Contains logotype, colors, typography, iconography, photography, illustrations, applications. Extracted text in `_source/pdf_text_1.txt`, `_source/pdf_text_2.txt`, `_source/pdf_text_3.txt`.
- **Product screenshots** — `_source/323shots_so.png` (mobile app trio), `_source/iMac-328.png` / `329.png` (web dashboard), `_source/Group-1032.png` (web catalog).
- **Logo variations** — multiple `Vector*.png`, `Group 1292/1298/1299/1300.*` files (isotipo alone, isotipo + wordmark, wordmark only).
- **Brand photography + illustrations** — `Group 1041/1163/1164/1262.*`, `Vector 146.png` (heart shield).

> No production codebase was provided. UI was recreated from the brandbook + app/web screenshots. Flag: components are cosmetic recreations, not copied from source.

---

## Index

| Folder / file | What's in it |
|---|---|
| `README.md` | This file — context, fundamentals, visual foundations, iconography |
| `SKILL.md` | Claude Code–compatible skill definition |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radii, shadows) as CSS variables |
| `assets/` | Logos (`logo-fisify*.png`, `isotipo.png`), illustrations, photography, application mockups, orbs |
| `preview/` | Individual HTML cards that populate the Design System tab |
| `ui_kits/app/` | Mobile app UI kit — `index.html` click-through + JSX components |
| `ui_kits/website/` | Marketing website kit — `index.html` + JSX components |
| `_source/` | Original brandbook materials (PDFs, PNGs, SVGs) — for reference only |

---

## Content fundamentals

### Language
- **Primary language is Spanish.** The product, brandbook, and marketing materials are all written in Spanish. Occasional English is used for headlines in brand materials (e.g. *"Adopting the habit"*, *"Technology for physiotherapy"*), but the app itself is Spanish-first. When producing English copy, use short, warm, caregiver-tone phrases — never clinical or jargon-heavy.
- Speaks **"tú"** (informal you), never "usted". The tone is a caring friend who happens to be a physiotherapist.

### Voice (from brandbook)
Four voice attributes, always balanced together:

| Attribute | What it means | Example phrases |
|---|---|---|
| **Clara** | Explains physio + tech in plain language | *"Realiza estos ejercicios cuando tengas agujetas"* |
| **Optimista y alentadora** | Positive, focused on benefits of a healthy body | *"Creamos los tratamientos del futuro"* |
| **Responsable** | Consistent, transparent, faithful to brand values | *"Tu fisioterapeuta 24/7"* |
| **Dinámica** | Adapts to the user's changing needs | *"Cuídate dónde y cuando quieras"* |

### Tone
- **Cercano y confiable** — close, familiar, "tú a tú"
- **Profesional e innovador** — conveys expertise in physio + tech
- **Motivador e inspirador** — invites the user to take care of themselves

### Archetype: The Caregiver
Represents **protection, support, and genuine care**. A trustworthy, empathic figure who improves people's lives and makes them feel safe and attended to. *Never* clinical, cold, authoritarian, or alarmist. Never the Hero or the Sage.

### Key messages (headlines)
These are the canonical brand headlines — lift them verbatim when possible:

- **"Tu fisioterapeuta 24/7"** — Your physiotherapist 24/7
- **"Cuídate dónde y cuando quieras"** — Take care of yourself wherever and whenever you want
- **"Creamos los tratamientos del futuro"** — We create the treatments of the future
- **"Diseñando la fisioterapia del futuro"** — Designing the physiotherapy of the future
- **"En cualquier lugar y momento"** — Anywhere and anytime
- **"La mejor experiencia para prevenir dolores musculoesqueléticos"**

### Casing
- **Sentence case** for everything — UI labels, buttons, headings. Title Case is not used.
- Section labels in the app sometimes appear in sentence case as phrases: *"Para deportistas"*, *"Un día cualquiera"*, *"Píldoras de salud"*, *"Próximas charlas"*.
- **No ALL CAPS.** No shouty marketing phrases.

### Emoji usage
- **Rarely in the product.** Not used in the app UI or core marketing.
- **Occasionally in conversational contexts** (notifications, campaign emails, push copy) — e.g. the Bono Spa campaign uses 🎁🎟️🥳 sparingly to feel friendly and human.
- **Never** as replacement for icons. Never in headlines. Default to no emoji; reach for them only when the message is explicitly celebratory/personal.

### Product-copy examples (from screens)
- *"Programas de bienestar"* — "Wellness programs"
- *"¿Qué programa quieres realizar?"* — "Which program do you want to do?"
- *"Crea tu nuevo programa personalizado"* — "Create your new personalized program"
- *"¿Cuál es tu objetivo?"* — "What's your goal?"
- *"Aliviar el dolor · Ideal si actualmente tienes dolor"*
- *"Evitar dolores de espalda · Ideal para prevenir sobrecargas"*
- *"Ejercicios · 3 min"* — with an inline clock icon
- *"Empezar"* — primary button label ("Start")

Copy patterns:
- Action verbs in the infinitive: *Aliviar, Evitar, Fortalecer, Mejorar, Empezar*.
- Descriptive subtitle of 3–8 words under every card title.
- Time estimates on exercises: *"7 min"*, *"5 min"*, *"3 min"* — always with a small clock icon.

---

## Visual foundations

### Colors
Only **4 main brand colors**, by design. The palette is deliberately quiet — warm, lilac, and near-black — and lets photography and gradients do the emotional work.

| Name | Hex | Role |
|---|---|---|
| "Black" | `#2A2B43` | Logo, primary text, headings |
| "Dark purple" | `#3F3C63` | Secondary headings, UI ink |
| "Light pink" | `#EBE6F7` | Tinted surfaces, soft backgrounds |
| "White" | `#FFFFFF` | Page background |

**Important:** The "Black" is actually a warm deep navy, never true `#000`. Never pair it with pure black — it loses its character.

Status colors come in **pairs** (soft background + saturated fill):
- Red: `#FFE2E7` / `#FFA6AB` — errors, alerts
- Yellow: `#FFFAEC` / `#FDE8B1` — warnings
- Green: `#F4FFF2` / `#AFD7AE` — success, habit-created

The CTA purple observed in the app (`#8B75EE` approx.) is a derivative tuned from the gradient endpoint `#A793FF` for a usable AA contrast on white.

### Gradients (official)
Four named gradients, all ~135° linear:

| Name | From → To |
|---|---|
| Main gradient | `#C6B5F4` → `#FE93A7` |
| Secondary gradient | `#BFD0FF` → `#A793FF` |
| Background gradient | `#FBF6F9` → `#F6E8F7` |
| Gradient for warnings | `#FFBE9A` → `#F37C7C` |

Gradients appear as: hero washes, orb/blob decorations, section backgrounds, badge pills. The app uses them **sparingly** — most screens are white with one accent orb or gradient pill.

### Typography
- **One family: Outfit** (Google Fonts). Per the brandbook: *"moderna, limpia y legible. Sus formas geométricas y equilibradas reflejan tecnología y precisión, mientras que su redondez aporta cercanía y calidez."* — modern, clean, legible; geometric forms reflect tech + precision, roundness carries closeness + warmth.
- **All 9 weights are in use**: Thin, Extralight, Light, Regular, Medium, Semibold, Bold, Extrabold, Black.
- **Letter-spacing is always −2%** — every size, every weight. This is non-negotiable brand standard.
- **Hierarchy pattern (from the brandbook "Use of fonts" spec):**
  - **Title** → Outfit **Semibold** −2% spacing
  - **Subtitle** → Outfit **Extralight** −2% spacing
  - **Text** → Outfit **Light** −2% spacing
- Headline pattern: weight contrast between a bold statement (Semibold) and a thin supporting line (Extralight), then body in Light. No italic, no caps.

```
Diseñando la fisioterapia del futuro    ← Outfit Semibold -2%
En cualquier lugar y momento            ← Outfit Extralight -2%
La mejor experiencia para prevenir…     ← Outfit Light -2%
```

### Backgrounds
- Default backgrounds are **white or near-white** (`#FFFFFF`, `#FBF6F9`).
- Full-bleed imagery is used on feature cards and hero blocks — **warm, bright, saturated lifestyle photography** with natural light.
- Repeating patterns, textures, or mesh gradients: **no**.
- Accent decoration: **gradient orbs/blobs** (soft, blurred, multi-color — see `assets/orbs/`) floating in corners or behind text. Also: a signature colored half-disc peeking from behind cards (red, lavender — see the business-card applications).
- Background gradient (`#FBF6F9` → `#F6E8F7`) is applied to large empty surfaces to lift them off pure white.

### Imagery
From the brandbook's photography page: **"luminoso y vibrante"** — bright, naturally lit, warm saturation, evoking confidence and wellbeing. People are **in motion** (exercising, active pauses), often **AI-generated** for consistency. Contexts blend **professional and everyday** (offices, kitchens, hotels) to show Fisify fitting into real life.

Cropping is generous; faces are visible and smiling. Subjects are a diverse, international-looking mix of ages (25–55). Color grade is warm, never cool, never black-and-white, never grainy.

### Animation
Not explicitly defined in the brandbook, but the brand's caregiver archetype + "instantáneo" value points to:
- **Soft, confident ease-outs** — never spring-bouncy or playful
- `cubic-bezier(0.22, 1, 0.36, 1)` at `220ms` for most transitions
- **Fades + small vertical translate (4–8 px)** for entrances
- No parallax, no scroll-jacking
- Hover: `opacity 0.85` or color shift to `--accent-hover` — never scale-up
- Press: subtle scale down to `0.98` and a slight color darken
- Live/pulsing elements (e.g. `live` badge) use a slow 2 s opacity oscillation

### Borders, corners, and shadows
- **Corner radii** are generous: cards `16–24 px`, pill buttons, big photo cards `20–24 px`, the iPhone status bar area mirrors `44–48 px` from iOS.
- **Borders are almost invisible** — `1px solid #EDECF2` at most, or none. The system relies on shadow + background contrast, not linework.
- **Shadows are soft, wide, and low-opacity** — tinted with the brand navy rather than black:
  - `0 2px 6px rgba(42,43,67,0.05)` for resting cards
  - `0 8px 24px rgba(42,43,67,0.06)` for elevated cards
  - `0 20px 48px rgba(42,43,67,0.08)` for modals / floating device mockups
- No inner shadows. No neumorphism.

### Cards
- Rounded (`--r-xl` = 20 px or `--r-2xl` = 24 px)
- White background with a thin `#EDECF2` border **or** a soft shadow — rarely both
- Inside: padding `16–24 px`, content left-aligned, category label on top (tiny, ink-500 color), title below in Semibold 18–20 px, description in Regular 14 px ink-500
- Photo cards: full-bleed image top with `16 px` corner radius inside the card, text block below

### Transparency & blur
- Used sparingly. The brand's "Mindset" photo card uses a translucent pill label (`rgba(255,255,255,0.3)` + `backdrop-filter: blur(8px)`) over the image.
- Progress bars and inline timers use solid colors, not glass.
- No glassmorphism on buttons or nav bars.

### Layout
- Mobile app: standard iOS frame, bottom tab bar with 5 items (program, catalog, offers, progress, chat). The chat item is a floating purple pill, not a tab icon — **signature detail**.
- Web: centered 1200-wide column, 3–4 column grids for cards, lots of whitespace, no hard edges to the viewport.
- Fixed elements: mobile nav bar (bottom), web top nav (minimal, logo + sign-in).

### Protection / legibility
- Text over photography sits inside a **translucent bottom gradient** from `rgba(0,0,0,0)` to `rgba(0,0,0,0.55)`, roughly 40% of the image height.
- Alternative: a solid white pill containing the label.
- Never use a drop-shadow on text for legibility — the gradient is the standard.

---

## Iconography

### Style
Per the brandbook: **"Iconos minimalistas y geométricos, coherente con el diseño limpio y profesional de Fisify."** Minimal, geometric, stroke-based.

Observed in the app:
- **Stroke weight ~1.5–1.75 px** on a 24 px grid
- **Rounded line caps and joins**
- **Mostly outlined** (home, catalog, trending, offers, timer, profile), occasionally **filled** for active tab states
- **Single-color** — always the current text ink, never multi-colored
- Active state = fill + purple, or a small `2–4 px` dot below the label

### What's used in Fisify's app
From screenshots: home, grid/catalog, shopping-bag (offers), trending-up (progress), chat-bubble, clock (time), chevron-right (navigation), play/triangle (start exercise), check-circle (habit complete), person (profile). All are **line icons**, not filled.

### Recommended substitute
The brand does **not** ship an icon set. Use **[Lucide](https://lucide.dev/)** — its stroke weight (1.5 px default), rounded caps, and 24 px grid match Fisify's aesthetic exactly.

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

For production, copy the subset you use from `lucide-static/icons/` into `assets/icons/`. **Flag: this is a substitution — Fisify has no official icon font or SVG set. Please confirm with the brand owner or supply an official Figma library.**

### SVG vs PNG vs emoji
- **SVG only** for icons. Never PNG-export icons — the line weight won't match the rest of the UI.
- **Emoji**: rare, conversational contexts only (see Content fundamentals). Never as UI icons.
- **Unicode characters as icons**: no. Always use the proper SVG.

### The Isotipo (logomark)
The isotipo — a geometric "C"-meets-"U" shape, resembling a phone cradle or open hands around a support point — can be used **without** the wordmark when Fisify is already identifiable (app icon, favicon, pins, merch, internal tools). See `assets/isotipo.png`.

---

## Font substitution

**Outfit** is the official typeface. It's available on Google Fonts (all 9 weights), so `colors_and_type.css` pulls it from there directly. **No substitution required.** If you're shipping offline/air-gapped, download Outfit self-hosted TTF/WOFF2 from [Google Fonts](https://fonts.google.com/specimen/Outfit).

---

## Known caveats

- **No production codebase.** The UI kit was recreated from the brandbook PDF and product screenshots. Component behavior/structure matches the screenshots but may diverge from production implementation.
- **No official icon set.** Lucide is substituted — please confirm or provide the Fisify icon library.
- **Spanish-only copy in the UI kit.** All recreated screens use the Spanish copy from the screenshots. Localization is not attempted.
- **Some brandbook pages (Color Combinations, Applications detail, Typography Combinations) didn't extract readable text from the PDF** — the visual layouts on those pages carried information that's only partially represented here. See `_source/` for the original PDFs.
