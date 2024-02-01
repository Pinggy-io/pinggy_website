---
 title: "Host Next.js on laptop" 
 description: "Host your Next.js app on your laptop with Pinggy. Easy setup, secure tunneling – no cloud hosting needed."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Host Next.js application on laptop using Pinggy

[Next.js](https://nextjs.org/) is a popular frontend framework based on React that helps developers build fast web applications. Usually you have to host such an application in the cloud in order to show it to your friends and collaborators. But Pinggy makes this process as simple as pasting one command in the terminal.

#### Step 1

Set up your Next.js app if you have not done it already by following the guide: [https://nextjs.org/learn/basics/create-nextjs-app/setup](https://nextjs.org/learn/basics/create-nextjs-app/setup).

#### Step 2

Start your Next.js project using `npx next start`.

The application will start at `http://localhost:3000` by default.

#### Step 3

Create a tunnel using the command:

```
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```
