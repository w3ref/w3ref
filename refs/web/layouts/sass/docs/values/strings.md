---
title: Строки
category:
  - Sass
  - Значения
  - Строки
---

## Обзор

Строки - это последовательности символов (в частности, [кодовые точки Unicode](https://en.wikipedia.org/wiki/Code_point)). Sass поддерживает два типа строк, внутренняя структура которых одинакова, но которые отображаются по-разному: [строки в кавычках](#quoted), например: `"Helvetica Neue"`, и [строки без кавычек](#unquoted) (также известные как *идентификаторы*), например, `bold`. Вместе они охватывают различные типы текста, которые появляются в CSS.

::: tip Забавный факт
Вы можете преобразовать строку в кавычках в строку без кавычек, используя [функцию `string.unquote()`](../modules/string#unquote), и вы можете преобразовать строку без кавычек в строку в кавычках, используя [функцию `string.quote()`](../modules/string#quote).

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:string";

@debug string.unquote(".widget:hover"); // .widget:hover
@debug string.quote(bold); // "bold"
```

@tab SASS

```sass
@use "sass:string"

@debug string.unquote(".widget:hover")  // .widget:hover
@debug string.quote(bold)  // "bold"
```

:::

:::

## Экранирования

Все строки Sass поддерживают стандартные CSS [коды экранирования](https://developer.mozilla.org/en-US/docs/Web/CSS/string#Syntax):

* Любой символ, кроме буквы от A до F или числа от 0 до 9 (даже новая строка!) может быть включен как часть строки, написав перед ним `\`.
* Любой символ может быть включен как часть строки, написав `\`, за которым следует его [номер кодовой точки Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters), записанный в [шестнадцатеричном формате](https://en.wikipedia.org/wiki/Hexadecimal). При желании вы можете включить пробел после номера кодовой точки, чтобы указать, где заканчивается номер Unicode.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug "\""; // '"'
@debug \.widget; // \.widget
@debug "\a"; // "\a" (a string containing only a newline)
@debug "line1\a line2"; // "line1\a line2"
@debug "Nat + Liz \1F46D"; // "Nat + Liz 👭"
```

@tab SASS

```sass
@debug "\""  // '"'
@debug \.widget  // \.widget
@debug "\a"  // "\a" (a string containing only a newline)
@debug "line1\a line2"  // "line1\a line2" (foo and bar are separated by a newline)
@debug "Nat + Liz \1F46D"  // "Nat + Liz 👭"
```

:::

::: tip Забавный факт
Для символов, которым разрешено появляться в строках, запись escape-последовательности Unicode дает в точности ту же строку, что и запись самого символа.
:::

## С кавычками

Строки в кавычках заключаются в одинарные или двойные кавычки, как в `"Helvetica Neue"`. Они могут содержать [интерполяцию](../interpolation/README.md), а также любой неэкранированный символ, кроме:

* `\`, который может быть экранирован как `\\`;
* `'` или `"`, в зависимости от того, что было использовано для определения этой строки, которая может быть экранирована как `\'` или `\"`;
* символы новой строки, которые могут быть экранированы как `\a` (включая конечный пробел).

Строки в кавычках гарантированно будут скомпилированы в строки CSS, которые имеют то же содержимое, что и исходные строки Sass. Точный формат может варьироваться в зависимости от реализации или конфигурации - строка, содержащая двойные кавычки, может быть скомпилирована в `"\""` или `'"'`, а символ, отличный от [ASCII](https://en.wikipedia.org/wiki/ASCII), может быть или не быть сбежал. Но это должно быть проанализировано одинаково в любой соответствующей стандартам реализации CSS, включая все браузеры.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug "Helvetica Neue"; // "Helvetica Neue"
@debug "C:\\Program Files"; // "C:\\Program Files"
@debug "\"Don't Fear the Reaper\""; // "\"Don't Fear the Reaper\""
@debug "line1\a line2"; // "line1\a line2"

$roboto-variant: "Mono";
@debug "Roboto #{$roboto-variant}"; // "Roboto Mono"
```

@tab SASS

```sass
@debug "Helvetica Neue"  // "Helvetica Neue"
@debug "C:\\Program Files"  // "C:\\Program Files"
@debug "\"Don't Fear the Reaper\""  // "\"Don't Fear the Reaper\""
@debug "line1\a line2"  // "line1\a line2"

$roboto-variant: "Mono"
@debug "Roboto #{$roboto-variant}"  // "Roboto Mono"
```

:::

::: tip Забавный факт
Когда строка в кавычках вставляется в другое значение посредством интерполяции, [ее кавычки удаляются](../interpolation#quoted-strings! Это упрощает написание строк, содержащих, например, селекторы, которые можно вставлять в правила стиля без добавления кавычек.
:::

## Без кавычек

Строки без кавычек записываются как CSS [идентификаторы](https://drafts.csswg.org/css-syntax-3/#ident-token-diagram), следуя синтаксической диаграмме ниже. Они могут включать [интерполяцию](../interpolation/README.md) в любом месте.

<figure>
  <object type="image/svg+xml" data="/images/refs/web/layouts/sass/illustrations/identifier-diagram.svg"></object>
  <figcaption class="copyright">Railroad diagram copyright © 2018 W3C<sup>®</sup> (MIT, ERCIM, Keio, Beihang). W3C <a href="http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer">liability</a>, <a href="http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks">trademark</a> and <a href="http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document">permissive document license</a> rules apply.
</figcaption>
</figure>

::: code-tabs#styles

@tab:active SCSS

```scss
@debug bold; // bold
@debug -webkit-flex; // -webkit-flex
@debug --123; // --123

$prefix: ms;
@debug -#{$prefix}-flex; // -ms-flex
```

@tab SASS

```sass
@debug bold  // bold
@debug -webkit-flex  // -webkit-flex
@debug --123  // --123

$prefix: ms
@debug -#{$prefix}-flex  // -ms-flex
```

:::

::: warning Осторожно!
Не все идентификаторы анализируются как строки без кавычек:

* [Названия цветов CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords) анализируются как [цвета](./colors).
* `null` анализируются как [значение Sass `null`](./null).
* `true` и `false` анализируются как [Booleans](./booleans).
* `not`, `and` и `or` анализируются как [логические операторы](../operators/boolean).

Из-за этого, как правило, рекомендуется писать строки в кавычках, если вы специально не пишете значение свойства CSS, которое использует строки без кавычек.
:::

### Экранирование в строках без кавычек

::: details <Status :data="{ feature: 'Normalization', dart: '1.11.0', lib: false, ruby: false }" />

LibSass, Ruby Sass и более старые версии Dart Sass не нормализуют escape-последовательности в идентификаторах. Вместо этого текст в строке без кавычек - это точный текст, написанный пользователем. Например, `\1F46D` и `👭` не считаются эквивалентными.
:::

Когда анализируется строка без кавычек, буквальный текст escape-символов анализируется как часть строки. Например, `\a ` разбирается как символы `\`, `a` и пробел. Тем не менее, чтобы гарантировать, что строки без кавычек, которые имеют одинаковое значение в CSS, анализируются одинаково, эти escape-последовательности *нормализованы*. Для каждой кодовой точки, вне зависимости от того, экранирован он или нет:

* Если это действительный символ идентификатора, он включается без экранирования в строку без кавычек. Например, `\1F46D` возвращает строку `👭` без кавычек.
* Если это печатный символ, отличный от новой строки или табуляции, он включается после символа `\`. Например, `\21 ` возвращает строку `\!` без кавычек.
* В противном случае escape-последовательность Unicode в нижнем регистре включается с завершающим пробелом. Например, `\7Fx` возвращает строку `\7f x` без кавычек.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:string";

@debug \1F46D; // 👭
@debug \21; // \!
@debug \7Fx; // \7f x
@debug string.length(\7Fx); // 5
```

@tab SASS

```sass
@use "sass:string"

@debug \1F46D  // 👭
@debug \21  // \!
@debug \7Fx  // \7f x
@debug string.length(\7Fx)  // 5
```

:::

## Строковые индексы

В Sass есть ряд [строковых функций](../modules/string), которые принимают или возвращают числа, называемые *индексами*, которые относятся к символам в строке. Индекс 1 указывает на первый символ строки. Обратите внимание, что это отличается от многих языков программирования, где индексы начинаются с 0! Sass также упрощает обращение к концу строки. Индекс -1 относится к последнему символу в строке, -2 относится к предпоследнему и так далее.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:string";

@debug string.index("Helvetica Neue", "Helvetica"); // 1
@debug string.index("Helvetica Neue", "Neue"); // 11
@debug string.slice("Roboto Mono", -4); // "Mono"
```

@tab SASS

```sass
@use "sass:string"

@debug string.index("Helvetica Neue", "Helvetica")  // 1
@debug string.index("Helvetica Neue", "Neue")  // 11
@debug string.slice("Roboto Mono", -4)  // "Mono"
```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
