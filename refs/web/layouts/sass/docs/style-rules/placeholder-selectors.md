---
title: Селекторы заполнители
category:
  - Sass
  - Правила стиля
  - Селекторы-заполнители
---

## Обзор

В Sass есть особый тип селектора, известный как “placeholder”. Он выглядит и действует как селектор класса, но начинается с `%` и не включается в вывод CSS. Фактически, любой сложный селектор (те, что между запятыми), который даже *содержит* селектор-заполнитель, не включен в CSS, равно как и любое правило стиля, все селекторы которого содержат заполнители.

::: code-tabs#styles

@tab:active SCSS

```scss
.alert:hover, %strong-alert {
  font-weight: bold;
}

%strong-alert:hover {
  color: red;
}
```

@tab Sass

```sass
.alert:hover, %strong-alert
  font-weight: bold


%strong-alert:hover 
  color: red

```

@tab CSS

```css
.alert:hover {
  font-weight: bold;
}




```

:::

Какая польза от селектора, который не генерируется? Его еще можно [расширить](../at-rules/extend)! В отличие от селекторов классов, заполнители не загромождают CSS, если они не расширены, и не требуют, чтобы пользователи библиотеки использовали определенные имена классов для своего HTML.

::: code-tabs#styles

@tab:active SCSS

```scss
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, .12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover { border: 2px rgba(#000, .5) solid; }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}

.reset-buttons {
  @extend %toolbelt;
  color: #cddc39;
}
```

@tab Sass

```sass
%toolbelt
  box-sizing: border-box
  border-top: 1px rgba(#000, .12) solid
  padding: 16px 0
  width: 100%

  &:hover
    border: 2px rgba(#000, .5) solid

.action-buttons
  @extend %toolbelt
  color: #4285f4


.reset-buttons
  @extend %toolbelt
  color: #cddc39

```

@tab CSS

```css
.action-buttons, .reset-buttons {
  box-sizing: border-box;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
  padding: 16px 0;
  width: 100%;
}
.action-buttons:hover, .reset-buttons:hover {
  border: 2px rgba(0, 0, 0, 0.5) solid;
}

.action-buttons {
  color: #4285f4;
}

.reset-buttons {
  color: #cddc39;
}

```

:::

Селекторы-заполнители полезны при написании библиотеки Sass, где каждое правило стиля может использоваться или не использоваться. Как правило, если вы пишете таблицу стилей только для своего собственного приложения, часто лучше просто расширить селектор классов, если он доступен.
