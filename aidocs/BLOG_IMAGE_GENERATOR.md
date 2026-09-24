# Instructions for generating blog images

Run this on 1 post. The input is a post path, for example
`content/blog/<slug>.md`. The output is the same post with every image
placeholder replaced by a real WebP image in `assets/images/<slug>/`, the
post taken out of draft, and a clean build.

The writer already decided what each image shows (see
[BLOG_WRITING.md](BLOG_WRITING.md), Image placeholders). This run decides how
it looks and builds it. It does not add, drop or reorder images, and it does
not rewrite the post, apart from the fix in step 3.

## Step 1: collect the placeholders

```bash
grep -n "Image placeholder" content/blog/<slug>.md
```

Read each placeholder in full, plus the section around it. Number them in
post order: the banner is `00`, the rest `01`, `02` and so on.

Each placeholder carries `Type`, `File`, `Shows` and `Notice`, plus `Kind`
for a diagram, and may carry `Place`, `Text`, `Sources` and `Caption`. If a
required field is missing or the intent is unclear, ask before building that
image. Do not guess what the writer meant.

## Step 2: set up the scratch folder

All drafts live in the session scratchpad (the directory the system prompt
names, never `/tmp`). Nothing in it ships or gets committed. Only the
finished `.webp` files leave it.

```
$SCRATCHPAD/images/
  fonts/                   the blog's fonts, copied once
  icons/                   brand marks, shared across images
  <slug>/
    shots/                 raw screenshots and downloaded images
    NN-short-name.html     1 page per built image
    NN-vK.png              renders, 1 per iteration
```

Copy the fonts the blog post template uses, so the images match the page
around them:

```bash
S="$SCRATCHPAD/images"
mkdir -p "$S/fonts" "$S/icons" "$S/<slug>/shots"
cp static/fonts/plus-jakarta-sans-latin.woff2 static/fonts/jetbrains-mono-latin.woff2 "$S/fonts/"
```

The one exception is a banner that is a data graph. Those are built from a
script in `scripts/banner-charts/`, as `CLAUDE.md` describes: follow that
folder's `README.md`, keep its house style, and commit the script. Its
renders are gitignored.

## Step 3: research what the image needs

Read the placeholder and the section around it, then list every fact the
picture will show: dates, numbers, names, ports, the order of steps. The
post text often does not contain all of them. A timeline needs the exact
release month; a flow diagram needs the real names of the tools and the real
port numbers; a chart needs the exact figures and their source.

Research the missing pieces the same way as for the post (see
[BLOG_WRITING.md](BLOG_WRITING.md), step 1). For anything about how a Pinggy
tunnel works, read [`.claude/skills/pinggy/SKILL.md`](../.claude/skills/pinggy/SKILL.md).
Do not guess a date or a number to make the picture work. If a fact cannot
be found, leave it out of the picture rather than put in an approximate one.

Where research shows the post is wrong, fix the post and say so in the
report.

## Step 4: gather the raw material

### Screenshots

Capture each URL from `Sources` at 2x:

```bash
cd "$SCRATCHPAD/images/<slug>"
npx playwright screenshot --device="Desktop Chrome HiDPI" \
  --viewport-size=1440,900 --wait-for-timeout=2000 \
  "https://github.com/trycua/cua" shots/cua.png
```

Add `--full-page` when the part the placeholder names sits below the fold.
Then crop to that part. Sizes and offsets are in image pixels, so double
what you measured in the 1440 viewport:

```bash
sips --cropToHeightWidth 1600 2880 --cropOffset 200 0 \
  shots/cua.png --out shots/cua-crop.png
```

- The command line capture cannot click. If a cookie banner, popup or chat
  widget covers the content, take the shot in a browser that can dismiss
  it, or crop it out.
- Pages behind a login (the Pinggy dashboard, an AI chat, any admin panel)
  need a signed-in browser. If none is available, stop and ask for the
  screenshot. Never rebuild a page in HTML and present it as a screenshot.
- Crop out or blur personal names, emails, account details, API keys and
  access tokens, including the token in a Pinggy command
  (`ssh -p 443 -R0:localhost:3000 <token>@pro.pinggy.io`).
- Leave the browser frame out unless the URL matters to the point.
- Never edit what the page says.
- Screenshots need no licence check. The caption credits the page.
- Terminal output is not a screenshot job. It belongs in a code block in the
  post. If the placeholder asks for a terminal screenshot, it is because the
  layout matters (a TUI, a QR code in the terminal): capture a real terminal,
  never a mock-up.

