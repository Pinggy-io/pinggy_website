---
title: "Run Your Homelab from a Git Repo an AI Coding Agent Can Edit"
description: "Keep every Docker Compose stack in one Git repo, let an AI coding agent edit it, let Renovate open image update PRs, and deploy on push with a self-hosted runner. No inbound ports, real configs and real Renovate output."
date: 2026-11-27T10:00:00+05:30
lastmod: 2026-11-27T10:00:00+05:30
draft: false
tags: ["homelab", "self-hosted", "AI coding agents", "Docker", "DevOps"]
og_image: "images/homelab_git_repo_ai_coding_agent/homelab_git_repo_ai_coding_agent_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIHJ1biBhIGhvbWVsYWIgZnJvbSBhIEdpdCByZXBvIHdpdGggYW4gQUkgY29kaW5nIGFnZW50LCBSZW5vdmF0ZSBhbmQgcHVzaC10by1kZXBsb3kiLAogICJkZXNjcmlwdGlvbiI6ICJLZWVwIGV2ZXJ5IERvY2tlciBDb21wb3NlIHN0YWNrIGluIG9uZSBHaXQgcmVwbywgbGV0IGFuIEFJIGNvZGluZyBhZ2VudCBlZGl0IGl0LCBsZXQgUmVub3ZhdGUgb3BlbiBpbWFnZSB1cGRhdGUgUFJzLCBhbmQgZGVwbG95IG9uIHB1c2ggd2l0aCBhIHNlbGYtaG9zdGVkIHJ1bm5lci4gTm8gaW5ib3VuZCBwb3J0cywgcmVhbCBjb25maWdzIGFuZCByZWFsIFJlbm92YXRlIG91dHB1dC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaG9tZWxhYl9naXRfcmVwb19haV9jb2RpbmdfYWdlbnQvaG9tZWxhYl9naXRfcmVwb19haV9jb2RpbmdfYWdlbnRfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTEtMjdUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yN1QxMDowMDowMCswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJQdXQgZWFjaCBzdGFjayBpbiBpdHMgb3duIGZvbGRlciIsICJ0ZXh0IjogIlN0b3JlIGVhY2ggc2VydmljZSBhcyBzdGFja3MvPG5hbWU+L2NvbXBvc2UueWFtbCBpbiBhIHByaXZhdGUgR2l0IHJlcG8sIHBpbiBldmVyeSBpbWFnZSB0byBhbiBleGFjdCB0YWcsIGFuZCBnaXRpZ25vcmUgc3RhY2tzLyovZGF0YS8gYW5kIHN0YWNrcy8qLy5lbnYuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiR2l2ZSB0aGUgYWdlbnQgcnVsZXMgYW5kIGEgY2hlY2siLCAidGV4dCI6ICJBZGQgYW4gQUdFTlRTLm1kIHdpdGggdGhlIHJlcG8gcnVsZXMgYW5kIGEgc2NyaXB0cy9jaGVjay5zaCB0aGF0IHJ1bnMgZG9ja2VyIGNvbXBvc2UgLWYgPGZpbGU+IGNvbmZpZyAtcSBmb3IgZXZlcnkgc3RhY2suIFJ1biBpdCBvbiBldmVyeSBwdWxsIHJlcXVlc3Qgb24gYSBHaXRIdWItaG9zdGVkIHJ1bm5lci4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJBZGQgUmVub3ZhdGUiLCAidGV4dCI6ICJBZGQgYSByZW5vdmF0ZS5qc29uIGV4dGVuZGluZyBjb25maWc6cmVjb21tZW5kZWQsIGF1dG8tbWVyZ2UgRG9ja2VyIHBhdGNoIHVwZGF0ZXMgYW5kIHJlcXVpcmUgRGVwZW5kZW5jeSBEYXNoYm9hcmQgYXBwcm92YWwgZm9yIG1ham9ycy4gUHJldmlldyB3aXRoIG5weCByZW5vdmF0ZUA0NS4xLjIgLS1wbGF0Zm9ybT1sb2NhbCAtLWRyeS1ydW49bG9va3VwIG9uIE5vZGUgMjQuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiRGVwbG95IG9uIHB1c2ggd2l0aCBhIHNlbGYtaG9zdGVkIHJ1bm5lciIsICJ0ZXh0IjogIkluc3RhbGwgYSBHaXRIdWIgQWN0aW9ucyBzZWxmLWhvc3RlZCBydW5uZXIgb24gdGhlIHNlcnZlciB3aXRoIHRoZSBsYWJlbCBob21lbGFiLiBPbiBwdXNoIHRvIG1haW4sIHJ1biBnaXQgLUMgL3Nydi9ob21lbGFiIHB1bGwgLS1mZi1vbmx5IGFuZCBzY3JpcHRzL2RlcGxveS5zaCwgd2hpY2ggcnVucyBkb2NrZXIgY29tcG9zZSBwdWxsIGFuZCBkb2NrZXIgY29tcG9zZSB1cCAtZCAtLXJlbW92ZS1vcnBoYW5zIGZvciBlYWNoIHN0YWNrLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkV4cG9zZSBvbmUgc3RhY2sgd2l0aCBhIFBpbmdneSB0dW5uZWwiLCAidGV4dCI6ICJBZGQgYSBwaW5nZ3kvcGluZ2d5IHNlcnZpY2UgdG8gdGhlIHN0YWNrIHdpdGggY29tbWFuZCAtcCA0NDMgLVIwOnVwdGltZS1rdW1hOjMwMDEgJHtQSU5HR1lfVE9LRU59QHByby5waW5nZ3kuaW8gYjphZG1pbjoke0tVTUFfVFVOTkVMX1BBU1N9IGFuZCBrZWVwIHRoZSB0b2tlbiBhbmQgcGFzc3dvcmQgaW4gdGhlIHN0YWNrJ3MgLmVudiBmaWxlLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "homelab_git_repo_ai_coding_agent/homelab_git_repo_ai_coding_agent_banner.webp" "Flow from an AI coding agent to a Git repo with Renovate, to a Docker home server, to a Pinggy public URL, above the command git push origin main" >}}

