---
title: "Remote System Monitoring with FastAPI and Pinggy"
description: "Build a FastAPI app that reports CPU, RAM, memory and disk usage with psutil, then check it from anywhere through a password-protected Pinggy tunnel."
date: 2024-11-02T14:15:25+05:30
lastmod: 2026-11-25T15:15:25+05:30
draft: false
tags: ["FastAPI", "Python", "remote access", "guide", "Pinggy"]
og_image: "images/system_monitoring_fastapi/main_img.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiUmVtb3RlIFN5c3RlbSBNb25pdG9yaW5nIHdpdGggRmFzdEFQSSBhbmQgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiQnVpbGQgYSBGYXN0QVBJIGFwcCB0aGF0IHJlcG9ydHMgQ1BVLCBSQU0sIG1lbW9yeSBhbmQgZGlzayB1c2FnZSB3aXRoIHBzdXRpbCwgdGhlbiBjaGVjayBpdCBmcm9tIGFueXdoZXJlIHRocm91Z2ggYSBwYXNzd29yZC1wcm90ZWN0ZWQgUGluZ2d5IHR1bm5lbC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc3lzdGVtX21vbml0b3JpbmdfZmFzdGFwaS9tYWluX2ltZy53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMjVUMTU6MTU6MjUrMDU6MzAiLAogICJ0b29sIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICAgIm5hbWUiOiAiUHl0aG9uIDMuMTEgb3IgbmV3ZXIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICAgIm5hbWUiOiAiRmFzdEFQSSIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgICAibmFtZSI6ICJwc3V0aWwiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICAgIm5hbWUiOiAiT3BlblNTSCBjbGllbnQiCiAgICB9CiAgXSwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNyZWF0ZSBhbmQgYWN0aXZhdGUgYSB2aXJ0dWFsIGVudmlyb25tZW50IiwKICAgICAgInRleHQiOiAiUnVuIHB5dGhvbiAtbSB2ZW52IC52ZW52LCB0aGVuIGFjdGl2YXRlIGl0IHdpdGggc291cmNlIC52ZW52L2Jpbi9hY3RpdmF0ZSBvbiBMaW51eCBhbmQgbWFjT1Mgb3IgLnZlbnZcXFNjcmlwdHNcXEFjdGl2YXRlLnBzMSBpbiBXaW5kb3dzIFBvd2VyU2hlbGwuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgRmFzdEFQSSBhbmQgcHN1dGlsIiwKICAgICAgInRleHQiOiAiUnVuIHBpcCBpbnN0YWxsIFwiZmFzdGFwaVtzdGFuZGFyZF1cIiBwc3V0aWwuIFRoZSBzdGFuZGFyZCBleHRyYSBpbnN0YWxscyBVdmljb3JuIGFuZCB0aGUgZmFzdGFwaSBjb21tYW5kIGxpbmUgdG9vbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiV3JpdGUgdGhlIG1vbml0b3Jpbmcgcm91dGVzIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIG1haW4ucHkgd2l0aCBGYXN0QVBJIHJvdXRlcyB0aGF0IGNhbGwgcHN1dGlsOiAvY3B1LCAvY3B1L2NvcmVzIGFuZCAvY3B1L2ZyZXF1ZW5jeSwgL21lbW9yeSBhbmQgL21lbW9yeS9zd2FwLCAvcmFtLCBhbmQgL2Rpc2ssIC9kaXNrL3BhcnRpdGlvbnMgYW5kIC9kaXNrL2lvLiBVc2UgZGVmIHJhdGhlciB0aGFuIGFzeW5jIGRlZiBmb3Igcm91dGVzIHRoYXQgY2FsbCBwc3V0aWwuY3B1X3BlcmNlbnQoaW50ZXJ2YWw9MSksIGJlY2F1c2UgdGhhdCBjYWxsIGJsb2NrcyBmb3IgYSBzZWNvbmQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlJ1biB0aGUgYXBwIGxvY2FsbHkiLAogICAgICAidGV4dCI6ICJSdW4gZmFzdGFwaSBkZXYgbWFpbi5weSB3aGlsZSBlZGl0aW5nLCBvciBmYXN0YXBpIHJ1biBtYWluLnB5IC0taG9zdCAxMjcuMC4wLjEgZm9yIGEgbG9uZy1ydW5uaW5nIG1vbml0b3IuIFRoZSBhcHAgbGlzdGVucyBvbiBwb3J0IDgwMDAgYW5kIHNlcnZlcyBBUEkgZG9jcyBhdCAvZG9jcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgYSBwYXNzd29yZC1wcm90ZWN0ZWQgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkluIGEgc2Vjb25kIHRlcm1pbmFsLCBydW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwMDAgZnJlZS5waW5nZ3kuaW8gLVQgLS0gYjptb25pdG9yOmNoYW5nZS1tZSB3aXRoIHlvdXIgb3duIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4gUGluZ2d5IHByaW50cyBwdWJsaWMgSFRUUFMgVVJMcyB0aGF0IGFzayBmb3IgdGhvc2UgY3JlZGVudGlhbHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIHRoZSBtZXRyaWNzIHJlbW90ZWx5IiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgSFRUUFMgVVJMIGZvbGxvd2VkIGJ5IGFuIGVuZHBvaW50IHN1Y2ggYXMgL2NwdSwgL21lbW9yeSBvciAvZGlzaywgc2lnbiBpbiwgYW5kIHJlYWQgdGhlIEpTT04uIEEgZnJlZSB0dW5uZWwgbGFzdHMgNjAgbWludXRlczsgYSBQaW5nZ3kgUHJvIHRva2VuIHJlbW92ZXMgdGhlIGxpbWl0IGFuZCBrZWVwcyBhIGZpeGVkIHN1YmRvbWFpbi4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "system_monitoring_fastapi/main_img.webp" "Remote System Monitoring with FastAPI and Pinggy" >}}

