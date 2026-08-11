---
title: "What Is SDN (Software Defined Networking)? Architecture, Protocols, and Use Cases"
description: "SDN separates network control from forwarding hardware. Learn the architecture, key protocols like OpenFlow and P4, top open-source controllers, and how Google and AWS use it."
date: 2026-06-19T14:15:25+05:30
lastmod: 2026-06-19T14:15:25+05:30
draft: false
og_image: "images/what_is_sdn_software_defined_networking/sdn_overview.webp"
tags: ["guide", "networking", "sdn"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgIm5hbWUiOiAiV2hhdCBJcyBTRE4gKFNvZnR3YXJlIERlZmluZWQgTmV0d29ya2luZyk/IEFyY2hpdGVjdHVyZSwgUHJvdG9jb2xzLCBhbmQgVXNlIENhc2VzIiwKICAiZGVzY3JpcHRpb24iOiAiQSBkZXZlbG9wZXItZnJpZW5kbHkgZ3VpZGUgdG8gU29mdHdhcmUgRGVmaW5lZCBOZXR3b3JraW5nIChTRE4pOiBob3cgdGhlIGFyY2hpdGVjdHVyZSB3b3Jrcywga2V5IHByb3RvY29scyBsaWtlIE9wZW5GbG93IGFuZCBQNCwgcG9wdWxhciBjb250cm9sbGVycyBPTk9TIGFuZCBPcGVuRGF5bGlnaHQsIGFuZCByZWFsIGRlcGxveW1lbnRzIGF0IEdvb2dsZSBhbmQgaW4gdGhlIGNsb3VkLiIsCiAgImtleXdvcmRzIjogWyJTRE4iLCAiU29mdHdhcmUgRGVmaW5lZCBOZXR3b3JraW5nIiwgIk9wZW5GbG93IiwgIlA0IiwgIk9OT1MiLCAiT3BlbkRheWxpZ2h0IiwgIlNELVdBTiIsICJORlYiLCAibmV0d29yayB2aXJ0dWFsaXphdGlvbiJdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "what_is_sdn_software_defined_networking/sdn_overview.webp" "What Is SDN" >}}

**Software Defined Networking (SDN)** is a network architecture that separates the control plane - the logic that decides where traffic goes - from the data plane - the hardware that actually forwards packets. In traditional networking, both live inside the same physical device. SDN moves the decision-making into centralized software, making the entire network programmable through an API.

Traditional network devices handle routing decisions and packet forwarding together. That design worked when networks were small and static, but it means every configuration change requires touching each device individually, there is no global view of the network, and routing logic is locked inside proprietary hardware. SDN solves all three problems at once.

<table style="width:100%;border-collapse:collapse;margin-bottom:1.2em;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em 0.7em;text-align:left;background:#f5f7fa;font-weight:bold;">Aspect</th>
  <th style="border:1px solid #ddd;padding:0.5em 0.7em;text-align:left;background:#f5f7fa;font-weight:bold;">Traditional Networking</th>
  <th style="border:1px solid #ddd;padding:0.5em 0.7em;text-align:left;background:#f5f7fa;font-weight:bold;">SDN</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Configuration</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Per-device CLI, one at a time</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Centralized controller, API-driven</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Network visibility</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">No device knows the full topology</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Controller has global topology view</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Control logic</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Distributed inside each device</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Centralized in controller software</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Change speed</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Manual, slow propagation</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Programmatic, near-instant</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Vendor lock-in</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">High (proprietary OS per device)</td>
  <td style="border:1px solid #ddd;padding:0.5em 0.7em;">Lower (open southbound APIs)</td>
</tr>
</tbody>
</table>

{{% tldr %}}

1. SDN decouples the **control plane** (routing decisions) from the **data plane** (packet forwarding hardware).
2. A centralized **SDN controller** programs all forwarding devices via southbound APIs like <a href="https://opennetworking.org/software-defined-standards/specifications/" target="_blank">OpenFlow</a> or <a href="https://p4.org/" target="_blank">P4</a>.
3. Applications talk to the controller via northbound REST/gRPC APIs to implement load balancing, firewalling, traffic engineering, and more.
4. Leading open-source controllers: <a href="https://opennetworking.org/onos/" target="_blank">ONOS</a> (carrier/service provider), <a href="https://www.opendaylight.org/" target="_blank">OpenDaylight</a> (cloud integration, most widely deployed).
5. Google's B4 WAN uses SDN to hit 70% average link utilization vs. roughly 30-40% with traditional routing. AWS VPCs and Google Cloud VPCs are built on the same principles.
6. Watch for: the controller is a single point of failure if not clustered; reactive flow installation adds latency to first-packet processing.

