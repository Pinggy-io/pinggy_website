---
title: "whichllm: One Command to Find the Best Local LLM for Your Hardware"
description: "whichllm auto-detects your GPU, CPU, and RAM, then ranks local models by real benchmarks rather than parameter count. Here's how to use it, run your pick with Ollama, and share it remotely via Pinggy."
date: 2026-06-08T10:00:00+05:30
lastmod: 2026-06-07T10:00:00+05:30
draft: false
tags: ["local LLM", "whichllm", "Ollama", "Pinggy", "LLM benchmarks", "self-hosted AI", "GPU", "open source LLM"]
categories: ["Technology", "AI", "Development"]
og_image: "images/whichllm_find_best_local_llm/whichllm_find_best_local_llm_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiRmluZCwgUnVuLCBhbmQgU2hhcmUgdGhlIEJlc3QgTG9jYWwgTExNIGZvciBZb3VyIEhhcmR3YXJlIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHVzaW5nIHdoaWNobGxtIHRvIGZpbmQgdGhlIG9wdGltYWwgTExNIGZvciB5b3VyIGhhcmR3YXJlLCBydW5uaW5nIGl0IHdpdGggT2xsYW1hLCBhbmQgc2hhcmluZyBpdCBwdWJsaWNseSB3aXRoIFBpbmdneS4iLAogICJ0b3RhbFRpbWUiOiAiUFQyME0iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUnVuIHdoaWNobGxtIHRvIGRldGVjdCB5b3VyIGhhcmR3YXJlIGFuZCByYW5rIG1vZGVscyIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgd2hpY2hsbG0gd2l0aCAndXZ4IHdoaWNobGxtQGxhdGVzdCcgb3IgJ3BpcCBpbnN0YWxsIHdoaWNobGxtJywgdGhlbiBydW4gJ3doaWNobGxtJyB0byBhdXRvLWRldGVjdCB5b3VyIEdQVSwgQ1BVLCBhbmQgUkFNIGFuZCBnZXQgYSByYW5rZWQgbGlzdCBvZiB0aGUgYmVzdCBtb2RlbHMgZm9yIHlvdXIgc3lzdGVtLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIE9sbGFtYSBhbmQgcHVsbCB0aGUgcmVjb21tZW5kZWQgbW9kZWwiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIE9sbGFtYSBmcm9tIG9sbGFtYS5jb20gd2l0aCAnY3VybCAtZnNTTCBodHRwczovL29sbGFtYS5jb20vaW5zdGFsbC5zaCB8IHNoJywgdGhlbiBwdWxsIHRoZSB0b3AtcmFua2VkIG1vZGVsIGZyb20gd2hpY2hsbG0gb3V0cHV0LCBmb3IgZXhhbXBsZSAnb2xsYW1hIHB1bGwgcXdlbjM6MTRiLXE0X0tfTScuIE9sbGFtYSBzdGFydHMgaXRzIEFQSSBzZXJ2ZXIgb24gcG9ydCAxMTQzNC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHRoZSBPbGxhbWEgQVBJIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiUnVuICdzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MTE0MzQgLXQgcXJAZnJlZS5waW5nZ3kuaW8gXCJ1Okhvc3Q6bG9jYWxob3N0OjExNDM0XCInIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgZm9yIHlvdXIgT2xsYW1hIEFQSS4gU2hhcmUgdGhpcyBVUkwgd2l0aCB0ZWFtbWF0ZXMgb3IgdXNlIGl0IGluIHJlbW90ZSBhcHBzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBZGQgYXV0aGVudGljYXRpb24gYmVmb3JlIHNoYXJpbmciLAogICAgICAidGV4dCI6ICJVc2UgUGluZ2d5J3MgYnVpbHQtaW4gdG9rZW4gYXV0aGVudGljYXRpb24gdG8gc2VjdXJlIHRoZSBlbmRwb2ludC4gQWRkIGEgYmVhcmVyIHRva2VuIHNvIG9ubHkgYXV0aG9yaXplZCB1c2VycyBjYW4gcmVhY2ggeW91ciBsb2NhbCBtb2RlbC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "whichllm_find_best_local_llm/whichllm_find_best_local_llm_banner.webp" "whichllm detects your hardware and ranks local LLMs by real benchmarks" >}}

The honest answer to "which local LLM should I download?" used to be: try three, see which crashes, give up on the fourth. HuggingFace lists thousands of models. Benchmarks are inconsistent, often outdated, and almost never account for what your GPU can actually load. The community advice amounts to "Qwen is good" or "just try llama3," which isn't wrong, but it's not exactly a system.

