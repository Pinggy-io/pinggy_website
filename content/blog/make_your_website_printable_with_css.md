---
title: "Make Your Website Printable with a Few Lines of CSS"
description: "Most sites print badly: a dark header, 18px text, blue links that vanish in grayscale. Here is a small @media print block that fixes it, and how to test it."
date: 2026-10-27T10:00:00+05:30
lastmod: 2026-10-27T10:00:00+05:30
draft: false
tags: ["CSS", "web development", "guide"]
og_image: "images/make_your_website_printable_with_css/make_your_website_printable_with_css_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIk1ha2UgWW91ciBXZWJzaXRlIFByaW50YWJsZSB3aXRoIGEgRmV3IExpbmVzIG9mIENTUyIsCiAgImRlc2NyaXB0aW9uIjogIk1vc3Qgc2l0ZXMgcHJpbnQgYmFkbHk6IGEgZGFyayBoZWFkZXIsIDE4cHggdGV4dCwgYmx1ZSBsaW5rcyB0aGF0IHZhbmlzaCBpbiBncmF5c2NhbGUuIEhlcmUgaXMgYSBzbWFsbCBAbWVkaWEgcHJpbnQgYmxvY2sgdGhhdCBmaXhlcyBpdCwgYW5kIGhvdyB0byB0ZXN0IGl0LiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9tYWtlX3lvdXJfd2Vic2l0ZV9wcmludGFibGVfd2l0aF9jc3MvbWFrZV95b3VyX3dlYnNpdGVfcHJpbnRhYmxlX3dpdGhfY3NzX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMjdUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0yN1QxMDowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL21ha2VfeW91cl93ZWJzaXRlX3ByaW50YWJsZV93aXRoX2Nzcy8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIldlYiBEZXZlbG9wbWVudCIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiQmVnaW5uZXIiLAogICJrZXl3b3JkcyI6ICJwcmludCBzdHlsZXNoZWV0LCBAbWVkaWEgcHJpbnQsIENTUyBwcmludCBzdHlsZXMsIHByaW50YWJsZSB3ZWJzaXRlLCBicmVhay1pbnNpZGUgYXZvaWQsIEBwYWdlIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkBtZWRpYSBwcmludCIsICJkZXNjcmlwdGlvbiI6ICJBIENTUyBtZWRpYSBxdWVyeSB0aGF0IGFwcGxpZXMgcnVsZXMgb25seSB3aGVuIHRoZSBwYWdlIGlzIHByaW50ZWQgb3Igc2F2ZWQgYXMgUERGLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQHBhZ2UiLCAiZGVzY3JpcHRpb24iOiAiQSBDU1MgYXQtcnVsZSB0aGF0IHNldHMgcGFwZXIgbWFyZ2lucyBhbmQgc2l6ZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogImJyZWFrLWluc2lkZSIsICJkZXNjcmlwdGlvbiI6ICJBIENTUyBwcm9wZXJ0eSB0aGF0IGNvbnRyb2xzIHdoZXRoZXIgYW4gZWxlbWVudCBtYXkgYmUgc3BsaXQgYWNyb3NzIHBhZ2VzLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "make_your_website_printable_with_css/make_your_website_printable_with_css_banner.webp" "Make your website printable: a web page on screen next to the same page as a clean A4 printout" >}}

Open any blog post, press Ctrl+P, and look at the preview. You usually get an 18px body font scaled onto A4, a dark navigation bar eating ink, and blue links that turn into pale gray in a black-and-white print. A 25-line `@media print` block fixes most of that, and you can check the result without a printer.

{{% tldr %}}
1. **Hide what makes no sense on paper** (nav, footer, buttons) inside `@media print`.
2. **Set body text in `pt`, not `px` or `rem`**, and use `@page` for the margins.
3. **Print the URL of each link**, because a reader can't click a sheet of paper.
4. **Use `break-inside: avoid` and `break-after: avoid`** so headings and figures don't get stranded or cut.
5. **Test with the browser's PDF output or headless Chromium**, not a real printer.
{{% /tldr %}}

## What the browser does when you print

When you print, the browser re-lays the page out for paper using the same CSS, with `@media print` rules switched on instead of the screen ones. Anything you didn't write a print rule for keeps its screen styling. That is where the dark header and the blue links come from: they are your screen styles, applied to a white page.

I built a one-page test document to see this: a black header bar, 18px system-ui text, a blue link, and a 25-line code block with a blue left border. I printed it to PDF with headless Chromium 153 using Playwright (`page.emulateMedia({ media: 'print' })` followed by `page.pdf()`). With no print rules, the PDF text starts with the word "Home" from the header, the link text is plain with no hint of where it points, and the code block keeps its screen look.

