!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:g(f,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(e,t){var n,o,r;if(t.singleton){var a=m++;n=h||(h=l(t)),o=f.bind(null,n,a,!1),r=f.bind(null,n,a,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){var o=n(3),r=n(4),a=n(5);t=o(!1);var i=r(a);t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Muli', sans-serif;line-height:1.5;background:#e3c4d7}#app{height:100vh;background:#e3c4d7;color:#313446;justify-content:center;font-size:20px;font-family:'Oswald', sans-serif;padding:0 1rem}#responseHolder{color:#e0ffff;background:#333;padding:2rem;position:relative}#responseHolder:before{content:'';background:url("+i+") no-repeat center center/cover;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.4}#entryHolder{z-index:1}.holder.entry{padding:1rem;color:#1d1f2a;margin-bottom:1rem}#entryHolder{padding:2rem}label{display:block;font-size:27px;padding:1rem 0}input{display:block;height:60px;width:320px;background:#8681ab;color:#fae6ec;font-size:20px;font-family:'Oswald', sans-serif;border:none}.btn{display:inline-block;width:200px;height:50px;background:#3b4a6b;color:#f4c1d0;font-size:26px;font-family:'Oswald', sans-serif;border:none;box-shadow:2px 4px 5px #444;border-radius:5px;margin-bottom:2rem}.btn:hover{cursor:pointer;background:#625581;color:#f4c1d0}h1{font-size:36px;padding:1rem 0}textarea{background:#8681ab;color:#fae6ec;font-size:20px;font-family:'Oswald', sans-serif;width:500px;height:100px}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#fae6ec;font-family:'Oswald', sans-serif}:-ms-input-placeholder{color:#fae6ec;font-family:'Oswald', sans-serif}::-ms-input-placeholder{color:#fae6ec;font-family:'Oswald', sans-serif}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"ebd0735349c520936f6641295ded012e.jpg"},function(e,t,n){"use strict";function o(){let e=new Date,t=e.getMonth()+1,n=e.getDate()+"."+t+"."+e.getFullYear();document.getElementById("generate").addEventListener("click",(function(e){const t=document.getElementById("feelings").value;(async(e,t,n)=>{const o=await fetch(e+t+",us&units=metric&appid="+n);try{const e=await o.json();return console.log(e),e.main.temp}catch(e){console.log("error",e)}})("http://api.openweathermap.org/data/2.5/weather?zip=",document.getElementById("zip").value,"881e57e87e8fd3bd58439043d5f45f96").then((function(e){o("http://localhost:5000/add",{temperature:e,date:n,userResponse:t}),r()}))}));const o=async(e="",t={})=>{const n=await fetch("http://localhost:5000/add",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("error",e)}},r=async()=>{const e=await fetch("http://localhost:5000/all");try{const t=await e.json();console.log(t);const n=t[t.length-1];document.getElementById("date").innerHTML="Date: "+n.date,document.getElementById("temp").innerHTML="Temperature: "+n.temperature+"&deg;C",document.getElementById("content").innerHTML="You are feeling "+n.userResponse}catch(e){console.log("error",e)}}}n.r(t),n.d(t,"formSubmit",(function(){return o}));n(0);window.addEventListener("DOMContentLoaded",o),alert("I exist!")}]);