[whichllm](https://github.com/Andyyyy64/whichllm) is a small Python CLI that just blew up on Hacker News (144 points, Show HN). It auto-detects your GPU, CPU, and RAM, then ranks HuggingFace models against real benchmark data - not parameter count, not marketing claims. One command, you get a ranked list of the models that both fit your hardware and actually perform well.

{{< llm-context >}}To run and share a local LLM with Pinggy - use `whichllm` to find your best model, run it with `ollama serve` (port 11434), then in a new terminal run `ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io "u:Host:localhost:11434"` to get a public HTTPS URL.{{< /llm-context >}}

{{% tldr %}}
1. Install whichllm: `uvx whichllm@latest` (no install needed with uv) or `pip install whichllm`
2. Run `whichllm` - it detects your GPU/CPU/RAM and ranks the best models for your system
3. Pull the top result with Ollama: `ollama pull <model-tag-from-output>`
4. Start serving: `ollama serve` - API is now on `localhost:11434`
5. Share with Pinggy:
   ```bash
   ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io "u:Host:localhost:11434"
   ```
   You get a public `https://abc123.pinggy.link` URL your team can hit directly.
{{% /tldr %}}

## The problem whichllm is solving

Running a local LLM has three distinct phases where you can go wrong. The first is figuring out what your hardware can handle. The second is finding which of the models that fit is actually the best one. The third is actually getting it running.

Most tools help with phase three. Phase one requires you to look up GGUF quantization math and cross-reference it against your VRAM - doable, but annoying. Phase two is worse. Leaderboards age poorly. A model that dominated Chatbot Arena eight months ago might be behind two newer ones that just launched last week. Picking by star count or community buzz selects for hype more than quality.

whichllm handles phases one and two in a single command. It builds a picture of your hardware, fetches live benchmark data, merges multiple scoring sources with recency weighting, and hands you a ranked list. The output tells you the exact quantization variant to pull, the expected tokens-per-second on your hardware, and a composite quality score.

## How it works under the hood

The hardware detection side covers NVIDIA GPUs via `nvidia-ml-py`, AMD via ROCm, Apple Silicon via Metal, and falls back to CPU + RAM for CPU-only inference. It queries available VRAM, system RAM, and free disk space to determine what can fit.

For ranking, it merges several benchmark sources:

- **LiveBench** and **Artificial Analysis Index** - live leaderboards updated regularly
- **Aider's coding benchmark** - specifically relevant if you're using the model for coding assistance
- **Chatbot Arena ELO** - crowd-sourced quality from millions of real conversations
- **Open LLM Leaderboard v2** - academic benchmark suite

The key detail is the recency weighting. A 2024 model can't outrank a current-generation one on a stale score from its launch year. Scores are demoted along a model's lineage over time, so the ranking reflects what's actually good now. Each model gets a 0-100 composite score, weighted by benchmark evidence confidence.

Quantization penalties are factored in. A Q3_K_M that barely fits gets penalized relative to a Q5_K_M that fits comfortably - quality degradation matters, not just raw fit.

## Install and run

The fastest path if you have `uv` installed:

```bash
uvx whichllm@latest
```

This runs the latest version without touching your system Python. If you prefer a persistent install:

```bash
uv tool install whichllm
# or
pip install whichllm
# or
brew install andyyyy64/whichllm/whichllm
```

Then just run it:

```bash
whichllm
```

Output on an RTX 4090 system looks like this:

```
Detecting hardware...
  GPU   NVIDIA GeForce RTX 4090  24 GB VRAM
  CPU   AMD Ryzen 9 7950X  32 cores
  RAM   64 GB

Top models for your hardware:

  #1  Qwen/Qwen3.6-27B         27.8B  Q5_K_M  score 92.8  27 t/s
  #2  Qwen/Qwen3-32B           32.0B  Q4_K_M  score 83.0  31 t/s
  #3  Qwen/Qwen3-30B-A3B       30.0B  Q5_K_M  score 82.7  102 t/s
  #4  mistral-nemo-instruct    12.2B  Q8_0    score 79.1  48 t/s
  #5  Llama-3.3-70B-Instruct   70.6B  Q2_K    score 71.2  14 t/s
```

The `#3` entry is Qwen3-30B-A3B, a Mixture-of-Experts model. It's 30B total parameters but only activates 3B at inference time, which is why it hits 102 t/s - noticeably faster than a 27B dense model despite ranking comparably for quality.

A few useful flags:

```bash
# See what you'd get with different hardware
whichllm --gpu "RTX 5090"

# Plan an upgrade path
whichllm upgrade "RTX 4090" "RTX 5090"

# Chat with the top recommendation immediately
whichllm run "qwen3.6"

# Get Python code snippet for the top model
whichllm snippet "qwen3:14b"

# JSON output for scripting
whichllm --json
```

The `plan` subcommand is useful if you're shopping: `whichllm plan "llama 3 70b"` tells you exactly what hardware you'd need to run that model at a given quality level.

## Pull and run with Ollama

Once you have your model ID from whichllm, pull it with Ollama. Ollama handles quantized GGUF natively and manages model storage automatically.

```bash
# Install Ollama if you haven't
curl -fsSL https://ollama.com/install.sh | sh

# Pull the top recommendation (adjust the tag to match whichllm's output)
ollama pull qwen3:27b-q5_k_m

# Start the API server in the background
ollama serve
```

Ollama's API is now on `localhost:11434`. You can verify it:

```bash
curl http://localhost:11434/api/tags
```

To send a quick test completion:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3:27b-q5_k_m",
  "prompt": "Explain GGUF quantization in one paragraph.",
  "stream": false
}'
```

Ollama also exposes an OpenAI-compatible endpoint at `localhost:11434/v1`, so most tools and libraries that support the OpenAI API work against it without changes.

## Share the API with Pinggy

Ollama binds to `localhost` by default, which means it's not reachable from other machines on your network or from the internet. If you want teammates to use your local model, need to test from a phone, or want to connect a hosted application to your local LLM without deploying it to a server, you need to expose port 11434 publicly.

{{< image "whichllm_find_best_local_llm/whichllm_ollama_pinggy_workflow.webp" "Workflow: whichllm detects hardware, Ollama runs the model, Pinggy creates a public tunnel to port 11434" >}}

Pinggy does this over SSH - no binary to install, no account required for free tunnels:

```bash
ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io "u:Host:localhost:11434"
```

The `u:Host:localhost:11434` part adds a `Host` header rewrite so Ollama responds correctly to requests that arrive with the Pinggy domain name in the `Host` header. Without it, some Ollama endpoints reject the request. Pinggy prints a URL that looks like `https://abc123.pinggy.link` - that's your public Ollama endpoint.

