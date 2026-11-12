---
title: "Pinggy CLI"
description: "Pinggy CLI runs robust, auto-reconnecting tunnels for HTTP(S), TCP, UDP and TLS, opens a remote terminal on the machine from your browser, and starts tunnels on boot. Install in one command on macOS, Linux and Windows, or with npm."
layout: landing
date: 2024-04-14T01:15:25+05:30
lastmod: 2026-11-04T12:02:00+05:30
draft: false
# Also emit /cli/version.json (latest CLI version) via the cliversion format.
outputs: ["HTML", "cliversion"]
---

<!-- The CLI page: a two-column hero, the install and download card
     (cli-downloads shortcode), then Example Usage. Same structure as
     before the redesign, in the /remote-terminal/ parts: the ruled frame,
     the hero grid, segmented OS switches, ink command panels and ruled
     cards. Page-only styles are in customization.css under "CLI page";
     DESIGN_GUIDELINES.md 7.25. Facts come from content/docs/cli.md. Keep
     every HTML block free of blank lines, or Goldmark ends the block and
     renders the rest as Markdown. -->

<main class="frame">

<!-- Hero: headline and lead on the left, the illustration on the right.
     Start on boot is a tunnel feature: the device agent does not come
     back after a reboot by itself. -->
<header class="cell hero hero--plain">
  <canvas id="grid-canvas" class="hero__grid" aria-hidden="true" data-scope="parent" data-cell="48" data-base-rgb="21, 21, 21" data-base-alpha="0.07" data-glow-radius="260" data-glow-peak="0.5" data-pulse-max="4" data-head="square"></canvas>
  <div class="hero__left">
    <h1 class="biggestheader">Pinggy CLI</h1>
    <p id="lead2">Robust, auto-reconnecting tunnels for HTTP(S), TCP, UDP and TLS. Start them on boot, and open a remote terminal on the machine from your browser.</p>
  </div>
  <div class="hero__right">
    <img src="/assets/heroImage.webp" class="img-fluid" width="1920" height="1080" alt="Pinggy Dev/Test Environment Gateway" />
  </div>
</header>

<!-- Install in One Command, Download and Run, Older versions -->
{{< cli-downloads >}}

<!-- Example usage: two stacked cards, then the docs link -->
<section class="cell" id="features">
  <div class="cli-col">
    <h2 class="cli-col__title">Example Usage</h2>
    <article class="cli-example">
      <span class="cli-example__icon"><i class="bi bi-window-stack" aria-hidden="true"></i></span>
      <h3>Use the same ssh command pattern!</h3>
      <p class="cli-example__label" id="cliExSshLabel">Suppose we want to use the CLI for the following SSH URL:</p>
      <div class="cmd">
        <input class="cmd__text" id="cliExSsh" type="text" readonly value="ssh -p 443 -R0:localhost:8080 -L4300:localhost:4300 TOKEN@a.pinggy.io" aria-labelledby="cliExSshLabel" />
        <button class="cmd__copy" type="button" aria-label="Copy the SSH command to clipboard" onclick="copytoclipboard(this,'#cliExSsh')"><i class="bi bi-clipboard"></i></button>
      </div>
      <p class="cli-example__label" id="cliExCliLabel">Just replace <code>ssh</code> with the CLI binary:</p>
      <div class="cmd">
        <input class="cmd__text" id="cliExCli" type="text" readonly value="pinggy -p 443 -R0:localhost:8080 -L4300:localhost:4300 TOKEN@a.pinggy.io" aria-labelledby="cliExCliLabel" />
        <button class="cmd__copy" type="button" aria-label="Copy the Pinggy CLI command to clipboard" onclick="copytoclipboard(this,'#cliExCli')"><i class="bi bi-clipboard"></i></button>
      </div>
    </article>
    <article class="cli-example">
      <span class="cli-example__icon"><i class="bi bi-hdd-stack" aria-hidden="true"></i></span>
      <h3>Run tunnels in the background</h3>
      <p class="cli-example__label">Every tunnel runs in a background daemon, so you can detach and manage it later:</p>
      <pre class="cli-code"><span class="cli-code__dim"># start a tunnel detached, then close the terminal</span>
pinggy -l https://localhost:8000 --b
pinggy ps
pinggy stop my-tunnel
pinggy attach my-tunnel</pre>
      <p class="cli-example__label" id="cliExBootLabel">Keep tunnels running across reboots with a system service:</p>
      <div class="cmd">
        <input class="cmd__text" id="cliExBoot" type="text" readonly value="pinggy daemon service-install" aria-labelledby="cliExBootLabel" />
        <button class="cmd__copy" type="button" aria-label="Copy the service install command to clipboard" onclick="copytoclipboard(this,'#cliExBoot')"><i class="bi bi-clipboard"></i></button>
      </div>
    </article>
    <div class="cli-docs">
      <a href="/docs/cli/" class="btn btn-pinggy-blue btn-lg">Visit the Pinggy CLI documentation <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
      <span>Commands, flags, and full reference</span>
    </div>
  </div>
</section>

</main>
