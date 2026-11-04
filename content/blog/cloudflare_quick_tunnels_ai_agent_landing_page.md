---
title: "Cloudflare's New Quick Tunnels Page Is Built for AI Agents. It Looks Built by One Too."
description: "Cloudflare refreshed the trycloudflare.com landing page around AI agent workflows, and Hacker News found the AI-generated design tells within hours. What actually changed, what didn't, and how the accountless-tunnel tradeoffs stack up against Pinggy and others."
date: 2026-09-19T11:00:00+05:30
draft: false
tags: ["Cloudflare", "tunneling", "AI agents", "developer tools"]
categories: ["Technology", "Developer Tools"]
og_image: "images/cloudflare_quick_tunnels_ai_agent_landing_page/cloudflare_quick_tunnels_ai_agent_landing_page_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJBcnRpY2xlIiwKICAiaGVhZGxpbmUiOiAiQ2xvdWRmbGFyZSdzIE5ldyBRdWljayBUdW5uZWxzIFBhZ2UgSXMgQnVpbHQgZm9yIEFJIEFnZW50cy4gSXQgTG9va3MgQnVpbHQgYnkgT25lIFRvby4iLAogICJkZXNjcmlwdGlvbiI6ICJDbG91ZGZsYXJlIHJlZnJlc2hlZCB0aGUgdHJ5Y2xvdWRmbGFyZS5jb20gbGFuZGluZyBwYWdlIGFyb3VuZCBBSSBhZ2VudCB3b3JrZmxvd3MuIEhhY2tlciBOZXdzIGZvdW5kIHRoZSBBSS1nZW5lcmF0ZWQgZGVzaWduIHRlbGxzIHdpdGhpbiBob3Vycy4gQSBsb29rIGF0IHdoYXQgYWN0dWFsbHkgY2hhbmdlZCwgd2hhdCBkaWQgbm90LCBhbmQgaG93IHRoZSBhY2NvdW50bGVzcy10dW5uZWwgdHJhZGVvZmZzIHBsYXkgb3V0IGFnYWluc3QgUGluZ2d5IGFuZCBvdGhlcnMuIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTA5LTE5VDExOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMDktMTlUMTE6MDA6MDArMDU6MzAiLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvY2xvdWRmbGFyZV9xdWlja190dW5uZWxzX2FpX2FnZW50X2xhbmRpbmdfcGFnZS9jbG91ZGZsYXJlX3F1aWNrX3R1bm5lbHNfYWlfYWdlbnRfbGFuZGluZ19wYWdlX2Jhbm5lci53ZWJwIiwKICAiYXJ0aWNsZVNlY3Rpb24iOiBbCiAgICAiVGVjaG5vbG9neSIsCiAgICAiRGV2ZWxvcGVyIFRvb2xzIgogIF0sCiAgImtleXdvcmRzIjogWwogICAgIkNsb3VkZmxhcmUgVHVubmVsIiwKICAgICJRdWljayBUdW5uZWxzIiwKICAgICJ0cnljbG91ZGZsYXJlLmNvbSIsCiAgICAiQUkgYWdlbnRzIiwKICAgICJsb2NhbGhvc3QgdHVubmVsaW5nIiwKICAgICJQaW5nZ3kiLAogICAgIm5ncm9rIiwKICAgICJUYWlsc2NhbGUiCiAgXSwKICAicHVibGlzaGVyIjogewogICAgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsCiAgICAibmFtZSI6ICJQaW5nZ3kiLAogICAgImxvZ28iOiB7CiAgICAgICJAdHlwZSI6ICJJbWFnZU9iamVjdCIsCiAgICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYXNzZXRzL3BpbmdneV9sb2dvLnBuZyIKICAgIH0KICB9Cn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "cloudflare_quick_tunnels_ai_agent_landing_page/cloudflare_quick_tunnels_ai_agent_landing_page_banner.webp" "Illustrative mockup of an AI-generated developer tool landing page, with a blinking eyebrow badge, 01-02-03 numbered steps, and all-caps stat badges" >}}

