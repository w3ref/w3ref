---
title: "@if и @else"
category:
  - Sass
  - At-Правила
  - Управление потоком
  - if
  - else
---

## Обзор

Правило `@if` записывается как `@if <expression> { ... }`, и оно контролирует, оценивается ли его блок (включая выдачу любых стилей как CSS). [Выражение](../../syntax/structure#expressions) обычно возвращает либо [`true` или `false`](../../values/booleans) — если выражение возвращает `true`, блок оценивается, и если выражение возвращает `false`, это не так.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```

@tab Sass

```sass
@mixin avatar($size, $circle: false)
  width: $size
  height: $size

  @if $circle
    border-radius: $size / 2

.square-av
  @include avatar(100px, $circle: false)
.circle-av
  @include avatar(100px, $circle: true)




```

@tab CSS

```css
.square-av {
  width: 100px;
  height: 100px;
}

.circle-av {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}





```

:::

## `@else`

За правилом `@if` может дополнительно следовать правило `@else`, написанное как `@else { ... }`. Блок этого правила оценивается, если выражение `@if` возвращает `false`.

::: code-tabs#styles

@tab:active SCSS

```scss
$light-background: #f2ece4;
$light-text: #036;
$dark-background: #6b717f;
$dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) {
  @if $light-theme {
    background-color: $light-background;
    color: $light-text;
  } @else {
    background-color: $dark-background;
    color: $dark-text;
  }
}

.banner {
  @include theme-colors($light-theme: true);
  body.dark & {
    @include theme-colors($light-theme: false);
  }
}
```

@tab Sass

```sass
$light-background: #f2ece4
$light-text: #036
$dark-background: #6b717f
$dark-text: #d2e1dd

@mixin theme-colors($light-theme: true)
  @if $light-theme
    background-color: $light-background
    color: $light-text
  @else
    background-color: $dark-background
    color: $dark-text



.banner
  @include theme-colors($light-theme: true)
  body.dark &
    @include theme-colors($light-theme: false)


```

@tab CSS

```css
.banner {
  background-color: #f2ece4;
  color: #036;
}
body.dark .banner {
  background-color: #6b717f;
  color: #d2e1dd;
}













```

:::

Условные выражения могут содержать [логические операторы][boolean operators] (`and`, `or`, `not`).

[boolean operators]: ../../operators/boolean

### `@else if`

Вы также можете выбрать, оценивать ли блок правила `@else`, написав его `@else if <expression> { ... }`.
Если вы это сделаете, блок будет оценен только в том случае, если предыдущее выражение `@if` возвращает `false` *а* выражение `@else if` возвращает `true`.

Фактически, вы можете связать столько `@else if`, сколько захотите, после `@if`.
Будет оценен первый блок в цепочке, выражение которого возвращает `true`, и никакие другие.
Если в конце цепочки есть простой `@else`, его блок будет оценен, если любой другой блок провалиться.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:math";

@mixin triangle($size, $color, $direction) {
  height: 0;
  width: 0;

  border-color: transparent;
  border-style: solid;
  border-width: math.div($size, 2);

  @if $direction == up {
    border-bottom-color: $color;
  } @else if $direction == right {
    border-left-color: $color;
  } @else if $direction == down {
    border-top-color: $color;
  } @else if $direction == left {
    border-right-color: $color;
  } @else {
    @error "Unknown direction #{$direction}.";
  }
}

.next {
  @include triangle(5px, black, right);
}
```

@tab Sass

```sass
@use "sass:math"

@mixin triangle($size, $color, $direction)
  height: 0
  width: 0

  border-color: transparent
  border-style: solid
  border-width: math.div($size, 2)

  @if $direction == up
    border-bottom-color: $color
  @else if $direction == right
    border-left-color: $color
  @else if $direction == down
    border-top-color: $color
  @else if $direction == left
    border-right-color: $color
  @else
    @error "Unknown direction #{$direction}."



.next
  @include triangle(5px, black, right)

```

@tab CSS

```css
.next {
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 2.5px;
  border-left-color: black;
}


















```

:::

## Истинность и ложность

Везде, где разрешены `true` или `false`, вы также можете использовать другие значения.
Значения `false` и [`null`](../../values/null) равны *файльшивому*, что означает, что Sass считает, что они указывают на ложность и вызывают невыполнение условий. Все остальные значения считаются *истинными*, поэтому Sass считает, что они работают как `true` и вызывают выполнение условий.

Например, если вы хотите проверить, содержит ли строка пробел, вы можете просто написать `string.index($string, " ")`. [Функция `string.index()`](../../modules/string#index) возвращает `null`, если строка не найдена, и число в противном случае.

::: warning Осторожно!
Некоторые языки считают ложными больше значений, чем просто `false` и `null`. Sass - не один из таких языков! Пустые строки, пустые списки и число `0` - все это истинно в Sass.
:::
