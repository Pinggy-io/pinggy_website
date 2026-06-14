---
title: "Gemini CLI Shuts Down June 18: What Google Just Did to 6,000 Open-Source Contributors"
description: "On June 18, 2026, Google is ending free access to Gemini CLI - the Apache 2.0 coding agent that community contributors spent a year improving. Here is the full story of what happened, why it matters for open source, and what to use instead."
date: 2026-06-14T10:00:00+05:30
lastmod: 2026-06-13T10:00:00+05:30
draft: false
tags: ["Gemini CLI", "Google", "open source", "developer tools", "AI coding agents", "Antigravity CLI", "OpenCode", "CLI tools", "open source sustainability"]
categories: ["Technology", "Developer Tools", "Open Source"]
og_image: "images/gemini_cli_shutdown_june_2026/gemini_cli_shutdown_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "gemini_cli_shutdown_june_2026/gemini_cli_shutdown_banner.webp" "Gemini CLI shuts down June 18 2026 - what happened to Google's open-source coding agent" >}}

On June 18, 2026 - four days from now - Gemini CLI stops working for free users, Google AI Pro and Ultra subscribers, and individual Gemini Code Assist users. The tool will become enterprise-only, and its replacement is a closed-source binary called Antigravity CLI.

That is the one-line version. The longer version is messier, and it is worth understanding if you care about how open-source projects succeed and fail in the AI tooling space.

{{% tldr %}}
1. **Gemini CLI** (Apache 2.0, 105K GitHub stars, 6,000+ merged community PRs) shuts down for free and individual users on June 18, 2026.
2. **Why it stings**: Google accepted years of community contributions, then pivoted to a closed-source, enterprise-only replacement.
3. **Antigravity CLI** (`agy`) is the replacement - a Go binary, noticeably faster, but no source code in the public repo.
4. **Alternatives to consider**: OpenCode (172K stars, MIT), Qwen Code (Apache-2.0, Gemini CLI fork), Goose (Block, Apache-2.0), Claude Code, or Aider.
5. **What this means**: Not a legal violation of Apache 2.0, but a case study in how community trust gets built and spent.
{{% /tldr %}}

## What Gemini CLI was

Google launched Gemini CLI on June 25, 2025 - a TypeScript-based, open-source AI coding agent for your terminal. Apache 2.0 license. Free tier of 60 requests per minute and 1,000 requests per day with a personal Google account. It ran on Gemini 3 models with a 1M token context window and came with built-in tools: Google Search grounding, shell commands, file operations, web fetch, and MCP protocol support.

Within a year it picked up 105,000 GitHub stars and 14,100 forks. Over 6,000 pull requests from external contributors were merged. The free access and permissive license made it one of the most adopted terminal coding agents of 2025.

The CLI itself worked well enough to compete seriously with Claude Code and early versions of OpenCode. Its Google Search integration was a genuine differentiator - you could ground queries in live web results inside the same terminal session.

## The announcement

On May 19, 2026, Google posted to its developer blog: Gemini CLI was transitioning to Antigravity CLI. Starting June 18, the API access that powered Gemini CLI would stop serving free users and individual Gemini Code Assist subscribers. The only path forward for continued Gemini CLI access would be a paid Gemini Code Assist Standard or Enterprise license.

The replacement - Antigravity CLI, command `agy` - is a Go binary that ships as part of Google's new Antigravity developer platform. It is faster and ships with async subagents, bidirectional sync with the Antigravity 2.0 desktop app, and multi-model support including Gemini, Claude, and some open-source backends. Google's technical case for it is solid.

What Google did not ship is source code. The Antigravity CLI GitHub repository contains a changelog, a README, and a GIF. No application code.

## The part that made developers angry

The bait-and-switch accusation is not really about the Apache 2.0 license. Apache 2.0 permits exactly what Google did - you can take contributions, incorporate them into a product, and then ship that product however you like. Google did not break any legal agreement.

What it did break was a social one.

Developer Andrea Alberti had a 27-commit pull request merged into Gemini CLI on the same day as the shutdown announcement. Her GitHub comment became the community's most-cited quote: "Essentially working for free on a code base that will only be used in enterprises?"

She was not alone. Within 24 hours of the May 19 post, the official GitHub transition thread collected roughly 143 thumbs-down reactions versus 4 cheers. Developers pointing at the commit history to show how much outside effort went in - localization, error handling, MCP server improvements, testing infrastructure - found it hard to argue that the community "just contributed docs." This was real feature work, and it went into a product that is now behind a paywall.

