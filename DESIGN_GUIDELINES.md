# Pinggy - Design Language

The visual system for every Pinggy surface outside the blog. The site reads like a typeset engineering spec on warm paper: one ruled frame, a monospace voice for structure, sans for prose, one blue accent, and almost no decoration. Use this document when designing or styling any UI in the product. Tokens live in `assets/css/customization.css` under `:root`.

The blog post and list templates keep their own system (see CLAUDE.md, "Blog post exception"). A legacy token block on `.bp, .bp-nav` restores the older neutrals, radii and mono font inside them, so nothing here reaches blog cards or posts. The shared footer is the one blog surface that follows this document.

---

## 1. Principles

1. **Ruled, not floating.** Content sits in cells of one bordered frame, split by 1px rules. Structure comes from lines and alignment, not from cards, shadows or gaps.
2. **Artifacts float, chrome doesn't.** Page chrome (buttons, inputs, cards, tags, tabs) is square and flat. Only product artifacts (terminal mocks, screenshots, video) get rounded corners, and only the stage terminal gets a shadow. That contrast tells the reader "this is the product".
3. **Mono for structure, sans for reading.** IBM Plex Mono carries headings, labels, navigation, buttons and numbers. Uncut Sans carries paragraphs.
4. **Calm hierarchy.** One element looks most important per region. Establish hierarchy with weight and size, not color. Reserve color for action.
5. **One accent, used sparingly.** Blue (`--brand-600`) is for the primary action, links and focus. Not decoration.
6. **Motion is invisible until needed.** Transitions soften state changes. Product mocks may rise in once. The only loops are the hero grid's pulses and the live tunnel connector, both quiet.

---

## 2. Color

### 2.1 Brand & accent

| Token         | Hex       | Usage                                                     |
| ------------- | --------- | --------------------------------------------------------- |
| `--brand-600` | `#3B6FE0` | Primary buttons, links, active rules, pixel field         |
| `--brand-700` | `#2F58B8` | Primary button hover, link hover, chip text               |
| `--brand-500` | `#5B86E5` | Focus rings, highlight outline                            |
| `--brand-50`  | `#EEF3FE` | Tints: `mark`, chips, selection, winning compare cells    |
| `--brand-100` | `#DCE6FC` | Borders on tinted surfaces                                |

White on `--brand-600` is about 4.6:1 (AA).

### 2.2 Neutrals (one warm "paper and ink" ramp)

| Token       | Hex       | Usage                                                     |
| ----------- | --------- | --------------------------------------------------------- |
| `--ink-950` | `#151515` | Display text, secondary (ink) buttons, command panel      |
| `--ink-900` | `#1F1F1D` | Headings, strong text                                     |
| `--ink-800` | `#2B2B29` | Ink button hover                                          |
| `--ink-700` | `#3E3D3A` | Prose                                                     |
| `--ink-500` | `#6D6C67` | Muted text, eyebrows, meta (about 4.8:1 on `--ink-50`)     |
| `--ink-400` | `#9A9893` | Placeholders, disabled labels                             |
| `--ink-300` | `#C8C7C1` | Strong rules, diagram connectors                          |
| `--ink-200` | `#DCDCD7` | Frame rules, default borders                              |
| `--ink-100` | `#EDEDEA` | Stage band, hover fills, inline code background           |
| `--ink-50`  | `#F5F5F3` | Page background                                           |
| `--paper`   | `#FAFAF8` | Ghost buttons, cell hover, table label column             |
| `--white`   | `#FFFFFF` | Spec cards, inputs, tags                                  |

Bootstrap's `.text-muted` / `.text-secondary` are remapped to `--ink-500` outside the blog.

### 2.3 Semantic

| Token       | Hex       | Usage                                          |
| ----------- | --------- | ---------------------------------------------- |
| `--success` | `#10B981` | Success states, "Yes" chips                    |
| `--warning` | `#F59E0B` | Warnings, "Limited" chips                      |
| `--danger`  | `#EF4444` | Form validation, "No" chips                    |

Status chips derive their tint, border and text from these with `color-mix()` (see §7.15). Don't add new status hexes.

### 2.4 Surfaces

