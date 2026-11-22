---
title: "unkernel: How a Real Linux Kernel Runs as WebAssembly"
description: "unkernel compiles Linux 7.3.4 to a single 9 MB wasm module with a real MMU and runs unmodified aarch64 Debian and Alpine binaries on it. How it works, what it costs, and how to reach a server inside it."
date: 2026-11-22T19:00:00+05:30
lastmod: 2026-11-22T19:00:00+05:30
draft: false
tags: ["WebAssembly", "open source", "developer tools", "localhost", "tunneling"]
og_image: "images/unkernel_linux_kernel_compiled_to_webassembly/unkernel_linux_kernel_compiled_to_webassembly_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogInVua2VybmVsOiBIb3cgYSBSZWFsIExpbnV4IEtlcm5lbCBSdW5zIGFzIFdlYkFzc2VtYmx5IiwKICAiZGVzY3JpcHRpb24iOiAidW5rZXJuZWwgY29tcGlsZXMgTGludXggNy4zLjQgdG8gYSBzaW5nbGUgOSBNQiB3YXNtIG1vZHVsZSB3aXRoIGEgcmVhbCBNTVUgYW5kIHJ1bnMgdW5tb2RpZmllZCBhYXJjaDY0IERlYmlhbiBhbmQgQWxwaW5lIGJpbmFyaWVzIG9uIGl0LiBIb3cgaXQgd29ya3MsIHdoYXQgaXQgY29zdHMsIGFuZCBob3cgdG8gcmVhY2ggYSBzZXJ2ZXIgaW5zaWRlIGl0LiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy91bmtlcm5lbF9saW51eF9rZXJuZWxfY29tcGlsZWRfdG9fd2ViYXNzZW1ibHkvdW5rZXJuZWxfbGludXhfa2VybmVsX2NvbXBpbGVkX3RvX3dlYmFzc2VtYmx5X2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogewogICAgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsCiAgICAibmFtZSI6ICJQaW5nZ3kiCiAgfSwKICAicHVibGlzaGVyIjogewogICAgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsCiAgICAibmFtZSI6ICJQaW5nZ3kiLAogICAgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIKICB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTEtMjJUMTk6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yMlQxOTowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7CiAgICAiQHR5cGUiOiAiV2ViUGFnZSIsCiAgICAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvdW5rZXJuZWxfbGludXhfa2VybmVsX2NvbXBpbGVkX3RvX3dlYmFzc2VtYmx5LyIKICB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJXZWJBc3NlbWJseSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAidW5rZXJuZWwsIExpbnV4IGtlcm5lbCBXZWJBc3NlbWJseSwgTGludXggaW4gdGhlIGJyb3dzZXIsIHdhc20gTGludXgsIGt3ZW11LCBKU1BJLCBucHggdW5rZXJuZWwsIHJ1biBMaW51eCBpbiBicm93c2VyIHRhYiIsCiAgImFib3V0IjogWwogICAgewogICAgICAiQHR5cGUiOiAiVGhpbmciLAogICAgICAibmFtZSI6ICJ1bmtlcm5lbCIsCiAgICAgICJkZXNjcmlwdGlvbiI6ICJMaW51eCA3LjMuNCBjb21waWxlZCB0byBhIHNpbmdsZSBXZWJBc3NlbWJseSBtb2R1bGUgd2l0aCBhIHJlYWwgTU1VLCBydW5uaW5nIHVubW9kaWZpZWQgYWFyY2g2NCB1c2VyIHByb2dyYW1zLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIldlYkFzc2VtYmx5IiwKICAgICAgImRlc2NyaXB0aW9uIjogIkEgcG9ydGFibGUgYmluYXJ5IGluc3RydWN0aW9uIGZvcm1hdCB0aGF0IHJ1bnMgaW4gYnJvd3NlcnMgYW5kIGluIE5vZGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIlRoaW5nIiwKICAgICAgIm5hbWUiOiAiUGluZ2d5IiwKICAgICAgImRlc2NyaXB0aW9uIjogIkEgdHVubmVsaW5nIHNlcnZpY2UgdGhhdCBnaXZlcyBhIGxvY2FsIHBvcnQgYSBwdWJsaWMgVVJMIG92ZXIgYW4gU1NIIGNvbm5lY3Rpb24uIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "unkernel_linux_kernel_compiled_to_webassembly/unkernel_linux_kernel_compiled_to_webassembly_banner.webp" "A real Linux kernel, compiled to WebAssembly: Linux 7.3.4 becomes unkernel.wasm, which runs in a browser tab or under Node with npx unkernel" >}}

