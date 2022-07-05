import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as o,g as t}from"./app.674943b1.js";const i={},a=t(`<h1 id="x-show" tabindex="-1"><a class="header-anchor" href="#x-show" aria-hidden="true">#</a> x-show</h1><p><code>x-show</code> is one of the most useful and powerful directives in Alpine. It provides an expressive way to show and hide DOM elements.</p><p>Here&#39;s an example of a simple dropdown component using <code>x-show</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button x-on:click=&quot;open = ! open&quot;&gt;Toggle Dropdown&lt;/button&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Dropdown Contents...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the &quot;Toggle Dropdown&quot; button is clicked, the dropdown will show and hide accordingly.</p><blockquote><p>If the &quot;default&quot; state of an <code>x-show</code> on page load is &quot;false&quot;, you may want to use <code>x-cloak</code> on the page to avoid &quot;page flicker&quot; (The effect that happens when the browser renders your content before Alpine is finished initializing and hiding it.) You can learn more about <code>x-cloak</code> in its documentation.</p></blockquote><p><a name="with-transitions"></a></p><h2 id="with-transitions" tabindex="-1"><a class="header-anchor" href="#with-transitions" aria-hidden="true">#</a> With transitions</h2><p>If you want to apply smooth transitions to the <code>x-show</code> behavior, you can use it in conjunction with <code>x-transition</code>. You can learn more about that directive <a href="./directives/transition">here</a>, but here&#39;s a quick example of the same component as above, just with transitions applied.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button x-on:click=&quot;open = ! open&quot;&gt;Toggle Dropdown&lt;/button&gt;

    &lt;div x-show=&quot;open&quot; x-transition&gt;
        Dropdown Contents...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),s=[a];function d(l,r){return n(),o("div",null,s)}var h=e(i,[["render",d],["__file","show.html.vue"]]);export{h as default};
