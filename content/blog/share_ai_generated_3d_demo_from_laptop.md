---
title: "How to Share an AI-Generated 3D Demo from Your Laptop"
description: "Turn a Tripo-generated GLB into a one-page model-viewer demo, serve it locally with Python, and share it over a temporary HTTPS link with Pinggy. Covers prompts, multiview input, polycount, mobile testing and access control."
date: 2026-11-22T11:40:00+05:30
lastmod: 2026-11-22T11:40:00+05:30
tags: ["AI 3D generation", "generative AI", "web development", "localhost"]
og_image: "images/share_ai_generated_3d_demo_from_laptop/share_ai_generated_3d_demo_from_laptop_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyB0byBTaGFyZSBhbiBBSS1HZW5lcmF0ZWQgM0QgRGVtbyBmcm9tIFlvdXIgTGFwdG9wIiwKICAiZGVzY3JpcHRpb24iOiAiVHVybiBhIFRyaXBvLWdlbmVyYXRlZCBHTEIgaW50byBhIG9uZS1wYWdlIG1vZGVsLXZpZXdlciBkZW1vLCBzZXJ2ZSBpdCBsb2NhbGx5IHdpdGggUHl0aG9uLCBhbmQgc2hhcmUgaXQgb3ZlciBhIHRlbXBvcmFyeSBIVFRQUyBsaW5rIHdpdGggUGluZ2d5LiBDb3ZlcnMgcHJvbXB0cywgbXVsdGl2aWV3IGlucHV0LCBwb2x5Y291bnQsIG1vYmlsZSB0ZXN0aW5nIGFuZCBhY2Nlc3MgY29udHJvbC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2hhcmVfYWlfZ2VuZXJhdGVkXzNkX2RlbW9fZnJvbV9sYXB0b3Avc2hhcmVfYWlfZ2VuZXJhdGVkXzNkX2RlbW9fZnJvbV9sYXB0b3BfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiAgICB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMS0yMlQxMTo0MDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTIyVDExOjQwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvc2hhcmVfYWlfZ2VuZXJhdGVkXzNkX2RlbW9fZnJvbV9sYXB0b3AvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJXZWIgRGV2ZWxvcG1lbnQiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkJlZ2lubmVyIiwKICAia2V5d29yZHMiOiAic2hhcmUgM0QgbW9kZWwgb25saW5lLCBBSSBnZW5lcmF0ZWQgM0QgbW9kZWwsIFRyaXBvIHRleHQgdG8gM0QsIFRyaXBvIGltYWdlIHRvIDNELCBtdWx0aXZpZXcgdG8gM0QsIEdMQiB3ZWIgdmlld2VyLCBtb2RlbC12aWV3ZXIsIGdsVEYgVHJhbnNmb3JtIG9wdGltaXplLCBweXRob24gaHR0cC5zZXJ2ZXIsIHNoYXJlIGxvY2FsaG9zdCwgUGluZ2d5IEhUVFAgdHVubmVsLCBiYXNpYyBhdXRoIHR1bm5lbCwgV2ViWFIgSFRUUFMiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlNvZnR3YXJlQXBwbGljYXRpb24iLCAibmFtZSI6ICJUcmlwbyIsICJkZXNjcmlwdGlvbiI6ICJBSSAzRCBtb2RlbCBnZW5lcmF0b3Igd2l0aCBUZXh0IHRvIDNELCBJbWFnZSB0byAzRCBhbmQgbXVsdGl2aWV3IG1vZGVzIGFuZCBHTEIgZXhwb3J0IiB9LAogICAgeyAiQHR5cGUiOiAiU29mdHdhcmVBcHBsaWNhdGlvbiIsICJuYW1lIjogIm1vZGVsLXZpZXdlciIsICJkZXNjcmlwdGlvbiI6ICJHb29nbGUncyB3ZWIgY29tcG9uZW50IGZvciBkaXNwbGF5aW5nIGdsVEYgYW5kIEdMQiBtb2RlbHMgaW4gdGhlIGJyb3dzZXIgd2l0aCBjYW1lcmEgY29udHJvbHMgYW5kIEFSIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJHTEIiLCAiZGVzY3JpcHRpb24iOiAiQmluYXJ5IGdsVEYgZmlsZSB0aGF0IHBhY2tzIGEgM0QgbW9kZWwncyBnZW9tZXRyeSwgbWF0ZXJpYWxzIGFuZCB0ZXh0dXJlcyBpbnRvIG9uZSBmaWxlIiB9LAogICAgeyAiQHR5cGUiOiAiU29mdHdhcmVBcHBsaWNhdGlvbiIsICJuYW1lIjogImdsVEYgVHJhbnNmb3JtIiwgImRlc2NyaXB0aW9uIjogIkNvbW1hbmQtbGluZSB0b29sIGZvciBpbnNwZWN0aW5nIGFuZCBvcHRpbWl6aW5nIGdsVEYgYW5kIEdMQiBmaWxlcyIgfSwKICAgIHsgIkB0eXBlIjogIlNvZnR3YXJlQXBwbGljYXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAiZGVzY3JpcHRpb24iOiAiU1NILWJhc2VkIHR1bm5lbGluZyBzZXJ2aWNlIHRoYXQgZ2l2ZXMgYSBsb2NhbCB3ZWIgc2VydmVyIGEgcHVibGljIEhUVFBTIFVSTCIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiV2ViWFIiLCAiZGVzY3JpcHRpb24iOiAiQnJvd3NlciBBUEkgZm9yIEFSIGFuZCBWUiB0aGF0IGlzIG9ubHkgYXZhaWxhYmxlIGluIHNlY3VyZSBIVFRQUyBjb250ZXh0cyIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "share_ai_generated_3d_demo_from_laptop/share_ai_generated_3d_demo_from_laptop_banner.webp" "Tripo Image to 3D flow turning a photo of a vintage microscope into a 3D model, shown on a laptop screen" >}}

