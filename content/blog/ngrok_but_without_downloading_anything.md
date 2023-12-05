---
 title: "Ngrok - But without downloading anything" 
 date: 2023-08-12T14:15:25+05:30
 draft: false 
 og_image: "/assets/header.webp"
 description: "Ngrok download not required. Just paste one command to get localhost tunnels. Ngrok requires downloading a platform-specific program (binary) for your operating system, be it Mac, Windows, or Linux. With Pinggy that is replaced by one command."
---

Paste this command to get a tunnel to localhost, port 8000:

```
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
```

<div class="my-4 videocontainer ratio ratio-16x9">
  <video preload="none" onclick="this.paused?this.play():this.pause();" loop 
    poster="/assets/tunnelvideothumb.jpg" >
    <source src="../images/qr/qr.webm" type="video/mp4">
      Your browser does not support HTML video.
  </video>
</div>

Ngrok is an excellent tool loved by developers worldwide. If you need to expose your localhost server, Ngrok comes in handy. However, utilizing Ngrok requires downloading a platform-specific program (binary) for your operating system, be it Mac, Windows, or Linux. Subsequently, you must make the binary executable and launch it from the terminal. This process of obtaining Ngrok can often be cumbersome.

**{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} is an easy-to-use alternative that you do not need to download.** Without downloading any program, you can just run one command to get a tunnel.

## Tunneling without downloading anything

Pinggy, is a hassle-free solution for tunneling without downloads. With just one terminal command, Pinggy creates secure tunnels to your localhost server directly through the terminal. No need for platform-specific downloads and installations – Pinggy HTTP / TCP / TLS tunnels make server exposure effortless and efficient for developers worldwide.

#### Paste one command to start tunnel:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true >}}
{{< /pinggytunnel >}}

<br>

You will immediately get an HTTP tunnel to your localhost with the Pinggy command. No need to download any tool like ngrok!

## Logging, Inspecting & Replaying requests without downloading anything

When you start Pinggy with the _Web Debugger_ option enabled, you can access the inspector by visiting: [http://localhost:4300](http://localhost:4300). You can change this port by modifying the command above.

{{< figure src="/assets/webdebug.png" alt="Logging, Inspecting & Replaying HTTP requests using Pinggy" >}}

The Pinggy web debugger enables you to:

1. Inspect request headers and body.
2. Inspect response headers and body.
3. Replay requests.
4. Modify requests and subsequently replay them.

## Conclusion

With Pinggy in your arsenal, the process of sharing your localhost server becomes a breeze. Say goodbye to the cumbersome steps of downloading, configuring, and executing binaries. Instead, welcome a streamlined workflow that allows you to concentrate on refining your development work.
