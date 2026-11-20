---
title: "The ESP32-S31 Can Boot Linux Now, and the Real Story Is in the Commit Log"
description: "Espressif's ESP32-S31 shipped with a full RISC-V MMU, and within weeks two independent developers had Linux 6.18 and 7.1 booting on it. Here's what actually works, what still doesn't, and why it's not a Raspberry Pi replacement."
date: 2026-09-24T10:30:00+05:30
draft: false
tags: ["ESP32", "Linux", "RISC-V", "embedded hardware", "IoT"]
categories: ["Technology", "Hardware", "Open Source"]
eyebrow: "Embedded Linux"
og_image: "images/esp32_s31_linux_boot/esp32_s31_linux_boot_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "esp32_s31_linux_boot/esp32_s31_linux_boot_banner.webp" "Terminal showing uname and cpuinfo output next to an illustration of an ESP32-S31 chip, representing Linux booting on the microcontroller" >}}

Espressif's newest microcontroller, the ESP32-S31, shipped with something none of its predecessors had: a real RISC-V memory management unit. Within weeks, two developers working independently had actual Linux kernels booting on it, not a fake shell that pretends to be a terminal, but `uname -a` printing a real kernel version over a real MMU with real virtual memory. One port runs Linux 6.18. The other runs 7.1. Neither is affiliated with Espressif, and neither is going anywhere near production, but both boot.

That distinction, real MMU versus none, is the entire reason this is happening now and wasn't possible on any earlier ESP32. It's also why the framing you'll see elsewhere, that this chip is "getting close to a Raspberry Pi," undersells the interesting part and oversells the practical part at the same time.

{{% tldr %}}
1. **What changed**: the ESP32-S31 has a full RISC-V 32-bit MMU (Sv32). Earlier ESP32 chips, Xtensa or RISC-V, didn't, so real Linux with virtual memory simply wasn't an option on them.
2. **Two independent ports exist**: <a href="https://github.com/GrieferPig/esp32-s31-linux" target="_blank">GrieferPig's port</a> runs Linux 6.18 with both cores active and most peripheral drivers working. <a href="https://github.com/annoyedmilk/esp32-s31-linux" target="_blank">annoyedmilk's port</a> runs Linux 7.1 on a Korvo-1 board, drives an 800x480 LCD framebuffer, and reserves one core entirely for Wi-Fi firmware.
3. **What still doesn't work**: audio, `strace`, real power-off, USB networking, and (on the annoyedmilk port) using JTAG and the display at the same time, because they share GPIO pins.
4. **The real ceiling**: system RAM tops out at 16 to 64MB of PSRAM depending on the board, against 512MB on something like a Milk-V Duo S. There's no desktop here, only a shell.
5. **Espressif's own take**: the company published an official Linux BSP in August 2026 and explicitly labeled it "not yet recommended for production use."
{{% /tldr %}}

## Why this wasn't possible before

Running a general-purpose OS kernel with page-based virtual memory needs an MMU that can walk page tables, not the simpler memory protection unit (MPU) that most microcontrollers ship with. Every ESP32 before the S31, from the original Xtensa parts through the RISC-V C-series and the camera-focused P4, lacked one. That's not a software gap you patch around; it's why projects that got shells running on older ESP32 chips had to fake it. <a href="https://github.com/valdanylchuk/breezydemo" target="_blank">BreezyBox</a>, a well-known Show HN from earlier this year, got a shell, an app installer, `vi`, and even a C compiler running on an ESP32-S3, and it's a genuinely impressive piece of engineering. But it isn't Linux. There's no kernel underneath it, no process isolation, no virtual memory, just a single flat address space with a shell UI layered on top.

The S31 changes that at the hardware level. It ships a full RISC-V 32-bit MMU implementing the Sv32 standard, confirmed by developers working on the ports themselves, which means page tables, address space isolation between processes, and demand paging all become possible for the first time on this chip family. That single hardware addition is the whole reason a real kernel, with a real `fork()` and a real page fault handler, can run here at all.

## Two ports, two different tradeoffs

The two active efforts took visibly different approaches, and reading through both READMEs tells you more about where this hardware actually stands than any single headline does.

<a href="https://github.com/GrieferPig/esp32-s31-linux" target="_blank">GrieferPig's port</a> targets the ESP32-S31-WROOM-3 E1H16R16V dev board and runs Linux 6.18 with SMP support across both cores, including CPU frequency scaling, on top of a Buildroot root filesystem. Native Wi-Fi and Bluetooth work, suspend and resume cycles work, and a long list of peripheral drivers are in some working state: GDMA, timers, GPIO, I2C, I2S, CAN-FD, USB, the flash MTD driver, and hardware crypto accelerators for AES, SHA, RSA, and ECDH. The one thing still missing is the RMT (remote control) driver. The developer is refreshingly upfront about how the port got built: "Yes, it is heavily agent-assisted. It do work on real S31 dev boards (there's console output above and binary releases to prove that.)"

