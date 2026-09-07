---
title: "Domains Can Now Say 'For Sale' Right in Their DNS Records"
description: "RFC 10023 defines a _for-sale TXT record so any domain can broadcast that it's available for purchase, with a price and contact method, straight through a DNS lookup. Here's how it works and whether it's worth using."
date: 2026-08-09T15:30:00+05:30
draft: false
tags: ["DNS", "domains", "RFC", "indie hacking", "networking", "domain investing"]
categories: ["Technology", "Networking", "DNS"]
og_image: "images/for_sale_dns_records/for_sale_dns_records_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFB1Ymxpc2ggYW4gUkZDIDEwMDIzIEZvci1TYWxlIEROUyBSZWNvcmQgZm9yIFlvdXIgRG9tYWluIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHB1Ymxpc2hpbmcgYSBfZm9yLXNhbGUgVFhUIHJlY29yZCB1bmRlciBSRkMgMTAwMjMgc28gYnV5ZXJzLCBicm9rZXJzLCBhbmQgdG9vbHMgY2FuIGRpc2NvdmVyIHRoYXQgeW91ciBkb21haW4gaXMgZm9yIHNhbGUgZGlyZWN0bHkgdGhyb3VnaCBhIEROUyBsb29rdXAuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk9wZW4geW91ciBETlMgcHJvdmlkZXIncyB6b25lIGVkaXRvciIsCiAgICAgICJ0ZXh0IjogIkxvZyBpbnRvIHdoaWNoZXZlciByZWdpc3RyYXIgb3IgRE5TIGhvc3QgbWFuYWdlcyB0aGUgZG9tYWluJ3Mgem9uZSBmaWxlIC0gQ2xvdWRmbGFyZSwgUm91dGUgNTMsIHlvdXIgcmVnaXN0cmFyJ3Mgb3duIHBhbmVsLCBvciBzaW1pbGFyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDcmVhdGUgYSBUWFQgcmVjb3JkIGF0IHRoZSBfZm9yLXNhbGUgbGVhZiIsCiAgICAgICJ0ZXh0IjogIkFkZCBhIG5ldyBUWFQgcmVjb3JkIHdpdGggdGhlIGhvc3QvbmFtZSBzZXQgdG8gX2Zvci1zYWxlLCB3aGljaCBtb3N0IHpvbmUgZWRpdG9ycyBleHBhbmQgdG8gX2Zvci1zYWxlLnlvdXJkb21haW4uY29tIGF1dG9tYXRpY2FsbHkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCB0aGUgbWFuZGF0b3J5IHZlcnNpb24gdGFnIGFuZCB5b3VyIGRldGFpbHMiLAogICAgICAidGV4dCI6ICJTZXQgdGhlIHJlY29yZCdzIHZhbHVlIHRvIHN0YXJ0IHdpdGggdj1GT1JTQUxFMTsgZm9sbG93ZWQgYnkgeW91ciBjb250YWN0IG1ldGhvZCwgcHJpY2UsIG9yIG5vdGUsIGZvciBleGFtcGxlIHY9Rk9SU0FMRTE7ZnVyaT1tYWlsdG86eW91QGV4YW1wbGUuY29tO2Z2YWw9VVNENTAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiS2VlcCB0aGUgVFRMIHNob3J0IiwKICAgICAgInRleHQiOiAiU2V0IHRoZSBUVEwgdG8gMzYwMCBzZWNvbmRzIG9yIGxlc3Mgc28gcHJpY2Ugb3IgY29udGFjdCBjaGFuZ2VzIHByb3BhZ2F0ZSBxdWlja2x5IGFuZCBzdGFsZSBvZmZlcnMgZG8gbm90IGxpbmdlciBpbiByZXNvbHZlciBjYWNoZXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlZlcmlmeSB0aGUgcmVjb3JkIHdpdGggZGlnIiwKICAgICAgInRleHQiOiAiUnVuIGRpZyArc2hvcnQgVFhUIF9mb3Itc2FsZS55b3VyZG9tYWluLmNvbSBmcm9tIGEgdGVybWluYWwgYW5kIGNvbmZpcm0gdGhlIHJldHVybmVkIHN0cmluZyBtYXRjaGVzIHdoYXQgeW91IHB1Ymxpc2hlZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRGVsZXRlIHRoZSByZWNvcmQgb25jZSB0aGUgZG9tYWluIHNlbGxzIG9yIGlzIG9mZiB0aGUgbWFya2V0IiwKICAgICAgInRleHQiOiAiUmVtb3ZlIHRoZSBfZm9yLXNhbGUgVFhUIHJlY29yZCBlbnRpcmVseS4gVGhlIHNwZWNpZmljYXRpb24gaGFzIG5vIG5vdC1mb3Itc2FsZSBmbGFnLCBzbyBhYnNlbmNlIG9mIHRoZSByZWNvcmQgaXMgdGhlIG9ubHkgd2F5IHRvIHNpZ25hbCB0aGUgZG9tYWluIGlzIG5vIGxvbmdlciBhdmFpbGFibGUuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "for_sale_dns_records/for_sale_dns_records_banner.webp" "Terminal showing a dig command querying a _for-sale DNS TXT record under RFC 10023, with a FOR SALE tag" >}}

