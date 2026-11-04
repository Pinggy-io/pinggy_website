---
title: "How Big Is a Git Commit? Loose Objects vs Packfiles, Measured"
description: "A one-line edit to a 42 MB file costs 10.8 MB as a loose Git object and 1,158 bytes in a packfile. Real measurements of commit, tree and blob sizes, and where 6,181 commits fit in 10 MB."
date: 2026-10-11T10:00:00+05:30
lastmod: 2026-10-11T10:00:00+05:30
draft: false
tags: ["Git", "developer tools", "DevOps"]
og_image: "images/how_big_is_a_git_commit/how_big_is_a_git_commit_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBCaWcgSXMgYSBHaXQgQ29tbWl0PyBMb29zZSBPYmplY3RzIHZzIFBhY2tmaWxlcywgTWVhc3VyZWQiLAogICJkZXNjcmlwdGlvbiI6ICJBIG9uZS1saW5lIGVkaXQgdG8gYSA0MiBNQiBmaWxlIGNvc3RzIDEwLjggTUIgYXMgYSBsb29zZSBHaXQgb2JqZWN0IGFuZCAxLDE1OCBieXRlcyBpbiBhIHBhY2tmaWxlLiBSZWFsIG1lYXN1cmVtZW50cyBvZiBjb21taXQsIHRyZWUgYW5kIGJsb2Igc2l6ZXMsIGFuZCB3aGVyZSA2LDE4MSBjb21taXRzIGZpdCBpbiAxMCBNQi4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaG93X2JpZ19pc19hX2dpdF9jb21taXQvaG93X2JpZ19pc19hX2dpdF9jb21taXRfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0xMVQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTExVDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvaG93X2JpZ19pc19hX2dpdF9jb21taXQvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJEZXZlbG9wZXIgVG9vbHMiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogImhvdyBiaWcgaXMgYSBnaXQgY29tbWl0LCBnaXQgb2JqZWN0IHNpemUsIGdpdCBsb29zZSBvYmplY3RzLCBnaXQgcGFja2ZpbGUsIGdpdCBnYywgZ2l0IGRlbHRhIGNvbXByZXNzaW9uLCBnaXQgcmVwb3NpdG9yeSBzaXplIiwKICAiYWJvdXQiOiBbCiAgICB7IkB0eXBlIjoiVGhpbmciLCJuYW1lIjoiR2l0IGxvb3NlIG9iamVjdHMiLCJkZXNjcmlwdGlvbiI6IkluZGl2aWR1YWwgemxpYi1jb21wcmVzc2VkIGZpbGVzIHVuZGVyIC5naXQvb2JqZWN0cywgb25lIHBlciBibG9iLCB0cmVlIG9yIGNvbW1pdC4ifSwKICAgIHsiQHR5cGUiOiJUaGluZyIsIm5hbWUiOiJHaXQgcGFja2ZpbGVzIiwiZGVzY3JpcHRpb24iOiJGaWxlcyB0aGF0IGJ1bmRsZSBvYmplY3RzIGFuZCBzdG9yZSBzaW1pbGFyIG9uZXMgYXMgZGVsdGFzLiJ9LAogICAgeyJAdHlwZSI6IlRoaW5nIiwibmFtZSI6IkdpdCB0cmVlcyIsImRlc2NyaXB0aW9uIjoiRGlyZWN0b3J5IGxpc3RpbmdzIHRoYXQgYXJlIHJld3JpdHRlbiBpbiBmdWxsIHdoZW4gYW55IGZpbGUgYmVsb3cgdGhlbSBjaGFuZ2VzLiJ9LAogICAgeyJAdHlwZSI6IlRoaW5nIiwibmFtZSI6ImdpdCBnYyIsImRlc2NyaXB0aW9uIjoiVGhlIGNvbW1hbmQgdGhhdCBwYWNrcyBsb29zZSBvYmplY3RzIGFuZCBwcnVuZXMgdW5yZWFjaGFibGUgb25lcy4ifQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "how_big_is_a_git_commit/how_big_is_a_git_commit_banner.webp" "How big is a Git commit: one line changed in a 42 MB file costs 10.8 MB as a loose object and 1,158 bytes packed" >}}

A Git commit that changes one line of a 42 MB file writes a new 10.8 MB object when Git stores it loose. After `git gc`, the same commit costs 1,158 bytes. Both numbers are correct, because Git stores history in two different formats and the answer depends on which one you are looking at.

I measured both with Git 2.43.0 on Linux. The short version: a commit's fixed overhead is a few hundred bytes, the real cost is whatever blobs changed, and packfiles delta-compress those blobs against each other. The Express repository has 6,181 commits, a full history, and weighs 10.3 MB packed.

