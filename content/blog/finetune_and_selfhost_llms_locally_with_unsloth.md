---
title: "Fine-Tune and Self-Host LLMs Locally with Unsloth in 2026"
description: "Fine-tune LLMs locally with Unsloth: QLoRA on a single GPU, Unsloth Studio, Dynamic GGUF quants, and sharing your model over a Pinggy tunnel."
date: 2026-08-04T10:00:00+05:30
lastmod: 2026-08-03T10:00:00+05:30
draft: false
toc: true
tags: ["Unsloth", "fine-tuning", "QLoRA", "LoRA", "local LLM", "self-hosted AI", "GGUF", "quantization", "Unsloth Studio", "Pinggy", "Gemma 4"]
categories: ["Technology", "AI", "Development"]
og_image: "images/finetune_and_selfhost_llms_locally_with_unsloth/finetune_and_selfhost_llms_locally_with_unsloth_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEZpbmUtVHVuZSBhbmQgU2VsZi1Ib3N0IGFuIExMTSBMb2NhbGx5IHdpdGggVW5zbG90aCIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIFVuc2xvdGgsIHJ1bm5pbmcgYSBsb2NhbCBMTE0gaW4gVW5zbG90aCBTdHVkaW8sIGZpbmUtdHVuaW5nIGl0IHdpdGggUUxvUkEgb24gYSBzaW5nbGUgR1BVLCBleHBvcnRpbmcgYSBEeW5hbWljIEdHVUYgcXVhbnQsIGFuZCBzaGFyaW5nIHRoZSBlbmRwb2ludCBvdmVyIGEgUGluZ2d5IHR1bm5lbC4iLAogICJ0b3RhbFRpbWUiOiAiUFQ2ME0iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBVbnNsb3RoIiwKICAgICAgInRleHQiOiAiT24gbWFjT1MsIExpbnV4IG9yIFdTTCBydW4gY3VybCAtZnNTTCBodHRwczovL3Vuc2xvdGguYWkvaW5zdGFsbC5zaCB8IHNoLiBPbiBXaW5kb3dzIHJ1biBpcm0gaHR0cHM6Ly91bnNsb3RoLmFpL2luc3RhbGwucHMxIHwgaWV4IGluIFBvd2VyU2hlbGwuIFRoZSBpbnN0YWxsZXIgY3JlYXRlcyBpdHMgb3duIFB5dGhvbiBlbnZpcm9ubWVudCB1bmRlciB+Ly51bnNsb3RoL3N0dWRpbyBhbmQgYnVpbGRzIGEgbGxhbWEuY3BwIGJhY2tlbmQgZm9yIEdHVUYgaW5mZXJlbmNlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSdW4gYSBsb2NhbCBMTE0gaW4gVW5zbG90aCBTdHVkaW8iLAogICAgICAidGV4dCI6ICJMYXVuY2ggdGhlIHdlYiBVSSB3aXRoIHVuc2xvdGggc3R1ZGlvIC1wIDg4ODggYW5kIG9wZW4gaHR0cDovLzEyNy4wLjAuMTo4ODg4LCB0aGVuIHNldCBhbiBhZG1pbiBwYXNzd29yZC4gU2VhcmNoIEh1Z2dpbmcgRmFjZSBmcm9tIHRoZSBtb2RlbCBwaWNrZXIsIGNob29zZSBhIEdHVUYgcXVhbnRpemF0aW9uIHN1Y2ggYXMgVUQtUTRfS19YTCwgYW5kIGRvd25sb2FkIGl0LiBTdHVkaW8gbG9hZHMgdGhlIG1vZGVsIHdpdGggbGxhbWEuY3BwIGFuZCBzdHJlYW1zIHJlcGxpZXMgaW4gdGhlIGNoYXQgdGFiLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJCdWlsZCBhIGRhdGFzZXQgd2l0aCBEYXRhIFJlY2lwZXMiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBEYXRhIFJlY2lwZXMgdGFiIGFuZCB1cGxvYWQgUERGLCBET0NYLCBDU1Ygb3IgUGFycXVldCBmaWxlcywgb3IgcHVsbCBhIGRhdGFzZXQgZnJvbSB0aGUgSHVnZ2luZyBGYWNlIEh1Yi4gQ2hhaW4gc2VlZCwgTExNLCBKaW5qYTIgZXhwcmVzc2lvbiwgdmFsaWRhdG9yIGFuZCBzYW1wbGVyIG5vZGVzIG9uIHRoZSBjYW52YXMsIHByZXZpZXcgYSBzYW1wbGUsIHRoZW4gcnVuIHRoZSBmdWxsIGJ1aWxkLiBUaGUgcmVzdWx0IGFwcGVhcnMgaW4gdGhlIGZpbmUtdHVuaW5nIGRhdGFzZXQgcGlja2VyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJGaW5lLXR1bmUgd2l0aCBRTG9SQSIsCiAgICAgICJ0ZXh0IjogIkluIHRoZSBGaW5lLXR1bmluZyB0YWIgcGljayBhIG1vZGFsaXR5ICh0ZXh0LCB2aXNpb24sIGF1ZGlvIG9yIGVtYmVkZGluZ3MpIGFuZCBhIG1ldGhvZDogUUxvUkEgZm9yIHRoZSBsb3dlc3QgVlJBTSwgTG9SQSBmb3IgMTYtYml0LCBvciBmdWxsIGZpbmUtdHVuaW5nLiBTZW5zaWJsZSBkZWZhdWx0cyBhcmUgbGVhcm5pbmcgcmF0ZSAyZS00LCBMb1JBIHJhbmsgMTYsIGxvcmFfYWxwaGEgZXF1YWwgdG8gdGhlIHJhbmssIGVmZmVjdGl2ZSBiYXRjaCBzaXplIDE2IHZpYSBncmFkaWVudCBhY2N1bXVsYXRpb24sIGFuZCAxIHRvIDMgZXBvY2hzLiBXYXRjaCB0cmFpbmluZyBsb3NzLCBsZWFybmluZyByYXRlIGFuZCBncmFkaWVudCBub3JtIGxpdmUuIFFMb1JBIG5lZWRzIGFib3V0IDUgR0Igb2YgVlJBTSBmb3IgYSA3QiBtb2RlbCBhbmQgYWJvdXQgNDEgR0IgZm9yIGEgNzBCLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvcnQgdGhlIGZpbmUtdHVuZWQgbW9kZWwiLAogICAgICAidGV4dCI6ICJFeHBvcnQgZnJvbSBTdHVkaW8sIG9yIGZyb20gY29kZSBjYWxsIG1vZGVsLnNhdmVfcHJldHJhaW5lZCBmb3IgYSBMb1JBIGFkYXB0ZXIsIG1vZGVsLnNhdmVfcHJldHJhaW5lZF9tZXJnZWQgZm9yIG1lcmdlZCAxNi1iaXQgc2FmZXRlbnNvcnMsIG9yIG1vZGVsLnNhdmVfcHJldHJhaW5lZF9nZ3VmIHdpdGggcXVhbnRpemF0aW9uX21ldGhvZCBzZXQgdG8gUThfMCBvciBxNF9rX20gZm9yIGxsYW1hLmNwcCwgT2xsYW1hIGFuZCBMTSBTdHVkaW8uIFN0dWRpbyBjYW4gYWxzbyBlbWl0IE5WRlA0LCBGUDggYW5kIGltYXRyaXggR0dVRnMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNlcnZlIHRoZSBtb2RlbCBvdmVyIGFuIE9wZW5BSS1jb21wYXRpYmxlIEFQSSIsCiAgICAgICJ0ZXh0IjogIlJ1biB1bnNsb3RoIHJ1biAtLW1vZGVsIDxtb2RlbD4gLXAgODg4OCB0byBzZXJ2ZSAvdjEvY2hhdC9jb21wbGV0aW9ucywgL3YxL3Jlc3BvbnNlcyBhbmQgL3YxL21lc3NhZ2VzLiBDcmVhdGUgYW4gQVBJIGtleSBpbiBTdHVkaW8gdW5kZXIgU2V0dGluZ3MgdGhlbiBBUEk7IGtleXMgYXJlIHByZWZpeGVkIHNrLXVuc2xvdGgtLiBVc2UgdW5zbG90aCBzdGFydCBjbGF1ZGUgb3IgdW5zbG90aCBzdGFydCBjb2RleCB0byBwb2ludCBhIGNvZGluZyBhZ2VudCBhdCB0aGUgbG9jYWwgbW9kZWwuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNoYXJlIHRoZSBsb2NhbCBlbmRwb2ludCB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIktlZXAgVW5zbG90aCBib3VuZCB0byBsb2NhbGhvc3QgYW5kIHJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODg4OCBmcmVlLnBpbmdneS5pbyBpbiBhIHNlY29uZCB0ZXJtaW5hbC4gUGluZ2d5IHJldHVybnMgYSBwdWJsaWMgSFRUUFMgVVJMIHN1Y2ggYXMgaHR0cHM6Ly9hYmMxMjMucGluZ2d5LmxpbmsgdGhhdCBmb3J3YXJkcyBvbmx5IHBvcnQgODg4OC4gQWRkIC10IGZyZWUucGluZ2d5LmlvIFwiYjp1c2VyOnBhc3N3b3JkXCIgZm9yIEhUVFAgYmFzaWMgYXV0aCBvbiB0aGUgdHVubmVsLCBhbmQgcGFzcyAtLWRpc2FibGUtdG9vbHMgdG8gVW5zbG90aCBzbyByZW1vdGUgY2FsbGVycyBjYW5ub3QgZXhlY3V0ZSBjb2RlIG9uIHRoZSBob3N0LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/finetune_and_selfhost_llms_locally_with_unsloth_banner.webp" "Fine-tune and self-host LLMs locally with Unsloth, then reach them remotely with Pinggy" >}}