### Sourced images

- Trace every image to its original page. Prefer, in order: the owner's
  press kit or media page, Wikimedia Commons, the page the image appears on.
  Use image search only to find that original.
- Record the page URL, the owner and the licence. Commons states the licence
  on each file page.
- Skip images with a watermark, a stock licence, or no clear owner. Use a
  screenshot of the page or a diagram instead.
- Download the largest size: `curl -sfL "<url>" -o shots/name.jpg`. Never
  upscale a small image to fill the canvas. Place it smaller instead.
- Crop and resize only. Never alter a real person's face, and never pair a
  person's photo with words they did not say.

### Icons and logos

If the image names a product, use its real mark, never a drawn stand-in.
Collect the marks into `$SCRATCHPAD/images/icons/` before drawing:

- Pinggy's own logo is in the repo: `static/assets/pinggy_logo.png` and
  `static/assets/pinggy_logo.webp`.
- For anything else, fetch from Simple Icons:
  `curl -sfL https://cdn.simpleicons.org/<slug> -o <name>.svg`. Slugs such as
  `docker`, `github`, `vite`, `nodedotjs`, `python`, `linux`, `apple`,
  `raspberrypi`, `claude` and `anthropic` all exist. Simple Icons has dropped
  some brands at their owners' request (Microsoft and OpenAI among them), so
  a 404 there means look elsewhere, not that the logo does not exist.
- Other icon libraries with direct SVG URLs, fetched with `curl -sfL`:
  - Iconify, full-colour brand logos: `https://api.iconify.design/logos/<name>.svg`
  - svgl: `https://svgl.app/library/<name>.svg`
  - Wikimedia Commons, for official logos of larger companies.
- Or grab the mark from the brand's own website with Playwright. Open the
  home page at 2x and find the logo, usually the first `svg` or `img` inside
  `header` or inside `a[href="/"]`:
  - Inline `<svg>`: save its `outerHTML` as `<name>.svg`.
  - `<img>`: download its `src` with `curl`.
  - Neither works (canvas, CSS background, sprite): screenshot the element
    with `omitBackground: true` for a transparent PNG.
  - Also list the page's `link[rel*="icon"]` hrefs. The favicon SVG and the
    180px touch icon are often the cleanest square mark.
- To run a throwaway Playwright script from the scratch folder with no
  install, point `NODE_PATH` at the npx copy:
  `npx -y -p playwright sh -c 'NODE_PATH="$(dirname "$(command -v playwright)")/.." node grab.cjs'`
- Heavy marketing sites never reach `networkidle`. Wait for
  `domcontentloaded`, then about 2 seconds.
- A logo that uses `currentColor` or CSS variables renders black or blank as
  a standalone file. Replace those with the real hex colour, or use the PNG.
- An inline SVG copied out of a web page often has no `xmlns` and renders as
  a broken image. Add `xmlns="http://www.w3.org/2000/svg"` to the root
  element.
- Render a contact sheet (a plain HTML grid of `<img>` tags) and screenshot
  it before using any icon. A broken file shows up there, not in the image.

Icons and logos need no licence check. Grab them from wherever the cleanest
version is. Brand marks identify a product in an editorial image. Do not
recolour them into the blog palette, and do not put them where they read as
an endorsement of Pinggy.

## Step 5: build the image

`collage`, `diagram`, `3d` and `banner` are each 1 self-contained HTML file.
`screenshot` and `sourced` need a page only when they need a layout; a plain
crop goes straight to step 8.

### Words on the image

Every word on an image follows `CLAUDE.md` -> "Blog voice", the same as the
prose. Titles, labels, callouts, axis names, banner headlines, alt text and
captions all count.

- Short is fine. Cryptic is not. A label can drop words, but it still reads
  as something a developer would say out loud.
- Say what the picture shows, not what it is called: "One request from your
  phone to port 5173", not "Tunnel architecture".
- Use the real names: the real tool, the real port, the real URL shape
  (`https://abc123.a.pinggy.link`), the real command. Put commands, ports,
  URLs and file names in JetBrains Mono.
- Developer terms the post already uses (localhost, TLS, NAT) are fine. A
  term the post explains is fine once the post has explained it. Coined
  shorthand is not.
- Numbers and symbols are fine: "3 hops, 40 ms".
- No marketing words, no em-dashes or en-dashes.
- If a `Text` item in the placeholder fails this rule, rewrite it and note
  the change in the report.

### Design skills

