---
title: "Dangling DNS Records: How a Released AWS Elastic IP Becomes a Subdomain Takeover"
description: "A DNS A record that still points at a released AWS Elastic IP hands your subdomain to whoever gets that address next. How the takeover works, what it costs, and how to audit your own zone."
date: 2026-11-25T18:30:00+05:30
lastmod: 2026-11-25T18:30:00+05:30
draft: false
tags: ["Subdomain Takeover", "DNS", "security", "AWS", "cloud"]
og_image: "images/dangling_dns_elastic_ip_subdomain_takeover/dangling_dns_elastic_ip_subdomain_takeover_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkRhbmdsaW5nIEROUyBSZWNvcmRzOiBIb3cgYSBSZWxlYXNlZCBBV1MgRWxhc3RpYyBJUCBCZWNvbWVzIGEgU3ViZG9tYWluIFRha2VvdmVyIiwKICAiZGVzY3JpcHRpb24iOiAiQSBETlMgQSByZWNvcmQgdGhhdCBzdGlsbCBwb2ludHMgYXQgYSByZWxlYXNlZCBBV1MgRWxhc3RpYyBJUCBoYW5kcyB5b3VyIHN1YmRvbWFpbiB0byB3aG9ldmVyIGdldHMgdGhhdCBhZGRyZXNzIG5leHQuIEhvdyB0aGUgdGFrZW92ZXIgd29ya3MsIHdoYXQgaXQgY29zdHMsIGFuZCBob3cgdG8gYXVkaXQgeW91ciBvd24gem9uZS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvZGFuZ2xpbmdfZG5zX2VsYXN0aWNfaXBfc3ViZG9tYWluX3Rha2VvdmVyL2RhbmdsaW5nX2Ruc19lbGFzdGljX2lwX3N1YmRvbWFpbl90YWtlb3Zlcl9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTI1VDE4OjMwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMjVUMTg6MzA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9kYW5nbGluZ19kbnNfZWxhc3RpY19pcF9zdWJkb21haW5fdGFrZW92ZXIvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJTZWN1cml0eSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiZGFuZ2xpbmcgRE5TIHJlY29yZCwgc3ViZG9tYWluIHRha2VvdmVyLCBBV1MgRWxhc3RpYyBJUCB0YWtlb3Zlciwgc3RhbGUgQSByZWNvcmQsIEVDMiBJUCByZXVzZSwgSFRUUC0wMSB2YWxpZGF0aW9uLCBDQUEgYWNjb3VudHVyaSwgRE5TIGF1ZGl0IiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkRhbmdsaW5nIEROUyByZWNvcmQiLCAiZGVzY3JpcHRpb24iOiAiQSBETlMgcmVjb3JkIHRoYXQgc3RpbGwgcG9pbnRzIGF0IGEgcmVzb3VyY2Ugb3IgSVAgYWRkcmVzcyBpdHMgb3duZXIgaGFzIHJlbGVhc2VkLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQVdTIEVsYXN0aWMgSVAgYWRkcmVzcyIsICJkZXNjcmlwdGlvbiI6ICJBIHN0YXRpYyBwdWJsaWMgSVB2NCBhZGRyZXNzIHRoYXQgcmV0dXJucyB0byBhIHNoYXJlZCBwb29sIHdoZW4gcmVsZWFzZWQgYW5kIGNhbiBiZSBhbGxvY2F0ZWQgYnkgYW55IG90aGVyIGFjY291bnQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJTdWJkb21haW4gdGFrZW92ZXIiLCAiZGVzY3JpcHRpb24iOiAiR2FpbmluZyBjb250cm9sIG9mIHdoYXQgYSBob3N0bmFtZSBzZXJ2ZXMgYnkgY2xhaW1pbmcgdGhlIHJlc291cmNlIGl0cyBETlMgcmVjb3JkIHBvaW50cyBhdC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkFDTUUgSFRUUC0wMSB2YWxpZGF0aW9uIiwgImRlc2NyaXB0aW9uIjogIkRvbWFpbiB2YWxpZGF0aW9uIGluIHdoaWNoIGEgY2VydGlmaWNhdGUgYXV0aG9yaXR5IGZldGNoZXMgYSB0b2tlbiBvdmVyIEhUVFAgZnJvbSB0aGUgYWRkcmVzcyB0aGUgaG9zdG5hbWUgcmVzb2x2ZXMgdG8uIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJDQUEgcmVjb3JkIiwgImRlc2NyaXB0aW9uIjogIkEgRE5TIHJlY29yZCB0aGF0IHJlc3RyaWN0cyB3aGljaCBjZXJ0aWZpY2F0ZSBhdXRob3JpdGllcywgYWNjb3VudHMgYW5kIHZhbGlkYXRpb24gbWV0aG9kcyBtYXkgaXNzdWUgZm9yIGEgZG9tYWluLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "dangling_dns_elastic_ip_subdomain_takeover/dangling_dns_elastic_ip_subdomain_takeover_banner.webp" "Banner reading Dangling DNS on AWS Elastic IPs, with a flow from staging.example.com to the A record 203.0.113.25 to someone else's EC2 instance" >}}