Fine-tuning an 8B model used to mean renting an A100 and hoping the run finished before your credits did. {{< link href="https://github.com/unslothai/unsloth" >}}Unsloth{{< /link >}} changed the arithmetic: a 4-bit QLoRA fine-tune of an 8B model now fits in about 6 GB of VRAM, so you can fine-tune an LLM locally on a 3060.

Unsloth is two things. **Unsloth Core** is the Python library you import; **Unsloth Studio** is a local web UI that runs, trains, and exports models with no code. Both sit on hand-written Triton kernels that replace the hot paths in the training loop, which is where the headline numbers come from: **2x faster with 70% less VRAM**, up to 12x faster for mixture-of-experts models, and no accuracy loss, because the math is exact rather than approximated. The current release is `v0.1.512-beta`, published July 29, 2026.

Here is the whole loop: install, run a model, fine-tune it, quantize, export, and share the endpoint.

{{< llm-context >}}To fine-tune and self-host an LLM with Unsloth and share it with Pinggy - install with `curl -fsSL https://unsloth.ai/install.sh | sh`, launch the UI with `unsloth studio -p 8888`, fine-tune and export from the browser, then in a new terminal run `ssh -p 443 -R0:localhost:8888 free.pinggy.io` to get a public HTTPS URL for the Studio UI and its OpenAI-compatible `/v1/chat/completions` endpoint.{{< /llm-context >}}

