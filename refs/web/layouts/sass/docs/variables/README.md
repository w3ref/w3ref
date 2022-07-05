---
title: Переменные
category:
  - Sass
  - Переменные
---

## Обзор

Переменные Sass просты: вы присваиваете значение имени, которое начинается с `$`, а затем вы можете ссылаться на это имя вместо самого значения. Но, несмотря на их простоту, это один из самых полезных инструментов, которые предлагает Sass. Переменные позволяют сократить количество повторений, выполнять сложные математические операции, настраивать библиотеки и многое другое.

Объявление переменной очень похоже на [объявление свойства](../style-rules/declarations): оно написано `<variable>: <expression>`. В отличие от свойства, которое можно объявить только в правиле стиля или в правиле, переменные можно объявлять где угодно. Чтобы использовать переменную, просто включите ее в значение.

::: code-tabs#styles

@tab:active SCSS

```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

@tab SASS

```sass
$base-color: #c6538c
$border-dark: rgba($base-color, 0.88)

.alert
  border: 1px solid $border-dark

```

@tab CSS

```css
.alert {
  border: 1px solid rgba(198, 83, 140, 0.88);
}



```

:::

::: warning Осторожно!
В CSS есть [собственные переменные](../style-rules/declarations#custom-properties), которые полностью отличаются от переменных Sass. Знай различия!

* Все переменные Sass компилируются с помощью Sass. Переменные CSS включены в вывод CSS.
* Переменные CSS могут иметь разные значения для разных элементов, но переменные Sass имеют только одно значение за раз.
* Переменные Sass являются *императивными*, что означает, что если вы используете переменную, а затем измените ее значение, предыдущее использование останется прежним. Переменные CSS *декларативны*, что означает, что если вы измените значение, это повлияет как на предыдущее, так и на последующее использование.

::: code-tabs#styles

@tab:active SCSS

```scss
$variable: value 1;
.rule-1 {
  value: $variable;
}

$variable: value 2;
.rule-2 {
  value: $variable;
}
```

@tab SASS

```sass
$variable: value 1
.rule-1
  value: $variable


$variable: value 2
.rule-2
  value: $variable

```

@tab CSS

```css
.rule-1 {
  value: value 1;
}

.rule-2 {
  value: value 2;
}


```

:::

:::

::: info Забавный факт
Переменные Sass, как и все идентификаторы Sass, рассматривают дефисы и подчеркивания как идентичные. Это означает, что `$font-size` и `$font_size` оба относятся к одной и той же переменной. Это историческое наследие самых ранних дней Sass, когда в именах идентификаторов разрешались *только* символы подчеркивания. После того, как Sass добавил поддержку дефисов в соответствии с синтаксисом CSS, они стали эквивалентными, чтобы упростить миграцию.
:::

## Значения по умолчанию

Обычно, когда вы присваиваете значение переменной, если эта переменная уже имела значение, ее старое значение перезаписывается. Но если вы пишете библиотеку Sass, вы можете разрешить своим пользователям настраивать переменные вашей библиотеки, прежде чем использовать их для генерации CSS.

Чтобы сделать это возможным, Sass предоставляет флаг `!default`. Это присваивает значение переменной, *только если* эта переменная не определена или ее значение равно [`null`](../values/null). В противном случае будет использоваться существующее значение.

### Настройка модулей

::: details <Status :data="{ feature: false, dart: '1.23.0', lib: false, ruby: false }" />

В настоящее время только Dart Sass поддерживает `@use`. Пользователи других реализаций должны использовать правило [`@import` rule](../at-rules/import) вместо этого.

:::

Переменные, определенные с помощью `!default`, могут быть настроены при загрузке модуля с помощью [правила `@use`](../at-rules/use). Библиотеки Sass часто используют переменные `!default`, чтобы позволить своим пользователям настраивать CSS библиотеки.

Чтобы загрузить модуль с конфигурацией, напишите `@use <url> с (<variable>: <value>, <variable>: <value>)`. Настроенные значения заменят значения переменных по умолчанию. Могут быть настроены только переменные, записанные на верхнем уровне таблицы стилей с флагом `!default`.

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
// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
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

// style.sass
@use 'library' with ($black: #222, $border-radius: 0.1rem)



```

@tab CSS

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
}












```

:::

## Встроенные переменные

Переменные, определенные [встроенным модулем][built-in module], не могут быть изменены.

[built-in module]: modules

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:math" as math;

// This assignment will fail.
math.$pi: 0;
```

@tab SASS

```sass
@use "sass:math" as math

// This assignment will fail.
math.$pi: 0
```

:::

## Область видимости

Переменные, объявленные на верхнем уровне таблицы стилей, являются *глобальными*. Это означает, что к ним можно получить доступ в любом месте их модуля после того, как они были объявлены. Но это верно не для всех переменных. Те, которые объявлены в блоках (фигурные скобки в SCSS или код с отступом в Sass), обычно являются *локальными*, и к ним можно получить доступ только внутри блока, в котором они были объявлены.

::: code-tabs#styles

@tab:active SCSS

