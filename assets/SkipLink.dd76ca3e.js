import{k as c,p as l,f as p,q as d,j as n}from"./app.09d40426.js";var u=c({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(r){const a=l(),t=p();d(()=>a.path,()=>t.value.focus());const i=({target:s})=>{const e=document.querySelector(s.hash);if(e){const o=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",o)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",o),e.focus(),window.scrollTo(0,0)}};return()=>[n("span",{ref:t,tabindex:"-1"}),n("a",{href:`#${r.content}`,class:"skip-link sr-only",onClick:i},"Skip to content")]}});export{u as S};
