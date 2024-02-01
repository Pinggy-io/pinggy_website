---
 title: "Test Twilio webhooks locally" 
 description: "Cloud platform enabling developers to integrate messaging, voice, and video capabilities into applications using APIs."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide", "webhook"]
 og_image: "/quickstart/images/twilio.svg"
---

This guide covers how to use [pinggy.io](https://pinggy.io) to integrate your localhost app
with Twilio by using webhooks. Twilio webhooks can be used to notify an external application
whenever specific events occur in your Twilio account.

## Step 1: Start Your App

Before we dive into the integration with Pinggy, make sure your local application is up and running.

## Step 2: Launch Pinggy

Pinggy simplifies the process of creating a secure tunnel. Use the following command to set up a tunnel to your local development server:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Twilio Webhook:" portstring="Twilio Port" localport="3000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

**Note:** Replace the port 3000 in the command with the port where your local development server is running.

If you run the command with your specified port where your service is running, you will get an output similar to the following:

{{< figure src="/quickstart_img/twilio/pinggy_tunnel.webp" alt="Pinggy Tunnel" >}}

## Step 3: Integrate Twilio

Now that you have your local environment on the internet, let's configure Twilio to call your code.

1. Sign in to your Twilio account.

2. From the Twilio Console, go to **Develop > # Phone Numbers > Manage > Active Numbers** and select a number to add a webhook to.

3. At the bottom of the page, under Messaging, (1) add your pinggy url (don't forget to append /sms) under Webhook and (2) change the type to HTTP Post.

{{< figure src="/quickstart_img/twilio/add_twilio_webhook.webp" alt="Add Twilio Webhook" >}}

4. Save the phone number configuration.

Congratulations! You have successfully integrated Twilio with your local development environment.

## Step 4: Test Your Integration

1. Send an SMS message to your Twilio Phone number that was configured in the steps above.

2. Check your local development environment to see if the message was received.

Congratulations! You got an end-to-end example working but there's even more you can do with pinggy that will make development even easier.

To debug and inspect the requests made to your localhost app, you can leverage **Pinggy's Web Debugger**. Keep the Web Debugger open, and when you receive the URL after starting the tunnel, visit the selected web debugger port on your local machine. This allows you to monitor and troubleshoot incoming requests, ensuring a smooth integration with Twilio.

{{< figure src="/quickstart_img/twilio/pinggy_web_debugger_with_twilio.webp" alt="Pinggy Web Debugger with Twilio" >}}