- **Page:** flat `--ink-50`. No page-wide grid, wash or halo (the full-viewport grid and wash are blog-only, in `blog.css`). The homepage hero has its own grid, scoped to that cell (§7.5).
- **Cells:** transparent on the page; hover may fill with `--paper`.
- **Spec cards, inputs, tags:** `--white`.
- **Product mocks** (terminal windows, dark panels): the `--mock-*` tokens.

| Token          | Hex       | Usage                         |
| -------------- | --------- | ----------------------------- |
| `--mock-bg`    | `#161616` | Terminal body                 |
| `--mock-bar`   | `#121212` | Terminal titlebar             |
| `--mock-panel` | `#1D1D1C` | Inner panels                  |
| `--mock-line`  | `#2C2C2A` | Rules inside mocks            |
| `--mock-fg`    | `#E9E7E2` | Mock text                     |
| `--mock-dim`   | `#8A8883` | Mock secondary text           |

Hue inside a mock (prompt green, URL blue, status colors) is fine; it is product, not chrome.

---

## 3. Typography

### 3.1 Font stack

```
--font-sans:    "Uncut Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-display: "IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace;
--font-mono:    var(--font-display);
```

IBM Plex Mono is self-hosted (400, 500, 600; latin + latin-ext) from `static/fonts/`, with the 400 and 600 latin files preloaded in `layouts/partials/header.html`. See `static/fonts/README.md`.

**Plex Mono:** h1 to h6, `.display-*`, `.btn`, `.nav-link`, `.dropdown-item`, `.badge`, `.form-label`, `th`, `.accordion-button`, `.eyebrow`, `.modal-title`, prices, code. **Uncut Sans:** paragraphs, list items, table cells, footer links, the docs sidebar.

### 3.2 Type scale

Mono runs wide, so sizes sit a step below a sans scale.

| Role                     | Token / size                          | Weight | Line-height | Tracking                 |
| ------------------------ | ------------------------------------- | ------ | ----------- | ------------------------ |
| Display (h1)             | `--text-display` `clamp(2.25rem, 4.3vw, 3.5rem)` | 600 | 1.1 | `--track-display` `-0.035em` |
| H2 (section)             | `--text-h2` `clamp(1.625rem, 2.6vw, 2.125rem)`   | 600 | 1.15 | `--track-h2` `-0.03em` |
| H3 (pillar, sub-block)   | `--text-h3` `1.3125rem`               | 600    | 1.25        | `--track-h3` `-0.02em`   |
| CTA headline             | `clamp(1.75rem, 3.4vw, 2.75rem)`      | 600    | 1.15        | `--track-display`        |
| Lead / prose             | `1.0625rem` sans                      | 400    | 1.6         | `0`                      |
| Body                     | `1rem` sans                           | 400    | 1.6         | `0`                      |
| UI (buttons, nav, labels)| `--text-ui` `0.8125rem` to `0.875rem` | 500    | 1.4         | `0`                      |
| Eyebrow                  | `--text-eyebrow` `0.75rem`, uppercase | 400    | 1.6         | `--track-eyebrow` `0.08em` |

### 3.3 Heading rules

- Headings are left-aligned. Centered text is for the closing CTA and for a section head that carries a control governing everything below it (the pricing head, `.cell__head--center`).
- A second line can be muted (`--ink-500`) to pair a statement with its qualifier ("Share localhost in one command. / No signup. No download.").
- Hero subhead: H3-ish mono line in `--ink-500`.
- Uppercase only on eyebrows, spec-card heads and table heads, always with `--track-eyebrow`. Never on prose.

---

## 4. Spacing & layout

### 4.1 4px grid

```
--space-1:  4px     --space-6:  32px
--space-2:  8px     --space-8:  48px
--space-3:  12px    --space-10: 64px
--space-4:  16px    --space-12: 96px
--space-5:  24px    --space-16: 128px
```

### 4.2 The frame

- `--frame-max: 1296px` (a 1200px measure plus 2 x 48px cell padding).
- `--nav-h: 73px`: the fixed navbar's height; the frame starts below it.
- Homepage: `main.frame` has a 1px `--ink-200` border on left, right and top. Every section is a `.cell` with a 1px bottom rule; the footer's top edge closes it.
- Single pages (`layouts/_default/single.html`): `main.page-frame`, side rules only, running into the footer's top rule.
- Navbar and footer inner widths align with the frame.

