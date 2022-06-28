---
title: Строковые
category:
  - Sass
  - Операторы
  - Строковые
---

## Обзор

Sass поддерживает несколько операторов, которые генерируют [строки](../values/strings):

* `<expression> + <expression>` возвращает строку, содержащую значения обоих выражений. Если любое значение является [строка в кавычках](../values/strings#quoted), результат будет заключен в кавычки; в противном случае это будет без кавычек.
* `<expression> - <expression>` возвращает строку без кавычек, содержащую значения обоих выражений, разделенные знаком `-`. Это устаревший оператор, и вместо него обычно следует использовать [интерполяцию](../interpolation/README.md).

::: code-tabs#styles

@tab:active SCSS

```scss
@debug "Helvetica" + " Neue"; // "Helvetica Neue"
@debug sans- + serif; // sans-serif
@debug sans - serif; // sans-serif
```

@tab Sass

```sass
@debug "Helvetica" + " Neue"  // "Helvetica Neue"
@debug sans- + serif  // sans-serif
@debug sans - serif  // sans-serif
```

:::

Эти операторы работают не только со строками!
Их можно использовать с любыми значениями, которые можно записать в CSS, за некоторыми исключениями:

* Числа не могут использоваться в качестве значения слева, потому что у них есть [свои собственные операторы][numeric](./numeric).
* Цвета нельзя использовать как левое значение, потому что раньше они имели [свои собственные операторы](../operators/README.md).

::: code-tabs#styles

@tab:active SCSS

```scss
@debug "Elapsed time: " + 10s; // "Elapsed time: 10s";
@debug true + " is a boolean value"; // "true is a boolean value";
```

@tab Sass

```sass
@debug "Elapsed time: " + 10s  // "Elapsed time: 10s";
@debug true + " is a boolean value"  // "true is a boolean value";
```

:::

::: warning Осторожно!
Часто проще и понятнее использовать [интерполяцию](../interpolation/README.md) для создания строк, чем полагаться на эти операторы.
:::

## Унарные операторы

По историческим причинам Sass также поддерживает `/` и `-` как унарные операторы, которые принимают только одно значение:

* `/<expression>` возвращает строку без кавычек, начинающуюся с `/`, за которой следует значение выражения.
* `-<expression>` возвращает строку без кавычек, начинающуюся с `-`, за которой следует значение выражения.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug / 15px; // /15px
@debug - moz; // -moz
```

@tab Sass

```sass
@debug / 15px  // /15px
@debug - moz  // -moz
```

:::
