---
home: true
icon: brands fa-sass
title: Sass
heroImage: /images/refs/web/layouts/sass/illustrations/glasses.svg
heroText: CSS со сверхвозможностями
tagline: Sass - самый зрелый, стабильный и мощный язык расширений CSS профессионального уровня в мире.
actions:
  - text: Руководство по внедрению 💡
    link: implementation/
    type: primary
  - text: Документация 🗂️
    link: docs/
    type: default

features:
  - title: Установить
    link: install
  - title: Изучить
    link: guide
  - title: Принять участие
    link: community
  - title: Совместимость с CSS
    details: Sass полностью совместим со всеми версиями CSS. Мы серьезно относимся к этой совместимости, чтобы вы могли беспрепятственно использовать любые доступные библиотеки CSS.
  - title: Богатые возможности
    details: Sass может похвастаться большим количеством функций и возможностей, чем любой другой язык расширений CSS. Команда Sass Core работала бесконечно, чтобы не только идти в ногу со временем, но и оставаться впереди.
  - title: Зрелый
    details: Sass активно поддерживается больше 16 лет его любящей основной командой.
  - title: Утверждено в отрасли
    details: Снова и снова индустрия выбирает Sass в качестве основного языка расширений CSS.
  - title: Большое сообщество
    details: Sass активно поддерживается и развивается консорциумом нескольких технологических компаний и сотен разработчиков.
  - title: Фреймворки
    details: Существует бесконечное количество фреймворков, созданных с помощью Sass. Compass, Bourbon, Susy и это лишь некоторые из них.
  - title: Compass
    details: Это среда разработки CSS с открытым исходным кодом.
    link: http://compass-style.org/
  - title: Bourbon
    details: Это легкий набор инструментов Sass.
    link: http://bourbon.io/
  - title: Susy
    details: Это был адаптивным механизмом компоновки для Sass до того, как стали доступны flexbox и CSS grid.
    link: http://susy.oddbird.net/
---

<Releases />

<script setup>
import { ref } from "vue";

import Releases from "@components/refs/web/layouts/sass/Releases.vue";

const diffDate = ref(new Date().getFullYear() - new Date(2006, 11, 28, 19, 43, 58).getFullYear() + ' лет');
</script>