### 4.3 Cells

- `--cell-pad-y`: `96px`, `64px` below 1024px.
- `--cell-pad-x`: `48px`, `24px` below 640px.
- `.cell--flush` drops the padding for cells whose children carry their own rules (pillars, pricing grid).
- `.cell__head` (max `44rem`) holds eyebrow + h2 (+ prose). `.cell__head--split` puts the h2 left and the prose right, bottom-aligned. `.cell__head--center` centers the whole head (pricing only, see §3.3).

### 4.4 Grids inside cells

- **Hero:** `1.05fr / 1fr`, gap `48px`, `align-items: center` (the copy centers on the configurator), padding `0 48px 64px`, with the sides widened to `96px` (two grid cells) from 1280px up so the two columns sit as one compact block, about 1100px wide, instead of spreading to the frame rules. The first row (min `48px`) holds the announcement tag right under the navbar; the columns start one row gap below it.
- **Split:** `1fr / 1.15fr`, gap `64px`, vertically centered; `.split--flip` mirrors it.
- **FAQ:** `1fr / 2fr`, gap `48px`.
- **Pillars and pricing:** equal columns with no gap, separated by rules.
- Below 1024px every grid stacks to one column (pillars go to two, then one below 640px).

---

## 5. Border radius

| Token               | Value   | Usage                                                     |
| ------------------- | ------- | --------------------------------------------------------- |
| `--radius-sm` to `--radius-xl` | `0` | All chrome. Kept defined so older consumers square with them |
| `--radius-artifact` | `10px`  | Terminal mocks, screenshots, video                         |
| `--radius-pill`     | `999px` | Toggle switch track only                                   |

Bootstrap components are squared outside the blog (`.btn`, `.card`, `.form-control`, `.form-select`, `.input-group > *`, `.alert`, `.badge`, `.dropdown-menu`, `.modal-content`, `.nav-tabs .nav-link`, `.accordion-*`, `.list-group*`, `.page-link`, `.toast`, `.popover`, `.tooltip-inner`).

---

## 6. Shadows & elevation

```
--shadow-xs:       0 1px 2px 0 rgba(21, 21, 21, 0.04);
--shadow-sm:       0 1px 3px 0 rgba(21, 21, 21, 0.06), 0 1px 2px -1px rgba(21, 21, 21, 0.04);
--shadow-md:       0 4px 12px -2px rgba(21, 21, 21, 0.08), 0 2px 4px -2px rgba(21, 21, 21, 0.04);
--shadow-lg:       0 12px 32px -8px rgba(21, 21, 21, 0.14), 0 4px 8px -4px rgba(21, 21, 21, 0.06);
--shadow-artifact: 0 30px 80px -24px rgba(21, 21, 21, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.06);
--shadow-focus:    0 0 0 3px rgba(91, 134, 229, 0.3);
```

### Elevation rules

- **Chrome:** no shadow. Edges come from 1px rules. Bootstrap's `.shadow*` utilities and `.bg-gradient` are neutralized outside the blog.
- **Navbar:** no shadow; a bottom rule appears on scroll.
- **Overlays** (dropdowns, modals): `--shadow-lg`.
- **The stage terminal:** `--shadow-artifact`. It is the only floating thing on the page.
- **Focus:** `--shadow-focus` on `:focus-visible`.
- No glows, no colored shadows, no hover lift.

---

## 7. Components

### 7.1 Navbar

- Fixed, height `--nav-h`. Background `rgba(245, 245, 243, 0.9)` with `backdrop-filter: blur`. A 1px `--ink-200` bottom rule (transparent at the top of the homepage, shown once `body.is-scrolled`).
- Inner width aligns with the frame. Links sit left, next to the logo.
- Links: Plex 14px, `--ink-950`, hover underline with a 4px offset. No pill background.
- Dropdowns: square, 1px `--ink-200`, `--shadow-lg`.
- "Dashboard" (`#LoginBtn`): square ink button with a `↗` glyph.

### 7.2 Eyebrow

`.eyebrow`: Plex 12px uppercase, `--track-eyebrow`, `--ink-500`. Sits above a section h2 ("SHARE", "PRICING"). A `mark` inside it gets a `--brand-50` tint.

