---
 title: "Remote System Monitoring with FastAPI and Pinggy" 
 description: "Learn how to create a FastAPI application for monitoring various system metrics remotely, using Pinggy for easy setup and real-time access."
 date: 2024-11-02T14:15:25+05:30
 lastmod: 2024-11-02T15:15:25+05:30
 draft: false 
 tags: ["guide","FastAPI", "Pinggy", "System Monitoring"]
 og_image: "system_monitoring_fastapi/main_img.webp"
 outputs:
  - HTML
  - AMP
---

In this article, we will see how to remotely monitor your system's performance—specifically CPU, RAM, memory, and disk usage—using FastAPI and Pinggy.
{{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}}, known for its speed and efficiency,
is an excellent framework for building APIs, 
making it a popular choice for developers.
[Pinggy](https://pinggy.io) is an excellent tool for effortlessly and securely sharing your FastAPI server directly from localhost with just a single command, ensuring seamless remote access even if your server is located behind a firewall.

{{< image "system_monitoring_fastapi/main_img.webp" "Remote System Monitoring with FastAPI and Pinggy" >}}

## Introduction to FastAPI

{{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}} is a cutting-edge, high-performance framework in Python designed for creating APIs swiftly and efficiently. With native support for Python type hints, it offers remarkable speed, ease of use, and automatically generated OpenAPI documentation. Built on the ASGI (Asynchronous Server Gateway Interface) standard, FastAPI is highly adept at handling concurrent requests, making it an ideal choice for APIs that monitor system metrics such as CPU, RAM, memory, and disk usage.

Now that we’ve covered the basics of FastAPI, let’s go over the steps for setting up and running our FastAPI application to monitor system performance metrics.

## Prerequisite Steps to Setup Your FastAPI application

### Step 1: Create a Virtual Environment

When working on Python projects, it's recommended to use a virtual environment to keep the packages for each project separate and isolated.

To create a virtual environment, you can use the `venv` module that comes with Python.

```bash
python -m venv .venv
```

> Note: If the command `python` does not work, try replacing it with `python3`

That command creates a new virtual environment in a directory called `.venv`.

### Step 2: Activate the Virtual Environment

Activate the new virtual environment to ensure that any Python commands you execute or packages you install are applied within it.

#### For Linux, MacOS

```bash
source .venv/bin/activate
```

#### For Windows Powershell

```ps
.venv\Scripts\Activate.ps1
```

#### For Windows Bash

```bash
source .venv/Scripts/activate
```

Upgrading `pip` before installing packages like FastAPI is recommended, particularly when working in a fresh environment or if it's been a while since `pip` was last updated.

To upgrade `pip`, use:

```bash
python -m pip install --upgrade pip
```
<!-- ### Step 3: Building a Simple FastAPI Application

The simplest FastAPI file could look like this:

```javascript
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

``` -->

### Step 3: Install FastAPI

To get started with FastAPI, you need to install it.

To install FastAPI along with some optional dependencies, Use the command:

```bash
pip install "fastapi[standard]"
```

### Step 4: Install psutil
{{< link href="https://pypi.org/project/psutil/" >}}psutil{{< /link >}} is a Python library used to retrieve information on system utilization, including CPU, memory, disk, and network usage. It is required for this FastAPI application to gather real-time performance metrics of the system, enabling efficient monitoring and reporting of key resources necessary for performance analysis.

To install `psutil` run the below command:

```bash
pip install psutil
```

## Build a FastAPI Application to Monitor System Performance Metrics

In this section, we will create routes for monitoring various system performance metrics, such as CPU usage, memory, and disk space. Each route will be explained separately to demonstrate how we can collect and display real-time system data using FastAPI.

> **Visit this GitHub Repository to access the codebase.** ({{< link href="https://github.com/AbhilashK26/Remote_system_monitoring_with_FastAPI_and_Pinggy" >}}GitHub Link{{< /link >}})

Now, let's discuss each component of the system individually.

### Monitor CPU Usage Metrics

In this section, we will configure routes within our FastAPI application to monitor CPU usage on the system.
We'll expose three routes to monitor various aspects of the CPU:

1. `/cpu`: Get the overall CPU usage percentage.
2. `/cpu/cores`: Get the CPU usage for each core individually.
3. `/cpu/frequency`: Retrieve information about the current, minimum, and maximum CPU frequencies.

Below is the **code** of the FastAPI application:

```javascript
from fastapi import FastAPI
import psutil  # Assuming you are using psutil for CPU monitoring

app = FastAPI()

# Route to get CPU usage information
@app.get("/cpu")
async def get_cpu_usage():
    cpu_usage = psutil.cpu_percent(interval=1)  # Returns CPU usage as a percentage
    return {"cpu_usage": cpu_usage}

# Route to get CPU core information
@app.get("/cpu/cores")
async def get_cpu_cores():
    core_usage = psutil.cpu_percent(interval=1, percpu=True)  # Returns usage per core
    return {"core_usage": core_usage}

# Route to get CPU frequency information
@app.get("/cpu/frequency")
async def get_cpu_frequency():
    frequency = psutil.cpu_freq()  # Returns CPU frequency info
    return {
        "current": frequency.current,
        "min": frequency.min,
        "max": frequency.max
    }

```

The **outputs** of different endpoints will be as follows:

- `/cpu`:

```json
{ "cpu_usage": 45.3 }
```

{{< image "system_monitoring_fastapi/cpu_usage1.webp" "FastAPI application to monitor CPU metrices" >}}

- `/cpu/cores`:

```json
{ "core_usage": [50.2, 45.1, 40.5, 60.7] }
```

{{< image "system_monitoring_fastapi/cpu_usage2.webp" "FastAPI application to monitor CPU metrices" >}}

- `/cpu/frequency`:

```json
{ "current": 2200.0, "min": 1000.0, "max": 3500.0 }
```

{{< image "system_monitoring_fastapi/cpu_usage3.webp" "FastAPI application to monitor CPU metrices" >}}


### Track Memory and Swap Usage

In this section, we will create routes for monitoring memory usage, which is crucial for tracking how much memory is being used by the system and how much is available. We will monitor both virtual memory and swap memory. Virtual memory represents the system's total memory, while swap memory refers to the disk-based memory used when physical memory is full.
We'll expose two routes:

1. `/memory`: Get the current status of virtual memory.
2. `/memory/swap`: Retrieve swap memory usage statistics.

Below is the **code** of the FastAPI application:

```javascript
from fastapi import FastAPI
import psutil

app = FastAPI()

@app.get("/memory")
async def get_memory_usage():
    """Returns virtual memory usage metrics."""
    memory = psutil.virtual_memory()
    return {
        "total": memory.total,
        "available": memory.available,
        "used": memory.used,
        "percent": memory.percent
    }

@app.get("/memory/swap")
async def get_swap_memory_usage():
    """Returns swap memory usage metrics."""
    swap = psutil.swap_memory()
    return {
        "total": swap.total,
        "used": swap.used,
        "free": swap.free,
        "percent": swap.percent,
        "sin": swap.sin,
        "sout": swap.sout
    }
```

The **outputs** of different endpoints will be as follows:

- `/memory`:

```json
{
  "total": 16777216000,
  "available": 8225292288,
  "used": 7374233600,
  "percent": 57.3
}
```

{{< image "system_monitoring_fastapi/memory1.webp" "FastAPI application to monitor Memory metrices" >}}

- `/memory/swap`:

```json
{
  "total": 8589934592,
  "used": 1073741824,
  "free": 7516192768,
  "percent": 12.5,
  "sin": 0,
  "sout": 0
}
```

{{< image "system_monitoring_fastapi/memory2.webp" "FastAPI application to monitor Memory metrices" >}}


### Monitor RAM Utilization

In this section, we will monitor the RAM usage in percentage. Monitoring RAM usage helps in understanding the health of the system and whether it's using memory efficiently.
We will expose one route:

1. `/ram`: Returns RAM usage in percentage.

Below is the **code** of the FastAPI application:

```javascript
from fastapi import FastAPI
import psutil

app = FastAPI()

@app.get("/ram")
async def get_ram_usage():
    """Returns RAM usage in percentage."""
    return {"ram_usage": psutil.virtual_memory().percent}

# To run this application, use the following command:
# uvicorn <filename_without_py_extension>:app --reload
```

The **outputs** of different endpoints will be as follows:

- `/ram`:

```json
{ "ram_usage": 45.2 }
```

{{< image "system_monitoring_fastapi/ram1.webp" "FastAPI application to monitor RAM metrices" >}}


### Disk Usage and I/O Statistics

Monitoring disk usage is important for tracking how much space is being utilized on the system's storage. This includes monitoring the overall disk usage, checking the partitions, and displaying disk I/O statistics (read/write operations).
We'll expose three routes:

1. `/disk`: Returns overall disk usage for the root filesystem.
2. `/disk/partitions`: Provides information about mounted disk partitions.
3. `/disk/io`: Displays disk I/O statistics.

Below is the **code** of the FastAPI application:

```javascript
from fastapi import FastAPI
import psutil

app = FastAPI()

@app.get("/disk")
async def get_disk_usage():
    """Returns disk usage metrics for the root filesystem."""
    disk = psutil.disk_usage('/')
    return {
        "total": disk.total,
        "used": disk.used,
        "free": disk.free,
        "percent": disk.percent
    }

@app.get("/disk/partitions")
async def get_disk_partitions():
    """Returns information about mounted disk partitions."""
    partitions = psutil.disk_partitions()
    partition_info = []
    for partition in partitions:
        partition_info.append({
            "device": partition.device,
            "mountpoint": partition.mountpoint,
            "fstype": partition.fstype,
            "opts": partition.opts
        })
    return {"partitions": partition_info}

@app.get("/disk/io")
async def get_disk_io():
    """Returns disk I/O statistics."""
    io_stats = psutil.disk_io_counters()
    return {
        "read_count": io_stats.read_count,
        "write_count": io_stats.write_count,
        "read_bytes": io_stats.read_bytes,
        "write_bytes": io_stats.write_bytes,
        "read_time": io_stats.read_time,
        "write_time": io_stats.write_time
    }
```

The **outputs** of different endpoints will be as follows:

- `/disk`:

```json
{
  "total": 500107862016,
  "used": 237081992192,
  "free": 263025547776,
  "percent": 47.5
}
```

{{< image "system_monitoring_fastapi/disk1.webp" "FastAPI application to monitor Disk metrices" >}}

- `/disk/partitions`:

```json
{
  "partitions": [
    {
      "device": "/dev/sda1",
      "mountpoint": "/",
      "fstype": "ext4",
      "opts": "rw,relatime"
    }
  ]
}
```

{{< image "system_monitoring_fastapi/disk2.webp" "FastAPI application to monitor Disk metrices" >}}

- `/disk/io`:

```json
{
  "read_count": 1000000,
  "write_count": 500000,
  "read_bytes": 1048576000,
  "write_bytes": 524288000,
  "read_time": 5000,
  "write_time": 2000
}
```

{{< image "system_monitoring_fastapi/disk3.webp" "FastAPI application to monitor Disk metrices" >}}

## Run the FastAPI Application locally

Now, you can run the application with:

```bash
fastapi dev main.py
```

{{< image "host_fastapi_app/fastapi_dev_app.webp" "Run fastapi dev command" >}}

## Check the output

Open your browser at `http://127.0.0.1:8000/<required-endpoint>` and check the output which is a JSON response.


## Remotely Monitor your FastAPI app through Pinggy

[Pinggy](https://pinggy.io) offers an easy and secure way to expose a local FastAPI application to the internet without needing complex server setups or cloud deployments.

Use the following command to set up a tunnel to your local development server:

```bash
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
```

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to FastAPI:" portstring="FastAPI Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

Note: Replace the port 8000 in the command with the port where your local development server is running.

After running the command, Pinggy will generate a public URL which might looks like this:

```
http://rnnex-2405-201-800b-489d-7063-516b-6c80-5d24.a.free.pinggy.link
```

> Add the endpoint after this link to get the required output.
> Say for getting cpu uage informtion, the link would be like

```
http://rnnex-2405-201-800b-489d-7063-516b-6c80-5d24.a.free.pinggy.link/cpu
```

{{< image "system_monitoring_fastapi/pinggy_command_img.webp" "Pinggy command" >}}

When you paste the modified URL into your browser, your FastAPI application will process the request and return the output in JSON format, which will be displayed directly in the browser.

Output would look like:-

{{< image "system_monitoring_fastapi/pinggy_output.webp" "Output through Pinggy" >}}

## Advantages of Using Pinggy for Hosting FastAPI

Pinggy provides several unique benefits for developers:

1. **Quick Setup**: Instantly expose a local FastAPI app to the internet without configuring cloud infrastructure or deploying a server.
2. **Testing and Demos**: Ideal for sharing applications during development or conducting live demos. It simplifies the process of testing integrations with external services that require a public URL (e.g., webhooks, payment gateways).
3. **Flexible Access**: With Pinggy’s public URL, you can let others access your local application without being on the same network.
4. **Security Built-In**: Pinggy supports HTTPS by default, which helps secure the connection between clients and your local application.
5. **Developer-Friendly**: Pinggy is straightforward and doesn’t require heavy configurations, making it accessible for both new and experienced developers.

## Conclusion

In this article, we've explored how to remotely monitor system performance, such as CPU, RAM, memory, and disk usage, using FastAPI and [Pinggy](https://pinggy.io). By leveraging FastAPI’s ease of use, speed, and simplicity, we’ve created a set of powerful APIs to track various system metrics. We also demonstrated how to extend FastAPI’s capabilities to monitor hardware usage, providing insights into how your system is performing in real-time.

[Pinggy](https://pinggy.io) as a tool enables developers to easily expose their local FastAPI applications to the internet without the need for complex server setups. Pinggy provides a simple and secure way to share FastAPI apps with a public URL, making it ideal for testing, live demonstrations, and quick deployments during development.

By combining FastAPI with tools like [Pinggy](https://pinggy.io), developers can streamline the development and sharing process, ensuring that they can monitor system performance while maintaining accessibility and security. Whether you are building system monitoring tools, developing demos, or working on API-based solutions, this simple yet effective approach will improve your workflow and enhance productivity.
