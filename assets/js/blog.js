(function () {
  // 1) Wrap markdown tables so they get the card + horizontal scroll
  document.querySelectorAll('.bp-prose table').forEach(function (t) {
    if (t.closest('.bp-tablewrap')) return;
    var w = document.createElement('div');
    w.className = 'bp-tablewrap';
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });

  // 2) Table of contents scroll-spy.
  //    The TOC markup itself is server-rendered by layouts/blog/single.html from
  //    Hugo's .TableOfContents, so it works with JS off - this only highlights
  //    the section you're currently reading in the fixed rail.
  var rail = document.getElementById('bp-rail');
  var prose = document.getElementById('bp-prose');
  if (rail && prose) {
    var footer = document.querySelector('.pgf') || document.querySelector('footer');
    var MIN_RAIL = 140;   // below this the rail is too short to be worth showing
    var heads = Array.prototype.slice.call(prose.querySelectorAll('h2[id], h3[id]'));
    var links = {};
    rail.querySelectorAll('a[href^="#"]').forEach(function (a) {
      links[decodeURIComponent(a.getAttribute('href').slice(1))] = a;
    });

    var current = null;
    var ticking = false;

    function spy() {
      ticking = false;
      if (!heads.length) return;

      // Active = the last heading whose top has passed the reading line. More
      // predictable than IntersectionObserver when sections are far apart.
      var active = null;
      for (var i = 0; i < heads.length; i++) {
        if (heads[i].getBoundingClientRect().top <= 110) active = heads[i];
        else break;
      }

      var link = active ? links[active.id] : null;
      if (link !== current) {
        if (current) {
          current.classList.remove('is-active');
          current.removeAttribute('aria-current');
        }
        if (link) {
          link.classList.add('is-active');
          link.setAttribute('aria-current', 'location');
          // On long posts the rail scrolls internally - nudge it (and only it,
          // never the page) so the active entry stays in view.
          if (rail.scrollHeight > rail.clientHeight) {
            var lr = link.getBoundingClientRect();
            var rr = rail.getBoundingClientRect();
            if (lr.top < rr.top) rail.scrollTop -= rr.top - lr.top + 12;
            else if (lr.bottom > rr.bottom) rail.scrollTop += lr.bottom - rr.bottom + 12;
          }
        }
        current = link;
      }

      clampToFooter();
    }

    // The rail is taller than whatever article is left near the end of a long
    // post, so hiding it only once the article scrolls away still left its
    // lower half sitting on top of the footer. Instead, shrink it against the
    // footer as the footer comes into view, and drop it entirely once there's
    // no usable room left.
    function clampToFooter() {
      var top = rail.getBoundingClientRect().top;
      var footerTop = footer ? footer.getBoundingClientRect().top : Infinity;

      if (footerTop < window.innerHeight) {
        var avail = footerTop - 16 - top;
        rail.style.maxHeight = Math.max(0, avail) + 'px';
        if (avail < MIN_RAIL) rail.classList.add('is-past-article');
        else rail.classList.remove('is-past-article');
        return;
      }

      rail.style.maxHeight = '';        // hand height back to the stylesheet
      // Fallback for any page without a footer: hide once the article is gone.
      if (!footer && prose.getBoundingClientRect().bottom < 200) {
        rail.classList.add('is-past-article');
      } else {
        rail.classList.remove('is-past-article');
      }
    }

    function scheduleSpy() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(spy);
    }

    document.addEventListener('scroll', scheduleSpy, { passive: true });
    window.addEventListener('resize', scheduleSpy);
    spy();
  }

  // 3) Copy buttons on code blocks + the permalink button
  document.querySelectorAll('.bp-code').forEach(function (block) {
    var btn = block.querySelector('.bp-code__copy');
    var pre = block.querySelector('pre');
    if (!btn || !pre) return;
    btn.addEventListener('click', function () {
      if (navigator.clipboard) navigator.clipboard.writeText(pre.innerText);
      var html = btn.innerHTML;
      btn.classList.add('copied');
      // Label comes from the template's data-copied attribute so it stays translatable.
      var copiedLabel = btn.getAttribute('data-copied') || 'Copied';
      btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg> ' + copiedLabel;
      setTimeout(function () { btn.classList.remove('copied'); btn.innerHTML = html; }, 1600);
    });
  });
  var cp = document.getElementById('bp-copylink');
  if (cp) cp.addEventListener('click', function (e) {
    e.preventDefault();
    if (navigator.clipboard) navigator.clipboard.writeText(location.href);
  });

  // 4) Collapse the tag row to a single line with a "+N" reveal chip.
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
