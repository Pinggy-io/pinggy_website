---
title: "Self hosting a 744B param LLM with only 25 GB RAM"
description: "A single-file C engine called Colibrì streams GLM-5.2's 744B mixture-of-experts weights off an NVMe drive to run the full model on 25 GB of RAM at 0.05-2 tokens/second. Here's how it works, what Hacker News made of it, and how to check on a queued run from your phone with Pinggy."
date: 2026-07-12T10:00:00+05:30
lastmod: 2026-07-11T10:00:00+05:30
draft: false
tags: ["GLM-5.2", "Colibrì", "local LLM", "mixture of experts", "disk streaming", "self-hosted AI", "Pinggy", "Show HN", "Z.ai"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/colibri_glm_5_2_744b_model_25gb_ram/colibri_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBHTE0tNS4yIHdpdGggQ29saWJyaSBhbmQgRXhwb3NlIHRoZSBBUEkgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgd29ya2Zsb3cgdG8gYnVpbGQgdGhlIENvbGlicmkgaW5mZXJlbmNlIGVuZ2luZSwgcnVuIEdMTS01LjIgKDc0NEIgTW9FKSBsb2NhbGx5IHdpdGggZGlzay1zdHJlYW1lZCBleHBlcnRzLCBhbmQgZXhwb3NlIHRoZSByZXN1bHRpbmcgT3BlbkFJLWNvbXBhdGlibGUgQVBJIG92ZXIgYSBwdWJsaWMgSFRUUFMgVVJMIHVzaW5nIFBpbmdneS4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQnVpbGQgQ29saWJyaSIsCiAgICAgICJ0ZXh0IjogIkNsb25lIEp1c3RWdWdnL2NvbGlicmksIGNkIGludG8gdGhlIGMvIGRpcmVjdG9yeSwgYW5kIHJ1biAuL3NldHVwLnNoIHRvIGJ1aWxkIHRoZSBzaW5nbGUtZmlsZSBDIGVuZ2luZSAocmVxdWlyZXMgR0NDIHdpdGggT3Blbk1QIGFuZCBBVlgyIHN1cHBvcnQpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJHZXQgdGhlIGludDQgd2VpZ2h0cyIsCiAgICAgICJ0ZXh0IjogIkVpdGhlciBydW4gLi9jb2xpIGNvbnZlcnQgLS1tb2RlbCAvcGF0aC90by9zdG9yZSB0byBkb3dubG9hZCBHTE0tNS4yJ3MgRlA4IHdlaWdodHMgYW5kIHF1YW50aXplIHRoZW0gdG8gaW50NCAofjM3MCBHQiksIG9yIGRvd25sb2FkIHRoZSBwcmUtY29udmVydGVkIGpsbnNyay9HTE0tNS4yLWNvbGlicmktaW50NCB3ZWlnaHRzIGZyb20gSHVnZ2luZyBGYWNlIGRpcmVjdGx5LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgT3BlbkFJLWNvbXBhdGlibGUgQVBJIHNlcnZlciIsCiAgICAgICJ0ZXh0IjogIlJ1biBDT0xJX01PREVMPS9wYXRoIENPTElfQVBJX0tFWT1zZWNyZXQgLi9jb2xpIHNlcnZlIC0taG9zdCAxMjcuMC4wLjEgLS1wb3J0IDgwMDAgdG8gZXhwb3NlIC92MS9jaGF0L2NvbXBsZXRpb25zLCAvdjEvY29tcGxldGlvbnMsIGFuZCAvdjEvbW9kZWxzIG9uIGxvY2FsaG9zdC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHRoZSBzZXJ2ZXIgcHVibGljbHkgd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJJbiBhIG5ldyB0ZXJtaW5hbCwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDAwIGZyZWUucGluZ2d5LmlvLiBQaW5nZ3kgcHJpbnRzIGEgcHVibGljIEhUVFBTIFVSTCBsaWtlIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5LmxpbmsgdGhhdCB0dW5uZWxzIGRpcmVjdGx5IHRvIHRoZSBsb2NhbCBjb2xpIHNlcnZlIHByb2Nlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNhbGwgaXQgZnJvbSBhbm90aGVyIGRldmljZSIsCiAgICAgICJ0ZXh0IjogIkZyb20geW91ciBwaG9uZSBvciBhbm90aGVyIG1hY2hpbmUsIHNlbmQgcmVxdWVzdHMgdG8gdGhlIFBpbmdneSBVUkwgd2l0aCB0aGUgQ09MSV9BUElfS0VZIGFzIGEgYmVhcmVyIHRva2VuLCB0aGUgc2FtZSB3YXkgeW91IHdvdWxkIGNhbGwgYW55IE9wZW5BSS1jb21wYXRpYmxlIGVuZHBvaW50LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "colibri_glm_5_2_744b_model_25gb_ram/colibri_banner.webp" "Diagram of Colibrì's architecture: 9.9 GB of dense GLM-5.2 layers resident in RAM next to 370 GB of routed experts streamed on demand from NVMe" >}}

