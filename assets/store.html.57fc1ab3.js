import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,g as s}from"./app.674943b1.js";const a={},l=s(`<h1 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> $store</h1><p>You can use <code>$store</code> to conveniently access global Alpine stores registered using <a href="./globals/alpine-store"><code>Alpine.store(...)</code></a>. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button x-data @click=&quot;$store.darkMode.toggle()&quot;&gt;Toggle Dark Mode&lt;/button&gt;

...

&lt;div x-data :class=&quot;$store.darkMode.on &amp;&amp; &#39;bg-black&#39;&quot;&gt;
    ...
&lt;/div&gt;


&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.store(&#39;darkMode&#39;, {
            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Given that we&#39;ve registered the <code>darkMode</code> store and set <code>on</code> to &quot;false&quot;, when the <code>&lt;button&gt;</code> is pressed, <code>on</code> will be &quot;true&quot; and the background color of the page will change to black.</p><p><a name="single-value-stores"></a></p><h2 id="single-value-stores" tabindex="-1"><a class="header-anchor" href="#single-value-stores" aria-hidden="true">#</a> Single-value stores</h2><p>If you don&#39;t need an entire object for a store, you can set and use any kind of data as a store.</p><p>Here&#39;s the example from above but using it more simply as a boolean value:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button x-data @click=&quot;$store.darkMode = ! $store.darkMode&quot;&gt;Toggle Dark Mode&lt;/button&gt;

...

&lt;div x-data :class=&quot;$store.darkMode &amp;&amp; &#39;bg-black&#39;&quot;&gt;
    ...
&lt;/div&gt;


&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.store(&#39;darkMode&#39;, false)
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./globals/alpine-store">\u2192 Read more about Alpine stores</a></p>`,10),d=[l];function t(r,o){return n(),i("div",null,d)}var u=e(a,[["render",t],["__file","store.html.vue"]]);export{u as default};
