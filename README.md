# Static webpages for pinggy

This are static pages which are outside the scope of dashboard.pinggy.io

## Tasks

- [ ] Add a static site builder such as jekyll
  - [ ] Configure the static site builder to build the site into a path such as `_build`
  - [ ] Add a makefile to build the site. Also document the dependencies of the static site builder.
- [ ] Create a base layout that includes the head which captures the bootstrap themes and other js etc., the body will be extended.
- [ ] Make the homepage (index.html) use the layout.
- [ ] Build the following pages:
  - [ ] "Contact Us" page containing  Registered company address and domestic telephone number in India.
  - [ ] Terms of Service page mentioning cancellation and refund policies.
  - [ ] Privacy Policy page. It must describe the information collected, its purpose of use, to whom and how to disclose it and reasonable security practices followed to safeguard such information.
  - [ ] Cancellation & Refund Policy page. You can also submit Terms Of Service URL, if it has the Cancellation & Refund Policy mentioned abiding Indian laws.

  Tunnel shortcode example:
```

  {{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jupyter Notebook:" portstring="Jupyter Notebook Port" localport="1313" webdebugenabled=false keepalive=true webdebugport="8080" mode="tcp" headermodifications=`[{"mode":"u", "headername":"Host", "headerval": "localhost:3000"}, {"mode":"r", "headername":"Host2", "headerval": "localhost:3000"}]` >}}
{{< /pinggytunnel >}}
```

```
{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jupyter Notebook:" portstring="Jupyter Notebook Port" localport="1313" webdebugenabled=true keepalive=false webdebugport="8080" headermodifications=`[{"mode":"a", "headername":"Custom", "headerval": "abc"}]` >}}
{{< /pinggytunnel >}}
```