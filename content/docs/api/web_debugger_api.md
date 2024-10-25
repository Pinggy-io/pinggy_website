---
 title: "Pinggy APIs" 
 description: "Get tunnel URLs and access web debugger using APIs"
 date: 2024-09-10T14:15:25+05:30 
 draft: false 
---

# Pinggy API

Pinggy tunnels provide some handy APIs through its Web Debugger for programmatic access to tunnel URLs and other information.

To access these APIs, the Web Debugger needs to be enabled. Example:



```bash
ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 a.pinggy.io
```

Here, the port `4300` can be changed to any port where the Web Debugger will be listening.


## Get the list of URLs / addresses

To get a list of tunnel URLs / addresses, simply send a GET request to `http://localhost:4300/urls`

```bash
curl http://localhost:4300/urls
```

Sample output:
```json
{
  "urls": [
    "http://rnckk-2405-201-9018-a834-e551-ccf2-398f-130d.a.free.pinggy.link",
    "https://rnckk-2405-201-9018-a834-e551-ccf2-398f-130d.a.free.pinggy.link"
  ]
}
```

This also works for TCP, TLS, TLSTCP, and UDP tunnels.

## Get IP whitelist

Pinggy supports [whitelisting IP addresses](/docs/http_tunnels/ip_whitelist/) to allow access to the tunnel only from those addresses. Example:


```bash
ssh -p 443 -L4300:localhost:4300 -t -R0:localhost:8000 tcp@a.pinggy.io \"w:2205:213:9013:a835:e552:ccf2:398f:1234/128,56.3.51.0/24\"
```

To get the list of whitelisted IP addresses, simply send a GET request to `http://localhost:4300/ipwhitelist`

```bash
curl http://localhost:4300/ipwhitelist
```

Sample output:
```json
[
  "2205:213:9013:a835:e552:ccf2:398f:1234/128",
  "56.3.51.0/24"
]
```

This also works for TCP, TLS, TLSTCP, and UDP tunnels.



