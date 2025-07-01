---
title: "Remote Devices - remotely manage your tunnels with Pinggy"
description: "Manage your tunnels remotely from the Pinggy dashboard using the remote devices feature. Run Pinggy CLI in remote-management mode to control tunnels."
og_image: "doc_img/remote_device/remote_device_illustration.webp"
date: 2024-01-24T14:15:25+05:30
draft: false
---



# Remote Devices

You can manage your tunnels remotely from the {{< link href="https://dashboard.pinggy.io/activedevices" >}}Pinggy dashboard{{</ link >}} using the remote devices feature. All you need to do is run the Pinggy CLI and connect it in remote-management mode. This allows you to create, edit, and stop tunnels directly from the dashboard without needing physical access to your device.

> This feature is available with Pinggy Pro and Enterprise plans.

{{< figure src="../../../doc_img/remote_device/remote_device_illustration.webp" alt="Remote Device Management using Pinggy" >}}


## Connecting a remote device

For connecting a remote device, you need to intall {{< link href="https://pinggy.io/cli/" >}}Pinggy CLI{{</ link >}}, and get an {{< link href="https://dashboard.pinggy.io/api-keys" >}}API Key{{</ link >}}.

**Step 1.** Install the  {{< link href="https://pinggy.io/cli/" >}}Pinggy CLI{{</ link >}} by following the instructions {{< link href="https://pinggy.io/cli/" >}}here{{</ link >}}.

**Step 2.** Create an API Key from the dashboard by logging in to {{< link href="https://dashboard.pinggy.io/api-keys" >}}API Key{{</ link >}}. You can name your API key appropriately to later identify the device you are connecting.


You will receive an API key (example: `xoBlIhaxriopBWSTZ7c62V`) which can use to connect your CLI.


**Step 3.** Run the Pinggy CLI in remote management mode.

```bash
./pinggy --remote-management <YOUR_API_KEY>
```

Example:

```bash
./pinggy --remote-management xoBlIhaxriopBWSTZ7c62V
```

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;">
  <iframe 
    src="https://www.youtube.com/embed/ocgcw7R-xB4?si=Bo796QMrC1SQJ5QL" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>

---

## Manage tunnels for a remote device

To view your active remote devices, log in to {{< link href="https://dashboard.pinggy.io/activedevices" >}}https://dashboard.pinggy.io/activedevices{{</ link >}}

There you will find a list of your active devices. Click on the device you want to manage.

You can achive the following using remote device management:

- Keep your remote device connected and initiate new tunnels whenever you want without physically accessing the device
- Create new HTTP(S) / TCP / UDP / TLS tunnels
- Modify and change settings of existing tunnels
- Monitor the tunnels



{{< figure src="../../../doc_img/remote_device/screenshots/1.webp" alt="List of active devices in Pinggy Remote Device Management" >}}

{{< figure src="../../../doc_img/remote_device/screenshots/2.webp" alt="Device details in Pinggy Remote Device Management" >}}

{{< figure src="../../../doc_img/remote_device/screenshots/3.webp" alt="Create new tunnel in Pinggy Remote Device Management" >}}

{{< figure src="../../../doc_img/remote_device/screenshots/4.webp" alt="Initiate a new tunnel in Pinggy Remote Device Management" >}}

{{< figure src="../../../doc_img/remote_device/screenshots/5.webp" alt="List of active tunnels of a remote device in Pinggy" >}}

{{< figure src="../../../doc_img/remote_device/screenshots/6.webp" alt="Detailed information of an active tunnel in a remote device in Pinggy" >}}


