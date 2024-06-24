---
 title: "Advanced Options for HTTP(S) tunnels" 
 description: "Allow CORS preflight requests bypass authentication, add X-Forwarded headers, and other advanced settings."
 date: 2023-05-02T20:00:00+05:30 
 draft: false 
---

# Advanced Options for HTTP(S) tunnels

Some advanced options to allow CORS preflight requests bypass authentication, add X-Forwarded headers, etc.

## Add X-Forwarded-For header to every request

`X-Forwarded-For` is a mechanism to finding out the source (IP and Port) of the connection. Pinggy HTTP(S) tunnel does not implicitly add the this flag. However, user can enable `X-Forwarded-For` header with `x:xff` command line argument.


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff\"}}}"
{{</ ssh_command >}}

If you want to change the header name from `X-Forwarded-For` to something custom such as `Source-Address`, you can also do so using the argument: `x:xff:Source-Address`.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:xff:Source-Address\"}}}"
{{</ ssh_command >}}

## Allow CORS preflight requests

By default, enabling key authentication / password authentication will block all unauthenticated requests to Pinggy URLs. But sometimes the CORS preflight requests are required to be sent through to enable CORS. In those cases you can use the `x:passpreflight` argument.

Pinggy allows users to manipulate headers via the command line. The syntax is as follows:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:passpreflight\"}}}"
{{</ ssh_command >}}