---
title: "Outlook Is Rejecting Email From Domains Without DMARC"
description: "Since November 5, 2026, Outlook.com and Hotmail bounce some mail with 550 5.7.1 from domains with no DMARC record. How to check your domain with dig, publish a safe record, and fix alignment."
date: 2026-11-09T10:00:00+05:30
lastmod: 2026-11-09T10:00:00+05:30
draft: false
tags: ["DMARC", "email deliverability", "DNS", "troubleshooting"]
og_image: "images/outlook_rejects_email_without_dmarc/outlook_rejects_email_without_dmarc_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIk91dGxvb2sgSXMgUmVqZWN0aW5nIEVtYWlsIEZyb20gRG9tYWlucyBXaXRob3V0IERNQVJDIiwKICAiZGVzY3JpcHRpb24iOiAiU2luY2UgTm92ZW1iZXIgNSwgMjAyNiwgT3V0bG9vay5jb20gYW5kIEhvdG1haWwgYm91bmNlIHNvbWUgbWFpbCB3aXRoIDU1MCA1LjcuMSBmcm9tIGRvbWFpbnMgd2l0aCBubyBETUFSQyByZWNvcmQuIEhvdyB0byBjaGVjayB5b3VyIGRvbWFpbiB3aXRoIGRpZywgcHVibGlzaCBhIHNhZmUgcmVjb3JkLCBhbmQgZml4IGFsaWdubWVudC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvb3V0bG9va19yZWplY3RzX2VtYWlsX3dpdGhvdXRfZG1hcmMvb3V0bG9va19yZWplY3RzX2VtYWlsX3dpdGhvdXRfZG1hcmNfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMS0wOVQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTA5VDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvb3V0bG9va19yZWplY3RzX2VtYWlsX3dpdGhvdXRfZG1hcmMvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJFbWFpbCIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAib3V0bG9vayA1NTAgNS43LjEsIG1lc3NhZ2UgbGFja3MgU1BGL0RLSU0vRE1BUkMgYXV0aCByZWNvcmRzLCBETUFSQyByZWNvcmQsIGhvdG1haWwgcmVqZWN0aW5nIGVtYWlsLCBETUFSQyBhbGlnbm1lbnQiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiRE1BUkMiLCAiZGVzY3JpcHRpb24iOiAiQSBETlMgcG9saWN5IHRoYXQgdGVsbHMgcmVjZWl2ZXJzIHdoYXQgdG8gZG8gd2hlbiBTUEYgYW5kIERLSU0gZG8gbm90IGFsaWduIHdpdGggdGhlIEZyb20gZG9tYWluLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiRE1BUkMgYWxpZ25tZW50IiwgImRlc2NyaXB0aW9uIjogIlNQRiBvciBES0lNIG11c3QgcGFzcyBmb3IgdGhlIHNhbWUgZG9tYWluIGFzIHRoZSBGcm9tIGFkZHJlc3MuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICI1NTAgNS43LjEiLCAiZGVzY3JpcHRpb24iOiAiVGhlIE91dGxvb2suY29tIGJvdW5jZSBmb3IgbWFpbCBmcm9tIGRvbWFpbnMgd2l0aCBubyBETUFSQyByZWNvcmQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJES0lNIiwgImRlc2NyaXB0aW9uIjogIkEgc2lnbmF0dXJlIG9uIG91dGdvaW5nIG1haWwgdmVyaWZpZWQgYWdhaW5zdCBhIHB1YmxpYyBrZXkgaW4gRE5TLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "outlook_rejects_email_without_dmarc/outlook_rejects_email_without_dmarc_banner.webp" "Outlook now bounces mail without DMARC: a message from signup@example.com is rejected with 550 5.7.1, and the fix is the TXT record v=DMARC1; p=none" >}}

Since November 5, 2026, Outlook.com, Hotmail, Live and MSN have been bouncing some messages with `550 5.7.1 Message rejected: Message lacks SPF/DKIM/DMARC Auth Records`. The common thread in the reports is a sending domain with no DMARC record at all. The fix is one DNS TXT record, but it only does something useful if your SPF or DKIM already lines up with your From address.

Microsoft hasn't published an announcement, so everything below comes from mail operators' logs and not from Microsoft. I'll flag where that matters.

{{% tldr %}}
1. Outlook.com started returning **`550 5.7.1` for some mail from domains with no DMARC record** on November 5, 2026, and it hits small senders too, not just bulk ones.
2. Check with `dig +short TXT _dmarc.yourdomain.com`. **No output means no record.**
3. Publish `v=DMARC1; p=none` as a TXT record at `_dmarc`. It doesn't change how anyone treats your mail, it only makes the policy visible.
4. DMARC passes only when **SPF or DKIM passes for the same domain as your From address**. Microsoft 365's default `onmicrosoft.com` DKIM signature doesn't count.
{{% /tldr %}}

