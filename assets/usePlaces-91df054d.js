import{r as u}from"./index-3604ea6a.js";const m=r=>new Promise((i,d)=>{const c=new FileReader;c.readAsDataURL(r),c.onload=()=>i(c.result),c.onerror=d}),g=()=>(Math.random()+1).toString(36).substring(7),l="myfishingapp-places";function p(){const r=localStorage.getItem(l);return r?JSON.parse(r):[]}const t=u(p());function y(){return{places:t,getPlaceById:s=>t.value.find(a=>a.id===s),addPlace:s=>{const a=g(),e={...s,id:a};t.value.push(e),localStorage.setItem(l,JSON.stringify(t.value))},deletePlaceById:s=>{t.value=t.value.filter(a=>a.id!==s),localStorage.setItem(l,JSON.stringify(t.value))},addSpot:(s,a)=>{const e=[...t.value],n=e.findIndex(o=>o.id===s);n>-1&&e[n].spots.push(a),t.value=e,localStorage.setItem(l,JSON.stringify(t.value))},deleteSpot:(s,a)=>{const e=[...t.value],n=e.findIndex(o=>o.id===s);n>-1&&(e[n].spots=e[n].spots.filter(o=>o.x!==a.x&&o.y!==a.y)),t.value=e,localStorage.setItem(l,JSON.stringify(t.value))},editPlace:(s,a)=>{t.value=t.value.map(e=>e.id===s?{...e,...a}:e),localStorage.setItem(l,JSON.stringify(t.value))},editSpotDescription:(s,a)=>{const e=[...t.value],n=e.findIndex(o=>o.id===s);n>-1&&(e[n].spots=e[n].spots.map(o=>o.x===a.x&&o.y===a.y?a:o)),t.value=e,localStorage.setItem(l,JSON.stringify(t.value))}}}export{m as t,y as u};