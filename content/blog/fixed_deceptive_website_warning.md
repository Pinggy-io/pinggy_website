---
 title: "Updates to counter deceptive content distribution" 
 date: 2023-07-16T14:15:25+05:30 
 lastmod: 2023-07-26T14:15:25+05:30
 draft: false 
 og_image: "images/iot/head.webp"
 tags: ["update"]
 outputs:
  - HTML
  - AMP
---

On July 14, distribution of deceptive and social engineering content was detected through some Pinggy tunnels. Our logs show that it has been done using the free tier through random subdomains ending with `a.pinggy.io`.

As a result, while accessing your own tunnels you might have noticed a "Deceptive Website Warning". However, we assure you that if you were accessing your own tunnel / tunnel that you trust, then there was no possible threat. ( **Update:** As of 26 July 2023, no pinggy domain shows the warning any more. )

### Steps taken to combat deceptive content

We have taken some preventive actions to mitigate the problem. These are as follows:

- All free tunnels have the originating IP address in the URL. For example: `ranqga-10-10-2-17.free.pinggy.online`.
- Free HTTP tunnels have an initial caution page to indicate that the webpage has been hosted through Pinggy.
- Moving all tunnels to the domain `pinggy.online`
- Limiting the unregistered free tunnels to 60 minutes

{{< image "fix_deceptive_website_warning/alert.png" >}}

### What users need to do

- Free tier tunnels will get random subdomains on `free.pinggy.online` instead of `a.pinggy.io`
- Existing persistent subdomains will be moved to `pinggy.online`, effective immediately.

      Your existing URL ending with `pinggy.io` will be changed to `pinggy.online`.

  Example: `awesome.a.pinggy.io` -> `awesome.a.pinggy.online`

- Custom domains (e.g., `cooking.com`) will continue to work as usual, but you need to update your CNAME and reissue your certificate preferably within 7 days.

  Update your custom domain. Go to dashboard.pinggy.io and reconfigure your custom domain.
