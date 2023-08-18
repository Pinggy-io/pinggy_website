---
 title: "Fast changing DNS records and AWS Route 53" 
 date: 2023-06-22T14:15:25+05:30 
 draft: false 
 og_image: "/blog/images/iot/head.webp"
---

A user from South Korea brought to our notice that Pinggy works great for them, but it is slow. The answer to *"why"* was obvious to us. Pinggy hosts its servers in the USA, specifically in Ohio. One key goal of Pinggy is to not only provide tunnels, but fast and reliable tunnels. To improve the situation, we decided to host the tunnels in the nearest region from where the user is creating the tunnel (as the default behavior).

Assuming the tunnel has a persistent URL from Pinggy, the URL needs to point to the correct zone where the tunnel is created. As a result, the domain need to be pointed to the correct location dynamically when the tunnel is created. This implies a DNS update when each tunnel is spawned. 

While trying to manage DNS updates on the fly and trying to do it fast we had the following observations:

* Can we change DNS records fast - on the fly while generating new URLs? - **Yes**.
* Is {{< link href="https://aws.amazon.com/route53/" >}}AWS Route 53{{< /link >}} suitable for the purpose? - **It might be.**
* Why the reasons for the perceived problem of *"DNS propagation delay"* are not well discussed on the internet.
* What is the TTL when a record is not found in an authoritative server? - TTL of SOA record.
* What we think is a better alternative for Pinggy? - **Host your own DNS server.**
* Route 53 is not bad, we just encountered a unique problem which will probably never be the case for others.


## Why is it difficult?

**Our objective** is simple. When a user creates a new tunnel, take the persistent domain set by the user (e.g. `example.a.pinggy.online`), and add a DNS record to point to the VM hosting the tunnel.

When visitors open the domain in their browser, they should be able to reach the present tunnel.


**The problem** occurs if the DNS record update is not in time. After a user creates a tunnel and the first visitor visits the domain, if the DNS record is not resolved by the DNS server which the visitor is using, then in practice the Pinggy tunnel simply does not work.

**The cause** of such failure in name resolution can be the following:

1. The authoritative server (e.g. for `a.pinggy.io`) **does not yet** have a record for the domain (e.g. `example.a.pinggy.online`).
2. The authoritative server has an outdated record for the domain which points to a wrong VM.
3. The authoritative server is updated, but the DNS the visitor is using (e.g. `8.8.8.8`) has an outdated record.


**Inferences** from the above are as follows:

1. The tunnel was created before the authoritative server record was updated. This should not be allowed.
2. Same as 1.
3. The TTL of the record (e.g. `example.a.pinggy.online`) did not expire when the visitor visited the domain.

**Solutions appear simple**

For 1. and 2. , ensure the authoritative server is updated before the tunnel is created.

For 3., keep a low TTL.

## Route 53 does not work for us. Why?

We implemented the entire process of dynamically updating DNS records with each new tunnel with the help of {{< link href="https://aws.amazon.com/route53/" >}}Route 53{{< /link >}}. "Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service."

At the onset, we had some concerns regarding the rate-limiting of {{< link href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-requests-route-53" >}}five requests per second{{< /link >}}. But that could be avoided by batching the resource record sets and sending consolidated change requests.

We were instead bitten by the trade-off of the *high availability* of Route 53. **The edge locations of Route 53 can take up to 60 seconds to be updated after a record set is changed.**

> "There are over 100 edge locations in Route 53 with DNS name servers that answer DNS queries from clients. When you update a record set in your hosted zone, the change propagates to all Route 53 edge locations within 60 seconds." - {{< link href="https://repost.aws/knowledge-center/route-53-propagate-dns-changes" >}}AWS Knowledge Center{{< /link >}}

Each such edge location is essentially a copy of the authoritative name server for the hosted zone (e.g. `a.pinggy.io`).

**Example scenario:** 

* Suppose a user creates a tunnel with a domain, say `example.a.pinggy.online`, 
* Pinggy updates the record for the domain, say `example.a.pinggy.online. 600 CNAME pinggyvm1.com`, in Route 53. 
* Immediately after this, a visitor visits the domain `example.a.pinggy.online`.
* The visitor connects to an edge of Route 53 which does not have the record for `example.a.pinggy.online.`
* Visitor fails to connect to the tunnel.

At this point, the reader is possibly shouting "reduce the TTL". We will discuss the caveats of that next.


## Understanding TTL

First approach towards a solution is reducing the TTL of the records. If we reduce the TTL for the record `example.a.pinggy.online` to `10` seconds, then it seems that the visitor can just retry after 10 seconds and the tunnel will work... no big deal. But TTL of the record will expire and the DNS server will refetch the record only if it had the record and the corresponding TTL in the first place.

**When a record is not set, what is the TTL?** <br>
In this case, the record for `example.a.pinggy.online` does not exist in the first place when the visitor tries to resolve it. As a result there is was TTL. The next time the visitor retries to resolve it, does the name server assume TTL to be 0 and try to resolve it? The answer is no. The name server will again try to refetch the record when the TTL of the SOA record set in the authoratitive server (say `a.pinggy.io`) expires.

> When a record is not found in an authoratitive server once, the record is refetched by a name server only after the TTL of the SOA record of the authoratitive server expires.

Therefore, in our example scenario, even if the TTL of the record is set to be as low as 1, the visitor will not be able to resolve the name as by then the fact of absense of the record in the authoratitive server would have been cached till the SOA TTL expires.

It is recommended not to reduce the TTL of the SOA record as it might cause other name servers to refetch the entire zone frequently from the authoratitive server unnecessarily ({{< link href="https://serverfault.com/questions/69183/recommended-dns-soa-record-ttl-default" >}}read more {{< /link >}}). 

## Workarounds

After all the investigation, the only way of making Pinggy work with Route 53 is to wait for the change sets to propagate to all the edge locations of Route 53. But this takes several seconds, and we do not want users of Pinggy to wait for 10 or 30 seconds to create their tunnel. As a result, at this point, we do not have any practical workarounds to use Route 53 for Pinggy.

Instead, we will be focusing on hosting our own DNS Server with {{< link href="https://powerdns.com" >}}PowerDNS{{< /link >}}.

**The same problem does not appear for our own authoritative name server** since the record can be updated there quickly. The trade-off is obvious. Our authoritative servers will not be present in so many regions like Route 53. As a result, we will be able to update them fast (in less than 2 seconds), and give a tunnel to our users whose domain resolves correctly. Consequently, visitors resolving the domain for the first time might have a higher latency (as our authoritative servers might be located further than compared to Route 53), but nonetheless they will get the correct result.

## Conclusion

**Route 53 is not bad**, it is possibly really good. We faced a unique problem for Pinggy while trying to use it, which will almost never be the case for your application.