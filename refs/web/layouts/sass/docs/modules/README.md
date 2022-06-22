---
title: Встроенные модули
category:
  - Sass
  - Встроенные модули
---

## Обзор

Sass предоставляет множество встроенных модулей, которые содержат полезные функции (и иногда миксины). Эти модули могут быть загружены с помощью [правила `@use`](at-rules/use), как любая пользовательская таблица стилей, и их функции могут быть вызваны [как любой другой участник модуля](at-rules/use#loading-members). Все URL-адреса встроенных модулей начинаются с `sass:`, чтобы указать, что они являются частью самого Sass.

::: details <Status :data="{ feature: false, dart: '1.23.0', lib: false, ruby: false }" />
В настоящее время только Dart Sass поддерживает загрузку встроенных модулей с помощью `@use`. Пользователи других реализаций должны вместо этого вызывать функции, используя их глобальные имена.
:::

::: warning Осторожно!
До того, как была представлена модульная система Sass, все функции Sass были всегда доступны глобально. Многие функции по-прежнему имеют глобальные псевдонимы (они перечислены в их документации). Команда Sass не рекомендует их использовать и в конечном итоге откажется от них, но пока они остаются доступными для совместимости со старыми версиями Sass и с LibSass (который еще не поддерживает модульную систему).

[Несколько функций](#глобальные-функции) доступны *только* глобально даже в новой модульной системе, либо потому, что у них есть особое поведение оценки ([`if()`](#if)), либо потому, что они добавляют дополнительное поведение поверх встроенных Функции CSS ([`rgb()`](#rgb) и [`hsl()`](#hsl)). Они не будут считаться устаревшими и могут использоваться свободно.
:::

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:color";

.button {
  $primary-color: #6b717f;
  color: $primary-color;
  border: 1px solid color.scale($primary-color, $lightness: 20%);
}
```

@tab Sass

```sass
@use "sass:color"

.button
  $primary-color: #6b717f
  color: $primary-color
  border: 1px solid color.scale($primary-color, $lightness: 20%)

```

@tab CSS

```css
.button {
  color: #6b717f;
  border: 1px solid #878d9a;
}
```

:::

Sass предоставляет следующие встроенные модули:

* [Модуль `sass:math`](../modules/math) предоставляет функции, которые работают с [числами](../values/numbers).
* [Модуль `sass:string`](../modules/string) упрощает объединение, поиск или разделение [строк](../values/strings).
* [Модуль `sass:color`](../modules/color) генерирует новые [цвета](../values/colors) на основе существующих, что упрощает создание цветовых тем.
* [Модуль `sass:list`](../modules/list) позволяет вам получать доступ и изменять значения в [списках](../values/lists).
* [Модуль `sass:map`](../modules/map) позволяет искать значение, связанное с ключом, в [карте](../values/maps) и многое другое.
* [Модуль `sass:selector`](../modules/selector) предоставляет доступ к мощному механизму выбора Sass.
* [Модуль `sass:meta`](../modules/meta) раскрывает детали внутренней работы Sass.

## Глобальные функции

```sass
hsl($hue $saturation $lightness)
hsl($hue $saturation $lightness / $alpha)
hsl($hue, $saturation, $lightness, $alpha: 1)
hsla($hue $saturation $lightness)
hsla($hue $saturation $lightness / $alpha)
hsla($hue, $saturation, $lightness, $alpha: 1) //=> color 
```

::: details <Status :data="{ feature: 'Level 4 Syntax', dart: '1.15.0', lib: false, ruby: false }" />
LibSass и Ruby Sass поддерживают только следующие подписи:

* `hsl($hue, $saturation, $lightness)`
* `hsla($hue, $saturation, $lightness, $alpha)`

Обратите внимание, что для этих реализаций аргумент `$alpha` *обязателен*, если используется имя функции `hsla()`, и *запрещен*, если используется имя функции `hsl()`.
:::

::: details <Status :data="{ feature: 'Percent Alpha', dart: true, lib: false, ruby: '3.7.0' }" />
LibSass и более старые версии Ruby Sass не поддерживают альфа-значения, указанные в процентах.
:::

Возвращает цвет с заданными [оттенком, насыщенностью и яркостью](https://en.wikipedia.org/wiki/HSL_and_HSV) и заданным альфа-каналом.

Оттенок - это число от `0deg` до `360deg` градусов (включительно) и может быть безразмерным. Насыщенность и яркость - это числа от `0%` до `100%` (включительно) и могут *не* быть безразмерными. Альфа-канал может быть указан либо как безразмерное число от 0 до 1 (включительно), либо как процентное соотношение между `0%` и `100%` (включительно).

::: info Забавный факт
Вы можете передать [специальные функции](../syntax/special-functions), такие как `calc()` или `var()` вместо любого аргумента в `hsl()`. Вы даже можете использовать `var()` вместо нескольких аргументов, так как он может быть заменен несколькими значениями! Когда функция цвета вызывается таким образом, она возвращает строку без кавычек, используя ту же сигнатуру, с которой она была вызвана.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug hsl(210deg 100% 20% / var(--opacity)); // hsl(210deg 100% 20% / var(--opacity))
@debug hsla(var(--peach), 20%); // hsla(var(--peach), 20%)
```

@tab Sass

```sass
@debug hsl(210deg 100% 20% / var(--opacity))  // hsl(210deg 100% 20% / var(--opacity))
@debug hsla(var(--peach), 20%)  // hsla(var(--peach), 20%)
```

:::

:::

::: warning Осторожно!
[Специальные правила синтаксического анализа](../operators/numeric#slash-separated-values) Sass для значений, разделенных косой чертой, затрудняют передачу переменных для `$lightness` или `$alpha` при использовании сигнатуры `hsl($hue $saturation $lightness / $alpha)`. Вместо этого рассмотрите возможность использования `hsl($hue, $saturation, $lightness, $alpha)`.
:::

::: code-tabs#styles

@tab:active SCSS

```scss
@debug hsl(210deg 100% 20%); // #036
@debug hsl(34, 35%, 92%); // #f2ece4
@debug hsl(210deg 100% 20% / 50%); // rgba(0, 51, 102, 0.5)
@debug hsla(34, 35%, 92%, 0.2); // rgba(242, 236, 228, 0.2)
```

@tab Sass

```sass
@debug hsl(210deg 100% 20%) // #036
@debug hsl(34, 35%, 92%) // #f2ece4
@debug hsl(210deg 100% 20% / 50%)  // rgba(0, 51, 102, 0.5)
@debug hsla(34, 35%, 92%, 0.2)  // rgba(242, 236, 228, 0.2)
```

:::

```scss
if($condition, $if-true, $if-false)
```

Возвращает `$if-true`, если `$condition` равно [правде](../at-rules/control/if#truthiness-and-falsiness) и `$if-false` в противном случае.

Эта функция отличается тем, что она даже не оценивает аргумент, который не возвращается, поэтому ее можно безопасно вызывать, даже если неиспользованный аргумент вызовет ошибку.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug if(true, 10px, 15px); // 10px
@debug if(false, 10px, 15px); // 15px
@debug if(variable-defined($var), $var, null); // null
```

@tab Sass

```sass
@debug if(true, 10px, 15px)  // 10px
@debug if(false, 10px, 15px)  // 15px
@debug if(variable-defined($var), $var, null)  // null
```

:::

```sass
rgb($red $green $blue)
rgb($red $green $blue / $alpha)
rgb($red, $green, $blue, $alpha: 1)
rgb($color, $alpha)
rgba($red $green $blue)
rgba($red $green $blue / $alpha)
rgba($red, $green, $blue, $alpha: 1)
rgba($color, $alpha) //=> color 
```

::: details <Status :data="{ feature: 'Level 4 Syntax', dart: '1.15.0', lib: false, ruby: false }" />
LibSass и Ruby Sass поддерживают только следующие подписи:

* `rgb($red, $green, $blue)`
* `rgba($red, $green, $blue, $alpha)`
* `rgba($color, $alpha)`

Обратите внимание, что для этих реализаций аргумент `$alpha` *обязателен*, если используется имя функции `rgba()`, и *запрещен*, если используется имя функции `rgb()`.
:::

::: details <Status :data="{ feature: 'Percent Alpha', dart: true, lib: false, ruby: '3.7.0' }" />
LibSass и более старые версии Ruby Sass не поддерживают альфа-значения, указанные в процентах.
:::

Если переданы `$red`, `$green`, `$blue`и, необязательно, `$alpha`, возвращается цвет с указанными красным, зеленым, синим и альфа-каналами.

Каждый канал может быть указан либо как число [без единиц измерения](../values/numbers#units) от 0 до 255 (включительно), либо как процентное соотношение между `0%` и `100%` (включительно). Альфа-канал может быть указан либо как безразмерное число от 0 до 1 (включительно), либо как процентное соотношение между `0%` и `100%` (включительно).

::: info Забавный факт
Вы можете передать [специальные функции](../syntax/special-functions), такие как `calc()` или `var()` вместо любого аргумента в `rgb()`. Вы даже можете использовать `var()` вместо нескольких аргументов, так как он может быть заменен несколькими значениями! Когда функция цвета вызывается таким образом, она возвращает строку без кавычек, используя ту же сигнатуру, с которой она была вызвана.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug rgb(0 51 102 / var(--opacity)); // rgb(0 51 102 / var(--opacity))
@debug rgba(var(--peach), 0.2); // rgba(var(--peach), 0.2)
```

@tab Sass

```sass
@debug rgb(0 51 102 / var(--opacity))  // rgb(0 51 102 / var(--opacity))
@debug rgba(var(--peach), 0.2)  // rgba(var(--peach), 0.2)
```

:::

:::

::: warning Осторожно!
[Специальные правила синтаксического анализа](../operators/numeric#slash-separated-values) Sass для значений, разделенных косой чертой, затрудняют передачу переменных для `$blue` или `$alpha` при использовании сигнатуры `rgb($red $green $blue / $alpha)`. Вместо этого рассмотрите возможность использования `rgb($red, $green, $blue, $alpha)`.
:::

::: code-tabs#styles

@tab:active SCSS

```scss
@debug rgb(0 51 102); // #036
@debug rgb(95%, 92.5%, 89.5%); // #f2ece4
@debug rgb(0 51 102 / 50%); // rgba(0, 51, 102, 0.5)
@debug rgba(95%, 92.5%, 89.5%, 0.2); // rgba(242, 236, 228, 0.2)
```

@tab Sass

```sass
@debug rgb(0 51 102)  // #036
@debug rgb(95%, 92.5%, 89.5%)  // #f2ece4
@debug rgb(0 51 102 / 50%)  // rgba(0, 51, 102, 0.5)
@debug rgba(95%, 92.5%, 89.5%, 0.2)  // rgba(242, 236, 228, 0.2)
```

:::

Если переданы `$color` и `$alpha`, возвращается `$color` с заданным каналом `$alpha` вместо исходного альфа-канала.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug rgb(#f2ece4, 50%); // rgba(242, 236, 228, 0.5);
@debug rgba(rgba(0, 51, 102, 0.5), 1); // #003366
```

@tab Sass

```sass
@debug rgb(#f2ece4, 50%)  // rgba(242, 236, 228, 0.5) 
@debug rgba(rgba(0, 51, 102, 0.5), 1)  // #003366
```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
