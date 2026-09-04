---
title: "What AI Coding Agents Pick When You Let Them Choose Your Stack"
description: "A 5,292-session study measured which vendors Claude Code, Codex, and Cursor actually pick for payments, databases, email, and storage. The agents agree with each other only 42% of the time."
date: 2026-09-04T15:30:00+05:30
draft: false
tags: ["AI coding agents", "developer tools", "Claude Code", "Cursor"]
categories: ["Technology", "AI", "Developer Tools"]
og_image: "images/what_ai_coding_agents_pick_for_your_stack/what_ai_coding_agents_pick_for_your_stack_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJlYWQgYW4gQUkgQ29kaW5nIEFnZW50J3MgVmVuZG9yIFBpY2tzIEJlZm9yZSBZb3UgVHJ1c3QgVGhlbSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBzdHJlc3MtdGVzdGluZyB0aGUgU2FhUyBhbmQgdmVuZG9yIGNob2ljZXMgdGhhdCBDbGF1ZGUgQ29kZSwgQ29kZXgsIEN1cnNvciwgYW5kIHNpbWlsYXIgY29kaW5nIGFnZW50cyBtYWtlIG9uIHlvdXIgYmVoYWxmLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJUcmVhdCB0aGUgZmlyc3QgcGljayBhcyBhIHNob3J0bGlzdCBpdGVtIiwKICAgICAgInRleHQiOiAiQXNrIHRoZSBhZ2VudCB0byBuYW1lIHR3byBvciB0aHJlZSBhbHRlcm5hdGl2ZXMgaXQgY29uc2lkZXJlZCBhbmQgd2h5IGl0IHJlamVjdGVkIHRoZW0sIGluc3RlYWQgb2YgYWNjZXB0aW5nIHRoZSBmaXJzdCB2ZW5kb3IgaXQgd3JpdGVzIGludG8gdGhlIGNvZGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIHRoZSBwaWNrIGFnYWluc3QgeW91ciByZWFsIGNvbnN0cmFpbnRzIiwKICAgICAgInRleHQiOiAiVmVyaWZ5IHRoZSByZWNvbW1lbmRhdGlvbiBhZ2FpbnN0IHlvdXIgYWN0dWFsIHByaWNpbmcgdGllciwgcmVnaW9uLCBjb21wbGlhbmNlIG5lZWRzLCBhbmQgZXhpc3Rpbmcgc3RhY2sgcmF0aGVyIHRoYW4gdGhlIGFnZW50J3MgdHJhaW5pbmctZGF0YSBkZWZhdWx0cy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUmVxdWlyZSBhIGN1cnJlbnQgc291cmNlIGZvciBwcmljaW5nLXNlbnNpdGl2ZSBwaWNrcyIsCiAgICAgICJ0ZXh0IjogIkFzayB0aGUgYWdlbnQgdG8gc2VhcmNoIHRoZSB3ZWIgYW5kIGNpdGUgYSBkYXRlZCBzb3VyY2UgYmVmb3JlIHRydXN0aW5nIGFueSByZWNvbW1lbmRhdGlvbiB0aWVkIHRvIHByaWNpbmcsIGxpbWl0cywgb3IgZnJlZS10aWVyIHRlcm1zLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDcm9zcy1jaGVjayBzdXJwcmlzaW5nIHBpY2tzIGluZGVwZW5kZW50bHkiLAogICAgICAidGV4dCI6ICJGb3IgdW5mYW1pbGlhciBvciB1bmV4cGVjdGVkIHZlbmRvciBjaG9pY2VzLCByZWFkIGluZGVwZW5kZW50IHJldmlld3Mgb3IgZG9jcyB5b3Vyc2VsZiBpbnN0ZWFkIG9mIHJlbHlpbmcgb25seSBvbiB0aGUgYWdlbnQncyBvd24gcmVhc29uaW5nLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBc3N1bWUgYWdlbnQgdHJhZmZpYyBpcyBwYXJ0IG9mIHlvdXIgZnVubmVsIiwKICAgICAgInRleHQiOiAiSWYgeW91IG1haW50YWluIGEgZGV2ZWxvcGVyIHRvb2wsIGtlZXAgeW91ciBkb2NzLCBwcmljaW5nIHBhZ2UsIGFuZCBjb21wYXJpc29uIGNvbnRlbnQgbGVnaWJsZSB0byBhIG1vZGVsIHJlYWRpbmcgdGhlbSBjb2xkLCBub3Qgb25seSB0byBhIGh1bWFuIGV2YWx1YXRvci4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "what_ai_coding_agents_pick_for_your_stack/what_ai_coding_agents_pick_for_your_stack_banner.webp" "Bar charts showing Claude Code, Codex, and Cursor's web search rates before picking a tool, and how often heavily-mentioned vendors like PayPal, LangChain, and Netlify actually get chosen" >}}