Load the matching design skill before writing each page, when the session
has it:

| Image | Skill | Use it for |
|---|---|---|
| `diagram`, `3d` | `artifact-diagramming` | Showing the real mechanism, layout of boxes and arrows, SVG legibility |
| Any chart or graph | `dataviz` | Choosing the chart form, colour checks, mark specs |
| `collage`, `banner` | `artifact-design` | Layout, type hierarchy, spacing, composition |

This doc wins where the two disagree. The canvas size, the blog fonts and
the size floors in step 6 stay fixed. So do the white background and the
blog palette for diagrams, charts and 3d (see Colour below). The output is a
static image in light mode, so skip the skills' advice on dark mode, hover,
tooltips, responsive layout and publishing.

### Canvas rules for every HTML page

- Body images: `1600 x 900` logical pixels. Banners: `1920 x 1080`.
  `overflow: hidden` on `html, body`.
- The blog's own fonts, from the copies in step 2: Plus Jakarta Sans for
  everything, JetBrains Mono for commands, ports, URLs, file names, dates
  and small labels.

  ```css
  @font-face { font-family: "Plus Jakarta Sans"; font-weight: 300 800;
    src: url(../fonts/plus-jakarta-sans-latin.woff2) format("woff2"); }
  @font-face { font-family: "JetBrains Mono"; font-weight: 400 600;
    src: url(../fonts/jetbrains-mono-latin.woff2) format("woff2"); }
  ```

- Scripts only from `cdn.jsdelivr.net/npm/`, with a pinned version. The page
  stays in scratch, but a pinned version keeps a re-render identical.
- Do not draw a border, rounded corners or a shadow around the whole canvas.
  The blog already gives every body image a 1px border and rounded corners.

### Colour

- `diagram`, `chart` and `3d` use the blog palette, taken from the `.bp`
  tokens in `assets/css/blog.css`: ink `#1f2a37` for text, `#616b7a` for
  secondary text, `#d9dde4` for axes and rules, accent blue `#2563eb` (with
  `#1d4ed8` for strokes on it, and `#eef2fe` / `#d6e0fb` for soft fills and
  their borders). A terminal or code panel inside a diagram uses the code
  card colours: `#0e1626` background, `#e7ecf5` text.
- The accent blue marks the 1 thing `Notice` names, or Pinggy when Pinggy is
  part of the picture. Other hues carry meaning (done, caution, blocked,
  source) and the meaning stays the same across the post.
- `collage`, `banner` and any layout around a `screenshot` or `sourced`
  image follow the banner styles below rather than the diagram palette.
  Prefer light mode.

### screenshot

- Aim for landscape, 16:9 or 3:2. Never taller than wide: the post shows
  every image at most 720px wide, so a tall shot turns into a narrow strip
  the reader has to squint at.
- When 2 regions of 1 page matter, make it a `collage` or a `diagram`
  instead of 1 tall crop.

### sourced

- Crop to landscape like a screenshot.
- If the image is small or the wrong shape, set it on a canvas page with a
  white or soft tinted background rather than stretching it.

### collage

- CSS grid on the canvas. No borders, no shadows, no frames. Gutters of 0 to
  16px, the same everywhere.
- 2 to 6 tiles. Layouts that work: 2 x 2, 3 x 2, 1 large beside 2 stacked.
- Each tile is an `<img>` with `object-fit: cover` and an `object-position`
  aimed at the part that matters.
- Tiles show the same kind of region (all repo headers, or all pricing
  tables), so the grid compares like with like.
- Optional text band at the top or bottom: 1 line from `Text`, 56px or more,
  weight 800, taking about 15% of the height.

### diagram

Anything HTML, CSS and SVG can draw: lines, shapes, gradients, patterns,
text, flows, charts, graphs, timelines. Draw the SVG from a short script, so
positions come from a few constants and can be nudged without redrawing by
hand.

#### Arrangement

Arrange every diagram like a figure in a strong engineering blog (Stripe,
Cloudflare, Netflix) or a well-made research paper slide: calm, ordered, and
readable in 5 seconds.

- Pick 1 reading direction and hold it: left to right for flow and time, top
  to bottom for hierarchy and layers. The eye never backtracks.
- Sketch the layout on a grid of rows and columns before drawing. Every
  element snaps to it.
- Same role, same form. Siblings share size, shape and alignment, with equal
  gaps between them.
- The main path runs straight along 1 axis. Branches leave it at right
  angles.
