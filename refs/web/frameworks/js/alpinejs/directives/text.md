---
order: 6
title: text
---

# x-text

`x-text` sets the text content of an element to the result of a given expression.

Here's a basic example of using `x-text` to display a user's username.

```alpine
<div x-data="{ username: 'calebporzio' }">
    Username: <strong x-text="username"></strong>
</div>
```

```alpinejs
<div class="demo">
    <div x-data="{ username: 'calebporzio' }">
        Username: <strong x-text="username"></strong>
    </div>
</div>
```

Now the `<strong>` tag's inner text content will be set to "calebporzio".