{{% tldr %}}
1. **A commit is at least 3 objects**: the commit itself (about 170 bytes unsigned), a tree for every directory on the path to the changed file, and the new blob. Each tree is rewritten in full, even for a 1-byte change.
2. **Loose objects store every version whole.** A 1-line edit to a 42,456,686-byte file added 10,768,919 bytes (zlib-compressed copy). Small files get worse on disk: 54 tiny loose objects took 2,612 bytes of data and 416 KiB of disk blocks.
3. **Packfiles store later versions as deltas.** After `git gc`, the second version of that file took 1,158 bytes. Clones, fetches, pushes and `git gc` all produce packs.
4. **The Express repo (6,181 commits, checked October 9, 2026) packs 164 MB of raw objects into 10.3 MB**, about 1,665 bytes per commit and about 14 times one checkout.
5. **Packing cannot save you from data it cannot compress.** Random or already-compressed binaries cost their full size once, then a delta per change only if the changes are local.
{{% /tldr %}}

## What one commit writes

A commit does not store a diff. It stores a snapshot, built from three kinds of objects: a blob for each file's content, a tree for each directory listing, and a commit that points at the root tree and its parent.

Change `src/lib/f7.txt` in a repo with 50 files in `src/lib/` and Git writes four new objects. Here are their real sizes, from `git cat-file -s` on each:

```text
commit 171
tree   30     (root)
tree   30     (src)
tree   1741   (src/lib)
blob   9      (src/lib/f7.txt)
```

The blob is the 9 bytes of the file. The commit is 171 bytes. The cost that surprises people is the tree: `src/lib` is rewritten in full, 1,741 bytes, because it lists all 50 files with a mode, a name and a 20-byte hash for each. One changed file means a new copy of every directory listing between it and the root. The 49 untouched blobs are not copied, only referenced.

{{< image "how_big_is_a_git_commit/commit_writes_four_objects.webp" "Diagram of the objects one Git commit writes when a file in src/lib changes: a commit, three trees and one blob, with 49 unchanged blobs reused" >}}

*Sizes measured with `git cat-file -s` on a throwaway repo, Git 2.43.0.*

Signing adds more. An unsigned commit object in my test repo was 173 bytes. The same shape of commit with an SSH signature in the `gpgsig` header was 477 bytes. Signatures are a fixed cost per commit, and base64 signature text does not compress much.

## Why a loose object is a full copy

Every object Git creates starts life as a loose object: one file under `.git/objects/xx/`, named by its hash, holding a `blob <size>\0` style header plus the content, compressed with zlib. Nothing refers to any other object for its content. That is why the first commit of a big file is cheap to reason about and the second is not.

I built a 42,456,686-byte `big.py` by concatenating Python source files, committed it, appended one line and committed again, with `gc.auto` off so nothing got packed:

```text
after commit 1:           10,768,919 bytes in 3 files
after 1-line edit:        21,537,877 bytes in 6 files
```

Text compressed about 4 to 1, and the one-line edit cost another 10.77 MB. Git did not diff anything. It hashed the new content, found no existing object, and compressed the whole file again.

Small objects have a different problem: the filesystem. The 50-file repo from the previous section holds 2,612 bytes of object data in 54 files. `du -sb` says so. Plain `du -s -B1` says the same directory takes 425,984 bytes, because every file and every two-hex-digit fan-out directory occupies at least one 4 KiB block. After the edit, 59 files took 462,848 bytes. Anyone who has watched a `.git` folder balloon after thousands of tiny commits was looking at block overhead, not data.

## What `git gc` does to the same history

Packing moves loose objects into one file, `.git/objects/pack/pack-*.pack`, with an index next to it. Inside the pack, Git looks for objects that resemble each other and stores one in full and the others as deltas against it. I ran `git gc --aggressive --prune=now` on the 42 MB repo and read the pack with `git verify-pack -v`:

```text
f76c57c7c1... blob   42456697  8533535  239
f86c587e2f... blob   1695      1158     8533864  1  f76c57c7c1...
```

The columns are object, type, size, size in pack, offset, and for deltas the depth and base. The old version of `big.py` is 42,456,697 bytes raw and 8,533,535 in the pack. The new version is a delta of 1,695 bytes that compresses to 1,158. Total pack: 8,535,042 bytes, against 21.5 MB loose.

{{< image "how_big_is_a_git_commit/loose_vs_packed_one_line_edit.webp" "Two bar panels comparing a one-line edit to a 42 MB file: 21.5 MB as loose objects versus 8.54 MB after git gc, where version 2 is a 1,158 byte delta" >}}

