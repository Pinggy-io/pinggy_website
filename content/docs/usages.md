---
 title: "Pinggy Usage" 
 date: 2023-08-19T14:15:25+05:30 
 draft: false 
---


{{< figure src="/doc_img/tunnel.png" alt="Tunnel" >}}

# Usages

Pinggy use reverse tunneling feature provided by secure-shell (`ssh`) program. One can use any `ssh` program as long as it provides reverse tunneling feature. However, we recomend using `openssh` whenever possible.

Pinggy utilizes different features of the `ssh` protocol to provides different features like web debug, header manipulation, authentication etc.
We directly use the options provided by the `ssh` command to set the tunnel and enable the live debugging.
Tunnel token and few keywords are sent as username. Few command line options to set configure other options.

Lets start with basic ssh options:

## ssh usages
Detailed usages are available in `ssh` man page at <https://man.openbsd.org/ssh>

```
ssh -p443 -R0:<localhost>:<localport> [<token/keyword/tunneltype>@]a.pinggy.io <remote options>
```

<table markdown="1">
<tr><td colspan=2>
-R remoteport:localaddress:localport
</td><tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>
Expose a local service running on localaddress:localport to remoteport. There are multiple variation of reverse tunneling.

Pinggy ignore the remote port and assign a domain name and port as per the subscription and tunnel type.
</td></tr>

<tr><td colspan=2>
-p port
</td><tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td>

Remote server port. By default `ssh` servers listen on port 22. However, pinggy server listen on 443 to overcome firewall restriction in some system. So, use `-p443` while connecting to a pinggy server.
</td></tr>

<tr><td>&nbsp</td></tr>
<tr><td colspan=2>
-t
</td><tr markdown="1">
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td markdown="1">

Force pseudo terminal allocation. By default `ssh` command request for pseudo-termal as long as there is no `remote option` provided.

Pinggy usages pseudo terminal to provide rich interface like this.
{{< figure src="/doc_img/pinggy_rich_cli.png" alt="Rich cli" >}}
One can disable rich cli using `-T`
</td></tr>

<tr><td>&nbsp</td></tr>
<tr><td colspan=2>
-T
</td><tr markdown="1">
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td markdown="1">
Disable pseudo terminal. Pinggy does works without pseudo terminal and provides basic information.
</td></tr>

<tr><td>&nbsp</td></tr>
<tr><td colspan=2>
-N
</td><tr markdown="1">
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td markdown="1">
Disable remote command execution. 

By default `ssh` command ask ssh server to run remote command if provided or ask to run shell on remote. User can modify this behavior based using this flag.

Pinggy uses remote command execution to enable advanced functionalities including web-debugging, header manipulations and many more.
</td></tr>

<tr><td>&nbsp</td></tr>
<tr><td colspan=2>
-L <localport>:localhost:4300
</td><tr markdown="1">
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td markdown="1">

Enable local forwarding. It enable `ssh` client to listen on `localport` and forward incoming  connection to remote port.

Pinggy only allow to forward to port 4300. This provides remote debugging webui.
</td></tr>
</table>

## Username to ssh
Pinggy does not require any username or authentication to start the tunnel as it does not provide any access to the server. However, this informations are goes to server before `ssh` could start a connection. So, we use username to send tunnel `token` and other keyword to the server. `token` can be found in <dashboard.pinggy.io>. `token` and keywords are seperated by `+`. Pinggy have following keywords:

#### 1. http/tcp/tls/tlstcp
These keywords sets the tunnel type. The default tunnel is `http` type.
##### a) http
Http tunnel works only with http server. Pinggy provides link for bothe `http` and `https`, however, it terminates `https` traffic at server and read it to provide live debugging and other functionalities. Any `http` tunnel comes with following functionalities.
* Live Header Manipulation
* Basic Authentication
* Key Authentication
* IP White Listing
More about this functionalities later.

Basic `http` tunnel can be started using
```
ssh -R0:localhost:<localport> a.pinggy.io
```
##### b) tcp
`tcp` tunnel is the simplest form of tunnels. It simply forward incoming data without any kind of processing. `tcp` tunnel also provide a server port. All the `tcp` tunnel also comes with *IP White Listing* functionality.

Basic `tcp` tunnel can be started using
```
ssh -R0:localhost:<localport> tcp@a.pinggy.io
```
##### c) tls
`tls` tunnel is equivalen to `tcp` tunnel with only one exception. Server only forward ssl traffic comming to 443 port at the server. The server rely on `Server Name Indication` or `SNI` to do the forwarding. However, the server does not try to terminate the ssl trafic, rather it forward the incoming traffic as it is to the tunnel.

Basic `tls` tunnel can be started using
```
ssh -R0:localhost:<localport> tls@a.pinggy.io
```

**`tls` tunnel is the most secure tunnel as the pinggy server cannot look in to it. One should consider this if he/she have wants to very sensitive tunnel.**

##### d) tlstcp
`tlstcp` tunnel is a `tcp` tunnel with a option to `tls` wrapper for the visitor. It provides port where pinggy server listen for incoming tcp connection and forward the content as it is to the tunnel. It also provides a `tls` url, where it listen at 443 port and terminate the incoming SSL connection. However, it send the content without any processing to the client.

Basic `tlstcp` tunnel can be started using
```
ssh -R0:localhost:<localport> tlstcp@a.pinggy.io
```

**`tlstcp` is similar to `tcp` tunnel with a convenience for visitor to connect to Pinggy server with a SSL connection.**

*Passing multiple tunnel type is not recomended. Pinggy server might behave abnormaly*.

#### 2. qr/aqr
Pinggy provides option to display QR Code in the terminal. The `qr` key display smaller unicode base QR Code on the terminal while `aqr` draw large ASCII only QR code. It is usefull for development of mobile compatible website. Start a `http` tunnel with QR Code as follows:
```
ssh -R0:localhost:<localport> qr@a.pinggy.io
```

#### 3. auth
Pinggy by default try to start tunnel without any authentication. However, it may not works always due the limitation of some ssh client (e.g. dropbear) implementation. Use `auth` keyword to stop this behavior. With this keyword, client may ask for password, kindly provide 0000 (or any string).


## Command line options
Pinggy have option to configure live HTTP header manipulation, HTTP authentication and IP white listing in the command line only. It is easy to fire repeatedly. Here the list of command line options.

Command line options are formatted as follow:
```
command[:CommandOption1[:CommandOption2]]
```

#### 1. Live HTTP Header Manipulation
##### Add header
```
a:HeaderName:HeaderValue
```
It will add a header with `HeaderName` and `HeaderValue` with every HTTP request. One can put as many add header as one want.
##### Remove header
```
r:HeaderName
```
It would remove every header with header name `HeaderName` from the HTTP request. Redunt remove header commands are silently ignored.
##### Update header
```
u:HeaderName:HeaderValue
```
It is combination of remove header and add header command. It would remove every header with header name `HeaderName` and put a new header with header name `HeaderName` and value `HeaderValue`.

#### 2. Basic Authentication
Pinggy supports basic authentication for the visitor. It is password username based authentication. The format to set basic authentication as follows
```
b:username:password
```
It never send basic auth to the client.

#### 3. Key Authentication
#### 4. IP White Listing