I opened {{< link href="https://unkernel.dev/" >}}unkernel.dev{{< /link >}} in a fresh Chromium tab and had a Debian 13 shell 2.3 seconds later. `uname -a` printed `Linux unkernel 7.3.4+ ... aarch64 GNU/Linux`, `apt-get install python3` pulled real arm64 packages from `deb.debian.org`, and a Python web server answered on port 8000. No VM on a server somewhere, no container. The whole machine was a 9.2 MiB WebAssembly file running in the tab.

{{< link href="https://github.com/pithings/unkernel" >}}unkernel{{< /link >}} is Linux built as one wasm module. The trick that sets it apart from the other "Linux in a browser" projects is where it draws the line: the kernel is compiled code that runs at wasm speed, and only the user programs are emulated. This post walks through how that split works, what it makes fast, what it leaves slow, and how to get traffic to a server running inside it.

{{% tldr %}}
1. **The kernel is compiled, not emulated.** unkernel builds Linux 7.3.4 for a new `arch/wasm` target with real Sv39 page tables, so `fork`, `mmap` and copy-on-write are the kernel's own code.
2. **User space is unmodified aarch64.** An emulator called kwemu is linked into the kernel and runs stock Alpine 3.24 and Debian 13 arm64 binaries, with a JIT that compiles hot blocks to wasm.
3. **Syscalls cost about what they cost natively.** The project measures `getppid` at 172 ns against 110 ns native and 1,662 ns under qemu-system. CPU-bound user code is still well behind native.
4. **It runs in a browser tab or under Node 24.** `npx unkernel` boots Alpine in a terminal, and the MIT-licensed SDK embeds the same kernel file in your own app.
5. **Guest servers are reachable over vsock, not TCP.** `--forward 8000:8000` maps a host port to the guest, and a Pinggy tunnel on that port gives the server a public URL.
{{% /tldr %}}

## The three usual ways to put Linux in a browser

Running Linux in a browser is not new. Fabrice Bellard's JSLinux did it in 2011. What changes between projects is which layer gets faked, and each choice gives something up.

| Approach | Examples | Kernel | User programs | What you give up |
|---|---|---|---|---|
| Emulate a whole PC | v86, JSLinux, container2wasm | Linux, emulated | unmodified, emulated | Speed. Every syscall and page fault goes through emulated hardware. |
| Emulate the CPU, reimplement syscalls | syscall emulators | none | unmodified, emulated | Coverage. You get as much of Linux as the runtime's authors wrote. |
| Compile programs to wasm | WASIX, WebContainers | none, or Linux without an MMU | rebuilt for wasm | Compatibility. Binaries must be rebuilt, and `fork` breaks or is approximated. |
| unkernel | | Linux, native wasm | unmodified aarch64, emulated | Raw CPU speed in user code. |

The third row includes {{< link href="https://github.com/joelseverin/linux-wasm" >}}linux-wasm{{< /link >}}, Joel Severin's port of the kernel to wasm, which unkernel's `arch/wasm` grew from. That port is NOMMU: WebAssembly gives a module one flat linear memory and no page tables, so the kernel is configured the way it would be for a microcontroller. Programs have to be compiled to wasm as position-independent code, and there is no real `fork`, only `vfork`.

unkernel keeps the compiled kernel and adds the missing piece in software. The idea comes from {{< link href="https://github.com/imxieyi/Kernarium" >}}Kernarium{{< /link >}}, which runs a native User-mode Linux kernel on iOS with emulated user space behind a software MMU. unkernel's author, Pooya Parsa (pi0, known for Nitro and the UnJS libraries), credits it in the README for exactly that.

## How unkernel splits the machine

There are two halves, and they are linked into teh same wasm file.

The kernel half is Linux 7.3.4 plus a patch set, compiled by clang to WebAssembly. Scheduler, memory management, ext4, overlayfs, the TCP/IP stack, cgroups and namespaces are all the upstream C code. Nothing in that list is reimplemented in JavaScript.