*The base version is kept whole; later versions become deltas.*

You rarely run `gc` by hand. Git runs `git gc --auto` after commands such as `commit` and `merge`, and it packs once there are more than 6,700 loose objects (the `gc.auto` default) or more than 50 packs. A `git clone`, `git fetch` or `git push` transfers a pack and the receiving side keeps it as one. `git count-objects -vH` shows which state a repo is in:

```bash
git count-objects -vH
# count: 0         loose objects
# in-pack: 33621   objects in packfiles
# size-pack: 10.7 MiB
```

## A real history: Express, 6,181 commits

Synthetic tests are one thing, so I cloned the Express repository bare (`git clone --bare https://github.com/expressjs/express.git`, HEAD `a419aa73`, October 9, 2026) and summed object sizes with `git cat-file --batch-all-objects --batch-check`:

| Object type | Count | Raw size | Size in pack |
|---|---|---|---|
| commit | 6,436 | 2.0 MB | 1.4 MB |
| tree | 15,314 | 7.7 MB | 2.1 MB |
| blob | 11,821 | 154.7 MB | 6.8 MB |
| tag | 50 | 8 KB | 7 KB |
| total | 33,621 | 164.5 MB | 10.3 MB |

The whole history is 6.3% of its raw size. That works out to 1,665 bytes per commit, and the latest checkout, 214 files and 710,992 bytes, is about a fourteenth of the `.git` directory. Commits are the stubborn part: 216 bytes each in the pack, mostly the author lines, the message and the signature, and not much for zlib to remove. Trees shrink to 27% of their raw size because consecutive versions of a directory listing are nearly identical, which is exactly what deltas are good at.

The median commit in the last 300 touched 2 files. That is the shape of a healthy history: many small snapshots, each differing from its parent by a handful of blobs.

{{< image "how_big_is_a_git_commit/express_repo_raw_vs_packed.webp" "Bar chart of Express repository Git objects by type, raw versus packed: blobs 154.7 MB to 6.8 MB, trees 7.7 MB to 2.1 MB, commits 2.0 MB to 1.4 MB" >}}

*Data: bare clone of {{< link href="https://github.com/expressjs/express" >}}expressjs/express{{< /link >}}, measured October 9, 2026.*

## When deltas don't help

The good numbers above come from text. Binary data behaves differently, and it is where repos really get big. I committed 5,000,000 random bytes (a stand-in for a zip, a video or a compressed model checkpoint), flipped one byte, committed, then replaced the whole file with new random bytes and committed again, and ran `git gc`:

```text
blob 5000000 5001540 373        first version, stored whole
blob 5000000 5001540 5002007    full rewrite, stored whole
blob 247     169     10003593   the 1-byte flip, a 169-byte delta
pack: 10,003,782 bytes
```

The columns are type, size, size in pack and offset. Random data does not compress, so each full copy is slightly larger than the file (5,001,540 for 5,000,000 bytes). A 1-byte change still deltas down to about 169 bytes, because the other 4,999,999 bytes are identical. But a rewrite that changes every byte, which is what re-exporting a compressed archive or re-saving a PNG often does, costs the whole file again. Git can only delta what two versions share.

The practical rules from this:

- Commit the source of a binary, not only the binary, when you can.
- Large files that get rewritten often belong in a place that does not keep every version forever, such as Git LFS or object storage.
- `git gc` does not remove history. Dropping a big file you committed by mistake needs a history rewrite, and it stays in everyone's existing clones.

## Measure your own repo

The numbers here take a few commands to reproduce. In any repo:

```bash
git count-objects -vH                               # loose vs packed, and total size
git cat-file --batch-all-objects \
  --batch-check='%(objecttype) %(objectsize) %(objectsize:disk)' \
  | awk '{n[$1]++; r[$1]+=$2; d[$1]+=$3} END {for (t in n) print t, n[t], r[t], d[t]}'
git verify-pack -v .git/objects/pack/*.idx | sort -k3 -n | tail -5   # the 5 biggest packed objects
```

The first command tells you whether your repo is mostly loose or mostly packed. The second gives raw and on-disk bytes per object type, the same table as Express above. The third lists the largest objects in the pack, which is where a surprise 80 MB file shows up. To see what a single commit wrote, run `git rev-list --objects HEAD~1..HEAD` and pass each hash to `git cat-file -s`.

If the largest objects are not source files, that is the thing to fix before worrying about commit overhead. A few hundred bytes per commit never sank a repository; one rewritten 300 MB asset on every release did.
