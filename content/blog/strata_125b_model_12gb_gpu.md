---
title: "How Strata Runs a 125B Model on a 12 GB GPU"
description: "Strata runs Qwen3.8-Flash-Next, a 125B mixture-of-experts model, on a 12 GB gaming GPU at up to 94 tokens/s. How the GPU, RAM, CPU and SSD split the work, what it costs, and how to reach it remotely."
date: 2026-10-04T18:30:00+05:30
lastmod: 2026-10-04T18:30:00+05:30
draft: false
tags: ["local LLM", "self-hosted AI", "AI coding agents", "open source"]
og_image: "images/strata_125b_model_12gb_gpu/strata_125b_model_12gb_gpu_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBTdHJhdGEgUnVucyBhIDEyNUIgTW9kZWwgb24gYSAxMiBHQiBHUFUiLAogICJkZXNjcmlwdGlvbiI6ICJTdHJhdGEgcnVucyBRd2VuMy44LUZsYXNoLU5leHQsIGEgMTI1QiBtaXh0dXJlLW9mLWV4cGVydHMgbW9kZWwsIG9uIGEgMTIgR0IgZ2FtaW5nIEdQVSBhdCB1cCB0byA5NCB0b2tlbnMvcy4gSG93IHRoZSBHUFUsIFJBTSwgQ1BVIGFuZCBTU0Qgc3BsaXQgdGhlIHdvcmssIHdoYXQgaXQgY29zdHMsIGFuZCBob3cgdG8gcmVhY2ggaXQgcmVtb3RlbHkuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3N0cmF0YV8xMjViX21vZGVsXzEyZ2JfZ3B1L3N0cmF0YV8xMjViX21vZGVsXzEyZ2JfZ3B1X2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMDRUMTg6MzA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0wNFQxODozMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL3N0cmF0YV8xMjViX21vZGVsXzEyZ2JfZ3B1LyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiTG9jYWwgTExNcyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiU3RyYXRhLCBRd2VuMy44LUZsYXNoLU5leHQsIHJ1biAxMjVCIG1vZGVsIGxvY2FsbHksIG1peHR1cmUgb2YgZXhwZXJ0cywgbG9jYWwgTExNIDEyR0IgVlJBTSwgc3BlY3VsYXRpdmUgZGVjb2RpbmcsIHNlbGYtaG9zdGVkIEFJIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk1peHR1cmUgb2YgZXhwZXJ0cyIsICJkZXNjcmlwdGlvbiI6ICJBIG1vZGVsIHdpdGggbWFueSBleHBlcnQgc3ViLW5ldHdvcmtzIHdoZXJlIGEgcm91dGVyIGFjdGl2YXRlcyBvbmx5IGEgZmV3IHBlciB0b2tlbi4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkV4cGVydCBvZmZsb2FkaW5nIiwgImRlc2NyaXB0aW9uIjogIktlZXBpbmcgaG90IGV4cGVydHMgaW4gR1BVIG1lbW9yeSwgYWxsIGV4cGVydHMgaW4gUkFNLCBhbmQgY29tcHV0aW5nIGNhY2hlIG1pc3NlcyBvbiB0aGUgQ1BVLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU3BlY3VsYXRpdmUgZGVjb2RpbmciLCAiZGVzY3JpcHRpb24iOiAiQSBkcmFmdCBsYXllciBndWVzc2VzIHNldmVyYWwgdG9rZW5zIGFuZCB0aGUgZnVsbCBtb2RlbCB2ZXJpZmllcyB0aGVtIGluIG9uZSBwYXNzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUGluZ2d5IHR1bm5lbCIsICJkZXNjcmlwdGlvbiI6ICJBbiBTU0ggdHVubmVsIHRoYXQgZ2l2ZXMgYSBsb2NhbCBBUEkgc2VydmVyIGEgcHVibGljIEhUVFBTIFVSTC4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "strata_125b_model_12gb_gpu/strata_125b_model_12gb_gpu_banner.webp" "Dark banner reading 125B model, 12 GB GPU, beside a panel of Strata numbers: 94 tokens/s writing and 2,650 tokens/s reading a prompt on an RTX 5070" >}}