The user half is **kwemu**, an aarch64 CPU emulator written in Zig. It runs ordinary arm64 Linux binaries, which is why you can `apt-get install` anything from Debian's archive without anyone rebuilding it. When a guest program touches memory, kwemu walks the kernel's own Sv39 page tables to translate the address. That is the "real MMU" claim: the page tables are the ones Linux's memory manager builds and edits, so copy-on-write after a `fork`, shared mappings and `userfaultfd` behave as they do on hardware.

{{< image "unkernel_linux_kernel_compiled_to_webassembly/unkernel_layers.webp" "Layers of an unkernel machine: emulated aarch64 Linux programs on top, the kwemu emulator and the compiled Linux 7.3.4 kernel together in unkernel.wasm, and the JavaScript host underneath" >}}

The interesting part is the boundary between the halves. In a whole-machine emulator, a syscall is an emulated trap instruction: the emulated CPU switches to an emulated kernel mode, and then every instruction of the kernel's syscall handler is emulated too. In unkernel, when kwemu decodes an `svc` instruction it returns to the kernel, which is already native wasm sitting in the same module. A syscall becomes a function call.

One problem remains. A kernel has to stop a task halfway through a syscall and run a different one, each on its own stack, and WebAssembly has no way to switch stacks. unkernel uses JSPI for this. {{< link href="https://v8.dev/blog/jspi" >}}JavaScript Promise Integration{{< /link >}} lets a wasm call suspend when it hits an import that returns a promise and resume later, and unkernel wraps task switches in `WebAssembly.Suspending` so each kernel task keeps a real stack. This is also why the browser requirements are recent: Chrome or Edge 137+, Firefox 153+, Safari 27+.

Devices are small paravirtual drivers that talk to the JavaScript host: `kwblk` for disks, `kwnet` for the network, `kwfb`, `kwinput` and `kwsnd` for display, input and sound, and `kwvsock` for a host-to-guest byte channel. That last one matters later.

## Why syscalls are cheap and computing is not

The design puts the fast path where it helps most. Much of what makes a system feel slow, starting processes, syscalls, page faults, file I/O, lives in the kernel, and in unkernel all of it runs as compiled wasm.

These are the project's own numbers, measured under Node on 2026-11-14 and published in the README:

{{< image "unkernel_linux_kernel_compiled_to_webassembly/unkernel_syscall_cost.webp" "Bar charts of time per operation for getppid, read, pipe and fork under native Linux, qemu-user, qemu-system and unkernel" >}}

*Data: {{< link href="https://github.com/pithings/unkernel#-benchmarks" >}}unkernel README{{< /link >}}, measured 2026-11-14 on the riscv64 user space the project started with.*

`getppid` at 172 ns is about 1.6x native and almost 10x faster than qemu-system. `fork + exit + wait` at 57 µs is faster than the native figure of 73 µs in that test, which the README notes without trying to explain away.

User code is the other side of the trade. kwemu's interpreter runs about 250 to 300 million guest instructions per second, and the JIT makes real workloads 1.6 to 2.3 times faster than that: `seq 100000 | sort -r` drops from 7.1 s to 3.1 s. The README's own summary is "still well behind native".

I saw the same shape in the browser demo. A shell loop that forks and execs `/bin/true` 1,000 times took 2.7 s:

```
~ ⇒ time sh -c "i=0; while [ \$i -lt 1000 ]; do /bin/true; i=\$((i+1)); done"

real    0m2.704s
user    0m2.438s
sys     0m0.035s
```

Look at where the time went. 35 ms in the kernel for a thousand forks, execs and exits, and 2.4 s in user space, where the emulated dynamic loader has to start `/bin/true` from cold every time. Short-lived code never gets hot enough to reach the JIT. That was headless Chromium on a 2-CPU cloud container, so treat the absolute number loosely, but the ratio is the point.

## Booting it in a browser tab

Open `https://unkernel.dev/` and the page prints what it is doing as it goes. This is my run on November 22, 2026:

{{< image "unkernel_linux_kernel_compiled_to_webassembly/unkernel_dev_boot.webp" "The unkernel.dev page after boot, showing the boot log with timings, the Debian 13 welcome line and the output of uname -a" >}}

*Screenshot: {{< link href="https://unkernel.dev/" >}}unkernel.dev{{< /link >}}, November 2026.*