Opening a 3D model on your own computer is easy. Showing it to someone else is where it gets awkward. Send them the model file and they may need to install software they've never used, and a school Chromebook or a client's locked-down work laptop might not let them. Publishing a complete website is more work than a quick conversation deserves.

There's a lighter path with three pieces. Tripo creates the draft model, a single web page displays it, and Pinggy gives that page a temporary public URL. The example all the way through is a vintage-style microscope, the kind of object a teacher might want students to rotate and inspect.

{{% tldr %}}
Generate the model in Tripo (Text to 3D if you only have an idea, Image to 3D or multiview if you have photos), keep the polycount sensible for phones, and export a GLB. Put it next to a one-file `index.html` that loads `<model-viewer>`, serve the folder with `python3 -m http.server 8000 --bind 127.0.0.1`, and check it at `http://localhost:8000`. Then run `ssh -p 443 -R0:localhost:8000 free.pinggy.io` in a second terminal to get an HTTPS link. A free tunnel lasts 60 minutes and gets a new URL each time, which suits a review call and nothing more permanent.
{{% /tldr %}}

## A browser demo is easier to share than a model file

A browser viewer lets the other person rotate the model without installing a 3D editor. `<model-viewer>` supports the last two major versions of every evergreen desktop and mobile browser, plus the last two versions of Safari on macOS and iOS, so the same link works on a teacher's laptop and a student's phone.

In the viewer, students can turn the microscope to inspect the focusing knobs and see where a slide would rest on the stage. A single screenshot can't show that, and screen-sharing your 3D editor leaves the camera with the person who made the model instead of the person who's supposed to be looking at it.

{{< image "share_ai_generated_3d_demo_from_laptop/tripo_studio_image_to_3d_microscope.webp" "Tripo Studio Image to 3D panel with a microscope photo as input, HD Model, 4K texture, Remove Lighting and PBR enabled, and the generated microscope in the viewport" >}}

*Tripo Studio generating the microscope from one photo with the H3.1 model, 4K PBR textures and the polycount slider at 2,000,000.*

The link is a temporary viewing route, not a finished launch. That keeps the setup small, with no build step and no hosting account. If the model turns out to be worth keeping, the same folder can move to real hosting later.

## Pick Text to 3D or Image to 3D based on what you already have

Use Text to 3D when you have an idea and no picture. Describe the parts that make the object recognizable. For the microscope, that means the brass-colored tube, the black curved arm that supports it, the nosepiece with its short objectives, and the flat stage underneath. A detailed prompt gives Tripo clearer guidance than a short one such as "vintage microscope". Something like this works better:

> Vintage brass laboratory microscope, cylindrical brass body tube with a black eyepiece, black curved cast-iron arm, rotating nosepiece with three short objectives, square black stage with two slide clips, round mirror below the stage, horseshoe-shaped base, worn paint on the edges

If you have a picture of the microscope, start with Image to 3D. Choose one where the full outline is visible, without books or other objects covering it. From a single image, Tripo has to guess what's behind the frame, so the far side of the model is invented. If the far-side controls matter to the demo, use Multiview to 3D with matching front, left, back and right reference images of the same microscope. Tripo's docs require the front view, accept two or more of the four, and ask for the same object under consistent lighting in every shot.

The input photo in the screenshot above was taken next to a window, which is the case the Remove Lighting toggle is for. It strips baked-in lighting from the reference before texturing, so the brass doesn't end up with a permanent highlight painted on one side.

