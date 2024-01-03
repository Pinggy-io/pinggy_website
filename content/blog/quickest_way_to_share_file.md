---
 title: "Quickest way to share file" 
 date: 2023-06-13T01:15:25+05:30 
 draft: true 
 tags: ["guide", "file share", "web server", "pinggy"]
---

What is the quickest way to share file with others? Email, WhatsApp etc. While this solution is elegant, it is not really that quick.

If one need to share files and have python installed in there system, quickest way would be as follows:

```
pip install pinggy
python -m pinggy.serve
```

That is it. It will start a free HTTP tunnel with the pinggy server and print the urls.
On can share the urls to friend, and they would get to see the shared directory.

! Not a fan of python? Here goes your options

{{< tabs >}}
{{% tab name="webfs+bash" %}}

```
webfs -F -p8080 & ssh -p443 -R0:localhost:8080 a.pinggy.io
```

{{% /tab %}}
{{% tab name="python+bash" %}}

```
python -mhttp.server 8080 & ssh -p443 -R0:localhost:8080 a.pinggy.io
```

{{% /tab %}}
{{% tab name="GO" %}}

1. Prepare the files

```
mkdir shareFile
cd shareFile
go mod init shareFile
go get github.com/abhimp/pinggy
touch main.go
```

2. Edit the main file to following

```golang
package main

import (
	"github.com/abhimp/pinggy"
)

func main() {
	pinggy.ServeFile("/path/to/your/folder")
}
```

3. Save and close the file
4. Lauch

```
go run main.go
```

{{% /tab %}}
{{< /tabs >}}
