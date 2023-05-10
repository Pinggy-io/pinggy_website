---
 title: "Live HTTP Header Modification" 
 date: 2023-05-02T20:00:00+05:30 
 draft: false 
---

# Create an HTTP Tunnel with Live HTTP Header Modification

Pinggy supports live header modification for incoming HTTP(S) requests. It can remove, modify, or add new headers to each request coming through the tunnel.

Headers can be modified via command-line arguments with the ssh command itself. Here's an example to add a new header X-Pinggy-Forwarded: true to incoming requests:
```
ssh -p 443 -R0:localhost:8000 a.pinggy.io a:X-Pinggy-Forwarded:true
```

## Documentation
Pinggy allows users to manipulate headers via the command line. The syntax is as follows:
```
<operation>:<headername>[:<optional value>]
```

Pinggy supports three operations, namely **append (a)**, **remove (r)**, and **update (u)**. Every operation needs one or two sub-arguments. Operations and sub-arguments are separated by a colon `:`. Here are the details about the options:

### Append Header
The append header option (a) adds the given header name and value. It will not remove or modify the existing header with the same name. It requires exactly two sub-arguments. The first sub-argument is the header name, and the second sub-argument is the value for the header. The value can contain spaces and other special characters that are allowed as the header value, including colon `:`. Here are a few examples:

* Add `X-Request-Tag` to identify that the connection came from the Pinggy tunnel:
```
a:X-Request-Tag:pinggy
```

### Remove Header
Pinggy allows live HTTP header removal with the remove (**r**) operation. It removes all the existing (i.e., incoming request header) headers for the given header name. The remove operation can be combined with other operations for the same header name. This operation only takes one sub-argument, i.e., the header name. Here's an example to remove the `Accept` header:
```
r:Accept
```

### Update Header
The update (u) header operation is a combination of the remove header operation and the append header operation. It requires two sub-arguments: the header name and the new value. Here's an example to change the UserAgent header of incoming requests:
```
\"u:UserAgent:PinggyTestServer 1.2.3\"
```
Here we need to escape the `"` because we have space in between the header value.

### The Headername
The first argument is the header name for all three operations. The header name is case-insensitive, but we would recommend using upper camel casing syntax. It cannot contain any spaces or special characters. Read more about header name syntax at the Mozilla documentation.

Kindly note that the `Host` header is very special. It cannot be removed, but only updated. It cannot have multiple values. If one provides multiple values, only the last one will be considered.