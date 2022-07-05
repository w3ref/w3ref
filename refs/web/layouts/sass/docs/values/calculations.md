---
title: Расчеты
category:
  - Sass
  - Значения
  - Расчеты
---

## Обзор

Вычисления - это то, как Sass представляет функцию `calc()`, а также аналогичные функции, такие как `clamp()`, `min()` и `max()`. Sass максимально упростит их, даже если они сочетаются друг с другом.

::: details <Status :data="{ feature: false, dart: '1.40.0', lib: false, ruby: false }" />

LibSass, Ruby Sass и версии Dart Sass до 1.40.0 анализируют 1.40.0 `calc()` как [специальную функцию](../syntax/special-functions#element-progid-and-expression), такую как `element()`.

LibSass, Ruby Sass и версия Dart Sass до 1.40.0 анализируют 1.31.0 `clamp()` как [простую функцию CSS](../at-rules/function#plain-css-functions) , а не поддерживают специальный синтаксис внутри нее. Версии Dart Sass между 1.31.0 и 1.40.0 разбирают `clamp()` как [специальную функцию](../syntax/special-functions#element-progid-and-expression), такую как `element()`.
:::

::: code-tabs#styles

@tab:active SCSS

```scss
@debug calc(400px + 10%); // calc(400px + 10%)
@debug calc(400px / 2); // 200px
@debug min(100px, calc(1rem + 10%)); // min(100px, 1rem + 10%)
```

@tab SASS

```sass
@debug calc(400px + 10%)  // calc(400px + 10%)
@debug calc(400px / 2)  // 200px
@debug min(100px, calc(1rem + 10%) ; // min(100px, 1rem + 10%)
```

:::

В вычислениях используется специальный синтаксис, отличный от обычного SassScript. Это тот же синтаксис, что и CSS `calc()`, но с дополнительной возможностью использовать [переменные Sass](../variables/README.md) и вызывать [функции Sass](../modules/README.md). Это означает, что `/` всегда является оператором деления в вычислении!

::: tip Забавный факт
Аргументы вызова функции Sass используют обычный синтаксис Sass, а не специальный синтаксис вычислений!
:::

Вы также можете использовать [интерполяцию](../interpolation/README.md) в вычислениях. Однако, если вы это сделаете, ничто в круглых скобках, окружающих эту интерполяцию, не будет упрощено или проверено на тип, поэтому легко получить слишком подробный или даже недействительный CSS. Вместо того, чтобы писать `calc(10px + #{$var})`, просто напишите `calc(10px + $var)`!

## Упрощение

Sass упростит смежные операции в вычислениях, если они будут использовать единицы, которые можно комбинировать во время компиляции, такие как `1in + 10px` или `5s * 2`. Если возможно, он даже упростит все вычисления до одного числа - например, `clamp(0px, 30px, 20px)` вернет `20px`.

::: warning Осторожно!
Это означает, что выражение вычисления не обязательно всегда возвращает вычисление! Если вы пишете библиотеку Sass, вы всегда можете использовать функцию [`meta.type-of()`](../modules/meta#type-of), чтобы определить, с каким типом вы имеете дело.
:::

Расчеты также будут упрощены в рамках других расчетов. В частности, если `calc()` окажется внутри любого другого вычисления,
вызов функции будет удален, и он будет заменен простой старой операцией.

::: code-tabs#styles

@tab:active SCSS

```scss
$width: calc(400px + 10%);

.sidebar {
  width: $width;
  padding-left: calc($width / 4);
}




```

@tab SASS

```sass
$width: calc(400px + 10%)

.sidebar
  width: $width
  padding-left: calc($width / 4)
==
.sidebar {
  width: calc(400px + 10%);
  padding-left: calc((400px + 10%) / 4);
}
```

@tab CSS

```css
.sidebar {
  width: calc(400px + 10%);
  padding-left: calc($width / 4);
}






```

:::

## Операции

Вы не можете использовать вычисления с обычными операциями SassScript, такими как `+` и `*`. Если вы хотите написать некоторые математические функции, которые позволяют вычислениям, просто запишите их в своих собственных выражениях `calc()` - если им будет передана группа чисел с совместимыми единицами измерения, они также вернут простые числа, а если они повторно пройденные расчеты вернут расчеты.

Это ограничение введено, чтобы гарантировать, что если вычисления *не нужны*, они выдают ошибку как можно скорее. Вычисления нельзя использовать везде, где можно использовать простые числа: они не могут быть введены в идентификаторы CSS (например, `.item-#{$n}`), например, и их нельзя передать встроенным в Sass [математические функции](../modules/math). Зарезервировав операции SassScript для простых чисел, ясно, где именно разрешены вычисления, а где нет.

::: code-tabs#styles

@tab:active SCSS

```scss
$width: calc(100% + 10px);
@debug $width * 2; // Error!
@debug calc($width * 2); // calc((100% + 10px) * 2);
```

@tab SASS

```sass
$width: calc(100% + 10px);
@debug $width * 2; // Error!
@debug calc($width * 2); // calc((100% + 10px) * 2);
```

:::

## `min()` и `max()`

::: details <Status :data="{ feature: 'Special function syntax', dart: '>=1.11.0 <1.42.0', lib: false, ruby: false }" />

LibSass, Ruby Sass и версии Dart Sass до 1.11.0 *всегда* анализируют `min()` и `max()` как функции Sass. Чтобы создать простой вызов CSS `min()` или `max()` для этих реализаций, вы можете написать что-то вроде `unquote("min(#{$padding}, env(safe-area-inset-left))")` вместо.

Версии Dart Sass между 1.11.0 и 1.40.0 и между 1.40.1 и 1.42.0 анализируют функции `min()` и `max()` как [специальные функции](../syntax/special-functions), если они действительны в виде простого CSS, но анализируют их как функции Sass, если они содержат функции Sass, отличные от интерполяции, такие как переменные или вызовы функций.

Dart Sass 1.41.0 анализирует функции `min()` и `max()` как вычисления, но не позволяет комбинировать числа без единиц измерения с числами с единицами измерения. Это было обратно несовместимо с глобальными функциями `min()` и `max()`, поэтому поведение было отменено.
:::

CSS добавил поддержку [функций `min()` и `max()`](https://drafts.csswg.org/css-values-4/#calc-notation) в Значениях и Уровне Единиц 4, откуда они были быстро приняты Safari [для поддержки iPhoneX](https://webkit.org/blog/7929/designing-websites-for-iphone-x/). Но Sass поддерживал свои собственные функции [`min()`](../modules/math#min) и [`max()`](../modules/math#max) задолго до этого, и он должен был быть обратно совместимым со всеми существующими таблицами стилей. Это привело к необходимости особой синтаксической смекалки.

Если вызов функции `min()` или `max()` является допустимым расчетным выражением, он будет проанализирован как расчет. Но как только какая-либо часть вызова содержит функцию SassScript, которая не поддерживается в вычислениях, например [оператор по модулю](../operators/numeric), вместо этого она анализируется как вызов основной функции Sass `min()` или `max()`.

Поскольку вычисления в любом случае упрощаются до чисел, когда это возможно, единственное существенное отличие состоит в том, что функции Sass поддерживают только единицы, которые можно комбинировать во время сборки, поэтому `min(12px % 10, 10%)` выдаст ошибку.

::: warning Осторожно!
Другие вычисления не позволяют добавлять, вычитать или сравнивать числа без единиц измерения с числами с единицами измерения. `min()` и `max()` отличаются, однако: для обратной совместимости с глобальными функциями Sass `min()` и `max()`, которые позволяют смешивать единицы/без единиц измерения по историческим причинам, эти единицы могут быть смешанные, если они содержатся непосредственно в вычислении `min()` или `max()`.
:::

::: code-tabs#styles

@tab:active SCSS

```scss
$padding: 12px;

.post {
  // Since these max() calls are valid calculation expressions, they're
  // parsed as calculations.
  padding-left: max($padding, env(safe-area-inset-left));
  padding-right: max($padding, env(safe-area-inset-right));
}

.sidebar {
  // Since these use the SassScript-only modulo operator, they're parsed as
  // SassScript function calls.
  padding-left: max($padding % 10, 20px);
  padding-right: max($padding % 10, 20px);
}
```

@tab SASS

```sass
$padding: 12px

.post
  // Since these max() calls are valid calculation expressions, they're
  // parsed as calculations.
  padding-left: max($padding, env(safe-area-inset-left))
  padding-right: max($padding, env(safe-area-inset-right))


.sidebar
  // Since these use the SassScript-only modulo operator, they're parsed as
  // SassScript function calls.
  padding-left: max($padding % 10, 20px)
  padding-right: max($padding % 10, 20px)

```

@tab CSS

```css
.post {
  padding-left: max(12px, env(safe-area-inset-left));
  padding-right: max(12px, env(safe-area-inset-right));
}

.sidebar {
  padding-left: 20px;
  padding-right: 20px;
}






```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
