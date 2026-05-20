# Pinggy — Design Language

The visual system for every Pinggy surface. Clean, calm, modern. One accent, one type stack, one shadow ramp, one neutral ramp. Use this document when designing or styling any UI in the product.

---

## 1. Principles

1. **Calm hierarchy.** One element looks most important per region. Establish hierarchy with weight and size — not color. Reserve color for action.
2. **Quiet surfaces.** Backgrounds fade behind content; they don't compete.
3. **Sharp typography.** Tighter tracking on display text, looser tracking on small text, consistent line-heights.
4. **One accent, used sparingly.** Blue is for primary action and links — not decoration.
5. **Soft, single-layer shadows.** Cards rest on the page; they don't levitate. No multi-color glows.
6. **Motion is invisible until needed.** Transitions soften state changes; they don't draw attention.

---

## 2. Color

### 2.1 Brand & accent

| Token         | Hex        | Usage                                            |
| ------------- | ---------- | ------------------------------------------------ |
| `--brand-600` | `#3B6FE0`  | Primary buttons, primary links (rest)            |
| `--brand-700` | `#2F58B8`  | Primary button hover, link hover                 |
| `--brand-500` | `#5B86E5`  | Focus rings, subtle accents                      |
| `--brand-50`  | `#EEF3FE`  | Accent tints (banner background, selection)     |
| `--brand-100` | `#DCE6FC`  | Accent borders on tinted surfaces                |

### 2.2 Neutrals (single warm-gray ramp)

| Token       | Hex        | Usage                                                   |
| ----------- | ---------- | ------------------------------------------------------- |
| `--ink-950` | `#0B0F19`  | Display headings, max-contrast text                     |
| `--ink-900` | `#111827`  | Body headings (h2–h4), strong text                      |
| `--ink-700` | `#374151`  | Default body text                                       |
| `--ink-500` | `#6B7280`  | Secondary text, captions, helper labels                 |
| `--ink-400` | `#9CA3AF`  | Placeholder text, disabled labels                       |
| `--ink-300` | `#D1D5DB`  | Strong borders (active inputs, dividers above-the-fold) |
| `--ink-200` | `#E5E7EB`  | Default borders (cards, inputs at rest)                 |
| `--ink-100` | `#F1F3F7`  | Hover surfaces, subtle fills                            |
| `--ink-50`  | `#F7F8FA`  | Page background base                                    |
| `--white`   | `#FFFFFF`  | Card and elevated-surface fills                         |

### 2.3 Semantic

| Token       | Hex        | Usage                                          |
| ----------- | ---------- | ---------------------------------------------- |
| `--success` | `#10B981`  | Success states, copy-confirmed                 |
| `--warning` | `#F59E0B`  | Warning alerts                                 |
| `--danger`  | `#EF4444`  | Form validation, destructive actions           |
| `--info`    | `#3B6FE0`  | Info banner accent (same as `--brand-600`)     |

### 2.4 Surfaces

- **Page background:** flat `--ink-50`, optionally with a soft brand-tinted radial halo behind a hero section.
- **Card surface:** pure `--white`, never tinted.
- **Code / terminal surface:** `#0E1116` (near-black, slight blue undertone).

---

## 3. Typography

### 3.1 Font stack

```
--font-sans: "Uncut Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", ui-monospace, Menlo, Consolas, monospace;
```

### 3.2 Type scale

| Role                    | Size                              | Weight | Line-height | Tracking   |
| ----------------------- | --------------------------------- | ------ | ----------- | ---------- |
| Display (hero h1)       | `clamp(2.5rem, 4.5vw, 3.75rem)`   | 700    | 1.05        | `-0.025em` |
| H2 (section title)      | `2rem`                            | 700    | 1.15        | `-0.02em`  |
| H3                      | `1.5rem`                          | 600    | 1.25        | `-0.015em` |
| H4                      | `1.125rem`                        | 600    | 1.4         | `-0.01em`  |
| Lead (hero sub)         | `1.25rem`                         | 500    | 1.5         | `-0.005em` |
| Body                    | `1rem`                            | 400    | 1.6         | `0`        |
| Body-sm (helper, meta)  | `0.875rem`                        | 400    | 1.5         | `0`        |
| Caption                 | `0.75rem`                         | 500    | 1.4         | `0.01em`   |
| Mono / code             | `0.9375rem`                       | 500    | 1.5         | `0`        |

### 3.3 Heading rules

- Display headlines: `--ink-950`, weight 700, tight tracking.
- Section headings: `--ink-900`.
- Subheads under a headline use the next step **down** in the scale to create clear hierarchy.
- Body copy: `--ink-700` on `--ink-50`/`--white`; secondary copy: `--ink-500` on white only.
- Never use uppercase for prose. Caption-level eyebrow labels may use uppercase with `0.08em` tracking.

---

## 4. Spacing & layout

### 4.1 8-pt grid

