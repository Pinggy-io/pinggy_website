---
title: "What Is ERR_NAME_NOT_RESOLVED Error And How To Fix It"
description: "Learn about the ERR_NAME_NOT_RESOLVED error, its causes, and detailed step-by-step solutions to fix it, including clearing DNS cache and changing DNS servers."
date: 2025-04-03T14:00:00+05:30
lastmod: 2025-07-26T12:15:25+05:30
draft: false
tags: ["DNS", "Error Fix", "ERR_NAME_NOT_RESOLVED", "Troubleshooting", "Web Development"]
og_image: "images/what_is_err_name_not_resolver_error_and_how_to_fix_it/err_name_not_resolver_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiRml4IEVSUl9OQU1FX05PVF9SRVNPTFZFRCBFcnJvciIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byByZXNvbHZlIHRoZSBFUlJfTkFNRV9OT1RfUkVTT0xWRUQgZXJyb3IsIGluY2x1ZGluZyBjaGVja2luZyBVUkwsIHJlc3RhcnRpbmcgcm91dGVyLCBjbGVhcmluZyBETlMgY2FjaGUsIGFuZCBtb3JlLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEb3VibGUgQ2hlY2sgdGhlIFVSTCIsCiAgICAgICJ0ZXh0IjogIkNhcmVmdWxseSByZXZpZXcgdGhlIHdlYnNpdGUgYWRkcmVzcyBmb3IgYW55IHR5cG9zLCBhZGRpdGlvbmFsIHNwYWNlcywgb3IgY2hhcmFjdGVycy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IEROUyBSZXNvbHV0aW9uIiwKICAgICAgInRleHQiOiAiQ2hlY2sgd2hldGhlciB5b3VyIGRldmljZSBjYW4gcmVzb2x2ZSBkb21haW4gbmFtZXMgdG8gSVAgYWRkcmVzc2VzIGJ5IHRlc3RpbmcgZGlmZmVyZW50IHdlYnNpdGVzIG9yIHVzaW5nIEROUyBkaWFnbm9zdGljIHRvb2xzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbGVhciBETlMgQ2FjaGUiLAogICAgICAidGV4dCI6ICJGbHVzaCB5b3VyIEROUyBjYWNoZSB0byByZW1vdmUgb3V0ZGF0ZWQgaW5mb3JtYXRpb24gdGhhdCBtaWdodCBjYXVzZSB0aGUgZXJyb3IuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoYW5nZSBETlMgU2VydmVycyIsCiAgICAgICJ0ZXh0IjogIlN3aXRjaCB0byByZWxpYWJsZSBETlMgc2VydmVycyBsaWtlIEdvb2dsZSBETlMgb3IgQ2xvdWRmbGFyZSBETlMgZm9yIGltcHJvdmVkIHJlc29sdXRpb24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsZWFyIEJyb3dzZXIgQ2FjaGUgYW5kIENvb2tpZXMiLAogICAgICAidGV4dCI6ICJDbGVhciB5b3VyIGJyb3dzZXLigJlzIGNhY2hlIGFuZCBjb29raWVzIHRvIHJlbW92ZSBwb3RlbnRpYWxseSBwcm9ibGVtYXRpYyBkYXRhLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEaXNhYmxlIEJyb3dzZXIgUHJlZGljdGlvbiBTZXJ2aWNlcyIsCiAgICAgICJ0ZXh0IjogIkRpc2FibGUgcHJlbG9hZGluZyBhbmQgcHJlZGljdGlvbiBzZXJ2aWNlcyBpbiB5b3VyIGJyb3dzZXIgc2V0dGluZ3MgdG8gcmVzb2x2ZSBwb3RlbnRpYWwgY29uZmxpY3RzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDaGVjayBZb3VyIEZpcmV3YWxsIGFuZCBBbnRpdmlydXMgU2V0dGluZ3MiLAogICAgICAidGV4dCI6ICJUZW1wb3JhcmlseSBkaXNhYmxlIGZpcmV3YWxsIG9yIGFudGl2aXJ1cyB0byBjaGVjayBpZiB0aGV5IGFyZSBibG9ja2luZyBETlMgdHJhZmZpYy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IFlvdXIgSG9zdHMgRmlsZSIsCiAgICAgICJ0ZXh0IjogIkVuc3VyZSB5b3VyIHN5c3RlbeKAmXMgaG9zdHMgZmlsZSBkb2VzIG5vdCBjb250YWluIGluY29ycmVjdCBkb21haW4gbWFwcGluZ3MgdGhhdCBibG9jayBhY2Nlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVzZSBuc2xvb2t1cCBvciBkaWcgQ29tbWFuZCIsCiAgICAgICJ0ZXh0IjogIlJ1biAnbnNsb29rdXAgZXhhbXBsZS5jb20nIG9yICdkaWcgZXhhbXBsZS5jb20nIGluIHlvdXIgdGVybWluYWwgb3IgY29tbWFuZCBwcm9tcHQgdG8gY2hlY2sgaWYgRE5TIGlzIHJlc29sdmluZyBjb3JyZWN0bHkuIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/err_name_not_resolver_banner.webp" "err_name_not_resolver_banner" >}}

