"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[435],{6173:function(e,t,l){l.r(t),l.d(t,{default:function(){return r}});var n=l(7294);const a={width:"10rem"};function r(){let e=[],[t,l]=n.useState([]);return n.useEffect((async()=>{let t=await fetch("https://api.sampleapis.com/wines/reds"),r=await t.json();for(let l=0;l<r.length;l++)console.log(r[l].title),e.push(n.createElement("li",null,n.createElement("div",{style:{overflow:"hidden"}},n.createElement("div",{style:{width:"11rem",float:"left"}}," ",n.createElement("img",{style:a,src:r[l].image})," "),n.createElement("div",null,"  ",n.createElement("b",null,r[l].title)," - ",r[l].description," "))));l(e)}),[]),n.createElement(n.Fragment,null,n.createElement("h1",null,"Wine"),n.createElement("ul",null,t))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-c343cc3c38ee8e942f72.js.map