import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o,c as l,a as n,d as s,g as t,b as e}from"./app.674943b1.js";const c={},r=t(`<h1 id="x-data" tabindex="-1"><a class="header-anchor" href="#x-data" aria-hidden="true">#</a> x-data</h1><p>Everything in Alpine starts with the <code>x-data</code> directive.</p><p><code>x-data</code> defines a chunk of HTML as an Alpine component and provides the reactive data for that component to reference.</p><p>Here&#39;s an example of a contrived dropdown component:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Don&#39;t worry about the other directives in this example (<code>@click</code> and <code>x-show</code>), we&#39;ll get to those in a bit. For now, let&#39;s focus on <code>x-data</code>.</p><p><a name="scope"></a></p><h2 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h2><p>Properties defined in an <code>x-data</code> directive are available to all element children. Even ones inside other, nested <code>x-data</code> components.</p><p>For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ foo: &#39;bar&#39; }&quot;&gt;
    &lt;span x-text=&quot;foo&quot;&gt;&lt;!-- Will output: &quot;bar&quot; --&gt;&lt;/span&gt;

    &lt;div x-data=&quot;{ bar: &#39;baz&#39; }&quot;&gt;
        &lt;span x-text=&quot;foo&quot;&gt;&lt;!-- Will output: &quot;bar&quot; --&gt;&lt;/span&gt;

        &lt;div x-data=&quot;{ foo: &#39;bob&#39; }&quot;&gt;
            &lt;span x-text=&quot;foo&quot;&gt;&lt;!-- Will output: &quot;bob&quot; --&gt;&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="methods"></a></p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><p>Because <code>x-data</code> is evaluated as a normal JavaScript object, in addition to state, you can store methods and even getters.</p><p>For example, let&#39;s extract the &quot;Toggle Content&quot; behavior into a method on <code>x-data</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false, toggle() { this.open = ! this.open } }&quot;&gt;
    &lt;button @click=&quot;toggle()&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the added <code>toggle() { this.open = ! this.open }</code> method on <code>x-data</code>. This method can now be called from anywhere inside the component.</p><p>You&#39;ll also notice the usage of <code>this.</code> to access state on the object itself. This is because Alpine evaluates this data object like any standard JavaScript object with a <code>this</code> context.</p><p>If you prefer, you can leave the calling parenthesis off of the <code>toggle</code> method completely. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- Before --&gt;
&lt;button @click=&quot;toggle()&quot;&gt;...&lt;/button&gt;

&lt;!-- After --&gt;
&lt;button @click=&quot;toggle&quot;&gt;...&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="getters"></a></p><h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> Getters</h2>`,22),u=e("JavaScript "),v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get",target:"_blank",rel:"noopener noreferrer"},p=e("getters"),m=e(" are handy when the sole purpose of a method is to return data based on other state."),g=t(`<p>Think of them like &quot;computed properties&quot; (although, they are not cached like Vue&#39;s computed properties).</p><p>Let&#39;s refactor our component to use a getter called <code>isOpen</code> instead of accessing <code>open</code> directly.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{
  open: false,
  get isOpen() { return this.open },
  toggle() { this.open = ! this.open },
}&quot;&gt;
    &lt;button @click=&quot;toggle()&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;isOpen&quot;&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice the &quot;Content&quot; now depends on the <code>isOpen</code> getter instead of the <code>open</code> property directly.</p><p>In this case there is no tangible benefit. But in some cases, getters are helpful for providing a more expressive syntax in your components.</p><p><a name="data-less-components"></a></p><h2 id="data-less-components" tabindex="-1"><a class="header-anchor" href="#data-less-components" aria-hidden="true">#</a> Data-less components</h2><p>Occasionally, you want to create an Alpine component, but you don&#39;t need any data.</p><p>In these cases, you can always pass in an empty object.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{}&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However, if you wish, you can also eliminate the attribute value entirely if it looks better to you.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="single-element-components"></a></p><h2 id="single-element-components" tabindex="-1"><a class="header-anchor" href="#single-element-components" aria-hidden="true">#</a> Single-element components</h2><p>Sometimes you may only have a single element inside your Alpine component, like the following:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: true }&quot;&gt;
    &lt;button @click=&quot;open = false&quot; x-show=&quot;open&quot;&gt;Hide Me&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In these cases, you can declare <code>x-data</code> directly on that single element:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button x-data=&quot;{ open: true }&quot; @click=&quot;open = false&quot; x-show=&quot;open&quot;&gt;
    Hide Me
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="re-usable-data"></a></p><h2 id="re-usable-data" tabindex="-1"><a class="header-anchor" href="#re-usable-data" aria-hidden="true">#</a> Re-usable Data</h2><p>If you find yourself duplicating the contents of <code>x-data</code>, or you find the inline syntax verbose, you can extract the <code>x-data</code> object out to a dedicated component using <code>Alpine.data</code>.</p><p>Here&#39;s a quick example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;dropdown&quot;&gt;
    &lt;button @click=&quot;toggle&quot;&gt;Toggle Content&lt;/button&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Content...
    &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.data(&#39;dropdown&#39;, () =&gt; ({
            open: false,

            toggle() {
                this.open = ! this.open
            },
        }))
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./globals/alpine-data">\u2192 Read more about <code>Alpine.data(...)</code></a></p>`,24);function b(h,x){const i=d("ExternalLinkIcon");return o(),l("div",null,[r,n("p",null,[u,n("a",v,[p,s(i)]),m]),g])}var y=a(c,[["render",b],["__file","data.html.vue"]]);export{y as default};
