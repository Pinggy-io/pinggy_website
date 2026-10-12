---
title: "The Zod Repo Compromise: A Stolen Git Credential and an Ethereum-Hosted Loader"
description: "On September 21, 2026 a malicious commit landed on zod's main branch with an install-time loader that asks an Ethereum contract where to download its payload. Here is how it worked, why npm never shipped it, and how to check your own installs."
date: 2026-10-12T08:00:00+05:30
lastmod: 2026-10-12T08:00:00+05:30
draft: false
tags: ["Zod", "supply chain security", "npm", "security"]
og_image: "images/zod_repo_compromise_git_credential/zod_repo_compromise_git_credential_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlRoZSBab2QgUmVwbyBDb21wcm9taXNlOiBBIFN0b2xlbiBHaXQgQ3JlZGVudGlhbCBhbmQgYW4gRXRoZXJldW0tSG9zdGVkIExvYWRlciIsCiAgImRlc2NyaXB0aW9uIjogIk9uIFNlcHRlbWJlciAyMSwgMjAyNiBhIG1hbGljaW91cyBjb21taXQgbGFuZGVkIG9uIHpvZCdzIG1haW4gYnJhbmNoIHdpdGggYW4gaW5zdGFsbC10aW1lIGxvYWRlciB0aGF0IGFza3MgYW4gRXRoZXJldW0gY29udHJhY3Qgd2hlcmUgdG8gZG93bmxvYWQgaXRzIHBheWxvYWQuIEhlcmUgaXMgaG93IGl0IHdvcmtlZCwgd2h5IG5wbSBuZXZlciBzaGlwcGVkIGl0LCBhbmQgaG93IHRvIGNoZWNrIHlvdXIgb3duIGluc3RhbGxzLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy96b2RfcmVwb19jb21wcm9taXNlX2dpdF9jcmVkZW50aWFsL3pvZF9yZXBvX2NvbXByb21pc2VfZ2l0X2NyZWRlbnRpYWxfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0xMlQwODowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTEyVDA4OjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvem9kX3JlcG9fY29tcHJvbWlzZV9naXRfY3JlZGVudGlhbC8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIlNlY3VyaXR5IiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJ6b2QgY29tcHJvbWlzZWQsIHpvZCA0LjYuNiwgbnBtIHN1cHBseSBjaGFpbiBhdHRhY2ssIHByZWluc3RhbGwgc2NyaXB0IG1hbHdhcmUsIEV0aGVySGlkaW5nLCBjaGVjayBucG0gcGFja2FnZSBmb3IgbWFsd2FyZSIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJab2QiLCAiZGVzY3JpcHRpb24iOiAiVHlwZVNjcmlwdCBzY2hlbWEgdmFsaWRhdGlvbiBsaWJyYXJ5IHdob3NlIHJlcG9zaXRvcnkgcmVjZWl2ZWQgYSBtYWxpY2lvdXMgY29tbWl0IG9uIFNlcHRlbWJlciAyMSwgMjAyNi4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIm5wbSBpbnN0YWxsIHNjcmlwdHMiLCAiZGVzY3JpcHRpb24iOiAiTGlmZWN5Y2xlIGhvb2tzIHN1Y2ggYXMgcHJlaW5zdGFsbCB0aGF0IHJ1biBjb2RlIHdoZW4gYSBwYWNrYWdlIGlzIGluc3RhbGxlZC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkV0aGVySGlkaW5nIiwgImRlc2NyaXB0aW9uIjogIlN0b3JpbmcgdGhlIGxvY2F0aW9uIG9mIGEgcGF5bG9hZCBpbiBhIGJsb2NrY2hhaW4gc21hcnQgY29udHJhY3Qgc28gaXQgY2FuIGNoYW5nZSB3aXRob3V0IGEgbmV3IHJlbGVhc2UuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJUcnVzdGVkIHB1Ymxpc2hpbmciLCAiZGVzY3JpcHRpb24iOiAiUHVibGlzaGluZyB0byBucG0gZnJvbSBDSSB0aHJvdWdoIGEgcHJvdGVjdGVkIGVudmlyb25tZW50IGluc3RlYWQgb2YgYSBsb25nLWxpdmVkIHRva2VuLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "zod_repo_compromise_git_credential/zod_repo_compromise_git_credential_banner.webp" "The Zod repo compromise: git push to main, a meta.test.mjs preinstall file, an Ethereum contract, a remote loader, and an npm registry box marked never published" >}}

