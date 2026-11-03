---
title: "Pinggy - Simple Localhost Tunnels"
---

<main class="frame">

<!-- Hero: headline + trial on the left, tunnel configurator on the right -->
<header
  class="cell hero"
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
  <canvas id="grid-canvas" class="hero__grid" aria-hidden="true" data-scope="parent" data-cell="48" data-base-rgb="21, 21, 21" data-base-alpha="0.07" data-glow-radius="260" data-glow-peak="0.5" data-pulse-max="4" data-head="square"></canvas>
  <a class="tag" href="/docs/http_tunnels/web_debugger/" target="_blank"><span class="tag__new">New</span>Web Debugger in the Dashboard <span aria-hidden="true">&rarr;</span></a>
  <div class="hero__left">
    <h1 class="biggestheader">Public URLs for Localhost.</h1>
    <p class="hero__sub">Without downloading any binary!</p>
    <div id="lead2">
      Create HTTP, TCP, UDP, or TLS tunnels to your Mac/PC. Even if it is
      sitting behind firewalls and NATs.
    </div>
    <div class="hero__trial">
      <span class="eyebrow"><mark>Free persistent URL</mark> for 7 days &amp; custom domain support</span>
      <div class="input-group trial-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="button-addon2"
          id="trialemail"
        />
        <div class="invalid-tooltip" id="emailinvalidtooltip">
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
      <button type="button" onclick="trynow()" id="trynow" class="link-rule">
        Or just try it for free <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  </div>
  <div class="hero__right">
    <div class="text-left card" id="bigcodecolumn">
      <div class="spec-card__head">
        <h2 class="h6 m-0 eyebrow text-reset">Configure your free tunnel</h2>
      </div>
      <div class="configurator__body">
        <form>
          <label for="localaddress">Your local address:</label>
          <div class="input-group mt-2">
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
        <div class="configurator__toggles">
          <div>
            <label class="switch" aria-label="Web Debugger">
              <input
                type="checkbox"
                id="webdebuggerinput"
                x-model="data.tryItYourself.webdebugCheck"
              />
              <span class="slider round"></span>
            </label>
            <span class="enablewebdebuglabel">Web Debugger</span>
          </div>
          <div>
            <label class="switch" aria-label="QR Code">
              <input
                type="checkbox"
                id="qrinput"
                x-model="data.tryItYourself.qrCheck"
              />
              <span class="slider round"></span>
            </label>
            <span class="enablewebdebuglabel"
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
        <div class="alert alert-warning" x-show="$store.advModal.getError()" x-text="$store.advModal.getError()" role="alert">
          A simple warning alert-check it out!
        </div>
      </div>
      <div id="finalcommand">
        <label class="configurator__note" x-show="data.tryItYourself.selectedProtocol == 'UDP'">
          First Download the <a target="_blank" href="/cli/">Pinggy CLI</a>
        </label>
        <label class="configurator__label" for="portcommand">Paste this command to start tunnel:</label>
        <div class="input-group cmd mt-2">
          <textarea
            id="portcommand"
            class="form-control"
            aria-label="Command to start tunnel"
            readonly="readonly"
            rows="2"
            x-text="$store.advModal.tryItYourselfCommand()"
          ></textarea>
          <button
            class="btn"
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
        <div class="configurator__actions">
          <a href="/docs/" target="_blank" class="btn btn-outline-pinggy">
            <i class="bi bi-file-text"></i> Docs
          </a>
          <button
            type="button"
            class="btn btn-outline-pinggy"
            data-bs-toggle="modal"
            data-bs-target="#advancedModal"
            id="advancedModalButton"
          >
            <i class="bi bi-gear"></i> Advanced Settings
          </button>
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

{{< terminal_animation >}}