In August 2026, a security team at Intruder allocated and released AWS Elastic IPs in a loop for 48 hours. They went through 450,000 unique addresses and ended up holding 28 that live DNS records still pointed at, five of them under `treasury.gov`. By their accounting it cost about $3 per subdomain. Nothing was hacked in the usual sense. Somebody had released an IP address and left the A record behind, and AWS handed that address to the next account that asked.

This is a dangling DNS record, and it is one of the cheapest ways to lose control of a hostname you own. If you have ever pointed `staging.yourapp.com` at an EC2 box and later terminated the box, you may have one too. Below is how the takeover works, why it is worse than the CNAME kind, and a short script to check your own zone.

{{% tldr %}}
1. **A dangling A record points at an IP you no longer hold.** Release an Elastic IP without deleting the record and the hostname follows the address to its next owner.
2. **Nobody can pick a specific address, so attackers fish.** Allocate, compare against a list of DNS records, release, repeat. Intruder's run cycled 450,000 addresses in 48 hours and matched 28 live records.
3. **Holding the IP is full control of the hostname.** Every port, a browser-trusted TLS certificate through HTTP-01 validation, and any cookie scoped to the parent domain.
4. **AWS treats it as a customer DNS problem.** The account that did the fishing was blocked after 48 hours, but AWS told the researchers it plans no changes.
5. **The fix is ordering and inventory.** Delete the record before you release the address, and regularly diff your A records against the public IPs your accounts actually hold.
{{% /tldr %}}

## What a dangling A record is

Take one hostname and follow it through its life. You launch an EC2 instance in `us-east-1` for a staging environment, allocate an Elastic IP so the address survives reboots, and create a record: `staging.example.com A 203.0.113.25`. (That address is from a documentation range; a real one would be something like `107.23.x.x`.)

Six months later the project moves to a container platform. Somebody terminates the instance and releases the Elastic IP, because since February 2024 AWS bills every public IPv4 address at $0.005 an hour and nobody wants to pay for an idle one. The DNS record lives in a different console, maybe a different company's console, and it stays.

From that moment `staging.example.com` still resolves to `203.0.113.25`, but the address is back in Amazon's pool. It is the DNS version of a use-after-free: the pointer is still there and the memory behind it now belongs to whoever allocates it next.

{{< image "dangling_dns_elastic_ip_subdomain_takeover/released_elastic_ip_dangling_record.webp" "Before and after panels: the A record for staging.example.com points at Elastic IP 203.0.113.25 in your AWS account, then at the same address in another AWS account" >}}

*Releasing the address without deleting the record leaves the hostname pointing at whoever holds the address next.*

