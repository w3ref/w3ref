import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
  lang: "ru-RU",
  title: "W3ref",
  description: "Справочник веба",

  base: "/",
  port: 8081,

  head: [
    ["script", { type: "text/javascript" }, '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(89271363, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });'],
    ["noscript", {}, '<div><img src="https://mc.yandex.ru/watch/89271363" style="position:absolute; left:-9999px;" alt="" /></div>'],
  ],

  alias: {
    "@": path.resolve(__dirname),
    "@components": path.resolve(__dirname, "components"),
    "@data": path.resolve(__dirname, "data"),
    "@assets": path.resolve(__dirname, "assets"),
  },

  plugins: [
    searchPlugin({
      // your options
    }),
  ],

  theme,
});
