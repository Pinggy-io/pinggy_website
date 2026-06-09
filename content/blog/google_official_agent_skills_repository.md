---
title: "Google Launches Official Agent Skills Repository: What Every Developer Should Know"
description: "Google has launched an official open-source skills repository for AI agents at Cloud Next 2026. Learn what agent skills are, how the google/skills GitHub repo works, and how to use the Google Workspace CLI and Gemini API Docs MCP in your AI coding workflow."
date: 2026-06-09T10:00:00+05:30
lastmod: 2026-06-08T10:00:00+05:30
draft: false
tags: ["AI agents", "Google", "agent skills", "Google Workspace", "Gemini", "developer tools", "MCP", "Cloud Next 2026"]
categories: ["Technology", "AI Tools", "Development"]
og_image: "images/google_official_agent_skills_repository/google_official_agent_skills_repository_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFVzZSBHb29nbGUncyBPZmZpY2lhbCBBZ2VudCBTa2lsbHMgUmVwb3NpdG9yeSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBmaW5kaW5nLCBpbnN0YWxsaW5nLCBhbmQgdXNpbmcgR29vZ2xlJ3Mgb2ZmaWNpYWwgYWdlbnQgc2tpbGxzIGZyb20gdGhlIGdvb2dsZS9za2lsbHMgR2l0SHViIHJlcG9zaXRvcnkgYW5kIEdvb2dsZSBXb3Jrc3BhY2UgQ0xJIGZvciBBSS1wb3dlcmVkIGRldmVsb3BtZW50LiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJCcm93c2UgdGhlIFNraWxscyBSZXBvc2l0b3J5IiwKICAgICAgInRleHQiOiAiVmlzaXQgZ2l0aHViLmNvbS9nb29nbGUvc2tpbGxzIGFuZCBleHBsb3JlIGF2YWlsYWJsZSBza2lsbHMgZm9yIEdvb2dsZSBDbG91ZCBwcm9kdWN0cyBsaWtlIEJpZ1F1ZXJ5LCBHS0UsIENsb3VkIFJ1biwgYW5kIEZpcmViYXNlLCBhcyB3ZWxsIGFzIFdvcmtzcGFjZSBzZXJ2aWNlcy4gRWFjaCBza2lsbCBsaXZlcyBpbiBpdHMgb3duIGZvbGRlciB3aXRoIGEgU0tJTEwubWQgZmlsZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29weSBhIFNraWxsIGludG8gWW91ciBBZ2VudCIsCiAgICAgICJ0ZXh0IjogIkNvcHkgdGhlIFNLSUxMLm1kIGZpbGUgZnJvbSB0aGUgcmVwb3NpdG9yeSBpbnRvIHlvdXIgYWdlbnQncyBza2lsbHMgZm9sZGVyLiBGb3IgQ2xhdWRlIENvZGUsIHBsYWNlIGl0IGluIC5jbGF1ZGUvc2tpbGxzLzxza2lsbC1uYW1lPi9TS0lMTC5tZC4gRm9yIHByb2plY3Qtc2NvcGVkIHNraWxscywgdXNlIHRoZSBwcm9qZWN0J3MgLmNsYXVkZS9za2lsbHMvIGRpcmVjdG9yeS4gUmVzdGFydCB0aGUgYWdlbnQgc28gaXQgYXV0by1kaXNjb3ZlcnMgdGhlIG5ldyBza2lsbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCB0aGUgR29vZ2xlIFdvcmtzcGFjZSBDTEkiLAogICAgICAidGV4dCI6ICJSdW4gbnBtIGluc3RhbGwgLWcgQGdvb2dsZXdvcmtzcGFjZS9jbGkgdG8gaW5zdGFsbCB0aGUgZ3dzIENMSSB0b29sLCB3aGljaCBzaGlwcyB3aXRoIDEwMCsgcHJlLWJ1aWx0IEFnZW50IFNraWxscyBmb3IgR21haWwsIERyaXZlLCBEb2NzLCBTaGVldHMsIENhbGVuZGFyLCBDaGF0LCBhbmQgdGhlIEFkbWluIGNvbnNvbGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IHRoZSBNQ1AgU2VydmVyIiwKICAgICAgInRleHQiOiAiUnVuIGd3cyBtY3AgLXMgZHJpdmUsZ21haWwsY2FsZW5kYXIgdG8gc3RhcnQgYW4gTUNQIHNlcnZlciBleHBvc2luZyB0aGUgc2VydmljZXMgeW91IG5lZWQuIENvbm5lY3QgaXQgdG8geW91ciBBSSBjb2RpbmcgYWdlbnQgLSBDbGF1ZGUgQ29kZSwgR2VtaW5pIENMSSwgVlMgQ29kZSwgb3IgQ3Vyc29yIC0gc28gdGhlIGFnZW50IGNhbiB1c2UgdGhlIGJ1bmRsZWQgV29ya3NwYWNlIHNraWxscyBpbW1lZGlhdGVseS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29ubmVjdCB0byB0aGUgR2VtaW5pIEFQSSBEb2NzIE1DUCIsCiAgICAgICJ0ZXh0IjogIkFkZCB0aGUgR2VtaW5pIEFQSSBNQ1Agc2VydmVyIChnZW1pbmktYXBpLWRvY3MtbWNwLmRldikgdG8geW91ciBhZ2VudCBjb25maWd1cmF0aW9uLiBUaGlzIGdpdmVzIHlvdXIgY29kaW5nIGFnZW50IGFjY2VzcyB0byByZWFsLXRpbWUgR2VtaW5pIEFQSSBkb2N1bWVudGF0aW9uIGFuZCB0aGUgc2VhcmNoX2RvY3VtZW50YXRpb24gdG9vbCwgZW5hYmxpbmcgYWNjdXJhdGUsIHVwLXRvLWRhdGUgQVBJIHVzYWdlIGluIGdlbmVyYXRlZCBjb2RlLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "google_official_agent_skills_repository/google_official_agent_skills_repository_banner.webp" "Google Launches Official Agent Skills Repository: What Every Developer Should Know" >}}

