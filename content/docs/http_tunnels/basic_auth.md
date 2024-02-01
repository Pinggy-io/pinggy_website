---
 title: "Basic Authentication with HTTP Tunnel" 
 description: "Enable Basic Authentication with Pinggy HTTP tunnels. Learn how to configure and start tunnels with username and password for added security."
 date: 2023-08-20T14:15:25+05:30 
 draft: false 
---

# Basic Authentication

Pinggy provides a mechanism to authenticate visitor connections using basic
authentication. With basic authentication, browser would prompt visitor to insert client selected username:password as follows:

{{< figure src="/doc_img/basic_authentication.png" alt="Basic Authentication">}}

**Note: Both the username and password provided for basic authentication cannot contain the ':' (colon) character.**

Client can enable basic authentication as follows:
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t a.pinggy.io b:username:password
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t <token>@a.pinggy.io b:username:password
```

{{% /tab %}}
{{< /tabs >}}

One can add multiple username:password combination as follows:
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t a.pinggy.io b:username1:password1 b:username2:password2
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t <token>@a.pinggy.io b:username1:password1 b:username2:password2
```

{{% /tab %}}
{{< /tabs >}}

You can customize the command here:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false keepalive=true passwordCheck=true basicusername="username" basicpass="password" >}}
{{< /pinggytunnel >}}
