---
title: "Mindwalk Replays Your AI Coding Agent's Session in 3D - Share It with Pinggy"
description: "Mindwalk is a new open-source tool that turns Claude Code and Codex session logs into a 3D replay of what the agent actually touched. Here's how it works, and how to share the replay with a teammate using a Pinggy tunnel."
date: 2026-07-13T10:00:00+05:30
lastmod: 2026-07-12T10:00:00+05:30
draft: false
tags: ["Mindwalk", "AI coding agents", "Claude Code", "Codex", "agent observability", "developer tools", "Pinggy", "session replay", "code review"]
categories: ["Technology", "AI Tools", "Developer Tools"]
og_image: "images/mindwalk_replay_coding_agent_sessions_with_pinggy/mindwalk_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "mindwalk_replay_coding_agent_sessions_with_pinggy/mindwalk_banner.webp" "Mindwalk visualizes a coding agent session as glowing trails through a repository, shared publicly through a Pinggy tunnel" >}}

A tool called <a href="https://github.com/cosmtrek/mindwalk" target="_blank">Mindwalk</a> showed up on Hacker News this week and did something a lot of "Show HN" posts don't: it hit 119 points on a Sunday for a tool that has exactly one job. It reads your Claude Code or Codex session logs and replays them as light moving across a 3D map of your repository. Files the agent searched glow cool. Files it edited glow warm amber. Everything it never touched stays dark.

The pitch, in the project's own words, is "draw the repository as a night map, and play the session back as light moving through it." That's a good description of a real gap: when an agent finishes a task, you get a diff and maybe a summary, but you don't get a sense of *how* it got there - what it read first, where it backtracked, which files it kept returning to before making the actual edit. Mindwalk makes that process visible.

It's also a genuinely local tool. One Go binary, no data leaves your machine, and it serves the visualization on `localhost` over a random port by default. Which means the second you want to show it to someone else, on your phone, on another laptop, or in a screenshare where local URLs don't work, you need a tunnel. That's the part this post covers.

{{% tldr %}}
1. **Install Mindwalk**: `curl -fsSL https://raw.githubusercontent.com/cosmtrek/mindwalk/master/scripts/install.sh | sh`
2. **Run it**: `mindwalk serve --port 4317` (scans `~/.claude/projects` and `~/.codex/sessions` by default)
3. **Open it**: `http://localhost:4317` in your browser
4. **Share it publicly**: `ssh -p 443 -R0:localhost:4317 free.pinggy.io`
5. **Send the link**: Pinggy prints an HTTPS URL like `https://abc123.a.pinggy.link` that anyone can open, no VPN or local network required
{{% /tldr %}}

