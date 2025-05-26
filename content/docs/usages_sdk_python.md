---
 title: "Pinggy Usage"
 date: 2025-05-26T14:15:25+05:30
 draft: false
---

# Python SDK
Python SDK provides a simple way to interact with the Pinggy API. It allows users to easily setup and use Pinggy tunneling in their Python applications. It is designed to be easy to use and integrate with existing Python codebases.

While Pinggy tunnel over ssh provides a simple and quick way to expose local servers to the Intenet, the Python SDK provides a simpler way to use Pinggy tunneling in a Python application. It also uses a diffirent protocol than the SSH tunnel, which allows it to be more flexible yet powerful tunneling solution.

Python SDK is built on top of the [libpinggy](https://github.com/Pinggy-io/libpinggy) library, which is a C library that provides the core functionality of the Pinggy tunneling protocol. Both the [Python SDK](https://github.com/Pinggy-io/sdk-python) and the [libpinggy](https://github.com/Pinggy-io/libpinggy) library are open source and available on GitHub with an Apache 2.0 license.

## Installation
To install the Pinggy Python SDK, you can use pip:

```bash
pip install pinggy
```

Alternatively, you can clone the repository and install it manually:

```bash
git clone https://github.com/Pinggy-io/sdk-python.git
cd sdk-python
pip install -e .
```

## Quick Start
To get started with the Pinggy Python SDK, you can use the following code snippet to create a simple http tunnel that exposes a local server running on port 80 to the Internet:

```python
import pinggy

tunnel = pinggy.start_tunnel()
print(f"Tunnel started at {tunnel.url}")
```
