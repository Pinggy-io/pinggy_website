---
title: "How to Easily Share LM studio API Online"
description: ""
date: 2025-02-19T14:00:00+05:30
draft: false
tags: ["LM Studio", "Pinggy", "Self-Hosted AI", "LLM Deployment", "AI Tunneling"]
og_image: "images/lm_studio/pinggy.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEVhc2lseSBTaGFyZSBMTSBTdHVkaW8gQVBJIE9ubGluZSIsCiAgImRlc2NyaXB0aW9uIjogIkEgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGRlcGxveWluZyBhbmQgc2hhcmluZyBMTSBTdHVkaW8gQVBJIG9ubGluZSB1c2luZyBQaW5nZ3kgZm9yIHNlY3VyZSB0dW5uZWxpbmcuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2xtX3N0dWRpby9waW5nZ3kucG5nIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRvd25sb2FkICYgSW5zdGFsbCBMTSBTdHVkaW8iLAogICAgICAidGV4dCI6ICJWaXNpdCBodHRwczovL2xtc3R1ZGlvLmFpLywgZG93bmxvYWQgdGhlIGluc3RhbGxlciBmb3IgeW91ciBPUywgYW5kIGluc3RhbGwgTE0gU3R1ZGlvLiBOYXZpZ2F0ZSB0byB0aGUgRGlzY292ZXIgdGFiIGFuZCBkb3dubG9hZCB0aGUgbW9kZWwgeW91IHdhbnQgdG8gdXNlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFbmFibGUgdGhlIE1vZGVsIEFQSSIsCiAgICAgICJ0ZXh0IjogIkdvIHRvIHRoZSBEZXZlbG9wZXIgdGFiIGluIExNIFN0dWRpbywgY2hhbmdlIHRoZSBzdGF0dXMgZnJvbSBTdG9wIHRvIFJ1biwgYW5kIHRlc3QgdGhlIEFQSSB1c2luZyBQb3N0bWFuLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgWW91ciBBUEkgd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJSdW4gdGhlIFNTSCB0dW5uZWwgY29tbWFuZDogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjEyMzQgYS5waW5nZ3kuaW8uIFNoYXJlIHRoZSBnZW5lcmF0ZWQgcHVibGljIFVSTCB0byBhbGxvdyBleHRlcm5hbCBhY2Nlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNlY3VyZSBZb3VyIEFQSSIsCiAgICAgICJ0ZXh0IjogIkVuYWJsZSBiYXNpYyBhdXRoZW50aWNhdGlvbiBieSBtb2RpZnlpbmcgeW91ciBTU0ggY29tbWFuZDogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjEyMzQgLXQgYS5waW5nZ3kuaW8gYjp1c2VybmFtZTpwYXNzd29yZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiTW9uaXRvciBBUEkgUmVxdWVzdHMiLAogICAgICAidGV4dCI6ICJVc2UgUGluZ2d5w6LCgMKZcyB3ZWIgZGVidWdnZXIgdG8gYW5hbHl6ZSBhbmQgdHJvdWJsZXNob290IGluY29taW5nIHJlcXVlc3RzLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