{{< image "make_your_website_printable_with_css/make_your_website_printable_with_css_screen_vs_print.webp" "Default print layout with a dark header and blue link next to the print-stylesheet layout with the URL written out" >}}

*The same HTML printed with and without a print stylesheet.*

## The block I use

Put this at the end of your stylesheet. Adjust the selectors to your own markup.

```css
@media print {
  @page { margin: 2cm; }

  header, nav, footer, .no-print { display: none; }

  body { font-size: 12pt; line-height: 1.5; max-width: none; padding: 0; color: #000; background: #fff; }
  h1 { font-size: 22pt; }
  h2 { font-size: 16pt; }
  h2, h3 { break-after: avoid; }

  a { color: inherit; text-decoration: underline; }
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.85em; }

  pre { border: 1px solid #000; background: none; font-size: 10pt; white-space: pre-wrap; break-inside: avoid; }
  img, figure, table { break-inside: avoid; max-width: 100%; }
}
```

Each piece does one job.

**Hide the chrome.** `display: none` removes elements from the printed layout entirely. Navigation, cookie banners, share buttons and footers are noise on paper. If you want one element visible only in print, such as an author credit, give it a class that is `display: none` on screen and `display: block` inside the print block.

**Use points.** A point is 1/72 of an inch, so 12pt is the same physical size on any printer. Pixels and `rem` are tied to the screen and the user's font settings. Body text at 12pt with a 1.5 line height is a safe default for A4 and Letter.

**Set margins with `@page`.** Browsers add their own default margin otherwise. `@page { margin: 2cm }` works in Chromium and Firefox. I only tested Chromium here, so check Safari yourself before relying on it.

**Print the URL.** `a[href^="http"]::after { content: " (" attr(href) ")" }` writes the destination after each external link. In my test the PDF text came out as "See the docs (https://example.com/docs)." The `^="http"` filter skips `#anchor` and `mailto:` links. On a link-heavy page this makes the text longer, so some people limit it to the main article body. Also: force links to `inherit` the text color. Light blue becomes light gray on a monochrome printer, and often unreadable.

## Keeping things from splitting across pages

The break properties tell the browser where it may start a new page:

- `break-after: avoid` on headings stops a heading from sitting alone at the bottom of a page.
- `break-inside: avoid` on figures and tables keeps each in one piece.
- `white-space: pre-wrap` on `pre` makes long code lines wrap instead of being cut off at the right margin.

The catch is code blocks. If a block is taller than a page, the browser has to split it anyway, and `break-inside: avoid` is ignored. A very long listing will still break mid-block, so keep the printed font small and the block short, or accept it.

{{< image "make_your_website_printable_with_css/make_your_website_printable_with_css_page_breaks.webp" "Two sets of A4 pages: without break rules a heading is stranded and a figure is split, with break rules both move whole to page 2" >}}

*The break rules move things; they don't shrink content to fit.*

## Testing without a printer

You don't need paper. Three ways, from quickest:

1. **DevTools.** In Chrome, open the command menu (Ctrl+Shift+P), run "Show Rendering", and set "Emulate CSS media type" to `print`. The page restyles live, though it won't show page breaks.
2. **Print preview.** Ctrl+P shows real pagination. Save as PDF to inspect it.
3. **Headless Chromium** for a repeatable check:

```js
const { chromium } = require('playwright');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:8000/');
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: 'print.pdf', format: 'A4', preferCSSPageSize: true });
```

Then `pdftotext -layout print.pdf -` shows what survived. If the nav text is still in the output, your selector missed it.

### Checking on a phone or tablet

Safari on iOS builds its print preview from the same print stylesheet, so a phone is a quick way to see how your page prints from AirPrint. If your dev server runs on your laptop, a tunnel gets you there without touching Wi-Fi settings:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8000 free.pinggy.io" >}}
{{</ ssh_command >}}

Open the HTTPS URL it prints on the phone, tap Share, then Print. Mobile browsers sometimes ignore bits of `@page`, so treat the phone as a second opinion and the desktop PDF as the reference.

## What it costs and what I'd skip

Print styles take maybe an hour the first time and then mostly stay out of the way. They rot though: add a new banner or sticky widget to the site and nobody notices it prints on top of the text. I would skip custom print layouts for app-like pages (dashboards, editors) and spend the effort on pages people actually read or keep: articles, docs, receipts, invoices, recipes, tickets.

A good habit is to add one line to your pre-release checklist: save the three most important pages as PDF and look at them. It takes two minutes, and teh result is usually an easy fix. And if someone does print your page, they will recieve something that looks like you cared.
