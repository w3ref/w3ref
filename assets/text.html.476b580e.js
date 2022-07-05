import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as n,g as s}from"./app.674943b1.js";const a={},i=s(`<h1 id="x-text" tabindex="-1"><a class="header-anchor" href="#x-text" aria-hidden="true">#</a> x-text</h1><p><code>x-text</code> sets the text content of an element to the result of a given expression.</p><p>Here&#39;s a basic example of using <code>x-text</code> to display a user&#39;s username.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ username: &#39;calebporzio&#39; }&quot;&gt;
    Username: &lt;strong x-text=&quot;username&quot;&gt;&lt;/strong&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ username: &#39;calebporzio&#39; }&quot;&gt;
        Username: &lt;strong x-text=&quot;username&quot;&gt;&lt;/strong&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now the <code>&lt;strong&gt;</code> tag&#39;s inner text content will be set to &quot;calebporzio&quot;.</p>`,6),l=[i];function o(d,r){return t(),n("div",null,l)}var v=e(a,[["render",o],["__file","text.html.vue"]]);export{v as default};
