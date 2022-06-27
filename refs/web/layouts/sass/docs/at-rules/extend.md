---
title: "@extend"
category:
  - Sass
  - At-Правила
  - extend
---

## Обзор

При разработке страницы часто возникают случаи, когда один класс должен иметь все стили другого класса, а также свои собственные специфические стили. Например, [методология БЭМ](http://getbem.com/naming/) поощряет классы-модификаторы, которые относятся к тем же элементам, что и классы блоков или элементов. Но это может создать загроможденный HTML, склонный к ошибкам из-за того, что забыли включить оба класса, и может внести несемантические проблемы стиля в вашу разметку.

```html
<div class="error error--serious">
  Oh no! You've been hacked!
</div>
```

```css
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.error--serious {
  border-width: 3px;
}
```

Правило Sass `@extend` решает эту проблему. Он написан `@extend <selector>` и сообщает Sass, что один селектор должен наследовать стили другого.

::: code-tabs#styles

@tab:active SCSS

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```

@tab Sass

```sass
.error
  border: 1px #f00
  background-color: #fdd

  &--serious
    @extend .error
    border-width: 3px


```

@tab CSS

```css
.error, .error--serious {
  border: 1px #f00;
  background-color: #fdd;
}
.error--serious {
  border-width: 3px;
}


```

:::

Когда один класс расширяет другой, Sass стилизует все элементы, которые соответствуют расширителю, как если бы они также соответствовали расширяемому классу. Когда один селектор класса расширяет другой, он работает точно так же, как если бы вы добавили расширенный класс к каждому элементу в вашем HTML, который уже имел расширяющийся класс. Вы можете просто написать `class="error--serious"`, и Sass позаботится о том, чтобы он был оформлен так, как если бы он также имел `class="error"`.

Конечно, селекторы используются не только сами по себе в правилах стиля. Sass знает, что нужно расширять *везде*, где используется селектор. Это гарантирует, что ваши элементы будут стилизованы точно так, как если бы они соответствовали расширенному селектору.

::: code-tabs#styles

@tab:active SCSS

```scss
.error:hover {
  background-color: #fee;
}

.error--serious {
  @extend .error;
  border-width: 3px;
}
```

@tab Sass

```sass
.error:hover
  background-color: #fee


.error--serious
  @extend .error
  border-width: 3px

```

@tab CSS

```css
.error:hover, .error--serious:hover {
  background-color: #fee;
}

.error--serious {
  border-width: 3px;
}

```

:::

::: warning Осторожно!
Расширения разрешаются после компиляции остальной части вашей таблицы стилей. В частности, это происходит после разрешения [родительских селекторов](../style-rules/parent-selector). Это означает, что если вы используете `@extend .error`, это не повлияет на внутренний селектор в `.error { &__icon { ... } }`. Это также означает, что [родительские селекторы в SassScript](../style-rules/parent-selector#in-sassscript) не могут видеть результаты расширения.
:::

## Как это работает

В отличие от [миксин](./mixin), которые копируют стили в текущее правило стиля, `@extend` обновляет правила стиля, содержащие расширенный селектор, так что они также содержат расширяющий селектор. При расширении селекторов Sass выполняет *интеллектуальную унификацию*:

* Он никогда не генерирует селекторы вроде `#main#footer`, которые не могут соответствовать никаким элементам.
* Это гарантирует, что сложные селекторы чередуются, так что они работают независимо от того, в каком порядке вложены элементы HTML.
* Он максимально сокращает избыточные селекторы, при этом гарантируя, что специфичность больше или равна специфичности расширителя.
* Он знает, когда один селектор совпадает со всем, что делает другой, и может комбинировать их вместе.
* Он разумно обрабатывает [комбинаторы](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators), [универсальные селекторы](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) и [псевдоклассы, содержащие селекторы](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

::: code-tabs#styles

@tab:active SCSS

```scss
.content nav.sidebar {
  @extend .info;
}

// This won't be extended, because `p` is incompatible with `nav`.
p.info {
  background-color: #dee9fc;
}

// There's no way to know whether `<div class="guide">` will be inside or
// outside `<div class="content">`, so Sass generates both to be safe.
.guide .info {
  border: 1px solid rgba(#000, 0.8);
  border-radius: 2px;
}

// Sass knows that every element matching "main.content" also matches ".content"
// and avoids generating unnecessary interleaved selectors.
main.content .info {
  font-size: 0.8em;
}
```

@tab Sass

```sass
.content nav.sidebar
  @extend .info


// This won't be extended, because `p` is incompatible with `nav`.
p.info
  background-color: #dee9fc


// There's no way to know whether `<div class="guide">` will be inside or
// outside `<div class="content">`, so Sass generates both to be safe.
.guide .info
  border: 1px solid rgba(#000, 0.8)
  border-radius: 2px


// Sass knows that every element matching "main.content" also matches ".content"
// and avoids generating unnecessary interleaved selectors.
main.content .info
  font-size: 0.8em

```

@tab CSS

```css
p.info {
  background-color: #dee9fc;
}

.guide .info, .guide .content nav.sidebar, .content .guide nav.sidebar {
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 2px;
}

main.content .info, main.content nav.sidebar {
  font-size: 0.8em;
}









```

:::

::: tip Забавный факт
Вы можете напрямую получить доступ к интеллектуальной унификации Sass, используя [функции выбора](../modules/selector! [Функция `selector.unify()`](../modules/selector#unify) возвращает селектор, который соответствует пересечению двух селекторов, в то время как [функция `selector.extend()`](../modules/selector#extend) работает так же, как `@extend`, но с одним селектором.
:::

::: warning Осторожно!
Поскольку `@extend` обновляет правила стиля, которые содержат расширенный селектор, их стили имеют приоритет в [каскаде](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) в зависимости от того, где появляются правила стиля расширенного селектора, *а не* в зависимости от того, где появляется `@extend`. Это может сбивать с толку, но помните: это тот же приоритет, который имели бы эти правила, если бы вы добавили расширенный класс в свой HTML!
:::

## Селекторы заполнителей

Иногда вы хотите написать правило стиля, которое *только* предназначено для расширения. В этом случае вы можете использовать [селекторы-заполнители](../style-rules/placeholder-selectors), которые выглядят как селекторы классов, начинающиеся с `%` вместо `.`. Любые селекторы, которые включают заполнители, не включаются в вывод CSS, но расширяют их.

::: code-tabs#styles

@tab:active SCSS

```scss
.alert:hover, %strong-alert {
  font-weight: bold;
}

%strong-alert:hover {
  color: red;
}
```

@tab Sass

```sass
.alert:hover, %strong-alert
  font-weight: bold


%strong-alert:hover 
  color: red

```

@tab CSS

```css
.alert:hover {
  font-weight: bold;
}




```

:::

### Частные заполнители

Как и [участники модуля](./use#private-members), селектор-заполнитель можно пометить как частный, начав его имя с `-` или `_`. Селектор частного заполнителя может быть расширен только внутри таблицы стилей, которая его определяет. Для любых других таблиц стилей это будет выглядеть так, как будто этого селектора не существует.

## Область расширения

Когда одна таблица стилей расширяет селектор, это расширение будет влиять только на правила стиля, написанные в *восходящих* модулях, то есть на модули, которые загружаются этой таблицей стилей с помощью [правила `@use`](./use) или [правилоа `@forward`](./forward), модули, загруженные *этими* модулями, и так далее. Это помогает сделать ваши правила `@extend` более предсказуемыми, гарантируя, что они влияют только на стили, о которых вы знали, когда их писали.

::: warning Осторожно!
Расширения вообще не имеют области видимости, если вы используете [правило `@import`](./import). Они не только повлияют на каждую импортируемую вами таблицу стилей, но и повлияют на каждую таблицу стилей, которая импортирует вашу таблицу стилей, все остальное, что эти таблицы стилей импортируют, и так далее. Без `@use`, расширения будут *глобальными*.
:::

## Обязательные и необязательные расширения

Обычно, если `@extend` не соответствует ни одному селектору в таблице стилей, Sass выдаст ошибку. Это помогает защитить от опечаток или переименования селектора без переименования селекторов, которые от него наследуются. Расширения, требующие наличия расширенного селектора, являются *обязательными*.

Однако это не всегда может быть тем, что вам нужно. Если вы хотите, чтобы `@extend` не выполнял никаких действий, если расширенный селектор не существует, просто добавьте в конец `!optional`.

## Расширения или Миксины?

Расширения и [примеси](./mixin) - это способы инкапсуляции и повторного использования стилей в Sass, что, естественно, поднимает вопрос о том, когда какой из них использовать. Миксины, очевидно, необходимы, когда вам нужно настроить стили с помощью [аргументов](./mixin#arguments), но что, если они всего лишь фрагменты стилей?

Как показывает опыт, расширения - лучший вариант, когда вы выражаете отношения между семантическими классами (или другими семантическими селекторами). Поскольку элемент с классом `.error--serious` *является* ошибкой, для него имеет смысл расширить `.error`. Но для несемантических коллекций стилей написание миксина может избежать каскадных головных болей и упростить настройку в дальнейшем.

::: tip Забавный факт
Большинство веб-серверов сжимают обслуживаемый ими CSS, используя алгоритм, который очень хорошо обрабатывает повторяющиеся фрагменты идентичного текста. Это означает, что, хотя миксины могут создавать больше CSS, чем расширять, они, вероятно, не существенно увеличат объем, необходимый вашим пользователям для загрузки. Так что выбирайте ту функцию, которая больше всего подходит для вашего варианта использования, а не ту, которая генерирует меньше всего CSS!

[gzip]: https://en.wikipedia.org/wiki/Gzip
:::

## Ограничения

### Запрещенные селекторы

::: details <Status :data="{ feature: false, dart: true, lib: false, ruby: false }" />

LibSass и Ruby Sass в настоящее время позволяют расширять составные селекторы, такие как `.message.info`. Однако это поведение не соответствует определению `@extend`: вместо стилизованных элементов, которые соответствуют расширяющему селектору, как если бы он имел `class="message info"`, на который бы повлияли правила стиля, которые включали либо `.message` *или* `.info`, он стилизовал их только с помощью правил, включающих как `.message` *и* `info`.

Для того чтобы определение `@extend` было прямым и понятным, а реализация была чистой и эффективной, такое поведение теперь устарело и будет удалено из будущих версий.

Смотрите [страницу критических изменений](../breaking-changes/extend-compound) для получения более подробной информации.
:::

Только *простые селекторы* - отдельные селекторы, такие как `.info` или `a` могут быть расширены. Если бы `.message.info` мог быть расширен, определение `@extend` говорит, что элементы, соответствующие расширителю, будут иметь такой стиль, как если бы они соответствовали `.message.info`. Это то же самое, что и сопоставление `.message` и `.info`, поэтому писать это вместо `@extend .message, .info` не принесет никакой пользы.

Точно так же, если бы `.main .info` можно было расширить, он бы делал (почти) то же самое, что и расширение `.info` самостоятельно. Тонкие различия не стоят того, чтобы выглядеть так, будто он делает что-то существенно другое, так что это тоже недопустимо.

::: code-tabs#styles

@tab:active SCSS

```scss
.alert {
  @extend .message.info;
  //      ^^^^^^^^^^^^^
  // Error: Write @extend .message, .info instead.

  @extend .main .info;
  //      ^^^^^^^^^^^
  // Error: write @extend .info instead.
}
```

@tab Sass

```sass
.alert
  @extend .message.info
  //      ^^^^^^^^^^^^^
  // Error: Write @extend .message, .info instead.

  @extend .main .info
  //      ^^^^^^^^^^^
  // Error: write @extend .info instead.

```

:::

### HTML-эвристика

Когда `@extend` [чередует сложные селекторы](#how-it-works), он не генерирует все возможные комбинации селекторов предков. Многие из селекторов, которые он мог бы сгенерировать, вряд ли действительно будут соответствовать реальному HTML, и создание их всех сделало бы таблицы стилей слишком большими для очень небольшой реальной ценности. Вместо этого он использует [эвристику](https://en.wikipedia.org/wiki/Heuristic): он предполагает, что предки каждого селектора будут самодостаточными, без чередования с предками других селекторов.

::: code-tabs#styles

@tab:active SCSS

```scss
header .warning li {
  font-weight: bold;
}

aside .notice dd {
  // Sass doesn't generate CSS to match the <dd> in
  //
  // <header>
  //   <aside>
  //     <div class="warning">
  //       <div class="notice">
  //         <dd>...</dd>
  //       </div>
  //     </div>
  //   </aside>
  // </header>
  //
  // because matching all elements like that would require us to generate nine
  // new selectors instead of just two.
  @extend li;
}
```

@tab Sass

```sass
header .warning li
  font-weight: bold


aside .notice dd
  // Sass doesn't generate CSS to match the <dd> in
  //
  // <header>
  //   <aside>
  //     <div class="warning">
  //       <div class="notice">
  //         <dd>...</dd>
  //       </div>
  //     </div>
  //   </aside>
  // </header>
  //
  // because matching all elements like that would require us to generate nine
  // new selectors instead of just two.
  @extend li

```

@tab CSS

```css
header .warning li, header .warning aside .notice dd, aside .notice header .warning dd {
  font-weight: bold;
}


















```

:::

### Расширить в `@media`

Хотя `@extend` разрешен в [`@media` и других at-правилах CSS](./css), не разрешено расширять селекторы, которые появляются вне его at-правила. Это связано с тем, что расширяемый селектор применяется только в пределах данного медиа-контекста, и нет способа убедиться, что ограничение сохраняется в сгенерированном селекторе без дублирования всего правила стиля.

::: code-tabs#styles

@tab:active SCSS

```scss
@media screen and (max-width: 600px) {
  .error--serious {
    @extend .error;
    //      ^^^^^^
    // Error: ".error" was extended in @media, but used outside it.
  }
}

.error {
  border: 1px #f00;
  background-color: #fdd;
}
```

@tab Sass

```sass
@media screen and (max-width: 600px)
  .error--serious
    @extend .error
    //      ^^^^^^
    // Error: ".error" was extended in @media, but used outside it.



.error
  border: 1px #f00
  background-color: #fdd

```

:::

<script setup>
import Status from "@components/refs/web/layouts/sass/Status.vue";
</script>