Run this against a domain that's listed for sale under the new standard, and DNS itself tells you the asking price:

```bash
$ dig +short TXT _for-sale.example.com
"v=FORSALE1;fval=USD12500;furi=mailto:owner@example.com"
```

No broker, no parked landing page, no WHOIS scraping. Just a TXT record at a well-known name, defined this July in <a href="https://www.rfc-editor.org/rfc/rfc10023.html" target="_blank">RFC 10023</a>, "The `_for-sale` Underscored and Globally Scoped DNS Node Name." It's an informational RFC, written by Marco Davids of SIDN Labs (the research arm of the Dutch `.nl` registry), and it does one very small thing: it gives domain owners a standard, machine-readable place to say "this is for sale" without touching the domain's live site.

{{% tldr %}}
**What it is:** RFC 10023 defines a `_for-sale` DNS leaf node. Publish a TXT record there and any DNS client, anywhere, can discover that your domain is for sale, along with an optional price and contact method.

**The format:** `_for-sale.example.com IN TXT "v=FORSALE1;tag=value"` - a mandatory version tag plus one of `ftxt=` (free text), `furi=` (a `mailto:`, `tel:`, or `https:` link), `fval=` (currency + price), or `fcod=` (a proprietary broker code).

**Rules that matter:** one tag-value pair per record (stack multiple records for multiple fields), TTL of 3600 seconds or less, valid only at domain leaf nodes, and no "not for sale" flag - deleting the record is the only off switch.

**Who's using it:** SIDN has been piloting it with `.nl` registrars, and reports around 250,000 `.nl` domains carrying the record as of the end of 2025.

**The catch:** it's an unauthenticated, freeform TXT field. Nothing stops squatters, spam, or scam contact links from riding along, and the offer itself isn't legally binding - it's an advertisement, not a contract.
{{% /tldr %}}

## The problem it's actually solving

If you've ever tried to buy a domain that someone else registered but isn't using, you know the process is oddly manual for something this common. WHOIS or RDAP will tell you *who* registered a domain, but not whether they'd sell it. Domain marketplaces only cover the inventory sellers chose to list there. Parking pages work, but they mean replacing whatever the domain currently does with an ad-laden "buy this domain" splash - which is exactly the thing you don't want to do with a domain that's still serving traffic. And WHOIS-based cold outreach is a coin flip: you're emailing a registrant contact that may be privacy-shielded, forwarded through a proxy, or simply never checked.

There are roughly 387 million registered domains worldwide, and the mechanism for finding out which of them are actually for sale hasn't meaningfully changed since the 1990s. RFC 10023's pitch is narrow but real: let a domain answer "am I for sale?" the same way it already answers "where does mail for this domain go?" - through DNS, which every registrar, browser, and script already knows how to query.