{{% tldr %}}

**Install and launch:**
```bash
curl -fsSL https://unsloth.ai/install.sh | sh   # macOS, Linux, WSL
unsloth studio -p 8888                          # open http://127.0.0.1:8888
```
Windows: `irm https://unsloth.ai/install.ps1 | iex` in PowerShell.

**QLoRA VRAM floor** (<a href="https://unsloth.ai/docs/get-started/fine-tuning-for-beginners/unsloth-requirements" target="_blank">source</a>): 3B needs 3.5 GB, 7B needs 5 GB, 8B needs 6 GB, 70B needs 41 GB. For inference, use the `UD-` prefixed <a href="https://unsloth.ai/docs/basics/unsloth-dynamic-2.0-ggufs" target="_blank">Dynamic 2.0 GGUFs</a>; `UD-Q4_K_XL` is effectively lossless.

**Share it remotely:**
```bash
ssh -p 443 -R0:localhost:8888 free.pinggy.io
```
You get a public URL on `free.pinggy.net` / `run.pinggy-free.link`. Add `-t free.pinggy.io "b:user:password"` for basic auth, and launch Unsloth with `--disable-tools` so remote callers cannot run code on your machine.

**The catch:** Studio is beta, and multi-GPU is the weak spot. Single-GPU is where Unsloth wins.

{{% /tldr %}}

## How to run a local LLM using Unsloth

Installation is one script. It provisions its own Python environment under `~/.unsloth/studio`, pulls a llama.cpp backend for GGUF inference, and drops an `unsloth` launcher into `~/.local/bin`.

