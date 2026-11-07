---
title: "Remote Terminal in Your Browser - Pinggy"
description: "Open a terminal on any Mac, Linux or Windows machine from your browser. One install command, no SSH server, no open port. Works behind NAT, CGNAT and firewalls."
layout: landing
date: 2026-11-04T12:00:00+05:30
lastmod: 2026-11-07T12:00:00+05:30
draft: false
---

<!-- Landing page for Pinggy Devices (the remote terminal). Same ruled frame
     as the homepage: a centered hero, the demo stage, splits, pillars, FAQ,
     closing CTA. The page-only pieces (launch card, demo, device map,
     spec table) are in customization.css under "Remote terminal landing"
     and DESIGN_GUIDELINES.md 7.24. Facts come from content/docs/devices/:
     keep the two in sync. Keep every HTML block free of blank lines, or
     Goldmark ends the block and renders the rest as Markdown. -->

<main class="frame">

<!-- Hero: one centered column. Headline, a short lead, three points on
     what it is for, then the launch card: the install command for the
     visitor's OS, ready to copy (macOS and Linux get their own tabs, though
     they share the same command). The demo stage right below shows what
     happens after it runs. Shell lifetime claims follow content/docs/devices/:
     a shell outlives the browser tab, so say "keeps running", not "forever". -->
<header class="cell hero hero--center">
  <canvas id="grid-canvas" class="hero__grid" aria-hidden="true" data-scope="parent" data-cell="48" data-base-rgb="21, 21, 21" data-base-alpha="0.07" data-glow-radius="260" data-glow-peak="0.5" data-pulse-max="4" data-head="square"></canvas>
  <h1 class="biggestheader">Instant Remote Terminals <span class="hero__title-sub">in your browser.</span></h1>
  <p id="lead2">Run one command on any machine, then open its shell from your browser. Works behind NAT and firewalls.</p>
  <ul class="hero__points">
    <li class="hero__point--no-phone"><span class="hero__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2" /><path d="M6.5 10l2.5 2-2.5 2M11 15h2.5" /><path class="ac-fill" d="M17 6.9l.75 2.1 2.1.75-2.1.75L17 12.6l-.75-2.1-2.1-.75 2.1-.75z" /></svg></span>Run Claude Code, Codex or any long task</li>
    <li class="hero__point--no-phone"><span class="hero__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path class="dash" d="M4.75 4.75h14.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2zM2.75 8.25h18.5" /><path class="ac" d="M1.5 14h5l1.75-3.5 2.5 6.5 2-4.5 1.25 1.5h8.5" /></svg></span>Close the browser, it keeps running</li>
    <li><span class="hero__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2" /><path d="M2.75 8.25h18.5" /><path class="ac" d="M16.5 10.75v2a2 2 0 0 1-2 2H8.5M10.75 12.5L8.5 14.75 10.75 17" /></svg></span>Come back to the same screen</li>
  </ul>
  <div class="hero__launch" x-data="{ os: (typeof getOS === 'function' && { windows: 'win', linux: 'linux' }[getOS()]) || 'mac' }">
  <div class="launch">
    <div class="launch__head">
      <h2 class="launch__title" id="rtLaunchTitle">Start a remote terminal</h2>
      <div class="segmented" role="group" aria-label="Operating system of the machine">
        <button type="button" aria-pressed="true" :aria-pressed="(os === 'mac').toString()" @click="os = 'mac'"><i class="bi bi-apple" aria-hidden="true"></i>macOS</button>
        <button type="button" aria-pressed="false" :aria-pressed="(os === 'linux').toString()" @click="os = 'linux'"><svg class="icon-linux" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .6c1.95 0 3.15 1.5 3.15 3.6 0 .95.3 1.65.9 2.5 1.05 1.5 1.75 3 1.75 4.6 0 2.2-2.35 3.45-5.8 3.45s-5.8-1.25-5.8-3.45c0-1.6.7-3.1 1.75-4.6.6-.85.9-1.55.9-2.5C4.85 2.1 6.05.6 8 .6ZM8 6.95c1.5 0 2.85 2.05 2.85 4.35 0 1.6-1.25 2.5-2.85 2.5s-2.85-.9-2.85-2.5c0-2.3 1.35-4.35 2.85-4.35ZM6.8 2.95a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3Zm2.4 0a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3ZM6.75 5h2.5L8 6.25Z"/><path d="M.9 14.35c.45-.85 2.45-1.2 3.75-.55.8.4.85 1.2.15 1.5-1.15.5-3.05.55-3.7.1-.3-.25-.35-.65-.2-1.05Zm14.2 0c-.45-.85-2.45-1.2-3.75-.55-.8.4-.85 1.2-.15 1.5 1.15.5 3.05.55 3.7.1.3-.25.35-.65.2-1.05Z"/></svg>Linux</button>
        <button type="button" aria-pressed="false" :aria-pressed="(os === 'win').toString()" @click="os = 'win'"><i class="bi bi-windows" aria-hidden="true"></i>Windows</button>
      </div>
    </div>
    <div class="cmd">
      <span class="cmd__prompt" aria-hidden="true" x-text="os === 'win' ? 'PS>' : '$'">$</span>
      <input class="cmd__text" id="rtInstallCmd" type="text" readonly value="curl -fsSL https://pinggy.io/install.sh | sh" :value="os === 'win' ? 'irm https://pinggy.io/install.ps1 | iex' : 'curl -fsSL https://pinggy.io/install.sh | sh'" aria-labelledby="rtLaunchTitle" />
      <button class="cmd__copy" type="button" aria-label="Copy install command to clipboard" onclick="copytoclipboard(this,'#rtInstallCmd')"><i class="bi bi-clipboard"></i></button>
    </div>
  </div>
  <p class="launch__meta">
    <span x-text="{ mac: 'Paste it in Terminal on the Mac', linux: 'Paste it in a terminal on the machine', win: 'Paste it in PowerShell on the machine' }[os]">Paste it in Terminal on the Mac</span>
    <span>No sudo or admin rights</span>
    <span>Free for 1 device</span>
  </p>
  </div>