The page downloaded `unkernel-smp.wasm` (9.2 MiB), compiled it in 15 ms, attached a 69.2 MiB Debian image that it streams with range requests rather than downloading up front, and reported `Booted in 2.30 s on 2 CPUs`. Later runs landed between 2.2 and 2.9 s. Then:

```
~ ⇒ uname -a
Linux unkernel 7.3.4+ #909a1964cecb SMP Fri Nov 20 16:38:40 UTC 2026 aarch64 GNU/Linux
~ ⇒ nproc; free -m | head -2
2
               total        used        free      shared  buff/cache   available
Mem:            1996          34        1964           1          16        1962
~ ⇒ mount | grep -E " / |/data"
overlay on / type overlay (rw,relatime,lowerdir=/kw/layer:/kw/distro,upperdir=/kw/tmp/upper,workdir=/kw/tmp/work,uuid=on)
```

The root file system is a real overlayfs: the read-only distro image underneath, your changes on top. By default the upper layer lives on an ext4 data disk that the page keeps in IndexedDB, so packages you install survive a reload. I passed `?data=0` to get a throwaway system, which is why the upper directory above is under `/kw/tmp`.

Type a command that isn't installed and its package gets installed for you. For the rest of this post I'll use one small example, Python's built-in web server on port 8000:

```
~ ⇒ sudo apt-get install -y -qq python3 curl >/dev/null 2>&1
~ ⇒ python3 --version
Python 3.13.5
~ ⇒ python3 -m http.server 8000 >/dev/null 2>&1 &
[1] 550
~ ⇒ curl -sI localhost:8000 | head -3
HTTP/1.0 200 OK
Server: SimpleHTTP/0.6 Python/3.13.5
Date: Sun, 22 Nov 2026 13:45:45 GMT
~ ⇒ ss -ltn | head -5
State  Recv-Q Send-Q Local Address:Port Peer Address:Port
LISTEN 0      5            0.0.0.0:8000      0.0.0.0:*
```

Those packages came from `deb.debian.org` over the guest's own TCP stack. A browser can't open raw TCP sockets, so the page carries the guest's connections through a {{< link href="https://github.com/MercuryWorkshop/wisp-protocol" >}}Wisp{{< /link >}} proxy over a WebSocket. The default proxy only accepts known origins. If you host the page yourself, you run your own and point `?wisp=wss://...` at it.

So there is a web server listening on port 8000 of a Linux machine that exists only inside a tab. Nothing outside the tab can reach it, which is where the terminal version comes in.

## Running unkernel from a terminal

The same kernel file runs under Node. I did not run the CLI for this post, so everything in this section is from the README for version `0.2.0-261121-e69adda`, the latest on npm as of November 22, 2026. The package requires Node 24 or newer.

```bash
npx unkernel                        # Alpine, networking over the host's sockets, Ctrl-] quits
npx unkernel --distro debian        # Debian 13, a 57 MB image downloaded once
npx unkernel --data my-data.img     # keep changes on a persistent disk
npx unkernel --mount .:/work        # this directory at /work in the guest
npx unkernel --forward 8000:8000    # host 127.0.0.1:8000 to port 8000 in the guest
```

The first run downloads the Alpine image, about 4 MB, into `~/.cache/unkernel`. Without `--data`, root file system changes stay in memory and are gone at exit. The README puts the Alpine prompt at 0.3 s after `node` launches, in 48 MiB of guest memory.

Under Node there is no Wisp proxy. Guest TCP connections go out through the host's own sockets, so `apk add` and `curl` behave like they would in a container.

The CLI is a thin wrapper over a JavaScript SDK, and the SDK is the part I'd expect people to build on:

```js
import { createKernel, fetchDistro } from "unkernel";

const vm = await createKernel({ distro: await fetchDistro("alpine") });
const { stdout, exitCode } = await vm.exec("uname", ["-a"]);
const res = await vm.fetch("http://localhost:8000/");   // HTTP to a server in the guest
```

It has no dependencies and is MIT-licensed. The kernel inside the package is GPL-2.0, so the npm package as a whole is marked `MIT AND GPL-2.0-only`. If you ship it in a product, you are distributing a Linux kernel and the usual GPL obligations for that binary apply.

## Reaching a server inside the guest

