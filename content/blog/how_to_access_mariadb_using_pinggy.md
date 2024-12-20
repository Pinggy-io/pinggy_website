---
title: "How to Access MariaDB Using Pinggy"
description: "Learn how to access MariaDB from anywhere using Pinggy. Bypass NAT, CGNAT, and firewall restrictions with this simple guide. Set up MariaDB in Docker, start a Pinggy TCP tunnel, and connect via MariaDB client or DBeaver."
date: 2024-12-19T10:30:00+05:30
draft: false
og_image: "images/access_mariadb_using_pinggy/mariadb_pinggy.webp"
tags: ["MariaDB", "Pinggy", "database", "guide", "networking"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBBY2Nlc3MgTWFyaWFEQiBVc2luZyBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTZXR1cCBhbmQgc2VjdXJlbHkgYWNjZXNzIE1hcmlhREIgZnJvbSBhbnl3aGVyZSB1c2luZyBQaW5nZ3kuIFRoaXMgc2ltcGxlIHN0ZXAgZ3VpZGUgaGVscHMgeW91IGJ5cGFzcyBOQVQsIENHTkFULCBhbmQgZmlyZXdhbGwgcmVzdHJpY3Rpb25zLiBMZWFybiBob3cgdG8gc2V0IHVwIE1hcmlhREIgaW4gRG9ja2VyLCBzdGFydCBhIFBpbmdneSBUQ1AgdHVubmVsLCBhbmQgY29ubmVjdCB2aWEgTWFyaWFEQiBjbGllbnQgb3IgREJlYXZlci4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYWNjZXNzX21hcmlhZGJfdXNpbmdfcGluZ2d5L21hcmlhZGJfcGluZ2d5LndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU3RhcnQgYSBNYXJpYURCIERvY2tlciBjb250YWluZXIgdXNpbmcgdGhlIGNvbW1hbmQ6IGRvY2tlciBydW4gLS1uYW1lIG1hcmlhZGItdGVzdCAtZSBNWVNRTF9ST09UX1BBU1NXT1JEPXlvdXJwYXNzd29yZCAtcCAzMzA2OjMzMDYgLWQgbWFyaWFkYiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJPcGVuIGEgUGluZ2d5IFRDUCB0dW5uZWwgb24gcG9ydCAzMzA2IHVzaW5nIHRoZSBjb21tYW5kOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MzMwNiB0Y3BAYS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiVGVzdCB0aGUgY29ubmVjdGlvbiB1c2luZyB0aGUgTWFyaWFEQiBjbGllbnQgb3IgREJlYXZlciB3aXRoIHRoZSBQaW5nZ3ktZ2VuZXJhdGVkIGhvc3RuYW1lIGFuZCBwb3J0LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< link href="https://mariadb.org/" >}}MariaDB{{< /link >}} is an open-source relational database management system (RDBMS) that has gained popularity due to its robust performance, reliability, and compatibility with MySQL. Whether you’re using {{< link href="https://mariadb.org/" >}}MariaDB{{< /link >}} for development, data storage, or analytics, one of the challenges developers face is accessing the database from outside their local network. This article will guide you on using [Pinggy](https://pinggy.io/) to overcome access challenges caused by NAT, CGNAT, and firewalls. 

{{< image "access_mariadb_using_pinggy/mariadb_pinggy.webp" "MariaDB Pinggy" >}}

{{% tldr %}}
1. <a href="https://mariadb.org/" target="_blank" >MariaDB</a> is a popular open-source database management system. Accessing a local MariaDB instance remotely is often hindered by NAT, CGNAT, and firewall restrictions.
2. If you do not have MariaDB running,  you may start it using Docker:
     ```bash
     docker run --name mariadb-test -e MYSQL_ROOT_PASSWORD=yourpassword -p 3306:3306 -d mariadb
     ```
3. Start a Pinggy TCP tunnel on port `3306`:
     ```bash
     ssh -p 443 -R0:localhost:3306 tcp@a.pinggy.io
     ```
   - [Pinggy](https://pinggy.io/) generates a public URL like `tcp://example.pinggy.io:48780`.
5. Use the Pinggy-provided hostname and port to connect to MariaDB with tools like `mariadb` command, or <a href="https://dbeaver.io/" target="_blank" >DBeaver</a>.
{{% /tldr %}}

## What Is MariaDB?

{{< link href="https://mariadb.org/" >}}MariaDB{{< /link >}} is a fork of MySQL that offers advanced features and better licensing terms. Built with speed and scalability in mind, it supports standard SQL and is compatible with a wide range of tools and applications. It is commonly used in web applications, enterprise-grade systems, and cloud-based platforms.

### Key Features of MariaDB:
- **Open Source**: Completely free to use and modify.
- **Scalable**: Suitable for small projects as well as large-scale enterprise systems.
- **High Compatibility**: Works seamlessly with MySQL and many third-party tools like DBeaver.
- **Security**: Supports data encryption, authentication plugins, and robust privilege systems.

## The Problem: NAT, CGNAT, and Firewalls

When working with MariaDB locally, you might encounter issues when trying to access it from external devices or applications. These challenges often stem from:

1. **NAT (Network Address Translation):** NAT hides private IP addresses behind a public IP, which prevents direct access to devices on a local network.
2. **CGNAT (Carrier-Grade NAT):** Many internet service providers use CGNAT to manage public IPs, further complicating external access.
3. **Firewalls:** Security measures on routers and servers block unauthorized inbound traffic, making it difficult to connect to your MariaDB instance.

These barriers make it challenging to access your local MariaDB instance for testing, debugging, or remote collaboration. This is where **Pinggy** comes in handy.

## What is Pinggy?

[Pinggy](https://pinggy.io/) is a lightweight tunneling solution that creates a public endpoint for local services. It allows you to expose your local MariaDB database to the internet securely and easily, bypassing NAT, CGNAT, and firewall restrictions.

### Advantages of Using Pinggy:
- **No Configuration Hassles:** No need to modify firewall or NAT settings.
- **Secure Access:** Provides secure tunnels with unique endpoints.
- **Simple Setup:** Minimal commands required to set up a tunnel.

## Setting Up MariaDB with Pinggy

Here’s a step-by-step guide to accessing MariaDB using Pinggy.

**Note:** Using Docker to run MariaDB here is just an example. You can follow similar steps if your MariaDB instance is installed natively or hosted elsewhere.

### Step 1: Run a Local MariaDB Instance (Example Using Docker)
If you don't already have a MariaDB instance, you can use Docker to set up one for testing:

```bash
docker run --name mariadb-test -e MYSQL_ROOT_PASSWORD=yourpassword -p 3306:3306 -d mariadb
```
{{< image "access_mariadb_using_pinggy/docker_image.webp" "MariaDB Instance" >}}

- **`MYSQL_ROOT_PASSWORD`**: Replace `yourpassword` with a secure password for the MariaDB root user.
- **`-p 3306:3306`**: Maps MariaDB's default port (3306) to your local machine for access.

To ensure the MariaDB instance is running, check the logs:

```bash
docker logs mariadb-test
```

If you are using a native or pre-existing installation of MariaDB, make sure it is accessible locally on port 3306.

### Step 2: Start a Pinggy TCP Tunnel
Create a Pinggy TCP tunnel to expose your local MariaDB instance securely. Run the following command:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3306 tcp@a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3306 tcp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3306 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3306 tcp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3306 tcp@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3306 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3306 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3306 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3306 tcp@a.pinggy.io\"}}}"
{{</ ssh_command >}}
{{< image "access_mariadb_using_pinggy/pinggy_command.webp" "Pinggy Command" >}}
{{< image "access_mariadb_using_pinggy/pinggy_url.webp" "Pinggy URL" >}}

- This command establishes a secure connection and provides a public URL that maps to `localhost:3306` on your machine.
- The command output will include a generated public TCP URL like `tcp://example.pinggy.io:XXXXX`.

### Step 3: Test the Connection
You can now connect to MariaDB remotely using the public endpoint provided by Pinggy:

1. **MariaDB Command-Line Client**:
   ```bash
   mysql -h example.pinggy.io -P XXXXX -u root -p
   ```
   Replace `example.pinggy.io` and `XXXXX` with the hostname and port provided by Pinggy. Enter the MariaDB root password when prompted.
2. **Using DBeaver**:

   - Launch {{< link href="https://dbeaver.io/" >}}DBeaver{{< /link >}} and create a new database connection.
   - Select **MariaDB** as the database type.
   - Input the Pinggy-provided hostname, port, and your MariaDB username and password.
   - Test and save the connection settings.

{{< image "access_mariadb_using_pinggy/connection_config.webp" "DBeaver Connection Config" >}}
{{< image "access_mariadb_using_pinggy/connection_test.webp" "DBeaver Connection Test" >}}

**Note:** You can also inspect the incoming requests in the Pinggy URL Terminal.
{{< image "access_mariadb_using_pinggy/incoming_request.webp" "Pinggy URL Incoming Request" >}}
## How Pinggy Solves Access Challenges

1. **Bypassing NAT and CGNAT**: Pinggy's tunneling allows seamless remote access without dealing with network configuration headaches.
2. **Firewall Compatibility**: Because Pinggy uses SSH over port 443, it works even in networks with strict firewall rules.
3. **Ease of Use**: No need for advanced setups—Pinggy's lightweight command gets you connected in minutes.

## Conclusion

Accessing MariaDB remotely can be challenging due to NAT, CGNAT, and firewall restrictions. However, Pinggy provides a quick and secure solution to expose your local MariaDB instance to the internet. Whether you use Docker or a native installation of MariaDB, Pinggy ensures a seamless experience with minimal configuration.

Start using [Pinggy](https://pinggy.io/) today and make remote access to your MariaDB instance hassle-free!