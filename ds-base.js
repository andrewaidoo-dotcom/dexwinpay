// Loads the DexwinPay design system (tokens, fonts, component bundle) into a DC.
(() => {
  const base = '_ds/dexwinpay-design-system-848e17b8-ea65-4390-9f5b-4650ab9f91b8';
  for (const p of ["fonts/fonts.css","tokens/colors.css","tokens/typography.css","tokens/spacing.css","tokens/shadows.css","tokens/base.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  document.head.appendChild(s);
  // Favicon — dark-mode aware (black mark flips to white via prefers-color-scheme in the SVG).
  if (!document.querySelector('link[rel="icon"]')) {
    const fav = document.createElement('link');
    fav.rel = 'icon'; fav.type = 'image/svg+xml'; fav.href = 'assets/favicon.svg';
    document.head.appendChild(fav);
  }

  // Auto-density: the UI is designed for wide desktop viewports. On narrower
  // screens (1366x768 laptops etc.) scale the whole page down so users keep
  // the full working area instead of feeling "zoomed in".
  if (window.__dxpDensity) return;
  window.__dxpDensity = true;
  const applyDensity = () => {
    const w = window.innerWidth;
    const z = w < 1160 ? 0.78 : (w < 1460 ? 0.85 : 1);
    const de = document.documentElement;
    de.style.zoom = z === 1 ? '' : String(z);
    // CSS zoom also scales vh/vw lengths; pages compensate via calc(Nvh / var(--dxp-zoom)).
    de.style.setProperty('--dxp-zoom', String(z));
  };
  applyDensity();
  let densityT;
  window.addEventListener('resize', () => { clearTimeout(densityT); densityT = setTimeout(applyDensity, 120); });
})();