</header>

{{< remote-terminal-demo >}}

<!-- Device map beside a video. Left: what you can do with a device, as a
     compact tree. The device (cycling through a Pi, a cloud VM and a home
     PC: a CSS crossfade, reduced motion shows the Pi) dials down to
     Pinggy, and from Pinggy four arrows branch into one ruled list. Below
     768px only the list stays. The agent marks: Claude (Simple Icons), the
     OpenAI mark Codex ships under, Gemini's spark. Right: the Pinggy
     Remote Terminals video (YouTube dL8CL37-cSo) as a click-to-load video card:
     the button shows a self-hosted poster and swaps itself for a
     youtube-nocookie iframe on click, so YouTube loads nothing until play.
     Styles: "Device map" in customization.css, DESIGN_GUIDELINES.md 7.24. -->
<section class="cell split" id="control">
  <div class="split__text">
    <span class="eyebrow">Pinggy Devices</span>
    <h2>Monitor and control your devices.</h2>
    <div class="devmap">
      <div class="devmap__rail">
        <div class="devmap__src">
        <figure class="devmap__device">
          <figcaption class="visually-hidden">Runs on a Raspberry Pi, a cloud VM or a home PC</figcaption>
          <div class="devmap__dev" aria-hidden="true">
            <svg class="devmap__board" viewBox="0 0 124 86">
              <defs><pattern id="devmapPins" width="3.2" height="3.2" patternUnits="userSpaceOnUse"><rect x=".6" y=".6" width="2" height="2" /></pattern></defs>
              <rect class="b-board" x="2" y="6" width="108" height="72" rx="5" />
              <circle class="b-hole" cx="8.5" cy="12.5" r="2.4" /><circle class="b-hole" cx="80" cy="12.5" r="2.4" /><circle class="b-hole" cx="8.5" cy="71.5" r="2.4" /><circle class="b-hole" cx="80" cy="71.5" r="2.4" />
              <rect class="b-header" x="15" y="9" width="58" height="7.4" /><rect x="15.4" y="9.4" width="57.6" height="6.4" fill="url(#devmapPins)" />
              <rect class="b-chip" x="28" y="31" width="22" height="22" rx="1.5" /><rect class="b-die" x="32" y="35" width="14" height="14" rx="1" />
              <rect class="b-ram" x="56" y="35" width="13" height="14" rx="1" />
              <rect class="b-port" x="12" y="50" width="9" height="14" rx="1" />
              <rect class="b-port" x="94" y="10" width="26" height="16" rx="1" /><rect class="b-port" x="94" y="30" width="26" height="16" rx="1" /><rect class="b-port" x="94" y="51" width="26" height="21" rx="1" />
              <path class="b-slot" d="M99 15h16M99 35h16M100 58h14v8h-14z" />
              <rect class="b-port" x="14" y="73" width="10" height="9" rx="2" /><rect class="b-port" x="31" y="74" width="8" height="7" rx="1" /><rect class="b-port" x="44" y="74" width="8" height="7" rx="1" />
            </svg>
            <b>raspberrypi</b>
          </div>
          <div class="devmap__dev" aria-hidden="true">
            <svg class="devmap__board" viewBox="0 0 124 86">
              <g class="b-cloud-out"><rect x="16" y="44" width="92" height="30" rx="15" /><circle cx="44" cy="44" r="18" /><circle cx="70" cy="34" r="23" /><circle cx="94" cy="50" r="14" /></g>
              <g class="b-cloud-in"><rect x="16" y="44" width="92" height="30" rx="15" /><circle cx="44" cy="44" r="18" /><circle cx="70" cy="34" r="23" /><circle cx="94" cy="50" r="14" /></g>
              <rect class="b-port" x="40" y="38" width="44" height="12" rx="1.5" /><rect class="b-port" x="40" y="54" width="44" height="12" rx="1.5" />
              <circle class="b-chip" cx="46" cy="44" r="1.8" /><circle class="b-chip" cx="46" cy="60" r="1.8" />
              <path class="b-slot" d="M56 44h22M56 60h22" />
            </svg>
            <b>cloud-vm</b>
          </div>
          <div class="devmap__dev" aria-hidden="true">
            <svg class="devmap__board" viewBox="0 0 124 86">
              <rect class="b-board" x="20" y="8" width="84" height="56" rx="4" />
              <rect class="b-screen" x="25" y="13" width="74" height="46" rx="1" />
              <path class="b-text b-prompt" d="M31 22h5" /><path class="b-text" d="M40 22h18M31 29h28M31 36h14" />
              <path class="b-port" d="M8 64h108l-5 9H13z" />
              <path class="b-slot" d="M54 64v2.5h16V64" />
            </svg>
            <b>home-pc</b>
          </div>
        </figure>
          <span class="devmap__link" aria-hidden="true"></span>
        </div>
        <div class="devmap__hub" aria-hidden="true">Pinggy</div>
      </div>
      <ol class="devmap__points">
        <li class="devmap__point">
          <span class="devmap__icon"><i class="bi bi-activity" aria-hidden="true"></i></span>
          <h3>CPU, memory &amp; other stats</h3>
          <div class="devmap__art" aria-hidden="true">
            <span class="devmap__stat">CPU<span class="meter"><span style="--v: 14%"></span></span>14%</span>
            <span class="devmap__stat">RAM<span class="meter"><span style="--v: 38%"></span></span>38%</span>
          </div>
        </li>
        <li class="devmap__point">
          <span class="devmap__icon"><i class="bi bi-terminal" aria-hidden="true"></i></span>
          <h3>Run AI agents and long jobs</h3>
          <div class="devmap__art devmap__art--chips">
            <span class="devmap__mark devmap__mark--claude" role="img" aria-label="Claude Code" title="Claude Code"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4.714 15.956 4.718-2.648.079-.23-.08-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.57-.121-.535-.704.055-.353.48-.321.685.06 1.518.104 2.277.157 1.651.098 2.447.255h.389l.054-.158-.133-.097-.103-.098-2.356-1.596-2.55-1.688-1.336-.972-.722-.491L2 6.223l-.158-1.008.656-.722.88.06.224.061.893.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.644-1.032-.17-.619a3 3 0 0 1-.103-.729L6.287.133 6.7 0l.995.134.42.364.619 1.415L9.735 4.14l1.555 3.03.455.898.243.832.09.255h.159V9.01l.127-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.558 2.903-.365 1.942h.213l.243-.242.983-1.306 1.652-2.064.728-.82.85-.904.547-.431h1.032l.759 1.129-.34 1.166-1.063 1.347-.88 1.142-1.263 1.7-.79 1.36.074.11.188-.02 2.853-.606 1.542-.28 1.84-.315.832.388.09.395-.327.807-1.967.486-2.307.462-3.436.813-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.08.485-1.213.62-1.64-.389-3.825-.91-1.31-.329h-.183v.11l1.093 1.068 2.003 1.81 2.508 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.343 3.521.122 1.08-.17.353-.607.213-.668-.122-1.372-1.924-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589 2.386-3.036 1.439-1.882.929-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312Z" /></svg></span>
            <span class="devmap__mark" role="img" aria-label="Codex" title="Codex"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" /></svg></span>
            <span class="devmap__mark" role="img" aria-label="Gemini CLI" title="Gemini CLI"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" /></svg></span>
            <code>npm run dev</code>
          </div>
        </li>
        <li class="devmap__point">
          <span class="devmap__icon"><i class="bi bi-window-x" aria-hidden="true"></i></span>
          <h3>Close the tab. It keeps running.</h3>
          <div class="devmap__art" aria-hidden="true"><span class="chip">running</span>tab closed 2 hours ago</div>
        </li>
        <li class="devmap__point">
          <span class="devmap__icon"><i class="bi bi-globe2" aria-hidden="true"></i></span>
          <h3>Open tunnels anytime</h3>
          <div class="devmap__art devmap__art--chips"><span class="devmap__tag">HTTP(S)</span><span class="devmap__tag">TCP</span><span class="devmap__tag">UDP</span><span class="devmap__tag">TLS</span></div>
        </li>
      </ol>
    </div>
  </div>
  <figure class="spec-card split__media">
    <figcaption class="spec-card__head">
      <span>Video: Instant remote terminals in your browser</span>
      <span class="spec-card__meta">1:14</span>
    </figcaption>
    <div class="spec-card__body">
      <div class="videocontainer ratio ratio-16x9">
        <button type="button" class="videoplay" data-yt="dL8CL37-cSo" aria-label="Play video: Get instant remote terminals in your browser" onclick="var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+this.dataset.yt+'?autoplay=1&amp;rel=0';f.title='Get Instant Remote Terminals in your browser - Pinggy Remote Terminals';f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';f.referrerPolicy='strict-origin-when-cross-origin';f.allowFullscreen=true;this.parentNode.classList.add('is-playing');this.replaceWith(f);f.focus();">
          <img src="/assets/remote-terminal-launch-poster.webp" alt="" width="1280" height="720" loading="lazy" decoding="async" />
        </button>
      </div>
    </div>
  </figure>
