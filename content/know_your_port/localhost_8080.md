---
title: "localhost:8080 - Web Server and Application Port Guide"
description: "Complete guide to localhost:8080 - the popular alternative HTTP port used by Tomcat, Jenkins, development servers, and web applications."
date: 2025-01-30T10:00:00+05:30
lastmod: 2026-05-23T10:00:00+05:30
draft: false
tags: ["localhost", "port", "web server", "tomcat", "jenkins", "http"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
  <h2 style="margin: 0 0 15px 0; color: white; font-size: 2.2em;">localhost:8080</h2>
  <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9); font-size: 1.1em;">Alternative HTTP Port for Web Servers</p>
  <a href="http://localhost:8080" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3); transition: all 0.3s ease; border: none;">
    🌐 Open localhost:8080
  </a>
  <p style="margin: 15px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;">
    Access your web server or application running on port 8080
  </p>
</div>

Port 8080 is the unprivileged HTTP port most projects pick when port 80 is taken. On Linux and macOS, binding to ports below 1024 needs root (or the `CAP_NET_BIND_SERVICE` capability on Linux); 8080 is one of the "alternate HTTP" numbers in IANA's port registry (registered as `http-alt`) and stays out of root territory. That's the main reason it caught on.

`localhost` resolves to `127.0.0.1` on IPv4 or `::1` on IPv6, both pointing at the machine you're on. So `localhost:8080` means "whatever process is listening on TCP port 8080 of this machine." Apache Tomcat picked 8080 as a default decades ago, Jenkins inherited it, and the broader Java ecosystem locked it in. Plenty of non-Java tools default to 8080 today too - code-server, LocalAI, and Open WebUI are common modern examples.

---

## Services and Software That Use Port 8080

Port 8080 is not tied to a single service by default, so many different applications use it based on their configuration. Here are the main categories:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">☕ Java Application Servers</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://tomcat.apache.org/" >}}Apache Tomcat{{< /link >}}</strong>: Java servlet container and web server</li>
<li><strong>{{< link href="https://spring.io/projects/spring-boot" >}}Spring Boot{{< /link >}}</strong>: Java framework with embedded Tomcat server</li>
<li><strong>{{< link href="https://www.wildfly.org/" >}}JBoss/WildFly{{< /link >}}</strong>: Enterprise Java application server</li>
<li><strong>{{< link href="https://www.eclipse.org/jetty/" >}}Jetty{{< /link >}}</strong>: Lightweight web server and servlet engine</li>
<li><strong>{{< link href="https://glassfish.org/" >}}GlassFish{{< /link >}}</strong>: Java EE application server</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🔧 CI/CD & DevOps Tools</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://www.jenkins.io/" >}}Jenkins{{< /link >}}</strong>: Automation server for continuous integration</li>
<li><strong>{{< link href="https://docs.gitlab.com/runner/" >}}GitLab Runner{{< /link >}}</strong>: CI/CD runner web interfaces</li>
<li><strong>{{< link href="https://www.sonatype.com/products/nexus-repository" >}}Nexus Repository{{< /link >}}</strong>: Artifact repository manager</li>
<li><strong>{{< link href="https://jfrog.com/artifactory/" >}}Artifactory{{< /link >}}</strong>: Universal artifact repository</li>
<li><strong>{{< link href="https://www.jetbrains.com/teamcity/" >}}TeamCity{{< /link >}}</strong>: JetBrains CI/CD server</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🌐 Web Servers & Proxies</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://nginx.org/" >}}Nginx{{< /link >}}</strong>: Reverse proxy and web server</li>
<li><strong>{{< link href="https://httpd.apache.org/" >}}Apache HTTP Server{{< /link >}}</strong>: Alternative HTTP port configuration</li>
<li><strong>{{< link href="https://www.haproxy.org/" >}}HAProxy{{< /link >}}</strong>: Load balancer and proxy server</li>
<li><strong>{{< link href="http://www.squid-cache.org/" >}}Squid{{< /link >}}</strong>: Caching proxy server</li>
<li><strong>{{< link href="https://caddyserver.com/" >}}Caddy{{< /link >}}</strong>: Modern web server with automatic HTTPS</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🐳 Development & Containers</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://github.com/coder/code-server" >}}code-server{{< /link >}}</strong>: VS Code in the browser; defaults to <code>127.0.0.1:8080</code></li>
<li><strong>{{< link href="https://www.adminer.org/" >}}Adminer{{< /link >}}</strong>: single-file DB admin UI, commonly served on 8080 via PHP's built-in server</li>
<li><strong>{{< link href="https://www.docker.com/" >}}Docker{{< /link >}} containers</strong>: 8080 is the most-used host-side port in published <code>compose</code> examples</li>
<li><strong>{{< link href="https://kubernetes.io/" >}}Kubernetes{{< /link >}} services</strong>: convention for in-cluster HTTP service ports</li>
<li><strong>{{< link href="https://webpack.js.org/configuration/dev-server/" >}}webpack-dev-server{{< /link >}}</strong>: defaults to port 8080 since v4</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🤖 AI & Local Apps</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://localai.io/" >}}LocalAI{{< /link >}}</strong>: drop-in OpenAI-compatible API for local models, defaults to port 8080</li>
<li><strong>{{< link href="https://openwebui.com/" >}}Open WebUI{{< /link >}}</strong>: browser GUI for Ollama and OpenAI-compatible backends; container listens on 8080 internally (docs map host <code>3000:8080</code>)</li>
<li><strong>{{< link href="https://github.com/Mintplex-Labs/anything-llm" >}}AnythingLLM{{< /link >}}</strong> and other RAG UIs: frequently exposed on 8080 in Docker setups</li>
</ul>
</div>

