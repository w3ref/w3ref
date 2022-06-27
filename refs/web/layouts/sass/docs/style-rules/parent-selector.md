---
title: Родительский селектор
category:
  - Sass
  - Правила стиля
  - Родительский селектор
---

## Обзор

Родительский селектор `&` - это специальный селектор, изобретенный Sass, который используется в [вложенных селекторах](../style-rules#nesting) для ссылки на внешний селектор. Это позволяет повторно использовать внешний селектор более сложными способами, например, добавляя [псевдокласс](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) или добавление селектора *перед* родителем.

Когда родительский селектор используется во внутреннем селекторе, он заменяется соответствующим внешним селектором. Это происходит вместо обычного поведения вложения.

::: code-tabs#styles

@tab:active SCSS

```scss
.alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```

@tab Sass

```sass
.alert
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover
    font-weight: bold


  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] &
    margin-left: 0
    margin-right: 10px


  // You can even use it as an argument to pseudo-class selectors.
  :not(&)
    opacity: 0.8


```

@tab CSS

```css
.alert:hover {
  font-weight: bold;
}
[dir=rtl] .alert {
  margin-left: 0;
  margin-right: 10px;
}
:not(.alert) {
  opacity: 0.8;
}









```

:::

::: warning Осторожно!
Поскольку родительский селектор может быть заменен селектором типа, таким как `h1`, он разрешен только в начале составных селекторов, где также разрешен селектор типа. Например, использование `span&` недопустимо.

Тем не менее, мы планируем ослабить это ограничение. Если вы хотите помочь в этом, ознакомьтесь с [этой проблемой GitHub](https://github.com/sass/sass/issues/1425).
:::

## Добавление суффиксов

Вы также можете использовать родительский селектор для добавления дополнительных суффиксов к внешнему селектору. Это особенно полезно при использовании такой методологии, как [БЭМ](http://getbem.com/), в которой используются хорошо структурированные имена классов. Пока внешний селектор заканчивается буквенно-цифровым именем (например, селекторы классов, идентификаторов и элементов), вы можете использовать родительский селектор для добавления дополнительного текста.

::: code-tabs#styles

@tab:active SCSS

```scss
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

@tab Sass

```sass
.accordion
  max-width: 600px
  margin: 4rem auto
  width: 90%
  font-family: "Raleway", sans-serif
  background: #f4f4f4

  &__copy
    display: none
    padding: 1rem 1.5rem 2rem 1.5rem
    color: gray
    line-height: 1.6
    font-size: 14px
    font-weight: 500

    &--open
      display: block



```

@tab CSS

```css
.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;
}
.accordion__copy {
  display: none;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: gray;
  line-height: 1.6;
  font-size: 14px;
  font-weight: 500;
}
.accordion__copy--open {
  display: block;
}


```

:::

## В SassScript

Родительский селектор также можно использовать в SassScript. Это специальное выражение, которое возвращает текущий родительский селектор в том же формате, что и [функции селектора](../modules/selector#selector-values): список, разделенный запятыми (список селектора), который содержит списки, разделенные пробелами (сложные селекторы), которые содержат строки без кавычек (составные селекторы).

::: code-tabs#styles

@tab:active SCSS

```scss
.main aside:hover,
.sidebar p {
  parent-selector: &;
  // => ((unquote(".main") unquote("aside:hover")),
  //     (unquote(".sidebar") unquote("p")))
}
```

@tab Sass

```sass
.main aside:hover,
.sidebar p
  parent-selector: &
  // => ((unquote(".main") unquote("aside:hover")),
  //     (unquote(".sidebar") unquote("p")))

```

@tab CSS

```css
.main aside:hover,
.sidebar p {
  parent-selector: .main aside:hover, .sidebar p;
}


```

:::

Если выражение `&` используется вне каких-либо правил стиля, оно возвращает `null`. Поскольку `null` равен [falsey](../at-rules/control/if#truthiness-and-falsiness), это означает, что вы можете легко использовать его, чтобы определить, вызывается ли миксин в правиле стиля или нет.

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

### Продвинутая вложенность

Вы можете использовать `&` как обычное выражение SassScript, что означает, что вы можете передавать его функциям или включать в интерполяцию - даже в других селекторах! Использование его в сочетании с [функциями селектора](../modules/selector#selector-values) и [правилом `@at-root`](../at-rules/at-root) позволяет вам очень эффективно вкладывать селекторы.

Например, предположим, что вы хотите написать селектор, который соответствует внешнему селектору *и* селектору элемента. Вы можете написать миксин, подобный этому, который использует [функцию `selector.unify()`](../modules/selector#unify) для объединения `&` с пользовательским селектором.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:selector";

@mixin unify-parent($child) {
  @at-root #{selector.unify(&, $child)} {
    @content;
  }
}

.wrapper .field {
  @include unify-parent("input") {
    /* ... */
  }
  @include unify-parent("select") {
    /* ... */
  }
}
```

@tab Sass

```sass
@use "sass:selector"

@mixin unify-parent($child)
  @at-root #{selector.unify(&, $child)}
    @content



.wrapper .field
  @include unify-parent("input")
    /* ... */

  @include unify-parent("select")
    /* ... */


```

@tab CSS

```css
.wrapper input.field {
  /* ... */
}

.wrapper select.field {
  /* ... */
}









```

:::

::: warning Осторожно!
Когда Sass вкладывает селекторы, он не знает, какая интерполяция использовалась для их создания. Это означает, что он автоматически добавит внешний селектор к внутреннему селектору, *даже если* вы использовали `&` в качестве выражения SassScript. Вот почему вам нужно явно использовать [правило `@at-root`](../at-rules/at-root), чтобы Sass не включал внешний селектор.
:::
