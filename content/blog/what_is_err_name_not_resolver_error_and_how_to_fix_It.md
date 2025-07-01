---
title: "What Is ERR_NAME_NOT_RESOLVED Error And How To Fix It"
description: "Learn about the ERR_NAME_NOT_RESOLVED error, its causes, and detailed step-by-step solutions to fix it, including clearing DNS cache and changing DNS servers."
date: 2025-04-03T14:00:00+05:30
draft: false
tags: ["DNS", "Error Fix", "ERR_NAME_NOT_RESOLVED", "Troubleshooting", "Web Development"]
og_image: "images/what_is_err_name_not_resolver_error_and_how_to_fix_it/err_name_not_resolver_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiRml4IEVSUl9OQU1FX05PVF9SRVNPTFZFRCBFcnJvciIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byByZXNvbHZlIHRoZSBFUlJfTkFNRV9OT1RfUkVTT0xWRUQgZXJyb3IsIGluY2x1ZGluZyBjaGVja2luZyBVUkwsIHJlc3RhcnRpbmcgcm91dGVyLCBjbGVhcmluZyBETlMgY2FjaGUsIGFuZCBtb3JlLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEb3VibGUgQ2hlY2sgdGhlIFVSTCIsCiAgICAgICJ0ZXh0IjogIkNhcmVmdWxseSByZXZpZXcgdGhlIHdlYnNpdGUgYWRkcmVzcyBmb3IgYW55IHR5cG9zLCBhZGRpdGlvbmFsIHNwYWNlcywgb3IgY2hhcmFjdGVycy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IEROUyBSZXNvbHV0aW9uIiwKICAgICAgInRleHQiOiAiQ2hlY2sgd2hldGhlciB5b3VyIGRldmljZSBjYW4gcmVzb2x2ZSBkb21haW4gbmFtZXMgdG8gSVAgYWRkcmVzc2VzIGJ5IHRlc3RpbmcgZGlmZmVyZW50IHdlYnNpdGVzIG9yIHVzaW5nIEROUyBkaWFnbm9zdGljIHRvb2xzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbGVhciBETlMgQ2FjaGUiLAogICAgICAidGV4dCI6ICJGbHVzaCB5b3VyIEROUyBjYWNoZSB0byByZW1vdmUgb3V0ZGF0ZWQgaW5mb3JtYXRpb24gdGhhdCBtaWdodCBjYXVzZSB0aGUgZXJyb3IuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoYW5nZSBETlMgU2VydmVycyIsCiAgICAgICJ0ZXh0IjogIlN3aXRjaCB0byByZWxpYWJsZSBETlMgc2VydmVycyBsaWtlIEdvb2dsZSBETlMgb3IgQ2xvdWRmbGFyZSBETlMgZm9yIGltcHJvdmVkIHJlc29sdXRpb24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsZWFyIEJyb3dzZXIgQ2FjaGUgYW5kIENvb2tpZXMiLAogICAgICAidGV4dCI6ICJDbGVhciB5b3VyIGJyb3dzZXLigJlzIGNhY2hlIGFuZCBjb29raWVzIHRvIHJlbW92ZSBwb3RlbnRpYWxseSBwcm9ibGVtYXRpYyBkYXRhLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEaXNhYmxlIEJyb3dzZXIgUHJlZGljdGlvbiBTZXJ2aWNlcyIsCiAgICAgICJ0ZXh0IjogIkRpc2FibGUgcHJlbG9hZGluZyBhbmQgcHJlZGljdGlvbiBzZXJ2aWNlcyBpbiB5b3VyIGJyb3dzZXIgc2V0dGluZ3MgdG8gcmVzb2x2ZSBwb3RlbnRpYWwgY29uZmxpY3RzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDaGVjayBZb3VyIEZpcmV3YWxsIGFuZCBBbnRpdmlydXMgU2V0dGluZ3MiLAogICAgICAidGV4dCI6ICJUZW1wb3JhcmlseSBkaXNhYmxlIGZpcmV3YWxsIG9yIGFudGl2aXJ1cyB0byBjaGVjayBpZiB0aGV5IGFyZSBibG9ja2luZyBETlMgdHJhZmZpYy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IFlvdXIgSG9zdHMgRmlsZSIsCiAgICAgICJ0ZXh0IjogIkVuc3VyZSB5b3VyIHN5c3RlbeKAmXMgaG9zdHMgZmlsZSBkb2VzIG5vdCBjb250YWluIGluY29ycmVjdCBkb21haW4gbWFwcGluZ3MgdGhhdCBibG9jayBhY2Nlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVzZSBuc2xvb2t1cCBvciBkaWcgQ29tbWFuZCIsCiAgICAgICJ0ZXh0IjogIlJ1biAnbnNsb29rdXAgZXhhbXBsZS5jb20nIG9yICdkaWcgZXhhbXBsZS5jb20nIGluIHlvdXIgdGVybWluYWwgb3IgY29tbWFuZCBwcm9tcHQgdG8gY2hlY2sgaWYgRE5TIGlzIHJlc29sdmluZyBjb3JyZWN0bHkuIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/err_name_not_resolver_banner.webp" "err_name_not_resolver_banner" >}}