The running example here is a small SaaS at `example.com` that sends signup and password-reset mail through a transactional email provider. Some of its users have `@hotmail.com` addresses, and some of those mails vanish.

## What the bounce says and who gets it

The text is `550 5.7.1 Message rejected: Message lacks SPF/DKIM/DMARC Auth Records`. On the first day it had no suffix. Later bounces carry `(AS9031519)` at the end, a code that, as far as I can tell, isn't in Microsoft's public documentation.

Three details matter:

- It's **intermittent**. One message bounces and the next gets through, so a mail that lands in teh Outlook inbox doesn't prove your domain is fine.
- It hits **low-volume senders**. The older rule from May 2025, which requires SPF, DKIM and a DMARC record at `p=none` or stricter, applies to senders above 5,000 messages a day and returns `550 5.7.515 Access denied`. The new `5.7.1` bounce reaches domains sending a few dozen mails.
- It's about **consumer addresses**: `outlook.com`, `hotmail.com`, `live.com`, `msn.com` and their country variants. Reports say business Microsoft 365 mailboxes on custom domains aren't affected.

You may also see `550 5.7.23`, which is a plain SPF failure and sometimes appears just before the `5.7.1` text. Don't let the "SPF validation error" headlines in the press mislead you: in the cases I read, SPF passed and the missing piece was the DMARC record.

{{< image "outlook_rejects_email_without_dmarc/mail_auth_rules_timeline.webp" "Timeline of DMARC requirements: Google and Yahoo in February 2024, Microsoft for high-volume senders in May 2025, and Outlook.com bouncing some small senders from November 5, 2026" >}}

*Sources: {{< link href="https://db8.nl/en/blog/outlook-hotmail-rejects-email-without-dmarc" >}}db8.nl{{< /link >}} and {{< link href="https://mailroute.net/blog/outlook-rejecting-email-without-dmarc" >}}MailRoute{{< /link >}}, November 2026.*

## What DMARC actually checks

SPF and DKIM each answer a narrow question. SPF asks whether the server that delivered the mail is listed in the DNS of the envelope sender's domain (the `Return-Path`). DKIM asks whether a signature in the headers verifies against a public key published by the domain in the signature's `d=` tag. Neither of them looks at the From address the human sees.

DMARC ({{< link href="https://www.rfc-editor.org/rfc/rfc7489" >}}RFC 7489{{< /link >}}) closes that gap. It passes when **at least one** of these is true:

- SPF passes and the SPF domain matches the From domain.
- DKIM passes and the `d=` domain matches the From domain.

"Matches" is called alignment. By default it's relaxed, meaning `mail.example.com` aligns with `example.com`, but `example.onmicrosoft.com` does not.

And the policy lives in DNS: a TXT record at `_dmarc.example.com` that says what a receiver should do when neither check aligns (`none`, `quarantine` or `reject`) and where to send reports. No record means no policy, and that is what Outlook seems to be punishing now.

{{< image "outlook_rejects_email_without_dmarc/dmarc_alignment_decision.webp" "Flowchart of how Outlook.com evaluates DMARC: a missing record leads to 550 5.7.1, otherwise aligned SPF or DKIM gives a pass" >}}

*The record lookup comes first, so a domain with no DMARC record can be bounced before alignment matters.*

## Check your own domain

Ask DNS for the record:

```bash
dig +short TXT _dmarc.example.com
```

If it prints nothing, there's no record. On Windows, `nslookup -type=TXT _dmarc.example.com` does the same.

I couldn't run `dig` in the sandbox I wrote this in because plain DNS was blocked, so I asked the same question through Cloudflare's DNS-over-HTTPS endpoint on November 9, 2026. These are the TXT strings that came back, which is what `dig +short` prints:

```text
_dmarc.gmail.com    "v=DMARC1; p=none; sp=quarantine; rua=mailto:mailauth-reports@google.com"
_dmarc.outlook.com  "v=DMARC1; p=none; sp=quarantine; pct=100; rua=mailto:rua@dmarc.microsoft; ruf=mailto:ruf@dmarc.microsoft; fo=1"
_dmarc.github.com   "v=DMARC1; p=quarantine; sp=reject; pct=100; rua=mailto:dmarc@github.com; ruf=mailto:dmarc@github.com; fo=1"
```

