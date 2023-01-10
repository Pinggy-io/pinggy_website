# Create HTTP / HTTPS Tunnels with Pinggy

Pinggy allows you to create HTTP / HTTPS tunnels to your localhost using the following two methods:

## Using ssh command

First, run the service you want to share in localhost. You need to know the port where the service is running, for example `8000`. Check if the service is accessible from localhost through <a href="http://localhost:8080" target="_blank">http://localhost:8000</a>.

Command to start a tunnel to port `8000`:
<br>
```
ssh -p 7878 -R0:localhost:8000 b.pinggy.io
```

*Replace `8000` with the port where your service is running*.

## Using Pinggy client