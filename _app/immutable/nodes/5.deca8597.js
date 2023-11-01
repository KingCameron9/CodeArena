import{s as S,f as h,a as b,g as m,h as D,P,c as k,d as I,k as C,j as c,i as F,x as d,G as V,y as T,p as G}from"../chunks/scheduler.8ded9b35.js";import{S as q,i as z}from"../chunks/index.7b5f96ef.js";import{g as B}from"../chunks/navigation.1081ebaa.js";import{g as H,d as N,a as U,s as M}from"../chunks/firebase.e19164af.js";import{j as O}from"../chunks/gameInfo.548936e8.js";function E(o){let e,t="Game not found";return{c(){e=h("p"),e.textContent=t,this.h()},l(s){e=m(s,"P",{style:!0,"data-svelte-h":!0}),P(e)!=="svelte-71nb8w"&&(e.textContent=t),this.h()},h(){C(e,"color","red"),C(e,"position","fixed"),C(e,"top","80%")},m(s,r){F(s,e,r)},d(s){s&&I(e)}}}function A(o){let e,t,s,r="Helix",_,u,g,p,l,a,x="Click to join",v,j,w,n=o[2]&&E();return{c(){e=h("div"),t=h("div"),s=h("p"),s.textContent=r,_=b(),u=h("input"),g=b(),p=h("input"),l=b(),a=h("button"),a.textContent=x,v=b(),n&&n.c(),this.h()},l(f){e=m(f,"DIV",{class:!0});var y=D(e);t=m(y,"DIV",{class:!0});var i=D(t);s=m(i,"P",{style:!0,"data-svelte-h":!0}),P(s)!=="svelte-9jl68k"&&(s.textContent=r),_=k(i),u=m(i,"INPUT",{placeholder:!0,type:!0,class:!0}),g=k(i),p=m(i,"INPUT",{placeholder:!0,type:!0,class:!0}),l=k(i),a=m(i,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),P(a)!=="svelte-19pwk96"&&(a.textContent=x),v=k(i),n&&n.l(i),i.forEach(I),y.forEach(I),this.h()},h(){C(s,"font-size","30px"),c(u,"placeholder","code"),c(u,"type","text"),c(u,"class","input-text svelte-1dort2x"),c(p,"placeholder","username"),c(p,"type","text"),c(p,"class","input-text svelte-1dort2x"),C(a,"margin","20px"),c(a,"class","input-text svelte-1dort2x"),c(t,"class","input-container svelte-1dort2x"),c(e,"class","input-page-container svelte-1dort2x")},m(f,y){F(f,e,y),d(e,t),d(t,s),d(t,_),d(t,u),o[4](u),d(t,g),d(t,p),o[5](p),d(t,l),d(t,a),d(t,v),n&&n.m(t,null),j||(w=V(a,"click",o[3]),j=!0)},p(f,[y]){f[2]?n||(n=E(),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i:T,o:T,d(f){f&&I(e),o[4](null),o[5](null),n&&n.d(),j=!1,w()}}}function J(o,e,t){let s,r,_=!1;async function u(){let l=s.value,a=r.value,x="/games/"+l,v=await H(N(U(),x));a.length<1||l.length<1||(v.exists()?(x+="/players/"+a,O.set({code:l,name:a}),await M(N(U(),x),{uid:Math.random(),points:0}),B("/game/")):t(2,_=!0))}function g(l){G[l?"unshift":"push"](()=>{s=l,t(0,s)})}function p(l){G[l?"unshift":"push"](()=>{r=l,t(1,r)})}return[s,r,_,u,g,p]}class X extends q{constructor(e){super(),z(this,e,J,A,S,{})}}export{X as component};