- Arrows run straight or with 90-degree elbows. They never cross each other
  and never pass behind a box. Use 1 arrow style per kind of relation, for
  example solid for a request and dashed for the SSH connection that carries
  it.
- Group related parts in 1 light, labelled container instead of drawing many
  arrows between them: "Your laptop" holding the dev server and the SSH
  client, "Pinggy" holding the public URL.
- Emphasis goes to the 1 thing `Notice` names. Everything else stays neutral.
- Balance the composition: content centred on the canvas, no heavy side, no
  empty corner.
- Every mark carries meaning. No shadows, bevels, glows, decorative icons or
  clip art.
- Test: cover the caption. A reader gets the point in 5 seconds and can trace
  the path with a finger.

The placeholder's `Kind` sets the form. The writer chose it (see the kind
table in [BLOG_WRITING.md](BLOG_WRITING.md), Image placeholders). Build each
kind like this:

| Kind | Build it |
|---|---|
| `flowchart` | Left to right, or top to bottom when a row gets too wide. At most 7 steps. Number them. Diamonds only for real decisions. |
| `architecture` | Group components into labelled zones (your machine, the internet, the server). Real product icons on the boxes. Label each arrow with what flows along it and on which port. |
| `sequence` | 1 column per actor with a lifeline. Messages as horizontal arrows, top to bottom in time order. At most about 6, numbered. |
| `state` | Rounded boxes for states, a label on every transition arrow, a dot for the start. Highlight the state the post is about. |
| `network` | At most about 12 nodes, sized by importance. Thin edges. Highlight the 1 path that matters. |
| `tree` | Root at the top or left. At most 3 levels. Siblings share an edge line. |
| `stack` | Full-width horizontal bands, the layer nearest the user on top. Name on the left, 1 detail on the right. |
| `timeline` | 1 horizontal axis scaled to real time. Dates in JetBrains Mono. Shade the gap the post cares about. |
| `cycle` | 3 to 6 nodes on a circle, arrows clockwise, the first step at 12 o'clock. |
| `comparison` | 1 column per option with its logo on top, the same rows in every column. Mark the better value with colour, not a word. |
| `before-after` | 2 panels side by side at the same scale and layout, labelled Before and After. Highlight only what changed. |
| `funnel` | Bands narrowing top to bottom. Widths follow the real numbers when they exist, even steps when they do not. Labels outside narrow bands. |
| `quadrant` | Label each axis at both ends and name each quadrant in its corner. Items as labelled dots. |
| `chart` | Load `dataviz`. Plot the exact figures from `Sources`. Label values on the marks, not in a legend. Bar axes start at 0. |
| `concept` | 1 metaphor, never 2. Simple shapes. Label what each part of the metaphor stands for. |
| `exploded` | Pull the parts apart along 1 axis, with leader lines to the labels. Use `3d` when depth matters. |
| `annotated-screenshot` | A real screenshot (see Screenshots in step 4). Numbered callouts or 4px accent outlines on the areas. Callout text sits outside the shot. Optionally dim the rest. |
| `map` | `d3-geo` and `world-atlas` from jsdelivr, pinned. A light land fill, no labels on every country. Dots sized by value. |
| `schematic-map` | Simple shapes in roughly the right places. Lines at 0, 45 and 90 degrees, like a transit map. |

- White background. A faint grid (`#e9ebf0`, 50px) is fine, masked to fade
  out toward the bottom.
- Fills are light tints: a saturated hue at a light tint, so a box reads as
  colour at a glance without fighting the text. Pair each fill with a darker
  stroke and glyph of the same hue. A dark fill with white text is for
  emphasis only, at most 1 or 2 per image.
- Adjacent boxes, in a row and between rows, must not share a fill. A grid of
  steps where a column has the same fill in both rows reads as columns, not
  steps.
- Title top left, 60 to 66px, weight 800, letter-spacing `-.03em`. 1
  optional sub line under it at about 30px in `#616b7a`.
- A command shown inside a diagram sits in a small code panel in the code
  card colours, in JetBrains Mono, copied exactly from the post.
- Flowcharts, sequence and state diagrams: draw the SVG by hand. Mermaid is
  fine for a first layout, but its defaults are small grey text that fails
  the 720px check. Restyle it to the blog fonts, the palette and the sizes in
  step 6, or redraw it.
- Cropped screenshots inside a diagram: crop with `sips` first, then place
  as an `<img>` with a 2px `#d9dde4` outline and a 12px radius so it
  separates from the canvas. Point at it with a line or a label. Never paint
  over the screenshot's own text.

