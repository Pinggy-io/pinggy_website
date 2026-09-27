---
title: "Hallmark Wants to Stop Claude Code From Building the Same Website Twice"
description: "Hallmark is an open-source design skill for Claude Code, Cursor, and Codex that runs every generated page through 58 anti-slop gates. Here's what it actually does, and where it falls short."
date: 2026-07-21T11:00:00+05:30
draft: false
tags: ["AI agents", "Claude Code", "Cursor", "Codex", "AI design tools", "Hallmark", "AI slop", "web design", "Together AI", "vibe coding"]
categories: ["Technology", "Development", "AI Tools"]
og_image: "images/hallmark_anti_ai_slop_design_skill/hallmark_anti_ai_slop_design_skill_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "hallmark_anti_ai_slop_design_skill/hallmark_anti_ai_slop_design_skill_banner.webp" "Side-by-side comparison of a generic AI-generated landing page with a purple gradient hero next to a distinct editorial-style design produced by the Hallmark skill" >}}

A developer named Adrian Krebs {{< link href="https://www.adriankrebs.ch/blog/design-slop/" >}}ran 1,590 Show HN landing pages through Playwright{{< /link >}} and scored each one against sixteen deterministic CSS and DOM checks: permanent dark theme, a purple-to-blue gradient hero, a three-icon feature grid, Inter set on an 8px grid. Twenty-two percent came back heavy slop. Another 32 percent were mild. Only 46 percent read as a page a human had actually made decisions about. The most common single tell, at 34% of pages, was the dark theme nobody asked for. His writeup hit the Hacker News front page and stayed there: 333 points, 235 comments, most of them nodding along.

That's the backdrop {{< link href="https://github.com/nutlope/hallmark" >}}Hallmark{{< /link >}} launched into. It's a design skill, meaning a folder of instructions an AI coding agent loads before it writes any UI code, and its entire pitch is refusing to produce the page Krebs was scoring. Since exploding on GitHub's trending page this month, it's picked up more than 11,000 stars and 550+ forks.

{{% tldr %}}
1. **What it is**: <a href="https://github.com/nutlope/hallmark" target="_blank">Hallmark</a> is an open-source design skill for Claude Code, Cursor, and Codex that encodes anti-AI-slop rules and refuses the visual defaults every LLM was trained on.
2. **Who built it**: Hassan El Mghari (Nutlope), who leads developer experience at <a href="https://www.together.ai/" target="_blank">Together AI</a>, with Youssef E. Released May 19, 2026.
3. **How it works**: it picks one of 21 named page shapes (macrostructures), applies one of 20 themes across four genres, then runs the output through 58 automated "slop-test" gates before handing it back.
4. **The differentiator**: structural variety, not just a different color. Two different briefs should produce two pages that don't share the same hero-features-CTA-footer rhythm.
5. **Install**: `npx skills add nutlope/hallmark`, or copy the `SKILL.md` and `references/` folder into `~/.claude/skills/hallmark/` (Claude Code), `.cursor/rules/hallmark.mdc` (Cursor), or `~/.codex/skills/hallmark/` (Codex).
{{% /tldr %}}

## The problem it's trying to fix

Ask any of the current AI coding agents for a landing page with no other direction and you'll get something recognizable: a purple-to-blue gradient badge that says "AI-Powered Platform," a headline with one word picked out in a lighter gradient color, a paragraph using the word "seamlessly," a primary button and a ghost button, and three feature cards with a small gradient icon and two gray lines standing in for copy. It's not wrong, exactly. It compiles, it's responsive, it even passes a Lighthouse audit. It's just instantly forgettable, and after you've seen it the fortieth time on Show HN it starts to look less like a design choice and more like a tell, the software equivalent of a stock photo of people high-fiving in an office.

The root cause isn't that language models can't design. It's that they're trained on the average of everything, and the average of every SaaS landing page ever scraped is exactly the thing described above. Left with an open-ended brief and no counter-pressure, the model reaches for the on-distribution default because that's the safest completion, not because it's the best answer for your product.

## What Hallmark actually enforces

Hallmark's {{< link href="https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/SKILL.md" >}}SKILL.md{{< /link >}} is long and specific in the way a real style guide is long and specific, not the way marketing copy is long. A few of the rules that stood out reading through it:

