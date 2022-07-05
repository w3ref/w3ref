---
order: 1
prefix: $
title: el
---

# $el

`$el` is a magic property that can be used to retrieve the current DOM node.

```alpine
<button @click="$el.innerHTML = 'Hello World!'">Replace me with "Hello World!"</button>
```

```alpinejs
<div class="demo">
    <div x-data>
        <button @click="$el.textContent = 'Hello World!'">Replace me with "Hello World!"</button>
    </div>
</div>
```