## The record format, exactly

The spec keeps the format deliberately boring. A `_for-sale` leaf node under your domain holds one or more TXT records, each starting with a mandatory, case-sensitive version tag:

```
_for-sale.example.com. IN TXT "v=FORSALE1;furi=https://buy.example.com/"
```

Everything after `v=FORSALE1;` is free-form content, up to 244 octets, though the spec defines a small set of conventional tags:

| Tag | Meaning | Example |
|---|---|---|
| `ftxt=` | Human-readable note | `ftxt=Serious offers only` |
| `furi=` | Contact or info URI (`https:`, `mailto:`, `tel:`) | `furi=mailto:owner@example.com` |
| `fval=` | Asking price (currency code + amount) | `fval=USD12500` |
| `fcod=` | Proprietary broker/registry code | `fcod=XX-aHR0cHM6...` |

A few placement rules keep the mechanism from getting weird: `_for-sale` is only valid at a domain's leaf (top-level, second-level, or a level listed on the Public Suffix List) - `xyz._for-sale.example.com` doesn't count as a valid signal. Each record carries one tag-value pair; if you want to publish a price and a contact method, you publish two records in the same RRset rather than cramming both into one string. TTL should stay at or under 3600 seconds so a sold or delisted domain doesn't keep advertising itself out of a stale resolver cache. And - this is the detail that trips people up - there's no `not-for-sale` tag. The only way to signal you've taken a domain off the market is to delete the record.

You can try the lookup yourself right now against the project's published test domains, or check the demo tooling at <a href="https://rfc10023.nl/" target="_blank">rfc10023.nl</a>, which also hosts a syntax validator and an experimental MCP server for wiring the record into AI agent tooling:

```bash
$ dig +short TXT _for-sale.rfc10023.nl
```

## Who's actually running this

SIDN isn't just publishing a spec and walking away. The registry has been piloting `_for-sale` with `.nl` registrars since 2025, and by the end of that year had roughly 250,000 `.nl` domains carrying the record, according to <a href="https://www.techtimes.com/articles/322752/20260803/dns-gets-first-standard-commercial-intent-rfc-10023-enables-sale-tags.htm" target="_blank">reporting from Tech Times</a>. SIDN's stated goal, per that coverage, is "helping to make the domain name market more transparent and accessible, so that domain names can be traded more quickly, fairly and effectively." The intended readers of the record are explicitly plural: registrars, marketplaces, brokers, domain search tools, and WHOIS/RDAP services are all named as consumers in the spec itself, not just end-user buyers running `dig` by hand.

That's the realistic adoption path, too. <a href="https://domainincite.com/31851-now-you-can-plant-for-sale-signs-directly-into-your-domains" target="_blank">Domain Incite's writeup</a> points out the obvious friction: almost nobody hand-edits DNS zone files, so mainstream adoption depends on registrars shipping a "list this domain for sale" checkbox that quietly writes the TXT record for you. Some registrars have a business reason to build that (transaction fees on facilitated sales); others, tied to their own brokerage or parking products, have a business reason not to bother.

## Why the discussion got heated

The <a href="https://news.ycombinator.com/item?id=49221668" target="_blank">discussion thread</a> around the spec pulled in over 400 upvotes and 150-plus comments, and a good chunk of it wasn't about DNS mechanics at all - it was skepticism about the site hosting the spec, `specification.website`, which some commenters flagged as looking engineered for AI-agent consumption rather than human readers, calling it an SEO play dressed up as a standards document. That's a fair critique of the *presentation*, but it's worth separating from the RFC itself, which is a real, published IETF document with a named author and an implementation already running at registry scale.

The more substantive pushback was about the mechanism itself:

