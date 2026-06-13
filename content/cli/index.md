---
 title: "Pinggy Command Line Tool"
 description: "Pinggy CLI Tool provides more stable tunnels with quicker reconnections. Use Pinggy secure tunnel for dev/test environments to effortlessly test and preview applications and APIs."
 date: 2024-04-14T01:15:25+05:30
 lastmod: 2026-06-08T01:15:25+05:30
 draft: false 
---

<div class="container">
  <div class="row justify-content-evenly">
    <div class="col-lg-5">
      <div class="text-left my-lg-5">
        <h1 class="display-5 fw-bolder d-inline">
          Pinggy Command Line Tool <span style="color: #7460ff">(Beta)</span>
        </h1>
        <span class="d-block" id="lead2">
          Pinggy Command Line Tool provides more robust tunnels with quicker
          reconnections. It supports HTTP(S), TCP, <b>UDP</b>, and TLS tunnels.
        </span>
      </div>
    </div>
    <div class="col-lg-5 mt-3">
      <img
        src="/assets/heroImage.webp"
        class="img-fluid"
        alt="Pinggy Dev/Test Environment Gateway"
      />
    </div>
  </div>
</div>

{{< cli-downloads >}}

<section class="py-5" id="features">
  <div class="container">
    <div class="my-3 row justify-content-center">
      <div class="col-lg-12">
        <h2 class="mb-4 text-center display-6 fw-bolder">Example Usage</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10 mb-10 mb-lg-0">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-window-stack"></i>
          </div>
          <h2 class="h3 fw-bolder">Use the same ssh command pattern!</h2>
          <b>Suppose we want to use CLI for the following SSH url:</b>
          <pre>ssh -p 443 -R0:localhost:8080 -L4300:localhost:4300 TOKEN@a.pinggy.io</pre>
          <b>Just replace <kbd>ssh</kbd> with the CLI binary:</b>
          <pre>
./pinggy -p 443 -R0:localhost:8080 -L4300:localhost:4300 TOKEN@a.pinggy.io</pre>
        </div>
        <div class="card featurecard p-4 mt-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-hdd-stack"></i>
          </div>
          <h2 class="h3 fw-bolder">Run tunnels in the background</h2>
          <b
            >Every tunnel runs in a background daemon, so you can detach and
            manage it later:</b
          >
          <pre>
# start a saved tunnel detached, then close the terminal
pinggy -l https://localhost:8000 --b


pinggy ps
pinggy stop my-tunnel
pinggy attach my-tunnel</pre>
          <b>Keep tunnels running across reboots with a system service:</b>
          <pre>pinggy daemon service-install</pre>
        </div>
        <div class="mt-5 d-flex flex-wrap align-items-center gap-3">
          <a
            href="/docs/cli/"
            class="d-inline-flex align-items-center gap-2"
            style="background-color: #3B6FE0; color: #fff; font-weight: 600; font-size: 16px; padding: 14px 24px; border-radius: 10px; text-decoration: none; transition: background-color 120ms cubic-bezier(0.4, 0, 0.2, 1);"
            onmouseover="this.style.backgroundColor='#2F58B8'"
            onmouseout="this.style.backgroundColor='#3B6FE0'"
          >
            Visit the Pinggy CLI documentation
            <i class="bi bi-arrow-right"></i>
          </a>
          <span style="color: #6B7280; font-size: 15px;">Commands, flags, and full reference</span>
        </div>
      </div>
    </div>
  </div>
</section>
