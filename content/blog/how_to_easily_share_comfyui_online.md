---
title: "How to Easily Share ComfyUI Online"
description: "Learn how to share your ComfyUI setup online with Pinggy. Easy guide to securely share ComfyUI over the internet for collaboration and remote access."
date: 2024-10-28T01:15:25+05:30
draft: false
tags: ["ComfyUI","Pinggy","guide","tunneling","remote access"]
og_image: "images/how_to_easily_share_comfy_ui_online/thumbnail.webp"
lastmod: 2024-12-30T14:20:25+05:30
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBFYXNpbHkgU2hhcmUgQ29tZnlVSSBPbmxpbmUiLAogICJkZXNjcmlwdGlvbiI6ICJMZWFybiBob3cgdG8gc2hhcmUgeW91ciBDb21meVVJIHNldHVwIG9ubGluZSB3aXRoIFBpbmdneS4gVGhpcyBlYXN5IGd1aWRlIHdhbGtzIHlvdSB0aHJvdWdoIGVhY2ggc3RlcCB0byBzZWN1cmVseSBzaGFyZSBDb21meVVJIG92ZXIgdGhlIGludGVybmV0LCBtYWtpbmcgY29sbGFib3JhdGlvbiBhbmQgcmVtb3RlIGFjY2VzcyBzaW1wbGUhIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2hvd190b19lYXNpbHlfc2hhcmVfY29tZnlfdWlfb25saW5lL3RodW1ibmFpbC53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNsb25lIHRoZSBDb21meVVJIHJlcG9zaXRvcnkgYW5kIG5hdmlnYXRlIHRvIHRoZSBkaXJlY3RvcnkuIiwKICAgICAgInVybCI6ICJodHRwczovL2dpdGh1Yi5jb20vY29tZnlhbm9ueW1vdXMvQ29tZnlVSSIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIHRoZSByZXF1aXJlZCBkZXBlbmRlbmNpZXMgYnkgcnVubmluZzogcGlwIGluc3RhbGwgLXIgcmVxdWlyZW1lbnRzLnR4dC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU3RhcnQgQ29tZnlVSSB1c2luZyB0aGUgY29tbWFuZDogcHl0aG9uMyBtYWluLnB5LiBDb21meVVJIHdpbGwgc3RhcnQgYXQgaHR0cDovL2xvY2FsaG9zdDo4MTg4LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSB0dW5uZWwgd2l0aCBQaW5nZ3kgYnkgcnVubmluZzogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgxODggYS5waW5nZ3kuaW8uIiwKICAgICAgInVybCI6ICJodHRwczovL3BpbmdneS5pby9kb2NzLyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJBY2Nlc3MgeW91ciBDb21meVVJIGluc3RhbmNlIHZpYSB0aGUgcHVibGljIFVSTCBnZW5lcmF0ZWQgYnkgUGluZ2d5LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJPcHRpb25hbDogQ3VzdG9taXplIHlvdXIgUGluZ2d5IHR1bm5lbCB3aXRoIGZlYXR1cmVzIGxpa2UgY3VzdG9tIGRvbWFpbnMgb3IgcGFzc3dvcmQgcHJvdGVjdGlvbiBmb3IgYWRkZWQgc2VjdXJpdHkuIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---
{{< image "how_to_easily_share_comfy_ui_online/thumbnail.webp" "How to Easily Share ComfyUI Online" >}}

{{< link href="https://github.com/comfyanonymous/ComfyUI" >}}ComfyUI{{< /link >}} is a portable, locally run interface commonly used for AI-simulated art generation with models like Stable Diffusion. When collaborating with remote clients or teammates, you might want to make this locally hosted UI accessible via the internet. This is where Pinggy, a fast and effective tunneling service, helps by allowing you to share your local setup using a public link.


{{% tldr %}}
1. **Run ComfyUI**

   - Clone and set up ComfyUI:
     ```bash
     git clone https://github.com/ComfyUI/ComfyUI.git
     cd ComfyUI
     pip install -r requirements.txt
     python3 main.py
     ```

2. **Create a Tunnel with Pinggy**

   - Start SSH tunnel:
     ```bash
     ssh -p 443 -R0:localhost:8188 a.pinggy.io
     ```
   - Access your ComfyUI via the provided URL.

{{% /tldr %}}