In the era of generative AI, developers are continually seeking ways to quickly deploy and share their AI models without relying on complex cloud infrastructures. {{< link href="https://lmstudio.ai/" >}} LM Studio {{< /link >}} offers a seamless experience to download, install, and run AI models locally, while tools like [Pinggy](https://pinggy.io) enable you to expose your local endpoints to the internet securely. This guide provides a step-by-step tutorial on sharing your LM Studio API online, making your AI models accessible and shareable in minutes.

{{< image "lm_studio/pinggy.png" "Self-Host LLM with lm Studio" >}}

{{% tldr %}}

1. **Download & Install LM Studio**  
   - Visit <a href = "https://lmstudio.ai/" target="_blank">LM Studio</a> and download the installer for your operating system.
   - Install LM Studio, launch the application, and navigate to the **Discover** tab.
   - Download the model you want to use and share its API online.

2. **Enable the Model API**  
   - Go to the **Developer** tab.
   - In the top-left corner, change the status from **Stop** to **Run** (your model will now be accessible at `http://localhost:1234`).
   - Copy the provided curl command and test it using Postman.

3. **Expose Your API with Pinggy**  
   - Create a secure tunnel using the following command:  
     ```bash
     ssh -p 443 -R0:localhost:1234 a.pinggy.io
     ```
   - Share the generated public URL for easy access to your API.

{{% /tldr %}}

## Why Share Your LM Studio API Online?

### Empowering Your AI Projects

By sharing your LM Studio API online, you can:

- **Collaborate Remotely:** Allow team members, clients, or stakeholders to access your AI model remotely.
- **Integrate Seamlessly:** Embed your model’s API into web or mobile applications without deploying to the cloud.
- **Rapid Prototyping:** Quickly demonstrate AI capabilities in demos & prototypes.
- **Reduce latency** by keeping inference local while enabling remote access.

### Leveraging Pinggy for Secure Tunneling

Pinggy provides a hassle-free solution for exposing your local API to the public internet without the need for complex infrastructure. Key benefits include:

- **Free HTTPS URLs:** Secure, public URLs without additional installation overhead.
- **No Bandwidth Limits:** Enjoy unrestricted access, even on the free tier.
- **Bandwidth-Friendly:** With options like the Pinggy Pro plan, you can scale your usage as needed.
- **Integrated Debugger:** Monitor and troubleshoot requests with Pinggy’s web-based debugger.

## Step-by-Step Guide to Sharing LM Studio API
{{< iframe src="https://www.youtube.com/embed/2WFBBR1nsMw" title="YouTube video player" >}}

### Step 1: Download and Install LM Studio

1. **Visit the Website:**  
   Go to {{< link href="https://lmstudio.ai/" >}} LM Studio {{< /link >}} and download the installer appropriate for your operating system (Windows, macOS, or Linux).
   {{< image "lm_studio/lm_home_page.webp" "Lm Studio HomePage" >}}

2. **Install LM Studio:**  
   Follow the installation prompts to set up LM Studio on your machine.

3. **Launch and Download a Model:**  
   - Open LM Studio and navigate to the **Discover** tab.
   - Browse through the available models and download the one you want to use.
   - Once downloaded, you are ready to share its API online.

{{< image "lm_studio/lm_model.webp" "Downloading Your Model in LM Studio" >}}

### Step 2: Enable Your Model API

1. **Open the Developer Tab:**  
   Click on the **Developer** tab located in LM Studio.
   {{< image "lm_studio/lm_studio_dev.webp" "Develper Mode in LM Studio" >}}

2. **Start Your API Server:**  
   - At the top-left corner, you'll see the status button.
   - Change the status from **Stop** to **Run**.  
     This will launch your model’s API server on `http://localhost:1234`.

3. **Test the API Endpoint:**  
   Below the status button, you will see a list of supported endpoints. Copy the displayed `curl` command and test it using a tool like {{< link href="https://www.postman.com" >}} Postman {{< /link >}}.

   **Example Curl Command:**
   ```bash
   curl http://localhost:1234/v1/chat/completions \
     -H "Content-Type: application/json" \
     -d '{
       "model": "qwen2-0.5b-instruct",
       "messages": [
         { "role": "system", "content": "Always answer in rhymes. Today is Thursday" },
         { "role": "user", "content": "What day is it today?" }
       ],
       "temperature": 0.7,
       "max_tokens": -1,
       "stream": false
   }'
   ```

{{< image "lm_studio/local_host_postman.webp" "lm studio running on localhost" >}}

### Step 3: Expose Your LM Studio API via Pinggy

1. **Set Up a Secure Tunnel:**  
   While your LM Studio API is running on `http://localhost:1234`, open your terminal and execute the following command to create a secure tunnel:

   ```bash
   ssh -p 443 -R0:localhost:1234 a.pinggy.io
   ```
   {{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:1234 a.pinggy.io \",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:1234 a.pinggy.io \"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:1234 a.pinggy.io \",\"cmd\":\"./pinggy -p 443 -R0:localhost:1234 a.pinggy.io \"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:1234 a.pinggy.io \",\"cmd\":\"ssh -p 443 -R0:localhost:1234 a.pinggy.io \"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:1234 a.pinggy.io \",\"cmd\":\"ssh -p 443 -R0:localhost:1234 a.pinggy.io \"}}}"
{{</ ssh_command >}}

2. **Share the Public URL:**  
   Once connected, Pinggy will generate a public URL (e.g., `https://xyz123.pinggy.link`). Share this URL to allow remote access to your API.

{{< image "lm_studio/pinggy_tunnel.webp" "pinggy public url" >}}
{{< image "lm_studio/pinggy_tunnel_check.webp" "lm studio running using Pinggy url" >}}
{{< image "lm_studio/pinggy_logs.webp" "pinggy logs" >}}

## Advanced Tips and Best Practices

### Secure Your API

- **Enable Basic Authentication:**  
  To secure your tunnel, modify your SSH command to include a username and password:
  ```bash
  ssh -p 443 -R0:localhost:1234 -t a.pinggy.io b:username:password
  ```
  This ensures that only authorized users can access your public URL.

- **Regular Monitoring:**  
  Use Pinggy’s web debugger to keep an eye on incoming requests and identify any potential issues quickly.

### Custom Domains and Performance Optimization

- **Custom Domain Setup:**  
  With [Pinggy Pro](https://pinggy.io/#prices), you can map a custom domain to your tunnel, enhancing your branding and credibility.
  
- **Performance Considerations:**  
  For high-traffic applications, consider optimizing your LM Studio configuration and ensuring your local machine has sufficient resources to handle the load.

## Troubleshooting

### Common Issues and Fixes

1. **Model Fails to Start:**  
   - Check system requirements (RAM, CPU, etc.) and ensure your model is compatible with your hardware.
   - Review LM Studio logs for any error messages.

2. **Connection Timeouts**
- Use Pinggy's TCP mode for unstable networks:
  ```bash
  while true; do 
    ssh -p 443 -o StrictHostKeyChecking=no -R0:localhost:3000 a.pinggy.io; 
  sleep 10; done
  ```
  *Note: This command requires [Pinggy Pro](https://pinggy.io/#prices)*.

3. **Incorrect API Response:**  
   - Validate your curl command syntax.
   - Confirm that LM Studio is correctly configured to serve the intended endpoints.
## Conclusion

Combining {{< link href="https://lmstudio.ai/" >}} LM Studio {{< /link >}} intuitive model deployment with [Pinggy's](https://pinggy.io) secure tunneling offers a streamlined approach to sharing your AI models online. This solution empowers developers to test, demo, and integrate AI capabilities without the overhead of cloud infrastructure, while keeping full control over data and performance.