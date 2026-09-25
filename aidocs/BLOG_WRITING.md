# Instructions for writing a blog post

Follow these steps, in order, whenever you write or rewrite a post under
`content/blog/`. The input is a topic, usually with a title and a short brief
describing the crux. The output is `content/blog/<slug>.md`, a post that
builds clean.

Writing and image making are separate runs. The writer decides which images
the post needs and what each one shows, and writes that down as a
placeholder. The writer does not create, fetch, render or add any image,
including the banner. A separate run takes the post path and turns every
placeholder into an image, following
[BLOG_IMAGE_GENERATOR.md](BLOG_IMAGE_GENERATOR.md).

The reader is the one `CLAUDE.md` describes: a curious, reasonably technical
developer who is not necessarily an expert in this particular topic. They
want the mechanism and the exact command, and they stop trusting a post at
the first hand-wave or the first wrong flag. Every step below serves that
reader.

**The voice is in step 4 -> Voice.** Read it before drafting. It is copied
from [`CLAUDE.md`](../CLAUDE.md) -> "Blog voice"; if you change one, change
the other. The rest of `CLAUDE.md` -> "Writing style" (no em-dashes or
en-dashes, external links in a new tab, tags, the `llm-context` shortcode)
applies to every post too.

## Step 1: research the topic

Start from the topic and whatever brief came with it. Research both deeply
before deciding anything about the post.

- Check the blog does not already cover it. A near-duplicate is often better
  handled as an update to the existing post, and that is worth flagging
  before writing 2,000 words:

  ```bash
  ls content/blog/ | grep -i <keyword>
  grep -ril "<distinctive phrase>" content/blog/*.md
  ```

- Read the brief closely. It usually names the mechanism the post should
  explain and the angle to take. Research every claim in it, including the
  ones that sound obvious.
- Go wide first: what the official docs say, what the source code and the
  issue tracker show, what people hit in practice, where the numbers come
  from. Then go deep on the parts the brief cares about.
- Trust sources in this order: official docs, changelogs and release notes;
  source code, READMEs and GitHub releases; official engineering blogs;
  benchmarks and studies that publish their method; GitHub issues, Hacker
  News and Reddit threads (good for pain points and tradeoffs, weak for
  facts); trade press last, and only for framing.
- Run it yourself whenever the post shows a command. Install the thing, run
  the command, and keep the real version number, the real output and the
  real error message. If you cannot run something, say so in the post or
  leave the claim out.
- For anything about Pinggy itself (tunnel commands, flags, tunnel types,
  domains, tokens), read [`.claude/skills/pinggy/SKILL.md`](../.claude/skills/pinggy/SKILL.md).
  Never write a Pinggy command from memory.
- Write down the date next to every number that changes: GitHub stars,
  versions, prices, download counts. The post says "as of <date>".

## Step 2: state the crux

Now write the crux in one short paragraph, in plain words: the mechanism,
the finding or the procedure the post exists to explain, as the research
showed it. Where the brief and the research differ, follow the research and
say so in the post. Never split the topic into more than 1 post; if the crux
runs long, tighten it until it fits in a paragraph.

Then choose the 3 to 5 facts from the research that carry the crux. The rest
is colour or cut. More statistics do not make a mechanism clearer.

## Step 3: build the skeleton

Most posts on this blog take one of four shapes. Pick the one that fits the
crux, then adapt it.

| Shape | Typical skeleton |
|---|---|
| How-to with Pinggy | What you're building and why a tunnel is needed -> prerequisites -> run the app (exact command, port) -> start the tunnel -> check it works -> troubleshooting -> what to do next. |
| Roundup or comparison ("Best X in 2026") | What this category of tool actually does -> comparison table -> 1 section per tool, same depth and order of facts in each -> how to choose -> what to do next. |
| Explainer | 1 section per step of the mechanism, in the order it happens -> why it matters -> how to see it for yourself. |
| Data or news post | The finding -> how it was measured -> the numbers -> what it means for the reader -> how to check it. |

Whatever the shape:

- Turn the crux into `##` headings. Each step of the mechanism, or each leg
  of the argument, is one `##`. Use `###` only when a step needs sub-parts.
