---
title: "Sharing a Self-Hosted Django Application from Localhost"
description: "Learn how to share your Django application from localhost using Pinggy. Step-by-step guide for running Django locally and creating secure tunnels for remote access."
date: 2025-11-07T10:00:00+05:30
draft: false
tags: ["Django", "Pinggy", "guide", "tunneling", "remote access", "Python"]
og_image: "images/sharing_self_hosted_django_app_from_localhost/sharing_self_hosted_django_app_from_localhost_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KICB7CiAgICAiQGNvbnRleHQiOiAiaHR0cHM6Ly9zY2hlbWEub3JnLyIsCiAgICAiQHR5cGUiOiAiSG93VG8iLAogICAgIm5hbWUiOiAiU2hhcmluZyBhIFNlbGYtSG9zdGVkIERqYW5nbyBBcHBsaWNhdGlvbiBmcm9tIExvY2FsaG9zdCIsCiAgICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHNoYXJlIHlvdXIgRGphbmdvIGFwcGxpY2F0aW9uIGZyb20gbG9jYWxob3N0IHVzaW5nIFBpbmdneS4gVGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgd2Fsa3MgeW91IHRocm91Z2ggcnVubmluZyBEamFuZ28gbG9jYWxseSBhbmQgY3JlYXRpbmcgc2VjdXJlIHR1bm5lbHMgZm9yIHJlbW90ZSBhY2Nlc3MuIiwKICAgICJzdGVwIjogWwogICAgICB7IkB0eXBlIjoiSG93VG9TdGVwIiwibmFtZSI6IkNyZWF0ZSBhbmQgQWN0aXZhdGUgVmlydHVhbCBFbnZpcm9ubWVudCIsInRleHQiOiJweXRob24zIC1tIHZlbnYgdmVudiAmJiBzb3VyY2UgdmVudi9iaW4vYWN0aXZhdGUifSwKICAgICAgeyJAdHlwZSI6Ikhvd1RvU3RlcCIsIm5hbWUiOiJJbnN0YWxsIERqYW5nbyBhbmQgQ3JlYXRlIFByb2plY3QiLCJ0ZXh0IjoicGlwIGluc3RhbGwgZGphbmdvICYmIGRqYW5nby1hZG1pbiBzdGFydHByb2plY3QgbXlwcm9qZWN0ICYmIGNkIG15cHJvamVjdCJ9LAogICAgICB7IkB0eXBlIjoiSG93VG9TdGVwIiwibmFtZSI6IlJ1biBNaWdyYXRpb25zIGFuZCBTdGFydCBTZXJ2ZXIiLCJ0ZXh0IjoicHl0aG9uIG1hbmFnZS5weSBtaWdyYXRlICYmIHB5dGhvbiBtYW5hZ2UucHkgcnVuc2VydmVyIn0sCiAgICAgIHsiQHR5cGUiOiJIb3dUb1N0ZXAiLCJuYW1lIjoiQ3JlYXRlIFR1bm5lbCB3aXRoIFBpbmdneSIsInRleHQiOiJzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODAwMCAtTDQzMDA6bG9jYWxob3N0OjQzMDAgLXQgYS5waW5nZ3kuaW8gdTpIb3N0OjEyNy4wLjAuMTo4MDAwIn0sCiAgICAgIHsiQHR5cGUiOiJIb3dUb1N0ZXAiLCJuYW1lIjoiQWNjZXNzIFVzaW5nIFB1YmxpYyBVUkwiLCJ0ZXh0IjoiVmlzaXQgdGhlIFBpbmdneS1nZW5lcmF0ZWQgVVJMIGh0dHBzOi8veW91ci1hcHAucGluZ2d5LmxpbmsgaW4geW91ciBicm93c2VyIn0KICAgIF0KICB9CiAgPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "sharing_self_hosted_django_app_from_localhost/sharing_self_hosted_django_app_from_localhost_banner.webp" "Sharing a Self-Hosted Django Application from Localhost" >}}

Building web applications with {{< link href="https://www.djangoproject.com/" >}}Django{{< /link >}} is a joy, but sharing your work-in-progress with teammates, clients, or testers can be surprisingly tricky. Your Django app runs perfectly on localhost, but the moment you need someone else to see it, you're stuck dealing with deployment pipelines, cloud configurations, or complex networking setups. What if you could skip all that and share your local Django server instantly?

In this guide, we'll show you how to expose your Django application to the internet in seconds using {{<link href="https://pinggy.io" >}}Pinggy{{</link >}}, without deploying to any server or messing with your router settings.