The `ERR_NAME_NOT_RESOLVED` error is one of those frustrating roadblocks that can stop your development workflow dead in its tracks. Whether you're testing a local application, debugging API endpoints, or simply browsing the web, this DNS resolution failure can appear in {{< link href="https://www.google.com/chrome/dr/download/" >}}Chrome{{< /link >}}, {{< link href="https://www.mozilla.org/en-US/firefox/windows/" >}}Firefox{{< /link >}}, and {{< link href="https://www.microsoft.com/en-us/edge/download?form=MA13FJ" >}}Edge{{< /link >}} when your browser can't translate a domain name into its corresponding IP address.

As developers, we know that DNS (Domain Name System) acts as the internet's phonebook, converting human-readable domain names into machine-readable IP addresses. When this translation process fails, your browser throws the `ERR_NAME_NOT_RESOLVED` error, leaving you unable to reach your destination.


{{% tldr %}}

1. **Double Check the URL**  
   - Make sure there are no typos, spaces, or extra characters in the website address.
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

Understanding the root causes helps you troubleshoot more effectively. Here are the most common culprits behind this DNS resolution error:

**Incorrect URL or Domain Name** - Simple typos, extra spaces, or wrong TLD extensions (`.com` vs `.co`) are surprisingly common. Even developers can miss these when quickly typing URLs during testing.

**DNS Server Problems** - Your configured DNS server might be experiencing downtime, high latency, or configuration issues. ISP-provided DNS servers are particularly prone to these problems.

**Stale DNS Cache** - Both your operating system and browser cache DNS lookups to improve performance. When these caches contain outdated information, they can prevent successful resolution of updated domain records.

**Network Configuration Issues** - Misconfigured DNS settings, incorrect network adapter configurations, or problems with your router's DNS forwarding can all trigger this error.

**Security Software Interference** - Overzealous firewalls, antivirus programs, or network security tools may block legitimate DNS queries, especially when they're configured with strict security policies.

**Hosts File Conflicts** - Manual entries in your system's hosts file can override DNS resolution, potentially blocking access to specific domains if configured incorrectly.

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

### 3. Clear DNS Cache

DNS caching improves performance by storing recent lookups, but stale cache entries can cause resolution failures. When you're developing and testing with frequently changing DNS records, clearing the cache is often necessary.

**Windows:**
```bash
# Open Command Prompt as Administrator and run:
ipconfig /flushdns

# Verify the cache was cleared:
ipconfig /displaydns
```

**macOS:**
```bash
# Clear DNS cache (requires admin password):
sudo dscacheutil -flushcache

# For older macOS versions, you might need:
sudo killall -HUP mDNSResponder
```

**Linux:**
```bash
# For systemd-resolved (Ubuntu 18.04+):
sudo systemd-resolve --flush-caches

# For older systems with nscd:
sudo service nscd restart
```

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/terminal_ss.webp" "Clear DNS Cache" >}}

**Pro tip**: If you're frequently switching between development environments, consider scripting these commands for quick cache clearing.

### 4. Switch to Reliable DNS Servers

Your ISP's default DNS servers might be slow, unreliable, or experiencing outages. Switching to public DNS providers often resolves these issues and can improve overall browsing performance.

**Recommended DNS Providers:**
- **{{< link href="https://developers.google.com/speed/public-dns" >}}Google DNS{{< /link >}}**: `8.8.8.8` and `8.8.4.4`
- **{{< link href="https://www.cloudflare.com/dns/" >}}Cloudflare DNS{{< /link >}}**: `1.1.1.1` and `1.0.0.1`
- **Quad9**: `9.9.9.9` and `149.112.112.112` (security-focused)

**Quick DNS Change via Command Line:**

**Windows (PowerShell as Administrator):**
```powershell
# Set DNS to Cloudflare
netsh interface ip set dns "Wi-Fi" static 1.1.1.1
netsh interface ip add dns "Wi-Fi" 1.0.0.1 index=2

# Or use Google DNS
netsh interface ip set dns "Wi-Fi" static 8.8.8.8
netsh interface ip add dns "Wi-Fi" 8.8.4.4 index=2
```

