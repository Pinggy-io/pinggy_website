---
 title: "Persistent Subdomain" 
 description: "Get a stable, persistent subdomain with Pinggy Pro. Simplify URL management for seamless and secure access. Upgrade now for a hassle-free experience."
 date: 2023-01-10T14:15:25+05:30
 lastmod: 2024-09-20T14:15:25+05:30
 draft: false 
---

# Persistent Subdomain

Pinggy assigns random URLs for **free** tunnels, such as `rnskg-21-24-129-38.a.free.pinggy.link`.

If you want a URL that does not change every time you create a new tunnel, you need to <a target="_blank" href="https://pinggy.io/#prices">upgrade to Pinggy Pro</a>.

Once you have upgraded to Pinggy Pro, log in to <a target="_blank" href="https://dashboard.pinggy.io/">dashboard.pinggy.io</a>. In the dashboard, you will find your access token.


Example:

{{< ssh_command text="xGBTh6cy58q" >}}
"{}"
{{</ ssh_command >}}


The dashboard will also contain commands to start a tunnel using your token. A simple example Pinggy command using your token is as follows:

```bash
ssh -p 443 -R0:localhost:8000 xGBTh6cy58q@pro.pinggy.io
```

# Configure Persistent Subdomain


In order to configure your persistent subdomain, first visit  <a href="https://dashboard.pinggy.io/domains" target="_blank">dashboard.pinggy.io/domains</a>.

- You will find a list of access tokens and persistent domains.  
- To edit a subdomain, click the **edit** icon next to the domain card, make your changes, and save the persistent subdomain.  
- To use a persistent subdomain, **drag it to assign it to a token**.  
- Then, use that token to start a tunnel.

> Note that if you have already configured a custom domain for your token, you will need to delete the custom domain configuration first in order to change the subdomain.

![List of subdomains for Pinggy](/doc_img/subdomain/subdomain1.png)

![Edit persistent subdomain for Pinggy](/doc_img/subdomain/subdomain2.png)

![Drag persistent subdomain to assign it to a token.](/doc_img/subdomain/subdomain3.png)

![List of subdomains assigned to a token](/doc_img/subdomain/subdomain4.png)

