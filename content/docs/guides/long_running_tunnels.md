---
 title: "Long-running Persistent Tunnels" 
 date: 2023-04-29T14:15:25+05:30 
 draft: false 
---

# Long-running Persistent Tunnels

You can use Pinggy to host websites, apps, and files from localhost just like any server. You just need to ensure the following:

1. Get a persistent subdomain or a custom domain from the [dashboard](https://dashboard.pinggy.io).
2. To generate an SSH key, run the following command in your terminal and press Enter:

    ```bash
    ssh-keygen
    ```

    Press Enter to save the key in the default location, optionally add a passphrase by typing it and pressing Enter, and continue pressing Enter for any additional prompts until the command finishes.   
3. Use the token to start the tunnel as described next.



The following command ensures that your tunnels stay alive and restart on its own if something goes wrong:

{{< tabs >}}
{{% tab name="Linux" %}}

```bash
# pinggy.sh

while true;
    do ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8000 token@a.pinggy.io;
    sleep 2;
done
```

{{% /tab %}}
{{% tab name="macOS" %}}

```bash
# pinggy.sh

while true;
    do ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8000 token@a.pinggy.io;
    sleep 2;
done
```

{{% /tab %}}
{{% tab name="Windows" %}}

```bash
# pinggy.bat

FOR /L %N IN () DO ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8000 token@a.pinggy.io
```

{{% /tab %}}
{{< /tabs >}}

Replace `8000` with the port you want to share, and `token` with your tunnel token.
