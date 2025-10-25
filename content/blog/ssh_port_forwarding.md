---
title: "SSH Port Forwarding"
description: "Master SSH port forwarding with practical examples for local, remote, and dynamic tunneling. Learn how to securely access databases, bypass firewalls, and debug applications."
date: 2025-10-24T14:15:25+05:30
draft: false
og_image: "images/ssh_port_forwarding/ssh-port-forwarding.webp"
tags: ["guide", "SSH", "networking", "security", "development"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwgCiAgIkB0eXBlIjogIkhvd1RvIiwgCiAgIm5hbWUiOiAiU1NIIFBvcnQgRm9yd2FyZGluZyIsCiAgImRlc2NyaXB0aW9uIjogIlNTSCBwb3J0IGZvcndhcmRpbmcgd2l0aCBwcmFjdGljYWwgZXhhbXBsZXMgZm9yIGxvY2FsLCByZW1vdGUsIGFuZCBkeW5hbWljIHR1bm5lbGluZy4gTGVhcm4gaG93IHRvIHNlY3VyZWx5IGFjY2VzcyBkYXRhYmFzZXMsIGJ5cGFzcyBmaXJld2FsbHMsIGFuZCBkZWJ1ZyBhcHBsaWNhdGlvbnMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3NzaF9wb3J0X2ZvcndhcmRpbmcvc3NoLXBvcnQtZm9yd2FyZGluZy53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUMTVNIiwKICAidG9vbCI6IHsKICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgIm5hbWUiOiAiU1NIIgogIH0sCiAgInN0ZXAiOiBbewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJGb3IgbG9jYWwgcG9ydCBmb3J3YXJkaW5nLCB1c2UgJ3NzaCAtTCA4MDgwOmxvY2FsaG9zdDo4MCB1c2VyQHNlcnZlcicgdG8gZm9yd2FyZCBhIGxvY2FsIHBvcnQgdG8gYSByZW1vdGUgc2VydmljZSB0aHJvdWdoIFNTSC4iLAogICAgIm5hbWUiOiAiU2V0IHVwIGxvY2FsIHBvcnQgZm9yd2FyZGluZyIKICB9LHsKICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgInRleHQiOiAiRm9yIHJlbW90ZSBwb3J0IGZvcndhcmRpbmcsIHVzZSAnc3NoIC1SIDgwODA6bG9jYWxob3N0OjMwMDAgdXNlckBzZXJ2ZXInIHRvIGV4cG9zZSBhIGxvY2FsIHNlcnZpY2Ugb24gYSByZW1vdGUgc2VydmVyLiIsCiAgICAibmFtZSI6ICJTZXQgdXAgcmVtb3RlIHBvcnQgZm9yd2FyZGluZyIKICB9LAogIHsKICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgInRleHQiOiAiRm9yIGR5bmFtaWMgcG9ydCBmb3J3YXJkaW5nIChTT0NLUyBwcm94eSksIHVzZSAnc3NoIC1EIDEwODAgdXNlckBzZXJ2ZXInIGFuZCBjb25maWd1cmUgeW91ciBhcHBsaWNhdGlvbiB0byB1c2UgbG9jYWxob3N0OjEwODAgYXMgYSBTT0NLUyBwcm94eS4iLAogICAgIm5hbWUiOiAiU2V0IHVwIGR5bmFtaWMgcG9ydCBmb3J3YXJkaW5nIgogIH0sCiAgewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJBZGQgU1NIIHR1bm5lbHMgdG8geW91ciB+Ly5zc2gvY29uZmlnIGZpbGUgd2l0aCBMb2NhbEZvcndhcmQgb3IgUmVtb3RlRm9yd2FyZCBkaXJlY3RpdmVzIGZvciBwZXJzaXN0ZW50IGNvbmZpZ3VyYXRpb24uIiwKICAgICJuYW1lIjogIkNvbmZpZ3VyZSBwZXJzaXN0ZW50IFNTSCB0dW5uZWxzIgogIH1dICAgIAp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "ssh_port_forwarding/ssh-port-forwarding.webp" "SSH Port Forwarding Banner" >}}