```bash
# macOS, Linux, WSL - the same command updates an existing install
curl -fsSL https://unsloth.ai/install.sh | sh
```

On Windows, run `irm https://unsloth.ai/install.ps1 | iex` in PowerShell.

On an Apple Silicon Mac, check which Python it picks up first. If it lands on python.org's **universal2** build, `sysconfig.get_platform()` reports `macosx-10.13-universal2` and uv resolves **Intel** wheels for anything with a compiled extension, leaving a mixed-architecture venv. The install completes, then launching dies with `incompatible architecture (have 'x86_64', need 'arm64')` from `pydantic_core`. Point the installer at a native arm64 interpreter instead, and wipe the old environment so its kept-torch pin does not drag the broken wheels forward:

```bash
rm -rf ~/.unsloth/studio
curl -fsSL https://unsloth.ai/install.sh | UNSLOTH_PYTHON=3.12 sh
```

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/install_unsloth.webp" "Unsloth Studio installer output on macOS, pinned to a native arm64 Python 3.12" >}}

A failed run rolls itself back completely, which is why the next command reports `command not found: unsloth` - the launcher was never written. Also confirm `~/.local/bin` is on your `PATH`.

Then launch:

```bash
unsloth studio -p 8888
```

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/run_unsloth.webp" "Unsloth Studio startup log showing the default admin account and local URLs" >}}

First launch takes a minute while it loads PyTorch and Transformers. It does not prompt you for a password: it creates a default `unsloth` admin account and writes the generated password to `~/.unsloth/studio/auth/.bootstrap_password`. Sign in with that and change it. Studio binds to `127.0.0.1`, so nothing is reachable from your network until you change that.

To skip the UI and just serve a model, `unsloth run` takes a Hugging Face repo and quant in one string:

```bash
unsloth run --model unsloth/gemma-4-26B-A4B-it-GGUF:UD-Q4_K_XL -c 131072
```

That downloads the model if needed, loads it, and prints the endpoint URL and API key. Studio uses llama.cpp's smart auto context, allocating only the KV cache you actually need instead of reserving the full declared window, so you can load a 1M-context model on hardware that could never hold 1M tokens of cache.

To point a coding agent at the local model, `unsloth start` writes the environment and launches it. It accepts `claude`, `codex`, `opencode`, `hermes`, `openclaw`, and `pi`:

```bash
unsloth start claude
```

This works because Unsloth serves both API dialects: `/v1/chat/completions` for OpenAI-shaped clients and `/v1/messages` for Anthropic-shaped ones. Self-healing tool calling matters more than it sounds here, since small local models are notoriously sloppy at emitting valid JSON tool calls and Unsloth repairs malformed ones before they reach the agent. If you are still choosing an agent, we compared the [open source CLI coding agents](/blog/best_open_source_cli_coding_agents/) separately.

## The Unsloth Studio

Studio launched in beta on **March 17, 2026** and covers four jobs that previously needed four separate tools.

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/unsloth_ui_running_on_localhost.webp" "Unsloth Studio chat interface running locally on port 8888" >}}

**Chat** is the inference surface: search Hugging Face, pick a quantization, download, and talk to it, with sandboxed Bash and Python execution and web search that visits pages rather than reading snippets. **Model Arena** puts two models side by side on the same prompt, which is the fastest way to check whether your fine-tune actually beat the base model.

**Data Recipes** turns documents into training data. Upload PDF, DOCX, CSV, or Parquet, then build a transformation graph on a canvas from seed, LLM generation, Jinja2 expression, validator, and sampler nodes. Preview a sample, run the full build, and the output lands in the fine-tuning dataset picker.

**Fine-tuning** is a four-step wizard: pick a modality (text, vision, audio, embeddings) and a method (QLoRA for the lowest VRAM, LoRA, full fine-tuning, or DoRA), pick a dataset, set hyperparameters, then watch loss, LR schedule, and gradient norm update live. **Export** writes the result out as merged 16-bit safetensors, a LoRA adapter alone, or GGUF for llama.cpp, Ollama, and LM Studio.

## How to fine-tune an LLM locally with Unsloth Core

For anything scripted, use the library. It installs separately from Studio:

```bash
uv venv unsloth_env --python 3.13
source unsloth_env/bin/activate
uv pip install unsloth --torch-backend=auto
```

