---
 title: "Basic Authentication with HTTP Tunnel" 
 description: "Enable Basic Authentication with Pinggy HTTP tunnels. Learn how to configure and start tunnels with username and password for added security."
 date: 2023-08-20T14:15:25+05:30 
 draft: false 
---

# Basic Authentication

Pinggy provides a mechanism to authenticate visitor connections using basic
authentication. With basic authentication, browser would prompt visitor to insert client selected username:password as follows:

{{< figure src="/doc_img/basic_authentication.png" alt="Basic Authentication">}}

**Note: Both the username and password provided for basic authentication cannot contain the ':' (colon) character.**

Client can enable basic authentication as follows:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

One can add multiple username:password combination as follows:
{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username1:password1 b:username2:password2\"}}}"
{{< /ssh_command >}}

You can customize the command here:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false keepalive=true passwordCheck=true basicusername="username" basicpass="password" >}}
{{< /pinggytunnel >}}