### 3d

Use three.js from jsdelivr through an import map, with a pinned version:

```html
<script type="importmap">
{"imports": {"three": "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js"}}
</script>
```

- Renderer at the canvas size with `antialias: true` and
  `preserveDrawingBuffer: true`. Render 1 frame; no animation loop.
- After that frame, set `document.body.dataset.ready = "1"` and render with
  `--wait-for-selector="body[data-ready]"` in step 7.
- Light it softly: 1 hemisphere light and 1 directional light. Flat, lightly
  tinted materials in the same hues and meanings as the diagrams.
- Put all text in HTML on top of the canvas, in the blog fonts, never in 3D
  text geometry. The size rules in step 6 apply.
- Headless Chromium draws WebGL in software. If the render comes out blank,
  open the page in a normal browser and read the console.

### banner

The banner is the first image in the post, the `og:image` for social cards,
and the thumbnail on `/blog/`. Unlike a body image, it carries the headline.
Recent banners take one of four forms; pick the one the placeholder's
`Shows` describes:

| Form | Looks like | Reference |
|---|---|---|
| Title over a screenshot collage | Headline and sub line across the top, 2 to 4 real screenshots in a grid below, optional platform chips between them. Light background. | `assets/images/best_computer_use_mcp_servers/best_computer_use_mcp_servers_banner.webp` |
| Title with a flow | Headline on one side or across the top, a short left-to-right flow of real icons below or beside it (your app -> Pinggy -> the public URL), optionally the 1 command in a code panel. Light background. | `assets/images/ssh_into_docker_container/ssh_into_docker_container_banner.webp` |
| Data banner | Headline and a one-line finding on the left, a small ranked panel of the key numbers on the right. Dark background. | `scripts/banner-charts/small_llms_that_fit_in_8gb_memory_banner.html` |
| Chart banner | A matplotlib chart with a 2-line title. | `scripts/banner-charts/README.md` |

- Headline from `Text`, 2 to 8 words, 110 to 150px, weight 800,
  letter-spacing `-.03em`. Put the 1 key word or number in accent blue
  `#2563eb` (on a dark banner, a lighter blue that keeps 4.5:1 contrast).
- 1 optional sub line at 40 to 48px in `#344155` (light) or a muted grey
  (dark). Sentence case, no full stop.
- The headline and the subject stay inside the centre 90% of the width and
  at least 60px from the top and bottom edges. `/blog/` crops the banner to
  a 320x200 centre crop and shows it at 180px wide, and social cards trim
  the top and bottom.
- A small `pinggy.io / blog` mark in a corner is optional, as on the data
  banner. No other badges, stickers or borders.
- Never make it look as if a person, project or company in the banner
  endorses Pinggy or the post.

## Step 6: keep it large and uncluttered

The post shows body images at most 720px wide, so every pixel of a 1600px
canvas is seen at 45%. Design for that, not for the canvas.

- Large type by default. Smallest text 26px, labels 36px, titles 60px or
  more. A dense technical diagram may drop secondary labels to 22px, and
  only there.
- At most about 10 pieces of text in the whole image. If there are more,
  remove the least important until there are not.
- 1 idea per image. If a second idea needs explaining, it is a second image.
- Generous white space. Align everything to a few shared edges.
- Body images carry no footer line, no source note and no logo of our own.
  The caption line in the post carries the source.
- Marks and lines thick enough to survive the downscale: axis 4px, strokes
  3 to 5px, dots radius 16 to 18.

## Step 7: render and look at it

Render at 2x with Playwright, then downscale to check legibility at the size
readers see:

```bash
cd "$SCRATCHPAD/images/<slug>"
npx playwright screenshot --device="Desktop Chrome HiDPI" \
  --viewport-size=1600,900 --wait-for-timeout=800 \
  "file://$PWD/01-short-name.html" 01-v1.png
sips -Z 720 01-v1.png --out 01-v1-720.png
```

For the banner, use `--viewport-size=1920,1080` and also check it at the
size of the `/blog/` card:

```bash
sips -Z 180 00-v1.png --out 00-v1-180.png
```

Downscale screenshots and sourced images the same way. Open the PNGs and
look. The things that go wrong every time:

- Labels overlap. Shorten the words, change the text anchor, or move a mark.
- A label crosses a line. Move the label, not the line.
- The title wraps. Shorten it or widen `max-width`.
- A label reads like jargon or a code name. Rewrite it.
- Arrows cross, or the eye has to backtrack. Rearrange the grid until the
  main path runs 1 way.
