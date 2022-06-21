---
title: Основы Sass
category:
  - Sass
  - Руководство
  - Основы
---

## Руководство Sass

Прежде чем вы сможете использовать Sass, вам необходимо настроить его в своем проекте.
Если вы хотите просто просмотреть здесь, продолжайте, но мы рекомендуем сначала установить Sass.
[Перейти сюда](./install), если вы хотите узнать, как все настроить.

### Препроцессинг

CSS сам по себе может быть интересен, но таблицы стилей становятся все больше, сложнее и труднее поддерживать.
Именно здесь может помочь препроцессор.
В Sass есть функции, которых еще нет в CSS, такие как вложенность, миксины, наследование и другие полезные вещи, которые помогут вам написать надежный и удобный CSS.

Как только вы начнете возиться с Sass, он возьмет ваш предварительно обработанный файл Sass и сохранит его как обычный файл CSS, который вы можете использовать на своем веб-сайте.

Самый простой способ сделать это - в вашем терминале.
После установки Sass вы можете скомпилировать свой Sass в CSS с помощью команды `sass`.
Вам нужно будет указать Sass, из какого файла строить и куда выводить CSS.
Например, запуск `sass input.scss output.css` из вашего терминала потребует одного файла Sass, `input.scss`, и скомпилирует этот файл в `output.css`.

Вы также можете просматривать отдельные файлы или каталоги с флагом `--watch`.
Флаг просмотра указывает Sass следить за вашими исходными файлами на предмет изменений и повторно компилировать CSS каждый раз, когда вы сохраняете свой Sass.
Если вы хотите просмотреть (а не вручную создавать) файл `input.scss`, вы просто добавите флаг просмотра в свою команду, например:

```bash
sass --watch input.scss output.css
```

Вы можете просматривать и выводить в каталоги, используя пути к папкам в качестве ввода и вывода и разделяя их двоеточием.
В этом примере:

```bash
sass --watch app/sass:public/stylesheets
```

Sass будет отслеживать все файлы в папке `app/sass` на предмет изменений и компилировать CSS в папку `public/stylesheets`.

::: tip Забавный факт
Sass имеет два синтаксиса!
Чаще всего используется синтаксис SCSS (`.scss`).
Это надмножество CSS, что означает, что все допустимые CSS также являются допустимыми SCSS.
Синтаксис с отступом (`.sass`) более необычен: он использует отступы, а не фигурные скобки для вложения операторов, и перевод строки вместо точки с запятой для их разделения.
Все наши примеры доступны в обоих синтаксисах.
:::

### Переменные

Думайте о переменных как о способе хранения информации, которую вы хотите повторно использовать в своей таблице стилей.
Вы можете хранить такие вещи, как цвета, стеки шрифтов или любое значение CSS, которое, по вашему мнению, вы захотите использовать повторно.
Sass использует символ `$` для преобразования чего-либо в переменную.
Вот пример:

::: code-tabs#styles

@tab:active SCSS

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

@tab Sass

```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

```

@tab CSS

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}



```

:::

Когда Sass обрабатывается, он принимает переменные, которые мы определяем для `$font-stack` и `$primary-color`, и выводит обычный CSS с нашими значениями переменных, помещенными в CSS. Это может быть чрезвычайно эффективным при работе с фирменными цветами и поддержании их единообразия на всем сайте.

### Вложенность

При написании HTML вы, вероятно, заметили, что он имеет четкую вложенную и визуальную иерархию.
CSS, с другой стороны, этого не делает.

Sass позволит вам вложить ваши CSS-селекторы таким образом, чтобы они следовали той же визуальной иерархии вашего HTML.
Имейте в виду, что чрезмерно вложенные правила приведут к чрезмерно квалифицированному CSS, который может оказаться трудным в обслуживании и обычно считается плохой практикой.

Имея это в виду, вот пример некоторых типичных стилей для навигации по сайту:

::: code-tabs#styles

@tab:active SCSS

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

@tab Sass

```sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none


```

@tab CSS

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}


```

:::

Вы заметите, что селекторы `ul`, `li` и `a` вложены в селектор `nav`.
Это отличный способ организовать ваш CSS и сделать его более читабельным.

### Составляющие

Вы можете создавать частичные файлы Sass, содержащие небольшие фрагменты CSS, которые можно включать в другие файлы Sass.
Это отличный способ модулировать ваш CSS и облегчить его поддержку.
Частичный файл - это Sass-файл, названный с подчеркиванием.
Вы можете назвать его, например, `_partial.scss`.
Подчеркивание дает Sass знать, что файл является только частичным и что его не следует генерировать в файл CSS.
Частичные файлы Sass используются с помощью правила `@use`.

### Модули

::: details <Status :data="{ feature: false, dart: '1.23.0', lib: false, ruby: false }" />

В настоящее время только Dart Sass поддерживает `@use`. Пользователи других реализаций должны использовать правило `@import rule` вместо этого.

