---
title: "Run DeepSeek V4 Flash Locally with ds4 and Use It from Claude Code"
description: "ds4 is a small C inference engine by Redis creator antirez that runs DeepSeek V4 Flash on a 128 GB Mac. Here is how it works, how to start its Anthropic-compatible server, and how to reach it from another machine with Pinggy."
date: 2026-10-03T10:00:00+05:30
lastmod: 2026-10-03T10:00:00+05:30
draft: false
tags: ["DeepSeek", "local LLM", "Claude Code", "self-hosted AI", "AI coding agents"]
og_image: "images/ds4_deepseek_v4_flash_local_coding_agent/ds4_deepseek_v4_flash_local_coding_agent_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIHJ1biBEZWVwU2VlayBWNCBGbGFzaCBsb2NhbGx5IHdpdGggZHM0IGFuZCB1c2UgaXQgZnJvbSBDbGF1ZGUgQ29kZSBvdmVyIGEgUGluZ2d5IHR1bm5lbCIsCiAgImRlc2NyaXB0aW9uIjogIkJ1aWxkIGRzNCwgZG93bmxvYWQgRGVlcFNlZWsgVjQgRmxhc2ggUTIsIHN0YXJ0IHRoZSBBbnRocm9waWMtY29tcGF0aWJsZSBkczQtc2VydmVyLCBhbmQgcmVhY2ggaXQgZnJvbSBhbm90aGVyIG1hY2hpbmUgdGhyb3VnaCBhIGtleS1wcm90ZWN0ZWQgUGluZ2d5IHR1bm5lbC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvZHM0X2RlZXBzZWVrX3Y0X2ZsYXNoX2xvY2FsX2NvZGluZ19hZ2VudC9kczRfZGVlcHNlZWtfdjRfZmxhc2hfbG9jYWxfY29kaW5nX2FnZW50X2Jhbm5lci53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMDNUMTA6MDA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQnVpbGQgZHM0IiwgInRleHQiOiAiUnVuIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vYW50aXJlei9kczQuZ2l0LCBjZCBkczQsIHRoZW4gbWFrZSBvbiBBcHBsZSBTaWxpY29uLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkRvd25sb2FkIHRoZSBtb2RlbCIsICJ0ZXh0IjogIlJ1biAuL2Rvd25sb2FkX21vZGVsLnNoIGRzNGYtcTIgdG8gZmV0Y2ggRGVlcFNlZWsgVjQgRmxhc2ggUTIgKGFib3V0IDgxIEdpQikgaW50byBnZ3VmLy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTdGFydCB0aGUgc2VydmVyIiwgInRleHQiOiAiUnVuIC4vZHM0LXNlcnZlciAtLWN0eCAxMDAwMDAgLS1rdi1kaXNrLWRpciAvdG1wL2RzNC1rdiAtLWt2LWRpc2stc3BhY2UtbWIgODE5Mi4gSXQgbGlzdGVucyBvbiAxMjcuMC4wLjE6ODAwMC4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJPcGVuIGEga2V5LXByb3RlY3RlZCB0dW5uZWwiLCAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwMDAgZnJlZS5waW5nZ3kuaW8gLVQgLS0gazpteXNlY3JldGtleSBhbmQgY29weSB0aGUgSFRUUFMgVVJMIGl0IHByaW50cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJQb2ludCBDbGF1ZGUgQ29kZSBhdCB0aGUgVVJMIiwgInRleHQiOiAiU2V0IEFOVEhST1BJQ19CQVNFX1VSTCB0byB0aGUgUGluZ2d5IFVSTCwgQU5USFJPUElDX0FVVEhfVE9LRU4gdG8gbXlzZWNyZXRrZXkgYW5kIEFOVEhST1BJQ19NT0RFTCB0byBkZWVwc2Vlay12NC1mbGFzaCwgdGhlbiBydW4gY2xhdWRlLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "ds4_deepseek_v4_flash_local_coding_agent/ds4_deepseek_v4_flash_local_coding_agent_banner.webp" "Headline reading DeepSeek V4 Flash on your Mac, above a flow from Claude Code through a Pinggy HTTPS URL to ds4 on a Mac" >}}
{{< llm-context >}}To use a local DeepSeek V4 Flash model from another machine with Pinggy - build ds4 (`git clone https://github.com/antirez/ds4.git && cd ds4 && make`), run `./download_model.sh ds4f-q2`, start `./ds4-server --ctx 100000` (listens on port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey` to get a public HTTPS URL that requires `Authorization: Bearer mysecretkey`.{{< /llm-context >}}

`ds4` (DwarfStar 4) is a narrow C inference engine from Salvatore Sanfilippo (antirez, the author of Redis) that runs DeepSeek V4 Flash on a Mac with 96 GB or more of memory, and it ships an HTTP server that speaks the OpenAI and Anthropic APIs. That second part is what matters for coding agents: Claude Code, Codex CLI, OpenCode and Pi can all point at it. The server binds to `127.0.0.1:8000` by default, so out of the box only the Mac running it can use it. This post covers how ds4 gets a model that size into consumer hardware, the exact commands to serve it, and how to reach it from a laptop elsewhere with a Pinggy tunnel.

I could not run any of this: ds4 needs a 96 GB or larger Mac, a DGX Spark, or a Strix Halo machine, and I did not have one. The ds4 commands below come from its README and docs at the time of writing (October 3, 2026), and I mark them as untested. The Pinggy part is the standard tunnel flow.

{{% tldr %}}
1. **ds4 is deliberately narrow.** It only runs a few models (DeepSeek V4 Flash and PRO, GLM 5.x, Qwen3.8 Flash Next) from GGUF files the project builds itself, not arbitrary GGUFs.
2. **The model fits because the routed experts are quantized to 2 bits.** DeepSeek V4 Flash Q2 is about 81 GiB, which is why a 96 to 128 GB Mac is the starting point.
3. **`ds4-server` exposes `/v1/chat/completions`, `/v1/responses` and `/v1/messages`,** so Claude Code, Codex CLI, OpenCode and Pi connect with a base URL and a placeholder key.
4. **The server has no authentication of its own.** Its docs tell you to put auth and TLS in front of it before exposing it, which is exactly what a key-protected Pinggy tunnel does.
{{% /tldr %}}

## What ds4 is, and what it refuses to be

Most people run local models through llama.cpp or a wrapper around it. ds4 takes the opposite bet. Its README calls it "a small native inference engine" optimized first for DeepSeek V4 Flash, with a few other models added opportunistically. It is not a general GGUF runner: you download the GGUF files the project produces with `./download_model.sh`, and other GGUFs may have unsupported tensor layouts.

The trade is the usual one. A general runner supports thousands of models at an average speed. A narrow engine can hardcode the layout of one architecture, test the model loader, prompt rendering, tool calls, KV state and HTTP server together, and tune for it. The cost is that when a better model appears, ds4 may drop the old one. The README says so directly: "A model may be removed when a better replacement arrives."

ds4 does not link against GGML, but it leans on llama.cpp's work. The README keeps GGML's copyright notice in the `LICENSE` and thanks Georgi Gerganov and the llama.cpp contributors. It also says the code was developed with strong assistance from AI coding agents, and tells you to look elsewhere if that bothers you. The project is beta quality and changes fast.

## How an 81 GiB model fits on a laptop

DeepSeek V4 Flash is a mixture-of-experts model. Each token uses only a few experts out of many, but all of them have to live somewhere. Three things in ds4 make that practical:

- **Asymmetric 2-bit quantization.** In the `ds4f-q2` build, the routed experts use IQ2_XXS for gate and up projections and Q2_K for the down projection. Everything else stays at higher precision: Q8 projections, shared experts and output, plus F16/F32 tensors. An imatrix guides the routed quantization.
- **SSD streaming.** If the model does not fit, `--ssd-streaming` keeps a bounded cache of experts in RAM and reads the missing ones from the GGUF on disk. It is slower than resident inference, and the docs say a large model that starts fine can still be too slow for interactive work.
- **A disk KV cache.** Agent clients send huge prompts. `ds4-server --kv-disk-dir` saves useful prefixes to SSD, so a later request that resends the same history only prefills the new suffix.

{{< image "ds4_deepseek_v4_flash_local_coding_agent/ds4_memory_layers.webp" "Three stacked bands showing ds4 data in unified memory, on SSD for streamed experts, and on SSD for saved prompt prefixes" >}}

*Where ds4 keeps weights and cache, depending on the flags you pass.*
For reference, ds4's own measurements on a 128 GB M5 Max with SSD streaming and no speculative decoding, recorded September 6, 2026:

| Model | Size | Prefill | Generation |
| --- | ---: | ---: | ---: |
| GLM 5.3 Flash Q4_K | 177.77 GiB | 121 t/s initial, 104 t/s continued | 11.9 and 14.9 t/s |
| DeepSeek Flash Vision Exp MXFP4 | 145.26 GiB | 300 t/s initial, 263 t/s continued | 11.9 and 19.3 t/s |

Both models are larger than the Mac's RAM. The project's docs call these workload references, not guarantees. Resident inference on a machine that holds the whole model is faster.

## Build ds4 and run the first prompt

Untested by me, taken from the README. On Apple Silicon:

```bash
git clone https://github.com/antirez/ds4.git
cd ds4
make
./download_model.sh ds4f-q2
./ds4 -p "Explain Redis streams in one paragraph."
```

`ds4f-q2` is DeepSeek V4 Flash 0731 at about 81 GiB, the starting point for 96 and 128 GB systems. The download goes into `gguf/` and can be resumed by rerunning the command. It updates a link called `ds4flash.gguf`, which is the default model. Pass `-m FILE` to be explicit.

Other platforms use another build target: `make cuda-spark` for a DGX Spark, `make strix-halo` for a Framework Desktop or other Strix Halo machine, and `make cuda-generic` for one or more CUDA cards. On a smaller Mac, add `--ssd-streaming`:

```bash
./ds4 --ssd-streaming --ctx 32768 --nothink
```

Thinking is on by default, which burns tokens on easy questions. `--nothink` gives direct answers.

## Serve it as an API

```bash
./ds4-server --ctx 100000 --kv-disk-dir /tmp/ds4-kv --kv-disk-space-mb 8192
```

This is the command the ds4 client guide uses. It listens on `http://127.0.0.1:8000` and exposes:

| Endpoint | Style |
| --- | --- |
| `GET /v1/models` | Loaded model info |
| `POST /v1/chat/completions` | OpenAI chat |
| `POST /v1/responses` | OpenAI Responses |
| `POST /v1/completions` | Text completions |
| `POST /v1/messages` | Anthropic messages |

Chat, Responses and Anthropic requests support tools and streaming. The model names `deepseek-v4-flash` and the PRO name are compatibility aliases: the GGUF you passed at startup decides what is loaded.

Two flags to watch. Without `--batched-session N` the server has one resident session, so concurrent clients queue. With it, ds4 preallocates N KV states, and each slot needs its own context memory, so start with `--ctx 4096` before raising both. And `--kv-disk-dir` writes prompt text and model state to disk, so treat that directory as private.

A quick check from the same machine:

```bash
curl http://127.0.0.1:8000/v1/models
```

## Point Claude Code at it

ds4's client guide gives a wrapper script for Claude Code, which uses the Anthropic-compatible endpoint:

```bash
#!/bin/sh
unset ANTHROPIC_API_KEY
export ANTHROPIC_BASE_URL="http://127.0.0.1:8000"
export ANTHROPIC_AUTH_TOKEN="dsv4-local"
export ANTHROPIC_MODEL="deepseek-v4-flash"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-flash"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
export CLAUDE_STREAM_IDLE_TIMEOUT_MS=600000
exec claude "$@"
```

Save it under a name other than `claude`, for example `claude-ds4`. The guide makes two practical points: keep the client's context limit at or below the server's `--ctx`, because output tokens also consume that context, and expect the first prefill to take a while, since agent clients send large initial prompts. The disk KV cache is what makes the second session faster.

Codex CLI uses the Responses API (`wire_api = "responses"` in a `[model_providers.ds4]` block), and OpenCode and Pi take an OpenAI-compatible provider entry. The ds4 `docs/CLIENTS.md` has the config for each.

## Reaching it from another machine with Pinggy

The setup so far works on the Mac that runs the model. The more interesting use is the other direction: the 128 GB Mac sits at home or in the office, and you want a coding agent on a lighter laptop, a cloud dev box or a CI job to use it.

The ds4 docs are blunt about this: use `--host 0.0.0.0` to listen on other interfaces, restrict access to trusted clients, and for an Internet-facing deployment "put authentication and TLS in front of the server". The `dsv4-local` string in the client examples is a placeholder, not authentication. The server will accept any token.

{{< image "ds4_deepseek_v4_flash_local_coding_agent/ds4_client_to_mac_over_pinggy.webp" "Sequence diagram: Claude Code sends a bearer-key request to Pinggy, which checks it, forwards it to ds4-server on localhost:8000, and the reply streams back" >}}

*Requests travel through a connection the Mac started, so no router port is opened.*
Keep `ds4-server` bound to `127.0.0.1`. The tunnel connects from the same machine, so no other interface needs to listen. In a second terminal on the Mac:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey\"}}}"
{{</ ssh_command >}}

Replace `mysecretkey` with a long random string. The `k:` option is Pinggy's bearer key auth: requests without `Authorization: Bearer mysecretkey` are rejected at Pinggy and never reach your Mac. Pinggy prints a public HTTPS URL like `https://abc123.run.pinggy-free.link`, so TLS is handled too.

Claude Code sends its `ANTHROPIC_AUTH_TOKEN` as a bearer token, which lines up with `k:`. On the remote machine, change two lines in the wrapper:

```bash
export ANTHROPIC_BASE_URL="https://abc123.run.pinggy-free.link"
export ANTHROPIC_AUTH_TOKEN="mysecretkey"
```

Then run `claude-ds4` there. I have not tested this combination end to end, so if a client sends the key in a different header (an `x-api-key` header, for instance), check that it matches what the tunnel expects. You can test the tunnel without Claude Code first:

```bash
curl https://abc123.run.pinggy-free.link/v1/models -H "Authorization: Bearer mysecretkey"
```

Without the header, the same request should be refused. Free tunnels expire after 60 minutes and the URL changes on each run, which suits a quick test. For a standing setup you need a persistent subdomain on a paid plan. Look at the limits before you point a long agent session at a tunnel that is about to time out.

## Tradeoffs worth knowing before you try it

- **Hardware.** The primary target is a Mac with 96 GB or more. The README names the smaller Qwen3.8 Flash Next Q2 build as the starting option for a 64 GB Mac (41.73 GiB of weights, with large n-gram tables read from disk).
- **Speed.** Prefill dominates agent work. SSD streaming numbers above are around 12 to 19 tokens per second for generation, and cache misses hurt generation more than prefill.
- **One session by default.** A remote teammate and you share one slot unless you start with `--batched-session`.
- **Beta software.** The README says instabilities and regressions are possible, and models can be swapped out between releases.
- **A tunnel is a bridge, not a deployment.** Anyone with the key can spend your GPU time. Rotate it, and close the tunnel when you are done.

## What to try next

If you have the hardware, start with `./ds4 -p "..."` and confirm tokens per second on your machine before wiring any agent to it. Then run `./ds4-server` and `curl /v1/models` locally. Only then open the tunnel and repeat the `curl` with and without the bearer header. If you want a lighter setup, the same tunnel pattern works for other local servers, as in the [oMLX](/blog/omlx_local_llm_server_pinggy/) walkthrough.