In this guide, we'll walk through how to use Pinggy to make your ComfyUI instance accessible online.

## What is ComfyUI?

{{< link href="https://github.com/comfyanonymous/ComfyUI" >}}ComfyUI{{< /link >}} is an open source web interface primarily developed for AI generated image creation usually utilizing some models such as Stable Diffusion. They are easy to use with the ability to host locally, thus making them suitable for developing as well as perfecting pieces of art. This interface is commonly employed by artists, researchers, and developers working with generative AI.

{{< image "how_to_easily_share_comfy_ui_online/comfyui_zoomed_view.webp" "Zoomed-in view of ComfyUI" >}}

## What is Pinggy?
Pinggy is a tunneling solution similar to Ngrok, which lets you expose your local network to the internet securely. It’s easy to use, and you don’t need extensive configuration—perfect for accessing local applications, web UIs, or APIs from remote locations.

## Prerequisites
Before we begin, make sure you have:

- A ComfyUI instance running locally.
- Node.js installed on your system.
- Pinggy account (if you wish to use custom domains or other advanced features).
- Basic knowledge of terminal/command-line operations.

## Step 1: Run ComfyUI Locally
If ComfyUI is not already running, follow these steps:

1. Clone the ComfyUI repository:
   ```bash
   git clone https://github.com/ComfyUI/ComfyUI.git
   cd ComfyUI
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start ComfyUI:
   ```bash
   python3 main.py
   ```
   By default, ComfyUI will start at `http://localhost:8188`.

{{< image "how_to_easily_share_comfy_ui_online/start_confyui.webp" "ComfyUI Start" >}}

## Step 2: Create a Tunnel with Pinggy
To expose your locally hosted ComfyUI instance, use Pinggy's SSH tunneling command:

Open a terminal and enter:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8188 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8188 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8188 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8188 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8188 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8188 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8188 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8188 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8188 a.pinggy.io\"}}}"
{{</ ssh_command >}}

Replace `8188` if ComfyUI is running on a different port.

{{< image "how_to_easily_share_comfy_ui_online/pinggy_tunnel_command.webp" "Pinggy Tunnel Command" >}}

### Command Breakdown:
- `ssh -p 443`: Establishes a secure connection to Pinggy’s server over port 443.
- `-R0:localhost:8188`: Connects your localhost to Pinggy’s server, forwarding the ComfyUI server.
- `a.pinggy.io`: Directs the command to Pinggy’s server.

After executing, Pinggy will generate a public URL for your ComfyUI instance, which might look like:
```
http://fakqxzqrohxxx.a.pinggy.link
https://fakqxzqrohxxx.a.pinggy.link
```
{{< image "how_to_easily_share_comfy_ui_online/pinggy_tunnel_start.webp" "Pinggy Tunnel Start" >}}

{{< image "how_to_easily_share_comfy_ui_online/pinggy_url_host_ss.webp" "ComfyUi Host SS" >}}


## Step 3: Customize Your Pinggy Tunnel
Pinggy provides additional options to enhance privacy and control over your tunnel, perfect for securely sharing ComfyUI:

- **Custom Domains**: Use a personalized or branded domain name instead of the Pinggy default link. This can improve on professionalism and also can make the access links easier to remember.
- **Password Protection**: Enhance the security of your tunnel and set password to your connection. You will be the only people who can access your ComfyUI instance with the password.

For more, refer to Pinggy's [documentation](https://pinggy.io/docs/).

## Troubleshooting Tips
If you run into issues with the Pinggy tunnel or ComfyUI setup, try these solutions:

- **Port Conflicts**: Make sure the port provided with the SSH command corresponds to the port used by ComfyUI, by default it is 8188. Mismatched ports will prevent a successful tunnel connection.
- **Firewall Restrictions**:  Some of the network firewalls prevent tunneling connections. Make certain that SSH connection is authorised and if there are any firewalls active, then get them removed for some time.
- **Command Not Found**: Make sure SSH is installed on your machine. On macOS and Linux, SSH is pre-installed, but on Windows, you may need to install it or use tools like Git Bash.

## Conclusion
Pinggy helps share your ComfyUI instance online instantly, and securely to perform AI projects in cooperation with other users without complicated configurations. In this manner, utilizing Pinggy’s tunneling options, you could grant dependable, restricted connectivity on your ComfyUI to your coworkers and customers, wherever they’re placing.