**macOS/Linux:**
```bash
# Temporarily test with different DNS (doesn't persist)
dig @1.1.1.1 example.com
dig @8.8.8.8 example.com
```

{{< image "what_is_err_name_not_resolver_error_and_how_to_fix_it/wifi_ss.webp" "Change DNS Servers" >}}

**For permanent changes**, use your system's network settings GUI or modify `/etc/resolv.conf` on Linux systems.

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

## Advanced DNS Troubleshooting for Developers

### Using dig for Detailed DNS Analysis

The `dig` command provides comprehensive DNS information that's invaluable for debugging:

```bash
# Basic A record lookup
dig example.com

# Query specific DNS server
dig @8.8.8.8 example.com

# Get all DNS record types
dig example.com ANY

# Trace the full DNS resolution path
dig +trace example.com

# Check reverse DNS lookup
dig -x 93.184.216.34
```

### DNS Propagation Testing

When you've recently changed DNS records, test propagation across different servers:

```bash
# Test multiple DNS servers
for server in 8.8.8.8 1.1.1.1 9.9.9.9; do
  echo "Testing $server:"
  dig @$server example.com +short
done
```

### Browser-Specific DNS Issues

**Chrome DNS Cache**: Chrome maintains its own DNS cache. Clear it by visiting:
```
chrome://net-internals/#dns
```
Click "Clear host cache" to flush Chrome's internal DNS cache.

**Firefox DNS Cache**: Disable DNS caching in Firefox for development:
1. Go to `about:config`
2. Set `network.dnsCacheExpiration` to `0`

### Network-Level Debugging

Check if the issue is network-specific:

```bash
# Test from different network interfaces
ping -I eth0 example.com
ping -I wlan0 example.com

# Check routing table
route -n  # Linux
netstat -rn  # macOS/BSD
```

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

## Prevention and Best Practices for Developers

### Use Reliable DNS Infrastructure

For production environments, avoid relying on ISP-provided DNS servers. Instead, configure your systems to use enterprise-grade DNS providers:

- **{{< link href="https://www.cloudflare.com/dns/" >}}Cloudflare DNS{{< /link >}}**: `1.1.1.1` and `1.0.0.1` (fastest response times)
- **{{< link href="https://developers.google.com/speed/public-dns" >}}Google DNS{{< /link >}}**: `8.8.8.8` and `8.8.4.4` (reliable and widely supported)
- **Quad9**: `9.9.9.9` (security-focused with malware blocking)

### Development Environment Tips

**Local Development**: When working with local services, consider using `.local` domains or editing your hosts file for consistent resolution:

```bash
# Add to /etc/hosts (Linux/macOS) or C:\Windows\System32\drivers\etc\hosts (Windows)
127.0.0.1 myapp.local
127.0.0.1 api.myapp.local
```

**Docker Development**: Use Docker's internal DNS resolution for container-to-container communication instead of relying on external DNS.

### Monitoring and Automation

Set up DNS monitoring for critical domains and automate cache clearing in your deployment scripts:

```bash
#!/bin/bash
# Example deployment script snippet
echo "Clearing DNS cache..."
sudo systemd-resolve --flush-caches
echo "DNS cache cleared"
```

## Developer Tools and Resources

- **{{< link href="https://www.cloudflare.com/dns/" >}}Cloudflare DNS{{< /link >}}**: Fast, privacy-focused DNS with excellent uptime
- **{{< link href="https://developers.google.com/speed/public-dns" >}}Google Public DNS{{< /link >}}**: Reliable DNS service with global infrastructure
- **dig/nslookup**: Essential command-line tools for DNS troubleshooting
- **Browser DevTools**: Network tab for monitoring DNS resolution timing

## Special Case: Dynamic DNS Services

When working with dynamic DNS services like {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}, you might encounter `ERR_NAME_NOT_RESOLVED` errors due to DNS propagation delays. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} dynamically assigns {{< link href="https://pinggy.io/blog/scaling_across_multiple_regions/" >}}DNS records{{< /link >}} when tunnels are created, which can cause temporary resolution failures.

**Solution for Dynamic DNS**: Wait 10-15 seconds after tunnel creation before accessing the URL, as the TTL (Time-To-Live) for these records is typically very short.

## Conclusion
The `ERR_NAME_NOT_RESOLVED` error can be caused by a variety of factors, from simple typing mistakes to more complex network or DNS configuration problems. By following the above step-by-step troubleshooting methods, you can resolve most issues and get back to browsing without interruptions.