import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Руководства",
      icon: "question",
      prefix: "guides/",
      children: "structure",
    },
     {
      text: "Справочники",
      icon: "book",
      prefix: "refs/",
      children: ["web/"],
    },
  ],
  "/refs/web/": [
    {
      text: "Веб",
      icon: "globe",
      children: ["layouts/", "toolkit/"],
    },
  ],
  "/refs/web/layouts/": [
    {
      text: "Верстка",
      icon: "layer-group",
      prefix: "",
      children: ["sass/", "less/"],
    },
  ],
  "/refs/web/toolkit/": [
    {
      text: "Инструменты",
      icon: "toolbox",
      prefix: "",
      children: [
        {
          text: "Gulp",
          icon: "brands fa-gulp",
          collapsable: true,
          prefix: "gulp/",
          children: "structure",
        },
      ],
    },
  ],
  "/refs/web/layouts/sass/": [
    {
      text: "Sass",
      icon: "brands fa-sass",
      prefix: "",
      children: [
        {
          text: "Синтаксис",
          prefix: "docs/syntax/",
          collapsable: true,
          children: ["README.md", "parsing"],
        },
        {
          text: "Правила стиля",
          prefix: "docs/style-rules/",
          collapsable: true,
          children: [""],
        },
      ],
    },
  ],
  "/refs/web/layouts/less/": [
    {
      text: "Less",
      icon: "brands fa-less",
      prefix: "",
      children: [""],
    },
  ],
});
