---
 title: "Advanced Options for HTTP(S) tunnels" 
 description: "Allow CORS preflight requests bypass authentication, add X-Forwarded headers, and other advanced settings."
 date: 2023-05-02T20:00:00+05:30 
 draft: false 
---

# Advanced Options for HTTP(S) tunnels

Some advanced options to allow CORS preflight requests bypass authentication, add X-Forwarded headers, etc.


## Forcefully disconnect existing tunnel and create a new tunnel

By default, trying to connect to establish a tunnel with a token which is already in use by another active tunnel will produce the error "Login is not allowed: A tunnel with the same token (xxYYzzZ) is already active."  

In such cases, in order to terminate the tunnel, you can use the "Terminate" option in "Active Tunnels" page in https://dashboard.pinggy.io/

If you want to programatically disconnect an existing tunnel to forcefully create a new one, you may use the `force` option as follows.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 force@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 force@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\"}}}"
{{</ ssh_command >}}



## Disable Reverse proxy mode

By default Pinggy acts as a reverse proxy for HTTP(S) tunnels. This means it adds `X-Forwarded-For`, `X-Forwarded-Proto`, `X-Forwarded-Host`, and `Forwarded` headers in the http requests.


To disable reverse proxy mode, pass the argument `x:noreverseproxy`, and Pinggy will not add these headers.


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:noreverseproxy\"}}}"
{{</ ssh_command >}}



## Add X-Forwarded-For header to every request

`X-Forwarded-For` is a mechanism to finding out the source (IP and Port) of the connection. If you turn of reverse proxy mode, Pinggy HTTP(S) tunnel does not implicitly add the this flag. However, user can enable `X-Forwarded-For` header with `x:xff` command line argument.


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"}}}"
{{</ ssh_command >}}

If you want to change the header name from `X-Forwarded-For` to something custom such as `Source-Address`, you can also do so using the argument: `x:xff:Source-Address`.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"}}}"
{{</ ssh_command >}}


## Changing Host header

Some servers do not respond correctly if the Host header value does not match its expected value. Pinggy by default keeps the Host header unchanged, and its value will usually be the Pinggy subdomain, or the custom domain configured by you. To modify the Host header, use the `u:Host:<host>` argument. For example:


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t a.pinggy.io u:Host:example.com\"}}}"
{{</ ssh_command >}}

Read more about [live header modification](../live_header/).

## Allow CORS preflight requests

By default, enabling key authentication / password authentication will block all unauthenticated requests to Pinggy URLs. But sometimes the CORS preflight requests are required to be sent through to enable CORS. In those cases you can use the `x:passpreflight` argument.

Pinggy allows users to manipulate headers via the command line. The syntax is as follows:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"}}}"
{{</ ssh_command >}}

