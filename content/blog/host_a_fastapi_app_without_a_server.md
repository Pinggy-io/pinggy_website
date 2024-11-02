---
 title: "Host a FastAPI Application Without a Server" 
 description: "Learn how to deploy your FastAPI application effortlessly without a traditional server, using Pinggy for seamless public access, setup, and testing."
 date: 2024-11-02T14:15:25+05:30
 lastmod: 2024-11-02T15:15:25+05:30
 draft: false 
 tags: ["guide","FastAPI", "Pinggy"]
 og_image: "images/host_fastapi_app/host fastapi.webp"
 outputs:
  - HTML
  - AMP
---

{{< image "host_fastapi_app/host fastapi.webp" "Host a FastAPI Application Without a Server" >}}

#### Introduction to FastAPI
{{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}} is a modern, high-performance web framework for building APIs with Python, based on standard Python type hints. It’s known for its speed, ease of use, and automatic documentation generation with OpenAPI. Built on ASGI (Asynchronous Server Gateway Interface), FastAPI is especially suited for handling concurrent requests and is often used to create RESTful APIs for web applications, mobile backends, and even IoT solutions.

##### Key Features of FastAPI

- FastAPI is comparable in speed to Node.js and Go, making it ideal for building high-performance applications.
- It offers an excellent developer experience, with features such as input validation and detailed error handling to simplify development.
- FastAPI automatically generates OpenAPI and Swagger UI documentation, ensuring that your APIs are well-documented with minimal effort.
- Built on the Starlette and Pydantic libraries, FastAPI is highly compatible with a wide range of Python libraries.

Now that we know the basics of FastAPI, let’s look at how to install it and test it without needing a traditional server.

## Running a FastAPI server on localhost

#### Step 1: Create a Virtual Environment

When you work in Python projects you probably should use a virtual environment (or a similar mechanism) to isolate the packages you install for each project.

To create a virtual environment, you can use the `venv` module that comes with Python.

```bash
python -m venv .venv
```

That command creates a new virtual environment in a directory called `.venv`.

#### Step 2: Activate the Virtual Environment

Activate the new virtual environment so that any Python command you run or package you install uses it.

###### For Linux,macOS

```bash
source .venv/bin/activate
```

###### For Windows Powershell

```bash
.venv\Scripts\Activate.ps1
```

###### For Windows Bash

```bash
source .venv/Scripts/activate
```

Upgrading `pip` before installing packages like FastAPI is generally a good practice, especially if you're working in a new environment or haven't updated `pip` in a while.

To upgrade `pip`, use:

```bash
python -m pip install --upgrade pip
```

###### Step 3: Building a Simple FastAPI Application

The simplest FastAPI file could look like this:
```javascript
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

```

###### Step 4: Install FastAPI

To get started with FastAPI, you need to install it.

To install FastAPI along with some optional dependencies, Use the command:

```bash
pip install "fastapi[standard]"
```

###### Step 5: Run the FastAPI Application

Now, you can run the application with:

```bash
fastapi dev main.py
```

{{< image "host_fastapi_app/fastapi dev app.webp" "Run fastapi dev command" >}}

###### Step 6: Check the output

Open your browser at `http://127.0.0.1:8000`

You will see the JSON response as:

```javascript
{"message": "Hello World"}
```
{{< image "host_fastapi_app/json output.webp" "JSON output" >}}

## Hosting FastAPI through Pinggy