{{< image "share_ai_generated_3d_demo_from_laptop/tripo_microscope_model_three_views.webp" "Tripo-generated vintage microscope model shown from the front three-quarter, side and rear three-quarter angles" >}}

Look at the face count before you export. The run in the screenshot produced 1,917,884 faces and 990,986 vertices, with the polycount slider at its maximum. That's fine on a desktop GPU and heavy for a mid-range phone on mobile data. Uncompressed, it's about 32 MB of vertex data (position, normal and UV at 32 bytes per vertex) plus about 23 MB of triangle indices, before a single texture loads. For a review link, drag the polycount slider down before generating, or run the result through Tripo's Retopo tool. A model that only needs to read as "vintage microscope" on a phone screen doesn't need two million triangles.

Tripo can help you create a first version to show a teammate. The microscope pictured here is a visual concept, so use the views to discuss its shape and style.

For a science lesson, check the names and positions of any parts you plan to label against a reliable reference. Details in a generated model can differ from those of a real instrument, such as an extra knob or a stage clip in the wrong place.

## Build a local web viewer for the model

One HTML page is enough for a basic demo. A browser component such as `model-viewer` can display the microscope and let visitors drag to turn it. Load the viewer script and point `src` to the exported GLB. The {{< link href="https://modelviewer.dev/" >}}official quick start{{< /link >}} shows the script and page markup. Add `camera-controls` for rotation and `alt` to describe the microscope.

