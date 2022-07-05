---
title: Интерполяция
category:
  - Sass
  - Интерполяция
---

## Обзор

Интерполяцию можно использовать практически в любом месте таблицы стилей Sass, чтобы встроить результат [выражение SassScript](../syntax/structure#expressions) в фрагмент CSS. Просто заключите выражение в `#{}` в любом из следующих мест:

* [Селекторы в правилах стиля](../style-rules#interpolation)
* [Имена свойств в объявлениях](../style-rules/declarations#interpolation)
* [Значения настраиваемых свойств](../style-rules/declarations#custom-properties)
* [CSS at-rules](../at-rules/css)
* [`@extend`](../at-rules/extend)
* [Обычный CSS `@import`ы](../at-rules/import#plain-css-imports)
* [Строки в кавычках или без кавычек](../values/strings)
* [Специальные функции](../syntax/special-functions)
* [Простые имена функций CSS](../at-rules/function#plain-css-functions)
* [Громкие комментарии](../syntax/comments)

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
```

@tab SASS

```sass
@mixin corner-icon($name, $top-or-bottom, $left-or-right)
  .icon-#{$name}
    background-image: url("/icons/#{$name}.svg")
    position: absolute
    #{$top-or-bottom}: 0
    #{$left-or-right}: 0



@include corner-icon("mail", top, left)
```

@tab CSS

```css
.icon-mail {
  background-image: url("/icons/mail.svg");
  position: absolute;
  top: 0;
  left: 0;
}




```

:::

## В SassScript

::: details <Status :data="{ feature: 'Modern Syntax', dart: true, lib: false, ruby: '4.0.0 (не выпущено)' }" />

LibSass и Ruby Sass в настоящее время используют старый синтаксис для анализа интерполяции в SassScript. Для большинства практических целей он работает так же, но может вести себя странно с [операторами](../operators/). Смотрите [этот документ](https://github.com/sass/language/blob/master/accepted/free-interpolation.md#old-interpolation-rules) для получения подробной информации.

:::

В SassScript можно использовать интерполяцию для внедрения SassScript в [строки без кавычек](../values/strings#unquoted).
Это особенно полезно при динамическом создании имен (например, для анимации) или при использовании [значений, разделенных косой чертой](../operators/numeric#slash-separated-values). Обратите внимание, что интерполяция в SassScript всегда возвращает строку без кавычек.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin inline-animation($duration) {
  $name: inline-#{unique-id()};

  @keyframes #{$name} {
    @content;
  }

  animation-name: $name;
  animation-duration: $duration;
  animation-iteration-count: infinite;
}

.pulse {
  @include inline-animation(2s) {
    from { background-color: yellow }
    to { background-color: red }
  }
}
```

@tab SASS

```sass
@mixin inline-animation($duration)
  $name: inline-#{unique-id()}

  @keyframes #{$name}
    @content


  animation-name: $name
  animation-duration: $duration
  animation-iteration-count: infinite


.pulse
  @include inline-animation(2s)
    from
      background-color: yellow
    to
      background-color: red
```

@tab CSS

```css
.pulse {
  animation-name: inline-uymptpst9;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
@keyframes inline-uymptpst9 {
  from {
    background-color: yellow;
  }
  to {
    background-color: red;
  }
}





```

:::

::: info Забавный факт
Интерполяция полезна для вставки значений в строки, но в остальном она редко требуется в выражениях SassScript. Вам определенно *не* нужно просто использовать переменную в значении свойства. Вместо того, чтобы писать `color: #{$accent}`, вы можете просто написать `color: $accent`!
:::

::: warning Осторожно!
Практически всегда использовать числовую интерполяцию - плохая идея. Интерполяция возвращает строки без кавычек, которые нельзя использовать для дальнейших вычислений, и избегает встроенных мер безопасности Sass, чтобы гарантировать правильное использование единиц измерения.

В Sass есть мощная [арифметика единиц](../values/numbers#units), которую вы можете использовать вместо этого. Например, вместо того, чтобы писать `#{$width}px`, напишите `$width * 1px` или, еще лучше, объявите переменную `$width` в терминах `px` для начала. Таким образом, если у `$width` уже есть единицы измерения, вы получите красивое сообщение об ошибке вместо компиляции поддельного CSS.
:::

## Процитированные строки

В большинстве случаев интерполяция вводит тот же текст, который использовался бы, если бы выражение использовалось как [значение свойства](../style-rules/declarations).
Но есть одно исключение: кавычки вокруг цитируемых строк удаляются (даже если эти цитируемые строки находятся в списках).
Это позволяет писать строки в кавычках, содержащие синтаксис, недопустимый в SassScript (например, селекторы), и интерполировать их в правила стиля.

::: code-tabs#styles

@tab:active SCSS

```scss
.example {
  unquoted: #{"string"};
}
```

@tab SASS

```sass
.example
  unquoted: #{"string"}

```

@tab CSS

```css
.example {
  unquoted: string;
}
```

:::

::: warning Осторожно!
Хотя очень заманчиво использовать эту функцию для преобразования строк с кавычками в строки без кавычек, гораздо понятнее использовать [функцию `string.unquote()` function](../modules/string#unquote). Вместо `#{$string}` напишите `string.unquote($string)`!
:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
