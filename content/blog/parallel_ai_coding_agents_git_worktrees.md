---
title: "Running Several AI Coding Agents at Once with Git Worktrees"
description: "Git worktrees let you check out several branches of one repo into separate folders that share a single .git, so Claude Code, Codex, or any agent can work on each one without touching the others' files."
date: 2026-11-05T11:00:00+05:30
lastmod: 2026-11-05T11:00:00+05:30
draft: false
tags: ["git worktrees", "Claude Code", "AI coding agents", "developer tools", "CLI tools"]
og_image: "images/parallel_ai_coding_agents_git_worktrees/parallel_ai_coding_agents_git_worktrees_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlJ1bm5pbmcgU2V2ZXJhbCBBSSBDb2RpbmcgQWdlbnRzIGF0IE9uY2Ugd2l0aCBHaXQgV29ya3RyZWVzIiwKICAiZGVzY3JpcHRpb24iOiAiR2l0IHdvcmt0cmVlcyBsZXQgeW91IGNoZWNrIG91dCBzZXZlcmFsIGJyYW5jaGVzIG9mIG9uZSByZXBvIGludG8gc2VwYXJhdGUgZm9sZGVycyB0aGF0IHNoYXJlIGEgc2luZ2xlIC5naXQsIHNvIENsYXVkZSBDb2RlLCBDb2RleCwgb3IgYW55IGFnZW50IGNhbiB3b3JrIG9uIGVhY2ggb25lIHdpdGhvdXQgdG91Y2hpbmcgdGhlIG90aGVycycgZmlsZXMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3BhcmFsbGVsX2FpX2NvZGluZ19hZ2VudHNfZ2l0X3dvcmt0cmVlcy9wYXJhbGxlbF9haV9jb2RpbmdfYWdlbnRzX2dpdF93b3JrdHJlZXNfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTEtMDVUMTE6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0wNVQxMTowMDowMCswNTozMCIKfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "parallel_ai_coding_agents_git_worktrees/parallel_ai_coding_agents_git_worktrees_banner.webp" "One repository branching into three separate git worktree folders, each running its own AI agent session" >}}

If you run two terminal-based coding agents on the same checkout, the second one will eventually stomp on the first. Both read and write the same files on disk, so one agent's half-finished edit becomes the other's merge conflict, or worse, its silently wrong context. The fix that's quietly become the default pattern this year is `git worktree`: check out several branches of the same repository into separate folders that all share one `.git` directory, and point one agent at each folder.

It's not a new git feature. `git worktree` has existed since Git 2.5, released in 2015. What's new is that agents like Claude Code and Codex can now run long, unsupervised tasks, so a developer managing five or ten of them at once needs a cheap way to give each one its own floor to work on without cloning the repo five or ten times.

{{% tldr %}}
1. **`git worktree add` checks out a branch into a new folder that shares the same `.git` object store**, so you get isolated working directories without the disk cost of a full clone.
2. Git refuses to check out **the same branch in two worktrees at once**, which is exactly the guardrail that keeps two agents from editing the same branch underneath each other.
3. **Claude Code ships a native `claude --worktree <name>` flag** that creates the worktree and starts a session in it in one step.
4. Plain `git worktree` commands get tedious past two or three agents, which is why **worktrunk**, a CLI wrapper, passed **11,300 GitHub stars** by addressing worktrees by branch name and giving each one its own dev-server port.
5. Conductor, a Mac app built entirely around one-worktree-per-agent, **was acquired by Meta on November 4, 2026**; its cloud product shuts down on November 20, which is as good a signal as any of how fast this workflow went mainstream.
{{% /tldr %}}

## Why one working directory isn't enough for two agents

A git checkout is one working directory with one `HEAD`. Every file on disk reflects exactly one branch at a time. That's fine for a human working on one task, but an agent that edits files directly (not just proposes diffs) needs exclusive use of that directory for as long as it's running.

