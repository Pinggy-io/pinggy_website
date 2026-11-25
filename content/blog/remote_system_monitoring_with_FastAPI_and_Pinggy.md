---
title: "Remote System Monitoring with FastAPI and Pinggy"
description: "Build a small FastAPI app that reports CPU, memory, swap and disk usage with psutil, then open it from your phone through a password-protected Pinggy tunnel. Tested with FastAPI 0.165.0 and psutil 7.2.2."
date: 2024-11-02T14:15:25+05:30
lastmod: 2026-11-24T15:15:25+05:30
draft: false
tags: ["FastAPI", "Python", "remote access", "DevOps"]
og_image: "images/system_monitoring_fastapi/remote_system_monitoring_fastapi_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIE1vbml0b3IgYSBDb21wdXRlciBSZW1vdGVseSB3aXRoIEZhc3RBUEksIHBzdXRpbCBhbmQgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiQnVpbGQgYSBzbWFsbCBGYXN0QVBJIGFwcCB0aGF0IHJlcG9ydHMgQ1BVLCBtZW1vcnksIHN3YXAgYW5kIGRpc2sgdXNhZ2Ugd2l0aCBwc3V0aWwsIHRoZW4gb3BlbiBpdCBmcm9tIHlvdXIgcGhvbmUgdGhyb3VnaCBhIHBhc3N3b3JkLXByb3RlY3RlZCBQaW5nZ3kgdHVubmVsLiBUZXN0ZWQgd2l0aCBGYXN0QVBJIDAuMTY1LjAgYW5kIHBzdXRpbCA3LjIuMi4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc3lzdGVtX21vbml0b3JpbmdfZmFzdGFwaS9yZW1vdGVfc3lzdGVtX21vbml0b3JpbmdfZmFzdGFwaV9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTI0VDE1OjE1OjI1KzA1OjMwIiwKICAidG9vbCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIlB5dGhvbiAzLjEzIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiRmFzdEFQSSAwLjE2NS4wIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAicHN1dGlsIDcuMi4yIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiT3BlblNTSCBjbGllbnQiIH0KICBdLAogICJzdGVwIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQ3JlYXRlIGEgdmlydHVhbCBlbnZpcm9ubWVudCBhbmQgaW5zdGFsbCB0aGUgcGFja2FnZXMiLCAidGV4dCI6ICJSdW4gcHl0aG9uIC1tIHZlbnYgLnZlbnYsIGFjdGl2YXRlIGl0IHdpdGggc291cmNlIC52ZW52L2Jpbi9hY3RpdmF0ZSAob3IgLnZlbnZcXFNjcmlwdHNcXEFjdGl2YXRlLnBzMSBpbiBQb3dlclNoZWxsKSwgdGhlbiBydW4gcGlwIGluc3RhbGwgXCJmYXN0YXBpW3N0YW5kYXJkXVwiIHBzdXRpbC4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJXcml0ZSB0aGUgbW9uaXRvcmluZyBhcHAiLCAidGV4dCI6ICJDcmVhdGUgbWFpbi5weSB3aXRoIEZhc3RBUEkgcm91dGVzIHRoYXQgY2FsbCBwc3V0aWw6IC9jcHUsIC9jcHUvY29yZXMgYW5kIC9jcHUvZnJlcXVlbmN5IGZvciB0aGUgcHJvY2Vzc29yLCAvbWVtb3J5IGFuZCAvbWVtb3J5L3N3YXAgZm9yIFJBTSBhbmQgc3dhcCwgL2Rpc2ssIC9kaXNrL3BhcnRpdGlvbnMgYW5kIC9kaXNrL2lvIGZvciBzdG9yYWdlLCAvc3RhdHMgZm9yIGEgb25lLWNhbGwgc3VtbWFyeSwgYW5kIC8gZm9yIGEgcGFnZSB0aGF0IHJlZnJlc2hlcyAvc3RhdHMgZXZlcnkgMiBzZWNvbmRzLiBVc2UgZGVmLCBub3QgYXN5bmMgZGVmLCBmb3Igcm91dGVzIHRoYXQgY2FsbCBwc3V0aWwuY3B1X3BlcmNlbnQoaW50ZXJ2YWw9MSksIGJlY2F1c2UgdGhhdCBjYWxsIGJsb2NrcyBmb3IgYSBzZWNvbmQuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiUnVuIHRoZSBhcHAgb24gbG9jYWxob3N0IiwgInRleHQiOiAiUnVuIGZhc3RhcGkgcnVuIG1haW4ucHkgLS1ob3N0IDEyNy4wLjAuMS4gVGhlIGFwcCBsaXN0ZW5zIG9uIHBvcnQgODAwMCBhbmQgc2VydmVzIGludGVyYWN0aXZlIEFQSSBkb2NzIGF0IGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kb2NzLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlN0YXJ0IGEgcGFzc3dvcmQtcHJvdGVjdGVkIFBpbmdneSB0dW5uZWwiLCAidGV4dCI6ICJJbiBhIHNlY29uZCB0ZXJtaW5hbCwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDAwIGZyZWUucGluZ2d5LmlvIC1UIC0tIGI6bW9uaXRvcjpjaGFuZ2UtbWUgd2l0aCB5b3VyIG93biB1c2VybmFtZSBhbmQgcGFzc3dvcmQuIFBpbmdneSBwcmludHMgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgYXNrcyBmb3IgdGhvc2UgY3JlZGVudGlhbHMuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiT3BlbiB0aGUgbWV0cmljcyBmcm9tIGFueXdoZXJlIiwgInRleHQiOiAiT3BlbiB0aGUgSFRUUFMgVVJMIG9uIHlvdXIgcGhvbmUgb3IgYW5vdGhlciBjb21wdXRlciBhbmQgc2lnbiBpbi4gVGhlIHJvb3QgcGF0aCBzaG93cyBsaXZlIHN0YXRzLCBhbmQgL3N0YXRzLCAvY3B1LCAvbWVtb3J5IGFuZCAvZGlzayByZXR1cm4gSlNPTiB5b3UgY2FuIGFsc28gZmV0Y2ggd2l0aCBjdXJsIC11IG1vbml0b3I6Y2hhbmdlLW1lLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "system_monitoring_fastapi/remote_system_monitoring_fastapi_banner.webp" "Remote System Monitoring with FastAPI and Pinggy: headline above gauges for the CPU, memory, swap and disk percentages returned by the /stats endpoint" >}}