</div>

The Java tools above are what made 8080 famous; the AI/dev tools are why you'll see it on a fresh machine in 2026. If you're running more than one of them at once, you're going to collide. Skip to the troubleshooting section for the conflict-resolution dance.

---

## How to troubleshoot localhost:8080

If you can't access `localhost:8080`, here's how to diagnose and fix common web server issues:

<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #856404; margin: 0 0 15px 0;">🔍 Step 1: Check if the Service is Running</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> Confirm that your web server or application is active on port 8080.</p>
<p style="margin: 0;"><strong>How to check:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Tomcat:</strong> Check if Tomcat service is running and accessible</li>
<li><strong>Jenkins:</strong> Verify Jenkins service status and startup logs</li>
<li><strong>Spring Boot:</strong> <code>mvn spring-boot:run</code> or <code>java -jar app.jar</code></li>
<li><strong>Check logs:</strong> Look for "Listening on port 8080" or similar messages</li>
</ul>
</div>

<div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #0c5460; margin: 0 0 15px 0;">🚫 Step 2: Resolve port conflicts</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> find out what else is on 8080 and either stop it or move your app.</p>
<p style="margin: 0;"><strong>How to fix:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Find the process</strong>: <code>lsof -iTCP:8080 -sTCP:LISTEN</code> on Linux/macOS, or <code>netstat -ano | findstr :8080</code> on Windows. <code>ss -lptn 'sport = :8080'</code> works on modern Linux without <code>lsof</code>.</li>
<li><strong>Stop it gracefully first</strong>: <code>kill &lt;PID&gt;</code> (sends SIGTERM). Only fall back to <code>kill -9 &lt;PID&gt;</code> if the process refuses to exit, since SIGKILL skips cleanup.</li>
<li><strong>Or move your app</strong>: 8081 is the conventional next step; 8081-8089 are the usual escape ladder when 8080 is taken.</li>
</ul>
</div>

<div style="background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #721c24; margin: 0 0 15px 0;">🔧 Step 3: Confirm the configured port</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> verify the service actually thinks it's on 8080. Most "it should be running" issues are a config drift somewhere.</p>
<p style="margin: 0;"><strong>Where to look:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Tomcat:</strong> the <code>Connector port="8080"</code> attribute in <code>conf/server.xml</code></li>
<li><strong>Spring Boot:</strong> <code>server.port</code> in <code>application.properties</code>/<code>application.yml</code>, or <code>SERVER_PORT</code> env var (which overrides the file)</li>
<li><strong>Jenkins:</strong> <code>--httpPort=8080</code> on the war launcher, or <code>JENKINS_PORT</code> in <code>/etc/default/jenkins</code> / the systemd unit</li>
<li><strong>code-server:</strong> <code>--bind-addr</code> flag or the <code>bind-addr</code> line in <code>~/.config/code-server/config.yaml</code></li>
</ul>
</div>

<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #155724; margin: 0 0 15px 0;">🌐 Step 4: Test the Connection</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> Verify that the web server is accessible.</p>
<p style="margin: 0;"><strong>How to test:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Browser:</strong> Navigate to <code>http://localhost:8080</code></li>
<li><strong>Command line:</strong> <code>curl http://localhost:8080</code></li>
<li><strong>Network access:</strong> Use your IP address like <code>http://192.168.1.100:8080</code></li>
</ul>
</div>

---

## Access localhost:8080 from Other Devices

If you can not reach localhost:8080 from other devices, it is probably because you are on a different network. Use {{< link href="https://pinggy.io/" >}}Pinggy tunnel{{< /link >}} to easily access it from anywhere:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

