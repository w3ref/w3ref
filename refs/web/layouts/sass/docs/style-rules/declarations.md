---
title: Объявления свойств
category:
  - Sass
  - Правила стиля
  - Объявления свойств
---

## Обзор

В Sass, как и в CSS, объявления свойств определяют стиль элементов, соответствующих селектору. Но Sass добавляет дополнительные функции, упрощающие их написание и автоматизацию. Прежде всего, значением объявления может быть любое [выражение SassScript](../syntax/structure#expressions), которое будет вычислено и включено в результат.

::: code-tabs#styles

@tab:active SCSS

```scss
.circle {
  $size: 100px;
  width: $size;
  height: $size;
  border-radius: $size * 0.5;
}
```

@tab SASS

```sass
.circle
  $size: 100px
  width: $size
  height: $size
  border-radius: $size * 0.5

```

@tab CSS

```css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

```

:::

## Интерполяция

Имя свойства может включать [интерполяцию](../interpolation/README.md), что позволяет динамически генерировать свойства по мере необходимости. Вы даже можете интерполировать все название свойства!

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.gray {
  @include prefix(filter, grayscale(50%), moz webkit);
}
```

@tab SASS

```sass
@mixin prefix($property, $value, $prefixes)
  @each $prefix in $prefixes
    -#{$prefix}-#{$property}: $value

  #{$property}: $value


.gray
  @include prefix(filter, grayscale(50%), moz webkit)

```

@tab CSS

```css
.gray {
  -moz-filter: grayscale(50%);
  -webkit-filter: grayscale(50%);
  filter: grayscale(50%);
}





```

:::

## Вложенность

Многие свойства CSS начинаются с одного и того же префикса, который действует как своего рода пространство имен. Например, `font-family`, `font-size` и `font-weight` начинаются с `font-`. Sass делает это проще и менее избыточным, позволяя вложить объявления свойств. Имена внешних свойств добавляются к внутренним через дефис.

::: code-tabs#styles

@tab:active SCSS

```scss
.enlarge {
  font-size: 14px;
  transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }

  &:hover { font-size: 36px; }
}
```

@tab SASS

```sass
.enlarge
  font-size: 14px
  transition:
    property: font-size
    duration: 4s
    delay: 2s

  &:hover
    font-size: 36px

```

@tab CSS

```css
.enlarge {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}
.enlarge:hover {
  font-size: 36px;
}

```

:::

Некоторые из этих свойств CSS имеют сокращенные версии, в которых пространство имен используется в качестве имени свойства. Для них вы можете записать как сокращенное значение, *так и* более явные вложенные версии.

::: code-tabs#styles

@tab:active SCSS

```scss
.info-page {
  margin: auto {
    bottom: 10px;
    top: 2px;
  }
}
```

@tab SASS

```sass
.info-page
  margin: auto
    bottom: 10px
    top: 2px


```

@tab CSS

```css
.info-page {
  margin: auto;
  margin-bottom: 10px;
  margin-top: 2px;
}

```

:::

## Скрытые декларации

Иногда вам нужно, чтобы объявление свойства отображалось только время от времени.
Если значением объявления является [`null`](../values/null) или пустая [строка без кавычек](../values/strings#unquoted), Sass вообще не будет компилировать это объявление в CSS.

::: code-tabs#styles

@tab:active SCSS

```scss
$rounded-corners: false;

.button {
  border: 1px solid black;
  border-radius: if($rounded-corners, 5px, null);
}
```

@tab SASS

```sass
$rounded-corners: false

.button
  border: 1px solid black
  border-radius: if($rounded-corners, 5px, null)

```

@tab CSS

```css
.button {
  border: 1px solid black;
}



```

:::

## Настраиваемые свойства

::: details <Status :data="{ feature: 'SassScript Syntax', dart: true, lib: '3.5.0', ruby: '3.5.0' }" />

Более старые версии LibSass и Ruby Sass анализировали объявления настраиваемых свойств так же, как и любое другое объявление свойств, позволяя использовать полный диапазон выражений SassScript в качестве значений. Даже при использовании этих версий рекомендуется использовать интерполяцию для внедрения значений SassScript для прямой совместимости.

Смотрите [страницу критических изменений](../breaking-changes/css-vars) для получения более подробной информации.
:::

[Пользовательские свойства CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), также известные как переменные CSS, имеют необычный синтаксис объявления: они допускают практически любой текст в значениях объявления.
Более того, эти значения доступны для JavaScript, поэтому любое значение может иметь отношение к пользователю.
Сюда входят значения, которые обычно анализируются как SassScript.

Из-за этого Sass анализирует объявления настраиваемых свойств иначе, чем объявления других свойств.
Все токены, включая те, которые выглядят как SassScript, передаются в CSS как есть.
Единственное исключение - [интерполяция](../interpolation/README.md), единственный способ добавить динамические значения в настраиваемое свойство.

::: code-tabs#styles

@tab:active SCSS

```scss
$primary: #81899b;
$accent: #302e24;
$warn: #dfa612;

:root {
  --primary: #{$primary};
  --accent: #{$accent};
  --warn: #{$warn};

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary;
}
```

@tab SASS

```sass
$primary: #81899b
$accent: #302e24
$warn: #dfa612

:root
  --primary: #{$primary}
  --accent: #{$accent}
  --warn: #{$warn}

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary

```

@tab CSS

```css
:root {
  --primary: #81899b;
  --accent: #302e24;
  --warn: #dfa612;
  --consumed-by-js: $primary;
}







```

:::

::: warning Осторожно!
К сожалению, [интерполяция](../interpolation/README.md) удаляет кавычки из строк, что затрудняет использование строк в кавычках в качестве значений для настраиваемых свойств, когда они поступают из переменных Sass. В качестве обходного пути вы можете использовать функцию `meta.inspect()`](../modules/meta#inspect), чтобы сохранить кавычки.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:meta";

$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas;

:root {
  --font-family-sans-serif: #{meta.inspect($font-family-sans-serif)};
  --font-family-monospace: #{meta.inspect($font-family-monospace)};
}
```

@tab SASS

```sass
@use "sass:meta"

$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas

:root
  --font-family-sans-serif: #{meta.inspect($font-family-sans-serif)}
  --font-family-monospace: #{meta.inspect($font-family-monospace)}

```

@tab CSS

```css
:root {
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas;
}





```

:::

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