Here's the whole page for the microscope, saved as `index.html` in a folder of its own:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vintage microscope - draft model</title>
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
  <style>
    body { margin: 0; }
    model-viewer { width: 100vw; height: 100vh; background: #2b2f36; }
  </style>
</head>
<body>
  <model-viewer
    src="microscope.glb"
    alt="Vintage microscope with a brass tube, black curved arm and square stage"
    camera-controls
    auto-rotate
    ar>
  </model-viewer>
</body>
</html>
```

`camera-controls` turns on mouse and touch rotation, and model-viewer's docs say it should nearly always be there. `auto-rotate` turns the model slowly until someone grabs it, which tells a first-time visitor it's 3D and not a picture. `ar` adds an AR button on phones that support it. You don't need to set `touch-action`: it defaults to `pan-y`, so a vertical swipe on a phone still scrolls the page and a horizontal one rotates the model.

Tripo documents GLB as an export option for the web. A GLB can bundle geometry and supported materials or textures in one binary file, depending on the export settings. If you want to try the page before exporting your own model, pick a compatible sample from the gallery of {{< link href="https://studio.tripo3d.ai/3d-model-gallery/?utm_source=backlink&utm_medium=paid_link&utm_term=pinggy" >}}free 3D models{{< /link >}}. Check the model's usage terms before you make it public.

Save the file in the folder served by your page and point the viewer to it. Python's built-in server is enough to serve it:

```bash
cd microscope-demo
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000` and drag the model around. The `--bind 127.0.0.1` part is easy to skip and worth keeping. By default `http.server` listens on all interfaces, which also puts the folder on your Wi-Fi network. The tunnel reaches the server through localhost, so it doesn't need the wider binding.

Don't skip the server and double-click `index.html` instead. Chrome and Firefox treat a page opened from a `file:///` path as an opaque origin and block it from fetching the GLB, so you get an empty box and a CORS error in the console. If the viewer is blank even at `http://localhost:8000`, open DevTools, switch to the Network tab and reload. A 404 on the `.glb` means the file name or path in `src` is wrong. Fix that before opening a tunnel, because a broken page is just as broken on a public URL.

The Network tab also shows how big the `.glb` is. If it runs to tens of megabytes, a phone on mobile data will sit on an empty box for a while. glTF Transform can shrink the file without another trip through Tripo:

```bash
npm install --global @gltf-transform/cli
gltf-transform inspect microscope.glb
gltf-transform optimize microscope.glb microscope-web.glb --compress draco --texture-compress webp
```

`inspect` prints a table of the meshes, materials and textures with their sizes, so you can tell whether geometry or textures are the heavy part. `optimize` simplifies the mesh, compresses it, and re-encodes textures, capping them at 2048 px by default (`--texture-size` changes that). Pass `--compress draco` instead of relying on the default, which is Meshopt. model-viewer loads its Draco decoder from Google's CDN out of the box, but its Meshopt decoder is off unless you configure it, so a Meshopt-compressed file would need extra setup on the page.

## Give the local page a temporary public link

Once the page opens locally, keep the web server running and open another terminal. The tunnel exposes the selected web service to the public internet. Serve only the demo folder, keep sensitive files out, and enable authentication for restricted reviews. Use the current SSH command from [Pinggy's HTTP tunnel guide](https://pinggy.io/docs/http_tunnels/) for your local port. The command below illustrates a port 8000 mapping.

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Use the port your web server actually listens on. If SSH asks for a password, press Enter. Pinggy prints an HTTP and an HTTPS URL, and the HTTPS one is what you send. On the free plan, the URL changes every time you start a new tunnel and the tunnel times out after 60 minutes. A Pro account gets you a persistent subdomain if the review runs over several days.

For a review that shouldn't be open to anyone with the link, add basic auth to the same command. Visitors get a username and password prompt from their browser before the page loads:

```bash
ssh -p 443 -R0:localhost:8000 -t free.pinggy.io b:username:password
```

Neither the username nor the password can contain a colon. To open the link on your own phone, press `u` in the tunnel's terminal and Pinggy draws a QR code for the URL.

The HTTPS URL also matters for the `ar` attribute. model-viewer's docs say its WebXR mode requires the page to be served on HTTPS, so a phone pointed at your laptop's LAN address over plain HTTP can't use it. The tunnel URL is HTTPS, so it can. On an iPhone, model-viewer generates a USDZ on the fly for Quick Look when `ios-src` isn't set, so you don't need a second export for Apple devices.

Before sending the HTTPS link, try it in a private browser window. A private window has nothing cached, so you see the real first load, including how long the GLB takes to arrive. Test it on a phone over mobile data too, with Wi-Fi off. Check that the GLB loads, touch rotation works, and the page feels usable on the recipient's likely connection. If someone reports a blank page, Pinggy's web debugger shows every request and response: add `-L4300:localhost:4300` to the SSH command and open `http://localhost:4300`.

{{< image "share_ai_generated_3d_demo_from_laptop/microscope_demo_laptop_phone_concept.webp" "Illustration of the microscope model displayed in a browser on a laptop and on a phone, on a wooden desk in front of a bookshelf" >}}

*Concept illustration of the microscope demo on a laptop and phone. It depicts a proposed viewing experience.*

## Use the link for a focused conversation

Give the recipient one thing to look at. A teacher might ask whether students can see where the slide sits. A game artist might want to know whether the same silhouette reads as a vintage prop. If the question is about one part, open the viewer on it: `camera-orbit` sets the starting position as an around angle, an up-down angle and a distance, and `camera-orbit="30deg 60deg 105%"` starts the camera 30 degrees around to the side and a little higher than the default, looking down toward the stage.

The demo goes offline when the tunnel closes, the server stops, or the laptop sleeps. On a Mac, `caffeinate -i` in a spare terminal stops idle sleep for as long as it runs. Keep the laptop plugged in and the lid open for the length of the call, and tell the people who'll recieve the link roughly when it stops working.

## Keep temporary sharing tidy

Serve only the folder needed for the demo. Don't put private notes, passwords, client documents, or unrelated project files inside it. Python's docs warn that `http.server` follows symbolic links, so a symlink in the folder can expose files outside it; copy files in rather than linking them.

Anything in the folder can be downloaded by anyone with the link, and that includes the GLB itself. The viewer has to download the model to show it, so if a client's model shouldn't leave your hands, a viewer link is the wrong tool. Basic auth keeps strangers out, not the people you invite. Check Pinggy's current plan and documentation for free tunnel duration, URL behavior, and access limits before relying on the link.

Close the tunnel when the conversation is over (`Ctrl+C` in its terminal), then stop the Python server the same way. Use this setup for temporary demos and reviews. Python's own docs say `http.server` isn't recommended for production. For a real launch, use dedicated hosting and check performance, accessibility, security, and mobile behavior.

A browser link is useful when the next decision is simple, such as choosing an angle for a lesson or settling on a prop's style. Share the page alongside the question you want answered.

## Frequently asked questions

### Does Pinggy create or host the 3D model?

No. The model comes from Tripo or another source, and your local browser page displays it. The files stay on your laptop, and Pinggy temporarily forwards visitors to that page while the tunnel is open.

### Do I need to know Three.js?

No. A simple `model-viewer` page may be enough for a beginner, and model-viewer runs on three.js under the hood anyway. Three.js becomes useful when you want more control over the scene, such as custom lighting or click handlers on individual parts.

### Can I share characters, products, and game objects the same way?

Often, yes, if the browser viewer supports the exported file and the page stays light enough for the recipient's device and connection. model-viewer only accepts glTF and GLB, so export GLB from Tripo rather than FBX or OBJ. Test animated models seperately for playback and performance; model-viewer plays a model's built-in animation when you add the `autoplay` attribute.

### Is a Pinggy link a replacement for normal hosting?

No. It's useful for short demos and conversations. A lasting public page should use suitable hosting and normal production safeguards.
