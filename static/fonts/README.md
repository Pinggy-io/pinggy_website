# Self-hosted webfonts

The blog template (`assets/css/blog.css`) declares these locally instead of
loading them from `fonts.googleapis.com`. The Google Fonts stylesheet was
render-blocking and chained to a second origin, costing roughly a second of
blocked render on mobile.

Each file is the **variable** build Google serves, so one file covers every
weight the blog uses, and the `latin` / `latin-ext` split matches Google's own
`unicode-range` subsetting - the `latin-ext` cuts only download when a page
actually contains those characters.

| Family | Weights | Files | Upstream |
| --- | --- | --- | --- |
| Plus Jakarta Sans | 300-800 | `plus-jakarta-sans-*.woff2` | <https://fonts.google.com/specimen/Plus+Jakarta+Sans> |
| Source Sans 3 | 400-700 + italic 400 | `source-sans-3-*.woff2` | <https://fonts.google.com/specimen/Source+Sans+3> |
| JetBrains Mono | 400-600 | `jetbrains-mono-*.woff2` | <https://fonts.google.com/specimen/JetBrains+Mono> |
| Uncut Sans | 400-700 + obliques | `uncut-sans/*.otf` | <https://uncut.wtf/sans-serif/uncut-sans/> |

All four are licensed under the **SIL Open Font License 1.1**, which permits
redistribution as long as the licence travels with the fonts. See
`uncut-sans/SIL Open Font License.txt` for the full text; the same terms cover
the three Google-hosted families, whose upstream `OFL.txt` lives in each
family's repository linked above.

## Refreshing a font

Fetch the CSS with a modern browser User-Agent (older ones get `.ttf` rather
than `.woff2`), keep only the `latin` and `latin-ext` blocks, and download the
URLs they point at:

```
curl -A "Mozilla/5.0 ... Chrome/120.0.0.0 ..." \
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300..800&display=swap"
```

Then update the matching `@font-face` block at the top of
`assets/css/blog.css`. Keep the `unicode-range` values verbatim - they are what
stop the `latin-ext` files from loading on ordinary English and Spanish posts.

Two faces are preloaded in `layouts/blog/baseof.html` (Plus Jakarta Sans and
Source Sans 3 latin, plus JetBrains Mono for code). If you add a font that
renders above the fold, preload it too, or its late swap will show up as a
layout shift.
