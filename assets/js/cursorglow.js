/* Cursor-tracked grid glow + animated pulses.
   Renders the page background grid in a fixed-viewport canvas.

   Layer 1: grid is stroked with a radial gradient centered at the cursor,
   so each pixel of every line is colored by its distance from the cursor.
   Bright brand-500 at the cursor → dim ink-950 (low alpha) far away.

   Layer 2: animated "pulses" travel along random grid lines (horizontal or
   vertical) with a comet tail, fade in/out, then die. Composited with
   'lighter' for an additive glow effect.

   Layer 3: a destination-out vertical gradient fades the bottom of the
   canvas (keeps the grid emphasized in the upper portion of the viewport).

   Scroll: --canvas-opacity is updated on scroll so the whole grid fades
   out smoothly as the user moves past the hero.

   Reduced-motion: pulses are disabled. Cursor glow still tracks (it's
   a passive effect, not motion). Touch (hover: none) skips mousemove.

   Two modes, picked by the canvas's data-scope attribute:
   - default (blog, partials/grid_canvas.html): fills the viewport, fades
     with --canvas-opacity on scroll, bottom fade drawn in the canvas.
   - data-scope="parent" (homepage hero): fills its positioned parent,
     skips the first row and column so no line doubles the parent's own
     border, pauses while the parent is off screen, and leaves the fade to
     a CSS mask on the canvas.
   Optional data-* settings override the defaults below: cell, base-rgb,
   base-alpha, glow-radius, glow-peak, pulse-max, head ("round"/"square"). */
