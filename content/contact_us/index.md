---
 title: "Contact Us" 
 date: 2022-12-02T14:15:25+05:30 
 draft: false 
---

<div class="row" style="max-width: 800px; margin: 0 auto">
  <div class="col-lg-12 col-md-12 mb-4">
    <h1>Contact Us</h1>
    <p>
      Reach out for Support, Issue Reporting, and Feedback Feel free to send us an
      email or ping us on Discord if you need assistance, want to report any
      issues, or have valuable feedback to share. We're here to help!"
    </p>
  </div>

  <div class="col-lg-6 col-md-6">
    <div class="card p-4">
      <h2>Email</h2>
      <div class="d-flex flex-row bd-highlight justify-content-start">
        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
          <i class="bi bi-envelope"></i>
        </div>
        <div class="px-2 bd-highlight">
          <div class="feature-name">Email</div>
          <div class="feature-description">contact@pinggy.io</div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6 col-md-6">
    <div class="card p-4">
      <h2>Discord</h2>
      <div class="d-flex flex-row bd-highlight justify-content-start">
        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
          <i class="bi bi-discord"></i>
        </div>
        <div class="px-2 bd-highlight">
          <div class="feature-name">
            Discord Channel
            <a href="https://discord.com/channels/1102248461149147159" target="_blank">
              <i class="bi bi-arrow-up-right-square"></i>
            </a>
          </div>
          <div class="feature-description">
            <a href="https://discord.gg/KX5DpTs3xx" target="_blank">Invite link</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-4">
    <div class="col-lg-12 col-md-12">
      <div class="">
        <div id="my-reform"></div>
      </div>
    </div>
  </div>
</div>

<!-- FAQ section-->
<section class="py-5 border-top" id="faq" x-data="{ searchTerm: '' }">
  <div class="container my-5">
    <div class="my-3 row justify-content-center">
      <div class="col-lg-12">
        <h2 class="mb-5 text-center fw-light">Frequently Asked Questions</h2>
      </div>
    </div>
    <div class="row justify-content-center mb-3">
      <div class="col-lg-8">
        <input
          type="text"
          id="faqSearch"
          class="form-control"
          placeholder="Search..."
          x-model="searchTerm"
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="accordion" id="accordionFaq">
          <div
            class="accordion-item"
            x-show="$refs.faq1.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                The command uses SSH. Doesn't it open up my computer to threats?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq1">
                <p>
                  Pinggy relies on SSH remote port forwarding. The option
                  <code>-R 0:localhost:8000</code> in the command only implies
                  that connections to the public URL given by pinggy are
                  forwarded to your <code>localhost:8000</code>.
                </p>
                <p class="alert alert-dark bg-light bg-gradient">
                  No other port than the one specified by you can be accessed by
                  Pinggy or by anyone through the public URLs provided by
                  Pinggy.
                </p>
                <p>
                  You can read more about the <code>-R</code> option of openssh
                  client
                  <a
                    href="https://man7.org/linux/man-pages/man1/ssh.1.html"
                    target="_blank"
                    >here</a
                  >. If you are using a different ssh client, then refer to its
                  documentation.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq2.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingPassword">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePassword"
                aria-expanded="false"
                aria-controls="collapsePassword"
              >
                It is asking for password.
              </button>
            </h2>
            <div
              id="collapsePassword"
              class="accordion-collapse collapse"
              aria-labelledby="headingPassword"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq2">
                <p>
                  If the ssh command prompts you for a password you can just
                  press enter (a blank password). Or you can type in something
                  random and press enter.
                </p>
                <div class="alert alert-dark bg-light bg-gradient">
                  For long running tunnels with auto-reconnect, generate an ssh
                  key.
                  <br />
                  <b
                    >In your terminal / command prompt run:
                    <code>ssh-keygen</code></b
                  >
                  <br />Press Enter key (Return key) till the command finishes.
                  <br />
                  After this the ssh command will no longer ask for a password.
                </div>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq3.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingServerLocation">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServerLocation"
                aria-expanded="false"
                aria-controls="collapseServerLocation"
              >
                Where are Pinggy servers located?
              </button>
            </h2>
            <div
              id="collapseServerLocation"
              class="accordion-collapse collapse"
              aria-labelledby="headingServerLocation"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq3">
                <p>
                  <code>a.pinggy.io</code> is routed to the Pinggy server
                  nearest to your location. Currently we have our servers in
                  USA, Sweden, and Singapore.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq4.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                The URL changes after I restart the tunnel.
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq4">
                <p>
                  Pinggy's free plan has a tunnel timeout of 60 minutes. If the
                  tunnel is closed by you or reaches the time limit, starting a
                  new tunnel will generate a new URL.
                </p>
                <p>
                  To obtain a permanent or persistent URL, or to use your own
                  domain, you must subscribe to Pinggy Pro.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq5.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Does it work on all platforms: Linux, Windows, Mac, and Android?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq5">
                <p>
                  Yes. Current versions of Windows, Mac, as well as almost all
                  Linux distributions come with openssh client pre-installed.
                  Therefore Pinggy will just work out of the box.
                </p>
                <p>
                  To learn more about using Pinggy on Android read our
                  <a
                    href="https://pinggy.io/blog/host_website_on_android/"
                    target="_blank"
                    >blog post.</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq6.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How to use TCP and TLS tunnels?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq6">
                <p>
                  You can use TCP and TLS tunnels for free with Pinggy. Click on
                  "Advanced Settings" on the top of the homepage, and select
                  TCP.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq7.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                My tunnel breaks or stops working after a few minutes.
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq7">
                <p>
                  Read our guide on long running tunnels
                  <a
                    href="https://pinggy.io/docs/guides/long_running_tunnels/"
                    target="_blank"
                    >here</a
                  >.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq8.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingConnectionReset">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseConnectionReset"
                aria-expanded="false"
                aria-controls="collapseConnectionReset"
              >
                I am getting Connection closed / Connection reset error.
              </button>
            </h2>
            <div
              id="collapseConnectionReset"
              class="accordion-collapse collapse"
              aria-labelledby="headingConnectionReset"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq8">
                <p>
                  The most common reason for this is that an existing tunnel
                  with the same token is active.
                </p>
                <p>
                  <b>Terminate your existing tunnel with the same token.</b> You
                  can do so from the Active Tunnels option in the dashboard.
                </p>
                <p>
                  You can also use the <b>Force</b> option in the dashbaord.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            x-show="$refs.faq9.innerText.toLowerCase().includes(searchTerm.toLowerCase())"
          >
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Can Pinggy read my data?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionFaq"
            >
              <div class="accordion-body" x-ref="faq9">
                <p>
                  Pinggy does read tunnel traffic for providing the Web Debugger
                  feature.
                </p>
                <p>
                  <b>Use TLS tunnels for Zero trust mode</b>, where Pinggy
                  cannot read your data. In this case your traffic is end-to-end
                  encrypted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  window.Reform =
    window.Reform ||
    function () {
      (Reform.q = Reform.q || []).push(arguments);
    };
</script>
<script
  id="reform-script"
  async
  src="https://embed.reform.app/v1/embed.js"
></script>
<script>
  Reform("init", {
    url: "https://forms.reform.app/DtpE3m/feedback/noRstj",
    target: "#my-reform",
    background: "default",
  });
</script>
