---
title: "Pinggy - Simple Localhost Tunnels"
---

<!-- Banner -->
<header
  class="pt-1 contentcontainer"
  x-data="{ data : $store.advModal }"
  x-init="data.tryItYourself = JSON.parse(localStorage.getItem('tryItYourself')) || {
        selectedProtocol: 'HTTP',
        localaddress: 'localhost:8080',
        webdebugCheck: false,
        qrCheck: true
    };
    $watch('data.tryItYourself', function(value) {
        localStorage.setItem('tryItYourself', JSON.stringify(value));
    })"
>
  <div class="container">
    <div class="text-center">
      <div class="alert alert-info" role="alert">
        You can now use Pinggy <b>Node.js SDK</b> and <b>Python SDK</b> to create tunnels programmatically. <a href="/docs/" target="_blank">Learn more →</a>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-lg-5">
        <div class="text-left my-5">
          <h1 class="display-5 fw-bolder biggestheader d-inline">
            Public URLs for Localhost.
          </h1>
          <span class="mb-2 mt-2 fs-3 d-block"
            >Without downloading any binary!</span
          >
          <div class="mt-4" id="lead2">
            Create HTTP, TCP, UDP, or TLS tunnels to your Mac/PC.<br />Even if it is
            sitting behind firewalls and NATs.
          </div>
          <div style="margin-top: 4em; max-width: 28em">
            <div style="font-weight: 500">
              <span class="highlight">&nbspFree persistent URL&nbsp;</span> for
              7 days & custom domain support:
            </div>
            <div class="input-group mt-1">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="button-addon2"
                id="trialemail"
              />
              <div
                style="border-radius: 0.2em"
                class="invalid-tooltip"
                id="emailinvalidtooltip"
              >
                Please enter a valid email
              </div>
              <button
                class="btn btn-pinggy-blue"
                type="button"
                id="button-addon2"
                onclick="starttrial()"
              >
                Start 7 days free trial
              </button>
            </div>
            <button onclick="trynow()" id="trynow">
              Or just try it for free →
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-5 mt-5">
        <div class="text-left card" id="bigcodecolumn">
          <div class="px-4">
            <h2 class="h5 mt-3">Configure your free tunnel</h2>
            <form class="mt-3">
              <label for="localaddress" class="text-bold"
                ><strong>Your local address:</strong></label
              >
              <div class="input-group mt-2">
                <div class="input-group-prepend">
                  <select
                    class="form-select"
                    id="protocolSelect"
                    x-model="data.tryItYourself.selectedProtocol"
                    aria-label="Select protocol"
                  >
                    <option value="HTTP">HTTP</option>
                    <option value="TCP">TCP</option>
                    <option value="UDP">UDP</option>
                  </select>
                </div>
                <input
                  class="form-control"
                  id="localaddress"
                  type="text"
                  :placeholder="data.tryItYourself.localaddress || 'localhost:8000'"
                  x-model="data.tryItYourself.localaddress"
                  aria-label="Local address"
                />
              </div>
            </form>
            <div class="mt-3 row">
              <div class="col-md-6">
                <label class="switch" aria-label="Web Debugger">
                  <input
                    type="checkbox"
                    id="webdebuggerinput"
                    x-model="data.tryItYourself.webdebugCheck"
                  />
                  <span class="slider round"></span>
                </label>
                <span class="align-middle enablewebdebuglabel">
                  Web Debugger
                </span>
              </div>
              <div class="col-md-6">
                <label class="switch" aria-label="QR Code">
                  <input
                    type="checkbox"
                    id="qrinput"
                    x-model="data.tryItYourself.qrCheck"
                  />
                  <span class="slider round"></span>
                </label>
                <span class="align-middle enablewebdebuglabel"
                  >QR Code
                  <i
                    class="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-html="true"
                    title="Show QR Code for the URL"
                  >
                  </i>
                </span>
              </div>
            </div>
            <div class="alert alert-warning mt-3 mb-0" x-show="$store.advModal.getError()" x-text="$store.advModal.getError()" role="alert">
              A simple warning alert—check it out!
            </div>
          </div>
          <div id="finalcommand" class="border-top mt-3 px-4 py-3">
            <label class="text-bold mt-2" x-show="data.tryItYourself.selectedProtocol == 'UDP'">
              <strong>First Download the <a target="_blank" href="/cli/">Pinggy CLI</a></strong><br>
            </label>
            <label class="text-bold mt-2"
              ><strong>Paste this command to start tunnel:</strong></label
            >
            <div class="input-group mt-2">
              <textarea
                id="portcommand"
                class="form-control"
                aria-label="Command to start tunnel"
                readonly="readonly"
                x-text="$store.advModal.tryItYourselfCommand()"
              ></textarea>
              <button
                class="btn btn-dark"
                type="button"
                id="copybutton_tryityourselfcommand"
                aria-label="Copy SSH URL to Clipboard"
                onclick="copytoclipboard(this,'#portcommand')"
              >
                <i class="bi bi-clipboard"></i>
              </button>
            </div>
            <div class="mt-2" id="instructions">
              Enter "yes" to continue connecting. Enter blank password if
              prompted.
            </div>
            <div
              class="mt-2"
              id="webdebugurl"
              x-show="data.tryItYourself.webdebugCheck"
            >
              Default Web Debugger URL:
              <a href="http://localhost:4300" target="_blank"
                >http://localhost:4300</a
              >
            </div>
            <div class="mt-3">
            <button
              type="button"
              class="ml-1 btn btn-light text-decoration-none float-end border"
              data-bs-toggle="modal"
              data-bs-target="#advancedModal"
              id="advancedModalButton"
            >
              <i class="bi bi-gear"></i> Advanced Settings
              <i class="bi bi-chevron-right" style="font-size: 0.8rem"></i>
            </button>
            <a
              href="/docs/"
              target="_blank"
              type="button"
              class="mx-1 btn btn-light text-decoration-none float-end border"
            >
              <i class="bi bi-file-text"></i> Docs
              <i class="bi bi-chevron-right" style="font-size: 0.8rem"></i>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- Modal -->
