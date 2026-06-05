(function () {
  // 1) Reading progress
  var fill = document.getElementById('bp-progress-fill');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (fill) fill.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0).toFixed(2) + '%';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // 2) Wrap markdown tables so they get the card + horizontal scroll
  document.querySelectorAll('.bp-prose table').forEach(function (t) {
    if (t.closest('.bp-tablewrap')) return;
    var w = document.createElement('div');
    w.className = 'bp-tablewrap';
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });

  // 3) Build the "In this article" TOC from h2s (skip ones inside callouts)
  var list = document.getElementById('bp-toc-list');
  var toc = document.getElementById('bp-toc');
  if (list && toc) {
    var n = 0;
    document.querySelectorAll('.bp-prose h2[id]').forEach(function (h) {
      if (h.closest('.bp-callout')) return;
      n++;
      var li = document.createElement('li');
      li.innerHTML = '<a href="#' + h.id + '"><span class="bp-num">' +
        String(n).padStart(2, '0') + '</span><span>' + h.textContent.trim() + '</span></a>';
      list.appendChild(li);
    });
    if (n >= 2) toc.removeAttribute('hidden');
  }

  // 4) Copy buttons on code blocks + the permalink button
  document.querySelectorAll('.bp-code').forEach(function (block) {
    var btn = block.querySelector('.bp-code__copy');
    var pre = block.querySelector('pre');
    if (!btn || !pre) return;
    btn.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(pre.innerText);
      var html = btn.innerHTML;
      btn.classList.add('copied');
      btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg> Copied';
      setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = html; }, 1600);
    });
  });
  var cp = document.getElementById('bp-copylink');
  if (cp) cp.addEventListener('click', function (e) {
    e.preventDefault();
    if (navigator.clipboard) navigator.clipboard.writeText(location.href);
  });
})();
