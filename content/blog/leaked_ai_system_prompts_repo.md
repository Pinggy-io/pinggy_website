---
title: "Inside the Repo Collecting Every Leaked AI System Prompt"
description: "A GitHub repo with nearly 49,000 stars archives extracted system prompts from Claude, ChatGPT, Gemini, and Grok. After Claude Code's own source leaked through a stray npm source map in March, we now know exactly what's inside its system prompt too."
date: 2026-07-05T11:00:00+05:30
lastmod: 2026-07-04T11:00:00+05:30
draft: false
tags: ["system prompt leak", "Claude Code", "AI system prompts", "prompt engineering", "Anthropic", "ChatGPT", "Gemini", "open source"]
categories: ["Technology", "AI", "Developer Tools"]
og_image: "images/leaked_ai_system_prompts_repo/leaked_ai_system_prompts_repo_banner.png"
outputs:
  - HTML
  - AMP
---

{{< image "leaked_ai_system_prompts_repo/leaked_ai_system_prompts_repo_banner.png" "Illustration of a leaked system prompt file on a dark terminal, with pill badges for Claude Code, ChatGPT, Gemini, Grok, and Copilot, and a circular stamp reading declassified by accident" >}}

There's a GitHub repo called <a href="https://github.com/asgeirtj/system_prompts_leaks" target="_blank">system_prompts_leaks</a> that does exactly one thing: it collects the verbatim system prompts, the hidden instructions companies paste in front of every conversation, extracted out of Claude, ChatGPT, Gemini, Grok, GitHub Copilot, Cursor, Perplexity, and about thirty other AI products. It's CC0-licensed, meaning genuinely public domain, and it's sitting at close to 49,000 stars. The Washington Post gave it a full interactive treatment in May. And if you're one of the millions of people running Claude Code every day, the most detailed look yet at what your own tool is actually being told to do didn't come from this repo at all. It came from an unrelated accident: a stray debug file Anthropic shipped to npm in March.

Put those two threads together and you get a genuinely interesting week for anyone who cares about how these tools are actually built under the hood, not just what they output.

{{% tldr %}}
1. <a href="https://github.com/asgeirtj/system_prompts_leaks" target="_blank">asgeirtj/system_prompts_leaks</a> is a CC0-licensed archive of extracted system prompts from Claude, ChatGPT, Gemini, Grok, Copilot, and dozens of other AI products. Nearly 49,000 stars, started by a hobbyist in Iceland, featured in a <a href="https://www.washingtonpost.com/technology/interactive/2026/chatbots-hidden-rules-system-prompts/" target="_blank">Washington Post interactive piece</a> in May 2026.
2. Most of these prompts got out the same way: someone convinced the chatbot to repeat its own instructions back verbatim. Anthropic's own documentation admits <a href="https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak" target="_blank">no defense against this is foolproof</a>.
3. Claude Code's system prompt didn't leak that way. On March 31, 2026, a 59.8 MB JavaScript source map got bundled into the `@anthropic-ai/claude-code` npm package (v2.1.88), exposing roughly 513,000 lines of unobfuscated TypeScript, the entire agent harness, not just prompt text.
4. A companion project, <a href="https://github.com/Piebald-AI/claude-code-system-prompts" target="_blank">Piebald-AI/claude-code-system-prompts</a>, now tracks over 500 distinct prompt fragments pulled from that source, updated release by release, with exact token counts for each one.
5. Anthropic already runs a page that officially publishes the consumer Claude app's system prompt. Claude Code, a developer tool, only became this transparent by accident.
{{% /tldr %}}

## What's Actually in the Repo

<a href="https://github.com/asgeirtj/system_prompts_leaks" target="_blank">system_prompts_leaks</a> is maintained by Ásgeir Thor Johnson, a hobbyist in Iceland who started collecting these as a side project. It's organized by company: an Anthropic folder with Claude Fable 5, Opus 4.8, Claude Code, and Claude Design; an OpenAI folder with GPT-5.5 in its Thinking, Instant, and Codex variants plus older GPT-5.4 and GPT-5.3 prompts; a Google folder covering Gemini 3.5 Flash, Gemini 3.1 Pro, Gemini CLI, and NotebookLM; an xAI folder for Grok; a Microsoft folder for GitHub Copilot across its CLI, VS Code agent, and macOS app forms. Then there's Meta AI, Mistral's Le Chat, Notion AI, Perplexity, Qwen, Cursor, and a long tail of smaller tools.

