---
title: "JetKVM Mini: A $39 KVM Over IP, and What to Do When Its Cloud Can't Reach You"
description: "JetKVM Mini packs a full KVM-over-IP into a 42mm aluminum shell for $39. Its remote access runs through JetKVM Cloud and built-in Tailscale. Here is what happens when WebRTC gets blocked, and how to open a backup path with a plain SSH tunnel."
date: 2026-09-13T11:30:00+05:30
lastmod: 2026-11-27T11:30:00+05:30
draft: false
tags: ["KVM over IP", "remote access", "self-hosted", "networking", "tcp"]
categories: ["Technology", "Self-Hosting", "Hardware"]
eyebrow: "KVM over IP"
og_image: "images/jetkvm_mini_kvm_over_ip_remote_access/jetkvm_mini_kvm_over_ip_remote_access_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJlYWNoIGEgSmV0S1ZNIE1pbmkgV2hlbiBXZWJSVEMgb3IgQ2xvdWQgUmVsYXkgQ2Fubm90IEdldCBUaHJvdWdoIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcHMgdG8gc2V0IHVwIGEgYmFja3VwIHBhdGggaW50byBhIEpldEtWTSBNaW5pIEtWTS1vdmVyLUlQIGRldmljZSB1c2luZyBhbiBvdXRib3VuZCBQaW5nZ3kgdHVubmVsLCBmb3IgbmV0d29ya3MgdGhhdCBibG9jayB0aGUgVURQIGFuZCBTVFVOL1RVUk4gdHJhZmZpYyBKZXRLVk0gQ2xvdWQgZGVwZW5kcyBvbi4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvamV0a3ZtX21pbmlfa3ZtX292ZXJfaXBfcmVtb3RlX2FjY2Vzcy9qZXRrdm1fbWluaV9rdm1fb3Zlcl9pcF9yZW1vdGVfYWNjZXNzX2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkZpbmQgdGhlIEpldEtWTSBNaW5pJ3MgTEFOIGFkZHJlc3MiLAogICAgICAidGV4dCI6ICJUaGUgSmV0S1ZNIE1pbmkncyBzY3JlZW4gc2hvd3MgaXRzIGN1cnJlbnQgSVAgYW5kIE1BQyBhZGRyZXNzLiBOb3RlIHRoZSBJUCBhbmQgY2hlY2sgd2hhdCB0aGUgbG9jYWwgd2ViIFVJIGFuc3dlcnMgb24gd2l0aCBjdXJsIC1JIGh0dHA6Ly88aXA+OyB0aGVyZSBpcyBubyBhY2NvdW50IGFuZCBubyBpbnRlcm5ldCBuZWVkZWQgZm9yIGxvY2FsIGFjY2Vzcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUGljayBhIGNvbXBhbmlvbiBtYWNoaW5lIHRoYXQgc3RheXMgb25saW5lIiwKICAgICAgInRleHQiOiAiVXNlIGFub3RoZXIgYWx3YXlzLW9uIGJveCBvbiB0aGUgc2FtZSBMQU4sIHN1Y2ggYXMgYSBob21lIHNlcnZlciwgTkFTLCBvciBSYXNwYmVycnkgUGksIHRvIHJ1biB0aGUgdHVubmVsLiBUaGUgSmV0S1ZNIE1pbmkgaGFzIG5vIHNoZWxsIHRvIHJ1biBvbmUgb24sIGFuZCBrZWVwaW5nIHRoZSB0dW5uZWwgb24gYSBzZXBhcmF0ZSBtYWNoaW5lIG1ha2VzIGl0IGluZGVwZW5kZW50IG9mIEpldEtWTSBDbG91ZCBhbmQgVGFpbHNjYWxlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJPcGVuIGFuIG91dGJvdW5kIHR1bm5lbCB0byB0aGUgSmV0S1ZNIE1pbmkiLAogICAgICAidGV4dCI6ICJGcm9tIHRoZSBjb21wYW5pb24gbWFjaGluZSwgcnVuIHNzaCAtcCA0NDMgLVIwOjE5Mi4xNjguMS41MDo4MCBmcmVlLnBpbmdneS5pbywgcmVwbGFjaW5nIDE5Mi4xNjguMS41MCB3aXRoIHRoZSBKZXRLVk0gTWluaSdzIExBTiBJUC4gVGhpcyBvcGVucyBhIHBsYWluIG91dGJvdW5kIFRDUCBjb25uZWN0aW9uIG9uIHBvcnQgNDQzLCB3aGljaCBwYXNzZXMgdGhyb3VnaCBuZXR3b3JrcyB0aGF0IGJsb2NrIHRoZSBVRFAgV2ViUlRDIGFuZCBTVFVOL1RVUk4gdHJhZmZpYyBKZXRLVk0gQ2xvdWQgcmVsaWVzIG9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBZGQgYmFzaWMgYXV0aCBiZWZvcmUgc2hhcmluZyB0aGUgVVJMIiwKICAgICAgInRleHQiOiAiQXBwZW5kIGI6eW91cnVzZXI6eW91cnBhc3N3b3JkIHRvIHRoZSBzYW1lIGNvbW1hbmQgc28gUGluZ2d5IHJlamVjdHMgdW5hdXRoZW50aWNhdGVkIHJlcXVlc3RzIGF0IHRoZSBlZGdlLCBpbiBhZGRpdGlvbiB0byBKZXRLVk0ncyBvd24gb3B0aW9uYWwgcGFzc3dvcmQgcHJvdGVjdGlvbiBvbiB0aGUgbG9jYWwgVUkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlRyZWF0IGl0IGFzIGEgZmFsbGJhY2ssIG5vdCB0aGUgZGFpbHkgZHJpdmVyIiwKICAgICAgInRleHQiOiAiQSB0dW5uZWwgYWRkcyBhIHJlbGF5IGhvcCB0aGF0IFdlYlJUQydzIHBlZXItdG8tcGVlciBwYXRoIGRvZXMgbm90IGhhdmUsIHNvIGtleWJvYXJkLCBtb3VzZSBhbmQgdmlkZW8gZmVlbCBsZXNzIGltbWVkaWF0ZS4gS2VlcCBKZXRLVk0gQ2xvdWQgb3IgVGFpbHNjYWxlIGFzIHRoZSBldmVyeWRheSBjb25uZWN0aW9uIGFuZCB0aGlzIHR1bm5lbCBhcyB0aGUgd2F5IGluIHdoZW4gdGhhdCBwYXRoIGlzIGJsb2NrZWQuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To reach a JetKVM Mini's local web UI from outside your network when its cloud relay or WebRTC can't get through - on another always-on machine on the same LAN, run `ssh -p 443 -R0:<jetkvm-lan-ip>:80 free.pinggy.io` (its web UI serves plain HTTP, no port needed on the device itself) to get a public HTTPS URL from anywhere.{{< /llm-context >}}

