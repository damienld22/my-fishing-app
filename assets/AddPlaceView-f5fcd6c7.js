import{e as v,f as V,p as h,h as r,v as i,x as l,k as e,m as k,u as C,F as w,i as c,y,z as g,_ as x}from"./index-3604ea6a.js";import{t as P,u as A}from"./usePlaces-91df054d.js";const n=s=>(y("data-v-5ba62f3e"),s=s(),g(),s),B=n(()=>e("p",{class:"title"},"Création d'un spot",-1)),I=n(()=>e("label",{for:"name"},"Nom du plan d'eau",-1)),U=n(()=>e("label",{for:"area"},"Taille (ha)",-1)),E=n(()=>e("label",{for:"description"},"Description",-1)),F=n(()=>e("label",{for:"map"},"Carte",-1)),N=["src"],S=v({__name:"AddPlaceView",setup(s){const t=V({name:"",description:"",map:"",area:0,spots:[]}),{addPlace:u}=A(),p=h(),m=()=>{u(t),p.back()};async function _(d){const a=d.target.files;if(a&&a[0]){const f=a[0],b=await P(f);t.map=b}}return(d,o)=>(c(),r(w,null,[B,I,i(e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),id:"name"},null,512),[[l,t.name]]),U,i(e("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>t.area=a),type:"number",id:"area"},null,512),[[l,t.area]]),E,i(e("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>t.description=a),id:"description"},null,512),[[l,t.description]]),F,e("input",{type:"file",id:"map",onChange:_},null,32),t.map?(c(),r("img",{key:0,alt:"map",class:"preview",src:t.map,height:150},null,8,N)):k("",!0),e("button",{onClick:o[3]||(o[3]=a=>C(p).back())},"Annuler"),e("button",{onClick:m},"Valider")],64))}});const T=x(S,[["__scopeId","data-v-5ba62f3e"]]);export{T as default};