You don't need an Elastic IP to get here. An instance with an auto-assigned public address gets a new one every time it is stopped and started, so an A record pointed at one of those goes stale teh first time someone restarts the box.

## How someone else ends up with your old address

AWS does not let you ask for a specific address from its pool, with one exception covered below. So the attack is fishing, and the method has barely changed since Matt Bryant described it at Bishop Fox in 2015 in {{< link href="https://bishopfox.com/blog/fishing-the-aws-ip-pool-for-dangling-domains" >}}Fishing the AWS IP Pool for Dangling Domains{{< /link >}}:

1. Build a big list of hostnames and the A records they resolve to.
2. Allocate as many Elastic IPs as the account allows.
3. Check each one against the list. Keep any match.
4. Release the rest and go again.

The {{< link href="https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each" >}}Intruder write-up{{< /link >}} from November 24, 2026 fills in the 2026 details. A new account can hold five Elastic IPs per region, and Service Quotas approved a raise to 25 per region without a support case. Releasing and re-allocating in the same region tended to return the same addresses, so their script rotated through regions to give each pool time to move on. That got them roughly 9,400 fresh addresses an hour. Their target list came from public bug bounty scopes, enumerated with subfinder, which is why they could report what they found.

How big is the pond? AWS publishes its address space at `https://ip-ranges.amazonaws.com/ip-ranges.json`. I summed the IPv4 prefixes tagged `EC2` in the file dated November 25, 2026: 80,391,997 addresses, which matches the "80 million" in the write-up. So 450,000 addresses is 0.56% of the space, and that sliver held 28 live records from a list limited to bug bounty programs.

{{< image "dangling_dns_elastic_ip_subdomain_takeover/aws_ec2_ipv4_addresses_by_region.webp" "Bar chart of AWS EC2 public IPv4 addresses in the 8 largest regions, led by us-east-1 with 21.6 million and us-west-2 with 10.8 million" >}}

*Data: {{< link href="https://ip-ranges.amazonaws.com/ip-ranges.json" >}}AWS ip-ranges.json{{< /link >}}, November 25, 2026.*

The published ranges overstate the real pool, since much of that space is held long term by other customers. Academic measurements suggest the reachable part is small enough to sweep. For a {{< link href="https://arxiv.org/abs/2204.05122" >}}2022 IEEE S&P paper{{< /link >}}, Eric Pauley and colleagues launched over 3 million servers in `us-east-1` across 101 days and received 1.5 million unique addresses, which they estimated at 56% of the available pool in that region. They found 5,446 exploitable domains.

The per-region numbers matter for a targeted attack. The ranges file gives the region of every prefix, so someone who wants your one stale record knows which pool to fish in. For a record in `eu-west-2` that is about 2.2 million addresses instead of 80 million, though Intruder saw far more duplicates when they stayed in one region.

## What the new owner of the address can do

A CNAME takeover, the better known kind, usually gives the attacker one thing: content served on your hostname through someone's hosting platform. An IP takeover gives them the whole machine behind the name. They can listen on any port and recieve whatever still gets sent there: old webhooks, cron jobs that post to an API, a mobile app build that still calls the staging host, sometimes with credentials attached.

They can also get a real certificate. Domain validation asks one question: can you answer for this name? With HTTP-01, the certificate authority resolves the hostname, connects to port 80 on the address it gets, and looks for a token file. The dangling record sends the CA straight to the attacker's instance.

{{< image "dangling_dns_elastic_ip_subdomain_takeover/http01_validation_dangling_a_record.webp" "Sequence diagram: the instance holding 203.0.113.25 requests a certificate, the certificate authority looks up the A record, fetches the ACME challenge from that address and issues the certificate" >}}

*The CA is doing its job correctly. The stale record is what lies to it.*

The {{< link href="https://softsec.rub.de/publications/ndss2018-cloud-strife/" >}}Cloud Strife paper{{< /link >}} from NDSS 2018 measured this end to end and found an aggressive attacker could go from allocation to a valid certificate in under 70 seconds.

