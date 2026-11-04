---
title: "Needle 2: A 14MB Model That Only Does Tool Calling"
description: "Needle 2 is a 45M-parameter, 14MB open-source model built purely for tool calling and structured extraction on phones, wearables, and robots. Here's how it works, what Hacker News made of it, and how to run it locally and reach it from anywhere with Pinggy."
date: 2026-08-16T11:30:00+05:30
draft: false
tags: ["Needle 2", "tool calling", "edge AI", "local AI", "Pinggy"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/needle2_14mb_tool_calling_llm/needle2_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBOZWVkbGUgMiBMb2NhbGx5IGFuZCBFeHBvc2UgSXQgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW5zdGFsbGluZyBOZWVkbGUgMiwgcnVubmluZyBpdHMgT3BlbkFJLWNvbXBhdGlibGUgdG9vbC1jYWxsaW5nIHNlcnZlciB3aXRoIENhY3R1cywgYW5kIGV4cG9zaW5nIGl0IHRvIHRoZSBpbnRlcm5ldCB1c2luZyBQaW5nZ3kuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgTmVlZGxlIDIiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIHdpdGggcGlwIGluc3RhbGwgY2FjdHVzLW5lZWRsZS4gUmVxdWlyZXMgUHl0aG9uIDMuOSBvciBuZXdlciBhbmQgcnVucyBvbiBDUFUgYnkgZGVmYXVsdCwgd2l0aCBvcHRpb25hbCBHUFUgYW5kIEFwcGxlIFNpbGljb24gZXh0cmFzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJUcnkgdGhlIHBsYXlncm91bmQiLAogICAgICAidGV4dCI6ICJSdW4gbmVlZGxlIHBsYXlncm91bmQgdG8gc3RhcnQgYSBsb2NhbCBicm93c2VyIFVJIGF0IGh0dHA6Ly8xMjcuMC4wLjE6Nzg2MCBmb3IgdGVzdGluZyB0b29sIGNhbGxzIGFuZCBzdHJ1Y3R1cmVkIGV4dHJhY3Rpb24gYWdhaW5zdCB0aGUgYmFzZSBtb2RlbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIE9wZW5BSS1jb21wYXRpYmxlIHNlcnZlciIsCiAgICAgICJ0ZXh0IjogIlJ1biBjYWN0dXMgc2VydmUgbmVlZGxlMiAtLWhvc3QgMTI3LjAuMC4xIC0tcG9ydCA4MDgwIHRvIGJpbmQgYW4gT3BlbkFJLWNvbXBhdGlibGUgY2hhdCBjb21wbGV0aW9ucyBBUEkgdG8gbG9jYWxob3N0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgdGhlIHNlcnZlciBwdWJsaWNseSB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIk9wZW4gYSBuZXcgdGVybWluYWwgYW5kIHJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCBmcmVlLnBpbmdneS5pby4gUGluZ2d5IHByaW50cyBhIHB1YmxpYyBIVFRQUyBVUkwgbGlrZSBodHRwczovL2FiYzEyMy5hLnBpbmdneS5saW5rIHRoYXQgdHVubmVscyBkaXJlY3RseSB0byB0aGUgbG9jYWwgY2FjdHVzIHNlcnZlIHByb2Nlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNhbGwgaXQgZnJvbSBhbm90aGVyIGRldmljZSIsCiAgICAgICJ0ZXh0IjogIlNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIFBpbmdneSBVUkwncyAvdjEvY2hhdC9jb21wbGV0aW9ucyBlbmRwb2ludCB3aXRoIGEgdG9vbHMgYXJyYXkgaW4gdGhlIHJlcXVlc3QgYm9keSwgdGhlIHNhbWUgd2F5IHlvdSB3b3VsZCBjYWxsIGFueSBPcGVuQUktY29tcGF0aWJsZSBmdW5jdGlvbi1jYWxsaW5nIEFQSS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "needle2_14mb_tool_calling_llm/needle2_banner.webp" "Needle 2 packs 45 million parameters into a 14MB binary and holds a full session in 28MB of RAM" >}}

