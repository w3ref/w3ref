import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,g as a}from"./app.674943b1.js";const l={},s=a(`<h1 id="collapse-plugin" tabindex="-1"><a class="header-anchor" href="#collapse-plugin" aria-hidden="true">#</a> Collapse Plugin</h1><p>Alpine&#39;s Collapse plugin allows you to expand and collapse elements using smooth animations.</p><p>Because this behavior and implementation differs from Alpine&#39;s standard transition system, this functionality was made into a dedicated plugin.</p><p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>You can use this plugin by either including it from a <code>&lt;script&gt;</code> tag or installing it via NPM:</p><h3 id="via-cdn" tabindex="-1"><a class="header-anchor" href="#via-cdn" aria-hidden="true">#</a> Via CDN</h3><p>You can include the CDN build of this plugin as a <code>&lt;script&gt;</code> tag, just make sure to include it BEFORE Alpine&#39;s core JS file.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- Alpine Plugins --&gt;
&lt;script defer src=&quot;https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- Alpine Core --&gt;
&lt;script defer src=&quot;https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="via-npm" tabindex="-1"><a class="header-anchor" href="#via-npm" aria-hidden="true">#</a> Via NPM</h3><p>You can install Collapse from NPM for use inside your bundle like so:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @alpinejs/collapse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then initialize it from your bundle:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Alpine <span class="token keyword">from</span> <span class="token string">&#39;alpinejs&#39;</span>
<span class="token keyword">import</span> collapse <span class="token keyword">from</span> <span class="token string">&#39;@alpinejs/collapse&#39;</span>

Alpine<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span>collapse<span class="token punctuation">)</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="x-collapse"></a></p><h2 id="x-collapse" tabindex="-1"><a class="header-anchor" href="#x-collapse" aria-hidden="true">#</a> x-collapse</h2><p>The primary API for using this plugin is the <code>x-collapse</code> directive.</p><p><code>x-collapse</code> can only exist on an element that already has an <code>x-show</code> directive. When added to an <code>x-show</code> element, <code>x-collapse</code> will smoothly &quot;collapse&quot; and &quot;expand&quot; the element when it&#39;s visibility is toggled by animating its height property.</p><p>For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ expanded: false }&quot;&gt;
    &lt;button @click=&quot;expanded = ! expanded&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;p x-show=&quot;expanded&quot; x-collapse&gt;
        ...
    &lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ expanded: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;expanded = ! expanded&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;expanded&quot; x-collapse&gt;
        &lt;div class=&quot;pt-4&quot;&gt;
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="modifiers"></a></p><h2 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h2><p><a name="dot-duration"></a></p><h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> .duration</h3><p>You can customize the duration of the collapse/expand transition by appending the <code>.duration</code> modifier like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ expanded: false }&quot;&gt;
    &lt;button @click=&quot;expanded = ! expanded&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;p x-show=&quot;expanded&quot; x-collapse.duration.1000ms&gt;
        ...
    &lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ expanded: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;expanded = ! expanded&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;expanded&quot; x-collapse.duration.1000ms&gt;
        &lt;div class=&quot;pt-4&quot;&gt;
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="dot-min"></a></p><h3 id="min" tabindex="-1"><a class="header-anchor" href="#min" aria-hidden="true">#</a> .min</h3><p>By default, <code>x-collapse</code>&#39;s &quot;collapsed&quot; state sets the height of the element to <code>0px</code> and also sets <code>display: none;</code>.</p><p>Sometimes, it&#39;s helpful to &quot;cut-off&quot; an element rather than fully hide it. By using the <code>.min</code> modifier, you can set a minimum height for <code>x-collapse</code>&#39;s &quot;collapsed&quot; state. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ expanded: false }&quot;&gt;
    &lt;button @click=&quot;expanded = ! expanded&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;p x-show=&quot;expanded&quot; x-collapse.min.50px&gt;
        ...
    &lt;/p&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ expanded: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;expanded = ! expanded&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;expanded&quot; x-collapse.min.50px&gt;
        &lt;div class=&quot;pt-4&quot;&gt;
            Reprehenderit eu excepteur ullamco esse cillum reprehenderit exercitation labore non. Dolore dolore ea dolore veniam sint in sint ex Lorem ipsum. Sint laborum deserunt deserunt amet voluptate cillum deserunt. Amet nisi pariatur sit ut id. Ipsum est minim est commodo id dolor sint id quis sint Lorem.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),t=[s];function d(o,r){return n(),i("div",null,t)}var p=e(l,[["render",d],["__file","collapse.html.vue"]]);export{p as default};
