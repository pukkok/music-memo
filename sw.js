if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let d={};const o=e=>i(e,t),l={module:{uri:t},exports:d,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2wcdv2TY.js",revision:null},{url:"assets/index-BnCZwPwT.css",revision:null},{url:"index.html",revision:"d93b20fb3e1cd5662a9eb67d175ddb0f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"53cb7296492cf039556add02db4bfca2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