On September 21, 2026, a commit titled "Fix bugs and improve performance" landed on the `main` branch of `colinhacks/zod`. It added a minified file called `meta.test.mjs` to two packages and a `preinstall` hook to their `package.json` files. The file is not a test. It reads an Ethereum smart contract to find a domain, downloads JavaScript from `https://<domain>/loader`, and runs it with the permissions of whoever ran the install.

It never shipped. The published `zod@4.6.6` on npm is clean (I downloaded it and checked, below), and the maintainer says a stolen git push credential was the way in, not an npm or GitHub token. But the commit sat in a library with a huge install base for three weeks before anyone raised an issue, and two sibling projects were hit the same morning. The incident is worth walking through because it shows what the install-script defenses cover and what they don't.

{{% tldr %}}
1. **The attack was in git, not in the npm tarball.** Malicious commits were pushed to `zod`, `standard-schema` and `nub` within about an hour on September 21, 2026.
2. **The payload is a remote loader, not a fixed payload.** The file asks an Ethereum contract for a domain, then runs whatever that domain serves, so reading the package would never tell you what it eventually does.
3. **Only `@nubjs/nub@0.9.4` reached npm's publish pipeline,** and npm's scanner blocked it before anyone could install it. Zod's release flow stopped the other two.
4. **Disable install scripts and add a release-age delay.** Those two settings cover this class of attack. Lockfiles alone do not.
{{% /tldr %}}

## What landed on September 21

The timings below are from <a href="https://github.com/orgs/community/discussions/208477" target="_blank">GitHub's security advisory discussion</a> (all UTC, 2026-09-21), which a GitHub maintainer posted with comments from a zod maintainer.

| Time | What happened |
|---|---|
| 11:56:52 | `colinhacks/zod` commit `d821685` adds the loader and install hooks |
| 12:37:19 | `standard-schema` commit `92703a5` adds the loader and an install hook |
| 12:54:48 | `nubjs/nub` commit `da01135` moves the loader into a `preinstall` script |
| 13:00:18 | `nubjs/nub` commit `d38da4f` renames it to `preinstall.js`, completing the `0.9.4` update |
| 13:09:47 | npm's static scan flags `@nubjs/nub@0.9.4` as High risk and blocks it |

In `zod`, the files were `packages/zod/meta.test.mjs` and `packages/mini/meta.test.mjs`. The name is the disguise: a `.test.mjs` file sitting next to real tests looks like noise in a diff, and the commit message says nothing about install hooks.

