---
title: "@import"
category:
  - Sass
  - At-Правила
  - import
---

## Обзор

Sass расширяет CSS [правило `@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) возможностью импортировать таблицы стилей Sass и CSS, обеспечивая доступ к [миксинам](./mixin), [функциям](./function) и [переменным](../variables/) и объединение CSS нескольких таблиц стилей вместе. В отличие от простого импорта CSS, который требует, чтобы браузер выполнял несколько HTTP-запросов при отображении вашей страницы, импорт Sass полностью обрабатывается во время компиляции.

Импорт Sass имеет тот же синтаксис, что и импорт CSS, за исключением того, что он позволяет разделять несколько операций импорта запятыми, а не требует, чтобы каждый из них имел собственный `@import`. Кроме того, в [синтаксисе с отступом](../syntax/README.md#the-indented-syntax) импортированные URL-адреса не обязательно должны иметь кавычки.

::: warning Осторожно!
Команда Sass не рекомендует продолжать использовать правило `@import`. Sass будет [постепенно отказываться от него](https://github.com/sass/sass/blob/master/accepted/module-system.md#timeline) в течение следующих нескольких лет и в конечном итоге полностью удалит его из языка. Вместо этого предпочтите [правило `@use`](./use). (Обратите внимание, что только Dart Sass в настоящее время поддерживает `@use`. Пользователи других реализаций должны вместо этого использовать правило `@import`.)

#### Что не так с `@import`?

Правило `@import` имеет ряд серьезных проблем:

* `@import` делает все переменные, миксины и функции глобально доступными. Из-за этого людям (или инструментам) очень сложно сказать, где что-то определено.

* Поскольку все глобально, библиотеки должны добавлять префиксы ко всем своим участникам, чтобы избежать конфликтов имен.

* [Правила `@extend`](./extend) также являются глобальными, что затрудняет прогнозирование того, какие правила стиля будут расширены.

* Каждая таблица стилей выполняется и ее CSS генерируется *каждый раз* при добавлении `@import`, что увеличивает время компиляции и приводит к раздутому выводу.

* Не было способа определить частные участники или селекторы заполнителей, которые были недоступны для последующих таблиц стилей.

Новая модульная система и правило `@use` решают все эти проблемы.

#### Как мне мигрировать?

Мы написали [инструмент миграции](../cli/migrator) который автоматически преобразует большую часть кода на основе `@import` в код на основе `@use` в мгновение ока. Просто наведите его на свои точки входа и позвольте ему работать!
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
@import 'foundation/code', 'foundation/lists';
```

@tab Sass

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
@import foundation/code, foundation/lists
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

Когда Sass импортирует файл, этот файл оценивается так, как если бы его содержимое появилось непосредственно вместо `@import`.
Любые [примеси](./mixin), [функции](./function) и [переменные](../variables/) из импортированного файла становятся доступными, и весь его CSS включается в тот момент, когда был написан `@import`. Более того, любые миксины, функции или переменные, которые были определены до `@import` (в том числе из других `@import`), доступны в импортированной таблице стилей.

::: warning Осторожно!
Если одна и та же таблица стилей импортируется более одного раза, она будет оцениваться каждый раз заново. Если он просто определяет функции и миксины, это обычно не имеет большого значения, но если он содержит правила стиля, они будут скомпилированы в CSS более одного раза.
:::

## Поиск файла

Было бы неинтересно записывать абсолютные URL-адреса для каждой импортируемой таблицы стилей, поэтому алгоритм Sass для поиска файла для импорта делает это немного проще. Во-первых, вам не нужно явно указывать расширение файла, который вы хотите импортировать; `@import "variables"` автоматически загрузит `variables.scss`, `variables.sass` или `variables.css`.

::: warning Осторожно!
Чтобы таблицы стилей работали в каждой операционной системе, Sass импортирует файлы по *URL*, а не по *пути к файлу*. Это означает, что вам нужно использовать косую черту, а не обратную косую черту, даже если вы работаете в Windows.
:::

### Загрузка путей

Все реализации Sass позволяют пользователям указывать *пути загрузки*: пути в файловой системе, которые Sass будет искать при разрешении импорта. Например, если вы передаете `node_modules/susy/sass` в качестве пути загрузки, вы можете использовать `@import "susy"` для загрузки `node_modules/susy/sass/susy.scss`.

Однако импорт всегда будет сначала разрешаться относительно текущего файла. Пути загрузки будут использоваться только в том случае, если не существует относительного файла, соответствующего импорту. Это гарантирует, что вы не сможете случайно испортить относительный импорт при добавлении новой библиотеки.

::: tip Забавный факт
В отличие от некоторых других языков, Sass не требует, чтобы вы использовали `./` для относительного импорта. Относительный импорт всегда доступен.
:::

### Частичные

По соглашению, файлы Sass, которые предназначены только для импорта, а не для компиляции, начинаются с `_` (как в `_code.scss`). Они называются *частичными*, и они говорят инструментам Sass не пытаться скомпилировать эти файлы самостоятельно. Вы можете не использовать символ `_` при импорте частичного файла.

### Индексные файлы

::: note <Status :data="{ feature: false, dart: true, lib: '3.6.0', ruby: '3.6.0' }" />
:::

Если вы напишете в папке `_index.scss` или `_index.sass`, то при импорте самой папки этот файл будет загружен на свое место.

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
@import 'code', 'lists';
// style.scss
@import 'foundation';
```

@tab Sass

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
@import code, lists
// style.sass
@import foundation
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

### Пользовательские импортеры

Все реализации Sass предоставляют способ определения пользовательских импортеров, которые управляют тем, как `@import` находит таблицы стилей:

* [Node Sass](https://npmjs.com/package/node-sass) и [Dart Sass на npm](https://npmjs.com/package/sass) предоставляют [параметр `importer`](https://github.com/sass/node-sass#importer--v200---experimental) как часть своего JS API.
* [Dart Sass on pub](https://pub.dartlang.org/packages/sass) предоставляет абстрактный [класс `Importer`](https://pub.dartlang.org/documentation/sass/latest/sass/Importer-class.html), который может быть расширен пользовательским импортером.
* [Ruby Sass](../../ruby-sass.md) предоставляет абстрактный [класс `Importers::Base`](https://www.rubydoc.info/gems/sass/Sass/Importers/Base), который может быть расширен пользовательским импортером.

## Вложенность

Импорт обычно записывается на верхнем уровне таблицы стилей, но это не обязательно. Они также могут быть вложены в [правила стиля](../style-rules/README.md) или [простые правила CSS](./css). Импортированный CSS вложен в этот контекст, что делает вложенный импорт полезным для привязки фрагмента CSS к определенному элементу или медиа-запросу. Обратите внимание, что [примеси](./mixin), [функции](./function) и [переменные](../variables/) верхнего уровня, определенные во вложенном импорте, по-прежнему определены глобально.

::: code-tabs#styles

@tab:active SCSS

```scss
// _theme.scss
pre, code {
  font-family: 'Source Code Pro', Helvetica, Arial;
  border-radius: 4px;
}
// style.scss
.theme-sample {
  @import "theme";
}
```

@tab Sass

```sass
// _theme.sass
pre, code
  font-family: 'Source Code Pro', Helvetica, Arial
  border-radius: 4px

// style.sass
.theme-sample
  @import theme

```

@tab CSS

```css
.theme-sample pre, .theme-sample code {
  font-family: 'Source Code Pro', Helvetica, Arial;
  border-radius: 4px;
}







```

:::

::: tip Забавный факт
Вложенный импорт очень полезен для определения сторонних таблиц стилей, но если вы являетесь автором импортируемой таблицы стилей, обычно лучше записать свои стили в [примесь](./mixin) и включить этот миксин во вложенные контекст. Примесь можно использовать более гибкими способами, и при взгляде на импортированную таблицу стилей становится понятнее, как она предназначена для использования.
:::

::: warning Осторожно!
CSS во вложенном импорте оценивается как миксин, что означает, что любые [родительские селекторы](../style-rules/parent-selector) будут ссылаться на селектор, в который вложена таблица стилей.

::: code-tabs#styles

@tab:active SCSS

```scss
// _theme.scss
ul li {
  $padding: 16px;
  padding-left: $padding;
  [dir=rtl] & {
    padding: {
      left: 0;
      right: $padding;
    }
  }
}
// style.scss
.theme-sample {
  @import "theme";
}
```

@tab Sass

```sass
// _theme.sass
ul li
  $padding: 16px
  padding-left: $padding
  [dir=rtl] &
    padding:
      left: 0
      right: $padding



// style.sass
.theme-sample
  @import theme

```

@tab CSS

```css
.theme-sample ul li {
  padding-left: 16px;
}
[dir=rtl] .theme-sample ul li {
  padding-left: 0;
  padding-right: 16px;
}










```

:::

:::

## Импорт CSS

::: details <Status :data="{ feature: false, dart: '1.11.0', lib: 'partial', ruby: false }" />

LibSass поддерживает импорт файлов с расширением `.css`, но вопреки спецификации они обрабатываются как файлы SCSS, а не анализируются как CSS. Это поведение устарело, и в настоящее время разрабатывается обновление для поддержки поведения, описанного ниже.
:::

Помимо импорта файлов `.sass` и `.scss`, Sass может импортировать простые старые файлы `.css`. Единственное правило состоит в том, что импорт *не должен* явно включать расширение `.css`, потому что оно используется для обозначения [простого CSS `@import`](#plain-css-imports).

::: code-tabs#styles

@tab:active SCSS

```scss
// code.css
code {
  padding: .25em;
  line-height: 0;
}
// style.scss
@import 'code';
```

@tab Sass

```sass
// code.css
code {
  padding: .25em;
  line-height: 0;
}
// style.sass
@import code
```

@tab CSS

```css
code {
  padding: .25em;
  line-height: 0;
}





```

:::

Файлы CSS, импортированные Sass, не поддерживают никаких специальных функций Sass. Чтобы гарантировать, что авторы случайно не напишут Sass в своем CSS, все функции Sass, которые также не являются корректным CSS, будут вызывать ошибки. В противном случае CSS будет отображаться как есть. Его можно даже [расширить](./extend!

## Простой CSS `@import`

::: details <Status :data="{ feature: false, dart: true, lib: 'partial', ruby: true }" />

По умолчанию LibSass правильно обрабатывает простой импорт CSS. Однако любые [пользовательские импортеры](../js-api/interfaces/LegacySharedOptions#importer) будут неправильно применяться к правилам простого CSS `@import`, что позволяет этим правилам загружать файлы Sass.
:::

Поскольку `@import` также определен в CSS, Sass нужен способ компиляции простого CSS `@import` без попытки импортировать файлы во время компиляции. Чтобы добиться этого и гарантировать, что SCSS является как можно большей частью надмножества CSS, Sass будет компилировать любой `@import` со следующими характеристиками в простой импорт CSS:

* Импортирует, где URL заканчивается на `.css`.
* Импортирует, где URL начинается с `http://` или `https://`.
* Импортирует, где URL-адрес записан как `url()`.
* Импорт с медиа-запросами.

::: code-tabs#styles

@tab:active SCSS

```scss
@import "theme.css";
@import "http://fonts.googleapis.com/css?family=Droid+Sans";
@import url(theme);
@import "landscape" screen and (orientation: landscape);
```

@tab Sass

```sass
@import "theme.css"
@import "http://fonts.googleapis.com/css?family=Droid+Sans"
@import url(theme)
@import "landscape" screen and (orientation: landscape)
```

@tab CSS

```css
@import url(theme.css);
@import "http://fonts.googleapis.com/css?family=Droid+Sans";
@import url(theme);
@import "landscape" screen and (orientation: landscape);
```

:::

### Интерполяция

Хотя при импорте Sass нельзя использовать [интерполяцию](../interpolation/README.md) (чтобы всегда можно было определить, откуда берутся [примеси](./mixin), [функции](./function) и [переменные](../variables/)), простой импорт CSS может. Это позволяет динамически генерировать импорт, например, на основе параметров миксина.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin google-font($family) {
  @import url("http://fonts.googleapis.com/css?family=#{$family}");
}

@include google-font("Droid Sans");
```

@tab Sass

```sass
@mixin google-font($family)
  @import url("http://fonts.googleapis.com/css?family=#{$family}")


@include google-font("Droid Sans")
```

@tab CSS

```css
@import url("http://fonts.googleapis.com/css?family=Droid Sans");




```

:::

## Импорт и модули

::: details <Status :data="{ feature: false, dart: '1.23.0', lib: false, ruby: false }" />

В настоящее время только Dart Sass поддерживает `@use`. Пользователи других реализаций должны использовать правило [`@import` rule](../at-rules/import) вместо этого.
:::

[Модульная система](./use) Sass легко интегрируется с `@import`, импортируете ли вы файл, содержащий правила `@use`, или загружаете файл, содержащий импорт, как модуль. Мы хотим сделать переход от `@import` к `@use` как можно более плавным.

### Импорт файла модуля-системы

Когда вы импортируете файл, содержащий правила `@use`, импортирующий файл имеет доступ ко всем участникам (даже частным участникам), определенным непосредственно в этом файле, но *не* ни к каким участникам из модулей, загруженных этим файлом. Однако, если этот файл содержит [правила `@forward`](./forward), импортируемый файл будет иметь доступ к перенаправленным участникам. Это означает, что вы можете импортировать библиотеку, которая была написана для использования с модульной системой.

::: warning Осторожно!
Когда импортируется файл с правилами `@use`, весь CSS, транзитивно загруженный ими, включается в результирующую таблицу стилей, даже если он уже был включен другим импортом. Если вы не будете осторожны, это может привести к раздуванию вывода CSS!
:::

#### Файлы только для импорта

API, который имеет смысл для `@use`, может не иметь смысла для `@import`. Например, `@use` по умолчанию добавляет пространство имен всем участникам, так что вы можете безопасно использовать короткие имена, но `@import` не делает, поэтому вам может понадобиться что-то более длинное. Если вы являетесь автором библиотеки, вы можете быть обеспокоены тем, что если вы обновите свою библиотеку для использования новой системы модулей, ваши существующие пользователи, основанные на `@import`, сломаются.

Чтобы упростить эту задачу, Sass также поддерживает *файлы только для импорта*. Если вы назовете файл `<name>.import.scss`, он будет загружен только для импорта, а не для `@use`. Таким образом, вы можете сохранить совместимость для пользователей `@import`, в то же время предоставляя удобный API для пользователей новой модульной системы.

::: code-tabs#styles

@tab:active SCSS

```scss
// _reset.scss

// Module system users write `@include reset.list()`.
@mixin list() {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
// _reset.import.scss

// Legacy import users can keep writing `@include reset-list()`.
@forward "reset" as reset-*;
```

@tab Sass

```sass
// _reset.sass

// Module system users write `@include reset.list()`.
@mixin list()
  ul
    margin: 0
    padding: 0
    list-style: none


// _reset.import.sass

// Legacy import users can keep writing `@include reset-list()`.
@forward "reset" as reset-*
```

:::

#### Настройка модулей с помощью импорта

::: note <Status :data="{ feature: false, dart: '1.24.0', lib: false, ruby: false }" />
:::

Вы можете [настроить модули](./use#configuration), которые загружаются через `@import`, определяя глобальные переменные до `@import`, который первым загружает этот модуль.

::: code-tabs#styles

@tab:active SCSS

```scss
// _library.scss
$color: blue !default;

a {
  color: $color;
}
// _library.import.scss
@forward 'library' as lib-*;
// style.sass
$lib-color: green;
@import "library";
```

@tab Sass

```sass
$color: blue !default

a
  color: $color


// _library.import.sass
@forward 'library' as lib-*
// style.sass
$lib-color: green
@import "library"
```

@tab CSS

```css

CSS OUTPUT
a {
  color: green;
}












```

:::

::: warning Осторожно!
Модули загружаются только один раз, поэтому, если вы измените конфигурацию после того, как вы `@import` модуля в первый раз (даже косвенно), изменение будет проигнорировано, если вы `@import` модуль снова.
:::

### Загрузка модуля, содержащего импорт

Когда вы используете `@use` (или `@forward`), загружаете модуль, который использует `@import`, этот модуль будет содержать все открытые участники, определенные таблицей стилей, которую вы загружаете, *и* все, что таблица стилей транзитивно импортирует. Другими словами, все, что импортируется, обрабатывается так, как если бы оно было записано в одной большой таблице стилей.

Это упрощает преобразование start с использованием `@use` в таблице стилей даже до того, как все библиотеки, от которых вы зависите, будут преобразованы в новую модульную систему. Однако имейте в виду, что если они все-таки конвертируют, их API-интерфейсы могут измениться!

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
