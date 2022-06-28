---
title: "null"
category:
  - Sass
  - Значения
  - null
---

## Обзор

Значение `null` - единственное значение своего типа. Он представляет собой отсутствие значения и часто возвращается [функции](../at-rules/function), чтобы указать на отсутствие результата.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:map";
@use "sass:string";

@debug string.index("Helvetica Neue", "Roboto"); // null
@debug map.get(("large": 20px), "small"); // null
@debug &; // null
```

@tab Sass

```sass

```

:::

Если [список](./lists) содержит `null`, этот `null` исключается из сгенерированного CSS.

::: code-tabs#styles

@tab:active SCSS

```scss
$fonts: ("serif": "Helvetica Neue", "monospace": "Consolas");

h3 {
  font: 18px bold map-get($fonts, "sans");
}
```

@tab Sass

```sass
$fonts: ("serif": "Helvetica Neue", "monospace": "Consolas")

h3
  font: 18px bold map-get($fonts, "sans")

```

@tab CSS

```css
h3 {
  font: 18px bold;
}


```

:::

Если значение свойства равно `null`, это свойство полностью опускается.

::: code-tabs#styles

@tab:active SCSS

```scss
$fonts: ("serif": "Helvetica Neue", "monospace": "Consolas");

h3 {
  font: {
    size: 18px;
    weight: bold;
    family: map-get($fonts, "sans");
  }
}
```

@tab Sass

```sass
$fonts: ("serif": "Helvetica Neue", "monospace": "Consolas")

h3
  font:
    size: 18px
    weight: bold
    family: map-get($fonts, "sans")


```

@tab CSS

```css
h3 {
  font-size: 18px;
  font-weight: bold;
}





```

:::

`null` также является [*falsey*](../at-rules/control/if#truthiness-and-falsiness), что означает, что он считается `false` для любых правил или [операторов](../operators/boolean), которые принимают логические значения. Это упрощает использование значений, которые могут быть `null`, в качестве условий для [`@if`](../at-rules/control/if) и [`if()`](../modules/README.md#if).
::: code-tabs#styles

@tab:active SCSS

```scss
@mixin app-background($color) {
  #{if(&, '&.app-background', '.app-background')} {
    background-color: $color;
    color: rgba(#fff, 0.75);
  }
}

@include app-background(#036);

.sidebar {
  @include app-background(#c6538c);
}
```

@tab Sass

```sass
@mixin app-background($color)
  #{if(&, '&.app-background', '.app-background')}
    background-color: $color
    color: rgba(#fff, 0.75)



@include app-background(#036)

.sidebar
  @include app-background(#c6538c)

```

@tab CSS

```css
.app-background {
  background-color: #036;
  color: rgba(255, 255, 255, 0.75);
}

.sidebar.app-background {
  background-color: #c6538c;
  color: rgba(255, 255, 255, 0.75);
}



```

:::
