---
title: "ESP32 Bit Pirate: A Bus Pirate-Style Hacking Tool You Can Reach From Anywhere"
description: "ESP32 Bit Pirate turns a cheap ESP32-S3 board into a 25-protocol hardware hacking tool with a browser-based CLI. Here's what it does, how it compares to a Flipper Zero, and how to reach its Web CLI over the internet with Pinggy."
date: 2026-07-31T11:20:00+05:30
draft: false
tags: ["ESP32 Bit Pirate", "hardware hacking", "Bus Pirate", "ESP32-S3", "Web CLI", "Pinggy", "IoT", "open source hardware"]
categories: ["Technology", "Hardware", "Self-Hosting"]
og_image: "images/esp32_bit_pirate_web_cli_pinggy/esp32_bit_pirate_web_cli_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJlYWNoIHRoZSBFU1AzMiBCaXQgUGlyYXRlIFdlYiBDTEkgZnJvbSBBbnl3aGVyZSB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBmbGFzaGluZyBFU1AzMiBCaXQgUGlyYXRlLCBjb25uZWN0aW5nIGl0IHRvIFdpLUZpLCBhbmQgZXhwb3NpbmcgaXRzIGRldmljZS1ob3N0ZWQgV2ViIENMSSB0byB0aGUgaW50ZXJuZXQgdXNpbmcgYSBQaW5nZ3kgdHVubmVsLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJGbGFzaCB0aGUgZmlybXdhcmUiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBFU1AzMiBCaXQgUGlyYXRlIFdlYiBGbGFzaGVyIGluIENocm9tZSBvciBFZGdlLCBjb25uZWN0IHRoZSBFU1AzMi1TMyBib2FyZCBvdmVyIFVTQiwgYW5kIGZsYXNoIHRoZSBmaXJtd2FyZSBpbiBvbmUgY2xpY2suIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbm5lY3QgdGhlIGRldmljZSB0byBXaS1GaSIsCiAgICAgICJ0ZXh0IjogIk92ZXIgdGhlIHNlcmlhbCBDTEksIHJ1biBtb2RlIHdpZmkgdGhlbiBjb25uZWN0IHRvIGpvaW4geW91ciBXaS1GaSBuZXR3b3JrLiBUaGUgZGV2aWNlIHByaW50cyB0aGUgSVAgYWRkcmVzcyBpdCB3YXMgYXNzaWduZWQsIGZvciBleGFtcGxlIDE5Mi4xNjguMS40Mi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiB0aGUgV2ViIENMSSBsb2NhbGx5IHRvIGNvbmZpcm0gaXQgd29ya3MiLAogICAgICAidGV4dCI6ICJWaXNpdCBodHRwOi8vPGRldmljZS1pcD4gZnJvbSBhIGJyb3dzZXIgb24gdGhlIHNhbWUgbmV0d29yayB0byBjb25maXJtIHRoZSBXZWIgQ0xJIGxvYWRzIGJlZm9yZSB0dW5uZWxpbmcgaXQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlR1bm5lbCB0aGUgZGV2aWNlIElQIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiRnJvbSBhIGNvbXB1dGVyIG9uIHRoZSBzYW1lIG5ldHdvcmsgYXMgdGhlIEVTUDMyLCBydW46IHNzaCAtcCA0NDMgLVIwOjE5Mi4xNjguMS40Mjo4MCBmcmVlLnBpbmdneS5pby4gUGluZ2d5IHByaW50cyBhIHB1YmxpYyBIVFRQUyBVUkwgdGhhdCBmb3J3YXJkcyB0byB0aGUgZGV2aWNlLCBub3QgdG8gbG9jYWxob3N0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJPcGVuIHRoZSBwdWJsaWMgVVJMIGZyb20gYW55IGRldmljZSIsCiAgICAgICJ0ZXh0IjogIlZpc2l0IHRoZSBnZW5lcmF0ZWQgcGluZ2d5LmxpbmsgVVJMIGZyb20gYSBwaG9uZSBvciBhIHRlYW1tYXRlIGJyb3dzZXIgdG8gcmVhY2ggdGhlIFdlYiBDTEkgb3ZlciB0aGUgaW50ZXJuZXQsIHdpdGggdGhlIHR1bm5lbCBhY3RpdmUgb25seSBmb3IgYXMgbG9uZyBhcyB0aGUgU1NIIHNlc3Npb24gcnVucy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "esp32_bit_pirate_web_cli_pinggy/esp32_bit_pirate_web_cli_pinggy_banner.webp" "ESP32 Bit Pirate hero graphic showing a terminal with mode i2c and a Pinggy SSH tunnel command forwarding to a public pinggy.link URL, alongside the protocols it supports: UART, I2C, SPI, JTAG, CAN, RFID, Wi-Fi, Bluetooth, and Sub-GHz" >}}

