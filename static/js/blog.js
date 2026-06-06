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

  // 5) Collapse the tag row to a single line with a "+N" reveal chip.
  var tagList = document.querySelector('.bp-tags');
  if (tagList) {
    var items = Array.prototype.slice.call(tagList.querySelectorAll('li:not(.bp-tags__more)'));
    if (items.length > 1) {
      var moreLi = document.createElement('li');
      moreLi.className = 'bp-tags__more';
      var moreBtn = document.createElement('button');
      moreBtn.type = 'button';
      moreBtn.className = 'bp-tags__morebtn';
      moreLi.appendChild(moreBtn);

      var expanded = false;

      function layoutTags() {
        // reset to measure natural single-row fit
        items.forEach(function (li) { li.classList.remove('is-hidden'); });
        if (moreLi.parentNode) moreLi.parentNode.removeChild(moreLi);
        if (expanded) return; // showing everything, no chip

        var firstTop = items[0].offsetTop;
        var firstOverflow = -1;
        for (var i = 1; i < items.length; i++) {
          if (items[i].offsetTop > firstTop) { firstOverflow = i; break; }
        }
        if (firstOverflow === -1) return; // all tags fit on one row

        for (var j = firstOverflow; j < items.length; j++) items[j].classList.add('is-hidden');
        tagList.appendChild(moreLi);
        var visible = firstOverflow;
        // make room for the chip itself if it pushed to a second row
        while (visible > 1 && moreLi.offsetTop > firstTop) {
          visible--;
          items[visible].classList.add('is-hidden');
        }
        var hidden = items.length - visible;
        moreBtn.textContent = '+' + hidden;
        moreBtn.setAttribute('aria-label', 'Show ' + hidden + ' more tags');
        moreBtn.setAttribute('aria-expanded', 'false');
      }

      moreBtn.addEventListener('click', function () {
        expanded = true;
        tagList.classList.add('is-expanded');
        layoutTags();
      });

      layoutTags();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutTags);
      var rtid;
      window.addEventListener('resize', function () {
        if (expanded) return;
        clearTimeout(rtid);
        rtid = setTimeout(layoutTags, 150);
      });
    }
  }
})();
