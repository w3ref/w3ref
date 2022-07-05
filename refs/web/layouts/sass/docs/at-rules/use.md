---
title: "@use"
category:
  - Sass
  - At-Правила
  - use
---

## Обзор

Правило `@use` загружает [миксины](mixin), [функции](function) и [переменные](../variables) из других таблиц стилей Sass и объединяет CSS из нескольких таблиц стилей вместе. Таблицы стилей, загруженные с помощью `@use`, называются "модулями". Sass также предоставляет [встроенные модули](../modules), полные полезных функций.

::: details <Status :data="{ feature: false, dart: '1.23.0', lib: false, ruby: false }" />
В настоящее время только Dart Sass поддерживает `@use`. Пользователи других реализаций должны использовать правило `@import rule` вместо этого.
:::

Простейшее правило `@use` записывается как `@use "<url>"`, которое загружает модуль по заданному URL. Любые стили, загруженные таким образом, будут включены ровно один раз в скомпилированный вывод CSS, независимо от того, сколько раз эти стили загружались.

::: warning Осторожно!
Правила таблицы стилей `@use` должны стоять перед любыми правилами, кроме `@forward`, включая [правила стилей](../style-rules/). Однако вы можете объявить переменные перед правилами `@use`, которые будут использоваться при [настройке модулей](#configuration).
:::

::: code-tabs#styles

@tab:active SCSS

```scss
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}
// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
// style.scss
@use 'foundation/code';
@use 'foundation/lists';
```

@tab SASS

```sass
// foundation/_code.sass
code
  padding: .25em
  line-height: 0

// foundation/_lists.sass
ul, ol
  text-align: left

  & &
    padding:
      bottom: 0
      left: 0



// style.sass
@use 'foundation/code'
@use 'foundation/lists'
```

@tab CSS

```css
code {
  padding: .25em;
  line-height: 0;
}

ul, ol {
  text-align: left;
}
ul ul, ol ol {
  padding-bottom: 0;
  padding-left: 0;
}











```

:::

## Загрузка участников

Вы можете получить доступ к переменным, функциям и миксинам из другого модуля, написав `<namespace>.<variable>`, `<namespace>.<function>()` или `@include <namespace>.<mixin>()`. По умолчанию пространство имен - это только последний компонент URL-адреса модуля.

Участники (переменные, функции и миксины), загруженные с помощью `@use`, видны только в таблице стилей, которая их загружает. Другим таблицам стилей потребуется написать свои собственные правила `@use`, если они также хотят получить к ним доступ. Это помогает легко определить, откуда каждый участник. Если вы хотите загрузить участников из многих файлов одновременно, вы можете использовать [правило `@forward`](./forward), чтобы перенаправить их всех из одного общего файла.

::: tip Забавный факт
Поскольку `@use` добавляет пространства имен к именам участников, можно безопасно выбирать очень простые имена, такие как `$radius` или `$width`, при написании таблицы стилей. Это отличается от старого [правила `@import`](./import), которое поощряло пользователей писать длинные имена, такие как `$mat-corner-radius`, чтобы избежать конфликтов с другими библиотеками, и это помогает сохранять ваши таблицы стилей ясными и удобными для чтения!
:::

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
// style.scss
@use "src/corners";

.button {
  @include corners.rounded;
  padding: 5px + corners.$radius;
}
```

@tab SASS

```sass
// src/_corners.sass
$radius: 3px

@mixin rounded
  border-radius: $radius

// style.sass
@use "src/corners"

.button
  @include corners.rounded
  padding: 5px + corners.$radius

```

@tab CSS

```css
.button {
  border-radius: 3px;
  padding: 8px;
}











```

:::

### Выбор пространства имен

По умолчанию пространство имен модуля - это только последний компонент его URL без расширения файла. Однако иногда вам может потребоваться выбрать другое пространство имен - вы можете захотеть использовать более короткое имя для модуля, на который вы много ссылаетесь, или вы можете загружать несколько модулей с одним и тем же именем файла. Вы можете сделать это, написав `@use "<url>" как <namespace>`.

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
// style.scss
@use "src/corners" as c;

.button {
  @include c.rounded;
  padding: 5px + c.$radius;
}
```

@tab SASS

```sass
// src/_corners.sass
$radius: 3px

@mixin rounded
  border-radius: $radius

// style.sass
@use "src/corners" as c

.button
  @include c.rounded
  padding: 5px + c.$radius

```

@tab CSS

```css
.button {
  border-radius: 3px;
  padding: 8px;
}











```

:::

Вы даже можете загрузить модуль *без* пространства имен, написав `@use "<url>" as *`. Однако мы рекомендуем делать это только для таблиц стилей, написанных вами; в противном случае они могут ввести новых участников, что вызовет конфликты имен!

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
// style.scss
@use "src/corners" as *;

.button {
  @include rounded;
  padding: 5px + $radius;
}
```

@tab SASS

```sass
// src/_corners.sass
$radius: 3px

@mixin rounded
  border-radius: $radius

// style.sass
@use "src/corners" as *

.button
  @include rounded
  padding: 5px + $radius

```

@tab CSS

```css
.button {
  border-radius: 3px;
  padding: 8px;
}











```

:::

### Частные участники

Как автор таблицы стилей вы можете не захотеть, чтобы все определяемые вами участники были доступны за пределами вашей таблицы стилей. Sass упрощает определение закрытого участника, начав его имя с символа `-` или `_`. Эти участники будут работать как обычно в таблице стилей, которая их определяет, но они не будут частью общедоступного API модуля. Это означает, что таблицы стилей, загружающие ваш модуль, не могут их видеть!

::: tip Забавный факт
Если вы хотите сделать участника закрытым для всего *пакета*, а не только для одного модуля, просто не [пересылайте его модуль](./forward) из любой точки входа вашего пакета (таблицы стилей, которые вы говорите своим пользователям загружать, чтобы использовать ваш упаковка). Вы даже можете [скрыть этого участника](./forward#controlling-visibility) при пересылке остальной части его модуля!
:::

::: code-tabs#styles

@tab:active SCSS

```scss
// src/_corners.scss
$-radius: 3px;

@mixin rounded {
  border-radius: $-radius;
}
// style.scss
@use "src/corners";

.button {
  @include corners.rounded;

  // This is an error! $-radius isn't visible outside of `_corners.scss`.
  padding: 5px + corners.$-radius;
}
```

@tab SASS

```sass
// src/_corners.sass
$-radius: 3px

@mixin rounded
  border-radius: $-radius

// style.sass
@use "src/corners"

.button
  @include corners.rounded

  // This is an error! $-radius isn't visible outside of `_corners.scss`.
  padding: 5px + corners.$-radius

```

:::

## Конфигурация

Таблица стилей может определять переменные с помощью [флага `!default`](../variables#default-values), чтобы сделать их настраиваемыми. Чтобы загрузить модуль с конфигурацией, напишите `@use <url> с (<variable>: <value>, <variable>: <value>)`. Настроенные значения заменят значения переменных по умолчанию.

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

### С миксинами

Настройка модулей с помощью `@use ... with` может быть очень удобной, особенно при использовании библиотек, которые изначально были написаны для работы с [правилом `@import`](./import). Но он не особенно гибкий, и мы не рекомендуем его для более сложных случаев использования. Если вы обнаружите, что хотите настроить сразу несколько переменных, передать [карты](../values/maps) в качестве конфигурации или обновить конфигурацию после загрузки модуля, подумайте о написании миксина для установки ваших переменных вместо этого и другого миксина для внедрения ваших стилей.

::: code-tabs#styles

@tab:active SCSS

```scss
// _library.scss
$-black: #000;
$-border-radius: 0.25rem;
$-box-shadow: null;

/// If the user has configured `$-box-shadow`, returns their configured value.
/// Otherwise returns a value derived from `$-black`.
@function -box-shadow() {
  @return $-box-shadow or (0 0.5rem 1rem rgba($-black, 0.15));
}

@mixin configure($black: null, $border-radius: null, $box-shadow: null) {
  @if $black {
    $-black: $black !global;
  }
  @if $border-radius {
    $-border-radius: $border-radius !global;
  }
  @if $box-shadow {
    $-box-shadow: $box-shadow !global;
  }
}

@mixin styles {
  code {
    border-radius: $-border-radius;
    box-shadow: -box-shadow();
  }
}
// style.scss
@use 'library';

@include library.configure(
  $black: #222,
  $border-radius: 0.1rem
);

@include library.styles;
```

@tab SASS

```sass
// _library.sass
$-black: #000
$-border-radius: 0.25rem
$-box-shadow: null

/// If the user has configured `$-box-shadow`, returns their configured value.
/// Otherwise returns a value derived from `$-black`.
@function -box-shadow()
  @return $-box-shadow or (0 0.5rem 1rem rgba($-black, 0.15))


@mixin configure($black: null, $border-radius: null, $box-shadow: null)
  @if $black
    $-black: $black !global
  @if $border-radius
    $-border-radius: $border-radius !global
  @if $box-shadow
    $-box-shadow: $box-shadow !global


@mixin styles
  code
    border-radius: $-border-radius
    box-shadow: -box-shadow()





// style.sass
@use 'library'
@include library.configure($black: #222, $border-radius: 0.1rem)
@include library.styles





```

@tab CSS

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
}




































```

:::

### Переназначение переменных

После загрузки модуля вы можете переназначить его переменные.

::: code-tabs#styles

@tab:active SCSS

```scss
// _library.scss
$color: red;
// _override.scss
@use 'library';
library.$color: blue;
// style.scss
@use 'library';
@use 'override';
@debug library.$color;  //=> blue
```

@tab SASS

```sass
// _library.sass
$color: red
// _override.sass
@use 'library'
library.$color: blue
// style.sass
@use 'library'
@use 'override'
@debug library.$color  //=> blue
```

:::

Это работает, даже если вы импортируете модуль без пространства имен, используя `as *`.
Присвоение имени переменной, определенной в этом модуле, перезапишет ее значение в этом модуле.

::: warning Осторожно!
Встроенные переменные модуля (например, [`math.$pi`](../modules/math#$pi)) нельзя переназначить.
:::

## Поиск модуля

Было бы неинтересно выписывать абсолютные URL-адреса для каждой загружаемой таблицы стилей, поэтому алгоритм поиска модуля Sass делает это немного проще. Во-первых, вам не нужно явно указывать расширение файла, который вы хотите загрузить; `@use "variables"` автоматически загрузит `variables.scss`, `variables.sass` или `variables.css`.

::: warning Осторожно!
Чтобы таблицы стилей работали в любой операционной системе, Sass загружает файлы по *URL*, а не по *пути к файлу*. Это означает, что вам нужно использовать косую черту, а не обратную, даже в Windows.
:::

### Загрузка путей

Все реализации Sass позволяют пользователям указывать *пути загрузки*: пути в файловой системе, которые Sass будет искать при поиске модулей. Например, если вы передаете `node_modules/susy/sass` в качестве пути загрузки, вы можете использовать `@use "susy"` для загрузки `node_modules/susy/sass/susy.scss`.

Однако модули всегда будут загружаться в первую очередь относительно текущего файла. Пути загрузки будут использоваться только в том случае, если не существует относительного файла, соответствующего URL-адресу модуля. Это гарантирует, что вы не сможете случайно испортить относительный импорт при добавлении новой библиотеки.

::: tip Забавный факт
В отличие от некоторых других языков, Sass не требует, чтобы вы использовали `./` для относительного импорта. Относительный импорт всегда доступен.
:::

### Составляющие

По соглашению, файлы Sass, которые предназначены только для загрузки в виде модулей, а не компилируются сами по себе, начинаются с `_` (как в `_code.scss`). Они называются *частичными*, и они говорят инструментам Sass не пытаться скомпилировать эти файлы самостоятельно. Вы можете не использовать символ `_` при импорте частичного файла.

### Индексные файлы

Если вы напишете `_index.scss` или `_index.sass` в папке, индексный файл будет загружен автоматически, когда вы загрузите URL-адрес самой папки.

::: code-tabs#styles

@tab:active SCSS

```scss
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}
// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
// foundation/_index.scss
@use 'code';
@use 'lists';
// style.scss
@use 'foundation';
```

@tab SASS

```sass
// foundation/_code.sass
code
  padding: .25em
  line-height: 0

// foundation/_lists.sass
ul, ol
  text-align: left

  & &
    padding:
      bottom: 0
      left: 0



// foundation/_index.sass
@use 'code'
@use 'lists'
// style.sass
@use 'foundation'
```

@tab CSS

```css
code {
  padding: .25em;
  line-height: 0;
}

ul, ol {
  text-align: left;
}
ul ul, ol ol {
  padding-bottom: 0;
  padding-left: 0;
}
















```

:::

## Загрузка CSS

Помимо загрузки файлов `.sass` и `.scss`, Sass может загружать простые старые файлы `.css`.

::: code-tabs#styles

@tab:active SCSS

```scss
// code.css
code {
  padding: .25em;
  line-height: 0;
}
// style.scss
@use 'code';
```

@tab SASS

```sass
// code.css
code {
  padding: .25em;
  line-height: 0;
}
// style.sass
@use 'code'
```

@tab CSS

```css
code {
  padding: .25em;
  line-height: 0;
}





```

:::

Файлы CSS, загружаемые в виде модулей, не поддерживают никаких специальных функций Sass и поэтому не могут предоставлять какие-либо переменные, функции или миксины Sass. Чтобы гарантировать, что авторы случайно не напишут Sass в своем CSS, все функции Sass, которые также не являются корректным CSS, будут вызывать ошибки. В противном случае CSS будет отображаться как есть. Его можно даже [расширить](./extend)!

## Отличия от `@import`

Правило `@use` предназначено для замены старого [правила `@import`](./import), но оно специально разработано для работы по-другому. Вот некоторые основные различия между ними:

* `@use` делает переменные, функции и примеси доступными только в рамках текущего файла.
  Он никогда не добавляет их в глобальную область.
  Это позволяет легко выяснить, откуда берется каждое имя, на которое ссылается ваш файл Sass, и означает, что вы можете использовать более короткие имена без риска конфликта.
* `@use` загружает каждый файл только один раз. Это гарантирует, что вы случайно не дублируете CSS своих зависимостей много раз.
* `@use` должен стоять в начале вашего файла и не может быть вложен в правила стиля.
* Каждое правило `@use` может иметь только один URL.
* `@use` требует заключения URL-адреса в кавычки, даже при использовании [синтаксиса с отступом](../syntax#the-indented-syntax).

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