- **No fabricated metrics.** If you didn't give the agent a real number, it can't invent "+47% conversion" or "trusted by 50,000 teams." That's an explicit slop-test gate, which is a little funny given how often you see exactly that kind of made-up stat on generated landing pages.
- **No re-drawn browser chrome.** No fake macOS traffic-light dots wrapping a screenshot, no fake phone bezel. Use the real thing or leave it out.
- **No italic headers.** An italicized word inside an otherwise upright heading is apparently one of the most reliable AI tells there is; the rule bans it outright and pushes emphasis onto weight or color instead.
- **Every interactive element ships all 8 states** - default, hover, focus-visible, active, disabled, loading, error, success - not just the happy path a demo needs.
- **A diversification rule with a memory file.** Each build writes an entry to `.hallmark/log.json` recording which of the 21 macrostructures and 20 themes it used. The next run in that project reads the file and is required to pick something different on at least one axis (paper darkness, display typeface style, or accent hue). It's a crude fix for the model's tendency to regress to its favorite answer, but it's also an honest admission that the tendency exists.

There are four verbs: the default flow builds new UI, `hallmark audit <target>` scores existing code against the anti-pattern list without touching it, `hallmark redesign <target>` restructures a page while keeping its content and routes intact, and `hallmark study <url-or-screenshot>` extracts the "DNA" (macrostructure, type pairing, color anchor) from a design you admire so you can apply the shape elsewhere without literally cloning it. Study mode explicitly refuses template-marketplace URLs like Themeforest or Webflow listings, and it won't emit a portable `design.md` from someone else's live site without you attesting it's your own work or a fair reference for your own brand. Small detail, but it's the kind of guardrail you notice was deliberately written in rather than bolted on after a complaint.

## Who's behind it

Hallmark comes out of {{< link href="https://www.together.ai/" >}}Together AI{{< /link >}}, the AI inference and training cloud, built by Hassan El Mghari, who goes by Nutlope online and leads the company's developer experience team. He's the person behind a string of viral open-source AI demos over the past few years, including roomGPT.io and aicommits, projects that between them have pulled in a couple million users. Hallmark launched on May 19, 2026, and mostly grew steadily until this month, when it hit GitHub's trending page and picked up over 3,000 stars in a single day. That kind of jump usually means one influential post or repost, not organic discovery, but the sustained star curve since suggests people are actually installing it rather than just clicking a link.

## Where it gets honest about tradeoffs

The most interesting parts of the SKILL.md aren't the rules, they're the places where the authors clearly fought their own tool. There's an entire section on being stingy about what gets loaded into context: macrostructures are described in a one-line index first, and only the single picked file gets loaded, specifically to avoid burning "~37 KB of dead weight for a single pick." The slop-test file itself only loads at the very end, after the build, because "pre-loading slop-test.md costs ~7K tokens for nothing." That's a design skill admitting, in its own documentation, that comprehensiveness has a real cost in tokens and latency, which is a more candid tradeoff than most of this category is willing to put in writing.

The skill also always asks three questions before building anything - audience, use case, tone - even on a five-word brief, because "the cost of asking is one extra message; the cost of guessing wrong is a whole rebuild." You can skip it by saying "go ahead," but the default is friction, on purpose, which is the opposite of what most people installing an AI skill actually want out of the interaction.

And there's a harder question the project doesn't really address: what happens when Hallmark itself becomes common enough to be a tell. Structural diversity across a handful of installs is real diversity. Structural diversity across tens of thousands of installs, all drawing from the same 21 macrostructures and 20 themes, starts to look like its own recognizable house style, an editorial-serif-with-OKLCH-tokens aesthetic instead of a purple-gradient one. The skill is popular enough now that it's plausible someone runs Krebs' exact study again in a year and finds a new dominant pattern, just a better-looking one.

## Worth installing?

If you're building anything with Claude Code, Cursor, or Codex and you've noticed your outputs all look like siblings, Hallmark is a genuinely well-thought-out attempt at the problem, not a thin wrapper around a system prompt. The install is one command, `npx skills add nutlope/hallmark`, and `hallmark audit` on an existing project is close to a free win since it only reads and scores, it doesn't touch anything. The full Design flow is more opinionated and will ask you questions you might not want to answer if you just want a quick prototype, but that friction is clearly intentional rather than an oversight.

Once you've got a build running locally and want a second opinion before you deploy it anywhere, the fastest way to get one is to just send someone the live localhost URL. Start your dev server, then in a second terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` (swap 3000 for whatever port it's actually running on) and you'll get a public HTTPS link to the exact page on your machine, no deploy step, no staging environment to spin up.
