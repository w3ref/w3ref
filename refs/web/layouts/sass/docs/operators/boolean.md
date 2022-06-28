---
title: Логические
category:
  - Sass
  - Операторы
  - Логические
---

## Обзор

В отличие от таких языков, как JavaScript, Sass использует слова, а не символы для своих [логических](../values/booleans) операторов.

* `not <expression>` возвращает значение, противоположное выражению: оно превращает `true` в `false`, а `false` в `true`.
* `<expression> and <expression>` возвращает `true` если *оба* значения выражений `true`, а `false`, если любое из них равно `false`.
* `<expression> or <expression>` возвращает `true`, если *любое* значений выражения равно `true`, а `false`, если оба значения `false`.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug not true; // false
@debug not false; // true

@debug true and true; // true
@debug true and false; // false

@debug true or false; // true
@debug false or false; // false
```

@tab Sass

```sass
@debug not true  // false
@debug not false  // true

@debug true and true  // true
@debug true and false  // false

@debug true or false  // true
@debug false or false  // false
```

:::

## Истинность и ложность

Везде, где разрешены `true` или `false`, вы также можете использовать другие значения.
Значения `false` и [`null`](../../values/null) равны *файльшивому*, что означает, что Sass считает, что они указывают на ложность и вызывают невыполнение условий. Все остальные значения считаются *истинными*, поэтому Sass считает, что они работают как `true` и вызывают выполнение условий.

Например, если вы хотите проверить, содержит ли строка пробел, вы можете просто написать `string.index($string, " ")`. [Функция `string.index()`](../../modules/string#index) возвращает `null`, если строка не найдена, и число в противном случае.

::: warning Осторожно!
Некоторые языки считают ложными больше значений, чем просто `false` и `null`. Sass - не один из таких языков! Пустые строки, пустые списки и число `0` - все это истинно в Sass.
:::