</section>

<!-- Use cases -->
<section class="cell cell--flush" id="use-cases">
  <div class="cell__head">
    <span class="eyebrow">Use cases</span>
    <h2>Now you don't need to SSH.</h2>
  </div>
  <div class="pillars">
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-cpu" aria-hidden="true"></i>01</span>
      <h3>Raspberry Pi and IoT</h3>
      <p class="pillar__sub">Behind home routers and CGNAT</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span>Reach a Pi running Home Assistant or Pi-hole from anywhere.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>No port forwarding on the router.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Works on 4G and 5G links, where the carrier's NAT blocks inbound connections.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-hdd-rack" aria-hidden="true"></i>02</span>
      <h3>Servers and cloud VMs</h3>
      <p class="pillar__sub">Every inbound port closed</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span>No <code>sshd</code> on the internet and no port 22 for bots to find.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>No SSH keys to copy between laptops.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Live CPU, load and memory next to the shell.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-box-seam" aria-hidden="true"></i>03</span>
      <h3>CI runners and containers</h3>
      <p class="pillar__sub">No keyboard needed</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span>A token install from the dashboard that asks no questions.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Works in CI jobs and in <code>docker run</code> without <code>-t</code>.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Get a shell on a runner to see why a job fails.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-house" aria-hidden="true"></i>04</span>
      <h3>Home lab</h3>
      <p class="pillar__sub">NAS boxes, mini PCs, old laptops</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span>All your machines in one list, each with its own page.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Start and stop tunnels to the services they run.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-life-preserver" aria-hidden="true"></i>05</span>
      <h3>Remote support</h3>
      <p class="pillar__sub">Help someone on another network</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span>Send them one install command with a device token from your dashboard.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Their machine shows up in your account. No email or code on their side.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>Delete the device when you're done, and its token stops working.</span></li>
      </ul>
    </article>
    <article class="pillar">
      <span class="pillar__n"><i class="bi bi-windows" aria-hidden="true"></i>06</span>
      <h3>Windows PCs</h3>
      <p class="pillar__sub">PowerShell or cmd.exe</p>
      <ul class="featurelist">
        <li><i class="bi bi-check2-circle me-2"></i><span>One PowerShell command to install.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>No administrator rights needed.</span></li>
        <li><i class="bi bi-check2-circle me-2"></i><span>The shell runs as the user who started the agent.</span></li>
      </ul>
    </article>
  </div>
