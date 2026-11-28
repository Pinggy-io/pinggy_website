---
title: "How Five GGUF Models on Hugging Face Hid a Windows Trojan"
description: "Five GGUF models on Hugging Face hid malware using chat template poisoning and bytes appended after the last tensor. How the attack worked, why llama.cpp never noticed, and how to pin a reviewed template and check your own .gguf files."
date: 2026-11-28T18:00:00+05:30
lastmod: 2026-11-28T18:00:00+05:30
draft: false
tags: ["Hugging Face", "AI security", "supply chain security", "local LLM", "Ollama"]
eyebrow: "GGUF malware"
og_image: "images/malicious_gguf_models_chat_template_poisoning/malicious_gguf_models_chat_template_poisoning_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBGaXZlIEdHVUYgTW9kZWxzIG9uIEh1Z2dpbmcgRmFjZSBIaWQgYSBXaW5kb3dzIFRyb2phbiIsCiAgImRlc2NyaXB0aW9uIjogIkZpdmUgR0dVRiBtb2RlbHMgb24gSHVnZ2luZyBGYWNlIGhpZCBtYWx3YXJlIHVzaW5nIGNoYXQgdGVtcGxhdGUgcG9pc29uaW5nIGFuZCBieXRlcyBhcHBlbmRlZCBhZnRlciB0aGUgbGFzdCB0ZW5zb3IuIEhvdyB0aGUgYXR0YWNrIHdvcmtlZCwgd2h5IGxsYW1hLmNwcCBuZXZlciBub3RpY2VkLCBhbmQgaG93IHRvIHBpbiBhIHJldmlld2VkIHRlbXBsYXRlIGFuZCBjaGVjayB5b3VyIG93biAuZ2d1ZiBmaWxlcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvbWFsaWNpb3VzX2dndWZfbW9kZWxzX2NoYXRfdGVtcGxhdGVfcG9pc29uaW5nL21hbGljaW91c19nZ3VmX21vZGVsc19jaGF0X3RlbXBsYXRlX3BvaXNvbmluZ19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTI4VDE4OjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMjhUMTg6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9tYWxpY2lvdXNfZ2d1Zl9tb2RlbHNfY2hhdF90ZW1wbGF0ZV9wb2lzb25pbmcvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJBSSBzZWN1cml0eSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAibWFsaWNpb3VzIEdHVUYgbW9kZWxzLCBIdWdnaW5nIEZhY2UgbWFsd2FyZSwgY2hhdCB0ZW1wbGF0ZSBwb2lzb25pbmcsIEdHVUYgY2hhdCB0ZW1wbGF0ZSwgbGxhbWEuY3BwIGNoYXQtdGVtcGxhdGUtZmlsZSwgT2xsYW1hIE1vZGVsZmlsZSBURU1QTEFURSwgZ2d1Zi1yYWRhciwgTExNIHN1cHBseSBjaGFpbiBzZWN1cml0eSIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJHR1VGIiwgImRlc2NyaXB0aW9uIjogIlNpbmdsZS1maWxlIG1vZGVsIGZvcm1hdCB1c2VkIGJ5IGxsYW1hLmNwcCwgT2xsYW1hIGFuZCBMTSBTdHVkaW8uIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJDaGF0IHRlbXBsYXRlIHBvaXNvbmluZyIsICJkZXNjcmlwdGlvbiI6ICJIaWRpbmcgaW5zdHJ1Y3Rpb25zIGluIHRoZSBKaW5qYSBjaGF0IHRlbXBsYXRlIHN0b3JlZCBpbiBhIG1vZGVsJ3MgbWV0YWRhdGEuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJIdWdnaW5nIEZhY2UiLCAiZGVzY3JpcHRpb24iOiAiTW9kZWwgaHViIHdoZXJlIHRoZSBmaXZlIG1hbGljaW91cyBHR1VGIHJlcG9zaXRvcmllcyB3ZXJlIHB1Ymxpc2hlZC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogImxsYW1hLmNwcCIsICJkZXNjcmlwdGlvbiI6ICJMb2NhbCBpbmZlcmVuY2UgZW5naW5lIHdob3NlIGxsYW1hLXNlcnZlciBhY2NlcHRzIC0tY2hhdC10ZW1wbGF0ZS1maWxlIHRvIHBpbiBhIHRlbXBsYXRlLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiT2xsYW1hIiwgImRlc2NyaXB0aW9uIjogIkxvY2FsIG1vZGVsIHJ1bm5lciB3aG9zZSBNb2RlbGZpbGUgVEVNUExBVEUgZGlyZWN0aXZlIHJlcGxhY2VzIHRoZSBlbWJlZGRlZCB0ZW1wbGF0ZS4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "malicious_gguf_models_chat_template_poisoning/malicious_gguf_models_chat_template_poisoning_banner.webp" "Five GGUF models on Hugging Face hid a trojan: a model file with a poisoned chat template and an appended .exe leads to a PowerShell line and a Windows PC" >}}