- **No off switch.** Once you publish a `_for-sale` record, the only way to retract it is deletion. There's no way to say "not for sale" as a positive assertion, which means any tooling built on this has to treat "record absent" and "never checked" identically.
- **Domain camping, formalized.** A few commenters worried this hands squatters a cleaner, more discoverable inventory list - instead of guessing which parked domains might flip, a scraper can now just query `_for-sale` across a zone and get a straight answer.
- **It's not binding.** One commenter drew a sharp distinction from an HTML "Buy Now" button: a DNS TXT record with a price in it is an advertisement, not an offer with legal consideration behind it. Nothing stops a seller from publishing `fval=USD500` and then telling an actual buyer the price is $50,000.
- **Unauthenticated, freeform content.** The spec's own security considerations section flags this directly: TXT records aren't sanitized by the DNS layer, so a `furi=` field is exactly as trustworthy as a link in an email. "How long until these links are swimming with malware," as one commenter put it, is a reasonable question for anything that auto-resolves URLs from DNS.

None of that is a reason the standard shouldn't exist - the same caveats apply to WHOIS contact data today. It's more that `_for-sale` inherits DNS's usual trust model: cheap to publish, cheap to fake, verify before you wire money anywhere.

## Is this useful if you're not a domain investor

Probably, in a smaller way than the domainer crowd will get out of it. If you've got a drawer full of registered-but-unused domains from abandoned side projects, adding a `_for-sale` record costs one TXT entry and might occasionally save you a "hey is this for sale?" email you never see because it went to a privacy-shielded WHOIS contact. It's also a genuinely nice building block if you're the kind of indie hacker who likes writing small tools: a bulk `_for-sale` scanner across a list of domains you're watching is a two-hour script, and unlike scraping marketplace listings, there's no rate-limited API or ToS to work around - it's just DNS.

The realistic ceiling is what the critics already named: without registrar-side tooling, this stays a hobbyist and domainer feature, not something the average domain owner ever touches. And until there's broad enough adoption that checking `_for-sale` is worth the DNS round-trip, it's one more thing for buyers to check rather than a replacement for existing marketplaces.

## Publishing your own record

If you want to try it on a domain you actually own, the whole thing is one DNS change:

1. Open your DNS provider's zone editor - Cloudflare, Route 53, or your registrar's own panel.
2. Add a TXT record with the host set to `_for-sale` (most editors expand this to `_for-sale.yourdomain.com` automatically).
3. Set the value to the mandatory version tag plus your details, for example:
   ```
   v=FORSALE1;furi=mailto:you@example.com;fval=USD5000
   ```
4. Keep the TTL at 3600 seconds or under.
5. Verify it propagated: `dig +short TXT _for-sale.yourdomain.com`.
6. When the domain sells or you change your mind, delete the record. There's no flag for "actually, not for sale" - removal is the only signal.

If you're testing this against a domain you're actively serving traffic from - a still-live side project you'd sell if the price was right - that's exactly the use case the RFC was written for: the record sits alongside your existing A/AAAA/CNAME records and doesn't touch what visitors see. If you're developing or testing a listener that watches for `_for-sale` records and want to poke at it from outside your own network before it's registrar-verified, a quick way to get a public endpoint in front of a local script is a tunnel like [Pinggy](https://pinggy.io) - `ssh -p 443 -R0:localhost:8080 free.pinggy.io` gets you an HTTPS URL pointed at whatever you're running on `localhost:8080`, without deploying anything.

## The honest read

RFC 10023 solves a real, narrow discovery problem with the smallest mechanism that could plausibly work: a TXT record and a version tag. That's also exactly why it's easy to abuse - there's no authentication, no escrow, no legal weight, and no way to definitively say "no longer for sale." It's a signal, not a marketplace. Whether it goes anywhere depends entirely on whether registrars build the one-click tooling that makes "list this domain for sale" as easy as any other DNS setting, because almost nobody is going to hand-write TXT records to sell a domain. SIDN's `.nl` pilot suggests that's not a hypothetical - a registry with 250,000 records already live is a real data point, not just a spec on paper. Worth a TXT record on that pile of parked domains you've been meaning to deal with either way.