:::

Вам не нужно записывать весь свой Sass в один файл.
Вы можете разделить его, как хотите, с помощью правила `@use`.
Это правило загружает другой файл Sass как *модуль*, что означает, что вы можете ссылаться на его переменные, [миксины][#примеси-миксины] и [функции][./at-rules/function] в вашем файле Sass с пространством имен на основе имени файла.
Использование файла также будет включать созданный им CSS в ваш скомпилированный вывод!

::: code-tabs#styles

@tab:active SCSS

```scss
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

@tab Sass

```sass
// _base.sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color

// styles.sass
@use 'base'

.inverse
  background-color: base.$primary-color
  color: white

```

@tab CSS

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
```

:::

Обратите внимание, что мы используем `@use 'base';` в файле `styles.scss`.
Когда вы используете файл, вам не нужно указывать расширение файла.
Sass умен и разберется за вас.

### Примеси (Миксины)

Некоторые вещи в CSS писать немного утомительно, особенно с CSS3 и множеством существующих префиксов поставщиков.
Миксин позволяет вам создавать группы объявлений CSS, которые вы хотите повторно использовать на своем сайте.
Это помогает сохранить ваш Sass очень СУХИМ.
Вы даже можете передавать значения, чтобы сделать ваш миксин более гибким. Вот пример для `theme`.

::: code-tabs#styles

@tab:active SCSS

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}


```

@tab Sass

```sass
@mixin theme($theme: DarkGray)
  background: $theme
  box-shadow: 0 0 1px rgba($theme, .25)
  color: #fff


.info
  @include theme

.alert
  @include theme($theme: DarkRed)

.success
  @include theme($theme: DarkGreen)



```

@tab CSS

```css
.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
```

:::

Чтобы создать миксин, вы используете директиву `@mixin` и даете ему имя.
Мы назвали наш миксин `theme`.
Мы также используем переменную `$theme` внутри круглых скобок, так что мы можем передать `theme`, какую захотим.
После того, как вы создадите свой миксин, вы можете использовать его как объявление CSS, начиная с `@include`, за которым следует имя миксина.

### Расширение/Наследование

Использование `@extend` позволяет передавать набор свойств CSS от одного селектора к другому.
В нашем примере мы собираемся создать простую серию сообщений об ошибках, предупреждениях и успехах, используя другую функцию, которая идет рука об руку с расширенными классами-заполнителями.
Класс-заполнитель - это особый тип класса, который печатает только при расширении и может помочь сохранить ваш скомпилированный CSS аккуратным и чистым.

::: code-tabs#styles

@tab:active SCSS

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

@tab Sass

```sass
/* This CSS will print because %message-shared is extended. */
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333


// This CSS won't print because %equal-heights is never extended.
%equal-heights
  display: flex
  flex-wrap: wrap


.message
  @extend %message-shared


.success
  @extend %message-shared
  border-color: green


.error
  @extend %message-shared
  border-color: red


.warning
  @extend %message-shared
  border-color: yellow

```

@tab CSS

```css
/* This CSS will print because %message-shared is extended. */
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}













```

:::

Приведенный выше код сообщает `.message`, `.success`, `.error` и `.warning` вести себя так же, как `%message-shared`.
Это означает, что везде, где появляется `%message-shared` shows up, `.message`, `.success`, `.error` и `.warning` тоже будут.
Магия происходит в сгенерированном CSS, где каждый из этих классов получит те же свойства CSS, что и `%message-shared`. Это поможет вам избежать написания нескольких имен классов в элементах HTML.

Вы можете расширить большинство простых селекторов CSS в дополнение к классам-заполнителям в Sass, но использование заполнителей - это самый простой способ убедиться, что вы не расширяете класс, вложенный где-то еще в ваших стилях, что может привести к непреднамеренным селекторам в вашем CSS.

Обратите внимание, что `%equal-heights` не создается, потому что `%equal-heights` никогда не расширяется.

### Операторы

Выполнение математических расчетов в вашем CSS очень полезно.
В Sass есть несколько стандартных математических операторов, таких как `+`, `-`, `*`, `math.div()` и `%`.
В нашем примере мы собираемся выполнить простую математику, чтобы вычислить ширину `article` и `aside`.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```

@tab Sass

```sass
@use "sass:math"

.container
  display: flex

article[role="main"]
  width: math.div(600px, 960px) * 100%

aside[role="complementary"]
  width: math.div(300px, 960px) * 100%
  margin-left: auto



```

@tab CSS

```css
.container {
  display: flex;
}

article[role="main"] {
  width: 62.5%;
}

aside[role="complementary"] {
  width: 31.25%;
  margin-left: auto;
}


```

:::

Мы создали очень простую плавную сетку на основе 960 пикселей.
Операции в Sass позволяют нам делать что-то вроде того, чтобы брать значения пикселей и без особых проблем преобразовывать их в проценты.

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
