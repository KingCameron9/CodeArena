import{s as fe,v as M,r as H,c as J,g as w,d as N,h as S,i as E,j as b,k as C,w as I,l as v,m as k,H as ie,e as U,y as K,L as de}from"../chunks/scheduler.201f007e.js";import{d as Q,a as O,J as X,g as pe}from"../chunks/index.fa9ef138.js";import{S as ge,i as he,d as R,v as me,p as L,e as h,a as y,n as _,g as D,s as W,o as be}from"../chunks/index.235626ab.js";import{a as j,c as _e,o as ye,s as Y,d as Z}from"../chunks/firebase.92351020.js";import{S as B}from"../chunks/types.68c5b85d.js";import{w as ve}from"../chunks/index.252cb1cb.js";let ke=j();function x(l,e){let n=_e(ke,l);console.log("hello");const{subscribe:r}=ve(e,t=>{let o=ye(n,s=>{const u=s.docs;let c=[];u.forEach(f=>{c.push({id:f.id,...f.data()})}),t(c)});return()=>o()});return{subscribe:r}}const $={funcName:"compressString",ready:!0,tests:[{args:["aabcccccaaa"],output:"a2b1c5a3"},{args:["abcdef"],output:"abcdef"},{args:["aabbaa"],output:"a2b2a2"},{args:["aa"],output:"a2"},{args:[""],output:""},{args:["aabbbccc"],output:"a2b3c3"}],default:`/**
* @param {string} s
* @return {string} Compressed string
*/

//function must be called "compressString"
function compressString(s) {
    // Write your code here
}
`,docs:`
# String Compression Function

This function takes a string as input and compresses it based on the counts of repeated characters. If the compressed string is not smaller than the original string, it should return the original string.

## Parameters:
- **s** (string): The input string.

## Returns:
- (string): Compressed string or the original string if the compressed version is not smaller.

## Example:
\`\`\`
compressString("aabcccccaaa") -> "a2b1c5a3"
compressString("abcdef") -> "abcdef" (Compressed string is not smaller)
\`\`\`
`},ee={funcName:"lengthOfLongestSubstring",ready:!0,tests:[{args:["abcabcbb"],output:3},{args:["bbbbb"],output:1},{args:["pwwkew"],output:3},{args:["abcabcbb"],output:3},{args:["bbbbb"],output:1},{args:["pwwkew"],output:3},{args:[""],output:0},{args:["abcdef"],output:6},{args:["abba"],output:2},{args:["aab"],output:2},{args:["abcabcabcd"],output:4},{args:["abcdeabcdeabcde"],output:5},{args:["abcdefghijklmnopqrstuvwxyz"],output:26},{args:["1122334455"],output:2},{args:["!@#$%^&*"],output:9},{args:["   "],output:1},{args:["ab cabcbb"],output:4}],default:`/**
* @param {string} s
* @return {number} Length of the longest substring without repeating characters
*/

//function must be called "lengthOfLongestSubstring"
function lengthOfLongestSubstring(s) {
    // Write your code here
}
`,docs:`
# Longest Substring Without Repeating Characters Function

This function takes a string as input and finds the length of the longest substring without repeating characters.

## Parameters:
- **s** (string): The input string.

## Returns:
- (number): Length of the longest substring without repeating characters.

## Example:
\`\`\`
lengthOfLongestSubstring("abcabcbb") -> 3
lengthOfLongestSubstring("bbbbb") -> 1
lengthOfLongestSubstring("pwwkew") -> 3
\`\`\`
`},te={funcName:"pythagorean",ready:!0,tests:[{args:[3,4],output:5},{args:[0,3],output:3},{args:[5,0],output:5},{args:[5,12],output:13},{args:[7,24],output:25}],default:`/**
* @param {number} a
* @param {number} b
* @return {number} returns c given the pythagorean theorem sqrt(a^2 + b^2) = c
*/

//function must be called "pythagorean"
function pythagorean(a, b) {
    // Write your code here
}
`,docs:`
# pythagorean Function

This function takes two numbers as input and returns them using the pythagorean theorem.

## Parameters:
- **a** (number): The first number.
- **b** (number): The second number.

## Returns:
- (number): c

## Example:
\`\`\`
pythagorean(3, 4) -> 5
pythagorean(0, 3) -> 3
pythagorean(5, 0) -> 5
\`\`\`
`},ne={funcName:"reverseString",ready:!0,tests:[{args:["hello"],output:"olleh"},{args:["world"],output:"dlrow"},{args:["12345"],output:"54321"},{args:["drew"],output:"werd"},{args:["sammy"],output:"ymmas"}],default:`/**
* @param {string} str
* @return {string} Reversed string
*/

        //function must be called "answer"
const reverseString = function(str){
    // Write your code here
}
`,docs:`
# Reverse String Function

This function takes a string as input and returns the reversed string.

## Parameters:
- **str** (string): The input string to be reversed.

## Returns:
- (string): The reversed version of the input string.

## Example:
\`\`\`
reverseString("hello") -> "olleh"
reverseString("world") -> "dlrow"
\`\`\`
`},se={funcName:"toCamelCase",ready:!0,tests:[{args:["hello_world"],output:"helloWorld"},{args:["hello_world_example"],output:"helloWorldExample"},{args:["some_text"],output:"someText"},{args:["camel_caseString"],output:"camelCaseString"}],default:`/**
* @param {string} str
* @return {string} Camel cased string
*/

//function must be called "answer"
const toCamelCase = function(str){
    // Write your code here
}
`,docs:`
# Camel Case Conversion Function

This function takes a string as input and converts it into camel case.

## Parameters:
- **str** (string): The input string to be converted to camel case.

## Returns:
- (string): The input string converted to camel case.

## Example:
\`\`\`
toCamelCase("hello_world") -> "helloWorld"
toCamelCase("some_text") -> "someText"
toCamelCase("some_text") -> "someText"
toCamelCase("snake_case_is_cool") -> "snakeCaseIsCool"
\`\`\`
`};const{console:we}=pe,T="src/routes/host/+page.svelte";function oe(l,e,n){const r=l.slice();return r[8]=e[n],r}function ae(l,e,n){const r=l.slice();return r[8]=e[n],r}function F(l){let e,n;const r={c:function(){e=w("p"),n=v(l[4]),this.h()},l:function(o){e=S(o,"P",{style:!0});var s=E(e);n=k(s,l[4]),s.forEach(h),this.h()},h:function(){b(e,"position","absolute"),b(e,"top","2"),b(e,"left","2%"),b(e,"color","white"),b(e,"font-size","25px"),C(e,T,67,4,1600)},m:function(o,s){y(o,e,s),_(e,n)},p:I,d:function(o){o&&h(e)}};return R("SvelteRegisterBlock",{block:r,id:F.name,type:"if",source:"(45:0) {#if $game?.state == State.playing}",ctx:l}),r}function z(l){let e,n,r,t,o;function s(i,a){return i[0]==-1?le:re}let u=s(l),c=u(l),f=L(l[3]),d=[];for(let i=0;i<f.length;i+=1)d[i]=q(ae(l,f,i));const p={c:function(){e=w("p"),n=v(l[4]),r=J(),c.c(),t=J(),o=w("div");for(let a=0;a<d.length;a+=1)d[a].c();this.h()},l:function(a){e=S(a,"P",{style:!0});var g=E(e);n=k(g,l[4]),g.forEach(h),r=N(a),c.l(a),t=N(a),o=S(a,"DIV",{class:!0});var m=E(o);for(let P=0;P<d.length;P+=1)d[P].l(m);m.forEach(h),this.h()},h:function(){b(e,"color","white"),b(e,"font-size","30px"),C(e,T,78,8,1892),D(o,"class","players-container s-2B9GJiAItJDh"),C(o,T,86,8,2171)},m:function(a,g){y(a,e,g),_(e,n),y(a,r,g),c.m(a,g),y(a,t,g),y(a,o,g);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(o,null)},p:function(a,g){if(u===(u=s(a))&&c?c.p(a,g):(c.d(1),c=u(a),c&&(c.c(),c.m(t.parentNode,t))),g&8){f=L(a[3]);let m;for(m=0;m<f.length;m+=1){const P=ae(a,f,m);d[m]?d[m].p(P,g):(d[m]=q(P),d[m].c(),d[m].m(o,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=f.length}},d:function(a){a&&(h(e),h(r),h(t),h(o)),c.d(a),ie(d,a)}};return R("SvelteRegisterBlock",{block:p,id:z.name,type:"if",source:"(56:4) {#if $game?.state === State.waiting}",ctx:l}),p}function re(l){let e,n,r;const t={c:function(){e=w("p"),n=v("Starting in... "),r=v(l[0]),this.h()},l:function(s){e=S(s,"P",{style:!0});var u=E(e);n=k(u,"Starting in... "),r=k(u,l[0]),u.forEach(h),this.h()},h:function(){b(e,"font-size","25px"),b(e,"margin-bottom","0"),C(e,T,83,12,2077)},m:function(s,u){y(s,e,u),_(e,n),_(e,r)},p:function(s,u){u&1&&W(r,s[0])},d:function(s){s&&h(e)}};return R("SvelteRegisterBlock",{block:t,id:re.name,type:"else",source:"(61:8) {:else}",ctx:l}),t}function le(l){let e,n="Start game",r,t;const o={c:function(){e=w("button"),e.textContent=n,this.h()},l:function(u){e=S(u,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),de(e)!=="svelte-16l6qx9"&&(e.textContent=n),this.h()},h:function(){D(e,"id","start-button"),D(e,"class","s-2B9GJiAItJDh"),C(e,T,81,12,1982)},m:function(u,c){y(u,e,c),r||(t=be(e,"click",l[6],!1,!1,!1,!1),r=!0)},p:I,d:function(u){u&&h(e),r=!1,t()}};return R("SvelteRegisterBlock",{block:o,id:le.name,type:"if",source:"(59:8) {#if wait == -1}",ctx:l}),o}function q(l){let e,n,r=l[8].id+"",t,o;const s={c:function(){e=w("div"),n=w("p"),t=v(r),o=J(),this.h()},l:function(c){e=S(c,"DIV",{class:!0});var f=E(e);n=S(f,"P",{style:!0});var d=E(n);t=k(d,r),d.forEach(h),o=N(f),f.forEach(h),this.h()},h:function(){b(n,"text-align","center"),b(n,"color","white"),b(n,"font-size","20px"),C(n,T,89,24,2321),D(e,"class","player-container s-2B9GJiAItJDh"),C(e,T,88,20,2266)},m:function(c,f){y(c,e,f),_(e,n),_(n,t),_(e,o)},p:function(c,f){f&8&&r!==(r=c[8].id+"")&&W(t,r)},d:function(c){c&&h(e)}};return R("SvelteRegisterBlock",{block:s,id:q.name,type:"each",source:"(66:16) {#each $players as player}",ctx:l}),s}function G(l){let e,n,r,t,o=L(O(l[3])),s=[];for(let c=0;c<o.length;c+=1)s[c]=A(oe(l,o,c));const u={c:function(){e=w("p"),n=v(l[1]),r=J(),t=w("div");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l:function(f){e=S(f,"P",{style:!0});var d=E(e);n=k(d,l[1]),d.forEach(h),r=N(f),t=S(f,"DIV",{class:!0,style:!0});var p=E(t);for(let i=0;i<s.length;i+=1)s[i].l(p);p.forEach(h),this.h()},h:function(){b(e,"font-size","30px"),C(e,T,96,8,2524),D(t,"class","player-container s-2B9GJiAItJDh"),b(t,"flex-direction","column"),b(t,"width","50%"),b(t,"overflow","hidden"),b(t,"size","30px"),C(t,T,98,8,2572)},m:function(f,d){y(f,e,d),_(e,n),y(f,r,d),y(f,t,d);for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(t,null)},p:function(f,d){if(d&2&&W(n,f[1]),d&8){o=L(O(f[3]));let p;for(p=0;p<o.length;p+=1){const i=oe(f,o,p);s[p]?s[p].p(i,d):(s[p]=A(i),s[p].c(),s[p].m(t,null))}for(;p<s.length;p+=1)s[p].d(1);s.length=o.length}},d:function(f){f&&(h(e),h(r),h(t)),ie(s,f)}};return R("SvelteRegisterBlock",{block:u,id:G.name,type:"if",source:"(74:4) {#if $game?.state === State.playing}",ctx:l}),u}function ce(l){let e,n=l[8].index+"",r,t,o=l[8].id+"",s,u,c=l[8].points+"",f;const d={c:function(){e=w("p"),r=v(n),t=v(". "),s=v(o),u=J(),f=v(c),this.h()},l:function(i){e=S(i,"P",{});var a=E(e);r=k(a,n),t=k(a,". "),s=k(a,o),u=N(a),f=k(a,c),a.forEach(h),this.h()},h:function(){C(e,T,103,20,2938)},m:function(i,a){y(i,e,a),_(e,r),_(e,t),_(e,s),_(e,u),_(e,f)},p:function(i,a){a&8&&n!==(n=i[8].index+"")&&W(r,n),a&8&&o!==(o=i[8].id+"")&&W(s,o),a&8&&c!==(c=i[8].points+"")&&W(f,c)},d:function(i){i&&h(e)}};return R("SvelteRegisterBlock",{block:d,id:ce.name,type:"else",source:"(81:16) {:else}",ctx:l}),d}function ue(l){let e,n=l[8].index+"",r,t,o=l[8].id+"",s,u,c=l[8].finishedTime+"",f;const d={c:function(){e=w("p"),r=v(n),t=v(". "),s=v(o),u=v(" Finished in "),f=v(c),this.h()},l:function(i){e=S(i,"P",{style:!0});var a=E(e);r=k(a,n),t=k(a,". "),s=k(a,o),u=k(a," Finished in "),f=k(a,c),a.forEach(h),this.h()},h:function(){b(e,"color","green"),C(e,T,101,20,2804)},m:function(i,a){y(i,e,a),_(e,r),_(e,t),_(e,s),_(e,u),_(e,f)},p:function(i,a){a&8&&n!==(n=i[8].index+"")&&W(r,n),a&8&&o!==(o=i[8].id+"")&&W(s,o),a&8&&c!==(c=i[8].finishedTime+"")&&W(f,c)},d:function(i){i&&h(e)}};return R("SvelteRegisterBlock",{block:d,id:ue.name,type:"if",source:"(79:16) {#if player.finishedTime != null}",ctx:l}),d}function A(l){let e;function n(s,u){return s[8].finishedTime!=null?ue:ce}let r=n(l),t=r(l);const o={c:function(){t.c(),e=U()},l:function(u){t.l(u),e=U()},m:function(u,c){t.m(u,c),y(u,e,c)},p:function(u,c){r===(r=n(u))&&t?t.p(u,c):(t.d(1),t=r(u),t&&(t.c(),t.m(e.parentNode,e)))},d:function(u){u&&h(e),t.d(u)}};return R("SvelteRegisterBlock",{block:o,id:A.name,type:"each",source:"(78:12) {#each sortPlayersByScore($players) as player}",ctx:l}),o}function V(l){var c,f,d;let e,n,r,t=((c=l[2])==null?void 0:c.state)==B.playing&&F(l),o=((f=l[2])==null?void 0:f.state)===B.waiting&&z(l),s=((d=l[2])==null?void 0:d.state)===B.playing&&G(l);const u={c:function(){t&&t.c(),e=J(),n=w("div"),o&&o.c(),r=J(),s&&s.c(),this.h()},l:function(i){t&&t.l(i),e=N(i),n=S(i,"DIV",{style:!0});var a=E(n);o&&o.l(a),r=N(a),s&&s.l(a),a.forEach(h),this.h()},h:function(){b(n,"color","white"),b(n,"background-color","#1E1E1E"),b(n,"display","flex"),b(n,"align-items","center"),b(n,"width","100vw"),b(n,"height","100vh"),b(n,"flex-direction","column"),C(n,T,76,0,1700)},m:function(i,a){t&&t.m(i,a),y(i,e,a),y(i,n,a),o&&o.m(n,null),_(n,r),s&&s.m(n,null)},p:function(i,[a]){var g,m,P;((g=i[2])==null?void 0:g.state)==B.playing?t?t.p(i,a):(t=F(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),((m=i[2])==null?void 0:m.state)===B.waiting?o?o.p(i,a):(o=z(i),o.c(),o.m(n,r)):o&&(o.d(1),o=null),((P=i[2])==null?void 0:P.state)===B.playing?s?s.p(i,a):(s=G(i),s.c(),s.m(n,null)):s&&(s.d(1),s=null)},i:I,o:I,d:function(i){i&&(h(e),h(n)),t&&t.d(i),o&&o.d(),s&&s.d()}};return R("SvelteRegisterBlock",{block:u,id:V.name,type:"component",source:"",ctx:l}),u}function Se(l,e,n){let r,t,{$$slots:o={},$$scope:s}=e;me("Page",o,[]);let u=Math.round(Math.random()*1e5);Y(Z(j(),"/games/"+u),{time:100,state:B.waiting,questions:JSON.stringify([te,ne,se,ee,$])});const c=Q("/games/"+u);M(c,"game"),H(l,c,g=>n(2,r=g));let f=-1,d="Scorebard";function p(){n(0,f=5);const g=async()=>{setTimeout(()=>{if(n(0,f--,f),f>0)g();else{K(c,r.state=B.playing,r);const m=async()=>{setTimeout(()=>{console.log("time"),K(c,r.time-=1,r),r.time<1?(new X().addConfetti(),n(1,d="Final Scoreboard")):m()},1e3)};m()}},1e3)};g()}const i=x("/games/"+u+"/players",[]);M(i,"players"),H(l,i,g=>n(3,t=g));const a=[];return Object.keys(e).forEach(g=>{!~a.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&we.warn(`<Page> was created with unknown prop '${g}'`)}),l.$capture_state=()=>({sortPlayersByScore:O,State:B,docWrite:Q,colRead:x,doc:Z,getFirestore:j,setDoc:Y,camelCaseConversion:se,pythagorean:te,reverseString:ne,longestSubstringWithoutRepeating:ee,stringCompression:$,JSConfetti:X,code:u,game:c,wait:f,text:d,startGame:p,players:i,$game:r,$players:t}),l.$inject_state=g=>{"code"in g&&n(4,u=g.code),"wait"in g&&n(0,f=g.wait),"text"in g&&n(1,d=g.text)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),[f,d,r,t,u,c,p,i]}class We extends ge{constructor(e){super(e),he(this,e,Se,V,fe,{}),R("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:V.name})}}export{We as component};