- Name each heading for what it explains, not for what a product offers. A
  section on a tool is "How Cua Driver reads the screen", not "Cua Driver
  features". Open it with the mechanism: how the tool works and what it needs
  (install, permissions, ports). Features, pricing and project news follow.
- Decide what the reader should be able to do or check for themselves by the
  end. Write that down; it becomes the closing section.
- Pick 1 worked example and carry it through every section. One app, one
  port, one machine: say, a Vite dev server on port 5173 that you want to
  open on your phone. Do not switch to a Flask app halfway through.
- Under each heading, list the facts from the research that belong there. If
  a heading has none, research that step again or drop it.

## Step 4: draft

Write in this order: banner placeholder -> lead -> tldr -> the sections ->
what to do next. Put an image placeholder wherever an image is needed as you
go.

### Voice

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
- **Inline code for short plain-text snippets.** A single short line of unhighlighted plain text - a URL, an env var assignment, a filename, a value - should be inline code (single backticks), not a fenced code block. Fenced blocks (which render as the dark terminal card) are for multi-line commands/output or syntax-highlighted code. Avoid bare ` ``` ` / ` ```text ` fences for one-liners: `https://abc123.a.pinggy.link` reads better inline than as a one-line terminal card.

### Layout

- The banner placeholder is the first thing under the front matter.
- A how-to-with-Pinggy post gets the `{{< llm-context >}}` shortcode at the
  top level, right after the banner placeholder (see `CLAUDE.md` ->
  "LLM-context comment"). No other kind of post gets one.
- The lead paragraph carries the whole point. A reader who stops there still
  learns something. It opens on the concrete thing, as Voice above says.
- Then a `{{% tldr %}}` block (it renders with the heading "Summary") holding
  3 to 5 numbered takeaways. Bold the key phrase in each so a skimmer gets
  the point from the bold alone.
- One image or diagram per major mechanism, plus the banner. Write each one
  as a placeholder (see Image placeholders below). Do not make the image
  here.
- Bold in the body is rare. A few phrases per post at most, only where a
  sentence carries a point the whole post depends on. Never bold a label or
  the start of every list item.
- A sequence of steps can be written inline with plain `->` arrows:
  "the phone calls the Pinggy URL -> Pinggy forwards it down the SSH
  connection -> your laptop hands it to port 5173". Use the 2 characters
  `->`, not an arrow symbol.
- Code blocks, inline code and one-liners follow Voice above. Terminal
  output goes in a code block as text, never as an image.
- For a comparison table, copy the inline-styled `<table>` from
  `content/blog/best_computer_use_mcp_servers.md`. Plain Markdown tables also
  render, and the blog stylesheet styles both.
- Close with something the reader can act on: a next step, or a way to check
  the claim themselves. A `## Conclusion` heading is fine, but it should not
  restate the tldr.

### Links

- External links open in a new tab, as `CLAUDE.md` requires. Write them as
  `{{< link href="https://example.com" >}}text{{< /link >}}` or as
  `<a href="https://example.com" target="_blank">text</a>`; both render the
  same. Never use `[text](https://...)` for a site outside `pinggy.io`.
- Links to `pinggy.io` and its subdomains, and internal paths such as
  `/blog/ssh_reverse_tunnelling/`, stay as normal Markdown.
- Link a source when it is obvious and available: the docs page for a flag,
  the repo for a star count, the release notes for a version. Otherwise link
  only where a claim really needs backing up.
- Link to related posts on this blog where a reader would want the
  background, instead of re-explaining it.

### Mentioning Pinggy

This is Pinggy's blog, so readers expect Pinggy where it fits. It should
never read like an ad.

- In a how-to-with-Pinggy post, the tunnel is the method. Show the exact
  command, what it prints and what the reader opens next. The interactive
  `{{< ssh_command >}}` widget or a plain `bash` block both work; see
  `content/blog/best_computer_use_mcp_servers.md` for the widget.