Then there are cookies. If `example.com` sets a session cookie with `Domain=example.com`, browsers send it to every subdomain, including the one that now lands on a stranger's server. That is how a forgotten staging host turns into account takeover on the production app.

## Why AWS says it is your problem

Intruder's account received an abuse notice after 48 hours with the action "Blocked the ability to allocate and associate Elastic IP in all regions". The block was per account. They created a second account in the same AWS Organization, used the Elastic IP transfer feature to move the matched addresses over, and it worked. They suggested a monthly cap on allocations and organization-wide bans. On November 17 AWS replied that it plans no changes, since the takeover depends on customer-side DNS records.

That position is consistent with what AWS publishes. Its own {{< link href="https://aws.amazon.com/blogs/security/threat-tactic-spotlight-subdomain-takeover/" >}}subdomain takeover guidance{{< /link >}} from June 2026 covers CNAMEs to S3, CloudFront and Elastic Beanstalk, ships a sample AWS Config rule for those, and states that EC2 instances "are not subject to this tactic because they do not expose globally claimable DNS namespaces". That is true of names. It says nothing about A records and addresses, which is the gap here.

AWS does give you one tool. If you released an address by mistake, you can ask for that exact address back:

```bash
aws ec2 allocate-address --domain vpc --address 203.0.113.25
```

