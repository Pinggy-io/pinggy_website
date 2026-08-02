# Static webpages for pinggy

This are static pages which are outside the scope of dashboard.pinggy.io

## Tasks

- [ ] Add a static site builder such as jekyll
  - [ ] Configure the static site builder to build the site into a path such as `_build`
  - [ ] Add a makefile to build the site. Also document the dependencies of the static site builder.
- [ ] Create a base layout that includes the head which captures the bootstrap themes and other js etc., the body will be extended.
- [ ] Make the homepage (index.html) use the layout.
- [ ] Build the following pages:
  - [ ] "Contact Us" page containing  Registered company address and domestic telephone number in India.
  - [ ] Terms of Service page mentioning cancellation and refund policies.
  - [ ] Privacy Policy page. It must describe the information collected, its purpose of use, to whom and how to disclose it and reasonable security practices followed to safeguard such information.
  - [ ] Cancellation & Refund Policy page. You can also submit Terms Of Service URL, if it has the Cancellation & Refund Policy mentioned abiding Indian laws.

  Tunnel shortcode example:
```

  {{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jupyter Notebook:" portstring="Jupyter Notebook Port" localport="1313" webdebugenabled=false keepalive=true webdebugport="8080" mode="tcp" headermodifications=`[{"mode":"u", "headername":"Host", "headerval": "localhost:3000"}, {"mode":"r", "headername":"Host2", "headerval": "localhost:3000"}]` >}}
{{< /pinggytunnel >}}
```

```
{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jupyter Notebook:" portstring="Jupyter Notebook Port" localport="1313" webdebugenabled=true keepalive=false webdebugport="8080" headermodifications=`[{"mode":"a", "headername":"Custom", "headerval": "abc"}]` >}}
{{< /pinggytunnel >}}
```

## Blog post front matter

These optional fields control the redesigned blog post template (`layouts/blog/single.html`).

### Table of contents ("In this article")

The "In this article" box is hidden by default. To show it on a post, add `toc: true` to that post's front matter:

```yaml
---
title: "My Post Title"
toc: true
---
```

When enabled, the box is built automatically from the post's `##` (h2) headings. It still hides itself if the post has fewer than two h2 sections, so a one-section post will not show a stub.

### Other optional fields

| Field | Purpose |
| --- | --- |
| `toc` | `true` shows the "In this article" table of contents (default: off). |
| `image` | Featured hero image at the top of the post. A path under `assets/images/...` is resized through the pipeline; an absolute URL is used as-is. Omit it and no hero is shown. |
| `imageCaption` | Caption text under the featured hero image. |
| `eyebrow` | Small uppercase kicker above the title. Falls back to the first category, then the first tag, then "Blog". |
| `author` | Name shown in the meta row (default: "Pinggy Blog"). |
| `schemahowto` | Base64-encoded `<script type="application/ld+json">` block (typically a HowTo schema) injected into the page head for SEO. Decoded via `base64Decode` in `layouts/partials/seoblogs.html`. |
| `slug` | Overrides the URL segment. Used on Spanish translations to give them a Spanish URL (see below). |

## Translated posts (English + Spanish)

English is the default language and stays at the site root (`/blog/foo/`). Spanish lives under `/es/`. Only selected posts are translated; everything else stays English-only and is simply absent from the Spanish site.

To translate `content/blog/foo.md`, add `content/blog/foo.es.md`:

```yaml
---
title: "Título en español"
slug: "titulo-en-espanol"      # -> /es/blog/titulo-en-espanol/
eyebrow: "Novedades"           # tags stay English, so set this explicitly
date: 2023-08-10T14:15:25+05:30   # keep the original publish date
lastmod: 2026-08-01T14:15:25+05:30
og_image: "images/foo/thumb.webp" # reuse the English image folder
---
```

Keep the English base filename (`foo.es.md`) - Hugo pairs translations by filename, and `slug` controls the URL independently. A language switcher and reciprocal `hreflang` tags appear automatically on both versions, and only on posts that have a translation.

Two things that bite:

- Use **root-absolute image paths** (`/doc_img/...`). Relative `../../../` paths break on Spanish AMP pages, which sit one directory deeper.
- `schemahowto` must be **re-encoded** in Spanish, not copied - it contains English prose. Omit it if you are not translating it.

UI strings come from `i18n/en.toml` / `i18n/es.toml`. The `pinggytunnel` shortcode is not translated yet, so posts using it need that done first.