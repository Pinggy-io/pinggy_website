---
 title: "Using Pinggy with Docker" 
 description: "Pinggy provides pre-built docker images for easily creating tunnels. It can be used to create UDP tunnels as well."
 date: 2025-03-05T14:15:25+05:30 
 draft: false 
---

# Using Pinggy with Docker

Pinggy provides pre-built Docker images for easily creating tunnels. It can be used to create HTTP(S), TCP, UDP, and TLS tunnels. The only requirement is to have Docker installed.

Here is an example for starting a HTTP tunnel on port `8080` on localhost:


{{< tabs >}}
{{% tab name="Linux" %}}
```bash
docker run --net=host -it pinggy/pinggy -p 443 -R0:localhost:8080 free.pinggy.io
```
{{% /tab %}}
{{% tab name="Mac" %}}
```bash
docker run -it pinggy/pinggy -p 443 -R0:localhost:8080 free.pinggy.io
```
{{% /tab %}}
{{% tab name="Windows" %}}
```bash
docker run -it pinggy/pinggy -p 443 -R0:localhost:8080 free.pinggy.io
```
{{% /tab %}}
{{< /tabs >}}

> Note: In linux we need to pass `--net=host` option to make docker use the same network as the host. For Mac and Windows, we need not pass this option. Instead, internally we replace `localhost` or `127.0.0.1` to `host.docker.internal`. This forwards the traffic to the host.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
  <iframe 
    src="https://www.youtube.com/embed/0C_k9_OOcwQ?si=-fsX9sYdn_lx50aw" 
    title="Pinggy with docker video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>


## Using Web Debugger

To enable the Web Debugger, you need to pass the option `-L0.0.0.0:4300:localhost:4300`. You can change the local port to any port you want as: `-L0.0.0.0:<port>:localhost:4300`. In case of Mac or Windows, you need to map the port also.

{{< tabs >}}
{{% tab name="Linux" %}}
```bash
docker run --net=host -it pinggy/pinggy -p 443 -R0:localhost:8080 -L4300:localhost:4300 free.pinggy.io
```
{{% /tab %}}
{{% tab name="Mac" %}}
```bash
docker run -p 4300:4300 -it pinggy/pinggy -p 443 -R0:localhost:8080 -L0.0.0.0:4300:localhost:4300 free.pinggy.io
```
{{% /tab %}}
{{% tab name="Windows" %}}
```bash
docker run -p 4300:4300 -it pinggy/pinggy -p 443 -R0:localhost:8080 -L0.0.0.0:4300:localhost:4300 free.pinggy.io
```
{{% /tab %}}
{{< /tabs >}}

You can access the web debugger from your browser by visiting: <a href="http://localhost:4300" target="_blank" >http://localhost:4300</a>

## UDP Tunnels

A major advantage of using Pinggy through docker is the ability to create UDP tunnels. Here is an example of a UDP tunnel to port `8000`:


{{< tabs >}}
{{% tab name="Linux" %}}
```bash
docker run --net=host -it pinggy/pinggy -p 443 -R0:localhost:8080 udp@free.pinggy.io
```
{{% /tab %}}
{{% tab name="Mac" %}}
```bash
docker run -it pinggy/pinggy -p 443 -R0:localhost:8080 udp@free.pinggy.io
```
{{% /tab %}}
{{% tab name="Windows" %}}
```bash
docker run -it pinggy/pinggy -p 443 -R0:localhost:8080 udp@free.pinggy.io
```
{{% /tab %}}
{{< /tabs >}}


## Docker Compose

If you already run your app with Docker Compose, you can add Pinggy as another service and expose the app without touching the host network. Both containers share the Compose network, so the tunnel reaches your app by its service name instead of `localhost`.

Here is a complete example that serves a static site with Nginx and exposes it over a public HTTPS URL:

```yaml
services:
  web:
    image: nginx:alpine
    volumes:
      - ./site:/usr/share/nginx/html:ro

  tunnel:
    image: pinggy/pinggy
    command: -p 443 -R0:web:80 free.pinggy.io
    depends_on:
      - web
    stdin_open: true
    tty: true
```

A few things to note:

- `-R0:web:80` forwards to the `web` service on port `80`. Use the service name, not `localhost` or `host.docker.internal`, because Compose puts both containers on the same network.
- `stdin_open: true` and `tty: true` keep the SSH session interactive, the same as passing `-it` to `docker run`.
- You do not need `--net=host` here. That option is only for reaching a server running on the host machine; a service defined in the same Compose file is reachable by name.

### Adding a token

The example above uses `free.pinggy.io`, which gives a temporary URL that changes on each restart. If you have a [Pinggy Pro](https://dashboard.pinggy.io/) account, add your access token to get a persistent subdomain and longer sessions. In the SSH-style command, the token goes in front of the server address as the username, and you connect to `pro.pinggy.io` instead of `free.pinggy.io`:

```yaml
  tunnel:
    image: pinggy/pinggy
    command: -p 443 -R0:web:80 <YOUR_TOKEN>@pro.pinggy.io
    depends_on:
      - web
    stdin_open: true
    tty: true
```

Replace `<YOUR_TOKEN>` with the token from your <a href="https://dashboard.pinggy.io/" target="_blank">dashboard</a>. To keep the token out of the file, you can read it from an environment variable instead:

```yaml
  tunnel:
    image: pinggy/pinggy
    command: -p 443 -R0:web:80 ${PINGGY_TOKEN}@pro.pinggy.io
    depends_on:
      - web
    stdin_open: true
    tty: true
```

Then run `PINGGY_TOKEN=yourtoken docker compose up`, or put `PINGGY_TOKEN=yourtoken` in a `.env` file next to the compose file.

Start everything with:

```bash
docker compose up
```

The public URL is printed in the `tunnel` service logs. If you started in detached mode with `docker compose up -d`, print it with:

```bash
docker compose logs tunnel
```

Swap the `web` service for whatever you are hosting (a Node app, a Flask server, a game server) and point `-R0:<service>:<port>` at its service name and port. Any other Pinggy option works here too, exactly as it does with `docker run`.

## Customizing your tunnel

Any Pinggy configuration will work with the docker container. To learn about more options see [Pinggy CLI](/docs/cli/) documentation.

You can log in to <a href="https://dashboard.pinggy.io/" target="_blank" >https://dashboard.pinggy.io/</a> and use the tunnel command configuration tool. You just need to make some tweaks to that command to make it work with docker.

For Linux, add `--net=host` option.

And for the Web Debugger to work in Windows and Mac, make sure to pass `-L0.0.0.0:4300:localhost:4300` instead of `-L4300:localhost:4300`, along with the port mapping `-p 4300:4300`.

