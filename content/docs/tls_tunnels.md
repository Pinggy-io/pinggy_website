---
 title: "HTTP / HTTPS Tunnels" 
 date: 2023-01-10T14:15:25+05:30 
 draft: true 
---

# Create TCP Tunnels with Pinggy


You need to <a target="_blank" href="https://pinggy.io/#prices">sign in to Pinggy</a> to create TCP tunnels.

Once you sign in, you will be presented a dashboard where you will find your access token.

Example:
```
b0b87d56-653f-45fb-98d9-8e43779c9081
```

Create a tunnel using a single command.


Command to start a tunnel to port `8000` and with token `b0b87d56-653f-45fb-98d9-8e43779c9081`:
<br>
```
ssh -p 443 -R0:localhost:8000 b0b87d56-653f-45fb-98d9-8e43779c9081+tcp@a.pinggy.io
```

*Replace `8000` with the port where your service is running*.

*Replace `b0b87d56-653f-45fb-98d9-8e43779c9081` with your own token from the dashboard.*