{{% tldr %}}
1. **Create and activate a virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Install Django and start a new project**
   ```bash
   pip install django
   django-admin startproject myproject
   cd myproject
   python3 manage.py migrate
   python3 manage.py runserver
   ```

3. **Share your local Django app using Pinggy**
   ```bash
   ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000
   ```
   
   Access your Django app via the provided <a href="https://pinggy.io" target="_blank">Pinggy</a> public URL (e.g., `https://your-app.pinggy.link`).
{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/xsIrb1PM2Hc?si=Yt2iMBklj76_JZfl" title="Share Django App from Localhost" >}}

## What Is Django?

{{< link href="https://www.djangoproject.com/" >}}Django{{< /link >}} is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Created by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.

### Key Features of Django

- **Batteries-Included Philosophy**: Django comes with everything you need out of the box, including an ORM, authentication system, admin panel, and form handling.
- **Security First**: Django helps developers avoid common security mistakes like SQL injection, cross-site scripting, cross-site request forgery, and clickjacking.
- **Scalable Architecture**: From small projects to high-traffic sites, Django scales beautifully. Instagram, Pinterest, and Mozilla all run on Django.
- **Excellent Documentation**: Django's documentation is legendary in the developer community for being comprehensive, clear, and beginner-friendly.
- **Vibrant Ecosystem**: Thousands of reusable packages extend Django's functionality for everything from REST APIs to real-time features.

Whether you're building a blog, an e-commerce platform, a social network, or a complex data-driven application, Django provides the tools and structure to get it done efficiently.

## Why Share Your Django App from Localhost?

When you're developing a Django application locally, it runs on `127.0.0.1:8000` or `localhost:8000`, which is only accessible from your own machine. This creates several challenges:

- **Client Demos**: You can't easily show your progress to clients without deploying or screen sharing.
- **Team Collaboration**: Remote teammates can't test features or provide feedback on your local development.
- **Webhook Testing**: Many third-party services (payment gateways, social auth, APIs) require a public URL to send webhooks.
- **Mobile Testing**: Testing your Django app on mobile devices becomes complicated without a public URL.

Traditional solutions involve deploying to staging servers, which is time-consuming and often overkill for quick demos or testing. Using {{<link href="https://pinggy.io" >}}Pinggy{{</link >}} , you can create a secure tunnel that makes your local Django application accessible to anyone on the internet, no deployment required.

## Prerequisites

Before we begin, make sure you have:

- **Python 3.8+**: Installed on your system. Download from {{< link href="https://www.python.org/downloads/" >}}Python's official website{{< /link >}}.
- **SSH Client**: Built-in on macOS/Linux; Windows users can use Git Bash or OpenSSH.
- **Basic Terminal Knowledge**: Familiarity with running commands in the terminal.
-  **{{<link href="https://dashboard.pinggy.io/" >}}Pinggy Account{{</link >}} (Optional)**: For custom domains and advanced features.

## Step 1: Set Up Your Django Project

Let's start by creating a fresh Django project. If you already have a Django app running, you can skip to Step 2.

### Create and Activate a Virtual Environment

Virtual environments keep your project dependencies isolated and prevent conflicts with other Python projects.

```bash
# Create a virtual environment
python3 -m venv venv

# Activate it (macOS/Linux)
source venv/bin/activate

# On Windows (PowerShell)
# venv\Scripts\Activate.ps1

# On Windows (Command Prompt)
# venv\Scripts\activate.bat
```

You'll know the virtual environment is active when you see `(venv)` at the beginning of your terminal prompt.

{{< image "sharing_self_hosted_django_app_from_localhost/create_virtual_environment.webp" "Create Virtual Environment" >}}

### Install Django

With your virtual environment activated, install Django using pip:

```bash
pip install django
```

This installs the latest stable version of Django and all its dependencies.

{{< image "sharing_self_hosted_django_app_from_localhost/install_django_package.webp" "Install Django Package" >}}

### Create a New Django Project

Now let's create a new Django project called `myproject`:

```bash
django-admin startproject myproject
cd myproject
```

{{< image "sharing_self_hosted_django_app_from_localhost/change_dir_to_myproject.webp" "Change Directory to myproject" >}}

This creates a directory structure like this:

```
myproject/
    manage.py
    myproject/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```
{{< image "sharing_self_hosted_django_app_from_localhost/folder_str.webp" "Folder Structure" >}}

### Run Initial Migrations

Django comes with several built-in apps that require database tables. Let's create them:

```bash
python3 manage.py migrate
```
{{< image "sharing_self_hosted_django_app_from_localhost/migrate_django.webp" "Migrate Django" >}}

This command applies all pending migrations and sets up your SQLite database.

### Start the Development Server

Now fire up Django's built-in development server:

```bash
python3 manage.py runserver
```

You should see output like:

```
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

Open your browser and visit `http://127.0.0.1:8000/`. You'll see Django's friendly welcome page with a rocket ship, confirming everything is working correctly.

{{< image "sharing_self_hosted_django_app_from_localhost/run_django_app.webp" "Run Django App" >}}

{{< image "sharing_self_hosted_django_app_from_localhost/django_running_on_localhost.webp" "Django Running on Localhost" >}}

## Step 2: Share Your Django App with Pinggy

Now comes the magic part. Open a new terminal window (keep your Django server running in the first one) and run this command:


{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -L4300:localhost:4300 -t free.pinggy.io u:Host:127.0.0.1:8000\"}}}"
{{</ ssh_command >}}

{{< image "sharing_self_hosted_django_app_from_localhost/pinggy_command.webp" "Pinggy Command" >}}

### Understanding the Command

Let's break down what this command does:

- **`ssh -p 443`**: Establishes a secure SSH connection to Pinggy's server on port 443 (HTTPS port, which works even on restrictive networks).
- **`-R0:localhost:8000`**: Creates a reverse tunnel that maps your local Django app (running on port 8000) to a public URL.
- **`-L4300:localhost:4300`**: Sets up local port forwarding for Pinggy's web debugger interface.
- **`-t free.pinggy.io`**: Specifies the Pinggy server to connect to.
- **`u:Host:127.0.0.1:8000`**: Updates the HTTP Host header to ensure Django accepts requests from the public URL.

### What You'll See

After running the command, Pinggy will output something like:

```
You can access local server via following URL(s):
https://rnssh-12-34-56-78.a.pinggy.link

Web Debugger: http://localhost:4300
```

{{< image "sharing_self_hosted_django_app_from_localhost/pinggy_public_url.webp" "Pinggy Public URL" >}}

That's it! Your Django application is now publicly accessible. Anyone can visit the Pinggy URL and interact with your app as if it were deployed on a real server.

## Step 3: Test Your Public Django App

Copy the Pinggy URL from your terminal and paste it into any browser. You should see your Django application load perfectly. Try it on your phone, share it with a colleague, or test it with webhook services - it all works seamlessly.

The web debugger at `http://localhost:4300` is particularly useful. It shows you all incoming HTTP requests in real-time, including headers, query parameters, and request bodies. This is invaluable for debugging webhooks and API integrations.

{{< image "sharing_self_hosted_django_app_from_localhost/django_running_on_pinggy_public_url.webp" "Django Running on Pinggy Public URL" >}}

## Advanced Pinggy Features for Django

Pinggy offers several advanced features that make it even more powerful for Django development:

### Custom Domains

Instead of using a random Pinggy subdomain, you can use your own custom domain. This is perfect for professional demos or when you need a branded URL.

Visit {{<link href="https://pinggy.io/docs/" >}}Pinggy's documentation{{</link >}}  to learn how to set up custom domains.

### Persistent URLs

By default, Pinggy generates a new URL each time you create a tunnel. With a {{<link href="https://pinggy.io/#prices" >}}Pinggy Pro account{{</link >}}, you can get persistent URLs that remain the same across sessions.

## Common Use Cases for Sharing Django Apps

Here are some scenarios where sharing your Django app from localhost is incredibly useful:

1. **Client Demos**: Show your progress to clients without deploying to a staging server.
2. **Webhook Development**: Test integrations with services like Stripe, PayPal, or Twilio that require public URLs.
3. **Mobile Testing**: Access your Django app from mobile devices on any network.
4. **Remote Collaboration**: Let team members test features or review your work in real-time.
5. **OAuth Testing**: Test social authentication flows that require callback URLs.
6. **API Development**: Share your Django REST Framework APIs with frontend developers or third-party integrators.


## Conclusion

Sharing your Django application from localhost has never been easier. With {{<link href="https://pinggy.io" >}}Pinggy{{</link >}}, you can transform your local development server into a publicly accessible application in seconds, without dealing with deployment pipelines, cloud configurations, or network settings. Whether you're demoing to clients, testing webhooks, or collaborating with remote teammates, Pinggy provides a fast, secure, and developer-friendly solution.

The combination of Django's powerful framework and Pinggy's instant tunneling creates a workflow that lets you focus on building great applications instead of wrestling with infrastructure. Give it a try on your next Django project - you'll wonder how you ever lived without it.

