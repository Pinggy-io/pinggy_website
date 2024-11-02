---
 title: "Host a FastAPI Application Without a Server" 
 description: "Learn how to deploy your FastAPI application effortlessly without a traditional server, using Pinggy for seamless public access, setup, and testing."
 date: 2024-11-02T14:15:25+05:30
 lastmod: 2024-11-02T15:15:25+05:30
 draft: false 
 tags: ["guide","FastAPI", "Pinggy"]
 og_image: "images/slack_webhooks/slack webhook.webp"
 outputs:
  - HTML
  - AMP
---

## Introduction to FastAPI

FastAPI is a modern, high-performance web framework for building APIs with Python, based on standard Python type hints. It’s known for its speed, ease of use, and automatic documentation generation with OpenAPI. Built on ASGI (Asynchronous Server Gateway Interface), FastAPI is especially suited for handling concurrent requests and is often used to create RESTful APIs for web applications, mobile backends, and even IoT solutions.

#### Key Features of FastAPI

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

###### Step 6: Check the output

Open your browser at `http://127.0.0.1:8000`

You will see the JSON response as:

```javascript
{"message": "Hello World"}
```

## Hosting FastAPI through Pinggy

[Pinggy](https://pinggy.io) offers an easy and secure way to expose a local FastAPI application to the internet without needing complex server setups or cloud deployments.

Use the following command to set up a tunnel to your local development server:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Slack Webhook:" portstring="Slack Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

Note: Replace the port 8000 in the command with the port where your local development server is running.

