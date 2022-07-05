---
title: "@debug"
category:
  - Sass
  - At-Правила
  - debug
---

## Обзор

Иногда бывает полезно увидеть значение [переменной](../variables/README.md) или [выражения](../syntax/structure#expressions) во время разработки таблицы стилей. Для этого и предназначено правило `@debug` оно записывается как: `@debug <expression>` и выводит значение этого выражения вместе с именем файла и номером строки.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin inset-divider-offset($offset, $padding) {
  $divider-offset: (2 * $padding) + $offset;
  @debug "divider offset: #{$divider-offset}";

  margin-left: $divider-offset;
  width: calc(100% - #{$divider-offset});
}
```

@tab SASS

```sass
@mixin inset-divider-offset($offset, $padding)
  $divider-offset: (2 * $padding) + $offset
  @debug "divider offset: #{$divider-offset}"

  margin-left: $divider-offset
  width: calc(100% - #{$divider-offset})

```

:::

Точный формат сообщения отладки варьируется от реализации к реализации.
Вот как это выглядит в Dart Sass:

```
test.scss:3 Debug: divider offset: 132px
```

::: tip Забавный факт
В `@debug` можно передать любое значение, а не только строку! Он печатает то же представление этого значения, что и [функция `meta.inspect()`](../modules/meta#inspect).
:::
