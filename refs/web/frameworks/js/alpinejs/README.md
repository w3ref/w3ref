---
title: Alpine.js
home: true
icon: brands fa-alpine
heroImage: /images/refs/web/frameworks/js/alpinejs/alpine_long.svg
heroText: Простой. Легкий. Мощный, как ад.
tagline: Ваш новый легкий JavaScript-фреймворк.

actions:
  - text: Начните здесь 🗂️
    link: start-here/
    type: primary
---

```js
<script src="//unpkg.com/alpinejs" defer></script>
 
<div x-data="{ open: false }">
  <button @click="open = true">Развернуть</button>

  <span x-show="open">
    Контент...
  </span>
</div>
```

Alpine — это надежный минималистичный инструмент для компоновки поведения непосредственно в вашей разметке. Думайте об этом как о jQuery для современной сети. Вставьте тег script и приступайте.

Alpine — это набор из 15 атрибутов, 6 свойств и 2 методов.

Нет лучшего способа понять, что такое Alpine и на что он способен, чем увидеть это своими глазами:

::: tabs#settings

@tab 15 Атрибутов

### Атрибуты

#### x-data

Объявить новый компонент Alpine и его данные для блока HTML

```js
<div x-data="{ open: false }">
    ...
</div>
```

#### x-bind

Динамически устанавливать атрибуты HTML для элемента

```js
<div x-bind:class="! open ? 'hidden' : ''">
  ...
</div>
```

#### x-on

Прослушивание событий браузера для элемента

```js
<button x-on:click="open = ! open">
  Переключить
</button>
```

#### x-text

Установить текстовое содержимое элемента

```js
<div>
  Авторские права ©
 
  <span x-text="new Date().getFullYear()"></span>
</div>
```

#### x-html

Установить внутренний HTML элемента

```js
<div x-html="(await axios.get('/some/html/partial')).data">
  ...
</div>
```

#### x-model

Синхронизируйте часть данных с элементом ввода

```js
<div x-show="open">
  ...
</div>
```

#### x-transition

Переход элемента внутрь и наружу с помощью переходов CSS

```js
<div x-show="open" x-transition>
  ...
</div>
```

#### x-for

Повтор блока HTML на основе набора данных

```js
<template x-for="post in posts">
  <h2 x-text="post.title"></h2>
</template>
```

#### x-if

Условно добавить/удалить блок HTML со страницы целиком

```js
<template x-if="open">
  <div>...</div>
</template>
```

#### x-init

Запуск кода, когда элемент инициализируется Alpine

```js
<div x-init="date = new Date()"></div>
```

#### x-effect

Выполнять скрипт каждый раз, когда меняется одна из его зависимостей

```js
<div x-effect="console.log('Count is '+count)"></div>
```

#### x-ref

Ссылайтесь на элементы напрямую по их указанным ключам, используя магическое свойство $refs

```js
<input type="text" x-ref="content">
 
<button x-on:click="navigator.clipboard.writeText($refs.content.value)">
  Copy
</button>
```

#### x-cloak

Скрыть блок HTML до тех пор, пока Alpine не завершит инициализацию его содержимого

```js
<div x-cloak>
  ...
</div>
```

#### x-ignore

Предотвратить инициализацию блока HTML Alpine

```js
<div x-ignore>
  ...
</div>
```

@tab 6 Свойств

### Свойства

#### $store

Доступ к глобальному стору, зарегистрированному с помощью Alpine.store(...)

```js
<h1 x-text="$store.site.title"></h1>
```

#### $el

Ссылка на текущий элемент DOM

```js
<div x-init="new Pikaday($el)"></div>
```

#### $dispatch

Отправка пользовательского события браузера из текущего элемента

```js
<div x-on:notify="...">
  <button x-on:click="$dispatch('notify')">...</button>
</div>
```

#### $watch

Наблюдайте за фрагментом данных и запускайте предоставленный обратный вызов в любое время, когда он изменяется

```js
<div x-init="$watch('count', value => {
  console.log('count is ' + value)
})">...</div>
```

#### $refs

Ссылка на элемент по ключу (указывается с помощью x-ref)

```js
<div x-init="$refs.button.remove()">
  <button x-ref="button">Remove Me</button>
</div>
```

#### $nextTick

Дождитесь следующего "тика" (отрисовка браузера), чтобы выполнить часть кода

```js
<div
  x-text="count"
  x-text="$nextTick(() => {"
    console.log('count is ' + $el.textContent)
  })
>...</div>
```

@tab 2 Метода

### Методы

#### Alpine.data

Повторно используйте объект данных и ссылайтесь на него с помощью `x-data`

```js
<div x-data="dropdown">
  ...
</div>
 
...
 
Alpine.data('dropdown', () => ({
  open: false,
 
  toggle() { 
    this.open = ! this.open
  }
}))
```

#### Alpine.store

Объявить часть глобальных реактивных данных, к которым можно получить доступ из любого места, используя `$store`

```js
<button @click="$store.notifications.notify('...')">
  Notify
</button>
 
...
 
Alpine.store('notifications', {
  items: [],
 
  notify(message) { 
    this.items.push(message)
  }
})
```

:::
