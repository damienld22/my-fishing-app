if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>i(e,r),t={module:{uri:r},exports:c,require:o};s[r]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-58dda7d9"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AddPlaceView-d124594c.css",revision:null},{url:"assets/AddPlaceView-f5fcd6c7.js",revision:null},{url:"assets/index-00222c9a.css",revision:null},{url:"assets/index-3604ea6a.js",revision:null},{url:"assets/PlacesView-28dd5623.js",revision:null},{url:"assets/PlacesView-bfacdfcd.css",revision:null},{url:"assets/PlaceView-310c7675.css",revision:null},{url:"assets/PlaceView-72733929.js",revision:null},{url:"assets/usePlaces-91df054d.js",revision:null},{url:"assets/WeatherView-507ccd17.js",revision:null},{url:"index.html",revision:"221cc92401e38c0c2fc3aff9228512f0"},{url:"registerSW.js",revision:"57956fda4c062e6cd664bf5b5721c561"},{url:"logo-192.png",revision:"322d5ff04180146749b292367675182d"},{url:"logo-512.png",revision:"1909347f83cb45ce95fde9ecf0806f0c"},{url:"manifest.webmanifest",revision:"4da24a27727d312ed7cd272b74838c17"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