### 7.3 Announcement tag

`.tag`: square, `--white`, 1px `--ink-200`, Plex `--text-ui`, padding `10px 18px`; border turns `--ink-950` on hover. A `.tag__new` label inside: `--brand-600` fill, white, 11px uppercase. Used once, in its own row at the top of the hero, centered across both columns. In the hero it is slimmer (padding `7px 16px`, about 36px tall) and sits inside the first 48px hero-grid row, a few px under the navbar, the way the old full-width notice did.

### 7.4 Hero

- Top row: the centered tag (§7.3).
- Left: h1 (max about 14ch), muted mono subhead, `#lead2` prose (sans 17px, `--ink-700`), trial block, `#trynow` ruled link.
- Right: the configurator spec card (§7.8).
- Background: the hero grid (§7.5).
- Entrance: `heroFadeUp` (fade + 8px rise) on tag, h1, sub, lead, trial and configurator, staggered. Off under reduced motion.

### 7.5 Hero grid

Graph paper behind the hero, the one place outside the blog with a grid.

- `<canvas id="grid-canvas" class="hero__grid" data-scope="parent">` inside the hero cell, drawn by `assets/js/cursorglow.js` in its parent-scoped mode (the blog uses the same script full-viewport). Settings come from the canvas's `data-*` attributes.
- 48px cells, matching `--cell-pad-x` and the hero's first row, so the copy's left edge sits on a grid line and the tag sits inside the first row of cells. The first row and column are skipped so no line doubles the frame border.
- Lines: ink at 7% alpha (lighter than the frame rules). Pulses: `--brand-500` comets with a 3px square head, at most 4 at a time. Cursor: a soft `--brand-500` tint on nearby lines (peak 0.5 alpha, 260px radius).
- A radial CSS mask keeps it strongest around the tag and dissolves it before the stage band. Content sits above it (`z-index: 1`); the configurator's white card hides it.
- Pulses are off under reduced motion; the canvas is hidden below 768px and the loop pauses while the hero is off screen.

### 7.6 Email / single-field form

- `.trial-group`: one square shell, `--white`, 1px `--ink-200`; focus moves to the shell (`--brand-500` border + `--shadow-focus`).
- Input borderless, padding `13px 16px`, `15px`.
- Button: primary blue, flush with the shell edge.
- Invalid email: a red strip in flow along the bottom of the shell (not a floating tooltip).
- Below 640px the button stacks under the input at full width.

### 7.7 Buttons

| Variant                           | Fill          | Text          | Border               | Hover                 |
| --------------------------------- | ------------- | ------------- | -------------------- | --------------------- |
| Primary `.btn-pinggy-blue`        | `--brand-600` | `#fff`        | 1px `--brand-600`    | `--brand-700`         |
| Secondary `.btn-pinggy`           | `--ink-950`   | `#fff`        | none                 | `--ink-800`           |
| Ghost `.btn-outline-pinggy`       | `--paper`     | `--ink-950`   | 1px `--ink-200`      | border `--ink-950`    |
| Ruled link `.link-rule`           | none          | `--ink-950`   | 1px bottom rule      | `--brand-700` text    |

- Square, Plex `--text-ui` weight 500, padding `11px 22px`; `.btn-lg` `15px 24px`.
- Active: `translateY(1px)`. Disabled: 50% opacity.
- `.link-rule` ("Learn more →") is the quiet secondary action next to a button or under a list. `.pinggy-link` shares its style.
- No glows, no gradient sweeps, no hover lift.

### 7.8 Spec card

The frame for a form, screenshot, video or diagram.

- `.spec-card`: `--white`, 1px `--ink-200`, square.
- `.spec-card__head`: Plex 12px uppercase title on the left, `.spec-card__meta` (lowercase, `--ink-500`, ellipsis) on the right, padding `12px 16px`, bottom rule.
- `.spec-card__body`: padding `16px`. Media inside gets `--radius-artifact` minus 4px.
- The hero configurator (`#bigcodecolumn`) is a spec card with a title-only head (no meta): form rows on rules, pill toggles with mono labels, the command panel (§7.9), then Docs / Advanced Settings as two ghost buttons. The `#trynow` flash is a 2px `--brand-500` outline, not a glow.

