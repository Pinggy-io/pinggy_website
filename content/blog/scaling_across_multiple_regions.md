---
 title: "Scaling across Multiple Regions" 
 date: 2023-09-08T14:15:25+05:30
 lastmod: 2023-09-08T14:15:25+05:30
 draft: false
 og_image: "/blog/images/scaling_across_multiple_regions/worldmap.webp"
 tags: ["engineering", "update"]
---


A user from South Korea brought to our notice that Pinggy works great for them, but it is **slow**. The answer to *"why"* was obvious to us. Pinggy was hosting its servers in the USA, specifically in Ohio. One key goal of Pinggy is to not only provide tunnels, but fast and reliable tunnels. To improve the situation, we decided to host the tunnels in the nearest region from where the user is creating the tunnel (as the default behavior).

Today Pinggy is hosted across three regions - US, Europe, and Asia.

To scale across multiple regions we did the follwing:

1. Spawn edge nodes in multiple regions.
2. Host our own DNS server to dynamically point tunnel traffic to the correct edge.
3. Use AWS Route 53 for latency-based routing.
4. Implement a central coordinator to handle authentication, sessions, etc.

{{< figure src="../images/scaling_across_multiple_regions/worldmap.webp" alt="Scaling across multiple regions" >}}


## The Problem

A Pinggy tunnel has two legs, 
- One from the tunnel creator (*client*) to the Pinggy servers: <br>`client <-> pinggy` 
- The other from the Pinggy servers to the tunnel visitors (*visitor*): <br>`pinggy <-> visitor`

A visitor's request accessing a service through a Pinggy tunnel has to travel the entire path: `visitor -> pinggy -> client`.
This is followed by the response travelling the path `client -> pinggy -> visitor`.

Therefore the entire journey is: `visitor -> pinggy -> client -> pinggy -> visitor`.

One can already imagine the latency if both the *client* and the *visitor* are in South Korea while the Pinggy server is in USA.  The round trip time (RTT) can be as high as 500 ms from the visitor to the client (see the diagram below).

{{< figure src="../images/scaling_across_multiple_regions/latency_map.webp" alt="High latency across different regions" >}}

## Refactor into core and edges

A Pinggy tunnel works in two phases: (a) Tunnel setup (b) Tunnel live

**(a) Tunnel setup:** The user's ssh client requests for a tunnel with an access token and other configurations such as key-authentication, IP whitelists, header manipulations, etc. The Pinggy server has to (i) authenticate the request, (ii) check if an existing tunnel with same token  (same domain) is active or not (iii) forcefully close existing tunnel if required, and perform several other business logic before the tunnel can be started. For all these steps, **database access** (both reads and writes) are required.

**(b) Tunnel live:** Once the tunnel setup is complete, an active tunnel handles visitor traffic efficiently without touching the database that often.

Therefore we have split the Pinggy server into **core** and **edge**. The *core* handles the business logics and then offloads the visitor traffic handling responsibility to the *edges*.

Multiple instances of the *edges* are then deployed in multiple regions, all connected to a single *core* and hence a single database. By a *single core* and database we mean that the *core* and the database are located in a single region only.


As a result, the latency for creating a tunnel stays more or less the same, since when a client initiates a tunnel creation process, the requests flows through as follows: `client -> edge -> core`, instead of `client -> core` like before. Here the *edge* is located very close to the user initiating the tunnel, and we can assume that they are practically co-located.

Once the tunnel is live, the visitor traffic flows in a much efficient path: `visitor -> edge -> client -> edge -> visitor`.

{{< figure src="../images/scaling_across_multiple_regions/core_edge_map.webp" alt="Splitting into edge and core to deploy edges in multiple regions." >}}


From the above image it becomes clear that the *edge* handles all the visitor traffic. As a result the visitor has a much better experience. The high latency from an *edge* to the *core* does not impact the visitor traffic. An *edge* consults the *core* when a tunnel is being created, and then less frequently and asynchronously, without affecting the visitor traffic.

One might ask the question, what if the visitor and the client are in two far away regions. 

## Dynamic DNS updates

The most challenging part of this entire process of multi-region scaling is handling the DNS. To understand the problem one must understand what Pinggy offers in terms of domain names first.

Pinggy offers (i) persistent subdomains (e.g. https://androidblog.a.pinggy.io/)




