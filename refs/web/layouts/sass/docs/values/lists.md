---
title: Списки
category:
  - Sass
  - Значения
  - Списки
---

## Обзор

::: details <Status :data="{ feature: 'Square Brackets', dart: true, lib: '3.5.0', ruby: '3.5.0' }" />

Старые реализации LibSass и Ruby Sass не поддерживали списки с квадратными скобками.
:::

Списки содержат последовательность других значений. В Sass элементы в списках могут быть разделены запятыми (`Helvetica, Arial, sans-serif`), пробелами (`10px 15px 0 0`) или [косой чертой](#slash-separated-lists), если это согласуется со списком. В отличие от большинства других языков, списки в Sass не требуют специальных скобок; любые [выражения](../syntax/structure#expressions), разделенные пробелами или запятыми, считаются списком. Однако вы можете писать списки в квадратных скобках (`[line1 line2]`), что полезно при использовании [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).

Списки Sass могут содержать один или даже ноль элементов. Одноэлементный список может быть записан как `(<expression>,)` или `[<expression>]`, а список без элементов может быть записан как `()` или `[]`. Кроме того, все [функции списка](../modules/list) будут обрабатывать отдельные значения, которых нет в списках, как если бы они были списками, содержащими это значение, что означает, что вам редко нужно явно создавать одноэлементные списки.

::: warning Осторожно!
Пустые списки без скобок не являются допустимым CSS, поэтому Sass не позволит вам использовать их в значении свойства.
:::

## Списки, разделенные косой чертой

Списки в Sass могут быть разделены косой чертой для представления таких значений, как сокращение `font: 12px/30px` для установки `font-size` и `line-height` или синтаксиса `hsl(80 100% 50% / 0.5)` для создания цвета с заданным значением непрозрачности. Однако **списки, разделенные косой чертой, в настоящее время не могут быть записаны буквально**. Sass исторически использовал символ `/` для обозначения деления, поэтому существующие таблицы стилей переходят на использование списков, разделенных косой чертой [`math.div()`](../modules/math#div) может быть записано только с использованием [`list.slash()`](../modules/list#slash).

Для получения дополнительной информации смотрите [Критическое изменение: слэш как разделение](../breaking-changes/slash-div).

## Использование списков

Sass предоставляет несколько [функций](../modules/list), которые позволяют использовать списки для написания мощных библиотек стилей или сделать таблицу стилей вашего приложения более чистой и удобной в обслуживании.

### Индексы

Многие из этих функций принимают или возвращают числа, называемые *индексами*, которые относятся к элементам в списке. Индекс 1 указывает на первый элемент списка. Обратите внимание, что это отличается от многих языков программирования, где индексы начинаются с 0! Sass также упрощает обращение к концу списка. Индекс -1 относится к последнему элементу в списке, -2 относится к предпоследнему и так далее.

### Доступ к элементу

Списки бесполезны, если вы не можете извлечь из них значения. Вы можете использовать [функцию `list.nth($list, $n)`](../modules/list#nth), чтобы получить элемент по заданному индексу в списке. Первый аргумент - это сам список, а второй - индекс значения, которое вы хотите получить.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug list.nth(10px 12px 16px, 2); // 12px
@debug list.nth([line1, line2, line3], -1); // line3
```

@tab Sass

```sass
@debug list.nth(10px 12px 16px, 2)  // 12px
@debug list.nth([line1, line2, line3], -1)  // line3
```

:::

### Сделайте что-нибудь для каждого элемента

На самом деле здесь не используется функция, но это по-прежнему один из наиболее распространенных способов использования списков.
[Правило `@each`](../at-rules/control/each) оценивает блок стилей для каждого элемента в списке и назначает этот элемент переменной.

::: code-tabs#styles

@tab:active SCSS

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}








```

@tab Sass

```sass
$sizes: 40px, 50px, 80px

@each $size in $sizes
  .icon-#{$size}
    font-size: $size
    height: $size
    width: $size










```

@tab CSS

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

:::

### Добавить в список

Также полезно добавлять элементы в список. [Функция `list.append($list, $val)`](../modules/list#append) принимает список и значение и возвращает копию списка со значением, добавленным в конец. Обратите внимание: поскольку списки Sass [неизменяемые](#immutability), они не изменяют исходный список.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug append(10px 12px 16px, 25px); // 10px 12px 16px 25px
@debug append([col1-line1], col1-line2); // [col1-line1, col1-line2]
```

@tab Sass

```sass
@debug append(10px 12px 16px, 25px)  // 10px 12px 16px 25px
@debug append([col1-line1], col1-line2)  // [col1-line1, col1-line2]
```

:::

### Найти элемент в списке

Если вам нужно проверить, находится ли элемент в списке или выяснить, по какому индексу он находится, используйте [функцию `list.index($list, $value)`](../modules/list).
Он принимает список и значение, которое нужно найти в этом списке, и возвращает индекс этого значения.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug list.index(1px solid red, 1px); // 1
@debug list.index(1px solid red, solid); // 2
@debug list.index(1px solid red, dashed); // null
```

@tab Sass

```sass
@debug list.index(1px solid red, 1px)  // 1
@debug list.index(1px solid red, solid)  // 2
@debug list.index(1px solid red, dashed)  // null
```

:::

Если значение отсутствует в списке, `list.index()` возвращает [`null`](./null). Поскольку `null` равен [falsey](../at-rules/control/if#truthiness-and-falsiness), вы можете использовать `list.index()` с [`@if`](../at-rules/control/if) или [`if()`](../modules#if), чтобы проверить, соответствует ли список содержат заданное значение.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:list";

$valid-sides: top, bottom, left, right;

@mixin attach($side) {
  @if not list.index($valid-sides, $side) {
    @error "#{$side} is not a valid side. Expected one of #{$valid-sides}.";
  }

  // ...
}
```

@tab Sass

```sass
@use "sass:list"

$valid-sides: top, bottom, left, right

@mixin attach($side)
  @if not list.index($valid-sides, $side)
    @error "#{$side} is not a valid side. Expected one of #{$valid-sides}."


  // ...

```

:::

## Неизменность

Списки в Sass *неизменяемы*, что означает, что содержимое значения списка никогда не изменяется. Все функции списков Sass возвращают новые списки, а не изменяют исходные. Неизменяемость помогает избежать множества скрытых ошибок, которые могут закрасться, когда один и тот же список используется в разных частях таблицы стилей.

Однако вы все равно можете обновлять свое состояние с течением времени, назначая новые списки той же переменной. Это часто используется в функциях и миксинах для сбора группы значений в один список.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:list";
@use "sass:map";

$prefixes-by-browser: ("firefox": moz, "safari": webkit, "ie": ms);

@function prefixes-for-browsers($browsers) {
  $prefixes: ();
  @each $browser in $browsers {
    $prefixes: list.append($prefixes, map.get($prefixes-by-browser, $browser));
  }
  @return $prefixes;
}

@debug prefixes-for-browsers("firefox" "ie"); // moz ms
```

@tab Sass

```sass
@use "sass:list"
@use "sass:map"

$prefixes-by-browser: ("firefox": moz, "safari": webkit, "ie": ms)

@function prefixes-for-browsers($browsers)
  $prefixes: ()
  @each $browser in $browsers
    $prefixes: list.append($prefixes, map.get($prefixes-by-browser, $browser))

  @return $prefixes


@debug prefixes-for-browsers("firefox" "ie")  // moz ms
```

:::

## Списки аргументов

Когда вы объявляете миксин или функцию, которая принимает [произвольные аргументы](../at-rules/mixin#taking-arbitrary-arguments), вы получаете значение в виде специального списка, известного как *список аргументов*. Он действует так же, как список, содержащий все аргументы, переданные в миксин или функцию, с одной дополнительной функцией: если пользователь передал аргументы ключевого слова, к ним можно получить доступ как к карте, передав список аргументов в [функцию `meta.keywords()`](../modules/meta#keywords).

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:meta";

@mixin syntax-colors($args...) {
  @debug meta.keywords($args);
  // (string: #080, comment: #800, variable: #60b)

  @each $name, $color in meta.keywords($args) {
    pre span.stx-#{$name} {
      color: $color;
    }
  }
}

@include syntax-colors(
  $string: #080,
  $comment: #800,
  $variable: #60b,
)
```

@tab Sass

```sass
@use "sass:meta"

@mixin syntax-colors($args...)
  @debug meta.keywords($args)
  // (string: #080, comment: #800, variable: #60b)

  @each $name, $color in meta.keywords($args)
    pre span.stx-#{$name}
      color: $color




@include syntax-colors($string: #080, $comment: #800, $variable: #60b)




```

@tab CSS

```css
pre span.stx-string {
  color: #080;
}

pre span.stx-comment {
  color: #800;
}

pre span.stx-variable {
  color: #60b;
}







```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