<a href="https://github.com/annoyedmilk/esp32-s31-linux" target="_blank">annoyedmilk's port</a> targets a different board, the Korvo-1, and takes a different architectural bet entirely. Only one of the two RISC-V harts runs Linux; the other stays permanently reserved as what the README calls the "WLAN modem owner," running firmware that keeps the Wi-Fi radio alive. In exchange for giving up a full core, this port drives a real 800x480 RGB LCD framebuffer at `/dev/fb0`, takes USB keyboard and mouse input over HID, boots off a microSD card through a verified chain from ESP ROM to initramfs to Buildroot, and can provision Wi-Fi credentials from a file on that same SD card without ever touching a serial console. It's also candid about the corners it cut to get there: the README notes that "the PMP entry OpenSBI installs is a locked global RWX grant, so its domain isolation is intentionally unavailable," a plain admission that the security boundary a real bootloader would enforce simply isn't there yet.

Recent commits on both repos read like a normal kernel bring-up project, not a toy: "Make Wi-Fi a cfg80211 device," "Take the keys from cfg80211, and stop guessing about them," "Fail the OpenSBI build on a rejected patch, and refit two that needed it too." This is unglamorous, ongoing driver work, the same kind that took years on projects like postmarketOS.

## It's still a microcontroller wearing a kernel

The gap between this and an actual Raspberry Pi is real, and both ports are honest about where it shows up. Neither has audio. Neither can properly power off, since the underlying firmware just parks the idle hart instead of cutting power. `strace` doesn't work because there's no upstream RV32 port of it yet. And annoyedmilk's board caps out at 16MB of octal PSRAM serving as all of system RAM; even the chip's official ceiling of 64MB is a fraction of the 512MB you'd get on a comparable RISC-V board like the Milk-V Duo S. The kernel itself has to execute from flash rather than PSRAM specifically to avoid eating into that already-tight memory budget.

None of that is a knock on the effort. It's what makes it real. A microcontroller that got its first-ever MMU didn't suddenly acquire a GPU, a display controller, or a memory bus sized for a desktop. What it acquired is enough to run a genuine multi-process Linux userspace over UART or, on annoyedmilk's build, a framebuffer console with a keyboard attached. That's a meaningfully different thing than either "just an RTOS" or "a Raspberry Pi," and it's more interesting than the second framing implies once you stop expecting it to be one.

## Why the Raspberry Pi comparison didn't land on Hacker News

The <a href="https://www.xda-developers.com/newest-esp32-run-linux-close-to-raspberry-pi/" target="_blank">article that put this in front of a wider audience</a> framed it as the ESP32 closing in on Pi-class hardware, and <a href="https://news.ycombinator.com/item?id=49828969" target="_blank">the discussion that followed</a> pushed back on more than one part of that pitch. Commenters pointed out that "ESP32" has become a fragmented enough label, spanning Xtensa and RISC-V, MMU and no MMU, camera-capable and not, that the phrase alone no longer tells you what hardware someone means. Others noted the tradeoff Espressif made on purpose: the earlier P4 chip has a camera interface (MIPI CSI) but not enough headroom for serious workloads, while the S31 has the headroom but dropped the CSI, so you're always picking one gap or the other. There was also skepticism, pointed directly at the article itself, about a "Wi-Fi 6" claim sitting next to a note that the radio is still 2.4GHz-only, a combination that's technically possible but worth double-checking against Espressif's actual datasheet rather than taking at face value.

What people were more genuinely excited about was less about matching a Pi and more about what a cheap board with a real kernel and a network stack opens up: retro computing emulation (ZX Spectrum and even 386 emulation came up), and smarter presence detection for home automation setups where a plain RTOS doesn't leave enough compute for pattern matching. That's a more honest read of what this hardware is actually for than a head-to-head against a board with a hundred times the RAM.

## What you'd actually do with one of these

Once you've got a Buildroot userspace booted, with Wi-Fi or that gigabit Ethernet MAC hardware up, the obvious next step for a lot of people is going to be running something small on it: a status page, a tiny REST API, maybe a dashboard reading off a sensor wired into one of the working GPIO drivers. And the moment you do that, you hit the same wall every home-lab board has hit for a decade: it's sitting on your home Wi-Fi behind a router you don't control, or behind your ISP's CGNAT, with no way for anyone outside your LAN to reach it.

That part, at least, doesn't need custom driver work. If whatever you get running in that rootfs is listening on a port, one SSH command gets it a public HTTPS URL without touching router config:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Swap `8080` for whatever port your service is actually bound to inside the Buildroot environment, run that from a machine that can reach the board (or from the board itself, if you've got a shell with SSH client tools in that userspace), and you get back a URL you can hit from anywhere. It's the same trick we've covered in more depth for {{< link href="/blog/access_home_server_raspberry_pi_behind_cgnat/" newtab=false >}}getting a Raspberry Pi reachable from behind CGNAT{{< /link >}}, and it applies just as well to a microcontroller that happens to be running a real kernel for the first time.

## Where this goes next

Both ports are moving fast enough that "not yet recommended for production," Espressif's own words about its official BSP, reads less like a warning and more like a snapshot of a specific week. Audio, proper power management, and the missing RMT driver are the kind of gaps that tend to close once a kernel boots reliably and a community forms around it, and the commit history on both repos suggests that community already exists. This isn't going to replace a Raspberry Pi on anyone's desk, there's no display pipeline built for a desktop and never will be at 64MB of PSRAM. But a chip that used to top out at blinking an LED over Wi-Fi can now run a multi-process Linux userspace with a real filesystem and a real network stack, flashed over a single UART cable instead of assembled from a board and a power supply. That's a genuinely new category of cheap hardware, even if it never looks like a Pi.
