---
name: import-article-zip
description: Turn a zipped Google-Docs-exported article (an HTML file plus an images/ folder) into a Pinggy blog post - slug, webp banner, front matter with og_image and base64 schemahowto, and a body rewritten into the house blog voice with every source link left exactly where the author put it. Use when asked to "write a blog post from this zip", "import this article", or when handed a `.zip` containing a guest/sponsored article.
---

# Import a zipped article into the blog

These zips are Google Docs exports. They arrive as one flat HTML file plus an
`images/` folder, and they are almost always guest or sponsored submissions.
That last fact drives the single hard rule of this skill:

> **Never touch the links.** Anchor destinations, anchor text, and the paragraph
> each link sits in stay exactly as the author placed them. Do not move a link
> to a "better" section, do not swap the anchor text for something more
> descriptive, do not add outbound links of your own, and do not drop one
> because it looks like filler. Those placements are the deliverable.

Everything else in the prose may be rewritten to match the blog voice in
`CLAUDE.md`.

## 1. Extract and read the source

```bash
Z="/path/to/Article.zip"
D="$SCRATCHPAD/article"     # scratchpad dir from the system prompt, not /tmp
mkdir -p "$D" && unzip -o "$Z" -d "$D" && ls -R "$D"
cat "$D"/*.html
```

Read the whole HTML. Note, in order:

- the title (`<h1>`)
- where each image sits and what caption or credit line follows it
- **every `<a href>`**, in document order, with its anchor text
- the heading structure

### Unwrap the Google redirect URLs

Docs exports wrap every link:

```
https://www.google.com/url?q=https://dupli-checker.org/&sa=D&source=editors&ust=...&usg=...
```

The real target is the `q=` parameter, URL-decoded. Ship the clean URL, never
the `google.com/url?q=` wrapper. That is the one link edit you are allowed to
make.

```bash
grep -o 'href="[^"]*"' "$D"/*.html | sed 's/.*q=//; s/&amp;sa=D.*//' | sort -u
```

### Check the blog does not already cover this

```bash
ls content/blog/ | grep -i <keyword>
grep -ril "<distinctive phrase>" content/blog/*.md
```

A near-duplicate is worth flagging to the user before writing 2,000 words.

## 2. Pick the slug

`snake_case` of the title, trimmed to the meaningful words. It is used in three
places and they must match:

```
content/blog/<slug>.md
assets/images/<slug>/<slug>_banner.webp
og_image: "images/<slug>/<slug>_banner.webp"
```

## 3. Convert the images to webp

Banners on this site are ~1920px wide and 50-220KB. `cwebp` is already
installed (`/opt/homebrew/bin/cwebp`); there is no ImageMagick.

```bash
mkdir -p assets/images/<slug>
cwebp -q 82 -resize 1920 0 -m 6 -mt "$D/images/image1.jpg" \
  -o assets/images/<slug>/<slug>_banner.webp
ls -la assets/images/<slug>/
```

`-resize 1920 0` keeps the aspect ratio. If the source is already narrower than
1920, drop the `-resize` flag rather than upscaling. Inline images from the
article get the same treatment with a descriptive name instead of `_banner`.

Read the image with the Read tool before writing alt text. Alt text should
describe what is actually in the frame, not restate the post title.

## 4. Write the front matter

```yaml
---
title: "<the article's title, unchanged>"
description: "<150-250 chars, written for search, says what the post concludes>"
date: 2026-09-02T00:30:00+05:30
lastmod: 2026-09-02T00:30:00+05:30
draft: false
tags: ["Primary Topic", "second", "third", "fourth"]
og_image: "images/<slug>/<slug>_banner.webp"
schemahowto: "<base64, see step 5>"
outputs:
  - HTML
  - AMP
---
```

Three traps here.

**Future dates silently drop the post.** Hugo skips future-dated content, so a
post dated `12:00` written at `00:50` builds into nothing and the failure is
invisible - the build succeeds and the page just does not exist. Compare `date`
against the real clock, not against today's calendar date:

```bash
date                                    # actual local time
hugo list future | grep <slug>          # must print nothing
```

**Omit `categories`.** `layouts/blog/single.html` picks the eyebrow as
`eyebrow` → first category → first tag → section. Adding `categories:
["Technology", …]` puts "Technology" above the title instead of the real
subject. Leave it out so tag #1 becomes the kicker, and make tag #1 the actual
topic. Follow the tag rules in `CLAUDE.md`: three to five tags, reused from the
existing list, matching capitalisation exactly.

```bash
grep -ho '^\s*tags:.*' content/blog/*.md | grep -o '"[^"]*"' | sort | uniq -c | sort -rn | head -60
```

