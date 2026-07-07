// Auto-density (standalone): scales the page down on short viewports
// (1366x768 laptops etc.) so the UI matches what large-screen users see.
// Same logic as ds-base.js — guarded so loading both runs it once.
(() => {
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