```scss
$global-variable: global value;

.content {
  $local-variable: local value;
  global: $global-variable;
  local: $local-variable;
}

.sidebar {
  global: $global-variable;

  // This would fail, because $local-variable isn't in scope:
  // local: $local-variable;
}
```

@tab SASS

```sass
$global-variable: global value

.content
  $local-variable: local value
  global: $global-variable
  local: $local-variable


.sidebar
  global: $global-variable

  // This would fail, because $local-variable isn't in scope:
  // local: $local-variable

```

@tab CSS

```css
.content {
  global: global value;
  local: local value;
}

.sidebar {
  global: global value;
}






```

:::

### Затенение

Локальные переменные можно даже объявлять с тем же именем, что и глобальная переменная.
Если это произойдет, на самом деле есть две разные переменные с одним и тем же именем: одна локальная и одна глобальная.
Это помогает гарантировать, что автор, пишущий локальную переменную, случайно не изменит значение глобальной переменной, о которой он даже не подозревает.

::: code-tabs#styles

@tab:active SCSS

```scss
$variable: global value;

.content {
  $variable: local value;
  value: $variable;
}

.sidebar {
  value: $variable;
}
```

@tab SASS

```sass
$variable: global value

.content
  $variable: local value
  value: $variable


.sidebar
  value: $variable

```

@tab CSS

```css
.content {
  value: local value;
}

.sidebar {
  value: global value;
}



```

:::

Если вам нужно установить значение глобальной переменной из локальной области видимости (например, в миксине), вы можете использовать флаг `!global`. Объявление переменной, помеченное как `!global`, *всегда* будет присвоено глобальной области видимости.

::: code-tabs#styles

@tab:active SCSS

```scss
$variable: first global value;

.content {
  $variable: second global value !global;
  value: $variable;
}

.sidebar {
  value: $variable;
}
```

@tab SASS

```sass
$variable: first global value

.content
  $variable: second global value !global
  value: $variable


.sidebar
  value: $variable

```

@tab CSS

```css
.content {
  value: second global value;
}

.sidebar {
  value: second global value;
}



```

:::

::: warning Осторожно!
Флаг `!global` может использоваться только для установки переменной, которая уже была объявлена на верхнем уровне файла. Его *нельзя* использовать для объявления новой переменной.
:::

::: details <Status :data="{ feature: false, dart: '2.0.0', lib: false, ruby: false }" />
Старые версии Sass позволяли использовать `!global` для переменной, которая еще не существует. Это поведение устарело, чтобы гарантировать, что каждая таблица стилей объявляет одни и те же переменные независимо от того, как она выполняется.
:::

### Область управления потоком

Переменные, объявленные в [правилах управления потоком](../at-rules/control), имеют особые правила области видимости: они не затеняют переменные на том же уровне, что и правило управления потоком. Вместо этого они просто присваивают эти переменные. Это значительно упрощает условное присвоение значения переменной или создание значения как части цикла.

::: code-tabs#styles

@tab:active SCSS

```scss
$dark-theme: true !default;
$primary-color: #f8bbd0 !default;
$accent-color: #6a1b9a !default;

@if $dark-theme {
  $primary-color: darken($primary-color, 60%);
  $accent-color: lighten($accent-color, 60%);
}

.button {
  background-color: $primary-color;
  border: 1px solid $accent-color;
  border-radius: 3px;
}
```

@tab SASS

```sass
$dark-theme: true !default
$primary-color: #f8bbd0 !default
$accent-color: #6a1b9a !default

@if $dark-theme
  $primary-color: darken($primary-color, 60%)
  $accent-color: lighten($accent-color, 60%)


.button
  background-color: $primary-color
  border: 1px solid $accent-color
  border-radius: 3px

```

@tab CSS

```css
.button {
  background-color: #750c30;
  border: 1px solid #f5ebfc;
  border-radius: 3px;
}









```

:::

::: warning Осторожно!
Переменные в области управления потоком могут назначаться существующим переменным во внешней области, но они не могут объявлять там новые переменные. Убедитесь, что переменная уже объявлена, прежде чем присваивать ей значение, даже если вам нужно объявить ее как `null`.
:::

## Продвинутые функции переменных

Основная библиотека Sass предоставляет несколько дополнительных функций для работы с переменными. [Функция `meta.variable-exists()`](../modules/meta#variable-exists) возвращает, существует ли переменная с данным именем в текущей области, а [функция `meta.global-variable-exists()`](../modules/meta#global-variable-exists) делает то же самое. но только в глобальном масштабе.

::: warning Осторожно!
Иногда пользователи хотят использовать интерполяцию для определения имени переменной на основе другой переменной. Sass не позволяет этого, потому что из-за этого гораздо сложнее сразу определить, какие переменные и где определены. Что вы *можете* сделать, так это определить [карту](../values/maps) от имен до значений, к которым вы затем можете обращаться с помощью переменных.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```

@tab SASS

```sass
@use "sass:map"

$theme-colors: ("success": #28a745, "info": #17a2b8, "warning": #ffc107)

.alert
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning")





```

@tab CSS

```css
.alert {
  background-color: #ffc107;
}









```

:::

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
