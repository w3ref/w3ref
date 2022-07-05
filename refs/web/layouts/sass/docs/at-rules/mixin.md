---
title: "@mixin и @include"
category:
  - Sass
  - At-Правила
  - mixin
  - include
---

## Обзор

Миксины позволяют вам определять стили, которые можно повторно использовать в вашей таблице стилей. Они позволяют легко избежать использования несемантических классов, таких как `.float-left`, и распределить коллекции стилей в библиотеках.

Миксины определяются с помощью at-правила `@mixin`, которое записывается как `@mixin <name> { ... }` или `@mixin name(<arguments...>) { ... }`. Имя миксина может быть любым идентификатором Sass, и оно может содержать любую [конструкцию](../syntax/structure#statements) кроме [конструкции верхнего уровня](../syntax/structure.md#top-level-statements). Их можно использовать для инкапсуляции стилей, которые можно поместить в одно [правило стиля](../style-rules/README.md); они могут содержать собственные правила стилей, которые могут быть вложены в другие правила или включены в верхний уровень таблицы стилей; или они могут просто служить для изменения переменных.

Миксины включаются в текущий контекст с помощью ат-правила `@include`, которое записывается `@include <name>` или `@include <name>(<arguments...>)`, с именем миксина включены.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```

@tab SASS

```sass
@mixin reset-list
  margin: 0
  padding: 0
  list-style: none


@mixin horizontal-list
  @include reset-list

  li
    display: inline-block
    margin:
      left: -2px
      right: 2em




nav ul
  @include horizontal-list

```

@tab CSS

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav ul li {
  display: inline-block;
  margin-left: -2px;
  margin-right: 2em;
}











```

:::

::: tip Забавный факт
Имена миксинов, как и все идентификаторы Sass, рассматривают дефисы и подчеркивания как идентичные. Это означает, что `reset-list` и `reset_list` относятся к одному и тому же миксину. Это историческое наследие самых ранних дней Sass, когда в именах идентификаторов разрешались *только* символы подчеркивания. После того, как Sass добавил поддержку дефисов в соответствии с синтаксисом CSS, они стали эквивалентными, чтобы упростить миграцию.
:::

## Аргументы

Миксины также могут принимать аргументы, что позволяет настраивать их поведение при каждом вызове. Аргументы указываются в правиле `@mixin` после имени миксина в виде списка имен переменных, заключенного в круглые скобки. Затем миксин должен быть включен с таким же количеством аргументов в форме [выражений SassScript](../syntax/structure#expressions). Значения этих выражений доступны в теле миксина как соответствующие переменные.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin rtl($property, $ltr-value, $rtl-value) {
  #{$property}: $ltr-value;

  [dir=rtl] & {
    #{$property}: $rtl-value;
  }
}

.sidebar {
  @include rtl(float, left, right);
}
```

@tab SASS

```sass
@mixin rtl($property, $ltr-value, $rtl-value)
  #{$property}: $ltr-value

  [dir=rtl] &
    #{$property}: $rtl-value



.sidebar
  @include rtl(float, left, right)

```

@tab CSS

```css
.sidebar {
  float: left;
}
[dir=rtl] .sidebar {
  float: right;
}





```

:::

::: tip Забавный факт
Списки аргументов также могут иметь конечные запятые! Это может помочь избежать синтаксических ошибок при рефакторинге таблиц стилей.
:::

### Необязательные аргументы

Обычно каждый аргумент, который объявляет миксин, должен быть передан, когда этот миксин включен. Однако вы можете сделать аргумент необязательным, указав *значение по умолчанию*, которое будет использоваться, если этот аргумент не передан. Значения по умолчанию используют тот же синтаксис, что и [объявления переменных](../variables/): имя переменной, за которым следует двоеточие и [выражение SassScript](../syntax/structure#expressions). Это упрощает определение гибких API-интерфейсов миксинов, которые можно использовать как простыми, так и сложными способами.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin replace-text($image, $x: 50%, $y: 50%) {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;

  background: {
    image: $image;
    repeat: no-repeat;
    position: $x $y;
  }
}

.mail-icon {
  @include replace-text(url("/images/mail.svg"), 0);
}
```

@tab SASS

```sass
@mixin replace-text($image, $x: 50%, $y: 50%)
  text-indent: -99999em
  overflow: hidden
  text-align: left

  background:
    image: $image
    repeat: no-repeat
    position: $x $y

.mail-icon
  @include replace-text(url("/images/mail.svg"), 0)



```

@tab CSS

```css
.mail-icon {
  text-indent: -99999em;
  overflow: hidden;
  text-align: left;
  background-image: url("/images/mail.svg");
  background-repeat: no-repeat;
  background-position: 0 50%;
}







```

:::

::: tip Забавный факт
Значения по умолчанию могут быть любым выражением SassScript, и они могут даже ссылаться на более ранние аргументы!
:::

### Аргументы ключевых слов

Когда миксин включен, аргументы можно передавать по имени в дополнение к передаче их по позиции в списке аргументов. Это особенно полезно для миксинов с несколькими необязательными аргументами или с аргументами [boolean](../values/booleans), значение которых неочевидно без имени, связанного с ними. Аргументы ключевого слова используют тот же синтаксис, что и [объявления переменных](../variables/) и [необязательные аргументы](#optional-arguments).

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.avatar {
  @include square(100px, $radius: 4px);
}
```

@tab SASS

```sass
@mixin square($size, $radius: 0)
  width: $size
  height: $size

  @if $radius != 0
    border-radius: $radius



.avatar
  @include square(100px, $radius: 4px)

```

@tab CSS

```css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 4px;
}







```

:::

::: warning Осторожно!
Поскольку *любой* аргумент может передаваться по имени, будьте осторожны при переименовании аргументов миксина... это может сломать ваших пользователей!
  Может быть полезно сохранить старое имя в качестве [необязательного аргумента](#optional-arguments) на некоторое время и напечатать [предупреждение](./warn), если кто-то его передаст, чтобы они знали, что нужно перейти на новый аргумент.
:::

### Принятие произвольных аргументов

Иногда для миксина полезно иметь возможность принимать любое количество аргументов. Если последний аргумент в объявлении `@mixin` оканчивается на `...`, то все дополнительные аргументы в этот миксин передаются этому аргументу как [список](../values/lists). Этот аргумент известен как [список аргументов](../values/lists#argument-lists).

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin order($height, $selectors...) {
  @for $i from 0 to length($selectors) {
    #{nth($selectors, $i + 1)} {
      position: absolute;
      height: $height;
      margin-top: $i * $height;
    }
  }
}

@include order(150px, "input.name", "input.address", "input.zip");






```

@tab SASS

```sass
@mixin order($height, $selectors...)
  @for $i from 0 to length($selectors)
    #{nth($selectors, $i + 1)}
      position: absolute
      height: $height
      margin-top: $i * $height




@include order(150px, "input.name", "input.address", "input.zip")






```

@tab CSS

```css
input.name {
  position: absolute;
  height: 150px;
  margin-top: 0px;
}

input.address {
  position: absolute;
  height: 150px;
  margin-top: 150px;
}

input.zip {
  position: absolute;
  height: 150px;
  margin-top: 300px;
}
```

:::

#### Принятие произвольных аргументов ключевого слова

Списки аргументов также могут использоваться для получения аргументов произвольного ключевого слова. [Функция `meta.keywords()`](../modules/meta#keywords) принимает список аргументов и возвращает любые дополнительные ключевые слова, которые были переданы миксину в виде [карты](../values/maps) от имен аргументов (не включая `$`) до значений этих аргументов.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:meta";

@mixin syntax-colors($args...) {
  @debug meta.keywords($args);
  // (string: #080, comment: #800, variable: #60b)

  @each $name, $color in meta.keywords($args) {
    pre span.stx-#{$name} {
      color: $color;
    }
  }
}

@include syntax-colors(
  $string: #080,
  $comment: #800,
  $variable: #60b,
)
```

@tab SASS

```sass
@use "sass:meta"

@mixin syntax-colors($args...)
  @debug meta.keywords($args)
  // (string: #080, comment: #800, variable: #60b)

  @each $name, $color in meta.keywords($args)
    pre span.stx-#{$name}
      color: $color




@include syntax-colors($string: #080, $comment: #800, $variable: #60b)




```

@tab CSS

```css
pre span.stx-string {
  color: #080;
}

pre span.stx-comment {
  color: #800;
}

pre span.stx-variable {
  color: #60b;
}







```

:::

::: tip Забавный факт
Если вы никогда не передаете список аргументов [функции `meta.keywords()`](../modules/meta#keywords), этот список аргументов не допускает дополнительных аргументов ключевого слова. Это помогает вызывающим абонентам вашего миксина быть уверенным, что они случайно не ошиблись в именах аргументов.
:::

#### Передача произвольных аргументов

Так же, как списки аргументов позволяют миксинам принимать произвольные позиционные или ключевые аргументы, тот же синтаксис может использоваться для *передачи* позиционных и ключевых аргументов миксину. Если вы передадите список, за которым следует `...` в качестве последнего аргумента включения, его элементы будут рассматриваться как дополнительные позиционные аргументы. Точно так же карта, за которой следует `...`, будет рассматриваться как дополнительные аргументы ключевого слова. Вы даже можете пройти оба сразу!

::: code-tabs#styles

@tab:active SCSS

```scss
$form-selectors: "input.name", "input.address", "input.zip" !default;

@include order(150px, $form-selectors...);
```

@tab SASS

```sass
$form-selectors: "input.name", "input.address", "input.zip" !default

@include order(150px, $form-selectors...)
```

:::

::: tip Забавный факт
Поскольку [список аргументов](../values/lists#argument-lists) отслеживает как позиционные, так и ключевые аргументы, вы используете его для передачи обоих одновременно другому миксину. Это упрощает определение псевдонима для миксина!

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin btn($args...) {
  @warn "The btn() mixin is deprecated. Include button() instead.";
  @include button($args...);
}
```

@tab SASS

```sass
@mixin btn($args...)
  @warn "The btn() mixin is deprecated. Include button() instead."
  @include button($args...)

```

:::

:::

## Блоки содержимого

Помимо аргументов, миксин может принимать целый блок стилей, известный как *блок содержимого*. Примесь может объявить, что принимает блок содержимого, включив в свое тело at-правило `@content`. Блок содержимого передается с использованием фигурных скобок, как и любой другой блок в Sass, и вводится вместо правила `@content`.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin hover {
  &:not([disabled]):hover {
    @content;
  }
}

.button {
  border: 1px solid black;
  @include hover {
    border-width: 2px;
  }
}
```

@tab SASS

```sass
@mixin hover
  &:not([disabled]):hover
    @content



.button
  border: 1px solid black
  @include hover
    border-width: 2px


```

@tab CSS

```css
.button {
  border: 1px solid black;
}
.button:not([disabled]):hover {
  border-width: 2px;
}






```

:::

::: tip Забавный факт
Примесь может включать в себя несколько at-правил `@content`. Если это так, блок содержимого будет включен отдельно для каждого `@content`.
:::

::: warning Осторожно!
Блок содержимого имеет *лексическую область видимости*, что означает, что он может видеть только [локальные переменные](../variables#scope) в области, в которую включен миксин. Он не видит никаких переменных, определенных в переданном ему миксине, даже если они определены до вызова блока содержимого.
:::

### Передача аргументов в блоки содержимого

::: note <Status :data="{ feature: false, dart: '1.15.0', lib: false, ruby: false }" />
:::

Миксин может передавать аргументы своему блоку содержимого так же, как он передает аргументы другому миксину, написав `@content(<arguments...>)`. Пользователь, записывающий блок содержимого, может принимать аргументы, записывая `@include <name> using (<arguments...>)`. Список аргументов для блока содержимого работает так же, как список аргументов миксина, а аргументы, переданные ему с помощью `@content`, работают так же, как передача аргументов миксину.

::: warning Осторожно!
Если миксин передает аргументы своему блоку содержимого, этот блок содержимого *должен* объявить, что он принимает эти аргументы. Это означает, что рекомендуется передавать аргументы только по позиции (а не по имени), и это означает, что передача большего количества аргументов является критическим изменением.

Если вы хотите гибко определять, какую информацию вы передаете в блок содержимого, подумайте о передаче ему [карты](../values/maps), которая содержит информацию, которая может ему понадобиться!
:::

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin media($types...) {
  @each $type in $types {
    @media #{$type} {
      @content($type);
    }
  }
}

@include media(screen, print) using ($type) {
  h1 {
    font-size: 40px;
    @if $type == print {
      font-family: Calluna;
    }
  }
}
```

@tab SASS

```sass
@mixin media($types...)
  @each $type in $types
    @media #{$type}
      @content($type)




@include media(screen, print) using ($type)
  h1
    font-size: 40px
    @if $type == print
      font-family: Calluna



```

@tab CSS

```css
@media screen {
  h1 {
    font-size: 40px;
  }
}
@media print {
  h1 {
    font-size: 40px;
    font-family: Calluna;
  }
}





```

:::

## Синтаксис миксин с отступом

[Синтаксис с отступом](../syntax/README.md#the-indented-syntax) имеет специальный синтаксис для определения и использования миксинов в дополнение к стандартным `@mixin` и `@include`. Миксины определяются с помощью символа `=` и подключаются с помощью `+`. Хотя этот синтаксис короче, его труднее понять с первого взгляда, и пользователям рекомендуется избегать его.

::: code-tabs#styles

@tab SASS

```sass
=reset-list
  margin: 0
  padding: 0
  list-style: none

=horizontal-list
  +reset-list

  li
    display: inline-block
    margin:
      left: -2px
      right: 2em

nav ul
  +horizontal-list
```

@tab CSS

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav ul li {
  display: inline-block;
  margin-left: -2px;
  margin-right: 2em;
}






```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
