# Pinggy — Design Guidelines (Modernization)

A cosmetic refresh of the current homepage. **Layout, copy, and component placement stay the same.** This document specifies the look-and-feel changes needed to make the page feel cleaner, calmer, and more modern.

The current direction (light theme, grid-paper background, two-column hero, blue accent, dark CTA buttons, white feature card on right) is preserved. We tighten typography, refine color, reduce visual noise, and introduce a consistent spacing / radius / shadow / motion system.

---

## 1. Design Principles

1. **Calm hierarchy.** One thing should look most important per region. Use weight and size — not color — to establish hierarchy. Reserve color for action.
2. **Quiet surfaces.** Backgrounds should fade behind content, not compete. The grid background stays but at half the current intensity.
3. **Sharp typography.** Tighter letter-spacing on large display text, looser tracking on small text, consistent line-heights.
4. **One accent, used sparingly.** The blue is for primary action and links only — not decoration.
5. **Soft, single-layer shadows.** Cards rest on the page; they don't levitate. No multi-color glows.
6. **Motion is invisible until needed.** Transitions exist to soften state changes, not to draw attention.

---

## 2. Color System

### 2.1 Brand & Accent

| Token              | Hex        | Usage                                                    |
| ------------------ | ---------- | -------------------------------------------------------- |
| `--brand-600`      | `#3B6FE0`  | Primary buttons, primary links (rest)                    |
| `--brand-700`      | `#2F58B8`  | Primary button hover, link hover                         |
| `--brand-500`      | `#5B86E5`  | Focus rings, subtle accents                              |
| `--brand-50`       | `#EEF3FE`  | Accent tints (info-banner background, selection)         |
| `--brand-100`      | `#DCE6FC`  | Accent borders on tinted surfaces                        |

> Replaces today's `rgba(70, 117, 199, 1)` / `#4688eb` / `#4675c7`. Slightly less saturated, more confident.

### 2.2 Neutrals (warm gray, single ramp)

| Token         | Hex        | Usage                                                      |
| ------------- | ---------- | ---------------------------------------------------------- |
| `--ink-950`   | `#0B0F19`  | Display headings (`h1`, hero), max-contrast text           |
| `--ink-900`   | `#111827`  | Body headings (`h2`–`h4`)                                  |
| `--ink-700`   | `#374151`  | Default body text                                          |
| `--ink-500`   | `#6B7280`  | Secondary text, captions, helper labels                    |
| `--ink-400`   | `#9CA3AF`  | Placeholder text, disabled labels                          |
| `--ink-300`   | `#D1D5DB`  | Strong borders (active inputs, dividers above-the-fold)    |
| `--ink-200`   | `#E5E7EB`  | Default borders (cards, inputs at rest)                    |
| `--ink-100`   | `#F1F3F7`  | Hover surfaces, subtle fills                               |
| `--ink-50`    | `#F7F8FA`  | Page background base                                       |
| `--white`     | `#FFFFFF`  | Card and elevated-surface fills                            |

> Replaces the mixed `rgba(0,0,0,0.774)`, `rgb(52, 59, 70)`, `rgb(48, 48, 48)`, `#393939`, `#434343` text colors with a single ramp. **Action item:** find/replace these in `customization.css` and inline styles.

### 2.3 Semantic

| Token         | Hex        | Usage                                          |
| ------------- | ---------- | ---------------------------------------------- |
| `--success`   | `#10B981`  | Success toasts, copy-confirmed pill            |
| `--warning`   | `#F59E0B`  | Warning alerts (`alert-warning`)               |
| `--danger`    | `#EF4444`  | Form validation                                |
| `--info`      | `#3B6FE0`  | Info banner accent (same as `--brand-600`)     |

### 2.4 Surfaces & Backgrounds

- **Page background:** flat `--ink-50` (`#F7F8FA`). Removes the current pinkish-warm gradient.
- **Grid pattern:** retain `header_grid2.png` but reduce opacity to **35%** (currently effectively 100%). Apply as:
  ```css
  background-color: var(--ink-50);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(91,134,229,0.08), transparent 60%),
    url("../assets/header_grid2.png");
  background-blend-mode: normal, multiply;
  background-repeat: no-repeat, repeat;
  ```
  The radial gradient adds a soft, brand-tinted halo behind the hero — replaces the current flat warm-gray feel.
