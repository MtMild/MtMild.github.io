// Store Price Check — offline cache. App files: cache first, refreshed in the background (new version shows on the next launch).
// Bases (bases/*): network first, cache when offline.
const CACHE = "spc-v1";
const FILES = ["./", "app.js", "apple-touch-icon.png", "bases.js", "bases/list.json", "bases/michael_kors_bags.xlsx", "bases/michael_kors_bags_nl_eur_part3.xlsx", "bases/michael_kors_nl_partial.xlsx", "icon-192.png", "icon-512.png", "icon.svg", "index.html", "lib/JsBarcode.all.min.js", "lib/fonts.css", "lib/fonts/bodoni-moda-latin-500-normal.woff2", "lib/fonts/bodoni-moda-latin-600-normal.woff2", "lib/fonts/bodoni-moda-latin-ext-500-normal.woff2", "lib/fonts/bodoni-moda-latin-ext-600-normal.woff2", "lib/fonts/inter-cyrillic-400-normal.woff2", "lib/fonts/inter-cyrillic-500-normal.woff2", "lib/fonts/inter-cyrillic-600-normal.woff2", "lib/fonts/inter-cyrillic-700-normal.woff2", "lib/fonts/inter-latin-400-normal.woff2", "lib/fonts/inter-latin-500-normal.woff2", "lib/fonts/inter-latin-600-normal.woff2", "lib/fonts/inter-latin-700-normal.woff2", "lib/fonts/inter-latin-ext-400-normal.woff2", "lib/fonts/inter-latin-ext-500-normal.woff2", "lib/fonts/inter-latin-ext-600-normal.woff2", "lib/fonts/inter-latin-ext-700-normal.woff2", "lib/fonts/jetbrains-mono-cyrillic-400-normal.woff2", "lib/fonts/jetbrains-mono-cyrillic-600-normal.woff2", "lib/fonts/jetbrains-mono-latin-400-normal.woff2", "lib/fonts/jetbrains-mono-latin-600-normal.woff2", "lib/fonts/jetbrains-mono-latin-ext-400-normal.woff2", "lib/fonts/jetbrains-mono-latin-ext-600-normal.woff2", "lib/xlsx.full.min.js", "lib/zxing-browser.min.js", "manifest.webmanifest"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  const key = url.pathname.endsWith("/") ? "./" : req;
  if (url.pathname.includes("/bases/")) {
    e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req.url.split("?")[0], c)); } return r; })
      .catch(() => caches.match(req.url.split("?")[0])));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(key, {ignoreSearch:true});
    const net = fetch(req).then(r => { if (r.ok) c.put(key, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (req.mode === "navigate" ? c.match("./") : Response.error());
  }));
});