Needle 2 is a 45-million-parameter model that fits in a single 14MB binary and runs a full session in about 28MB of RAM. It is not a small version of a general-purpose chatbot. It does one thing: turn natural language into structured tool calls. No world knowledge, no essay writing, no chit-chat. Just "read this request, pick a function, fill in the arguments" - fast enough to run on a Raspberry Pi 5 at 500 tokens per second, or on a $200 Android phone.

The team behind it, <a href="https://cactuscompute.com/" target="_blank">Cactus Compute</a>, builds inference tooling for phones, wearables, and robots, and Needle 2 is their bet that tool calling does not need a big model to be good at it. It is open source under MIT, the weights are on Hugging Face, and the code showed up on GitHub's trending page this week after a <a href="https://news.ycombinator.com/item?id=49246804" target="_blank">Show HN thread</a> picked it apart.

{{% tldr %}}
1. **What it is**: A 45M-param, 14MB tool-calling and structured-extraction model. MIT licensed.
2. **Install**: `pip install cactus-needle`
3. **Try it**: `needle playground` opens a local UI at `http://127.0.0.1:7860`
4. **Production server**: `cactus serve needle2 --host 127.0.0.1 --port 8080` exposes an OpenAI-compatible API
5. **Share it**: `ssh -p 443 -R0:localhost:8080 free.pinggy.io` gives you a public HTTPS URL to the same endpoint
{{% /tldr %}}

{{< llm-context >}}To run Needle 2 locally and share its tool-calling API - install with `pip install cactus-needle`, start the OpenAI-compatible server with `cactus serve needle2 --host 127.0.0.1 --port 8080` (starts on port 8080), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL for the /v1/chat/completions endpoint.{{< /llm-context >}}

## Why a model that can't do anything else

Most "small" LLMs are still general-purpose models that happen to be small: Gemma 270M, Qwen 0.6B, LFM2.5. They can chat, summarize, and reason a little, and tool calling is one capability bolted onto that general foundation. Cactus's argument, laid out in their <a href="https://cactuscompute.com/blog/needle" target="_blank">announcement post</a>, is that this is backwards for the tool-calling use case specifically:

> "Tool calling is fundamentally retrieval-and-assembly, not reasoning. Cross-attention is the right primitive for this, and FFN parameters are wasted at this scale."

The reasoning: when a model has access to tools and retrieval, it does not need to memorize facts in its weights. It needs to understand what the user wants, match that against a small set of available functions, and assemble the right arguments in the right format. That is closer to a parsing problem than a knowledge problem, and it does not need billions of parameters of world knowledge sitting mostly idle.

So Needle 2 is built on what Cactus calls a Simple Attention Network: attention and gating, with the feed-forward layers that make up most of a typical transformer's parameter count removed almost entirely. It uses a Hadamard MLP in place of a standard FFN, grouped-query attention, "engram" key-value memory, and multi-lane hyper-connections. The full architecture details are in the accompanying paper on <a href="https://arxiv.org/abs/2607.18363" target="_blank">arXiv (2607.18363)</a>.

## What's actually in the box

The whole engine, weights included, is a single 14MB binary - there is no separate checkpoint file to manage, and inference does not touch the network once the model is cached. A few design choices carry the weight here:

- **Structured by construction.** Tool calls come back as JSON, not free text you have to parse and hope is valid. A byte-level grammar compiled from your function schemas constrains every token the model generates, so malformed output is largely impossible rather than merely unlikely.
- **Confidence-gated.** Every response carries a calibrated confidence score from a learned head. You set a threshold: act automatically above it, escalate to a bigger cloud model or a human below it. This matters more than it sounds like it should - a tool-calling model that is silently wrong is worse than one that says "not sure."
- **Bounded memory.** A 256-token sliding window with the available tools pinned as KV sinks keeps total memory near 28MB no matter how long the conversation runs. It will not grow a memory leak over a long session the way naive full-context attention would.
- **Built-in tool retrieval.** If you hand it a catalog of 200 functions, it does not try to reason over all 200 at once - it retrieves the top 5 most relevant tools for the current turn before generating a call.