- **Card surface:** pure `--white`, never tinted.
- **Code/terminal surface:** `#0E1116` (near-black, slight blue undertone) — replaces `rgba(24, 24, 24, 0.774)`.

---

## 3. Typography

### 3.1 Font Stack

```css
--font-sans: "Uncut Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", ui-monospace, Menlo, Consolas, monospace;
```

Keep Uncut Sans as the primary; add Inter as a closer fallback than system-ui for consistency across OSes. Adopt **JetBrains Mono** for the SSH command, terminal preview, and any inline code — replaces default monospace.

### 3.2 Type Scale (rem)

| Role                    | Size       | Weight | Line-height | Tracking    |
| ----------------------- | ---------- | ------ | ----------- | ----------- |
| Display (hero `h1`)     | `clamp(2.5rem, 4.5vw, 3.75rem)` | 700 | 1.05 | `-0.025em`  |
| H2 (section title)      | `2rem`     | 700    | 1.15        | `-0.02em`   |
| H3                      | `1.5rem`   | 600    | 1.25        | `-0.015em`  |
| H4                      | `1.125rem` | 600    | 1.4         | `-0.01em`   |
| Lead (hero sub)         | `1.25rem`  | 500    | 1.5         | `-0.005em`  |
| Body                    | `1rem`     | 400    | 1.6         | `0`         |
| Body-sm (helper, meta)  | `0.875rem` | 400    | 1.5         | `0`         |
| Caption                 | `0.75rem`  | 500    | 1.4         | `0.01em`    |
| Mono / code             | `0.9375rem`| 500    | 1.5         | `0`         |

> Today the hero uses Bootstrap's `display-5` (~3rem) bold without tracking. Bump to the clamped size with `-0.025em` tracking — instantly modernizes the headline.

### 3.3 Heading Rules

