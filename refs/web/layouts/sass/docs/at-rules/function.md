---
title: "@function"
category:
  - Sass
  - At-Правила
  - function
---

## Обзор

Функции позволяют вам определять сложные операции со [значениями SassScript](../values/README.md), которые вы можете повторно использовать в своей таблице стилей. Они позволяют легко абстрагироваться от общих формул и поведения в удобочитаемой форме.

Функции определяются с помощью at-правила `@function`, которое записывается как `@function <name>(<arguments...>) { ... }`.
Имя функции может быть любым идентификатором Sass. Он может содержать только [универсальные конструкции](../syntax/structure#universal-statements), а также [at-правило `@return`](#return), которое указывает значение, используемое в результате вызова функции. Функции вызываются с использованием обычного синтаксиса функций CSS.

::: code-tabs#styles

@tab:active SCSS

```scss
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```

@tab Sass

```sass
@function pow($base, $exponent)
  $result: 1
  @for $_ from 1 through $exponent
    $result: $result * $base

  @return $result


.sidebar
  float: left
  margin-left: pow(4, 3) * 1px

```

@tab CSS

```css
.sidebar {
  float: left;
  margin-left: 64px;
}








```

:::


::: tip Забавный факт
Имена функций, как и все идентификаторы Sass, рассматривают дефисы и подчеркивания как идентичные.
  Это означает, что `scale-color` и `scale_color` относятся к одной и той же функции.
  Это историческое наследие самых ранних дней Sass, когда он *только* разрешал подчеркивание в именах идентификаторов.
  После того, как Sass добавил поддержку дефисов в соответствии с синтаксисом CSS, они стали эквивалентными, чтобы упростить миграцию.
:::

::: warning Осторожно!
Хотя технически возможно, чтобы функции имели побочные эффекты, такие как установка [глобальных переменных](../variables/README.md#scope), это настоятельно не рекомендуется. Используйте [примеси](./mixin) для побочных эффектов и используйте функции только для вычисления значений.
:::

## Аргументы

Аргументы позволяют настраивать поведение функций при каждом их вызове. Аргументы указываются в правиле `@function` после имени функции в виде списка имен переменных, заключенного в круглые скобки. Функция должна вызываться с таким же количеством аргументов в виде [выражений SassScript](../syntax/structure#expressions). Значения этих выражений доступны в теле функции как соответствующие переменные.

::: tip Забавный факт
Списки аргументов также могут иметь конечные запятые! Это позволяет избежать синтаксических ошибок при рефакторинге таблиц стилей.
:::

### Необязательные аргументы

Обычно каждый аргумент, который объявляет функция, должен быть передан при включении этой функции. Однако вы можете сделать аргумент необязательным, указав *значение по умолчанию*, которое будет использоваться, если эти аргументы не переданы. Значения по умолчанию используют тот же синтаксис, что и [объявления переменных](../variables/README.md): имя переменной, за которым следует двоеточие и [выражение SassScript](../syntax/structure#expressions). Это упрощает определение гибких API-интерфейсов unction, которые можно использовать как простыми, так и сложными способами.

::: code-tabs#styles

@tab:active SCSS

```scss
@function invert($color, $amount: 100%) {
  $inverse: change-color($color, $hue: hue($color) + 180);
  @return mix($inverse, $color, $amount);
}

$primary-color: #036;
.header {
  background-color: invert($primary-color, 80%);
}
```

@tab Sass

```sass
@function invert($color, $amount: 100%)
  $inverse: change-color($color, $hue: hue($color) + 180)
  @return mix($inverse, $color, $amount)


$primary-color: #036
.header
  background-color: invert($primary-color, 80%)

```

@tab CSS

```css
.header {
  background-color: #523314;
}






```

:::

::: tip Забавный факт
Значения по умолчанию могут быть любым выражением SassScript, и они могут даже ссылаться на более ранние аргументы!
:::

### Аргументы ключевых слов

При вызове функции аргументы могут передаваться по имени в дополнение к передаче их по позиции в списке аргументов. Это особенно полезно для функций с несколькими необязательными аргументами или с аргументами [boolean](../values/booleans), значение которых неочевидно без имени, которое будет им соответствовать. Аргументы ключевого слова используют тот же синтаксис, что и [объявления переменных](../variables/README.md) и [необязательные аргументы](#optional-arguments).

::: code-tabs#styles

@tab:active SCSS

```scss
$primary-color: #036;
.banner {
  background-color: $primary-color;
  color: scale-color($primary-color, $lightness: +40%);
}
```

@tab Sass

```sass
$primary-color: #036
.banner
  background-color: $primary-color
  color: scale-color($primary-color, $lightness: +40%)

```

@tab CSS

```css
.banner {
  background-color: #036;
  color: #0a85ff;
}

```

:::

::: warning Осторожно!
Поскольку *любой аргумент может передаваться по имени, будьте осторожны при переименовании аргументов функции... это может сломать ваших пользователей! Может быть полезно сохранить старое имя в качестве [необязательного аргумента](#optional-arguments) на некоторое время и напечатать [предупреждение](./warn), если кто-то его передаст, чтобы они знали, что нужно перейти на новый аргумент.
:::

### Принятие произвольных аргументов

Иногда полезно, чтобы функция могла принимать любое количество аргументов. Если последний аргумент в объявлении `@function` заканчивается на `...`, то все дополнительные аргументы этой функции передаются этому аргументу как [список](../values/lists). Этот аргумент известен как [список аргументов](../values/lists#argument-lists).

::: code-tabs#styles

@tab:active SCSS

```scss
@function sum($numbers...) {
  $sum: 0;
  @each $number in $numbers {
    $sum: $sum + $number;
  }
  @return $sum;
}

.micro {
  width: sum(50px, 30px, 100px);
}
```

@tab Sass

```sass
@function sum($numbers...)
  $sum: 0
  @each $number in $numbers
    $sum: $sum + $number

  @return $sum


.micro
  width: sum(50px, 30px, 100px)

```

@tab CSS

```css
.micro {
  width: 180px;
}








```

:::

#### Принятие произвольных аргументов ключевого слова

Списки аргументов также могут использоваться для получения аргументов произвольного ключевого слова. [Функция `meta.keywords()`](../modules/meta#keywords) принимает список аргументов и возвращает любые дополнительные ключевые слова, которые были переданы функции в виде [карты](../values/maps) от имен аргументов (не включая `$`) до значений этих аргументов.

::: tip Забавный факт
Если вы никогда не передаете список аргументов [функции `meta.keywords()`](../modules/meta#keywords), этот список аргументов не будет допускать дополнительных аргументов ключевого слова. Это помогает вызывающим абонентам вашей функции быть уверенным, что они случайно не ошиблись в именах аргументов.
:::

#### Передача произвольных аргументов

Так же, как списки аргументов позволяют функциям принимать произвольные позиционные аргументы или аргументы ключевого слова, тот же синтаксис может использоваться для *передачи* позиционных аргументов и аргументов ключевого слова функции. Если вы передадите список, за которым следует `...` в качестве последнего аргумента вызова функции, его элементы будут рассматриваться как дополнительные позиционные аргументы. Точно так же карта, за которой следует `...`, будет рассматриваться как дополнительные аргументы ключевого слова. Вы даже можете пройти оба сразу!

::: code-tabs#styles

@tab:active SCSS

```scss
$widths: 50px, 30px, 100px;
.micro {
  width: min($widths...);
}
```

@tab Sass

```sass
$widths: 50px, 30px, 100px
.micro
  width: min($widths...)

```

@tab CSS

```css
.micro {
  width: 30px;
}

```

:::

::: tip Забавный факт
Поскольку [список аргументов](../values/lists#argument-lists) отслеживает как позиционные, так и ключевые аргументы, вы используете его для передачи обоих сразу в другую функцию. Это упрощает определение псевдонима для функции!

::: code-tabs#styles

@tab:active SCSS

```scss
@function fg($args...) {
  @warn "The fg() function is deprecated. Call foreground() instead.";
  @return foreground($args...);
}
```

@tab Sass

```sass
@function fg($args...)
  @warn "The fg() function is deprecated. Call foreground() instead."
  @return foreground($args...)

```

:::

:::

## `@return`

At-правило `@return` указывает значение, используемое в результате вызова функции. Это разрешено только внутри тела `@function`, и каждая `@function` должна оканчиваться на `@return`.

Когда встречается `@return` , он немедленно завершает функцию и возвращает ее результат. Ранний возврат может быть полезен для обработки крайних случаев или случаев, когда доступен более эффективный алгоритм без обертывания всей функции в [блоке `@else` block](./control/if#else).

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:string";

@function str-insert($string, $insert, $index) {
  // Avoid making new strings if we don't need to.
  @if string.length($string) == 0 {
    @return $insert;
  }

  $before: string.slice($string, 0, $index);
  $after: string.slice($string, $index);
  @return $before + $insert + $after;
}
```

@tab Sass

```sass
@use "sass:string"

@function str-insert($string, $insert, $index)
  // Avoid making new strings if we don't need to.
  @if string.length($string) == 0
    @return $insert


  $before: string.slice($string, 0, $index)
  $after: string.slice($string, $index)
  @return $before + $insert + $after

```

:::

## Прочие функции

Помимо пользовательских функций, Sass предоставляет обширную [базовую библиотеку](../modules/README.md) встроенных функций, которые всегда доступны для использования. Реализации Sass также позволяют определять [пользовательские функции](../js-api/interfaces/LegacySharedOptions#functions) на основном языке. И, конечно же, вы всегда можете вызвать [простые функции CSS](#plain-css-functions) (даже те, которые имеют [странный синтаксис](../syntax/special-functions)).

### Простые функции CSS

Любой вызов функции, который не является ни определяемой пользователем, ни [встроенной](../modules) функцией, компилируется в обычную функцию CSS (если только он не использует [синтаксис аргументов Sass](../at-rules/function#arguments)). Аргументы будут скомпилированы в CSS и включены в вызов функции как есть. Это гарантирует, что Sass поддерживает все функции CSS без необходимости выпускать новые версии каждый раз, когда добавляется новая.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug var(--main-bg-color); // var(--main-bg-color)

$primary: #f2ece4;
$accent: #e1d7d2;
@debug radial-gradient($primary, $accent); // radial-gradient(#f2ece4, #e1d7d2)
```

@tab Sass

```sass
@debug var(--main-bg-color)  // var(--main-bg-color)

$primary: #f2ece4
$accent: #e1d7d2
@debug radial-gradient($primary, $accent)  // radial-gradient(#f2ece4, #e1d7d2)
```

:::

::: warning Осторожно!
Поскольку любая неизвестная функция будет скомпилирована в CSS, ее легко пропустить, если вы напечатаете опечатку в имени функции. Подумайте о запуске [CSS линтера](https://stylelint.io/) для вывода вашей таблицы стилей, чтобы получать уведомления, когда это произойдет!
:::

::: tip Забавный факт
Некоторые функции CSS, такие как `calc()` и `element()`, имеют необычный синтаксис. Sass [специально анализирует эти функции](../syntax/special-functions) как [строки без кавычек](../values/strings#unquoted).
:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
