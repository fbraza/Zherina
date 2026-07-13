# Julie Chesne — Brand & Interface System

> **Positioning:** Strategic consulting for early-stage biotech. The interface should feel like a rigorous operating system for scientific progress: calm, exact, evidence-led, and built for consequential decisions.

**Theme:** dark by default

**Reference:** This system is informed by a Chrome DevTools review of [Factory](https://factory.ai/) on 2026-07-13 (homepage, Enterprise, Pricing, Company, News, Science, and Contact). It adopts the reference's dark technical restraint, disciplined grid, mono metadata, and systems-oriented editorial rhythm. It must **not** reproduce Factory's logo, name, product UI, dashboard art, proprietary imagery, or copy. Julie's brand remains human, scientific, and consulting-specific—not a software-product clone.

---

## 1. Brand direction

### Core idea
**Scientific strategy, made operational.** Julie translates research, pre-clinical evidence, and founder ambition into focused decisions that can withstand investor, partner, and development scrutiny.

### Brand traits

| Be | Never be |
| --- | --- |
| Precise and evidence-aware | Vague, hype-led, or jargon-stuffed |
| Technically fluent | Coldly corporate or software-generic |
| Decisive and outcome-oriented | Aggressive, alarmist, or salesy |
| Minimal and structured | Sterile, ornamental, or over-designed |
| Human at moments that matter | Personality-free or anonymous |

### Reference analysis → Julie adaptation

| Observed on Factory | Keep for Julie | Do not copy |
| --- | --- | --- |
| Near-black canvas, subtle dot/grid field, light type, sparse orange signals | A dark, high-contrast scientific workspace that makes evidence and action feel primary | Factory's brand mark, software-factory language, live dashboards, or exact animated screen art |
| Geist for editorial type; Geist Mono for labels, navigation, and metadata | The sans/mono distinction: human-readable narrative versus verifiable signal | Treating every paragraph like code or forcing all copy into uppercase |
| Large, plain-spoken headlines and short declarative supporting copy | One clear promise per section and direct calls to action | Factory's exact phrasing or its developer-tool framing |
| 12-column grid, thin borders, small radii, little to no shadow | Structural clarity, contained modules, generous outer whitespace | Dense SaaS pricing/dashboard layouts for consulting content |
| Metrics, diagrams, status cues, and restrained motion | Process maps, evidence summaries, milestones, and optional outcome metrics | Invented client numbers, fake data, or decorative telemetry |

---

## 2. Julie-specific messaging and voice

### Positioning statement
Julie Chesne partners with early-stage biotech founders to sharpen pre-clinical strategy, build investor-ready scientific narratives, and define a credible translational roadmap from research to patient impact.

### Voice rules

- Lead with the decision, outcome, or constraint—not a generic service label.
- Use active, economical verbs: **clarify, prioritize, test, align, prepare, translate, de-risk, decide**.
- Pair scientific specificity with a consequence: “Prioritize the evidence that supports the next financing decision.”
- Explain uncommon terms once; do not use biotech terminology as decoration.
- State uncertainty honestly. Prefer “evidence to strengthen” or “question to resolve” over certainty theatre.
- Use short paragraphs. Let labels, ordered steps, and proof points carry the scanability.

### Copy patterns

| Use | Avoid |
| --- | --- |
| “Turn pre-clinical evidence into a financing-ready story.” | “Revolutionary biotech solutions.” |
| “A focused review of the decisions before your next milestone.” | “End-to-end, world-class support.” |
| “Strategy grounded in the data you have—and the evidence you still need.” | “Guaranteed investor success.” |
| “Book a strategy call” | “Let’s disrupt biotech together.” |

### Approved service names
- **Pre-clinical strategy**
- **Investor-ready narrative**
- **Translational roadmap**

---

## 3. Color system

The dark canvas is the default. Light surfaces are purposeful interruptions for forms, final CTAs, or printable artifacts—not the overall page background.

### Core tokens

| Name | Value | CSS token | Role |
| --- | --- | --- | --- |
| Carbon | `#020202` | `--color-canvas` | Default page canvas; deepest visual field. |
| Field | `#101010` | `--color-surface` | Header wash, inset modules, dark section variation. |
| Raised | `#1f1d1c` | `--color-raised` | Filled dark buttons, elevated panels, hover fills. |
| Rule | `#3d3a39` | `--color-rule` | Default 1px border, grid line, and quiet divider. |
| Rule strong | `#4d4947` | `--color-rule-strong` | Hover/focus borders and selected controls. |
| Muted | `#8a8380` | `--color-muted` | Secondary copy, inactive navigation, captions. |
| Soft | `#a49d9a` | `--color-soft` | Tertiary copy and low-priority labels. |
| Silver | `#b8b3b0` | `--color-silver` | Disabled/quiet detail and illustrative rules. |
| Illustration light | `#ccc9c7` | `--color-illustration-light` | Optional low-emphasis diagram, logo, or divider tone. |
| Illustration pale | `#d6d3d2` | `--color-illustration-pale` | Optional subtle illustrative/divider tone on the dark canvas. |
| Paper | `#eeeeee` | `--color-text` | Default text on dark surfaces. |
| White | `#fafafa` | `--color-text-strong` | Primary light CTA fill or highest-emphasis text. |
| Signal orange | `#ef6f2e` | `--color-accent` | Primary signal: section marker, link state, active step, key annotation. |
| Orange hover | `#ee6018` | `--color-accent-hover` | Hover/pressed accent. |
| Orange deep | `#d15010` | `--color-accent-deep` | Data decrease or dark-field orange detail. |

### Semantic signals
- Use a muted green signal only for genuinely positive/complete states and an orange signal only for attention, change, or active state.
- Never encode meaning by color alone. Pair a signal with a text label, icon, or direction marker.
- Orange should occupy a small fraction of any viewport. It is a calibration mark, not a brand wash.

### Background treatment
- Use `--color-canvas` as the body background and `--color-text` as body text.
- A very low-contrast dotted or square-grid texture is permitted behind hero/process sections: `rgba(184,179,176,.05)` at most. It should disappear at reading distance and never reduce text contrast.
- No glossy gradients, neon glows, glassmorphism, or large color fields.

---

## 4. Typography

### Families

| Family | Token | Use |
| --- | --- | --- |
| Geist | `--font-sans` | Headlines, paragraphs, buttons, navigation, and all editorial content. |
| Geist Mono | `--font-mono` | Eyebrows, numbered steps, metadata, dates, status labels, compact evidence, and technical annotations. |

Use variable weights if available; default to 400. Use 500–600 sparingly for a control state or essential emphasis, not to compensate for weak hierarchy.

### Type scale

Factory observation: 72/72px display at `-2.88px`, 44/46.2px section-display at `-1.76px`, 36/39.6px section heading at `-1.12px`, 28/28px card heading at `-0.56px`, 16/24px body, and 12/12px mono navigation. The following is Julie's responsive implementation of that system.

| Role | Mobile | Desktop | Line-height | Tracking | Family / use |
| --- | ---: | ---: | ---: | ---: | --- |
| Display | 40px | 72px | 1 | `-0.04em` | Geist; one decisive hero statement. |
| Page title | 36px | 44px | 1.05 | `-0.04em` | Geist; major page/section transition. |
| Section heading | 30px | 36px | 1.1 | `-0.031em` | Geist; key service, proof, or process section. |
| Card heading | 22px | 28px | 1 | `-0.02em` | Geist; individual offer or insight. |
| Subheading | 18px | 18px | 1.2 | normal | Geist; lead-in or card title where 28px is excessive. |
| Body | 16px | 16px | 1.5 | normal | Geist; primary reading text. |
| Small body | 14px | 14px | 1.4 | normal | Geist; secondary explanatory text. |
| Metadata | 12px | 12px | 1 | `0.05em` | Geist Mono; uppercase labels, dates, step numbers. |
| Technical body | 14px | 14px | 1.45 | `-0.01em` | Geist Mono; evidence notes and compact lists only. |

### Type rules
- Headlines are sentence case unless a compact mono label is intentionally uppercase.
- Use text-wrap balance for short headings where available; do not force awkward manual line breaks on mobile.
- Do not use italicized marketing headlines, all-caps body copy, or bold walls of text.
- Keep narrative column widths between 45–65ch. The consulting argument must be easy to read, not merely impressive at scale.

---

## 5. Layout, spacing, and responsiveness

### Grid

| Context | Columns | Gutter | Outer gutter | Max width |
| --- | ---: | ---: | ---: | ---: |
| Mobile | 4 | 16px | 16px | fluid |
| Tablet | 8 | 20px | 24px | fluid |
| Desktop | 12 | 24px | 36px | 1920px |

The 12-column / 24px-gap / 36px-gutter desktop structure is observed from Factory. Julie should use it to align text, proof, portrait, and sections—not to produce a dense product dashboard.

### Spacing scale

Base unit: **4px**.

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160`

- Default inline gap: 8–12px.
- Control padding: 8px vertical / 14–16px horizontal.
- Card padding: 24px mobile; 24–32px desktop.
- Section top/bottom rhythm: 80px minimum on desktop; use 120px between major narrative movements. On mobile use 48–80px.
- Preserve deliberate blank space around the hero, proof, and final CTA. Empty space is hierarchy, not missing content.

### Breakpoints

- **< 768px:** four-column layout; stack grids and show portrait as a contained module after core copy; hide complex decorative fields.
- **768–1023px:** eight-column intermediate layout; retain editorial hierarchy, not desktop dashboard density.
- **≥ 1024px:** twelve-column layout, 24px column gaps, 36px page gutters.
- **≥ 1920px:** stop expansion at the container maximum; let outer margins grow.

### Shapes and elevation
- Default radius: **3px**; large contained image/module: **4–6px**.
- Borders: 1px `--color-rule`; hover/active 1px `--color-rule-strong` or accent where meaningful.
- Shadows are normally absent. A restrained black shadow may support a floating menu/dialog only.
- Do not use pills by default. Status chips may be compact rectangular labels with a 3px radius.

---

## 6. Navigation and header

- Fixed or sticky 72px desktop header; 60–64px mobile header.
- Use the wordmark/name at left, navigation in the middle/right, and one clear primary action at far right.
- Desktop links: Geist Mono, 12px/12px, uppercase, `0.05em` tracking. Leave generous horizontal separation (around 32px where space permits).
- Avoid more than five top-level choices for Julie. Recommended: **Approach, Services, Track Record, Publications, Book a call**.
- Primary header CTA: light fill (`--color-text-strong`) with `--color-canvas` text. Secondary header action: raised dark fill or text link.
- On hover in a nav group, gently reduce non-hovered siblings rather than adding heavy underlines. Respect `prefers-reduced-motion`.

---

## 7. Hero

### Job
Introduce the consulting promise, establish Julie as a credible scientific partner, and provide one practical next step.

### Composition
- Desktop: 12-column grid. Copy spans 6–7 columns; portrait/evidence module spans 4 columns with an intentional gutter between.
- Mobile: label → display → short proof paragraph → one CTA → portrait/meta. Do not hide the human proof permanently.
- Start with a mono eyebrow such as `STRATEGIC BIOTECH CONSULTING` or `BELGIUM / GLOBAL`.
- One display headline; target 2–3 lines maximum at desktop.
- Supporting copy should be 2–4 short lines, not a manifesto.
- Use one primary CTA (“Book a strategy call”) and, only when a real destination exists, one quiet text link (“Explore the approach”).

### Evidence module
Use Julie's portrait, a concise availability/location line, or a genuine process/evidence panel. It may have a dark framed treatment and subtle grid texture. It must not imitate a software analytics dashboard or imply false performance data.

---

## 8. Components

### Buttons

| Variant | Construction | Use |
| --- | --- | --- |
| Primary light | `#fafafa` fill, `#020202` text, 3px radius, 1px transparent border | One dominant conversion action per region. |
| Secondary dark | `#1f1d1c` fill, `#eeeeee` text, 3px radius | Supporting action, header secondary. |
| Outline | Transparent, 1px `#3d3a39` border, light text; strong rule on hover | Quiet action where a button improves scanning. |
| Text/arrow link | Mono label or sans body with a small arrow; orange only on hover/active | In-content navigation and “learn more” paths. |

- Minimum target: 44 × 44px on touch devices.
- Button labels are specific verbs, not “Submit” where a clearer action is possible.
- Do not use orange-filled default buttons. Orange marks significance; the light primary button establishes hierarchy.

### Labels, metadata, and status
- Mono, uppercase, 12px, `0.05em` tracking.
- Examples: `01 / EVIDENCE REVIEW`, `AVAILABLE FOR MANDATES`, `SEED–SERIES A`.
- Use thin separators and modest orange markers; no oversized badge clouds.

### Cards and lists
- Prefer bordered modules or divided rows to floating cards.
- Keep a card to one thought: label, title, one short description, optional outcome/link.
- Use three-column service grids only when content is genuinely parallel. On mobile, stack in source order.
- Pricing-table conventions, dense dashboard cards, and fake KPI counters are out of scope unless future content provides verifiable data.

### Quotes and proof
- Set the quote large enough to read as a statement, with small mono attribution beneath.
- Use concrete credentials, publication references, or permissioned client proof. Do not fabricate endorsements, logos, metrics, or timelines.

### Forms
- Dark transparent fields, 1px `--color-rule` border, 3px radius, 8px × 16px padding.
- Geist at 14–16px, visible label above each field, helpful error copy below.
- Focus ring: 2px `--color-accent` with a 2px offset. Never rely only on a border-color shift.

---

## 9. Imagery, diagrams, and data visualization

### Image direction
- Favor a confident, authentic portrait of Julie, research-adjacent editorial photography, restrained document excerpts, and abstract scientific systems imagery.
- Apply dark, neutral, high-detail treatment; preserve legibility and humanity.
- Images sit in lightly bordered frames with 3–6px corners. Avoid stock-lab clichés, neon molecular renders, glossy 3D blobs, and generic “AI” artwork.

### Diagram direction
- Use process maps, decision trees, evidence pathways, milestone timelines, and simple assay-to-investor narrative diagrams.
- Grid lines should be quiet. A single orange line/marker can identify the active phase; green can communicate validated/complete.
- Every diagram needs a text equivalent or caption. Decorative animation must never be the only way to understand a process.

### Metrics
- Use metrics only with a source, clear unit, scope, and date. For example: publication count, years in relevant roles, or anonymized/permissioned engagement outcomes.
- Pair number, unit, and interpretation. Do not create a pseudo-live monitoring interface.

---

## 10. Motion and interaction

Factory uses animated product fields, counters, diagrams, and scroll-driven staging to make a system feel active. Julie should use motion to reveal a reasoning path—not to mimic a live application.

- Default transitions: 150–250ms, `cubic-bezier(.4,0,.2,1)`.
- Use fades, 4–8px translation, divider draws, or sequential process reveals only after the static hierarchy works.
- No parallax that complicates reading, continuous background animation, aggressive cursor effects, or auto-advancing carousels.
- Honor `prefers-reduced-motion: reduce`: remove transform motion, counter animation, and ambient animation; preserve final states.

---

## 11. Page architecture

### Homepage
1. Hero: promise, portrait/proof, one CTA.
2. Trust band: institutions, companies, roles, or publications only where permissioned and accurate.
3. Services: the three approved focus areas with a decision/outcome for each.
4. Approach: a short numbered pathway (e.g. assess → prioritize → articulate → mobilize).
5. Track record: selected, evidence-led examples or concise biography proof.
6. Publications / scientific work: title, venue, year, external source.
7. Final CTA and accessible contact route.
8. Structured multi-column footer: resources, professional links, legal/contact details.

### Secondary pages
- Begin with a direct page claim, not a vague banner.
- Alternate dark canvas and restrained light/paper emphasis only where it improves a decision, form, or long-form reading artifact.
- Use one “proof” module per page: a quote, credential set, case example, publication, or transparent process detail.
- End with a clear, context-specific action rather than repeating generic promotional copy.

---

## 12. Accessibility and quality bar

- Meet WCAG 2.2 AA contrast at minimum; verify muted text on dark surfaces before release.
- Use a semantic landmark structure, one H1 per page, logical H2 hierarchy, lists for parallel items, and descriptive link text.
- Do not communicate required status through orange/green alone.
- Ensure all interactions work by keyboard, have visible focus, and meet 44px touch targets where practical.
- Provide meaningful alt text for portrait and content imagery; empty alt only for truly decorative graphics.
- Keep texture, animation, and low-contrast rule lines out of the reading path.
- Test at mobile, tablet, desktop, 200% zoom, keyboard-only, reduced-motion, and high-contrast settings.

---

## 13. Do / don't

### Do
- Build hierarchy through contrast, typography, grid alignment, and empty space.
- Use dark surfaces, fine rules, and mono labels to make information feel deliberate.
- Make scientific proof, founder decisions, and patient impact concrete.
- Let the portrait and candid expertise keep the technical system human.
- Keep orange scarce and meaningful.

### Don't
- Revert to a light-gray page canvas or a soft “lab elegance” style as the default direction.
- Copy Factory's name, iconography, live dashboard visual language, customer logos, or product claims.
- Add rounded pastel cards, glowing gradients, glass panels, oversized pills, or generic biotech DNA decoration.
- Use unverified KPI charts, testimonials, client logos, or fundraising outcomes.
- Turn every component into a dark box; use borders and spacing before adding a surface.

---

## 14. CSS token starter block

```css
:root {
  /* Color */
  --color-canvas: #020202;
  --color-surface: #101010;
  --color-raised: #1f1d1c;
  --color-rule: #3d3a39;
  --color-rule-strong: #4d4947;
  --color-muted: #8a8380;
  --color-soft: #a49d9a;
  --color-silver: #b8b3b0;
  --color-illustration-light: #ccc9c7;
  --color-illustration-pale: #d6d3d2;
  --color-text: #eeeeee;
  --color-text-strong: #fafafa;
  --color-accent: #ef6f2e;
  --color-accent-hover: #ee6018;
  --color-accent-deep: #d15010;

  /* Type */
  --font-sans: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --tracking-display: -0.04em;
  --tracking-section: -0.031em;
  --tracking-meta: 0.05em;

  /* Layout */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --radius-control: 3px;
  --radius-module: 4px;
  --page-gutter: clamp(16px, 2.5vw, 36px);
  --grid-gap: clamp(16px, 1.67vw, 24px);
  --content-max: 1920px;
}
```

---

## 15. Implementation checklist

- [ ] Switch global canvas/text tokens to the dark system; remove light-gray page-background assumptions.
- [ ] Load Geist and Geist Mono with robust fallbacks and font-display behavior.
- [ ] Establish the responsive 4 / 8 / 12-column layout primitives and container maximum.
- [ ] Rebuild header/navigation with mono metadata styling and one clear CTA.
- [ ] Rework hero around the dark technical composition while retaining Julie's authentic portrait and consultancy-specific proof.
- [ ] Build a real services section for Pre-clinical strategy, Investor-ready narrative, and Translational roadmap.
- [ ] Add only permissioned, sourced proof (institutions, publications, client examples, quotes, metrics).
- [ ] Create accessible, real destinations for Track Record, Publications, and contact before surfacing prominent navigation.
- [ ] Add motion only after the static visual system, keyboard behavior, and reduced-motion experience are complete.
- [ ] Audit contrast, focus states, responsive behavior, and content truthfulness before launch.
