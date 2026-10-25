---
title: "2,528 Fridge Controllers on the Open Internet: What the French Supermarket Attack Shows"
description: "In October 2026 attackers forced supermarket freezers in France into defrost. Here is what was exposed, how many dashboards were online, which firmware was unpatched, and how to give a contractor remote access without a public address."
date: 2026-10-19T11:00:00+05:30
lastmod: 2026-10-19T11:00:00+05:30
draft: false
tags: ["cybersecurity", "iot", "remote access", "tunneling"]
og_image: "images/supermarket_fridge_controllers_exposed_online/supermarket_fridge_controllers_exposed_online_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIjIsNTI4IEZyaWRnZSBDb250cm9sbGVycyBvbiB0aGUgT3BlbiBJbnRlcm5ldDogV2hhdCB0aGUgRnJlbmNoIFN1cGVybWFya2V0IEF0dGFjayBTaG93cyIsCiAgImRlc2NyaXB0aW9uIjogIkluIE9jdG9iZXIgMjAyNiBhdHRhY2tlcnMgZm9yY2VkIHN1cGVybWFya2V0IGZyZWV6ZXJzIGluIEZyYW5jZSBpbnRvIGRlZnJvc3QuIEhlcmUgaXMgd2hhdCB3YXMgZXhwb3NlZCwgaG93IG1hbnkgZGFzaGJvYXJkcyB3ZXJlIG9ubGluZSwgd2hpY2ggZmlybXdhcmUgd2FzIHVucGF0Y2hlZCwgYW5kIGhvdyB0byBnaXZlIGEgY29udHJhY3RvciByZW1vdGUgYWNjZXNzIHdpdGhvdXQgYSBwdWJsaWMgYWRkcmVzcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc3VwZXJtYXJrZXRfZnJpZGdlX2NvbnRyb2xsZXJzX2V4cG9zZWRfb25saW5lL3N1cGVybWFya2V0X2ZyaWRnZV9jb250cm9sbGVyc19leHBvc2VkX29ubGluZV9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTE5VDExOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMTlUMTE6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9zdXBlcm1hcmtldF9mcmlkZ2VfY29udHJvbGxlcnNfZXhwb3NlZF9vbmxpbmUvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJDeWJlcnNlY3VyaXR5IiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJEYW5mb3NzIEFLLVNNLCBTdG9yZVZpZXcsIEZyZW5jaCBzdXBlcm1hcmtldCBjeWJlcmF0dGFjaywgZXhwb3NlZCByZWZyaWdlcmF0aW9uIGNvbnRyb2xsZXJzLCBDRVJURlItMjAyNi1BTEUtMDEyLCBDVkUtMjAyNS00MTQ1MCwgSW9UIHNlY3VyaXR5LCByZW1vdGUgYWNjZXNzIHdpdGhvdXQgcG9ydCBmb3J3YXJkaW5nIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkRhbmZvc3MgQUstU00gYW5kIEFLLVNDIGNvbnRyb2xsZXJzIiwgImRlc2NyaXB0aW9uIjogIlJlZnJpZ2VyYXRpb24gY29udHJvbGxlcnMgd2l0aCBhIGJ1aWx0LWluIHdlYiBkYXNoYm9hcmQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJJbnRlcm5ldCBleHBvc3VyZSBzY2FubmluZyIsICJkZXNjcmlwdGlvbiI6ICJDb3VudGluZyBkZXZpY2VzIHRoYXQgYW5zd2VyIG9uIHB1YmxpYyB3ZWIgcG9ydHMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJFbmQtb2YtbGlmZSBmaXJtd2FyZSIsICJkZXNjcmlwdGlvbiI6ICJEZXZpY2VzIHRoYXQgbm8gbG9uZ2VyIHJlY2VpdmUgc2VjdXJpdHkgZml4ZXMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJPdXRib3VuZCB0dW5uZWxzIiwgImRlc2NyaXB0aW9uIjogIlJlbW90ZSBhY2Nlc3MgdGhhdCBuZWVkcyBubyBpbmJvdW5kIHBvcnQgb24gdGhlIHJvdXRlci4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "supermarket_fridge_controllers_exposed_online/supermarket_fridge_controllers_exposed_online_banner.webp" "Banner: 1,331 fridge dashboards in France open to the internet, with a ranked list of the top five countries" >}}
On the night of 11 to 12 October 2026, refrigeration controllers in French supermarkets were switched into defrost mode. Some freezers reached 50°C, some equipment caught fire, and stores threw away food. Five days earlier, a weekly scan by {{< link href="https://ipinfo.io/blog/france-fridges-hack" >}}IPinfo{{< /link >}} had found 2,528 Danfoss refrigeration dashboards answering on the public internet, 1,331 of them in France. Nobody has confirmed how the attackers got in. What the scan does show is a web login page, on a device that controls a freezer, reachable from anywhere.

