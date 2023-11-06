---
 title: "Outage Incident Report Nov 6, 2023" 
 date: 2023-11-06T00:15:25+05:30
 lastmod: 2023-11-06T01:15:25+05:30
 draft: false
 tags: ["outage", "incident"]
---

## Summary

November 6, 2023

- 1.30 AM UTC - Major outage detected. All regions are affected.
- 2.30 AM UTC - Issue with DNS detected. The domain pinggy.online went to "serverHold". No prior notice or response from the domain registrar.
- 5.30 AM UTC - Transferred domain from Porkbun to AWS Route53.
- 6.30 AM UTC - "serverHold" status persisted on AWS. Support tickets opened.
- 12.10 PM UTC - New domain "pinggy.link" configured. Working on getting pinggy.online back.


## Steps to access your tunnels

We request our users to follow these steps to temporarily access our tunnels:

- We have configured a new domain "pinggy.link". If you start your tunnels now, you will be able to access them through that domain.
- If you have a persistent subdomain such as **abc.a.pinggy.online** , you will be able to access it at  **abc.a.pinggy.link**.
- If you have a custom domain, kindly update the CNAME in your DNS record with a new domain. You have to replace **pinggy.online** with **pinggy.link**.

   Example: **abc.a.pinggy.online** ->  **abc.a.pinggy.link**