As of this writing the repo shows nearly 49,000 stars, over 8,000 forks, and close to 600 commits, with a couple dozen open pull requests, so it's an actively maintained community effort rather than a one-time dump. The license is CC0-1.0, full public domain, no attribution required.

The <a href="https://www.washingtonpost.com/technology/interactive/2026/chatbots-hidden-rules-system-prompts/" target="_blank">Washington Post piece</a> that ran in May 2026 is worth a look on its own. It quoted system prompt lengths running from 2,300 words up to 27,000 words for three popular chatbots, and built an interactive tool that let readers edit an actual extracted system prompt and watch how differently the underlying model would rewrite the article based on the instructions they typed in. That's a genuinely good way to make an abstract idea, "the model's behavior is shaped by text you never see", concrete for a general audience.

## How Most of These Prompts Actually Got Out

None of this required hacking anything. The standard technique, often called prompt leaking, is embarrassingly simple: ask the model to repeat everything above this line, or to output its instructions as a numbered list, or as a code block, or translated into French and back. Chat-based models are trained to be helpful and follow instructions, and "please repeat your instructions" is, syntactically, just another instruction. Layer enough of these tricks and most system prompts eventually come out, sometimes word for word, sometimes with a bit of reconstruction needed.

Anthropic's own documentation is refreshingly honest about this. Its guidance on <a href="https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak" target="_blank">reducing prompt leak</a> opens by saying "no method is foolproof," and actually recommends against over-engineering a defense: adding more instructions to stop leaking adds complexity that can degrade the model's actual task performance, so the advice is to keep genuinely sensitive logic (like a proprietary formula) out of the prompt entirely rather than trying to build a leak-proof cage around it. That's a good piece of practical advice for anyone writing prompts for their own product: if a line would be actually damaging to leak, don't put it in the system prompt in the first place, because eventually it will get out.

## Claude Code's Prompt Didn't Leak. Its Whole Source Code Did.

Everything above describes chatbots being talked into revealing themselves. Claude Code's system prompt became public knowledge through a completely different, far messier route.

On March 31, 2026, security researcher Chaofan Shou noticed that version 2.1.88 of the `@anthropic-ai/claude-code` npm package included a 59.8 MB JavaScript source map file, the kind of debug artifact that maps minified production code back to its original source, normally kept internal. It shouldn't have been in the published package at all. Once someone downloaded it and ran it through a source map unpacker, out came roughly 513,000 lines of unobfuscated TypeScript across 1,906 files: the entire client-side agent harness, not just a prompt string.

In a statement, Anthropic called it a release packaging error caused by human error, not a security breach, and said no customer data or credentials were exposed. The company said it was rolling out measures to prevent a repeat. That's a fair characterization of the mechanism, a missing `.npmignore` entry is a mundane way for this to happen, but the result was still the most complete look anyone's had at how a major coding agent is actually built: the file was mirrored to GitHub within hours and picked up tens of thousands of stars before the day was out.

## 500+ Prompt Fragments, One Coding Agent

The most useful thing to come out of that leak, for developers specifically, is <a href="https://github.com/Piebald-AI/claude-code-system-prompts" target="_blank">Piebald-AI/claude-code-system-prompts</a>, a repo that picked through the exposed source and now tracks it release over release. As of Claude Code v2.1.201 (July 3, 2026), it documents changes across 227 tracked versions going back to v2.0.14.

The framing in that repo's own README is the part worth internalizing: "Claude Code doesn't just have one single string for its system prompt." It's assembled from categories, agent prompts for sub-agents, creation assistants, and slash commands, embedded reference data, core system prompt fragments, and "system reminders" injected at specific points mid-conversation rather than only at the start. Individual pieces get pulled in conditionally depending on what the session actually needs.

