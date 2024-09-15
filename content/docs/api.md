---
 title: "Pinggy API" 
 description: "Programmatically access and manage your Pinggy tunnels."
 date: 2024-09-10T14:15:25+05:30 
 draft: false 
---

# Pinggy API

As of now, programmatic access to Pinggy tunnel information and management through APIs is only available for enterprise users. You can <a target="_blank" href="/#prices">compare our plans here</a>.

Pinggy provides an HTTP API, which is similar to REST APIs. In order to access the APIs you need to use a token called `API Key`.

Using this key, an API request is a simple HTTP request. You can access the APIs using CURL as follows:


```bash
curl --location 'https://dashboard.pinggy.io/backend/api/v1/session/active' \
--header 'Authorization: Bearer {API Key}'
```

Example response:

```json
[
    {
        "id": "9345b393-d916-4a2e-816a-3347468a03c0",
        "userId": 4490909,
        "tokenId": 392084,
        "token": null,
        "tokenName": null,
        "virtualToken": "sJsufpgMMl-10003",
        "virtualTokenName": null,
        "subdomain": "mytest.v.awesomeapp.a.pinggy.link",
        "customdomain": null,
        "mode": "tcp",
        "modeUdp": "",
        "port": 10003,
        "creationTimestamp": "2024-08-23T04:04:36.083+00:00",
        "lastUpdateTimestamp": "2024-08-23T04:04:37.780+00:00"
    }
]
```

## Create an API Key

You can manage your API keys from {{< link href="https://dashboard.pinggy.io/api-keys" >}}https://dashboard.pinggy.io/api-keys{{< /link >}}.


- Click on the "Create API key" button.
- Give your key a name, and click "Generate".

![create a new api key](/doc_img/apikey/api-key-1.png)

You can now find the newly generated key in the list of API keys.

![list of api keys](/doc_img/apikey/api-key-2.png)


## List active tunnels

List all active tunnels associated with your account.

**Request:**

```bash
curl --location 'https://dashboard.pinggy.io/backend/api/v1/session/active' \
--header 'Authorization: Bearer {API Key}'
```

**Example response:**

```json
[
    {
        "id": "9345b393-d916-4a2e-816a-3347468a03c0",
        "userId": 4490909,
        "tokenId": 392084,
        "token": null,
        "tokenName": null,
        "virtualToken": "sJsufpgMMl-10003",
        "virtualTokenName": null,
        "subdomain": "mytest.v.awesomeapp.a.pinggy.link",
        "customdomain": null,
        "mode": "tcp",
        "modeUdp": "",
        "port": 10003,
        "creationTimestamp": "2024-08-23T04:04:36.083+00:00",
        "lastUpdateTimestamp": "2024-08-23T04:04:37.780+00:00"
    }
]
```



