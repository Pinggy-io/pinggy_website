---
title: "Best DNS for Gaming in 2026"
description: "Discover the best DNS for gaming in 2026 to reduce latency and improve performance. Explore top options like Cloudflare, Quad9, AdGuard, NextDNS, and Control D with setup guides."
date: 2024-11-21T14:15:25+05:30
lastmod: 2026-05-23T23:20:00+05:30
draft: false
og_image: "images/best_dns_for_gaming/dns_for_gaming.webp"
tags: ["gaming", "dns", "internet", "guide"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkJlc3QgRE5TIGZvciBHYW1pbmcgaW4gMjAyNiIsCiAgImRlc2NyaXB0aW9uIjogIkRpc2NvdmVyIHRoZSBiZXN0IEROUyBmb3IgZ2FtaW5nIGluIDIwMjYgdG8gcmVkdWNlIGxhdGVuY3ksIGltcHJvdmUgY29ubmVjdGlvbiByZWxpYWJpbGl0eSwgYW5kIGVuaGFuY2UgeW91ciBvdmVyYWxsIGdhbWluZyBwZXJmb3JtYW5jZS4gRXhwbG9yZSB0b3Agb3B0aW9ucyBsaWtlIENsb3VkZmxhcmUsIEdvb2dsZSBETlMsIGFuZCBPcGVuRE5TLCBhbmQgbGVhcm4gaG93IHRvIGNvbmZpZ3VyZSB0aGVtIGZvciBhbiBvcHRpbWl6ZWQgZ2FtaW5nIGV4cGVyaWVuY2UuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Jlc3RfZG5zX2Zvcl9nYW1pbmcvZG5zX2Zvcl9nYW1pbmcud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJUZXN0IGxhdGVuY3kgb2YgcG9wdWxhciBETlMgc2VydmVyczpcbiAxLiBwaW5nIDguOC44LjhcbiAyLiBwaW5nIDEuMS4xLjEgVGhlbiwgc2VsZWN0IHRoZSBETlMgc2VydmVyIHdpdGggbG93ZXN0IGxhdGVuY3kuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvbmZpZ3VyZSB5b3VyIG5ldHdvcmsgdG8gdXNlIHRoZSBiZXN0IGRldGVjdGVkIEROUyBmb3IgZ2FtaW5nIHVzaW5nIHRoZSBlbnN1aW5nIHN0ZXBzLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---
{{< image "best_dns_for_gaming/dns_for_gaming.webp" "Best DNS for Gaming" >}}

Changing your DNS resolver will not lower your in-game ping. Once a match starts, your client is already talking to the game server by IP, so DNS is out of the path. What DNS does affect: launcher startup, login, matchmaking lookups, voice and chat endpoints, CDN selection for patches, and the occasional region-routing decision via EDNS Client Subnet. A faster, more reliable resolver can make those steps feel snappier and less flaky, which is usually what people are reaching for when they say a "gaming DNS" feels better.

This post lists the resolvers worth testing in 2026, how to actually measure them from your location, and the current setup steps for Windows 11, macOS, Linux, and routers. DNS ({{< link href="https://en.wikipedia.org/wiki/Domain_Name_System" >}}Domain Name System{{< /link >}}) is the layer that turns names like `login.example.com` into IPs.



### Comparison Table for Best DNS for Gaming
<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">DNS Provider</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">DNS Servers</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Latency</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Reliability</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Notes</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://1.1.1.1/" target="_blank">Cloudflare</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1.1.1.1<br>1.0.0.1</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Excellent</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very fast global anycast resolver with strong privacy posture.</td>
</tr>
<tr>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://developers.google.com/speed/public-dns" target="_blank">Google Public DNS</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">8.8.8.8<br>8.8.4.4</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Excellent</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Widely supported, stable, and easy fallback for most regions.</td>
</tr>
<tr style="background:#f9fbfd;">
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://www.opendns.com/" target="_blank">OpenDNS</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">208.67.222.222<br>208.67.220.220</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Excellent</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Strong uptime with optional security and content filtering.</td>
</tr>
<tr>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://quad9.net/" target="_blank">Quad9</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">9.9.9.9<br>149.112.112.112</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very Good</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Security-first resolver with malware/phishing domain blocking.</td>
</tr>
<tr style="background:#f9fbfd;">
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://dns.watch/" target="_blank">DNS.Watch</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">84.200.69.80<br>84.200.70.40</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Good</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No-logging resolver with DNSSEC and long-term community operation.</td>
</tr>
<tr>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://adguard-dns.io/welcome.html" target="_blank">AdGuard DNS</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">94.140.14.14<br>94.140.15.15</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Excellent</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">DNS-level ad/tracker blocking with DoH, DoT, and DoQ support.</td>
</tr>
<tr style="background:#f9fbfd;">
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://controld.com/free-dns" target="_blank">Control D (Free DNS)</a></strong></td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">76.76.2.0<br>76.76.10.0</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very Good</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Newer public option with unfiltered and preset filtered profiles.</td>
</tr>
<tr>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://nextdns.io/" target="_blank">NextDNS</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Custom Config</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Excellent</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Highly customizable DNS filtering with analytics and per-device profiles.</td>
</tr>
<tr style="background:#f9fbfd;">
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://dns.surfsharkdns.com/" target="_blank">Surfshark DNS</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">194.169.169.169</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very Good</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Simple privacy-focused resolver with encrypted DNS support.</td>
</tr>
<tr>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls" target="_blank">Mullvad Encrypted DNS</a></strong></td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">dns.mullvad.net<br>(DoH/DoT)</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Very Good</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Public encrypted DNS with no account required and optional filters.</td>
</tr>
<tr style="background:#f9fbfd;">
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://joindns4.eu/for-public" target="_blank">DNS4EU</a></strong></td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">86.54.11.100 (unfiltered)<br>86.54.11.1 (protective)</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Low in EU</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Good</td>
   <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">EU-funded public resolver launched June 2025; five filter variants, GDPR-aligned.</td>
</tr>
</tbody>
</table>


{{% tldr %}}

1. **DNS does not lower in-game ping**:
   - Once you're in a match, traffic goes to the game server's IP directly. DNS is not in the loop.
   - DNS affects launcher startup, login, matchmaking, voice, and patch CDN lookups - so a faster resolver makes those feel more consistent.
2. **Resolvers worth testing in 2026**:
   - <a href="https://1.1.1.1/" target="_blank">Cloudflare (1.1.1.1)</a>, plus 1.1.1.2 (malware) and 1.1.1.3 (malware + adult)
   - <a href="https://developers.google.com/speed/public-dns" target="_blank">Google Public DNS (8.8.8.8)</a>
   - <a href="https://www.opendns.com/" target="_blank">OpenDNS (208.67.222.222)</a>
   - <a href="https://quad9.net/" target="_blank">Quad9 (9.9.9.9)</a>
   - <a href="https://dns.watch/" target="_blank">DNS.Watch (84.200.69.80)</a>
   - <a href="https://controld.com/free-dns" target="_blank">Control D Free DNS (76.76.2.0)</a>
   - <a href="https://adguard-dns.io/welcome.html" target="_blank">AdGuard DNS (94.140.14.14)</a>
   - <a href="https://nextdns.io/" target="_blank">NextDNS (custom config)</a>
   - <a href="https://dns.surfsharkdns.com/" target="_blank">Surfshark DNS (194.169.169.169)</a>
   - <a href="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls" target="_blank">Mullvad Encrypted DNS</a>
   - <a href="https://joindns4.eu/for-public" target="_blank">DNS4EU (86.54.11.100)</a> - new EU-operated resolver
3. **Pick based on measured latency from your location**:
   - Test 2-3 providers with ping and a DNS benchmark, then keep the fastest stable one.
4. **Setup instructions**: Follow [how to change DNS settings](#how-to-change-your-dns-for-gaming) on Windows 11, macOS, Linux, or your router.

{{% /tldr %}}


### What is DNS, and Why Does It Matter for Gaming?

DNS translates names (`login.example.com`) into IP addresses (`192.0.2.10`). Every time a launcher boots, an account service logs in, matchmaking spins up, voice chat connects, or a patch downloads from a CDN, a DNS lookup happens first. After that handshake, the actual game traffic is between your machine and the server IP - DNS is no longer involved.

So what does a slow or flaky resolver actually cost you?

1. **Slower service startup**: DNS lookups for launchers, login, and matchmaking add a few hundred milliseconds to a few seconds at the start. A faster resolver shortens that.

2. **Connection hiccups**: Resolvers with intermittent outages or stale caches can make logins time out or send your client to a stale endpoint. ISP-default DNS is often the culprit here.

3. **Suboptimal CDN steering**: Many game CDNs and matchmakers route by your resolver's IP (or via EDNS Client Subnet). A nearby, well-peered resolver can land you on a closer download mirror or matchmaking pop. This affects patch speed and login latency, not in-game ping.

4. **DNS-layer attacks**: Spoofed or poisoned responses can point a launcher at a malicious endpoint. DNSSEC-validating resolvers and encrypted DNS (DoH/DoT/DoQ) close most of that gap.

What DNS will not do: lower the ping you see in-game. That number is fixed by your physical route to the game server. If your in-match ping is bad, look at routing, your ISP, Wi-Fi vs. Ethernet, or the server region - not your DNS.


### How to Choose the Best DNS for Gaming

A few things matter more than the rest.

#### 1. Lookup latency from your location
Latency is the round-trip time for a query and response. The cheapest win is picking a resolver with a point-of-presence near you. A resolver that's great in Frankfurt may be mediocre from Mumbai.

- **What it actually helps**: faster service handshakes during login, matchmaking, and patch starts.
- **Tools to use in 2026**: `ping` for a quick check; {{< link href="https://www.grc.com/dns/benchmark.htm" >}}GRC DNS Benchmark{{< /link >}} on Windows (still actively maintained), {{< link href="https://github.com/mrwiora/NAMEinator" >}}NAMEinator{{< /link >}} (the maintained namebench successor), or `dnsperf` on Linux. Google's original Namebench has been archived since 2010 - skip it.

##### Steps to Test Latency Using `ping`:

1. Open your terminal or command prompt.
2. Type and press Enter.
   ````plaintext
   ping 8.8.8.8
   ````
3. Observe the output for the time taken (`time=XX ms`) to measure the round-trip latency.

##### **Example Output:**
{{< image "best_dns_for_gaming/ping_result.webp" "Ping 8.8.8.8" >}}

The `time=XX ms` values indicate the latency. Lower values mean better latency.

###### Comparing Multiple DNS Servers

Repeat the `ping` test with other DNS servers like Cloudflare's `1.1.1.1`:

```plaintext
ping 1.1.1.1
```

###### Tools to Automate Latency Testing

For a fuller benchmark across many resolvers:
- {{< link href="https://www.grc.com/dns/benchmark.htm" >}}GRC DNS Benchmark{{< /link >}}: free Windows tool (runs under Wine on Linux/macOS) that tests dozens of resolvers and surfaces cached vs. uncached times.
- {{< link href="https://github.com/mrwiora/NAMEinator" >}}NAMEinator{{< /link >}}: an actively maintained fork of the original namebench, runs on Windows and Linux from the CLI.
- {{< link href="https://www.sordum.org/7952/dns-jumper-v2-2/" >}}DNS Jumper{{< /link >}}: portable Windows utility to test and switch DNS servers.
- `dnsperf` (Linux): scripted benchmarking against arbitrary resolvers and query sets.

#### 2. Reliability
High availability and stable uptime are essential. Unreliable DNS can cause intermittent failures when games try to resolve APIs, voice services, launchers, or matchmaking endpoints.

- **Why It Matters**: A reliable DNS ensures consistent access to gaming servers without interruptions.
- **What to Look For**: Check for uptime guarantees and global server infrastructure from your chosen DNS provider.


#### 3. Security
Most gamers ignore DNS-layer security, which is fine until a launcher gets pointed at a phishing endpoint. Decent public resolvers cover the basics: encrypted DNS (DoH/DoT/DoQ), DNSSEC validation, and optional blocking of known malicious domains.

One of the key technologies ensuring secure DNS resolution is **DNSSEC (Domain Name System Security Extensions)**. DNSSEC protects gamers by ensuring the authenticity and integrity of DNS data. It prevents attackers from redirecting you to malicious websites through DNS spoofing or man-in-the-middle attacks. DNSSEC uses cryptographic signatures to verify that the DNS responses you receive are legitimate and haven't been tampered with. 

- **How It Works**: 
  - DNSSEC digitally signs DNS records using public-key cryptography.
  - When your device queries a domain, the DNS resolver checks the cryptographic signatures to confirm the data's authenticity.
  - If the signature doesn’t match, the response is rejected, preventing spoofed or harmful DNS responses from affecting your gameplay.

- **Why It Matters**: Prevents DNS spoofing, man-in-the-middle attacks, and other threats that could compromise your connection or gaming accounts.

- **Top Picks**: Quad9 validates DNSSEC and blocks known-malicious domains by default. Cloudflare 1.1.1.2 / 1.1.1.3 add malware (and optionally adult) blocking on the same fast anycast network as 1.1.1.1.

#### 4. Customization Options
Advanced users often prefer DNS services that support custom filtering, allowlists, blocklists, and profile-based settings.

- **Why It Matters**: Customization lets you block unnecessary distractions or optimize routing for specific games.
- **Examples**: OpenDNS allows for filtering and advanced controls, making it a great option for families or shared networks.

#### 5. Global Server Coverage
The location of DNS servers can impact their speed and reliability. Opt for a DNS provider with a wide distribution of servers to ensure optimal performance, regardless of your location.

Global coverage is often achieved through a technique called {{< link href="https://en.wikipedia.org/wiki/Anycast" >}}anycasting{{< /link >}}, where multiple servers share the same IP address, routing users to the nearest or best-performing server automatically. This minimizes latency and improves reliability.

- **Why It Matters**: Global server coverage reduces the chance of routing delays, especially when gaming on international servers.
- **Supported Providers**: Cloudflare DNS, Google Public DNS, and Quad9 all utilize anycasting for efficient and fast DNS resolution.
- **Tip**: Cloudflare DNS is known for its vast global presence, making it an excellent choice for gamers worldwide.

### Top DNS Servers for Gaming

Here are the best DNS servers to test for gaming performance in 2026:

#### 1. Cloudflare DNS (1.1.1.1)
   - **Primary DNS**: 1.1.1.1
   - **Secondary DNS**: 1.0.0.1
   - **Family variants**: 1.1.1.2 / 1.0.0.2 (malware blocking), 1.1.1.3 / 1.0.0.3 (malware + adult content)
   - **Latency**: Very low on Cloudflare's global anycast.
   - **Reliability**: Excellent. Cloudflare publishes status at status.cloudflare.com.
   - **Features**: Encrypted DNS (DoH, DoT), DNSSEC validation, no logging of identifying data.

   **Why it's worth trying**: {{< link href="https://1.1.1.1/" >}}Cloudflare DNS{{< /link >}} consistently lands near the top of global DNS benchmarks and is a sensible default for low-latency lookups. If you want passive protection on a family network, swap 1.1.1.1 for 1.1.1.2 (or 1.1.1.3) - same performance, just with malware/adult filtering bolted on.

#### 2. Google Public DNS (8.8.8.8)
   - **Primary DNS**: 8.8.8.8
   - **Secondary DNS**: 8.8.4.4
   - **Latency**: Low.
   - **Reliability**: Excellent and highly stable.
   - **Features**: Massive global footprint with support for encrypted DNS.

   **Why it's great for gaming**: {{< link href="https://developers.google.com/speed/public-dns" >}}Google Public DNS{{< /link >}} is easy to deploy and usually delivers predictable performance across different regions.

#### 3. OpenDNS (208.67.222.222)
   - **Primary DNS**: 208.67.222.222
   - **Secondary DNS**: 208.67.220.220
   - **Latency**: Low.
   - **Reliability**: Excellent.
   - **Features**: Mature platform with optional phishing and content filtering.

   **Why it's great for gaming**: {{< link href="https://www.opendns.com/" >}}OpenDNS{{< /link >}} is a dependable option if you want stable DNS plus optional safety controls on shared networks.

#### 4. Quad9 DNS (9.9.9.9)
   - **Primary DNS**: 9.9.9.9
   - **Secondary DNS**: 149.112.112.112
   - **Latency**: Low.
   - **Reliability**: Very good.
   - **Features**: Security-focused resolver that blocks known malicious domains.

   **Why it's great for gaming**: {{< link href="https://quad9.net/" >}}Quad9 DNS{{< /link >}} is ideal for players who want strong DNS-layer threat blocking without giving up speed.

#### 5. DNS.Watch (84.200.69.80)
   - **Primary DNS**: 84.200.69.80
   - **Secondary DNS**: 84.200.70.40
   - **Latency**: Low.
   - **Reliability**: Good.
   - **Features**: No-logging DNS resolver with DNSSEC support.

   **Why it's great for gaming**: {{< link href="https://dns.watch/" >}}DNS.Watch{{< /link >}} is a privacy-friendly alternative for players who prefer simple, open public resolvers.

#### 6. Control D Free DNS (76.76.2.0)
   - **Primary DNS**: 76.76.2.0
   - **Secondary DNS**: 76.76.10.0
   - **Latency**: Low.
   - **Reliability**: Very good.
   - **Features**: Free anycast resolver with optional preset filtering profiles (malware, ads, social, family).

   **Why it's great for gaming**: {{< link href="https://controld.com/free-dns" >}}Control D Free DNS{{< /link >}} is a strong newer option in this 2026 update. You can keep an unfiltered profile for game compatibility or switch to security-focused profiles when needed.

#### 7. AdGuard DNS (94.140.14.14)
   - **Primary DNS**: 94.140.14.14
   - **Secondary DNS**: 94.140.15.15
   - **Latency**: Low.
   - **Reliability**: Excellent.
   - **Features**: DNS-level ad/tracker blocking with DoH, DoT, and DoQ support.

   **Why it's great for gaming**: {{% link href="https://adguard-dns.io/welcome.html" %}}AdGuard DNS{{% /link %}} can reduce unwanted ad and tracking lookups, but if a game launcher breaks, switch to its non-filtering endpoints.

#### 8. NextDNS (Custom Configuration)
   - **Primary DNS**: Custom endpoint generated at nextdns.io
   - **Secondary DNS**: Depends on your configuration
   - **Latency**: Very low.
   - **Reliability**: Excellent.
   - **Features**: Granular policy control, analytics, and encrypted DNS. Free tier includes up to 300,000 queries per month.

   **Why it's great for gaming**: {{% link href="https://nextdns.io/" %}}NextDNS{{% /link %}} is ideal for advanced users who want per-device tuning, detailed logging choices, and allowlists to avoid game service conflicts.

#### 9. Surfshark DNS (194.169.169.169)
   - **Primary DNS**: 194.169.169.169
   - **Secondary DNS**: 2a09:a707:169:: (IPv6)
   - **Latency**: Low.
   - **Reliability**: Very good.
   - **Features**: Free privacy-focused DNS with DoH/DoT/DoQ support.

   **Why it's great for gaming**: {{% link href="https://dns.surfsharkdns.com/" %}}Surfshark DNS{{% /link %}} is a simple drop-in option for players who want privacy and encrypted DNS without complex setup.

#### 10. Mullvad Encrypted DNS (DoH/DoT)
   - **Primary endpoint**: dns.mullvad.net
   - **Filtered options**: adblock, base, extended, family, all
   - **Latency**: Low.
   - **Reliability**: Very good.
   - **Features**: Public encrypted DNS service with no account required.

   **Why it's worth trying**: {{< link href="https://mullvad.net/en/help/dns-over-https-and-dns-over-tls" >}}Mullvad Encrypted DNS{{< /link >}} is useful when you want encrypted DNS transport by default and optional filtering profiles.

#### 11. DNS4EU (86.54.11.100)
   - **Unfiltered**: 86.54.11.100
   - **Protective (malware blocking)**: 86.54.11.1
   - **Protective + ad blocking**: 86.54.11.13
   - **Protective + child protection**: 86.54.11.12
   - **DoH endpoint**: `https://unfiltered.joindns4.eu/dns-query`
   - **Latency**: Low for users in Europe; less competitive outside the EU.
   - **Reliability**: Good. Operated by a consortium led by Whalebone, funded by the EU Commission; launched June 2025.
   - **Features**: GDPR-aligned operation, five filter variants, IPv4/IPv6, DoH/DoT.

   **Why it's worth trying**: {{< link href="https://joindns4.eu/for-public" >}}DNS4EU{{< /link >}} is the newest meaningful entrant in the public resolver space. For EU-based players who'd rather keep DNS traffic on European infrastructure, it's a credible alternative to Cloudflare and Google. Outside the EU it's usually slower than the global anycast resolvers, so test before committing.

### Select the Best DNS Server Based on Latency  

To ensure optimal performance, you should choose a DNS provider based on the latency from your location. Lower latency means faster DNS resolution, which can significantly enhance your gaming experience.  

You can use this {{< link href="https://github.com/Moksh45/DNS-Latency-Checker" >}}DNS Latency Checker{{< /link >}} script to test and identify the best-performing DNS servers for your location. The script measures the average latency for popular DNS providers, helping you make an informed decision.  

Here’s an example of the result output after running the script:

{{< image "best_dns_for_gaming/script_result.webp" "Script Result" >}}

### How to Change Your DNS for Gaming

Changing your DNS is easy and can be done in just a few steps:

1. **Windows 11 (22H2 / 23H2 / 24H2)**:
   - Open **Settings** > **Network & internet**.
   - Click your active connection (**Wi-Fi** or **Ethernet**), then click the adapter to open its properties.
   - Under **DNS server assignment**, click **Edit**.
   - Switch from **Automatic (DHCP)** to **Manual**, toggle **IPv4** on, and enter your preferred and alternate DNS addresses. Optionally set **DNS over HTTPS** to **On (automatic template)** for encrypted DNS - supported natively since Windows 11 22H2 and improved in 24H2.
   - Click **Save**. (The old Control Panel > Network and Sharing Center path still works on Windows 11, but Microsoft is steering everything through Settings now.)

2. **macOS (Sequoia 15 / Tahoe 16)**:
   - Open **System Settings** (not the old System Preferences) > **Network**.
   - Select your active service (Wi-Fi or Ethernet), then click **Details...**.
   - Choose **DNS** in the sidebar.
   - Click **+** under **DNS Servers** and enter each address. Remove the greyed-out DHCP-pushed addresses if you want yours to take precedence.
   - Click **OK**. macOS applies the change immediately; flush the cache with `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` if you want it to take effect for already-resolved names.

3. **Ubuntu Linux (GNOME)**:
   - Open **Settings** > **Network**.
   - Click the gear icon next to your active Wi-Fi or wired connection.
   - Go to the **IPv4** (or **IPv6**) tab.
   - Turn **Automatic** off for DNS, then enter your DNS server addresses in the **DNS** field (comma-separated).
   - Click **Apply** and toggle the connection off/on to pick up the change. On systemd-resolved systems, `resolvectl status` will confirm the active resolver.

4. **Router (whole-home)**:
   - Log in to your router's admin page (commonly `192.168.1.1` or `192.168.0.1`).
   - Find DNS settings under **WAN**, **Internet**, or **DHCP** (the location varies by vendor).
   - Enter your chosen DNS addresses, save, and reboot if the router prompts you.
   - Heads up: some ISP-supplied routers ignore your DNS overrides or transparently redirect port 53. If your changes don't seem to take effect, test with `dig @1.1.1.1 example.com` from a client and compare to `dig example.com`.

### Conclusion

Switching DNS will not lower your in-game ping. It can make launchers boot faster, logins less flaky, patches grab from a closer mirror, and the whole pre-game pipeline feel more consistent - which is usually what "gaming DNS" tweaks are actually solving for. In 2026, the safe defaults are Cloudflare (1.1.1.1), Google (8.8.8.8), and Quad9 (9.9.9.9) on global anycast; Control D and NextDNS if you want filtering and per-device profiles; AdGuard or Mullvad for encrypted DNS by default; and DNS4EU if you'd rather stay on EU-operated infrastructure. Benchmark two or three from your own connection, pick the fastest one that stays up, and move on - this is not a setting worth obsessing over.

