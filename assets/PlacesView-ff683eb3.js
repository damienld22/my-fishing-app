import{_ as k,i as t,h as r,j as m,e as h,k as a,t as _,l as C,m as g,p as f,u as c,F as u,q as v,s as V}from"./index-d2ec8976.js";import{u as w}from"./usePlaces-2f50e138.js";const $={},j={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x=m('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="24" height="24" fill="white"></rect><path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"></path><path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"></path></g>',3),H=[x];function I(d,i){return t(),r("svg",j,H)}const L=k($,[["render",I]]),M={class:"titleContainer"},y={class:"title"},B={class:"description"},S={key:0},D=h({__name:"CardItem",props:{title:{},description:{}},emits:["click","delete"],setup(d,{emit:i}){const o=d,n=i,l=s=>{s.stopPropagation(),n("delete")};return(s,e)=>(t(),r("div",{class:"container",onClick:e[0]||(e[0]=p=>n("click"))},[a("div",M,[a("p",y,_(o.title),1),C(L,{class:"trashIcon",onClick:l})]),a("div",B,[o.description?(t(),r("p",S,_(o.description),1)):g("",!0)])]))}});const N=k(D,[["__scopeId","data-v-4562d66e"]]),G=h({__name:"PlacesView",setup(d){const{places:i,deletePlaceById:o}=w(),n=f();return(l,s)=>(t(),r(u,null,[a("button",{onClick:s[0]||(s[0]=e=>c(n).push("/place-creation"))},"Ajouter une zone de pêche"),(t(!0),r(u,null,v(c(i),e=>(t(),V(N,{key:e.id,title:e.name,description:e.description,onClick:p=>c(n).push(`/places/${e.id}`),onDelete:p=>c(o)(e.id)},null,8,["title","description","onClick","onDelete"]))),128))],64))}});export{G as default};