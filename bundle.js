!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},function(e,t){var n=document.querySelector(".nav-container"),o=(document.querySelector("#section-home"),document.querySelector("#section-about"),document.querySelector("#section-portfolio"),document.querySelector("#section-contact"),document.querySelector("#link-home")),r=document.querySelector("#link-about"),i=document.querySelector("#link-portfolio"),l=document.querySelector("#link-contact");window.onscroll=function(){window.scrollY>=200?(n.classList.add("nav-colored"),n.classList.remove("nav-transparent")):(n.classList.add("nav-transparent"),n.classList.remove("nav-colored")),window.scrollY<700?o.classList.add("link-active"):o.classList.remove("link-active"),window.scrollY>=700&&window.scrollY<1300?r.classList.add("link-active"):r.classList.remove("link-active"),window.scrollY>=1300&&window.scrollY<2100?i.classList.add("link-active"):i.classList.remove("link-active"),window.scrollY>=2100?l.classList.add("link-active"):l.classList.remove("link-active")}},function(e,t){var n=document.querySelector(".carousel__button--right"),o=document.querySelector(".carousel__button--left"),r=(document.querySelector(".carousel__nav"),document.querySelector(".carousel__track")),i=(document.querySelector(".carousel"),Array.from(r.children)),l=i[0].getBoundingClientRect().width,c=!0,s=function(e,t){e.style.left=l*t+"px"};i.forEach(s);var a=function(e){r=document.querySelector(".carousel__track"),(i=Array.from(r.children)).forEach(s)},u=function(e,t){e.classList.remove("current__slide"),t.classList.add("current__slide")};n.addEventListener("click",(function(e){if(c){c=!1;var t=r.querySelector(".current__slide"),n=t.nextElementSibling;r.style.transform="translateX(-"+l+"px)",r.appendChild(r.firstElementChild),u(t,n)}})),o.addEventListener("click",(function(e){if(c){c=!1,r.insertBefore(r.lastElementChild,r.firstChild);var t=r.querySelector(".current__slide"),n=t.previousElementSibling;u(t,n),r.style.transition="none",a(),r.style.transform="translateX(-"+l+"px)",setTimeout((function(e){r.style.transition="700ms ease-in-out",r.style.transform="translateX(0)"}))}})),r.addEventListener("transitionend",(function(e){r.style.transition="none",a(),r.style.transform="translateX(0)",setTimeout((function(e){r.style.transition="700ms ease-in-out",c=!0}))})),window.addEventListener("resize",(function(e){location.reload()}))},function(e,t,n){"use strict";n.r(t);n(1),n(2);console.log("everythings working fine!"),history.scrollRestoration="manual",window.onbeforeunload=function(){window.scrollTo(0,0)}}]);