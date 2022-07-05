import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,g as s}from"./app.674943b1.js";const a={},t=s(`<h1 id="alpine-store" tabindex="-1"><a class="header-anchor" href="#alpine-store" aria-hidden="true">#</a> Alpine.store</h1><p>Alpine offers global state management through the <code>Alpine.store()</code> API.</p><p><a name="registering-a-store"></a></p><h2 id="registering-a-store" tabindex="-1"><a class="header-anchor" href="#registering-a-store" aria-hidden="true">#</a> Registering A Store</h2><p>You can either define an Alpine store inside of an <code>alpine:init</code> listener (in the case of including Alpine via a <code>&lt;script&gt;</code> tag), OR you can define it before manually calling <code>Alpine.start()</code> (in the case of importing Alpine into a build):</p><p><strong>From a script tag:</strong></p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.store(&#39;darkMode&#39;, {
            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>From a bundle:</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Alpine <span class="token keyword">from</span> <span class="token string">&#39;alpinejs&#39;</span>

Alpine<span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token string">&#39;darkMode&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>on <span class="token operator">=</span> <span class="token operator">!</span> <span class="token keyword">this</span><span class="token punctuation">.</span>on
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

Alpine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="accessing stores"></a></p><h2 id="accessing-stores" tabindex="-1"><a class="header-anchor" href="#accessing-stores" aria-hidden="true">#</a> Accessing stores</h2><p>You can access data from any store within Alpine expressions using the <code>$store</code> magic property:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data :class=&quot;$store.darkMode.on &amp;&amp; &#39;bg-black&#39;&quot;&gt;...&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also modify properties within the store and everything that depends on those properties will automatically react. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button x-data @click=&quot;$store.darkMode.toggle()&quot;&gt;Toggle Dark Mode&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Additionally, you can access a store externally using <code>Alpine.store()</code> by omitting the second parameter like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;script&gt;
    Alpine.store(&#39;darkMode&#39;).toggle()
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="initializing-stores"></a></p><h2 id="initializing-stores" tabindex="-1"><a class="header-anchor" href="#initializing-stores" aria-hidden="true">#</a> Initializing stores</h2><p>If you provide <code>init()</code> method in an Alpine store, it will be executed right after the store is registered. This is useful for initializing any state inside the store with sensible starting values.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.store(&#39;darkMode&#39;, {
            init() {
                this.on = window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;).matches
            },

            on: false,

            toggle() {
                this.on = ! this.on
            }
        })
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the newly added <code>init()</code> method in the example above. With this addition, the <code>on</code> store variable will be set to the browser&#39;s color scheme preference before Alpine renders anything on the page.</p><p><a name="single-value-stores"></a></p><h2 id="single-value-stores" tabindex="-1"><a class="header-anchor" href="#single-value-stores" aria-hidden="true">#</a> Single-value stores</h2><p>If you don&#39;t need an entire object for a store, you can set and use any kind of data as a store.</p><p>Here&#39;s the example from above but using it more simply as a boolean value:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button x-data @click=&quot;$store.darkMode = ! $store.darkMode&quot;&gt;Toggle Dark Mode&lt;/button&gt;

...

&lt;div x-data :class=&quot;$store.darkMode &amp;&amp; &#39;bg-black&#39;&quot;&gt;
    ...
&lt;/div&gt;


&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.store(&#39;darkMode&#39;, false)
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),l=[t];function d(r,o){return n(),i("div",null,l)}var u=e(a,[["render",d],["__file","alpine-store.html.vue"]]);export{u as default};