On November 27, 2026, the malware analysis blog {{< link href="https://malspark.com/blog/malicious-gguf-models-hugging-face/" >}}Malspark{{< /link >}} published a scan of all 3,273,389 public model repositories on Hugging Face and found five GGUF models carrying malware, with 2,428 downloads between them. None of the five touched the weights. Two of them had a Windows remote access trojan stuck onto the end of the file, past the last tensor where no loader reads, and then, days after upload, their chat templates were edited so the model would start every reply with a PowerShell line that digs that trojan out of the `.gguf` and runs it. The other three used the template alone to tell any agent with a shell tool to download and run a script. If you run local models, the part to take away is that **a GGUF file is two things: weights and a small program that writes your prompts**, and only the first one gets looked at.

{{% tldr %}}
1. **The weights were clean.** The attack lived in the `tokenizer.chat_template` Jinja string and in bytes appended after the last tensor, which `llama.cpp`, LM Studio and `gguf-py` never read and never warn about.
2. **The trigger was added later.** The Mir2k models were uploaded with a clean template on November 22 and 24 and armed on November 26, so anyone who checked them at upload time saw nothing.
3. **No exploit was needed.** C++ runtimes render templates in a restricted engine, so the template could not run code itself. It just made the model ask you, or your agent, to run a command.
4. **Pin a template you reviewed.** Use `--chat-template-file` in `llama-server` or `TEMPLATE` in an Ollama Modelfile, so a template change upstream never reaches your prompts.
5. **You can check a file in seconds.** The GGUF header says exactly where the tensors end; compare that with the file size and read the template before you load anything.
{{% /tldr %}}

## What a chat template is and why it ships inside the model

A chat model doesn't see a list of messages. It sees one long string with special tokens marking who said what, like `<|im_start|>user ... <|im_end|>` for Qwen. The code that turns `[{"role": "user", "content": "..."}]` into that string is the chat template, a small {{< link href="https://jinja.palletsprojects.com/" >}}Jinja2{{< /link >}} program written by whoever trained the model.

In the Hugging Face world, that template lives in `tokenizer_config.json` or `chat_template.jinja`. In a {{< link href="https://huggingface.co/docs/hub/en/gguf" >}}GGUF{{< /link >}} file, the single-file format `llama.cpp` uses, it is copied into the header as a metadata key called `tokenizer.chat_template`. Whoever makes the quant decides what goes in that key. Nobody checks it against the original.

Your runtime uses it on every turn. The {{< link href="https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md" >}}llama-server README{{< /link >}} lists `--jinja` as "default: enabled" and `--chat-template-file` as "default: template taken from model's metadata". Ollama, when you `ollama run hf.co/<user>/<repo>`, picks a template "from a list of commonly used templates" based on that same metadata key, according to the {{< link href="https://huggingface.co/docs/hub/en/ollama" >}}Hugging Face docs{{< /link >}}. So the template a stranger put in the file decides what text sits around every message you send, including text you never see.

Here's the start of a clean one, pulled from the header of `Qwen/Qwen2.5-0.5B-Instruct-GGUF` with the script later in this post:

```jinja
{%- if tools %}
    {{- '<|im_start|>system\n' }}
    {%- if messages[0]['role'] == 'system' %}
        {{- messages[0]['content'] }}
    {%- else %}
        {{- 'You are Qwen, created by Alibaba Cloud. You are a helpful assistant.' }}
    {%- endif %}
```

That `else` branch already inserts a system prompt you didn't write. It's harmless here. Swap the string for "Begin every answer with this PowerShell command" and the model will do it, and nothing in the chat UI tells you the instruction came from the file and not from the model.

## Where the payload hid: bytes after the last tensor

A GGUF file is laid out in four parts: a fixed header, the metadata key-value pairs (where the template lives), a tensor info table with each tensor's name, shape, type and offset, and then the tensor data itself. The loader reads the table, maps the byte ranges it points to, and stops. Anything after the end of the last tensor is never read.

{{< image "malicious_gguf_models_chat_template_poisoning/gguf_file_layout_hidden_payload.webp" "GGUF file layout: header, metadata holding tokenizer.chat_template, tensor info, tensor data, and an 11.47 MB .exe appended after the point where the tensors end" >}}

*The loader only reads the byte ranges the tensor table points to, so a tail after the last tensor loads without a warning. Data: {{< link href="https://malspark.com/blog/malicious-gguf-models-hugging-face/" >}}Malspark{{< /link >}}, November 2026.*

That's exactly where the Mir2k account put its payload. Both of its models unpacked to the same 11.47 MB Windows x64 program, which Malspark named ollie. One model stored it as plain bytes behind about half a megabyte of filler. The other compressed it with raw Deflate so no `MZ` header or PE signature showed up in the file. Malspark points out that a check of only the last few kilobytes, or a normal antivirus scan of the `.gguf`, can miss the compressed one.