{{< image "jetkvm_mini_kvm_over_ip_remote_access/jetkvm_mini_kvm_over_ip_remote_access_banner.webp" "JetKVM Mini, a $39 KVM over IP the size of a matchbox, with the SSH tunnel command for a backup way in" >}}

JetKVM Mini is a KVM-over-IP device the size of a matchbox: 42 x 42 x 23mm, aluminum shell, $39 for the Ethernet model or $33 apiece in a three-pack. A wireless version with 802.11ax and Bluetooth LE adds three dollars. It's on sale through JetKVM's partner store and authorized resellers, and it does the same job as a rack-mounted IP-KVM that used to cost hundreds of dollars: give you a keyboard, a mouse, and a video feed on any computer, over the network, even when that computer's operating system is dead, its SSH daemon isn't running, or it hasn't gotten past BIOS.

That's a real category, not a gimmick. Homelabbers use IP-KVMs to reach a machine after a bad kernel update. Sysadmins use them to reinstall an OS on a box in a colo they can't drive to. The point of the device is that it works when your normal remote access doesn't.

{{% tldr %}}
* **What it is:** a $39 (Ethernet) or $42 (Wi-Fi) matchbox-sized KVM-over-IP, built from scratch around video capture, HID control, and virtual media rather than a cut-down version of the original JetKVM.
* **How you reach it:** JetKVM Cloud (WebRTC, with STUN/TURN fallback over Cloudflare) or Tailscale, which is built into the Mini's firmware. Both are easy to set up.
* **Where that breaks:** networks that only allow outbound TCP on 443 block the UDP traffic WebRTC needs, and Tailscale still needs a client installed on whatever device you're viewing from.
* **The backup path:** the local web UI is a normal web page at the address on the Mini's screen, so a plain SSH tunnel from another machine on the same LAN puts it behind a public HTTPS URL over the same port 443 your browser already uses for everything: `ssh -p 443 -R0:<jetkvm-lan-ip>:80 free.pinggy.io`.
* **Keep it as a fallback:** the tunnel adds a relay hop that direct WebRTC doesn't have, so it's the way in when the usual path is blocked, not the everyday connection.
{{% /tldr %}}

