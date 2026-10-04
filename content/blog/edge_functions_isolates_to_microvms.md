---
title: "Edge Functions on MicroVMs: Why Netlify Left V8 Isolates"
description: "Netlify moved Edge Functions from V8 isolates to Firecracker microVMs and cut median warm latency from 25-40 ms to 5-6 ms. Here is how microVM snapshots, EROFS and rendezvous hashing make that work."
date: 2026-10-01T13:00:00+05:30
lastmod: 2026-10-01T13:00:00+05:30
draft: false
tags: ["Netlify", "edge computing", "security", "cloud"]
og_image: "images/edge_functions_isolates_to_microvms/edge_functions_isolates_to_microvms_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkVkZ2UgRnVuY3Rpb25zIG9uIE1pY3JvVk1zOiBXaHkgTmV0bGlmeSBMZWZ0IFY4IElzb2xhdGVzIiwKICAiZGVzY3JpcHRpb24iOiAiTmV0bGlmeSBtb3ZlZCBFZGdlIEZ1bmN0aW9ucyBmcm9tIFY4IGlzb2xhdGVzIHRvIEZpcmVjcmFja2VyIG1pY3JvVk1zIGFuZCBjdXQgbWVkaWFuIHdhcm0gbGF0ZW5jeSBmcm9tIDI1LTQwIG1zIHRvIDUtNiBtcy4gSGVyZSBpcyBob3cgbWljcm9WTSBzbmFwc2hvdHMsIEVST0ZTIGFuZCByZW5kZXp2b3VzIGhhc2hpbmcgbWFrZSB0aGF0IHdvcmsuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2VkZ2VfZnVuY3Rpb25zX2lzb2xhdGVzX3RvX21pY3Jvdm1zL2VkZ2VfZnVuY3Rpb25zX2lzb2xhdGVzX3RvX21pY3Jvdm1zX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMDFUMTM6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0wMVQxMzowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL2VkZ2VfZnVuY3Rpb25zX2lzb2xhdGVzX3RvX21pY3Jvdm1zLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiQ2xvdWQgaW5mcmFzdHJ1Y3R1cmUiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIk5ldGxpZnkgRWRnZSBGdW5jdGlvbnMsIEZpcmVjcmFja2VyIG1pY3JvVk0sIFY4IGlzb2xhdGVzIHZzIG1pY3JvVk1zLCBzZXJ2ZXJsZXNzIGNvbGQgc3RhcnQsIG1pY3JvVk0gc25hcHNob3RzLCByZW5kZXp2b3VzIGhhc2hpbmciLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiVjggaXNvbGF0ZXMiLCAiZGVzY3JpcHRpb24iOiAiU2VwYXJhdGUgSmF2YVNjcmlwdCBoZWFwcyBpbnNpZGUgb25lIHNoYXJlZCBlbmdpbmUgcHJvY2Vzcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkZpcmVjcmFja2VyIiwgImRlc2NyaXB0aW9uIjogIk9wZW4tc291cmNlIEtWTS1iYXNlZCB2aXJ0dWFsIG1hY2hpbmUgbW9uaXRvciBmb3IgbGlnaHR3ZWlnaHQgbWljcm9WTXMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJNaWNyb1ZNIHNuYXBzaG90cyIsICJkZXNjcmlwdGlvbiI6ICJTYXZlZCBndWVzdCBtZW1vcnkgYW5kIGRldmljZSBzdGF0ZSB1c2VkIHRvIHJlc3RvcmUgYSBWTSB3aXRob3V0IGEgZnVsbCBib290LiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUmVuZGV6dm91cyBoYXNoaW5nIiwgImRlc2NyaXB0aW9uIjogIlJvdXRpbmcgc2NoZW1lIHRoYXQgc2VuZHMgdGhlIHNhbWUgc2VydmljZSB0byB0aGUgc2FtZSBub2RlLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "edge_functions_isolates_to_microvms/edge_functions_isolates_to_microvms_banner.webp" "Netlify Edge Functions median warm latency: 25-40 ms on isolates against 5-6 ms on microVMs" >}}
Netlify has moved Edge Functions off V8 isolates and onto Firecracker microVMs, and median warm latency dropped from 25-40 ms to roughly 5-6 ms. That runs against the usual story, where isolates are the fast, light option and virtual machines are the slow, heavy one. The numbers only make sense once you see that the old setup paid for a network hop, and the new one pays for almost nothing.

