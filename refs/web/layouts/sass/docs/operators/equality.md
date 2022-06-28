---
title: Равенства
category:
  - Sass
  - Операторы
  - Равенства
---

## Обзор

::: details <Status :data="{ feature: 'Unitless Equality', dart: true, lib: false, ruby: '4.0.0 (неизданный)' }" />

LibSass и более старые версии Ruby Sass считают числа без единиц измерения равными тем же числам с любыми единицами измерения. Это поведение устарело и было удалено из более поздних выпусков, поскольку оно нарушает [транзитивность](https://en.wikipedia.org/wiki/Transitive_relation).
:::

Операторы равенства возвращают, совпадают ли два значения. Они записываются как `<expression> == <expression>`, которое возвращает, равны ли два [выражения](../syntax/structure#expressions) и `<expression> != <expression>`, которое возвращает, являются ли два выражения *не* равными. Два значения считаются равными, если они одного типа *и* одного и того же значения, что означает разные вещи для разных типов:

* [Числа](../values/numbers) равны, если они имеют одинаковое значение *и* одинаковые единицы измерения, или если их значения равны, когда их единицы конвертируются между собой.
* [Строки](../values/strings) необычны тем, что строки [без кавычек](../values/strings#unquoted) и [в кавычках](../values/strings#quoted) с одинаковым содержимым считаются равными.
* [Цвета](../values/colors) равны, если они имеют одинаковые значения красного, зеленого, синего и альфа-канала.
* [Списки](../values/lists) равны, если их содержимое одинаково. Списки, разделенные запятыми, не равны спискам, разделенным пробелами, а списки в квадратных скобках не равны спискам без квадратных скобок.
* [Карты](../values/maps) равны, если их ключи и значения равны.
* [Вычисления](../values/calculations) равны, если их имена и аргументы равны. Аргументы операции сравниваются текстуально.
* [`true`, `false`](../values/booleans) и [`null`](../values/null) равны только самим себе.
* [Функции](../values/functions) эквивалентны одной и той же функции. Функции сравниваются *по ссылке*, поэтому, даже если две функции имеют одинаковое имя и определение, они считаются разными, если они не определены в одном месте.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 1px == 1px; // true
@debug 1px != 1em; // true
@debug 1 != 1px; // true
@debug 96px == 1in; // true

@debug "Helvetica" == Helvetica; // true
@debug "Helvetica" != "Arial"; // true

@debug hsl(34, 35%, 92.1%) == #f2ece4; // true
@debug rgba(179, 115, 153, 0.5) != rgba(179, 115, 153, 0.8); // true

@debug (5px 7px 10px) == (5px 7px 10px); // true
@debug (5px 7px 10px) != (10px 14px 20px); // true
@debug (5px 7px 10px) != (5px, 7px, 10px); // true
@debug (5px 7px 10px) != [5px 7px 10px]; // true

$theme: ("venus": #998099, "nebula": #d2e1dd);
@debug $theme == ("venus": #998099, "nebula": #d2e1dd); // true
@debug $theme != ("venus": #998099, "iron": #dadbdf); // true

@debug true == true; // true
@debug true != false; // true
@debug null != false; // true

@debug get-function("rgba") == get-function("rgba"); // true
@debug get-function("rgba") != get-function("hsla"); // true



```

@tab Sass

```sass
@debug 1px == 1px  // true
@debug 1px != 1em  // true
@debug 1 != 1px  // true
@debug 96px == 1in  // true

@debug "Helvetica" == Helvetica  // true
@debug "Helvetica" != "Arial"  // true

@debug hsl(34, 35%, 92.1%) == #f2ece4  // true
@debug rgba(179, 115, 153, 0.5) != rgba(179, 115, 153, 0.8)  // true

@debug (5px 7px 10px) == (5px 7px 10px)  // true
@debug (5px 7px 10px) != (10px 14px 20px)  // true
@debug (5px 7px 10px) != (5px, 7px, 10px)  // true
@debug (5px 7px 10px) != [5px 7px 10px]  // true

$theme: ("venus": #998099, "nebula": #d2e1dd) 
@debug $theme == ("venus": #998099, "nebula": #d2e1dd)  // true
@debug $theme != ("venus": #998099, "iron": #dadbdf)  // true

@debug calc(10px + 10%) == calc(10px + 10%)  // true
@debug calc(10% + 10px) == calc(10px + 10%)  // false

@debug true == true  // true
@debug true != false  // true
@debug null != false  // true

@debug get-function("rgba") == get-function("rgba")  // true
@debug get-function("rgba") != get-function("hsla")  // true
```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
