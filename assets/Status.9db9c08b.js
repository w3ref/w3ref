import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{h as r,o as n,c,u as a,t as l,i as m,b as f}from"./app.4493af0b.js";const b=f(" \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C "),y={key:0},h={__name:"Status",props:{data:{type:Object,default(){return{feature:null,dart:null,lib:null,ruby:null}}}},setup(d){const s=d,u=r(()=>s.data.feature?s.data.feature:!1),i=r(()=>o(s.data.dart)),_=r(()=>o(s.data.lib)),p=r(()=>o(s.data.ruby));function o(t){let e;return t===!0?e="\u2713":t===!1?e="\u2717":t==="partial"?e="\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E":t!==null&&(e="\u0441 "+t),e}return(t,e)=>(n(),c("span",null,[b,a(u)?(n(),c("span",y,"("+l(a(u))+")",1)):m("",!0),f(": Dart Sass "+l(a(i))+" | LibSass "+l(a(_))+" | Ruby Sass "+l(a(p)),1)]))}};var N=S(h,[["__file","Status.vue"]]);export{N as S};