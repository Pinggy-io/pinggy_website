---
 title: "Key Authentication with HTTP Tunnel" 
 description: "Learn to secure connections with Pinggy's key-based authentication. Follow easy steps for tunnel creation, customize commands, and enhance connection security effortlessly."
 date: 2023-12-07T01:15:25+05:30
 draft: false 
---

# Key Authentication

Pinggy offers a mechanism for authenticating visitor connections using key-based authentication.

Key-based authentication involves visitors providing an 'Authorization' header with the value `Bearer <key>` with each request made. Pinggy provides the option to set a collection of keys during tunnel creation.

Start tunnel with key authentication as follows:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\"}}}"
{{</ ssh_command >}}

Like basic authentication, one can set multiple keys as well.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key1 k:key2\"}}}"
{{</ ssh_command >}}

You can customize the command here:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false
keepalive=true keyauthentication=true keyauthentications=['samplekey'] >}}
{{< /pinggytunnel >}}

&nbsp;

If you run the command with your specified port where your service is running, you will get an output similar to the following:

{{< figure src="/doc_img/key_auth_terminal.webp" alt="Key Authentication With HTTP Tunnel">}}

Here, you can see that the tunnel is authenticated with the key `samplekey`.

{{< figure src="/doc_img/key_auth.webp" alt="Key Authentication With HTTP Tunnel">}}


## Allow CORS

By default, adding key authentication will stop all requests without a proper `Authorization` header. But this also interfares with the preflight requests for CORS. In order to allow the preflight requests without auth token, use the `x:passpreflight` option.

Just pass the optional `x:passpreflight` argument at the end of the command the command. In addition, add the `-t` option right after the ssh command.


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key x:passpreflight\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io k:key\"}}}"
{{</ ssh_command >}}