---
 title: "TCP Tunnels" 
 description: "Effortlessly create TCP tunnels with Pinggy using a single command. Reserve a port on the dashboard for consistent connections and seamless localhost tunneling."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create TCP Tunnels with Pinggy

Create a tunnel using a single command.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 tcp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 tcp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 tcp@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 tcp@a.pinggy.io\"}}}"
{{</ ssh_command >}}

This command present user with a URL and a TCP port. Port allocation changes per connection. However, one can reserve a port on <https://dashboard.pinggy.io>
