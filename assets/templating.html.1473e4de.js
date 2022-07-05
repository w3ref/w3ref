import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as s,c as d,a as i,d as o,g as n,b as e}from"./app.674943b1.js";const r={},c=n(`<h1 id="templating" tabindex="-1"><a class="header-anchor" href="#templating" aria-hidden="true">#</a> Templating</h1><p>Alpine offers a handful of useful directives for manipulating the DOM on a web page.</p><p>Let&#39;s cover a few of the basic templating directives here, but be sure to look through the available directives in the sidebar for an exhaustive list.</p><p><a name="text-content"></a></p><h2 id="text-content" tabindex="-1"><a class="header-anchor" href="#text-content" aria-hidden="true">#</a> Text content</h2><p>Alpine makes it easy to control the text content of an element with the <code>x-text</code> directive.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ title: &#39;Start Here&#39; }&quot;&gt;
    &lt;h1 x-text=&quot;title&quot;&gt;&lt;/h1&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ title: &#39;Start Here&#39; }&quot; class=&quot;demo&quot;&gt;
    &lt;strong x-text=&quot;title&quot;&gt;&lt;/strong&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, Alpine will set the text content of the <code>&lt;h1&gt;</code> with the value of <code>title</code> (&quot;Start Here&quot;). When <code>title</code> changes, so will the contents of <code>&lt;h1&gt;</code>.</p><p>Like all directives in Alpine, you can use any JavaScript expression you like. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;span x-text=&quot;1 + 2&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot; x-data&gt;
    &lt;span x-text=&quot;1 + 2&quot;&gt;&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>&lt;span&gt;</code> will now contain the sum of &quot;1&quot; and &quot;2&quot;.</p><p><a href="./directives/text">\u2192 Read more about <code>x-text</code></a></p><p><a name="toggling-elements"></a></p><h2 id="toggling-elements" tabindex="-1"><a class="header-anchor" href="#toggling-elements" aria-hidden="true">#</a> Toggling elements</h2><p>Toggling elements is a common need in web pages and applications. Dropdowns, modals, dialogues, &quot;show-more&quot;s, etc... are all good examples.</p><p>Alpine offers the <code>x-show</code> and <code>x-if</code> directives for toggling elements on a page.</p><p><a name="x-show"></a></p><h3 id="x-show" tabindex="-1"><a class="header-anchor" href="#x-show" aria-hidden="true">#</a> <code>x-show</code></h3><p>Here&#39;s a simple toggle component using <code>x-show</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expand&lt;/button&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot; :aria-pressed=&quot;open&quot;&gt;Expand&lt;/button&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now the entire <code>&lt;div&gt;</code> containing the contents will be shown and hidden based on the value of <code>open</code>.</p><p>Under the hood, Alpine adds the CSS property <code>display: none;</code> to the element when it should be hidden.</p><p><a href="./directives/show">\u2192 Read more about <code>x-show</code></a></p><p>This works well for most cases, but sometimes you may want to completely add and remove the element from the DOM entirely. This is what <code>x-if</code> is for.</p><p><a name="x-if"></a></p><h3 id="x-if" tabindex="-1"><a class="header-anchor" href="#x-if" aria-hidden="true">#</a> <code>x-if</code></h3><p>Here is the same toggle from before, but this time using <code>x-if</code> instead of <code>x-show</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expand&lt;/button&gt;

    &lt;template x-if=&quot;open&quot;&gt;
        &lt;div&gt;
            Content...
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot; :aria-pressed=&quot;open&quot;&gt;Expand&lt;/button&gt;

    &lt;template x-if=&quot;open&quot;&gt;
        &lt;div&gt;
            Content...
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that <code>x-if</code> must be declared on a <code>&lt;template&gt;</code> tag. This is so that Alpine can leverage the existing browser behavior of the <code>&lt;template&gt;</code> element and use it as the source of the target <code>&lt;div&gt;</code> to be added and removed from the page.</p><p>When <code>open</code> is true, Alpine will append the <code>&lt;div&gt;</code> to the <code>&lt;template&gt;</code> tag, and remove it when <code>open</code> is false.</p><p><a href="./directives/if">\u2192 Read more about <code>x-if</code></a></p><p><a name="toggling-with-transitions"></a></p><h2 id="toggling-with-transitions" tabindex="-1"><a class="header-anchor" href="#toggling-with-transitions" aria-hidden="true">#</a> Toggling with transitions</h2><p>Alpine makes it simple to smoothly transition between &quot;shown&quot; and &quot;hidden&quot; states using the <code>x-transition</code> directive.</p><blockquote><p><code>x-transition</code> only works with <code>x-show</code>, not with <code>x-if</code>.</p></blockquote><p>Here is, again, the simple toggle example, but this time with transitions applied:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expands&lt;/button&gt;

    &lt;div x-show=&quot;open&quot; x-transition&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expands&lt;/button&gt;

    &lt;div class=&quot;flex&quot;&gt;
        &lt;div x-show=&quot;open&quot; x-transition style=&quot;will-change: transform;&quot;&gt;
            Content...
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let&#39;s zoom in on the portion of the template dealing with transitions:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-show=&quot;open&quot; x-transition&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>x-transition</code> by itself will apply sensible default transitions (fade and scale) to the toggle.</p><p>There are two ways to customize these transitions:</p><ul><li>Transition helpers</li><li>Transition CSS classes.</li></ul><p>Let&#39;s take a look at each of these approaches:</p><p><a name="transition-helpers"></a></p><h3 id="transition-helpers" tabindex="-1"><a class="header-anchor" href="#transition-helpers" aria-hidden="true">#</a> Transition helpers</h3><p>Let&#39;s say you wanted to make the duration of the transition longer, you can manually specify that using the <code>.duration</code> modifier like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-show=&quot;open&quot; x-transition.duration.500ms&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expands&lt;/button&gt;

    &lt;div class=&quot;flex&quot;&gt;
        &lt;div x-show=&quot;open&quot; x-transition.duration.500ms style=&quot;will-change: transform;&quot;&gt;
            Content...
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now the transition will last 500 milliseconds.</p><p>If you want to specify different values for in and out transitions, you can use <code>x-transition:enter</code> and <code>x-transition:leave</code>:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div
    x-show=&quot;open&quot;
    x-transition:enter.duration.500ms
    x-transition:leave.duration.1000ms
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expands&lt;/button&gt;

    &lt;div class=&quot;flex&quot;&gt;
        &lt;div x-show=&quot;open&quot; x-transition:enter.duration.500ms x-transition:leave.duration.1000ms style=&quot;will-change: transform;&quot;&gt;
            Content...
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Additionally, you can add either <code>.opacity</code> or <code>.scale</code> to only transition that property. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-show=&quot;open&quot; x-transition.opacity&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expands&lt;/button&gt;

    &lt;div class=&quot;flex&quot;&gt;
        &lt;div x-show=&quot;open&quot; x-transition:enter.opacity.duration.500 x-transition:leave.opacity.duration.250&gt;
            Content...
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/transition#the-transition-helper">\u2192 Read more about transition helpers</a></p><p><a name="transition-classes"></a></p><h3 id="transition-classes" tabindex="-1"><a class="header-anchor" href="#transition-classes" aria-hidden="true">#</a> Transition classes</h3>`,63),u=e("If you need more fine-grained control over the transitions in your application, you can apply specific CSS classes at specific phases of the transition using the following syntax (this example uses "),v={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},p=e("Tailwind CSS"),m=e("):"),g=n(`<div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div
    x-show=&quot;open&quot;
    x-transition:enter=&quot;transition ease-out duration-300&quot;
    x-transition:enter-start=&quot;opacity-0 transform scale-90&quot;
    x-transition:enter-end=&quot;opacity-100 transform scale-100&quot;
    x-transition:leave=&quot;transition ease-in duration-300&quot;
    x-transition:leave-start=&quot;opacity-100 transform scale-100&quot;
    x-transition:leave-end=&quot;opacity-0 transform scale-90&quot;
&gt;...&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Expands&lt;/button&gt;

    &lt;div class=&quot;flex&quot;&gt;
        &lt;div
            x-show=&quot;open&quot;
            x-transition:enter=&quot;transition ease-out duration-300&quot;
            x-transition:enter-start=&quot;opacity-0 transform scale-90&quot;
            x-transition:enter-end=&quot;opacity-100 transform scale-100&quot;
            x-transition:leave=&quot;transition ease-in duration-300&quot;
            x-transition:leave-start=&quot;opacity-100 transform scale-100&quot;
            x-transition:leave-end=&quot;opacity-0 transform scale-90&quot;
            style=&quot;will-change: transform&quot;
        &gt;
            Content...
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/transition#applying-css-classes">\u2192 Read more about transition classes</a></p><p><a name="binding-attributes"></a></p><h2 id="binding-attributes" tabindex="-1"><a class="header-anchor" href="#binding-attributes" aria-hidden="true">#</a> Binding attributes</h2><p>You can add HTML attributes like <code>class</code>, <code>style</code>, <code>disabled</code>, etc... to elements in Alpine using the <code>x-bind</code> directive.</p><p>Here is an example of a dynamically bound <code>class</code> attribute:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button
    x-data=&quot;{ red: false }&quot;
    x-bind:class=&quot;red ? &#39;bg-red&#39; : &#39;&#39;&quot;
    @click=&quot;red = ! red&quot;
&gt;
    Toggle Red
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;button
        x-data=&quot;{ red: false }&quot;
        x-bind:style=&quot;red &amp;&amp; &#39;background: red&#39;&quot;
        @click=&quot;red = ! red&quot;
    &gt;
        Toggle Red
    &lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As a shortcut, you can leave out the <code>x-bind</code> and use the shorthand <code>:</code> syntax directly:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button ... :class=&quot;red ? &#39;bg-red&#39; : &#39;&#39;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Toggling classes on and off based on data inside Alpine is a common need. Here&#39;s an example of toggling a class using Alpine&#39;s <code>class</code> binding object syntax: (Note: this syntax is only available for <code>class</code> attributes)</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: true }&quot;&gt;
    &lt;span :class=&quot;{ &#39;hidden&#39;: ! open }&quot;&gt;...&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now the <code>hidden</code> class will be added to the element if <code>open</code> is false, and removed if <code>open</code> is true.</p><p><a name="looping-elements"></a></p><h2 id="looping-elements" tabindex="-1"><a class="header-anchor" href="#looping-elements" aria-hidden="true">#</a> Looping elements</h2><p>Alpine allows for iterating parts of your template based on JavaScript data using the <code>x-for</code> directive. Here is a simple example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ statuses: [&#39;open&#39;, &#39;closed&#39;, &#39;archived&#39;] }&quot;&gt;
    &lt;template x-for=&quot;status in statuses&quot;&gt;
        &lt;div x-text=&quot;status&quot;&gt;&lt;/div&gt;
    &lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ statuses: [&#39;open&#39;, &#39;closed&#39;, &#39;archived&#39;] }&quot; class=&quot;demo&quot;&gt;
    &lt;template x-for=&quot;status in statuses&quot;&gt;
        &lt;div x-text=&quot;status&quot;&gt;&lt;/div&gt;
    &lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similar to <code>x-if</code>, <code>x-for</code> must be applied to a <code>&lt;template&gt;</code> tag. Internally, Alpine will append the contents of <code>&lt;template&gt;</code> tag for every iteration in the loop.</p><p>As you can see the new <code>status</code> variable is available in the scope of the iterated templates.</p><p><a href="./directives/for">\u2192 Read more about <code>x-for</code></a></p><p><a name="inner-html"></a></p><h2 id="inner-html" tabindex="-1"><a class="header-anchor" href="#inner-html" aria-hidden="true">#</a> Inner HTML</h2><p>Alpine makes it easy to control the HTML content of an element with the <code>x-html</code> directive.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ title: &#39;&lt;h1&gt;Start Here&lt;/h1&gt;&#39; }&quot;&gt;
    &lt;div x-html=&quot;title&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ title: &#39;&lt;h1&gt;Start Here&lt;/h1&gt;&#39; }&quot; class=&quot;demo&quot;&gt;
    &lt;div x-html=&quot;title&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, Alpine will set the text content of the <code>&lt;div&gt;</code> with the element <code>&lt;h1&gt;Start Here&lt;/h1&gt;</code>. When <code>title</code> changes, so will the contents of <code>&lt;h1&gt;</code>.</p><blockquote><p>\u26A0\uFE0F Only use on trusted content and never on user-provided content. \u26A0\uFE0F Dynamically rendering HTML from third parties can easily lead to XSS vulnerabilities.</p></blockquote><p><a href="./directives/html">\u2192 Read more about <code>x-html</code></a></p>`,30);function b(h,q){const t=l("ExternalLinkIcon");return s(),d("div",null,[c,i("p",null,[u,i("a",v,[p,o(t)]),m]),g])}var w=a(r,[["render",b],["__file","templating.html.vue"]]);export{w as default};