<!-- Feature: sharing -->
<section class="cell split" id="feature-share">
  <div class="split__text">
    <span class="eyebrow">Share</span>
    <h2>Share your websites and apps in seconds.</h2>
    <ul class="featurelist">
      <li><i class="bi bi-check2-circle me-2"></i>Skip uploading to the cloud.</li>
      <li><i class="bi bi-check2-circle me-2"></i>No tool to download.</li>
      <li><i class="bi bi-check2-circle me-2"></i>Link your own domain.</li>
      <li><i class="bi bi-check2-circle me-2"></i>Basic authentication built in.</li>
    </ul>
    <div class="split__actions">
      <a class="btn btn-pinggy-blue" href="/quickstart/">Quickstart</a>
      <a class="link-rule" href="/docs/http_tunnels/">
        Learn more <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
  <figure class="spec-card split__media">
    <figcaption class="spec-card__head">
      <span>Video: How to share a local app</span>
      <span class="spec-card__meta">1:51</span>
    </figcaption>
    <div class="spec-card__body">
      <div class="videocontainer ratio ratio-16x9">
        <video
          preload="none"
          onclick="if(this.paused && !this.controls){ this.controls=true; this.play(); this.parentNode.classList.add('is-playing') }"
          poster="/assets/tunnelvideoposter.webp"
          aria-label="Screen recording: sharing a local Next.js app with Pinggy"
        >
          <source src="/assets/pinggy_demo.webm" type="video/webm" />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  </figure>
</section>

<!-- Feature: debug -->
<section class="cell split split--flip" id="feature-debug">
  <div class="split__text">
    <span class="eyebrow">Debug</span>
    <h2>Debug on the go.</h2>
    <p class="prose">
      The Web Debugger is now built into the Pinggy Dashboard. Inspect,
      modify, and replay your tunnel traffic right in the browser.
    </p>
    <ul class="featurelist">
      <li><i class="bi bi-check2-circle me-2"></i>Inspect HTTP / HTTPS requests live.</li>
      <li><i class="bi bi-check2-circle me-2"></i>No tool to download.</li>
      <li><i class="bi bi-check2-circle me-2"></i>Replay any request.</li>
    </ul>
    <div class="split__actions">
      <a class="link-rule" href="/docs/http_tunnels/">
        Learn more <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
  <figure class="spec-card split__media">
    <figcaption class="spec-card__head">
      <span>Web Debugger</span>
      <span class="spec-card__meta">dashboard.pinggy.io</span>
    </figcaption>
    <div class="spec-card__body">
      <img
        src="/assets/webdebugger.webp"
        alt="Pinggy web debugger screenshot"
        width="2048"
        height="1249"
        loading="lazy"
        decoding="async"
      />
    </div>
  </figure>
</section>

<!-- Feature: terminal interface: copy on the left, the two TUI screenshots
     sliding on the right (Bootstrap carousel, prev/next in the card head). -->
<section class="cell split" id="feature-tui">
  <div class="split__text">
    <span class="eyebrow">Terminal UI</span>
    <h2>Rich terminal interface.</h2>
    <ul class="featurelist">
      <li><i class="bi bi-check2-circle me-2"></i>Live request logs.</li>
      <li><i class="bi bi-check2-circle me-2"></i>View request and response headers.</li>
      <li><i class="bi bi-check2-circle me-2"></i>Stats on bandwidth and more.</li>
    </ul>
    <div class="split__actions">
      <a class="link-rule" href="/docs/http_tunnels/">
        Learn more <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
  <div class="spec-card split__media tui-card">
    <div class="spec-card__head">
      <span>Pinggy terminal UI</span>
      <span class="tui-card__nav">
        <button class="tui-card__btn" type="button" data-bs-target="#carouselTUI" data-bs-slide="prev" aria-label="Previous screenshot"><i class="bi bi-chevron-left"></i></button>
        <button class="tui-card__btn" type="button" data-bs-target="#carouselTUI" data-bs-slide="next" aria-label="Next screenshot"><i class="bi bi-chevron-right"></i></button>
      </span>
    </div>
    <div class="spec-card__body">
      <div id="carouselTUI" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/assets/tui1.webp"
              alt="Pinggy terminal user interface (TUI) screenshot showing list of requests"
              width="1500"
              height="944"
              loading="lazy"
              decoding="async"
            />
            <p class="tui-card__caption"><span>01</span>Live request log, with bandwidth and request counters</p>
          </div>
          <div class="carousel-item">
            <img
              src="/assets/tui2.webp"
              alt="Pinggy terminal user interface (TUI) screenshot showing request and response headers of an HTTP request"
              width="1500"
              height="944"
              loading="lazy"
              decoding="async"
            />
            <p class="tui-card__caption"><span>02</span>Request and response headers of a single request</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Private network -->