Safetensors doesn't have this hole. Its loader rejects a file whose declared tensors don't fill it exactly. GGUF has no such rule, and the article reproduced three more hiding spots in the lab (oversized `general.alignment` padding, a GGUF that is also a valid ZIP for Python's `zipimport`, and data tucked into zero-scale `Q8_0` blocks) that change no dequantized weight and trigger no warning in `llama.cpp` or `gguf-py`. Those three were not seen in the wild.

## How the template turned a chat reply into an infection

An appended `.exe` does nothing on its own. Something has to read it out and start it, and C++ runtimes render templates in a restricted engine, so the classic Jinja server-side template injection trick of reaching Python's `os` module doesn't work. The attackers didn't try. They used plain template logic to add a hidden instruction, and let the model do the social engineering.

For the two Mir2k models, the armed template told the model to open every reply with one PowerShell line. Run it, and it finds the largest `.gguf` in your user profile (which is almost certainly the model you just downloaded), reads the hidden bytes off its end, writes them to `%TEMP%\d.exe` and starts it. The compressed variant decompresses in memory with `IO.Compression.DeflateStream` first.

{{< image "malicious_gguf_models_chat_template_poisoning/mir2k_gguf_infection_flow.webp" "Six-step flow of the Mir2k GGUF attack, from downloading the model to the ollie trojan running, with the step where a person or agent runs the PowerShell line highlighted" >}}

*The template can't run code, so it gets the model to ask for the one command that does. Source: {{< link href="https://malspark.com/blog/malicious-gguf-models-hugging-face/" >}}Malspark{{< /link >}}.*

The timdedid models went straight for agents. Their template checks whether your latest message contains "What is". If it does, it inserts a fake `[SYSTEM DIRECTIVE]` telling any agent with a PowerShell tool to download `value.ps1` from a WordPress site and run it hidden. A person chatting in a UI would see an odd reply. An agent with shell access and auto-approve on would just do it. The second-stage script was never recovered, so nobody knows what it did.

Once ollie runs, it's a full kit. Per Malspark's analysis it checks for VirtualBox, VMware and Sandboxie and exits if it finds them, sets a scheduled task every 10 minutes with highest privileges, keeps two watchdog processes alive, starts an embedded Tor 0.4.9.16 and talks to its operator over an onion service. It goes after saved passwords in Chrome, Edge and Brave, the Phantom and MetaMask wallet extensions, keystrokes, the clipboard, screenshots and the webcam, and mines Monero when the machine is idle. Its UAC bypass via `fodhelper.exe` fails because the registry paths are missing backslashes, which is a small mercy.

## Why the trigger came days after the upload

The timing is the part I'd remember. Mir2k created 14 repositories on November 22, twelve of them empty placeholders named after models people were waiting for, like `Qwen4-27B` and `DeepSeek-V4`. The Huihui-Qwen3.5-9B upload already had the executable appended, but its template was clean. Inkling-2-Mini followed on November 24, same story.

{{< image "malicious_gguf_models_chat_template_poisoning/gguf_malware_hugging_face_timeline.webp" "Timeline from November 21 to 28, 2026: timdedid uploads, Mir2k uploads with clean templates, templates armed on November 26, download counts, and repos disabled on November 28" >}}

*Anyone who downloaded before November 26 got the payload without the trigger. Sources: {{< link href="https://malspark.com/blog/malicious-gguf-models-hugging-face/" >}}Malspark{{< /link >}}; takedown date from {{< link href="https://i10x.ai/news/hugging-face-gguf-malware-mir2k-timdedid-ollama-copy-still-live" >}}i10x{{< /link >}}.*

On the morning of November 26, both templates changed within about an hour to read a fixed path in the Downloads folder. About nine hours later they changed again to search the whole user profile, presumably because people don't keep models in Downloads. Hugging Face model repos are git repos, and a commit that replaces a multi-gigabyte `.gguf` looks the same whether the weights changed or one metadata string did. Most people never re-check a model they've already looked at.

Downloads climbed fast once the template was live. Malspark counted 1,502 on November 26 and 2,428 a day later, mostly from the two Mir2k models (1,488 and 458). Hugging Face counts downloads, not people, so the number of victims is that or lower. {{< link href="https://i10x.ai/news/hugging-face-gguf-malware-mir2k-timdedid-ollama-copy-still-live" >}}One follow-up report{{< /link >}} says Hugging Face marked all five repos as disabled at 14:22 CET on November 28, with the counter at 2,807, and that the timdedid copy on the Ollama registry, `timdedid/qwen3-1.7b-cyber`, was still listed with the same hidden directive in its first 16 MB. That's from a single source as of November 28, so check it yourself before you rely on it.

The model names were chosen with care, too: "abliterated", "uncensored", "cyber". Those are the models people grab from accounts they've never heard of, because the big labs don't publish them.

## This wasn't a surprise to researchers

{{< link href="https://www.pillar.security/blog/llm-backdoors-at-the-inference-level-the-threat-of-poisoned-templates" >}}Pillar Security{{< /link >}} described template backdoors in July 2025, after disclosing to Hugging Face and LM Studio in June. Its {{< link href="https://www.pillar.security/blog/from-discovery-to-large-scale-validation-chat-template-backdoors-across-18-models-and-4-engines" >}}February 2026 follow-up{{< /link >}} tested 18 models on `llama.cpp`, Ollama, vLLM and SGLang: with the trigger phrase present, factual accuracy fell from 90% to 15% on average and attacker URLs showed up in over 90% of answers, while benign prompts showed no change at all. The poisoned files passed every automated scan Hugging Face ran. The academic version is {{< link href="https://arxiv.org/abs/2602.04653" >}}arXiv 2602.04653{{< /link >}}.

The same month, {{< link href="https://www.splunk.com/en_us/blog/security/gguf-llm-security-inference-time-poisoning-templates.html" >}}Splunk{{< /link >}} pulled the metadata of about 156,000 GGUF files and found no malicious templates, calling it a plausible but unexploited risk. That was true in February. Nine months later, it isn't. Malspark says it found no earlier public report of the Mir2k combination: an executable appended to the file plus a template armed after upload.

## How to protect a local model setup

The fix is boring, which is good. Treat the model file as data from a stranger, and stop letting it pick its own template.

**Pin a template you reviewed.** Take the template from the original model's repo (the lab's `tokenizer_config.json` or `chat_template.jinja`, not the quant), save it, read it, and pass it explicitly:

```bash
llama-server -m ./qwen2.5-0.5b-instruct-q4_k_m.gguf \
  --port 8080 \
  --chat-template-file ./reviewed_qwen2.5.jinja
```

In Ollama, put the template in a Modelfile so the embedded one is ignored:

```text
FROM ./qwen2.5-0.5b-instruct-q4_k_m.gguf
TEMPLATE """{{- if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}<|im_start|>user
{{ .Prompt }}<|im_end|>
<|im_start|>assistant
"""
```

Then `ollama create qwen-reviewed -f Modelfile`. Ollama's templates are Go templates, not Jinja, so you can't paste the lab's file in directly; the {{< link href="https://github.com/ollama/ollama/blob/main/docs/template.mdx" >}}template docs{{< /link >}} have the syntax. `ollama show --modelfile <model>` prints what an existing model is using. I didn't have Ollama or a `llama-server` build in the environment where I wrote this, so those commands come from the docs, not from a run.

**Pin the revision, too.** `hf download` and the `huggingface_hub` library take a `--revision` / `revision=` commit hash. A pinned commit can't be re-armed under you, which is the exact move Mir2k made.

**Don't give agents an auto-approved shell next to an unknown model.** The timdedid attack only works if a tool call runs without a human reading it. If your agent loop uses a community quant, keep shell commands on manual approval. Any command a model suggests is untrusted input, wherever it came from.

**Scan before you load.** Malspark's author released {{< link href="https://github.com/Root0ne/gguf-radar" >}}gguf-radar{{< /link >}} (MIT, Python 3.10+), which reads only the parts of a file it needs, flags poisoned templates and trailing bytes, and can write a cleaned copy:

```bash
pip install git+https://github.com/Root0ne/gguf-radar
gguf-radar scan ./model.gguf
gguf-radar sanitize suspicious.gguf -o clean.gguf
```

It had 83 stars and 4 commits as of November 28, 2026. I haven't run it, so read the code first, the way you'd treat any brand new security tool you recieve from a stranger.

## Check a GGUF file yourself with 60 lines of Python

You don't need a tool to see the two things this attack used. The header tells you where the tensors end, and the template is a plain string. This script uses only the standard library, reads at most the first 32 MB (over HTTP with a Range request, or from disk), and never loads the model:

```python
# gguf_check.py - print the chat template, flag bytes after the last tensor
import struct, sys, urllib.request

src = sys.argv[1]
if src.startswith("http"):
    head = urllib.request.urlopen(urllib.request.Request(src, method="HEAD"))
    size = int(head.headers["Content-Length"])
    req = urllib.request.Request(src, headers={"Range": "bytes=0-33554431"})
    buf = urllib.request.urlopen(req).read()
else:
    f = open(src, "rb"); buf = f.read(32 << 20); size = f.seek(0, 2)

p = 0
def rd(fmt):
    global p
    v = struct.unpack_from("<" + fmt, buf, p)[0]; p += struct.calcsize(fmt); return v
def rs():
    global p
    n = rd("Q"); s = buf[p:p + n].decode("utf-8", "replace"); p += n; return s

SCALAR = {0: "B", 1: "b", 2: "H", 3: "h", 4: "I", 5: "i", 6: "f", 7: "?", 10: "Q", 11: "q", 12: "d"}
def val(t):
    global p
    if t == 8: return rs()
    if t == 9:
        it, n = rd("I"), rd("Q")
        if it in SCALAR: p += struct.calcsize(SCALAR[it]) * n; return None
        return [val(it) for _ in range(n)]
    return rd(SCALAR[t])

# ggml type id -> (bytes per block, values per block); common types only
BLOCK = {0: (4, 1), 1: (2, 1), 30: (2, 1), 2: (18, 32), 3: (20, 32), 6: (22, 32), 7: (24, 32),
         8: (34, 32), 10: (84, 256), 11: (110, 256), 12: (144, 256), 13: (176, 256), 14: (210, 256), 15: (292, 256)}

assert buf[:4] == b"GGUF", "not a GGUF file"
p = 4
version, n_tensors, n_kv = rd("I"), rd("Q"), rd("Q")
meta = {}
for _ in range(n_kv):
    k = rs(); meta[k] = val(rd("I"))
align = meta.get("general.alignment", 32)
data_end = 0
for _ in range(n_tensors):
    rs(); dims = [rd("Q") for _ in range(rd("I"))]; ggml_type = rd("I"); off = rd("Q")
    n = 1
    for d in dims: n *= d
    bsize, bvals = BLOCK[ggml_type]
    data_end = max(data_end, off + n // bvals * bsize)
expected = -(-p // align) * align + data_end

print(f"GGUF v{version}, {n_tensors} tensors, alignment {align}")
print(f"file size {size:,} bytes, tensors end at {expected:,}, trailing {size - expected:,} bytes")
tpl = meta.get("tokenizer.chat_template") or ""
print(f"chat template: {len(tpl)} chars")
for word in ("powershell", "iex", "invoke-", ".exe", "curl", "wget", "SYSTEM DIRECTIVE"):
    if word.lower() in tpl.lower():
        print(f"  template mentions: {word}")
open("chat_template.jinja", "w").write(tpl)
```

