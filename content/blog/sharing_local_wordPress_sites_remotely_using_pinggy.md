---
title: "Sharing Local WordPress Sites Remotely Using Pinggy"
description: "Easily share your Local WordPress sites online with Pinggy. This guide covers the steps to securely share LocalWP setups for collaboration and remote access with minimal setup."
date: 2024-11-01T10:00:00+05:30
draft: false
tags: ["WordPress", "Pinggy", "LocalWP", "guide", "tunneling", "remote access"]
og_image: "/blog_img/wordpress_pinggy/share_wordpress_online.webp"
outputs:
  - HTML
  - AMP
---

{{< image "sharing_local_wordPress_sites_remotely_using_pinggy/thumbnail.webp" "How to Easily Share ComfyUI Online" >}}

Developing a local WordPress site is a standard workflow for many web developers, but sharing a live preview with clients or collaborating in real-time can be challenging without complex network configurations or open ports. That's where **Pinggy**, a simple and lightweight tool for sharing local WordPress sites, steps in. Pinggy, which works seamlessly with **LocalWP by Flywheel**, allows you to tunnel your site so it can be accessed remotely without hassle. In this tutorial, you’ll learn how to use Pinggy to maximize your local WordPress setup.

## Why Use Pinggy for Local WordPress Site Sharing?

Pinggy provides secure, encrypted tunnels to access local sites from outside your network without needing VPNs or firewall changes. It’s especially useful for developers working with **LocalWP by Flywheel**, as it addresses common challenges like reverse proxying, secure connections, and mixed content handling. Pinggy simplifies remote access to local WordPress setups, making it an invaluable tool for developers building and testing sites.

## Prerequisites

To get started with Pinggy for local WordPress site sharing, you’ll need the following:

1. **LocalWP by Flywheel**: This tool installs a local WordPress environment on your computer, allowing you to develop and test websites even when offline.
2. **Pinggy Account**: Sign up with Pinggy to access the tunneling service.
3. **Pinggy Client**: Install the Pinggy client on your local machine to create a secure tunnel.

With these tools, you’re ready to leverage Pinggy’s powerful tunneling capabilities to enhance your local WordPress development workflow.


# Setting Up Pinggy for LocalWP

Pinggy enables users to securely publish their LocalWP setup, providing remote access and control over their WordPress site from any location. Follow the steps below to configure Pinggy for LocalWP, with screenshots provided for added clarity.

## Step 1: Launch Your LocalWP Site

Open **LocalWP by Flywheel** and select your WordPress site. Click the **"Start Site"** button to launch the site. Once the site is running, note down the internal address (e.g., `testping.local`), as this will be necessary for configuring Pinggy.

📸 **Screenshot Suggestion**: Display the LocalWP dashboard with the local WordPress site running, highlighting the site URL.

## Step 2: Open Command Prompt and Enter the Pinggy Command

Next, open your terminal to create a Pinggy tunnel, mapping your LocalWP site to a remote address accessible over the Internet. Replace `testping.local` with the actual local site address in LocalWP.

```bash
ssh -p 443 -L4300:localhost:4300 -o StrictHostKeyChecking=no -o ServerAliveInterval=30 -t -R0:testping.local:80 a.pinggy.io u:Host:testping.local x:reverseproxy:testping.local
```

This command establishes a secure SSL connection from your local server to Pinggy's server, making the site available for remote access.

### Explanation of the Command Parameters

- **-p 443**: Uses port 443 (commonly open for HTTPS) to allow secure tunneling.
- **-L4300:localhost:4300**: Specifies a local port (4300 in this example) for connecting to your local site.
- **-o StrictHostKeyChecking=no**: Disables strict host key checking, simplifying setup.
- **-o ServerAliveInterval=30**: Sends pings every 30 seconds to keep the connection alive and prevent timeouts.
- **-t**: Forces a pseudo-terminal, allowing for interactive command execution if required.
- **-R0:testping.local:80**: Configures reverse tunneling from `testping.local` on port 80, crucial for LocalWP.
- **a.pinggy.io**: Pinggy's remote server, which hosts the tunnel.
- **u:Host:testping.local**: Sets the host header on the remote server to match your local address.
- **x:reverseproxy:testping.local**: Enables reverse proxy mode, which helps handle site headers and hostnames for local WordPress installations.

