---
 title: "Authentication with HTTP Tunnel" 
 date: 2023-08-20T14:15:25+05:30 
 draft: false 
---

# Authentication

Pinggy provide mechanism to authenticate visitor connection using following basic authentication or key authention or both.

## Basic Authentication

With basic authentication, browser would prompt visitor to insert client selected username:password as follows:

{{< figure src="/doc_img/basic_authentication.png" alt="Basic Authentication">}}

Client can enable basic authentication as follows:
{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -R0:localhost:<localport> -t a.pinggy.io b:username:password
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -R0:localhost:<localport> -t <token>@a.pinggy.io b:username:password
```
{{% /tab %}}
{{< /tabs >}}

One can add multiple username:password combination as follows:
{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -R0:localhost:<localport> -t a.pinggy.io b:username1:password1 b:username2:password2
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -R0:localhost:<localport> -t <token>@a.pinggy.io b:username1:password1 b:username2:password2
```
{{% /tab %}}
{{< /tabs >}}

## Key Authentication

Key authentication is a mechanism where visitor provides a `Authorisation` header with value `Bearer <key>` with each and every request. Pinggy have option to set a set of `key`s during tunnel creation.

Start tunnel with key authentication as follows
{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -R0:localhost:<localport> -t a.pinggy.io k:key
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -R0:localhost:<localport> -t <token>@a.pinggy.io k:key
```
{{% /tab %}}
{{< /tabs >}}

Like basic authentication, one can set multiple keys as well.
{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -R0:localhost:<localport> -t a.pinggy.io k:key1 k:key2
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -R0:localhost:<localport> -t <token>@a.pinggy.io k:key k:key2
```
{{% /tab %}}
{{< /tabs >}}