<section class="cell split split--flip" id="private-network" x-data="netTabs">
  <div class="split__text">
    <span class="eyebrow">How it works</span>
    <h2>Secure tunnels to your private network.</h2>
    <p class="prose">
      Your machine opens one outbound, encrypted connection to Pinggy, and
      clients reach it through a public address. No port forwarding, no
      firewall changes. Pick a tunnel type to see how the traffic flows.
    </p>
    {{< network-diagram part="tabs" >}}
  </div>
  <div class="split__media">
    {{< network-diagram >}}
  </div>
</section>

<!-- App / CLI -->
<section class="cell split" id="appcli">
  <div class="split__text">
    <span class="eyebrow">Apps</span>
    <h2>Easy to use apps</h2>
    <div class="split__sub">
      <h3>Desktop App</h3>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i>Available for Windows, Mac, and Linux</li>
        <li><i class="bi bi-check2-circle me-2"></i>Easy to use GUI to manage your tunnels</li>
        <li><i class="bi bi-check2-circle me-2"></i>Auto start tunnels on boot</li>
      </ul>
      <a class="link-rule" href="/app/">
        Learn more <i class="bi bi-arrow-right"></i>
      </a>
    </div>
    <div class="split__sub">
      <h3>Command Line App</h3>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i>Robust auto reconnection</li>
        <li><i class="bi bi-check2-circle me-2"></i>JSON configuration</li>
      </ul>
      <a class="link-rule" href="/cli/">
        Learn more <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
  <a class="spec-card split__media" href="/app/">
    <span class="spec-card__head">
      <span>Pinggy App</span>
      <span class="spec-card__meta">Windows / macOS / Linux</span>
    </span>
    <span class="spec-card__body">
      <img
        src="/assets/app5.webp"
        alt="Pinggy desktop app screenshot"
        width="1394"
        height="736"
        loading="lazy"
        decoding="async"
      />
    </span>
  </a>
</section>

<!-- Features grid -->
<section class="cell cell--flush" id="features-grid">
  <div class="cell__head">
    <span class="eyebrow">Features</span>
    <h2>Everything you need to ship and debug tunnels.</h2>
  </div>
  <div class="pillars">
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-window-stack" aria-hidden="true"></i>01</span>
      <h3>No downloads</h3>
      <p class="pillar__sub">Runs everywhere</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><strong>Windows</strong></li>
        <li><i class="bi bi-check2-circle me-2"></i><strong>Mac</strong></li>
        <li><i class="bi bi-check2-circle me-2"></i><strong>Linux</strong></li>
        <li><i class="bi bi-check2-circle me-2"></i><strong>Docker</strong></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-hdd-network" aria-hidden="true"></i>02</span>
      <h3>Multiple Protocols</h3>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>HTTPS</strong> tunnels with built-in Let's Encrypt certificates.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>TCP</strong> tunnels for other applications.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>UDP</strong> tunnels.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>TLS</strong> tunnels for end-to-end encryption.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-link-45deg" aria-hidden="true"></i>03</span>
      <h3>Instant Domains</h3>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Subdomain</strong>: custom persistent subdomains.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Custom domain</strong>: bring your own with built-in HTTPS.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Wildcard domains</strong>: <code>*.yourdomain.com</code> routes different subdomains to different ports.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-shield-lock" aria-hidden="true"></i>04</span>
      <h3>Access Control</h3>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Password</strong> authentication with HTTP Basic auth.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Bearer token</strong> / key based authentication.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>IP whitelisting</strong> for restricted access.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-bug" aria-hidden="true"></i>05</span>
      <h3>Inspect &amp; Debug</h3>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Live debugger</strong>: inspect HTTP requests, responses, and headers on the fly.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span><strong>Header manipulation</strong>: change HTTP request headers before they reach your server.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-globe-americas" aria-hidden="true"></i>06</span>
      <h3>Multiple Regions</h3>
      <p class="pillar__sub">Fast tunnels worldwide</p>
      <div class="pillar__cols">
        <ul class="featurelist mb-0" id="loc1">
          <li><i class="bi bi-check2-circle me-2"></i><strong>USA</strong></li>
          <li><i class="bi bi-check2-circle me-2"></i><strong>Europe</strong></li>
          <li><i class="bi bi-check2-circle me-2"></i><strong>Asia</strong></li>
        </ul>
        <ul class="featurelist mb-0" id="loc2">
          <li><i class="bi bi-check2-circle me-2"></i><strong>Brazil</strong></li>
          <li><i class="bi bi-check2-circle me-2"></i><strong>Australia</strong></li>
        </ul>
      </div>
    </article>
  </div>
