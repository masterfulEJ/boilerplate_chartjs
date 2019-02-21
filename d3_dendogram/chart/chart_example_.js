/* Copyright 2019 Observable, Inc. */
!function(){"use strict";const e=33,t=17;function n(e,t,n){n=n||{};var r=e.ownerDocument,o=r.defaultView.CustomEvent;"function"==typeof o?o=new o(t,{detail:n}):((o=r.createEvent("Event")).initEvent(t,!1,!1),o.detail=n),e.dispatchEvent(o)}function r(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function o(e){return e===(0|e)+""}function i(e){const t=document.createElement("span");return t.className="observablehq--cellname",t.textContent=`${e} = `,t}const a=Symbol.prototype.toString;function s(e){return a.call(e)}const{getOwnPropertySymbols:l,prototype:{hasOwnProperty:u}}=Object,{toStringTag:c}=Symbol,d={},f=l;function p(e,t){return u.call(e,t)}function h(e){return e[c]||e.constructor&&e.constructor.name||"Object"}function m(e,t){try{const r=e[t];return r&&r.constructor,r}catch(n){return d}}function v(e,t,o){const a=r(e);let s,l,u;e instanceof Map?(s=`Map(${e.size})`,l=b):e instanceof Set?(s=`Set(${e.size})`,l=_):a?(s=`${e.constructor.name}(${e.length})`,l=w):(s=h(e),l=g);const c=document.createElement("span");c.className="observablehq--expanded",o&&c.appendChild(i(o));const d=c.appendChild(document.createElement("a"));d.innerHTML="<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M4 7L0 1h8z' fill='currentColor' />\n  </svg>",d.appendChild(document.createTextNode(`${s}${a?" [":" {"}`)),d.addEventListener("mouseup",function(t){t.stopPropagation(),J(c,C(e,null,o))}),l=l(e);for(let n=0;!(u=l.next()).done&&n<20;++n)c.appendChild(u.value);if(!u.done){const e=c.appendChild(document.createElement("a"));e.className="observablehq--field",e.style.display="block",e.appendChild(document.createTextNode("  … more")),e.addEventListener("mouseup",function(e){e.stopPropagation(),c.insertBefore(u.value,c.lastChild.previousSibling);for(let t=0;!(u=l.next()).done&&t<19;++t)c.insertBefore(u.value,c.lastChild.previousSibling);u.done&&c.removeChild(c.lastChild.previousSibling),n(c,"load")})}return c.appendChild(document.createTextNode(a?"]":"}")),c}function*b(e){for(const[t,n]of e)yield x(t,n);yield*g(e)}function*_(e){for(const t of e)yield E(t);yield*g(e)}function*w(e){for(let t=0,n=e.length;t<n;++t)t in e&&(yield y(t,m(e,t),"observablehq--index"));for(const t in e)!o(t)&&p(e,t)&&(yield y(t,m(e,t),"observablehq--key"));for(const t of f(e))yield y(s(t),m(e,t),"observablehq--symbol")}function*g(e){for(const t in e)p(e,t)&&(yield y(t,m(e,t),"observablehq--key"));for(const t of f(e))yield y(s(t),m(e,t),"observablehq--symbol")}function y(e,t,n){const r=document.createElement("div"),o=r.appendChild(document.createElement("span"));return r.className="observablehq--field",o.className=n,o.textContent=`  ${e}`,r.appendChild(document.createTextNode(": ")),r.appendChild(Y(t)),r}function x(e,t){const n=document.createElement("div");return n.className="observablehq--field",n.appendChild(document.createTextNode("  ")),n.appendChild(Y(e)),n.appendChild(document.createTextNode(" => ")),n.appendChild(Y(t)),n}function E(e){const t=document.createElement("div");return t.className="observablehq--field",t.appendChild(document.createTextNode("  ")),t.appendChild(Y(e)),t}function C(e,t,n){const o=r(e);let a,s,l;if(e instanceof Map?(a=`Map(${e.size})`,s=q):e instanceof Set?(a=`Set(${e.size})`,s=N):o?(a=`${e.constructor.name}(${e.length})`,s=k):(a=h(e),s=P),t){const t=document.createElement("span");return t.className="observablehq--shallow",n&&t.appendChild(i(n)),t.appendChild(document.createTextNode(a)),t.addEventListener("mouseup",function(n){n.stopPropagation(),J(t,C(e))}),t}const u=document.createElement("span");u.className="observablehq--collapsed",n&&u.appendChild(i(n));const c=u.appendChild(document.createElement("a"));c.innerHTML="<svg width=8 height=8 class='observablehq--caret'>\n    <path d='M7 4L1 8V0z' fill='currentColor' />\n  </svg>",c.appendChild(document.createTextNode(`${a}${o?" [":" {"}`)),u.addEventListener("mouseup",function(t){t.stopPropagation(),J(u,v(e,0,n))},!0),s=s(e);for(let r=0;!(l=s.next()).done&&r<20;++r)r>0&&u.appendChild(document.createTextNode(", ")),u.appendChild(l.value);return l.done||u.appendChild(document.createTextNode(", …")),u.appendChild(document.createTextNode(o?"]":"}")),u}function*q(e){for(const[t,n]of e)yield j(t,n);yield*P(e)}function*N(e){for(const t of e)yield Y(t,!0);yield*P(e)}function*k(e){let t=-1,n=0;for(const r=e.length;n<r;++n)n in e&&(n>t+1&&(yield O(n-t-1)),yield Y(m(e,n),!0),t=n);n>t+1&&(yield O(n-t-1));for(const r in e)!o(r)&&p(e,r)&&(yield S(r,m(e,r),"observablehq--key"));for(const r of f(e))yield S(s(r),m(e,r),"observablehq--symbol")}function*P(e){for(const t in e)p(e,t)&&(yield S(t,m(e,t),"observablehq--key"));for(const t of f(e))yield S(s(t),m(e,t),"observablehq--symbol")}function O(e){const t=document.createElement("span");return t.className="observablehq--empty",t.textContent=1===e?"empty":`empty × ${e}`,t}function S(e,t,n){const r=document.createDocumentFragment(),o=r.appendChild(document.createElement("span"));return o.className=n,o.textContent=e,r.appendChild(document.createTextNode(": ")),r.appendChild(Y(t,!0)),r}function j(e,t){const n=document.createDocumentFragment();return n.appendChild(Y(e,!0)),n.appendChild(document.createTextNode(" => ")),n.appendChild(Y(t,!0)),n}function $(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function L(e){return e<0?"-"+$(-e,6):e>9999?"+"+$(e,6):$(e,4)}var M=Error.prototype.toString;var T=RegExp.prototype.toString;const A=20;function z(e){return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g,U)}function U(e){var t=e.charCodeAt(0);switch(t){case 8:return"\\b";case 9:return"\\t";case 11:return"\\v";case 12:return"\\f";case 13:return"\\r"}return t<16?"\\x0"+t.toString(16):t<32?"\\x"+t.toString(16):"\\"+e}function D(e,t){for(var n=0;t.exec(e);)++n;return n}var R=Function.prototype.toString,F={prefix:"async ƒ"},W={prefix:"async ƒ*"},B={prefix:"class"},I={prefix:"ƒ"},H={prefix:"ƒ*"};function G(e,t,n){var r=document.createElement("span");r.className="observablehq--function",n&&r.appendChild(i(n));var o=r.appendChild(document.createElement("span"));return o.className="observablehq--keyword",o.textContent=e.prefix,r.appendChild(document.createTextNode(t)),r}const{prototype:{toString:V}}=Object;function Y(e,t,n,r){let o=typeof e;switch(o){case"boolean":case"undefined":e+="";break;case"number":e=0===e&&1/e<0?"-0":e+"";break;case"bigint":e+="n";break;case"symbol":e=s(e);break;case"function":return function(e,t){var n,r,o=R.call(e);switch(e.constructor&&e.constructor.name){case"AsyncFunction":n=F;break;case"AsyncGeneratorFunction":n=W;break;case"GeneratorFunction":n=H;break;default:n=/^class\b/.test(o)?B:I}return n===B?G(n,"",t):(r=/^(?:async\s*)?(\w+)\s*=>/.exec(o))?G(n,"("+r[1]+")",t):(r=/^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(o))?G(n,r[1]?"("+r[1].replace(/\s*,\s*/g,", ")+")":"()",t):(r=/^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(o))?G(n,r[1]?"("+r[1].replace(/\s*,\s*/g,", ")+")":"()",t):G(n,"(…)",t)}(e,r);case"string":return function(e,t,n,r){if(!1===t){if(D(e,/["\n]/g)<=D(e,/`|\${/g)){const t=document.createElement("span");r&&t.appendChild(i(r));const n=t.appendChild(document.createElement("span"));return n.className="observablehq--string",n.textContent=JSON.stringify(e),t}const o=e.split("\n");if(o.length>A&&!n){const n=document.createElement("div");r&&n.appendChild(i(r));const a=n.appendChild(document.createElement("span"));a.className="observablehq--string",a.textContent="`"+z(o.slice(0,A).join("\n"));const s=n.appendChild(document.createElement("span")),l=o.length-A;return s.textContent=`Show ${l} truncated line${l>1?"s":""}`,s.className="observablehq--string-expand",s.addEventListener("mouseup",function(o){o.stopPropagation(),J(n,Y(e,t,!0,r))}),n}const a=document.createElement("span");r&&a.appendChild(i(r));const s=a.appendChild(document.createElement("span"));return s.className=`observablehq--string${n?" observablehq--expanded":""}`,s.textContent="`"+z(e)+"`",a}const o=document.createElement("span");r&&o.appendChild(i(r));const a=o.appendChild(document.createElement("span"));return a.className="observablehq--string",a.textContent=JSON.stringify(e.length>100?`${e.slice(0,50)}…${e.slice(-49)}`:e),o}(e,t,n,r);default:if(null===e){o=null,e="null";break}if(e instanceof Date){o="date",a=e,e=isNaN(a)?"Invalid Date":function(e){return 0===e.getUTCMilliseconds()&&0===e.getUTCSeconds()&&0===e.getUTCMinutes()&&0===e.getUTCHours()}(a)?L(a.getUTCFullYear())+"-"+$(a.getUTCMonth()+1,2)+"-"+$(a.getUTCDate(),2):L(a.getFullYear())+"-"+$(a.getMonth()+1,2)+"-"+$(a.getDate(),2)+"T"+$(a.getHours(),2)+":"+$(a.getMinutes(),2)+(a.getMilliseconds()?":"+$(a.getSeconds(),2)+"."+$(a.getMilliseconds(),3):a.getSeconds()?":"+$(a.getSeconds(),2):"");break}if(e===d){o="forbidden",e="[forbidden]";break}switch(V.call(e)){case"[object RegExp]":o="regexp",e=function(e){return T.call(e)}(e);break;case"[object Error]":case"[object DOMException]":o="error",e=function(e){return e.stack||M.call(e)}(e);break;default:return(n?v:C)(e,t,r)}}var a;const l=document.createElement("span");r&&l.appendChild(i(r));const u=l.appendChild(document.createElement("span"));return u.className=`observablehq--${o}`,u.textContent=e,l}function J(e,t){e.classList.contains("observablehq--inspect")&&t.classList.add("observablehq--inspect"),e.parentNode.replaceChild(t,e),n(t,"load")}const X=/\s+\(\d+:\d+\)$/m;class K{constructor(e){if(!e)throw new Error("invalid node");this._node=e,e.classList.add("observablehq")}pending(){const{_node:e}=this;e.classList.remove("observablehq--error"),e.classList.add("observablehq--running")}fulfilled(e,t){const{_node:r}=this;if((!(e instanceof Element||e instanceof Text)||e.parentNode&&e.parentNode!==r)&&(e=Y(e,!1,r.firstChild&&r.firstChild.classList&&r.firstChild.classList.contains("observablehq--expanded"),t)).classList.add("observablehq--inspect"),r.classList.remove("observablehq--running","observablehq--error"),r.firstChild!==e)if(r.firstChild){for(;r.lastChild!==r.firstChild;)r.removeChild(r.lastChild);r.replaceChild(e,r.firstChild)}else r.appendChild(e);n(r,"update")}rejected(e,t){const{_node:r}=this;for(r.classList.remove("observablehq--running"),r.classList.add("observablehq--error");r.lastChild;)r.removeChild(r.lastChild);var o=document.createElement("div");o.className="observablehq--inspect",t&&o.appendChild(i(t)),o.appendChild(document.createTextNode((e+"").replace(X,""))),r.appendChild(o),n(r,"error",{error:e})}}function Q(e){return function(){return e}}K.into=function(e){if("string"==typeof e&&null==(e=document.querySelector(e)))throw new Error("container not found");return function(){return new K(e.appendChild(document.createElement("div")))}};var Z={math:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};var ee=0;function te(e){this.id=e,this.href=window.location.href+"#"+e}te.prototype.toString=function(){return"url("+this.href+")"};var ne={canvas:function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n},context2d:function(e,t,n){null==n&&(n=devicePixelRatio);var r=document.createElement("canvas");r.width=e*n,r.height=t*n,r.style.width=e+"px";var o=r.getContext("2d");return o.scale(n,n),o},download:function(e,t="untitled",n="Save"){const r=document.createElement("a"),o=r.appendChild(document.createElement("button"));async function i(){await new Promise(requestAnimationFrame),URL.revokeObjectURL(r.href),r.removeAttribute("href"),o.textContent=n,o.disabled=!1}return o.textContent=n,r.download=t,r.onclick=(async t=>{if(o.disabled=!0,r.href)return i();o.textContent="Saving…";try{const t=await("function"==typeof e?e():e);o.textContent="Download",r.href=URL.createObjectURL(t)}catch(a){o.textContent=n}if(t.eventPhase)return i();o.disabled=!1}),r},element:function(e,t){var n,r=e+="",o=r.indexOf(":");o>=0&&"xmlns"!==(r=e.slice(0,o))&&(e=e.slice(o+1));var i=Z.hasOwnProperty(r)?document.createElementNS(Z[r],e):document.createElement(e);if(t)for(var a in t)o=(r=a).indexOf(":"),n=t[a],o>=0&&"xmlns"!==(r=a.slice(0,o))&&(a=a.slice(o+1)),Z.hasOwnProperty(r)?i.setAttributeNS(Z[r],a,n):i.setAttribute(a,n);return i},input:function(e){var t=document.createElement("input");return null!=e&&(t.type=e),t},range:function(e,t,n){1===arguments.length&&(t=e,e=null);var r=document.createElement("input");return r.min=e=null==e?0:+e,r.max=t=null==t?1:+t,r.step=null==n?"any":n=+n,r.type="range",r},select:function(e){var t=document.createElement("select");return Array.prototype.forEach.call(e,function(e){var n=document.createElement("option");n.value=n.textContent=e,t.appendChild(n)}),t},svg:function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",[0,0,e,t]),n.setAttribute("width",e),n.setAttribute("height",t),n},text:function(e){return document.createTextNode(e)},uid:function(e){return new te("O-"+(null==e?"":e+"-")+ ++ee)}};var re={buffer:function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=n,r.readAsArrayBuffer(e)})},text:function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=n,r.readAsText(e)})},url:function(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=n,r.readAsDataURL(e)})}};function oe(){return this}function ie(e,t){let n=!1;return{[Symbol.iterator]:oe,next:()=>n?{done:!0}:(n=!0,{done:!1,value:e}),return:()=>(n=!0,t(e),{done:!0}),throw:()=>({done:n=!0})}}function ae(e){let t,n,r=!1;const o=e(function(e){n?(n(e),n=null):r=!0;return t=e});return{[Symbol.iterator]:oe,throw:()=>({done:!0}),return:()=>(null!=o&&o(),{done:!0}),next:function(){return{done:!1,value:r?(r=!1,Promise.resolve(t)):new Promise(e=>n=e)}}}}function se(e){switch(e.type){case"range":case"number":return e.valueAsNumber;case"date":return e.valueAsDate;case"checkbox":return e.checked;case"file":return e.multiple?e.files:e.files[0];default:return e.value}}var le={disposable:ie,filter:function*(e,t){for(var n,r=-1;!(n=e.next()).done;)t(n.value,++r)&&(yield n.value)},input:function(e){return ae(function(t){var n=function(e){switch(e.type){case"button":case"submit":case"checkbox":return"click";case"file":return"change";default:return"input"}}(e),r=se(e);function o(){t(se(e))}return e.addEventListener(n,o),void 0!==r&&t(r),function(){e.removeEventListener(n,o)}})},map:function*(e,t){for(var n,r=-1;!(n=e.next()).done;)yield t(n.value,++r)},observe:ae,queue:function(e){let t;const n=[],r=e(function(e){return n.push(e),t&&(t(n.shift()),t=null),e});return{[Symbol.iterator]:oe,throw:()=>({done:!0}),return:()=>(null!=r&&r(),{done:!0}),next:function(){return{done:!1,value:n.length?Promise.resolve(n.shift()):new Promise(e=>t=e)}}}},range:function*(e,t,n){e=+e,t=+t,n=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+n;for(var r=-1,o=0|Math.max(0,Math.ceil((t-e)/n));++r<o;)yield e+r*n},valueAt:function(e,t){if(!(!isFinite(t=+t)||t<0||t!=t|0))for(var n,r=-1;!(n=e.next()).done;)if(++r===t)return n.value},worker:function(e){const t=URL.createObjectURL(new Blob([e],{type:"text/javascript"})),n=new Worker(t);return ie(n,()=>{n.terminate(),URL.revokeObjectURL(t)})}};function ue(e,t){return function(n){var r,o,i,a,s,l,u,c,d=n[0],f=[],p=null,h=-1;for(s=1,l=arguments.length;s<l;++s){if((r=arguments[s])instanceof Node)f[++h]=r,d+="\x3c!--o:"+h+"--\x3e";else if(Array.isArray(r)){for(u=0,c=r.length;u<c;++u)(o=r[u])instanceof Node?(null===p&&(f[++h]=p=document.createDocumentFragment(),d+="\x3c!--o:"+h+"--\x3e"),p.appendChild(o)):(p=null,d+=o);p=null}else d+=r;d+=n[s]}if(p=e(d),++h>0){for(i=new Array(h),a=document.createTreeWalker(p,NodeFilter.SHOW_COMMENT,null,!1);a.nextNode();)o=a.currentNode,/^o:/.test(o.nodeValue)&&(i[+o.nodeValue.slice(2)]=o);for(s=0;s<h;++s)(o=i[s])&&o.parentNode.replaceChild(f[s],o)}return 1===p.childNodes.length?p.removeChild(p.firstChild):11===p.nodeType?((o=t()).appendChild(p),o):p}}var ce=ue(function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),document.importNode(t.content,!0)},function(){return document.createElement("span")});function de(e){let t;Object.defineProperties(this,{generator:{value:ae(e=>void(t=e))},value:{get:()=>e,set:n=>t(e=n)}}),void 0!==e&&t(e)}function*fe(){for(;;)yield Date.now()}var pe=new Map;function he(e,t){var n;return(n=pe.get(e=+e))?n.then(Q(t)):(n=Date.now())>=e?Promise.resolve(t):function(e,t){var n=new Promise(function(n){pe.delete(t);var r=t-e;if(!(r>0))throw new Error("invalid time");if(r>2147483647)throw new Error("too long to wait");setTimeout(n,r)});return pe.set(t,n),n}(n,e).then(Q(t))}var me={delay:function(e,t){return new Promise(function(n){setTimeout(function(){n(t)},e)})},tick:function(e,t){return he(Math.ceil((Date.now()+1)/e)*e,t)},when:he};function ve(e,t){if(/^(\w+:)|\/\//i.test(e))return e;if(/^[.]{0,2}\//i.test(e))return new URL(e,null==t?location:t).href;if(!e.length||/^[\s._]/.test(e)||/\s$/.test(e))throw new Error("illegal name");return"https://unpkg.com/"+e}const be=new Map,_e=[],we=_e.map,ge=_e.some,ye=_e.hasOwnProperty,xe="https://cdn.jsdelivr.net/npm/",Ee=/^((?:@[^\/@]+\/)?[^\/@]+)(?:@([^\/]+))?(?:\/(.*))?$/,Ce=/^\d+\.\d+\.\d+(-[\w-.+]+)?$/,qe=/\.[^\/]*$/,Ne=["unpkg","jsdelivr","browser","main"];class ke extends Error{constructor(e){super(e)}}function Pe(e){const t=Ee.exec(e);return t&&{name:t[1],version:t[2],path:t[3]}}function Oe(e){const t=`${xe}${e.name}${e.version?`@${e.version}`:""}/package.json`;let n=be.get(t);return n||be.set(t,n=fetch(t).then(e=>{if(!e.ok)throw new ke("unable to load package.json");return e.redirected&&!be.has(e.url)&&be.set(e.url,n),e.json()})),n}ke.prototype.name=ke.name;const Se=je(async function(e,t){if(e.startsWith(xe)&&(e=e.substring(xe.length)),/^(\w+:)|\/\//i.test(e))return e;if(/^[.]{0,2}\//i.test(e))return new URL(e,null==t?location:t).href;if(!e.length||/^[\s._]/.test(e)||/\s$/.test(e))throw new ke("illegal name");const n=Pe(e);if(!n)return`${xe}${e}`;if(!n.version&&null!=t&&t.startsWith(xe)){const e=await Oe(Pe(t.substring(xe.length)));n.version=e.dependencies&&e.dependencies[n.name]||e.peerDependencies&&e.peerDependencies[n.name]}if(n.path&&!qe.test(n.path)&&(n.path+=".js"),n.path&&n.version&&Ce.test(n.version))return`${xe}${n.name}@${n.version}/${n.path}`;const r=await Oe(n);return`${xe}${r.name}@${r.version}/${n.path||function(e){for(const t of Ne){const n=e[t];if("string"==typeof n)return qe.test(n)?n:`${n}.js`}}(r)||"index.js"}`});function je(e){const t=new Map,n=o(null);function r(e){if("string"!=typeof e)return e;let n=t.get(e);return n||t.set(e,n=new Promise((t,n)=>{const r=document.createElement("script");r.onload=(()=>{try{t(_e.pop()(o(e)))}catch(i){n(new ke("invalid module"))}r.remove()}),r.onerror=(()=>{n(new ke("unable to load module")),r.remove()}),r.async=!0,r.src=e,window.define=Te,document.head.appendChild(r)})),n}function o(t){return n=>Promise.resolve(e(n,t)).then(r)}function i(e){return arguments.length>1?Promise.all(we.call(arguments,n)).then($e):n(e)}return i.alias=function(t){return je((n,r)=>n in t&&(r=null,"string"!=typeof(n=t[n]))?n:e(n,r))},i.resolve=e,i}function $e(e){const t={};for(const n of e)for(const e in n)ye.call(n,e)&&(null==n[e]?Object.defineProperty(t,e,{get:Le(n,e)}):t[e]=n[e]);return t}function Le(e,t){return()=>e[t]}function Me(e){return e+""=="exports"}function Te(e,t,n){const r=arguments.length;r<2?(n=e,t=[]):r<3&&(n=t,t="string"==typeof e?[]:e),_e.push(ge.call(t,Me)?e=>{const r={};return Promise.all(we.call(t,t=>Me(t+="")?r:e(t))).then(e=>(n.apply(null,e),r))}:e=>Promise.all(we.call(t,e)).then(e=>"function"==typeof n?n.apply(null,e):n))}function Ae(e){return null==e?Se:je(e)}Te.amd={};var ze=ue(function(e){var t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.innerHTML=e.trim(),t},function(){return document.createElementNS("http://www.w3.org/2000/svg","g")}),Ue=String.raw;function De(e){return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onerror=n,r.onload=t,document.head.appendChild(r)})}function Re(){return ae(function(e){var t=e(document.body.clientWidth);function n(){var n=document.body.clientWidth;n!==t&&e(t=n)}return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}})}function Fe(e){const t=Ae(e);Object.defineProperties(this,{DOM:{value:ne,writable:!0,enumerable:!0},Files:{value:re,writable:!0,enumerable:!0},Generators:{value:le,writable:!0,enumerable:!0},html:{value:Q(ce),writable:!0,enumerable:!0},md:{value:function(e){return function(){return e("marked@0.3.12/marked.min.js").then(function(t){return ue(function(n){var r=document.createElement("span");r.innerHTML=t(n,{langPrefix:""}).trim();var o=r.querySelectorAll("pre code[class]");return o.length>0&&e("@observablehq/highlight.js@1.1.1/highlight.min.js").then(function(e){o.forEach(function(t){e.highlightBlock(t),t.parentNode.classList.add("observablehq--md-pre")})}),r},function(){return document.createElement("span")})})}}(t),writable:!0,enumerable:!0},Mutable:{value:Q(de),writable:!0,enumerable:!0},now:{value:fe,writable:!0,enumerable:!0},Promises:{value:me,writable:!0,enumerable:!0},require:{value:Q(t),writable:!0,enumerable:!0},resolve:{value:Q(ve),writable:!0,enumerable:!0},svg:{value:Q(ze),writable:!0,enumerable:!0},tex:{value:function(e){return function(){return Promise.all([e("@observablehq/katex@0.10.1/dist/katex.min.js"),e.resolve("@observablehq/katex@0.10.1/dist/katex.min.css").then(De)]).then(function(e){var t=e[0],n=r();function r(e){return function(){var n=document.createElement("div");return t.render(Ue.apply(String,arguments),n,e),n.removeChild(n.firstChild)}}return n.options=r,n.block=r({displayMode:!0}),n})}}(t),writable:!0,enumerable:!0},width:{value:Re,writable:!0,enumerable:!0}})}function We(e,t){this.message=e+"",this.input=t}We.prototype=Object.create(Error.prototype),We.prototype.name="RuntimeError",We.prototype.constructor=We;var Be=Array.prototype,Ie=Be.map,He=Be.forEach;function Ge(e){return function(){return e}}function Ve(e){return e}function Ye(){}var Je=1,Xe=2,Ke=3,Qe={};function Ze(e,t,n){var r;null==n&&(n=Qe),Object.defineProperties(this,{_observer:{value:n,writable:!0},_definition:{value:nt,writable:!0},_duplicate:{value:void 0,writable:!0},_duplicates:{value:void 0,writable:!0},_indegree:{value:-1,writable:!0},_inputs:{value:[],writable:!0},_invalidate:{value:Ye,writable:!0},_module:{value:t},_name:{value:null,writable:!0},_outputs:{value:new Set,writable:!0},_promise:{value:Promise.resolve(void 0),writable:!0},_reachable:{value:n!==Qe,writable:!0},_rejector:{value:(r=this,function(e){if(e===nt)throw new We(r._name+" is not defined",r._name);throw new We(r._name+" could not be resolved",r._name)})},_type:{value:e},_value:{value:void 0,writable:!0},_version:{value:0,writable:!0}})}function et(e){e._module._runtime._dirty.add(e),e._outputs.add(this)}function tt(e){e._module._runtime._dirty.add(e),e._outputs.delete(this)}function nt(){throw nt}function rt(e){return function(){throw new We(e+" is defined more than once")}}function ot(e,t,n){var r=this._module._scope,o=this._module._runtime;if(this._inputs.forEach(tt,this),t.forEach(et,this),this._inputs=t,this._definition=n,this._value=void 0,e==this._name&&r.get(e)===this)this._outputs.forEach(o._updates.add,o._updates);else{var i,a;if(this._name)if(this._outputs.size)r.delete(this._name),(a=this._module._resolve(this._name))._outputs=this._outputs,this._outputs=new Set,a._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(this)]=a},this),a._outputs.forEach(o._updates.add,o._updates),o._dirty.add(a).add(this),r.set(this._name,a);else if((a=r.get(this._name))===this)r.delete(this._name);else{if(a._type!==Ke)throw new Error;a._duplicates.delete(this),this._duplicate=void 0,1===a._duplicates.size&&(a=a._duplicates.keys().next().value,i=r.get(this._name),a._outputs=i._outputs,i._outputs=new Set,a._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(i)]=a}),a._definition=a._duplicate,a._duplicate=void 0,o._dirty.add(i).add(a),o._updates.add(a),r.set(this._name,a))}if(this._outputs.size)throw new Error;e&&((a=r.get(e))?a._type===Ke?(this._definition=rt(e),this._duplicate=n,a._duplicates.add(this)):a._type===Xe?(this._outputs=a._outputs,a._outputs=new Set,this._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(a)]=this},this),o._dirty.add(a).add(this),r.set(e,this)):(a._duplicate=a._definition,this._duplicate=n,(i=new Ze(Ke,this._module))._name=e,i._definition=this._definition=a._definition=rt(e),i._outputs=a._outputs,a._outputs=new Set,i._outputs.forEach(function(e){e._inputs[e._inputs.indexOf(a)]=i}),i._duplicates=new Set([this,a]),o._dirty.add(a).add(i),o._updates.add(a).add(i),r.set(e,i)):r.set(e,this)),this._name=e}return o._updates.add(this),o._compute(),this}Object.defineProperties(Ze.prototype,{_pending:{value:function(){this._observer.pending&&this._observer.pending()},writable:!0,configurable:!0},_fulfilled:{value:function(e){this._observer.fulfilled&&this._observer.fulfilled(e,this._name)},writable:!0,configurable:!0},_rejected:{value:function(e){this._observer.rejected&&this._observer.rejected(e,this._name)},writable:!0,configurable:!0},define:{value:function(e,t,n){switch(arguments.length){case 1:n=e,e=t=null;break;case 2:n=t,"string"==typeof e?t=null:(t=e,e=null)}return ot.call(this,null==e?null:e+"",null==t?[]:Ie.call(t,this._module._resolve,this._module),"function"==typeof n?n:Ge(n))},writable:!0,configurable:!0},delete:{value:function(){return ot.call(this,null,[],Ye)},writable:!0,configurable:!0},import:{value:function(e,t,n){arguments.length<3&&(n=t,t=e);return ot.call(this,t+"",[n._resolve(e+"")],Ve)},writable:!0,configurable:!0}});var it=new Map;function at(e){Object.defineProperties(this,{_runtime:{value:e},_scope:{value:new Map}})}function st(e){return e._name}Object.defineProperties(at.prototype,{_copy:{value:function(e,t,n){var r=new at(this._runtime);return n.set(this,r),this._scope.forEach(function(o,i){var a,s=new Ze(o._type,r);if(a=e.get(i))s.import(a.name,a.alias,t);else if(o._definition===Ve){var l=o._inputs[0],u=l._module,c=n.get(u)||u._copy(it,null,n);s.import(l._name,i,c)}else s.define(i,o._inputs.map(st),o._definition)}),r},writable:!0,configurable:!0},_resolve:{value:function(e){var t,n=this._scope.get(e);if(!n)if(n=new Ze(Xe,this),this._runtime._builtin._scope.has(e))n.import(e,this._runtime._builtin);else if("invalidation"===e)n.define(e,lt);else if("visibility"===e)n.define(e,ut);else{try{t=this._runtime._global(e)}catch(o){return n.define(e,(r=o,function(){throw r}))}void 0===t?this._scope.set(n._name=e,n):n.define(e,Ge(t))}var r;return n},writable:!0,configurable:!0},redefine:{value:function(e){var t=this._scope.get(e);if(!t)throw new We(e+" is not defined");if(t._type===Ke)throw new We(e+" is defined more than once");return t.define.apply(t,arguments)},writable:!0,configurable:!0},define:{value:function(){var e=new Ze(Je,this);return e.define.apply(e,arguments)},writable:!0,configurable:!0},derive:{value:function(e,t){var n=new Map;return He.call(e,function(e){"object"!=typeof e&&(e={name:e+""}),null==e.alias&&(e.alias=e.name),n.set(e.alias,e)}),this._copy(n,t,new Map)},writable:!0,configurable:!0},import:{value:function(){var e=new Ze(Je,this);return e.import.apply(e,arguments)},writable:!0,configurable:!0},variable:{value:function(e){return new Ze(Je,this,e)},writable:!0,configurable:!0}});var lt={},ut={};function ct(e=new Fe,t=function(e){return window[e]}){var n=this.module();if(Object.defineProperties(this,{_dirty:{value:new Set},_updates:{value:new Set},_computing:{value:null,writable:!0},_modules:{value:new Map},_builtin:{value:n},_global:{value:t}}),e)for(var r in e)new Ze(Xe,n).define(r,[],e[r])}function dt(e){++e._indegree}function ft(e){return e._promise.catch(e._rejector)}function pt(e){return new Promise(function(t){e._invalidate=t})}function ht(e,t){let n,r,o="function"==typeof IntersectionObserver&&t._observer&&t._observer._node,i=!o,a=Ye,s=Ye;return o&&((r=new IntersectionObserver(([e])=>(i=e.isIntersecting)&&(n=null,a()))).observe(o),e.then(()=>(r.disconnect(),r=null,s()))),function(e){return i?Promise.resolve(e):r?(n||(n=new Promise((e,t)=>(a=e,s=t))),n.then(()=>e)):Promise.reject()}}function mt(e){e._invalidate(),e._invalidate=Ye,e._pending();var t=e._value,n=++e._version,r=null,o=e._promise=Promise.all(e._inputs.map(ft)).then(function(o){if(e._version===n){for(var i=0,a=o.length;i<a;++i)switch(o[i]){case lt:o[i]=r=pt(e);break;case ut:r||(r=pt(e)),o[i]=ht(r,e)}return e._definition.apply(t,o)}}).then(function(t){return function(e){return e&&"function"==typeof e.next&&"function"==typeof e.return}(t)?((r||pt(e)).then((i=t,function(){i.return()})),function(e,t,n,r){function o(){var n=new Promise(function(e){e(r.next())}).then(function(r){return r.done?void 0:Promise.resolve(r.value).then(function(r){if(e._version===t)return vt(e,r,n).then(o),e._fulfilled(r),r})});n.catch(function(r){e._version===t&&(vt(e,void 0,n),e._rejected(r))})}return new Promise(function(e){e(r.next())}).then(function(e){if(!e.done)return n.then(o),e.value})}(e,n,o,t)):t;var i});o.then(function(t){e._version===n&&(e._value=t,e._fulfilled(t))},function(t){e._version===n&&(e._value=void 0,e._rejected(t))})}function vt(e,t,n){var r=e._module._runtime;return e._value=t,e._promise=n,e._outputs.forEach(r._updates.add,r._updates),r._compute()}let bt,_t,wt,gt;function yt(){const e=new Promise(e=>gt=e);return parent.postMessage({type:"secrets"},"https://beta.observablehq.com"),e.then(e=>{const t=new Map(e.map(({name:e,value:t})=>[e,t]));return function(e){if(!t.has(e+=""))throw new Error("secret not found");return t.get(e)}})}function xt(e){let t=_t.get(e);return t||_t.set(e,t=wt.module()),t}function Et(e){const t=e?new K(e):null;Object.defineProperties(this,{_node:{value:e},_error:{value:void 0,writable:!0},_variable:{value:bt.variable(t)},_loaded:{value:!1,writable:!0},_view:{value:null,writable:!0},_imports:{value:null,writable:!0},_source:{value:null,writable:!0}})}function Ct(e,t){let n=e._scope.get(t);return n?n._exdegree=(n._exdegree||0)+1:(n=e.variable())._exdegree=1,n}function qt(e,t,n){const r=`viewof ${e.name}`;t.define(r,e.inputs,e.value),n.define(e.name,["Generators",r],St)}function Nt(e,t,n,r){const o=`initial ${e.name}`,i=`mutable ${e.name}`;t.define(o,e.inputs,e.value),n.define(i,["Mutable",o],jt),r.define(e.name,[i],$t)}function kt(e){e._imports&&(e._imports.forEach(Ot),e._imports=null)}function Pt(e){e._initializer&&(e._initializer.delete(),e._initializer=null),e._source&&(e._source.delete(),e._source=null)}function Ot(e){0==--e._exdegree&&e.delete()}function St(e,t){return e.input(t)}function jt(e,t){return new e(t)}function $t(e){return e.generator}Object.defineProperties(ct,{load:{value:function(e,t,n){if("function"==typeof t&&(n=t,t=null),"function"!=typeof n)throw new Error("invalid observer");null==t&&(t=new Fe);const{modules:r,id:o}=e,i=new Map,a=new ct(t),s=l(o);function l(e){let t=i.get(e);return t||i.set(e,t=a.module()),t}for(const u of r){const e=l(u.id);let t=0;for(const r of u.variables)r.from?e.import(r.remote,r.name,l(r.from)):e===s?e.variable(n(r,t,u.variables)).define(r.name,r.inputs,r.value):e.define(r.name,r.inputs,r.value),++t}return a},writable:!0,configurable:!0}}),Object.defineProperties(ct.prototype,{_compute:{value:function(){return this._computing||(this._computing=this._computeSoon())},writable:!0,configurable:!0},_computeSoon:{value:function(){var e=this;return new Promise(function(t){requestAnimationFrame(function(){t(),e._computeNow()})})},writable:!0,configurable:!0},_computeNow:{value:function(){var e,t,n=[];(e=new Set(this._dirty)).forEach(function(t){t._inputs.forEach(e.add,e);const n=function(e){if(e._observer!==Qe)return!0;var t=new Set(e._outputs);for(const n of t){if(n._observer!==Qe)return!0;n._outputs.forEach(t.add,t)}return!1}(t);n>t._reachable?this._updates.add(t):n<t._reachable&&t._invalidate(),t._reachable=n},this),(e=new Set(this._updates)).forEach(function(t){t._reachable?(t._indegree=0,t._outputs.forEach(e.add,e)):(t._indegree=-1,e.delete(t))}),this._computing=null,this._updates.clear(),this._dirty.clear(),e.forEach(function(e){e._outputs.forEach(dt)}),e.forEach(function(e){0===e._indegree&&n.push(e)});for(;t=n.pop();)mt(t),t._outputs.forEach(r),e.delete(t);function r(e){0==--e._indegree&&n.push(e)}e.forEach(function(e){var t=new We("circular definition");e._value=void 0,(e._promise=Promise.reject(t)).catch(Ye),e._rejected(t)})},writable:!0,configurable:!0},module:{value:function(e,t=Ye){if(void 0===e)return new at(this);let n=this._modules.get(e);return n||(this._modules.set(e,n=e(this,t)),n)},writable:!0,configurable:!0}}),Object.defineProperties(Et.prototype,{define:{value:function(e){if(kt(this),e.modules){const t=[],n=xt(e.id);e.modules.forEach(e=>{const n=xt(e.id);e.values.forEach(e=>{let r=n._scope.get(e.name);if(r?r._exdegree=(r._exdegree||0)+1:(r=n.variable())._exdegree=1,e.module)r.import(e.remote,e.name,xt(e.module));else if(e.view){const o=Ct(n,`viewof ${e.name}`);qt(e,o,r),t.push(o)}else if(e.mutable){const o=Ct(n,`initial ${e.name}`),i=Ct(n,`mutable ${e.name}`);Nt(e,o,i,r),t.push(i)}else r.define(e.name,e.inputs,e.value);t.push(r)})}),e.imports.forEach(e=>{const r=bt.variable();r._exdegree=1,r.import(e.remote,e.name,n),t.push(r)}),Pt(this),this._imports=t,this._variable.define(function(e){const{module:t,origin:n}=e,r=document.createElement("span");r.className="observablehq--inspect observablehq--import",r.appendChild(document.createTextNode("import "));const o=r.appendChild(document.createElement("a")),i=t.replace(/@[0-9]+(?=\?|$)/,"");return o.href=`${n}/${t.indexOf("/")<0?"d/":""}${i}`,o.textContent=t,r}(e))}else e.view?(this._source||(this._source=bt.variable()),qt(e,this._variable,this._source)):e.mutable?(this._initializer||(this._initializer=bt.variable()),this._source||(this._source=bt.variable()),Nt(e,this._initializer,this._source,this._variable)):(Pt(this),this._variable.define(e.name,e.inputs,e.value));return this},writable:!0,configurable:!0},delete:{value:function(){kt(this),Pt(this),this._variable.delete()},writable:!0,configurable:!0}});let Lt=null,Mt=new Set,Tt=null;function At(t){const n=document.createElement("div");n.id=`r${t}`,n.setAttribute("dir","auto"),n.className="observablehq";const r=new Et(n);let o;r.resize=(()=>{const t=Math.max(e,n.offsetHeight);r._height!==t&&(parent.postMessage({type:"resize",id:r._id,height:t},"https://beta.observablehq.com"),r._height=t)}),"undefined"==typeof ResizeObserver?((o=new MutationObserver(r.resize)).observe(n,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),n.addEventListener("load",r.resize,!0)):(o=new ResizeObserver(r.resize)).observe(n);let i=e=>(function(e,t){e._loaded||(e._loaded=!0,parent.postMessage({type:"load",id:e._id},"https://beta.observablehq.com"));const n=t.detail&&t.detail.error;(n||e._error)&&(e._error=n,parent.postMessage({type:"error",id:e._id,error:n&&{message:zt(n.message),stack:zt(n.stack),runtime:n instanceof We?{input:zt(n.input)}:null}},"https://beta.observablehq.com"));Mt.add(e._node),null===Lt&&(Lt=setTimeout(Ut,150));e._node.classList.add("observablehq--changed")})(r,e);return n.addEventListener("update",i,!0),n.addEventListener("error",i,!0),n.addEventListener("mouseenter",()=>{Tt&&(Tt=void clearTimeout(Tt)),parent.postMessage({type:"hover",id:r._id},"https://beta.observablehq.com")}),Object.defineProperties(r,{_id:{value:t},_height:{value:e,writable:!0},_resizer:{value:o,writable:!1},_timeout:{value:null,writable:!0}}),r}function zt(e){return null==e?void 0:e+""}function Ut(){for(const e of Mt)e.classList.remove("observablehq--changed");Mt=new Set,Lt=null}document.addEventListener("mouseenter",e=>{Tt&&clearTimeout(Tt),Tt=setTimeout(()=>{Tt=null;for(const t of document.querySelectorAll("body > .observablehq"))if(t.offsetTop>=e.pageY)return void parent.postMessage({type:"hover",id:+t.id.slice(1)},"https://beta.observablehq.com")},50)});const Dt=eval;function Rt(e){try{return Dt(e)}catch(t){return function(e){return function(){throw e}}(t)}}function Ft(e){try{return new Function(e),!0}catch(t){}}var Wt=[{name:"asyncGenerator",support:Ft("async function* a() {}")},{name:"bigInt",support:"undefined"!=typeof BigInt},{name:"dynamicImport",support:Ft('import("")')}];function Bt({name:e,path:t,prefix:n}){const r=bt._scope.get(e);if(!r||!r._value)return[];let o=r._value;for(let a of t){const e=Object.getOwnPropertyDescriptor(o,a)||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o),a);if(!e||e.get)return[];o=o[a]}let i=function(e){if(null==e)return[];let t=Object.keys(e),n=Object.getPrototypeOf(e);for(;n&&n!==Object.prototype;)t=t.concat(Object.getOwnPropertyNames(n)),n=Object.getPrototypeOf(n);return t}(o).filter(e=>/^[a-z_]/i.test(e));return n&&(i=i.filter(e=>e.startsWith(n))),i.slice(0,200).sort()}const It=document.body,Ht=new Map;function Gt(e){const t=((n=e).modules?n.modules.forEach(e=>{e.values.forEach(e=>{"body"in e&&(e.value=Rt(e.body))})}):n.value=Rt(n.body),n);var n;return void 0===t.value&&(t.value=document.createTextNode("")),t}if(addEventListener("fullscreenchange",()=>{document.body.classList.toggle("fullscreen",!!document.fullscreenElement),dispatchEvent(new CustomEvent("resize"))}),addEventListener("message",async e=>{if("https://beta.observablehq.com"===e.origin)switch(e.data.type){case"hello":bt||(wt=new ct(Object.assign(new Fe,{Secret:yt})),bt=wt.module(),_t=new Map,parent.postMessage({type:"ready",platformSupport:Wt},"https://beta.observablehq.com")),e.data.id&&_t.set(e.data.id,bt),e.data.path&&(document.querySelector("base").href=`https://beta.observablehq.com${e.data.path}`);break;case"bundle":e.data.events.forEach(Vt);break;default:throw new Error("unknown event type")}}),"undefined"==typeof ResizeObserver){let e=innerWidth;document.fonts&&document.fonts.addEventListener("loadingdone",()=>{Ht.forEach(e=>e.resize())}),addEventListener("resize",()=>{e!==innerWidth&&(e=innerWidth,Ht.forEach(e=>e.resize()))})}function Vt(e){const{node_id:n}=e;switch(e.type){case"insert_node":{const t=At(n);if(Ht.has(n))throw new Error("duplicate node");Ht.set(n,t),It.insertBefore(t._node,Jt(e.new_next_node_id)),t.define(Gt(e.new_node_value));break}case"move_node":It.insertBefore(Yt(n)._node,Jt(e.new_next_node_id));break;case"modify_node":Yt(n).define(Gt(e.new_node_value));break;case"offset_node":Yt(n)._node.style.marginBottom=`${t+e.height}px`;break;case"remove_node":{const e=Yt(n);e.delete(),Ht.delete(n),e._resizer&&e._resizer.disconnect(),It.removeChild(e._node);break}case"secrets":gt(e.secrets);break;case"autocomplete":parent.postMessage({type:"autocompleted",list:Bt(e),nonce:e.nonce},"https://beta.observablehq.com");break;default:throw new Error("unknown event type")}}function Yt(e){const t=Ht.get(e);if(!t)throw new Error("unknown node");return t}function Jt(e){return null===e?null:It.querySelector(`#r${e}`)}}();
