---
title: "DNS_PROBE_FINISHED_NXDOMAIN: what it is and How to Fix It?"
description: "Encountering the dns_probe_finished_nxdomain error? Learn what it means, why it happens, and how to resolve it with step-by-step solutions. Understand DNS, its role, and prevent future occurrences."
date: 2024-11-11T10:00:00+00:00
draft: false
og_image: "image/dns_probe_finished_nxdomain"
tags: ["dns_probe_finished_nxdomain", "Network troubleshooting", "DNS troubleshooting"]
outputs:
  - HTML
  - AMP
---

If you've faced the **"dns_probe_finished_nxdomain"** error while browsing, you're not alone. This frustrating issue occurs when your browser fails to resolve the domain name of the website you are trying to access. But don’t worry—this article dives deep into what this error means, common causes, and step-by-step fixes.

{{< image "dns_probe_finished_nxdomain/thumbnail.webp" "thumbnail" >}}

{{% tldr %}}

1. **What is dns_probe_finished_nxdomain?**
   - A DNS resolution error where the browser fails to find the domain's IP address, often caused by misconfigured DNS settings, cache issues, or network problems.

2. **How to Fix It?**
   - Clear browser and DNS cache:
     - **Windows**: `ipconfig /flushdns`
     - **macOS**: `sudo killall -HUP mDNSResponder`
   - Change DNS to Google (`8.8.8.8`) or Cloudflare (`1.1.1.1`).
   - Restart your router and ensure your network is stable.

3. **Additional Tips**
   - Disable VPN/proxy if used.
   - Verify domain configuration for owners.
   - Use Google’s DIG tool for DNS debugging.

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
Here are the most effective ways to resolve this error:

### 1. Clear Browser Cache and Cookies
The cached data can sometimes conflict with DNS resolution. Clear your browser cache and cookies:

- **For Chrome:**  
    - Clear Browsing Data can be found under Settings → Privacy and Security.
    - From here select "Cached images and files" and "Cookies."
    - Click "Clear Data."
- **For Other Browsers:** Follow similar steps in the privacy settings.

### 2. Restart Your Router or Modem
A problem with your network hardware may be temporary. Unplug your router modem for a few minutes and plug it back in again.

### 3. Change DNS Server Settings
Usually, switching a DNS server to something like Google Public DNS, Cloudflare, or OpenDNS, solves the problem.

#### Steps to Change DNS on Windows:
1. Open **Control Panel** → **Network and Sharing Center**.
2. Click on your active network → **Properties**.
3. Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**.
4. Use the following DNS server addresses:
   - Google Public DNS: `8.8.8.8` and `8.8.4.4`.

#### Steps to Change DNS on macOS:
1. Go to **System Preferences** → **Network**.
2. Select your active network → **Advanced**.
3. Navigate to the **DNS** tab and add:
   - `8.8.8.8`
   - `8.8.4.4`

### 4. Flush DNS Cache
Clearing the DNS cache can help remove outdated or corrupted entries.

#### Flush DNS Cache on Windows:
1. Open Command Prompt as Administrator.
2. Type: `ipconfig /flushdns` and press Enter.

#### Flush DNS Cache on macOS:
1. Open Terminal.
2. Type: `sudo killall -HUP mDNSResponder` and press Enter.

### 5. Disable VPN or Proxy
DNS setting can be interfered by VPNs or proxies. To see if the error clears up temporarily disable them.

### 6. Verify Domain Configuration (For Domain Owners)
If you’re the domain owner:

- You need to check whether your domain has relevant DNS records.
- Check if your domain registration never expired.


## Using Google’s DIG Tool for DNS Debugging
### 1. Access the DIG Tool
Visit the {{< link href="https://toolbox.googleapps.com/apps/dig/" >}}Google DIG Tool{{< /link >}} in your web browser. The interface is simple, with input fields and options for DNS record queries.

- **How to Access**:  
    - Go to the Google DIG Tool in your web browser. It is simple: input fields, and options for DNS record queries.