- Hero headline color: `--ink-950`, weight 700, tracking `-0.025em`.
- Subhead (e.g., "Without downloading any binary!"): `--ink-900`, weight 500, **not** the same size as the headline. Use the H3 size to create clearer hierarchy.
- Body text (current `#lead2`): `--ink-500` (lighter than today's `rgba(52,59,70,0.748)`).
- Never use uppercase for prose. Caption-level eyebrow labels (e.g., "FEATURES") may use uppercase with `0.08em` tracking.

---

## 4. Spacing & Layout

### 4.1 8-pt Grid

Use multiples of `4px` only. Standardize as CSS variables:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-8: 48px;
--space-10: 64px;
--space-12: 96px;
--space-16: 128px;
```

### 4.2 Container

- Max width: **1200px** (currently Bootstrap's default `1140px`). Slightly wider feels more modern at large breakpoints.
- Side gutters: `24px` mobile, `48px` desktop.
- Hero vertical padding: `96px` top / `64px` bottom desktop (currently feels tight).

### 4.3 Hero Two-Column Layout (preserved)

- Left column: copy + email form. Max-width `520px` for the text block.
- Right column: tunnel-config card.
- Gap between columns: `64px` desktop.
- Vertical alignment: top-aligned (today's `mt-5` on right column is an arbitrary offset — replace with a clean grid).

### 4.4 Section Rhythm

Between major sections: `96px` vertical space. Within a section: `48px` between heading and content, `32px` between content rows.

---

## 5. Border Radius

| Token              | Value    | Usage                                                      |
| ------------------ | -------- | ---------------------------------------------------------- |
| `--radius-sm`      | `6px`    | Small chips, inline tags                                   |
| `--radius-md`      | `10px`   | Buttons, inputs, select                                    |
| `--radius-lg`      | `14px`   | Cards (today's `1em` → `14px`), nested groups inside cards |
| `--radius-xl`      | `20px`   | Hero CTA card outer shell, terminal window                 |
| `--radius-pill`    | `999px`  | Toggle slider, badge pills                                 |

Buttons today use Bootstrap's `0.375rem`. Bump to `10px` for a softer, more current feel.

---

## 6. Shadows & Elevation

Replace today's mixed shadows (`2px 2px 15px rgba(255,234,234,0.84)`, `0 1px 5px -2px black`, `0 0 4px 0px #a3599b8c`) with a single, neutral ramp:

```css
--shadow-xs:  0 1px 2px 0 rgba(15, 23, 42, 0.04);
--shadow-sm:  0 1px 3px 0 rgba(15, 23, 42, 0.06),  0 1px 2px -1px rgba(15, 23, 42, 0.04);
--shadow-md:  0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
--shadow-lg:  0 12px 32px -8px rgba(15, 23, 42, 0.12), 0 4px 8px -4px rgba(15, 23, 42, 0.06);
--shadow-focus: 0 0 0 3px rgba(91, 134, 229, 0.25);
```

### Elevation rules

- **Navbar:** `--shadow-xs` only. Today's pinkish shadow goes.
- **Cards at rest (tunnel-config, feature cards):** `--shadow-sm` + 1px border `--ink-200`. Border does the work of "edge definition," shadow does the work of "lift."
- **Cards on hover:** `--shadow-md`. Subtle.
- **Modal / dropdown:** `--shadow-lg`.
- **Focus state:** `--shadow-focus` ring (replaces Bootstrap's blue default).

---

## 7. Components

### 7.1 Navbar

- Height: `72px` (currently feels denser due to padding inconsistency).
- Background: `rgba(255, 255, 255, 0.85)` + `backdrop-filter: saturate(180%) blur(12px);` (modern glass effect on scroll). On scroll add `--shadow-xs` and `border-bottom: 1px solid var(--ink-200)`.
- Logo: keep size, slight reduction (height `36px`) so it's not the heaviest element.
- Nav links: `15px`, weight `500`, color `--ink-700`, hover background `--ink-100` with radius `8px` and `padding: 6px 12px`.
- Active link: weight `600`, color `--ink-950`, **no background** (subtler than today's hover-on-active).
- Dashboard button: outlined style, border `1px solid --ink-300`, radius `--radius-md`, padding `8px 16px`, color `--ink-900`. Hover: border `--ink-900`, no fill change.

### 7.2 Info Banner (Node.js SDK / Python SDK)

Today: full-width pale blue `alert alert-info` strip below navbar.

New treatment:
- Pill-shaped, centered, max-width `fit-content`, **inside** the hero container — not full bleed.
- Background: `--brand-50`, border `1px solid --brand-100`, radius `--radius-pill`, padding `8px 16px`.
- Text: `--ink-700`, `14px`, weight `500`. Bold product names use `--ink-900`.
- "Learn more." link: `--brand-700`, with an inline arrow icon (`→`) instead of trailing emoji.
- Drop the 🤯 emoji — it dates the design.

### 7.3 Hero Headline Block

- Headline: see §3.2 (clamped large display).
- Subhead ("Without downloading any binary!"): H3 size, `--ink-900`, weight 500. Gap above: `12px`. Today the gap is too tight and weight too heavy.
- Description (`#lead2`): body size, `--ink-500`, max-width `460px`, line-height `1.6`. Gap above: `24px`.

### 7.4 Email Trial Form

- Group: `--white` background, single border `1px solid --ink-200`, radius `--radius-md`, overflow hidden — so input + button share one rounded shell. Today they have separate radii and look bolted together.
- Input: no inner border, padding `14px 16px`, `15px` text, placeholder `--ink-400`.
- Button: `--brand-600` background, white text, weight 600, padding `14px 20px`, no shadow (the card-shadow on the group is enough).
- Hover button: `--brand-700`, transition `120ms ease-out`.
- Focus state on the **group** (when input is focused): `--shadow-focus` on the wrapper instead of the input alone.
- Helper text above ("Free persistent URL for 7 days..."): `13px`, `--ink-500`, weight `500`. Today's `<span class="highlight">` background-tint should be removed — the helper line is calmer without it.
- "Or just try it for free →" link: `14px`, `--ink-500`, weight `500`, right-aligned under the form. Hover: `--brand-700`. Today's `#395d9bae` is muddy — clean it up.

### 7.5 Tunnel-Config Card (`#bigcodecolumn`)

This is the centerpiece. Today it looks fine but feels heavy due to inner border and mixed radii.

- Outer shell: `--white`, border `1px solid --ink-200`, radius `--radius-xl` (20px), shadow `--shadow-md`, padding `28px`.
- Inner heading ("Configure your free tunnel"): H4 size, `--ink-900`, weight 600, margin-bottom `20px`.
- Form labels: `13px`, weight 600, `--ink-900`, margin-bottom `8px`.
- Input group (protocol select + local address): single-bordered, radius `--radius-md`, height `44px`, inner divider `1px solid --ink-200` between select and input — not two separately-bordered controls.
- Toggles (Web Debugger, QR Code): see §7.7 below.
- "Paste this command to start tunnel" inner panel (`#finalcommand`): on the card today there's an inner top-border separator. Replace with an actual nested surface:
  - Background `--ink-50`, radius `--radius-lg`, padding `20px`, margin-top `24px`.
  - Inside, the SSH textarea sits on `--white` with `1px solid --ink-200`, radius `--radius-md`, mono font, `--ink-900` text, `14px`, line-height `1.6`.
  - Copy button: square `40px`, `--ink-900` background, white icon, radius `--radius-md`, sits inside the textarea's group on the right. On copy-success, flash to `--success` for 600ms.
- Action row at bottom (Docs / Advanced Settings): both buttons in `--ink-100` fill with no border, `--ink-900` text, radius `--radius-md`, padding `10px 14px`, icons `--ink-500`. Hover: `--ink-200` fill.

### 7.6 Buttons (global)

| Variant       | Background     | Text          | Border                | Hover bg       |
| ------------- | -------------- | ------------- | --------------------- | -------------- |
| Primary       | `--brand-600`  | `#fff`        | none                  | `--brand-700`  |
| Secondary     | `--ink-900`    | `#fff`        | none                  | `--ink-950`    |
| Outline       | `transparent`  | `--ink-900`   | `1px solid --ink-300` | `--ink-100`    |
| Ghost         | `transparent`  | `--ink-700`   | none                  | `--ink-100`    |
| Link          | none           | `--brand-600` | none                  | `--brand-700` (text) |

- All buttons: padding `10px 18px`, font weight `600`, font-size `14px`, radius `--radius-md`, transition `background-color 120ms ease-out, box-shadow 120ms ease-out, transform 120ms ease-out`.
- Active (mousedown) state: `transform: translateY(1px)`.
- Disabled: 50% opacity, `cursor: not-allowed`, no hover effect.
- **Remove** today's `box-shadow: 0 0 4px 0px #a3599b8c` and `box-shadow: 0 0 3px 0 #b3e0ff` from buttons — they look dated.

### 7.7 Toggle Switch

Today's switch (`.switch` / `.slider`) is fine in shape; tweak only colors:
- Off track: `--ink-200`.
- On track: `--brand-600` (currently `#535353` — flat gray reads as disabled).
- Thumb: `--white`, shadow `--shadow-xs`.
- Size: keep 40×20px.
- Focus: `--shadow-focus` ring on the track.
- Transition: keep `0.4s` but ease as `cubic-bezier(0.4, 0, 0.2, 1)`.

### 7.8 Inputs & Selects

- Height: `44px` desktop, `48px` mobile.
- Border: `1px solid --ink-200` at rest.
- Background: `--white`.
- Text: `15px`, `--ink-900`. Placeholder: `--ink-400`.
- Padding: `0 14px`.
- Focus: border `--brand-500`, ring `--shadow-focus`. Remove Bootstrap's default blue ring.
- Invalid: border `--danger`, helper text `--danger` `13px`. Today's `invalid-tooltip` floating bubble can stay but restyled with a flat solid `--danger` background and white text.

### 7.9 Terminal Preview (bottom of hero)

- Window chrome: `--white` titlebar `36px` tall, traffic-light dots in actual macOS colors (`#FF5F57`, `#FEBC2E`, `#28C840`), title text `--ink-500` `13px` weight 500.
- Body: background `#0E1116`, text `#E5E7EB`, mono font, `14px`, line-height `1.7`, padding `20px 24px`.
- Outer radius `--radius-xl`, shadow `--shadow-lg`, border `1px solid --ink-200`.
- The current screenshot shows the terminal touching the bottom of the viewport — give it `48px` bottom margin instead.

### 7.10 Feature Cards (below the fold)

- White card, `--shadow-sm`, border `1px solid --ink-200`, radius `--radius-lg`, padding `28px`.
- Hover: `--shadow-md`, `transform: translateY(-2px)`, transition `180ms ease-out`.
- Title: H4 size, `--ink-900`.
- Body: `--ink-500`, `15px`.
- Drop the `featurecard b { font-weight: 600 }` override — let semantic `<strong>` take the body color, just bumped weight.

### 7.11 Featureimage

Today: `box-shadow: 0px 0px 10px -3px #000000` (too dark, too tight).
Replace with: `box-shadow: var(--shadow-md)`, radius `--radius-lg` (matches card system), hover scale stays at `1.02` but uses `transition: transform 240ms ease-out` instead of `0.6s` (less laggy).

### 7.12 Footer

Out of scope for this screenshot, but apply the same color tokens and radii so it doesn't feel like a different site.

---

## 8. Iconography

- Continue using Bootstrap Icons.
- Default icon color: `--ink-500`. Active/CTA contexts: `--ink-900`.
- Icon size: `16px` inline with `14px` text, `20px` inline with `16px+` text.
- The Discord and "P" (Playground?) icons in the navbar should match the nav-link color and weight — currently they look like dropped-in PNGs with too much black.

---

## 9. Motion

```css
--ease-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.6, 1);

--duration-fast: 120ms;
--duration-base: 180ms;
--duration-slow: 240ms;
```

### Rules

- **Hover transitions** (color, background, border): `--duration-fast --ease-out`.
- **Movement transitions** (transform, translate, scale): `--duration-base --ease-out`.
- **Shadow / elevation changes**: `--duration-slow --ease-out`.
- **Toggle / switch**: `--duration-slow cubic-bezier(0.4, 0, 0.2, 1)` (already close).
- **Marquee** (existing `scrolling` keyframes): keep `40s linear infinite`, but soften the gradient mask edges using `--ink-50` instead of pure `#fff` so it blends into the new page background.
- **Entrance animation** for hero (optional, recommended): fade + 8px translate-up on `h1`, sub, lead, form — stagger `0ms / 60ms / 120ms / 180ms`, duration `400ms ease-out`. **Respect `prefers-reduced-motion: reduce` — disable entirely.**

### Forbidden

- No bouncy springs.
- No background-color animations on hover for primary CTAs (the color change is the affordance — no need to animate gradient sweeps).
- No parallax.

---

## 10. Focus & Accessibility

- All interactive elements: visible focus ring `--shadow-focus` on `:focus-visible`. Never remove without replacing.
- Text color contrast: body text (`--ink-700` on `--ink-50` background) clears WCAG AA at body sizes. Secondary text (`--ink-500`) only on white surfaces.
- Minimum touch target: `44×44px`. Today's nav links may be smaller — bump padding.
- Form labels: always rendered (no placeholder-only labels). `aria-label` retained where used.
- Keep `prefers-reduced-motion: reduce` honored for all transitions and the marquee.

---

## 11. Responsive Breakpoints

```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

### Hero behavior

- `<lg`: stack columns, tunnel-config card moves below copy. Card max-width `560px`, centered. Reduce hero top padding to `48px`.
- `<sm`: headline drops to `2.25rem`. Email form button moves under input (full-width) rather than inline.

---

## 12. CSS Implementation Notes

### 12.1 Variable scope

Define all tokens on `:root` in `customization.css`. Existing class-level styles can then be migrated incrementally:

```css
:root {
  --brand-600: #3B6FE0;
  --ink-50:    #F7F8FA;
  /* ...all tokens above... */
  --radius-md: 10px;
  --shadow-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04);
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 120ms;
}
```

### 12.2 Targeted overrides

These existing rules in `customization.css` need updates (line numbers from current file):

| Line(s) | Current                                                | Replace with                                                |
| ------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| 53–58   | `body` background-image gradient + grid                | New flat `--ink-50` + radial halo + grid at 35% opacity     |
| 66–74   | `.custom-button` / `.btn-pinggy-blue`                  | Use `--brand-600` / `--brand-700`                           |
| 124     | `#finalcommand` `border-radius: 1em` + shadow          | Replace with nested surface treatment (§7.5)                |
| 156–168 | `.bg-subtlegray`, `.border-subtlegray`                 | Map to `--ink-50` / `--ink-200`                             |
| 196–204 | `.featureimage` shadow & transition                    | Use `--shadow-md`, `--radius-lg`, `240ms` transition        |
| 359–416 | `.navbar` rules                                        | Apply glass treatment, `--shadow-xs`, new link colors       |
| 488–550 | Toggle switch                                          | On-state color → `--brand-600`                              |

### 12.3 Files to touch

- `assets/css/customization.css` — all token definitions and rule replacements.
- `content/_index.md` — strip inline `style="..."` on the email button (lines 58–64 today) and on the helper text; let CSS classes handle it.
- `layouts/partials/navbar.html` — no markup change required; the redesign is CSS-only here.
- `assets/css/syntax.css` — re-skin to match the new code surface (`#0E1116` background, `#E5E7EB` text).

### 12.4 What **not** to change

- HTML structure of the hero.
- Alpine.js `x-data` / `x-model` bindings on the tunnel-config form.
- Bootstrap grid classes (`col-lg-5`, `container`, `row`) — the new spacing is added via custom CSS on top.
- Existing IDs (`#bigcodecolumn`, `#portcommand`, `#finalcommand`, `#trynow`, `#lead2`, `#trialemail`) — JS depends on them.

---

## 13. Before / After Quick Reference

| Aspect         | Before                                              | After                                                            |
| -------------- | --------------------------------------------------- | ---------------------------------------------------------------- |
| Page bg        | Warm pink-tinted gradient + 100% grid               | Cool `--ink-50` + brand-tinted halo + 35% grid                   |
| Hero headline  | `display-5` (~3rem), default tracking               | `clamp(2.5rem, 4.5vw, 3.75rem)`, `-0.025em` tracking             |
| Card radius    | `1em` (16px)                                        | `20px` (`--radius-xl`)                                           |
| Card shadow    | None / inconsistent                                 | `--shadow-md` + `--ink-200` border                               |
| Primary CTA    | `rgba(70,117,199,1)` with pinkish glow              | `--brand-600`, no glow, clean hover                              |
| Toggle on      | `#535353` (gray, reads as disabled)                 | `--brand-600`                                                    |
| Text colors    | 5+ different grays                                  | One `--ink-*` ramp                                               |
| Button radius  | Bootstrap default 6px                               | 10px                                                             |
| Navbar shadow  | `rgba(255,234,234,0.84)` (pinkish)                  | Neutral `--shadow-xs`, glass-blur on scroll                      |
| Info banner    | Full-bleed blue strip + 🤯                          | Centered pill, no emoji, brand-tinted                            |
| Terminal       | Plain dark block                                    | Real window chrome, `--shadow-lg`, mono font                     |
| Mono font      | Browser default                                     | JetBrains Mono                                                   |
| Focus rings    | Bootstrap blue                                      | `--shadow-focus` brand ring                                      |

---

## 14. Implementation Order (suggested)

1. **Tokens.** Add `:root` variables to top of `customization.css`. No visual change yet.
2. **Typography.** Update font stack, hero headline size/tracking, body text colors via tokens.
3. **Color sweep.** Replace hard-coded colors in `customization.css` with tokens.
4. **Buttons & inputs.** Refactor `.custom-button`, `.btn-pinggy-blue`, input styles.
5. **Cards.** Update `#bigcodecolumn`, `.featurecard`, `#finalcommand` to new radius/shadow system.
6. **Navbar.** Glass background + shadow + link styling.
7. **Background.** Switch body background to new halo + flat base + reduced-opacity grid.
8. **Toggles.** Update on-state color.
9. **Terminal.** Restyle code/preview surfaces.
10. **Motion.** Add hover transitions and (optional) hero entrance animation.

Each step is independently shippable — the page should look progressively better, never broken, between steps.
