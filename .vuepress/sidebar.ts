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
      children: ["layouts/", "toolkit/", "frameworks/"],
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
          text: "Документация",
          icon: "folder-open",
          prefix: "docs/",
          children: [
            {
              text: "Синтаксис",
              prefix: "syntax/",
              collapsable: true,
              children: ["README.md", "parsing", "comments", "structure", "special-functions"],
            },
            {
              text: "Правила стиля",
              prefix: "style-rules/",
              collapsable: true,
              children: ["README.md", "declarations", "parent-selector", "placeholder-selectors"],
            },
            {
              text: "Переменные",
              prefix: "variables/",
              collapsable: true,
              children: ["README.md"],
            },
            {
              text: "Интерполяция",
              prefix: "interpolation/",
              collapsable: true,
              children: ["README.md"],
            },
            {
              text: "At-Правила",
              prefix: "at-rules/",
              collapsable: true,
              children: [
                "README.md",
                "use",
                "forward",
                "import",
                "mixin",
                "function",
                "extend",
                "error",
                "warn",
                "debug",
                "at-root",
                "css",
                {
                  text: "Управление потоком",
                  prefix: "control/",
                  collapsable: true,
                  children: [ "", "if", "each", "for", "while"],
                },
              ],
            },
            {
              text: "Значения",
              prefix: "values/",
              collapsable: true,
              children: [
                "README.md",
                "numbers",
                "strings",
                "colors",
                "lists",
                "maps",
                "booleans",
                "null",
                "calculations",
                "functions",
              ],
            },
            {
              text: "Операторы",
              prefix: "operators/",
              collapsable: true,
              children: ["README.md", "equality", "relational", "numeric", "string", "boolean"],
            },
            {
              text: "Встроенные модули",
              prefix: "modules/",
              collapsable: true,
              children: ["README.md"],
            },
            {
              text: "Критические изменения",
              prefix: "breaking-changes/",
              collapsable: true,
              children: ["README.md"],
            },
            {
              text: "Интерфейс командной строки",
              prefix: "cli/",
              collapsable: true,
              children: ["README.md"],
            },
          ],
        },
        "about",
        "guide",
        "implementation",
        "install",
        "community",
        "community-guidelines",
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
  "/refs/web/frameworks/": [
    {
      text: "Фреймворки",
      icon: "frame",
      prefix: "",
      children: ["js/"],
    },
  ],
  "/refs/web/frameworks/js/": [
    {
      text: "JS-фреймворки",
      icon: "brands fa-js",
      prefix: "",
      children: ["alpinejs/"],
    },
  ],
  "/refs/web/frameworks/js/alpinejs/": [
    {
      text: "AlpineJS",
      prefix: "",
      children: "structure",
    },
  ],
});