`--torch-backend=auto` matters on Blackwell (RTX 50-series, B200): it resolves the right CUDA wheel instead of leaving you to match versions by hand. NVIDIA cards need CUDA capability 7.0 or higher, so a V100 or T4 is the floor. Still choosing a card? Our guide to [picking hardware for running LLMs locally](/blog/best_hardware_for_self_hosting_local_llms/) covers the tradeoffs.

**On a Mac, this section is the one part you cannot run.** The docs list macOS training as supported, but Studio's setup step on an M3 Pro reports `gpu none (chat-only / GGUF)` and states plainly that "Training and GPU inference require an NVIDIA or AMD ROCm GPU." Apple Silicon gets you the chat, quantization, and GGUF-serving half of this guide; for the fine-tune itself, use an NVIDIA box or a free Colab notebook.

A complete QLoRA run against Gemma 4 E2B, following Unsloth's {{< link href="https://colab.research.google.com/github/unslothai/notebooks/blob/main/nb/Gemma4_(E2B)-Vision.ipynb" >}}official notebook{{< /link >}}:

```python
# train.py - QLoRA fine-tune of Gemma 4 E2B on a single consumer GPU
from unsloth import FastModel
from unsloth.chat_templates import get_chat_template, standardize_data_formats
from datasets import load_dataset
from trl import SFTConfig, SFTTrainer

model, tokenizer = FastModel.from_pretrained(
    model_name = "unsloth/gemma-4-E2B-it",
    max_seq_length = 2048,
    dtype = None,             # None = auto-detect: bf16 on Ampere+, fp16 on T4
    load_in_4bit = True,      # this is what makes it QLoRA
    full_finetuning = False,
)

model = FastModel.get_peft_model(
    model,
    finetune_vision_layers     = False,  # text-only run
    finetune_language_layers   = True,
    finetune_attention_modules = True,
    finetune_mlp_modules       = True,
    r = 16,
    lora_alpha = 16,
    lora_dropout = 0,
    bias = "none",
    random_state = 3407,
)

tokenizer = get_chat_template(tokenizer, chat_template = "gemma-4")

dataset = load_dataset("mlabonne/FineTome-100k", split = "train[:3000]")
dataset = standardize_data_formats(dataset)

def formatting_prompts_func(examples):
    texts = [
        tokenizer.apply_chat_template(
            convo, tokenize = False, add_generation_prompt = False
        ).removeprefix("<bos>")
        for convo in examples["conversations"]
    ]
    return {"text": texts}

dataset = dataset.map(formatting_prompts_func, batched = True)

trainer = SFTTrainer(
    model = model,
    tokenizer = tokenizer,
    train_dataset = dataset,
    args = SFTConfig(
        dataset_text_field = "text",
        per_device_train_batch_size = 2,
        gradient_accumulation_steps = 8,   # effective batch size = 16
        warmup_steps = 5,
        num_train_epochs = 1,
        learning_rate = 2e-4,
        logging_steps = 1,
        optim = "adamw_8bit",
        weight_decay = 0.01,
        lr_scheduler_type = "linear",
        seed = 3407,
        output_dir = "outputs",
        report_to = "none",
    ),
)

stats = trainer.train()
print(f"{stats.metrics['train_runtime']:.1f}s of training")
```

The `.removeprefix("<bos>")` is not cosmetic: `apply_chat_template` adds a BOS token and the trainer adds another, and a doubled BOS measurably degrades output.

On hyperparameters, {{< link href="https://unsloth.ai/docs/get-started/fine-tuning-llms-guide/lora-hyperparameters-guide" >}}Unsloth's guide{{< /link >}} is concrete and only four knobs matter. Set **LoRA rank** to 16 or 32 with **`lora_alpha`** equal to the rank or double it, start **learning rate** at `2e-4`, keep **effective batch size** near 16 by raising `gradient_accumulation_steps` rather than batch size (accumulation costs no extra memory; a larger per-device batch is the main cause of OOM), and stop at **1 to 3 epochs**. Healthy loss is 0.5 to 1.0; below 0.2 you are memorizing the dataset rather than learning from it.

## Quantized models: Unsloth Dynamic 2.0 GGUFs