SSH port forwarding is one of those tools that seems intimidating at first but becomes absolutely essential once you understand it. Whether you're trying to access a database on a remote server, bypass restrictive firewalls, or securely tunnel traffic through an encrypted connection, SSH port forwarding has got you covered. Think of it as creating secure pathways through the internet that let you access services as if they were running locally on your machine.

{{% tldr %}}

**Three types of SSH port forwarding:**

1. **Local forwarding** (most common):
   ```bash
   ssh -L 8080:localhost:80 user@server
   ```
   Access remote service at `localhost:8080`

2. **Remote forwarding**:
   ```bash
   ssh -R 0.0.0.0:8080:localhost:80 user@gateway
   ```
   Expose local service to remote server

3. **Dynamic forwarding** (SOCKS proxy):
   ```bash
   ssh -D 1080 user@gateway
   ```
   Route all traffic through encrypted tunnel

{{% /tldr %}}

## What is SSH Port Forwarding?

SSH port forwarding, also known as SSH tunneling, creates secure encrypted channels between your local machine and remote servers. Instead of connecting directly to a service, you route the connection through an SSH tunnel, which encrypts all the traffic and can bypass network restrictions.

The beauty of SSH port forwarding lies in its simplicity and versatility. You're essentially borrowing the SSH connection to carry other types of traffic, all while maintaining the security and encryption that SSH provides. This makes it perfect for accessing services that might be blocked, restricted, or simply need an extra layer of security.

## The Three Types of SSH Port Forwarding

### Local Port Forwarding (Most Common)

Local port forwarding is probably what you'll use 90% of the time. It forwards a port on your local machine to a port on a remote machine through the SSH connection. This is incredibly useful when you need to access a service running on a remote server that's not directly accessible from your location.

The syntax comes in short and long forms:

**Short form:**
```bash
ssh -L 8080:localhost:80 user@server
```

**Long form:**
```bash
ssh -L localhost:8080:localhost:80 user@server
```


{{< image "ssh_port_forwarding/local_port_forwarding.webp" "Local Port Forwarding Example" >}}

Here's a practical example. Let's say you're working from a coffee shop and need to access your company's database server that's only accessible from within the office network. You can create a tunnel through your office SSH server:

```bash
ssh -L 5432:db.company.com:5432 john@office-server.company.com
```

Now you can connect to `localhost:5432` on your laptop, and it'll be as if you're connecting directly to the database from inside the office network. Your database client doesn't know the difference, but all the traffic is securely encrypted through the SSH tunnel.

### Remote Port Forwarding

Remote port forwarding works in the opposite direction. It forwards a port on the remote server back to your local machine. This is super handy when you're developing something locally and need to share it with someone else, or when you need to expose a local service to a remote network. For a deeper dive into remote tunneling, check out our {{< link href="https://pinggy.io/blog/ssh_reverse_tunnelling/" >}}SSH reverse tunneling guide{{< /link >}}.

```bash
ssh -R 0.0.0.0:8080:localhost:80 user@gateway
```

{{< image "ssh_port_forwarding/remote_port_forwarding.webp" "Remote Port Forwarding Example" >}}

Imagine you're building a webhook handler for a payment processor, but you're developing it locally. The payment service needs to send webhooks to your application, but it can't reach your laptop directly. Remote port forwarding to the rescue:

```bash
ssh -R 0.0.0.0:8080:locahost:80 john@my-public-server.com
```

Now when the payment service sends a webhook to `my-public-server.com:8080`, it gets forwarded to your local development server running on port 80. You can test webhooks in real-time without deploying anything.

### Dynamic Port Forwarding (SOCKS Proxy)

Dynamic port forwarding creates a SOCKS proxy that routes selected application traffic through the SSH connection. It's handy when you want to send traffic via a specific network for debugging, testing, or reaching resources available from the SSH server's network.

```bash
ssh -D [local_port] [user]@[remote_server]
```

For example, if you're traveling and need to access services on your home network:

```bash
ssh -D 1080 john@home-server.com
```

Then configure your browser to use `localhost:1080` as a SOCKS proxy so traffic goes out via your home server.

## Real-World Development Scenarios

### Database Access Through Bastion Hosts

Most production databases sit behind multiple layers of security, often accessible only through bastion hosts or jump servers. SSH port forwarding makes this seamless for developers who need to run queries or debug issues.

```bash
ssh -L 3306:prod-db.internal:3306 john@bastion.company.com
```