{{< llm-context >}}To share a local Mindwalk coding-agent session replay with Pinggy - run `mindwalk serve --port 4317` (starts on port 4317), then in a new terminal run `ssh -p 443 -R0:localhost:4317 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

## Why session replay is suddenly a category

Agent observability has been the quiet gap in the "let the agent do it" story for a while now. You can review a pull request from a human because you trust that a human read the surrounding code before touching it. With an agent, you don't know that by default. It might have grepped the right file and made a surgical fix, or it might have pattern-matched a similar-looking function three directories over and edited the wrong thing that happened to also make the tests pass.

Session logs already contain this information technically - Claude Code and Codex both write out JSONL traces of every tool call - but reading raw logs to reconstruct "what did it look at before deciding to edit this" is tedious enough that almost nobody does it. Mindwalk's bet is that turning the log into a spatial, glanceable picture makes people actually look. One Hacker News commenter, working on tooling for a different coding agent, said as much: this kind of visualization is "quite useful to quickly tell if you did make an agent smarter or not" between versions of a prompt or scaffold.

That's the real use case underneath the pretty lights: agent audit tooling, applied the same way you'd apply a profiler or a test coverage report, except the thing being measured is comprehension, not runtime.

## How it actually works

Mindwalk separates the problem into two pieces that get computed independently and then joined at serve time.

**Traces** are normalized file-touch event streams. Mindwalk ships adapters for Claude Code and Codex specifically, so it can read either tool's native session log format and reduce it to a common shape: timestamp, file, action (search, read, edit, exec, error), and enough metadata to place the event on a timeline.

**Citymaps** are deterministic layouts of a repository - the "map" the trace gets projected onto. Because layout generation is deterministic, the same repo always renders the same map, so replaying five different sessions against the same codebase gives you five consistent, comparable pictures instead of five different random layouts.

A local Go server joins the trace and the citymap and serves a React/Three.js frontend that does the actual rendering. The color language maps directly onto file state, using the deepest interaction level a file reached during the session:

- **Dark** - unvisited, the agent never touched it
- **Moss green** - seen (referenced in a search result or listing, not opened)
- **Moon white** - read (the agent opened and read the file)
- **Warm amber** - edited (the agent wrote to it)

Underneath the visuals, there's a genuinely useful playback deck: a bucketed histogram along a cool-to-warm spectrum, timeline markers for context compactions, subagent launches, and user turns, and a file inspector where clicking a node pins its visit history with exact timestamps. Keyboard shortcuts (space to play/pause, arrows to step, `E` to jump to the next edit, `X` to jump to the next error) make it fast to scrub through a long session instead of watching it play out in real time.

## Installing and running it

The install script pulls a prebuilt binary and checks it against a checksum before placing it in `~/.local/bin`:

```bash
curl -fsSL https://raw.githubusercontent.com/cosmtrek/mindwalk/master/scripts/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"
```

Windows builds are on the project's GitHub Releases page. If you'd rather build from source, the repo's Makefile handles it:

```bash
git clone https://github.com/cosmtrek/mindwalk.git
cd mindwalk
make setup && make build
```

With no arguments, `mindwalk serve` scans the default session directories (`~/.claude/projects` and `~/.codex/sessions`), serves the UI on a random local port, and opens your browser automatically. For a tunnel, you want a fixed port instead of a random one, plus you probably don't want it popping open a browser window on a headless box:

```bash
mindwalk serve --port 4317 --no-open
```

Point it at a specific project if you don't want it scanning everything:

```bash
mindwalk serve --port 4317 --claude-dir ~/.claude/projects/my-repo --no-open
```

There are two other commands worth knowing about even if you don't need them day to day: `mindwalk build <repo>` generates the citymap JSON for a repository on its own, and `mindwalk trace <session>` normalizes a single session log into trace JSON. Both are useful if you want to script something around Mindwalk's output instead of using the UI.

## Sharing the replay with Pinggy

`localhost:4317` only means something on the machine running it. If you want a teammate to look at a replay during a PR discussion, or you want to check what your agent did last night from your phone on the train, you need that port reachable from outside your machine. Pinggy tunnels a local port to a public HTTPS URL over SSH, no signup and no config for the free tier:

```bash
ssh -p 443 -R0:localhost:4317 free.pinggy.io
```

Pinggy prints something like:

```
You are assigned a random subdomain: https://abc123.a.pinggy.link
```

That URL now serves your Mindwalk instance to anyone who has it, over HTTPS, from anywhere. Drop it in a Slack message or a PR comment and a teammate can scrub through the exact same replay you're looking at, no cloning the repo or copying session logs required.

Since a Mindwalk replay effectively shows the shape of your codebase's file tree along with what an agent read and edited, treat the URL like you would any other code-adjacent link. If you're sharing outside a trusted team, add HTTP basic auth to the tunnel:

```bash
ssh -p 443 -R0:localhost:4317 a.pinggy.io -t "b:myuser:mypassword"
```

That's enough to keep the link from being casually stumbled on while you're using it for a demo or a one-off review; it isn't a substitute for real access control if you're leaving it up long-term.

## Where this fits in a real workflow

**Reviewing agent-authored PRs.** Instead of trusting a diff plus a written summary, pull up the replay before you approve. If the agent edited a file it never read, or made a change after only skimming a loosely related file, that's worth a second look before merging.

**Debugging a bad agent run.** When an agent goes down the wrong path, the replay shows you where the wrong turn happened. Did it never find the right file, or did it find it, read it, and edit the wrong thing anyway? Those are different failure modes with different fixes - better retrieval versus a better prompt.

**Comparing prompts or scaffolds.** Run the same task against two different system prompts or two different agent harnesses, and compare the two Mindwalk replays side by side. Because citymap layout is deterministic per repo, the comparison is visual and immediate instead of a diff between two log files.

**Teaching or onboarding.** Showing a new team member how an agent explores an unfamiliar codebase is a decent way to demonstrate both the codebase's structure and the agent's search strategy at the same time.

## What's rough around the edges right now

This is a young project - the GitHub release history shows v0.1.0 landing July 11, 2026, days before this post. Only Claude Code and Codex are supported; if your team is running Cursor, Windsurf, or something in-house, there's no adapter yet, though the trace/citymap split is designed to make adding one straightforward. There's no persistence layer for annotations - if you want to mark up a replay for a teammate, you're pointing them at timestamps in a message, not leaving comments inside the tool. And since it's a single Go binary reading local files, there's no built-in multi-user story: two people looking at the same tunnel URL are both looking at the same local server, not separate sessions.

None of that is disqualifying for what it's actually for, which is a quick, honest look at what your agent did before you decide to trust the result.

## Conclusion

The interesting thing about Mindwalk isn't the 3D rendering, it's the underlying idea: agent work is auditable the same way test coverage or a profiler trace is auditable, if someone bothers to build the visualization. As more of the actual editing work in a codebase gets done by an agent instead of a person, tools like this stop being a novelty and start being closer to a review requirement. The <a href="https://github.com/cosmtrek/mindwalk" target="_blank">Mindwalk repo</a> is a fast install and a five-minute first look; pairing it with a Pinggy tunnel is what turns "I can see this on my machine" into "here, look at what it actually did."