This post walks through why that works: what an isolate gives you and what it doesn't, what a microVM costs to start, and the three tricks (memory-mapped images, snapshots and sticky routing) that bring that cost down to a few milliseconds. All figures come from {{< link href="https://www.netlify.com/blog/edge-functions-firecracker-microvms/" >}}Netlify's own write-up{{< /link >}} of the change, published on September 29, 2026, plus the Firecracker docs. I have not benchmarked any of it myself.

{{% tldr %}}
1. **The speedup is mostly the removed network hop.** Requests used to leave Netlify's network for a separate execution service. Now the code runs on compute nodes inside the edge network.
2. **A microVM can start in single-digit milliseconds** when it boots a stripped-down Linux guest, reads its code from a memory-mapped read-only image, and restores from a snapshot instead of booting cold.
3. **Isolation gets stronger, not weaker.** A hostile deploy lands in its own VM behind hardware virtualization, not in a shared V8 process.
4. **Routing keeps things warm.** Rendezvous hashing sends the same function to the same compute node, so its snapshot and image are already there. About 1.2% of invocations are cold.
5. **The old limits stay for now** (50 ms CPU, 512 MB memory, 20 MB compressed code), because they came from the isolate model and Netlify says it will revisit them.
{{% /tldr %}}

## What an isolate gives you, and what it doesn't

A V8 isolate is a separate heap and execution context inside one running V8 process. Cloudflare's docs describe one runtime instance running "hundreds or thousands" of isolates and switching between them, with an isolate starting around a hundred times faster than a Node process in a container or VM. Nobody pays for a kernel boot or a fresh process.

The trade is the isolation boundary. Every tenant shares one process, one JavaScript engine and one set of host syscalls, so the wall between customers is the engine's own memory safety. Isolates are also disposable by design. Cloudflare's docs warn that an isolate can be "spun down and evicted" at any time and that you should not keep mutable state in global scope.

Netlify's argument is blunter. A compromised deploy in a microVM cannot poison other customers or the compute layer even if it escapes the runtime, and in their words, "V8 isolates, no matter their name, do not provide this level of isolation".

For the rest of this post, the worked example is one Edge Function that reads a request header and rewrites the response. It is small on purpose, because small functions are where startup cost dominates.

{{< image "edge_functions_isolates_to_microvms/isolate_vs_microvm_boundary.webp" "Three customers inside one V8 process on the left, and three separate Firecracker microVMs above KVM on the right" >}}

*Same three customers, different place for the wall between them.*
## Where the old latency came from

Netlify says it handles "tens, sometimes hundreds of thousands" of edge function invocations per second, and each one has to route the request, find compute, start the platform and run customer code "within milliseconds".

The old design sent each request out of Netlify's network to a hosted execution service and back. The 25-40 ms median was that round trip plus the work. The redesign keeps everything in one network and splits it into three parts:

- Edge nodes terminate TLS, route requests and match the Edge Function path.
- Compute nodes run the microVMs, manage their lifecycle and cache function images.
- A control plane tracks compute node health and coordinates deployments.

A warm request now goes: client -> edge node -> compute node -> microVM -> back along the same path. Netlify reports about 5-6 ms at p50 for that, 47.4% faster at p99 than before, and 99.998% availability.

{{< image "edge_functions_isolates_to_microvms/edge_function_request_path.webp" "A client request goes to an edge node, then a compute node holding microVMs, with a control plane below and the old external execution path dashed above" >}}

*A warm request stays inside one network from edge node to microVM.*
## What a microVM costs to start

Firecracker is the open-source virtual machine monitor from AWS that powers Lambda and Fargate. It is Apache 2.0 licensed, built on Linux KVM, and deliberately small: it emulates only the devices a function workload needs and leaves the rest out. Its specification sets a few hard numbers, enforced in CI:

- Up to 125 ms from the `InstanceStart` API call to the guest's `/sbin/init` starting.
- A memory overhead of at most 5 MiB for the VMM threads.
- 0.06 ms of added network latency on average.

125 ms is nowhere near 5 ms, so Netlify is not doing a plain boot per request. Their numbers are creation in under a millisecond and a boot time of about 2 ms at p99, using a stripped-down Linux guest rather than a full OS. The remaining gap is closed by two techniques.

## Reading only the code you run

The function's code ships as an uncompressed EROFS image (a read-only filesystem designed for this kind of immutable bundle) that is memory-mapped into the VM. Because it is mapped, not copied, the guest reads only the pages it touches. If a function touches 1 MB of a 20 MB bundle, it reads about 1 MB, not 20.