{{< llm-context >}}To monitor a computer remotely with FastAPI and Pinggy - run `pip install "fastapi[standard]" psutil`, start the psutil app with `fastapi run main.py --host 127.0.0.1` (port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:monitor:change-me` to get a password-protected public HTTPS URL for /cpu, /memory, /ram and /disk.{{< /llm-context >}}

Monitoring system metrics helps you keep applications running smoothly, spot resource leaks and catch bottlenecks before users do.
In this article, we'll look at how to remotely monitor a machine's CPU, RAM, memory and disk usage using FastAPI and Pinggy.
The numbers come from the {{< link href="https://pypi.org/project/psutil/" >}}psutil{{< /link >}} library, which reads real-time resource data from the operating system.
To expose that data we need a small web server, and {{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}} is a good fit: a Python framework for building APIs that takes a few lines to set up.
The FastAPI server runs locally on your machine.
Many machines sit behind NAT (Network Address Translation) or CGNAT (Carrier-Grade NAT), though, so reaching them from outside is the hard part.
[Pinggy](https://pinggy.io) solves that with a single SSH command that gives your local server a public HTTPS URL, with no port forwarding and nothing to install.

First, let's set up a virtual environment and install `FastAPI` and `psutil`.
I tested everything below with Python 3.13, FastAPI 0.165.0, fastapi-cli 0.0.34, Uvicorn 0.54.0 and psutil 7.2.2.

## Setting Up the Environment and Installing Dependencies

### Step 1: Create a Virtual Environment

A virtual environment keeps each project's packages separate from your system Python and from other projects.

Create one with the `venv` module that ships with Python:

```bash
python -m venv .venv
```

> Note: If the command `python` does not work, try `python3`. Current FastAPI needs Python 3.11 or newer, so check `python3 --version` first. The `python3` that comes with Apple's command line tools is 3.9, and pip on 3.9 quietly installs a much older FastAPI instead of failing.

That command creates a new virtual environment in a directory called `.venv`.

### Step 2: Activate the Virtual Environment

Activate the environment so any Python command you run or package you install stays inside it:

#### For Linux, MacOS

```bash
source .venv/bin/activate
```

#### For Windows Powershell

```ps
.venv\Scripts\Activate.ps1
```

#### For Windows Bash

```bash
source .venv/Scripts/activate
```

Once activated, upgrade `pip`, since an old one can pick outdated wheels:

```bash
python -m pip install --upgrade pip
```

### Step 3: Install FastAPI

Install FastAPI with its standard extras:

```bash
pip install "fastapi[standard]"
```

The `[standard]` extra pulls in `uvicorn`, the ASGI server that actually serves requests, and the `fastapi` command line tool you'll use to start the app.

### Step 4: Install psutil

Next, install {{< link href="https://pypi.org/project/psutil/" >}}psutil{{< /link >}}.
It gives Python access to CPU, memory, disk and network usage on Linux, macOS and Windows, and ships prebuilt wheels for all three, so there's usually nothing to compile:

```bash
pip install psutil
```

With the dependencies installed, it's time to build the app.

## Build the App to Monitor Your System Metrics

In this section, we'll create routes for CPU, memory, RAM and disk metrics. Everything goes into one file, `main.py`: the first block creates the app, and every later block adds routes to teh same file.

> **Visit this GitHub Repository to access the codebase.** ({{< link href="https://github.com/AbhilashK26/Remote_system_monitoring_with_FastAPI_and_Pinggy" >}}GitHub Link{{< /link >}} ) The code below differs from the repo in one important way: routes use plain `def` instead of `async def`.

### Monitor CPU Usage Metrics

We'll expose three routes for the CPU:

1. `/cpu`: Get the overall CPU usage percentage.
2. `/cpu/cores`: Get the CPU usage for each core individually.
3. `/cpu/frequency`: Retrieve the current, minimum, and maximum CPU frequencies.

Here's the **code** that starts `main.py`:

```python
from fastapi import FastAPI
import psutil

app = FastAPI()

@app.get("/cpu")
def get_cpu_usage():
    # Blocks for one second while psutil samples the CPU
    return {"cpu_usage": psutil.cpu_percent(interval=1)}

@app.get("/cpu/cores")
def get_cpu_cores():
    return {"core_usage": psutil.cpu_percent(interval=1, percpu=True)}

@app.get("/cpu/frequency")
def get_cpu_frequency():
    frequency = psutil.cpu_freq()
    if frequency is None:  # some VMs and containers report nothing
        return {"current": None, "min": None, "max": None}
    return {
        "current": frequency.current,
        "min": frequency.min,
        "max": frequency.max,
    }
```

`psutil.cpu_percent(interval=1)` samples the CPU, sleeps for one second and samples again, and that sleep is why these routes are plain `def`. FastAPI runs a `def` route in a thread pool, but an `async def` route runs directly on the event loop, so a blocking call there freezes every other request. I timed five simultaneous requests to `/cpu`: about 1 second with `def`, 5 seconds with `async def`.

On `/cpu/frequency`, `current` is a live value only on Linux and usually the fixed nominal speed elsewhere, and some virtual machines return no frequency at all, hence the `None` check.

The **outputs** of the different endpoints will be displayed as follows:

- `/cpu`:

```json
{ "cpu_usage": 45.3 }
```

{{< image "system_monitoring_fastapi/cpu_usage1.webp" "FastAPI application to monitor CPU metrics" >}}

- `/cpu/cores`:

```json
{ "core_usage": [50.2, 45.1, 40.5, 60.7] }
```

{{< image "system_monitoring_fastapi/cpu_usage2.webp" "FastAPI application to monitor CPU metrics" >}}

- `/cpu/frequency`:

```json
{ "current": 2200.0, "min": 1000.0, "max": 3500.0 }
```

{{< image "system_monitoring_fastapi/cpu_usage3.webp" "FastAPI application to monitor CPU metrics" >}}

### Track Memory and Swap Usage

Next, we'll add routes that show how much memory is in use and how much is available, for both virtual memory and swap.

>**Virtual memory** represents the system's total memory, while **swap memory** refers to disk-based memory used when physical memory is full.

We'll expose two routes:

1. `/memory`: Get the current status of virtual memory.
2. `/memory/swap`: Retrieve swap memory usage statistics.

Add this **code** to `main.py`:

```python
@app.get("/memory")
def get_memory_usage():
    """Returns virtual memory usage metrics."""
    memory = psutil.virtual_memory()
    return {
        "total": memory.total,
        "available": memory.available,
        "used": memory.used,
        "percent": memory.percent,
    }

@app.get("/memory/swap")
def get_swap_memory_usage():
    """Returns swap memory usage metrics."""
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

All values are bytes. `used` and `available` don't add up to `total` because the OS counts caches and buffers separately, so watch `available` and `percent`. `sin` and `sout` are bytes swapped in and out since boot, not a rate, and they're always `0` on Windows.

The **responses** from each endpoint will look like this:

- `/memory`:

```json
{
  "total": 16777216000,
  "available": 8225292288,
  "used": 7374233600,
  "percent": 57.3
}
```

{{< image "system_monitoring_fastapi/memory1.webp" "FastAPI application to monitor Memory metrics" >}}

- `/memory/swap`:

```json
{
  "total": 8589934592,
  "used": 1073741824,
  "free": 7516192768,
  "percent": 12.5,
  "sin": 0,
  "sout": 0
}
```

{{< image "system_monitoring_fastapi/memory2.webp" "FastAPI application to monitor Memory metrics" >}}

### Monitor RAM Utilization

Sometimes you only want one number. This route returns RAM usage as a percentage, the same value as `percent` in `/memory`, which is handy for a quick check from a phone:

1. `/ram`: Returns RAM usage in percentage.

Add this **code** to `main.py`:

```python
@app.get("/ram")
def get_ram_usage():
    """Returns RAM usage in percentage."""
    return {"ram_usage": psutil.virtual_memory().percent}
```

The **response** from the endpoint will look like this:

- `/ram`:

```json
{ "ram_usage": 45.2 }
```

{{< image "system_monitoring_fastapi/ram1.webp" "FastAPI application to monitor RAM metrics" >}}

### Disk Usage and I/O Statistics

Disk metrics tell you how much storage is used, which filesystems are mounted and how much reading and writing is going on.

We'll expose three routes:

1. `/disk`: Returns overall disk usage for the root filesystem.
2. `/disk/partitions`: Provides information about mounted disk partitions.
3. `/disk/io`: Displays disk I/O statistics.

Add this **code** to `main.py`:

```python
@app.get("/disk")
def get_disk_usage():
    """Returns disk usage metrics for the root filesystem."""
    disk = psutil.disk_usage("/")
    return {
        "total": disk.total,
        "used": disk.used,
        "free": disk.free,
        "percent": disk.percent,
    }

@app.get("/disk/partitions")
def get_disk_partitions():
    """Returns information about mounted disk partitions."""
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
    """Returns disk I/O statistics."""
    io_stats = psutil.disk_io_counters()
    return {
        "read_count": io_stats.read_count,
        "write_count": io_stats.write_count,
        "read_bytes": io_stats.read_bytes,
        "write_bytes": io_stats.write_bytes,
        "read_time": io_stats.read_time,
        "write_time": io_stats.write_time,
    }
```

On a Mac, `/` is a read-only system volume and your files live on `/System/Volumes/Data`, so pass that path to `disk_usage()` instead. On my Mac, `/` showed 50% used while the data volume was at 96%. On Windows, use `"C:\\"`. The `/disk/io` counters are totals since boot, with times in milliseconds; fetch twice and divide the difference by the seconds in between to get a rate.

The **responses** from each endpoint will look like this:

- `/disk`:

```json
{
  "total": 500107862016,
  "used": 237081992192,
  "free": 263025547776,
  "percent": 47.5
}
```

{{< image "system_monitoring_fastapi/disk1.webp" "FastAPI application to monitor Disk metrics" >}}

- `/disk/partitions`:

```json
{
  "partitions": [
    {
      "device": "/dev/sda1",
      "mountpoint": "/",
      "fstype": "ext4",
      "opts": "rw,relatime"
    }
  ]
}
```

{{< image "system_monitoring_fastapi/disk2.webp" "FastAPI application to monitor Disk metrics" >}}

- `/disk/io`:

```json
{
  "read_count": 1000000,
  "write_count": 500000,
  "read_bytes": 1048576000,
  "write_bytes": 524288000,
  "read_time": 5000,
  "write_time": 2000
}
```

{{< image "system_monitoring_fastapi/disk3.webp" "FastAPI application to monitor Disk metrics" >}}

## Run the FastAPI Application locally

With all the routes in `main.py`, start the app in development mode:

```bash
fastapi dev main.py
```

`fastapi dev` binds to `127.0.0.1:8000` and reloads whenever you save the file.

{{< image "host_fastapi_app/fastapi_dev_app.webp" "Run fastapi dev command" >}}

For a machine you leave running, use production mode instead, which skips the file watcher:

```bash
fastapi run main.py --host 127.0.0.1
```

Keep `--host 127.0.0.1`: `fastapi run` binds to `0.0.0.0` by default, which would put your metrics on the local network for anyone who knows the port. Both commands start Uvicorn under the hood, so `uvicorn main:app --host 127.0.0.1 --port 8000` works too.

## Check the output

To view the results, open your browser and go to:

`http://127.0.0.1:8000/<required-endpoint>`

Replace `<required-endpoint>` with the route you want, such as `/cpu`, `/memory` or `/disk`, and you'll see the current numbers as JSON. FastAPI also generates interactive API docs at `http://127.0.0.1:8000/docs`, where you can call every route from the browser.

## Remotely Access Your FastAPI App Using Pinggy
[Pinggy](https://pinggy.io) makes your local FastAPI app reachable from the internet, even if your machine is behind NAT or CGNAT.
The SSH client opens an outbound connection on port 443, and Pinggy sends requests for your public URL back down it, so your router needs no open port.

Leave the app running and run this in a second terminal:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T
```

Note: Replace the port 8000 in the command with the port where your FastAPI app is running.

A monitoring endpoint shouldn't be open to anyone who finds the URL, since it shows your load, disks and mount options. Add HTTP basic auth by putting a Pinggy option after `--`, with your own username and password in place of `monitor` and `change-me`:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:monitor:change-me
```

The builder below generates the same command if you want to change the port or credentials:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to FastAPI:" portstring="FastAPI Port" localport="8000" webdebugenabled=false keepalive=true passwordCheck=true basicusername="monitor" basicpass="change-me" >}}
{{< /pinggytunnel >}}

Pinggy prints two public HTTPS URLs. Either one works:

```
You are not authenticated.
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels. https://dashboard.pinggy.io
https://fmrge-203-0-113-7.free.pinggy.net
https://gjsre-203-0-113-7.run.pinggy-free.link
```

"You are not authenticated" only means no Pinggy account token was used, which is fine on the free tier. Add the endpoint to the end of the URL to get its output. For CPU usage, that's:

`https://gjsre-203-0-113-7.run.pinggy-free.link/cpu`

{{< image "system_monitoring_fastapi/pinggy_command_img.webp" "Pinggy command" >}}

Leave out `-T` and Pinggy shows a live request log in the terminal, like the one above. When I tested the password, a request without credentials got a `401` from Pinggy and never reached the app, and `curl -u monitor:change-me <url>/cpu` returned the JSON.

Paste the URL into your browser and enter the username and password. On a free tunnel, browsers first see a one-time Pinggy notice page; click **Enter site** and you won't see it again. Scripts and `curl` never recieve that page.

Output would look like:

{{< image "system_monitoring_fastapi/pinggy_output.webp" "Output through Pinggy" >}}

## Benefits of Using Pinggy to Expose Your FastAPI Application

1. **One command**: No cloud VM, no deployment and no router changes. The app stays on your machine.
2. **Works behind NAT and CGNAT**: The tunnel is an outbound SSH connection on port 443, which most networks allow.
3. **HTTPS by default**: The public URL uses TLS, so the metrics and your basic auth password are encrypted in transit.
4. **Access control at the edge**: Basic auth (`b:user:pass`), bearer keys and IP allow lists stop requests before they reach FastAPI.
5. **Free tier limits**: A free tunnel closes after 60 minutes and gets a new random URL each time. For a machine you check every day, a Pro token removes the time limit and keeps a fixed subdomain.

## Conclusion

psutil reads the numbers, a few plain `def` routes in FastAPI turn them into JSON, and one SSH command to [Pinggy](https://pinggy.io) puts them on a password-protected HTTPS URL. That's enough to check CPU, memory and disk on a machine behind NAT or CGNAT from your phone, without opening a port.
