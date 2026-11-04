---
title: "Git 3.0 Defaults to SHA-256: What Changes and What Breaks"
description: "Git 3.0 will make SHA-256 the default object format for new repositories. See how the hash shows up in every commit, what fails when SHA-1 and SHA-256 repos meet, and how to test it today."
date: 2026-10-01T10:00:00+05:30
lastmod: 2026-10-01T10:00:00+05:30
draft: false
tags: ["git", "version control", "developer tools", "security"]
og_image: "images/git_sha256_default_what_breaks/git_sha256_default_what_breaks_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkdpdCAzLjAgRGVmYXVsdHMgdG8gU0hBLTI1NjogV2hhdCBDaGFuZ2VzIGFuZCBXaGF0IEJyZWFrcyIsCiAgImRlc2NyaXB0aW9uIjogIkdpdCAzLjAgd2lsbCBtYWtlIFNIQS0yNTYgdGhlIGRlZmF1bHQgb2JqZWN0IGZvcm1hdCBmb3IgbmV3IHJlcG9zaXRvcmllcy4gU2VlIGhvdyB0aGUgaGFzaCBzaG93cyB1cCBpbiBldmVyeSBjb21taXQsIHdoYXQgZmFpbHMgd2hlbiBTSEEtMSBhbmQgU0hBLTI1NiByZXBvcyBtZWV0LCBhbmQgaG93IHRvIHRlc3QgaXQgdG9kYXkuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2dpdF9zaGEyNTZfZGVmYXVsdF93aGF0X2JyZWFrcy9naXRfc2hhMjU2X2RlZmF1bHRfd2hhdF9icmVha3NfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0wMVQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTAxVDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvZ2l0X3NoYTI1Nl9kZWZhdWx0X3doYXRfYnJlYWtzLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiRGV2ZWxvcGVyIFRvb2xzIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJHaXQgMy4wLCBHaXQgU0hBLTI1NiwgZ2l0IGluaXQgLS1vYmplY3QtZm9ybWF0PXNoYTI1NiwgU0hBLTEgdG8gU0hBLTI1NiBtaWdyYXRpb24sIEdpdCBvYmplY3QgZm9ybWF0IiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkdpdCBvYmplY3QgSUQiLCAiZGVzY3JpcHRpb24iOiAiVGhlIGhhc2ggb2YgYW4gb2JqZWN0J3MgaGVhZGVyIGFuZCBjb250ZW50IHRoYXQgbmFtZXMgZXZlcnkgYmxvYiwgdHJlZSwgY29tbWl0IGFuZCB0YWcuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJTSEEtMjU2IG9iamVjdCBmb3JtYXQiLCAiZGVzY3JpcHRpb24iOiAiVGhlIDY0LWNoYXJhY3RlciBoYXNoIGZvcm1hdCB0aGF0IGJlY29tZXMgdGhlIGRlZmF1bHQgZm9yIG5ldyByZXBvc2l0b3JpZXMgaW4gR2l0IDMuMC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogImNvbXBhdE9iamVjdEZvcm1hdCIsICJkZXNjcmlwdGlvbiI6ICJBIHJlcG9zaXRvcnkgZXh0ZW5zaW9uIHRoYXQga2VlcHMgYSB0cmFuc2xhdGlvbiB0YWJsZSBiZXR3ZWVuIFNIQS0xIGFuZCBTSEEtMjU2IG5hbWVzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU0hBLTEgY29sbGlzaW9uIGF0dGFja3MiLCAiZGVzY3JpcHRpb24iOiAiU0hBdHRlcmVkICgyMDE3KSBhbmQgU0hBLTEgaXMgYSBTaGFtYmxlcyAoMjAyMCksIGFuZCBHaXQncyBjb2xsaXNpb24tZGV0ZWN0aW5nIFNIQS0xLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "git_sha256_default_what_breaks/git_sha256_default_what_breaks_banner.webp" "Git 3.0 defaults to SHA-256: a 40-character SHA-1 id above a 64-character SHA-256 id" >}}

Every object in a Git repository is named by a hash: 40 hex characters of SHA-1 today, 64 characters of SHA-256 once Git 3.0 flips the default for new repositories. The new format has worked since Git 2.29 behind `git init --object-format=sha256`. What changes in 3.0 is that you get it without asking, and a SHA-256 repository cannot talk to a SHA-1 one. That last part is where the cost is.

I tried it on Git 2.43. The same file content gets a different id, a commit that points at a tree by a 64-character name, and a push to a SHA-1 server dies with `the receiving end does not support this repository's hash algorithm`. The rest of this post walks through those pieces, then the argument over whether the switch is worth it.

