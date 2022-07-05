import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,g as n}from"./app.674943b1.js";const t={},a=n(`<h1 id="x-for" tabindex="-1"><a class="header-anchor" href="#x-for" aria-hidden="true">#</a> x-for</h1><p>Alpine&#39;s <code>x-for</code> directive allows you to create DOM elements by iterating through a list. Here&#39;s a simple example of using it to create a list of colors based on an array.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;ul x-data=&quot;{ colors: [&#39;Red&#39;, &#39;Orange&#39;, &#39;Yellow&#39;] }&quot;&gt;
    &lt;template x-for=&quot;color in colors&quot;&gt;
        &lt;li x-text=&quot;color&quot;&gt;&lt;/li&gt;
    &lt;/template&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;ul x-data=&quot;{ colors: [&#39;Red&#39;, &#39;Orange&#39;, &#39;Yellow&#39;] }&quot;&gt;
        &lt;template x-for=&quot;color in colors&quot;&gt;
            &lt;li x-text=&quot;color&quot;&gt;&lt;/li&gt;
        &lt;/template&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are two rules worth noting about <code>x-for</code>:</p><ul><li><code>x-for</code> MUST be declared on a <code>&lt;template&gt;</code> element</li><li>That <code>&lt;template&gt;</code> element MUST have only one root element</li></ul><p><a name="keys"></a></p><h2 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> Keys</h2><p>It is important to specify unique keys for each <code>x-for</code> iteration if you are going to be re-ordering items. Without dynamic keys, Alpine may have a hard time keeping track of what re-orders and will cause odd side-effects.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;ul x-data=&quot;{ colors: [
    { id: 1, label: &#39;Red&#39; },
    { id: 2, label: &#39;Orange&#39; },
    { id: 3, label: &#39;Yellow&#39; },
]}&quot;&gt;
    &lt;template x-for=&quot;color in colors&quot; :key=&quot;color.id&quot;&gt;
        &lt;li x-text=&quot;color.label&quot;&gt;&lt;/li&gt;
    &lt;/template&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now if the colors are added, removed, re-ordered, or their &quot;id&quot;s change, Alpine will preserve or destroy the iterated <code>&lt;li&gt;</code>elements accordingly.</p><p><a name="accessing-indexes"></a></p><h2 id="accessing-indexes" tabindex="-1"><a class="header-anchor" href="#accessing-indexes" aria-hidden="true">#</a> Accessing indexes</h2><p>If you need to access the index of each item in the iteration, you can do so using the <code>([item], [index]) in [items]</code> syntax like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;ul x-data=&quot;{ colors: [&#39;Red&#39;, &#39;Orange&#39;, &#39;Yellow&#39;] }&quot;&gt;
    &lt;template x-for=&quot;(color, index) in colors&quot;&gt;
        &lt;li&gt;
            &lt;span x-text=&quot;index + &#39;: &#39;&quot;&gt;&lt;/span&gt;
            &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;
        &lt;/li&gt;
    &lt;/template&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also access the index inside a dynamic <code>:key</code> expression.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;template x-for=&quot;(color, index) in colors&quot; :key=&quot;index&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="iterating-over-a-range"></a></p><h2 id="iterating-over-a-range" tabindex="-1"><a class="header-anchor" href="#iterating-over-a-range" aria-hidden="true">#</a> Iterating over a range</h2><p>If you need to simply loop <code>n</code> number of times, rather than iterate through an array, Alpine offers a short syntax.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;ul&gt;
    &lt;template x-for=&quot;i in 10&quot;&gt;
        &lt;li x-text=&quot;i&quot;&gt;&lt;/li&gt;
    &lt;/template&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>i</code> in this case can be named anything you like.</p>`,22),d=[a];function o(s,r){return i(),l("div",null,d)}var v=e(t,[["render",o],["__file","for.html.vue"]]);export{v as default};
