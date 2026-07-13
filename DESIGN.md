# Julie Chesne — Style Reference
> A clean bench in a well-run lab. Surfaces are uncluttered, labels are precise, and every element serves a clear, functional purpose.

**Theme:** light

Julie Chesne embraces a 'scientific clarity meets professional elegance' aesthetic, prioritizing informational clarity and directness. The near-monochromatic palette, dominated by light grays and deep charcoals, provides a stark, high-contrast backdrop for consulting content. A single vivid orange accent color is deployed sparingly as a functional indicator, highlighting interactive elements and key information without visual noise. The strong typographic voice, characterized by precise letter-spacing and a monospace variant for data and references, reinforces the structured, consulting-focused identity.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Carbon Black | `#020202` | `--color-carbon-black` | Primary text, darkest surface background (e.g., active navigation items), critical interactive elements. |
| Chalk Gray | `#eeeeee` | `--color-chalk-gray` | Page background, light surface elements (card backgrounds), default button backgrounds. Provides a clean, spacious canvas. |
| Faded Silver | `#fafafa` | `--color-faded-silver` | Slightly lighter alternative to Chalk Gray, used for subtle differentiation of card backgrounds and elements. |
| Cool Gray | `#b8b3b0` | `--color-cool-gray` | Subtle borders, inactive button outlines, secondary text. Establishes divisions without harshness. |
| Graphite | `#3d3a39` | `--color-graphite` | Strong borders, dark icons, secondary text. A darker gray for depth and contrast. |
| Ash Gray | `#a49d9a` | `--color-ash-gray` | Subtle interactive borders and backgrounds, similar to Cool Gray but with a touch more warmth. |
| Helix Orange | `#ef6f2e` | `--color-helix-orange` | Accent color for highlight badges, interactive indicators, and small, high-attention elements. Its vividness cuts through the neutral palette. |

## Tokens — Typography

### Geist — Primary typeface for all headings, body text, navigation, and general UI. The carefully tuned negative letter-spacing, particularly at larger sizes, creates a composed, intentional feel, preventing headlines from feeling loose. · `--font-geist`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 24px, 48px, 60px
- **Line height:** 1.00, 1.20, 1.50
- **Letter spacing:** -0.0480em, -0.0300em
- **Role:** Primary typeface for all headings, body text, navigation, and general UI. The carefully tuned negative letter-spacing, particularly at larger sizes, creates a composed, intentional feel, preventing headlines from feeling loose.

### Geist Mono — Used for data points, citations, references, and any content requiring a fixed-width, precise presentation. Its subtle negative letter-spacing maintains a tight, readable block structure. · `--font-geist-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px, 18px
- **Line height:** 1.00, 1.20, 1.38, 1.50
- **Letter spacing:** -0.0200em
- **Role:** Used for data points, citations, references, and any content requiring a fixed-width, precise presentation. Its subtle negative letter-spacing maintains a tight, readable block structure.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | -0.24px | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.2 | — | `--text-subheading` |
| heading | 24px | 1.2 | — | `--text-heading` |
| heading-lg | 48px | 1.2 | -2.3px | `--text-heading-lg` |
| display | 60px | 1 | -2.88px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 6px |
| header | 0px |
| buttons | 4px |
| default | 4px |

### Layout

- **Section gap:** 72px
- **Card padding:** 16px
- **Element gap:** 4px

## Components

### Text Link
**Role:** Navigation, inline links, 'Learn More' buttons