- In any other post, bring Pinggy in only where a tunnel solves a real step
  in the worked example: reaching a local server from a phone, receiving a
  webhook on localhost, reaching a machine behind NAT. Give it one section
  near the end, like "Controlling a remote machine with Pinggy" in the
  computer use post. If no step needs a tunnel, leave Pinggy out.
- In a roundup where Pinggy is one of the options, give it the same entry as
  every other tool: same depth, real limitations, sources.
- No sign-up pitches and no "try it free" blocks.

### Image placeholders

Choosing the pictures is part of writing. The writer knows what each section
has to get across. The image run builds only what the placeholder asks for,
so write each one precisely enough that someone who never saw the research
can build the image from it.

Before choosing, load the `artifact-diagramming` skill when the session has
it. Use its guidance on when a picture earns its place and how to show the
real mechanism to decide `Type`, `Shows` and `Notice`. Ignore its drawing
and styling advice here. That part belongs to the image run.

Not everything should be a picture:

- Commands, code, config files and terminal output are never images. They
  go in code blocks, where the reader can copy them. A terminal screenshot
  is only for when the layout itself is the point, such as a TUI or a QR
  code printed in the terminal.
- If an image already in `assets/images/` shows exactly what the section
  needs, place it directly with `{{< image "<folder>/<file>.webp" "<alt>" >}}`
  instead of writing a placeholder.

Pick a type:

| Type | Use it for |
|---|---|
| `screenshot` | A real page or app as it looks: a GitHub repo, a docs page, a pricing table, a browser showing the tunnel URL, the Pinggy dashboard. |
| `sourced` | An existing image from a website or an image search: a product shot, a photo, an official chart. The caption credits the source. |
| `collage` | Several screenshots in a clean grid, with an optional line of text above or below. Good for comparisons and roundups. |
| `diagram` | Anything drawn in HTML, CSS and SVG. Pick a `Kind` from the next table. It can hold brand icons and cropped screenshots. |
| `3d` | A 3D scene, only when depth carries meaning: stacked layers, hardware seen in depth. Rare. |
| `banner` | The post banner: the headline plus 1 supporting visual (a screenshot collage, a flow with real icons, a small data panel, or a chart). Only for `Place: banner`. |

For a `diagram`, pick a kind:

| Kind | Use it to |
|---|---|
| `flowchart` | Show sequential steps, workflows, pipelines or decision processes. |
| `architecture` | Explain the components of a software, infrastructure or distributed system and how they connect. |
| `sequence` | Show interactions between systems, services or users over time, such as one request travelling through a tunnel. |
| `state` | Show the states of a system and the transitions between them. |
| `network` | Show connections, dependencies or relationships between entities. |
| `tree` | Show taxonomies, categories or nested concepts. |
| `stack` | Explain layered systems: OSI, TCP/IP, software stacks, security layers. |
| `timeline` | Show events, releases, milestones or history in date order. |
| `cycle` | Show recurring processes, feedback loops or iterative workflows. |
| `comparison` | Compare 2 or more products, approaches, technologies or concepts. |
| `before-after` | Show how a system, workflow or result changes, such as a port that is unreachable behind CG-NAT and reachable through a tunnel. |
| `funnel` | Show a count shrinking through stages. |
| `quadrant` | Place concepts on 2 axes, such as setup effort against control. |
| `chart` | Show numbers as a bar, line, scatter, area or other chart. |
| `concept` | Explain an abstract idea through a visual metaphor or a simplified structure. |
| `exploded` | Break a product or system into its parts and show how they relate. |
| `annotated-screenshot` | Explain a UI, web page or product screen by marking specific areas. |
| `map` | Show locations, routes, geographic spread or physical infrastructure, such as server regions. |
| `schematic-map` | Show rough geographic relationships when exact geography does not matter. |

Write one blockquote per image:

```markdown
> **Image placeholder**
> - Type: diagram
> - Kind: sequence
> - File: phone_to_localhost.webp
> - Place: body
> - Shows: a request from a phone goes to the Pinggy server, travels back down the SSH connection the laptop opened, and reaches the Vite dev server on port 5173.
> - Text: "Your phone"; "Pinggy server"; "Your laptop"; "localhost:5173"; "https://abc123.a.pinggy.link"; "SSH connection your laptop opened"
> - Notice: the laptop opens the connection outward, so nothing is opened on the router.
> - Sources: https://example.com/page-to-capture, https://example.com/data-behind-the-chart
> - Caption: Your phone reaches port 5173 through a connection your laptop started.
```

