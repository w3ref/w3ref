import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,g as i}from"./app.674943b1.js";const l={},o=i(`<h1 id="x-modelable" tabindex="-1"><a class="header-anchor" href="#x-modelable" aria-hidden="true">#</a> x-modelable</h1><p><code>x-modelable</code> allows you to expose any Alpine property as the target of the <code>x-model</code> directive.</p><p>Here&#39;s a simple example of using <code>x-modelable</code> to expose a variable for binding with <code>x-model</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ number: 5 }&quot;&gt;
    &lt;div x-data=&quot;{ count: 0 }&quot; x-modelable=&quot;count&quot; x-model=&quot;number&quot;&gt;
        &lt;button @click=&quot;count++&quot;&gt;Increment&lt;/button&gt;
    &lt;/div&gt;

    Number: &lt;span x-text=&quot;number&quot;&gt;&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ number: 5 }&quot;&gt;
        &lt;div x-data=&quot;{ count: 0 }&quot; x-modelable=&quot;count&quot; x-model=&quot;number&quot;&gt;
            &lt;button @click=&quot;count++&quot;&gt;Increment&lt;/button&gt;
        &lt;/div&gt;

        Number: &lt;span x-text=&quot;number&quot;&gt;&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see the outer scope property &quot;number&quot; is now bound to the inner scope property &quot;count&quot;.</p><p>Typically this feature would be used in conjunction with a backend templating framework like Laravel Blade. It&#39;s useful for abstracting away Alpine components into backend templates and exposing state to the outside through <code>x-model</code> as if it were a native input.</p>`,7),a=[o];function d(u,s){return t(),n("div",null,a)}var m=e(l,[["render",d],["__file","modelable.html.vue"]]);export{m as default};