Color Carbon Black (#020202) for primary links, transitioning to Graphite (#3d3a39) for secondary. No explicit underline until hover, relying on contrast and context for discoverability. Uses Geist, 14-16px, weight 400.

### Navigation Link
**Role:** Top navigation menu items

Color Carbon Black (#020202) on Chalk Gray (#eeeeee) background. No special styling, relying solely on typography (Geist, 14px, 400 weight) for visual presence. Active items use the same styling with a subtle visual cue or background change.

### Ghost Button
**Role:** Secondary actions, grouped options (In-person / Virtual)

Transparent background with text color Carbon Black (#020202). Has a subtle Cool Gray (#b8b3b0) border. Padding 0 for inline context. Radius 0px.

### Outlined Button
**Role:** Secondary calls to action, resource downloads

Transparent background with Carbon Black (#020202) text. Border color Cool Gray (#b8b3b0), 1px solid. Padding 0 vertically, 12px horizontally. Radius 4px. Font Geist, 16px, 400 weight.

### Filled Button (Light)
**Role:** Download buttons, primary calls to action

Background Chalk Gray (#eeeeee), text Carbon Black (#020202). Border color Ash Gray (#a49d9a). Padding 0 vertically, 12px horizontally. Radius 4px. Font Geist, 16px, 400 weight.

### Filled Button (Dark)
**Role:** Download buttons, primary calls to action (alternative)

Background Carbon Black (#020202), text Carbon Black (#020202). Border color Ash Gray (#a49d9a). Padding 6px vertically, 12px horizontally. Radius 8px. The dark background with dark text is counter-intuitive for contrast, suggesting a specific functional or state-based context.

### List Item Card
**Role:** Content blocks in feature sections

Transparent background, no shadow, 0px border radius. Padding 0 vertically, 16px horizontally. Used as a container for grouped information. Text uses Carbon Black (#020202).

### Elevated Content Card
**Role:** Featured content blocks, forms, interactive elements

Background Faded Silver (#fafafa), no shadow, 6px border radius. Padding 16px vertically, 0 horizontally. Provides a slight visuallift from the main background.

### Data Callout Block
**Role:** Highlighted quotes, key metrics, reference data display

Background Chalk Gray (#eeeeee), no shadow, 6px border radius. Padding 0. Contains monospaced text for data points and references. May feature interactive elements like a copy button.

### 'NEW' Badge
**Role:** Highlights new services, recent case studies, or fresh content

Transparent background, text Helix Orange (#ef6f2e). Radius 0px, padding 0. Appears as a small, vivid text label next to titles, using Geist Mono 12px.

## Do's and Don'ts

### Do
- Prioritize Carbon Black (#020202) for primary text and Chalk Gray (#eeeeee) for background, ensuring AAA contrast.
- Apply Geist font consistently for all UI text, utilizing negative letter-spacing for large headlines (e.g., -0.0480em at 60px) to achieve a condensed, precise appearance.
- Use Geist Mono for all data callouts, citations, and references at weights 400 and sizes 12-18px for clear distinction.
- Implement Cool Gray (#b8b3b0) for subtle borders and dividers to maintain visual structure without heavy lines.
- Reserve Helix Orange (#ef6f2e) strictly for highlighting functional elements like badges and active indicators.
- Maintain a default border radius of 4px for buttons and form elements, extending to 6px for elevated cards.
- Ensure consistent vertical spacing of 24px and horizontal elements gaps of 12px or 8px using the base 4px unit.

### Don't
- Avoid using chromatic colors beyond Helix Orange (#ef6f2e) to maintain the stark, professional aesthetic.
- Do not introduce shadows or complex gradients; rely on color and typography for hierarchy and depth.
- Do not use generic system fonts; always specify Geist or Geist Mono for design consistency.
- Avoid excessive padding or large border radii; the design favors a compressed, precise feel.
- Do not use underlines for links unless on hover, rely on color and context (Carbon Black on light backgrounds).
- Avoid arbitrary text styling (bolding, italics); rely on the established type scale (Geist, 400 weight) for hierarchy.
- Do not deviate from the specified negative letter-spacing values, especially for headlines, as it is a core characteristic of the brand's typography.

## Imagery

The visual language for imagery is primarily functional and scientific, leaning heavily on abstract conceptual graphics, process diagrams, and data visualizations. Visuals are contained within precise, slightly rounded frames, often featuring stylized infographics rather than raw screenshots. Graphics are typically monochromatic or use a limited palette, often employing subtle dot patterns and stark lines. There's an absence of photography or human elements, focusing instead on the methodologies and insights of biotech consulting. Imagery serves an explanatory role, illustrating processes or abstracting complex scientific ideas, with a high density relative to other pure UI sites.

## Layout

The page structure employs a full-width layout with a primary content area constrained by a clear maximum width, centered on the screen. The hero section is a split two-column design: text-dominant on the left with a headline and descriptive copy, and abstract visuals on the right, punctuated by subtle molecular patterns. Sections generally follow a consistent vertical rhythm, often alternating between text-heavy content and content paired with infographics or data visualizations, typically in a two-column arrangement (text left, image right, or vice versa). There are occasional three-column card grids for presenting services or case studies. The navigation is a persistent top bar, clean and functional, with a clear separation of branding and menu items. The layout emphasizes clarity and content organization, feeling spacious yet structured.

## Agent Prompt Guide

### Quick Color Reference
- **Text Primary:** #020202
- **Page Background:** #eeeeee
- **Card Background:** #fafafa
- **Border/Divider:** #b8b3b0
- **Accent:** #ef6f2e

### Example Component Prompts
1. **Create a Hero Section:** Set page background to Chalk Gray (#eeeeee). Left half: headline 'Strategic Consulting for Early-Stage Biotech' in Geist, 60px, weight 400, letter-spacing -0.0480em, color Carbon Black (#020202). Subheading 'From pre-clinical strategy to investor-ready narratives — partnering with founders to accelerate the path from bench to bedside.' in Geist, 18px, weight 400, color Graphite (#3d3a39). Right half: an abstract graphic with subtle molecular dot patterns.
2. **Generate an Outlined Button:** Label 'Download Case Study'. Use transparent background, Carbon Black (#020202) text, Cool Gray (#b8b3b0) 1px border. Padding top/bottom 0px, left/right 12px. Border radius 4px. Font Geist, 16px, weight 400.
3. **Design a Data Callout Block:** Use background Chalk Gray (#eeeeee), no border, 6px border-radius. Inside, display a key metric or reference in Geist Mono, 16px, weight 400, letter-spacing -0.0200em, color Carbon Black (#020202). Add a copy icon next to it.
4. **Create an Elevated Content Card:** Use background Faded Silver (#fafafa), no box-shadow, 6px border-radius. Padding 16px top/bottom, 0px left/right. Insert a highlight badge next to a section title. The badge should be text 'NEW' in Geist Mono, 12px, weight 400, color Helix Orange (#ef6f2e).
5. **Build a Navigation Bar:** Use background Chalk Gray (#eeeeee) with no border. Nav links like 'Services', 'About', 'Case Studies' use Geist, 14px, weight 400, color Carbon Black (#020202). Include 'Contact' button as a Filled Button (Dark) variant and 'Book a Consultation' as an Outlined Button.

## Experience & Mission

- **INSERM** — France's national institute of health and medical research. Deep expertise in public-sector biomedical research and translational science.
- **Champalimaud Research Centre** — World-class neuroscience and oncology research facility. Experience in rigorous, curiosity-driven scientific environments.
- **LiMM Therapeutics** — Early-stage biotech focusing on innovative therapeutic approaches. Hands-on experience navigating the challenges of company creation and scientific strategy.
- **iTeos Therapeutics** — Clinical-stage immuno-oncology company. Exposure to the transition from pre-clinical discovery to clinical development.
- **Cantoni Therapeutics** — Early-stage therapeutic venture. Direct understanding of the operational and strategic needs of nascent biotech companies.
- **Silengenics** — Biotech venture in gene silencing technologies. Familiarity with cutting-edge platform technologies and their path to validation.

> **Consulting Focus:** Julie Chesne partners with early-stage biotech startups to strengthen their pre-clinical development strategy, shape compelling scientific narratives, and prepare investor-ready documentation for seed and Series A fundraising rounds.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-carbon-black: #020202;
  --color-chalk-gray: #eeeeee;
  --color-faded-silver: #fafafa;
  --color-cool-gray: #b8b3b0;
  --color-graphite: #3d3a39;
  --color-ash-gray: #a49d9a;
  --color-helix-orange: #ef6f2e;

  /* Typography — Font Families */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -2.3px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -2.88px;

  /* Typography — Weights */
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Layout */
  --section-gap: 72px;
  --card-padding: 16px;
  --element-gap: 4px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;

  /* Named Radii */
  --radius-cards: 6px;
  --radius-header: 0px;
  --radius-buttons: 4px;
  --radius-default: 4px;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-carbon-black: #020202;
  --color-chalk-gray: #eeeeee;
  --color-faded-silver: #fafafa;
  --color-cool-gray: #b8b3b0;
  --color-graphite: #3d3a39;
  --color-ash-gray: #a49d9a;
  --color-helix-orange: #ef6f2e;

  /* Typography */
  --font-geist: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: -0.24px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -2.3px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -2.88px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
}
```
