---
 title: "Using IoT Devices from Anywhere" 
 date: 2023-06-09T14:15:25+05:30 
 draft: false 
 og_image: "/blog/images/iot/1.png"
---



IoT devices are gaining immense popularity in both homes and businesses. They offer convenient control and monitoring capabilities from anywhere for various aspects like lights, security systems, and more. These devices greatly enhance our lives by providing efficiency and ease. In the era of the Internet of Things (IoT), the ability to remotely access and manage our devices from anywhere has become increasingly vital. Enter Pinggy.io, an incredibly powerful tool that provides a TCP tunnel for SSH access, enabling us to connect to our IoT devices from anywhere in the world. This remarkable service ensures seamless remote access, simplifying the management of web portals, camera access, and other functionalities, all from virtually anywhere.

{{< figure src="../images/iot/1.png" alt="Using IoT Devices from Anywhere" >}}

To remotely access your IoT devices, there are several other methods you can utilize. These options vary depending on the device and the manufacturer's implementation. Here are some popular ways to access IoT devices remotely:

- Remote access through SSH: Remote access to devices via SSH (Secure Shell) has become an essential requirement for efficient device management. Whether you need to control IoT devices, manage servers, or troubleshoot network equipment, SSH provides a secure and reliable method for remote administration.
- Remote desktop through RDP: Remote Desktop Protocol (RDP) is a protocol developed by Microsoft that allows users to remotely connect to and control a computer over a network. It enables you to access a remote computer's desktop, applications, and files as if you were sitting in front of it.
- Web Portals: Some manufacturers provide web portals that allow users to access and manage their IoT devices through a web browser. These portals can be accessed from any internet-connected device such as desktop computers, laptops, and tablets, making it easy to control your devices remotely.
- Mobile Apps: Many IoT devices come with dedicated mobile apps that enable users to control and monitor their devices using their smartphones or tablets. These apps are typically available for both iOS and Android platforms, providing convenient remote access.
- Smart Assistants: Certain IoT devices can be controlled and monitored using voice commands through popular smart assistants like Amazon's Alexa or Google Assistant. These smart assistants can be accessed through devices such as Amazon Echo or Google Home, as well as smartphones and tablets, providing a hands-free remote control experience.
- Virtual Private Network (VPN): A VPN allows you to securely connect to your home network from a remote location. By setting up a VPN, you can access your IoT devices as if you were connected to your home Wi-Fi network, even when you're away. This method adds an extra layer of security by encrypting your connection.

{{% tldr %}}

1. Pinggy.io allows you to remotely access IoT devices without public IP addresses.
2. Create a tunnel to your IoT device's SSH port using the access token.
3. The tunnel command looks like:
    ```
    ssh -p 443 -R0:localhost:22 <access_token>+tcp@a.pinggy.io
    ```
4. Get a public URL and port number from Pinggy.io for SSH access.
5. Use the SSH command with the URL and port to connect to your IoT device:
    ```
    ssh -p <port_number> <username>@<random_string>.a.pinggy.io
    ```
6. Now, you can securely SSH into your IoT device from anywhere in the world. Pinggy.io simplifies remote access and management of IoT devices with its TCP tunneling capabilities.

{{% /tldr %}} 

## Using Pinggy.io for SSH from anywhere

Do you have an IoT device like a Raspberry Pi that doesn't have a public IP address? No worries! With Pinggy.io you can access IoT devices, including Raspberry Pi, Banana Pi, Orange Pi, NanoPi NEO, Odroid, Rock Pi, NVIDIA Jetson Nano, and others, even if they don't have a public IP address. It enables you to establish an SSH connection to your devices from anywhere in the world. Let's explore the steps: 

{{< figure src="../images/iot/2.png" alt="Access Token" >}}


**Step 1: Create a Tunnel to Your IoT Device**

On your IoT device, open a terminal or SSH client and run the following command to create a tunnel to port 22 (SSH):
```
ssh -p 443 -R0:localhost:22 <access_token>+tcp@a.pinggy.io
```

This command establishes a secure connection to the Pinggy.io server, creating a tunnel that forwards traffic from the server's port 22 to your IoT device's port 22.

**Step 2: Obtain the Public URL**

After running the tunneling command, you will receive a public URL in the following format:
```
tcp://tljocjkijs.a.pinggy.io:40527
```

Make note of this URL and port number as they will be used to establish an SSH connection to your IoT device.

**Step 3: SSH into Your IoT Device**

To SSH into your IoT device, use the SSH command along with the public URL and port number obtained in the previous step. Replace 'username' with the username of your IoT device:
```
ssh -p 40527 'username'@tljocjkijs.a.pinggy.io
```

By executing this command, you establish an SSH connection to the Pinggy.io server, which redirects the traffic to your IoT device through the previously created tunnel. You can now access and control your IoT device as if it were directly connected to your local network.

*TIP: the username for Raspberry Pi is usually “pi”.*

## Find public urls to your device using pinggy.io dashboard

**Step 1: Sign in to Pinggy.io**

Start by signing in to Pinggy.io using your credentials. If you don't have an account, you can create one for free.

**Step 2: Obtain your Access Token**

Once you're logged in, you'll be taken to the Pinggy.io dashboard. Here, you'll find your access token, which is a unique identifier associated with your account and devices. Make a note of this token as you'll need it later.

**Step 3: Use the access token to create the Pinggy tunnel**

On your IoT device, open a terminal or SSH client and run the following command to create a tunnel to port 22 (SSH) using your access token:
```
ssh -p 443 -R0:localhost:22 'access token'+tcp@a.pinggy.io
```

Replace 'access token' with your own access token obtained from pinggy dashboard.

## Conclusion

By leveraging Pinggy.io's TCP tunneling capabilities, you can securely connect to your IoT devices from anywhere. Here's how you can benefit from using Pinggy.io for remote SSH access:
- Easy Setup and User-Friendly Interface: Pinggy.io offers a user-friendly dashboard, making the setup process straightforward for both technical and non-technical users.
- Secure and Encrypted Communication: All data transmitted through Pinggy.io is encrypted, ensuring the security of your IoT device management activities.
- Versatility for Various IoT Devices: Pinggy.io supports a wide range of IoT devices, including Raspberry Pi, enabling you to remotely access and manage them effortlessly.



