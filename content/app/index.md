---
title: "Pinggy App"
---

<div class="container">
  <div class="row justify-content-evenly">
    <div class="col-lg-5">
      <div class="text-left mb-5 mt-2">
        <h1 class="display-5 fw-bolder biggestheader d-inline">
          Pinggy App <span style="color: #4589df">(Beta)</span>
        </h1>
        <span class="mb-2 mt-4 fs-3 d-block"
          >Easiest way to deploy your websites and apps from localhost!</span
        >
        <div class="mt-4" id="lead2">
          Create HTTP, TCP, UDP, or TLS tunnels to your Mac/PC.<br />Even if it
          is sitting behind firewalls and NATs.
        </div>
      </div>
      <div class="download border rounded">
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="mac-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab-mac"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Mac
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="windows-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab-windows"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Windows
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="linux-tab"
              data-bs-toggle="tab"
              data-bs-target="#tab-linux"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Linux
            </button>
          </li>
        </ul>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade" id="tab-mac" role="tabpanel" aria-labelledby="tab-mac-tab">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                  <span>Intel 64 bit</span>
                  <a href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/app/v1.0.9/mac/amd64/Pinggy-1.0.9-x64.dmg" target="_blank" class="btn btn-primary btn-pinggy-blue">Download</a>
                </div>
              </li>
              <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                  <span>Apple Silicon</span>
                  <a href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/app/v1.0.9/mac/arm64/Pinggy-1.0.9-arm64.dmg" target="_blank" class="btn btn-primary btn-pinggy-blue">Download</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" id="tab-windows" role="tabpanel" aria-labelledby="tab-windows-tab">
          <ul class="list-group">
              <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                  <span>x86 64 bit</span>
                  <a href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/app/v1.0.9/windows/x64/Pinggy-1.0.9 Setup.exe" target="_blank" class="btn btn-primary btn-pinggy-blue">Download</a>
                </div>
              </li>
              <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                  <span>Arm 64 bit</span>
                  <a href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/app/v1.0.9/windows/arm64/Pinggy-1.0.9 Setup.exe" target="_blank" class="btn btn-primary btn-pinggy-blue">Download</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" id="tab-linux" role="tabpanel" aria-labelledby="tab-linux-tab">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <span>Ubuntu (deb) x86 64 bit</span>
                <a href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/app/v1.0.9/linux/x64/pinggyapp_1.0.9_amd64.deb" target="_blank" class="btn btn-primary btn-pinggy-blue">Download</a>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <span>Ubuntu (deb) arm 64 bit</span>
                <a href="https://s3.ap-south-1.amazonaws.com/public.pinggy.binaries/app/v1.0.9/linux/arm64/pinggyapp_1.0.9_arm64.deb" target="_blank" class="btn btn-primary btn-pinggy-blue">Download</a>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mt-3">
      <img
        src="/assets/app6.png"
        class="img-fluid featureimage"
        alt="Pinggy GUI App"
      />
    </div>
  </div>
</div>

<section class="pt-5 mt-5" id="features">
  <div class="container my-5">
    <div class="row justify-content-evenly">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img
          src="/assets/app4.webp"
          class="img-fluid"
          alt="Pinggy web debugger screenshot"
        />
      </div>
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div
          class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
        >
          <i class="bi bi-collection"></i>
        </div>
        <h2 class="h3 fw-bolder">Share your websites and apps in seconds!</h2>
        <ul class="list-unstyled text-muted">
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i>Pre-configured tunnels for
            popular apps such as Next.js, Express.js, Apache, Minecraft, etc.
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Save tunnel configurations
            for future.
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Customize the presets
            according to your needs.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="pt-5 mt-5" id="features">
  <div class="container my-5">
    <div class="row justify-content-evenly">
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div
          class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
        >
          <i class="bi bi-terminal"></i>
        </div>
        <h2 class="h3 fw-bolder">Monitor Tunnel Traffic</h2>
        <ul class="list-unstyled text-muted">
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Observe number or requests,
            <br />and bandwidth usage
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Debug HTTP / HTTPS requests
            live
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Replay requests
          </li>
        </ul>
        <a class="text-decoration-none pinggy-link" href="/docs/http_tunnels/">
          Learn more
          <i class="bi bi-arrow-up-right-square"></i>
        </a>
      </div>
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img
          src="/assets/app3.webp"
          class="img-fluid"
          alt="Pinggy web debugger screenshot"
        />
      </div>
    </div>
  </div>
</section>