Connect your favorite database client to `localhost:3306`, and you're directly querying the production database through the secure tunnel. No need to install special VPN clients or configure complex network routes.

### Accessing Development Services

When you're working on microservices that need to communicate with each other, SSH port forwarding can help you test integrations without deploying everything to a shared environment.

```bash
# Forward multiple services at once
ssh -L 8001:service1.dev:8080 -L 8002:service2.dev:8080 -L 8003:service3.dev:8080 john@dev-server.com
```

Now your local application can hit `localhost:8001`, `localhost:8002`, and `localhost:8003` to communicate with the remote development services.


## Advanced SSH Port Forwarding Techniques

### Multiple Port Forwards in One Command

You can forward multiple ports in a single SSH command, which is great for complex development setups:

```bash
ssh -L 5432:db:5432 -L 6379:redis:6379 -L 9200:elasticsearch:9200 john@dev-server.com
```

This gives you local access to a database, Redis cache, and Elasticsearch cluster all through one SSH connection.

### Background Tunnels

Add the `-f` flag to run the SSH tunnel in the background, and `-N` to prevent executing remote commands:

```bash
ssh -f -N -L 5432:db:5432 john@server.com
```

This creates the tunnel and returns you to your shell prompt while keeping the tunnel active in the background.

### Persistent Tunnels with autossh

For tunnels that need to stay up even when the connection drops, use `autossh`:

```bash
autossh -M 0 -f -N -L 5432:db:5432 john@server.com
```

The `-M 0` disables autossh's built-in monitoring and relies on SSH's built-in keep-alive mechanisms instead.

## SSH Config File Magic

Instead of remembering complex command-line options, you can set up SSH port forwarding rules in your `~/.ssh/config` file:

```bash
Host dev-tunnel
    HostName dev-server.company.com
    User john
    LocalForward 5432 db.internal:5432
    LocalForward 6379 redis.internal:6379
    LocalForward 9200 elasticsearch.internal:9200
```

Now you can just run `ssh dev-tunnel` and all your port forwards are automatically set up.

For dynamic forwarding, add:
```bash
Host proxy-tunnel
    HostName proxy-server.com
    User john
    DynamicForward 1080
```

## Security Considerations

SSH port forwarding is generally very secure since it uses SSH's encryption, but there are some things to keep in mind. When you create local port forwards, the forwarded ports are usually bound to localhost only, which means other machines on your network can't access them. This is usually what you want for security reasons.

If you need to allow other machines to connect to your forwarded ports, you can use the `-g` flag, but be careful:

```bash
ssh -g -L 5432:db:5432 john@server.com
```

This binds the forwarded port to all interfaces, making it accessible from other machines on your network. Only do this if you trust your local network and understand the security implications.

Always use SSH key authentication instead of passwords when possible, especially for automated or long running tunnels. And remember that SSH port forwarding inherits the security of your SSH connection, so keep your SSH client and server software updated.

## Pinggy: quick tunnels when SSH port forwarding isn't an option

Sometimes you just need to share a local app on the internet and you don't have a public SSH server, or you're behind CGNAT. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} opens a reverse tunnel from your machine to a public URL - no router changes, public IP, or DNS required.

Start a quick HTTP tunnel in seconds:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"}}}"
{{</ ssh_command >}}


This gives you a public URL that forwards to your local port. For stable URLs and custom domains, sign in to the <a href="https://dashboard.pinggy.io" target="_blank">Pinggy Dashboard</a>. Pinggy also supports TCP tunnels (for SSH/databases) when you need raw TCP instead of HTTP.


## Conclusion

SSH port forwarding is one of those fundamental tools that every developer should have in their toolkit. It's simple enough to use for quick debugging sessions but powerful enough to solve complex networking challenges. Whether you're accessing databases through bastion hosts, testing webhooks locally, or connecting securely across networks, SSH port forwarding provides a secure and reliable solution.

The best part is that it's built into SSH, which means it's available on virtually every Unix-like system without installing additional software. Once you get comfortable with the basic patterns, you'll find yourself reaching for SSH port forwarding whenever you need to securely connect services across networks.

Start with simple local port forwarding for database access, then gradually explore remote and dynamic forwarding as your needs become more complex. Before you know it, you'll be tunneling like a pro and wondering how you ever managed without it.