{{< llm-context >}}To monitor a computer remotely with FastAPI and Pinggy - run `pip install "fastapi[standard]" psutil`, start the psutil-based app with `fastapi run main.py --host 127.0.0.1` (port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:monitor:change-me` to get a password-protected public HTTPS URL for /stats, /cpu, /memory and /disk.{{< /llm-context >}}

Every machine you leave running, a home server, a build box or a Raspberry Pi in a cupboard, eventually runs out of something: disk, memory or patience. You usually find out when it's already too late, and usually when you're not sitting in front of it.

This guide builds a single-file {{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}} app that reads CPU, memory, swap and disk usage with {{< link href="https://pypi.org/project/psutil/" >}}psutil{{< /link >}} and returns it as JSON, plus a tiny page that refreshes every 2 seconds. Then one SSH command to [Pinggy](https://pinggy.io) puts it on a public HTTPS URL with a password, so you can check the machine from your phone even when it sits behind NAT or CGNAT. No port forwarding, no cloud VM.

I ran everything below in November 2026 on an Apple Silicon Mac with Python 3.13.0, FastAPI 0.165.0 (the `fastapi` CLI 0.0.34) and psutil 7.2.2, and ran the same `main.py` on Linux in a `python:3.13-slim` container. The JSON responses in this post are real output from those runs. I did not test on Windows; the Windows notes come from the psutil docs.

{{% tldr %}}

1. **Install:** `pip install "fastapi[standard]" psutil` in a virtual environment.
2. **Run the app:** `fastapi run main.py --host 127.0.0.1` serves the metrics on port 8000.
3. **Open a tunnel with a password:** `ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:monitor:change-me`
4. **Check it from anywhere:** open the HTTPS URL Pinggy prints, sign in, and read `/stats`, or the live page at `/`.

{{% /tldr %}}

## What you're building

The app has one job: answer HTTP requests with numbers psutil reads from the operating system. Each route maps to one psutil call:

| Route | psutil call | What it returns |
|---|---|---|
| `/cpu`, `/cpu/cores` | `cpu_percent()` | Overall and per-core CPU usage |
| `/cpu/frequency` | `cpu_freq()` | Current, min and max frequency in MHz |
| `/memory`, `/memory/swap` | `virtual_memory()`, `swap_memory()` | RAM and swap usage in bytes and percent |
| `/disk`, `/disk/partitions`, `/disk/io` | `disk_usage()`, `disk_partitions()`, `disk_io_counters()` | Space, mounts, read/write counters |
| `/stats` | all of the above | One-call summary for a dashboard |
| `/` | none | A page that polls `/stats` every 2 seconds |

The app listens on `127.0.0.1:8000`, so nothing outside your machine can reach it directly. The SSH client opens an outbound connection to Pinggy on port 443, and Pinggy sends requests for your public URL back down that connection. Your router never needs an open port.

{{< image "system_monitoring_fastapi/fastapi_monitor_pinggy_architecture.webp" "Sequence diagram: the computer opens an SSH connection to Pinggy on port 443, a request from the phone without a password gets 401 Unauthorized, a request with basic auth goes down the SSH tunnel to FastAPI on localhost:8000, psutil reads CPU, memory and disk, and the JSON comes back to the phone" >}}

## Set up the environment

Create a virtual environment so these packages stay out of your system Python:

```bash
python -m venv .venv
```

If `python` isn't found, use `python3`. FastAPI 0.165.0 needs Python 3.11 or newer, so check `python3 --version` first. On a Mac, the `python3` that comes with Apple's command line tools is 3.9.6, and pip on 3.9 quietly installs a much older FastAPI instead of failing. Then activate it:

```bash
# Linux and macOS
source .venv/bin/activate

# Windows PowerShell
.venv\Scripts\Activate.ps1

# Git Bash on Windows
source .venv/Scripts/activate
```

Install FastAPI with its standard extras, plus psutil:

```bash
python -m pip install --upgrade pip
pip install "fastapi[standard]" psutil
```

The `[standard]` extra pulls in Uvicorn (the ASGI server that actually serves requests) and the `fastapi` command line tool you'll use to run the app. psutil ships prebuilt wheels for macOS, Windows and 64-bit Linux (x86_64 and ARM), so there's nothing to compile on most machines. On 32-bit ARM, such as a 32-bit Raspberry Pi OS install, PyPI has no wheel, and pip may have to build it from source, which needs `python3-dev` and a C compiler.

## The app, one route group at a time

Everything lives in one file, `main.py`. I'll go through it in four parts; paste them one after another into teh same file.

> **The original code for this post is on GitHub.** ({{< link href="https://github.com/AbhilashK26/Remote_system_monitoring_with_FastAPI_and_Pinggy" >}}GitHub Link{{< /link >}}) The version below changes a few things: plain `def` instead of `async def` for blocking routes, a correct disk path on macOS, guards for values psutil can't read, and a `/stats` route with a small live page.

### CPU usage, and why these routes are not async

```python
import sys
import time

import psutil
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI(title="System monitor")

# The volume to report in /disk. On macOS, "/" is the read-only system
# volume, so your files live on /System/Volumes/Data.
ROOT = {"win32": "C:\\", "darwin": "/System/Volumes/Data"}.get(sys.platform, "/")

# The first non-blocking cpu_percent() call returns 0.0,
# so take a baseline when the app starts.
psutil.cpu_percent(interval=None)


@app.get("/cpu")
def get_cpu_usage():
    # Blocks for 1 second while psutil samples the CPU
    return {"cpu_usage": psutil.cpu_percent(interval=1)}


@app.get("/cpu/cores")
def get_cpu_cores():
    return {"core_usage": psutil.cpu_percent(interval=1, percpu=True)}


@app.get("/cpu/frequency")
def get_cpu_frequency():
    freq = psutil.cpu_freq()
    if freq is None:  # the OS reported no frequency, common in Linux VMs
        return {"current": None, "min": None, "max": None}
    return {"current": freq.current, "min": freq.min, "max": freq.max}
```

`psutil.cpu_percent(interval=1)` measures CPU time, sleeps for one second, measures again and returns the difference as a percentage. That sleep is the reason these routes use `def`. FastAPI runs a `def` route in a thread pool, but it runs an `async def` route directly on the event loop, so a one-second blocking call inside `async def` freezes every other request for that second.

I measured it. Five simultaneous requests to `/cpu` took **5.05 seconds with `async def` and 1.04 seconds with `def`**. The first version of this post used `async def` everywhere, which is an easy mistake to make because it looks faster.

Real responses from the Mac:

```json
{"cpu_usage": 54.6}
```

```json
{"core_usage": [80.6, 77.0, 74.0, 69.0, 69.7, 64.0, 12.0, 18.0, 20.0, 17.0, 8.0]}
```

```json
{"current": 4056, "min": 696, "max": 4056}
```

There's one value per logical CPU, 11 on this machine. Frequency needs care. The {{< link href="https://psutil.readthedocs.io/en/stable/#psutil.cpu_freq" >}}psutil docs{{< /link >}} say `current` is a live value only on Linux and usually the fixed nominal value elsewhere. Some machines don't report a frequency at all: in the Linux container on Docker Desktop (an ARM virtual machine), `psutil.cpu_freq()` returned `None` and the route answered `{"current": null, "min": null, "max": null}`. Without the `if freq is None` check, that route would crash with a 500.

### Memory and swap

```python
@app.get("/memory")
def get_memory_usage():
    mem = psutil.virtual_memory()
    return {
        "total": mem.total,
        "available": mem.available,
        "used": mem.used,
        "percent": mem.percent,
    }


@app.get("/memory/swap")
def get_swap_usage():
    swap = psutil.swap_memory()
    return {
        "total": swap.total,
        "used": swap.used,
        "free": swap.free,
        "percent": swap.percent,
        "sin": swap.sin,
        "sout": swap.sout,
    }
```

From the Mac, which was busy at the time:

```json
{"total": 19327352832, "available": 3621797888, "used": 6657851392, "percent": 81.3}
```

```json
{"total": 17179869184, "used": 16292118528, "free": 887750656, "percent": 94.8, "sin": 3455472156672, "sout": 89044779008}
```

All values are bytes. Two things trip people up here. First, `used` and `available` don't add up to `total`, because the OS counts caches and buffers separately. Watch `available` and `percent`: psutil calculates `percent` as `(total - available) / total`, which you can check against the numbers above (81.3%). Second, `sin` and `sout` are bytes swapped in and out since boot, not a rate, and psutil always reports them as `0` on Windows.

The old version of this post had a separate `/ram` route that returned `virtual_memory().percent`. That's the same number as `percent` above, so it's folded into `/stats` now.

### Disk space and I/O

```python
@app.get("/disk")
def get_disk_usage():
    disk = psutil.disk_usage(ROOT)
    return {
        "total": disk.total,
        "used": disk.used,
        "free": disk.free,
        "percent": disk.percent,
    }


@app.get("/disk/partitions")
def get_disk_partitions():
    return {
        "partitions": [
            {
                "device": p.device,
                "mountpoint": p.mountpoint,
                "fstype": p.fstype,
                "opts": p.opts,
            }
            for p in psutil.disk_partitions()
        ]
    }


@app.get("/disk/io")
def get_disk_io():
    io = psutil.disk_io_counters()
    if io is None:  # diskless machines and some containers
        return {}
    return {
        "read_count": io.read_count,
        "write_count": io.write_count,
        "read_bytes": io.read_bytes,
        "write_bytes": io.write_bytes,
        "read_time": io.read_time,
        "write_time": io.write_time,
    }
```

The `ROOT` constant at the top exists because of macOS. Since macOS Catalina, `/` is a read-only system volume (cryptographically sealed since Big Sur), and your files live on `/System/Volumes/Data`. Both share one APFS container, so `total` is the same but `used` is not. On my Mac, `psutil.disk_usage("/")` said **32.3%** and `/System/Volumes/Data` said **92.1%**, which matches what `df -h` reports for each. If you monitor `/` on a Mac you'll never see the disk filling up.

```json
{"total": 494384795648, "used": 405570715648, "free": 34875441152, "percent": 92.1}
```

`percent` matches `df`, so on Linux it can look about 5% higher than `used / total`, because ext4 reserves space for root. On Linux the code checks `/`; change `ROOT` if your data sits on another mount.

`/disk/partitions` lists mounted filesystems, not raw partitions. On macOS that's about ten APFS volumes. Here are the first two, trimmed:

```json
{"partitions": [
  {"device": "/dev/disk3s1s1", "mountpoint": "/", "fstype": "apfs", "opts": "ro,local,rootfs,dovolfs,journaled,multilabel"},
  {"device": "/dev/disk3s6", "mountpoint": "/System/Volumes/VM", "fstype": "apfs", "opts": "rw,noexec,local,dovolfs,dontbrowse,journaled,multilabel,noatime"}
]}
```

`/disk/io` returns counters since boot, with `read_time` and `write_time` in milliseconds:

```json
{"read_count": 244152370, "write_count": 101445034, "read_bytes": 4924097228800, "write_bytes": 2702919000064, "read_time": 152689373, "write_time": 7055048}
```

To get a rate, fetch it twice and divide the difference by the seconds between the calls. `disk_io_counters()` returns `None` on a machine with no disks, hence the guard, and on Windows the psutil docs say you may need to run `diskperf -y` once before it sees any disks.

### A one-call summary and a live page

```python
@app.get("/stats")
async def get_stats():
    # Nothing here blocks, so it can run on the event loop. interval=None
    # returns CPU usage since the previous call in the same thread.
    return {
        "cpu_percent": psutil.cpu_percent(interval=None),
        "memory_percent": psutil.virtual_memory().percent,
        "swap_percent": psutil.swap_memory().percent,
        "disk_percent": psutil.disk_usage(ROOT).percent,
        "load_avg": [round(x, 2) for x in psutil.getloadavg()],
        "uptime_s": int(time.time() - psutil.boot_time()),
    }


PAGE = """<!doctype html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>System monitor</title>
<body style="font-family: system-ui; max-width: 420px; margin: 2rem auto; padding: 0 1rem">
<h1>System monitor</h1>
<pre id="out">loading...</pre>
<script>
async function tick() {
  const r = await fetch("/stats");
  document.getElementById("out").textContent = JSON.stringify(await r.json(), null, 2);
}
tick();
setInterval(tick, 2000);
</script>
"""


@app.get("/", response_class=HTMLResponse)
def dashboard():
    return PAGE
```

`/stats` is the one route that is `async def`, and on purpose. With `interval=None`, `cpu_percent()` doesn't block; it returns usage since the previous call. psutil keeps that "previous call" per thread, though. When I first wrote `/stats` as a plain `def`, it returned `"cpu_percent": 0.0` on the first request, because it ran on a fresh thread-pool thread with no baseline. As `async def` it runs on the main thread, where the baseline call at import time already happened, and the first request returns a real number:

```json
{"cpu_percent": 45.6, "memory_percent": 82.1, "swap_percent": 92.0, "disk_percent": 92.1, "load_avg": [10.84, 8.63, 8.49], "uptime_s": 1038549}
```

`load_avg` is the 1, 5 and 15 minute load average. Read it relative to the core count: 10.8 on an 11-core machine is close to fully busy. On Windows psutil emulates it, and the first 5 seconds of calls return `[0.0, 0.0, 0.0]`.

The page at `/` is deliberately plain: a `<pre>` block that fetches `/stats` every 2 seconds. Because it uses a relative URL, it works the same on localhost and behind the tunnel.

## Run it locally

```bash
fastapi run main.py --host 127.0.0.1
```

```
 ⚡️ Starting FastAPI in production mode

 🐍 Using import string: main:app

 🌐 Server started at http://127.0.0.1:8000
    Documentation at http://127.0.0.1:8000/docs
```

I use `fastapi run` here rather than `fastapi dev`. `dev` turns on auto-reload, which is handy while editing and wasteful for something you leave running. `--host 127.0.0.1` matters because `fastapi run` binds to `0.0.0.0` by default, which would put your metrics on the local network for anyone who knows the port. `fastapi dev` already defaults to `127.0.0.1`. Both use port 8000.

Open `http://127.0.0.1:8000/stats` to check the JSON, or `http://127.0.0.1:8000/docs` for the interactive API docs FastAPI generates from the routes:

{{< image "system_monitoring_fastapi/fastapi_monitor_swagger_docs.webp" "FastAPI Swagger UI at /docs listing the System monitor routes: /cpu, /cpu/cores, /cpu/frequency, /memory, /memory/swap, /disk, /disk/partitions, /disk/io, /stats and /" >}}
*Screenshot: the app's own /docs page, November 2026.*

## Put it online with Pinggy

Leave the app running and open a second terminal. This command opens the tunnel and puts HTTP basic auth in front of it. Pick your own username and password instead of `monitor` and `change-me`:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:monitor:change-me
```

`-R0:localhost:8000` asks Pinggy to forward traffic to your local port 8000, `-T` skips the interactive terminal, and everything after `--` is a Pinggy option; `b:user:pass` turns on basic auth. Here's what it printed for me (I replaced my public IP in the hostnames with a documentation address):

```
Allocated port 7 for remote forward to localhost:8000
You are not authenticated.
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels. https://dashboard.pinggy.io
https://wcmqq-203-0-113-7.free.pinggy.net
https://wzmvb-203-0-113-7.run.pinggy-free.link
```

"You are not authenticated" means no Pinggy account token was used, which is fine for the free tier. It has nothing to do with the basic auth you just set. Either URL works.

Check the password from any machine:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://wzmvb-203-0-113-7.run.pinggy-free.link/stats
# 401

curl -u monitor:change-me https://wzmvb-203-0-113-7.run.pinggy-free.link/stats
# {"cpu_percent":54.2,"memory_percent":82.4,"swap_percent":91.9,"disk_percent":92.1,...}
```

Without credentials you get a `401` from Pinggy and the request never reaches your app. With them, you get the same JSON as on localhost. **Don't skip the password**: anyone who finds the URL could otherwise read your disk layout, mount options and load. psutil doesn't expose secrets, but there's no reason to hand that out.

To change the port or add options without editing the command by hand, use the builder:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to FastAPI:" portstring="FastAPI Port" localport="8000" webdebugenabled=false keepalive=true passwordCheck=true basicusername="monitor" basicpass="change-me" >}}
{{< /pinggytunnel >}}

### Open it on your phone

Open the URL in your phone's browser and enter the username and password when it asks. On a free tunnel, browsers see a one-time Pinggy page that starts with "Caution - you are about to visit a website that is served for free through pinggy.io". Tap **Enter site** and that browser won't see it again. The page is only for browsers, so `curl`, scripts and other API clients never recieve it. A client can also skip it by sending an `X-Pinggy-No-Screen` header, and Pro tunnels don't show it at all.

After that, `/` shows the live summary and refreshes every 2 seconds. Here it is on an iPhone-sized screen through the tunnel:

{{< image "system_monitoring_fastapi/fastapi_monitor_phone_dashboard.webp" "The System monitor page open through a Pinggy URL on a phone-sized screen, showing cpu_percent 55.2, memory_percent 82.5, swap_percent 92.6, disk_percent 92.1, the load average and uptime" >}}

## Keeping it up for more than an hour

A free tunnel closes after 60 minutes, and every new one gets a new random URL. For a quick check that's fine. For a machine you want to look at any time, you have two options.

A reconnect loop brings the tunnel back on its own, but the URL still changes each time, so you'd have to read it from the terminal:

```bash
while true; do
  ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8000 free.pinggy.io -T -- b:monitor:change-me
  sleep 5
done
```

`ServerAliveInterval=60` sends a keepalive every minute, so a quiet connection isn't dropped by a NAT box in between. For a stable address, use a Pinggy Pro token: tunnels have no time limit, and a subdomain you assign to the token in the [Pinggy dashboard](https://dashboard.pinggy.io) comes back on every start:

```bash
ssh -p 443 -R0:localhost:8000 -T <your-token>@pro.pinggy.io -- b:monitor:change-me
```

Run the app and the tunnel under something that survives a logout, such as a `tmux` session or a systemd service, if the machine is headless.

## Where this approach stops

This is a "how's the box doing right now" tool. It keeps no history, sends no alerts and watches one machine. If you need graphs over time or alerts when the disk passes 90%, use something built for it: {{< link href="https://github.com/prometheus/node_exporter" >}}Prometheus node_exporter{{< /link >}} exposes the same kind of numbers on port 9100 for Prometheus to scrape, and {{< link href="https://github.com/nicolargo/glances" >}}Glances{{< /link >}} (`glances -w`) gives you a ready-made web UI on port 61208. Both sit behind a Pinggy tunnel the same way this app does. For checking that a site is up from the outside, see [how to monitor uptime for free](/blog/how_to_monitor_uptime_for_free/).

Two more limits. Inside a Docker container, psutil reads the kernel's numbers, so memory and CPU reflect the host (or the Docker Desktop VM), not the container's limits: my container reported 14.9 GB of RAM because that's what the VM had. And `cpu_percent(interval=1)` really does cost a second per request, so don't point a 1-second poller at `/cpu`; use `/stats`.

## Troubleshooting

- **`cpu_percent` is `0.0`.** It was called with `interval=None` and no earlier call in that thread. Keep `/stats` as `async def`, or use `interval=1` in a `def` route.
- **`/cpu/frequency` returns nulls.** psutil can't read the frequency on that platform, usually a VM or container. Expected, not a bug.
- **The browser keeps asking for a password.** Check the username and password match what you put after `b:`. Test with `curl -u user:pass <url>/stats`; a `401` means the credentials are wrong.
- **The browser shows a Pinggy "Caution" page.** That's the free-tier page described above. Tap **Enter site** once.
- **SSH prints a post-quantum key exchange warning.** Recent OpenSSH clients print `WARNING: connection is not using a post-quantum key exchange algorithm` when the server doesn't offer one. It's a warning, not an error: I saw it with OpenSSH 10.3p1 and the tunnel worked normally.
- **The URL stopped working after an hour.** The free tunnel expired. Run the command again for a new URL, or use the loop or a Pro token above.

## Conclusion

The whole setup is one Python file and one SSH command. psutil reads the numbers, FastAPI turns them into routes, and Pinggy gets them out from behind NAT with a password in front. Most of the work is in the details: plain `def` for anything that blocks, the right disk path on macOS, and a guard for values psutil can't read on every platform.

To try it, run `fastapi run main.py --host 127.0.0.1`, start the tunnel with your own `b:user:pass`, and open `/stats` from your phone. If you want to deploy a FastAPI app rather than monitor a machine, see [how to host a FastAPI app without a server](/blog/host_a_fastapi_app_without_a_server/).
