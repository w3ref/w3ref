---
title: Alpine.js
home: true
icon: brands fa-alpine
heroImage: /images/refs/web/frameworks/js/alpinejs/alpine_long.svg
heroText: Simple. Lightweight. Powerful as hell.
tagline: Your new, lightweight, JavaScript framework.

actions:
  - text: Start Here 🗂️
    link: start-here/
    type: primary
---

```js
<script src="//unpkg.com/alpinejs" defer></script>
 
<div x-data="{ open: false }">
  <button @click="open = true">Expand</button>

  <span x-show="open">
    Content...
  </span>
</div>
```

Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going.

Alpine is a collection of 15 attributes, 6 properties, and 2 methods.

There is no better way to get a feel for what Alpine is and what it can do, than by seeing it for yourself:

::: tabs#settings

@tab 15 Attributes

### Attributes

#### x-data

Declare a new Alpine component and its data for a block of HTML

```js
<div x-data="{ open: false }">
    ...
</div>
```

#### x-bind

Dynamically set HTML attributes on an element

```js
<div x-bind:class="! open ? 'hidden' : ''">
  ...
</div>
```

#### 

```js
test
```

#### x-on

Listen for browser events on an element

```js
<button x-on:click="open = ! open">
  Toggle
</button>
```

#### x-text

Set the text content of an element

```js
<div>
  Copyright ©
 
  <span x-text="new Date().getFullYear()"></span>
</div>
```

#### x-html

Set the inner HTML of an element

```js
<div x-html="(await axios.get('/some/html/partial')).data">
  ...
</div>
```

#### x-model

Synchronize a piece of data with an input element

```js
<div x-show="open">
  ...
</div>
```

#### x-transition

Transition an element in and out using CSS transitions

```js
<div x-show="open" x-transition>
  ...
</div>
```

#### x-for

Repeat a block of HTML based on a data set

```js
<template x-for="post in posts">
  <h2 x-text="post.title"></h2>
</template>
```

#### x-if

Conditionally add/remove a block of HTML from the page entirely.

```js
<template x-if="open">
  <div>...</div>
</template>
```

#### x-init

Run code when an element is initialized by Alpine

```js
<div x-init="date = new Date()"></div>
```

#### x-effect

Execute a script each time one of its dependancies change

```js
<div x-effect="console.log('Count is '+count)"></div>
```

#### x-ref

Reference elements directly by their specified keys using the $refs magic property

```js
<input type="text" x-ref="content">
 
<button x-on:click="navigator.clipboard.writeText($refs.content.value)">
  Copy
</button>
```

#### x-cloak

Hide a block of HTML until after Alpine is finished initializing its contents

```js
<div x-cloak>
  ...
</div>
```

#### x-ignore

Prevent a block of HTML from being initialized by Alpine

```js
<div x-ignore>
  ...
</div>
```

@tab 6 Properties

### Properties

#### $store

Access a global store registered using Alpine.store(...)

```js
<h1 x-text="$store.site.title"></h1>
```

#### $el

Reference the current DOM element

```js
<div x-init="new Pikaday($el)"></div>
```

#### $dispatch

Dispatch a custom browser event from the current element

```js
<div x-on:notify="...">
  <button x-on:click="$dispatch('notify')">...</button>
</div>
```

#### $watch

Watch a piece of data and run the provided callback anytime it changes

```js
<div x-init="$watch('count', value => {
  console.log('count is ' + value)
})">...</div>
```

#### $refs

Reference an element by key (specified using x-ref)

```js
<div x-init="$refs.button.remove()">
  <button x-ref="button">Remove Me</button>
</div>
```

#### $nextTick

Wait until the next "tick" (browser paint) to run a bit of code

```js
<div
  x-text="count"
  x-text="$nextTick(() => {"
    console.log('count is ' + $el.textContent)
  })
>...</div>
```

@tab 2 Methods

### Methods

#### Alpine.data

Reuse a data object and reference it using `x-data`

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

Declare a piece of global, reactive, data that can be accessed from anywhere using `$store`

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