{{% tldr %}}
1. The affected controllers have a web dashboard (Danfoss StoreView) that store staff and contractors use. **Anyone who knew the address could open it**, with no VPN in between.
2. On 6 to 7 October 2026, IPinfo counted **2,528 of these dashboards online, 53% of them in France**. 85% of the French ones ran software with known flaws.
3. **Fixes existed**, from 2023 and 2025, but only 195 of 1,331 French dashboards had all of them. Many of the controllers are end of life and will never get one.
4. The entry point is **not confirmed**. CERT-FR reports "numerous compromises" and names no vulnerability.
5. The fix CERT-FR asks for is to **take the controllers off the public internet** and reach them through a VPN or a protected network.
{{% /tldr %}}

## What the attackers could reach

The controllers in question manage the compressors, evaporators and defrost cycles of a store's fridges and freezers. Danfoss sells them as the AK-SM and AK-SC series. Each has a built-in web server, and the browser interface on top of it is called StoreView. Staff use it to look at temperatures and alarms, and the refrigeration contractor uses it to change settings without driving to the store.

That convenience is the problem. A device that serves a login page to the internet is a device anyone on the internet can try to log in to. The French cyber agency's alert, {{< link href="https://cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-012/" >}}CERTFR-2026-ALE-012{{< /link >}}, was published on 12 October. It lists four affected product lines:

- Danfoss AK-SM
- Danfoss AK-SC
- Copeland xweb
- Dixell xweb

The xweb supervisors were added in a revision on 13 October. The alert reports "numerous compromises" and warns that campaigns are probably still under way. It does not name a vulnerability, a cause or an actor.

Danfoss told franceinfo that most of the devices concerned are obsolete, notably the AK-SM 800 and AK-SC 355, and said a limited number of current AK-SM 800A systems on outdated firmware were also hit. Store counts in the press range from about 150 to about 700 depending on the chain and who is counting, and they measure different things, so treat them as a rough scale rather than a total.

## How IPinfo counted the open dashboards

You do not need special access to find a device like this. Internet-wide scanners connect to the usual web ports on every IPv4 address, record what comes back, and let you search the responses. IPinfo ran such a scan weekly and recognised the dashboards from two fingerprints: the page title of the newer interface, and the web server banner plus a Flash loader page for the older one.

Their numbers for the 6 to 7 October scan:

| What | Count |
|---|---|
| Danfoss dashboards online, worldwide | 2,528 |
| In France | 1,331 (53%) |
| In the other 72 countries and territories, combined | 1,197 |
| Poland / United States / Portugal / Belgium | 179 / 101 / 92 / 85 |

There are limits. The counts are minimums, they cover IPv4 only, and one address does not map to one store. Being reachable is also not the same as being breakable. IPinfo is not publishing the addresses.