<a href="https://github.com/Niko1221/Strata" target="_blank">Strata</a> is an MIT-licensed inference engine that runs Qwen3.8-Flash-Next, a 125-billion-parameter model, on a gaming PC. On an RTX 5070 (12 GB of VRAM) with 64 GB of system RAM, the project measures 94 tokens per second for answers and 2,650 tokens per second for reading a 32K-token prompt, using the 2-bit "Q2_0" size. It works because only about 6B of those 125B parameters are used for any one token, and Strata keeps the busy ones on the GPU, everything else in RAM, and lets the CPU handle the misses at the same time. As of October 4, 2026 the repo has about 9,400 stars.

I couldn't run it for this post (no GPU in my sandbox, and the first download is about 70 GB), so every speed number below is the project's own measurement, not mine. Where I'm reading the docs rather than checking behaviour, I say so.

{{% tldr %}}
1. **Only a slice of the model runs per token.** Qwen3.8-Flash-Next has 125B parameters but activates about 6B, because it is a mixture-of-experts model with 512 experts per layer.
2. **Strata spreads the model over the whole PC.** Attention, routers and the KV cache sit on the GPU with a cache of hot experts, RAM holds all the experts, the CPU computes the experts the GPU doesn't have, and the SSD holds a 28.8 GB lookup table.
3. **A built-in draft layer makes it 1.6-1.8x faster.** It guesses up to 3 tokens and the full model checks them in one pass, with the same output.
4. **The costs are real.** You need 32 GB of RAM or more, about 80 GB of disk, a 1 to 3 minute freeze on first load, one request at a time by default, and a model compressed to roughly 2 to 3 bits per weight.
5. **The API is OpenAI and Anthropic compatible**, so a coding agent on another machine can use it through a tunnel, as long as you set an API key first.
{{% /tldr %}}

## Why 125B parameters don't all run at once