{{% tldr %}}
1. A Git object ID is a hash of the object's content, so changing the hash function **renames every object** and every commit id.
2. SHA-256 repositories exist today (`git init --object-format=sha256`), but a **SHA-1 and a SHA-256 repository cannot exchange objects** without a compatibility mode, and the forges and libraries have to support it first.
3. Git has used a hardened SHA-1 (collision detection) since 2.13, so the push for SHA-256 is about **long-term margin**, not an attack you can run on a repo today.
4. Critics, such as GitButler's Scott Chacon, say the **migration cost outweighs the benefit** and propose adding a separate tree hash to signed commits instead.
5. Before 3.0 lands, **audit scripts that assume 40-character ids** and test your forge with a throwaway SHA-256 repo.
{{% /tldr %}}

## What a Git object ID actually is

Git is a content-addressed store. Every blob (file), tree (directory listing), commit and tag is stored under the hash of a short header plus its content. For a blob, the header is `blob <size>\0`. You can reproduce the id by hand:

```bash
printf 'blob 5\0hello' | sha1sum
printf 'hello' | git hash-object --stdin
```

Both print `b6fc4c620b67d95f953a5c1c1230aaab5db5a1b0`. The second command asks Git, the first does the arithmetic yourself. In a SHA-256 repository the same blob is named by `printf 'blob 5\0hello' | sha256sum`, which gives `8aec4e4876f854f688d0ebfc8f37598f38e5fd6903cccc850ca36591175aeb60`.

Trees point at blobs and other trees by id. Commits point at a tree and at their parents by id. So the id of a commit depends, through the tree, on every file in the project and, through the parents, on the whole history. That chain is the integrity guarantee Git sells, and it is also why swapping the hash function cannot be done in place. Change the hash, and every id in the chain changes.

{{< image "git_sha256_default_what_breaks/git_object_hash_chain.webp" "A commit, its parent, a tree and two blobs drawn twice, with different ids in a SHA-1 repository and a SHA-256 repository" >}}

*The commit, tree and blob ids all change, because each object stores the ids of the objects below it.*

## Trying a SHA-256 repository

Create one and commit a file:

```bash
git init --object-format=sha256 demo
cd demo
echo hello > f
git add f && git commit -m init
git rev-parse --show-object-format
git log --format=%H
```

On Git 2.43 this prints:

```text
sha256
4fec3c6af8ad5cad4aace37edae97824b7aee0ac814479232fbb8ce8bc7d174a
```

The only trace in `.git/config` is a repository extension:

```ini
[core]
	repositoryformatversion = 1
[extensions]
	objectformat = sha256
```

`repositoryformatversion = 1` is how Git tells older versions "do not touch this unless you understand my extensions". A Git too old to know `objectformat` refuses to open the repo instead of misreading it.

Look at a commit with `git cat-file -p HEAD` and you see the tree line is now 64 characters, and that signed commits carry a `gpgsig-sha256` header instead of `gpgsig`. The abbreviated form you type day to day (`4fec3c6`) still looks the same, which is why most people will not notice until something does a regex on a full id.

## What breaks when the two formats meet

I made one SHA-1 repository and one SHA-256 repository side by side and tried to connect them. A push from the SHA-256 repo to the SHA-1 one:

```text
warning: push negotiation failed; proceeding anyway with push
fatal: the receiving end does not support this repository's hash algorithm
fatal: the remote end hung up unexpectedly
```

And fetching the SHA-256 repository into the SHA-1 one:

```text
fatal: mismatched algorithms: client sha1; server sha256
```

There is no conversion. The two object graphs have different names for everything, so there is nothing to compare. Day to day, this surfaces in a few places:

- **Servers.** A forge has to create and store SHA-256 repositories explicitly. GitLab has supported them since 2023. GitHub said in July 2025 that SHA-256 was in private preview and creation was not yet public, and per the GitLab write-up of Git 2.56 it had announced a private beta with general availability to follow ({{< link href="https://github.com/orgs/community/discussions/12490" >}}community discussion{{< /link >}}, {{< link href="https://about.gitlab.com/blog/whats-new-in-git-2-56-0/" >}}Git 2.56 notes{{< /link >}}). Check your own forge before you trust either statement, since both move.
- **Submodules.** A superproject records the commit id of each submodule. The formats have to match, so a library you vendor as a submodule needs a SHA-256 version for a SHA-256 project to use it.
- **Existing history.** Converting a repository rewrites every commit, so old signatures stop verifying and every `abc1234` in a bug tracker, changelog or commit message stops resolving.
- **Tools.** Anything that validates a commit id with `[0-9a-f]{40}`, stores it in a 40-character column, or links to `/commit/<id>` on a hosted service has to learn the 64-character form. Libraries that reimplement Git instead of calling it need explicit SHA-256 support.

{{< image "git_sha256_default_what_breaks/sha1_sha256_repo_mismatch.webp" "A SHA-256 repository pushing to a SHA-1 server is refused, and pushing to a SHA-256 server works" >}}

*A SHA-256 repository can only push to a server that also stores SHA-256.*

## The compatibility mode that is meant to bridge it

