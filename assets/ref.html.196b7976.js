import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as i,g as l}from"./app.674943b1.js";const n={},s=l(`<h1 id="x-ref" tabindex="-1"><a class="header-anchor" href="#x-ref" aria-hidden="true">#</a> x-ref</h1><p><code>x-ref</code> in combination with <code>$refs</code> is a useful utility for easily accessing DOM elements directly. It&#39;s most useful as a replacement for APIs like <code>getElementById</code> and <code>querySelector</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button @click=&quot;$refs.text.remove()&quot;&gt;Remove Text&lt;/button&gt;

&lt;span x-ref=&quot;text&quot;&gt;Hello \u{1F44B}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data&gt;
        &lt;button @click=&quot;$refs.text.remove()&quot;&gt;Remove Text&lt;/button&gt;

        &lt;div class=&quot;pt-4&quot; x-ref=&quot;text&quot;&gt;Hello \u{1F44B}&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[s];function a(o,r){return t(),i("div",null,d)}var v=e(n,[["render",a],["__file","ref.html.vue"]]);export{v as default};
