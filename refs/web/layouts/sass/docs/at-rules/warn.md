---
title: "@warn"
category:
  - Sass
  - At-Правила
  - warn
---

## Обзор

При написании [примесей](./mixin) и [функций](./function) вы можете захотеть отговорить пользователей от передачи определенных аргументов или определенных значений. Они могут передавать устаревшие аргументы, которые теперь не рекомендуются, или они могут вызывать ваш API не совсем оптимальным способом.

Правило `@warn` предназначено именно для этого. Он пишется `@warn <expression>` и выводит значение [выражение](../syntax/structure#expressions) (обычно строку) для пользователя вместе с трассировкой стека, указывающей, как был вызван текущий миксин или функция. Однако, в отличие от правила [`@error` rule](./error), оно не останавливает Sass полностью.

::: code-tabs#styles

@tab:active SCSS

```scss
$known-prefixes: webkit, moz, ms, o;

@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    @if not index($known-prefixes, $prefix) {
      @warn "Unknown prefix #{$prefix}.";
    }

    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.tilt {
  // Oops, we typo'd "webkit" as "wekbit"!
  @include prefix(transform, rotate(15deg), wekbit ms);
}
```

@tab SASS

```sass
$known-prefixes: webkit, moz, ms, o

@mixin prefix($property, $value, $prefixes)
  @each $prefix in $prefixes
    @if not index($known-prefixes, $prefix)
      @warn "Unknown prefix #{$prefix}."


    -#{$prefix}-#{$property}: $value

  #{$property}: $value


.tilt
  // Oops, we typo'd "webkit" as "wekbit"!
  @include prefix(transform, rotate(15deg), wekbit ms)

```

@tab CSS

```css
.tilt {
  -wekbit-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  transform: rotate(15deg);
}












```

:::

Точный формат предупреждения и трассировки стека варьируется от реализации к реализации.
Вот как это выглядит в Dart Sass:

```
Warning: Unknown prefix wekbit.
    example.scss 6:7   prefix()
    example.scss 16:3  root stylesheet
```
