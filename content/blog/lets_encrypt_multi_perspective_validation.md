---
title: "How Let's Encrypt Validates Your Domain From 7 Places"
description: "Let's Encrypt goes from 5 to 7 validation requests per challenge on November 10, 2026. Learn how multi-perspective validation stops BGP hijacks and what breaks with geoblocking."
date: 2026-10-19T11:00:00+05:30
lastmod: 2026-10-19T11:00:00+05:30
draft: false
tags: ["Let's Encrypt", "TLS", "security", "DNS"]
og_image: "images/lets_encrypt_multi_perspective_validation/lets_encrypt_multi_perspective_validation_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBMZXQncyBFbmNyeXB0IFZhbGlkYXRlcyBZb3VyIERvbWFpbiBGcm9tIDcgUGxhY2VzIiwKICAiZGVzY3JpcHRpb24iOiAiTGV0J3MgRW5jcnlwdCBnb2VzIGZyb20gNSB0byA3IHZhbGlkYXRpb24gcmVxdWVzdHMgcGVyIGNoYWxsZW5nZSBvbiBOb3ZlbWJlciAxMCwgMjAyNi4gTGVhcm4gaG93IG11bHRpLXBlcnNwZWN0aXZlIHZhbGlkYXRpb24gc3RvcHMgQkdQIGhpamFja3MgYW5kIHdoYXQgYnJlYWtzIHdpdGggZ2VvYmxvY2tpbmcuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2xldHNfZW5jcnlwdF9tdWx0aV9wZXJzcGVjdGl2ZV92YWxpZGF0aW9uL2xldHNfZW5jcnlwdF9tdWx0aV9wZXJzcGVjdGl2ZV92YWxpZGF0aW9uX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMTlUMTE6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0xOVQxMTowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL2xldHNfZW5jcnlwdF9tdWx0aV9wZXJzcGVjdGl2ZV92YWxpZGF0aW9uLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiU2VjdXJpdHkiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIkxldCdzIEVuY3J5cHQgbXVsdGktcGVyc3BlY3RpdmUgdmFsaWRhdGlvbiwgTVBJQywgQkdQIGhpamFjaywgZG9tYWluIHZhbGlkYXRpb24sIEFDTUUgSFRUUC0wMSwgZ2VvYmxvY2tpbmcsIGNlcnRib3QgcmVuZXcsIEROUy0wMSIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJNdWx0aS1wZXJzcGVjdGl2ZSBpc3N1YW5jZSBjb3Jyb2JvcmF0aW9uIiwgImRlc2NyaXB0aW9uIjogIkNoZWNraW5nIGRvbWFpbiBjb250cm9sIGZyb20gc2V2ZXJhbCBuZXR3b3JrIHZhbnRhZ2UgcG9pbnRzIGJlZm9yZSBhIENBIGlzc3VlcyBhIGNlcnRpZmljYXRlLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQkdQIGhpamFja2luZyIsICJkZXNjcmlwdGlvbiI6ICJBbm5vdW5jaW5nIGFub3RoZXIgbmV0d29yaydzIElQIHByZWZpeCB0byByZWRpcmVjdCB0cmFmZmljLCBpbmNsdWRpbmcgQ0EgdmFsaWRhdGlvbiByZXF1ZXN0cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkFDTUUgSFRUUC0wMSBjaGFsbGVuZ2UiLCAiZGVzY3JpcHRpb24iOiAiUHJvdmluZyBkb21haW4gY29udHJvbCBieSBzZXJ2aW5nIGEgdG9rZW4gb3ZlciBIVFRQIG9uIHBvcnQgODAuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJDQS9Ccm93c2VyIEZvcnVtIEJhc2VsaW5lIFJlcXVpcmVtZW50cyAzLjIuMi45IiwgImRlc2NyaXB0aW9uIjogIlRoZSBydWxlIHRoYXQgc2V0cyB0aGUgbnVtYmVyIG9mIHJlbW90ZSBwZXJzcGVjdGl2ZXMsIHF1b3J1bSBhbmQgUklSIGRpdmVyc2l0eS4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "lets_encrypt_multi_perspective_validation/lets_encrypt_multi_perspective_validation_banner.webp" "Validated from 7 places: one primary and six remote perspectives all checking the same web server" >}}

Starting November 10, 2026 (staging from October 27), Let's Encrypt checks every domain challenge from 7 networks instead of 5: the primary datacenter plus 6 remote perspectives, up from 4. The reason is a rule in the CA/Browser Forum Baseline Requirements that reaches 5 remote perspectives on December 15, 2026, and the reason for the rule is a specific attack: hijacking a few internet routes just long enough to answer a certificate challenge in your name.

