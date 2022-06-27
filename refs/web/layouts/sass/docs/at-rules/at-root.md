---
title: "@at-root"
category:
  - Sass
  - At-Правила
  - at-root
---

## Обзор

Правило `@at-root` обычно записывается как `@at-root <selector> { ... }` и заставляет все, что находится внутри него, выводиться в корень документа вместо использования обычного вложения. Чаще всего используется при выполнении [расширенного вложения](../style-rules/parent-selector#advanced-nesting) с [родительским селектором SassScript](../style-rules/parent-selector#in-sassscript) и [селекторные функции](../modules/selector).

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

Правило `@at-root` здесь необходимо, потому что Sass не знает, какая интерполяция использовалась для генерации селектора при выполнении вложенности селекторов. Это означает, что он автоматически добавит внешний селектор к внутреннему селектору, *даже если* вы использовали `&` в качестве выражения SassScript. `@at-root` явно указывает Sass не включать внешний селектор.

::: tip Забавный факт
Правило `@at-root` также можно записать как `@at-root { ... }`, чтобы поместить несколько правил стиля в корень документа. Фактически, `@at-root <selector> { ... }` - это просто сокращение от `@at-root { <selector> { ... } }`!
:::

## За пределами правил стиля

Сам по себе `@at-root` избавляется только от [правил стиля](../style-rules). Любые at-правила, такие как [`@media`](./css#media) или [`@supports`](./css#supports), будут оставлены. Если это не то, что вы хотите, вы можете точно контролировать, что они включают или включают, используя синтаксис, например [функции медиа-запроса](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Targeting_media_features), записывается как `@at-root (with: <rules...>) { ... }` или `@at-root (without: <rules...>) { ... }`. Запрос `(without: ...)` сообщает Sass, какие правила следует исключить; запрос `(with: ...)` исключает все правила *кроме* перечисленных.

::: code-tabs#styles

@tab:active SCSS

```scss
@media print {
  .page {
    width: 8in;

    @at-root (without: media) {
      color: #111;
    }

    @at-root (with: rule) {
      font-size: 1.2em;
    }
  }
}
```

@tab Sass

```sass
@media print
  .page
    width: 8in

    @at-root (without: media)
      color: #111


    @at-root (with: rule)
      font-size: 1.2em



```

@tab CSS

```css
@media print {
  .page {
    width: 8in;
  }
}
.page {
  color: #111;
}
.page {
  font-size: 1.2em;
}


```

:::

Помимо имен at-правил, в запросах можно использовать два специальных значения:

* `rule` относится к правилам стиля. Например, `@at-root (with: rule)` исключает все at-правила, но сохраняет правила стиля.
* `all` относится ко всем at-rules *и* правила стиля должны быть исключены.