If your home server's config already lives in Git as Docker Compose files, an AI coding agent can work on it like any other codebase: it reads the repo, edits a `compose.yaml`, runs a check and opens a pull request. Add Renovate to open a PR every time an image tag goes stale, and a self-hosted GitHub Actions runner on the server to apply whatever lands on `main`, and updating a service turns into reviewing a diff. The server never accepts an inbound connection for any of this: the runner, the agent's pushes and Renovate all talk outward over HTTPS.

{{% tldr %}}
1. **One repo, one folder per stack.** `stacks/<name>/compose.yaml` plus an `AGENTS.md` that tells the agent the rules. Secrets and data stay on the server, gitignored.
2. **The agent edits the repo, never the server.** It opens PRs; a check job runs `docker compose config -q` on every one. No SSH key for the agent.
3. **Renovate finds stale image tags for you.** On a 2-stack test repo it found 3 images and proposed 6 updates, including Forgejo `9.0.0 -> 17.0.2`. Auto-merge patches, hold majors for a click.
4. **A self-hosted runner deploys on push.** It polls GitHub over outbound HTTPS on port 443, so no port forwarding. Keep the repo private: GitHub says self-hosted runners should almost never serve public repos.
5. **Reaching a service from outside is a separate step.** Put a Pinggy tunnel with basic auth in the stack's own compose file, so it's versioned and updated like everything else.
{{% /tldr %}}

## The shape of the repo

The worked example through this whole post is a small home server running two stacks: Uptime Kuma (a status page and uptime monitor, port 3001) and Forgejo (a self-hosted Git forge, ports 3000 and 2222). The repo looks like this:

```
homelab/
  AGENTS.md
  renovate.json
  .gitignore
  .github/workflows/
    check.yml
    deploy.yml
  scripts/
    check.sh
    deploy.sh
  stacks/
    forgejo/compose.yaml
    uptime-kuma/compose.yaml
```

One folder per stack keeps each `docker compose` project small and gives it its own name (Compose uses the folder name as the project name, so the Uptime Kuma network becomes `uptime-kuma_default`). It also makes the agent's job easier: "add Paperless" means "create `stacks/paperless/compose.yaml`", and the diff shows exactly that.

The Forgejo stack is as plain as it gets:

```yaml
services:
  forgejo:
    image: codeberg.org/forgejo/forgejo:9.0.0
    restart: unless-stopped
    ports:
      - "3000:3000"
      - "2222:22"
    volumes:
      - ./data:/data
```

Two things never go in Git: the `data/` folders the containers write to, and the `.env` files that hold passwords and tokens. The `.gitignore` is two lines:

```
stacks/*/data/
stacks/*/.env
```

The server keeps a long-lived checkout of the repo at `/srv/homelab`. Data and `.env` files sit inside that checkout, ignored by Git, so a `git pull` updates the compose files and leaves everything else alone. That one decision is what makes push-to-deploy safe: the deploy step never clones fresh, so it can't lose a database.

## How the agent works on it

Claude Code, Codex, Cursor and most other agents read an `AGENTS.md` at the repo root. Claude Code now reads `AGENTS.md` on its own when there's no `CLAUDE.md` next to it (see the {{< link href="https://code.claude.com/docs/en/memory" >}}memory docs{{< /link >}}), so one file covers all of them. Keep it short and specific to this repo:

```markdown
# Homelab repo

- One stack per folder in stacks/<name>/compose.yaml. Folder name = service name.
- Always pin images to an exact version tag. Never use :latest.
- Never commit stacks/*/.env or stacks/*/data/. Reference secrets as ${VAR}
  and list each new variable in stacks/<name>/.env.example.
- Bind container ports to 127.0.0.1 unless the service must be reached on the LAN.
- Run ./scripts/check.sh before every commit. It must print "ok" for every stack.
- Work on a branch and open a PR. Do not push to main. Do not ssh anywhere.
```

The "pin to an exact tag" rule matters for two reasons. Renovate can only propose an update for a version it can read, and `:latest` gives it nothing to compare. And a pinned tag is what makes a rollback a `git revert` instead of a guessing game.

`scripts/check.sh` is the agent's feedback loop. It asks Compose to parse and validate every file without starting anything:

```bash
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
for f in stacks/*/compose.yaml; do
  docker compose -f "$f" config -q
  echo "ok  $f"
done
```

On the example repo it prints:

```
ok  stacks/forgejo/compose.yaml
ok  stacks/uptime-kuma/compose.yaml
```

Rename `ports:` to `port:` in the Forgejo file and it stops with exit code 1:

```
validating /srv/homelab/stacks/forgejo/compose.yaml: services.forgejo.port false schema
```

Know what this check doesn't catch. It validates the Compose schema, not your intent. I changed `restart: unless-stopped` to `restart: unless-stoped` and `config -q` still exited 0. A missing `${PINGGY_TOKEN}` is a warning ("Defaulting to a blank string"), not an error. The check stops the agent from merging a file Compose can't read; it doesn't stop it from merging a wrong one. That part is still your review.

Run the same script on GitHub's hosted runners for every pull request, so Renovate's PRs and the agent's PRs get checked without touching your server:

```yaml
# .github/workflows/check.yml
name: check
on: pull_request
jobs:
  compose-config:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./scripts/check.sh
```

### Keep the agent off the server

The agent edits files in a checkout on your laptop. It doesn't get an SSH key to the server, and it doesn't need one, because the deploy path in the next section does the applying. If you use Claude Code, a project `.claude/settings.json` can deny the obvious reaches:

```json
{
  "permissions": {
    "deny": [
      "Bash(ssh *)",
      "Read(./stacks/*/.env)"
    ]
  }
}
```

Treat that as a speed bump, not a sandbox. Deny rules match command patterns, and a determined or confused agent can find a different command. The real boundary is that the laptop has no credentials for the server in the first place.

{{< image "homelab_git_repo_ai_coding_agent/homelab_gitops_loop.webp" "Architecture of a Git-driven homelab: an AI agent on a laptop pushes to a private GitHub repo, Renovate opens update PRs, and a self-hosted runner on the home server polls GitHub over outbound HTTPS 443, pulls the repo and starts the Docker stacks" >}}

*The home server only ever makes outbound connections. GitHub never connects to it. Source for the runner behaviour: {{< link href="https://docs.github.com/en/actions/reference/runners/self-hosted-runners" >}}GitHub Actions docs{{< /link >}}.*

## Letting Renovate find the updates

{{< link href="https://docs.renovatebot.com/" >}}Renovate{{< /link >}} scans a repo for dependency versions and opens a pull request per update. Its `docker-compose` manager looks at every file matching `/(^|/)(?:docker-)?compose[^/]*\.ya?ml$/`, so `stacks/*/compose.yaml` is picked up with no extra config. On GitHub, the hosted Mend Renovate app does the scheduling; on Forgejo or Gitea you run Renovate yourself (it has `forgejo` and `gitea` platforms).