{{% /tldr %}}

## How the Three-Layer SDN Architecture Works

{{< image "what_is_sdn_software_defined_networking/sdn_arch.webp" "SDN Architecture Works" >}}

SDN splits the network into three planes that communicate through defined interfaces.

The **data plane** (infrastructure layer) consists of physical or virtual switches and routers whose only job is to forward packets. They maintain flow tables - a list of match-action rules pushed down by the controller. When a packet arrives matching an existing rule, the device applies the action (forward out a specific port, drop, rewrite a header). When there is no match, it asks the controller what to do. The devices are intentionally simple.

The **control plane** is the SDN controller. It holds a complete view of the network topology, runs path computation, and pushes flow table entries to the data plane devices. It exposes two APIs: a **southbound API** for talking to forwarding hardware (OpenFlow, NETCONF, P4Runtime), and a **northbound API** for talking to applications (usually REST or gRPC). The controller decides; the hardware executes.

The **application plane** sits above the controller. Network functions that used to run as distributed protocols inside every device - load balancers, firewalls, traffic engineers, intrusion detection systems - now run as software that calls the northbound API. You can implement a new routing policy by writing an application, not by pushing config to 200 routers one at a time.

## SDN Protocols: OpenFlow, P4, and NETCONF

**OpenFlow** is the original SDN southbound protocol, developed at Stanford and maintained by the <a href="https://opennetworking.org/" target="_blank">Open Networking Foundation (ONF)</a>. It defines how the controller communicates with switches: the controller installs flow rules (FLOW_MOD messages), and switches report unmatched packets (PACKET_IN messages) and statistics. OpenFlow 1.3 is the most widely deployed version in production; OpenFlow 1.5.1 is the current latest spec, supporting 41 match fields. OpenFlow's limitation is that the match-action model is fixed in the specification - you can only match fields OpenFlow already knows about.

**P4** (Programming Protocol-Independent Packet Processors) removes that constraint. With P4, you define the packet parser, the match fields, the actions, and the processing pipeline yourself - in code that gets compiled and deployed to the forwarding hardware. This enables things OpenFlow cannot handle: custom tunneling protocols, in-network telemetry where the switch itself timestamps latency data into packets, and in-network load balancing at line rate. P4 runs on Intel Tofino ASICs, Netronome SmartNICs, FPGAs, and a software reference implementation (BMv2) for local testing. Cloud providers and network vendors are increasingly deploying P4-programmable hardware for use cases that OpenFlow's fixed model cannot handle.

**NETCONF** (RFC 6241) operates over SSH and manages full device configuration - interfaces, routing tables, policies - using XML-encoded YANG data models. Unlike OpenFlow, which manages per-flow forwarding state, NETCONF configuration persists across device restarts. **RESTCONF** (RFC 8040) exposes the same NETCONF datastore over standard HTTP methods with JSON encoding, making it usable from any language without SSH handling. These two are more about network automation than strict SDN, but they are part of the same stack in modern deployments.

## Top SDN Controllers in 2026: ONOS, OpenDaylight, and Ryu

**ONOS** (Open Network Operating System) is the strongest choice for carrier and service provider networks. It is designed from the ground up for distributed deployments - native clustering with a distributed datastore handles controller high availability. It supports OpenFlow, P4, NETCONF, and exposes northbound REST, gRPC, and YANG APIs. ONOS is explicitly built for large-scale production environments and handles migrations from legacy to fully SDN networks. A <a href="https://aptira.com/sdn-controller-comparison/" target="_blank">2025 evaluation by Aptira</a> ranked it first among open-source controllers.

**OpenDaylight** (ODL) is the most widely deployed open-source SDN controller. It uses a modular Java/OSGi architecture and has the broadest protocol support: OpenFlow, NETCONF, RESTCONF, BGP, PCEP, OVSDB, and more. This makes it well-suited for multi-vendor environments and cloud integration, particularly with OpenStack and Kubernetes. ODL is under the Linux Foundation Networking and has a large ecosystem of commercial derivatives.

