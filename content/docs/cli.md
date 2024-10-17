---
 title: "Pinggy CLI" 
 description: "Robust HTTP, TCP, UDP, or TLS tunnels to localhost for sharing your apps, websites and games."
 date: 2024-10-15T14:15:25+05:30 
 draft: false 
---

# Pinggy CLI

Pinggy Command Line Tool provides more robust tunnels with quicker reconnections when your tunnels are interrupted.


## Download

You can download Pinggy CLI from {{< link href="/cli" >}}here{{</ link >}}. Pinggy CLI is available for Windows, Mac, and Linux.


## Getting Started

Before starting the tunnel, you need to navigate to the directory where the Pinggy CLI is installed. You can start the tunnel by running the following command:

```
./pinggy <options>
```

**Pinggy CLI supports the same options supported by our SSH command. You can customize the command on our {{< link href="/" >}}home page{{</ link >}}.**

**Example:**

```
./pinggy -p 443 -R0:localhost:3000 -L4300:localhost:4300
```

This will start the tunnel that forwards connections to local port 3000. It also starts the web debugger on port 4300.


**Pinggy CLI also supports more user friendly options to set up simple tunnels.**

**Example:**

```
./pinggy --l https://localhost:443
```

This will start the tunnel that forwards connections to a local **HTTPS** server running on `localhost:443`.

**Example:**

```
./pinggy --type tcp -l 8000
```

This will start a TCP tunnel to local port `8000`.


### Pinggy CLI specific options


Pinggy's CLI allows you to configure the tunnel with various user friendly options. Here is a list of options available for the Pinggy CLI:

**Type** : `--type`

Specify the type of tunnel you want to create. The available options are `http`,`tcp`,`tls`,`udp` and `tlstcp`. If nothing is specified, the default type is `http`.

```
--type <type>
```

**Local Port** : `--localport` OR `-l`

Specify the local port along with host and protocol(if present) to forward the tunnel to. The default is `localhost`.

```
--localport <protocol><host>:<port>
```

For example:
```
--localport django_server:8000

--localport https://my.domain:445

-l 777
```

**Debugger Port** : `--debugger` OR `-d`

Specify the port on which the web debugger will run.

```
--debugger <port>
```

**Token** : `--token`

Provide the token for authentication.

```
--token <token>
```


## All Options

**Help** : `--help` OR `-h`

Shows the list of options and arguments available for Pinggy CLI.


**Pinggy Server Port** : `-p`

```
-p 443
```
Connect to Pinggy server on `443`.


**Localport** : `-R`

```
-R0:localhost:3000
```
Forward tunnel connections to local port `3000`.


**Web Debugger port** : `-L`

```
-L4300:localhost:4300
```
Will start web debugger on port `4300`.


**Save Configuration** : `--saveconf <filename>`

```
<previous options> --saveconf <filename>
```
Save the command as a configuration file. This configuration file can be later used to start a tunnel with the same settings.


**Load Configuration** : `--conf <filename>`

```
--conf <filename>
```
Load a previously saved configuration file. Other options can be entered to override the settings in this file.


**Options** : `-o`

```
-o <option>
```

Set additional options for the tunnel.


**Version** : `--v`

Display the version of Pinggy CLI.


**Log** : `--log`

```
--log <filename>
```
Save the logs of the current session to a file.


**Type of connection** : `type@a.pinggy.io`

By default, the connection type is HTTP. You can change the connection type to TCP, TLS, UDP or TLSTCP.

For each type of connection, the prefix is as follows:

TCP : `tcp@`

TLS : `tls@`

UDP : `udp@`

TLSTCP : `tlstcp@`

Example:

```
tcp@a.pinggy.io
```


**Region** :

Automatic region allocation : ` a.pinggy.io`

Asia : `ap.a.pinggy.io`

Europe : `eu.a.pinggy.io`

USA : `us.a.pinggy.io`


**IP Whitelist** : `-w: <IP in CIDR format>`

Both IPv4 and IPv6 addresses can be added to the whitelist. Multiple addresses can be added by separating them with a comma:

```
-w:<IP 1 in CIDR format>,<IP 2 in CIDR format>
```


**Using Pinggy Token** :

You can use your Pinggy token as follows:

```
<token>@a.pinggy.io
```

If you want to use a prefix or multiple prefixes, you can use the following format:

```
<token>+<prefix1>+<prefix2>@a.pinggy.io
```


**Basic Authentication** : `b:<username>:<password>`

You can use basic authentication by adding the username and password to the argument.

Multiple usernames and passwords can be added by repeating the argument:

```
b:<username1>:<password1> b:<username2>:<password2>
```


**Key Authentication** : `k:<key>`

You can use bearer token authentication by adding the key to the argument:

```
k:<key>
```

**Header Manipulation** :

***Add Header*** : `a:<header>:<value>`

You can add headers to the requests by using this argument.

Example:

```
a:header1:value1 a:header2:value2
```

***Remove Header*** : `r:<header>`

You can remove headers from the requests by using this argument.

Example:

```
r:header1 r:header2
```

***Update Header*** : `u:<header>:<value>`

You can update headers in the requests by using this argument.

Example:

```
u:header1:value1 u:header2:value2
```

**HTTPS only** : `x:https` OR `x:httpsonly`

This argument will only allow HTTPS requests through the tunnel. HTTP requests will be redirected to HTTPS.


**Reverse Proxy** : `x:reverseproxy:<hostname>`

This argument will set up Pinggy in reverse proxy mode for the specified hostname.

Example:

```
x:reverseproxy:localhost
```

**TLS connection** : `x:localserverTls:<local server name(SNI)>`

This argument will set up a TLS connection for the specified local server name running locally.

Example:

```
x:localserverTls:localhost
```

**X-Forwarded-For** : `x:xff[:<header name>]`

X-Forwarded-For is a mechanism to finding out the source of the connection. You can use this argument to add the X-Forwarded-For header to the request.

Example:

```
x:xff:my_header
```

**Original Request URL** : `x:fullurl` OR `x:origurl`

This argument will add the original request URL to the request headers.


**Pass CORS Preflight** : `x:passpreflight`

Pinggy by default processes the request and response headers. However, it might be a problem for preflight requests. Pinggy can detect preflight requests and pass them without modification. You can use this argument to pass preflight requests.


**QR code** : `qr@a.pinggy.io`

You can generate a QR code for the connection.

Unicode QR is generated using the `qr@` prefix.

ASCII QR is generated using the `aqr@` prefix.

Along with token, you can use this as:

```
<token>+qr@a.pinggy.io
```

**Force disconnect and connect new tunnel** : `force@a.pinggy.io`

By default, trying to connect to establish a tunnel with a token which is already in use by another active tunnel will produce the error “Login is not allowed: A tunnel with the same token `<token>` is already active.”

If you want to programatically disconnect an existing tunnel to forcefully create a new one, you may use the force option.

Example with token:

```
<token>+force@a.pinggy.io
```