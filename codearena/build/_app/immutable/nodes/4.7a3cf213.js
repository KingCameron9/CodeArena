import{s as M,a as E,f as y,c as P,g as w,h as k,d as f,k as g,i as b,x as d,y as L,z as R,l as _,m as v,j as W,L as B,n as S,e as F,P as U,G as A,E as z}from"../chunks/scheduler.8ded9b35.js";import{d as H,e as N,a as O,J as K}from"../chunks/index.b41c7c78.js";import{S as Q,i as X}from"../chunks/index.7b5f96ef.js";import{a as G,c as Y,o as Z,s as $,d as ee}from"../chunks/firebase.e19164af.js";import{S as T}from"../chunks/types.68c5b85d.js";import{w as te}from"../chunks/index.e7b70d8b.js";let se=G();function re(u,e){let n=Y(se,u);console.log("hello");const{subscribe:o}=te(e,s=>{let t=Z(n,a=>{const l=a.docs;let c=[];l.forEach(p=>{c.push({id:p.id,...p.data()})}),s(c)});return()=>t()});return{subscribe:o}}const ne={funcName:"compressString",ready:!0,tests:[{args:["aabcccccaaa"],output:"a2b1c5a3"},{args:["abcdef"],output:"abcdef"},{args:["aabbaa"],output:"a2b2a2"},{args:["aa"],output:"a2"},{args:[""],output:""},{args:["aabbbccc"],output:"a2b3c3"}],default:`/**
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
`},ae={funcName:"lengthOfLongestSubstring",ready:!0,tests:[{args:["abcabcbb"],output:3},{args:["bbbbb"],output:1},{args:["pwwkew"],output:3},{args:["abcabcbb"],output:3},{args:["bbbbb"],output:1},{args:["pwwkew"],output:3},{args:[""],output:0},{args:["abcdef"],output:6},{args:["abba"],output:2},{args:["aab"],output:2},{args:["abcabcabcd"],output:4},{args:["abcdeabcdeabcde"],output:5},{args:["abcdefghijklmnopqrstuvwxyz"],output:26},{args:["1122334455"],output:2},{args:["!@#$%^&*"],output:9},{args:["   "],output:1},{args:["ab cabcbb"],output:4}],default:`/**
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
`},ie={funcName:"pythagorean",ready:!0,tests:[{args:[3,4],output:5},{args:[0,3],output:3},{args:[5,0],output:5},{args:[5,12],output:13},{args:[7,24],output:25}],default:`/**
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
`},oe={funcName:"reverseString",ready:!0,tests:[{args:["hello"],output:"olleh"},{args:["world"],output:"dlrow"},{args:["12345"],output:"54321"},{args:["drew"],output:"werd"},{args:["sammy"],output:"ymmas"}],default:`/**
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
`},le={funcName:"toCamelCase",ready:!0,tests:[{args:["hello_world"],output:"helloWorld"},{args:["hello_world_example"],output:"helloWorldExample"},{args:["some_text"],output:"someText"},{args:["camel_caseString"],output:"camelCaseString"}],default:`/**
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
`};function I(u,e,n){const o=u.slice();return o[8]=e[n],o}function q(u,e,n){const o=u.slice();return o[8]=e[n],o}function D(u){let e,n;return{c(){e=y("p"),n=_(u[4]),this.h()},l(o){e=w(o,"P",{style:!0});var s=k(e);n=v(s,u[4]),s.forEach(f),this.h()},h(){g(e,"position","absolute"),g(e,"top","2"),g(e,"left","2%"),g(e,"color","white"),g(e,"font-size","25px")},m(o,s){b(o,e,s),d(e,n)},p:L,d(o){o&&f(e)}}}function j(u){let e,n,o,s,t;function a(r,m){return r[0]==-1?ce:ue}let l=a(u),c=l(u),p=N(u[3]),i=[];for(let r=0;r<p.length;r+=1)i[r]=x(q(u,p,r));return{c(){e=y("p"),n=_(u[4]),o=E(),c.c(),s=E(),t=y("div");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){e=w(r,"P",{style:!0});var m=k(e);n=v(m,u[4]),m.forEach(f),o=P(r),c.l(r),s=P(r),t=w(r,"DIV",{class:!0});var h=k(t);for(let C=0;C<i.length;C+=1)i[C].l(h);h.forEach(f),this.h()},h(){g(e,"color","white"),g(e,"font-size","30px"),W(t,"class","players-container svelte-12rilw")},m(r,m){b(r,e,m),d(e,n),b(r,o,m),c.m(r,m),b(r,s,m),b(r,t,m);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(t,null)},p(r,m){if(l===(l=a(r))&&c?c.p(r,m):(c.d(1),c=l(r),c&&(c.c(),c.m(s.parentNode,s))),m&8){p=N(r[3]);let h;for(h=0;h<p.length;h+=1){const C=q(r,p,h);i[h]?i[h].p(C,m):(i[h]=x(C),i[h].c(),i[h].m(t,null))}for(;h<i.length;h+=1)i[h].d(1);i.length=p.length}},d(r){r&&(f(e),f(o),f(s),f(t)),c.d(r),B(i,r)}}}function ue(u){let e,n,o;return{c(){e=y("p"),n=_("Starting in... "),o=_(u[0]),this.h()},l(s){e=w(s,"P",{style:!0});var t=k(e);n=v(t,"Starting in... "),o=v(t,u[0]),t.forEach(f),this.h()},h(){g(e,"font-size","25px"),g(e,"margin-bottom","0")},m(s,t){b(s,e,t),d(e,n),d(e,o)},p(s,t){t&1&&S(o,s[0])},d(s){s&&f(e)}}}function ce(u){let e,n="Start game",o,s;return{c(){e=y("button"),e.textContent=n,this.h()},l(t){e=w(t,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),U(e)!=="svelte-16l6qx9"&&(e.textContent=n),this.h()},h(){W(e,"id","start-button"),W(e,"class","svelte-12rilw")},m(t,a){b(t,e,a),o||(s=A(e,"click",u[6]),o=!0)},p:L,d(t){t&&f(e),o=!1,s()}}}function x(u){let e,n,o=u[8].id+"",s,t;return{c(){e=y("div"),n=y("p"),s=_(o),t=E(),this.h()},l(a){e=w(a,"DIV",{class:!0});var l=k(e);n=w(l,"P",{style:!0});var c=k(n);s=v(c,o),c.forEach(f),t=P(l),l.forEach(f),this.h()},h(){g(n,"text-align","center"),g(n,"color","white"),g(n,"font-size","20px"),W(e,"class","player-container svelte-12rilw")},m(a,l){b(a,e,l),d(e,n),d(n,s),d(e,t)},p(a,l){l&8&&o!==(o=a[8].id+"")&&S(s,o)},d(a){a&&f(e)}}}function V(u){let e,n,o,s,t=N(O(u[3])),a=[];for(let l=0;l<t.length;l+=1)a[l]=J(I(u,t,l));return{c(){e=y("p"),n=_(u[1]),o=E(),s=y("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=w(l,"P",{style:!0});var c=k(e);n=v(c,u[1]),c.forEach(f),o=P(l),s=w(l,"DIV",{class:!0,style:!0});var p=k(s);for(let i=0;i<a.length;i+=1)a[i].l(p);p.forEach(f),this.h()},h(){g(e,"font-size","30px"),W(s,"class","player-container svelte-12rilw"),g(s,"flex-direction","column"),g(s,"width","50%"),g(s,"overflow","hidden"),g(s,"size","30px")},m(l,c){b(l,e,c),d(e,n),b(l,o,c),b(l,s,c);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(s,null)},p(l,c){if(c&2&&S(n,l[1]),c&8){t=N(O(l[3]));let p;for(p=0;p<t.length;p+=1){const i=I(l,t,p);a[p]?a[p].p(i,c):(a[p]=J(i),a[p].c(),a[p].m(s,null))}for(;p<a.length;p+=1)a[p].d(1);a.length=t.length}},d(l){l&&(f(e),f(o),f(s)),B(a,l)}}}function pe(u){let e,n=u[8].index+"",o,s,t=u[8].id+"",a,l,c=u[8].points+"",p;return{c(){e=y("p"),o=_(n),s=_(". "),a=_(t),l=E(),p=_(c)},l(i){e=w(i,"P",{});var r=k(e);o=v(r,n),s=v(r,". "),a=v(r,t),l=P(r),p=v(r,c),r.forEach(f)},m(i,r){b(i,e,r),d(e,o),d(e,s),d(e,a),d(e,l),d(e,p)},p(i,r){r&8&&n!==(n=i[8].index+"")&&S(o,n),r&8&&t!==(t=i[8].id+"")&&S(a,t),r&8&&c!==(c=i[8].points+"")&&S(p,c)},d(i){i&&f(e)}}}function fe(u){let e,n=u[8].index+"",o,s,t=u[8].id+"",a,l,c=u[8].finishedTime+"",p;return{c(){e=y("p"),o=_(n),s=_(". "),a=_(t),l=_(" Finished in "),p=_(c),this.h()},l(i){e=w(i,"P",{style:!0});var r=k(e);o=v(r,n),s=v(r,". "),a=v(r,t),l=v(r," Finished in "),p=v(r,c),r.forEach(f),this.h()},h(){g(e,"color","green")},m(i,r){b(i,e,r),d(e,o),d(e,s),d(e,a),d(e,l),d(e,p)},p(i,r){r&8&&n!==(n=i[8].index+"")&&S(o,n),r&8&&t!==(t=i[8].id+"")&&S(a,t),r&8&&c!==(c=i[8].finishedTime+"")&&S(p,c)},d(i){i&&f(e)}}}function J(u){let e;function n(t,a){return t[8].finishedTime!=null?fe:pe}let o=n(u),s=o(u);return{c(){s.c(),e=F()},l(t){s.l(t),e=F()},m(t,a){s.m(t,a),b(t,e,a)},p(t,a){o===(o=n(t))&&s?s.p(t,a):(s.d(1),s=o(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){t&&f(e),s.d(t)}}}function ge(u){var l,c,p;let e,n,o,s=((l=u[2])==null?void 0:l.state)==T.playing&&D(u),t=((c=u[2])==null?void 0:c.state)===T.waiting&&j(u),a=((p=u[2])==null?void 0:p.state)===T.playing&&V(u);return{c(){s&&s.c(),e=E(),n=y("div"),t&&t.c(),o=E(),a&&a.c(),this.h()},l(i){s&&s.l(i),e=P(i),n=w(i,"DIV",{style:!0});var r=k(n);t&&t.l(r),o=P(r),a&&a.l(r),r.forEach(f),this.h()},h(){g(n,"color","white"),g(n,"background-color","#1E1E1E"),g(n,"display","flex"),g(n,"align-items","center"),g(n,"width","100vw"),g(n,"height","100vh"),g(n,"flex-direction","column")},m(i,r){s&&s.m(i,r),b(i,e,r),b(i,n,r),t&&t.m(n,null),d(n,o),a&&a.m(n,null)},p(i,[r]){var m,h,C;((m=i[2])==null?void 0:m.state)==T.playing?s?s.p(i,r):(s=D(i),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),((h=i[2])==null?void 0:h.state)===T.waiting?t?t.p(i,r):(t=j(i),t.c(),t.m(n,o)):t&&(t.d(1),t=null),((C=i[2])==null?void 0:C.state)===T.playing?a?a.p(i,r):(a=V(i),a.c(),a.m(n,null)):a&&(a.d(1),a=null)},i:L,o:L,d(i){i&&(f(e),f(n)),s&&s.d(i),t&&t.d(),a&&a.d()}}}function he(u,e,n){let o,s,t=Math.round(Math.random()*1e5);$(ee(G(),"/games/"+t),{time:100,state:T.waiting,questions:JSON.stringify([ie,oe,le,ae,ne])});const a=H("/games/"+t);R(u,a,r=>n(2,o=r));let l=-1,c="Scorebard";function p(){n(0,l=5);const r=async()=>{setTimeout(()=>{if(n(0,l--,l),l>0)r();else{z(a,o.state=T.playing,o);const m=async()=>{setTimeout(()=>{console.log("time"),z(a,o.time-=1,o),o.time<1?(new K().addConfetti(),n(1,c="Final Scoreboard")):m()},1e3)};m()}},1e3)};r()}const i=re("/games/"+t+"/players",[]);return R(u,i,r=>n(3,s=r)),[l,c,o,s,t,a,p,i]}class we extends Q{constructor(e){super(),X(this,e,he,ge,M,{})}}export{we as component};