A fifteen-year-old open source hardware tool called the Bus Pirate has quietly become one of the most cloned designs in the hacking scene, and the latest clone is unusual for what it costs and how you talk to it. <a href="https://github.com/geo-tp/ESP32-Bit-Pirate" target="_blank">ESP32 Bit Pirate</a> is firmware, not hardware: flash it onto an $8-10 ESP32-S3 board and you get a multi-protocol debugging tool that speaks UART, I2C, SPI, 1-Wire, CAN, JTAG/SWD, Bluetooth, Wi-Fi, Sub-GHz, RFID, and about a dozen other protocols, controlled from either a serial terminal or a full CLI running in your browser.

That last part is the interesting bit. The original Bus Pirate, designed by Ian Lesnet back in 2008, talks to your PC over a serial connection and nothing else. ESP32 Bit Pirate keeps that mode but adds a second one: the firmware runs its own web server, and once the board joins your Wi-Fi network you open a tab and get the same command interface, no drivers, no serial terminal app, works from a phone. A CLI that lives on a device's own IP address rather than on your laptop is exactly the kind of thing a tunnel is built for, so this piece covers both what the tool does and how to reach that Web CLI from outside your network with Pinggy.

{{% tldr %}}
1. **What it is**: open source firmware (MIT licensed) that turns an ESP32-S3 board into a Bus Pirate-style multi-protocol hacking tool with 25+ modes, built by developer <a href="https://github.com/geo-tp" target="_blank">geo-tp</a>.
2. **Hardware**: any ESP32-S3 board with 8MB+ flash works. A bare dev kit runs $8-10; an M5Stack Cardputer with its own screen and keyboard is around $30, against roughly $200 for a Flipper Zero.
3. **Flash it**: use the <a href="https://geo-tp.github.io/ESP32-Bit-Pirate/webflasher/" target="_blank">Web Flasher</a> in Chrome or Edge, no toolchain install needed.
4. **Talk to it**: serial CLI over USB, a browser-based Web CLI once it's on Wi-Fi, or a standalone on-device UI if you're using a Cardputer.
5. **It's a real local web server**: `mode wifi` then `connect` joins your network and the device prints an IP like `192.168.1.42`; the Web CLI lives there on plain HTTP.
6. **Share it**: from a computer on the same network, `ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io` gets you a public HTTPS URL to that Web CLI in seconds.
7. **Lock it down**: add `-t "b:user:password"` to the tunnel command. There is no login on the device's own web server, so anything you tunnel is wide open until you add auth yourself.
{{% /tldr %}}

{{< llm-context >}}To reach the ESP32 Bit Pirate Web CLI with Pinggy - flash the firmware with the web flasher, connect it to Wi-Fi with `mode wifi` then `connect` (it prints its IP, e.g. 192.168.1.42, serving the Web CLI on port 80), then from a computer on the same network run `ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io` to get a public HTTPS URL to the device's Web CLI.{{< /llm-context >}}

## What the Bus Pirate is, for anyone who's never used one

If you've never touched embedded hardware, the Bus Pirate is worth a one-line explanation: it's a USB-connected probe that lets you poke at a chip's communication pins directly from a terminal, without writing any firmware of your own. Plug three wires onto an unknown sensor, type `mode i2c` then `scan`, and it tells you what address the chip answers on. It turned "reverse-engineer this circuit board" from a soldering-and-oscilloscope exercise into something you could do with a text prompt, and an entire generation of hardware hackers, from CTF players to firmware security researchers, grew up using one.

