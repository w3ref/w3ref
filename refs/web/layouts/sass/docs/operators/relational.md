---
title: Отношения
category:
  - Sass
  - Операторы
  - Отношения
---

## Обзор

Операторы отношения определяют, являются ли [числа](../values/numbers) больше или меньше друг друга. Они автоматически конвертируют между совместимыми единицами.

* `<expression> < <expression>` возвращает, является ли значение первого [выражения](../syntax/structure#expressions) меньше второго.
* `<expression> <= <expression>` возвращает, является ли значение первого [выражения](../syntax/structure#expressions) меньшим или равным второму.
* `<expression> > <expression>` возвращает, является ли значение первого [выражения](../syntax/structure#expressions) больше второго.
* `<expression> >= <expression>`, возвращает, является ли значение первого [выражения](../syntax/structure#expressions) больше или равно второму.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 100 > 50; // true
@debug 10px < 17px; // true
@debug 96px >= 1in; // true
@debug 1000ms <= 1s; // true
```

@tab SASS

```sass
@debug 100 > 50  // true
@debug 10px < 17px  // true
@debug 96px >= 1in  // true
@debug 1000ms <= 1s  // true
```

:::

Безразмерные числа можно сравнивать с любым числом. Они автоматически конвертируются в единицы этого числа.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 100 > 50px; // true
@debug 10px < 17; // true
```

@tab SASS

```sass
@debug 100 > 50px  // true
@debug 10px < 17  // true
```

:::

Номера с несовместимыми блоками сравнивать нельзя.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 100px > 10s;
//     ^^^^^^^^^^^
// Error: Incompatible units px and s.
```

@tab SASS

```sass
@debug 100px > 10s
//     ^^^^^^^^^^^
// Error: Incompatible units px and s.
```

:::
