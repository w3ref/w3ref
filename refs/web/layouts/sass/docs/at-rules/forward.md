---
title: "@forward"
category:
  - Sass
  - At-Правила
  - forward
---

## Обзор

Правило `@forward` загружает таблицу стилей Sass и делает ее [миксины](./mixin), [функции](./function) и [переменные](../variables/) доступными, когда ваша таблица стилей загружена с помощью [правила `@use`](use). Это позволяет организовать библиотеки Sass по множеству файлов, позволяя пользователям загружать один файл точки входа.

Правило написано `@forward "<url>"`. Он загружает модуль по заданному URL точно так же, как `@use`, но делает участников [публичными](./use#private-members) загруженного модуля доступными для пользователей вашего модуля, как если бы они были определены непосредственно в вашем модуле. Однако эти участники недоступны в вашем модуле - если вы этого хотите, вам также необходимо написать правило `@use`. Не волнуйтесь, модуль загрузится только один раз!

Если вы *действительно* пишете и `@forward` и `@use` для одного и того же модуля в одном файле, всегда рекомендуется сначала написать `@forward`. Таким образом, если ваши пользователи захотят [настроить перенаправленный модуль](./use#configuration), эта конфигурация будет применена к `@forward` до того, как ваш `@use` загрузит его без какой-либо конфигурации.

::: tip Забавный факт
Правило `@forward` действует так же, как `@use`, когда дело касается CSS модуля. Стили из перенаправленного модуля будут включены в скомпилированный вывод CSS, и модуль с `@forward` может [расширить](./extend) его, даже если он не является также `@use`.
:::

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_list.scss
@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
// bootstrap.scss
@forward "src/list";
// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

@tab SASS

```sass
// src/_list.sass
@mixin list-reset
  margin: 0
  padding: 0
  list-style: none

// bootstrap.sass
@forward "src/list"
// styles.sass
@use "bootstrap"

li
  @include bootstrap.list-reset

```

@tab CSS

```css
li {
  margin: 0;
  padding: 0;
  list-style: none;
}













```

:::

## Добавление префикса

Поскольку участники модуля обычно используются с [пространство имен](./use#loading-members), короткие и простые имена обычно являются наиболее читаемым вариантом. Но эти имена могут не иметь смысла вне модуля, в котором они определены, поэтому `@forward` имеет возможность добавить дополнительный префикс ко всем участникам, которые он пересылает.

Он записывается как `@forward "<url>" as <prefix>-*`, и добавляет данный префикс в начало каждого миксина, функции и имени переменной, пересылаемого модулем. Например, если модуль определяет элемент с именем `reset` и он пересылается `as list-*`, последующие таблицы стилей будут называть его `list-reset`.

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_list.scss
@mixin reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
// bootstrap.scss
@forward "src/list" as list-*;
// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}
```

@tab SASS

```sass
// src/_list.sass
@mixin reset
  margin: 0
  padding: 0
  list-style: none

// bootstrap.sass
@forward "src/list" as list-*
// styles.sass
@use "bootstrap"

li
  @include bootstrap.list-reset

```

@tab CSS

```css
li {
  margin: 0;
  padding: 0;
  list-style: none;
}













```

:::

## Контроль видимости

Иногда вы не хотите пересылать *каждого* участника из модуля. Вы можете оставить некоторых участников закрытыми, чтобы их мог использовать только ваш пакет, или вы можете потребовать от пользователей загружать некоторых участников другим способом. Вы можете контролировать, какие именно участники будут перенаправлены, написав `@forward "<url>" hide <members...>` или `@forward "<url>" show <members...>`.

Форма `hide` означает, что перечисленные участники не должны перенаправляться, а все остальные должны. Форма `show` означает, что должны быть перенаправлены *только* указанные участники. В обеих формах вы перечисляете имена миксинов, функций или переменных (включая `$`).

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_list.scss
$horizontal-list-gap: 2em;

@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin list-horizontal {
  @include list-rest;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: $horizontal-list-gap;
    }
  }
}
// bootstrap.scss
@forward "src/list" hide list-reset, $horizontal-list-gap;
```

@tab SASS

```sass
// src/_list.sass
$horizontal-list-gap: 2em

@mixin list-reset
  margin: 0
  padding: 0
  list-style: none


@mixin list-horizontal
  @include list-rest

  li
    display: inline-block
    margin:
      left: -2px
      right: $horizontal-list-gap



// bootstrap.sass
@forward "src/list" hide list-reset, $horizontal-list-gap
```

:::

## Настройка модулей

::: note <Status :data="{ feature: false, dart: '1.24.0', lib: false, ruby: false }" />
:::

Правило `@forward` также может загружать модуль с [конфигурацией](./use#configuration). В основном это работает так же, как и для `@use`, с одним дополнением: конфигурация правила `@forward` может использовать флаг `!default` в своей конфигурации. Это позволяет модулю изменять значения по умолчанию для вышестоящей таблицы стилей, в то же время позволяя последующим таблицам стилей переопределять их.

::: code-tabs#styles

@tab:active SCSS

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
// _opinionated.scss
@forward 'library' with (
  $black: #222 !default,
  $border-radius: 0.1rem !default
);
// style.scss
@use 'opinionated' with ($black: #333);
```

@tab SASS

```sass
// _library.sass
$black: #000 !default
$border-radius: 0.25rem !default
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default

code
  border-radius: $border-radius
  box-shadow: $box-shadow

// _opinionated.sass
@forward 'library' with ($black: #222 !default, $border-radius: 0.1rem !default)



// style.sass
@use 'opinionated' with ($black: #333)
```

@tab CSS

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.15);
}
















```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