</section>

<!-- Security -->
<section class="cell split" id="security">
  <div class="split__text">
    <span class="eyebrow">Security</span>
    <h2>No open ports, secure by design.</h2>
    <p class="prose">
      The agent makes one outbound connection and accepts none. There is
      no SSH server to patch and nothing on the machine for a scanner to
      knock on.
    </p>
    <ul class="featurelist">
      <li><i class="bi bi-check2-circle me-2"></i><span>The device token is saved in <code>device.json</code>, readable only by your user on macOS and Linux.</span></li>
      <li><i class="bi bi-check2-circle me-2"></i><span>The agent never logs what you type in a shell.</span></li>
      <li><i class="bi bi-check2-circle me-2"></i><span>The screen copy that redraws a reopened tab stays in memory and is gone when the shell ends.</span></li>
      <li><i class="bi bi-check2-circle me-2"></i><span>Revoke a machine by deleting it or rotating its token.</span></li>
      <li><i class="bi bi-check2-circle me-2"></i><span>Anyone signed in to your Pinggy account can open a shell on your devices, so turn on 2-factor authentication.</span></li>
    </ul>
    <div class="split__actions">
      <a class="link-rule" href="/docs/devices/#security">
        Security details <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
  <figure class="spec-card split__media">
    <figcaption class="spec-card__head">
      <span>Activity log</span>
      <span class="spec-card__meta">raspberrypi</span>
    </figcaption>
    <div class="spec-card__body">
      <div class="spec-table-wrap">
        <table class="spec-table">
          <thead><tr><th scope="col">Time</th><th scope="col">Event</th><th scope="col">Source IP</th></tr></thead>
          <tbody>
            <tr><td class="num">14:02</td><td>Shell opened</td><td class="num">203.0.113.24</td></tr>
            <tr><td class="num">13:41</td><td>Tunnel <b>homeassistant</b> restarted</td><td class="num">203.0.113.24</td></tr>
            <tr><td class="num">13:40</td><td>Agent connected</td><td class="num">198.51.100.7</td></tr>
            <tr><td class="num">09:12</td><td>Shell closed after 30 min idle</td><td class="num">-</td></tr>
            <tr><td class="num">08:30</td><td>Shell opened</td><td class="num">192.0.2.61</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </figure>
