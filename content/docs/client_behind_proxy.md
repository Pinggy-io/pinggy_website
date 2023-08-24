---
 title: "Creating tunnel behind proxy and firewall" 
 date: 2023-08-21T09:15:25+05:30 
 draft: false 
---

There are plenty of users sitting behind different types of proxies and firewalls. This proxy and firewall make it very difficult for an SSH client to connect to Pinggy. However, we found a few tricks to overcome some of these problems.

These tricks are operating system dependent as it require availabilities of other commands in the system.

# Linux and MacOS
## Start a tunnel from a network behind an HTTP proxy

The `ssh` command from OpenSSH comes with a special option called `Proxy-Command` which can be used to use another command to set up the connection with a server. For example, if we can connect our server with the help of `nc` command like this:
```
ssh -p443 -R0:localhost:4000 -o ProxyCommand="nc %h %p" a.pinggy.io
```
This command is the same as 
```
ssh -p443 -R0:localhost:4000 a.pinggy.io
```

The `nc` command also allows connecting through an HTTP proxy with the option `-X` and `-x`. Using the following command, one can use this to connect to our server via a proxy `192.168.2.2` running on port `3128`.
```
ssh -p443 -R0:localhost:4000 -o ProxyCommand="nc -X connect -x 192.168.2.2:3128 %h %p" a.pinggy.io
```

It might happen that `nc` command does not work for you. Many other tools exist for the same task. Please note, it is absolutely fine to use any other tool as the traffic going through these tools is encrypted and this tool cannot decrypt it.

The tool `ncat` and `corkscrew` is similar. However, `ncat` have more useful functions. Here goes the same example with `ncat`.
```
ssh -p443 -R0:localhost:4000 -o ProxyCommand="ncat --proxy-type http --proxy 192.168.2.2:3128 %h %p" t.pinggy.io
```

## Start a tunnel behind a firewall that does not allow anything but SSL.
Although SSH uses an encrypted channel, it is not SSL. So, if some firewall does not allow any other protocol than SSL, SSH not going to be through the firewall. So, simple `ssh` command not gonna work. However, Pinggy has solutions for these scenarios. 

We support `ssh-over-ssl` tunneling. You can pass the entire `ssh` traffic to the Pinggy server over an SSL tunnel with the help of `ncat` or `openssl` command. Here you can do it.
```
ssh -p443 -R0:localhost:4000 -o ProxyCommand="openssl s_client -quiet -connect %h:%p" a.pinggy.io
```
```
ssh -p7878 -R0:localhost:4000 -o ProxyCommand="ncat --ssl %h %p" t.pinggy.io
```

## Start a tunnel from a network behind an HTTP proxy that does not allow not SSL connection
The `ncat` and `openssl` commands can connect SSL via HTTP proxy. So, these two commands can be used to connect to the Pinggy server in SSH-over-SSL mode via an HTTP proxy. The following command would do that:
```
ssh -p443 -R0:localhost:4000 -o ProxyCommand="openssl s_client -quiet -proxy 192.168.2.2:3128 -connect %h:%p" a.pinggy.io
```
```
ssh -p7878 -R0:localhost:4000 -o ProxyCommand="ncat --proxy-type http --proxy 192.168.2.2:3128 --ssl %h %p" t.pinggy.io
```

# Windows
While latest Windows comes with `OpenSSH` client, it does not contain other commands. One can install OpenSSL or netcat to solve the problem. One can also use `putty` to connect to Pinggy through a HTTP Proxy.
{{< figure src="/doc_img/putty_proxy.png" alt="Putty Proxy" >}}