Unsloth ships two quantization stacks, and conflating them is a common mistake. **Dynamic 4-bit BitsAndBytes** (`unsloth-bnb-4bit`) is for **training** and is what you get from `load_in_4bit = True`. Standard QLoRA quantizes every layer uniformly, which wrecks accuracy on sensitive layers; Unsloth's version selectively declines to quantize those, for under 10% more VRAM.

**Dynamic 2.0 GGUF** (the `UD-` prefixed quants) is for **inference**. Same principle, different target: it picks a quantization type per layer, tuned per architecture, and calibrates on chat-shaped data rather than the Wikipedia text that makes most importance-matrix GGUFs overfit on instruct-tuned models. The measured difference on Qwen3.5, from Unsloth's {{< link href="https://unsloth.ai/docs/models/qwen3.5/gguf-benchmarks" >}}GGUF benchmarks{{< /link >}} (lower is better for both):

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Quant</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Disk</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Perplexity</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Mean KLD</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>UD-Q4_K_XL</strong> (Unsloth)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">19.17 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.5918</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0.0137</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Q4_K_M (bartowski)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">19.77 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.6097</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0.0182</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>UD-IQ2_XXS</strong> (Unsloth)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9.09 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">7.7160</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0.1846</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">IQ2_XXS (bartowski)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8.15 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9.3427</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0.3457</td>
</tr>
</tbody>
</table>

`UD-Q4_K_XL` beats a conventional `Q4_K_M` on both metrics while being 600 MB smaller, and the gap widens as you compress harder, because that is where per-layer decisions pay off. On Gemma 4's quantization-aware-trained weights, Unsloth's conversion hits 85.6% where a naive `Q4_0` conversion of the same checkpoint gets 70.2%. A 15-point swing purely from how you convert the file is a good reminder that GGUF quantization is not a commodity.

In practice: **`UD-Q4_K_XL` and `UD-Q5_K_XL` are effectively lossless** and should be your default, drop to `UD-Q3_K_XL` when you need the VRAM, and treat `UD-Q2_K_XL` as a real quality cliff that is still often the only way to fit a large MoE on consumer hardware. For choosing which base model to start from, see our roundup of the [best open source self-hosted LLMs](/blog/best_open_source_self_hosted_llms_for_coding/).

## Exporting your fine-tuned model

Three targets, three one-liners, all from the official notebooks:

```python
# 1. Adapter only - a few hundred MB, needs the base model at load time
model.save_pretrained("gemma4_lora")
tokenizer.save_pretrained("gemma4_lora")

# 2. Merged 16-bit safetensors - standalone, for vLLM / SGLang / transformers
model.save_pretrained_merged("gemma4-finetune", tokenizer)

# 3. GGUF for llama.cpp, Ollama, LM Studio and Unsloth Studio itself
model.save_pretrained_gguf("gemma4-finetune", tokenizer, quantization_method = "Q8_0")
```

Swap `save_` for `push_to_hub_` and add `token = "hf_..."` to upload instead. Which `quantization_method` values work depends on the architecture: Llama 3.1 accepts the full menu (`q4_k_m`, `q5_k_m`, `q8_0`, `f16`), while Gemma 4 currently supports only `Q8_0`, `BF16`, and `F16` from Unsloth Core. For a smaller GGUF on a new architecture, export `Q8_0` and quantize down with llama.cpp's own tooling.

One thing will silently ruin an otherwise good fine-tune: your inference engine has to apply **the same chat template and EOS token** you trained with. Ollama and LM Studio both guess templates from GGUF metadata, and they guess wrong often enough that it is worth checking the raw prompt your engine sends before concluding the model got worse.

## Sharing your local LLM using Pinggy

You now have a model on `localhost:8888`, which is where most local-AI setups stop being useful: a teammate cannot review your fine-tune, you cannot test from your phone, and a hosted app cannot call it.

