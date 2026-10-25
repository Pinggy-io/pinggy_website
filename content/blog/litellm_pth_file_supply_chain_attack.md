---
title: "How a 12-Byte .pth File Backdoored LiteLLM 1.107.0 on PyPI"
description: "LiteLLM 1.107.0 shipped a credential stealer in a 12-byte cook.pth file that runs in every Python process, even pip. Here is how .pth startup hooks work, what the malware did, and how to check and harden your environments."
date: 2026-10-22T10:00:00+05:30
lastmod: 2026-10-22T10:00:00+05:30
draft: false
tags: ["LiteLLM", "Python", "supply chain security", "security"]
og_image: "images/litellm_pth_file_supply_chain_attack/litellm_pth_file_supply_chain_attack_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBhIDEyLUJ5dGUgLnB0aCBGaWxlIEJhY2tkb29yZWQgTGl0ZUxMTSAxLjEwNy4wIG9uIFB5UEkiLAogICJkZXNjcmlwdGlvbiI6ICJMaXRlTExNIDEuMTA3LjAgc2hpcHBlZCBhIGNyZWRlbnRpYWwgc3RlYWxlciBpbiBhIDEyLWJ5dGUgY29vay5wdGggZmlsZSB0aGF0IHJ1bnMgaW4gZXZlcnkgUHl0aG9uIHByb2Nlc3MsIGV2ZW4gcGlwLiBIZXJlIGlzIGhvdyAucHRoIHN0YXJ0dXAgaG9va3Mgd29yaywgd2hhdCB0aGUgbWFsd2FyZSBkaWQsIGFuZCBob3cgdG8gY2hlY2sgYW5kIGhhcmRlbiB5b3VyIGVudmlyb25tZW50cy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvbGl0ZWxsbV9wdGhfZmlsZV9zdXBwbHlfY2hhaW5fYXR0YWNrL2xpdGVsbG1fcHRoX2ZpbGVfc3VwcGx5X2NoYWluX2F0dGFja19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgInB1Ymxpc2hlciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IiwKICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iCiAgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTIyVDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjJUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogewogICAgIkB0eXBlIjogIldlYlBhZ2UiLAogICAgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL2xpdGVsbG1fcHRoX2ZpbGVfc3VwcGx5X2NoYWluX2F0dGFjay8iCiAgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiU2VjdXJpdHkiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIkxpdGVMTE0gMS4xMDcuMCwgUHlQSSBzdXBwbHkgY2hhaW4gYXR0YWNrLCAucHRoIGZpbGUsIFB5dGhvbiBzaXRlLXBhY2thZ2VzLCBjb29rLnB0aCwgY3JlZGVudGlhbCBzdGVhbGVyIiwKICAiYWJvdXQiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIi5wdGggZmlsZXMiLAogICAgICAiZGVzY3JpcHRpb24iOiAiUHl0aG9uIHBhdGggY29uZmlndXJhdGlvbiBmaWxlcyB3aG9zZSBpbXBvcnQgbGluZXMgZXhlY3V0ZSBhdCBpbnRlcnByZXRlciBzdGFydHVwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIkxpdGVMTE0gMS4xMDcuMCBjb21wcm9taXNlIiwKICAgICAgImRlc2NyaXB0aW9uIjogIk1hbGljaW91cyBQeVBJIGFuZCBEb2NrZXIgcmVsZWFzZSBwdWJsaXNoZWQgdGhyb3VnaCBhIGhpamFja2VkIHJlbGVhc2UgcGlwZWxpbmUgb24gT2N0b2JlciAyMSwgMjAyNi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiVGhpbmciLAogICAgICAibmFtZSI6ICJSZWxlYXNlIGNvb2xkb3duIiwKICAgICAgImRlc2NyaXB0aW9uIjogIkRlbGF5aW5nIGFkb3B0aW9uIG9mIG5ldyBwYWNrYWdlIHJlbGVhc2VzIHNvIG1hbGljaW91cyB1cGxvYWRzIGFyZSByZW1vdmVkIGJlZm9yZSBpbnN0YWxsLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIkhhc2gtcGlubmVkIGluc3RhbGxzIiwKICAgICAgImRlc2NyaXB0aW9uIjogInBpcCAtLXJlcXVpcmUtaGFzaGVzIHJlZnVzZXMgZmlsZXMgd2hvc2UgU0hBLTI1NiB3YXMgbm90IGFwcHJvdmVkLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "litellm_pth_file_supply_chain_attack/litellm_pth_file_supply_chain_attack_banner.webp" "A 12-byte file backdoored LiteLLM: cook.pth containing import cook runs at every Python start" >}}

On October 21, 2026, `litellm==1.107.0` appeared on PyPI with three extra files in `site-packages`: `cook.pth`, `cook.py` and `sitecustomize.py`. The first is 12 bytes long and contains `import cook`. That one line is the whole trigger. Python executes it at startup in every process in that environment, whether or not the process ever imports `litellm`.

