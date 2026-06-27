---
 title: "HAProxy PROXY Protocol with TCP Tunnel"
 description: "Enable the HAProxy PROXY protocol on Pinggy TCP tunnels so the target web server receives the PROXY protocol header. Supports PROXY protocol v1 and v2 on all TCP connections."
 date: 2024-12-07T01:15:25+05:30
 draft: false
---

# HAProxy PROXY Protocol

When you forward traffic to an upstream TCP service, the connection arrives from Pinggy, so your service won't see the client's original IP address. The <a href="https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt" target="_blank">PROXY protocol</a> adds a header to connections to your upstream service, passing along connection details like the original client IP. You will need to configure your upstream service to handle the PROXY protocol header.

Pinggy supports the HAProxy PROXY protocol, where the target web server is an HAProxy server. It can be enabled via `x:haproxy[:v2]`. Pinggy supports both version 1 and version 2. As of now, it is applicable for all TCP connections, irrespective of tunnel type.

To enable HAProxy v1, use `x:haproxy` or `x:haproxy:v1`:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy\"}}}"
{{</ ssh_command >}}

To enable HAProxy v2, use `x:haproxy:v2`:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tcp@free.pinggy.io x:haproxy:v2\"}}}"
{{</ ssh_command >}}
