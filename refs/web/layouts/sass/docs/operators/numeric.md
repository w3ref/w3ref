---
title: Числовые
category:
  - Sass
  - Операторы
  - Числовые
---

## Обзор

Sass поддерживает стандартный набор математических операторов для [чисел](../values/numbers). Они автоматически конвертируют между совместимыми единицами.

* `<expression> + <expression>` добавляет значение первого [выражения](../syntax/structure#expressions) ко второму.
* `<expression> - <expression>` вычитает значение первого [выражения](../syntax/structure#expressions) из второго.
* `<expression> * <expression>` умножает значение первого [выражения](../syntax/structure#expressions) на второе.
* `<expression> % <expression>` возвращает остаток от значения первого [выражения](../syntax/structure#expressions), деленный на второе. Это известно как [оператор *modulo*](https://en.wikipedia.org/wiki/Modulo_operation).

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 10s + 15s; // 25s
@debug 1in - 10px; // 0.8958333333in
@debug 5px * 3px; // 15px*px
@debug 1in % 9px; // 0.0625in
```

@tab Sass

```sass
@debug 10s + 15s  // 25s
@debug 1in - 10px  // 0.8958333333in
@debug 5px * 3px  // 15px*px
@debug 1in % 9px  // 0.0625in
```

:::

Безразмерные числа можно использовать с числами любой единицы.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 100px + 50; // 150px
@debug 4s * 10; // 40s
```

@tab Sass

```sass
@debug 100px + 50  // 150px
@debug 4s * 10  // 40s
```

:::

Числа с несовместимыми единицами измерения нельзя использовать с добавлением, вычитанием или по модулю.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug 100px + 10s;
//     ^^^^^^^^^^^
// Error: Incompatible units px and s.
```

@tab Sass

```sass
@debug 100px + 10s
//     ^^^^^^^^^^^
// Error: Incompatible units px and s.
```

:::

## Унарные операторы

Вы также можете писать `+` и `-` как унарные операторы, которые принимают только одно значение:

* `+<expression>` возвращает значение выражения, не изменяя его.
* `-<expression>` возвращает отрицательную версию значения выражения.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug +(5s + 7s); // 12s
@debug -(50px + 30px); // -80px
@debug -(10px - 15px); // 5px
```

@tab Sass

```sass
@debug +(5s + 7s)  // 12s
@debug -(50px + 30px)  // -80px
@debug -(10px - 15px)  // 5px
```

:::

::: warning Осторожно!
Поскольку `-` может относиться как к вычитанию, так и к унарному отрицанию, может возникнуть путаница, что есть что в списке, разделенном пробелами. На всякий случай:

* При вычитании всегда пишите пробелы с обеих сторон от символа `-`.
* Для отрицательного числа или унарного отрицания ставьте пробел перед знаком `-`, но не после него.
* Заключите унарное отрицание в круглые скобки, если оно находится в списке, разделенном пробелами.

Различные значения `-` в Sass имеют приоритет в следующем порядке:

1. `-` как часть идентификатора. Единственное исключение - юниты; Sass обычно позволяет использовать любой действительный идентификатор в качестве идентификатора, но единицы измерения не могут содержать дефис, за которым следует цифра.
2. `-` между выражением и буквальным числом без пробелов, которое анализируется как вычитание.
3. Символ `-` в начале буквального числа, которое анализируется как отрицательное число.
4. Символ `-` между двумя числами независимо от пробелов, который анализируется как вычитание.
5. Символ `-` перед значением, отличным от буквального числа, которое анализируется как унарное отрицание.

::: code-tabs#styles

@tab:active SCSS

```scss
@debug a-1; // a-1
@debug 5px-3px; // 2px
@debug 5-3; // 2
@debug 1 -2 3; // 1 -2 3

$number: 2;
@debug 1 -$number 3; // -1 3
@debug 1 (-$number) 3; // 1 -2 3
```

@tab Sass

```sass
@debug a-1  // a-1
@debug 5px-3px  // 2px
@debug 5-3  // 2
@debug 1 -2 3  // 1 -2 3

$number: 2
@debug 1 -$number 3  // -1 3
@debug 1 (-$number) 3  // 1 -2 3
```

:::

:::

## Деление

::: note <Status :data="{ feature: 'math.div()', dart: '1.33.0', lib: false, ruby: false }" />
:::

В отличие от других математических операций, деление в Sass выполняется с помощью функции [`math.div()`](../modules/math#div). Хотя многие языки программирования используют `/` в качестве оператора деления, в CSS `/` используется как разделитель (как в `font: 15px/32px` или `hsl(120 100% 50% / 0.8)`). Хотя Sass действительно поддерживает использование `/` в качестве оператора деления, это устарело и [будет удалено](../breaking-changes/slash-div) в будущей версии.

### Значения, разделенные косой чертой

На данный момент, хотя Sass по-прежнему поддерживает `/` как оператор деления, он должен иметь возможность устранять неоднозначность между `/` как разделителем и `/` как делением. Чтобы это работало, если два числа разделены символом `/`, Sass будет печатать результат как разделенный косой чертой, а не разделенный, если не выполняется одно из этих условий:

* Любое выражение не является буквальным числом.
* Результат сохраняется в переменной или возвращается функцией.
* Операция заключена в круглые скобки, если только эти скобки не находятся за пределами списка, содержащего операцию.
* Результат используется как часть другой операции (кроме `/`).

Вы можете использовать [`list.slash()`](../modules/list#slash) для принудительного использования `/` в качестве разделителя.

::: code-tabs#styles

@tab:active SCSS

```scss
@use "sass:list";

@debug 15px / 30px; // 15px/30px
@debug (10px + 5px) / 30px; // 0.5
@debug list.slash(10px + 5px, 30px); // 15px/30px

$result: 15px / 30px;
@debug $result; // 0.5

@function fifteen-divided-by-thirty() {
  @return 15px / 30px;
}
@debug fifteen-divided-by-thirty(); // 0.5

@debug (15px/30px); // 0.5
@debug (bold 15px/30px sans-serif); // bold 15px/30px sans-serif
@debug 15px/30px + 1; // 1.5
```

@tab Sass

```sass
@use "sass:list";

@debug 15px / 30px  // 15px/30px
@debug (10px + 5px) / 30px  // 0.5
@debug list.slash(10px + 5px, 30px)  // 15px/30px

$result: 15px / 30px
@debug $result  // 0.5

@function fifteen-divided-by-thirty()
  @return 15px / 30px

@debug fifteen-divided-by-thirty()  // 0.5

@debug (15px/30px)  // 0.5
@debug (bold 15px/30px sans-serif)  // bold 15px/30px sans-serif
@debug 15px/30px + 1  // 1.5
```

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

@tab Sass

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

@tab Sass

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

@tab Sass

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

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