If your certificates renew without anyone touching them, you will probably never notice. If your web server sits behind a country-based firewall rule, a split-horizon DNS setup, or a rate limiter that bans unfamiliar IPs, this is the change that can break your renewals.

{{% tldr %}}
1. **A BGP hijack only captures part of the internet.** Validating from several networks means the attacker has to fool most of them at once, not one.
2. **Let's Encrypt will send 7 requests per challenge** (1 primary, 6 remote) from November 10, 2026. Validation passes only if the primary and a quorum of the remote perspectives see the right answer.
3. **The Baseline Requirements set the floor:** 5 remote perspectives from December 15, 2026, at least 500 km apart, covering at least 2 Regional Internet Registry regions.
4. **Geoblocking is the common way to break it.** Let's Encrypt publishes no validation IP list and says they change, so country allowlists go stale.
5. **Scope the exception to the challenge path** or switch to DNS-01, and test with `certbot renew --dry-run` before the cutover.
{{% /tldr %}}

## What a hijack does to domain validation

Before a CA signs a certificate for `example.com`, it needs proof that the requester controls the domain. With the HTTP-01 challenge, the CA gives the ACME client a token, the client serves it at `http://example.com/.well-known/acme-challenge/<token>`, and the CA fetches it. With DNS-01, the token goes into a TXT record instead.

Both checks trust the network path between the CA and your server. BGP, the protocol that decides how packets get between networks, has no built-in way to verify who may announce which IP prefix. An attacker who announces your server's prefix from their own network can pull some of the internet's traffic toward themselves. If the CA's validation request is in that traffic, the attacker answers the challenge and gets a certificate for a domain they do not own.

This is not hypothetical. Researchers at Princeton demonstrated it against real CAs and published it at USENIX Security 2018, and later worked with Let's Encrypt to deploy the defence. Their 2021 paper, {{< link href="https://www.usenix.org/conference/usenixsecurity21/presentation/birge-lee" >}}"Experiences Deploying Multi-Vantage-Point Domain Validation at Let's Encrypt"{{< /link >}}, covers how it went.

{{< image "lets_encrypt_multi_perspective_validation/bgp_hijack_single_vs_multi_perspective.webp" "Two panels: one validation request lands on an attacker and a certificate is issued, while seven requests split between the real server and the attacker and the quorum fails" >}}

*A hijack that captures one path rarely captures all of them. Sources: Let's Encrypt, Princeton researchers.*

## Why checking from several places works

The attack only works if the attacker's route wins for the CA's request. In an "equally-specific prefix" hijack, the attacker announces the same prefix length as the legitimate owner. Each network on the internet then picks one announcement by its own routing policy, so the internet splits: some networks send traffic to the victim, some to the attacker. Which side a given vantage point lands on depends on where it sits.

So validate from many places. The primary datacenter makes the normal request, and remote perspectives in other networks and regions repeat it independently. To get a certificate, the attacker would have to win the route for the primary and for most of the remote perspectives, at the same moment, which is much harder than winning one.

It has a limit worth knowing. A *more specific* announcement (a /24 over your /22) wins everywhere, so every perspective is fooled equally. The Baseline Requirements describe the goal as protection against equally-specific prefix hijacks for this reason. More-specific announcements are the job of route filtering and RPKI, not of this check. Let's Encrypt's own 2020 announcement says the same: it raises the cost and makes an attack more visible, it does not make it impossible.

## Let's Encrypt: 4 remote perspectives now, 6 from November

Let's Encrypt began multi-perspective validation in February 2020. In February 2024 it announced a move from 2 to 4 remote perspectives (5 requests per validation), live in production by March 27, 2024. On October 15, 2026 it announced the next step:

- Staging: Tuesday, October 27, 2026.
- Production: Tuesday, November 10, 2026, "if staging goes well".
- Each validation makes 7 requests: 1 from the primary datacenter, 6 from remote perspectives.
- Issuance needs the primary and "a quorum of remote perspectives" to see the correct response. The announcement does not state the quorum size, so I won't guess it.

Let's Encrypt expects "little to no impact to users". For most sites that is right.

## What the rules require

The Let's Encrypt change follows section 3.2.2.9 of the CA/Browser Forum {{< link href="https://github.com/cabforum/servercert/blob/main/docs/BR.md" >}}Baseline Requirements{{< /link >}}, Multi-Perspective Issuance Corroboration. As of October 19, 2026 the phased schedule reads:

| Effective | Remote perspectives required |
|---|---|
| 2025-03-15 | at least 2 |
| 2026-03-15 | at least 3, corroborators in at least 2 RIR regions |
| 2026-06-15 | at least 4, same RIR rule |
| 2026-12-15 | at least 5, same RIR rule |

