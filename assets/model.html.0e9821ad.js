import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,g as e,a as n}from"./app.674943b1.js";const a={},d=e(`<h1 id="x-model" tabindex="-1"><a class="header-anchor" href="#x-model" aria-hidden="true">#</a> x-model</h1><p><code>x-model</code> allows you to bind the value of an input element to Alpine data.</p><p>Here&#39;s a simple example of using <code>x-model</code> to bind the value of a text field to a piece of data in Alpine.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ message: &#39;&#39; }&quot;&gt;
    &lt;input type=&quot;text&quot; x-model=&quot;message&quot;&gt;

    &lt;span x-text=&quot;message&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ message: &#39;&#39; }&quot;&gt;
        &lt;input type=&quot;text&quot; x-model=&quot;message&quot; placeholder=&quot;Type message...&quot;&gt;

        &lt;div class=&quot;pt-4&quot; x-text=&quot;message&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now as the user types into the text field, the <code>message</code> will be reflected in the <code>&lt;span&gt;</code> tag.</p><p><code>x-model</code> is two-way bound, meaning it both &quot;sets&quot; and &quot;gets&quot;. In addition to changing data, if the data itself changes, the element will reflect the change.</p><p>We can use the same example as above but this time, we&#39;ll add a button to change the value of the <code>message</code> property.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ message: &#39;&#39; }&quot;&gt;
    &lt;input type=&quot;text&quot; x-model=&quot;message&quot;&gt;

    &lt;button x-on:click=&quot;message = &#39;changed&#39;&quot;&gt;Change Message&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ message: &#39;&#39; }&quot;&gt;
        &lt;input type=&quot;text&quot; x-model=&quot;message&quot; placeholder=&quot;Type message...&quot;&gt;

        &lt;button x-on:click=&quot;message = &#39;changed&#39;&quot;&gt;Change Message&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now when the <code>&lt;button&gt;</code> is clicked, the input element&#39;s value will instantly be updated to &quot;changed&quot;.</p><p><code>x-model</code> works with the following input elements:</p><ul><li><code>&lt;input type=&quot;text&quot;&gt;</code></li><li><code>&lt;textarea&gt;</code></li><li><code>&lt;input type=&quot;checkbox&quot;&gt;</code></li><li><code>&lt;input type=&quot;radio&quot;&gt;</code></li><li><code>&lt;select&gt;</code></li></ul><p><a name="text-inputs"></a></p><h2 id="text-inputs" tabindex="-1"><a class="header-anchor" href="#text-inputs" aria-hidden="true">#</a> Text inputs</h2><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; x-model=&quot;message&quot;&gt;

&lt;span x-text=&quot;message&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ message: &#39;&#39; }&quot;&gt;
        &lt;input type=&quot;text&quot; x-model=&quot;message&quot; placeholder=&quot;Type message&quot;&gt;

        &lt;div class=&quot;pt-4&quot; x-text=&quot;message&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="textarea-inputs"></a></p><h2 id="textarea-inputs" tabindex="-1"><a class="header-anchor" href="#textarea-inputs" aria-hidden="true">#</a> Textarea inputs</h2><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;textarea x-model=&quot;message&quot;&gt;&lt;/textarea&gt;

&lt;span x-text=&quot;message&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ message: &#39;&#39; }&quot;&gt;
        &lt;textarea x-model=&quot;message&quot; placeholder=&quot;Type message&quot;&gt;&lt;/textarea&gt;

        &lt;div class=&quot;pt-4&quot; x-text=&quot;message&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="checkbox-inputs"></a></p><h2 id="checkbox-inputs" tabindex="-1"><a class="header-anchor" href="#checkbox-inputs" aria-hidden="true">#</a> Checkbox inputs</h2><p><a name="single-checkbox-with-boolean"></a></p><h3 id="single-checkbox-with-boolean" tabindex="-1"><a class="header-anchor" href="#single-checkbox-with-boolean" aria-hidden="true">#</a> Single checkbox with boolean</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;checkbox&quot; id=&quot;checkbox&quot; x-model=&quot;show&quot;&gt;

&lt;label for=&quot;checkbox&quot; x-text=&quot;show&quot;&gt;&lt;/label&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ open: &#39;&#39; }&quot;&gt;
        &lt;input type=&quot;checkbox&quot; id=&quot;checkbox&quot; x-model=&quot;open&quot;&gt;

        &lt;label for=&quot;checkbox&quot; x-text=&quot;open&quot;&gt;&lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="multiple-checkboxes-bound-to-array"></a></p><h3 id="multiple-checkboxes-bound-to-array" tabindex="-1"><a class="header-anchor" href="#multiple-checkboxes-bound-to-array" aria-hidden="true">#</a> Multiple checkboxes bound to array</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;checkbox&quot; value=&quot;red&quot; x-model=&quot;colors&quot;&gt;
&lt;input type=&quot;checkbox&quot; value=&quot;orange&quot; x-model=&quot;colors&quot;&gt;
&lt;input type=&quot;checkbox&quot; value=&quot;yellow&quot; x-model=&quot;colors&quot;&gt;

Colors: &lt;span x-text=&quot;colors&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ colors: [] }&quot;&gt;
        &lt;input type=&quot;checkbox&quot; value=&quot;red&quot; x-model=&quot;colors&quot;&gt;
        &lt;input type=&quot;checkbox&quot; value=&quot;orange&quot; x-model=&quot;colors&quot;&gt;
        &lt;input type=&quot;checkbox&quot; value=&quot;yellow&quot; x-model=&quot;colors&quot;&gt;

        &lt;div class=&quot;pt-4&quot;&gt;Colors: &lt;span x-text=&quot;colors&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="radio-inputs"></a></p><h2 id="radio-inputs" tabindex="-1"><a class="header-anchor" href="#radio-inputs" aria-hidden="true">#</a> Radio inputs</h2><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;radio&quot; value=&quot;yes&quot; x-model=&quot;answer&quot;&gt;
&lt;input type=&quot;radio&quot; value=&quot;no&quot; x-model=&quot;answer&quot;&gt;

Answer: &lt;span x-text=&quot;answer&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ answer: &#39;&#39; }&quot;&gt;
        &lt;input type=&quot;radio&quot; value=&quot;yes&quot; x-model=&quot;answer&quot;&gt;
        &lt;input type=&quot;radio&quot; value=&quot;no&quot; x-model=&quot;answer&quot;&gt;

        &lt;div class=&quot;pt-4&quot;&gt;Answer: &lt;span x-text=&quot;answer&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="select-inputs"></a></p><h2 id="select-inputs" tabindex="-1"><a class="header-anchor" href="#select-inputs" aria-hidden="true">#</a> Select inputs</h2><p><a name="single-select"></a></p><h3 id="single-select" tabindex="-1"><a class="header-anchor" href="#single-select" aria-hidden="true">#</a> Single select</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;select x-model=&quot;color&quot;&gt;
    &lt;option&gt;Red&lt;/option&gt;
    &lt;option&gt;Orange&lt;/option&gt;
    &lt;option&gt;Yellow&lt;/option&gt;
&lt;/select&gt;

Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ color: &#39;&#39; }&quot;&gt;
        &lt;select x-model=&quot;color&quot;&gt;
            &lt;option&gt;Red&lt;/option&gt;
            &lt;option&gt;Orange&lt;/option&gt;
            &lt;option&gt;Yellow&lt;/option&gt;
        &lt;/select&gt;

        &lt;div class=&quot;pt-4&quot;&gt;Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="single-select-with-placeholder"></a></p><h3 id="single-select-with-placeholder" tabindex="-1"><a class="header-anchor" href="#single-select-with-placeholder" aria-hidden="true">#</a> Single select with placeholder</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;select x-model=&quot;color&quot;&gt;
    &lt;option value=&quot;&quot; disabled&gt;Select A Color&lt;/option&gt;
    &lt;option&gt;Red&lt;/option&gt;
    &lt;option&gt;Orange&lt;/option&gt;
    &lt;option&gt;Yellow&lt;/option&gt;
&lt;/select&gt;

Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ color: &#39;&#39; }&quot;&gt;
        &lt;select x-model=&quot;color&quot;&gt;
            &lt;option value=&quot;&quot; disabled&gt;Select A Color&lt;/option&gt;
            &lt;option&gt;Red&lt;/option&gt;
            &lt;option&gt;Orange&lt;/option&gt;
            &lt;option&gt;Yellow&lt;/option&gt;
        &lt;/select&gt;

        &lt;div class=&quot;pt-4&quot;&gt;Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="multiple-select"></a></p><h3 id="multiple-select" tabindex="-1"><a class="header-anchor" href="#multiple-select" aria-hidden="true">#</a> Multiple select</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;select x-model=&quot;color&quot; multiple&gt;
    &lt;option&gt;Red&lt;/option&gt;
    &lt;option&gt;Orange&lt;/option&gt;
    &lt;option&gt;Yellow&lt;/option&gt;
&lt;/select&gt;

Colors: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ color: &#39;&#39; }&quot;&gt;
        &lt;select x-model=&quot;color&quot; multiple&gt;
            &lt;option&gt;Red&lt;/option&gt;
            &lt;option&gt;Orange&lt;/option&gt;
            &lt;option&gt;Yellow&lt;/option&gt;
        &lt;/select&gt;

        &lt;div class=&quot;pt-4&quot;&gt;Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="dynamically-populated-select-options"></a></p><h3 id="dynamically-populated-select-options" tabindex="-1"><a class="header-anchor" href="#dynamically-populated-select-options" aria-hidden="true">#</a> Dynamically populated Select Options</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;select x-model=&quot;color&quot;&gt;
    &lt;template x-for=&quot;color in [&#39;Red&#39;, &#39;Orange&#39;, &#39;Yellow&#39;]&quot;&gt;
        &lt;option x-text=&quot;color&quot;&gt;&lt;/option&gt;
    &lt;/template&gt;
&lt;/select&gt;

Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ color: &#39;&#39; }&quot;&gt;
        &lt;select x-model=&quot;color&quot;&gt;
            &lt;template x-for=&quot;color in [&#39;Red&#39;, &#39;Orange&#39;, &#39;Yellow&#39;]&quot;&gt;
                &lt;option x-text=&quot;color&quot;&gt;&lt;/option&gt;
            &lt;/template&gt;
        &lt;/select&gt;

        &lt;div class=&quot;pt-4&quot;&gt;Color: &lt;span x-text=&quot;color&quot;&gt;&lt;/span&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="modifiers"></a></p><h2 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h2><p><a name="lazy"></a></p><h3 id="lazy" tabindex="-1"><a class="header-anchor" href="#lazy" aria-hidden="true">#</a> <code>.lazy</code></h3><p>On text inputs, by default, <code>x-model</code> updates the property on every keystroke. By adding the <code>.lazy</code> modifier, you can force an <code>x-model</code> input to only update the property when user focuses away from the input element.</p><p>This is handy for things like real-time form-validation where you might not want to show an input validation error until the user &quot;tabs&quot; away from a field.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; x-model.lazy=&quot;username&quot;&gt;
&lt;span x-show=&quot;username.length &gt; 20&quot;&gt;The username is too long.&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="number"></a></p><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> <code>.number</code></h3><p>By default, any data stored in a property via <code>x-model</code> is stored as a string. To force Alpine to store the value as a JavaScript number, add the <code>.number</code> modifier.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; x-model.number=&quot;age&quot;&gt;
&lt;span x-text=&quot;typeof age&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="debounce"></a></p><h3 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce" aria-hidden="true">#</a> <code>.debounce</code></h3><p>By adding <code>.debounce</code> to <code>x-model</code>, you can easily debounce the updating of bound input.</p><p>This is useful for things like real-time search inputs that fetch new data from the server every time the search property changes.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; x-model.debounce=&quot;search&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default debounce time is 250 milliseconds, you can easily customize this by adding a time modifier like so.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; x-model.debounce.500ms=&quot;search&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="throttle"></a></p><h3 id="throttle" tabindex="-1"><a class="header-anchor" href="#throttle" aria-hidden="true">#</a> <code>.throttle</code></h3><p>Similar to <code>.debounce</code> you can limit the property update triggered by <code>x-model</code> to only updating on a specified interval.</p>`,74),s=n("input",{type:"text","x-model.throttle":"search"},null,-1),o=e(`<p>The default throttle interval is 250 milliseconds, you can easily customize this by adding a time modifier like so.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;input type=&quot;text&quot; x-model.throttle.500ms=&quot;search&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="programmatic access"></a></p><h2 id="programmatic-access" tabindex="-1"><a class="header-anchor" href="#programmatic-access" aria-hidden="true">#</a> Programmatic access</h2><p>Alpine exposes under-the-hood utilities for getting and setting properties bound with <code>x-model</code>. This is useful for complex Alpine utilities that may want to override the default x-model behavior, or instances where you want to allow <code>x-model</code> on a non-input element.</p><p>You can access these utilities through a property called <code>_x_model</code> on the <code>x-model</code>ed element. <code>_x_model</code> has two methods to get and set the bound property:</p><ul><li><code>el._x_model.get()</code> (returns the value of the bound property)</li><li><code>el._x_model.set()</code> (sets the value of the bound property)</li></ul><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ username: &#39;calebporzio&#39; }&quot;&gt;
    &lt;div x-ref=&quot;div&quot; x-model=&quot;username&quot;&gt;&lt;/div&gt;

    &lt;button @click=&quot;$refs.div._x_model.set(&#39;phantomatrix&#39;)&quot;&gt;
        Change username to: &#39;phantomatrix&#39;
    &lt;/button&gt;

    &lt;span x-text=&quot;$refs.div._x_model.get()&quot;&gt;&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ username: &#39;calebporzio&#39; }&quot;&gt;
        &lt;div x-ref=&quot;div&quot; x-model=&quot;username&quot;&gt;&lt;/div&gt;

        &lt;button @click=&quot;$refs.div._x_model.set(&#39;phantomatrix&#39;)&quot;&gt;
            Change username to: &#39;phantomatrix&#39;
        &lt;/button&gt;

        &lt;span x-text=&quot;$refs.div._x_model.get()&quot;&gt;&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),u=[d,s,o];function r(c,v){return i(),l("div",null,u)}var g=t(a,[["render",r],["__file","model.html.vue"]]);export{g as default};
