---
 title: "Persistent Subdomain" 
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Persistent Subdomain


If you want a URL that does not change every time you create a new tunnel, you just need to <a target="_blank" href="http://dashboard.pinggy.io">Sign in</a> to Pinggy dashboard.

Once you sign in, you will be presented a dashboard where you will find your access token.

Example:
```
b0b87d56-653f-45fb-98d9-8e43779c9081
```

You will also find your persistent subdomain in the dashboard.

![Pinggy dashboard](/doc_img/pinggy_dashboard.jpg)

Create a tunnel either using the ssh command or the Pinggy client.

## Using ssh

Command to start a tunnel to port `8000` and with token `b0b87d56-653f-45fb-98d9-8e43779c9081`:
<br>
```
ssh -p 7878 -R0:localhost:8000 b0b87d56-653f-45fb-98d9-8e43779c9081@a.pinggy.io
```

*Replace `8000` with the port where your service is running*.

*Replace `b0b87d56-653f-45fb-98d9-8e43779c9081` with your own token from the dashboard.*


## Using Pinggy client

<a href="https://pinggy.io/download/" target="_blank">Download</a> the Pinggy client for your platform (Mac, Linux, Windows).

Make sure the downloaded binary is executable using `chmod +x pinggy_mac_univ`. Replace `pinggy_mac_univ` with the filename that you downloaded.

To start a tunnel on port `8000` and with token `b0b87d56-653f-45fb-98d9-8e43779c9081` use the command:

```
./pinggy_mac_univ -p 8000 -t b0b87d56-653f-45fb-98d9-8e43779c9081
```

*Replace `8000` with the port where your service is running in localhost.*

*Replace `b0b87d56-653f-45fb-98d9-8e43779c9081` with your own token from the dashboard.*