**`lastmod`** follows the `CLAUDE.md` rule on any later edit (one day before
that day's date); on first publication it matches `date`.

## 5. Build `schemahowto`

It is a base64-encoded `<script type="application/ld+json">` block. For an
imported article, `TechArticle` is the right type (`HowTo` only if the post is
genuinely a numbered procedure). Write the JSON to the scratchpad, then encode:

```bash
cat > "$SCRATCHPAD/schema.json" <<'JEOF'
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "<title>",
  "description": "<same as front matter description>",
  "image": "https://pinggy.io/images/<slug>/<slug>_banner.webp",
  "author":    { "@type": "Organization", "name": "Pinggy" },
  "publisher": { "@type": "Organization", "name": "Pinggy", "url": "https://pinggy.io" },
  "datePublished": "<same as date>",
  "dateModified": "<same as lastmod>",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://pinggy.io/blog/<slug>/" },
  "articleSection": "<broad section>",
  "proficiencyLevel": "Intermediate",
  "keywords": "<comma-separated search terms>",
  "about": [
    { "@type": "Thing", "name": "<concept>", "description": "<one line>" }
  ]
}
</script>
JEOF
python3 -c "import base64;print(base64.b64encode(open('$SCRATCHPAD/schema.json','rb').read()).decode())"
```

Paste the output into `schemahowto: "…"`. Keep the JSON file in the scratchpad -
if the date or description changes later, edit it and re-encode rather than
hand-patching base64. `about` with four to six entries is the useful range.

## 6. Write the body

Open with the banner and its credit, in that order:

```
{{< image "<slug>/<slug>_banner.webp" "<alt text>" >}}

*Image source: {{< link href="<clean stock-photo URL>" >}}Unsplash{{< /link >}}*
```

If the source article credited the photo, that credit line is one of the links
you must preserve. Keep it directly under the image, pointing at the same URL.

Then: a two- or three-paragraph opening, a `{{% tldr %}}` block, and the
article's sections as `##` headings.

- **Every external link goes through `{{< link href="…" >}}text{{< /link >}}`**,
  which emits `target="_blank"`. Links to `pinggy.io` stay as plain Markdown.
- **Keep the source's section order and section count.** Rewriting prose is
  fine; reorganising the article is not, because it moves the links.
- **Rewrite paragraph by paragraph into the blog voice** (`CLAUDE.md` →
  "Blog voice"): lead with the concrete thing, cut *seamless / powerful /
  robust / leverage*, mix sentence lengths, use contractions, prefer specifics.
  Do not invent facts, numbers, versions, or benchmark results that were not in
  the source.
- **Leave the paragraph containing a sponsored link close to the original.**
  Heavy rewriting around an anchor tends to shift its context; tighten it, do
  not restructure it.
- **No em-dashes or en-dashes anywhere.** Use ` - `.
- **Skip `{{< llm-context >}}`.** It belongs only to how-to-with-Pinggy posts.
- **Do not bolt on a Pinggy CTA** if the source article had nothing to do with
  Pinggy. These posts stand on their own.

Headings read as sentence-case signposts. `## Why long-horizon work is a
different problem`, not `## The SHOCKING Truth About Agents`.

For a worked example of the whole shape, read
`content/blog/beginner_networking_concepts_for_student_developers.md` (guest
post with a stock-photo credit and an in-body sponsored link) or
`content/blog/long_horizon_tasks_with_ai_agents.md`.

## 7. Build and verify

```bash
hugo --gc --minify
P=public/blog/<slug>/index.html

ls -la $P                                              # exists at all -> date is not in the future
grep -o '<title>[^<]*</title>' $P
grep -o '<meta property="og:image" content="[^"]*"' $P
grep -o '"@type":"[^"]*"' $P | sort | uniq -c          # expect BlogPosting + TechArticle
grep -o 'bp-eyebrow[^<]*<[^>]*>[^<]*' $P | head -1     # the primary tag, not "Technology"
grep -o '<img src="/images/<slug>[^>]*>' $P            # width/height present, fetchpriority=high
grep -c '—\|–' $P                                      # must be 0
grep -c '<slug>' public/en/sitemap.xml                 # 1
ls -la public/amp/blog/<slug>/index.html               # AMP twin built
```

Then the link audit, which is the one that matters:

```bash
grep -o '<a href="https\?://[^"]*"[^>]*>' $P | grep -v 'pinggy\.io' | sort -u
```

Compare that list against the `q=` list from step 1. Same URLs, same count, no
`google.com/url` wrappers, every one carrying `target="_blank"`. The site
footer contributes Discord, LinkedIn, and X - ignore those three.

Check the AMP page carries the same links:

```bash
grep -o '<a href="https\?://[^"]*"' public/amp/blog/<slug>/index.html | sort -u
```

## 8. Commit

Two files (three if the article had inline images):

```
content/blog/<slug>.md
assets/images/<slug>/<slug>_banner.webp
```

Never `public/` or `resources/`. Keep the original `.zip` out of the repo too.