(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  function init() {
    // Skip on small screens - CSS hides the canvas at <768px and there's
    // no point running the draw loop or attaching listeners.
    if (window.innerWidth < 768) return;

    var canvas = document.getElementById("grid-canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    function opt(name, fallback) {
      var v = canvas.getAttribute("data-" + name);
      return v === null || v === "" ? fallback : v;
    }
    function numOpt(name, fallback) {
      var v = parseFloat(opt(name, ""));
      return isNaN(v) ? fallback : v;
    }

    var scoped = opt("scope", "") === "parent";
    var host = scoped ? canvas.parentElement : null;
    if (scoped && !host) return;

    // --- config --------------------------------------------------------
    var CELL = numOpt("cell", 35);
    var GLOW_RADIUS = numOpt("glow-radius", 320);
    var GLOW_PEAK = numOpt("glow-peak", 0.95); // alpha at the cursor
    var EASE = 0.06;
    var SCROLL_FADE_END = 700;            // px scrolled where canvas hits 0 opacity

    var GLOW_RGB = "91, 134, 229";        // --brand-500
    var BASE_RGB = opt("base-rgb", "15, 23, 42"); // ink-950
    var BASE_ALPHA = numOpt("base-alpha", 0.07);

    var PULSE_SPAWN_MS = 520;             // avg spawn interval
    var PULSE_MAX = numOpt("pulse-max", 5);
    var SQUARE_HEAD = opt("head", "round") === "square";
    // First grid line: scoped canvases skip line 0, which would sit right
    // against the parent's border and read as a doubled rule.
    var FIRST = scoped ? 1 : 0;
    var PULSE_TAIL_MIN = 130;             // visible tail length
    var PULSE_TAIL_MAX = 230;
    var PULSE_TRAVEL_MIN = 110;           // how far the head moves
    var PULSE_TRAVEL_MAX = 240;
    var PULSE_DURATION_MIN = 3800;
    var PULSE_DURATION_MAX = 6500;

    // --- state ---------------------------------------------------------
    var reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var noHover =
      window.matchMedia && window.matchMedia("(hover: none)").matches;

    var width = 0;
    var height = 0;
    var dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    var targetX, targetY, currentX, currentY;
    var pulses = [];
    var lastSpawn = 0;
    var rafId = null;
    var root = document.documentElement;
    // Mirrors --canvas-opacity; the draw loop self-suspends at 0 to save
    // GPU when the canvas is fully faded out past the hero.
    var canvasOpacity = 1;

    // --- sizing --------------------------------------------------------
    function resize() {
      width = scoped ? host.clientWidth : window.innerWidth;
      height = scoped ? host.clientHeight : window.innerHeight;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // --- pulses --------------------------------------------------------
    function spawnPulse() {
      if (pulses.length >= PULSE_MAX) return;
      var orient = Math.random() < 0.5 ? "h" : "v";
      var lineCount, axisExtent;
      if (orient === "h") {
        lineCount = Math.max(1, Math.floor(height / CELL));
        axisExtent = width;
      } else {
        lineCount = Math.max(1, Math.floor(width / CELL));
        axisExtent = height;
      }

      // Bias horizontal lines toward the top (visible area before fade-out).
      var lineIndex;
      if (orient === "h") {
        lineIndex = Math.floor(Math.pow(Math.random(), 2.2) * lineCount);
      } else {
        lineIndex = Math.floor(Math.random() * lineCount);
      }
      if (lineIndex < FIRST) lineIndex = FIRST;

      var dir = Math.random() < 0.5 ? 1 : -1;
      var tail =
        PULSE_TAIL_MIN +
        Math.random() * (PULSE_TAIL_MAX - PULSE_TAIL_MIN);
      var travel =
        PULSE_TRAVEL_MIN +
        Math.random() * (PULSE_TRAVEL_MAX - PULSE_TRAVEL_MIN);
      var duration =
        PULSE_DURATION_MIN +
        Math.random() * (PULSE_DURATION_MAX - PULSE_DURATION_MIN);

      // Spawn head somewhere in-view. For vertical pulses, constrain to the
      // upper portion of the viewport - the canvas's vertical fade erases
      // anything below ~80%, so a pulse spawned in the lower half would be
      // invisible. Horizontal pulses don't need this (their line row is
      // already biased toward the top via lineIndex).
      var margin = 60;
      var lo = margin;
      var hi;
      if (orient === "v") {
        // axisExtent here is the viewport height; constrain to upper portion
        // so vertical pulses live above the canvas's bottom fade.
        hi = Math.min(axisExtent * 0.55, axisExtent - margin) - travel;
      } else {
        hi = axisExtent - margin - travel;
      }
      if (hi < lo) hi = lo;
      var headStart = lo + Math.random() * (hi - lo);
      if (dir === -1) headStart += travel; // keep travel direction in view
      var startPos = headStart;
      var endPos = startPos + dir * travel;

      pulses.push({
        orient: orient,
        index: lineIndex,
        startPos: startPos,
        endPos: endPos,
        tail: tail,
        birth: performance.now(),
        duration: duration
      });
    }

    function drawPulse(p, now) {
      var elapsed = now - p.birth;
      var progress = elapsed / p.duration;
      if (progress >= 1) return false;

      // Gentle ease (less aggressive than ^2.5)
      var eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      var headPos = p.startPos + (p.endPos - p.startPos) * eased;
      var dir = p.endPos - p.startPos > 0 ? 1 : -1;
      var tailPos = headPos - dir * p.tail;

      // Alpha envelope: gradual fade-in, brief hold, gradual fade-out.
      var alpha;
      if (progress < 0.3) alpha = progress / 0.3;
      else if (progress > 0.6) alpha = (1 - progress) / 0.4;
      else alpha = 1;
      // Smoothstep so the transitions are gentle at the endpoints.
      alpha = alpha * alpha * (3 - 2 * alpha);
      alpha *= 0.75;

      var lineCoord = Math.floor(p.index * CELL) + 0.5;
      var x0, y0, x1, y1;
      if (p.orient === "h") {
        x0 = tailPos;
        x1 = headPos;
        y0 = y1 = lineCoord;
      } else {
        y0 = tailPos;
        y1 = headPos;
        x0 = x1 = lineCoord;
      }

      // Long visible tail: brightness ramps up over most of the length,
      // peaks near the head, then has a tiny falloff at the very tip.
      var grad = ctx.createLinearGradient(x0, y0, x1, y1);
      grad.addColorStop(0, "rgba(" + GLOW_RGB + ", 0)");
      grad.addColorStop(
        0.3,
        "rgba(" + GLOW_RGB + ", " + (alpha * 0.18).toFixed(3) + ")"
      );
      grad.addColorStop(
        0.65,
        "rgba(" + GLOW_RGB + ", " + (alpha * 0.45).toFixed(3) + ")"
      );
      grad.addColorStop(
        0.95,
        "rgba(" + GLOW_RGB + ", " + (alpha * 0.85).toFixed(3) + ")"
      );
      grad.addColorStop(
        1,
        "rgba(" + GLOW_RGB + ", " + (alpha * 0.7).toFixed(3) + ")"
      );

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();

      // Small brand-tinted head: a dot, or a 3px square in "square" mode
      // (matches the square chrome and the pixel field on the homepage).
      ctx.fillStyle =
        "rgba(" + GLOW_RGB + ", " + (alpha * 0.9).toFixed(3) + ")";
      if (SQUARE_HEAD) {
        ctx.fillRect(Math.round(x1) - 1.5, Math.round(y1) - 1.5, 3, 3);
      } else {
        ctx.beginPath();
        ctx.arc(x1, y1, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      return true;
    }

    // --- main draw -----------------------------------------------------
    function draw(now) {
      ctx.clearRect(0, 0, width, height);

      // 1) Grid stroked with cursor-radial gradient
      var cx = currentX !== undefined ? currentX : -99999;
      var cy = currentY !== undefined ? currentY : -99999;
      var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, GLOW_RADIUS);
      // Stops scale with GLOW_PEAK; at the default 0.95 they are the
      // original 0.95 / 0.55 / 0.15.
      grad.addColorStop(0.0, "rgba(" + GLOW_RGB + ", " + GLOW_PEAK + ")");
      grad.addColorStop(0.25, "rgba(" + GLOW_RGB + ", " + (GLOW_PEAK * 0.55 / 0.95).toFixed(3) + ")");
      grad.addColorStop(0.55, "rgba(" + GLOW_RGB + ", " + (GLOW_PEAK * 0.15 / 0.95).toFixed(3) + ")");
      grad.addColorStop(0.85, "rgba(" + BASE_RGB + ", " + BASE_ALPHA + ")");
      grad.addColorStop(1.0, "rgba(" + BASE_RGB + ", " + BASE_ALPHA + ")");

      ctx.lineWidth = 1;
      ctx.strokeStyle = grad;
      ctx.beginPath();
      for (var x = FIRST * CELL; x <= width + CELL; x += CELL) {
        var xp = Math.floor(x) + 0.5;
        ctx.moveTo(xp, 0);
        ctx.lineTo(xp, height);
      }
      for (var y = FIRST * CELL; y <= height + CELL; y += CELL) {
        var yp = Math.floor(y) + 0.5;
        ctx.moveTo(0, yp);
        ctx.lineTo(width, yp);
      }
      ctx.stroke();

      // 2) Animated pulses (additive)
      if (!reducedMotion && pulses.length) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        for (var i = pulses.length - 1; i >= 0; i--) {
          var alive = drawPulse(pulses[i], now);
          if (!alive) pulses.splice(i, 1);
        }
        ctx.restore();
      }

      // 3) Vertical fade - keep grid emphasized in upper portion of viewport.
      // Scoped canvases fade with a CSS mask instead.
      if (scoped) return;
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      var fade = ctx.createLinearGradient(0, 0, 0, height);
      fade.addColorStop(0, "rgba(0, 0, 0, 0)");
      fade.addColorStop(0.45, "rgba(0, 0, 0, 0)");
      fade.addColorStop(0.8, "rgba(0, 0, 0, 0.65)");
      fade.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    // --- loop ----------------------------------------------------------
    function tick() {
      rafId = null;
      var now = performance.now();

      if (targetX !== undefined) {
        if (currentX === undefined) {
          currentX = targetX;
          currentY = targetY;
        } else {
          currentX += (targetX - currentX) * EASE;
          currentY += (targetY - currentY) * EASE;
        }
      }

      if (!reducedMotion) {
        var interval = PULSE_SPAWN_MS * (0.55 + Math.random() * 0.9);
        if (now - lastSpawn > interval) {
          spawnPulse();
          lastSpawn = now;
        }
      }

      draw(now);

      // Always loop unless reduced motion + no cursor activity + no pulses.
      // Also bail entirely when canvasOpacity is 0 (scrolled past hero):
      // the canvas isn't visible, so don't burn GPU. onScroll restarts
      // the loop when opacity climbs back above 0.
      var cursorSettling =
        targetX !== undefined &&
        (Math.abs(targetX - currentX) > 0.3 ||
          Math.abs(targetY - currentY) > 0.3);

      if (canvasOpacity > 0 && (!reducedMotion || pulses.length || cursorSettling)) {
        requestFrame();
      }
    }

    function requestFrame() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(tick);
    }

    // --- events --------------------------------------------------------
    // Cursor position in canvas coordinates. Scoped canvases are offset by
    // their parent's position, which also moves on scroll, so the last
    // client position is kept and re-projected in onScroll.
    var clientX, clientY;
    function track() {
      if (clientX === undefined) return;
      if (scoped) {
        var r = host.getBoundingClientRect();
        targetX = clientX - r.left;
        targetY = clientY - r.top;
      } else {
        targetX = clientX;
        targetY = clientY;
      }
    }

    function onMove(e) {
      clientX = e.clientX;
      clientY = e.clientY;
      track();
      requestFrame();
    }

    var resizeRaf = null;
    function onResize() {
      if (resizeRaf !== null) return;
      resizeRaf = requestAnimationFrame(function () {
        resizeRaf = null;
        resize();
      });
    }

    var scrollRaf = null;
    function onScroll() {
      if (scrollRaf !== null) return;
      scrollRaf = requestAnimationFrame(function () {
        scrollRaf = null;
        if (scoped) {
          // Visibility comes from the IntersectionObserver below.
          track();
          requestFrame();
          return;
        }
        var op = 1 - window.scrollY / SCROLL_FADE_END;
        if (op < 0) op = 0;
        else if (op > 1) op = 1;
        // smoothstep
        op = op * op * (3 - 2 * op);
        root.style.setProperty("--canvas-opacity", op.toFixed(3));
        var wasSuspended = canvasOpacity <= 0;
        canvasOpacity = op;
        // Restart the draw loop if the canvas just became visible again
        // (the tick loop self-suspends when opacity hits 0).
        if (wasSuspended && op > 0) requestFrame();
      });
    }

    // --- boot ----------------------------------------------------------
    resize();
    onScroll();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    if (scoped) {
      // The parent's height changes with fonts, validation messages and
      // layout breakpoints, not only with the window.
      if (window.ResizeObserver) new ResizeObserver(onResize).observe(host);
      // Stop drawing while the parent is off screen.
      if (window.IntersectionObserver) {
        new IntersectionObserver(function (entries) {
          var visible = entries[entries.length - 1].isIntersecting;
          var wasSuspended = canvasOpacity <= 0;
          canvasOpacity = visible ? 1 : 0;
          if (wasSuspended && visible) requestFrame();
        }).observe(host);
      }
    }

    if (!noHover) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    // Pre-populate pulses so the page loads with the effect already
    // visible - otherwise the first ones don't appear for ~500ms+ and
    // the hero feels static on initial paint.
    if (!reducedMotion) {
      var seedNow = performance.now();
      for (var i = 0; i < PULSE_MAX - 1; i++) {
        spawnPulse();
        var seeded = pulses[pulses.length - 1];
        if (seeded) {
          // Backdate to a random point in the pulse's lifetime so the
          // seeded pulses are at varied stages (some just starting,
          // some halfway, some near death).
          seeded.birth = seedNow - Math.random() * seeded.duration * 0.75;
        }
      }
      lastSpawn = seedNow;
    }

    requestFrame();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
