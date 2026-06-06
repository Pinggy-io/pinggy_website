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

### Blog post exception (typography)

The **blog post template only** (`layouts/blog/single.html` + `static/css/blog.css`, scoped under `.bp`) deliberately departs from the site type/color system. It uses three Google-loaded families - **Plus Jakarta Sans** (structure: headings, labels, UI, numbers), **Source Sans 3** (body copy), and **JetBrains Mono** (code) - and a brighter blue accent **`#2563eb`** (`--accent`, with `#1d4ed8` / `#eef2fe` / `#d6e0fb` support shades). These tokens live on the `.bp` wrapper and are namespaced `bp-*`, so they do not leak to the navbar, footer, blog list, or any other page. This exception is scoped to the reading experience of a single article; everywhere else (including the shared footer) still uses the `--brand-*`/`--ink-*` tokens and Uncut Sans/Inter.

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
public/             Build output - do not edit by hand
old_files/          Archive - ignore unless explicitly asked
```

Key conventions:

- **Tokens live in `assets/css/customization.css`** under `:root`. Add new styles there, not in `style.css` (vendored).
- **Shortcodes** in `layouts/shortcodes/*.html` are reused across pages - edits propagate. Most have an `.amp.html` twin for the AMP build.
- **Alpine.js** powers interactive widgets (tunnel config, seat selector, pricing toggle). Look for `x-data` / `x-model` bindings before refactoring HTML structure; existing IDs (`#bigcodecolumn`, `#finalcommand`, `#portcommand`, `#trynow`, etc.) are wired up in `assets/js/*.js`.
- **Bootstrap 5** classes are used throughout. Prefer existing utility classes; reach for custom CSS only when a token-level rule is needed.
- **AMP**: pages emit both HTML and AMP. When adding shortcodes that touch markup, add or update the matching `*.amp.html`.

## Working conventions

- Editing existing files is preferred over creating new ones; existing IDs and class names are referenced by JS and should be preserved unless a rename is intentional.
- Don't commit anything in `public/` or `resources/` - they're build artifacts.
- Don't add documentation or planning files unless asked.
- **Last-updated dates**: when updating a blog post or any page, set `lastmod` (and any matching `dateModified` in JSON-LD / schema blocks) to **one day before today's date**, not today. Keep the existing time and timezone offset.

## Writing style

- **Never use em-dashes (`—`, U+2014).** This applies everywhere in the repo: blog posts, page content, shortcodes, CSS/JS comments, code strings, commit messages - no exceptions. Use a regular hyphen `-` instead (with surrounding spaces for parenthetical breaks: ` - `). En-dashes (`–`) are also off-limits; stick to ASCII `-`.

### Blog voice

Write like a seasoned developer talking shop, the kind of post that does well on Hacker News - friendly, plainspoken, technically honest. The reader is curious and reasonably technical, but not necessarily an expert in this specific topic.

- **Lead with the concrete thing.** Open on the finding, the command, the bug, the version. No throat-clearing ("In today's fast-paced world..."), no rhetorical questions.
- **Be technically correct.** Real version numbers, exact flags, actual error messages, real file paths. If you're not sure, check or say so; don't fudge.
- **Cut marketing words.** Avoid *seamless, powerful, robust, leverage, revolutionary, cutting-edge, unleash, supercharge, game-changer, blazing-fast, effortless*. If a sentence still works after deleting the adjective, delete it.
- **Explain the unfamiliar, skip the obvious.** Give a one-line take on a tool or concept the average dev might not know; don't re-explain HTTP, SSH, or `npm install`. Link out for deeper background.
- **Show tradeoffs.** Mention what doesn't work, what's annoying, what you'd skip. Honest beats enthusiastic.
- **Nice flow, mixed rhythm.** Short sentences alongside longer ones. Active voice. Contractions and first person ("I tried...", "we found...") are fine. Not too formal, not chatty for the sake of it.
- **Concrete over abstract.** "Took 12s down to 2s on a 50k-row table" beats "significantly faster". Numbers, before/after snippets, real terminal output.
- **Headings are signposts, not clickbait.** `## Why the default port is 5173`, not `## The SHOCKING truth about Vite`.
- **Code blocks earn their place.** Show the command or the diff; don't paste 80 lines of boilerplate. Annotate with `# comment` only when the line isn't self-explanatory.

### LLM-context comment (how-to-with-Pinggy posts only)

When writing a "how to do X with Pinggy" guide (a post whose goal is to expose/share/access something local using a Pinggy tunnel), embed a hidden LLM-context comment with the concise steps. This gives an at-a-glance summary that survives in the rendered HTML for LLMs and scrapers. **Only add it to how-to posts that use Pinggy to reach a goal** - skip it for explainer, comparison, or news posts.

Use the `llm-context` shortcode, placed at the **top level** of the markdown (not inside `{{% tldr %}}` or any other `{{% %}}` shortcode, whose inner content is re-run through Goldmark and would strip the comment):

```
{{< llm-context >}}To <goal> with Pinggy - run `<setup/start command>` (starts on port <port>), then in a new terminal run `ssh -p 443 -R0:localhost:<port> free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}
```

Keep it to one or two sentences: the local-app step (exact command + port) and the Pinggy tunnel command. Don't reproduce the whole post.

Why the shortcode (don't hand-write the raw comment): Goldmark strips HTML comments, and `minifyOutput: true` strips them again - except `<!--# ... -->` special comments. The shortcode emits that surviving form (`layouts/shortcodes/llm-context.html`, with an `.amp.html` twin).