The catch is that the original hardware, a PIC-based board from Dangerous Prototypes, hasn't changed much since 2008 and isn't cheap or easy to source today. ESP32 Bit Pirate reimplements the same command grammar and the same "type a mode, type a command" workflow as firmware for a chip that costs a few dollars and happens to already have Wi-Fi and Bluetooth radios built in. That second part is why the feature list runs so far past what the original Bus Pirate ever did.

## What it actually does

Pick a mode, then send commands in that mode. The project's own list of supported modes runs to more than 25:

- **Wired protocols**: UART (including half-duplex), I2C, SPI, 1-Wire, 2-Wire, 3-Wire, CAN, JTAG/SWD, I2S, DIO, USB (including USB host mode), Ethernet
- **Radio**: Wi-Fi, Bluetooth, Sub-GHz, RFID, RF24, FM, infrared, cellular (modem/SMS/call)
- **Utility**: LED protocol output (addressable LEDs), a logic analyzer, EEPROM and flash dump tools, PWM/servo control, and a "Device-B-Gone" command that replays over 80 infrared remote protocols to shut off displays

On top of the raw protocol modes there's scripting, either Bus Pirate-style bytecode or actual Python, for anyone who wants to automate a sequence instead of typing it by hand. The <a href="https://github.com/geo-tp/ESP32-Bit-Pirate/releases" target="_blank">release notes</a> show the project shipping fast: UART sniffing and an I2C register-trace command landed in v1.6 alongside a Wi-Fi hotspot mode, and a "Pirate Assistant" that translates plain-English requests into the right firmware commands, so you can describe what you want to do with a chip instead of remembering the exact mode syntax.

## The hardware you actually need

This is firmware, not a board you buy from the project. Any ESP32-S3 with at least 8MB of flash works, which covers a wide range of hardware already sitting in hobbyist parts bins:

- A bare **ESP32-S3 Dev Kit** ($8-10) gets you every protocol mode over serial or Web CLI, no screen.
- An **M5Stack Cardputer** (around $30) adds a keyboard and screen for the standalone mode, so you don't need a laptop attached at all.
- LILYGO **T-Display**, **T-Embed**, and **T-Embed CC1101** variants, M5's **AtomS3**, **StampS3**, and **StickS3**, and Seeed's **Xiao S3** are all explicitly supported, with pin remapping available for anything else that meets the flash requirement.

The obvious comparison is the Flipper Zero, which does a lot of the same wireless protocol work (Sub-GHz, RFID, IR, BLE) for around $200 in a finished, battery-powered enclosure. ESP32 Bit Pirate doesn't try to match that polish; it's a bare board with wires hanging off it and firmware that's still shipping new modes every few weeks. What it trades away in fit and finish, it makes up for in being roughly a fifth of the price and running on hardware most electronics hobbyists already own.

## Flashing and connecting

There's no toolchain to install. The <a href="https://geo-tp.github.io/ESP32-Bit-Pirate/webflasher/" target="_blank">Web Flasher</a> uses the WebSerial API to flash the board directly from a browser tab, which means Chrome or Edge (WebSerial isn't implemented in Firefox or Safari). Plug the board in, pick it from the browser's port list, and the flasher writes the firmware in place.

Once it boots, you have two ways in:

- **Serial CLI**: open any serial terminal at the board's USB port and you're dropped into the command prompt immediately. This is also how you get the tool onto Wi-Fi in the first place: `mode wifi`, then `connect` to pick a network interactively (or `connect MyNetwork mypassword` to skip the prompts). Credentials save automatically, and the LED on the board tells you the state: blue for no saved credentials, white while connecting, green once it's on the network, red on failure.
- **Web CLI**: once connected, the device prints the IP address it was handed by your router. Open that address in a browser and you get the identical command interface, styled as a proper terminal, with keyboard shortcuts, copy-paste, and ANSI output. If your Wi-Fi setup fails or there's no network around to join, v1.6 added a hotspot mode instead: the board creates its own access point, you connect to that, and the Web CLI is reachable at the address the device shows on screen.

