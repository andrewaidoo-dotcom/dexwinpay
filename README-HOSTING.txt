DexwinPay — Hosting Package
===========================

This folder is the complete, self-contained DexwinPay site. Entry point: index.html
(it redirects to "Landing Page.dc.html", or to the Dashboard if already signed in).

DEPLOYING ON VERCEL
-------------------
1. Go to vercel.com → Add New → Project → and drag this folder in
   (or push it to a Git repo and import that).
2. Framework preset: "Other". No build command, no output directory —
   it's a plain static site. Deploy.

Any other static host works the same way (Netlify, GitHub Pages,
Cloudflare Pages, S3, nginx/Apache).

TWO REQUIREMENTS
----------------
1. MUST be served over HTTP/HTTPS — NOT opened by double-clicking the files.
   The pages load their components with fetch(), which browsers block on the
   file:// protocol. To preview locally, run a tiny static server here:
       python3 -m http.server 8080
   then open http://localhost:8080/

2. Needs internet access in the visitor's browser. React and Babel are loaded
   from the unpkg.com CDN at runtime.

KEEP FILENAMES EXACTLY AS-IS
----------------------------
Filenames contain spaces and capital letters (e.g. "Landing Page.dc.html").
Most hosts are case-sensitive — do not rename or change casing; the in-app
links rely on the exact names.

WHAT'S INSIDE
-------------
  index.html            entry/redirect
  *.dc.html             the pages (Landing, Login, Sign Up, Dashboard, Clients,
                        Client Instance, People, Payroll, Wallet, etc.)
  support.js            page runtime
  ds-base.js            design-system loader + auto-density scaling
  density.js            standalone auto-density scaling (85% <1460px, 78% <1160px)
  app-state.js          shared in-browser state (localStorage)
  payroll-engine.js     2026 Ghana tax engine (SSNIT, PAYE, WHT, overtime)
  favicon.svg           Dexwin favicon
  _ds/                  DexwinPay design system (tokens, fonts, components)
  assets/               images & logos