Google has spent years building some of the most widely used developer infrastructure on the planet, but its own AI agents have often been the last to know about it. A coding agent asked to write a BigQuery pipeline might hallucinate deprecated APIs, produce working code against a documentation snapshot from six months ago, or simply give up when the question gets specific enough. At Cloud Next 2026, Google took a direct shot at this problem: it launched an official, open-source skills repository that gives AI agents first-party, up-to-date knowledge of Google Cloud and Workspace products.

If you have been following the {{< link href="/blog/ai_agent_skills/" >}}agent skills ecosystem{{< /link >}}, this is significant. Google is not building a proprietary plugin system or a locked-down API. It is publishing a collection of Markdown files on GitHub, under the Apache 2.0 license, in the same open format that any compatible agent already understands.

{{% tldr %}}
Google has launched an official open-source repository of agent skills at <a href="https://github.com/google/skills" target="_blank">github.com/google/skills</a>, announced at Cloud Next 2026. Skills are Markdown-based SKILL.md packages that give AI agents specialized, up-to-date knowledge of Google Cloud and Workspace products without bloating the context window.

Key things to know:
- The <a href="https://github.com/google/skills" target="_blank">google/skills repo</a> covers BigQuery, GKE, Cloud Run, Firebase, Gemini API, YouTube, and Workspace services under Apache 2.0
- The <a href="https://github.com/googleworkspace/cli" target="_blank">Google Workspace CLI</a> (`gws`) ships with 100+ pre-built skills and an MCP server for Gmail, Drive, Docs, Sheets, Calendar, Chat, and Admin
- The <a href="https://ai.google.dev/gemini-api/docs/coding-agents" target="_blank">Gemini API Docs MCP</a> lifted coding agent task completion from 28.2% to 96.6% by providing real-time API documentation
- Works with Claude Code, Gemini CLI, VS Code, Cursor, and any MCP-compatible agent
- The <a href="https://google.github.io/adk-docs/" target="_blank">Agent Development Kit (ADK)</a> is available in Python, TypeScript, Go, Java, and Kotlin for building custom agents that consume these skills
{{% /tldr %}}

## What Are Agent Skills, Exactly?

Before getting into what Google built, it helps to understand the format. An agent skill is a self-contained folder containing a `SKILL.md` file - a Markdown document that packages instructions, documentation snippets, code examples, and behavioral guidance into a compact, on-demand unit. When an agent encounters a task that matches a skill's description, it loads the skill and applies its knowledge. No permanent context consumption, no prompt engineering required from the user.

The format is an open standard. If you drop a properly structured `SKILL.md` into `.claude/skills/<name>/` in your project, Claude Code will pick it up. Gemini CLI, Cursor, Codex CLI, and other MCP-compatible agents work the same way. Google's choice to use this format rather than a proprietary system means that skills from the `google/skills` repository work immediately in whatever agent you already use.