Tell Claude Code, Codex, or Cursor to "add payments" or "wire up email" and it will not just write the integration, it will pick the vendor first, usually without asking you. A growth-marketing outfit called Armature spent the last few months measuring exactly what that choice looks like at scale: 16,893 coding-agent sessions, 5,292 of them kept for the published dataset, across 75 repositories, 1,163 prompt variations, and three agents actually writing and running the code, not just describing what they'd do. The number that should give you pause: given the identical task, all three agents picked the same vendor in only 42% of cases.

{{% tldr %}}
Armature ran 16,893 coding-agent sessions (5,292 published) across 75 repos and four developer personas to see which vendors Claude Code, Codex, and Cursor actually wire into the code, not just mention.

1. **The agents rarely agree.** All three pick the identical tool in only 42% of cases. For voice agents, Claude Code reaches for Twilio, Codex for the OpenAI Realtime API, and Cursor for Vapi, on the exact same prompt.
2. **Web search habits differ a lot.** Codex searches the web in 94% of sessions (often with a `site:` operator), Cursor in 67%, and Claude Code in about 30%, leaning on its training data instead.
3. **A handful of vendors dominate by category.** Stripe wins 9 of 10 payment picks, Neon takes 66% of database picks, and Amazon S3 takes 45% of storage picks.
4. **Being mentioned is not being picked.** PayPal came up 139 times and was chosen zero times. LangChain was mentioned 194 times and picked 4. Netlify: 152 mentions, 6 picks.
5. **Claude Code builds instead of buying almost twice as often** as Codex and Cursor (19% vs 10%), reaching for a hand-rolled solution instead of a vendor.
6. **Packaging affects the outcome.** Supabase lost picks specifically for bundling too many BaaS features into one price; Mailgun lost repeatedly to Postmark once agents read its "1-day retention" free-tier limit.
7. **Read the fine print on who ran the study.** Armature's own business is "growth services" for dev tools, i.e. helping vendors get picked by agents like this. Keep that in mind while reading their numbers.

Read the full dataset writeup: <a href="https://armature.tech/blog/which-tools-coding-agents-install" target="_blank">Which tools do Claude Code, Codex and Cursor choose?</a>
{{% /tldr %}}

## How the test was actually run

The setup is more rigorous than the usual "I asked ChatGPT and it said X" post. Armature built four personas representing how differently people brief a coding agent: vibe-coders who describe a symptom ("payments keep failing"), junior engineers who name the desired end state and category, senior engineers who specify concrete requirements and constraints, and enterprise engineers who add compliance and procurement language. Those personas generated 1,163 prompt variations, run against 51 codebases spanning 18 sectors and 10 programming languages, rotated across three different sandbox providers (E2B, Blaxel, and Daytona) "just to be safe" against provider-specific quirks.

A separate Gemini 3.7 Flash instance played the simulated human giving follow-up instructions mid-session, and a second Gemini instance validated the sessions and identified winners after the fact. Out of 16,893 total runs, 5,292 sessions were kept for the published analysis; the authors note the remainder "weren't thrown in the bin" and may show up in a second wave later.

