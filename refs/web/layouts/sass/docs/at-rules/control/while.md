---
title: "@while"
category:
  - Sass
  - At-Правила
  - Управление потоком
  - while
---

## Обзор

Правило `@while`, записанное `@while <expression> { ... }`, оценивает свой блок, если его [выражение](../../syntax/structure#expressions) возвращает `true`. Затем, если его выражение все еще возвращает `true`, он снова оценивает свой блок. Это продолжается до тех пор, пока выражение, наконец, не вернет `false`.

@tab:active SCSS

```scss
@use "sass:math";

/// Divides `$value` by `$ratio` until it's below `$base`.
@function scale-below($value, $base, $ratio: 1.618) {
  @while $value > $base {
    $value: math.div($value, $ratio);
  }
  @return $value;
}

$normal-font-size: 16px;
sup {
  font-size: scale-below(20px, 16px);
}
```

@tab Sass

```sass
@use "sass:math"

/// Divides `$value` by `$ratio` until it's below `$base`.
@function scale-below($value, $base, $ratio: 1.618)
  @while $value > $base
    $value: math.div($value, $ratio)
  @return $value



$normal-font-size: 16px
sup
  font-size: scale-below(20px, 16px)

```

@tab CSS

```css
sup {
  font-size: 12.36094px;
}











```

:::

::: warning Осторожно!
Хотя `@while` необходим для нескольких особенно сложных таблиц стилей, обычно лучше использовать [`@each`](./each) или [`@for`](./for), если любой из них будет работать. Они более понятны для читателя и часто быстрее компилируются.
:::

## Истинность и ложность

Везде, где разрешены `true` или `false`, вы также можете использовать другие значения.
Значения `false` и [`null`](../../values/null) равны *файльшивому*, что означает, что Sass считает, что они указывают на ложность и вызывают невыполнение условий. Все остальные значения считаются *истинными*, поэтому Sass считает, что они работают как `true` и вызывают выполнение условий.

Например, если вы хотите проверить, содержит ли строка пробел, вы можете просто написать `string.index($string, " ")`. [Функция `string.index()`](../../modules/string#index) возвращает `null`, если строка не найдена, и число в противном случае.

::: warning Осторожно!
Некоторые языки считают ложными больше значений, чем просто `false` и `null`. Sass - не один из таких языков! Пустые строки, пустые списки и число `0` - все это истинно в Sass.
:::