Encountering the `ERR_NAME_NOT_RESOLVED` error can be frustrating and disruptive, particularly when you're trying to access an important or urgent website. This error is displayed by browsers such as {{< link href="https://www.google.com/chrome/dr/download/" >}}Chrome{{< /link >}}, {{< link href="https://www.mozilla.org/en-US/firefox/windows/" >}}Firefox{{< /link >}}, and {{< link href="https://www.microsoft.com/en-us/edge/download?form=MA13FJ" >}}Edge{{< /link >}} when the Domain Name System (DNS) fails to translate a domain name into its corresponding Internet Protocol (IP) address. DNS is a fundamental service that translates human-friendly website addresses (URLs) into numerical IP addresses that computers understand. When DNS resolution fails, browsers can't establish a connection, resulting in the `ERR_NAME_NOT_RESOLVED` error.


{{% tldr %}}

1. **Double Check the URL**  
   - Make sure there are no typos, spaces, or extra characters in the website address.

Here's a cleaner, manager-style summary of that point:

2. **Verify DNS Resolution via Command Line**  
- Use command-line tools to ensure DNS is working properly:

   - **Windows:**  
  `nslookup example.com`, `ping example.com`, or `Resolve-DnsName example.com` (PowerShell)

   - **Linux/macOS:**  
  `dig example.com`, `nslookup example.com`, `host example.com`, or `ping example.com`

   These commands help quickly identify DNS or connectivity issues.

3. **Clear DNS Cache**  
   - Flush your DNS cache to remove outdated data.  
     - **Windows**: `ipconfig /flushdns`  
     - **macOS**: `sudo dscacheutil -flushcache`
4. **Change DNS Servers**  
   - Switch to Google DNS or Cloudflare DNS for faster and more reliable resolution.  
     - Google DNS: `8.8.8.8` and `8.8.4.4`
5. **Clear Browser Cache and Cookies**  
   - Clear your browser’s cache and cookies to fix DNS issues caused by stored data.
6. **Disable Browser Prediction Services**  
   - Disable Chrome’s "Preload pages" setting to prevent interference with DNS.
7. **Check Your Firewall and Antivirus Settings**  
   - Temporarily disable firewall/antivirus to check if they're blocking DNS queries.
8. **Verify Your Hosts File**  
   - Ensure there are no incorrect entries in your system’s hosts file.
{{% /tldr %}}

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/error_flowchat.png" "FlowChat" >}}


## What Causes ERR_NAME_NOT_RESOLVED?

The `ERR_NAME_NOT_RESOLVED` error can occur due to several common reasons, each impacting your browsing experience differently:

1. **Incorrect URL**: One of the simplest and most frequent causes is an incorrect website URL. This includes typos, misspellings, unnecessary spaces, or accidental additional characters that lead to domain resolution failure.

2. **DNS Server Issues**: If your DNS server is temporarily down, slow, or experiencing technical issues, it cannot process DNS requests efficiently, resulting in resolution failures and the `ERR_NAME_NOT_RESOLVED` error.

3. **DNS Cache Problems**: Your operating system and browser store previously resolved domain names to speed up future access. However, this cache can become outdated or corrupted, causing the DNS to resolve to incorrect IP addresses and leading to errors.

4. **Misconfigured Network Settings**: Incorrect or outdated DNS server settings on your device can disrupt the proper functioning of DNS queries. If your system attempts to connect to an inactive or misconfigured DNS server, you will encounter resolution problems.

5. **Firewall or Antivirus Restrictions**: Security software such as firewalls, antivirus, or network security tools can inadvertently block DNS queries. This usually happens when these tools are overly restrictive or misconfigured, mistakenly identifying legitimate DNS requests as harmful activities, thus blocking access to certain websites.

