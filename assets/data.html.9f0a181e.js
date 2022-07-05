import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as i,g as a}from"./app.674943b1.js";const l={},n=a(`<h1 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> $data</h1><p><code>$data</code> is a magic property that gives you access to the current Alpine data scope (generally provided by <code>x-data</code>).</p><p>Most of the time, you can just access Alpine data within expressions directly. for example <code>x-data=&quot;{ message: &#39;Hello Caleb!&#39; }&quot;</code> will allow you to do things like <code>x-text=&quot;message&quot;</code>.</p><p>However, sometimes it is helpful to have an actual object that encapsulates all scope that you can pass around to other functions:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ greeting: &#39;Hello&#39; }&quot;&gt;
    &lt;div x-data=&quot;{ name: &#39;Caleb&#39; }&quot;&gt;
        &lt;button @click=&quot;sayHello($data)&quot;&gt;Say Hello&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
    function sayHello({ greeting, name }) {
        alert(greeting + &#39; &#39; + name + &#39;!&#39;)
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ greeting: &#39;Hello&#39; }&quot; class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ name: &#39;Caleb&#39; }&quot;&gt;
        &lt;button @click=&quot;sayHello($data)&quot;&gt;Say Hello&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
    function sayHello({ greeting, name }) {
        alert(greeting + &#39; &#39; + name + &#39;!&#39;)
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now when the button is pressed, the browser will alert <code>Hello Caleb!</code> because it was passed a data object that contained all the Alpine scope of the expression that called it (<code>@click=&quot;...&quot;</code>).</p><p>Most applications won&#39;t need this magic property, but it can be very helpful for deeper, more complicated Alpine utilities.</p>`,8),s=[n];function d(o,c){return t(),i("div",null,s)}var v=e(l,[["render",d],["__file","data.html.vue"]]);export{v as default};
