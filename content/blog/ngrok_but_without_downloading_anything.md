---
 title: "Ngrok - But without downloading anything" 
 date: 2023-08-12T14:15:25+05:30
 draft: false 
 og_image: "/assets/header5.png"
---

Paste this command to get a tunnel to localhost, port 8000:

```
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
```

{{< figure src="../images/qr/qr2.gif" alt="Ngrok download not required - localhost tunnels with a single command using Pinggy" >}}

Ngrok is an excellent tool loved by developers worldwide. If you need to expose your localhost server, Ngrok comes in handy. However, utilizing Ngrok requires downloading a platform-specific program (binary) for your operating system, be it Mac, Windows, or Linux. Subsequently, you must make the binary executable and launch it from the terminal. This process of obtaining Ngrok can often be cumbersome.

**{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} is an easy-to-use alternative that you do not need to download.** Without downloading any program, you can just run one command to get a tunnel.  


## Tunneling without downloading anything
You remotely access your Raspberry Pi desktop from anywhere using *Remote Desktop Protocol* (RDP). Even if your Pi is outside your local network, you can access it easily over the internet using Pinggy.


#### Paste one command to start tunnel:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true >}}
{{< /pinggytunnel >}}

<br>

You will immediately get an HTTP tunnel to your localhost with the Pinggy command. No need to download any tool like ngrok!

## Logging, Inspecting & Replaying requests without downloading anything

When you start Pinggy with the *Web Debugger* option enabled, you can access the inspector by visiting: [http://localhost:4300](http://localhost:4300). You can change this port by modifying the command above.

{{< figure src="/assets/webdebug.png" alt="Logging, Inspecting & Replaying HTTP requests using Pinggy" >}}

The Pinggy web debugger enables you to:

1. Inspect request headers and body.
2. Inspect response headers and body.
3. Replay requests.
4. Modify requests and subsequently replay them.

## Conclusion

With Pinggy in your arsenal, the process of sharing your localhost server becomes a breeze. Say goodbye to the cumbersome steps of downloading, configuring, and executing binaries. Instead, welcome a streamlined workflow that allows you to concentrate on refining your development work.