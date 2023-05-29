---
 title: "Sharing Drupal from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/drupal.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Drupal from localhost with just a single command. **Replace the port 80 with the port where your Drupal Website is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.io`. Use this URL to access the Drupal Website.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Drupal:" portstring="Drupal Port" localport="80" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
