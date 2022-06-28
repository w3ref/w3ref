---
title: Карты
category:
  - Sass
  - Значения
  - Карты
---

## Обзор

Карты в Sass содержат пары ключей и значений и упрощают поиск значения по соответствующему ключу. Они записываются как `(<expression>: <expression>, <expression>: <expression>)`. [Выражение](../syntax/structure#expressions) перед `:` - это ключ, а выражение после него - это значение, связанное с этим ключом. Ключи должны быть уникальными, но значения могут дублироваться.
В отличие от [списков](lists), карты *необходимо* записывать в круглые скобки. Карта без пар пишется `()`.

::: tip Забавный факт
Проницательные читатели могут заметить, что пустая карта, `()`, записывается так же, как пустой список. Это потому, что он считается и картой, и списком. Фактически, *все* карты считаются списками! Каждая карта считается списком, который содержит список из двух элементов для каждой пары ключ/значение. Например, `(1: 2, 3: 4)` считается как `(1 2, 3 4)`.
:::

Карты позволяют использовать любые значения Sass в качестве своих ключей. [Оператор](../operators/equality) используется, чтобы определить, являются ли два ключа одинаковыми.

::: warning Осторожно!
В большинстве случаев рекомендуется использовать [строки в кавычках](strings#quoted), а не [строки без кавычек](strings#unquoted) для ключей карты. Это связано с тем, что некоторые значения, такие как названия цветов, могут *выглядеть* как строки без кавычек, но на самом деле быть другими типами. Чтобы избежать запутанных проблем, просто используйте кавычки!
:::

## Использование карт

Поскольку карты не являются допустимыми значениями CSS, они ничего не делают сами по себе. Вот почему Sass предоставляет набор [функций](../modules/map) для создания карт и доступа к содержащимся в них значениям.

### Поиск значения

Карты предназначены для связывания ключей и значений, поэтому, естественно, есть способ получить значение, связанное с ключом: [функция `map.get($map, $key)`](../modules/map#get! Эта функция возвращает значение на карте, связанное с данным ключом. Он возвращает [`null`](./null), если карта не содержит ключа.

::: code-tabs#styles

@tab:active SCSS

```scss
$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.get($font-weights, "medium"); // 500
@debug map.get($font-weights, "extra-bold"); // null
```

@tab Sass

```sass
$font-weights: ("regular": 400, "medium": 500, "bold": 700)

@debug map.get($font-weights, "medium")  // 500
@debug map.get($font-weights, "extra-bold")  // null
```

:::

### Сделайте что-нибудь для каждой пары

На самом деле здесь не используется функция, но это по-прежнему один из наиболее распространенных способов использования карт. [Правило `@each`](../at-rules/control/each) оценивает блок стилей для каждой пары ключ/значение на карте. Ключ и значение присваиваются переменным, поэтому к ним можно легко получить доступ в блоке.

::: code-tabs#styles

@tab:active SCSS

```scss
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}









```

@tab Sass

```sass
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f")

@each $name, $glyph in $icons
  .icon-#{$name}:before
    display: inline-block
    font-family: "Icon Font"
    content: $glyph











```

@tab CSS

```css
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
```

:::

### Добавить на карту

Также полезно добавлять новые пары на карту или заменять значение существующего ключа. [Функция `map.set($map, $key, $value)`](../modules/map#set) делает следующее: она возвращает копию `$map` со значением в `$key`, установленным на `$value`.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:map";

$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.set($font-weights, "extra-bold", 900);
// ("regular": 400, "medium": 500, "bold": 700, "extra-bold": 900)
@debug map.set($font-weights, "bold", 900);
// ("regular": 400, "medium": 500, "bold": 900)
```

@tab Sass

```sass
@use "sass:map"

$font-weights: ("regular": 400, "medium": 500, "bold": 700)

@debug map.set($font-weights, "extra-bold": 900)
// ("regular": 400, "medium": 500, "bold": 700, "extra-bold": 900)
@debug map.set($font-weights, "bold", 900)
// ("regular": 400, "medium": 500, "bold": 900)
```

:::

Вместо того, чтобы устанавливать значения по одному, вы также можете объединить две существующие карты, используя [`map.merge($map1, $map2)`](../modules/map#merge).

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:map";

$light-weights: ("lightest": 100, "light": 300);
$heavy-weights: ("medium": 500, "bold": 700);

@debug map.merge($light-weights, $heavy-weights);
// ("lightest": 100, "light": 300, "medium": 500, "bold": 700)
```

@tab Sass

```sass
@use "sass:map"

$light-weights: ("lightest": 100, "light": 300)
$heavy-weights: ("medium": 500, "bold": 700)

@debug map.merge($light-weights, $heavy-weights)
// ("lightest": 100, "light": 300, "medium": 500, "bold": 700)
```

:::

Если обе карты имеют одинаковые ключи, значения второй карты используются в возвращаемой карте.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:map";

$weights: ("light": 300, "medium": 500);

@debug map.merge($weights, ("medium": 700));
// ("light": 300, "medium": 700)
```

@tab Sass

```sass
@use "sass:map";

$weights: ("light": 300, "medium": 500)

@debug map.merge($weights, ("medium": 700))
// ("light": 300, "medium": 700)
```

:::

Обратите внимание, что поскольку карты Sass [неизменяемые](#immutability), `map.set()` и `map.merge()` не изменяют исходный список.

## Неизменность

Карты в Sass *неизменяемы*, что означает, что содержимое значения карты никогда не изменяется. Все функции карты Sass возвращают новые карты, а не изменяют исходные. Неизменяемость помогает избежать множества скрытых ошибок, которые могут закрасться, когда одна и та же карта используется в разных частях таблицы стилей.

Однако вы все равно можете обновлять свое состояние с течением времени, назначая новые карты той же переменной. Это часто используется в функциях и миксинах для отслеживания конфигурации на карте.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:map";

$prefixes-by-browser: ("firefox": moz, "safari": webkit, "ie": ms);

@mixin add-browser-prefix($browser, $prefix) {
  $prefixes-by-browser: map.merge($prefixes-by-browser, ($browser: $prefix)) !global;
}

@include add-browser-prefix("opera", o);
@debug $prefixes-by-browser;
// ("firefox": moz, "safari": webkit, "ie": ms, "opera": o)
```

@tab Sass

```sass
@use "sass:map"

$prefixes-by-browser: ("firefox": moz, "safari": webkit, "ie": ms)

@mixin add-browser-prefix($browser, $prefix)
  $prefixes-by-browser: map.merge($prefixes-by-browser, ($browser: $prefix)) !global


@include add-browser-prefix("opera", o)
@debug $prefixes-by-browser
// ("firefox": moz, "safari": webkit, "ie": ms, "opera": o)
```

:::
