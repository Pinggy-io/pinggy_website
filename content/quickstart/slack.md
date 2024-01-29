---
 title: "Test Slack webhooks locally" 
 description: "Integrate your localhost app with Slack using Pinggy for seamless webhook testing and real-time notifications."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide", "webhook"]
 og_image: "/quickstart/images/slack.svg"
---

Slack webhooks can be a powerful way to integrate your localhost app with Slack, allowing you to receive notifications when specific events occur in your Slack account. To achieve this, your application needs to be accessible through an HTTPS endpoint. This guide will walk you through using [pinggy.io](https://pinggy.io) to achieve seamless integration with Slack.

## Step 1: Start Your App

Before we dive into the integration with Pinggy, make sure your local application is up and running.

Here's a simple express app to get you started:

```javascript
var express = require('express');
var app = express();
app.use(express.json());
const port = 3000;

app.all('/*', function (req, res) {
   console.log("Headers:"+ JSON.stringify(req.headers, null, 3));
   console.log("Body:"+ JSON.stringify(req.body, null, 3));

   if(req.body.challenge!=null){
      //When you enable Event Subscriptions in Slack, 
      //Slack makes a one-time post call to the app
      //sending a challenge field value and 
      //expects the app to respond with this value.
      res.type('txt');
      res.send(req.body.challenge);
   }else{
      //For all the rest of the requests 
      //the app responds the same message.
      res.json({ message: "Thank you for the message" });
   }
})

app.listen(port, function () {
   console.log(`Example Slack app listening at ${port}`)
})
```

Save the above code in a file named `app.js` and run the following command to start the application:

```bash
node app.js
```

## Step 2: Launch Pinggy

Pinggy simplifies the process of creating a secure tunnel. Use the following command to set up a tunnel to your local development server:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Slack Webhook:" portstring="Slack Port" localport="3000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

**Note:** Replace the port 3000 in the command with the port where your local development server is running.

If you run the command with your specified port where your service is running, you will get an output similar to the following:

{{< figure src="/quickstart_img/slack/pinggy_tunnel.png" alt="Key Authentication With HTTP Tunnel">}}

## Step 3: Integrate Slack

To register a webhook with your Slack account, follow the instructions below:

1. Access the [Slack Web App](https://app.slack.com) and sign in using your Slack account.Continue with the **use Slack in your browser** option.

2. In the same browser tab, access the [Slack API portal](https://api.slack.com/apps) and then click **Create New App**. If you already have some apps created, click \*\*\*\*.

3. In the **Create an app** window, click **From scratch**, provide the **App Name**, select a workspace under **Pick a workspace to develop your app in**, and then click **Create App**.

{{< figure src="/quickstart_img/slack/slack_create_app.png" alt="">}}

4. In the **Basic Information** page, expand **Add features and functionality** and then click **Event Subscriptions**.

5. In the **Event Subscriptions** page, click the **Enable Events** slider to turn it on. In the **Request URL** field, enter the URL provided by the Pinggy tunnel to expose your application to the internet.

{{< figure src="/quickstart_img/slack/slack_enable_events.png" alt="">}}

6. On the same page, expand **Subscribe to events on behalf of users**, click **Add Workspace Event**, select `message.im`, and then click **Save Changes**. More about Slack event types [here](https://api.slack.com/events).

7. In the left menu, click **Install App**, click **Install to Workspace**, and then click **Allow** to allow your application to access your workspace.

</br>

#### Test your Slack app with Pinggy

Because you've subscribed to the `message.im` event and installed your app to your slack workspace, you now can direct message any person in the workspace to make Slack call your localhost application:

1. Access the [Slack Web App](https://app.slack.com) or open the slack app on your desktop, and verify that your application appears under Apps in the left menu.

2. Select one person in your workspace and send the person a message. Alternatively, you can select the **Slackbot**, write `Hello Slack bot!` in the message field, and then send it.

Confirm your localhost app receives notifications about the message.

{{< figure src="/quickstart_img/slack/request.png" alt="">}}

To debug and inspect the requests made to your localhost app, you can leverage **Pinggy's Web Debugger**. Keep the Web Debugger open, and when you receive the URL after starting the tunnel, visit the selected web debugger port on your local machine. This allows you to monitor and troubleshoot incoming requests, ensuring a smooth integration with Slack.

{{< figure src="/quickstart_img/slack/web_debugger_with_slack.png" alt="">}}