<div class="modal fade" id="advancedModal" tabindex="-1" 
    aria-labelledby="advancedModalLabel" aria-hidden="true" 
    x-data="{ data : $store.advModal }"
    x-init="$watch('data.httpConfig', function(value) {
        localStorage.setItem('httpConfig', JSON.stringify(value));
    }, { deep: true });    
    $watch('data.tcp_tlsConfig', function(value) {
        localStorage.setItem('tcp_tlsConfig', JSON.stringify(value));
    }, { deep: true });"
>
    <div class="modal-dialog modal-lg">
        <div class="modal-content px-2 pb-3">
            <div class="modal-header">
                <span class="modal-title" id="advancedModalLabel">Advanced Tunnel Configuration</span>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pt-4">
                {{< pinggytunnel showTabs="true" mode="http" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=true keepalive=true >}}
                {{< /pinggytunnel >}}
            </div>
        </div>
    </div>
</div>


{{% terminal_animation %}}


<!-- Features -->
<section class="pt-5" id="features">
  <div class="container my-5">
    <div class="row justify-content-evenly">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="videocontainer ratio ratio-16x9">
          <video
            preload="none"
            onclick="if(this.paused && !this.controls){ this.controls=true; this.play() }"
            poster="/assets/tunnelvideothumb.webp"
          >
            <source src="/assets/pinggy_demo.webm" type="video/webm" />
            Your browser does not support HTML video.
          </video>
        </div>
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
            <i class="bi bi-check2-circle me-2"></i> Skip uploading to cloud
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> No need to download any
            tool
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Link your own domain
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Basic Authentication
          </li>
        </ul>
        <a class="btn btn-pinggy-blue me-2" href="/quickstart/">Quickstart</a>
        <a class="pinggy-link text-decoration-none" href="/docs/http_tunnels/">
          Learn more <i class="bi bi-arrow-right"></i>
        </a>
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
          <i class="bi bi-bug"></i>
        </div>
        <h2 class="h3 fw-bolder">Debug on the go!</h2>
        <ul class="list-unstyled text-muted">
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Debug HTTP / HTTPS requests
            live
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> No need to download any
            tool
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Replay requests
          </li>
        </ul>
        <a class="pinggy-link text-decoration-none" href="/docs/http_tunnels/">
          Learn more <i class="bi bi-arrow-right"></i>
        </a>
      </div>
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img
          src="/assets/webdebugger.webp"
          class="img-fluid featureimage"
          alt="Pinggy web debugger screenshot"
        />
      </div>
    </div>
  </div>
