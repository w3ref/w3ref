---
title: "@error"
category:
  - Sass
  - At-Правила
  - error
---

## Обзор

При написании [миксин](./mixin) и [функций](./function), которые принимают аргументы, вы обычно хотите убедиться, что эти аргументы имеют типы и форматы, ожидаемые вашим API. Если это не так, пользователь должен быть уведомлен, и ваш миксин/функция должны прекратить работу.

Sass упрощает это с помощью правила `@error`, которое записывается как `@error <expression>`. Он печатает значение [выражение](../syntax/structure#expressions) (обычно строку) вместе с трассировкой стека, указывающей, как был вызван текущий миксин или функция. После вывода ошибки Sass прекращает компилировать таблицу стилей и сообщает системе, в которой она запущена, о том, что произошла ошибка.

::: code-tabs#styles

@tab:active SCSS

```scss
Точный формат ошибки и трассировки стека варьируется от реализации к реализации, а также может зависеть от вашей системы сборки.
Вот как это выглядит в Dart Sass при запуске из командной строки:

```
Error: "Property top must be either left or right."
  ╷
3 │     @error "Property #{$property} must be either left or right.";
  │     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  example.scss 3:5   reflexive-position()
  example.scss 19:3  root stylesheet
```
```

@tab SASS

```sass
@mixin reflexive-position($property, $value)
  @if $property != left and $property != right
    @error "Property #{$property} must be either left or right."


  $left-value: if($property == right, initial, $value)
  $right-value: if($property == right, $value, initial)

  left: $left-value
  right: $right-value
  [dir=rtl] &
    left: $right-value
    right: $left-value



.sidebar
  @include reflexive-position(top, 12px)
  //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Error: Property top must be either left or right.

```

:::

Точный формат ошибки и трассировки стека варьируется от реализации к реализации, а также может зависеть от вашей системы сборки.
Вот как это выглядит в Dart Sass при запуске из командной строки:

```
Error: "Property top must be either left or right."
  ╷
3 │     @error "Property #{$property} must be either left or right.";
  │     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  example.scss 3:5   reflexive-position()
  example.scss 19:3  root stylesheet
```
