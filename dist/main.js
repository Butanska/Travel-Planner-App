var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(){let e=new Date,t=e.getMonth()+1,n=e.getDate()+"."+t+"."+e.getFullYear();document.getElementById("generate").addEventListener("click",(function(e){const t=document.getElementById("feelings").value;(async(e,t,n)=>{const r=await fetch(e+t+",us&units=metric&appid="+n);try{const e=await r.json();return console.log(e),temperature=e.main.temp,temperature}catch(e){console.log("error",e)}})("http://api.openweathermap.org/data/2.5/weather?zip=",document.getElementById("zip").value,"881e57e87e8fd3bd58439043d5f45f96").then((function(e){r("/add",{temperature:e,date:n,userResponse:t}),o()}))}));const r=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error",e)}},o=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log(t);const n=t[t.length-1];document.getElementById("date").innerHTML="Date: "+n.date,document.getElementById("temp").innerHTML="Tempearature: "+n.temperature+"&deg;C",document.getElementById("content").innerHTML="You are feeling "+n.userResponse}catch(e){console.log("error",e)}}}n.r(t),n.d(t,"formSubmit",(function(){return r}));n(0);window.addEventListener("DOMContentLoaded",r)}]);
//# sourceMappingURL=main.js.map