Cloudflare quietly rebuilt the landing page at <a href="https://try.cloudflare.com/" target="_blank">try.cloudflare.com</a> this month. The pitch is right there in the new hero copy: "Localhost, meet the Internet," under an eyebrow badge that reads "BUILT FOR THE AGENT ERA." One command, `cloudflared tunnel --url http://localhost:8000`, and you get a public HTTPS URL pointed at whatever is running on your machine.

None of that is actually new. Quick Tunnels have existed since 2021. What's new is the framing, the copy, and the visual design, and that's exactly what a large chunk of the Hacker News thread ended up talking about instead of the product.

{{% tldr %}}
1. Cloudflare's Quick Tunnels aren't new. What shipped this month is a redesigned landing page and marketing copy aimed at AI coding agents, on top of infrastructure that's actually been stable for a while.
2. The command is still just `cloudflared tunnel --url http://localhost:8000`, no account, no config, an ephemeral `*.trycloudflare.com` hostname back in about three seconds.
3. The Hacker News thread spent as much time on the page's bugs (broken dark mode, an overflowing hero on desktop) and its AI-generated design tells (the blinking eyebrow badge, 01-02-03 steps, all-caps stat badges) as it did on the product itself.
4. The underlying debate is older than this page: accountless tunnels are convenient and also the reason <a href="https://ngrok.com/" target="_blank">ngrok</a> required sign-in for anonymous HTML hosting back in 2022, after wide abuse for phishing and malware delivery.
5. Cloudflare's default is a public, unauthenticated URL. If you're pointing one at something real, layer on <a href="https://developers.cloudflare.com/cloudflare-one/policies/access/" target="_blank">Cloudflare Access</a>, or reach for a tunnel like Pinggy that gives you basic auth or IP allowlisting on the same command.
{{% /tldr %}}

## What Quick Tunnels actually do

Strip away the new copy and the mechanism is simple, and has been since launch. You run `cloudflared tunnel --url http://localhost:8000` (no account, no zone, no DNS to configure), and `cloudflared` opens an outbound-only connection from your machine to Cloudflare's nearest edge location. Cloudflare terminates TLS, applies its usual DDoS filtering, and hands you back a random hostname on `trycloudflare.com` that proxies straight back to your local port. Nothing listens on an inbound port on your machine; the connection is entirely outbound, which is the same trick every tunneling tool in this space relies on.

The new landing page states this plainly with a few badges: ~3 seconds to a URL, 0 ports opened, 335+ edge cities. All roughly true, and all true in 2021 too. What's changed under the hood is that Quick Tunnels now run on the same "Named Tunnels" infrastructure Cloudflare uses for paid, persistent tunnels, instead of a separate legacy code path. That's a real, if unglamorous, improvement: tunnels that used to drop after a few hours now reportedly stay up for months, and cleanup of abandoned tunnels runs through Workers Cron Triggers rather than a bespoke housekeeping job.

## The part that's actually new: positioning for agents

The genuinely new piece is the framing. A dedicated "For agents" section on the page lists three things pitched specifically at AI coding tools: structured (JSON) output for scripting, "webhook-ready" URLs, and tunnels that are ephemeral by design, so an agent spinning one up to demo a change doesn't leave a dangling public endpoint behind. Cloudflare also shipped `wrangler tunnel quick-start` in March 2026, a one-liner that starts a Quick Tunnel straight from the Wrangler CLI that Cloudflare Workers developers already have installed.

This is a real use case. AI coding agents like Claude Code, Cursor, and Codex increasingly run a local dev server as part of their workflow, and getting a public URL out of that server matters for a specific set of tasks: testing a webhook against a real provider, sharing a running preview with a human reviewer, or letting a browser-based testing tool reach something that only exists on `localhost`. An agent that can shell out to one command and parse JSON back is a better fit for that than one that has to click through a web dashboard.

## Where the thread actually went

Here's where it gets interesting. Scroll through the discussion on that Hacker News submission and the top comments aren't about tunneling mechanics at all. The very first one points out the post should have carried a date disclaimer: this is a five-year-old product with a new coat of paint, not a launch.