</section>

<!-- FAQ: same markup and styles as the homepage FAQ shortcode -->
<section class="cell faq" id="faq" x-data="{ searchTerm: '' }">
  <div class="faq__head">
    <h2>Frequently Asked Questions</h2>
    <input type="text" id="faqSearch" class="form-control" placeholder="Search..." aria-label="Search the FAQ" x-model="searchTerm" />
  </div>
  <div class="faq__list">
    <div class="accordion" id="accordionRtFaq">
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH1"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq1" aria-expanded="false" aria-controls="rtFaq1">Do I need an SSH server on the machine?</button></h3>
        <div id="rtFaq1" class="accordion-collapse collapse" aria-labelledby="rtFaqH1" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>No. The Pinggy CLI starts the shell itself. Nothing on the machine listens for incoming connections, so there is no <code>sshd</code> to install and no port 22 to open.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH2"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq2" aria-expanded="false" aria-controls="rtFaq2">Does it work behind NAT, CGNAT or a firewall?</button></h3>
        <div id="rtFaq2" class="accordion-collapse collapse" aria-labelledby="rtFaqH2" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>Yes, as long as the machine can make outbound connections to Pinggy. The agent dials out and keeps that connection open, and your browser reaches the shell through the dashboard. You don't need a public IP or any router change.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH3"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq3" aria-expanded="false" aria-controls="rtFaq3">Which user does the shell run as?</button></h3>
        <div id="rtFaq3" class="accordion-collapse collapse" aria-labelledby="rtFaqH3" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>The user who ran <code>pinggy</code>, with that user's permissions. On macOS and Linux it is a shell listed in <code>/etc/shells</code>. On Windows it is PowerShell or <code>cmd.exe</code>.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH4"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq4" aria-expanded="false" aria-controls="rtFaq4">What happens when I close the browser tab?</button></h3>
        <div id="rtFaq4" class="accordion-collapse collapse" aria-labelledby="rtFaqH4" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>The shell keeps running. Open the device's Terminal tab again and the screen is redrawn as you left it. The same happens when the machine's connection drops for a while.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH5"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq5" aria-expanded="false" aria-controls="rtFaq5">How long does a shell stay open?</button></h3>
        <div id="rtFaq5" class="accordion-collapse collapse" aria-labelledby="rtFaqH5" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>Until you close it or type <code>exit</code>. It also ends after 30 minutes with no activity, after 8 hours whatever its activity, and when the agent stops.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH6"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq6" aria-expanded="false" aria-controls="rtFaq6">How do I keep the machine connected after I close the terminal?</button></h3>
        <div id="rtFaq6" class="accordion-collapse collapse" aria-labelledby="rtFaqH6" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>Run <code>pinggy device connect -b</code>. The agent then runs in the background in the Pinggy CLI daemon. It stops with <code>pinggy device stop</code> and when the machine reboots. After a reboot, run the same command again: the token is saved, so it asks nothing.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH7"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq7" aria-expanded="false" aria-controls="rtFaq7">Does Pinggy record what I type?</button></h3>
        <div id="rtFaq7" class="accordion-collapse collapse" aria-labelledby="rtFaqH7" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>The agent never logs what you type in a shell. The copy of the screen that redraws a reopened tab is kept in memory only, and it is gone when the shell ends.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH8"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq8" aria-expanded="false" aria-controls="rtFaq8">Does it run on Alpine Linux?</button></h3>
        <div id="rtFaq8" class="accordion-collapse collapse" aria-labelledby="rtFaqH8" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>The Linux binaries need glibc, as on Debian, Ubuntu and Fedora. On Alpine and other musl-based systems, install with <code>npm install -g pinggy</code>, then run <code>pinggy device login</code>.</p></div>
        </div>
      </div>
      <div class="accordion-item" x-show="$el.textContent.toLowerCase().includes(searchTerm.toLowerCase())">
        <h3 class="accordion-header" id="rtFaqH9"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rtFaq9" aria-expanded="false" aria-controls="rtFaq9">How do I take away access to a machine?</button></h3>
        <div id="rtFaq9" class="accordion-collapse collapse" aria-labelledby="rtFaqH9" data-bs-parent="#accordionRtFaq">
          <div class="accordion-body"><p>Delete the device, or rotate its token, in the dashboard. <code>pinggy device remove</code> only deletes the token from the machine, and the device stays in your account.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Closing call to action -->
<section class="cell cta" id="get-started">
  <h2>Add a machine in one command.<span>Open its terminal from anywhere.</span></h2>
  <div class="cta__actions">
    <div class="cmd">
      <input class="cmd__text" id="rtCtaCmd" type="text" readonly value="curl -fsSL https://pinggy.io/install.sh | sh" aria-label="Command to add this machine as a Pinggy device" />
      <button class="cmd__copy" type="button" aria-label="Copy command to clipboard" onclick="copytoclipboard(this,'#rtCtaCmd')"><i class="bi bi-clipboard"></i></button>
    </div>
    <a class="btn btn-outline-pinggy btn-lg" href="/docs/devices/">
      Read the docs <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</section>

</main>
