import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  iconAssets: "fontawesome",

  logo: "/images/logo.svg",

  repo: "w3ref/w3ref",

  docsDir: "",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "MIT Licensed | Copyright © present W3Ref",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    mdEnhance: {
      tasklist: true,
      container: true,
      codetabs: true,
      imageMark: true,
      imageSize: true,
      align: true,
      demo: true,
      tabs: true,
    },
  },
});