A second count, from a Shodan search reported by {{< link href="https://ironhackers.es/en/danfoss-ak-sm-800a-cve-2025-41450/" >}}Ironhackers{{< /link >}} on 14 October, found 4,764 panels worldwide with 2,850 in France. That is higher than IPinfo's, because different scanners use different fingerprints and the Shodan search did not filter by firmware version. Both agree on the shape: France has more of these than anywhere else by a wide margin.

## The fixes existed and most dashboards did not have them

This is the part of the IPinfo data that matters most. For each French dashboard they worked out which firmware it ran, from the build date shown on the login page:

- Firmware older than 3.3 misses three fixes from 2023, including one for CVE-2023-25915, rated critical.
- Firmware older than 4.2 misses a 2025 login bypass fix ({{< link href="https://www.cisa.gov/news-events/ics-advisories/icsa-25-140-03" >}}CISA ICSA-25-140-03{{< /link >}}).
- Firmware older than 4.3.1 misses two more 2025 fixes found by Claroty's research team.

Of the 1,331 French dashboards:

| Software state | Dashboards |
|---|---|
| Unsupported older controllers, no fix exists | 527 |
| Missing the 2023 fixes | 280 |
| Missing the 2025 fixes | 329 |
| Every known fix applied | 195 |

That adds up to 1,331. 85% (1,136) were exposed with at least one known flaw. And it was not new: 1,019 of the French dashboards were at the same address on 30 March 2026, and the share that was fully patched only moved from 14% to 24% over those six months.

The 527 unsupported units are the ones with no way out. Danfoss declared the older controllers end of life in 2023, the same year the security firm Synacktiv published a login bypass for them, and its advice then was to restrict network access. A patch cannot fix a product that no longer gets patches. Only taking it off the internet can.

{{< image "supermarket_fridge_controllers_exposed_online/french_dashboard_patch_state.webp" "Stacked bar of 1,331 exposed French fridge dashboards: 527 unsupported, 280 missing 2023 fixes, 329 missing 2025 fixes, 195 fully patched" >}}

*Only 195 of 1,331 French dashboards had every known fix. Data: {{< link href="https://ipinfo.io/blog/france-fridges-hack" >}}IPinfo{{< /link >}}, October 2026.*
## What nobody knows yet

It is tempting to draw a straight line from the unpatched firmware to the attack. The evidence does not support that yet.

- CERT-FR's alert names no vulnerability.
- Danfoss's statement does not tie the incident to any flaw.
- Ironhackers reproduced an authentication bypass, CVE-2025-41450, on an AK-SM 800A firmware image in a lab. They describe a service-access path whose code is derived from the date and is recoverable from the firmware, so it is the same for every device on a given day. They call it the "prime suspect" and say the attack vector is unconfirmed. Their lab showed administrator access, not a defrost sequence.
- The Paris prosecutor has opened an investigation. No group has claimed it.

So the honest summary is this: a large number of controllers with a known-bad login were reachable from the internet, and a campaign hit controllers like them. The exact flaw may turn out to be an older bypass, a newer one, or a stolen password.

## What happened to the exposure afterwards

Exposure fell fast once the attack was public. IPinfo scanned again on 14 October:

| France | 6-7 Oct | 14 Oct |
|---|---|---|
| Dashboards online | 1,331 | 316 |
| Unsupported older controllers | 527 | 64 |
| Fully patched | 195 | 54 |

That is a 76% drop in a week. Outside France, 25% of the dashboards disappeared, against 9 to 12% in a normal week. Censys saw a 71% drop in France between 11 and 14 October. Claroty said some exposed AK-SM 800 units were still online, and IPinfo's own scan found 64 of them.

Notice that the fully patched dashboards also fell, from 195 to 54. People pulled everything offline, not only the vulnerable units, which is the right instinct.

{{< image "supermarket_fridge_controllers_exposed_online/french_dashboards_before_after_attack.webp" "Two panels comparing French fridge dashboards online before and after the attack: 1,331 to 316 online, 527 to 64 unsupported, 195 to 54 fully patched" >}}