If you want more background on why coding agents behave so differently depending on how they're scaffolded, our piece on {{< link href="/blog/best_ai_harnesses_to_supercharge_llm_models/" >}}AI harness engineering{{< /link >}} covers the layer that sits between a raw model and a tool like Claude Code or Codex.

## The agents don't agree with each other, or with you

The single most interesting number in the whole dataset is the 42% agreement rate. Give Claude Code, Codex, and Cursor the exact same prompt for the exact same feature, and less than half the time do they land on the same vendor. The voice agent category is the clearest example: asked to add a voice layer, Claude Code reaches for Twilio, Codex goes to the OpenAI Realtime API, and Cursor picks Vapi. Same task, same repo, three different production dependencies now sitting in your codebase depending on which tool happened to be open.

Web search behavior explains part of the split. Codex searches the web in 94% of sessions, and in 9 out of 10 of those searches it narrows results with a `site:` operator aimed at trusted domains. Cursor searches in about two-thirds of sessions. Claude Code is the outlier at roughly 30% baseline, since it leans on what it already knows rather than looking things up, though that rate climbs toward 80% in newer or less-familiar sectors where its training data is thinner. An agent that searches less isn't necessarily wrong, but it is more likely to hand you a vendor that was popular when its training data was collected rather than the one that's actually competitive today.

## Who actually wins each category

Despite the disagreement between agents, individual categories still show strong winners once you aggregate across all three:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Category</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Dominant pick</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Share</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Notes</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Payments</td>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Stripe</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">9 of 10 cases</td>
  <td style="border:1px solid #ddd;padding:0.45em;">PayPal (139 mentions) and Adyen (175 mentions, 3 picks) barely register despite heavy name-dropping.</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Database</td>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Neon</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">66% of picks</td>
  <td style="border:1px solid #ddd;padding:0.45em;">AWS and Azure split most of the remainder.</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">File storage</td>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Amazon S3</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">45% of picks</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Azure and GCP each take about 20%; Cloudflare R2 gained ground specifically when the simulated human pushed back on cost.</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Deployment</td>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Vercel</strong> (TS/Next.js) / <strong>Render</strong> (Python)</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Up to 100% in Next.js repos</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Netlify shows up in the prompt 152 times but only gets picked 6.</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Email</td>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Resend</strong> (TS) / <strong>SendGrid</strong> (Python)</td>
  <td style="border:1px solid #ddd;padding:0.45em;">35.6% / lead in Python</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Postmark follows at 27.4%; Azure Communication Services leads in Java repos.</td>
</tr>
</tbody>
</table>

Repository language is doing a lot of the work here. It's not that Resend is objectively better than SendGrid, it's that agents are pattern-matching on what shows up in TypeScript codebases versus Python ones, which is exactly the kind of bias worth knowing about before you accept a recommendation uncritically.

## Mentioned constantly, picked almost never

The gap between "the agent brings this vendor up" and "the agent actually writes it into your code" is one of the more useful things this dataset surfaces. PayPal was mentioned in 139 sessions and picked in zero of them. LangChain came up 194 times, more than almost anything else in the dataset, and was picked in 4 sessions, about 2%. Netlify appeared 152 times and converted at roughly 4%. Whatever training-data familiarity puts a name in an agent's head is clearly not the same signal that gets it into the final diff.

That's a useful sanity check if you're on the other side of this: a tool showing up constantly in an agent's reasoning traces doesn't mean developers using that agent are actually adopting it. If you're trying to gauge real usage, the pick rate matters far more than the mention rate.

## Claude Code would rather build it than buy it

Across the dataset, Claude Code reached for a hand-rolled, in-house implementation instead of an external vendor in 19% of applicable sessions, against roughly 10% for Codex and Cursor combined. That's consistent with how Claude Code tends to behave in practice: more willing to write a custom auth flow, a custom queue, or a custom rate limiter from scratch rather than pull in a managed service. It's a real tradeoff, not obviously wrong. A hand-rolled solution has no vendor lock-in and no third-party billing surprise, but it also means your codebase now owns maintenance, edge cases, and security review for something a mature vendor already solved. Worth knowing which way your agent leans before it makes that call silently on a Friday afternoon.

