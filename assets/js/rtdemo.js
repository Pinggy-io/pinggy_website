/* Remote terminal demo (layouts/shortcodes/remote-terminal-demo.html, the
   stage on /remote-terminal/). Plays once when the stage scrolls into view:
   the install command is typed on the machine, the email sign-in runs, the
   link to Pinggy goes live and the dashboard in the browser opens shells on
   the machine, one tab at a time: `ls` in bash, then claude, then codex.
   After that it cycles the shell tabs, only while the stage is on screen;
   clicking a tab shows it and stops the cycle. Under reduced motion it
   draws the end state at once and never cycles. Returns at once on pages
   without the demo. */
(function () {
  var root = document.querySelector("[data-rt-demo]");
  if (!root) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var local = root.querySelector("[data-rt-local]");
  var remote = root.querySelector("[data-rt-remote]");
  var tabBar = root.querySelector("[data-rt-tabs]");
  var newTab = tabBar.querySelector(".shell-tab--new");
  var version = root.getAttribute("data-cli-version") || "";
  var qr = root.getAttribute("data-qr");

  function prompt(dir) {
    return (
      '<span class="t-prompt">you@devbox</span>:<span class="t-url">' +
      dir +
      "</span>$ "
    );
  }

  // A mark from the shortcode's hidden sprite.
  function mark(id, cls) {
    return (
      '<svg class="' + cls + '" aria-hidden="true"><use href="#' + id +
      '"></use></svg>'
    );
  }

  /* The machine's terminal. Output strings follow static/install.sh and
     `pinggy device login` as described in content/docs/devices/, which
     ends with a link and a QR code to the device's page. Trimmed to keep
     the window short: no download URL line, no approve-in-email hint. A typed line has
     `type`; `wait` is the pause after a line. The prompt is a bare
     `$` (the title bar names you@devbox) so the command fits on one line. */
  var TRANSCRIPT = [
    { html: '<span class="t-prompt">$</span> ', type: "curl -fsSL https://pinggy.io/install.sh | sh", speed: 22, wait: 200 },
    { html: "Installed pinggy " + version + " to ~/.pinggy/bin/pinggy", wait: 700 },
    { html: "&nbsp;", wait: 0 },
    { html: "Email: ", type: "you@example.com", speed: 36, wait: 200 },
    { html: "Sent a 6-digit code to you@example.com.", cls: "t-dim", wait: 800 },
    { html: "Code: ", type: "418207", speed: 95, wait: 300 },
    { link: true, html: '<span class="t-ok">&#10003;</span> Signed in. This machine is <b>devbox</b>.', wait: 300 },
    { html: '<span class="t-url">https://dashboard.pinggy.io/pinggy-devices</span>', wait: 150 },
    { html: qr ? '<img class="duo__qr" src="' + qr + '" alt="" width="111" height="111" />' : "", wait: 250 },
    { html: "Connected. Press Ctrl+C to disconnect.", cls: "t-dim", wait: 0 }
  ];

  /* Shells in the dashboard, opened in this order. Each types `cmd` at
     the prompt, then prints `lines`; `hold` is how long the tab stays up
     before the next one opens. The Claude Code and Codex screens follow
     their real layouts: Claude Code 2.1's mascot banner, `❯` prompt, `●`
     tool calls with `⎿` results and a tinted diff; Codex 0.166's boxed
     `>_ OpenAI Codex` header, `›` prompt and `•` actions. */
  var SHELLS = [
    {
      prog: "bash",
      icon: '<i class="bi bi-terminal"></i>',
      dir: "~/api",
      cmd: "ls",
      hold: 1300,
      lines: [
        'README.md  <span class="t-url">node_modules</span>  package.json  <span class="t-url">src</span>  <span class="t-url">test</span>',
        prompt("~/api") + '<span class="duo__caret"></span>'
      ]
    },
    {
      prog: "claude",
      icon: mark("rt-mark-claude", "shell-tab__mark t-claude"),
      dir: "~/api",
      cmd: "claude",
      hold: 3200,
      lines: [
        '<span class="cc-banner">' + mark("rt-mascot", "cc-mascot") +
          '<span><b>Claude Code</b> <span class="t-dim">v2.1.318</span><br>' +
          '<span class="t-dim">Opus 5.5 &middot; Claude Max</span><br>' +
          '<span class="t-dim">~/api</span></span></span>',
        "&nbsp;",
        '<span class="t-dim g">&#10095;</span> the login test fails on CI, fix it',
        '<span class="t-ok g">&#9679;</span> <b>Update</b>(src/auth/session.ts)',
        '  <span class="t-dim g">&#9151;</span>  <span class="t-del">12 - const TTL = 60</span>',
        '     <span class="t-add">12 + const TTL = 60 * 60</span>',
        '<span class="t-ok g">&#9679;</span> <b>Bash</b>(npm test -- auth)',
        '  <span class="t-dim g">&#9151;</span>  14 passed',
        '<span class="g">&#9679;</span> Sessions now last an hour instead of 60 seconds.'
      ]
    },
    {
      prog: "codex",
      icon: mark("rt-mark-openai", "shell-tab__mark"),
      dir: "~/web",
      cmd: "codex",
      hold: 3200,
      lines: [
        '<span class="cx-box"><b>&gt;_ OpenAI Codex</b> <span class="t-dim">(v0.166.0)</span><br>' +
          '<span class="t-dim">model:    </span> gpt-5.5 medium<span class="cx-hint">   <span class="t-dim">/model to change</span></span><br>' +
          '<span class="t-dim">directory:</span> ~/web</span>',
        "&nbsp;",
        '<span class="cx-user"><span class="t-dim g">&rsaquo;</span> add rate limiting to POST /login</span>',
        "&nbsp;",
        '<span class="t-dim g">&bull;</span> <b>Edited</b> src/middleware/rateLimit.ts (<span class="t-ok">+38</span> <span class="t-err">-2</span>)',
        '<span class="t-dim g">&bull;</span> <b>Ran</b> npm test',
        '  <span class="t-dim"><span class="g">&#9492;</span> 42 passed</span>',
        '<span class="t-dim g">&bull;</span> POST /login now allows 5 tries a minute per IP.'
      ]
    }
  ];

  var runId = 0;
  var timers = [];
  var cycleTimer = null;
  var active = 0;
  var visible = false;
  var started = false;
  var ready = false;
  var pinned = false;

  /* A pause that rejects once a newer run supersedes this one. */
  function wait(ms) {
    var id = runId;
    return new Promise(function (resolve, reject) {
      timers.push(
        setTimeout(function () {
          if (id === runId) resolve();
          else reject(new Error("superseded"));
        }, ms)
      );
    });
  }

  function stopAll() {
    runId++;
    timers.forEach(clearTimeout);
    timers = [];
    stopCycle();
  }

  function addLine(html, cls) {
    var el = document.createElement("div");
    el.className = "duo__line" + (cls ? " " + cls : "");
    el.innerHTML = html;
    local.appendChild(el);
    local.scrollTop = local.scrollHeight;
    return el;
  }

  function typeInto(el, text, speed) {
    var out = el.querySelector("[data-typed]");
    var i = 0;
    function next() {
      if (i >= text.length) return Promise.resolve();
      out.textContent += text.charAt(i++);
      // A little jitter so the typing reads as a person, not a ticker.
      return wait(speed + Math.floor(Math.random() * speed * 0.7)).then(next);
    }
    return next();
  }

  function addTab(i) {
    var t = document.createElement("span");
    t.className = "shell-tab";
    t.setAttribute("data-i", i);
    t.innerHTML =
      SHELLS[i].icon + "<b>" + SHELLS[i].prog + '</b><span class="shell-tab__dir">' +
      SHELLS[i].dir + "</span>";
    tabBar.insertBefore(t, newTab);
  }

  function selectTab(i) {
    active = i;
    tabBar.querySelectorAll("[data-i]").forEach(function (t) {
      t.classList.toggle("is-active", Number(t.getAttribute("data-i")) === i);
    });
  }

  function lineHtml(html, delay) {
    return delay == null
      ? '<div class="duo__line">' + html + "</div>"
      : '<div class="duo__line duo__line--in" style="animation-delay: ' +
          delay.toFixed(2) + 's;">' + html + "</div>";
  }

  /* Draw shell i whole: its command line, then its output. Staggered when
     `animate`, as the tab cycle does; plain for clicks and reduced motion. */
  function showShell(i, animate) {
    selectTab(i);
    var s = SHELLS[i];
    remote.innerHTML = [prompt(s.dir) + s.cmd]
      .concat(s.lines)
      .map(function (l, n) {
        return lineHtml(l, animate ? n * 0.06 : null);
      })
      .join("");
  }

  /* Open shell i as a new tab: type its command at the prompt, then let
     the output fall in line by line. */
  function openShell(i) {
    var s = SHELLS[i];
    addTab(i);
    selectTab(i);
    remote.innerHTML = lineHtml(
      prompt(s.dir) + '<span data-typed></span><span class="duo__caret"></span>'
    );
    var first = remote.firstChild;
    return wait(300)
      .then(function () {
        return typeInto(first, s.cmd, 55);
      })
      .then(function () {
        return wait(250);
      })
      .then(function () {
        var c = first.querySelector(".duo__caret");
        if (c) c.parentNode.removeChild(c);
        remote.insertAdjacentHTML(
          "beforeend",
          s.lines
            .map(function (l, n) {
              return lineHtml(l, n * 0.06);
            })
            .join("")
        );
        return wait(s.hold);
      });
  }

  function startCycle() {
    stopCycle();
    if (reduce || !ready || !visible || pinned) return;
    cycleTimer = setInterval(function () {
      showShell((active + 1) % SHELLS.length, true);
    }, 3800);
  }

  function stopCycle() {
    clearInterval(cycleTimer);
    cycleTimer = null;
  }

  function reset() {
    ready = false;
    pinned = false;
    local.innerHTML = "";
    remote.innerHTML = "";
    tabBar.querySelectorAll("[data-i]").forEach(function (t) {
      t.parentNode.removeChild(t);
    });
    root.classList.remove("is-linked", "is-online", "is-ready");
  }

  function markReady() {
    ready = true;
    root.classList.add("is-ready");
  }

  function play() {
    stopAll();
    reset();
    var chain = wait(400);
    TRANSCRIPT.forEach(function (row) {
      chain = chain.then(function () {
        if (row.link) root.classList.add("is-linked");
        if (!row.type) {
          addLine(row.html, row.cls);
          return wait(row.wait);
        }
        var el = addLine(
          row.html + '<span data-typed></span><span class="duo__caret"></span>',
          row.cls
        );
        return wait(350)
          .then(function () {
            return typeInto(el, row.type, row.speed);
          })
          .then(function () {
            return wait(row.wait);
          })
          .then(function () {
            var c = el.querySelector(".duo__caret");
            if (c) c.parentNode.removeChild(c);
          });
      });
    });
    SHELLS.forEach(function (_, i) {
      chain = chain.then(function () {
        if (i > 0) return openShell(i);
        // The device comes online, then the first shell opens.
        return wait(500)
          .then(function () {
            root.classList.add("is-online");
            return wait(350);
          })
          .then(function () {
            return openShell(0);
          });
      });
    });
    chain
      .then(function () {
        markReady();
        startCycle();
      })
      .catch(function () {
        /* A newer run took over. */
      });
  }

  function drawEndState() {
    stopAll();
    reset();
    TRANSCRIPT.forEach(function (row) {
      addLine(row.html + (row.type || ""), row.cls);
    });
    root.classList.add("is-linked", "is-online");
    SHELLS.forEach(function (_, i) {
      addTab(i);
    });
    showShell(1, false);
    markReady();
  }

  function begin() {
    if (started) return;
    started = true;
    if (reduce) drawEndState();
    else play();
  }

  // Once every shell is open, a click on a tab shows it and stops the cycle.
  tabBar.addEventListener("click", function (e) {
    var t = e.target.closest("[data-i]");
    if (!t || !ready) return;
    pinned = true;
    stopCycle();
    showShell(Number(t.getAttribute("data-i")), false);
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && !started) begin();
        else if (visible) startCycle();
        else stopCycle();
      },
      { threshold: 0.35 }
    ).observe(root);
  } else {
    visible = true;
    begin();
  }
})();
