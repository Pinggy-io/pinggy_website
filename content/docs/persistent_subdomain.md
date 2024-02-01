---
 title: "Persistent Subdomain" 
 description: "Enjoy a stable, persistent subdomain with Pinggy Pro. Simplify URL management for seamless and secure access. Upgrade now for a hassle-free experience."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Persistent Subdomain

If you want a URL that does not change every time you create a new tunnel, you just need to <a target="_blank" href="https://pinggy.io/#prices">upgrade to Pinggy Pro.</a>.

Once you sign in, you will be presented a dashboard where you will find your access token.

Example:

```
b0b87d56-653f-45fb-98d9-8e43779c9081
```

You will also find your persistent subdomain in the dashboard.

![Pinggy dashboard](/doc_img/pinggy_dashboard.jpg)

Command to start a tunnel to port `8000` and with token `b0b87d56-653f-45fb-98d9-8e43779c9081`:
<br>

```
ssh -p 443 -R0:localhost:8000 b0b87d56-653f-45fb-98d9-8e43779c9081@a.pinggy.io
```

_Replace `8000` with the port where your service is running_.

_Replace `b0b87d56-653f-45fb-98d9-8e43779c9081` with your own token from the dashboard._