## Presentation beats capability more than you'd expect

Two specific findings stand out because they're not about raw feature comparison at all. Agents rejected Supabase in several sessions specifically because of "too many unnecessary BaaS features... presented in a bundle pricing," even when the functionality on offer was adequate for the task. And Mailgun "regularly lost against Postmark when agents read '1-day retention' on its free plan," a detail that reads like a footnote but was apparently enough to tip multiple decisions.

Neither of those is a capability gap. They're packaging and copy decisions that happened to read badly to a model skimming a pricing page. If that pattern holds as more purchasing decisions get delegated to agents, how your free tier is worded starts to matter as much as what it actually does.

## The part worth reading before you cite this study anywhere

Here's the detail that changes how you should weigh all of the above: Armature, the company that ran this study, states plainly that it "sells growth services to dev tools," and describes the research as "part of our broader work on how to influence coding agents' choices and get products picked." In other words, the same company measuring which vendors get chosen by AI coding agents also sells services to help vendors get chosen by AI coding agents. That doesn't make the numbers fake, the methodology described is genuinely more rigorous than most vendor-commissioned research, but it does mean the study doubles as a sales pitch for a nascent field: optimizing your product for an agent's judgment the way SEO optimized pages for a search engine's ranking algorithm.

The Hacker News discussion around the study caught this immediately. One commenter put it bluntly: "if your business is basically getting [models] to use products that aren't actually best for the job, you are scum." Others were more measured, pointing out that having actual measurement, even from an interested party, still beats the alternative of everyone guessing based on vibes. Either way, treat the top-line numbers as a real signal about current agent behavior, and treat any future service that promises to get your product "picked by AI agents" with exactly the skepticism you'd apply to an SEO consultant promising a page-one ranking.

This isn't a new problem so much as a new instance of an old one. We've written before about {{< link href="/blog/why_llm_benchmarks_need_a_reset/" >}}why LLM benchmark scores need more scrutiny than a leaderboard number implies{{< /link >}}, and the same instinct applies here: a striking statistic from a single study is a starting point for your own judgment, not a replacement for it.

## What this actually means for you

If you're building with an AI coding agent day to day, the practical takeaway is not "don't trust the agent," it's "don't let the agent's first answer be the only answer you see." Ask it to name what it considered and rejected. If a pick is tied to pricing or limits, make it search and cite something dated rather than relying on priors that might be stale. And if the vendor it picked is one you've never used, spend the five minutes to check it independently before it becomes a production dependency, the same way you'd want a junior engineer's first suggestion checked before it ships. Our roundup of {{< link href="/blog/best_ai_tools_for_coding/" >}}AI coding tools{{< /link >}} and {{< link href="/blog/top_cli_based_ai_coding_agents/" >}}CLI-based coding agents{{< /link >}} is a reasonable starting point if you're still deciding which agent fits your workflow in the first place.

If you're on the other side, building a developer tool that these agents might reference, the uncomfortable implication is that agent traffic is now part of your funnel whether you planned for it or not. A confusing pricing page or a scary-sounding retention policy in your free tier isn't just a UX nit anymore, it's something a model reads cold and can silently disqualify you over, at a scale no human sales team would ever notice happening.

## Conclusion

The headline finding isn't that Stripe wins payments or that Neon wins databases, both are plausible on their own merits. It's that three of the most widely used coding agents, given the identical instruction, agree with each other only 42% of the time, and that popularity in an agent's reasoning (139 mentions of PayPal) has almost no relationship to what actually ends up in your codebase (zero picks). That's worth knowing before you treat any single agent's first suggestion as a considered decision, and it's worth remembering that the study surfacing all of this comes from a company whose business depends on influencing exactly the outcome it's measuring.