The {{< link href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing-eips-releasing.html" >}}EC2 docs{{< /link >}} say this fails once the address "has been allocated to another AWS account". So it is worth trying the minute you find a dangling record, and it tells you something either way. I couldn't test recovery for this post, as it needs an address the account released itself.

## Find the dangling records in your own zone

The check has two halves: which of your hostnames point into EC2 space, and which of those addresses your accounts still hold. The first half needs no AWS access at all. This script reads hostnames from a file, resolves them, and matches each address against the EC2 prefixes:

```python
#!/usr/bin/env python3
"""List hostnames whose A records point into AWS EC2 address space."""
import ipaddress, json, socket, sys, urllib.request

URL = "https://ip-ranges.amazonaws.com/ip-ranges.json"
ranges = json.load(urllib.request.urlopen(URL))
ec2 = [(ipaddress.ip_network(p["ip_prefix"]), p["region"])
       for p in ranges["prefixes"] if p["service"] == "EC2"]

for host in map(str.strip, open(sys.argv[1])):
    try:
        ips = sorted({a[4][0] for a in socket.getaddrinfo(host, 80, socket.AF_INET)})
    except socket.gaierror:
        print(f"{host:<28} does not resolve")
        continue
    for ip in ips:
        region = next((r for net, r in ec2 if ipaddress.ip_address(ip) in net), "-")
        print(f"{host:<28} {ip:<16} {region}")
```

I ran it on November 25 with Python 3.13 against the five Treasury names from the write-up, plus a few others for contrast:

```text
$ python3 ec2_records.py hosts.txt
ftp.treasury.gov             107.23.19.28     us-east-1
irssearch.treasury.gov       107.23.19.28     us-east-1
pcp.treasury.gov             107.23.19.28     us-east-1
rdgw.treasury.gov            107.23.19.28     us-east-1
ww5.treasury.gov             107.23.19.28     us-east-1
home.treasury.gov            23.205.89.138    -
home.treasury.gov            23.205.89.176    -
news.ycombinator.com         209.216.230.207  -
staging.example.com          does not resolve
```

All five reported names now resolve to a single `us-east-1` address, which is what a cleanup looks like from outside. A region in the third column is not a finding by itself. It only means the record depends on an EC2 address, so someone has to confirm the address is still yours.

That is the second half. Pull every public address your account holds in a region, Elastic or auto-assigned:

```bash
aws ec2 describe-addresses --region us-east-1 \
  --query 'Addresses[].PublicIp' --output text
aws ec2 describe-network-interfaces --region us-east-1 \
  --query 'NetworkInterfaces[].Association.PublicIp' --output text
```

Any hostname from the first list whose address is in neither output is dangling. I had no AWS credentials on the machine I wrote this on, so those two commands come from the CLI reference and were not run here. Repeat them for every region and every account, because one account you forgot produces false alarms.

If your zones are in Route 53 or Cloudflare, Assetnote's {{< link href="https://github.com/assetnote/ghostbuster" >}}Ghostbuster{{< /link >}} automates the same diff across every profile in `~/.aws/config` with `ghostbuster scan aws --allregions`. Its last PyPI release, 1.0.2, is from March 2023, so treat it as a starting point rather than something maintained.

The annoying part is the hostname list. Your DNS provider's export covers the zones you know about. Old zones at a registrar, a delegated subdomain a contractor set up, and records in a second Cloudflare account are where these things hide, and a certificate transparency search such as `https://crt.sh/?q=%25.example.com` is a decent way to find names you forgot existed.

## Fix the teardown order

The hole opens between two steps done in the wrong order, so most of the fix is sequencing.

- **Delete the record first, then release the address.** Remove the A record, wait out its TTL, and only then release the Elastic IP. Done in that order there is never a moment when the name points at an address you don't hold.
- **Keep the record and the address in one lifecycle.** If Terraform or CloudFormation creates both in the same stack, destroying the stack removes both. The stale records usually come from addresses made in code and DNS made by hand.
- **Point at names you own, not raw addresses.** A Route 53 alias to a load balancer or CloudFront distribution tracks the resource instead of a fixed address. Alias targets don't include Elastic IPs, so this means putting something in front of the instance. It also trades one risk for a smaller one, since CNAMEs to deleted resources dangle too.
- **Limit who can get a certificate.** A CAA record with the `accounturi` and `validationmethods` parameters ties issuance to your ACME account and to DNS validation: `example.com CAA 0 issue "letsencrypt.org; accounturi=https://acme-v02.api.letsencrypt.org/acme/acct/1234567890; validationmethods=dns-01"`. {{< link href="https://letsencrypt.org/docs/caa/" >}}Let's Encrypt documents both{{< /link >}}. An attacker holding your old address still controls port 80 but can no longer pass validation.
- **Stop scoping cookies to the parent domain.** A cookie with the `__Host-` prefix can't carry a `Domain` attribute, so it never reaches sibling subdomains.

None of this helps with records that are already stale. For those, only the audit above works, and it needs to run on a schedule. Quarterly is too slow when the attack takes 48 hours.

## Short-lived demos don't need a DNS record

A lot of dangling records start as something temporary: a demo for a client call, a webhook receiver for an afternoon of testing, a preview for one reviewer. Each gets a public address and a nice hostname, and the hostname outlives the box by years.

If the thing only has to be reachable for an hour, a tunnel avoids creating the record at all. With the app listening on port 8080 on your laptop or any machine, this is the command from the [Pinggy docs](https://pinggy.io/docs/):

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

It prints a URL like `https://xxxx.run.pinggy-free.link`. A free tunnel lasts 60 minutes and gets a new random URL each time, which is the point here: the name belongs to Pinggy's zone, not yours, and it stops existing when you close the session. There is nothing in your DNS to forget.

This is no replacement for a real staging environment, and a persistent custom domain on any tunnel service puts a record back in your zone, with the same cleanup duty as every other record.

## Check your zone this week

The research that surfaced those Treasury records covered less than 1% of the EC2 address space with one account and a Python script. The technique is eleven years old and AWS has said it is staying as it is. What you control is your own zone.

Export every A record you can find, run the script above, and compare the EC2 hits against `describe-addresses` in every account. If one doesn't match, delete the record before doing anything else, then try `allocate-address --address` to see whether the address is still unclaimed. And when you next tear down a box, do the DNS first.
