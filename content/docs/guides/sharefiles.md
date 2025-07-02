---
 title: "Share files directly form localhost"
 description: "Effortlessly share files from your PC without cloud hassle. Use Pinggy to create tunnels, generate public URLs, and share files directly from localhost."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Share files directly from your PC

Sharing files quickly can be a pain when you need to sign in to a cloud drive, upload files, manage sharing settings, etc. With Pinggy you can share files directly from your Mac / PC without having to upload it in a drive.

This tutorial explains how you can share files form localhost directly through public URLs provided by Pinggy.

#### Prerequisites

1. Python ( version 3 or higher )
2. If you do not have python, you can also use NodeJs.

#### Step 1: serve your files locally.

Using Python, navigate to the directory which you want to share. Then run the following command.

```
python -m http.server
```

If you are using NodeJs, use the following commands:

```bash
npm install http-server -g
http-server -p 8000
```

#### Step 2: start Pinggy tunnel.

Create a tunnel using the command:
<br>

```
ssh -p 443 -R0:localhost:8000 a.pinggy.io
```

Access your files using the URLs given by Pinggy after the above command.

Example:

```
You can access local server via following URL(s):
http://fakqxzqrohxxx.a.pinggy.link
https://fakqxzqrohxxx.a.pinggy.link
```