{{< image "leaked_ai_system_prompts_repo/token_counts_chart.png" "Horizontal bar chart showing token counts for Claude Code system prompt fragments: security monitor part 2 at 18,941 tokens, part 1 at 8,582 tokens, a Claude API reference doc ranging from 1,782 to 7,777 tokens, and typical utility prompts at 100 to 2,000 tokens" >}}

The size spread across fragments is bigger than you'd guess. The two-part security monitor prompt covering autonomous actions runs 8,582 tokens for its first half and 18,941 tokens for its second, close to 20,000 tokens for one component alone. Reference documents for the Claude API run anywhere from 1,782 to 7,777 tokens depending on which one gets loaded. Most individual utility and slash-command prompts are far leaner, in the 100 to 2,000 token range. None of that is sent on every single request; it's pulled in as needed, which is exactly why one flat "system prompt" file was never an accurate mental model for what a coding agent like this actually does.

If you've read our piece on {{< link href="/blog/tools_to_reduce_ai_coding_agent_token_usage/" newtab=false >}}cutting AI coding agent token usage{{< /link >}}, this is the other side of that coin: a look at where a meaningful chunk of the fixed overhead actually comes from before your own conversation history even starts piling up.

## Anthropic Already Half-Publishes This Anyway

Here's the part that makes the whole story land a little differently. Anthropic runs a <a href="https://platform.claude.com/docs/en/release-notes/system-prompts" target="_blank">public release notes page</a> that officially documents the system prompt used by the consumer Claude web and mobile apps, dated version by version, covering things like current-date context, tone guidance, child safety requirements, and knowledge cutoff disclosures. The page is explicit that none of it applies to API usage. So for the product regular people chat with, Anthropic already chose transparency.

Claude Code, the developer tool, didn't get the same voluntary treatment, at least not yet. It took a missing entry in a `.npmignore` file to get the equivalent level of detail into the open for the tool that a much more technical audience actually uses every day. That's a slightly odd gap: the more the product resembles source code you're expected to reason about, the less officially documented its own instructions turn out to be.

## What This Is Actually Good For

The novelty of "the chatbot has secret rules" wore off a while ago; every product has some version of a system prompt, and that's not scandalous on its own. What's actually useful here is being able to read real, working examples of prompt engineering at a scale most individual developers never get to see, then borrow the parts that generalize.

A few patterns worth stealing directly if you're building your own agent, based on what's now public about Claude Code's structure specifically:

- **Split orchestration from execution.** A distinct prompt for the primary agent versus specialized sub-agents (search, planning, task execution) keeps each piece focused instead of one file trying to cover every mode of operation.
- **Load context conditionally, not all at once.** Reference docs and tool descriptions only need to be in the prompt when the current task actually touches them. Piebald-AI's own token counts show a nearly 20,000-token gap between the largest and smallest fragments; sending all of them on every request would be wasteful.
- **Use mid-conversation reminders, not just an opening prompt.** "System reminders" injected at specific points let you reinforce a rule exactly when it's relevant (say, right before a risky tool call) instead of hoping the model still remembers something from thousands of tokens ago.
- **Don't put anything genuinely damaging in the prompt.** Anthropic's own guidance says it outright: if a line would actually hurt to leak, the fix isn't a better anti-leak instruction, it's not putting that line in the prompt.

If you're building or extending your own coding agent, our roundups of {{< link href="/blog/ai_agent_skills/" newtab=false >}}Claude Code skills{{< /link >}} and {{< link href="/blog/best_open_source_cli_coding_agents/" newtab=false >}}open source CLI coding agents{{< /link >}} cover the ecosystem this all plugs into.

## Conclusion

Two separate stories collided this year: a slow-moving, crowdsourced archive of chatbot instructions extracted through conversational tricks, and a one-off engineering mistake that exposed a coding agent's entire internal structure in a single afternoon. Both point at the same conclusion. Treat your system prompt like source code, not a secret, because sooner or later it behaves like one: either someone talks your model into repeating it, or a stray file in a package ships it for you. The teams that come out looking best here aren't the ones with the cleverest anti-leak tricks, they're the ones who never put anything in the prompt that couldn't survive being read by a stranger.