Use multiples of `4px` only.

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  24px
--space-6:  32px
--space-8:  48px
--space-10: 64px
--space-12: 96px
--space-16: 128px
```

### 4.2 Container

- Max width: `1200px`.
- Side gutters: `24px` mobile, `48px` desktop.
- Hero vertical padding: `96px` top / `64px` bottom on desktop.

### 4.3 Two-column hero

- Text-block max-width: `520px`.
- Column gap: `64px` desktop.
- Columns are top-aligned by default; explicitly center when content allows.

### 4.4 Section rhythm

- Between major sections: `96px` vertical space.
- Within a section: `48px` between heading and content, `32px` between content rows.

---

## 5. Border radius

| Token           | Value   | Usage                                                       |
| --------------- | ------- | ----------------------------------------------------------- |
| `--radius-sm`   | `6px`   | Small chips, inline tags                                    |
| `--radius-md`   | `10px`  | Buttons, inputs, selects                                    |
| `--radius-lg`   | `14px`  | Cards, nested groups inside cards                           |
| `--radius-xl`   | `20px`  | Hero CTA card outer shell, terminal window                  |
| `--radius-pill` | `999px` | Toggle slider, badge pills                                  |

---

## 6. Shadows & elevation

```
--shadow-xs:    0 1px 2px 0 rgba(15, 23, 42, 0.04);
--shadow-sm:    0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04);
--shadow-md:    0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
--shadow-lg:    0 12px 32px -8px rgba(15, 23, 42, 0.12), 0 4px 8px -4px rgba(15, 23, 42, 0.06);
--shadow-focus: 0 0 0 3px rgba(91, 134, 229, 0.25);
```

### Elevation rules

- **Navbar:** `--shadow-xs` only.
- **Cards at rest:** `--shadow-sm` + 1px `--ink-200` border. Border provides edge definition; shadow provides lift.
- **Cards on hover:** `--shadow-md`. Subtle.
- **Modals / dropdowns:** `--shadow-lg`.
- **Focus state:** `--shadow-focus` ring on `:focus-visible`.

---

## 7. Components

### 7.1 Navbar

- Height: `72px`.
- Background: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: saturate(180%) blur(12px)`. On scroll add `--shadow-xs` and `border-bottom: 1px solid var(--ink-200)`.
- Logo height: `36px`.
- Nav links: `15px`, weight `500`, color `--ink-700`; hover background `--ink-100`, radius `8px`, padding `6px 12px`.
- Active link: weight `600`, color `--ink-950`, no background.
- Outlined buttons in the nav: border `1px solid --ink-300`, radius `--radius-md`, padding `8px 16px`, color `--ink-900`. Hover: border `--ink-900`, no fill change.

### 7.2 Info banner

- Pill-shaped, centered, max-width `fit-content`, inside the section container — not full bleed.
- Background `--brand-50`, border `1px solid --brand-100`, radius `--radius-pill`, padding `8px 16px`.
- Text: `--ink-700`, `14px`, weight 500. Bold product names use `--ink-900`.
- Links: `--brand-700` with an inline `→` arrow.

### 7.3 Hero copy block

- Headline: display size (see §3.2), `--ink-950`, weight 700, tight tracking.
- Subhead: H3 size, `--ink-900`, weight 500. Gap above: `12px`.
- Description: body size, `--ink-500`, max-width `460px`, line-height `1.6`. Gap above: `24px`.

### 7.4 Email / single-field form

- Group: `--white` background, single border `1px solid --ink-200`, radius `--radius-md`, `overflow: hidden` so input + button share one rounded shell.
- Input: borderless, padding `14px 16px`, `15px`, placeholder `--ink-400`.
- Button: `--brand-600`, white text, weight 600, padding `14px 20px`, no shadow.
- Hover button: `--brand-700`, transition `120ms ease-out`.
- Focus state goes on the wrapper (not the input alone): `--shadow-focus`.
- Helper text above: `13px`, `--ink-500`, weight 500.

### 7.5 Card with primary action

- Outer shell: `--white`, border `1px solid --ink-200`, radius `--radius-xl`, shadow `--shadow-md`, padding `28px`.
- Inner heading: H4 size, `--ink-900`, weight 600.
- Form labels: `13px`, weight 600, `--ink-900`.
- Input groups: single-bordered, radius `--radius-md`, height `44px`, inner divider `1px solid --ink-200` between adjacent controls.
- Nested action panel: background `--ink-50`, radius `--radius-lg`, padding `20px`.
- Action row buttons: `--ink-100` fill, `--ink-900` text, no border, radius `--radius-md`, padding `10px 14px`. Hover: `--ink-200` fill.

### 7.6 Buttons (global)

| Variant   | Background    | Text          | Border                | Hover bg              |
| --------- | ------------- | ------------- | --------------------- | --------------------- |
| Primary   | `--brand-600` | `#fff`        | none                  | `--brand-700`         |
| Secondary | `--ink-900`   | `#fff`        | none                  | `--ink-950`           |
| Outline   | transparent   | `--ink-900`   | `1px solid --ink-300` | `--ink-100`           |
| Ghost     | transparent   | `--ink-700`   | none                  | `--ink-100`           |
| Link      | none          | `--brand-600` | none                  | `--brand-700` (text)  |

