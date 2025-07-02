---
title: "Hosting a Vue.js App Without a Server"
description: "Learn how to securely host your Vue.js app online using Pinggy. Step-by-step guide for running your app locally and creating secure tunnels for remote access."
date: 2025-01-12T14:00:00+05:30
draft: false
tags: ["Vue.js", "Pinggy", "guide", "tunneling", "remote access"]
og_image: "images/hosting_a_vue_app_without_a_server/host_vue_app_without_server.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvc3RpbmcgYSBWdWUuanMgQXBwIFdpdGhvdXQgYSBTZXJ2ZXIgVXNpbmcgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHNlY3VyZWx5IGhvc3QgeW91ciBWdWUuanMgYXBwIG9ubGluZSB1c2luZyBQaW5nZ3kuIFRoaXMgZ3VpZGUgd2Fsa3MgeW91IHRocm91Z2ggcnVubmluZyB5b3VyIGFwcCBsb2NhbGx5IGFuZCBjcmVhdGluZyBhIHNlY3VyZSB0dW5uZWwgZm9yIHJlbW90ZSBhY2Nlc3MuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2hvc3RpbmdfYV92dWVfYXBwX3dpdGhvdXRfYV9zZXJ2ZXIvaG9zdF92dWVfYXBwX3dpdGhvdXRfc2VydmVyLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIGEgbmV3IFZ1ZS5qcyBhcHAgYW5kIG5hdmlnYXRlIHRvIHRoZSBkaXJlY3RvcnkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlJ1biB0aGUgVnVlLmpzIGRldmVsb3BtZW50IHNlcnZlciB1c2luZyB0aGUgY29tbWFuZDogbnBtIHJ1biBkZXYuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNyZWF0ZSBhIHR1bm5lbCB3aXRoIFBpbmdneSBieSBydW5uaW5nOiBzc2ggLXAgNDQzIC1SIDA6bG9jYWxob3N0OjgwODAgLXQgcXJAYS5waW5nZ3kuaW8gdTpIb3N0OmxvY2FsaG9zdDo4MDgwIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkFjY2VzcyB5b3VyIFZ1ZS5qcyBhcHAgdmlhIHRoZSBwdWJsaWMgVVJMIGdlbmVyYXRlZCBieSBQaW5nZ3kuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIk9wdGlvbmFsOiBDdXN0b21pemUgeW91ciBQaW5nZ3kgdHVubmVsIHdpdGggZmVhdHVyZXMgbGlrZSBjdXN0b20gZG9tYWlucyBvciBwYXNzd29yZCBwcm90ZWN0aW9uIGZvciBlbmhhbmNlZCBzZWN1cml0eS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "hosting_a_vue_app_without_a_server/host_vue_app_without_server.webp" "Hosting a Vue App Without a Server Using Pinggy" >}}