Note that `gmail.com` itself publishes `p=none`. Nobody is asking you to be strict. They're asking you to have a record.

The DoH call, if you want the same fallback:

```bash
curl -s -H 'accept: application/dns-json' \
  'https://cloudflare-dns.com/dns-query?name=_dmarc.example.com&type=TXT'
```

You can also read it off a delivered message. In the `Authentication-Results` header, Outlook writes `dmarc=bestguesspass` when no DMARC TXT record exists for the domain, according to {{< link href="https://dmarcdkim.com/blog/outlook-message-lacks-spf-dkim-dmarc-auth-records" >}}DmarcDkim.com{{< /link >}}, quoting Microsoft's wording. Treat that as "missing record" even though the word is "pass".

## Publish a record that changes nothing

Add one TXT record at your DNS host (not inside Microsoft 365, which has no place for it):

| Type | Name | Value |
|------|------|-------|
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com` |

`p=none` is monitor-only. Receivers keep treating your mail exactly as before. The `rua` tag is optional and asks receivers to send you a daily aggregate XML report of who is sending as your domain. Use a dedicated mailbox for it, because the reports pile up.

Two ways to break it:

- **Two `_dmarc` records.** Receivers ignore both, so you may recieve nothing at all. If a previous admin set one up, edit it instead of adding another.
- **A typo in the version.** The value must start with `v=DMARC1`. A record that starts `v=quarantine` is invalid.

Don't start at `p=reject`. Any service you forgot that sends as your domain (a CRM, a helpdesk, an old cron job) will start bouncing the day you flip it.

DNS caches for the record's TTL. On Cloudflare it's usually live within a minute or two, other hosts can take longer. Re-run the `dig` and wait for it to answer before you resend anything.

## Make sure something aligns

A DMARC record on top of broken authentication doesn't help. Check each sender that uses your From domain:

- **Transactional provider.** Most give you a DKIM CNAME or TXT record to publish, and sign with `d=example.com` once it's verified. That aligns. If the provider only signs with its own domain, DKIM passes but doesn't align, and you're relying on SPF alignment, which needs a custom return-path domain.
- **Microsoft 365.** Until you enable DKIM for your own domain, it signs with `onmicrosoft.com`, which doesn't align. Publish the `selector1` and `selector2` CNAME records, then turn DKIM on in the Defender portal.
- **Google Workspace.** Generate the key in the Admin console and publish the `google._domainkey` TXT record.
- **Forwarded mail.** SPF breaks when a message is forwarded, so DKIM is the check you want to be passing.

One aligned pass is enough. DKIM is the safer one to rely on because it survives forwarding.

To test, send yourself a mail at an Outlook.com address and open the original headers. You're looking for `dkim=pass header.d=example.com` or `spf=pass` with a Return-Path on your domain, and then `dmarc=pass`.

## What isn't confirmed

I'd be wary of anyone who says they know exactly what Microsoft changed.

- Microsoft hasn't explained it. The "missing DMARC record" explanation comes from operators like {{< link href="https://mailroute.net/blog/outlook-rejecting-email-without-dmarc" >}}MailRoute{{< /link >}} reading their own bounce logs, plus admin reports on Microsoft's Q&A forums.
- It might be a deliberate rollout or an overly broad filter. The fix is the same either way.
- Some admins report the same bounce from domains that do have SPF, DKIM and DMARC all configured. If that's you, double-check the record is valid and unique and the alignment holds, then escalate to Microsoft.
- Several of the posts I read are from vendors who sell DMARC or email infrastructure. The advice is sound and the DNS commands are checkable, but they have a stake.
- Because bounces are intermittent, "I added the record and the mail went through" is weak evidence by itself.

## Tighten it later

Leave `p=none` for a few weeks and read the `rua` reports. They show every source sending as `example.com` and whether it passes. When every legitimate sender shows up aligned, move to `p=quarantine`, then `p=reject`. Until then, `p=none` does nothing to stop someone spoofing your domain. It only satisfies the receivers that want the record.

If you want the broader picture of MX, SPF and DKIM lookups, the earlier post on [diagnosing email deliverability with DNS records](/blog/how_to_diagnose_email_deliverability_issues_using_dns_records/) walks through all four records.

## Conclusion

Run `dig +short TXT _dmarc.yourdomain.com` for every domain you send from, including the side projects. Publish the `p=none` record where it's missing, confirm one sender aligns, and recheck your logs for `5.7.1` bounces after a few days. If the bounces stop, you're done. If they don't, keep the full bounce message and the original headers, because that's what Microsoft support will ask for.