Per the zod maintainer, the commit was reverted the same day (PR #6620). It was reverted, not erased, so it is still in the history. A <a href="https://github.com/colinhacks/zod/issues/6658" target="_blank">GitHub issue (#6658)</a> about it was opened on October 11, the day `4.6.6` was released.

## How the loader finds its payload

The loader is a stage-1 downloader. Here is the chain, as described in the advisory:

1. Call public Ethereum RPC endpoints (`eth.llamarpc.com`, `ethereum-rpc.publicnode.com`, `cloudflare-eth.com`).
2. Read a fixed smart contract, which returns a domain name.
3. Request `https://<domain>/loader`, which returns JSON holding base64 code and a payload.
4. Write the payload to a temp directory and dynamically `import()` the decoded code.
5. Delete the temp directory and swallow any errors.

{{< image "zod_repo_compromise_git_credential/zod_loader_sequence.webp" "Sequence diagram of the Zod commit's install-time loader: the preinstall hook reads an Ethereum contract, gets a domain, requests /loader, receives code and a payload, then imports it and deletes the temp directory" >}}

*The loader asks the blockchain where to download from, so the source can move without a new release.*

The point of the contract is that the attacker can change where the code comes from without publishing anything. Takedown of the domain is a dead end for defenders: the contract can point to a new one. This pattern is usually called EtherHiding. The three RPC hosts are ordinary shared infrastructure, so seeing a connection to one of them proves nothing on its own.

The advisory notes that a captured response from the delivery domain contained two components that each only printed "game over". That response was inactive when captured, so it says nothing about what the server returned earlier or could return later.

The indicators published in the advisory:

- Delivery domain: `dsakldjklsaj33112[.]com` (defanged)
- SHA-256 of the malicious `preinstall.js`: `5ed518aaff5aebc729545b8eb223ec31927cd1bfa53169517f09cdbcc9fd5a0b`

## Why npm never shipped it

Three different things stopped three different repos, and the zod maintainer disputes the framing that npm's scanner protected everyone.

For `nub`, the release CI could be triggered by creating a tag, so the attacker's tagged push started a publish. npm held `@nubjs/nub@0.9.4` in validation, scored it High and blocked it. That is the only place npm's scanning mattered.

For `zod` and `standard-schema`, the changes never entered npm's publishing pipeline at all. The zod maintainer credits trusted publishing and a protected GitHub environment, and says `standard-schema` had already dropped token-based publishing in December. In their account, a stolen git push credential can write commits and tags to the repo, but it cannot approve a protected release environment.

{{< image "zod_repo_compromise_git_credential/zod_where_it_stopped.webp" "Flow diagram showing zod and standard-schema pushes stopped before npm, and the nub 0.9.4 release blocked by npm's scan" >}}

*Two repos were stopped by their release process, one by npm's publish-time scan.*

Two details from the comment threads are disputed and I could not settle them from the public record:

- One <a href="https://news.ycombinator.com/item?id=50052814" target="_blank">Hacker News commenter</a> says the `preinstall` key was added at the root of `package.json`, not under `scripts`, which would mean npm never runs it. The advisory describes install hooks without saying which. Do not count on a typo as a defense.
- Whether the `v4.6.6` git tag points at the malicious commit or at the revert is contested between commenters.

## What the published package contains

The registry is the part you can check yourself. I pulled both packages from npm on October 12, 2026:

```bash
npm pack zod@4.6.6
npm pack @zod/mini@4.6.6
mkdir x && tar xzf zod-4.6.6.tgz -C x
grep -rn "dsakldjklsaj33112\|meta.test\|preinstall" x
```

The `grep` prints nothing. `tar tzf` shows only the usual `src/**/tests/*.test.ts` files, no `meta.test.mjs`, and the published `package.json` has no `preinstall` script. The registry says `4.6.6` was published on 2026-10-11T16:18:23Z, three weeks after the malicious commit, and `latest` points to it.

To check a project of your own, install the version and look for packages that run code at install time:

```bash
npm ls zod
grep -c '"hasInstallScript": true' package-lock.json
grep -rn "dsakldjklsaj33112" node_modules package-lock.json
```

On a fresh `npm i zod@4.6.6` project I got `zod@4.6.6`, a count of `0`, and no match for the domain. `hasInstallScript: true` in the lockfile marks every dependency that runs a lifecycle script, so the count is the list of packages you are trusting to run code at install. If the domain does match, treat that machine as compromised and rotate its credentials.

## What stops this class of attack

Install-time loaders only work if the package manager runs the hook. The first two settings below remove that step. The rest narrow the window or protect the source.

- Turn off dependency install scripts. npm 11.16.0 and later can preview the v12 behavior, and the migration steps are in our post on [npm v12 disabling install scripts](/blog/npm_v12_install_scripts_disabled/). Rebuild only the native packages you trust, such as `sharp` or `bcrypt`.
- Add a release-age delay. pnpm has `minimumReleaseAge` (in minutes), so a version published an hour ago does not install. Most supply chain compromises are caught within days.
- Fail CI when `hasInstallScript: true` appears on a new lockfile entry, until a human reviews it.
- Use `npm ci` and commit the lockfile. A lockfile pins what you resolved, but it does not inspect code: a malicious version that gets published and pinned still runs its hook.

If you maintain a package, the zod outcome is the template. Publish through trusted publishing from a protected GitHub environment with required reviewers, trigger releases only by `workflow_dispatch` so 2FA is always in the loop, and do not let a tag push start a publish. Branch protection that blocks direct pushes to `main` also matters here. The attacker pushed straight to it with a git credential.

## Conclusion

The thing to take from this is where the line sat. The attacker got write access to three popular repos in one morning and still did not reach the registry for two of them, because publishing needed something a push credential does not carry. Check your own side of that line: run the `hasInstallScript` count on your lockfile today, and if it is more than a handful, find out why each one needs to run code on your machine.