This command creates a secure tunnel that forwards traffic from a public URL to your local web server on port 8080, allowing you to:
- **Share your Tomcat/Jenkins server** with team members or clients
- **Test on mobile devices** without being on the same network
- **Demo your application** from anywhere in the world
- **Access CI/CD tools** remotely for development and testing

The tunnel provides a public URL that you can share, making your localhost:8080 web server accessible from any device with internet access.

---

## Common Problems and Solutions

Here are typical issues with `localhost:8080` and how to resolve them:

<div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 25px 0;">

<div style="background: #fff; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e74c3c; margin: 0 0 10px 0;">❌ "Port Already in Use" Error</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> Another application is occupying port 8080.</p>
<p style="margin: 0;"><strong>Solution:</strong> Find the conflicting process with <code>sudo lsof -i :8080</code>, stop it with <code>sudo kill -9 &lt;PID&gt;</code>, or configure your application to use port 8081.</p>
</div>

<div style="background: #fff; border-left: 4px solid #f39c12; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ Service Won't Start</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> Tomcat, Jenkins, or other service fails to start on port 8080.</p>
<p style="margin: 0;"><strong>Solution:</strong> Check service logs for errors, verify configuration files, ensure proper permissions, and check if dependencies are installed.</p>
</div>

<div style="background: #fff; border-left: 4px solid #9b59b6; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #9b59b6; margin: 0 0 10px 0;">🔐 Jenkins Initial Setup Issues</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> Can't access Jenkins setup wizard or find initial password.</p>
<p style="margin: 0;"><strong>Solution:</strong> Navigate to localhost:8080, find initial password in <code>/var/lib/jenkins/secrets/initialAdminPassword</code>, and follow the setup wizard.</p>
</div>

<div style="background: #fff; border-left: 4px solid #3498db; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #3498db; margin: 0 0 10px 0;">🌐 Can't Access from Other Devices</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> localhost:8080 only works on the local machine.</p>
<p style="margin: 0;"><strong>Solution:</strong> Configure application to bind to <code>0.0.0.0:8080</code>, allow port 8080 through firewall with <code>sudo ufw allow 8080</code>, and use IP address instead of localhost.</p>
</div>

<div style="background: #fff; border-left: 4px solid #27ae60; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #27ae60; margin: 0 0 10px 0;">🐳 Docker Container Issues</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> Can't access application running in Docker container on port 8080.</p>
<p style="margin: 0;"><strong>Solution:</strong> Ensure proper port mapping with <code>docker run -p 8080:8080 myapp</code> and check container logs with <code>docker logs container-name</code>.</p>
</div>

</div>

---

## Summary

* **What it is**: TCP port 8080 on the loopback address (`127.0.0.1` / `::1`). Registered with IANA as `http-alt`, the unprivileged alternative to port 80.
* **Who defaults to it**: Tomcat, Spring Boot, Jenkins, code-server, LocalAI, and the Open WebUI container, plus most "alternate HTTP" examples in Docker docs.
* **First thing to try when it's broken**: `lsof -iTCP:8080 -sTCP:LISTEN` (or `ss -lptn 'sport = :8080'`) to see who actually has the port.
* **First thing to try when something else has it**: bump your app to 8081. Spring Boot's `server.port`, Jenkins's `--httpPort`, code-server's `--bind-addr`, LocalAI's `--port` all take it.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
<h3 style="margin: 0 0 15px 0; font-size: 1.4em;">🚀 Quick Start Commands</h3>
<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin: 15px 0;">
<code style="display: block; color: #fff; font-size: 14px; line-height: 1.6;">
# Tomcat (systemd)<br>
sudo systemctl start tomcat<br><br>
# Spring Boot<br>
mvn spring-boot:run<br><br>
# code-server (VS Code in browser)<br>
code-server --bind-addr 0.0.0.0:8080<br><br>
# LocalAI (default port)<br>
docker run -p 8080:8080 localai/localai:latest<br><br>
# Quick static file server<br>
python3 -m http.server 8080
</code>
</div>
<p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.9;">
Use these commands to quickly get started with services on localhost:8080
</p>
</div>

A small operational note to close on: if multiple services on your machine all want 8080, the conventional escape ladder is 8081 → 8082 → 8083 and so on. If you're running Tomcat and Jenkins together, expect at least one of them to move. Spring Boot's `server.port` property and Jenkins's `--httpPort` flag (or `JENKINS_PORT` env var on systemd) are the two settings you'll touch most often. For LocalAI and Open WebUI, both honor an explicit `--port` / `PORT` env var; setting one to 8081 sidesteps the whole problem.