A Show HN post titled "Getting GLM 5.2 running on my slow computer" climbed past 700 points and 180 comments this week. The project, called <a href="https://github.com/JustVugg/colibri" target="_blank">Colibrì</a>, does something that sounds like it shouldn't work: it runs <a href="https://z.ai/" target="_blank">Z.ai's</a> GLM-5.2, a 744-billion-parameter mixture-of-experts model, on a 12-core laptop with 25 GB of RAM. Not a distilled 7B version, not a heavily quantized shrink. The full model, weights and all, on hardware you could buy at a regular electronics store.

The trick is that it barely uses the RAM at all. Colibrì keeps only the model's dense backbone in memory - about 9.9 GB at int4 - and streams the 21,504 mixture-of-experts weights straight off an NVMe drive, one expert at a time, as the router picks them. It is slow. Painfully slow in the cold-cache case. But it runs, and the engine that does it is a single ~2,400-line C file with zero runtime dependencies.

{{% tldr %}}
1. **What it is**: <a href="https://github.com/JustVugg/colibri" target="_blank">Colibrì</a>, a pure-C inference engine that runs GLM-5.2 (744B params, ~40B active) on ~25 GB of RAM by streaming its mixture-of-experts weights from disk instead of loading them into memory.
2. **Performance**: 0.05-0.1 tok/s cold on the author's dev box (WSL2, 12 cores, 25 GB RAM); 2-4 tok/s once experts are pinned and warm; up to ~1.8 tok/s on faster hardware like an Apple M5 Max with a fast NVMe.
3. **Why it matters**: it is a genuinely new trick for running frontier-scale open models on commodity hardware, not a toy demo - and it ships an OpenAI-compatible API server (`coli serve`) out of the box.
4. **The catch**: at these speeds it is a queue-a-task-and-check-back-later tool, not a chat interface. The README itself recommends setting an API key before exposing the server beyond your machine.
5. **The practical follow-up**: since `coli serve` binds to localhost only, use [Pinggy](/) to get a public HTTPS URL and poll your overnight run from your phone: `ssh -p 443 -R0:localhost:8000 free.pinggy.io`.
{{% /tldr %}}

## What actually happened on Hacker News

The post's own framing is disarming: the goal was to get GLM-5.2 to answer correctly on a 12-core laptop with 25 GB of RAM, "even if speed is measured in minutes per paragraph, not tokens per second." That is not a typo. On the author's own dev machine, cold decode runs at 0.05-0.1 tokens per second - roughly one word every ten to twenty seconds.

The top comment on the thread was short: "This is the hacker spirit." That sums up the reaction pretty well. Nobody in the comments thought 0.1 tok/s was a practical daily driver, but plenty of people were impressed that it worked at all, and several pointed out the resemblance to <a href="https://github.com/antirez/ds4" target="_blank">ds4</a>, a similar disk-streaming inference engine that Redis creator <a href="https://antirez.com/" target="_blank">Salvatore Sanfilippo</a> has been building for DeepSeek models. Both projects lean on the same insight: modern NVMe drives are fast enough that RAM doesn't have to be a hard cutoff for "can I run this model." It can be a dial.

The pushback was just as useful as the praise. One commenter noted that a chat UI is the wrong mental model at this speed - the workflow that makes sense is closer to batch processing: queue a prompt, walk away, check the result hours later. Another pointed out that for most practical purposes, free-tier API access from a cloud provider serving GLM-5.2 would clear far more tokens than a 0.1 tok/s local run, so the value here is more "I can" than "I should." Both are fair, and the project doesn't really argue otherwise.

## GLM-5.2, briefly

If you haven't been tracking it, GLM-5.2 is Z.ai's flagship open-weight model, released in June 2026 under an MIT license. It has 744 billion total parameters but only about 40 billion active per token thanks to its mixture-of-experts routing, plus a 1-million-token context window made usable by an attention optimization called IndexShare that Z.ai says cuts per-token compute by roughly 2.9x at full context length. On the <a href="https://artificialanalysis.ai/" target="_blank">Artificial Analysis Intelligence Index</a>, it currently ranks as the top open-weights model, and it reportedly beats GPT-5.5 on several long-horizon coding benchmarks while trailing Claude Opus 4.8 by a narrower margin than most open models manage. In other words, this isn't a curiosity model - it's close to frontier-tier, which is exactly why running the whole thing on a laptop is interesting instead of just cute.

If you want the general background on why MoE models behave this way, see our explainer on [mixture of experts in LLMs](/blog/what_is_mixture_of_experts_in_llm_models/).