### Step-by-Step Solutions to Fix ERR_NAME_NOT_RESOLVED

#### 1. Double Check the URL
Before diving into technical fixes, ensure the website address you’ve typed is correct. A simple typo in the domain name or an extra space can cause the browser to fail in resolving the site. Even an unnoticed mistake like `.co` instead of `.com` or a misplaced character can trigger this error.

**Solution**: Carefully check the URL for any errors or unnecessary spaces. If possible, try accessing the website using a different device to verify that the issue is not due to a typo.

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/pinggy_site_ss.webp" "Url Check ScreenShot" >}}

#### 2. **Verify DNS Resolution**  
   - Check if DNS resolution is functioning correctly by querying it from the command line:

     **Windows (Command Prompt or PowerShell):**
     - Using `nslookup`:
       ```sh
       nslookup example.com
       ```
     - Using `ping` (for basic resolution):
       ```sh
       ping example.com
       ```
     - Using `Resolve-DnsName` (PowerShell only):
       ```powershell
       Resolve-DnsName example.com
       ```

     **Linux/Mac (Terminal):**
     - Using `dig` (most detailed):
       ```sh
       dig example.com
       ```
     - Using `nslookup`:
       ```sh
       nslookup example.com
       ```
     - Using `host`:
       ```sh
       host example.com
       ```
     - Using `ping` (for basic resolution):
       ```sh
       ping example.com
       ```

   These commands help confirm whether DNS resolution is functioning correctly and can identify if the issue lies with DNS settings or connectivity.

   If DNS lookup is successful, the output will display the resolved IP address of the domain (e.g., `Name: example.com Address: 93.184.216.34`).

  If DNS lookup fails, the output will indicate an error such as `Non-existent domain`, `NXDOMAIN`, or `connection timed out; no servers could be reached`.

#### 3. Clear DNS Cache
Your computer stores DNS information in a local cache to speed up future visits to websites. However, if this cache becomes outdated or corrupt, it can cause the `ERR_NAME_NOT_RESOLVED` error. Clearing the DNS cache forces your device to obtain fresh DNS information from your DNS server.

**Solution**:
- **Windows**:
  1. Press `Windows + R` to open the Run dialog.
  2. Type `cmd` and hit Enter to open Command Prompt.
  3. Type `ipconfig /flushdns` and press Enter to clear the DNS cache.
- **macOS**:
  1. Open Terminal (use Spotlight to search for it).
  2. Type `sudo dscacheutil -flushcache` and press Enter.
  3. You may be asked to enter your administrator password.

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/terminal_ss.webp" "Clear DNS Cache" >}}

After clearing the cache, retry visiting the website.

#### 4. Change DNS Servers
If the default DNS server you are using is slow or unreliable, switching to a different, more reliable DNS provider can help resolve the issue. {{< link href="https://developers.google.com/speed/public-dns" >}}Google DNS{{< /link >}} and {{< link href="https://www.cloudflare.com/en-gb/application-services/products/dns/" >}}Cloudflare DNS{{< /link >}} are popular choices that often provide faster and more reliable service.

**Solution**:
- **Windows**:
  1. Go to Control Panel > Network and Internet > Network Connections.
  2. Right-click on your active network connection, then click Properties.
  3. Choose "Internet Protocol Version 4 (TCP/IPv4)" and click Properties.
  4. Select "Use the following DNS server addresses" and enter:
     - Preferred DNS server: `8.8.8.8` (Google DNS)
     - Alternate DNS server: `8.8.4.4` (Google DNS)
- **macOS**:
  1. Go to System Preferences > Network.
  2. Select your active network connection (Wi-Fi or Ethernet), then click Advanced.
  3. Go to the DNS tab and click the `+` button to add:
     - `8.8.8.8` (Google DNS)
     - `8.8.4.4` (Google DNS)

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/wifi_ss.webp" "Change DNS Servers" >}}

This change forces your device to use a new DNS provider for resolving domain names.

#### 5. Clear Browser Cache and Cookies
Your browser’s cache and cookies can sometimes interfere with DNS resolution. Clearing the cache can help resolve any issues caused by outdated or corrupt files.

**Solution**:
- Open your browser settings, go to Privacy or History settings, and clear browsing data, including cached images, cookies, and other site data.
- Restart your browser and try to visit the website again.

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/cached_file_clean.webp" "Clear Browser Cache and Cookies" >}}


#### 6. Disable Browser Prediction Services
Browsers like {{< link href="https://www.google.com/chrome/dr/download/" >}}Chrome{{< /link >}} use predictive algorithms to preload pages, which can sometimes interfere with DNS resolution. Disabling these services might resolve the error.

