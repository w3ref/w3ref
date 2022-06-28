---
title: Логические
category:
  - Sass
  - Значения
  - Логические
---

## Обзор

Логические значения - это логические значения `true` и `false`. В дополнение к их буквальным формам, логические значения возвращаются операторами [равенства](../operators/equality) и [реляционные](../operators/relational), а также многие встроенные функции, такие как [`math.comparable()`](../modules/math#comparable) и [`map.has-key()`](../modules/map#has-key).

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:math";

@debug 1px == 2px; // false
@debug 1px == 1px; // true
@debug 10px < 3px; // false
@debug math.comparable(100px, 3in); // true
```

@tab Sass

```sass
@use "sass:math"

@debug 1px == 2px  // false
@debug 1px == 1px  // true
@debug 10px < 3px  // false
@debug math.comparable(100px, 3in)  // true
```

:::

Вы можете работать с логическими значениями, используя [логические операторы](../operators/boolean). Оператор `and` возвращает `true` если *обе* стороны равны `true`, а оператор `or` возвращает `true`, если *любая* сторона имеет значение `true`. Оператор `not` возвращает противоположность одиночному логическому значению.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug true and true; // true
@debug true and false; // false

@debug true or false; // true
@debug false or false; // false

@debug not true; // false
@debug not false; // true
```

@tab Sass

```sass
@debug true and true  // true
@debug true and false  // false

@debug true or false  // true
@debug false or false  // false

@debug not true  // false
@debug not false  // true
```

:::

## Использование логических значений

Вы можете использовать логические значения, чтобы выбрать, выполнять ли какие-либо действия в Sass. [Правило `@if`](../at-rules/control/if) оценивает блок стилей, если его аргумент равен `true`:

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

[Функция `if()`](../modules/README.md#if) возвращает одно значение, если его аргумент равен `true` и другое, если его аргумент равен `false`:

::: code-tabs#styles

@tab:active SCSS

```scss
@debug if(true, 10px, 30px); // 10px
@debug if(false, 10px, 30px); // 30px
```

@tab Sass

```sass
@debug if(true, 10px, 30px)  // 10px
@debug if(false, 10px, 30px)  // 30px
```

:::

## Истинность и ложность

Везде, где разрешены `true` или `false`, вы также можете использовать другие значения.
Значения `false` и [`null`](../../values/null) равны *файльшивому*, что означает, что Sass считает, что они указывают на ложность и вызывают невыполнение условий. Все остальные значения считаются *истинными*, поэтому Sass считает, что они работают как `true` и вызывают выполнение условий.

Например, если вы хотите проверить, содержит ли строка пробел, вы можете просто написать `string.index($string, " ")`. [Функция `string.index()`](../../modules/string#index) возвращает `null`, если строка не найдена, и число в противном случае.

::: warning Осторожно!
Некоторые языки считают ложными больше значений, чем просто `false` и `null`. Sass - не один из таких языков! Пустые строки, пустые списки и число `0` - все это истинно в Sass.
:::