</section>

<section class="pt-5 mt-5" id="features">
  <div class="container my-5">
    <div class="row justify-content-evenly">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div id="carouselTUI" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img
                src="/assets/tui1.webp"
                class="d-block w-100 img-fluid featureimage"
                alt="Pinggy terminal user interface (TUI) screenshot showing list of requests"
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="/assets/tui2.webp"
                class="d-block w-100 img-fluid featureimage"
                alt="Pinggy terminal user interface (TUI) screenshot showing request and response headers of an HTTP request"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselTUI"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselTUI"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div
          class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
        >
          <i class="bi bi-terminal"></i>
        </div>
        <h2 class="h3 fw-bolder">Rich Terminal Interface</h2>
        <ul class="list-unstyled text-muted">
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Live request logs
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> View request / response
            headers
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Stats on bandwidth and more
          </li>
        </ul>
        <a class="pinggy-link text-decoration-none" href="/docs/http_tunnels/">
          Learn more <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Features section-->
<section class="py-5 border-bottom" id="features">
  <div class="container my-5">
    <div class="my-3 row justify-content-center">
      <div class="col-lg-12">
        <h2 class="text-center fw-light">
          Secure tunnels to your private network.
        </h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <img
          class="img-fluid"
          src="/assets/header.webp"
          alt="Pinggy tunnel network diagram showing how the tunnel works"
        />
      </div>
    </div>
  </div>
</section>

<!-- App / CLI section-->
<section class="border-bottom" id="appcli">
  <div class="container my-5">
    <div class="my-3 row justify-content-center">
      <div class="col-lg-12">
        <h2 class="text-center">
          Easy to use apps
        </h2>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div class="col-lg-5 mb-5 mb-lg-0">
        <h2 class="h3 fw-bolder mt-3">Desktop App</h2>
        <ul class="list-unstyled text-muted">
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Available for Windows, Mac, and Linux
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Easy to use GUI to manage your tunnels
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Auto start tunnels on boot
          </li>
        </ul>
        <a class="pinggy-link text-decoration-none" href="/app/">
          Learn more <i class="bi bi-arrow-right"></i>
        </a>
        <h2 class="h3 fw-bolder mt-5">Command Line App</h2>
        <ul class="list-unstyled text-muted">
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> Robust auto reconnection
          </li>
          <li class="my-3">
            <i class="bi bi-check2-circle me-2"></i> JSON configuration
          </li>
        </ul>
        <a class="pinggy-link text-decoration-none" href="/cli/">
          Learn more <i class="bi bi-arrow-right"></i>
        </a>
      </div>
      <div class="col-lg-6 mb-5 mb-lg-0">
      <a href="./app/">
        <img
          src="/assets/app5.webp"
          class="img-fluid featureimage my-4"
          alt="Pinggy desktop app screenshot"
        />
      </a>
      </div>
    </div>
  </div>
</section>