**Solution**:
1. Open Chrome and go to Settings.
2. Navigate to Privacy and Security.
3. Disable the option "Preload pages for faster browsing and searching."

Disabling this setting can stop {{< link href="https://www.google.com/chrome/dr/download/" >}}Chrome{{< /link >}} from attempting to pre-resolve websites that might conflict with DNS settings.

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/perload_pages.webp" "Disable Browser Prediction Services" >}}

#### 7. Check Your Firewall and Antivirus Settings
In some cases, your firewall or antivirus software might block DNS queries, causing the error. Disabling your firewall or antivirus temporarily can help determine if they are the cause.

**Solution**:
- Temporarily disable your firewall or antivirus software.
- If the website loads, adjust your firewall or antivirus settings to allow DNS queries, or whitelist the website you're trying to access.

Make sure to enable your firewall or antivirus again after troubleshooting.

#### 8. Verify Your Hosts File
The hosts file on your computer contains mappings of IP addresses to domain names. If there are incorrect entries in this file, it could block access to certain websites.

**Solution**:
- **Windows**:
  1. Open File Explorer and navigate to `C:\Windows\System32\drivers\etc\hosts`.
  2. Open the file in a text editor (e.g., Notepad).
  3. Remove or correct any incorrect entries.
- **macOS**:
  1. Open Terminal and type `sudo nano /etc/hosts`.
  2. Review the file and remove any incorrect mappings.
  3. Save the file and exit (press `CTRL + X`, then `Y` to confirm, and `Enter`).

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/etc_host_terminal.webp" "Verify Your Hosts File" >}}

Once the hosts file is corrected, try reloading the website.

### Step 1: Launch Your Foundry VTT Server Locally

To begin, ensure your Foundry VTT instance is running on your local machine. By default, Foundry operates on port `30000`.

1. **Start the Foundry VTT Application**  
   Launch the Foundry VTT application as you normally would.

2. **Check Local Network Access**  
   Navigate to `Game > Access > Local Network` within the Foundry interface. Here, you’ll see the local network address where Foundry is running, such as:

   ```bash
   http://10.123.1.136:30000
   ```

3. **Verify the Server is Running**  
   Open your web browser and go to:

   ```bash
   http://localhost:30000
   ```

   If everything is set up correctly, you should see the Foundry VTT login page or welcome screen.

## How to Prevent ERR_NAME_NOT_RESOLVED Errors in the Future

### Regularly Update Software and Drivers
Keep your browser and network drivers updated to ensure compatibility and stability.

### Use Reliable DNS Services
Consider using reputable DNS providers like Google DNS (`8.8.8.8`, `8.8.4.4`) or Cloudflare DNS (`1.1.1.1`) for reliable performance and better security.

### Periodically Clear DNS Cache
Regularly clearing your DNS cache prevents outdated information from causing connectivity issues.

### Maintain Proper Security Settings
Regularly review your firewall and antivirus configurations to prevent accidental blocking of legitimate DNS queries.

## Recommended Tools
- **Cloudflare DNS (1.1.1.1)**: A fast, secure, and privacy-focused DNS resolution service.
- **Google DNS (8.8.8.8, 8.8.4.4)**: Widely used and reliable DNS solution.
- **DNS Jumper**: An easy-to-use tool that helps quickly switch between DNS providers, improving browsing speed and reliability.

By following these comprehensive steps, you'll effectively resolve and prevent `ERR_NAME_NOT_RESOLVED` errors, ensuring smooth and uninterrupted internet browsing.

## Fixing ERR_NAME_NOT_RESOLVED Errors for Pinggy URLs

[Pinggy](https://pinggy.io) dynamically assigns [DNS records](https://pinggy.io/blog/scaling_across_multiple_regions/) when a tunnel is created. This means that if your browser queries the URL before the tunnel is fully set up, you may encounter the `ERR_NAME_NOT_RESOLVED` error. However, the Time-To-Live (TTL) for Pinggy's DNS records is only 10 seconds. As a result, after waiting for around 10 to 15 seconds, refreshing the page should resolve the issue and allow the URL to load successfully.


### Conclusion
The `ERR_NAME_NOT_RESOLVED` error can be caused by a variety of factors, from simple typing mistakes to more complex network or DNS configuration problems. By following the above step-by-step troubleshooting methods, you can resolve most issues and get back to browsing without interruptions.