</section>

<!-- Pricing -->
<section class="cell cell--flush" id="prices" x-init="$store.location.detectCountry()">
  <div class="cell__head cell__head--center">
    <span class="eyebrow">Pricing</span>
    <h2>Subscribe to the easiest localhost tunneling.</h2>
    <p class="prose">
      Make your development experience smoother by unlocking the full
      potential of Pinggy.
    </p>
    <div class="pricing-toggle">
      <label class="toggler toggler--is-active mb-0" id="filt-monthly">Monthly</label>
      <label class="switch mb-0" aria-label="Toggle between monthly and yearly plans">
        <input id="toggleswitch" type="checkbox" checked="" />
        <span class="slider round"></span>
      </label>
      <span class="pricing-toggle__yearly">
        <label class="toggler mb-0" id="filt-hourly">Yearly</label>
        <span class="chip pricing-toggle__savings">Save up to 17%</span>
      </span>
    </div>
  </div>
  <div class="pricing-grid">
        <div class="pricing-grid__item">
          <div class="pricecard card">
            <div class="card-header">
              <h3>Free</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="pricing-price-block">
                <p class="card-title pricing-card-title">
                  <span x-text="$store.location.currency"></span> 0<small>/month</small>
                </p>
                <p class="pricing-note">Free for life</p>
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
                  <span
                    >1 Pinggy Device with a remote terminal
                    <a
                      href="/docs/devices/"
                      target="_blank"
                      class="link-dark"
                      aria-label="About Pinggy Devices"
                      ><i class="bi bi-info-circle"></i
                    ></a>
                  </span>
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
              <a
                class="mt-auto w-100 btn btn-lg btn-outline-pinggy"
                href="https://dashboard.pinggy.io/"
                >Go to dashboard</a
              >
            </div>
          </div>
        </div>
        <div x-data="{ seatVal: 1 }" class="pricing-grid__item">
          <div class="pricecard pricecard--featured card">
            <div class="card-header">
              <h3>Pro</h3>
              <span class="pricing-badge">Most Popular</span>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="pricing-price-block">
                <div class="yearly">
                  <p class="card-title pricing-card-title">
                    <span x-text="$store.location.currency"></span>
                    <span
                      x-text="$store.location.currency === 'INR' ? (204.89 * seatVal).toFixed(2) : (2.50 * seatVal).toFixed(2)"
                      id="yearprice"
                    ></span
                    ><small>/month</small>
                  </p>
                  <p class="pricing-note">
                    billed annually<span x-show="seatVal > 1">
                      · <span x-text="seatVal"></span> seats</span
                    >
                  </p>
                </div>
                <div class="monthly">
                  <p class="card-title pricing-card-title">
                    <span x-text="$store.location.currency"></span>
                    <span
                      x-text="$store.location.currency === 'INR' ? (245.87 * seatVal).toFixed(2) : (3.00 * seatVal).toFixed(2)"
                      id="monthprice"
                    ></span
                    ><small>/month</small>
                  </p>
                  <p class="pricing-note">
                    billed monthly<span x-show="seatVal > 1">
                      · <span x-text="seatVal"></span> seats</span
                    >
                  </p>
                </div>
              </div>
              <div class="seat-selector mt-3">
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
                  <span
                    >25 Pinggy Devices, 3 terminals each
                    <a
                      href="/docs/devices/"
                      target="_blank"
                      class="link-dark"
                      aria-label="About Pinggy Devices"
                      ><i class="bi bi-info-circle"></i
                    ></a>
                  </span>
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
                class="mt-auto w-100 btn btn-lg btn-pinggy-blue"
                id="checkout-and-portal-button"
                href="https://dashboard.pinggy.io"
                >Get Started</a
              >
              <button
                x-show="seatVal == 1"
                type="button"
                class="mt-auto w-100 btn btn-lg btn-pinggy-blue"
                data-bs-toggle="modal"
                data-bs-target="#trialModal"
                id="trialModalButton"
              >
                <span>Start 7 Days Free Trial</span>
              </button>
            </div>
          </div>
        </div>
        <div class="pricing-grid__item">
          <div class="pricecard card">
            <div class="card-header">
              <h3>Enterprise</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="pricing-price-block">
                <p class="card-title pricing-card-title">Custom</p>
                <p class="pricing-note mb-2">
                  For teams that need dedicated infrastructure
                </p>
                <a
                  href="mailto:contact@pinggy.io"
                  class="link-rule"
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
                  <span
                    >Unlimited Pinggy Devices and terminals
                    <a
                      href="/docs/devices/"
                      target="_blank"
                      class="link-dark"
                      aria-label="About Pinggy Devices"
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
</section>

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
            <div class="trial-block">
              <span class="eyebrow"><mark>Free Pinggy Pro</mark> for 7 days:</span>
              <div class="input-group trial-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="button-addon3"
                  id="trialemail2"
                />
                <div class="invalid-tooltip" id="emailinvalidtooltip2">
                  Please enter a valid email
                </div>
                <button
                  class="btn btn-pinggy-blue"
                  type="button"
                  id="button-addon3"
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