[Pinggy](https://pinggy.io) offers an easy and secure way to expose a local FastAPI application to the internet without needing complex server setups or cloud deployments.

Use the following command to set up a tunnel to your local development server:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Slack Webhook:" portstring="Slack Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

Note: Replace the port 8000 in the command with the port where your local development server is running.

After running the command, Pinggy will generate a public URL which might looks like this:
```
http://rnssh-103-171-246-33.a.free.pinggy.link
```

{{< image "host_fastapi_app/pinggy command.webp" "Pinggy command" >}}

When you paste the modified URL into your browser, your FastAPI application will process the request and return the output in JSON format, which will be displayed directly in the browser.

## Advantages of Using Pinggy for Hosting FastAPI

Pinggy provides several unique benefits for developers:

1. **Quick Setup**: Instantly expose a local FastAPI app to the internet without configuring cloud infrastructure or deploying a server.
2. **Testing and Demos**: Ideal for sharing applications during development or conducting live demos. It simplifies the process of testing integrations with external services that require a public URL (e.g., webhooks, payment gateways).
3. **Flexible Access**: With Pinggy’s public URL, you can let others access your local application without being on the same network.
4. **Security Built-In**: Pinggy supports HTTPS by default, which helps secure the connection between clients and your local application.
5. **Developer-Friendly**: Pinggy is straightforward and doesn’t require heavy configurations, making it accessible for both new and experienced developers.

## ASGI Servers and Their Role in FastAPI Applications

FastAPI is an ASGI web framework.

{{< link href="https://asgi.readthedocs.io/en/latest/" >}}ASGI{{< /link >}} (Asynchronous Server Gateway Interface) servers are essential for running FastAPI applications as they are optimized for handling asynchronous communication. ASGI, an evolution of the WSGI (Web Server Gateway Interface)standard, is specifically designed to manage high-traffic environments, real-time data, and WebSocket connections. Below is an overview of several ASGI servers, detailing their key features and common use cases for FastAPI applications.

#### Uvicorn

{{< link href="https://www.uvicorn.org/" >}}Uvicorn{{< /link >}} serves as a popular choice for running FastAPI due to its simplicity and speed. It supports HTTP, WebSocket, and HTTP/2 protocols. Known for its low latency and high concurrency, Uvicorn is highly compatible with FastAPI, making it well-suited for both development and production environments that handle real-time data or asynchronous processes.

**Command to Start**: 
```bash
uvicorn main:app --host <ip-address> --port 8000
```

#### Hypercorn

{{< link href="https://pypi.org/project/Hypercorn/" >}}Hypercorn{{< /link >}} offers versatility with support for HTTP, HTTP/2, and advanced protocols like QUIC. It can operate in both synchronous and asynchronous modes, providing flexibility for applications with diverse protocol requirements. This makes Hypercorn ideal for complex architectures, such as microservices, that involve a mix of synchronous and asynchronous operations.

**Command to Start**: 
```bash
hypercorn main:app --bind <ip-address>:8000
```

#### Daphne

{{< link href="https://github.com/django/daphne" >}}Daphne{{< /link >}} was initially developed for Django Channels and is particularly well-suited for projects that prioritize real-time data transfer, especially involving WebSocket connections. This makes Daphne ideal for applications like chat systems, live analytics, and collaborative tools where asynchronous communication is essential.

**Command to Start**: 
```bash
daphne -b <ip-address> -p 8000 main:app
```

#### Hybrid Approach

Some developers choose a hybrid approach, utilizing Uvicorn for HTTP routes and Daphne for WebSocket connections by leveraging ASGI Lifespan middleware or load balancers. This method effectively combines Uvicorn’s speed in handling HTTP requests with Daphne’s optimized management of WebSocket connections, offering a tailored solution for applications that require both fast HTTP responses and efficient WebSocket handling.

While these servers each provide distinct advantages, [Pinggy](https://pinggy.io) complements these setups by making FastAPI applications accessible on the internet effortlessly, allowing developers to focus on application development rather than server configuration.

## Using Pinggy to share the ASGI server

After installing FastAPI , We need to install Uvicorn.

```bash
pip install uvicorn
```
Run the below command to run the application in your localhost using uvicorn server:

```bash
uvicorn main:app --host localhost --port 8080
```

Let's break down the command:
1. `uvicorn`:
- This is the command to start the Uvicorn server.

2. `main:app`:
- This specifies the module and application instance. Replace `main` with the name of your Python file (without the `.py` extension) that contains the FastAPI app, and `app` is the instance of FastAPI.

3. `--host localhost`:
- This option sets the host to `localhost`. This means that the application will only be accessible from your local machine.

4. `--port 8080`:
- This option specifies the port number on which the FastAPI application will run. You can choose any available port, but `8080` is commonly used for development.

#### Share the server using Pinggy

[Pinggy](https://pinggy.io) offers an easy and secure way to expose a local FastAPI application to the internet without needing complex server setups or cloud deployments.

Use the following command to set up a tunnel to your local development server:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Slack Webhook:" portstring="Slack Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

Note: Replace the port 8000 in the command with the port where your local development server is running.

After running the command, Pinggy will generate a public URL which might looks like this:
```
http://rnssh-103-171-246-33.a.free.pinggy.link
```
When you paste the modified URL into your browser, your FastAPI application will process the request and return the output in JSON format, which will be displayed directly in the browser.

## Conclusion

In this article, we explored how to host a FastAPI application without a traditional server using [Pinggy](https://pinggy.io). FastAPI is an efficient framework for creating high-performance APIs, known for its ease of use and automatic documentation. We demonstrated the installation process, built a simple CPU temperature application, and discussed how to make it publicly accessible via Pinggy. Additionally, we highlighted various ASGI servers, such as Uvicorn, Hypercorn, and Daphne, which are essential for running FastAPI applications efficiently, particularly in handling asynchronous communication.

Overall, combining FastAPI with Pinggy and the right ASGI server provides a quick and effective solution for deploying APIs seamlessly.
