---
title: "@each"
category:
  - Sass
  - At-Правила
  - Управление потоком
  - each
---

## Обзор

Правило `@each` упрощает создание стилей или оценку кода для каждого элемента [списка](../../values/lists) или каждой пары в [карте](../../values/maps). Он отлично подходит для повторяющихся стилей, между которыми есть всего несколько вариаций. Обычно пишется `@each <variable> in <expression> { ... }`, где [выражение](../../syntax/structure#конструкции) возвращает список. Блок оценивается по очереди для каждого элемента списка, который присваивается заданному имени переменной.

::: code-tabs#styles

@tab:active SCSS

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}








```

@tab Sass

```sass
$sizes: 40px, 50px, 80px

@each $size in $sizes
  .icon-#{$size}
    font-size: $size
    height: $size
    width: $size










```

@tab CSS

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

:::

## С картами

Вы также можете использовать `@each` для перебора каждой пары ключ/значение на карте, написав ее `@each <variable>, <variable> in <expression> { ... }`.
Ключ присваивается первому имени переменной, а элемент - второму.

::: code-tabs#styles

@tab:active SCSS

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}









```

@tab Sass

```sass
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f")

@each $name, $glyph in $icons
  .icon-#{$name}:before
    display: inline-block
    font-family: "Icon Font"
    content: $glyph











```

@tab CSS

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
```

:::

## Деструктуризация

Если у вас есть список списков, вы можете использовать `@each` для автоматического присвоения переменных каждому из значений из внутренних списков, написав его `@each <variable...> in <expression> { ... }`. Это известно как *деструктуризация*, поскольку переменные соответствуют структуре внутренних списков. Каждому имени переменной присваивается значение в соответствующей позиции в списке или [`null`](../../values/null), если в списке недостаточно значений.

::: code-tabs#styles

@tab:active SCSS

```scss
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
    font-size: $size;
  }
}








```

@tab Sass

```sass
$icons: "eye" "\f112" 12px, "start" "\f12e" 16px, "stop" "\f12f" 10px




@each $name, $glyph, $size in $icons
  .icon-#{$name}:before
    display: inline-block
    font-family: "Icon Font"
    content: $glyph
    font-size: $size










```

@tab CSS

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
  font-size: 12px;
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
  font-size: 16px;
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
  font-size: 10px;
}
```

:::

::: tip Забавный факт
Поскольку `@each` поддерживает деструктуризацию, а [карты считаются списками списков](../../values/maps), поддержка карт `@each` работает, в частности, без специальной поддержки карт.
:::