<!-- Featured-on badge marquee -->
<section class="cell featured" id="featured-on">
  <span class="eyebrow">Featured on</span>
    <div class="badge-marquee" aria-label="Directories and sites featuring Pinggy">
    <div class="badge-marquee-track">
      <div class="badge-marquee-group">
        <a href="https://lemonlaunch.dev/saas/pinggy" target="_blank" rel="noopener"><img src="https://lemonlaunch.dev/badge/lemonlaunch-badge-light.svg" alt="Featured on LemonLaunch" width="188" height="56" loading="lazy" /></a>
        <a href="https://www.listbulb.com/tools/pinggy" target="_blank" rel="noopener"><img src="https://www.listbulb.com/featured-on-listbulb-light.svg" alt="Featured on ListBulb" loading="lazy" /></a>
        <a href="https://easylaunch.dev/ai/pinggy" target="_blank" rel="noopener"><img src="https://easylaunch.dev/badge/easylaunch-badge-light.svg" alt="Featured on EasyLaunch" width="188" height="56" loading="lazy" /></a>
        <a href="https://easydofollow.dev/ai/pinggy" target="_blank" rel="noopener"><img src="https://easydofollow.dev/badge/easydofollow-badge-light.svg" alt="Featured on EasyDoFollow" width="188" height="56" loading="lazy" /></a>
        <a href="https://wired.business" target="_blank" rel="noopener"><img src="https://wired.business/badge1-light.svg" alt="Featured on Wired Business" width="200" height="54" loading="lazy" /></a>
        <a href="https://uno.directory" target="_blank" rel="noopener"><img src="https://uno.directory/uno-directory.svg" alt="Listed on Uno Directory" width="120" height="30" loading="lazy" /></a>
        <a href="https://apphublist.com/products/pinggy" target="_blank" rel="noopener"><img src="https://apphublist.com/assets/images/badge.png" alt="App Hub List" height="54" loading="lazy" /></a>
        <a href="https://saasavenue.com/products/pinggy" target="_blank" rel="noopener"><img src="https://saasavenue.com/assets/images/badge.png" alt="SaaS Avenue" height="54" loading="lazy" /></a>
        <a href="https://appnetworker.com/products/pinggy" target="_blank" rel="noopener"><img src="https://appnetworker.com/assets/images/badge.png" alt="App Networker" height="54" loading="lazy" /></a>
        <a href="https://dang.ai" target="_blank" rel="dofollow noopener"><img src="https://assets.dang.ai/badges/dang-verified-light.png" alt="Verified on DANG!" width="260" height="94" loading="lazy" /></a>
        <a href="https://startupfa.me/s/pinggy-1?utm_source=pinggy.io" target="_blank" rel="noopener"><img src="https://startupfa.me/badges/featured/light.webp" alt="Featured on Startup Fame" width="171" height="54" loading="lazy" /></a>
        <a href="https://fazier.com/launches/pinggy.io" target="_blank" rel="noopener"><img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&amp;theme=neutral" alt="Fazier badge" width="250" loading="lazy" /></a>
      </div>
      <div class="badge-marquee-group" aria-hidden="true">
        <a href="https://lemonlaunch.dev/saas/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://lemonlaunch.dev/badge/lemonlaunch-badge-light.svg" alt="" width="188" height="56" loading="lazy" /></a>
        <a href="https://www.listbulb.com/tools/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://www.listbulb.com/featured-on-listbulb-light.svg" alt="" loading="lazy" /></a>
        <a href="https://easylaunch.dev/ai/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://easylaunch.dev/badge/easylaunch-badge-light.svg" alt="" width="188" height="56" loading="lazy" /></a>
        <a href="https://easydofollow.dev/ai/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://easydofollow.dev/badge/easydofollow-badge-light.svg" alt="" width="188" height="56" loading="lazy" /></a>
        <a href="https://wired.business" target="_blank" rel="noopener" tabindex="-1"><img src="https://wired.business/badge1-light.svg" alt="" width="200" height="54" loading="lazy" /></a>
        <a href="https://uno.directory" target="_blank" rel="noopener" tabindex="-1"><img src="https://uno.directory/uno-directory.svg" alt="" width="120" height="30" loading="lazy" /></a>
        <a href="https://apphublist.com/products/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://apphublist.com/assets/images/badge.png" alt="" height="54" loading="lazy" /></a>
        <a href="https://saasavenue.com/products/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://saasavenue.com/assets/images/badge.png" alt="" height="54" loading="lazy" /></a>
        <a href="https://appnetworker.com/products/pinggy" target="_blank" rel="noopener" tabindex="-1"><img src="https://appnetworker.com/assets/images/badge.png" alt="" height="54" loading="lazy" /></a>
        <a href="https://dang.ai" target="_blank" rel="dofollow noopener" tabindex="-1"><img src="https://assets.dang.ai/badges/dang-verified-light.png" alt="" width="260" height="94" loading="lazy" /></a>
        <a href="https://startupfa.me/s/pinggy-1?utm_source=pinggy.io" target="_blank" rel="noopener" tabindex="-1"><img src="https://startupfa.me/badges/featured/light.webp" alt="" width="171" height="54" loading="lazy" /></a>
        <a href="https://fazier.com/launches/pinggy.io" target="_blank" rel="noopener" tabindex="-1"><img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&amp;theme=neutral" alt="" width="250" loading="lazy" /></a>
      </div>
      </div>
  </div>
</section>

{{< faq >}}

<!-- Closing call to action -->
<section class="cell cta" id="get-started">
  <h2>Share localhost in one command.<span>No signup. No download.</span></h2>
  <div class="cta__actions">
    <div class="cmd">
      <input
        class="cmd__text"
        id="ctacommand"
        type="text"
        readonly
        value="ssh -p 443 -R0:localhost:8000 free.pinggy.io"
        aria-label="Command to start a tunnel"
      />
      <button
        class="cmd__copy"
        type="button"
        aria-label="Copy command to clipboard"
        onclick="copytoclipboard(this,'#ctacommand')"
      >
        <i class="bi bi-clipboard"></i>
      </button>
    </div>
    <a class="btn btn-outline-pinggy btn-lg" href="/docs/">
      Read the docs <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</section>

</main>
