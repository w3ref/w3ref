---
title: Числа
category:
  - Sass
  - Значения
  - Числа
---

## Обзор

Числа в Sass состоят из двух компонентов: самого числа и его единиц. Например, в `16px` число равно `16`, а единица измерения `px`. В числах не может быть единиц измерения, а могут быть сложные единицы. Смотрите [единицы](#units) ниже для более подробной информации.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 100; // 100
@debug 0.8; // 0.8
@debug 16px; // 16px
@debug 5px * 2px; // 10px*px (read "square pixels")
```

@tab SASS

```sass
@debug 100  // 100
@debug 0.8  // 0.8
@debug 16px  // 16px
@debug 5px * 2px  // 10px*px (read "square pixels")
```

:::

Числа Sass поддерживают те же форматы, что и числа CSS, в том числе [научная нотация](https://en.wikipedia.org/wiki/Scientific_notation), которая записывается с помощью `e` между числом и его степенью 10. Поскольку поддержка научной нотации в браузерах исторически была неоднородной, Sass всегда компилируется это до полностью развернутых чисел.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 5.2e3; // 5200
@debug 6e-2; // 0.06
```

@tab SASS

```sass
@debug 5.2e3  // 5200
@debug 6e-2  // 0.06
```

:::

::: warning Осторожно!
Sass не делает различий между целыми и десятичными числами, поэтому, например, `math.div(5, 2)` возвращает `2.5`, а не `2`. Это то же поведение, что и JavaScript, но отличается от многих других языков программирования.
:::

## Единицы

Sass имеет мощную поддержку для управления юнитами в зависимости от того, как работают [вычисления реальных юнитов](https://en.wikipedia.org/wiki/Unit_of_measurement#Calculations_with_units_of_measurement). Когда два числа умножаются, их единицы также умножаются. Когда одно число делится на другое, результат берет единицы числителя из первого числа и его единицы знаменателя из второго. Число может иметь любое количество единиц в числителе и/или знаменателе.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 4px * 6px; // 24px*px (read "square pixels")
@debug math.div(5px, 2s); // 2.5px/s (read "pixels per second")

// 3.125px*deg/s*em (read "pixel-degrees per second-em")
@debug 5px * math.div(math.div(30deg, 2s), 24em); 

$degrees-per-second: math.div(20deg, 1s);
@debug $degrees-per-second; // 20deg/s
@debug math.div(1, $degrees-per-second); // 0.05s/deg
```

@tab SASS

```sass
@debug 4px * 6px  // 24px*px (read "square pixels")
@debug math.div(5px, 2s)  // 2.5px/s (read "pixels per second")

// 3.125px*deg/s*em (read "pixel-degrees per second-em")
@debug 5px * math.div(math.div(30deg, 2s), 24em)  

$degrees-per-second: math.div(20deg, 1s) 
@debug $degrees-per-second  // 20deg/s
@debug math.div(1, $degrees-per-second)  // 0.05s/deg
```

:::

::: warning Осторожно!
Поскольку CSS не поддерживает сложные единицы измерения, такие как квадратные пиксели, использование числа со сложными единицами измерения в качестве [значения свойства](../style-rules/declarations) приведет к ошибке. Однако это замаскированная особенность; если у вас не получается подходящая единица измерения, это обычно означает, что что-то не так с вашими расчетами! И помните, вы всегда можете использовать [правило `@debug`](../at-rules/debug), чтобы проверить единицы любой переменной или [выражение](../syntax/structure#expressions).
:::

Sass будет автоматически конвертировать между совместимыми модулями, хотя, какой модуль он выберет для результата, зависит от того, какую реализацию Sass вы используете. Если вы попытаетесь объединить несовместимые модули, такие как `1in + 1em`, Sass выдаст ошибку.

::: code-tabs#styles

@tab:active SCSS

```scss
// CSS defines one inch as 96 pixels.
@debug 1in + 6px; // 102px or 1.0625in

@debug 1in + 1s;
//     ^^^^^^^^
// Error: Incompatible units s and in.
```

@tab SASS

```sass
// CSS defines one inch as 96 pixels.
@debug 1in + 6px  // 102px or 1.0625in

@debug 1in + 1s
//     ^^^^^^^^
// Error: Incompatible units s and in.
```

:::

Как и в реальных расчетах единиц измерения, если числитель содержит единицы, совместимые с единицами знаменателя (например, `math.div(96px, 1in)`), они будут отменены. Это упрощает определение отношения, которое можно использовать для преобразования единиц. В приведенном ниже примере мы устанавливаем желаемую скорость равной одной секунде на 50 пикселей, а затем умножаем ее на количество пикселей, охватываемых переходом, чтобы получить необходимое время.

::: code-tabs#styles

@tab:active SCSS

```scss
$transition-speed: math.div(1s, 50px);

@mixin move($left-start, $left-stop) {
  position: absolute;
  left: $left-start;
  transition: left ($left-stop - $left-start) * $transition-speed;

  &:hover {
    left: $left-stop;
  }
}

.slider {
  @include move(10px, 120px);
}
```

@tab SASS

```sass
$transition-speed: math.div(1s, 50px)

@mixin move($left-start, $left-stop)
  position: absolute
  left: $left-start
  transition: left ($left-stop - $left-start) * $transition-speed

  &:hover
    left: $left-stop



.slider
  @include move(10px, 120px)

```

@tab CSS

```css
.slider {
  position: absolute;
  left: 10px;
  transition: left 2.2s;
}
.slider:hover {
  left: 120px;
}







```

:::

::: warning Осторожно!
Если ваша арифметика дает неправильную единицу, вам, вероятно, нужно проверить свои математические данные. Возможно, вы отказываетесь от единиц для того количества, в котором они должны быть! Чистота модулей позволяет Sass выдавать полезные ошибки, когда что-то не так.

Особенно следует избегать использования интерполяции типа `#{$number}px`. На самом деле это не создает числа! Он создает [строку без кавычек](../values/strings#unquoted), которая *выглядит* как число, но не будет работать ни с какими [числовыми операциями](../operators/numeric) или [функциями](../modules/math). Попробуйте сделать вашу математическую единицу чистой, чтобы в `$number` уже была единица `px`, или напишите `$number * 1px`.
:::

::: warning Осторожно!
Проценты в Sass работают так же, как и все остальные единицы. Они *не* взаимозаменяемы с десятичными знаками, потому что в CSS десятичные дроби и проценты означают разные вещи. Например, `50%` - это число, единицей измерения которого является `%`, и Sass считает, что оно отличается от числа `0.5`.

Вы можете преобразовывать десятичные дроби в проценты, используя арифметику единиц измерения. `math.div($percentage, 100%)` вернет соответствующее десятичное число, а `$decimal * 100%` вернет соответствующий процент. Вы также можете использовать [функцию `math.percentage()`](../modules/math#percentage) как более явный способ записи `$decimal * 100%`.
:::

## Точность

<% impl_status dart: true, libsass: false, ruby: '3.5.0', feature: '10 Digit Default' do %>
  В LibSass и более ранних версиях Ruby Sass по умолчанию используется 5-значная числовая точность, но можно настроить использование другого числа.
  Рекомендуется, чтобы пользователи настраивали их на 10 цифр для большей точности и прямой совместимости.
<% end %>

Числа Sass поддерживают до 10 знаков точности после десятичной точки. Это означает несколько разных вещей:

* Только первые десять цифр числа после десятичной точки будут включены в сгенерированный CSS.
* Операции типа [`==`](../operators/equality) и [`>=`](../operators/relational) будут считать два числа эквивалентными, если они совпадают до десятой цифры после десятичной точки.
* Если число меньше `0.0000000001` от целого числа, оно считается целым числом для таких функций, как [`list.nth()`](../modules/list#nth), которые требуют целочисленных аргументов.

::: details <Status :data="{ feature: '10 Digit Default', dart: true, lib: false, ruby: '3.5.0' }" />

В LibSass и более ранних версиях Ruby Sass по умолчанию используется 5-значная числовая точность, но можно настроить использование другого числа. Рекомендуется, чтобы пользователи настраивали их на 10 цифр для большей точности и прямой совместимости.
:::

Числа Sass поддерживают до 10 знаков точности после десятичной точки. Это означает несколько разных вещей:

* Только первые десять цифр числа после десятичной точки будут включены в сгенерированный CSS.
* Операции типа [`==`](../operators/equality) и [`>=`](../operators/relational) будут считать два числа эквивалентными, если они совпадают до десятой цифры после десятичной точки.
* Если число меньше `0.0000000001` от целого числа, оно считается целым числом для таких функций, как [`list.nth()`](../modules/list#nth), которые требуют целочисленных аргументов.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 0.012345678912345; // 0.0123456789
@debug 0.01234567891 == 0.01234567899; // true
@debug 1.00000000009; // 1
@debug 0.99999999991; // 1
```

@tab SASS

```sass
@debug 0.012345678912345; // 0.0123456789
@debug 0.01234567891 == 0.01234567899; // true
@debug 1.00000000009; // 1
@debug 0.99999999991; // 1
```

:::

::: tip Забавный факт
Числа округляются до 10 цифр точности *отложено*, когда они используются там, где точность важна. Это означает, что математические функции будут внутренне работать с полным числовым значением, чтобы избежать накопления дополнительных ошибок округления.
:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