The details that shape how CAs build this:

- Two perspectives count as distinct only if they are at least 500 km apart.
- The quorum table allows 1 non-corroboration with 2 to 5 remote perspectives, and 2 with 6 or more.
- Perspectives must not share a DNS cache, so poisoning one resolver cannot fool the others.
- Remote perspectives talk to the CA over an authenticated, encrypted channel.
- A failed attempt can be retried immediately, but corroborations from earlier attempts do not carry over.
- CAA record checks get the same treatment, and corroborating evidence for CAA may be reused for up to 398 days.

The RIR rule is why a CA cannot put all its perspectives in one cloud region, or even one continent: the corroborating perspectives must span at least 2 of ARIN, RIPE NCC, APNIC, LACNIC and AFRINIC service regions.

{{< image "lets_encrypt_multi_perspective_validation/multi_perspective_timeline.webp" "Timeline bars from 2024 to 2027 comparing Let's Encrypt remote perspectives (2, 4, then 6) with the Baseline Requirements minimum (none, 2, 3, 4, then 5)" >}}

*Data: CA/Browser Forum Baseline Requirements 3.2.2.9 and Let's Encrypt community announcements, as of October 2026.*

## What breaks on your side

One HTTP-01 challenge now produces seven separate requests for the same token from seven networks. Anything that treats unfamiliar IPs as hostile can reject some of them. Let's Encrypt's FAQ says it does not publish its validation IP addresses and that they may change at any time, so you cannot allowlist them.

The failures I would check first:

- **Country-based firewall rules.** Let's Encrypt's {{< link href="https://community.letsencrypt.org/t/multi-perspective-validation-geoblocking-faq/218158/1" >}}geoblocking FAQ{{< /link >}} says it does not recommend geoblocking validation traffic, because certificates are valid worldwide and the sources shift over time.
- **Rate limiters and fail2ban rules** that ban an IP after a burst of requests for a path that returns 404 or a redirect.
- **Split-horizon or geo-aware DNS** that answers differently by resolver location. Perspectives do not share a DNS cache, and each must see the same challenge.
- **DNSSEC problems.** A broken signature fails validation for every perspective, and the Baseline Requirements have required DNSSEC validation on the primary since March 15, 2026.

Typical error text in community threads is `Timeout during connect (likely firewall problem)` or `During secondary validation: Remote PerformValidation RPC failed`. "Secondary" is the remote perspectives.

## Checking your own server

I haven't run these against the 6-perspective setup, which hits staging on October 27. The commands themselves are standard certbot and nginx.

First, a dry run against the Let's Encrypt staging environment. Repeat it after October 27:

```bash
sudo certbot renew --dry-run
```

Then look at the validation requests for the token in your web server log. Each challenge should show several requests from different source IPs for `/.well-known/acme-challenge/`, close together in time:

```bash
sudo grep acme-challenge /var/log/nginx/access.log | tail -n 20
```

If a challenge fails and the log shows fewer requests than you expect, the missing ones may have been dropped before they reached nginx, so check your CDN or firewall logs too.

If a geo rule is the problem, open only the challenge path to the world. In nginx on port 80:

```nginx
location /.well-known/acme-challenge/ {
    root /var/www/acme;
}
```

Put this location ahead of whatever does the country check, and keep your redirect to HTTPS for every other path.

If you do not want any inbound port 80, use DNS-01. Control then depends on worldwide access to your nameservers, not your web server:

```bash
sudo certbot certonly --dns-cloudflare \
  --dns-cloudflare-credentials ~/.secrets/cloudflare.ini \
  -d example.com -d "*.example.com"
```

Scope the API token to the single zone, or delegate `_acme-challenge` to a dedicated validator such as acme-dns.

{{< image "lets_encrypt_multi_perspective_validation/acme_http01_seven_requests.webp" "Seven validation requests from Let's Encrypt cross a country-based firewall rule: five reach nginx on port 80 and two are dropped" >}}

*A country filter can block some of the 7 requests even when the challenge path is open.*

## The upshot

Let's Encrypt itself is moving to 6 remote perspectives on November 10, 2026, and every public CA must be at 5 by December 15. For you it comes down to three checks:

- Keep `/.well-known/acme-challenge/` on port 80 reachable from anywhere, or use DNS-01.
- Make DNS answers for the validated name identical from every location, and keep DNSSEC valid if you sign.
- Run `certbot renew --dry-run` after October 27 and read the logs while it runs.

For the background on what a certificate actually proves, see the post on [TLS tunnels](/blog/tls_tunnels/) and the explainer on [certificate authority errors](/blog/err_cert_authority_invalid_error/).
