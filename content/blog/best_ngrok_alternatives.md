---
 title: "Best ngrok alternatives for localhost tunnels" 
 date: 2023-02-01T14:15:25+05:30 
 draft: false 
 tags: ["guide", "comparison"]
 og_image: "/blog_img/localxpose.png"
---

<a href="https://ngrok.com" target="_blank">Ngrok</a> is an ingress-as-a-service that provides tunnels facilitating instant ingress to your apps in any cloud, private network, or device.
Although very mature, ngrok has its own limitations of being a complex ingress-as-a-service. In this article we will explore some top 3 alternatives of ngrok.

## Overview of ngrok
Before jumping in we will have a brief overview of Ngrok.

ngrok provides tunnels for ingress through its programmable network edge. Additionally, it offers observability as well as the ability to change traffic parameters such as headers on the go to your apps with no code changes. In order to use ngrok you must download the ngrok client and sign up to get an account.

#### Pros of ngrok

* Ngrok client is available for Linux, Mac, and Windows.
* Support for authenticated URLs.
* Request response introspection and replay capability.
* Supports custom domains.
* Has plenty of integrations and plugins.

#### Cons of ngrok

* Users visiting an ngrok url are presented with a ngrok page first.
* Requirement of downloading the ngrok client binary.
* Need to sign in to the ngrok client to use the service.

## 1. Pinggy.io

[Pinggy.io](https://pinggy.io) is a tunneling tool that gives a public address to access your localhost, even while sitting behind a NAT or a firewall -- all this in a single command. Without downloading anything, the pinggy command gives users access to your website / app hosted in localhost without configuring the cloud, or any port forwarding, or DNS, or VPN.

To get how simple it is to open a tunnel, here is an example. If you want to share your React app running on `localhost:3000`, you can do so using pinggy with the command:
```
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```
<div class="my-2 videocontainer ratio ratio-16x9">
                    <video preload="none" onclick="this.paused?this.play():this.pause();" loop poster="/assets/tunnelvideothumb.jpg" >
                        <source src="/assets/tunnelvideo.mp4" type="video/mp4">
                        Your browser does not support HTML video.
                      </video>
</div>

#### Pros of pinggy

* No need to download anything.
* Works on Mac / PC / Linux.
* Also provides TCP tunnels to access IoT devices and custom protocols.
* Single command handles all configuration as well as authentication.
* Supports custom domains.
* No need to sign up to get test tunnels - just visit [https://pinggy.io](https://pinggy.io) to get the command.

#### Cons of pinggy

* Request introspection and replay features are not available yet and are supposed to come soon.
* No option of password-protected URLs out of the box.



## 2. Localtunnel

[Localtunnel](https://localtunnel.github.io/www/) is a npm package that lets you create http / https tunnels to localhost. It provides a random subdomain when you run it through your terminal. Being a node package, localtunnel can be integrated to your applications as a library and you can use it to test your nodejs apps.

<img src="/blog_img/localtunnel.png" alt="localtunnel screenshot">

#### Pros of localtunnel

* NPM Package, can be used as a JS library
* Works on Mac / PC / Linux.
* Simple to use

#### Cons of localtunnel

* No tcp tunnels
* No tls tunnels
* No custom domain or subdomain support.
* Being a node package it cannot be used without installing nodejs, or in IoT like environments that do not support nodejs



## 3. LocalXpose

[LocalXpose](https://localxpose.io/) is a reverse proxy tool that provides a public URL to localhost. By simply downloading their client you can create HTTP / HTTPS tunnels, and also TCP / TLS as well as UDP tunnels. Among the three it is the only one that supports UDP traffic. LocalXpose also provides a built-in file server to share your files instantly. 

<img src="/blog_img/localxpose.png" alt="localxpose screenshot">

#### Pros of LocalXpose

* UDP tunnel support
* Wildcard custom domains
* File server built in
* Request response viewer and editor

#### Cons of LocalXpose

* Need to download the client in order to start a tunnel
* No support for being used as a library / plugin