## What's actually new here

The original JetKVM, now listed from $103, built a loyal following for two reasons: it's well engineered (native 1080p capture, a real web app, virtual media mounting), and its firmware is open source. Mini isn't a cut-down version of that board. According to <a href="https://jetkvm.com/blog/introducing-jetkvm-mini" target="_blank">JetKVM's own announcement</a>, it was built from scratch around a narrower set of jobs, video capture, HID control, and virtual media, which let them drop the DRAM and eMMC a full Linux SBC needs and land at roughly half the price.

Specs, from <a href="https://jetkvm.com/products/jetkvm-mini" target="_blank">JetKVM's product page</a>:

- **MCU:** ESP32-P4X, dual-core RISC-V at 400MHz, with a hardware H.264 encoder
- **Video:** 1080p30 or 720p60 over WebRTC with hardware H.264, and HDMI audio can be streamed too. Up to 4K at 60 fps with JetKVM OS Services, a free agent you install on the target computer that also adds a shared clipboard, file transfer and a guest terminal
- **Network:** RJ45 Ethernet (the Mini W wireless variant swaps it for an ESP32-C5 with dual-band Wi-Fi 6 and BLE)
- **USB:** two USB-C ports, a USB 2.0 High Speed one to the target machine (keyboard, mouse, virtual media, and power) and a Full Speed one for extensions or a separate charger
- **Storage:** a TF card slot for mounting ISOs as virtual media
- **Firmware:** open source, with OTA updates and automatic rollback

Early reviews are positive. <a href="https://www.servethehome.com/jetkvm-mini-w-review-a-simple-and-small-wireless-external-kvm-device/" target="_blank">ServeTheHome's Mini W review</a> called it a great package at $42 and noted the rough edges: you pair it from a phone or laptop before it joins Wi-Fi, the screen isn't a touchscreen so you navigate with two side buttons, and the TF card you need for virtual media adds about half the unit's price again.

## How you're meant to reach it remotely

A KVM device is only useful if you can get to it when you're not home, so JetKVM ships two remote-access paths, both <a href="https://jetkvm.com/docs/networking/remote-access" target="_blank">documented on their site</a>.

The default is **JetKVM Cloud**: sign in on their dashboard and it opens a WebRTC connection to the device, encrypted with DTLS. When a direct peer-to-peer connection isn't possible, which is most of the time once either side is behind NAT, it falls back to STUN to discover public addresses and, if that still doesn't work, a TURN relay that JetKVM runs on Cloudflare's network at no extra cost. It's off by default: you turn it on in the device settings and sign in with a Google account. This is a solid design and it's why the setup is close to one click for most people. If you'd rather not depend on JetKVM's servers, the device can also point at a self-hosted cloud through a Custom provider setting.

The second path is **<a href="https://jetkvm.com/docs/networking/tailscale" target="_blank">Tailscale</a>**. On the Mini it's built into the firmware and still marked experimental: turn it on under **Settings > Tailscale**, and pick a Custom control server if you run Headscale instead of Tailscale's own coordination server. The original JetKVM installs Tailscale with a script over SSH instead. Install the client wherever you're connecting from, and you get the whole LAN, not just the KVM.

## Where that falls over

Both paths share an assumption: that the network you're connecting from will let a WebRTC-style connection out. Most networks do. Some very deliberately don't.

Locked-down corporate networks, plenty of hotel and conference Wi-Fi, and campus networks often allow outbound TCP on 443 and nothing else, no UDP, no STUN, sometimes no arbitrary TURN relay either. That's the exact traffic JetKVM Cloud's fallback path needs. And Tailscale, while it also has a working DERP-relay fallback over plain TCP, still requires installing and authenticating a client on whatever device you're using to look in, which is a real ask if you're on a borrowed laptop or a library machine and just need to glance at a stuck boot screen for thirty seconds.

There's a second, quieter issue: unless you self-host it, JetKVM Cloud's signaling goes through JetKVM's own dashboard. That's fine day to day, but the entire reason you own a KVM is to have a way in when things have already gone wrong. Making that path depend on a third party's servers staying up adds a dependency to the one tool that's supposed to have none.

None of this is a knock on JetKVM's design; STUN/TURN plus a mesh VPN option covers the overwhelming majority of real setups, and it's more thought-out remote access than most $39 hardware ships with. It's just not the only path worth having.