- Siblings drift out of line or differ in size. Snap them back to the grid.
- Type is legible at 2x and not at 720. Raise the size, do not add weight.
- Dead space on 1 side. Change the axis range so the content fills it.
- A screenshot tile shows the wrong region. Fix `object-position`.
- The banner headline is unreadable at 180px. Cut words and make it bigger.

Bump the version number on every render so the iterations stay comparable.
Expect 3 to 6 rounds.

## Step 8: place it in the post

Hugo does not resize body images: the `{{< image >}}` shortcode serves the
file exactly as committed. So export at the width readers need, not at 2x
canvas size. Convert the final render with `cwebp` into the post's folder
under the name in `File`:

```bash
mkdir -p assets/images/<slug>
# diagrams, collages: text-heavy, so a higher quality setting
cwebp -q 88 -m 6 -mt -resize 1600 0 01-v4.png -o assets/images/<slug>/phone_to_localhost.webp
# the banner
cwebp -q 88 -m 6 -mt -resize 1920 0 00-v5.png -o assets/images/<slug>/<slug>_banner.webp
# screenshots and photos
cwebp -q 82 -m 6 -mt -resize 1600 0 shots/cua-crop.png -o assets/images/<slug>/cua_driver.webp
ls -la assets/images/<slug>/
```

`-resize W 0` keeps the aspect ratio. If the source is narrower than the
target width, drop `-resize` rather than upscaling. Aim for under about
250 KB per file; the banner is the page's largest paint, so keep it lean.

Then handle the placeholder by its `Place`:

- `body`: replace the blockquote with the image shortcode, with a blank line
  on each side:

  ```
  {{< image "<slug>/phone_to_localhost.webp" "A request from a phone travels through the Pinggy server and down an SSH connection to a Vite dev server on port 5173" >}}
  ```

- `banner`: replace the blockquote with
  `{{< image "<slug>/<slug>_banner.webp" "<alt>" >}}`. It must be the first
  `{{< image >}}` call in the post: the shortcode loads the first image
  eagerly at high priority as the page's lead image and lazy-loads the rest.
  Check that `og_image` in the front matter is
  `"images/<slug>/<slug>_banner.webp"`.

Alt text and captions:

- Alt text says what is actually in the frame, in 1 sentence. For a
  screenshot, name the page. Do not restate the post title.
- A caption is an italic line directly under the image. Start from the
  placeholder's draft and add the credit at the end. Skip it for a diagram
  that needs no credit and whose point the next paragraph already makes.
  - Screenshot: `*Screenshot: github.com/trycua/cua, September 2026.*`
  - Sourced image: `*Photo: owner, Wikimedia Commons, CC BY-SA 4.0.*`
  - Chart: `*Data: source name, year.*`
  - Collage: the sites in tile order, then the capture month.
- A link in a caption points outside `pinggy.io`, so write it with
  `{{< link href="..." >}}...{{< /link >}}`, like the existing
  `*Image source: ...*` lines on the blog.

If the post has a Spanish sibling (`<slug>.es.md`), it shares the same image
folder. Add the same `{{< image >}}` calls there with Spanish alt text and
captions.

## Step 9: check and report

```bash
grep -c "Image placeholder" content/blog/<slug>.md   # expect 0
```

Set `draft: false` in the front matter, then build the published version
into the scratchpad:

```bash
hugo list future | grep <slug>                      # must print nothing
OUT="$SCRATCHPAD/build"
hugo --gc --minify -d "$OUT"
P=$OUT/blog/<slug>/index.html

ls -la $P                                            # the post is published
grep -o '<img src="/images/<slug>/[^>]*>' $P         # every image, with width and height
grep -o '<meta property="og:image" content="[^"]*"' $P
ls $OUT/images/<slug>/                               # every file, plus a banner _hu_ thumbnail
grep -c '/images/<slug>/' $OUT/amp/blog/<slug>/index.html
```

The first `<img>` must be the banner, with `fetchpriority="high"`. The
`_hu_` file is the 320x200 thumbnail Hugo makes for the `/blog/` card; if it
is missing, `og_image` does not match the banner's path.

Commit only `content/blog/<slug>.md` and the files in
`assets/images/<slug>/` (plus a script in `scripts/banner-charts/` for a data
banner). Never `public/`, `resources/` or anything from the scratchpad.

Report 1 line per image: file, type, sources used, and any change made to
the post text or to the placeholder's `Text`.
