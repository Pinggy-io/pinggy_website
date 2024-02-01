---
 title: "Key Authentication with HTTP Tunnel" 
 description: "Learn to secure connections with Pinggy's key-based authentication. Follow easy steps for tunnel creation, customize commands, and enhance connection security effortlessly."
 date: 2023-12-07T01:15:25+05:30
 draft: false 
---

# Key Authentication

Pinggy offers a mechanism for authenticating visitor connections using key-based authentication.

Key-based authentication involves visitors providing an 'Authorization' header with the value `Bearer <key>` with each request made. Pinggy provides the option to set a collection of keys during tunnel creation.

Start tunnel with key authentication as follows
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t a.pinggy.io k:key
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t <token>@a.pinggy.io k:key
```

{{% /tab %}}
{{< /tabs >}}

Like basic authentication, one can set multiple keys as well.
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t a.pinggy.io k:key1 k:key2
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t <token>@a.pinggy.io k:key1 k:key2
```

{{% /tab %}}
{{< /tabs >}}

You can customize the command here:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false
keepalive=true keyauthentication=true keyauthentications=['samplekey'] >}}
{{< /pinggytunnel >}}

&nbsp;

If you run the command with your specified port where your service is running, you will get an output similar to the following:

{{< figure src="/doc_img/key_auth_terminal.webp" alt="Key Authentication With HTTP Tunnel">}}

Here, you can see that the tunnel is authenticated with the key `samplekey`.

{{< figure src="/doc_img/key_auth.webp" alt="Key Authentication With HTTP Tunnel">}}
