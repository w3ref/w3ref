import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,g as d}from"./app.674943b1.js";const t={},l=d(`<h1 id="alpine-bind" tabindex="-1"><a class="header-anchor" href="#alpine-bind" aria-hidden="true">#</a> Alpine.bind</h1><p><code>Alpine.bind(...)</code> provides a way to re-use <a href="./directives/bind#bind-directives"><code>x-bind</code></a> objects within your application.</p><p>Here&#39;s a simple example. Rather than binding attributes manually with Alpine:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button type=&quot;button&quot; @click=&quot;doSomething()&quot; :disabled=&quot;shouldDisable&quot;&gt;&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can bundle these attributes up into a reusable object and use <code>x-bind</code> to bind to that:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button x-bind=&quot;SomeButton&quot;&gt;&lt;/button&gt;

&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.bind(&#39;SomeButton&#39;, () =&gt; ({
            type: &#39;button&#39;,

            &#39;@click&#39;() {
                this.doSomething()
            },

            &#39;:disabled&#39;() {
                return this.shouldDisable
            },
        }))
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function s(r,c){return i(),n("div",null,a)}var b=e(t,[["render",s],["__file","alpine-bind.html.vue"]]);export{b as default};