Qwen3.8-Flash-Next, from the Qwen team, is a mixture-of-experts (MoE) model. According to its {{< link href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next" >}}model card{{< /link >}}, it has 125B parameters in total and 6B activated per token, 48 layers, and 512 experts in each layer. Per token, a router picks 10 routed experts plus 1 shared expert in every layer. The context window is 262,144 tokens natively. The license is Qwen-community-1.0, which is separate from Strata's MIT license, so read it before you build on it.

The numbers line up with Strata's README, which says the model is "a team of 24,576 small specialists" and that a word needs only 10 of them. That total is 48 layers times 512 experts. My reading is that the 10 is per layer, so one token touches 480 routed experts across the stack, still under 2% of the total.

That is the trick the whole project rests on. The weights are huge, but at any moment only a small, changing slice of them does work. The hard part is that the slice changes every token, so you can't just pin it somewhere fast and forget about it.

## Where each part of the model lives

A 12 GB card can't hold 125B parameters even at 2 bits per weight. Strata splits the model by how often each piece is used. This is from the project's `HOW_IT_WORKS` doc:

- **GPU:** the attention and Gated DeltaNet layers, routers, shared experts, the output head, the draft layer and the KV cache. Whatever VRAM is left over becomes a cache of the most-used experts, at roughly 700 experts per GB. The cache adapts during a conversation.
- **RAM:** every expert. The README says Strata loads 35 to 55 GB into RAM depending on the size you pick.
- **CPU:** computes the experts that aren't in the GPU cache, using AVX-512 or AVX2 kernels, at the same time as the GPU works on its share.
- **SSD:** a 28.8 GB n-gram embedding table. Strata reads a few rows per token through the OS file cache, so the SSD is a lookup table, not the place experts are paged from.

{{< image "strata_125b_model_12gb_gpu/strata_where_model_lives.webp" "Diagram of where a 125B mixture-of-experts model lives on a gaming PC: attention, routers and hot experts on the GPU, all experts in RAM, missed experts computed by the CPU, and an n-gram table on the SSD" >}}

The expert cache is why 12 GB is enough to be useful. Strata's `DETAILS` doc reports a GPU hit rate of about 72% on a 12 GB card with the Coder size, meaning roughly 7 in 10 routed experts run straight from VRAM. The other 3 go to the CPU. That 72% comes from one configuration, so treat it as an example of the mechanism, not a guarantee for your card.

## Guess three tokens, check them in one pass

The second speedup is speculative decoding. Normally each token needs a full pass over all 48 layers. Here the model carries its own multi-token prediction (MTP) layer, which drafts up to 3 tokens ahead. One full pass then checks all of them, and the engine keeps the ones that match what the full model would have produced.

The docs report 2.4 to 3.2 tokens accepted per pass on average. For repeated text, such as code edits or quotes, a separate prompt-lookup drafter copies up to 5 tokens from earlier in the context. The README puts the overall gain at 1.6 to 1.8x with the same answer, since the full model still has the last word on every token.

{{< image "strata_125b_model_12gb_gpu/strata_draft_and_check.webp" "Diagram of speculative decoding in Strata: a draft layer guesses three tokens, then one pass of the full 125B model verifies them and keeps the matching ones" >}}

## What the speed numbers say

Strata publishes its measurements for two machines. This is the NVIDIA one, an RTX 5070 with 12 GB of VRAM, a Ryzen 5 7600 and 64 GB of RAM, with 4K answers and 32K prompts:

| Size | Writes answers | Reads your prompt |
| --- | ---: | ---: |
| Q2_0 | 94 tokens/s | 2,650 tokens/s |
| IQ2_XS | 79 tokens/s | 2,090 tokens/s |
| IQ3_XXS | 62 tokens/s | 1,750 tokens/s |
| IQ3_S | 53 tokens/s | 1,620 tokens/s |

The AMD machine, an RX 9070 XT with 16 GB, gets 60 tokens/s on Q2_0 and 52 on IQ2_XS. The Q2_0 row uses engine 0.1.36 and the others 0.1.26, so the rows aren't a perfectly controlled comparison.

{{< image "strata_125b_model_12gb_gpu/strata_speed_by_size.webp" "Bar chart of Strata generation speed on an RTX 5070 with 12 GB of VRAM by model size: Q2_0 94, IQ2_XS 79, IQ3_XXS 62, IQ3_S 53 tokens per second" >}}

Context length costs a little. On the same card with Q2_0, the `DETAILS` doc lists 93.0 tokens/s at 4K context, 81.8 at 32K and 73.7 at 128K. Prompt reading is slower on short prompts (536 tokens/s at 1K) and flattens near 2,100 tokens/s from 32K up. The README adds that the first message of a chat is read in full at about a minute per 30,000 tokens, while follow-up messages start in seconds.

Speed isn't the same as quality. The README says larger sizes are "a bit smarter", and it describes the Coder size (half the experts removed) as reaching 91% of the full model's SWE-bench Verified score, measured by the Coder's own authors. I haven't seen an independent evaluation of the 2-bit sizes, so for anything you care about, run your own prompts. One size to know about: the closest-to-original UD-Q4_K_XL streams most of its weights from the SSD and writes only 7 to 8.5 tokens/s on a 64 GB machine.

## What it costs you

- **RAM decides what fits.** 32 GB is the minimum (it recommends the Coder size there), 48 GB runs IQ2_XS or Q2_0, and 64 GB runs every size.
- **About 80 GB of disk**, with a roughly 70 GB download on first run.
- **The PC freezes while it loads.** The README says it can be slow or unresponsive for 1 to 3 minutes, longest the first time, because Strata loads 35 to 55 GB into RAM and locks part of it for the GPU.
- **One request at a time.** Others wait. `"parallel": 2` in the config answers two at once, but on a 12 GB card each answer gets slower.
- **GPU support is picky.** NVIDIA RTX 20 series and newer, or specific AMD cards (RX 7900, 7800, 9070 and a few more). On AMD, image input works on Linux only.
- **It's young.** The engine is still at 0.1.x and versions move quickly (0.1.26 and 0.1.36 both appear in its own tables), so expect things to change.

## Running it and calling the API

Setup is a clone and one script:

```bash
git clone https://github.com/Niko1221/Strata
cd Strata
./setup.sh        # START-HERE.bat on Windows
```

The installer checks your GPU, RAM and disk, asks which model size, how much context, and whether to read images, then downloads the model and opens the web app at `http://127.0.0.1:8080`. Run the same script next time to start it without downloading anything again.

The server speaks three API shapes: OpenAI Chat Completions at `/v1/chat/completions`, Anthropic Messages at `/v1/messages`, and OpenAI Responses at `/v1/responses`. The README says that for Claude Code you set `ANTHROPIC_BASE_URL=http://127.0.0.1:8080`, and for anything OpenAI-compatible you use the base URL `http://127.0.0.1:8080/v1`. With no key configured, any key and any model name work.

## Reaching your gaming PC from another machine with Pinggy

The usual reason to want this is that the GPU sits in a desktop at home and you work on a laptop elsewhere. Strata listens on `127.0.0.1` by default, so nothing outside the machine can reach it. A tunnel gets you in without opening the router, and because the tunnel client runs on the same PC and connects to `localhost:8080`, you don't need to bind Strata to `0.0.0.0` at all. The README's own example for LAN access, `--host 0.0.0.0 --api-key <secret>`, is for reaching it from another device on the network.

Set an API key first. The Strata docs are blunt about it: without one, anyone with the link can use your PC. The flag form from the README is `--setup --api-key <secret>` (the key is stored as `api_key` in the `strata-<model>.json` file in the Strata folder):

```bash
./setup.sh --setup --api-key "$(openssl rand -hex 24)"
```

Then start a Pinggy tunnel to port 8080 from the same PC:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- u:Host:localhost
```

The `u:Host:localhost` part rewrites the `Host` header on its way in. I added it because the `DETAILS` doc says Strata checks request hostnames against `localhost` and an `allowed_hosts` list as a DNS-rebinding guard, and a tunnel URL would otherwise arrive with a `*.pinggy.link` host. If you'd rather not rewrite headers, add your tunnel hostname to `allowed_hosts` instead.

Pinggy prints an HTTPS URL like `https://abc123.a.pinggy.link`. From the laptop, call it like any OpenAI-compatible server:

```bash
curl https://abc123.a.pinggy.link/v1/chat/completions \
  -H "Authorization: Bearer <your-key>" \
  -H "Content-Type: application/json" \
  -d '{"model":"strata","messages":[{"role":"user","content":"Say hi in five words."}]}'
```

I haven't run this setup end to end. The commands come from the Strata docs and the Pinggy docs, and the `Host` rewrite and the `Authorization: Bearer` header are my reading of how the two fit together, so check them against your Strata version before relying on them. Two things to keep in mind. A free tunnel lasts 60 minutes and gets a new URL each time you reconnect. For a stable address you'd use a Pinggy token and a persistent subdomain, described in the [persistent subdomain docs](/docs/persistent_subdomain/). The {{< link href="/blog/how_to_easily_share_ollama_api_and_open_webui_online/" newtab=false >}}Ollama and Open WebUI post{{< /link >}} shows the same idea for another local model server. And since Strata serves one request at a time, a tunnel shared with other people turns into a queue fast.

{{< image "strata_125b_model_12gb_gpu/strata_pinggy_remote_access.webp" "Diagram of a laptop calling a Pinggy HTTPS URL, which forwards down an SSH connection opened by a gaming PC to Strata on localhost:8080" >}}

## Try it on your own machine

Check your hardware against the table in the README first: a 12 GB card and 32 GB of RAM is the floor, and 64 GB is where the faster sizes open up. Start with the size the installer recommends, and run your usual coding prompt to see whether the speed and the answers hold up for you. The benchmark tables in `docs/DETAILS.md` list the exact prompts and context lengths, so you can reproduce a row on your own card and compare it with the published number. If you want to compare it with the smaller local models and their hardware needs, our roundups of {{< link href="/blog/top_5_local_llm_tools_and_models/" newtab=false >}}local LLM tools{{< /link >}} and {{< link href="/blog/best_hardware_for_self_hosting_local_llms/" newtab=false >}}self-hosting hardware{{< /link >}} are good starting points.