The core benefit is what the Google Developer blog calls "closing the knowledge gap." An LLM trained months ago knows about BigQuery as it existed months ago. A skill file can contain the exact current API surface, current best practices, and current limitations. The agent reads it only when relevant, so it does not waste context on Cloud Run documentation when you are working on a Gmail integration.

## The google/skills Repository

The official repository lives at `github.com/google/skills`. It is organized by product area, with each skill in its own directory. As of the Cloud Next 2026 announcement, it covers:

**Google Cloud products:** BigQuery, Google Kubernetes Engine (GKE), Cloud Run, and Firebase each have dedicated skills targeting the most common developer workflows - schema design, query optimization, cluster configuration, and deployment patterns.

**Google Workspace services:** Gmail, Google Drive, Google Docs, Google Sheets, Google Calendar, Google Chat, and the Admin console are represented, giving agents the knowledge to automate and integrate with the collaboration tools most organizations already run on.

**Google APIs and platforms:** The Gemini API and YouTube have dedicated skills as well.

Every skill is plain Markdown and is licensed under Apache 2.0, so you can fork, modify, or build on top of them. If your team has specific conventions around BigQuery dataset naming or Cloud Run service configuration, you can extend the official skill with your own additions rather than starting from scratch.

## The Google Workspace CLI: 100+ Skills Out of the Box

One of the more immediately practical announcements is the Google Workspace CLI (`gws`), released in March 2026. Unlike the base `google/skills` repository - which gives you raw Markdown files to drop into your agent - the Workspace CLI is a fully integrated tool that combines an MCP server, pre-built skills, and built-in prompt injection protection.

Install it with:

```bash
npm install -g @googleworkspace/cli
```

The `gws` binary is built in Rust and ships pre-built binaries for macOS, Linux, and Windows. Once installed, you get over 100 Agent Skills for Workspace services, ready to use. Starting an MCP server for a subset of services is a single command:

```bash
gws mcp -s drive,gmail,calendar
```

This exposes Drive, Gmail, and Calendar to any MCP-compatible agent. Claude Desktop, Gemini CLI, VS Code, and Cursor can all connect directly. The bundled skills tell the agent exactly how to interact with each service - what scopes are needed, what API calls to make, how to handle pagination, and so on - so you do not have to write that guidance yourself.

The `--sanitize` flag adds prompt injection protection, which is worth enabling in production. Workspace data often contains content from external senders, and sanitization prevents malicious instructions embedded in emails or documents from hijacking the agent's behavior.

## Gemini API Docs MCP: Real Measurement, Real Impact

Google also published a public MCP server for Gemini API documentation at `gemini-api-docs-mcp.dev`. This one is aimed specifically at coding agents building on the Gemini API, and the performance numbers attached to it are concrete enough to be worth looking at directly.

Before adding the Gemini API Docs MCP, a coding agent completed 28.2% of Gemini API-related tasks correctly. After adding it, task completion jumped to 96.6%. The gain comes from giving the agent access to a `search_documentation` function that fetches current API definitions, method signatures, and code examples on demand - rather than relying on the model's training data, which may be months out of date.

If your team is building applications on top of the Gemini API, this is one of the more straightforward performance improvements available right now. The setup documentation is at `ai.google.dev/gemini-api/docs/coding-agents`.

## How to Install a Skill from google/skills

The installation process depends on which agent you use, but the core pattern is consistent across all of them.

**For Claude Code:** Clone or browse the repository, find the skill directory for the product you need, and copy the `SKILL.md` file into `.claude/skills/<skill-name>/SKILL.md` in your project directory. Restart Claude Code and it will auto-discover the skill. For a skill you want available in all projects, place it in `~/.claude/skills/<skill-name>/SKILL.md` instead.

**For Gemini CLI:** Gemini CLI has native skill integration and can pull directly from the `google/skills` repository. Check the Gemini CLI documentation for the current installation flow.

**For the Google Workspace CLI:** The skills are bundled automatically - install the CLI and start the MCP server; the skills come with it.

Here is a minimal example of what a skill file looks like, based on the structure used in the official repository:

```markdown
---
name: bigquery-basics
description: Expert knowledge for writing, optimizing, and debugging BigQuery SQL queries and data pipelines.
---

# BigQuery Basics

BigQuery uses standard SQL with extensions for nested/repeated fields.
Partition tables on date columns using `PARTITION BY DATE(timestamp_col)` to reduce query cost.

## Common Patterns

Run a simple query:
```sql
SELECT
  event_date,
  COUNT(*) AS event_count
