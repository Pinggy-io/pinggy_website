---
 title: "Live HTTP Header Modification" 
 date: 2023-05-02T20:00:00+05:30 
 draft: true 
---

# Create a HTTP tunnel with live HTTP header modification

Pinggy support live header modification for the incoming HTTP(S) request. It can remove, modify or add new headers to each request comming through the tunnel.

Header can be modified via the command line argument with the ssh command itself. Here goes an example to add a new header `X-Pinggy-Forwarded: true` to incomming requests.
```
ssh -p 443 -R0:localhost:8000 a.pinggy.io a:X-Pinggy-Forwarded:true
```

## Documentation
Pinggy allow users to manipulate headers via commandline. the syntax is as follows
```
<operation>:<headername>[:<optional value>]
```

Pinggy supports three operations, namely **append (a)**, **remove(r)** and **update(u)**. Every operations needs one or two sub-arguments. Operations and sub-arguments are seperated by a colon `:`. Here goes the details about the options:

### Append Header
Append header option (a) add the given headername and value. It will not remove or modify the existing header with same name. It requires exactly two sub-aguments. First sub-argument is the header name. Second sub-argument is the value for the header. The value can contain `space` and other special characters which are allowed as the header value including colon `:`. Here goes few examples:

* Add X-Request-Tag to identify that the connection came from pinggy tunnel 
```
a:X-Request-Tag:pinggy
```

### Remove Header
Pinggy allow live HTTP header removal with remove (r) operation. It remove all the existing (i.e. incoming request header) headers for the given headername. The remove operation can be combind with other operation for same header name. This operation only takes one sub-argument i.e. the header name. Here goes an example to remove `Accept` header:
```
r:Accept
```

### Update Header
Update (u) header operation is combination of remove header operation and append header operation. It require two sub-argument. These are headername and the new value. Here goes and example to change UserAgent header of incoming request.
```
\"u:UserAgent:PinggyTestServer 1.2.3\"
```

### The Header
The first argument is the headername for all three operations. The headername is case insentive, how we would recomend to use upper cammel casing syntax. it cannot contain any space or special character. Read more about headername syntax at mozilla documentation.

Kindly note that the `Host` header is very special. It can not be removed but only update. It cannot have multiple value. If one provide multiple values, only last one will considered.