**Ryu** is a Python-based framework for writing SDN applications rather than a production controller. It supports OpenFlow 1.0-1.5 and has no native clustering. It is what you reach for when researching an idea or building a one-off SDN prototype - approachable and hackable, not something you would run a production data center on.

## Real-World SDN Deployments and Use Cases

Google's B4 WAN, described in a landmark <a href="https://cseweb.ucsd.edu/~vahdat/papers/b4-sigcomm13.pdf" target="_blank">SIGCOMM 2013 paper</a>, connects Google's data centers globally using OpenFlow on commodity merchant silicon switches. A centralized traffic engineering controller drives links to near 100% utilization on peak links, with 70% average utilization across the WAN - compared to roughly 30-40% with traditional routing protocols. That 2x efficiency improvement means the same throughput from fewer or cheaper links.

Google Cloud's Andromeda and AWS's Nitro system both apply SDN principles to cloud networking. In both cases, the forwarding logic (routing, security groups, NAT, load balancing) runs entirely in software on the physical servers hosting VMs, not on intermediate network appliances. The result is that network functions are provisioned in seconds through an API. The same SDN model also underpins how IoT fleets are managed remotely - devices without public IPs can be reached via programmatic tunneling, the same separation-of-concerns principle at a smaller scale. (If you are building this yourself, see our guide on {{< link href="/blog/access_iot_devices_from_anywhere/" >}}remote IoT device access{{< /link >}}.)

In enterprise WAN, these ideas appear as **SD-WAN**. Branch offices connect over multiple links (MPLS, broadband, LTE) and a centralized controller handles path selection and application-aware routing. Enterprises replacing MPLS with SD-WAN consistently report 20-50% WAN cost reductions.

## SDN vs NFV vs SD-WAN: Key Differences

These three get confused because they are often deployed together, but they solve different problems.

SDN virtualizes **network control** - it makes forwarding logic programmable and centralized. NFV (Network Functions Virtualization) virtualizes **network appliances** - it takes hardware boxes (firewalls, load balancers, WAN optimizers) and runs them as software on commodity x86 servers. NFV does not require SDN, but the two complement each other: SDN's programmable network steers traffic to NFV functions in the right order, a pattern called Service Function Chaining.

SD-WAN is a specific application of SDN principles to WAN connectivity. It is not a general-purpose controller - it is SDN applied to the specific problem of connecting geographically dispersed offices over commodity internet links.

In a modern enterprise, SDN typically manages the internal data center network, NFV runs virtualized firewalls and load balancers on standard servers, and SD-WAN connects branch offices to headquarters and cloud providers.

## SDN Limitations and Tradeoffs

The SDN controller is a critical dependency. If it fails and you have not clustered it, your data plane has no decision-maker. Both ONOS and OpenDaylight support clustering, but distributed controllers add their own operational complexity.

There is also a scalability ceiling. Research shows current controllers handle around 100,000 flow setup requests per second. A large data center with millions of VMs can need tens of millions of new flows per second during traffic bursts. This is why proactive flow installation (pre-installing rules before traffic arrives) matters more than it might seem in theory.

Reactive flow installation adds latency to the first packet of every new flow. The switch sends it to the controller, waits for a response, then forwards. For latency-sensitive applications, you need to pre-install rules for predictable traffic patterns, which reduces some of the flexibility SDN theoretically offers.

Finally, the controller and its southbound channel are a high-value attack target. Compromising the controller means rewriting the forwarding logic of the entire network. The southbound channel should run over TLS, and the northbound API needs authentication and rate limiting.

## Conclusion

SDN turns the network into programmable infrastructure. The architecture - centralized control, distributed forwarding, API-driven configuration - is what lets Google run its WAN at 70% utilization, what lets AWS provision a VPC in seconds, and what lets enterprises stop touching each router individually to roll out a policy change.

For most developers, the practical entry points are OpenFlow-based controllers for lab work (Ryu for quick experiments, OpenDaylight or ONOS for production), P4 for anything requiring programmable forwarding beyond fixed match-action tables, and NETCONF/RESTCONF for automating device configuration on existing infrastructure.

The SDN and NFV market was valued at USD 20.8 billion in 2024 and is projected to reach USD 54.5 billion by 2033, driven by the straightforward economics of running network logic in software instead of configuring proprietary hardware one box at a time.

