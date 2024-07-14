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
          reconnections when your tunnels are interrupted.
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

<section class="" id="features">
  <div class="container">
    <div class="row justify-content-center align-items-center gap-2 my-3">
      <div class="col-lg-10">
        <div
          class="card p-lg-3"
          style="
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.3s ease;
            border-radius: 10px;
          "
        >
          <div class="card-body">
            <h2 class="fw-medium">Download</h2>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="windows-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#windows"
                  type="button"
                  role="tab"
                  aria-controls="windows"
                  aria-selected="true"
                >
                  <i class="bi bi-windows"></i> Windows
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="mac-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#mac"
                  type="button"
                  role="tab"
                  aria-controls="mac"
                  aria-selected="false"
                >
                  <i class="bi bi-ubuntu"></i> Mac OS
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="linux-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#linux"
                  type="button"
                  role="tab"
                  aria-controls="linux"
                  aria-selected="false"
                >
                  <i class="bi bi-ubuntu"></i> Linux
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="windows"
                role="tabpanel"
                aria-labelledby="windows-tab"
              >
                <ul class="list-group">
                  <li class="list-group-item">
                    <a
                      href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/v0.1.1/windows/amd64/pinggy.exe"
                      target="_blank"
                      class="btn btn-primary"
                      style="background-color: rgba(70, 117, 199, 1)"
                      >Download for Windows x86-64</a
                    >
                  </li>
                  <li class="list-group-item">
                    <a
                      href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/v0.1.1/windows/arm64/pinggy.exe"
                      target="_blank"
                      class="btn btn-primary"
                      style="background-color: rgba(70, 117, 199, 1)"
                      >Download for Windows ARM64</a
                    >
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="mac"
                role="tabpanel"
                aria-labelledby="mac-tab"
              >
                <ul class="list-group">
                  <li class="list-group-item">
                    <a
                      href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/v0.1.1/mac/univ/pinggy"
                      target="_blank"
                      class="btn btn-primary"
                      style="background-color: rgba(70, 117, 199, 1)"
                      >Download for Mac OS</a
                    >
                  </li>
                  </li>
                </ul>
                <div class="mt-2">After downloading the binary, use the command <kbd>chmod +x pinggy</kbd> to make the binary executable.<br>Use the command <kbd>./pinggy -h</kbd> to see the usage.</div>
              </div>
              <div
                class="tab-pane fade"
                id="linux"
                role="tabpanel"
                aria-labelledby="linux-tab"
              >
                <ul class="list-group">
                  <li class="list-group-item">
                    <a
                      href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/v0.1.1/linux/amd64/pinggy"
                      target="_blank"
                      class="btn btn-primary"
                      style="background-color: rgba(70, 117, 199, 1)"
                      >Download for Linux x86-64</a
                    >
                  </li>
                  <li class="list-group-item">
                    <a
                      href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/v0.1.1/linux/arm64/pinggy"
                      target="_blank"
                      class="btn btn-primary"
                      style="background-color: rgba(70, 117, 199, 1)"
                      >Download for Linux ARM64</a
                    >
                  </li>
                  <div class="mt-2">After downloading the binary, use the command <kbd>chmod +x pinggy</kbd> to make the binary executable.<br>Use the command <kbd>./pinggy -h</kbd> to see the usage.</div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
      </div>
    </div>
  </div>
</section>
