---
 title: "UDP Tunnels" 
 description: "Effortlessly create UDP tunnels with Pinggy using a single command. Reserve a port on the dashboard for a consistent connection. No complexities, just seamless tunneling for your localhost."
 date: 2024-07-10T14:15:25+05:30 
 draft: false 
---

# Create UDP Tunnels with Pinggy CLI

Using Pinggy CLI (beta) you can create UDP tunnels to localhost. UDP tunnels cannot be created using SSH command.

Step 1. [Download the Pinggy CLI](/cli).

Step 2. Start the UDP tunnel using the CLI with the following command: 

{{< ssh_command clionly="true">}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 udp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 udp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 udp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 udp@a.pinggy.io\"}}}"
{{</ ssh_command >}}

This command present user with a URL and a UDP port. Port allocation changes per connection. However, Pro users can reserve a persistent port on <https://dashboard.pinggy.io>
