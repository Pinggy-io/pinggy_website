# CLAUDE.md

Guidance for Claude when working in this repository.

## Design system

**All UI changes must follow [`DESIGN_GUIDELINES.md`](./DESIGN_GUIDELINES.md).** Read it before introducing or editing visual styles. In short:

- Use the documented tokens (`--brand-*`, `--ink-*`, `--radius-*`, `--shadow-*`, `--duration-*`) defined in `assets/css/customization.css`. Do not introduce ad-hoc hex values, drop shadows, gradients, or border radii.
- One accent (`--brand-600`). Reserve color for action; rely on weight and size for hierarchy.
- Single shadow ramp. No glows, no multi-color shadows.
- Type, spacing, radius, and motion all come from the scales in the guidelines. Pick the closest token; do not invent new sizes.
- Components have canonical specs in §7 (buttons, inputs, cards, navbar, accordion, pricing card, etc.). When building a new surface, look for an existing pattern there first.
- Honor `:focus-visible` rings and `prefers-reduced-motion: reduce`.

If a request needs something the guidelines don't cover, propose an addition to `DESIGN_GUIDELINES.md` rather than one-off CSS.

## Code structure

Hugo static site. Build with `make build`; serve locally with `make serve` (or `hugo server`).

```
content/            Markdown + HTML page content (one folder per route)
  _index.md         Homepage
  cli/, app/, docs/, blog/, compare/, …
layouts/
  _default/         Base templates
  partials/         Navbar, footer, head, SEO blocks
  shortcodes/       Reusable embeddable blocks (cli-downloads, pinggytunnel, faq, …)
  docs/, blog/, …   Section-specific templates
assets/
  css/              customization.css (design tokens + project styles), style.css (vendored Bootstrap base), syntax.css
  js/               Alpine stores, copy-to-clipboard, tunnel command builder, search, etc.
  images/           Pipeline-processed images
static/             Files served as-is (favicons, robots.txt, downloadable binaries)
config.yaml         Hugo config (baseURL, taxonomies, output formats incl. AMP)
public/             Build output — do not edit by hand
old_files/          Archive — ignore unless explicitly asked
```

Key conventions:

- **Tokens live in `assets/css/customization.css`** under `:root`. Add new styles there, not in `style.css` (vendored).
- **Shortcodes** in `layouts/shortcodes/*.html` are reused across pages — edits propagate. Most have an `.amp.html` twin for the AMP build.
- **Alpine.js** powers interactive widgets (tunnel config, seat selector, pricing toggle). Look for `x-data` / `x-model` bindings before refactoring HTML structure; existing IDs (`#bigcodecolumn`, `#finalcommand`, `#portcommand`, `#trynow`, etc.) are wired up in `assets/js/*.js`.
- **Bootstrap 5** classes are used throughout. Prefer existing utility classes; reach for custom CSS only when a token-level rule is needed.
- **AMP**: pages emit both HTML and AMP. When adding shortcodes that touch markup, add or update the matching `*.amp.html`.

## Working conventions

- Editing existing files is preferred over creating new ones; existing IDs and class names are referenced by JS and should be preserved unless a rename is intentional.
- Don't commit anything in `public/` or `resources/` — they're build artifacts.
- Don't add documentation or planning files unless asked.
