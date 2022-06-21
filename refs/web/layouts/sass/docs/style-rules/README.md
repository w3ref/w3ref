---
title: Правила стиля
index: false
category:
  - Sass
  - Style rules
---

## Правила стиля

Правила стиля являются основой Sass, как и CSS. И они работают одинаково: вы выбираете, какие элементы следует стилизовать с помощью селектора, и объявляете свойства, которые влияют на внешний вид этих элементов.

::: code-tabs#styles

@tab SCSS

```scss
.button {
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #e1e4e8;
}
```

@tab Sass

```sass
.button
  padding: 3px 10px
  font-size: 12px
  border-radius: 3px
  border: 1px solid #e1e4e8

```

@tab:active CSS

```css
.button {
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #e1e4e8;
}
```

:::

### Вложенность

Но Sass хочет облегчить вашу жизнь. Вместо того, чтобы повторять одни и те же селекторы снова и снова, вы можете написать правила одного стиля внутри другого. Sass автоматически объединит селектор внешнего правила с селектором внутреннего правила.

::: code-tabs#styles

@tab SCSS

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

@tab Sass

```sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none


  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none

```

@tab:active CSS

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}


```

:::

::: warning
Вложенные правила очень полезны, но они также могут затруднить визуализацию того, сколько CSS вы на самом деле генерируете. Чем глубже вложенные правила, тем больше пропускной способности требуется для обслуживания вашего CSS и тем больше работы требуется браузеру для его рендеринга. Держите эти селекторы неглубокими!
:::

### Списки селекторов

Вложенные правила хорошо подходят для обработки списков селекторов (то есть селекторов, разделенных запятыми). Каждый сложный селектор (те, что между запятыми) вкладывается отдельно, а затем они снова объединяются в список селекторов.

::: code-tabs#styles

@tab SCSS

```scss
.alert, .warning {
  ul, p {
    margin-right: 0;
    margin-left: 0;
    padding-bottom: 0;
  }
}
```

@tab Sass

```sass
.alert, .warning
  ul, p
    margin-right: 0
    margin-left: 0
    padding-bottom: 0
```

@tab:active CSS

```css
.alert ul, .alert p, .warning ul, .warning p {
  margin-right: 0;
  margin-left: 0;
  padding-bottom: 0;
}

```

:::

### Комбинаторы селекторов

Вы можете вкладывать селекторы, которые также используют комбинаторы. Вы можете поместить комбинатор в конец внешнего селектора, в начало внутреннего селектора или даже отдельно между ними.

::: code-tabs#styles

@tab SCSS

```scss
ul > {
  li {
    list-style-type: none;
  }
}

h2 {
  + p {
    border-top: 1px solid gray;
  }
}

p {
  ~ {
    span {
      opacity: 0.8;
    }
  }
}
```

@tab Sass

```sass
ul >
  li
    list-style-type: none



h2
  + p
    border-top: 1px solid gray



p
  ~
    span
      opacity: 0.8
```

@tab:active CSS

```css
ul > li {
  list-style-type: none;
}

h2 + p {
  border-top: 1px solid gray;
}

p ~ span {
  opacity: 0.8;
}








```

:::

### Продвинутая вложенность

Если вы хотите сделать с вложенными правилами стиля нечто большее, чем просто объединить их по порядку с разделяющим их комбинатором потомков (то есть обычным пробелом), Sass прикроет вас. Подробнее смотрите в документации родительский селектор.

## Интерполяция

Вы можете использовать интерполяцию для вставки значений из выражений, таких как переменные и вызовы функций, в ваши селекторы. Это особенно полезно, когда вы пишете миксины, поскольку это позволяет вам создавать селекторы из параметров, передаваемых вашими пользователями.

::: code-tabs#styles

@tab SCSS

```scss
@mixin define-emoji($name, $glyph) {
  span.emoji-#{$name} {
    font-family: IconFont;
    font-variant: normal;
    font-weight: normal;
    content: $glyph;
  }
}

@include define-emoji("women-holding-hands", "👭");
```

@tab Sass

```sass
@mixin define-emoji($name, $glyph)
  span.emoji-#{$name}
    font-family: IconFont
    font-variant: normal
    font-weight: normal
    content: $glyph



@include define-emoji("women-holding-hands", "👭")
```

@tab:active CSS

```css
@charset "UTF-8";
span.emoji-women-holding-hands {
  font-family: IconFont;
  font-variant: normal;
  font-weight: normal;
  content: "👭";
}



```

:::

::: info Интересный факт
Sass анализирует селекторы только после интерполяции. Это означает, что вы можете безопасно использовать интерполяцию для создания любой части селектора, не беспокоясь о том, что он не будет разбираться.
:::

Вы можете комбинировать интерполяцию с родительским селектором &, [правилом @at-root]@at-root rule и функциями селектора, чтобы получить серьезные возможности при динамическом создании селекторов. Для получения дополнительной информации смотрите документацию по родительскому селектору.
