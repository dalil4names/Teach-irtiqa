const V='muallim-v15';
const SHELL=['./','index.html','jszip.min.js','manifest.webmanifest','favicon.png','icon-192.png','icon-512.png','icon-180.png'];
/* لا تحديث تلقائي: النسخة الجديدة تنتظر حتى يضغط المعلم زر التحديث */
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('muallim-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.open(V).then(c=>c.match(e.request,{ignoreSearch:true}).then(m=>{
    if(m)return m;
    return fetch(e.request).then(r=>{if(r&&r.ok)c.put(e.request,r.clone());return r})
      .catch(()=>e.request.mode==='navigate'?c.match('index.html'):Response.error());
  })));
});