Point a second agent at the same folder and you get one of two outcomes. Either it edits the same files the first agent is mid-way through, and you end up with a file that's half old code and half new code from two unrelated tasks, or it picks a different file but the two end up disagreeing about dependency versions, generated code, or anything else that depends on repo-wide state like `node_modules` or `.env`. Either way, you're debugging an interleaving bug instead of reviewing two finished changes.

{{< image "parallel_ai_coding_agents_git_worktrees/shared_dir_vs_worktree.webp" "Two agents editing the same checkout and colliding on a file, next to three agents each isolated in its own git worktree sharing one .git directory" >}}

*One shared folder lets two agents collide on the same files. Separate worktrees give each agent its own floor while still sharing one repository.*

## How `git worktree` actually keeps them apart

`git worktree add ../my-app.feature-a -b feature-a` does two things: it creates a new branch called `feature-a` from the current `HEAD`, and it checks it out into a brand-new folder, `../my-app.feature-a`, instead of the one you're standing in. That folder is a full working tree: all the files, ready to edit and run. What it doesn't have is its own copy of the object database. Commits, the diff history, every blob and tree object, those stay in the one `.git` directory of the original ("main") checkout.

Each linked worktree gets a small private directory under `.git/worktrees/<name>` that holds just the things that have to be per-checkout: `HEAD`, the index, and a couple of pseudo-refs. Everything else, branches, tags, the reflog, is shared and visible from every worktree immediately. Commit in one worktree and `git log` in another sees it right away, per the <a href="https://git-scm.com/docs/git-worktree" target="_blank">git-worktree manual</a>.

The one restriction that actually matters for agents: git refuses to check out a branch that's already checked out in another worktree, unless you pass `--force`. That's the whole safety mechanism. As long as each agent gets its own branch, two agents can never end up editing the same checked-out branch by accident, because git itself won't let the second one open it.

```bash
git worktree add ../my-app.feature-a -b feature-a   # agent 1 works here
git worktree add ../my-app.feature-b -b feature-b   # agent 2 works here
git worktree list                                    # see every active worktree
git worktree remove ../my-app.feature-a              # done, clean up (worktree must be clean)
```

`git worktree remove` only works on a clean tree, no uncommitted changes, no untracked files, which is a reasonable thing to want anyway before you throw away an agent's workspace. Submodules are explicitly called out in the manual as not well supported across multiple worktrees, so a monorepo with submodules is the one place this pattern gets shakier.

## Claude Code's own `--worktree` flag

You don't need a separate tool to try this. Claude Code added a native flag for it, documented at <a href="https://code.claude.com/docs/en/common-workflows" target="_blank">code.claude.com/docs/en/common-workflows</a>:

```bash
claude --worktree feature-auth
```

Run it in one terminal, then run `claude --worktree feature-bugfix` in a second terminal, and you have two isolated sessions on the same repo, each in its own git worktree, each with its own `HEAD`. The docs note one precondition that trips people up on a brand-new repo: this needs at least one commit to branch from, and running it against a repo with zero commits fails with `Failed to resolve base branch "HEAD": git rev-parse failed`.

That's genuinely the whole feature. It's `git worktree add` under the hood, wired to also start the session. For two or three agents, you don't need anything else.

## Where plain worktrees get tedious, and why worktrunk showed up

The friction shows up once you're running more than a couple. Every worktree needs a name, a path, and usually a `cd` before you can do anything in it. If your dev server binds to a fixed port, two worktrees running the app at once will fight over that port, so now you're tracking which worktree got which port by hand. And `node_modules` or a Rust `target/` directory, both expensive to rebuild, don't exist in a fresh worktree until you install or build again, once per worktree.

This is the gap <a href="https://github.com/max-sixty/worktrunk" target="_blank">worktrunk</a> fills. It's a CLI, written in Rust, that reached about 11,300 GitHub stars and 426 forks within its first year, dual-licensed MIT/Apache-2.0, built by GitHub user max-sixty specifically, per its README, for "parallel AI agent workflows." Instead of paths, it addresses worktrees by branch name:

