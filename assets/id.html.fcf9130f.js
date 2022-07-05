import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,g as n}from"./app.674943b1.js";const d={},a=n(`<h1 id="x-id" tabindex="-1"><a class="header-anchor" href="#x-id" aria-hidden="true">#</a> x-id</h1><p><code>x-id</code> allows you to declare a new &quot;scope&quot; for any new IDs generated using <code>$id()</code>. It accepts an array of strings (ID names) and adds a suffix to each <code>$id(&#39;...&#39;)</code> generated within it that is unique to other IDs on the page.</p><p><code>x-id</code> is meant to be used in conjunction with the <code>$id(...)</code> magic.</p><p><a href="./magics/id">Visit the $id documentation</a> for a better understanding of this feature.</p><p>Here&#39;s a brief example of this directive in use:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-id=&quot;[&#39;text-input&#39;]&quot;&gt;
    &lt;label :for=&quot;$id(&#39;text-input&#39;)&quot;&gt;Username&lt;/label&gt;
    &lt;!-- for=&quot;text-input-1&quot; --&gt;

    &lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt;
    &lt;!-- id=&quot;text-input-1&quot; --&gt;
&lt;/div&gt;

&lt;div x-id=&quot;[&#39;text-input&#39;]&quot;&gt;
    &lt;label :for=&quot;$id(&#39;text-input&#39;)&quot;&gt;Username&lt;/label&gt;
    &lt;!-- for=&quot;text-input-2&quot; --&gt;

    &lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt;
    &lt;!-- id=&quot;text-input-2&quot; --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[a];function l(s,u){return e(),i("div",null,o)}var v=t(d,[["render",l],["__file","id.html.vue"]]);export{v as default};