## How the disk-streaming trick works

The core idea exploits something MoE models already give you for free: only a fraction of the parameters activate for any single token. GLM-5.2 has 75 MoE layers with 256 experts each - 21,504 experts total - plus a multi-token-prediction (MTP) head, but the router only picks a handful of experts per token. Colibrì splits the model into two pieces and treats each one completely differently:

- **The dense backbone** - attention, shared experts, embeddings, roughly 17B parameters - stays resident in RAM at int4 quantization, weighing in around 9.9 GB.
- **The 21,504 routed experts** - about 19 MB each at int4, ~370 GB total - live on disk and stream in on demand, backed by a per-layer LRU cache, an optional pinned "hot store" for frequently-used experts, and the OS page cache acting as a free second-level cache.

That 370 GB has to sit on a local NVMe drive; over a network share or spinning disk this approach falls apart. The engine itself is refreshingly unglamorous: a single C file (`c/glm.c`), no Python at runtime, no BLAS library, no GPU required, built with GCC and OpenMP. Python only shows up once, during the initial FP8-to-int4 conversion step. An optional CUDA backend can host the resident tensors, but the experts stay CPU-streamed either way.

A few implementation details are worth calling out because they explain why this is more than a proof-of-concept toy:

- **Automatic expert pinning** learns which experts get hit often and keeps them resident, so a warm run gets meaningfully faster than a cold one.
- **Speculative multi-token prediction** adds 2.2-2.8 tokens per forward pass once the cache is primed, with a 39-59% draft acceptance rate in the author's benchmarks.
- **KV-cache persistence** across sessions (~182 KB/token, crash-safe) means you don't lose your place if the process restarts.
- **Grammar-forced speculative decoding** for structured output, useful if you're planning to hit this with function-calling or JSON-mode requests instead of open-ended chat.
- An experimental **router-lookahead prefetch** claims 71.6% predictable routing, which is the kind of thing that could meaningfully close the speed gap if it matures.

The SSD-wear question inevitably comes up whenever someone proposes hammering a drive as a substitute for RAM. The README addresses it directly: heavy writes are limited to the KV cache, while expert loading is almost entirely reads. Reads don't wear out flash the way writes do, so the "you'll kill your SSD in a month" worry is less founded than it sounds at first.

## The actual numbers

Here's the benchmark table from the project, which is more useful than any single headline number:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Machine</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">RAM</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Disk</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Measured</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Dev box (WSL2, 12 cores)</td>
  <td style="border:1px solid #ddd;padding:0.45em;">25 GB</td>
  <td style="border:1px solid #ddd;padding:0.45em;">~1 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.45em;">0.05-0.1 tok/s cold, 2-4 tok/s warm/pinned</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Apple M5 Max (18 cores), macOS</td>
  <td style="border:1px solid #ddd;padding:0.45em;">128 GB</td>
  <td style="border:1px solid #ddd;padding:0.45em;">~4 GB/s cold</td>
  <td style="border:1px solid #ddd;padding:0.45em;">1.06 tok/s (default config), community reports up to ~1.8 tok/s with Metal backend tuning</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Ryzen AI Max+ 395, Ubuntu</td>
  <td style="border:1px solid #ddd;padding:0.45em;">128 GB</td>
  <td style="border:1px solid #ddd;padding:0.45em;">3.27 GB/s buffered</td>
  <td style="border:1px solid #ddd;padding:0.45em;">0.40 tok/s (int8 MTP head, learned expert pinning)</td>
</tr>
</tbody>
</table>

The pattern is obvious once you see it laid out: this scales with disk bandwidth and RAM headroom for pinning hot experts, not with raw CPU power. Throw a faster NVMe and more spare RAM at it and the numbers improve meaningfully; throw more CPU cores at it and they don't move much. That tracks with the architecture - the bottleneck is I/O, not compute.

## Should you actually run this

Depends entirely on what "run" means to you. As a chat replacement, no - 0.1 tok/s cold is a novelty, not a tool. As a way to satisfy curiosity about whether a 744B model can even boot on hardware you already own, absolutely, and it's a genuinely interesting engineering exercise to read through even if you never run it yourself.

Where it gets more defensible is the batch-job framing the HN commenters landed on. If you have a task that doesn't need a human staring at a cursor - summarizing a document overnight, generating a first draft of something you'll edit in the morning, running an agentic loop that checks in every few minutes instead of every few tokens - then tokens-per-minute instead of tokens-per-second stops being disqualifying. You queue the job before bed and read the output with coffee.

That framing only works, though, if you can actually check on the job without sitting at the same machine the whole time. Which is where the second half of this post comes in.

## Running it and checking on it from anywhere