### 7.9 Command panel

`.cmd`: `--ink-950` fill, the command in Plex 14px/500 `--paper`, a 48px copy button joined on the right behind a faint rule. Focus ring on the whole panel. Used in the hero configurator (a growing textarea) and the closing CTA (a readonly input sized for the full command).

### 7.10 Split

- `.split`: text column (eyebrow, h2, prose or `.featurelist`, actions) beside a spec card. `.split__sub` blocks stack inside the text column with a rule between them.
- Homepage feature splits zig-zag: text then media, `.split--flip` for media then text, alternating down the page.
- Spec-card heads name the content in words ("Video: How to share a local app", "Pinggy terminal UI"), never a file name.
- **Video card:** the poster carries a "Watch the demo" play button: primary blue fill (`--brand-600`, hover `--brand-700`), a white triangle, Plex `--text-ui`/500. It must read on a dark poster, so never an ink or ghost button there. Hidden once the video plays.
- **Screenshot carousel** (`.tui-card`, terminal UI): one spec card holding a Bootstrap carousel (`#carouselTUI`, 4s interval). Prev/next are 28px square ghost buttons (`.tui-card__btn`) in the card head; each slide has a Plex 12px caption (`.tui-card__caption`) with a `01`/`02` number in `--ink-950`. Screenshots get a 1px `--ink-950` border and `--radius-artifact` minus 4px.

### 7.11 Pillars

`.pillars`: a 3-column ruled grid (2 below 1024px, 1 below 640px), no gaps. Each `.pillar` has a number line (`01` with a 16px `--ink-500` icon, Plex 12px), an h3, an optional muted sub, and a list. Hover fills the cell with `--paper`.

### 7.12 Stage + pixel field

- `.stage`: an `--ink-100` band, padding `16px 16px 0`.
- `.stage__art`: the pixel field, a 64 x 26 PNG generated by `scripts/pixel-field/generate.py`, upscaled with `image-rendering: pixelated` to 560px tall. It is a backdrop, so keep it light and quiet: four broad sky bands in tints between `--brand-100` and `--brand-50` (one step deeper at the top) joined by a sparse ordered dither, a few white clouds where the terminal doesn't cover them, and two soft hill layers. No per-pixel noise, no small details. Regenerate it with the script; don't hand-edit the PNG.
- `.stage__mock`: the terminal mock (§7.13), absolutely placed over the field, `--radius-artifact`, `--shadow-artifact`, rising in once (`mockRise`).
- `.stage__tag`: a white square label pinned bottom-right ("Quickest way to …" typewriter). Hidden below 1024px.

### 7.13 Terminal mock

- Dark titlebar (`--mock-bar`, 40px) with traffic-light dots (`#FF5F57`, `#FEBC2E`, `#28C840`), a mono title (ellipsis) and a small outlined pill (hidden below 480px).
- Body `--mock-bg`, text `--mock-fg`, Plex 14px, line-height 1.75, padding `22px 24px`. Status colors in `.t-*` classes.

### 7.14 Network diagram

`{{< network-diagram >}}` (the card) and `{{< network-diagram part="tabs" >}}` (the tab list) on the homepage "How it works" split. They share the `netTabs` Alpine component (`assets/js/index.js`) on the section. Every tunnel type and every string in the drawing lives in `data/network_diagram.yaml`; `tab: true` puts a type in the homepage tabs.

- **Single type (docs):** `{{< network-diagram proto="tcp" port="8000" >}}` draws one tunnel type as a static figure in the prose column (`.netdiagram-card--single`, max 40rem, `--space-6` above and below), with the same motion and no tabs. `port` swaps the example local port so the figure matches the page's commands. The tunnel docs pages (HTTP, TCP, TLS, UDP, TLSTCP) carry one each, after the first command and its explanation. A Markdown twin (`network-diagram.md`) writes the same entry out as text for the docs' Markdown output.