- `Type`, `File`, `Shows` and `Notice` are required. `Kind` is required when
  `Type` is `diagram`. Add the rest when they apply.
- `File` is a short snake_case name ending in `.webp`, like the files already
  in `assets/images/`. The image run converts everything to WebP.
- `Place` is `body` (the default) or `banner`. Every post gets exactly 1
  banner placeholder, with `Type: banner`, `File: <slug>_banner.webp`, sitting
  directly under the front matter. Its `Text` holds the headline (2 to 8
  words, usually a shortened title) and an optional sub line.
- `Text` lists the exact words on the image. Keep it to about 10 pieces of
  text. More than that belongs in the prose. Every piece follows the blog
  voice: real names, real ports, real numbers, no marketing words.
- `Sources` lists the pages to capture for a `screenshot` or `collage`,
  where a `sourced` image lives, and where each number in a chart comes
  from. Name the part of the page when it is not the top: "the pricing
  table", "the About sidebar of the repo".
- `Caption` is an optional draft. The image run finalises it and adds the
  credit.
- Leave style out. Colours, fonts, sizes and layout belong to the image run.

## Step 5: read it back

Read the draft once as a colleague would, against Voice in step 4. Cut
anything you would not say to them. Then check the mechanics:

- Every command in the post was run, or is marked as untested. Every Pinggy
  command matches the pinggy skill.
- Every number has its source next to it, with a date where it changes over
  time.
- The worked example runs through the whole post.
- No heading names what a product sells.
- No marketing words from the Voice list:

  ```bash
  grep -niwE 'seamless(ly)?|powerful|robust|leverag(e|es|ing)|revolutionary|cutting-edge|unleash|supercharge|game-changer|blazing-fast|effortless(ly)?' content/blog/<slug>.md
  ```

- No em-dashes or en-dashes (this prints nothing when the post is clean):

  ```bash
  perl -CSD -ne 'print "$.: $_" if /[\x{2013}\x{2014}]/' content/blog/<slug>.md
  ```

- No Markdown link to an external site. This should print only `pinggy.io`
  links, if any:

  ```bash
  grep -no '](https\?://[^)]*)' content/blog/<slug>.md
  ```

- One-line plain snippets are inline code, not fenced blocks.
- Every image placeholder has a `Type`, `File`, `Shows` and `Notice`, every
  diagram has a `Kind`, and the post has exactly 1 banner placeholder.

## Step 6: front matter and structured data

Everything the `<head>` and the JSON-LD emit comes from front matter, so get
the front matter right and the meta tags, Open Graph and schema follow.

```yaml
---
title: "How to Open a Vite Dev Server on Your Phone"
description: "150 to 250 characters for search. Says what the post concludes, in the words people type."
date: 2026-09-25T10:00:00+05:30
lastmod: 2026-09-25T10:00:00+05:30
draft: true
tags: ["Primary Topic", "existing tag", "existing tag"]
og_image: "images/<slug>/<slug>_banner.webp"
schemahowto: "<base64, see below>"
outputs:
  - HTML
  - AMP
---
```

What each key feeds:

| Key | Visible | Meta / OG | Schema |
|---|---|---|---|
| `title` | h1, blog list card | `<title>`, `og:title` | `BlogPosting.headline` |
| `description` | blog list card excerpt | `meta description`, `og:description` | none |
| `date` | post date, until `lastmod` is later | `article:published_time` | `datePublished` |
| `lastmod` | "Updated <date>" when later than `date` | `article:modified_time` | `dateModified` |
| `tags` | tag pills; tag #1 is the kicker above the title | none | none |
| `eyebrow` | replaces the kicker | none | none |
| `og_image` | blog list thumbnail (a 320x200 centre crop) | `og:image` | `BlogPosting.image` |
| `schemahowto` | no | no | decoded and emitted as-is |
| `outputs` | builds the HTML page and its AMP twin | | |