### 2. Input Domain Name
This is where you specify the domain you’re troubleshooting.

- **Steps**:
    - In the text input field, type the domain name (e.g., example.com).
    - Ensure there are no typos, as even a small error can lead to incorrect results.
- **Why It’s Important**:
    - This step focuses the query on the specific domain experiencing issues, enabling accurate debugging.

### 3. Select Query Type
The ability to query different kinds of DNS record using the DIG tool from Google gives you the chance to debug what you are trying to.

- **Common DNS Record Types**:  
  - **A Record**: Maps a domain name to an IPv4 address.  
  - **CNAME Record**: Provides aliasing for domain names.  
  - **MX Record**: Used for mail server routing.  
- **Steps**:  
    - Choose from the dropdown menu to select which record type to query. YourA Record is a must for basic troubleshooting and anyone else you need too.

### 4. Analyze Results
The DIG tool displays the query results, which you can analyze to understand the issue.

- **How to Read the Results**:  
    - The results point to valid DNS records if the domain’s DNS are correctly configured.
    - Then if results show "NXDOMAIN" or no records found, that means the DNS records are probably incorrect or are missing.
- **Why It’s Helpful**:  
    - The result of this step is the signaling of whether it’s messed up in the DNS of the domain or not.

### 5. Fix Issues
If a problem is found, afterwards you will need to fix it according on the result.

- **Steps for Domain Owners**:  
    - Enter you’s domain registrar or DNS hosting provider and log in.
    - Update or change DNS records as appropriate.
    - Make sure your DNS records (A, CNAME, etc.) reference the correct IPs or services.
- **Why It’s Useful**:  
    - That makes sure your domain is available and configured correctly.

## How to Fix "dns_probe_finished_nxdomain" in Pinggy Tunnels

### 1. Check Tunnel Status
- Ensure that the pinggy tunnel is running and active:
    - Run the command:
    {{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 a.pinggy.io" >}}
    "{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 a.pinggy.io\"}}}"
    {{</ ssh_command >}}
    **Change 8080 with the port which your local server is using**.

- If the tunnel has been stopped or became disabled due to pinggy tunnel, the URL will become invalid which you will encounter the DNS error.

**Fix**: Restart the Pinggy tunnel using the same or updated command.

### 2. Verify Public URL
- pinggy generates a unique public URL (e.g. https://rnuma-14-139-241-203.a.free.pinggy.link
 ) each time you start a tunnel.
- Double check that the URL you’re using is the right one.
**Fix**: When you run the tunnel using the pinggy CLI, copy the public URL that’s shown, paste it somewhere and retry accessing it in your browser.

### 3. Check Network Connectivity
- If Internet connection is weak or unstable, pinggy might not be able to maintain the tunnel and gets DNS errors.
- Check if your internet is working and stable.
**Fix**: If you aren’t sure it’s being caused by your network, restart your modem/router, or try a different network to test.

## Advanced Troubleshooting
If the above methods don’t work, you can try advanced solutions:

### 1. Use Command-Line Tools
- **Ping** the domain to check connectivity.
- Use `nslookup` to test DNS resolution.
### 2. Inspect Firewall and Antivirus Settings
Sometimes, overly aggressive firewalls or antivirus programs block DNS requests. Temporarily disable them and test.

## How to Prevent "dns_probe_finished_nxdomain" Errors

- Use reliable DNS servers like Google Public DNS or Cloudflare.
- Regularly clear your browser cache and DNS cache.
- Monitor your domain’s registration and DNS records.

## Conclusion
The “dns_probe_finished_nxdomain” error is annoying, but it’s usually something that’s simple to fix. If you follow this guide’s steps, you will get back online rather quickly and quickly get rid of this problem. Some of these solutions will get you the error order, whatever may be the reason, clearing your cache, changing your DNS servers or even troubleshooting your network.

Have you seen this error? The comments, people, share your experience and how you fixed it!