From there it's mostly a design teardown. Commenters reported the page rendering with unreadable text in dark mode, a hero section that broke apart on desktop widths, and content overflowing its containers in a few spots, the kind of bugs that suggest nobody sat with the page across screen sizes before shipping it. And then there's the part that stings a little more for a company whose whole page is about AI agents: multiple commenters immediately clocked the design as AI-generated, and not because anyone said so. The tells were specific. A badge with a blinking dot next to "BUILT FOR THE AGENT ERA." Steps labeled 01, 02, 03 instead of just being steps. All-caps section eyebrows on every panel. Colored callout text scattered through the copy for emphasis. If you've spent any time reviewing AI-generated marketing pages, you've seen this exact pattern before: it's becoming a house style for a certain kind of quickly-shipped SaaS landing page, largely because it's what a coding agent reaches for when nobody art-directs it. A landing page selling tools for the "agent era" that itself reads as agent output is a genuinely funny bit of self-own, intentional or not.

None of this is really about whether Quick Tunnels work. They do, and they always have. It's a reminder that shipping the marketing layer fast, the same instinct that makes a one-command tunnel appealing in the first place, comes with the same rough edges everywhere else it's applied.

## The older argument the thread also had

Underneath the design commentary, the thread revisited a genuinely useful debate: should tunneling services let you get a public URL with zero identity attached to it at all?

Cloudflare's answer here is yes, by default. No account, no email, no sign-in, just a command and a URL. That's also exactly the model ngrok walked back in 2022, when it started requiring a confirmed account before letting anyone serve HTML content anonymously through its free tier. The reason was abuse: accountless tunnels had become a reliable way to stand up phishing pages and malware delivery infrastructure that disappeared the moment anyone tried to trace it, since the tunnel host, not the operator, was the only visible party. <a href="https://cyble.com/blog/ngrok-platform-abused-by-hackers-to-deliver-a-new-wave-of-phishing-attacks/" target="_blank">Security researchers</a> have documented this pattern repeatedly across ngrok, and it applies to any provider offering the same trick.

Cloudflare's mitigation is that Quick Tunnels are meant to be short-lived and are easy to kill, and abuse can route through Cloudflare's existing trust and safety systems the same way any Cloudflare-proxied traffic does. Whether that's sufficient is a fair thing to be skeptical about, and a few commenters raised the separate point that routing an increasing share of "get my local app online" traffic through one company is its own kind of concentration risk, however reliable that company's infrastructure happens to be.

## Where this leaves you if you're picking a tool

If what you need is genuinely a five-minute, throwaway URL, for a demo, a webhook test, or letting an agent show its work, Cloudflare's Quick Tunnels do that job fine, landing page bugs aside. The command is simple, the URL is real HTTPS, and you don't owe anyone an account to get it.

The moment you're exposing something you'd rather a stranger not stumble into, the calculus changes, and it's worth checking what a tunnel gives you beyond the URL. Cloudflare's free path has no built-in access control; you'd add <a href="https://developers.cloudflare.com/cloudflare-one/policies/access/" target="_blank">Cloudflare Access</a> policies on top if you want one. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} came up in the same thread as one of the accountless alternatives, and its free tier takes a similar zero-signup approach over SSH (`ssh -p 443 -R0:localhost:8000 free.pinggy.io`), but caps each session at 60 minutes and hands you a fresh random URL on reconnect. Where it differs is what's available on the same command: basic auth and IP allowlisting as flags, a web-based request inspector for debugging, and TCP/TLS/UDP tunnel types alongside HTTP, without needing a second product. Tailscale's Funnel is the other name that came up repeatedly, and it's a genuinely different model: it puts your machine on a private mesh network first and makes one service public as an explicit, separate step, which a lot of commenters clearly find easier to reason about than "outbound tunnel, public by default."

None of these tools disagree on the mechanism. Outbound connection, edge termination, ephemeral hostname, that part is now a commodity. What's worth five minutes of thought before you run the command is who else can reach the thing on the other end of that URL, and whether "anyone with the link" is actually the access model you meant to ship.

## The takeaway

Quick Tunnels didn't get more capable this month. Cloudflare gave an old, solid feature a new landing page aimed at a new audience, and that audience noticed the seams faster than expected, both in the page's own bugs and in the fact that a page about AI agents seems to have been substantially built by one. The tunneling story here isn't really news. The reaction to how it was marketed is.
