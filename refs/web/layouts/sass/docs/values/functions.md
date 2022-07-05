---
title: Функции
category:
  - Sass
  - Значения
  - Функции
---

## Обзор

::: details <Status :data="{ feature: 'Argument Type', dart: true, lib: '3.5.0', ruby: '3.5.0' }" />

В более старых версиях LibSass и Ruby Sass функция [`call()` function](../modules/meta#call) принимала строку, представляющую имя функции. Это было изменено, чтобы вместо этого принимать значение функции при подготовке к новой модульной системе, где функции больше не являются глобальными, и поэтому данное имя не всегда может относиться к одной и той же функции.

Передача строки в `call()` по-прежнему работает во всех реализациях, но она устарела и будет запрещена в будущих версиях.
:::

[Функции](../at-rules/function) тоже могут быть значениями! Вы не можете напрямую записать функцию как значение, но вы можете передать имя [функции `meta.get-function()`](../modules/meta#get-function), чтобы получить его как значение.
Когда у вас есть значение функции, вы можете передать его [функции `meta.call()`](../modules/meta#call), чтобы вызвать ее.
Это полезно для написания *функций высшего порядка*, которые вызывают другие функции.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:list";
@use "sass:meta";
@use "sass:string";

/// Return a copy of $list with all elements for which $condition returns `true`
/// removed.
@function remove-where($list, $condition) {
  $new-list: ();
  $separator: list.separator($list);
  @each $element in $list {
    @if not meta.call($condition, $element) {
      $new-list: list.append($new-list, $element, $separator: $separator);
    }
  }
  @return $new-list;
}

$fonts: Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;

content {
  @function contains-helvetica($string) {
    @return string.index($string, "Helvetica");
  }
  font-family: remove-where($fonts, meta.get-function("contains-helvetica"));
}
```

@tab SASS

```sass
@use "sass:list"
@use "sass:meta"
@use "sass:string"

/// Return a copy of $list with all elements for which $condition returns `true`
/// removed.
@function remove-where($list, $condition)
  $new-list: ()
  $separator: list.separator($list)
  @each $element in $list
    @if not meta.call($condition, $element)
      $new-list: list.append($new-list, $element, $separator: $separator)


  @return $new-list


$fonts: Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif

.content
  @function contains-helvetica($string)
    @return string.index($string, "Helvetica")

  font-family: remove-where($fonts, meta.get-function("contains-helvetica"))

```

@tab CSS

```css
.content {
  font-family: Tahoma, Geneva, Arial, sans-serif;
}






















```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
