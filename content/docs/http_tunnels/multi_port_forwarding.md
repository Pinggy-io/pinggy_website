---
 title: "Multiple Port Forwarding" 
 description: "Share multiple ports with a single Pinggy tunnel through different subdomains. Configure a wildcard custom domain and host multiple websites and applications."
 date: 2025-04-18T01:15:25+05:30
 draft: false
 og_image: "doc_img/multi_port.png"
---

# Multiple Port Forwarding


You can host multiple subdomains on Pinggy and point them to different ports on localhost. For example, you can configure a tunnel that routes traffic from `cars.example.com` to `localhost:7070` and `bikes.example.com` to `localhost:8080`.

To configure multiple port forwarding with Pinggy, you first need to set up a **wildcard domain** such as `*.example.com`. You can find instructions on how to set up your domain <a href="../../custom_domain/" target="_blank">here</a>.


<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
  <iframe 
    src="https://www.youtube.com/embed/1xu8EAonq1o?si=1syJYwJwzLTikuQp" 
    title="YouTube video - Pinggy multi port forwarding" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>

## Tunnel Setup
Suppose, you have configured your token `TOKEN` with a wildcard domain `*.example.com`. You can start a tunnel which forwards traffic from `cars.example.com` to `localhost:7070` and `bikes.example.com` to `localhost:8080`, and rest to default `localhost:9090` with the following command:


```bash
ssh -p 443 -R 0:localhost:9090 -R cars.example.com:0:localhost:7070  -R bikes.example.com:0:localhost:8080 TOKEN@pro.pinggy.io
```



{{< figure src="../../../doc_img/multi_port.png" alt="Multiple port forwarding using wildcard domain" >}}



**Explanation:**

```bash
ssh -p 443 \
  -R 0:localhost:9090 \
  -R cars.example.com:0:localhost:7070 \
  -R bikes.example.com:0:localhost:8080 \
  TOKEN@pro.pinggy.io
```

- `-R 0:localhost:9090`: Is the default forwarding that forwards all traffic which does not match any domain to port `9090`.
- `-R cars.example.com:0:localhost:7070`: Forwards all traffic from `cars.example.com` to the port `7070`.
- `-R bikes.example.com:0:localhost:8080`: Forwards all traffic from `cars.example.com` to the port `8080`.
- The port `0` after `-R cars.example.com` is the remote port, and it is ignored by Pinggy.