The known-limits list has a line that looks like a dealbreaker for servers: no inbound network connections. The guest can dial out, but nothing on the host side can open a new TCP connection to a socket listening in the guest.

unkernel goes around the network instead. `vm.connect(8000)` in the SDK opens a vsock stream from the host to a small helper in the guest called `kwtty`, and `kwtty` opens an ordinary TCP connection to `127.0.0.1:8000` inside the guest. The bytes then flow host -> vsock -> `kwtty` -> guest loopback -> your server. `--forward 8000:8000` is that call with a listening socket in front of it on the host's `127.0.0.1:8000`.

Once the port exists on the host's loopback, it is a normal local port, and anything that works with a local port works with it. To hand the server in the guest a public HTTPS URL, start a [Pinggy](https://pinggy.io) tunnel on it from a second terminal:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Pinggy prints a URL of the form `https://abc123.run.pinggy-free.link`. A request to it travels like this: the browser calls the Pinggy URL -> Pinggy sends it down the SSH connection your machine opened -> the SSH client hands it to `127.0.0.1:8000` -> the unkernel CLI passes it over vsock -> `kwtty` connects to the Python server on the guest's port 8000.

{{< image "unkernel_linux_kernel_compiled_to_webassembly/unkernel_forward_pinggy.webp" "An HTTP request goes from a browser to the Pinggy URL, down the SSH connection to host port 8000, over vsock to kwtty in the unkernel guest, and to the Python server on port 8000" >}}

Two honest caveats. I ran the Python server and the `curl` check inside the browser build, as shown above, but I have not run the `--forward` plus tunnel chain end to end, so the steps here follow the README and the Pinggy docs. And a free Pinggy tunnel lasts 60 minutes and gets a random URL each time, which is fine for showing someone a demo and not much else.

Why bother? The case I find convincing is a disposable environment you want someone else to poke at. Boot a guest with `--data demo.img`, install the thing, forward its port, share the URL. When you are done, delete one file. The guest could not have touched your home directory unless you mounted it with `--mount`.

## What does not work yet

The project's first npm publish was on November 12, 2026, ten days before I wrote this, and the repo sits at 895 stars and 137 commits. It moved from a riscv64 guest to aarch64 on November 19. Expect things to shift under you. From the README and the repo's {{< link href="https://github.com/pithings/unkernel/blob/main/.agents/status.md" >}}status notes{{< /link >}}:

- **No IPv6, and no UDP** beyond DHCP and DNS. Anything QUIC-based is out.
- **No `ptrace` register sets**, so `strace` and `gdb` don't work. No seccomp either, which breaks sandboxes like `bwrap --seccomp` unless shimmed.
- **CPU-bound work is slow.** Floating point runs through the interpreter even inside JIT-compiled code, and a large program's startup, `npm` is the README's example, never gets hot enough to compile.
- **One CPU by default** in the SDK and CLI. The page boots several where the browser allows it, and SMP scaling flattens out around 4x.
- **A wasm trap in the kernel ends the session.** There is no recovering from a kernel bug short of a reboot.
- **A busy guest stalls I/O.** The status notes record a write taking 35.7 ms beside a busy loop, against 37 to 87 µs alone.
- **Safari gets slower with each extra SMP CPU**, and has no JIT on plain `http` pages.

A seperate question is isolation. A wasm module is a good sandbox for the host, but unkernel's `nodeFs` mounts are documented as not safe against symlink swaps, so I would not point `--mount` at anything sensitive while running code I don't trust.

## Conclusion

The fastest way to form your own opinion takes about ten seconds: open `https://unkernel.dev/`, run `uname -a`, then `mount | grep " / "` to see the overlay, then install something heavy and watch where it gets slow. `time` a loop of syscalls against a loop of arithmetic and you'll see the split this whole design is built on.

If you have Node 24, `npx unkernel --forward 8000:8000` plus a server in the guest shows the vsock path, and `ssh -p 443 -R0:localhost:8000 free.pinggy.io` puts it on a public URL. For background on how that reverse tunnel works, see our [SSH reverse tunnelling](/blog/ssh_reverse_tunnelling/) explainer.

Whether this turns into something people depend on is open. The same job is done today by Firecracker microVMs and containers, which are faster and far better tested. What unkernel offers that they can't is a Linux machine with zero server-side cost that ships as a static file, and that is new enough to be worth an afternoon.
