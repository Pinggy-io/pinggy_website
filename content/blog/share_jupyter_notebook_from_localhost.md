---
 title: "Sharing Jupyter Notebooks from localhost"
 description: "Effortlessly share Jupyter Notebooks globally with Pinggy. Securely collaborate and obtain a public URL for your locally running Jupyter Notebook."
 date: 2023-05-29T14:15:25+05:30
 lastmod: 2025-09-25T14:12:25+05:30
 draft: false
 og_image: "images/jupyter/image0.webp"
 tags: ["guide", "http"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNoYXJpbmcgSnVweXRlciBOb3RlYm9va3MgZnJvbSBsb2NhbGhvc3QiLAogICJkZXNjcmlwdGlvbiI6ICJFZmZvcnRsZXNzbHkgc2hhcmUgSnVweXRlciBOb3RlYm9va3MgZ2xvYmFsbHkgd2l0aCBQaW5nZ3kuIFNlY3VyZWx5IGNvbGxhYm9yYXRlIGFuZCBvYnRhaW4gYSBwdWJsaWMgVVJMIGZvciB5b3VyIGxvY2FsbHkgcnVubmluZyBKdXB5dGVyIE5vdGVib29rLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9qdXB5dGVyL2ltYWdlMC53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgSnVweXRlciBOb3RlYm9vayB1c2luZyBwaXA6IHB5dGhvbiAtbSBwaXAgaW5zdGFsbCBub3RlYm9vayIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTdGFydCBKdXB5dGVyIE5vdGVib29rIHNlcnZlcjoganVweXRlciBub3RlYm9vayAob3IgcHl0aG9uIC1tIG5vdGVib29rKSIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJOb3RlIHRoZSB0b2tlbiBmcm9tIHRoZSBvdXRwdXQgVVJMOiBodHRwOi8vbG9jYWxob3N0Ojg4ODgvP3Rva2VuPS4uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJGb3J3YXJkIHBvcnQgODg4OCB1c2luZyBQaW5nZ3k6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4ODg4IC10IGEucGluZ2d5LmlvIFwiYTpIb3N0OmxvY2FsaG9zdDo4ODg4XCIgXCJ1Ok9yaWdpbjpodHRwOi8vbG9jYWxob3N0Ojg4ODhcIiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJBY2Nlc3MgdGhlIFBpbmdneSBVUkwgYW5kIGVudGVyIHRoZSB0b2tlbiB0byBhdXRoZW50aWNhdGUiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2hhcmUgdGhlIHB1YmxpYyBVUkwgd2l0aCBjb2xsYWJvcmF0b3JzIGZvciByZW1vdGUgYWNjZXNzIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
 outputs:
  - HTML
  - AMP
---
{{< image "jupyter/image0.webp" "Sharing Jupyter Notebooks from localhost" >}}

{{% link href="https://jupyter.org/" %}}Jupyter Notebook{{% /link %}} allows users to create and share documents containing live code, equations, visualizations, and explanatory text. However, by default, Jupyter Notebook is limited to local access, requiring users to be on the same machine or network to collaborate effectively. This guide shows how you can share Jupyter Notebook with your teammates, collaborators, and friends.


Through this guide you will be able to:

- Share Jupyter Notebooks with a URL
- Collaborate on your Jupyter Notebook with your teammates and friends
- Access Jupyter Notebooks remotely
- Get a public URL to your local Jupyter Notebook

{{% tldr %}}

1. Start Notebook: `jupyter notebook` (or `python -m notebook`)
2. Observe the `token` from the output of the above command such as `http://localhost:8888/?token=4a0b8fdd640d8d3d14dbf5819ca865a8d4b4272aaf124xxx`
3. Keep the last terminal running. In a separate terminal, start Pinggy tunnel:

   ```
   ssh -p 443 -R0:localhost:8888 -t a.pinggy.io "a:Host:localhost:8888" "u:Origin:http://localhost:8888"
   ```

   Replace **8888** with the port where your Jupyter notebook is running. _Put a random password if asked._

4. Access the URL given by Pinggy. Enter the token in the browser when asked.

_Note: Do not share Jupyter notebook token publicly, as it will grant remote execution capability to anyone who has it._

{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/Fr92jL8yB30?si=1ToHSDsC-njHX0N5" title="Sharing Jupyter Notebooks from localhost" >}}

## Installing Jupyter Notebook

Before we dive into sharing Jupyter Notebooks with Pinggy, let's quickly go over the installation process for Jupyter Notebook. You can find detailed instructions on the official Jupyter website ({{< link href="https://jupyter.org/install" >}}https://jupyter.org/install{{< /link >}} ). Typically, the installation can be done using a single command:

```
python -m pip install notebook
```

Once Jupyter Notebook is installed, you can start the notebook server by running the following command in your terminal or command prompt:

```
jupyter notebook
```

Or `python -m notebook`

After starting the notebook we get an output like this:

{{< image "jupyter/image4.webp" "Jupyter Notebook Output" >}}

**Get the token:** The output will contain the URL to access it:
[http://localhost:8888/?token=4a0b8fdd640d8d3d14dbf5819ca865a8d4b4272aaf124xxx](#)

The URL provided in the output (http://localhost:8888/?token=...) is the default address for accessing Jupyter Notebook in your browser locally. Note that a **token** is provided in the URL: `4a0b8fdd640d8d3d14dbf5819ca865a8d4b4272aaf124xxx`

## Share Jupyter Notebook with Pinggy

Pinggy simplifies the process of sharing your Jupyter Notebooks by providing a secure and accessible way to collaborate with others over the internet. With Pinggy, you can make your locally running Jupyter Notebook accessible through a public URL. Here's how you can share your Jupyter Notebook using Pinggy:

1.  By default, Jupyter Notebook runs on port `8888`. You can ensure that your Jupyter Notebook runs on a specific port (e.g., port `8888`) by starting the server with the `--port` flag: `jupyter notebook --port=8888`

2.  Using pinggy you just need to add one live header modification to share it. Use this single command to share it:

    ```
    ssh -p 443 -R0:localhost:8888 -t a.pinggy.io "a:Host:localhost:8888" "u:Origin:http://localhost:8888"
    ```

    **In this command, replace `8888` with your output port number on which your Jupyter Notebook server is running, if it differs.**

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\",\"cmd\":\"ssh -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\",\"cmd\":\"ssh -p 443 -R0:localhost:8888 -t a.pinggy.io \\\"a:Host:localhost:8888\\\" \\\"u:Origin:http://localhost:8888\\\"\"}}}"
{{</ ssh_command >}}

3.  After executing the command, you will receive a Pinggy URL that can be used to access your shared Jupyter Notebook. The URL will look similar to the following: https://ranlkfsbjkxry.a.pinggy.link
    {{< image "jupyter/image2.webp" "Pinggy URL" >}}

4.  To access your Jupyter Notebook through the Pinggy URL, just open the url and input the **token** to access it.

    Or you can append the token obtained from your locally running server to the URL as a query parameter. The token is included in the original URL provided when starting the Jupyter Notebook server. The final URL will look something like this:

    https://ranlkfsbjkxry.a.pinggy.link?token=09f45d3196cfa14ff25ce2f4c60c23d7a7df2be3eb2xxxx

## Security

It's essential to exercise caution and avoid sharing the notebook token in public, as it grants access to your notebooks and allows execution of code on your system.

## Conclusion

By following these simple steps, you can now securely share your Jupyter Notebooks with colleagues, clients, or collaborators located anywhere in the world. Pinggy eliminates the need for complex network configurations or exposing your local machine to the internet, providing a hassle-free solution for sharing your Jupyter Notebooks.
