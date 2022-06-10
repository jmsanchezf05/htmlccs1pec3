"use strict";
/* soporte multibrowser y navegadores antiguos de gestión de eventos */ const crearEscuchador = (elemento, tipoEvento, funcion)=>{
    if (elemento.addEventListener) elemento.addEventListener(tipoEvento, funcion, false);
    else if (elemento.attachEvent) elemento.attachEvent("on" + tipoEvento, funcion);
    else elemento["on" + tipoEvento] = funcion;
};
const aplicaEventos = ()=>{
    const titulos = document.getElementsByTagName("h1");
    for(let i = 0; i < titulos.length; i++){
        crearEscuchador(titulos[0], 'mouseover', amplia);
        crearEscuchador(titulos[0], 'mouseleave', normaliza);
    }
};
const amplia = (ev)=>{
    ev.target.classList.add("amplia");
};
const normaliza = (ev)=>{
    ev.target.classList.remove("amplia");
};
/*
const redimensionaElSVGBOX = ( porcentaje)=>{
    
    const svg = document.querySelector('svg');
 

    window.addEventListener('resize', () => { // for every screen resize, the svg height remains 100% relative to the window height
      let wh=window.innerHeight;
      let ww=window.innerWidth;
      //svg.style.widht = ww * porcentaje;
      let svgw=svg.style.widht;
      
      console.log("redimensiona",wh ,ww,svgw, svg);
    });
}
*/ const main = ()=>{
    aplicaEventos();
// redimensionaElSVGBOX(10);
};
window.addEventListener('load', main);

//# sourceMappingURL=index.c6e193e7.js.map
