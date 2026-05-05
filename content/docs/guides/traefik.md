---
 title: "Use Pinggy with Traefik"
 description: "Place Pinggy in front of a local Traefik instance to publicly expose multiple containerised services through a single tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Expose a Traefik reverse proxy through Pinggy

[Traefik](https://traefik.io/) is a dynamic reverse proxy that auto-discovers services running in Docker, Kubernetes, or static configuration files and routes incoming HTTP/HTTPS traffic to them based on rules such as `Host` headers and path prefixes. Running Traefik locally is convenient - you can spin up several containerised services and address each by hostname - but those hostnames only resolve on your own machine.

Pinggy solves the public-reachability half of the problem. By tunnelling Traefik's entry point, every backend Traefik already routes to becomes reachable from the internet through one URL.

#### Step 1: Run Traefik locally

A minimal `docker-compose.yml` that starts Traefik on port `80` and enables the dashboard looks like this:

```yaml
services:
  traefik:
    image: traefik:v3.0
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--api.insecure=true"
    ports:
      - "80:80"
      - "8080:8080"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
```

Start the stack with `docker compose up -d` and confirm Traefik answers on `http://localhost:80`.

#### Step 2: Register backend services

Tag each service container with Traefik labels so it can be discovered. For example, an `nginx` container served at `app.localhost`:

```yaml
  app:
    image: nginx
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.app.rule=Host(`app.localhost`)"
      - "traefik.http.services.app.loadbalancer.server.port=80"
```

#### Step 3: Tunnel Traefik's web entry point

Open a Pinggy HTTP tunnel pointing at the port Traefik listens on:

```bash
ssh -p 443 -R0:localhost:80 free.pinggy.io
```

Pinggy returns a hostname such as `https://abcd1234.a.pinggy.link`. Every request to that URL is forwarded to Traefik, which then dispatches based on its routing rules.

#### Step 4: Match Traefik rules against the Pinggy hostname

Traefik routes on the incoming `Host` header. When traffic arrives through Pinggy, the header is the Pinggy hostname - not `app.localhost`. Two practical options:

- **Catch-all rule**: use `HostRegexp` to match any hostname, e.g. `traefik.http.routers.app.rule=HostRegexp(`{any:.+}`)`. Useful when only one backend is exposed.
- **Path-based routing**: route by path prefix instead of host, e.g. `PathPrefix(`/app`)` and `PathPrefix(`/api`)`, so a single Pinggy URL can fan out to multiple services.

For multi-tenant setups, configure a [custom domain](/docs/custom_domain/) so Pinggy delivers traffic on a stable hostname that your Traefik rules can match exactly.
