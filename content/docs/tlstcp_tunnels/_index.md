---
 title: "TLSTCP Tunnels" 
 description: "Create TLSTCP tunnels with Pinggy in a single command. Establish TLS-wrapped connections to your localhost using unique domains. Follow the guide for TLSTCP tunnels."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create TLSTCP Tunnels with Pinggy

Create a tunnel using a single command.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io\"}}}"
{{</ ssh_command >}}

TLSTCP is the wrapper on top TCP. It provides an option to connection to a TCP based service via TLS.