You can now point any OpenAI-compatible client at it. For example, to use the [Ollama Python client](https://github.com/ollama/ollama-python) against the public URL:

```python
from ollama import Client

client = Client(host="https://abc123.pinggy.link")
response = client.chat(model="qwen3:27b-q5_k_m", messages=[
    {"role": "user", "content": "What's the capital of France?"}
])
print(response.message.content)
```

Or with the OpenAI Python SDK:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://abc123.pinggy.link/v1",
    api_key="not-needed",  # Ollama doesn't require a key
)
response = client.chat.completions.create(
    model="qwen3:27b-q5_k_m",
    messages=[{"role": "user", "content": "Hello"}]
)
```

For a persistent tunnel with a fixed subdomain, sign up at [pinggy.io](https://pinggy.io) and use your access token:

```bash
ssh -p 443 -R0:localhost:11434 -t token@free.pinggy.io "u:Host:localhost:11434"
```

## Add authentication before sharing widely

Ollama has no built-in API key authentication. Anyone who has your Pinggy URL can query your model and rack up GPU hours on your machine. Before you share the URL beyond a small trusted group, add a token requirement via Pinggy:

```bash
ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io "u:Host:localhost:11434" "k:mysecrettoken"
```

Callers must then pass the token as a bearer header:

```bash
curl https://abc123.pinggy.link/api/generate \
  -H "Authorization: Bearer mysecrettoken" \
  -d '{"model":"qwen3:27b-q5_k_m","prompt":"Hello","stream":false}'
```

Pinggy validates the token before forwarding the request to your local server, so Ollama itself never sees unauthenticated traffic.

If you want browser-based access with basic auth instead, Pinggy supports that too via the web dashboard at [pinggy.io](https://pinggy.io).

## What whichllm doesn't do

The tool makes one specific promise: given your hardware, which freely available text-generation models should you consider, ranked by quality. It doesn't cover vision models (though the benchmark merge includes some multimodal scores where available), audio, or embedding-only models. It pulls from HuggingFace's public model API, so private or gated models won't show up.

The benchmark data has inherent lag - even with recency weighting, a model that launched last week might not have enough third-party evaluation data to score accurately. If you're chasing a brand-new model release, whichllm will probably rank it conservatively until evidence accumulates. That's the honest tradeoff for using real benchmark data rather than the model card's self-reported numbers.

The speed estimates are approximations. Real-world throughput depends on context window size, your system's memory bandwidth, whether layers are offloaded to CPU RAM, and background load on the machine. Treat the `t/s` number as ballpark, not a guarantee.

## Putting it together

The flow is straightforward: run `whichllm`, pull the top recommendation with `ollama pull`, start the server with `ollama serve`, and if you need remote access, open a Pinggy tunnel with the SSH command above. The whole thing takes about five minutes on a fast internet connection, most of which is the model download.

whichllm fills a real gap. The "which model should I run?" question has been answered differently by everyone you ask, usually based on what they personally tried on hardware that might be nothing like yours. Having a tool that answers it from first principles - your actual hardware, real benchmarks, fresh data - is worth a lot more than the ten minutes it takes to install and run.

The [whichllm repo](https://github.com/Andyyyy64/whichllm) is actively maintained. Version 0.5.2 is current as of June 2026. If you find the rankings consistently off for a model you know well, the benchmark weighting is configurable and the project takes issues.