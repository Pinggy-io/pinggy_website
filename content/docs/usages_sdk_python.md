---
 title: "Pinggy Usage"
 date: 2025-05-26T14:15:25+05:30
 draft: false
---

# Python SDK
Python SDK provides a simple way to interact with the Pinggy API. It allows users to easily setup and use Pinggy tunneling in their Python applications. It is designed to be easy to use and integrate with existing Python codebases.

While Pinggy tunnel over ssh provides a simple and quick way to expose local servers to the Intenet, the Python SDK provides a simpler way to use Pinggy tunneling in a Python application. It also uses a diffirent protocol than the SSH tunnel, which allows it to be more flexible yet powerful tunneling solution.

Python SDK is built on top of the [libpinggy](https://github.com/Pinggy-io/libpinggy) library, which is a C library that provides the core functionality of the Pinggy tunneling protocol. Both the [Python SDK](https://github.com/Pinggy-io/sdk-python) and the [libpinggy](https://github.com/Pinggy-io/libpinggy) library are open source and available on GitHub with an Apache 2.0 license.

## Installation
To install the Pinggy Python SDK, you can use pip:

```bash
pip install pinggy
```

Alternatively, you can clone the repository and install it manually:

```bash
git clone https://github.com/Pinggy-io/sdk-python.git
cd sdk-python
pip install -e .
```

## Quick Start
To get started with the Pinggy Python SDK, you can use the following code snippet to create a simple http tunnel that exposes a local server running on port 80 to the Internet:

```python
import pinggy

tunnel = pinggy.start_tunnel()
print(f"Tunnel started at {tunnel.urls}")
```

To stop the tunnel, you can call the `stop` method on the tunnel object:

```python
tunnel.stop()
```

### Expose local http server running on port 8080
```python
import pinggy
tunnel = pinggy.start_tunnel(forwardto=8080)
print(f"Tunnel started at {tunnel.urls}")
```

### Expose local http server with basic authentication
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    basicauth={"username": "password"}
)
print(f"Tunnel started at {tunnel.urls}")
```

### Expose local http server with bearer authentication
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    bearerauth=["your_bearer_token"]
)
print(f"Tunnel started at {tunnel.urls}")
```
### Expose local http server with header modification
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    headermodification=["r:Accept", "u:User-Agent:PinggyTestServer 1.2.3"]
)
print(f"Tunnel started at {tunnel.urls}")
```
### Expose local http server with IP whitelisting
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    ipwhitelist=["2301::c4f:45c2:57e6:e637:7f1a/128", "23.15.30.223/32"],
    webdebuggerport=4300
)
print(f"Tunnel started at {tunnel.urls}")
```

### Expose local http server with X-Forwarded-For header
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    xff=True
)
print(f"Tunnel started at {tunnel.urls}")
```
### Expose local http server with HTTPS only
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    httpsonly=True
)
print(f"Tunnel started at {tunnel.urls}")
```
### Expose local http server with full request URL
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    fullrequesturl=True
)
print(f"Tunnel started at {tunnel.urls}")
```
### Expose local http server with preflight request support
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    allowpreflight=True
)
print(f"Tunnel started at {tunnel.urls}")
```
### Expose local http server with reverse proxy disabled
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto=8080,
    reverseproxy=False
)
print(f"Tunnel started at {tunnel.urls}")
```

### Expose http server running at local network address 192.168.1.1:8080
```python
import pinggy
tunnel = pinggy.start_tunnel(
    forwardto="192.168.1.1:8080"
)
print(f"Tunnel started at {tunnel.urls}")
```

### Expose remote desktop over pinggy
```python
import pinggy
tunnel = pinggy.start_tunnel(forwardto="localhost:3389", type="tcp")
print(f"Tunnel started at {tunnel.urls}")
```

### Expose ssh server over pinggy
```python
import pinggy
tunnel = pinggy.start_tunnel(forwardto="localhost:22", type="tcp")
print(f"Tunnel started at {tunnel.urls}")
```


## Usage

### `start_tunnel(forwardto: int | str = 80, type: str = 'http', token: str = '', force: bool = False, ipwhitelist: list[str] | str | None = None, basicauth: dict[str, str] | None = None, bearerauth: list[str] | str | None = None, headermodification: list[str] | None = None, webdebuggerport: int = 0, xff: bool = False, httpsonly: bool = False, fullrequesturl: bool = False, allowpreflight: bool = False, reverseproxy: bool = True, serveraddress: str = 'a.pinggy.io:443')`

Start a tunnel inside a new thread and get reference to the tunnel.

**Arguments**:
- **forwardto**: address of local server. Only port can be provided incase of local server. Example: 80, "localhost:80".

    type: Type of the tunnel. values can be one of `http`, `tcp`, `tls`, `tlstcp`. `http` is the default value.

    token: User token. Get it from https://dashboard.pinggy.io

    force: enable of disable force flag. Enabling it would cause to stop any existing tunnel with same token.

    ipwhitelist: list of ipaddresses that are allowed to connect to the tunnel. Example: ["2301::c4f:45c2:57e6:e637:7f1a/128","23.15.30.223/32"].
                Be carefull about the ipv6 syntax

    basicauth: dictionary of username:password. This dictionary be used for basic authentication. Example: {"hello": "world"}

    bearerauth: list of keys that would be used for bearer key authentication. Both basicauth and bearerauth can be used together.
                Example: ["1234"]

    headermodification: list of header modification that would be added. More detail at https://pinggy.io/docs/advanced/live_header/
                Example: ["r:Accept", "u:UserAgent:PinggyTestServer 1.2.3"]

    webdebuggerport: Webdebugging port. Webdebugging would start only if valid port is provided. Example: 4300

    xff: With this flag, pinggy adds `X-Forwarded-For` with the request header.

    httpsonly: This flag make sure that the visitor uses only the https. Any request to http would the redirected to https url.

    fullrequesturl: Pinggy server adds the original url that is requested in a header `X-Pinggy-Url ` with the request.

    allowpreflight: With this flag, pinggy detects and allow preflight request without processing so that the server can handle it.

    reverseproxy: Pinggy by default runs in reverse proxy mode. However, it can be turned off by setting this flag `False`

    serveraddress: User can set the server address to which pinggy would connect. Default: `a.pinggy.io:443`.

### `start_udptunnel(forwardto: int | str, token: str = '', force: bool = False, ipwhitelist: list[str] | str | None = None, webdebuggerport: int = 4300, serveraddress: str = 'a.pinggy.io:443')`

Start an udp tunnel inside a new thread and get reference to the tunnel.

**Arguments**:
- **forwardto**: address of local server. Only port can be provided incase of local server. Example: 53, "localhost:53".

    token: User token. Get it from https://dashboard.pinggy.io

    force: enable of disable force flag. Enabling it would cause to stop any existing tunnel with same token.

    ipwhitelist: list of ipaddresses that are allowed to connect to the tunnel. Example: ["2301::c4f:45c2:57e6:e637:7f1a/128","23.15.30.223/32"].

    webdebuggerport: Webdebugging port. Webdebugging would start only if valid port is provided. Example: 4300

    serveraddress: User can set the server address to which pinggy would connect. Default: `a.pinggy.io:443`.
