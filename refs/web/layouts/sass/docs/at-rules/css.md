---
title: css
category:
  - Sass
  - At-Правила
  - css
---

## Обзор

::: details <Status :data="{ feature: 'Name Interpolation', dart: '1.15.0', lib: false, ruby: false }" />

LibSass, Ruby Sass и более старые версии Dart Sass не поддерживают [интерполяцию](../interpolation/README.md) в именах at-правил. Они поддерживают интерполяцию значений.
:::

Sass поддерживает все at-правила, которые являются частью собственно CSS. Чтобы сохранить гибкость и совместимость с будущими версиями CSS, Sass имеет общую поддержку, которая по умолчанию охватывает почти все at-правила. At-правило CSS записывается как `@<name> <value>`, `@<name> { ... }` или `@<name> <value> { ... }`. Имя должно быть идентификатором, а значение (если оно существует) может быть чем угодно. И имя, и значение могут содержать [интерполяцию](../interpolation/README.md).

::: code-tabs#styles

@tab:active SCSS

```scss
@namespace svg url(http://www.w3.org/2000/svg);

@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}

@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
}
```

@tab SASS

```sass
@namespace svg url(http://www.w3.org/2000/svg)

@font-face
  font-family: "Open Sans"
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2")

@counter-style thumbs
  system: cyclic
  symbols: "\1F44D"


```

@tab CSS

```css
@namespace svg url(http://www.w3.org/2000/svg);
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
}


```

:::

Если at-правило CSS вложено в правило стиля, эти два правила автоматически меняются местами, так что at-правило находится на верхнем уровне вывода CSS, а правило стиля находится внутри него. Это упрощает добавление условного стиля без необходимости переписывать селектор правила стиля.

::: code-tabs#styles

@tab:active SCSS

```scss
.print-only {
  display: none;

  @media print { display: block; }
}



```

@tab SASS

```sass
.print-only
  display: none

  @media print
    display: block



```

@tab CSS

```css
.print-only {
  display: none;
}
@media print {
  .print-only {
    display: block;
  }
}
```

:::

## `@media`

::: details <Status :data="{ feature: 'Range Syntax', dart: '1.11.0', lib: false, ruby: '3.7.0' }" />

LibSass и более старые версии Dart Sass и Ruby Sass не поддерживают медиа-запросы с функциями, написанными в [контекст диапазона](https://www.w3.org/TR/mediaqueries-4/#mq-range-context). Они поддерживают другие стандартные медиа-запросы.

::: code-tabs#styles

@tab:active SCSS

```scss
@media (width <= 700px) {
  body {
    background: green;
  }
}
```

@tab SASS

```sass
@media (width <= 700px)
  body
    background: green


```

@tab CSS

```css
@media (width <= 700px) {
  body {
    background: green;
  }
}
```

:::

:::

[Правило `@media`](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) выполняет все вышеперечисленное и многое другое. Помимо возможности интерполяции, он позволяет использовать [выражения SassScript](../syntax/structure#expressions) непосредственно в [запросы функций](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Targeting_media_features).

::: code-tabs#styles

@tab:active SCSS

```scss
$layout-breakpoint-small: 960px;

@media (min-width: $layout-breakpoint-small) {
  .hide-extra-small {
    display: none;
  }
}
```

@tab SASS

```sass
$layout-breakpoint-small: 960px

@media (min-width: $layout-breakpoint-small)
  .hide-extra-small
    display: none


```

@tab CSS

```css
@media (min-width: 960px) {
  .hide-extra-small {
    display: none;
  }
}


```

:::

По возможности Sass также объединяет вложенные друг в друга медиа-запросы, чтобы упростить поддержку браузеров, которые еще не поддерживают вложенные правила `@media`.

::: code-tabs#styles

@tab:active SCSS

```scss
@media (hover: hover) {
  .button:hover {
    border: 2px solid black;

    @media (color) {
      border-color: #036;
    }
  }
}

```

@tab SASS

```sass
@media (hover: hover)
  .button:hover
    border: 2px solid black

    @media (color)
      border-color: #036




```

@tab CSS

```css
@media (hover: hover) {
  .button:hover {
    border: 2px solid black;
  }
}
@media (hover: hover) and (color) {
  .button:hover {
    border-color: #036;
  }
}
```

:::

## `@supports`

[Правило `@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) также позволяет использовать [выражения SassScript expressions](../syntax/structure#expressions) в запросах объявления.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin sticky-position {
  position: fixed;
  @supports (position: sticky) {
    position: sticky;
  }
}

.banner {
  @include sticky-position;
}
```

@tab SASS

```sass
@mixin sticky-position
  position: fixed
  @supports (position: sticky)
    position: sticky



.banner
  @include sticky-position

```

@tab CSS

```css
.banner {
  position: fixed;
}
@supports (position: sticky) {
  .banner {
    position: sticky;
  }
}


```

:::

## `@keyframes`

[Правило `@keyframes` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) работает так же, как общее at-правило, за исключением того, что его дочерние правила должны быть действительными правилами ключевых кадров (`<number>%`, `from` или `to`), а не обычными селекторами.

::: code-tabs#styles

@tab:active SCSS

```scss
@keyframes slide-in {
  from {
    margin-left: 100%;
    width: 300%;
  }

  70% {
    margin-left: 90%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

@tab SASS

```sass
@keyframes slide-in
  from
    margin-left: 100%
    width: 300%


  70%
    margin-left: 90%
    width: 150%


  to
    margin-left: 0%
    width: 100%


```

@tab CSS

```css
@keyframes slide-in {
  from {
    margin-left: 100%;
    width: 300%;
  }
  70% {
    margin-left: 90%;
    width: 150%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}


```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
