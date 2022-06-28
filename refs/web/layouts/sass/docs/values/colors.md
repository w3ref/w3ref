---
title: Цвета
category:
  - Sass
  - Значения
  - Цвета
---

## Обзор

::: details <Status :data="{ feature: 'Level 4 Syntax', dart: '1.14.0', lib: '3.6.0', ruby: '3.6.0' }" />

LibSass и более старые версии Dart или Ruby Sass не поддерживают [шестнадцатеричные цвета с альфа-каналом](https://drafts.csswg.org/css-color/#hex-notation).
:::

Sass имеет встроенную поддержку значений цвета. Как и цвета CSS, они представляют точки в [цветовом пространстве sRGB](https://en.wikipedia.org/wiki/SRGB), хотя многие [функции цвета](../modules/color) Sass работают с использованием [координат HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) (которые являются просто еще одним способом выражения цветов sRGB). Цвета Sass могут быть записаны как шестнадцатеричные коды (`#f2ece4` или `#b37399aa`), [имена цветов CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords) (`midnightblue`, `transparent`) или функции [`rgb()`](../modules/README.md#rgba), [`rgba()`](../modules/README.md#rgb), [`hsl()`](../modules/README.md#hsl) и [`hsla()`](../modules/README.md#hsla).

::: code-tabs#styles

@tab:active SCSS

```scss
@debug #f2ece4; // #f2ece4
@debug #b37399aa; // rgba(179, 115, 153, 67%)
@debug midnightblue; // #191970
@debug rgb(204, 102, 153); // #c69
@debug rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)
@debug hsl(228, 7%, 86%); // #dadbdf
@debug hsla(20, 20%, 85%, 0.7); // rgb(225, 215, 210, 0.7)
```

@tab Sass

```sass
@debug #f2ece4  // #f2ece4
@debug #b37399aa  // rgba(179, 115, 153, 67%)
@debug midnightblue  // #191970
@debug rgb(204, 102, 153)  // #c69
@debug rgba(107, 113, 127, 0.8)  // rgba(107, 113, 127, 0.8)
@debug hsl(228, 7%, 86%)  // #dadbdf
@debug hsla(20, 20%, 85%, 0.7)  // rgb(225, 215, 210, 0.7)
```

:::

::: tip Забавный факт
Независимо от того, как изначально был написан цвет Sass, его можно использовать как с функциями на основе HSL, так и с функциями на основе RGB!
:::

CSS поддерживает множество различных форматов, которые могут представлять один и тот же цвет: его имя, его шестнадцатеричный код и [функциональная нотация](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). Какой формат Sass выбирает для компиляции цвета, зависит от самого цвета, от того, как он был написан в исходной таблице стилей, и от текущего режима вывода. Поскольку они могут сильно различаться, авторам таблиц стилей не следует полагаться на какой-либо конкретный формат вывода для цветов, которые они пишут.

Sass поддерживает множество полезных [цветовых функций](../modules/color#mix), которые можно использовать для создания новых цветов на основе существующих, [смешивая цвета вместе][mixing colors together] или [масштабируя их оттенок, насыщенность или яркость](../modules/color#scale).

::: code-tabs#styles

@tab:active SCSS

```scss
$venus: #998099;

@debug scale-color($venus, $lightness: +15%); // #a893a8
@debug mix($venus, midnightblue); // #594d85
```

@tab Sass

```sass
$venus: #998099

@debug scale-color($venus, $lightness: +15%)  // #a893a8
@debug mix($venus, midnightblue)  // #594d85
```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
