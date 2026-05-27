// Case study — active ToC + scroll progress
(function(){
  const toc = document.querySelectorAll('.cs-toc a');
  const sections = [...document.querySelectorAll('.cs-article .sec')];
  const bar = document.querySelector('.cs-toc .bar');
  const pctLabel = document.getElementById('pctLabel');
  if (!sections.length) return;
  function onScroll() {
    const mid = window.scrollY + window.innerHeight * 0.35;
    let active = sections[0];
    for (const s of sections) { if (s.offsetTop <= mid) active = s; }
    toc.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active.id));
    const h = document.body.scrollHeight - window.innerHeight;
    const pct = Math.min(100, Math.max(0, (window.scrollY / h) * 100));
    if (bar) bar.style.setProperty('--pct', pct.toFixed(0) + '%');
    if (pctLabel) pctLabel.textContent = pct.toFixed(0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