{{< image "colibri_glm_5_2_744b_model_25gb_ram/colibri_pinggy_architecture.webp" "Architecture diagram: coli serve running on localhost, tunneled through Pinggy to a public HTTPS URL, reachable from a phone or any other device" >}}

Colibrì ships `coli serve`, an OpenAI-compatible HTTP server with `/v1/chat/completions`, `/v1/completions`, and `/v1/models` endpoints, SSE streaming, and support for temperature and top-p controls. That means anything you've already written against the OpenAI SDK works against it with a base URL change.

{{< image "colibri_glm_5_2_744b_model_25gb_ram/colibri_ui.webp" "Colibrì's bundled web UI connected to a local coli serve endpoint, mid-response to a prompt, with live VRAM/RAM/core and queue stats in the sidebar" >}}

Build and set it up first:

```bash
git clone https://github.com/JustVugg/colibri.git
cd colibri/c
./setup.sh
```

{{< image "colibri_glm_5_2_744b_model_25gb_ram/git_clone.webp" "Terminal output of cloning the Colibrì repo and running ./setup.sh, which detects the toolchain, warns if OpenMP isn't installed, and prints the next commands to run" >}}

Either convert the weights yourself or grab the pre-quantized version from Hugging Face to skip the conversion step:

```bash
# convert from the original FP8 checkpoint
./coli convert --model /path/to/store

# or use the pre-converted int4 weights directly
# huggingface.co/jlnsrk/GLM-5.2-colibri-int4
```

Start the server. The README is explicit that the default bind address is localhost, and recommends setting an API key before you expose it any further than that:

```bash
COLI_MODEL=/path/to/store COLI_API_KEY=your-secret-key ./coli serve --host 127.0.0.1 --port 8000
```

That last part - "before exposing the server beyond the machine" - is the whole reason a tunnel is useful here. `127.0.0.1` means nothing outside your laptop can reach it, which is safe by default but also means you can't check on your overnight run from your phone without opening a separate terminal on the same machine. Pinggy closes that gap without you touching your router:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Pinggy responds with a public HTTPS URL:

```
You are assigned a random subdomain: https://abc123.a.pinggy.link
```

{{< image "colibri_glm_5_2_744b_model_25gb_ram/pinggy_tunnel.webp" "Real free-tier Pinggy tunnel output: an unauthenticated 60-minute expiry notice plus both HTTP and HTTPS URLs on two separate domains" >}}

An unauthenticated free tunnel like this actually prints four URLs (HTTP and HTTPS, on two different domains) and a note that it expires in 60 minutes - fine for checking on a run once, less fine for an overnight job. [Signing in](/) or moving to a paid plan removes that expiry.

Now poll it from wherever you actually are:

```bash
curl https://abc123.a.pinggy.link/v1/chat/completions \
  -H "Authorization: Bearer your-secret-key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-5.2",
    "messages": [{"role": "user", "content": "Summarize the attached notes."}],
    "stream": false
  }'
```

Queue the job before you go to bed, check the response from your phone in the morning, and you never had to leave a browser tab or an SSH session open on the machine actually doing the work. The tunnel stays up independently of whatever client you're using to check on it.

If you want a fixed subdomain instead of a random one each time you restart the tunnel, [Pinggy's paid plans](/) support that, along with basic-auth on top of your `COLI_API_KEY` if you want a second layer between the internet and a 370 GB model you'd rather not have strangers hammering:

```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io -t "b:myuser:mypassword"
```

This is the same pattern we've used for other local-inference setups - see our guides on [exposing an Ollama API](/blog/forward_ollama_port_11434_online_access/) and [self-hosting any LLM](/blog/how_to_self_host_any_llm_step_by_step_guide/) - it just matters more here because the whole point of Colibrì is that the model is doing something slow enough that you genuinely want to walk away while it works.

## Conclusion

The most interesting thing about Colibrì isn't the specific tok/s numbers, which will look dated within a few months as NVMe drives get faster and someone inevitably tunes the expert-pinning heuristics further. It's that "RAM as a hard requirement" is being actively challenged by more than one project at once - Colibrì and antirez's ds4 arrived at similar architectures independently, working on different model families, within weeks of each other. That's usually a sign an idea's time has come rather than a coincidence.

Whether disk-streamed MoE inference ends up as a permanent fixture of the local-LLM toolkit or a clever stopgap that gets obsoleted by cheaper high-RAM hardware, it's worth trying at least once if you have a spare NVMe drive and a task that doesn't mind waiting. The <a href="https://github.com/JustVugg/colibri" target="_blank">Colibrì repository</a> has the full benchmark methodology and build instructions if you want to reproduce the numbers on your own machine.

This post is a write-up of the Show HN thread <a href="https://news.ycombinator.com/item?id=48842459" target="_blank">"Getting GLM 5.2 running on my slow computer"</a>, where the discussion described above played out.