- All buttons: padding `10px 18px`, weight `600`, size `14px`, radius `--radius-md`, transition `background-color 120ms ease-out, box-shadow 120ms ease-out, transform 120ms ease-out`.
- Active (mousedown): `transform: translateY(1px)`.
- Disabled: 50% opacity, `cursor: not-allowed`, no hover effect.
- No glow shadows, no gradient sweeps.

### 7.7 Toggle switch

- Off track: `--ink-200`. On track: `--brand-600`.
- Thumb: `--white`, shadow `--shadow-xs`.
- Size: 40 × 20 px.
- Focus: `--shadow-focus` ring on the track.
- Transition: `--duration-slow cubic-bezier(0.4, 0, 0.2, 1)`.

### 7.8 Inputs & selects

- Height: `44px` desktop, `48px` mobile.
- Border `1px solid --ink-200`, background `--white`.
- Text: `15px`, `--ink-900`. Placeholder: `--ink-400`.
- Padding: `0 14px`.
- Focus: border `--brand-500`, ring `--shadow-focus`.
- Invalid: border `--danger`, helper text `--danger` `13px`.

### 7.9 Terminal preview

- Window chrome: `--white` titlebar `36px` tall, traffic-light dots (`#FF5F57`, `#FEBC2E`, `#28C840`), title text `--ink-500` `13px` weight 500.
- Body: background `#0E1116`, text `#E5E7EB`, mono font, `14px`, line-height `1.7`, padding `20px 24px`.
- Outer radius `--radius-xl`, shadow `--shadow-lg`, border `1px solid --ink-200`.

### 7.10 Feature card

- `--white`, `--shadow-sm`, border `1px solid --ink-200`, radius `--radius-lg`, padding `20–28px`.
- Hover: `--shadow-md`, `transform: translateY(-2px)`, transition `180ms ease-out`.
- Title: H4 size, `--ink-900`.
- Body: `--ink-500`, `15px`. Bullets: `--ink-700`, weight 600 on key terms via `<strong>`.
- Check icons in lists: `--brand-600`.

### 7.11 Imagery

- Box-shadow `--shadow-md`, radius `--radius-lg`.
- Hover scale `1.02` with transition `transform 240ms ease-out`.

### 7.12 Accordion

- Flush style (no outer borders).
- Header button: padding `12px 16px`, radius `--radius-md`, transparent at rest.
- Hover: `--ink-100` fill.
- Expanded: `--ink-100` fill, no extra shadow.
- Focus-visible: `--shadow-focus`.

### 7.13 Pricing card (featured variant)

- White, `--shadow-md`, border `1px solid --ink-200`, radius `--radius-lg`.
- "Most Popular" badge: pill, `--brand-600` fill, `--white` text, weight 700.
- Internal price block: `min-height` matched across plan cards for vertical alignment of plan headers.
- Number spinner: single outer border on the group; inner buttons borderless with shared dividers from the input's left/right borders; buttons fixed-width for symmetric `+`/`−`.

---

## 8. Iconography

- Library: Bootstrap Icons.
- Default icon color: `--ink-500`. Active / CTA contexts: `--ink-900` (or `--brand-600` for an affordance like a list check).
- Size: `16px` inline with `14px` text, `20px` inline with `16px+` text.

---

## 9. Motion

```
--ease-out:     cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out:  cubic-bezier(0.4, 0, 0.6, 1);

--duration-fast: 120ms;
--duration-base: 180ms;
--duration-slow: 240ms;
```

### Rules

- **Hover transitions** (color, background, border): `--duration-fast --ease-out`.
- **Movement transitions** (transform, translate, scale): `--duration-base --ease-out`.
- **Shadow / elevation changes**: `--duration-slow --ease-out`.
- **Toggles / switches**: `--duration-slow --ease-out`.
- **Marquees**: linear, gradient mask edges blended into `--ink-50`.
- **Hero entrance** (optional): fade + 8px translate-up on headline / sub / lead / form — stagger `0 / 60 / 120 / 180ms`, duration `400ms ease-out`. Honor `prefers-reduced-motion: reduce`.

### Forbidden

- Bouncy springs.
- Background-color animations on hover for primary CTAs (the color change is the affordance).
- Parallax.

---

## 10. Focus & accessibility

- All interactive elements: visible focus ring `--shadow-focus` on `:focus-visible`. Never remove without replacing.
- Body text on `--ink-50` clears WCAG AA. Secondary text (`--ink-500`) only on white surfaces.
- Minimum touch target: `44 × 44px`.
- Form labels always rendered (no placeholder-only labels). `aria-label` retained where used.
- Honor `prefers-reduced-motion: reduce` for all transitions and decorative motion.

---

## 11. Responsive breakpoints

```
--bp-sm:  640px
--bp-md:  768px
--bp-lg:  1024px
--bp-xl:  1280px
```

### Behavior

- `< lg`: two-column layouts stack; CTA cards move below copy with max-width `560px`, centered. Hero top padding drops to `48px`.
- `< sm`: hero headline drops to `2.25rem`. Form buttons stack under inputs at full width.