## A backup path: tunnel straight to it

The Mini's local web UI is a normal web page on the device's LAN address, the one shown on its screen, with no account and no internet needed. On the original JetKVM that page is plain HTTP, which is why <a href="https://github.com/jetkvm/kvm/issues/40" target="_blank">a GitHub issue</a> on the project discusses running a personal SSH tunnel just to get HTTPS on the local network. That's convenient here, because a normal web page can go behind any tunnel. Check what yours answers on with `curl -I http://192.168.1.50` first; the commands below asume port 80.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} opens an outbound SSH connection to a public relay and forwards traffic back down it, so from the outside it looks like a normal HTTPS site, and from the inside it never required an inbound port to be opened. Because that connection is a single outbound TCP stream to port 443, the same port your browser already uses for every HTTPS site, it gets through networks that block WebRTC's UDP and STUN/TURN traffic outright.

The JetKVM Mini itself has no shell to run a client on, so the tunnel runs from a second always-on machine on the same LAN, a home server, a NAS, a Raspberry Pi, whatever you've already got, and points at the Mini's local IP instead of localhost:

```
ssh -p 443 -R0:192.168.1.50:80 free.pinggy.io
```

Swap `192.168.1.50` for whatever address is shown on the Mini's own screen. Pinggy replies with a public HTTPS URL:

```
Allocated port 7 for remote forward to 192.168.1.50:80
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels.
https://rpuwm-44-227-128-71.free.pinggy.net
```

Open that from anywhere, including a network that would refuse the WebRTC path outright, and the JetKVM login screen loads over HTTPS with a valid certificate.

**Lock it down before you open that URL to yourself.** A device that hands out full keyboard, mouse, and power control deserves more than one layer of auth. JetKVM's own <a href="https://jetkvm.com/docs/networking/local-access" target="_blank">password protection</a> is optional; turn it on. After five wrong passwords it blocks sign-ins for 15 minutes, which slows down guessing. Then add a second gate at the tunnel edge:

```
ssh -p 443 -R0:192.168.1.50:80 free.pinggy.io b:youruser:yourpassword
```

That rejects unauthenticated requests before they ever reach your network. If you'd rather restrict by network instead of credentials, `w:203.0.113.0/24` limits the tunnel to a known CIDR range. For a tunnel you'll reuse rather than spin up once, a [Pinggy Pro](https://pinggy.io/#prices) token ($3/month, or $2.50/month billed yearly) removes the 60-minute expiry and keeps a persistent subdomain across restarts:

```
ssh -p 443 -R0:192.168.1.50:80 YOUR_TOKEN@pro.pinggy.io
```

## Where this fits next to Cloud and Tailscale

{{< image "jetkvm_mini_kvm_over_ip_remote_access/jetkvm_mini_three_paths_in.webp" "Diagram of three ways to reach a JetKVM Mini from a network that only allows outbound TCP 443: JetKVM Cloud's WebRTC is dropped at the firewall, Tailscale works over DERP only with its app installed, and a Pinggy tunnel from an always-on box on the home LAN works in any browser" >}}

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Path</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Works when UDP/WebRTC is blocked</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Needs a client on the viewer</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Depends on a third-party service being up</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">JetKVM Cloud (WebRTC + Cloudflare TURN)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Sometimes; TURN over TCP can still be filtered</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No, just a browser</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, JetKVM's dashboard, unless you self-host it</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Tailscale</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, DERP relay falls back to TCP</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, an installed and authenticated client</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Optional, self-host with Headscale</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Pinggy tunnel to the local UI</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, plain TCP on port 443</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No, just a browser</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Only while the tunnel session runs</td>
</tr>
</tbody>
</table>

This isn't a case for replacing Cloud or Tailscale. WebRTC's peer-to-peer path, when it connects directly, has lower latency than any relay, and that matters for a device whose entire value is responsive keyboard and mouse input. A tunnel adds a hop the direct path doesn't have, so treat it the way you'd treat a spare key, not something you reach for every day, but something that works precisely on the day your usual way in doesn't.

## Conclusion

JetKVM Mini is a good, cheap IP-KVM, and JetKVM Cloud plus built-in Tailscale cover most remote-access situations. For networks that only allow outbound TCP on 443, or a borrowed machine you can't install anything on, keep an SSH tunnel to its local web UI ready on another box on teh same LAN. Lock it down with JetKVM's password and Pinggy basic auth, and it's a backup way in that needs one command.
