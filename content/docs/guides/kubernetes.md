---
 title: "Expose a local Kubernetes service"
 description: "Reach a service running in a local Kubernetes cluster - Minikube, kind, k3d, or Docker Desktop - from the public internet through a Pinggy tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Expose a service from a local Kubernetes cluster with Pinggy

Local Kubernetes distributions like Minikube, kind, k3d, and the cluster bundled with Docker Desktop are great for end-to-end testing of charts, ingress configuration, and operators - but everything they expose stops at the host machine. There is no LoadBalancer in front of them by default, and even a NodePort is only reachable from your LAN.

Pinggy bridges that gap. Once a Kubernetes service is reachable from the host (via `kubectl port-forward`, NodePort, or an ingress controller bound to a host port), a Pinggy tunnel turns the host port into a public HTTPS endpoint without any cluster changes.

#### Step 1: Choose how the service is reachable from the host

Pick whichever fits your cluster best:

- **`kubectl port-forward`** - works for any Service or Pod, no cluster config required:
  ```bash
  kubectl port-forward svc/myapp 8080:80
  ```
  The service is now reachable on `localhost:8080`.

- **NodePort** - set `spec.type: NodePort` on the Service. The cluster picks a port in the `30000–32767` range. With Minikube, run `minikube service myapp --url` to print the URL.

- **Ingress on a host port** - install an ingress controller (NGINX, Traefik) configured to bind to host port `80` or `8080`. All routes the controller manages flow through that single port.

#### Step 2: Open the tunnel

Whichever option you chose, point Pinggy at the host port:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy returns an HTTPS URL that forwards every request to the cluster.

#### Step 3: Match ingress routing rules

If the traffic enters the cluster through an ingress controller, the controller dispatches based on the `Host` header. That header carries the Pinggy hostname, not the one in your Ingress resource. Two practical fixes:

- Add the Pinggy hostname (or a wildcard) to the Ingress's `host` field.
- Switch the Ingress to path-based routing so any `Host` header lands on the right backend.

For a stable hostname you can register in your Ingress once and reuse, configure a [custom domain](/docs/custom_domain/) on Pinggy and add a CNAME pointing to the assigned record.

#### Step 4: TCP services

The HTTP tunnel above only handles HTTP/HTTPS. To expose a non-HTTP workload - say, a Postgres pod or a gRPC service without TLS - port-forward it to the host and use a TCP tunnel instead:

```bash
kubectl port-forward svc/postgres 5432:5432
ssh -p 443 -R0:localhost:5432 tcp@free.pinggy.io
```

Pinggy returns a public hostname and a TCP port that proxies straight through to the pod.

#### Step 5: Keep the tunnel resilient

`kubectl port-forward` exits on errors and `ssh` to Pinggy is bound to a single session. For long-running test environments, wrap both in a process supervisor (systemd, `tmux`, or a small bash loop) so they restart automatically. The [long-running tunnels guide](/docs/guides/long_running_tunnels/) covers a few practical patterns.