With Pinggy, accessing your LocalWP WordPress site remotely becomes seamless, allowing you to showcase your work or collaborate with ease.



# Setting Up Remote Access for LocalWP Using Pinggy

Pinggy allows users to remotely access their LocalWP site as if it were hosted on an actual server. Below, you'll find the steps to access your LocalWP site via Pinggy, along with troubleshooting tips for common issues.

## 📸 Screenshot Suggestion

A screenshot here would show the terminal with the Pinggy command initiated, along with the output confirming that the tunnel is live.

## Step 3: Remotely Access Your LocalWP Site

Once the Pinggy tunnel is live, you can access your LocalWP site from anywhere using the URL generated by Pinggy.

1. Open a web browser.
2. Enter the Pinggy URL provided in the terminal output (e.g., `https://a.pinggy.io/unique-tunnel-id`).
3. Your locally developed WordPress site should now appear as though it’s hosted on a live server.

📸 **Screenshot Suggestion**: Show the browser with the Pinggy URL, displaying the local WordPress site accessed through Pinggy’s URL.

## Troubleshooting Common Issues

As with any tool, there may be occasional issues when using Pinggy with LocalWP. Here are some common problems and solutions.

### 1. Mixed Content Issues

When your site loads over HTTPS but some resources (such as images or scripts) load over HTTP, you might see mixed content warnings. This can disrupt asset loading and impact the appearance of the site.

- **Solution**: Use the HTTPS version of your Pinggy URL, or ensure all links on your WordPress site use HTTPS. You can update this in WordPress by adjusting the **WordPress URL** and **Site URL** settings to use HTTPS.

### 2. Site Not Loading Assets

This issue often stems from misconfigured headers or incorrect site addresses.

- **Solution**: Check the host header setting in your Pinggy command (e.g., `u:Host:testping.local`) and confirm it matches the local site address.

### 3. LocalWP Port Conflicts

LocalWP commonly defaults to port 80, which can occasionally lead to conflicts.

- **Solution**: In LocalWP, specify a unique port for the site. Update the Pinggy command to use the new port.

By following these steps and troubleshooting tips, you can efficiently set up and manage remote access for your LocalWP WordPress site using Pinggy.

# Additional Tips for Smooth Functioning

Here are some additional recommendations to prevent issues when working with Pinggy and LocalWP:

- **Use HTTPS Server Setting**: If your local server is running via HTTPS, enable the **Connect to HTTPS Server** option in Pinggy to prevent certificate errors.
- **Enable Reverse Proxy Mode**: This setting is particularly useful for LocalWP, as it adjusts the hostname and routes requests correctly to the local server.
- **Adjust Headers**: If the site requires a specific hostname in the request, update the headers accordingly to include the correct hostname.

## Advantages of Using Pinggy with LocalWP

- **Remote Access**: Pinggy enables you to navigate your local sites from any location, eliminating the need for complex network configurations.
- **Client Collaboration**: With Pinggy, you can showcase your development progress to clients or teammates without deploying to a live site.
- **Enhanced Security**: Pinggy provides secure tunneling that protects your local server from unauthorized access.

## Quick Hack

If you encounter connectivity issues, add the `ServerAliveInterval=10` option to your Pinggy command. This sends a "heartbeat" every 10 seconds to keep the session active and helps avoid timeouts, which is especially useful during extended development sessions.

Pinggy simplifies the sharing of LocalWP sites, allowing developers to receive real-time feedback, collaborate, and test efficiently.
