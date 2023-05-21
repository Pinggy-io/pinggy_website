---
 title: "Pinggy made windows remote desktop really remote" 
 date: 2023-05-01T01:15:25+05:30 
 draft: true 
 tags: ["guide", "windows", "RDP", "remote desktop"]
---

So, I was packing for my great trip yesterday, and realised that I need a way to access my home desktop in case of emergency. I was little skeptical about installing third party software like teamviewer. I wanted to access my PC using remote desktop only.

While searching for it, pinggy tunneling service sounds perfect for me. It does not need any software to be installed, preinstalled `ssh` command would used to make the tunnel. Provides persistent subdomain, so I can put it in a loop and it will automatically reconnect. So, I start digging around it.

Pinggy provides three types of solution, i.e. a) http, b) tcp, and c) tls. TCP tunnel seems perfect fit. So, I gave it a try. I open up the command prompt and fire the command.

![Fireing the SSH command to create tcp tunnel](/blog_img/rdp/command-1.png)

<br>
It got connected almost imediately and return me the address.

![Tunnel created and gave me the address](/blog_img/rdp/command-2.png)


It turns out that the TLS tunnel does not provide any extra port. It listen on the 443 port only. Pinggy route the connection based on the server name only. So, it is better than TCP because
1. I can put the ssh command in loop.
2. TLS is encrypted, so Pinggy it self cannot read the content.