A quick example session, run from either interface, looks like this:

```
> mode uart
> scan
> mode i2c
> scan
Found device at address 0x3C
> mode wifi
> connect
```

That's the whole interaction model: pick a mode, run commands scoped to that mode, switch modes when you need a different protocol.

## Reaching the Web CLI from anywhere with Pinggy

Here's the detail that makes this different from tunneling a normal local dev server: the Web CLI isn't running on your laptop. It's running on the ESP32 board itself, at whatever IP your router handed it. There's no `localhost:3000` involved anywhere in this setup, which trips people up the first time they try to tunnel it, because the reflex is to point Pinggy at `localhost`.

{{< image "esp32_bit_pirate_web_cli_pinggy/esp32_bit_pirate_web_cli_pinggy_flow.webp" "Diagram showing the ESP32 Bit Pirate serving its Web CLI at 192.168.1.42 port 80, a laptop on the same network running an SSH tunnel to that IP, Pinggy relaying the connection, and the resulting public HTTPS URL opened from a phone" >}}

The fix is simple once you see it: point the tunnel at the device's LAN IP instead of `localhost`, and run the tunnel command from a computer that's on the same network as the board, not from the board itself (the ESP32 can join Wi-Fi, but it can't run an SSH client, so it can't open the tunnel on its own).

From that computer:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:192.168.1.42:80 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:192.168.1.42:80 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:192.168.1.42:80 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:192.168.1.42:80 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Swap `192.168.1.42` for whatever IP your board actually printed. Pinggy responds with a public URL like `https://abc123.a.pinggy.link`, and opening it from anywhere, a phone on mobile data, a teammate's laptop across the country, gets you the exact same terminal you'd see sitting next to the board on your own Wi-Fi.

Since the device's own web server has no authentication of any kind, add HTTP basic auth on the tunnel before you share the link with anyone:

```bash
ssh -p 443 -R0:192.168.1.42:80 a.pinggy.io -t "b:reviewer:temporarypass"
```

That's enough to stop the URL from being useful to anyone who doesn't have the password, without needing to touch the firmware itself.

## Why you'd actually want this

**Good for:** letting a remote teammate watch a live protocol sniff without walking them through your Wi-Fi setup, checking on a long-running Sub-GHz capture from your phone while you're not at the bench, demoing a chip you've decapped and are probing over JTAG to someone on a call, or running a CTF-style hardware challenge where a remote participant needs to drive the board without owning one. Because the tunnel is a single outbound SSH session, none of this needs router configuration, port forwarding, or opening anything on your firewall.

**Not good for:** leaving running unattended. A hardware hacking tool that can toggle GPIO pins, transmit on Sub-GHz frequencies, and read/write flash over JTAG is a genuinely different risk profile from exposing a read-only dashboard. Treat the tunnel the way you'd treat handing someone a serial cable straight into the board: fine for a supervised session with someone you trust, not something to leave open. Close the SSH session when you're done, and remember that Sub-GHz and RFID transmission is subject to local RF regulations regardless of whether you're driving the board locally or through a tunnel.

## A small naming footnote

If you go looking for this project's history, you'll find it under two names. It launched as "ESP32 Bus Pirate," which is a pretty direct nod to the hardware it's inspired by, and picked up a few thousand GitHub stars and a front-page Hacker News thread under that name. Sometime after, the project renamed itself to "ESP32 Bit Pirate," a change that came up in discussion on the official Bus Pirate project's own forum around naming clarity between the two tools. It's a minor bit of open source housekeeping, but if you see references to "ESP32 Bus Pirate" in older blog posts or forum threads, that's the same project you're reading about here.

## Conclusion

What makes ESP32 Bit Pirate worth a look isn't just that it's a cheap Bus Pirate clone, plenty of those exist. It's that putting the CLI behind a web server instead of a serial port changes how you can use the thing: it's reachable from any device with a browser on the same network, and with a Pinggy tunnel pointed at its LAN IP instead of localhost, it's reachable from anywhere at all. For a tool built around poking at hardware you're actively debugging, being able to hand a live session to someone else with one SSH command is a genuinely useful trick, not just a novelty.
