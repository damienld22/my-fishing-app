import{e as C,h as i,t as x,i as a,_ as k,k as e,r as g,l as $,m as v,v as M,x as b,F as w,q as G,s as L,y as I,z as D,A as N,d as A}from"./index-3604ea6a.js";import{u as U}from"./usePlaces-91df054d.js";const T=C({__name:"MarkerElement",props:{value:{},x:{},y:{}},setup(o){const r=o,c={left:`${r.x}%`,top:`${r.y}%`};return(u,n)=>(a(),i("div",{class:"marker",style:c},x(r.value),1))}});const P=k(T,[["__scopeId","data-v-4d775d86"]]),j={},Z={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),H=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),O=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z",fill:"#080341"})],-1),X=[F,H,O];function q(o,r){return a(),i("svg",Z,X)}const z=k(j,[["render",q]]),Y={},J={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Q=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),W=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M4 12.6111L8.92308 17.5L20 6.5",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ee=[K,Q,W];function te(o,r){return a(),i("svg",J,ee)}const oe=k(Y,[["render",te]]),ne={key:0,class:"line"},se={key:1,class:"line"},ae=C({__name:"EditableText",props:{text:{}},emits:["onUpdate"],setup(o,{emit:r}){const c=o,u=g(!1),n=g(c.text),d=()=>{r("onUpdate",n.value),u.value=!1};return(s,_)=>(a(),i(w,null,[u.value?v("",!0):(a(),i("div",ne,[e("p",null,x(c.text),1),e("div",{class:"icon",onClick:_[0]||(_[0]=f=>u.value=!0)},[$(z)])])),u.value?(a(),i("div",se,[M(e("input",{"onUpdate:modelValue":_[1]||(_[1]=f=>n.value=f)},null,512),[[b,n.value]]),e("div",{class:"icon",onClick:d},[$(oe)])])):v("",!0)],64))}});const B=k(ae,[["__scopeId","data-v-2666cd56"]]),le=o=>(I("data-v-de008ae7"),o=o(),D(),o),ie={key:0},ce=le(()=>e("p",{class:"spotDescriptionTitle"},"Spot",-1)),de=C({__name:"PlaceMap",props:{place:{},draftSpot:{}},emits:["clickNewSpotPosition"],setup(o,{emit:r}){const c=o,u={"background-image":`url(${c.place.map})`},n=g(null),{deleteSpot:d,editSpotDescription:s}=U(),_=()=>{n.value&&(d(c.place.id,n.value),n.value=null)},f=l=>{if(l.preventDefault(),c.draftSpot){const t=l.target.getBoundingClientRect(),h=t.right-t.left,y=t.bottom-t.top,S=l.clientX-t.left,m=l.clientY-t.top,E=S/h*100,R=m/y*100;r("clickNewSpotPosition",{x:E,y:R})}},V=l=>{n.value&&(s(c.place.id,{...n.value,description:l}),n.value.description=l)};return(l,p)=>(a(),i(w,null,[e("div",{class:"map",style:u,onClick:f},[(a(!0),i(w,null,G(c.place.spots,(t,h)=>(a(),L(P,{key:`${t.x}-${t.y}`,value:h+1,x:t.x,y:t.y,onClick:y=>n.value=t},null,8,["value","x","y","onClick"]))),128)),l.draftSpot?(a(),L(P,{key:`${l.draftSpot.x}-${l.draftSpot.y}`,value:"X",x:l.draftSpot.x,y:l.draftSpot.y},null,8,["x","y"])):v("",!0)]),n.value?(a(),i("div",ie,[e("div",{class:"titleSpot"},[ce,e("button",{onClick:_},"Supprimer Spot")]),$(B,{text:n.value.description,onOnUpdate:V},null,8,["text"])])):v("",!0)],64))}});const re=k(de,[["__scopeId","data-v-de008ae7"]]),pe=o=>(I("data-v-07f43c97"),o=o(),D(),o),ue={class:"title"},_e={class:"area"},ve={key:0,class:"description"},fe={class:"addSpotContainer"},he={key:1},ke={class:"spotDescription"},ye=pe(()=>e("label",{for:"descriptionSpot"},"Description du spot",-1)),Se=C({__name:"PlaceView",setup(o){const r=N(),{getPlaceById:c,addSpot:u,editPlace:n}=U(),d=A(()=>c(r.params.id)),s=g(null),_=()=>{var p;s.value&&u((p=d.value)==null?void 0:p.id,s.value),s.value=null},f=()=>{s.value={description:"",x:50,y:50}},V=p=>{s.value&&(s.value.x=p.x,s.value.y=p.y)},l=p=>{var t;n((t=d.value)==null?void 0:t.id,{description:p})};return(p,t)=>{var h,y,S;return a(),i(w,null,[e("p",ue,x((h=d.value)==null?void 0:h.name),1),e("p",_e,x((y=d.value)==null?void 0:y.area)+" ha",1),(S=d.value)!=null&&S.description?(a(),i("p",ve,[$(B,{text:d.value.description,onOnUpdate:l},null,8,["text"])])):v("",!0),d.value?(a(),L(re,{key:1,place:d.value,"draft-spot":s.value,onClickNewSpotPosition:V},null,8,["place","draft-spot"])):v("",!0),e("div",fe,[s.value?v("",!0):(a(),i("button",{key:0,onClick:f},"Ajouter un spot")),s.value?(a(),i("div",he,[e("div",null,[e("button",{onClick:_},"Valider"),e("button",{onClick:t[0]||(t[0]=m=>s.value=null)},"Annuler")]),e("div",ke,[ye,M(e("input",{id:"descriptionSpot","onUpdate:modelValue":t[1]||(t[1]=m=>s.value.description=m)},null,512),[[b,s.value.description]])])])):v("",!0)])],64)}}});const ge=k(Se,[["__scopeId","data-v-07f43c97"]]);export{ge as default};