This is the config I used. Patches merge themselves once the check passes; majors don't even get a PR until you tick a box on Renovate's Dependency Dashboard issue:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "packageRules": [
    {
      "matchDatasources": ["docker"],
      "matchUpdateTypes": ["patch"],
      "automerge": true
    },
    {
      "matchDatasources": ["docker"],
      "matchUpdateTypes": ["major"],
      "dependencyDashboardApproval": true
    }
  ]
}
```

`renovate-config-validator` accepts it. To see what Renovate would do before giving it access to anything, run it against the local checkout in lookup-only mode. Renovate 45.1.2 needs Node 24 or 26 (`"node": "^24.22.3 || ^26.13.1"` in its `package.json`); on Node 22 it crashes on `RegExp.escape is not a function`.

```bash
npx renovate@45.1.2 --platform=local --dry-run=lookup
```

On the example repo, on November 27, 2026, the extraction step reported `"docker-compose": {"fileCount": 2, "depCount": 3}` and the lookups came back with:

| Image | Pinned | Patch PR | Major |
|---|---|---|---|
| `codeberg.org/forgejo/forgejo` | `9.0.0` | `9.0.3` | `17.0.2` |
| `louislam/uptime-kuma` | `1.23.13` | `1.23.17` | `2.5.12` |
| `pinggy/pinggy` | `0.4.0` | `0.4.2` | none |

Each update gets its own branch, named like `renovate/louislam-uptime-kuma-1.x` for the patch and `renovate/louislam-uptime-kuma-2.x` for the major, so you can merge the safe one today and sit on the other.

That Forgejo row is the case for holding majors back. Going from 9 to 17 skips eight major releases, each with its own upgrade notes. That is exactly the PR you want an agent to help with ("read the Forgejo release notes from 10 to 17 and list every breaking change that touches a Docker install"), and exactly the PR you don't want merged by a bot at 3 a.m.

{{< image "homelab_git_repo_ai_coding_agent/renovate_update_policy.webp" "Flowchart of Renovate update handling for forgejo 9.0.0, uptime-kuma 1.23.13 and pinggy 0.4.0: patch updates auto-merge, minor updates get a PR, major updates to forgejo 17.0.2 and uptime-kuma 2.5.12 wait for approval" >}}

*The 6 updates Renovate found on the example repo, sorted by how much trust each one gets. Data: renovate 45.1.2 dry run, November 27, 2026.*

## Deploying on push with a self-hosted runner

The last piece applies `main` to the server. A GitHub Actions self-hosted runner is a small service you install on the server; it "connects to GitHub to receive job assignments", and the only network requirement is that "the host machine must be able to make outbound HTTPS connections over port 443" ({{< link href="https://docs.github.com/en/actions/reference/runners/self-hosted-runners" >}}GitHub docs{{< /link >}}). That's why this works behind CG-NAT or a router you don't control.

Register the runner with a `homelab` label, run it as a user in the `docker` group with read access to `/srv/homelab`, and give that checkout a read-only deploy key so `git pull` works. Then the workflow is short:

```yaml
# .github/workflows/deploy.yml
name: deploy
on:
  push:
    branches: [main]
    paths: ["stacks/**", "scripts/**"]
concurrency: deploy
jobs:
  deploy:
    runs-on: [self-hosted, homelab]
    steps:
      - run: |
          git -C /srv/homelab pull --ff-only
          /srv/homelab/scripts/deploy.sh
```

There's no `actions/checkout` step on purpose. The job works in the persistent checkout, where the `.env` files and `data/` folders live, rather than in a fresh clone in the runner's work directory. `concurrency: deploy` stops two merges from deploying on top of each other.

`deploy.sh` walks every stack:

```bash
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

