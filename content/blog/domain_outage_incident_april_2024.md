---
 title: "Domain Outage Incident Report April 26, 2024" 
 description: "Explore the incident report of the April 26, 2024 outage. Learn about the steps taken to address the issue."
 date: 2024-04-26T20:15:25+05:30
 lastmod: 2024-04-26T20:15:25+05:30
 draft: false
 tags: ["outage", "incident"]
 outputs:
  - HTML
  - AMP
---

## Incident

Issue with DNS detected. The domain pinggy.online went to "serverHold". No prior notice or response from the domain registrar.

All "pinggy.link" URLs are operational.

## What can you do to access your tunnel?

### For subdomains

If you have a subdomain such as `myawesomesite.a.pinggy.online`, you can still access your tunnels through `myawesomesite.a.pinggy.link`.

### For custom domains

Log in to your DNS provider. Change the CNAME record for your custom domain from a `.online` domain to the same `.link` domain. For example, if your custom domain had a CNAME record `myawesomesite.a.pinggy.online`, then change it to `myawesomesite.a.pinggy.link`.


## Steps taken from our side

- April 26, 2024, 13.00 UTC - Major outage detected. Affects all `pinggy.online` URLs. The domain `pinggy.online` moved to "serverHold".
- April 26, 2024, 14.17 UTC - Submitted first unsuspension request to Radix, the registrar (https://radix.website/). Reached out at twitter also later this day.
- April 27, 2024, 15.00 UTC - Submitted second unsuspension request to Radix.
- April 27, 2024, 16.00 UTC - Emailed to general contacts of Radix.