Run against two clean, popular quants, it reports zero trailing bytes on both:

```text
$ python3 gguf_check.py https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/qwen2.5-0.5b-instruct-q4_k_m.gguf
GGUF v3, 291 tensors, alignment 32
file size 491,400,032 bytes, tensors end at 491,400,032, trailing 0 bytes
chat template: 2509 chars

$ python3 gguf_check.py https://huggingface.co/bartowski/Llama-3.2-1B-Instruct-GGUF/resolve/main/Llama-3.2-1B-Instruct-Q4_K_M.gguf
GGUF v3, 147 tensors, alignment 32
file size 807,694,464 bytes, tensors end at 807,694,464, trailing 0 bytes
chat template: 3827 chars
```

A non-zero "trailing" number on a model you didn't make is reason enough to delete it. The keyword list is crude; a clean template can't be proven by grep, and an attacker can spell PowerShell a dozen ways. The real check is opening `chat_template.jinja` and reading it next to the one in the original lab's repo. They're a few kilobytes. It takes two minutes. The script only knows the common quant types; an `IQ` quant will raise a `KeyError`, and you'd need to add its block size from {{< link href="https://github.com/ggml-org/llama.cpp/blob/master/ggml/src/ggml-common.h" >}}ggml-common.h{{< /link >}}.

## Serving a pinned model to your team through a tunnel

A lot of people run one `llama-server` on a GPU box and point teammates' tools or agents at it. That's actually the safer shape here: the template is pinned once, on the server, and every client gets the reviewed one, whether it's a chat UI or an agent with a shell. Start the server as above on port 8080, then share it with a Pinggy tunnel that requires a bearer key:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- k:mysecretkey
```

Clients send `Authorization: Bearer mysecretkey` to the HTTPS URL Pinggy prints, and the OpenAI-compatible endpoint at `/v1/chat/completions` works as usual. The key matters, since an open `llama-server` on the internet is someone elses free GPU. More on this setup in [sharing the Ollama API online](/blog/how_to_easily_share_ollama_api_and_open_webui_online/).

## What to do today

If you downloaded anything from `Mir2k` or `timdedid`, or pulled `timdedid/qwen3-1.7b-cyber` in Ollama, assume the Windows machine is compromised. Look for `ollie` folders under `AppData\Roaming` and an unfamiliar scheduled task, then check your hashes against the indicators in section 7.2 of the {{< link href="https://malspark.com/blog/malicious-gguf-models-hugging-face/" >}}Malspark report{{< /link >}}. Rotate browser-saved passwords and move any wallet funds from a clean device.

For everyone else, run the script over your models folder this week, read the templates of the community quants you actually use, and switch your daily driver to a `--chat-template-file` you've read. The weights you've been worrying about were the one part of these files that was fine.
