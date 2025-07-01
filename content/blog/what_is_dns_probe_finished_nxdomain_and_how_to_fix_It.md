---
title: "DNS_PROBE_FINISHED_NXDOMAIN: What it is and How to fix it"
description: "Encountering the dns_probe_finished_nxdomain error? Learn what it means, why it happens, and how to resolve it with step-by-step solutions."
date: 2024-11-11T10:00:00+00:00
lastmod: 2025-03-29T14:15:25+05:30
draft: false
og_image: "images/dns_probe_finished_nxdomain/thumbnail.webp"
tags: ["dns_probe_finished_nxdomain", "Network troubleshooting", "DNS troubleshooting"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJBcnRpY2xlIiwKICAiaGVhZGxpbmUiOiAiRE5TX1BST0JFX0ZJTklTSEVEX05YRE9NQUlOOiBXaGF0IGl0IGlzIGFuZCBIb3cgdG8gZml4IGl0IiwKICAiZGVzY3JpcHRpb24iOiAiRW5jb3VudGVyaW5nIHRoZSBkbnNfcHJvYmVfZmluaXNoZWRfbnhkb21haW4gZXJyb3I/IExlYXJuIHdoYXQgaXQgbWVhbnMsIHdoeSBpdCBoYXBwZW5zLCBhbmQgaG93IHRvIHJlc29sdmUgaXQgd2l0aCBzdGVwLWJ5LXN0ZXAgc29sdXRpb25zLiBVbmRlcnN0YW5kIEROUywgaXRzIHJvbGUsIGFuZCBwcmV2ZW50IGZ1dHVyZSBvY2N1cnJlbmNlcy4iLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjQtMTEtMTFUMTA6MDA6MDArMDA6MDAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNS0wMy0yOVQxNDoxNToyNSswNTozMCIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9kbnNfcHJvYmVfZmluaXNoZWRfbnhkb21haW4vdGh1bWJuYWlsLndlYnAiLAogICJhcnRpY2xlU2VjdGlvbiI6IFsKICAgICJUcm91Ymxlc2hvb3RpbmciLAogICAgIkROUyIsCiAgICAiTmV0d29yayBTb2x1dGlvbnMiCiAgXSwKICAia2V5d29yZHMiOiBbCiAgICAiZG5zX3Byb2JlX2ZpbmlzaGVkX254ZG9tYWluIiwKICAgICJOZXR3b3JrIHRyb3VibGVzaG9vdGluZyIsCiAgICAiRE5TIHRyb3VibGVzaG9vdGluZyIsCiAgICAiTlhET01BSU4gZXJyb3IiLAogICAgIkROUyBjYWNoZSIsCiAgICAiRG9tYWluIHJlc29sdXRpb24iLAogICAgIkROUyByZWNvcmRzIgogIF0sCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7CiAgICAiQHR5cGUiOiAiV2ViUGFnZSIsCiAgICAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvd2hhdF9pc19kbnNfcHJvYmVfZmluaXNoZWRfbnhkb21haW5fYW5kX2hvd190b19maXhfSXQvIgogIH0sCiAgImF1dGhvciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgInB1Ymxpc2hlciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IiwKICAgICJsb2dvIjogewogICAgICAiQHR5cGUiOiAiSW1hZ2VPYmplY3QiLAogICAgICAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9sb2dvLnBuZyIKICAgIH0KICB9Cn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

If you've faced the **"dns_probe_finished_nxdomain"** error while browsing, you're not alone. This frustrating issue occurs when your browser fails to resolve the domain name of the website you are trying to access. But don’t worry—this article dives deep into what this error means, common causes, and step-by-step fixes.

{{< image "dns_probe_finished_nxdomain/thumbnail.webp" "thumbnail" >}}

{{% tldr %}}

1. **What is `dns_probe_finished_nxdomain`?**  
   This error occurs when the browser fails to resolve the domain's `A` (or `AAAA`) DNS records, preventing your browser from locating the domain’s IP address.  
   - **For Website Visitors**: It’s often caused by browser cache issues, network problems, or DNS misconfigurations.  
   - **For Domain Owners**: It indicates issues like missing or incorrect DNS records, expired domains, or registrar misconfigurations.  
2. **How to Fix It?**  
   - **For Website Visitors**:  
     - Clear browser and DNS cache:  
       - **Windows**: `ipconfig / flushdns`  
       - **macOS**: `sudo killall -HUP mDNSResponder`  
     - Change DNS to Google (`8.8.8.8`) or Cloudflare (`1.1.1.1`).  
     - Check your internet connection and restart your router and .  
     - Detailed steps [here](#for-website-visitors).  
   - **For Domain Owners**:  
     - Verify DNS records (A, AAAA) using tools like <a href="https://toolbox.googleapps.com/apps/dig/" target="_blank">Google Dig Tool</a>.
     - Check domain registration status and ensure it hasn’t expired.  
     - Resolve custom nameserver issues.  
     - Full troubleshooting guide [here](#for-domain-owners).  

{{% /tldr %}}


## What Does "dns_probe_finished_nxdomain" Mean?

When your browser cannot find the IP address that the domain you’re trying to reach maps to, you’ll get the error 'dns_probe_finished_nxdomain'. DNS works like a phone book to translate plain english domain names (example.com) to computers friendly IP addresses.

But when this process fails, your browser is unable to find the website and will show you the 'NXDOMAIN' (no such domain) error.

{{< image "dns_probe_finished_nxdomain/sequence_diagram_of_dns_probe_finished_nxdomain.webp" "sequence of dns_probe_finished_nxdomain" >}}

## Common Causes of "dns_probe_finished_nxdomain"

Several factors can trigger this error:

1. **Misconfigured DNS Settings**  
In addition, DNS servers with incorrect addresses cannot be resolved properly.

2. **Browser Cache Issues**  
Local DNS lookups may be interfered by corrupted or outdated browser cache.

3. **Network Problems**  
The error can appear due to temporary glitches in your internet connection or router.

4. **VPN or Proxy Issues**  
DNS requests may be blocked by proxies or VPNs or they may simply be operated through the use of non-functional DNS servers.

5. **Domain Configuration Errors**  
If you’re a domain owner, something is wrong with your DNS records or your domain is about to expire, you can get this error.

## How to Fix "dns_probe_finished_nxdomain"
This error happens most often because your DNS (Domain Name System) cannot resolve the domain name into an IP address. For normal users who are **website visitors** and **domain owners**, we provide some solutions.

### For Website Visitors
#### 1. Clear Browser Cache and Cookies

The cached data in your browser can sometimes conflict with DNS resolution, causing the NXDOMAIN error. To resolve this, you should clear your browser's cache and cookies.

In **Chrome**, navigate to **Settings**, then **Privacy and Security**, and look for Clear Browsing Data. Select both "**Cached images and files**" and "**Cookies**," then click "**Clear Data**" to remove any potentially problematic cached information. 

#### 2. Restart Your Router or Modem
A problem with your network hardware may be temporary. Unplug your router modem for a few minutes and plug it back in again.

#### 3. Change DNS Server Settings
Switching to a more reliable DNS server often solves DNS resolution problems. Your internet service provider's default DNS servers might experience downtime or performance issues. Google Public DNS, Cloudflare, and OpenDNS offer more stable alternatives that can improve both reliability and browsing speed.

##### Steps to Change DNS on Windows:
1. Open **Control Panel** → **Network and Sharing Center**.
2. Click on your active network → **Properties**.
3. Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**.
4. Use the following DNS server addresses:
   - Google Public DNS: `8.8.8.8` and `8.8.4.4`.

##### Steps to Change DNS on macOS:
1. Go to **System Preferences** → **Network**.
2. Select your active network → **Advanced**.
3. Navigate to the **DNS** tab and add:
   - `8.8.8.8`
   - `8.8.4.4`

#### 4. Flush DNS Cache
Over time, your operating system stores DNS information to speed up future lookups, but this cached data can become outdated or corrupted. Flushing the DNS cache removes these stored entries and forces your system to perform fresh DNS lookups.

##### Flush DNS Cache on Windows:
1. Open Command Prompt as Administrator.
2. Type: `ipconfig /flushdns` and press Enter.

##### Flush DNS Cache on macOS:
1. Open Terminal.
2. Type: `sudo killall -HUP mDNSResponder` and press Enter.

#### 5. Disable VPN or Proxy
DNS setting can be interfered by VPNs or proxies. To see if the error clears up temporarily disable them.

You’re absolutely right; there was redundancy in the previous sections regarding the use of DNS verification tools, particularly the Google DIG Tool. I've consolidated the information to make it more cohesive and readable.

### For Domain Owners

If you’re a domain owner that’s getting the `dns_probe_finished_nxdomain` error, that’s likely because of errors in your domain’s DNS settings. Here's how you can troubleshoot and resolve the issue:

#### 1. Verify Your DNS Records

One fastest way to ensure your domain resolves correctly is to ensure your DNS records are correct. In order for the browser to open the page successfully, the domain has to resolve to an IP address, that is, either an `A` record for IPv4, or an `AAAA` record for IPv6.

- **Use DNS Verification Tools**:
  - {{< link href="https://toolbox.googleapps.com/apps/dig/" >}}Google Dig Tool{{< /link >}}: Provides detailed DNS record information.
  - {{< link href="https://mxtoolbox.com/" >}}MXToolbox{{< /link >}}: Offers a suite of DNS lookup tools.

- **Steps to Use the Google Dig Tool**:

  1. **Access the Tool**: Visit the {{< link href="https://toolbox.googleapps.com/apps/dig/" >}}Google Dig Tool{{< /link >}} in your web browser.
  {{< image "dns_probe_finished_nxdomain/homepage.webp" "Google Dig Homepage" >}}
  2. **Enter Your Domain Name**: In the "Hostnames or IP addresses" field, type your domain name (e.g., `pinggy.io`). Double-check for typos to ensure accuracy.
  3. **Select DNS Record Type**:
     - From the dropdown menu, choose the DNS record type you want to query:
       - **A Record**: Checks IPv4 address mapping.
       - **AAAA Record**: Checks IPv6 address mapping (if applicable).
       - **CNAME Record**: Verifies domain aliases.
       - **MX Record**: Checks mail server configurations.
       > Note: `A` records and `AAAA` records are necessary for the browser to reach the website.
  4. **Analyze the Results**:
     - **Successful Resolution**:
       - The correct DNS records are displayed with expected values.
       - Ensure the IP addresses match those provided by your hosting provider.
       {{< image "dns_probe_finished_nxdomain/search_pinggy_io.webp" "Search Pinggy.io" >}}
     - **Error - NXDOMAIN**:
       - Indicates the domain does not exist in DNS.
       - Suggests missing or incorrect DNS records.
       {{< image "dns_probe_finished_nxdomain/error_page.webp" "Google Dig tool Error Page" >}}

- **What to Look For**:

  - **Accuracy**: Confirm that all IP addresses and domain names are correct.
  - **Existence**: Missing records (like A or AAAA) can cause resolution failures.
  - **Response Codes**: An `NXDOMAIN` response points to potential misconfigurations.

- **Action Steps**:

  - **If Issues Are Found**:
    - Log in to your domain registrar or DNS hosting provider's dashboard.
    - Update or add the necessary DNS records:
      - **A Record**: Should point to your server's correct IPv4 address.
      - **AAAA Record**: If using IPv6, ensure it points to the correct IPv6 address.
    - Save changes. Remember, DNS propagation can take up to 24-48 hours.

#### 2. Check Domain Registration Status

An expired domain won't resolve in DNS lookups, leading to **NXDOMAIN** errors. 

To verify your domain's status, perform a {{< link href="https://whois.domaintools.com/" >}}WHOIS Lookup{{< /link >}} to view its expiration date and current registration status. This search will reveal whether your domain remains active or has been suspended or expired. Even if your domain appears active, consider renewing it immediately through your registrar to prevent any potential expiration issues. Additionally, update your contact and billing information to ensure you receive timely renewal notifications and avoid future registration lapses that could cause service interruptions.

#### 3. Allow Time for DNS Propagation

DNS changes don't take effect instantly across the internet. After modifying DNS settings, propagation typically takes anywhere from a few minutes to 48 hours to spread globally across all DNS servers. During this period, some users may continue to experience the NXDOMAIN error while others can access your site normally, depending on which DNS servers they're using and whether those servers have updated their records.

To monitor propagation status across different geographic regions, use tools like {{< link href="https://dnschecker.org/" >}} DNS Checker {{< /link >}}. This service allows you to track where your updated DNS records have taken effect and which regions are still working with cached data. Understanding the propagation process helps manage expectations during DNS changes and prevents unnecessary troubleshooting when the issue is simply a matter of waiting for updates to spread through the global DNS system.

#### 4. Investigate Issues with Your Registrar

Sometimes the problem originates not with your DNS settings but with the domain registrar. 

Contact your registrar's support team to confirm that your domain is properly configured in their system. Ask them to verify that there are no holds, suspensions, or restrictions applied to your domain that might prevent it from resolving correctly. Registrar-side issues might include payment problems, verification failures, or administrative holds that aren't immediately visible to you as the domain owner but can cause DNS resolution failures for your website visitors.

#### 5. Verify Custom Nameserver Configurations

If you’re using custom nameservers, they must be properly setup.
- **Action Items**:
  - **Check Nameserver Settings**:
    - Check your custom nameservers are correct tied to your domain in your Registrar Dashboard.
  - **Validate Nameserver Functionality**:
    - Confirm that your nameservers are operational and responding to DNS queries.
  - **Verify DNS Records on Nameservers**:
    - Go to your nameserver’s control panel and log in.
    - Make sure you’ve created all DNS records needed (A, AAAA, CNAME, MX).

#### Tools for Verification:

- {{< link href="https://toolbox.googleapps.com/apps/dig/" >}}Google Dig Tool{{< /link >}}: For detailed DNS record lookup.
- {{< link href="https://dnschecker.org/" >}} DNS Checker{{< /link >}}: To verify global DNS propagation.
- {{< link href="https://whois.domaintools.com/" >}}WHOIS Lookup{{< /link >}}: To check domain registration and expiration status.

## How to Fix "dns_probe_finished_nxdomain" in Pinggy Tunnels

### 1. Check Tunnel Status
- Verify that your [Pinggy](https://pinggy.io/) tunnel is active and running.view all active tunnels on the [Pinggy Dashboard](https://dashboard.pinggy.io/activetunnels).

- If the tunnel stops or becomes disabled, the public URL will no longer be accessible, resulting in a DNS error.

**Solution**: Restart the Pinggy tunnel with the same command if needed.
{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\"}}}"
{{</ ssh_command >}}

### 2. Verify Public URL
- Each time you start a tunnel, Pinggy generates a unique public URL (e.g., `https://rnuma-14-139-241-203.a.free.pinggy.link`).
- Ensure you’re using the correct, current URL.

**Solution**: When you start the tunnel with Pinggy, copy the public URL displayed, save it, and use it to access your server. You can also use the QR code of the URL if provided for quick access.

### 3. Check Network Connectivity
- Pinggy may lose connection if your internet is weak or unstable, leading to DNS errors.
- Confirm your internet connection is working and stable.

**Solution**: If you suspect network issues, restart your modem/router or try connecting via a different network for troubleshooting.

## How to Prevent "dns_probe_finished_nxdomain" Errors

- Use reliable DNS servers like Google Public DNS or Cloudflare.
- Regularly clear your browser cache and DNS cache.
- Monitor your domain’s registration and DNS records.

## Conclusion
The “dns_probe_finished_nxdomain” error is annoying, but it’s usually something that’s simple to fix. If you follow this guide’s steps, you will get back online rather quickly and quickly get rid of this problem. Some of these solutions will get you the error order, whatever may be the reason, clearing your cache, changing your DNS servers or even troubleshooting your network.
Have you seen this error? The comments, people, share your experience and how you fixed it!


