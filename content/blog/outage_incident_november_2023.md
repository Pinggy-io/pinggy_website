---
 title: "Outage Incident Report Nov 6, 2023" 
 date: 2023-11-06T00:15:25+05:30
 lastmod: 2023-11-06T01:15:25+05:30
 draft: false
 tags: ["outage", "incident"]
 outputs:
  - HTML
  - AMP
---

## Summary

November 6, 2023

- 1.30 AM UTC - Major outage detected. All regions are affected.
- 2.30 AM UTC - Issue with DNS detected. The domain pinggy.online went to "serverHold". No prior notice or response from the domain registrar.
- 5.30 AM UTC - Transferred domain from Porkbun to AWS Route53.
- 6.30 AM UTC - "serverHold" status persisted on AWS. Support tickets opened.
- 12.10 PM UTC - New domain "pinggy.link" configured. Tunnels accessible. Working on getting pinggy.online back.
- Nov 7 - 8.00 AM UTC - "pinggy.online" domain restored. All services resumed normal operation.

## Steps to access your tunnels

We request our users to follow these steps to temporarily access our tunnels:

- We have configured a new domain "pinggy.link". If you start your tunnels now, you will be able to access them through that domain.
- If you have a persistent subdomain such as **abc.a.pinggy.online** , you will be able to access it at **abc.a.pinggy.link**.
- If you have a custom domain, kindly update the CNAME in your DNS record with a new domain. You have to replace **pinggy.online** with **pinggy.link**.

  Example: **abc.a.pinggy.online** -> **abc.a.pinggy.link**

## Cause analysis

Some malicious content hosted through our tunnels caused Google to flag the domain yesterday. Although all the tunnels get a subdomain `a.pinggy.online` / `free.pinggy.online` and not the domain `pinggy.online`. There was no prior communication from our domain registrar before the serverHold status code.

Radix, the company managing the .online TLD scans the Google Safe Browsing report and puts every reported domain on "serverHold".

We have banned the accounts trying to host harmful content. We are implementing a malicious content scanner to prevent such incidents in the future.
