!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.createElement("li"),a=document.createElement("li"),d=document.createElement("li"),i=document.createElement("li"),u=()=>{const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("ul");n.appendChild(r),n.appendChild(a),n.appendChild(d),n.appendChild(i),e.className="Header",t.classList.add("text-header"),n.classList.add("menu-container"),r.classList.add("menu"),a.classList.add("menu"),d.classList.add("menu"),i.classList.add("menu");let u=document.createAttribute("data-tab-target");u.value="#home",r.setAttributeNode(u);let l=document.createAttribute("data-tab-target");l.value="#about",a.setAttributeNode(l);let c=document.createAttribute("data-tab-target");c.value="#menu",d.setAttributeNode(c);let o=document.createAttribute("data-tab-target");return o.value="#contact",i.setAttributeNode(o),t.innerHTML="Le Courtier",r.innerHTML="Home",a.innerHTML="About",d.innerHTML="Menu",i.innerHTML="Contact",e.appendChild(t),e.appendChild(n),e},l=document.getElementsByTagName("body")[0],c=document.getElementById("content")[0];l.appendChild(u()),c.appendChild(),r.addEventListener("click",()=>{l.appendChild(u()),c.appendChild()}),a.addEventListener("click",()=>{l.appendChild(u())}),d.addEventListener("click",()=>{l.appendChild(u())}),i.addEventListener("click",()=>{l.appendChild(u())})}]);