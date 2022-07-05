import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,g as a}from"./app.674943b1.js";const s={},l=a(`<h1 id="x-bind" tabindex="-1"><a class="header-anchor" href="#x-bind" aria-hidden="true">#</a> x-bind</h1><p><code>x-bind</code> allows you to set HTML attributes on elements based on the result of JavaScript expressions.</p><p>For example, here&#39;s a component where we will use <code>x-bind</code> to set the placeholder value of an input.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ placeholder: &#39;Type here...&#39; }&quot;&gt;
  &lt;input type=&quot;text&quot; x-bind:placeholder=&quot;placeholder&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="shorthand-syntax"></a></p><h2 id="shorthand-syntax" tabindex="-1"><a class="header-anchor" href="#shorthand-syntax" aria-hidden="true">#</a> Shorthand syntax</h2><p>If <code>x-bind:</code> is too verbose for your liking, you can use the shorthand: <code>:</code>. For example, here is the same input element as above, but refactored to use the shorthand syntax.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; :placeholder=&quot;placeholder&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="binding-classes"></a></p><h2 id="binding-classes" tabindex="-1"><a class="header-anchor" href="#binding-classes" aria-hidden="true">#</a> Binding classes</h2><p><code>x-bind</code> is most often useful for setting specific classes on an element based on your Alpine state.</p><p>Here&#39;s a simple example of a simple dropdown toggle, but instead of using <code>x-show</code>, we&#39;ll use a &quot;hidden&quot; class to toggle an element.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
  &lt;button x-on:click=&quot;open = ! open&quot;&gt;Toggle Dropdown&lt;/button&gt;

  &lt;div :class=&quot;open ? &#39;&#39; : &#39;hidden&#39;&quot;&gt;
    Dropdown Contents...
  &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, when <code>open</code> is <code>false</code>, the &quot;hidden&quot; class will be added to the dropdown.</p><p><a name="shorthand-conditionals"></a></p><h3 id="shorthand-conditionals" tabindex="-1"><a class="header-anchor" href="#shorthand-conditionals" aria-hidden="true">#</a> Shorthand conditionals</h3><p>In cases like these, if you prefer a less verbose syntax you can use JavaScript&#39;s short-circuit evaluation instead of standard conditionals:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div :class=&quot;show ? &#39;&#39; : &#39;hidden&#39;&quot;&gt;
&lt;!-- Is equivalent to: --&gt;
&lt;div :class=&quot;show || &#39;hidden&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The inverse is also available to you. Suppose instead of <code>open</code>, we use a variable with the opposite value: <code>closed</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div :class=&quot;closed ? &#39;hidden&#39; : &#39;&#39;&quot;&gt;
&lt;!-- Is equivalent to: --&gt;
&lt;div :class=&quot;closed &amp;&amp; &#39;hidden&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="class-object-syntax"></a></p><h3 id="class-object-syntax" tabindex="-1"><a class="header-anchor" href="#class-object-syntax" aria-hidden="true">#</a> Class object syntax</h3><p>Alpine offers an additional syntax for toggling classes if you prefer. By passing a JavaScript object where the classes are the keys and booleans are the values, Alpine will know which classes to apply and which to remove. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div :class=&quot;{ &#39;hidden&#39;: ! show }&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This technique offers a unique advantage to other methods. When using object-syntax, Alpine will NOT preserve original classes applied to an element&#39;s <code>class</code> attribute.</p><p>For example, if you wanted to apply the &quot;hidden&quot; class to an element before Alpine loads, AND use Alpine to toggle its existence you can only achieve that behavior using object-syntax:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div class=&quot;hidden&quot; :class=&quot;{ &#39;hidden&#39;: ! show }&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case that confused you, let&#39;s dig deeper into how Alpine handles <code>x-bind:class</code> differently than other attributes.</p><p><a name="special-behavior"></a></p><h3 id="special-behavior" tabindex="-1"><a class="header-anchor" href="#special-behavior" aria-hidden="true">#</a> Special behavior</h3><p><code>x-bind:class</code> behaves differently than other attributes under the hood.</p><p>Consider the following case.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div class=&quot;opacity-50&quot; :class=&quot;hide &amp;&amp; &#39;hidden&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If &quot;class&quot; were any other attribute, the <code>:class</code> binding would overwrite any existing class attribute, causing <code>opacity-50</code> to be overwritten by either <code>hidden</code> or <code>&#39;&#39;</code>.</p><p>However, Alpine treats <code>class</code> bindings differently. It&#39;s smart enough to preserve existing classes on an element.</p><p>For example, if <code>hide</code> is true, the above example will result in the following DOM element:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div class=&quot;opacity-50 hidden&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If <code>hide</code> is false, the DOM element will look like:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div class=&quot;opacity-50&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This behavior should be invisible and intuitive to most users, but it is worth mentioning explicitly for the inquiring developer or any special cases that might crop up.</p><p><a name="binding-styles"></a></p><h2 id="binding-styles" tabindex="-1"><a class="header-anchor" href="#binding-styles" aria-hidden="true">#</a> Binding styles</h2><p>Similar to the special syntax for binding classes with JavaScript objects, Alpine also offers an object-based syntax for binding <code>style</code> attributes.</p><p>Just like the class objects, this syntax is entirely optional. Only use it if it affords you some advantage.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div :style=&quot;{ color: &#39;red&#39;, display: &#39;flex&#39; }&quot;&gt;

&lt;!-- Will render: --&gt;
&lt;div style=&quot;color: red; display: flex;&quot; ...&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Conditional inline styling is possible using expressions just like with x-bind:class. Short circuit operators can be used here as well by using a styles object as the second operand.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-bind:style=&quot;true &amp;&amp; { color: &#39;red&#39; }&quot;&gt;

&lt;!-- Will render: --&gt;
&lt;div style=&quot;color: red;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>One advantage of this approach is being able to mix it in with existing styles on an element:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div style=&quot;padding: 1rem;&quot; :style=&quot;{ color: &#39;red&#39;, display: &#39;flex&#39; }&quot;&gt;

&lt;!-- Will render: --&gt;
&lt;div style=&quot;padding: 1rem; color: red; display: flex;&quot; ...&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And like most expressions in Alpine, you can always use the result of a JavaScript expression as the reference:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ styles: { color: &#39;red&#39;, display: &#39;flex&#39; }}&quot;&gt;
    &lt;div :style=&quot;styles&quot;&gt;
&lt;/div&gt;

&lt;!-- Will render: --&gt;
&lt;div ...&gt;
    &lt;div style=&quot;color: red; display: flex;&quot; ...&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="bind-directives"></a></p><h2 id="binding-alpine-directives-directly" tabindex="-1"><a class="header-anchor" href="#binding-alpine-directives-directly" aria-hidden="true">#</a> Binding Alpine Directives Directly</h2><p><code>x-bind</code> allows you to bind an object of different directives and attributes to an element.</p><p>The object keys can be anything you would normally write as an attribute name in Alpine. This includes Alpine directives and modifiers, but also plain HTML attributes. The object values are either plain strings, or in the case of dynamic Alpine directives, callbacks to be evaluated by Alpine.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;dropdown()&quot;&gt;
    &lt;button x-bind=&quot;trigger&quot;&gt;Open Dropdown&lt;/button&gt;

    &lt;span x-bind=&quot;dialogue&quot;&gt;Dropdown Contents&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.data(&#39;dropdown&#39;, () =&gt; ({
            open: false,

            trigger: {
                [&#39;x-ref&#39;]: &#39;trigger&#39;,
                [&#39;@click&#39;]() {
                    this.open = true
                },
            },

            dialogue: {
                [&#39;x-show&#39;]() {
                    return this.open
                },
                [&#39;@click.outside&#39;]() {
                    this.open = false
                },
            },
        }))
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are a couple of caveats to this usage of <code>x-bind</code>:</p><blockquote><p>When the directive being &quot;bound&quot; or &quot;applied&quot; is <code>x-for</code>, you should return a normal expression string from the callback. For example: <code>[&#39;x-for&#39;]() { return &#39;item in items&#39; }</code></p></blockquote>`,58),d=[l];function t(o,r){return i(),n("div",null,d)}var v=e(s,[["render",t],["__file","bind.html.vue"]]);export{v as default};