for dir in stacks/*/; do
  echo "==> ${dir}"
  docker compose -f "${dir}compose.yaml" pull --quiet
  docker compose -f "${dir}compose.yaml" up -d --remove-orphans
done
```

Looping over every stack on each push sounds wasteful, but `docker compose up -d` only recreates containers whose config or image changed. A Renovate PR that bumps Uptime Kuma restarts Uptime Kuma and leaves Forgejo running. `--remove-orphans` cleans up a service you deleted from a compose file, which is the one cleanup people forget.

Two warnings from GitHub's own docs, and they're not boilerplate. Self-hosted runners "should almost never be used for public repositories", because anyone can open a pull request and run code on your machine. And on a private repo, anyone with read access who can open a PR can do the same. This setup avoids the worst of it in two ways: the check job runs on `ubuntu-latest`, and the deploy job only triggers on `push` to `main`. Keep the repo private anyway, and keep branch protection on `main` so the agent and Renovate can't merge around the check.

Forgejo Actions works the same way with `forgejo-runner`. It reads `.forgejo/workflows/` and falls back to `.github/workflows/` when that folder doesn't exist, so the same files mostly carry over.

{{< image "homelab_git_repo_ai_coding_agent/homelab_update_before_after.webp" "Side by side: five manual steps to update Uptime Kuma, including ssh into the server, versus four steps where Renovate opens the PR, the check passes, you merge and the runner deploys" >}}

## Reaching a stack from outside with Pinggy

Everything so far keeps the server closed. Sometimes you do want one service reachable from outside: Uptime Kuma's status page on your phone, or Forgejo for a friend. Opening a router port is teh path most people regret, and on CG-NAT it isn't even an option.

A Pinggy tunnel fits this repo well because it can live in the stack's own compose file. The tunnel container dials out to Pinggy over SSH on port 443, the same outbound-only pattern as the runner, and Pinggy forwards the public HTTPS URL back down it. Here's the Uptime Kuma stack with a tunnel and basic auth:

```yaml
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1.23.13
    restart: unless-stopped
    volumes:
      - ./data:/app/data

  tunnel:
    image: pinggy/pinggy:0.4.0
    restart: unless-stopped
    command: -p 443 -R0:uptime-kuma:3001 ${PINGGY_TOKEN}@pro.pinggy.io b:admin:${KUMA_TUNNEL_PASS}
    depends_on:
      - uptime-kuma
    stdin_open: true
    tty: true
```

`-R0:uptime-kuma:3001` uses the Compose service name, not `localhost`, because both containers share the stack's network. Note the Uptime Kuma service no longer publishes a host port at all. `b:admin:${KUMA_TUNNEL_PASS}` adds HTTP basic auth at Pinggy's edge, so a scanner hitting the URL gets a 401 before it ever reaches Uptime Kuma's login page. For something only you use, `w:<your-ip>/32` restricts the tunnel to an IP allowlist instead. The flags are in the [Pinggy CLI docs](https://pinggy.io/docs/cli/) and the Compose pattern is in the [Docker docs](https://pinggy.io/docs/docker/).

`PINGGY_TOKEN` and `KUMA_TUNNEL_PASS` go in `stacks/uptime-kuma/.env` on the server, never in Git. A Pro token is what makes this a permanent setup: free tunnels on `free.pinggy.io` last 60 minutes and come back with a new random URL, while a token with a subdomain set in the [dashboard](https://dashboard.pinggy.io) keeps the same address across restarts. For a quick test from your laptop, the free tunnel needs nothing:

```bash
ssh -p 443 -R0:localhost:3001 free.pinggy.io -T -- b:admin:change-me
```

The nice side effect: the tunnel image is pinned too, so Renovate already picked it up in the dry run above (`pinggy/pinggy 0.4.0 -> 0.4.2`). Your public entry point gets updated through the same PR flow as everything behind it. For deeper background on why this works behind a carrier NAT, see [accessing a home server behind CG-NAT](/blog/access_home_server_raspberry_pi_behind_cgnat/).

One honest limit: a tunnel makes the service reachable, it doesn't make it safe. If the app behind it has a bad CVE, basic auth at the edge is what's buying you time, so keep Renovate's patch auto-merge on for anything you expose.

## Where to start

You don't need all of this on day one. In order of payoff:

1. Move the compose files you already have into `stacks/<name>/compose.yaml`, pin every tag, gitignore `data/` and `.env`, and push it to a private repo.
2. Add `scripts/check.sh` and the `check.yml` workflow, then ask your agent to do one small real task ("add a healthcheck to Forgejo") and read the PR it opens.
3. Run `npx renovate@45.1.2 --platform=local --dry-run=lookup` in the repo to see how stale your images are. Then install the Renovate app.
4. Install the self-hosted runner and `deploy.yml` last, once you trust the PRs you're merging.

Step 3 alone is worth the ten minutes. Most homelabs I've seen have at least one image several majors behind, and recieving a list of them in one run is a lot nicer than finding out from a CVE thread.
