import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as s,c as o,a as e,d as n,g as l,b as t}from"./app.674943b1.js";const c={},r=l(`<h1 id="dispatch" tabindex="-1"><a class="header-anchor" href="#dispatch" aria-hidden="true">#</a> $dispatch</h1><p><code>$dispatch</code> is a helpful shortcut for dispatching browser events.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div @notify=&quot;alert(&#39;Hello World!&#39;)&quot;&gt;
    &lt;button @click=&quot;$dispatch(&#39;notify&#39;)&quot;&gt;
        Notify
    &lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data @notify=&quot;alert(&#39;Hello World!&#39;)&quot;&gt;
        &lt;button @click=&quot;$dispatch(&#39;notify&#39;)&quot;&gt;
            Notify
        &lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also pass data along with the dispatched event if you wish. This data will be accessible as the <code>.detail</code> property of the event:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div @notify=&quot;alert($event.detail.message)&quot;&gt;
    &lt;button @click=&quot;$dispatch(&#39;notify&#39;, { message: &#39;Hello World!&#39; })&quot;&gt;
        Notify
    &lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data @notify=&quot;alert($event.detail.message)&quot;&gt;
        &lt;button @click=&quot;$dispatch(&#39;notify&#39;, { message: &#39;Hello World!&#39; })&quot;&gt;Notify&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Under the hood, <code>$dispatch</code> is a wrapper for the more verbose API: <code>element.dispatchEvent(new CustomEvent(...))</code></p><p><strong>Note on event propagation</strong></p>`,9),u=t("Notice that, because of "),v={href:"https://en.wikipedia.org/wiki/Event_bubbling",target:"_blank",rel:"noopener noreferrer"},p=t("event bubbling"),m=t(", when you need to capture events dispatched from nodes that are under the same nesting hierarchy, you'll need to use the "),g={href:"https://github.com/alpinejs/alpine#x-on",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,".window",-1),b=t(" modifier:"),f=l(`<p><strong>Example:</strong></p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Won&#39;t work --&gt;
&lt;div x-data&gt;
    &lt;span @notify=&quot;...&quot;&gt;&lt;/span&gt;
    &lt;button @click=&quot;$dispatch(&#39;notify&#39;)&quot;&gt;Notify&lt;/button&gt;
&lt;/div&gt;

&lt;!-- \u2705 Will work (because of .window) --&gt;
&lt;div x-data&gt;
    &lt;span @notify.window=&quot;...&quot;&gt;&lt;/span&gt;
    &lt;button @click=&quot;$dispatch(&#39;notify&#39;)&quot;&gt;Notify&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The first example won&#39;t work because when <code>custom-event</code> is dispatched, it&#39;ll propagate to its common ancestor, the <code>div</code>, not its sibling, the <code>&lt;span&gt;</code>. The second example will work because the sibling is listening for <code>notify</code> at the <code>window</code> level, which the custom event will eventually bubble up to.</p></blockquote><p><a name="dispatching-to-components"></a></p><h2 id="dispatching-to-other-components" tabindex="-1"><a class="header-anchor" href="#dispatching-to-other-components" aria-hidden="true">#</a> Dispatching to other components</h2><p>You can also take advantage of the previous technique to make your components talk to each other:</p><p><strong>Example:</strong></p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div
    x-data=&quot;{ title: &#39;Hello&#39; }&quot;
    @set-title.window=&quot;title = $event.detail&quot;
&gt;
    &lt;h1 x-text=&quot;title&quot;&gt;&lt;/h1&gt;
&lt;/div&gt;

&lt;div x-data&gt;
    &lt;button @click=&quot;$dispatch(&#39;set-title&#39;, &#39;Hello World!&#39;)&quot;&gt;Click me&lt;/button&gt;
&lt;/div&gt;
&lt;!-- When clicked, the content of the h1 will set to &quot;Hello World!&quot;. --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="dispatching-to-x-model"></a></p><h2 id="dispatching-to-x-model" tabindex="-1"><a class="header-anchor" href="#dispatching-to-x-model" aria-hidden="true">#</a> Dispatching to x-model</h2><p>You can also use <code>$dispatch()</code> to trigger data updates for <code>x-model</code> data bindings. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ title: &#39;Hello&#39; }&quot;&gt;
    &lt;span x-model=&quot;title&quot;&gt;
        &lt;button @click=&quot;$dispatch(&#39;input&#39;, &#39;Hello World!&#39;)&quot;&gt;Click me&lt;/button&gt;
        &lt;!-- After the button is pressed, \`x-model\` will catch the bubbling &quot;input&quot; event, and update title. --&gt;
    &lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This opens up the door for making custom input components whose value can be set via <code>x-model</code>.</p>`,13);function q(x,_){const i=a("ExternalLinkIcon");return s(),o("div",null,[r,e("p",null,[u,e("a",v,[p,n(i)]),m,e("a",g,[h,n(i)]),b]),f])}var y=d(c,[["render",q],["__file","dispatch.html.vue"]]);export{y as default};
