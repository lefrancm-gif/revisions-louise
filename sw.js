const CACHE='louise-static-v2.1';
const ASSETS=['./','./index.html','./styles.css?v=2.1','./app.js?v=2.1','./core.js?v=2.1','./data.js?v=2.1','./english.js?v=2.1','./catalog.js?v=2.1','./planning.js?v=2.1','./views-v2.js?v=2.1','./sync.js?v=2.1','./config.js?v=2.1','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('louise-static-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request).then(r=>r||new Response('Contenu indisponible hors connexion',{status:503}))));});