*A week of removals cut French exposure by three quarters. Data: {{< link href="https://ipinfo.io/blog/france-fridges-hack" >}}IPinfo{{< /link >}}, October 2026.*
## What CERT-FR tells operators to do

The guidance in the alert, as updated on 16 October, is short:

1. Remove internet exposure for the affected units and any others on public IP addresses.
2. Review the full configuration, including defrost schedules.
3. Restore access only through a secure VPN or a protected network. Filtering the contractor's source IP addresses on a firewall is acceptable as a temporary measure only.
4. Apply the vendor hardening. For Danfoss that means updating the firmware, setting the security level to Strict and changing default passwords.
5. For a compromised unit, restart it or restore factory settings, then reconfigure it before it goes back into service. A factory reset alone is not enough, because it removes the attacker's foothold but leaves the vulnerability in place.

It also says to check insurance terms before cutting the data feed to a refrigeration contractor, which is a reminder that someone really does need remote access here.

## Checking what your own network exposes

If you run any building controller, camera or NAS, look at your network the way a scanner does. From a machine outside your network (a phone on mobile data, or a cheap VPS), check your public IP against the web ports:

```bash
nmap -Pn -p 80,443,8080,8443 <your-public-ip>
```

Anything that answers is reachable by everyone. Then search that same address in Shodan or Censys to see what the scanners already recorded. I did not run these against a refrigeration controller. They are standard commands and the point holds for any device.

## Giving a contractor access without a public address

A contractor who needs to reach a controller does not need that controller to have a public address. What they need is a path in that the site opens outward. Here is the shape of it, using Pinggy.

Put a small always-on box on the same network as the controller (a Raspberry Pi works). It makes an outbound SSH connection to a Pinggy server and asks for the controller's web port to be forwarded. No inbound port is opened on the store's router, and the controller itself keeps a private address. This is the command, with the controller at `192.168.1.50` and a Pro token from the [Pinggy dashboard](https://dashboard.pinggy.io):

```bash
ssh -p 443 -R0:192.168.1.50:80 <token>@pro.pinggy.io -T -- b:contractor:change-this-password w:203.0.113.10/32
```

`b:` puts basic auth in front of the tunnel and `w:` only lets the contractor's IP address through (here a placeholder from the documentation range). Both are applied by the tunnel before a request ever reaches the controller. Flag syntax comes from the Pinggy docs for [HTTP tunnels](https://pinggy.io/docs/http_tunnels/). I did not run this command against a real controller, so test it on a spare device first.

The tradeoffs are real, and CERT-FR's advice still stands:

- The tunnel URL is public. The gate in front of it stops a scanner from seeing the controller's login page, but it is one password and one IP list, not a managed identity system. A VPN with per-user accounts is the better answer for a store chain.
- An IP allowlist is the "temporary measure" CERT-FR describes. A contractor on a mobile connection changes address.
- A tunnel does not fix an end-of-life controller. It hides a broken login behind a working one. Replace the unit when you can.
- If the box is compromised, the attacker is inside the store network. Treat it as part of the attack surface.

{{< image "supermarket_fridge_controllers_exposed_online/fridge_controller_direct_vs_tunnel.webp" "A controller with a public IP reached directly by scanners and a contractor, versus a gateway box opening an outbound tunnel to a Pinggy server" >}}

*The tunnel is opened from inside the store, so the router needs no inbound port.*
## What to do this week

- Run the `nmap` check above from outside each site and write down every service that answers.
- Move anything controlling heating, cooling, doors or cameras behind a VPN or an outbound tunnel with authentication.
- Check the support status of every controller you run. If the vendor has declared it end of life, plan its replacement now, because the next exposure scan is already running.
- Read the CERT-FR alert and the {{< link href="https://ipinfo.io/blog/france-fridges-hack" >}}IPinfo write-up{{< /link >}} in full. Figures in this post are as of 20 October 2026, and both sources may be updated as the investigation continues.