PyPI pulled the release at 13:23 UTC, about 1 hour 44 minutes after the wheels went up. This post walks through the mechanism, shows it in a throwaway virtualenv, and covers what the malware took and how to check your own machines.

{{% tldr %}}
1. Python runs any line starting with `import` in a `.pth` file inside `site-packages` **at interpreter startup**, in every process, including `pip`.
2. LiteLLM 1.107.0 used that to run a credential stealer and an hourly-polling backdoor. **Uninstalling `litellm` does not remove the three planted files.**
3. The wheels were published by LiteLLM's own release pipeline after stolen GitHub CLI tokens let an attacker change the workflow. The GitHub source tag was clean.
4. The PyPI window was under two hours, so a **release-age cooldown** and **hash-pinned installs** would have kept most people out of it.
5. Check for `cook.pth`, `cook.py` and `sitecustomize.py`, and rotate everything that environment could reach if you find them.
{{% /tldr %}}

## What a .pth file can do at startup

A `.pth` file in `site-packages` is meant to add directories to `sys.path`. One path per line, blank lines and `#` comments skipped. The {{< link href="https://docs.python.org/3/library/site.html" >}}`site` module docs{{< /link >}} add a backward-compatibility rule: lines that start with `import` followed by a space or tab are passed to `exec()`.

That rule is how editable installs and some setuptools shims work. It is also arbitrary code execution for anyone who can write one file into a site directory. The docs are explicit that these lines "are always run at Python startup (unless `-S` is given)", regardless of whether the module is used.

You can see it in 30 seconds. This is a throwaway venv, with a harmless stand-in for the malware:

```bash
python3 -m venv v
SITE=$(v/bin/python -c "import site;print(site.getsitepackages()[0])")
printf 'import cook\n' > $SITE/cook.pth
printf 'print("cook.py loaded")\n' > $SITE/cook.py

v/bin/python -c "print(1+1)"
```

```text
cook.py loaded
2
```

Nothing imported `cook`. Python 3.11 did it on its own. Other entry points do not escape it either:

```bash
v/bin/pip --version      # cook.py loaded, then pip 24.0 ...
v/bin/python -I -c "print('-I')"   # cook.py loaded, then -I
v/bin/python -S -c "print('with -S')"   # no output from cook.py
```

Isolated mode (`-I`) does not help. Only `-S`, which skips the `site` module entirely, does, and almost nothing runs that way. `python -v` prints `Processing .pth file: '.../cook.pth'` if you want to watch it happen.

{{< image "litellm_pth_file_supply_chain_attack/pth_startup_flow.webp" "Python startup reads cook.pth in site-packages, which imports cook.py, before the user's script runs" >}}

*The user's own command never mentions litellm or cook.*

## What the two payloads did

Per {{< link href="https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/" >}}SafeDep's analysis{{< /link >}}, the wheels carried two things.

**`cook.py`, the stealer.** It ran once per host (guarded by a marker file, `/tmp/.pc_once_72129118c59f5636c0bb`) in a daemon thread so the foreground process was not slowed down. It collected:

- SSH keys, shell history, `.netrc`, Docker, `gh` and rclone credentials
- AWS, Azure, GCP and Kubernetes credentials, including instance metadata (it contacts `169.254.169.254`)
- Chromium and Firefox saved passwords
- Tokens for AI developer tools such as Claude Code, Cursor, Copilot and Codex
- Environment variables, including other processes' via `/proc/<pid>/environ`
- Provider API keys stored in the LiteLLM proxy database, reached through `DATABASE_URL`

The archive was encrypted with a random AES-256-CBC key, wrapped with RSA-OAEP, and POSTed to `www.litellm[.]dev/healthcheck`. That domain is not LiteLLM's.

**`sitecustomize.py`, the backdoor.** It took a lock on `/tmp/remote_code_loader.lock`, forked, called `setsid()` and detached. Every hour it read a domain from a file in an attacker-controlled GitHub repo, re-ran the stealer, then downloaded and `exec()`ed whatever the server returned at `/codepy`. SafeDep saw that GitHub account return 404 at 13:40 UTC, so the backdoor currently finds no server. They could not recover the address, so a host that ran the daemon earlier may have executed second-stage code.

## How a clean repo produced a dirty release

The source tag for 1.107.0 on GitHub does not contain these files. The malicious artifacts were built from a lookalike repository, `Berri-AI/litellm`, by LiteLLM's real, signed release pipeline. One added line in the sdist's `pyproject.toml`, `data = "cook"` under `[tool.maturin]`, made the build copy a `cook/` folder into the wheel's `purelib`, which pip installs straight into `site-packages`.

According to {{< link href="https://docs.litellm.ai/blog/security-incident-oct-21-2026" >}}LiteLLM's incident report{{< /link >}} (marked as contained, investigation ongoing at the time of writing):