<!-- Features section-->
<section class="py-5 border-bottom" id="features">
  <div class="container my-5">
    <div class="my-3 row justify-content-center">
      <div class="col-lg-12">
        <h2 class="mb-5 text-center">Features</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-window-stack"></i>
          </div>
          <h2 class="h3 fw-bolder">No downloads</h2>
          <h2 class="h6 fw-light">Runs everywhere</h2>
          <p>
            <i class="bi bi-check2-circle me-2"></i><b>Windows</b> <br /><i
              class="bi bi-check2-circle me-2"
            ></i
            ><b>Mac</b> <br /><i class="bi bi-check2-circle me-2"></i
            ><b>Linux</b><br />
            <i class="bi bi-check2-circle me-2"></i><b>Docker</b>
          </p>
        </div>
      </div>
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-hdd-network"></i>
          </div>
          <h2 class="h3 fw-bolder">Multiple Protocols</h2>
          <p>
            <i class="bi bi-check2-circle me-2"></i><b>HTTPS</b> tunnels with
            built-in Let's Encrypt certificates for web applications. <br /><i
              class="bi bi-check2-circle me-2"
            ></i
            ><b>TCP</b> tunnels for other applications. <br />
            <i
              class="bi bi-check2-circle me-2"
            ></i
            ><b>UDP</b> tunnels.<br /><i
              class="bi bi-check2-circle me-2"
            ></i
            ><b>TLS</b> tunnels for end-to-end encryption.
          </p>
        </div>
      </div>
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-link-45deg"></i>
          </div>
          <h2 class="h3 fw-bolder">Instant Domains</h2>
          <p>
            <i class="bi bi-check2-circle me-2"></i><b>Subdomain</b>: Custom persistent subdomains. <br /><i
              class="bi bi-check2-circle me-2"
            ></i
            ><b>Custom domain</b>: Bring your own domains with built-in HTTPS
            certificates.<br />
            <i class="bi bi-check2-circle me-2"></i>
            <b>Wildcard domains</b>: Use <code>*.yourdomain.com</code> to route different subdomains to different ports.
          </p>
        </div>
      </div>
      <div class="col-lg-4 mb-5 mb-lg-0">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-shield-lock"></i>
          </div>
          <h2 class="h3 fw-bolder">Access Control</h2>
          <p>
            <i class="bi bi-check2-circle me-2"></i
            ><b>Password</b> authentication with HTTP Basic authentication.
            <br /><i class="bi bi-check2-circle me-2"></i><b>Bearer token</b> /
            key based authentication. <br /><i
              class="bi bi-check2-circle me-2"
            ></i
            ><b>IP whitelisting</b> for restricted access.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-bug"></i>
          </div>
          <h2 class="h3 fw-bolder">Inspect & Debug</h2>
          <p>
            <i class="bi bi-check2-circle me-2"></i><b>Live debugger</b>:
            Inspect HTTP requests on the fly. View requests, responses, headers,
            etc. <br /><i class="bi bi-check2-circle me-2"></i
            ><b>Header manipulation</b>: Change HTTP request headers before they
            arrive at your server.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card featurecard p-4">
          <div
            class="feature bg-subtlegray border-subtlegray text-gray rounded-3 mb-3"
          >
            <i class="bi bi-globe-americas"></i>
          </div>
          <h2 class="h3 fw-bolder">Multiple Regions</h2>
          <h2 class="h4 fw-light">Fast Tunnels</h2>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p id="loc1">
                  <i class="bi bi-check2-circle me-2"></i><b>USA</b> <br />
                  <i class="bi bi-check2-circle me-2"></i><b>Europe</b> <br />
                  <i class="bi bi-check2-circle me-2"></i><b>Asia</b>
                </p>
              </div>
              <div class="col-md-6">
                <p id="loc2">
                  <i class="bi bi-check2-circle me-2"></i><b>Brazil</b> <br />
                  <i class="bi bi-check2-circle me-2"></i><b>Australia</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<header class="bg-light py-5" id="prices" x-init="$store.location.detectCountry()">
  <div class="container">
    <div class="row justify-content-md-center">
      <!-- Begin Page Content -->
      <div class="col-lg-12">
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="text-bold fw-normal">
            Subscribe to the easiest localhost tunneling.
          </h1>
          <p class="fs-5" style="color: rgb(80, 80, 80)">
            Make your developement experience smoother by unlocking the full
            potential of Pinggy.
          </p>
        </div>
        <main>
          <div class="pricing-toggle d-flex justify-content-center align-items-center flex-wrap mb-4">
            <label
              class="toggler toggler--is-active align-middle mb-0"
              id="filt-monthly"
              >Monthly</label
            >
            <label
              class="switch mx-2"
              aria-label="Toggle between monthly and yearly plans"
            >
              <input id="toggleswitch" type="checkbox" checked="" />
              <span class="slider round"></span>
            </label>
            <label class="toggler align-middle mb-0" id="filt-hourly"
              >Yearly</label
            >
            <span class="pricing-toggle__savings ms-2">Save up to 17%</span>
          </div>
          <div
            class="row row-cols-1 row-cols-md-3 g-4 mb-3 align-items-stretch justify-content-center pricing-grid"
          >
            <div class="col">
              <div class="pricecard card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Free</h4>
                </div>
                <div class="card-body d-flex flex-column">
                  <div class="pricing-price-block">
                    <h1 class="card-title pricing-card-title">
                      <span x-text="$store.location.currency"></span> 0<small
                        class="text-muted fw-light"
                        >/month</small
                      >
                    </h1>
                    <p class="text-muted fw-light mb-0">Free for life</p>
                  </div>
                  <ul class="list-unstyled pricing-features text-left mt-3 mb-3">
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Single command tunneling</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>HTTP(S), TCP, UDP, TLS tunnels</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Live header manipulation</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Request-response inspection &amp; replays</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>60 minutes tunnel timeout</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Random subdomains</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Unlimited Data Transfer</span>
                    </li>
                  </ul>
                  <a class="mt-auto" href="https://dashboard.pinggy.io/"
                    ><button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-pinggy"
                    >
                      Go to dashboard
                    </button></a
                  >
                </div>
              </div>
            </div>
            <div x-data="{ seatVal: 1 }" class="col">
              <div
                class="pricecard pricecard--featured card rounded-3 shadow h-100"
              >
                <div class="pricing-badge">Most Popular</div>
                <div class="card-header py-3 text-white bg-gray border-gray">
                  <h4 class="my-0 fw-normal">Pro</h4>
                </div>
                <div class="card-body d-flex flex-column">
                  <div class="pricing-price-block">
                    <div class="yearly">
                      <h1 class="card-title pricing-card-title">
                        <span x-text="$store.location.currency"></span>
                        <span
                          x-text="$store.location.currency === 'INR' ? (204.89 * seatVal).toFixed(2) : (2.50 * seatVal).toFixed(2)"
                          id="yearprice"
                        ></span
                        ><small class="text-muted fw-light">/month</small>
                      </h1>
                      <p class="text-muted fw-light mb-0">
                        billed annually<span x-show="seatVal > 1">
                          · <span x-text="seatVal"></span> seats</span
                        >
                      </p>
                    </div>
                    <div class="monthly">
                      <h1 class="card-title pricing-card-title">
                        <span x-text="$store.location.currency"></span>
                        <span
                          x-text="$store.location.currency === 'INR' ? (245.87 * seatVal).toFixed(2) : (3.00 * seatVal).toFixed(2)"
                          id="monthprice"
                        ></span
                        ><small class="text-muted fw-light">/month</small>
                      </h1>
                      <p class="text-muted fw-light mb-0">
                        billed monthly<span x-show="seatVal > 1">
                          · <span x-text="seatVal"></span> seats</span
                        >
                      </p>
                    </div>
                  </div>
                  <div class="seat-selector mt-2">
                    <span class="seat-selector__label">Seats</span>
                    <div class="input-group seat-spinner">
                      <button
                        type="button"
                        @click="seatVal = Math.max(1, parseInt(seatVal) - 1)"
                        class="btn btn-outline-secondary"
                        aria-label="Decrease seats"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        x-model="seatVal"
                        class="form-control text-center"
                        aria-label="Number of seats"
                        x-on:input="seatVal = isNaN(parseFloat(seatVal)) 
                                                    || seatVal < 1 ? 1 : seatVal"
                      />
                      <button
                        type="button"
                        @click="seatVal = parseInt(seatVal) + 1"
                        class="btn btn-outline-secondary"
                        aria-label="Increase seats"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <template x-if="seatVal > 20">
                    <div class="alert alert-info text-center my-2" role="alert">
                      <a href="/contact_us/" target="_blank"
                        ><b>Contact us</b></a
                      >
                      to get volume discounts!
                    </div>
                  </template>
                  <ul class="list-unstyled pricing-features text-left mt-3 mb-3">
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span>Everything in Free plan</span>
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span
                        ><span x-text="seatVal"></span> Persistent tunnel<span
                          x-show="seatVal > 1"
                          >s</span
                        ></span
                      >
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span
                        ><span x-text="seatVal"></span> Custom subdomain<span
                          x-show="seatVal > 1"
                          >s</span
                        ></span
                      >
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span
                        ><span x-text="seatVal"></span> Custom domain<span
                          x-show="seatVal > 1"
                          >s</span
                        ></span
                      >
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span
                        ><span x-text="seatVal"></span> Persistent TCP/UDP port<span
                          x-show="seatVal > 1"
                          >s</span
                        ></span
                      >
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span
                        ><span x-text="seatVal"></span> Team<span
                          x-show="seatVal > 1"
                          >s</span
                        >
                        <a
                          href="/docs/teams/"
                          target="_blank"
                          class="link-dark"
                          aria-label="About Teams"
                          ><i class="bi bi-info-circle"></i
                        ></a>
                      </span>
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span>Remote Device Management</span>
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span>Wildcard Domain Support</span>
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span>Unlimited Data Transfer</span>
                    </li>
                    <li>
                      <i
                        class="bi bi-check2-circle pricing-check pricing-check--featured"
                      ></i>
                      <span>Priority mail / Discord support</span>
                    </li>
                  </ul>
                  <a
                    x-show="seatVal > 1"
                    class="mt-auto w-100 btn btn-lg btn-pinggy"
                    id="checkout-and-portal-button"
                    href="https://dashboard.pinggy.io"
                    >Get Started</a
                  >
                  <button
                    x-show="seatVal == 1"
                    type="button"
                    class="mt-auto w-100 btn btn-lg btn-pinggy"
                    data-bs-toggle="modal"
                    data-bs-target="#trialModal"
                    id="trialModalButton"
                  >
                    <span>Start 7 Days Free Trial</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="pricecard card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Enterprise</h4>
                </div>
                <div class="card-body d-flex flex-column">
                  <div class="pricing-price-block">
                    <h1 class="card-title pricing-card-title">Custom</h1>
                    <p class="text-muted fw-light mb-1">
                      For teams that need dedicated infrastructure
                    </p>
                    <a
                      href="mailto:contact@pinggy.io"
                      class="pinggy-link small text-decoration-none"
                      >contact@pinggy.io</a
                    >
                  </div>
                  <ul class="list-unstyled pricing-features text-left mt-3 mb-3">
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Dedicated Servers / On Premise</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Unlimited persistent tunnels</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Unlimited custom subdomains</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Unlimited custom domains</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Unlimited persistent TCP/UDP ports</span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span
                        >Unlimited Teams
                        <a
                          href="/docs/teams/"
                          target="_blank"
                          class="link-dark"
                          aria-label="About Teams"
                          ><i class="bi bi-info-circle"></i
                        ></a>
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span
                        >API to monitor and manage tunnels
                        <a
                          href="/docs/api/api/"
                          target="_blank"
                          class="link-dark"
                          aria-label="About the API"
                          ><i class="bi bi-info-circle"></i
                        ></a>
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2-circle pricing-check"></i>
                      <span>Priority Discord &amp; Call Support</span>
                    </li>
                  </ul>
                  <a
                    class="mt-auto w-100 btn btn-lg btn-outline-pinggy"
                    id="checkout-and-portal-button-1"
                    href="/contact_us/"
                    >Contact Sales</a
                  >
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</header>
<!-- Trial Modal -->
<div class="modal fade" id="trialModal" tabindex="-1"
    aria-labelledby="trialModalLabel" aria-hidden="true"
>
  <div class="modal-dialog modal-lg">
      <div class="modal-content px-2 pb-3">
          <div class="modal-header">
              <span class="modal-title" id="trialModalLabel">Start 7 Days Free Trial</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pt-4">
            <div style="margin-top: 4em; max-width: 28em; margin: 0 auto">
              <div style="font-weight: 500">
                <span class="highlight">Free Pinggy Pro for
                7 days:
              </div>
              <div class="input-group mt-1">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="button-addon2"
                  id="trialemail2"
                />
                <div
                  style="border-radius: 0.2em"
                  class="invalid-tooltip"
                  id="emailinvalidtooltip2"
                >
                  Please enter a valid email
                </div>
                <button
                  style="
                    border-color: rgb(71, 117, 198);
                    background-color: rgba(70, 117, 199, 1);
                    padding: 0.6em 1em;
                    box-shadow: 0 0 4px 0px #a3599b8c;
                    font-weight: 500;
                  "
                  class="btn btn-secondary"
                  type="button"
                  id="button-addon2"
                  onclick="starttrial2()"
                >
                  Start Trial
                </button>
              </div>
            </div>
          </div>
      </div>
  </div>
</div>

{{< faq >}}