Rules for the keys:

- The slug is `snake_case` of the title, trimmed to the meaningful words. It
  names the file (`content/blog/<slug>.md`), the image folder
  (`assets/images/<slug>/`) and the banner (`<slug>_banner.webp`), and all
  three must match.
- Write the date with a time and the `+05:30` offset every post uses. Hugo
  skips future-dated content, so a post dated later than the real clock
  builds into nothing and the build still succeeds. Check it:
  `hugo list future | grep <slug>` must print nothing.
- On first publication `lastmod` equals `date`. Later edits follow the
  `lastmod` rule in `CLAUDE.md`.
- Leave `draft: true`. The banner and body images do not exist yet, and a
  published post with a missing banner has a broken thumbnail on `/blog/` and
  a broken social card. The image run sets `draft: false` as its last step.
- Leave out `categories`. It overrides the kicker, so
  `categories: ["Technology"]` puts "Technology" above the title instead of
  the real subject. Make tag #1 the primary topic instead, or set `eyebrow`
  when the kicker needs different wording.
- Tags follow `CLAUDE.md` -> "Tags": 3 to 5, reused from the existing list,
  matching capitalisation exactly.
- `og_image` points at the banner the image run will create. The file is
  published only because the `{{< image >}}` call at the top of the body uses
  it, so the banner must also appear in the body (the image run handles
  both).

### schemahowto

`schemahowto` is a base64-encoded `<script type="application/ld+json">`
block. Pick the type from what the post is, not from what earns rich
results:

- `HowTo` for a post that walks through steps a reader can follow. This is
  the most common type on the blog. Each `HowToStep` maps to a step the post
  actually shows, with the real command in its `text`.
- `TechArticle` for explainers, roundups and data posts.
- Add an `FAQPage` only when the post has a real FAQ section whose answers
  stand alone. An `FAQPage` with questions the article never answers is
  worse than none.

Write the JSON in the scratchpad (never `/tmp`), then encode it:

```bash
cat > "$SCRATCHPAD/schema.json" <<'JEOF'
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "<task, in the words people search>",
  "description": "<same as front matter description>",
  "image": "https://pinggy.io/images/<slug>/<slug>_banner.webp",
  "dateModified": "<same as lastmod>",
  "step": [
    { "@type": "HowToStep", "name": "Start the dev server", "text": "Run npm run dev. Vite listens on port 5173." },
    { "@type": "HowToStep", "name": "Open a tunnel", "text": "Run ssh -p 443 -R0:localhost:5173 free.pinggy.io and copy the HTTPS URL it prints." }
  ]
}
</script>
JEOF
python3 -c "import base64;print(base64.b64encode(open('$SCRATCHPAD/schema.json','rb').read()).decode())"
```

For a `TechArticle`, use the template in
[`.claude/skills/import-article-zip/SKILL.md`](../.claude/skills/import-article-zip/SKILL.md),
step 5. Keep the JSON file: if the date or description changes later, edit it
and re-encode rather than hand-patching base64. If the post lists the steps
or the FAQ in the body too, keep the two in sync by hand.

## Step 7: build

The post is a draft, so build with `-D` to include it. Build into the
scratchpad so drafts never land in `public/`:

```bash
OUT="$SCRATCHPAD/build"
hugo --gc --minify -D -d "$OUT"
P=$OUT/blog/<slug>/index.html

ls -la $P                                              # exists at all
grep -o '<title>[^<]*</title>' $P
grep -o '"@type":"[^"]*"' $P | sort | uniq -c          # BlogPosting + your schema type
grep -o 'bp-eyebrow[^<]*<[^>]*>[^<]*' $P | head -1     # the primary topic, not "Technology"
ls -la $OUT/amp/blog/<slug>/index.html                 # AMP twin built
grep -o '<a href="https\?://[^"]*"[^>]*>' $P | grep -v 'pinggy\.io' | sort -u
```

Every external link in the last list must carry `target="_blank"`. The site
footer contributes Discord, LinkedIn and X; ignore those three. Never commit
`public/` or `resources/`.
