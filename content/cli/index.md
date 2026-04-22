---
 title: "Pinggy Command Line Tool"
 description: "Pinggy CLI Tool provides more stable tunnel with qicker reconnection. Use Pinggy secure tunnel for dev/test environments, to effortlessly test and preview applications and APIs."
 date: 2024-04-14T01:15:25+05:30
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
./pinggy -p 443 -R0:localhost:8080 -L4300:localhost:4300 TOKEN@a.pinggy.io</pre
          >
        </div>
        <h2 class="h3">Visit <a href="/docs/cli/">Pinggy CLI documentation</a> to learn more.</h2>
      </div>
    </div>
  </div>
</section>