Cactus's benchmarks put Needle 2 roughly even with FunctionGemma 270M, LFM2.5 230M, and Apple's on-device foundation model on single-shot function-calling accuracy, at 5x to 70x fewer parameters, running 2-bit weights against their 16-bit baselines. On throughput: 500 tok/s decode on a Raspberry Pi 5, 400-1,500 tok/s on VR headsets like the Meta Quest 3S and Apple Vision Pro, and 300-700 tok/s on sub-$200 Android phones.

## What Hacker News pushed back on

The <a href="https://news.ycombinator.com/item?id=49246804" target="_blank">Show HN discussion</a> was reasonably skeptical, which is the right instinct for a model this small making claims this specific. A few threads worth knowing before you try it:

**World knowledge is genuinely absent.** One commenter asked directly whether a model this size has "little to no world knowledge whatsoever" and whether the entire budget goes into getting the tool-call structure right. That is correct, and it is the whole point - Needle 2 is not meant to answer "what is the capital of France," it is meant to route "turn off the lights" to a `set_device_state` call.

**It will call a tool on almost anything.** One user typed the literal string "HN" into a demo configured with a `lock_door` function, and it fired the lock call anyway. That is a real failure mode of a model whose entire job is picking a function: without a well-designed "no tool applies" path and a confidence threshold you actually check, you get false positives on ambiguous or even nonsensical input. A commenter (yoavm) raised exactly this concern, arguing usability evaluation needs to cover false-positive rate, not just accuracy on cases where a tool call was in fact warranted - which is why the confidence-gating feature is worth actually wiring up rather than ignoring.

**Someone's already building the practical stack.** A commenter walked through pairing Needle 2 with a local Whisper speech-to-text model for a voice-controlled Home Assistant setup - text in from transcription, structured device commands out, no cloud round trip. That is close to Alexa/Siri's architecture, minus sending your audio anywhere.

**And the "is this just RNG with extra steps" question.** At least one commenter asked, only half joking, what separates this from a random sentence generator once you strip away the demo. It is a fair gut-check for any tiny model, and it is also why the confidence score and the byte-level grammar constraint matter more here than they would for a general chatbot - they are the guardrails standing in for the reasoning ability the model does not have.

## Running it locally

Installation is a single `pip install`:

```bash
pip install cactus-needle
```

CPU works out of the box. For GPU or Apple Silicon:

```bash
pip install "cactus-needle[gpu]"     # NVIDIA CUDA
pip install "cactus-needle[metal]"   # Apple Silicon
```

A basic tool-calling example, straight from the README:

```python
import needle

@needle.tool
def get_weather(city: str):
    "Get the current weather for a city."
    return {"city": city, "temp_c": 27, "sky": "clear"}

agent = needle.Needle(tools=[get_weather])
print(agent.run("what's it like in Lagos right now?")["results"])
# [{'city': 'Lagos', 'temp_c': 27, 'sky': 'clear'}]
```

Structured extraction works the same way, against a Pydantic schema instead of a function:

```python
from pydantic import BaseModel

class Invoice(BaseModel):
    vendor: str
    total: float
    due_date: str

invoice = needle.extract("Invoice from Acme Corp, $1,200.00, due 2026-09-01", Invoice)
print(invoice.vendor, invoice.total)   # Acme Corp 1200.0
```

To poke at it without writing code, there is a browser playground:

```bash
needle playground
```

This starts a local UI at `http://127.0.0.1:7860` where you can register tools, send prompts, and watch the model's confidence score on each response.

## Standing up the OpenAI-compatible API

For anything beyond local testing, Needle 2 runs inside Cactus's broader inference engine, which speaks the standard OpenAI chat completions format. Start it with:

```bash
cactus serve needle2 --host 127.0.0.1 --port 8080
```

You can tune quantization and backend from the same command:

```bash
cactus serve needle2 --host 127.0.0.1 --port 8080 --bits 2 --backend cpu
```

Test it locally with curl, same shape as any OpenAI-compatible tool-calling request:

