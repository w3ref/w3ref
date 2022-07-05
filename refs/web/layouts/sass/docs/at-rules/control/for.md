---
title: "@for"
category:
  - Sass
  - At-Правила
  - Управление потоком
  - for
---

## Обзор

Правило `@for`, записанное `@for <variable> from <expression> to <expression> { ... }` или `@for <variable> from <expression> through <expression> { ... }`, считает вверх или вниз от одного числа (результат первого [выражения](../../syntax/structure#expressions)) до другого (результат второго) и оценивает блок для каждого числа между ними. Каждому номеру по пути присваивается имя данной переменной. Если используется `to`, окончательное число исключается; если используется `through`, он включается.

::: code-tabs#styles

@tab:active SCSS

```scss
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}




```

@tab SASS

```sass
$base-color: #036

@for $i from 1 through 3
  ul:nth-child(3n + #{$i})
    background-color: lighten($base-color, $i * 5%)






```

@tab CSS

```css
ul:nth-child(3n + 1) {
  background-color: #004080;
}

ul:nth-child(3n + 2) {
  background-color: #004d99;
}

ul:nth-child(3n + 3) {
  background-color: #0059b3;
}
```

:::
