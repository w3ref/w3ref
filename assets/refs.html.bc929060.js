import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,g as i}from"./app.674943b1.js";const s={},l=i(`<h1 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h1><p><code>$refs</code> is a magic property that can be used to retrieve DOM elements marked with <code>x-ref</code> inside the component. This is useful when you need to manually manipulate DOM elements. It&#39;s often used as a more succinct, scoped, alternative to <code>document.querySelector</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button @click=&quot;$refs.text.remove()&quot;&gt;Remove Text&lt;/button&gt;

&lt;span x-ref=&quot;text&quot;&gt;Hello \u{1F44B}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data&gt;
        &lt;button @click=&quot;$refs.text.remove()&quot;&gt;Remove Text&lt;/button&gt;

        &lt;div class=&quot;pt-4&quot; x-ref=&quot;text&quot;&gt;Hello \u{1F44B}&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, when the <code>&lt;button&gt;</code> is pressed, the <code>&lt;span&gt;</code> will be removed.</p>`,5),d=[l];function a(o,r){return t(),n("div",null,d)}var v=e(s,[["render",a],["__file","refs.html.vue"]]);export{v as default};