```bash
wt switch -c feat-a -x claude     # create a worktree for branch feat-a, start Claude in it
wt switch -c feat-b -x claude     # same, for feat-b, in a second terminal
wt list                           # every worktree with status, ahead/behind, CI state
wt merge feat-a                   # squash, rebase onto the target branch, merge, clean up
```

Three things in worktrunk map directly onto the problems above:

- A **`hash_port` template filter** derives a different, stable port per worktree from its branch name, so each one's dev server binds somewhere that doesn't collide with the others.
- **Copy-on-write sharing** of build caches on filesystems that support it (APFS, btrfs, XFS) means ten worktrees can share `node_modules` or `target/` without rebuilding ten times.
- **Hooks** run on worktree creation and around merges, so "install dependencies, then start the dev server" happens automatically every time a new worktree spins up.

None of this changes what `git worktree` is doing underneath. It's the same `add`/`remove`/shared-`.git` mechanics from the section above, with the bookkeeping scripted away.

## Conductor bet the same way, and Meta just bought it

If you wanted a second data point that this specific pattern, one agent, one branch, one worktree, is where the market actually settled, Conductor is it. It's a Mac app built around running several Claude Code or Codex sessions in parallel, and its own docs describe the mechanism in the same terms as above: each new workspace is its own git worktree and branch, based on the repo's configured base branch, fetched fresh from origin first. It adds a GUI on top: a sidebar per workspace, diff review, CI checks, and a PR flow, plus an `.worktreeinclude`-style setting to copy over git-ignored files like `.env.local` that a fresh worktree wouldn't otherwise have.

On November 4, 2026, Conductor <a href="https://www.conductor.build/announcement" target="_blank">announced it's joining Meta</a>. The local Mac app keeps working and gets critical fixes through early 2027, but Conductor Cloud goes read-only on November 13 and shuts down on November 20; existing Pro subscribers get a refund and keep their pro features free in the meantime. New signups and downloads were cut off as of November 4. A company built entirely on "run AI agents in worktrees, review the diffs, open the PR" getting acqui-hired into Meta the same month a worktree-management CLI quietly passed 11,000 stars on GitHub isn't a coincidence; it's two signals for the same underlying shift.

## Previewing one worktree's dev server without opening a port on your router

Once each worktree runs its own dev server on its own port, courtesy of a `hash_port`-style setup or a setup script, you sometimes want to show one of them to someone else: a teammate reviewing agent 2's change on their own machine, or just checking agent 3's output on your phone. The server is only bound to `localhost` on your laptop, so neither of those can reach it directly.

A Pinggy SSH tunnel solves that without touching router settings or deploying anything, and because each worktree already has a distinct port, you point the tunnel at exactly the one you want to share:

```bash
ssh -p 443 -R0:localhost:5174 free.pinggy.io -T
```

That opens an outbound SSH connection from your laptop to Pinggy's server, which hands back a public HTTPS URL like `https://abc123.a.pinggy.link`. The connection runs the other direction from a normal server: your laptop initiates it, so nothing needs to be opened or forwarded on your network. Swap `5174` for whichever worktree's port you want to expose at the moment; closing the SSH session (or killing it with `Ctrl+C`) takes the URL down.

{{< image "parallel_ai_coding_agents_git_worktrees/worktree_preview_tunnel.webp" "Sequence diagram of a teammate's phone reaching worktree feat-b's dev server on port 5174 through a Pinggy SSH tunnel, while feat-a and feat-c stay local" >}}

*Each worktree's dev server lives on its own port, so a Pinggy tunnel can expose exactly one agent's work without touching the others.*

## Try it on your own repo

The cheapest way to see whether this is worth adopting is to not install anything yet. Run `claude --worktree try-a` in one terminal and `claude --worktree try-b` in another, on any repo with at least one commit, and watch `git worktree list` fill in as you go. If you're still doing this by hand after the third or fourth agent, that's the point where reaching for worktrunk (or Conductor's GUI, if you're on an Apple Silicon Mac) starts paying for itself; if you stop at two or three, plain `git worktree` and a couple of terminal tabs is already enough.