The Linux Foundation spotlighted this exact dynamic at Open Source Summit North America 2026 in Minneapolis. The foundation introduced its [Model Openness Tool](https://isitopen.ai) - a scoring framework that rates projects on transparency, reproducibility, and usage rights. Gemini CLI became exhibit A: a project that passed every "open source" smell test on the way in but did not carry that commitment forward.

## What Antigravity CLI actually is

To be fair to Google, Antigravity CLI is a better tool in several measurable ways.

It is built in Go rather than TypeScript. The difference is noticeable - startup time is significantly faster, memory usage is lower, and the TUI renders more responsively on slow machines. Running `agy` from a project directory launches a full scrollable conversation pane with a status bar showing active model, token usage, and running subagents.

The async subagents feature is genuinely useful. Long-running refactors or research tasks can run in parallel, so you are not blocked waiting on a slow code generation step. Use `/agents` to monitor them and `/config` to adjust permissions and themes.

Model support is broader than Gemini CLI was. Antigravity CLI can route to Claude and a handful of open-source backends in addition to Gemini models. The `agy models` subcommand shows the current list.

If you have a paid Google Workspace or Gemini Enterprise license, the migration is a net positive. The tool is faster and better integrated. For everyone else, Antigravity CLI is not really on the table - pricing information for individual access has not been published, and the early signals point toward enterprise-first.

## Who gets cut off and what to do

**Free users** - approximately the largest segment of Gemini CLI users - lose access entirely on June 18. Your local installations will keep working until the API calls fail, at which point the tool is effectively dead.

**Google AI Pro and Ultra subscribers** also lose access. Gemini CLI was not part of the original Pro/Ultra offering, but many subscribers had been using the free tier bundled with their accounts.

**Individual Gemini Code Assist users** (the personal tier, not the enterprise seat): same situation.

**Enterprise Gemini Code Assist Standard/Enterprise**: no change.

## Alternatives worth considering

This situation has accelerated adoption of a few tools that have been building momentum independently.

**OpenCode** - The most-starred open-source coding agent in existence right now at around 172K GitHub stars, MIT license. It is model-agnostic, supporting 75+ providers. Key features that Gemini CLI lacked: LSP integration (language servers inform the LLM in real time), background subagents per project, and session sharing via link. Runs air-gapped with local models. The closest feature-for-feature replacement if you were using Gemini CLI for serious coding workflows.

**Qwen Code** - An Apache-2.0 fork of Gemini CLI itself, maintained by Alibaba and tuned for Qwen-Coder models. Around 25K stars. If you liked the Gemini CLI UX and want to keep using that codebase, this is the most direct continuation. You can swap in other API backends despite the name.

**Pi** - From Armin Ronacher (the person behind Flask and Jinja2). Around 54K stars. Deliberately minimal - the entire system prompt fits in under 1,000 tokens. If Gemini CLI's biggest selling point for you was its thoughtful shell integration rather than AI-specific features, Pi is worth a look.

**Goose** - Block's (formerly Square) open-source agent, Apache 2.0. Ships as both a desktop app and CLI with native MCP integration. If you are building agent workflows that connect to MCP servers, Goose handles that integration better than most alternatives.

**Claude Code** - Anthropic's CLI. Paid but well-maintained, with strong reasoning for multi-file editing tasks. If you were using Gemini CLI primarily because it was free, Claude Code requires a subscription. If you were using it because it was good, Claude Code is worth evaluating on its merits.

**Aider** - One of the older open-source coding agents, MIT license, with broad model support and good git integration. Smaller feature surface than OpenCode but has been around long enough to be stable for production use.

**Pay for the Gemini API directly** - If Google's models specifically are what you need, you can keep using Gemini CLI by switching to a paid API key. You lose the free tier but retain the CLI. Check the current Gemini API pricing before committing.

## The broader pattern here

This is not the first time a popular developer tool has shifted from open to proprietary. MongoDB added the SSPL. Redis changed its license. HashiCorp moved Terraform to BSL. In each case the company had legitimate business reasons, and in each case the community response was significant.

What is a bit different with Gemini CLI is the scale of the community contributions that were accepted before the pivot. HashiCorp stopped accepting major external Terraform contributions before the license change. MongoDB's core database had been primarily company-maintained for years. Gemini CLI was actively soliciting and merging external work right up until the announcement.

That is the thing developers are actually upset about. Not the Apache 2.0 technicality. The feeling that their time was used as unpaid labor for a product they will not have access to.

The Apache 2.0 license does not protect against this, and the Linux Foundation's Model Openness Tool does not prevent it either - it just makes the pattern more visible. That visibility is probably useful. Future contributors to open-source AI tools might look more carefully at who controls the API keys before spending a month on a feature PR.

The Gemini CLI project, for all its GitHub activity, was never truly autonomous from Google's servers. Every request went through Google's API. The moment Google changed the access terms, the tool became non-functional regardless of the license. That is a structural fact that applies to a lot of AI tooling right now - the open-source label covers the client, not the service.

If you are evaluating alternatives, OpenCode's model-agnostic design - where you supply your own API key to whichever provider you choose - is a more durable architecture for exactly this reason.
