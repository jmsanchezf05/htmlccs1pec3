"use strict";const crearEscuchador=(a,e,t)=>{a.addEventListener?a.addEventListener(e,t,!1):a.attachEvent?a.attachEvent("on"+e,t):a["on"+e]=t},aplicaEventos=()=>{const a=document.getElementsByTagName("h1");for(let e=0;e<a.length;e++)crearEscuchador(a[0],"mouseover",amplia),crearEscuchador(a[0],"mouseleave",normaliza)},amplia=a=>{a.target.classList.add("amplia")},normaliza=a=>{a.target.classList.remove("amplia")},main=()=>{aplicaEventos()};window.addEventListener("load",main);
//# sourceMappingURL=index.0a127ae6.js.map