```bash
curl http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "needle2",
    "messages": [{"role": "user", "content": "turn off the living room lights"}],
    "tools": [{
      "type": "function",
      "function": {
        "name": "set_device_state",
        "description": "Set a smart home device on or off",
        "parameters": {
          "type": "object",
          "properties": {
            "device": {"type": "string"},
            "state": {"type": "string", "enum": ["on", "off"]}
          },
          "required": ["device", "state"]
        }
      }
    }]
  }'
```

Because it is OpenAI-compatible, pointing an existing agent framework at it is a one-line change: swap the `base_url` from `https://api.openai.com/v1` to `http://localhost:8080/v1` and set any placeholder API key.

## Exposing it publicly with Pinggy

{{< image "needle2_14mb_tool_calling_llm/needle2_pinggy_architecture.webp" "Diagram showing cactus serve running locally, tunneled through Pinggy to a public HTTPS URL, reachable from a phone or another machine" >}}

`cactus serve` binds to `127.0.0.1` by default, which means it is only reachable from the machine it is running on. That is fine for local development, but there are a handful of situations where you want it reachable from elsewhere without deploying anything:

- Testing from an actual phone or wearable instead of a simulator
- Letting a teammate hit your tool-calling endpoint without setting up their own environment
- Wiring a robot or a microcontroller on a different network to a model running on your workstation while you iterate

Pinggy handles this with one command, no port forwarding or router configuration required. Keep `cactus serve` running, and in a new terminal:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy responds with a public HTTPS URL:

```
You are assigned a random subdomain: https://abc123.a.pinggy.link
```

That URL now proxies straight to your local Needle 2 server. From any other device:

```bash
curl https://abc123.a.pinggy.link/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "needle2",
    "messages": [{"role": "user", "content": "what is 42 plus 17"}],
    "tools": [{"type": "function", "function": {"name": "add", "description": "Add two numbers", "parameters": {"type": "object", "properties": {"a": {"type": "number"}, "b": {"type": "number"}}, "required": ["a", "b"]}}}]
  }'
```

If you want the endpoint gated instead of open to anyone with the link, Pinggy supports HTTP basic auth on the same command:

```bash
ssh -p 443 -R0:localhost:8080 a.pinggy.io -t "b:myuser:mypassword"
```

That is enough to keep a demo from being casually discovered while you are sharing it with a specific person, though it is not a substitute for real API key auth if you take this past a prototype.

## What to actually use this for

**Robotics and wearable prototyping.** If you are building for hardware that does not have a GPU or a reliable connection, Needle 2 is small enough to run on the device itself. Prototype the tool-calling logic on your workstation first, tunnel it to the actual hardware over Pinggy while you iterate, then bake the model onto the device once the tool schema is stable.

**Voice control without the cloud round trip.** Pair it with a local Whisper model the way the HN thread describes: transcribe locally, route through Needle 2 for intent-to-function mapping, execute the call. Nothing leaves your network unless a tool itself does.

**A fast pre-filter in front of a bigger model.** Use the confidence score as a router. High-confidence tool calls execute directly against Needle 2's output; anything below your threshold escalates to a larger cloud model that can actually reason about ambiguous requests. This keeps most requests fast and cheap while still having a fallback for the ones that need it.

## What it isn't good for

Do not expect it to hold a conversation, answer general knowledge questions, or reason through anything that needs more context than fits in a 256-token window. It is also worth internalizing the HN thread's "HN" input example: without deliberately handling the "no tool applies" case and actually checking the confidence score, a model whose sole purpose is picking a function will pick one on inputs that should not trigger anything at all. That is a design requirement, not an edge case you can ignore.

## Conclusion

Needle 2 is a useful data point in a debate that keeps resurfacing: does every task need a general-purpose model, or does narrowing the scope let you shrink the model by an order of magnitude without losing much. For tool calling specifically, Cactus's answer looks reasonable - 45M parameters and 14MB is small enough to run on hardware that could never load a 1B-parameter model, and the accuracy holds up against models 5-70x larger on the benchmarks they published. The <a href="https://github.com/cactus-compute/needle" target="_blank">GitHub repo</a> has the fine-tuning workflow if you need it to learn a custom tool catalog, and the `cactus serve` plus Pinggy combination gets you from `pip install` to a publicly reachable tool-calling API in about five minutes.
