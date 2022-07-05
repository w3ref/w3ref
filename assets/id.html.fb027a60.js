import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,g as n}from"./app.674943b1.js";const a={},o=n(`<h1 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> $id</h1><p><code>$id</code> is a magic property that can be used to generate an element&#39;s ID and ensure that it won&#39;t conflict with other IDs of the same name on the same page.</p><p>This utility is extremely helpful when building re-usable components (presumably in a back-end template) that might occur multiple times on a page, and make use of ID attributes.</p><p>Things like input components, modals, listboxes, etc. will all benefit from this utility.</p><p><a name="basic-usage"></a></p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2><p>Suppose you have two input elements on a page, and you want them to have a unique ID from each other, you can do the following:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt;
&lt;!-- id=&quot;text-input-1&quot; --&gt;

&lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt;
&lt;!-- id=&quot;text-input-2&quot; --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, <code>$id</code> takes in a string and spits out an appended suffix that is unique on the page.</p><p><a name="groups-with-x-id"></a></p><h2 id="grouping-with-x-id" tabindex="-1"><a class="header-anchor" href="#grouping-with-x-id" aria-hidden="true">#</a> Grouping with x-id</h2><p>Now let&#39;s say you want to have those same two input elements, but this time you want <code>&lt;label&gt;</code> elements for each of them.</p><p>This presents a problem, you now need to be able to reference the same ID twice. One for the <code>&lt;label&gt;</code>&#39;s <code>for</code> attribute, and the other for the <code>id</code> on the input.</p><p>Here is a way that you might think to accomplish this and is totally valid:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ id: $id(&#39;text-input&#39;) }&quot;&gt;
    &lt;label :for=&quot;id&quot;&gt; &lt;!-- &quot;text-input-1&quot; --&gt;
    &lt;input type=&quot;text&quot; :id=&quot;id&quot;&gt; &lt;!-- &quot;text-input-1&quot; --&gt;
&lt;/div&gt;

&lt;div x-data=&quot;{ id: $id(&#39;text-input&#39;) }&quot;&gt;
    &lt;label :for=&quot;id&quot;&gt; &lt;!-- &quot;text-input-2&quot; --&gt;
    &lt;input type=&quot;text&quot; :id=&quot;id&quot;&gt; &lt;!-- &quot;text-input-2&quot; --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This approach is fine, however, having to name and store the ID in your component scope feels cumbersome.</p><p>To accomplish this same task in a more flexible way, you can use Alpine&#39;s <code>x-id</code> directive to declare an &quot;id scope&quot; for a set of IDs:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-id=&quot;[&#39;text-input&#39;]&quot;&gt;
    &lt;label :for=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-1&quot; --&gt;
    &lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-1&quot; --&gt;
&lt;/div&gt;

&lt;div x-id=&quot;[&#39;text-input&#39;]&quot;&gt;
    &lt;label :for=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-2&quot; --&gt;
    &lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-2&quot; --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, <code>x-id</code> accepts an array of ID names. Now any usages of <code>$id()</code> within that scope, will all use the same ID. Think of them as &quot;id groups&quot;.</p><p><a name="nesting"></a></p><h2 id="nesting" tabindex="-1"><a class="header-anchor" href="#nesting" aria-hidden="true">#</a> Nesting</h2><p>As you might have intuited, you can freely nest these <code>x-id</code> groups, like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-id=&quot;[&#39;text-input&#39;]&quot;&gt;
    &lt;label :for=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-1&quot; --&gt;
    &lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-1&quot; --&gt;

    &lt;div x-id=&quot;[&#39;text-input&#39;]&quot;&gt;
        &lt;label :for=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-2&quot; --&gt;
        &lt;input type=&quot;text&quot; :id=&quot;$id(&#39;text-input&#39;)&quot;&gt; &lt;!-- &quot;text-input-2&quot; --&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="keyed-ids"></a></p><h2 id="keyed-ids-for-looping" tabindex="-1"><a class="header-anchor" href="#keyed-ids-for-looping" aria-hidden="true">#</a> Keyed IDs (For Looping)</h2><p>Sometimes, it is helpful to specify an additional suffix on the end of an ID for the purpose of identifying it within a loop.</p><p>For this, <code>$id()</code> accepts an optional second parameter that will be added as a suffix on the end of the generated ID.</p><p>A common example of this need is something like a listbox component that uses the <code>aria-activedescendant</code> attribute to tell assistive technologies which element is &quot;active&quot; in the list:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;ul
    x-id=&quot;[&#39;list-item&#39;]&quot;
    :aria-activedescendant=&quot;$id(&#39;list-item&#39;, activeItem.id)&quot;
&gt;
    &lt;template x-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;
        &lt;li :id=&quot;$id(&#39;list-item&#39;, item.id)&quot;&gt;...&lt;/li&gt;
    &lt;/template&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is an incomplete example of a listbox, but it should still be helpful to demonstrate a scenario where you might need each ID in a group to still be unique to the page, but also be keyed within a loop so that you can reference individual IDs within that group.</p>`,30),d=[o];function l(u,s){return e(),i("div",null,d)}var c=t(a,[["render",l],["__file","id.html.vue"]]);export{c as default};
