import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as e,g as s}from"./app.674943b1.js";const t={},i=s(`<h1 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> Async</h1><p>Alpine is built to support asynchronous functions in most places it supports standard ones.</p><p>For example, let&#39;s say you have a simple function called <code>getLabel()</code> that you use as the input to an <code>x-text</code> directive:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getLabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World!&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;span x-text=&quot;getLabel()&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Because <code>getLabel</code> is synchronous, everything works as expected.</p><p>Now let&#39;s pretend that <code>getLabel</code> makes a network request to retrieve the label and can&#39;t return one instantaneously (asynchronous). By making <code>getLabel</code> an async function, you can call it from Alpine using JavaScript&#39;s <code>await</code> syntax.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getLabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/label&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;span x-text=&quot;await getLabel()&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Additionally, if you prefer calling methods in Alpine without the trailing parenthesis, you can leave them out and Alpine will detect that the provided function is async and handle it accordingly. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;span x-text=&quot;getLabel&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),l=[i];function o(c,p){return a(),e("div",null,l)}var u=n(t,[["render",o],["__file","async.html.vue"]]);export{u as default};