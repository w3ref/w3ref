---
title: Специальные функции
category:
  - Sass
  - Синтаксис
  - Специальные функции
---

## Обзор

CSS определяет множество функций, и большинство из них прекрасно работают с обычным синтаксисом функций Sass. Они анализируются как вызовы функций, преобразуются в [простые функции CSS][plain CSS function call] и компилируются как есть в CSS. Однако есть несколько исключений, которые имеют особый синтаксис, который нельзя просто проанализировать как [выражение SassScript](structure#expressions). Все вызовы специальных функций возвращают [строки без кавычек](../values/strings#unquoted).

## `url()`

Функция [`url()`][`url()` function] обычно используется в CSS, но ее синтаксис отличается от других функций: она может принимать либо цитируемый, *либо* URL без кавычек. Поскольку URL-адрес без кавычек не является допустимым выражением SassScript, Sass требует специальной логики для его анализа.

[`url()` function]: https://developer.mozilla.org/en-US/docs/Web/CSS/url

Если аргумент `url()` является допустимым URL без кавычек, Sass анализирует его как есть, хотя [интерполяция][interpolation] также может использоваться для вставки значений SassScript. Если это недействительный URL без кавычек - например, если он содержит [переменные][variables] или [функции вызова][function calls] — он анализируется как обычный [простой вызов функции CSS][plain CSS function call].

[interpolation]: ../interpolation
[variables]: ../variables
[function calls]: ../at-rules/function
[plain CSS function call]: ../at-rules/function#простые-функции-css

::: code-tabs#styles

@tab:active SCSS

```scss
$roboto-font-path: "../fonts/roboto";

@font-face {
    // Это анализируется как обычный вызов функции, который принимает строку в кавычках.
    src: url("#{$roboto-font-path}/Roboto-Thin.woff2") format("woff2");

    font-family: "Roboto";
    font-weight: 100;
}

@font-face {
    // Это анализируется как обычный вызов функции, который принимает арифметическое выражение.
    src: url($roboto-font-path + "/Roboto-Light.woff2") format("woff2");

    font-family: "Roboto";
    font-weight: 300;
}

@font-face {
    // Это анализируется как интерполированная специальная функция.
    src: url(#{$roboto-font-path}/Roboto-Regular.woff2) format("woff2");

    font-family: "Roboto";
    font-weight: 400;
}
```

@tab SASS

```sass
$roboto-font-path: "../fonts/roboto"

@font-face
    // Это анализируется как обычный вызов функции, который принимает строку в кавычках.
    src: url("#{$roboto-font-path}/Roboto-Thin.woff2") format("woff2")

    font-family: "Roboto"
    font-weight: 100


@font-face
    // Это анализируется как обычный вызов функции, который принимает арифметическое выражение.
    src: url($roboto-font-path + "/Roboto-Light.woff2") format("woff2")

    font-family: "Roboto"
    font-weight: 300


@font-face
    // Это анализируется как интерполированная специальная функция.
    src: url(#{$roboto-font-path}/Roboto-Regular.woff2) format("woff2")

    font-family: "Roboto"
    font-weight: 400

```

@tab CSS

```css
@font-face {
  src: url("../fonts/roboto/Roboto-Thin.woff2") format("woff2");
  font-family: "Roboto";
  font-weight: 100;
}
@font-face {
  src: url("../fonts/roboto/Roboto-Light.woff2") format("woff2");
  font-family: "Roboto";
  font-weight: 300;
}
@font-face {
  src: url(../fonts/roboto/Roboto-Regular.woff2) format("woff2");
  font-family: "Roboto";
  font-weight: 400;
}










```

:::

## `element()`, `progid:...()` и `expression()`

::: details <Status :data="{ feature: 'calc()', dart: '<1.40.0', lib: false, ruby: false }" />

LibSass, Ruby Sass и версии Dart Sass до 1.40.0 анализируют `calc()` как специальную синтаксическую функцию, такую как `element()`.

Dart Sass 1.40.0 версии и более поздних анализирует `calc()` как [вычисление][calculation].

:::

::: details <Status :data="{ feature: 'clamp()', dart: '>=1.31.0 <1.40.0', lib: false, ruby: false }" />

LibSass, Ruby Sass и версии Dart Sass до 1.31.0 анализируют `clamp()` как [простую функцию CSS][plain CSS function], а не поддерживают в ней специальный синтаксис.

Версии Dart Sass между 1.31.0 и 1.40.0 анализируют `clamp()` как специальную синтаксическую функцию, такую как `element()`.

Dart Sass 1.40.0 версии и более поздних анализирует `clamp()` как [вычисление][calculation].

:::

[calculation]: ../values/calculations

Функция [`element()`] определена в спецификации CSS, и поскольку ее идентификаторы могут быть проанализированы как цвета, они нуждаются в специальном анализе.

[`element()`]: https://developer.mozilla.org/en-US/docs/Web/CSS/element

[`expression()`][] и функции, начинающиеся с [`progid:`][] являются устаревшими функциями Internet Explorer, которые используют нестандартный синтаксис. Хотя последние версии браузеров больше не поддерживают их, Sass продолжает анализировать их на предмет обратной совместимости.

[`expression()`]: https://blogs.msdn.microsoft.com/ie/2008/10/16/ending-expressions/
[`progid:`]: https://blogs.msdn.microsoft.com/ie/2009/02/19/the-css-corner-using-filters-in-ie8/

Sass допускает *любой текст* в этих вызовах функций, включая вложенные круглые скобки. Ничто не интерпретируется как выражение SassScript, за исключением того, что [интерполяция][interpolation] может использоваться для вставки динамических значений.

::: code-tabs#styles

@tab:active SCSS

```scss
$logo-element: logo-bg;

.logo {
  background: element(##{$logo-element});
}
```

@tab SASS

```sass
$logo-element: logo-bg

.logo
  background: element(##{$logo-element})

```

@tab CSS

```css
.logo {
  background: element(#logo-bg);
}


```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