FROM `project.dataset.events`
WHERE event_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
GROUP BY event_date
ORDER BY event_date DESC;
```

Use `UNNEST()` to flatten repeated fields:
```sql
SELECT item
FROM `project.dataset.orders`, UNNEST(items) AS item;
```

The actual skills in the repository are more detailed, but this gives you a sense of the format. They are readable Markdown, not opaque binary files, which means you can audit exactly what context your agent is loading.

## The Enterprise Side: Skill Registry and Gemini Enterprise Agent Platform

For organizations running agents at scale, Google announced a private Skill Registry as part of the Gemini Enterprise Agent Platform. Where the public `google/skills` repository is a shared, community-facing resource, the Skill Registry is a secure, private, low-latency store for managing skills internally.

This is relevant for teams that need to encode proprietary knowledge - internal API conventions, company-specific data pipelines, compliance rules - in a form that agents can consume without that knowledge being public. The Registry also supports pre-built agent personas (executive assistant, project manager) and ships with 19 workflow recipes for common enterprise patterns.

The distinction matters practically. The open-source skills give you Google's own best practices for working with its products. The private Registry is where your team's institutional knowledge lives. In a well-designed setup, both coexist: the agent loads the official BigQuery skill for platform knowledge and your team's internal skill for schema conventions and access patterns specific to your data warehouse.

## Agent Development Kit (ADK)

Google's Agent Development Kit (ADK) is its open-source framework for building agents that can consume these skills. It is available in Python, TypeScript, Go, Java, and Kotlin, and is designed to work with Vertex AI for deployment. The GitHub repositories are at `github.com/google/adk-python` (and equivalent repos for other languages), with documentation at `google.github.io/adk-docs`.

ADK handles the plumbing: tool registration, skill discovery, multi-agent orchestration, and debugging support. If you are building an agent from scratch that should have access to the `google/skills` catalog, ADK is the natural starting point rather than assembling those pieces manually.

## Science Skills: A Different Use Case

At Google I/O 2026 (May 2026), Google also announced Science Skills - a bundle aimed at life sciences research that integrates over 30 databases and tools covering structural bioinformatics, genomic analysis, and related workflows. This is available through Gemini for Science and targets a narrower audience, but it demonstrates that the skill format is not limited to software development tasks. The same Markdown-based packaging works equally well for specialized research workflows.

## What This Changes

The practical shift here is about who is responsible for keeping an agent current on a platform. Previously, if you wanted a coding agent to reliably use the Gemini API or BigQuery, you either accepted the risk that the model's training data was stale, or you maintained your own context files and prompt engineering. Google is now taking on that maintenance responsibility for its own products.

That is a meaningful commitment. Official skills are maintained by the teams that build the products they cover. When the BigQuery API changes, the skill should change. When Gemini API methods are added or deprecated, the documentation MCP will reflect it. This is different from community-maintained skill collections, where coverage and accuracy depend on volunteer effort.

For teams building on Google infrastructure, the practical recommendation is straightforward: add the relevant skills from `github.com/google/skills` to your agent setup, connect the Gemini API Docs MCP if you are building Gemini-based applications, and install the Workspace CLI if your workflow involves Gmail, Drive, or Calendar automation. These are low-friction additions with measurable impact on the accuracy of agent-generated code. The 96.6% figure is the clearest evidence of that - and it comes from Google's own measurements on its own APIs.

If you want a broader overview of the skills ecosystem beyond Google's official offerings, the {{< link href="/blog/ai_agent_skills/" >}}top AI agent skills for developers{{< /link >}} post covers community and vendor skills that work alongside these official ones. And if you are still choosing which {{< link href="/blog/best_ai_tools_for_coding/" >}}AI coding tool{{< /link >}} to build your workflow around, the skill compatibility question is now a real factor worth considering.

## Conclusion

Google's official skills repository is a practical answer to a real problem: AI agents are only as current as their training data, and that data goes stale fast. By publishing open, Markdown-based skills for BigQuery, GKE, Workspace, the Gemini API, and more - maintained by the same teams that ship those products - Google shifts the burden of staying current from individual developers to the source. The 96.6% coding task completion rate versus 28.2% without skills is the clearest data point, but the broader point is simpler: agents that know what they are working with produce better results. Adding a few SKILL.md files to your project setup is a low-effort change with a measurable return.