Unsloth has two built-in answers. `-H 0.0.0.0` binds the raw port to every interface, reachable on your LAN and nowhere else. `--secure` publishes through a free Cloudflare tunnel and fails closed, so the raw port is never exposed as a fallback. [Pinggy](https://pinggy.io) is what to reach for when you want control over the tunnel itself: persistent URLs and custom domains, basic auth, IP whitelisting, header rewriting, and a web debugger. It needs no binary and no account for free tunnels, because it is plain SSH remote port forwarding.

Leave Unsloth bound to localhost (the default), and in a second terminal run:

```bash
ssh -p 443 -R0:localhost:8888 free.pinggy.io
```

Pinggy prints two public HTTPS URLs, one on `free.pinggy.net` and one on `run.pinggy-free.link`. Either opens the Studio login screen. Because `-R0:localhost:8888` names one port, that is the only thing reachable: nothing else on your machine is exposed, and the raw port stays bound to loopback.

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/pinggy_public_url.webp" "Pinggy returning two public HTTPS URLs for the local Unsloth Studio port" >}}

Open either one and Studio behaves exactly as it does locally, model picker and all:

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/unsloth_running_on_pinggy_url.webp" "Unsloth Studio running through a public Pinggy URL, serving a 4-bit GGUF model at 6.4 tokens per second" >}}

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Unsloth Studio:" portstring="Unsloth Studio Port" localport="8888" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

The same URL serves the API. Create a key in Studio under your avatar, then Settings, then API. Keys are prefixed `sk-unsloth-` and shown once:

```bash
curl https://rjegl-49-43-114-41.run.pinggy-free.link/v1/chat/completions \
  -H "Authorization: Bearer sk-unsloth-YOUR-KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "gemma4-finetune", "messages": [{"role": "user", "content": "Ping"}]}'
```

The tunnel terminal doubles as a request log, so you can watch every call hit your machine and spot a failing route without touching Studio's own logs:

{{< image "finetune_and_selfhost_llms_locally_with_unsloth/pinggy_logs.webp" "Pinggy terminal showing live request logs and transfer counters for the tunnelled Unsloth Studio" >}}

Any OpenAI-compatible client works against that base URL unchanged. Free tunnels time out after 60 minutes and get a new URL on reconnect; for a stable subdomain, sign up at [pinggy.io](https://pinggy.io) and use `token@a.pinggy.io` instead.

### Lock it down before you share the URL

Unsloth's server-side tools (web search, Python, Bash) **run as your user account** and are on by default, so anyone who reaches the server with a valid API key can execute code on your machine. Restart with `unsloth studio -p 8888 --disable-tools` before exposing it, and add basic auth on the tunnel so a leaked URL alone gets nobody in:

```bash
ssh -p 443 -R0:localhost:8888 -t free.pinggy.io "b:reviewer:temporarypass"
```

One caveat for the API rather than the UI: Pinggy's basic and token auth both use the `Authorization` header, and so does Unsloth's API key, so you cannot stack both on one request. For API traffic, rely on the `sk-unsloth-` key and use Pinggy's IP whitelist instead. If you would rather share an Ollama endpoint, the same pattern applies on port 11434 and is covered in [our Ollama sharing guide](/blog/how_to_easily_share_ollama_api_and_open_webui_online/).

## Unsloth limitations and tradeoffs

**Multi-GPU is the real limitation.** Unsloth supports it and does automatic GPU placement, but there is no first-class config for tensor, context, or expert parallelism. For eight GPUs and sequence parallelism, look at Axolotl or TRL. For one GPU, Unsloth is the fastest thing available.

**Studio is beta, and it shows.** The KV cache precision setting reverts from Q8 to F16 on a page reload ({{< link href="https://github.com/unslothai/unsloth/issues/4821" >}}issue #4821{{< /link >}}), you cannot send a message once a conversation hits its context length, and the Fine-tuning tab accepts Parquet or internal Recipe results but not a direct `.jsonl` upload with column-to-role mapping ({{< link href="https://github.com/unslothai/unsloth/issues/4675" >}}issue #4675{{< /link >}}). If your data is already clean JSONL, the code path is less friction than the UI. Releases land weekly, so pin a version for anything you depend on.

**Two smaller things.** Licensing is split: Core is Apache 2.0, but the Studio UI is AGPL-3.0, which carries network-use obligations if you offer it as a service. And export format support lags new architectures, so check what `quantization_method` accepts before planning a deployment around `q4_k_m`.

## Conclusion

Install, launch `unsloth studio -p 8888`, fine-tune with QLoRA on the defaults, export to `UD-Q4_K_XL` GGUF, and open a Pinggy tunnel so the people who need to evaluate it can reach it. Start with Studio to see something working in an afternoon, and move to Unsloth Core when the run needs to be reproducible. Multi-GPU is still the honest gap, but for the single-GPU case this is the shortest path from a folder of documents to a model that answers the way you want.