Uncompressed matters here. A compressed image would have to be decompressed before any byte could be read at an arbitrary offset, which defeats the point of mapping it.

## Snapshots, and why idle VMs disappear

When a microVM goes idle, Netlify scales it to zero instead of leaving it resident. The state is not thrown away, though. After the first boot the system captures a snapshot, and later invocations restore from it without waiting for a full read of the memory file.

Firecracker's snapshot docs describe the pieces: a memory file with the guest's RAM, a state file with emulated device and KVM state, and the disk files you manage yourself. On load, Firecracker maps the memory file with `MAP_PRIVATE`, so pages are pulled in on demand as the guest touches them. There is also a `Uffd` backend where a userspace process serves page faults, if you want to control that yourself.

The API sequence from the docs looks like this. I could not run it here because the machine I wrote this on has no `/dev/kvm`, so treat the calls as taken from the docs, not tested:

```bash
# pause, snapshot, then resume the original (or terminate it)
curl --unix-socket /tmp/fc.sock -X PATCH http://localhost/vm \
  -d '{"state": "Paused"}'
curl --unix-socket /tmp/fc.sock -X PUT http://localhost/snapshot/create \
  -d '{"snapshot_type": "Full", "snapshot_path": "vm.state", "mem_file_path": "vm.mem"}'
```

Snapshots have one sharp edge, and the docs say so plainly: if guest state resumes more than once, anything the guest assumed unique (random numbers, tokens, IDs) may not be. The safe pattern is boot -> snapshot -> terminate the original -> resume once. Restoring many clones from one snapshot is exactly what a platform scaling one function across requests wants to do, so it needs the mitigations the docs list, VMGenID (Linux 5.18+ reseeds its PRNG when it changes) and VMClock. Netlify's post does not say how it handles this, so I won't guess.

{{< image "edge_functions_isolates_to_microvms/microvm_lifecycle.webp" "MicroVM states from no VM to boot, running, idle and snapshot on disk, with the next request restoring the snapshot back to running" >}}

*The microVM lifecycle: idle functions scale to zero and come back from a snapshot.*
## Keeping the right snapshot nearby

Restoring is only fast if the function image and snapshot are already on the compute node. Netlify routes with rendezvous hashing: for a given service, every compute node gets a score and the highest wins, so the same function lands on the same node each time. Adding or removing a node only moves the functions that node owned.

Stickiness has a cost. One busy function can saturate its node, so Netlify relaxes the hashing above traffic thresholds and spreads load across more nodes, trading some warmth for no hot spots.

The result: about 1.2% of invocations are cold, and those average 9 ms including the image fetch. A cold start that costs 9 ms is the number that makes the whole design viable. On a typical VM platform, a cold start is the problem you design around.

## What changed for you, and what didn't

Nothing in how you write or deploy changes. URL imports, npm packages, Node built-ins, `netlify.toml` declarations and local development work as before, pricing is the same, and there is no migration step.

The limits also stay: 50 ms CPU per request, 512 MB memory, 20 MB compressed code. Netlify says these came from the isolate model and will be revisited, and that a real VM with a real filesystem removes most of the reasons for the npm caveats the feature carried in beta. Those are statements of intent, so check the changelog before relying on any of them.

## Check it on your own functions

You don't have to take the latency numbers on trust. Deploy any Edge Function and time it from where your users are:

```bash
for i in $(seq 1 50); do
  curl -s -o /dev/null -w '%{time_starttransfer}\n' https://your-site.netlify.app/your-edge-path
done | sort -n | awk '{a[NR]=$1} END {print "p50:", a[int(NR*0.5)], "p99:", a[int(NR*0.99)]}'
```

Time-to-first-byte includes your network path to the edge, so compare it against a static asset on the same site: the difference is the function's cost. If you want to try Firecracker directly, you need a Linux host with `/dev/kvm`; the {{< link href="https://github.com/firecracker-microvm/firecracker" >}}Firecracker repo{{< /link >}} has a getting-started guide and its snapshot docs are under `docs/snapshotting/`.

## Conclusion

The isolate-versus-VM debate usually assumes boot time is fixed. Netlify's change shows it is a design choice: a minimal guest, a mapped read-only image, snapshots and sticky routing together turn a VM into something you can start per request, while keeping a boundary that a shared process cannot offer. What you give up is the simplicity of one shared runtime, and what you take on is a fleet of nodes that have to keep the right images warm.
