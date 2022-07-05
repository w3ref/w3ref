import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,g as t}from"./app.674943b1.js";const l={},a=t(`<h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> $nextTick</h1><p><code>$nextTick</code> is a magic property that allows you to only execute a given expression AFTER Alpine has made its reactive DOM updates. This is useful for times you want to interact with the DOM state AFTER it&#39;s reflected any data updates you&#39;ve made.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ title: &#39;Hello&#39; }&quot;&gt;
    &lt;button
        @click=&quot;
            title = &#39;Hello World!&#39;;
            $nextTick(() =&gt; { console.log($el.innerText) });
        &quot;
        x-text=&quot;title&quot;
    &gt;&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example, rather than logging &quot;Hello&quot; to the console, &quot;Hello World!&quot; will be logged because <code>$nextTick</code> was used to wait until Alpine was finished updating the DOM.</p><p><a name="promises"></a></p><h2 id="promises" tabindex="-1"><a class="header-anchor" href="#promises" aria-hidden="true">#</a> Promises</h2><p><code>$nextTick</code> returns a promise, allowing the use of <code>$nextTick</code> to pause an async function until after pending dom updates. When used like this, <code>$nextTick</code> also does not require an argument to be passed.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ title: &#39;Hello&#39; }&quot;&gt;
    &lt;button
        @click=&quot;
            title = &#39;Hello World!&#39;;
            await $nextTick();
            console.log($el.innerText);
        &quot;
        x-text=&quot;title&quot;
    &gt;&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[a];function d(o,c){return i(),n("div",null,s)}var v=e(l,[["render",d],["__file","nextTick.html.vue"]]);export{v as default};
