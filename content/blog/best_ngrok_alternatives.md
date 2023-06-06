---
 title: "Best 5 ngrok alternatives in 2023" 
 date: 2023-02-01T14:15:25+05:30
 lastmod: 2023-06-05T14:15:25+05:30
 draft: false 
 tags: ["guide", "comparison"]
 og_image: "/blog/images/best_ngrok_alternatives/img1.webp"
---

<a href="https://ngrok.com" target="_blank">Ngrok</a> is an ingress-as-a-service that provides tunnels facilitating instant ingress to your apps in any cloud, private network, or device.
Although very mature, ngrok has its own limitations of being a complex ingress-as-a-service. In this article, we will explore the top 5 alternatives of ngrok in 2023.

{{< figure src="../images/best_ngrok_alternatives/img1.webp" alt="Top 5 ngrok alternatives of 2023" >}}


## List of top 5 Ngrok alternatives in 2023 

1. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}
2. {{< link href="https://theboroer.github.io/localtunnel-www/" >}}Localtunnel{{< /link >}}
3. {{< link href="https://localxpose.io/" >}}LocalXpose{{< /link >}}
4. {{< link href="https://zrok.io/" >}}Zrok{{< /link >}}
4. {{< link href="https://localhost.run/" >}}localhost.run{{< /link >}}

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

Now let us find out the best 5 ngrok alternatives which are simpler to set up, yet offers all the interesting features for your productivity.

## 1. Pinggy.io

[Pinggy.io](https://pinggy.io) is a tunneling tool that gives a public address to access your localhost, even while sitting behind a NAT or a firewall -- all this in a single command. With this ngrok alternative, without downloading anything, a single command gives users access to your website / app hosted in localhost without configuring the cloud, or any port forwarding, or DNS, or VPN.

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
* Provides a terminal user interface and web debugger to monitor, inspect, modify, and replay HTTP requests.
* Works on Mac / PC / Linux.
* Also provides TCP tunnels to access IoT devices and custom protocols.
* Single command handles all configuration as well as authentication.
* Supports custom domains.
* No need to sign up to get test tunnels - just visit [https://pinggy.io](https://pinggy.io) to get the command.

#### Cons of pinggy

* No UDP tunnels
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

[LocalXpose](https://localxpose.io/) is a reverse proxy tool that provides a public URL to localhost. This is one of the most feature complete alternatives of ngrok. By simply downloading their client you can create HTTP / HTTPS tunnels, and also TCP / TLS as well as UDP tunnels. Among the three it is the only one that supports UDP traffic. LocalXpose also provides a built-in file server to share your files instantly. 

<img src="/blog_img/localxpose.png" alt="localxpose screenshot">

#### Pros of LocalXpose

* UDP tunnel support
* Wildcard custom domains
* File server built in
* Request response viewer and editor

#### Cons of LocalXpose

* Need to download the client in order to start a tunnel
* No support for being used as a library / plugin


## 4. Zrok

{{< link href="https://zrok.io/" >}}Zrok{{< /link >}} is an impressive open source ngrok alternative that operates on the principles of zero trust networking. Built on top of OpenZiti, a programmable zero trust network overlay, zrok provides users with a secure and efficient way to share resources both publicly and privately.


Users can download zrok from GitHub {{< link href="https://github.com/openziti/zrok/releases/latest" >}}https://github.com/openziti/zrok/releases/latest{{< /link >}}. It is one of the best self-hosted alternatives of ngrok.

#### Pros of zrok

* Open source
* Self-hosted
* Private network sharing
* Built-in file server

#### Cons of zrok

* UDP tunnels not yet available, will be coming soon in v0.4.
* Traffic introspection and replay features are not available.


## 5. localhost.run

{{< link href="https://localhost.run/" >}}localhost.run{{< /link >}} is possibly the simplest tunneling tool which is client-less and can instantly make a locally running application available on an internet accessible URL.

Just run the following command to create a tunnel to port `3000`:

```
ssh -R 80:localhost:8080 localhost.run
```

#### Pros of localhost.run

* Simplicity: Localhost.run offers a straightforward and simple setup process. You only need to execute a single command in your terminal to start the tunneling process, making it easy for developers to get started quickly.
* No installation required: Unlike ngrok, which requires installation and configuration, localhost.run doesn't need any software installation. You can use it directly from the command line, which can be convenient, especially for quick testing or prototyping.
* Free to use: As of my knowledge cutoff in September 2021, localhost.run offers a free tier, allowing you to use the service without any cost.

#### Cons of localhost.run

* Limited features: Compared to ngrok and other alternatives such as Pinggy, localhost.run may have a significantly more limited set of features. For example, it may not provide advanced functionalities such as custom domains, request inspection, or TCP tunneling.


## Conclusion

In conclusion, we discussed some of the best alternatives of ngrok in 2023, some of which are much easier to use without the need to download anything, such as localhost.run and Pinggy. Some are packed with features such as LocalXpose. We also took a look at Zrok which is an open-source and self-hosted alternative to ngrok. 