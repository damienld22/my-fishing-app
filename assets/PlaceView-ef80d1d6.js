import{e as C,h as i,t as x,i as a,_ as k,k as e,r as g,l as $,m as _,v as P,x as M,F as w,q as N,s as V,y as I,z as D,A,d as T}from"./index-d2ec8976.js";import{u as U}from"./usePlaces-2f50e138.js";const j=C({__name:"Marker",props:{value:{},x:{},y:{}},setup(s){const r=s,c={left:`${r.x}%`,top:`${r.y}%`};return(v,d)=>(a(),i("div",{class:"marker",style:c},x(r.value),1))}});const L=k(j,[["__scopeId","data-v-a5b8141f"]]),Z={},F={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),O=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),X=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z",fill:"#080341"})],-1),q=[H,O,X];function z(s,r){return a(),i("svg",F,q)}const Y=k(Z,[["render",z]]),J={},K={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Q=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),W=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ee=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M4 12.6111L8.92308 17.5L20 6.5",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),te=[Q,W,ee];function oe(s,r){return a(),i("svg",K,te)}const ne=k(J,[["render",oe]]),se={key:0,class:"line"},ae={key:1,class:"line"},le=C({__name:"EditableText",props:{text:{}},emits:["onUpdate"],setup(s,{emit:r}){const c=s,v=r,d=g(!1),t=g(c.text),n=()=>{v("onUpdate",t.value),d.value=!1};return(y,u)=>(a(),i(w,null,[d.value?_("",!0):(a(),i("div",se,[e("p",null,x(c.text),1),e("div",{class:"icon",onClick:u[0]||(u[0]=f=>d.value=!0)},[$(Y)])])),d.value?(a(),i("div",ae,[P(e("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>t.value=f)},null,512),[[M,t.value]]),e("div",{class:"icon",onClick:n},[$(ne)])])):_("",!0)],64))}});const B=k(le,[["__scopeId","data-v-2666cd56"]]),ie=s=>(I("data-v-96b67db5"),s=s(),D(),s),ce={key:0},re=ie(()=>e("p",{class:"spotDescriptionTitle"},"Spot",-1)),de=C({__name:"PlaceMap",props:{place:{},draftSpot:{}},emits:["clickNewSpotPosition"],setup(s,{emit:r}){const c=s,v=r,d={"background-image":`url(${c.place.map})`},t=g(null),{deleteSpot:n,editSpotDescription:y}=U(),u=()=>{t.value&&(n(c.place.id,t.value),t.value=null)},f=o=>{if(o.preventDefault(),c.draftSpot){const l=o.target.getBoundingClientRect(),h=l.right-l.left,m=l.bottom-l.top,S=o.clientX-l.left,R=o.clientY-l.top,E=S/h*100,G=R/m*100;v("clickNewSpotPosition",{x:E,y:G})}},b=o=>{t.value&&(y(c.place.id,{...t.value,description:o}),t.value.description=o)};return(o,p)=>(a(),i(w,null,[e("div",{class:"map",style:d,onClick:f},[(a(!0),i(w,null,N(c.place.spots,(l,h)=>(a(),V(L,{key:`${l.x}-${l.y}`,value:h+1,x:l.x,y:l.y,onClick:m=>t.value=l},null,8,["value","x","y","onClick"]))),128)),o.draftSpot?(a(),V(L,{key:`${o.draftSpot.x}-${o.draftSpot.y}`,value:"X",x:o.draftSpot.x,y:o.draftSpot.y},null,8,["x","y"])):_("",!0)]),t.value?(a(),i("div",ce,[e("div",{class:"titleSpot"},[re,e("button",{onClick:u},"Supprimer Spot")]),$(B,{text:t.value.description,onOnUpdate:b},null,8,["text"])])):_("",!0)],64))}});const pe=k(de,[["__scopeId","data-v-96b67db5"]]),ue=s=>(I("data-v-07f43c97"),s=s(),D(),s),_e={class:"title"},ve={class:"area"},fe={key:0,class:"description"},he={class:"addSpotContainer"},ke={key:1},me={class:"spotDescription"},ye=ue(()=>e("label",{for:"descriptionSpot"},"Description du spot",-1)),Se=C({__name:"PlaceView",setup(s){const r=A(),{getPlaceById:c,addSpot:v,editPlace:d}=U(),t=T(()=>c(r.params.id)),n=g(null),y=()=>{var o;n.value&&v((o=t.value)==null?void 0:o.id,n.value),n.value=null},u=()=>{n.value={description:"",x:50,y:50}},f=o=>{n.value&&(n.value.x=o.x,n.value.y=o.y)},b=o=>{var p;d((p=t.value)==null?void 0:p.id,{description:o})};return(o,p)=>{var l,h,m;return a(),i(w,null,[e("p",_e,x((l=t.value)==null?void 0:l.name),1),e("p",ve,x((h=t.value)==null?void 0:h.area)+" ha",1),(m=t.value)!=null&&m.description?(a(),i("p",fe,[$(B,{text:t.value.description,onOnUpdate:b},null,8,["text"])])):_("",!0),t.value?(a(),V(pe,{key:1,place:t.value,"draft-spot":n.value,onClickNewSpotPosition:f},null,8,["place","draft-spot"])):_("",!0),e("div",he,[n.value?_("",!0):(a(),i("button",{key:0,onClick:u},"Ajouter un spot")),n.value?(a(),i("div",ke,[e("div",null,[e("button",{onClick:y},"Valider"),e("button",{onClick:p[0]||(p[0]=S=>n.value=null)},"Annuler")]),e("div",me,[ye,P(e("input",{id:"descriptionSpot","onUpdate:modelValue":p[1]||(p[1]=S=>n.value.description=S)},null,512),[[M,n.value.description]])])])):_("",!0)])],64)}}});const $e=k(Se,[["__scopeId","data-v-07f43c97"]]);export{$e as default};