- **Tabs:** a vertical ARIA tablist (HTTPS, TCP, TLS, UDP) in the text column. Ruled rows, 48px tall: a `01` number, the protocol name (Plex 600) and a short use case (sans, `--ink-500`, ellipsis). Selected: `--white` fill, a 2px `--brand-600` inset rule on the side facing the diagram, number in `--brand-600`. Arrow keys, Home and End move selection and focus.
- **Rotation:** by default the tabs advance every 4s, but only while the diagram is on screen. A 2px `--brand-600` rule grows along the bottom of the selected row as the next change approaches. Any click or key on a tab stops the rotation for good; keyboard focus inside the list pauses it; it never starts under reduced motion.
- **Card:** a spec card whose head meta is the command for the selected protocol and whose footer is one sentence on what happens to the traffic. Commands and captions share one grid cell, so the card keeps a fixed height and nothing shifts between tabs.
- **Drawing:** ruled boxes (`--paper` fill, `--ink-300` stroke), the Pinggy edge box in `--ink-950`, Plex labels, 20px line icons (laptop, server stack, globe) as `<symbol>`s. Two drawings: wide (left to right) and tall (stacked, below 640px) so labels never shrink below about 12px. Colors come from `.nd-*` classes, not the SVG.
- **Encryption is drawn, never implied by color alone:** an encrypted leg is a 12px tube (`--brand-50` fill between two `--brand-600` rules) with a lock glyph on its label line. A raw public leg (TCP, UDP: the client's bytes passed through as is) is a 1px `--ink-950` line, never a faint grey one that reads as broken or insecure. For TLS passthrough the tube's rules continue across the dark edge box (`--brand-500`), because Pinggy never opens it.
- **Motion, one signature per protocol** (packets run inside the tube or along the line; packets under the boxes vanish into them):
  - HTTPS: a request and its response, pausing at the edge while a small `--brand-500` activity light shows TLS ending there.
  - TCP: a steady two-way stream in two lanes; packets are ink on the raw leg and turn blue where they enter the tunnel.
  - TLS: one sealed packet (blue square with a paper core) crossing the edge box in view at constant speed.
  - UDP: hollow datagrams in short bursts, no round trip.
  - TLSTCP (docs only): the TCP stream with both legs encrypted, so its packets stay blue, and the edge light stays on and breathes while TLS ends there.
- Packets move along a route described per drawing by CSS variables (`--ux`, `--uy`, `--b`, `--c`, `--d`), so one set of keyframes serves both drawings. Switching tabs restarts the motion. Under reduced motion the packets and the light are hidden; tubes, locks and labels stay.
- Keep it to these few glyphs. No filled illustrations, no extra colors.

### 7.15 Chips and status chips

- `.chip`: square inline label, Plex 12px/500, `--brand-50` fill, `--brand-100` border, `--brand-700` text ("Recommended", "v0.6.3", "Save up to 17%"). `.chip--muted`: `--ink-100` / `--ink-200` / `--ink-950`. Not a button.
- `.tag-yes`, `.tag-no`, `.tag-partial` (compare tables): the same shape, tinted from `--success`, `--danger`, `--warning` with `color-mix()`.

### 7.16 Toggle switch

- Off track `--ink-200`, on track `--brand-600`, thumb `--white`. The pill track is the one place `--radius-pill` is used.
- Focus: `--shadow-focus` on the track.

### 7.17 Inputs & selects

- Square, 1px `--ink-200`, `--white`. Text 15px `--ink-900`, placeholder `--ink-400`.
- Focus: border `--brand-500` + `--shadow-focus`.
- Joined controls (protocol select + address) share one border with a rule between them.

### 7.18 FAQ

`{{< faq >}}` renders a `.cell.faq`: h2 and `#faqSearch` on the left, flush accordion rows on the right. Rows have a top rule (last row also bottom), transparent background, questions in Plex 14px/500, a `+` / `−` marker in `--ink-500` instead of a chevron, answers in sans `--ink-700`, max 62ch.

### 7.19 Pricing

- Head: `.cell__head--center`: eyebrow, h2 (max 26ch), prose, then the monthly/yearly toggle, packed tight (8px under the eyebrow, 12px to the prose, 24px to the toggle; `48px` above and `32px` below the block instead of the full cell padding; `text-wrap: balance`). The toggle is a `1fr auto 1fr` grid, so the switch sits exactly on the center line with "Monthly" to its left and "Yearly" plus the `.chip` saving note to its right. Below 480px the chip drops to its own centered row.
- `.pricing-grid`: three plan cells in one ruled box (stacked below 1024px). Plan names Plex uppercase in a header row.
- Featured plan (`.pricecard--featured`): `--white` fill with a 2px `--brand-600` top rule and a square blue "Most popular" badge.
- Prices: Plex 600, `font-variant-numeric: tabular-nums`. Seat spinner square, single outer border.
- Pro CTAs primary blue; Free and Enterprise ghost or ruled link.

### 7.20 Closing CTA

Centered: a two-line h2 (second line muted), then the command panel and a ghost "Read the docs →".

### 7.21 Footer

- Light: `--ink-50` with a 1px `--ink-200` top rule (none on the homepage, where the frame's last rule closes it). Inner width aligned with the frame.
- Column heads are eyebrows. Links sans 14px `--ink-700`, hover `--ink-950` + underline.
- Bottom bar: Plex 12px muted. Social icons: 32px square ghost tiles.

### 7.22 Compare pages

`layouts/compare/single.html`: flat hero (h1, sans sub, a square "Pinggy vs" picker), then `.comparison-table` as a ruled grid with an `--ink-950` mono header row, a `--paper` label column, and `.pinggy-better` cells tinted `--brand-50` with a 2px `--brand-600` left rule.

### 7.23 Docs

- Body sans, headings Plex. No web-font `@import` in `docs.css`.
- Sidebar: sans at every level. Active item: `--ink-100` fill with a 2px `--brand-600` inset left rule.
- Inline code: `--ink-100` band, `--ink-900` text (site-wide outside the blog).

---

## 8. Iconography

- Library: Bootstrap Icons.
- Default icon color: `--ink-500`. List checks: `--brand-600`.
- Size: `16px` inline with `14px` text, `20px` inline with `16px+` text.

---

## 9. Motion

```
--ease-out:      cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out:   cubic-bezier(0.4, 0, 0.6, 1);
--ease-rise:     cubic-bezier(0.2, 0.7, 0.2, 1);

--duration-fast: 120ms;
--duration-base: 180ms;
--duration-slow: 240ms;
```

### Rules

- **Hover** (color, border, background): `--duration-fast --ease-out`.
- **Hero entrance:** fade + 8px rise, staggered, about 400ms `--ease-out`.
- **Artifact rise-in** (`mockRise`): fade + 16px rise, `0.6s --ease-rise`, once.
- **Hero grid pulses:** brand comets easing along grid lines, a few at a time (§7.5).
- **Live connector:** dashed stroke offset, linear.
- **Marquees:** linear, edge mask into `--ink-50`, logos grayscale at rest. Hovering a marquee pauses it, and only the hovered (or focused) logo regains its color.
- Everything above is off under `prefers-reduced-motion: reduce`.

### Forbidden

- Bouncy springs, parallax, hover lift.
- Animated background color on primary CTAs beyond the hover swap.
- Cursor-follow effects beyond the hero grid's soft line tint (the blog's full-page glow stays blog-only).

---

## 10. Focus & accessibility

- All interactive elements: visible `--shadow-focus` (or a 2px `--brand-500` inset/outline where a box-shadow would clip) on `:focus-visible`. Never remove without replacing.
- `--ink-500` on `--ink-50` and `--white` clears AA for text; `--paper` on `--ink-950` and white on `--brand-600` clear AA.
- Minimum touch target: `44 x 44px`.
- Form labels always rendered (no placeholder-only labels). `aria-label` retained where used.
- Decorative art (`.stage__art`) is `aria-hidden`; diagrams carry `title` + `desc`.

---

## 11. Responsive breakpoints

```
--bp-sm:  640px
--bp-md:  768px
--bp-lg:  1024px
--bp-xl:  1280px
```

### Behavior

- `< lg (1024px)`: hero, splits, FAQ, pricing and split cell heads stack to one column; pillars go to two columns; the stage tag hides; `--cell-pad-y` drops to 64px.
- `< md (768px)`: the hero grid is hidden.
- `< sm (640px)`: `--cell-pad-x` drops to 24px; pillars go to one column; trial button stacks under the input; the network diagram switches to its tall drawing.
