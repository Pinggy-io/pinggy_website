(function () {
  if (!document.getElementById("docsearch-modal")) return;

  var modalEl = document.getElementById("docsearch-modal");
  var inputEl = document.getElementById("docsearch-input");
  var resultsEl = document.getElementById("docsearch-results");
  var triggerEl = document.getElementById("docsearch-trigger");

  var pagefind = null;
  var pagefindLoading = null;
  var activeIndex = -1;
  var currentResults = [];
  var lastQuery = "";

  function loadPagefind() {
    if (pagefind) return Promise.resolve(pagefind);
    if (pagefindLoading) return pagefindLoading;
    pagefindLoading = import("/pagefind/pagefind.js")
      .then(function (mod) {
        pagefind = mod;
        if (pagefind.options) {
          pagefind.options({ excerptLength: 25 });
        }
        return pagefind;
      })
      .catch(function (err) {
        pagefindLoading = null;
        renderError(
          "Search index is unavailable. Please try again after the next deploy."
        );
        throw err;
      });
    return pagefindLoading;
  }

  function openModal() {
    if (!window.bootstrap) return;
    var modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }

  function closeModal() {
    if (!window.bootstrap) return;
    var modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  function isMac() {
    return /Mac|iPhone|iPad/.test(navigator.platform);
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function breadcrumbFromUrl(url) {
    try {
      var path = new URL(url, window.location.origin).pathname;
      var parts = path.split("/").filter(Boolean);
      if (parts[0] === "docs") parts.shift();
      if (parts.length === 0) return "Docs";
      return parts.map(function (p) {
        return p.replace(/[-_]/g, " ");
      }).join(" / ");
    } catch (e) {
      return url;
    }
  }

  function renderEmpty(message, modifier) {
    resultsEl.innerHTML =
      '<div class="docsearch-empty ' + (modifier || "") + '">' +
      escapeHtml(message) +
      "</div>";
    activeIndex = -1;
    currentResults = [];
  }

  function renderError(message) {
    renderEmpty(message, "docsearch-empty-error");
  }

  function renderResults(items) {
    if (!items.length) {
      renderEmpty("No matches for “" + lastQuery + "”.", "docsearch-empty-zero");
      return;
    }
    var html = items
      .map(function (item, i) {
        var title = escapeHtml(
          (item.meta && item.meta.title) || item.url || "Untitled"
        );
        var crumb = escapeHtml(breadcrumbFromUrl(item.url));
        return (
          '<a class="docsearch-result' +
          (i === 0 ? " is-active" : "") +
          '" href="' +
          escapeHtml(item.url) +
          '" data-index="' +
          i +
          '" role="option">' +
          '<div class="docsearch-result-title">' +
          title +
          "</div>" +
          '<div class="docsearch-result-crumb">' +
          crumb +
          "</div>" +
          '<div class="docsearch-result-excerpt">' +
          (item.excerpt || "") +
          "</div>" +
          "</a>"
        );
      })
      .join("");
    resultsEl.innerHTML = html;
    currentResults = items;
    activeIndex = 0;
    scrollActiveIntoView();
  }

  function setActive(next) {
    var nodes = resultsEl.querySelectorAll(".docsearch-result");
    if (!nodes.length) return;
    if (next < 0) next = nodes.length - 1;
    if (next >= nodes.length) next = 0;
    nodes.forEach(function (n, i) {
      n.classList.toggle("is-active", i === next);
    });
    activeIndex = next;
    scrollActiveIntoView();
  }

  function scrollActiveIntoView() {
    var node = resultsEl.querySelector(".docsearch-result.is-active");
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ block: "nearest" });
    }
  }

  function openActive() {
    var nodes = resultsEl.querySelectorAll(".docsearch-result");
    if (activeIndex < 0 || !nodes[activeIndex]) return;
    window.location.href = nodes[activeIndex].getAttribute("href");
  }

  async function runSearch(query) {
    lastQuery = query;
    if (!query || !query.trim()) {
      renderEmpty(
        "Start typing to search the documentation.",
        "docsearch-empty-initial"
      );
      return;
    }
    try {
      var pf = await loadPagefind();
      var res = await pf.debouncedSearch(query, {}, 200);
      // debouncedSearch returns null if a newer call has started; bail in that case.
      if (res === null) return;
      if (lastQuery !== query) return;
      var items = await Promise.all(
        res.results.slice(0, 10).map(function (r) {
          return r.data();
        })
      );
      if (lastQuery !== query) return;
      renderResults(items);
    } catch (e) {
      // already handled in loadPagefind
    }
  }

  inputEl.addEventListener("input", function () {
    runSearch(inputEl.value);
  });

  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(activeIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(activeIndex - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      openActive();
    } else if (e.key === "Escape") {
      closeModal();
    }
  });

  resultsEl.addEventListener("mousemove", function (e) {
    var node = e.target.closest(".docsearch-result");
    if (!node) return;
    var i = parseInt(node.getAttribute("data-index"), 10);
    if (!isNaN(i) && i !== activeIndex) setActive(i);
  });

  modalEl.addEventListener("shown.bs.modal", function () {
    inputEl.focus();
    loadPagefind();
  });

  modalEl.addEventListener("hidden.bs.modal", function () {
    inputEl.value = "";
    lastQuery = "";
    renderEmpty(
      "Start typing to search the documentation.",
      "docsearch-empty-initial"
    );
  });

  document.addEventListener("keydown", function (e) {
    var meta = isMac() ? e.metaKey : e.ctrlKey;
    if (meta && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      openModal();
    } else if (
      e.key === "/" &&
      !["INPUT", "TEXTAREA", "SELECT"].includes(
        (document.activeElement && document.activeElement.tagName) || ""
      ) &&
      !modalEl.classList.contains("show")
    ) {
      e.preventDefault();
      openModal();
    }
  });

  if (triggerEl && !isMac()) {
    var hint = triggerEl.querySelector(".docsearch-kbd-hint");
    if (hint) hint.textContent = "Ctrl K";
  }
})();
