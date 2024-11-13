---
title: "DNS_PROBE_FINISHED_NXDOMAIN: What it is and How to fix it"
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

1. **What is `dns_probe_finished_nxdomain`?**  
   This error occurs when a domain's DNS (Domain Name System) fails to resolve, preventing your browser from locating the domain’s IP address.  
   - **For Normal Users**: It’s often caused by browser cache issues, DNS misconfigurations, or network problems.  
   - **For Domain Owners**: It indicates issues like missing or incorrect DNS records, expired domains, or registrar misconfigurations.  

2. **How to Fix It?**  
   - **For Normal Users**:  
     - Clear browser and DNS cache:  
       - **Windows**: `ipconfig /flushdns`  
       - **macOS**: `sudo killall -HUP mDNSResponder`  
     - Change DNS to Google (`8.8.8.8`) or Cloudflare (`1.1.1.1`).  
     - Restart your router and check your internet connection.  
     - Detailed steps [here](#for-normal-users).  
   - **For Domain Owners**:  
     - Verify DNS records (A, AAAA) using tools like Google Dig Tool.
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
This error happens most often because your DNS (Domain Name System) cannot resolve the domain name into an IP address. For **normal users** and **domain owners**, I provide some solutions.

### For Normal Users
#### 1. Clear Browser Cache and Cookies
The cached data can sometimes conflict with DNS resolution. Clear your browser cache and cookies:

- **For Chrome:**  
    - Clear Browsing Data can be found under Settings → Privacy and Security.
    - From here select "Cached images and files" and "Cookies."
    - Click "Clear Data."
- **For Other Browsers:** Follow similar steps in the privacy settings.

#### 2. Restart Your Router or Modem
A problem with your network hardware may be temporary. Unplug your router modem for a few minutes and plug it back in again.

#### 3. Change DNS Server Settings
Usually, switching a DNS server to something like Google Public DNS, Cloudflare, or OpenDNS, solves the problem.

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
Remove outdated or incorrect DNS entries.

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

One fastest way to ensure your domain resolves correctly is to ensure your DNS records are correct.

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

An expired domain won't resolve, leading to DNS errors.

- **How to Check**:
  - Perform a {{< link href="https://whois.domaintools.com/" >}}WHOIS Lookup{{< /link >}} to view your domain's expiration date and registration status.
  - Ensure your domain is active and not suspended or expired.

- **Next Steps**:
    - Regardless, renew your domain registration right away through your registrar.
    - Change contact and billing information in case there’s a lapse in the future.

#### 3. Allow Time for DNS Propagation

Changes to DNS settings aren't instantaneous.

- **Understanding Propagation**:
  - DNS can take anywhere from a few mins, a few hours, up to 48 hours to spread globally.
  - During this period of time, some users will continue to face the error.

- **Monitoring Tools**:
  - Use {{< link href="https://dnschecker.org/" >}} DNS Checker {{< /link >}} to track propagation status across different regions.
  - This helps you see where the updated DNS records have taken effect.

#### 4. Investigate Issues with Your Registrar

Sometimes, the problem isn't with your DNS settings but with the registrar.

- **Steps to Take**:
  - Contact your domain registrar's support team.
  - Confirm that your domain is properly configured on their end.
  - Ensure there are no holds, suspensions, or restrictions on your domain.

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
- Verify that your [Pinggy](https://pinggy.io/) tunnel is active and running.view all active tunnels on the [Pinggy Dashboard](https://dashboard.pinggy.io/activetunnels)..

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