The design document ({{< link href="https://git-scm.com/docs/hash-function-transition" >}}hash-function-transition{{< /link >}}) describes a way out. A repository sets two extensions:

```ini
[extensions]
	objectFormat = sha256
	compatObjectFormat = sha1
```

Git then keeps a local translation table between the two names of every object. On fetch from a SHA-1 server it converts incoming objects to SHA-256. On push it converts back. You can refer to a commit by either id (`^{sha1}` and `^{sha256}` suffixes, plus an `--output-format` option). Blobs are identical in both formats; trees, commits and tags differ only in the ids they contain. Signed objects can carry both a `gpgsig` and a `gpgsig-sha256` signature.

I could not test this. Git 2.43 rejected `compatObjectFormat` with `unknown repository extension found`, so it needs a newer release than the one I had. The mode also has a cost the design document admits: the translation table lives on every client, and the document describes converting on fetch as a topological re-hash of everything except blobs.

## Why SHA-1 has stayed in Git so long

SHA-1 has been broken for collisions since the 2017 {{< link href="https://shattered.io/" >}}SHAttered{{< /link >}} attack, which needed roughly 2^63 SHA-1 computations to produce two different PDFs with the same hash. A 2020 follow-up, {{< link href="https://sha-mbles.github.io/" >}}SHA-1 is a Shambles{{< /link >}}, made chosen-prefix collisions practical. Git reacted in Git 2.13 (2017) by switching to a SHA-1 implementation with collision detection, which refuses objects that carry the telltale bit patterns of known attacks.

The distinction that matters is collision versus second preimage. A collision attacker builds two files that hash the same and needs to control both. To tamper with a file already in your repository, they need a second preimage on a specific existing hash, and that attack on SHA-1 is not known to be feasible. That is the heart of the pushback.

## The case for and against flipping the default

The case for: Git's own {{< link href="https://git-scm.com/docs/BreakingChanges" >}}BreakingChanges document{{< /link >}} says the default for new repositories will change from `sha1` to `sha256`, noting that NIST deprecated SHA-1 in 2011 and that FIPS 140 style certifications recommend against it. It lists an explicit precondition: "the ecosystem is ready to support the sha256 object format", including popular libraries, applications and forges. It also says there is no plan to deprecate `sha1` itself. The same document pairs the change with others in 3.0: `reftable` as the default ref storage, `main` as the default branch name, and Rust as a build requirement.

The release plan, per the GitLab notes for Git 2.56.0 (released September 28, 2026), is 2.98 in December 2026, then 2.99 and 3.0 together in spring 2027, where 3.0 is the same code with the breaking-changes flag turned on. Those are plans and can slip. The BreakingChanges document itself says there is no release date for 3.0.

The case against comes from Scott Chacon at GitButler, in {{< link href="https://blog.gitbutler.com/git-3-sha-256" >}}Git 3.0's upcoming SHA-256 default will be a costly mistake{{< /link >}}. His points, in short:

- No accidental SHA-1 collision has been seen in 20 years across a very large number of repositories.
- Attacks that matter for a supply chain need a second preimage, and real compromises come through people and credentials, not hash math.
- A hard split between formats breaks submodules, signatures, links and tools for a threat that is mostly theoretical.

His alternative is to leave the object format alone and add an independent SHA-256 hash of the root tree as a header inside signed commits and tags, so a signature covers the content under a stronger hash. Prior art is Colin Walters' `git-evtag`. His proof of concept timings were 257 ms for the Linux kernel tree and 17 ms for Git's own repository. These are his numbers and I have not reproduced them.

I see merit on both sides. The compatibility mode should make the move survivable for people who stay on SHA-1 forges, and a default only matters for `git init` and `git clone` from nothing. The risk is the long tail: scripts, CI caches and integrations nobody owns.

## Check your own exposure before 3.0

None of this needs Git 3.0. Three checks you can do now:

```bash
# 1. Find scripts that assume a 40-character id
grep -rnE '\{40\}|\[0-9a-f\]\{40\}|char\(40\)|VARCHAR\(40\)' scripts/ ci/ 2>/dev/null

# 2. Try a throwaway SHA-256 repo against your forge
git init --object-format=sha256 probe && cd probe
git commit --allow-empty -m probe
git remote add origin <your-forge-url>
git push -u origin HEAD

# 3. Pin the format you want in automation, so a default change cannot surprise it
git init --object-format=sha1 repo
```

If step 2 fails with the `does not support this repository's hash algorithm` message, you know the forge is not ready, and you know before the default changes. If you build tooling on Git, test it against both formats: `git rev-parse --show-object-format` tells you which one you got.

## Conclusion

The id in `git log` is a hash of everything below it, so moving from SHA-1 to SHA-256 is a migration, not a setting. New repositories starting on SHA-256 is a reasonable direction once forges and libraries catch up, and the open question is how much friction the gap causes in between. Run the three checks above on one repo this week, and you will know how big that gap is for you.