- The attacker held GitHub CLI credentials for three developers. LiteLLM suspects they leaked through response bodies logged by an internet-exposed internal deployment.
- One of the tokens belonged to a GitHub organization owner, which was enough to override branch protection and repoint the private release workflow.
- A second developer credential cleared the production approval gate, and a third deleted the workflow run records afterwards.

LiteLLM had already moved to trusted publishing and immutable Docker tags after an earlier incident in March. Those controls held up fine against a bad commit and did nothing against someone holding the keys to the pipeline. The pipeline did exactly what it was told.

{{< image "litellm_pth_file_supply_chain_attack/incident_timeline.webp" "Timeline of the LiteLLM 1.107.0 incident on October 21, 2026, from the workflow change at 10:08 UTC to Docker tags being cleaned at 14:20 UTC" >}}

*Data: {{< link href="https://docs.litellm.ai/blog/security-incident-oct-21-2026" >}}LiteLLM incident report{{< /link >}} and {{< link href="https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/" >}}SafeDep{{< /link >}}, October 2026.*

## Check whether you were hit

LiteLLM's guidance is to treat any environment that started Python with `litellm==1.107.0` as compromised. Start with:

```bash
pip show litellm | grep -i '^version'
find / \( -name cook.pth -o -name cook.py -o -name 'litellm-1.107.0.dist-info' \) 2>/dev/null
ls -la /tmp/.pc_once_72129118c59f5636c0bb /tmp/remote_code_loader.lock 2>/dev/null
```

Finding any of those confirms exposure. Not finding them does not prove you are clean. Docker users should also check whether a container ran image digest `sha256:1bbcb1443bc962e45f5aad53fe3d2c30600e0379715fb6c664cdd3ac126c339e`. The affected tags were `v1.107.0`, `latest`, `main-latest` and `main-stable`, live from 11:46 to 14:20 UTC.

If you do find something, the order matters:

1. **Do not run `pip install` first.** Every `pip` and `python` call in that environment re-runs the malware.
2. Delete `cook.pth`, `cook.py`, `sitecustomize.py` and the matching `__pycache__` entries from every affected `site-packages`, and kill the detached Python process holding `/tmp/remote_code_loader.lock`.
3. Rebuild the venv or image from scratch and pin `litellm==1.106.2`, the last clean release.
4. From a clean machine, rotate whatever that host could reach: cloud IAM roles, every provider key in the proxy database, master and virtual keys, the `DATABASE_URL` password, and secrets in process environments. Check CloudTrail for `GetCallerIdentity` calls from the instance role and for the role's credentials being used from outside your infrastructure.

You can also audit the `.pth` files in your own environments. A clean venv has very few executable lines; in my test one came from setuptools (`distutils-precedence.pth`):

```bash
grep -lE '^import[[:space:]]' "$(python -c 'import site;print(site.getsitepackages()[0])')"/*.pth
```

Editable installs and some namespace-package shims legitimately show up here. A short file with a name you do not recognise does not.

## What would have kept you out of the window

The malicious wheels lived on PyPI for 1 hour 44 minutes. That is short, and it is the useful number: most defences here are about not being the first to install a release.

- **Cooldown.** uv's `--exclude-newer` takes a timestamp and ignores anything uploaded after it, so setting it to a day or two ago keeps a fresh upload out of your resolver. Dependabot and Renovate both have settings to wait before proposing a new release. A 24-hour delay would have covered this incident completely.
- **Hash-pinned installs.** `pip install --require-hashes -r requirements.txt` refuses any file whose SHA-256 you did not pre-approve. A bumped version is a diff in a lockfile that a person reviews, not something `pip install -U` picks up in CI.
- **Pin the container digest**, not `latest`. Four moving tags were poisoned here.
- **Keep secrets out of the Python environment.** The stealer read environment variables and files in the home directory. Short-lived cloud credentials and a secrets manager shrink what a stolen environment is worth.
- **Treat developer CLI tokens as production secrets.** Two of the root-cause items in LiteLLM's report are a leaked `gh` token and a token with organization-owner rights that was not needed for day-to-day work.

None of this is complete. A cooldown does not help if a malicious release stays up for a week, and hashes only prove you got the file you approved. For the same class of problem on the JavaScript side, see [npm v12 disabling install scripts by default](/blog/npm_v12_install_scripts_disabled/).

## Python is changing this, slowly

The Python 3.15 docs deprecate executable `import` lines in `.pth` files. They still run during the deprecation period, but the docs schedule them to be silently ignored in 3.18 and 3.19, with a warning in 3.20. The replacement is a `.start` file naming a `pkg.mod:callable` entry point. A `.start` file is still code that runs at startup, so it is a tidier mechanism and not a sandbox. Anything that can write to `site-packages` can still run code, because installing a package is already trusting it.

## Conclusion

The takeaway from the 1.107.0 release is how little code the persistence needed: 12 bytes and a `data = "cook"` line in a build config. Run the three-command check above on your CI runners and dev venvs, add a release-age cooldown to your installer, and look at which long-lived tokens your own release pipeline holds before someone else does.