Making your {{< link href="https://vuejs.org/" >}}Vue.js{{< /link >}} app accessible on the internet doesn’t have to be complicated. If you’re new to Vue.js, it’s a progressive {{< link href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries" >}} JavaScript framework {{< /link >}} that makes building interactive user interfaces and single-page applications a breeze. Whether you’re working on a personal project, sharing progress with teammates, or testing your app on real devices, getting it online securely can feel like a challenge—especially if setting up servers isn’t your thing.  
That’s where [Pinggy](https://pinggy.io) comes in. With Pinggy, you can host your locally running Vue.js app on the web without any server setup or complicated steps. It’s simple, secure, and works seamlessly, just like popular tools such as {{< link href="https://ngrok.com/" >}}Ngrok{{< /link >}}.  
In this blog, we’ll show you how to use Pinggy to quickly share your Vue.js app with anyone, anywhere. Whether you’re showcasing a project or collaborating with others, Pinggy makes it easy to get your app online in no time.


{{% tldr %}}

1. **Run Vue.js App**  
   - Create and start your <a href="https://vuejs.org/" >Vue.js</a > app:  
     ```bash
     npx @vue/cli create my-vue-app
     cd my-vue-app
     npm run serve
     ```

2. **Create a Tunnel with Pinggy**  
   - Start an SSH tunnel:  
     ```bash
     ssh -p 443 -R 0:localhost:8080 -t qr@a.pinggy.io "u:Host:localhost:8080"
     ```
   - Access your Vue.js app via the public URL provided by [Pinggy](https://pinggy.io).

{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/BSgIZbIKQMQ?si=HuY4HOOw5rudGoLU" title="YouTube video player" >}}

## What is Vue.js?

{{< link href="https://vuejs.org/" >}}Vue.js{{< /link >}} is a progressive JavaScript framework for building user interfaces. Known for its simplicity, versatility, and ease of integration, Vue.js powers everything from simple single-page applications (SPAs) to complex web apps. Whether you're a beginner or a seasoned developer, Vue.js offers a robust ecosystem to enhance your productivity.

## What is Pinggy?

[Pinggy](https://pinggy.io) is a secure, developer-friendly tunneling solution that allows you to expose your local web apps, APIs, and services to the internet. It simplifies the process of sharing local projects without requiring server setups or complex configurations.

### Key Features of Pinggy:
- **Ease of Use**: No complex setup—just run a simple command.  
- **Secure Tunnels**: Uses SSH for secure data transmission.  
- **Customization**: Add custom domains or password protection.  

## Prerequisites

To follow along, you’ll need:  
1. Node.js and npm installed. Get them from [Node.js](https://nodejs.org/).  
2. Vue CLI installed. Install it globally if you don’t have it yet:  
   ```bash
   npm install -g @vue/cli
   ```
{{< image "hosting_a_vue_app_without_a_server/vue_command.webp" "Vue CLI installed Command" >}}
3. A [Pinggy account](https://dashboard.pinggy.io/) (optional for advanced features).  
4. Familiarity with terminal commands.  

## Step 1: Run Your Vue.js App Locally

Start by creating and running a Vue.js app on your local machine.

### Commands to Set Up:
1. **Create a Vue.js app**:  
   ```bash
   npx @vue/cli create my-vue-app
   ```
{{< image "hosting_a_vue_app_without_a_server/vue_app_install_command.webp" "Vue app install Command" >}}

2. **Navigate to the project directory**:  
   ```bash
   cd my-vue-app
   ```
3. **Run the development server**:  
   ```bash
   npm run serve
   ```
{{< image "hosting_a_vue_app_without_a_server/run_vue_app_local.webp" "Vue app run command" >}}

Once the server starts, your app will be accessible at `http://localhost:8080` by default.

{{< image "hosting_a_vue_app_without_a_server/local_app_run_ss.webp" "Vue running on localhost" >}}


## Step 2: Create a Tunnel with Pinggy

Now, let’s expose your locally hosted Vue.js app using Pinggy.

### Command to Create Tunnel:
Run the following command in your terminal:  
```bash
ssh -p 443 -R 0:localhost:8080 -t qr@a.pinggy.io "u:Host:localhost:8080"
```

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t qr@a.pinggy.io u:Host:localhost:8080\"}}}"
{{</ ssh_command >}}

### Command Breakdown:
- **`ssh -p 443`**: Initiates a secure connection via Pinggy’s server.  
- **`-R0:localhost:8080`**: Maps your Vue.js app (running on port 8080) to a public URL.  
- The **`-t`** option and **`"u:Host:localhost:8080"`** modifies the host header to ensure **`localhost:8080`** requests are correctly routed to your local app.
- The **`qr`** the command displays the public URL as a QR code, making it easy to access your app on other devices.
- **`qr@a.pinggy.io u:Host:localhost:8080`**: Specifies the Pinggy server.  

After running this command, Pinggy generates a public URL for your Vue.js app, such as:  
```
http://example.pinggy.link  
https://example.pinggy.link  
```
{{< image "hosting_a_vue_app_without_a_server/pinngy_tunnel_command.webp" "Pinggy tunnel Command" >}}

{{< image "hosting_a_vue_app_without_a_server/pinggy_public_url.webp" "Pinggy public url" >}}

Open the provided URL in a browser to view your app live!

{{< image "hosting_a_vue_app_without_a_server/website_on_public_url_ss.webp" "access vue app using public url" >}}
{{< image "hosting_a_vue_app_without_a_server/request_ss.webp" "Pinggy public url logs" >}}

## Resolving HTTPS WebSocket Issues with Pinggy
If you use a public HTTPS URL provided by Pinggy, you may encounter WebSocket issues. To resolve this, follow these steps:

1. **Install serve globally:**
```bash
npm install -g serve
```
2. **Build your Vue.js app:**
```bash
npm run build
```
3. **Serve the built app using serve:**
```bash
serve -s dist
```
4. **Run the Pinggy command with port 3000:**
```bash
ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io
```
By serving your built Vue.js app through the serve package and using Pinggy’s HTTPS tunnel, you can avoid WebSocket issues when accessing your app via a public HTTPS URL.



## Customize Your Pinggy Tunnel

Enhance your tunnel with Pinggy’s advanced features:

### Custom Domains
Replace the default Pinggy URL with a personalized domain to better align with your branding.  

Refer to [Pinggy's Custom Domains documentation](http://localhost:1313/docs/custom_domain/) for detailed instructions.

### Password Protection
Secure your tunnel by adding password authentication, ensuring only authorized users can access your app.  

Refer to [Pinggy's Password Protection documentation](https://pinggy.io/docs/http_tunnels/basic_auth/) for detailed instructions.

## Benefits of Hosting Vue.js Apps with Pinggy

1. **Quick Setup**: Skip the hassle of traditional server configurations.  
2. **Secure Access**: Establish encrypted tunnels in seconds.  
3. **Perfect for Testing & Demos**: Share your work instantly with clients or collaborators.

## Troubleshooting Tips

- **Port Conflicts**: Make sure the port provided with the SSH command corresponds to the port used by Nuxt App, by default it is 3000. Mismatched ports will prevent a successful tunnel connection.
- **Firewall Restrictions**:  Some of the network firewalls prevent tunneling connections. Make certain that SSH connection is authorised and if there are any firewalls active, then get them removed for some time.
- **Command Not Found**: Make sure SSH is installed on your machine. On macOS and Linux, SSH is pre-installed, but on Windows, you may need to install it or use tools like Git Bash.

## Conclusion

Hosting your {{< link href="https://vuejs.org/" >}}Vue.js{{< /link >}} app with [Pinggy](https://pinggy.io) is an effortless way to make your local development projects accessible to anyone. Whether showcasing an app to clients or testing it on various devices, Pinggy provides a secure and efficient solution for developers.  

