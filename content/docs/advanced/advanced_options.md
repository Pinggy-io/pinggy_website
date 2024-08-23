---
 title: "Advanced Options for HTTP(S) tunnels" 
 description: "Allow CORS preflight requests bypass authentication, add X-Forwarded headers, and other advanced settings."
 date: 2023-05-02T20:00:00+05:30 
 draft: false 
---

# Advanced Options for HTTP(S) tunnels

Some advanced options to allow CORS preflight requests bypass authentication, add X-Forwarded headers, etc.


## Reverse proxy mode

For some servers, it is important to have `X-Forwarded-For`, `X-Forwarded-Host`, and `X-Forwarded-Proto` headers to be set. For setting all of them together, you can use the reverse proxy mode. It also sets the SNI to a proper value in case you are connecting to a [local HTTPS server](../../http_tunnels/#connect-to-local-https-server).

You can enable reverse proxy mode with the `x:reverseproxy:HostName` command line argument. Change the `HostName` to the hostname required to connect to your local server, for example `localhost`.


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:reverseproxy:localhost\"}}}"
{{</ ssh_command >}}


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


## Forcefully disconnect existing tunnel and create a new tunnel

By default, trying to connect to establish a tunnel with a token which is already in use by another active tunnel will produce the error "Login is not allowed: A tunnel with the same token (xxYYzzZ) is already active."  

In such cases, in order to terminate the tunnel, you can use the "Terminate" option in "Active Tunnels" page in https://dashboard.pinggy.io/

If you want to programatically disconnect an existing tunnel to forcefully create a new one, you may use the `force` option as follows.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 force@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 force@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 force@a.pinggy.io\"}}}"
{{</ ssh_command >}}

