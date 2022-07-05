import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o,c as d,a as e,d as l,g as n,b as i}from"./app.674943b1.js";const r={},c=n(`<h1 id="x-transition" tabindex="-1"><a class="header-anchor" href="#x-transition" aria-hidden="true">#</a> x-transition</h1><p>Alpine provides a robust transitions utility out of the box. With a few <code>x-transition</code> directives, you can create smooth transitions between when an element is shown or hidden.</p><p>There are two primary ways to handle transitions in Alpine:</p><ul><li><a href="#the-transition-helper">The Transition Helper</a></li><li><a href="#applying-css-classes">Applying CSS Classes</a></li></ul><p><a name="the-transition-helper"></a></p><h2 id="the-transition-helper" tabindex="-1"><a class="header-anchor" href="#the-transition-helper" aria-hidden="true">#</a> The transition helper</h2><p>The simplest way to achieve a transition using Alpine is by adding <code>x-transition</code> to an element with <code>x-show</code> on it. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle&lt;/button&gt;

    &lt;span x-show=&quot;open&quot; x-transition&gt;
        Hello \u{1F44B}
    &lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
        &lt;button @click=&quot;open = ! open&quot;&gt;Toggle&lt;/button&gt;

        &lt;span x-show=&quot;open&quot; x-transition&gt;
            Hello \u{1F44B}
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, by default, <code>x-transition</code> applies pleasant transition defaults to fade and scale the revealing element.</p><p>You can override these defaults with modifiers attached to <code>x-transition</code>. Let&#39;s take a look at those.</p><p><a name="customizing-duration"></a></p><h3 id="customizing-duration" tabindex="-1"><a class="header-anchor" href="#customizing-duration" aria-hidden="true">#</a> Customizing duration</h3><p>Initially, the duration is set to be 150 milliseconds when entering, and 75 milliseconds when leaving.</p><p>You can configure the duration you want for a transition with the <code>.duration</code> modifier:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ... x-transition.duration.500ms&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above <code>&lt;div&gt;</code> will transition for 500 milliseconds when entering, and 500 milliseconds when leaving.</p><p>If you wish to customize the durations specifically for entering and leaving, you can do that like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ...
    x-transition:enter.duration.500ms
    x-transition:leave.duration.400ms
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-delay"></a></p><h3 id="customizing-delay" tabindex="-1"><a class="header-anchor" href="#customizing-delay" aria-hidden="true">#</a> Customizing delay</h3><p>You can delay a transition using the <code>.delay</code> modifier like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ... x-transition.delay.50ms&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above example will delay the transition and in and out of the element by 50 milliseconds.</p><p><a name="customizing-opacity"></a></p><h3 id="customizing-opacity" tabindex="-1"><a class="header-anchor" href="#customizing-opacity" aria-hidden="true">#</a> Customizing opacity</h3><p>By default, Alpine&#39;s <code>x-transition</code> applies both a scale and opacity transition to achieve a &quot;fade&quot; effect.</p><p>If you wish to only apply the opacity transition (no scale), you can accomplish that like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ... x-transition.opacity&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="customizing-scale"></a></p><h3 id="customizing-scale" tabindex="-1"><a class="header-anchor" href="#customizing-scale" aria-hidden="true">#</a> Customizing scale</h3><p>Similar to the <code>.opacity</code> modifier, you can configure <code>x-transition</code> to ONLY scale (and not transition opacity as well) like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ... x-transition.scale&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>.scale</code> modifier also offers the ability to configure its scale values AND its origin values:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ... x-transition.scale.80&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above snippet will scale the element up and down by 80%.</p><p>Again, you may customize these values separately for enter and leaving transitions like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ...
    x-transition:enter.scale.80
    x-transition:leave.scale.90
&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To customize the origin of the scale transition, you can use the <code>.origin</code> modifier:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div ... x-transition.scale.origin.top&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now the scale will be applied using the top of the element as the origin, instead of the center by default.</p><p>Like you may have guessed, the possible values for this customization are: <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code>.</p><p>If you wish, you can also combine two origin values. For example, if you want the origin of the scale to be &quot;top right&quot;, you can use: <code>.origin.top.right</code> as the modifier.</p><p><a name="applying-css-classes"></a></p><h2 id="applying-css-classes" tabindex="-1"><a class="header-anchor" href="#applying-css-classes" aria-hidden="true">#</a> Applying CSS classes</h2><p>For direct control over exactly what goes into your transitions, you can apply CSS classes at different stages of the transition.</p>`,46),u=i("The following examples use "),v={href:"https://tailwindcss.com/docs/transition-property",target:"_blank",rel:"noopener noreferrer"},p=i("TailwindCSS"),m=i(" utility classes."),h=n(`<div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle&lt;/button&gt;

    &lt;div
        x-show=&quot;open&quot;
        x-transition:enter=&quot;transition ease-out duration-300&quot;
        x-transition:enter-start=&quot;opacity-0 scale-90&quot;
        x-transition:enter-end=&quot;opacity-100 scale-100&quot;
        x-transition:leave=&quot;transition ease-in duration-300&quot;
        x-transition:leave-start=&quot;opacity-100 scale-100&quot;
        x-transition:leave-end=&quot;opacity-0 scale-90&quot;
    &gt;Hello \u{1F44B}&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle&lt;/button&gt;

    &lt;div
        x-show=&quot;open&quot;
        x-transition:enter=&quot;transition ease-out duration-300&quot;
        x-transition:enter-start=&quot;opacity-0 transform scale-90&quot;
        x-transition:enter-end=&quot;opacity-100 transform scale-100&quot;
        x-transition:leave=&quot;transition ease-in duration-300&quot;
        x-transition:leave-start=&quot;opacity-100 transform scale-100&quot;
        x-transition:leave-end=&quot;opacity-0 transform scale-90&quot;
    &gt;Hello \u{1F44B}&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Directive</th><th>Description</th></tr></thead><tbody><tr><td><code>:enter</code></td><td>Applied during the entire entering phase.</td></tr><tr><td><code>:enter-start</code></td><td>Added before element is inserted, removed one frame after element is inserted.</td></tr><tr><td><code>:enter-end</code></td><td>Added one frame after element is inserted (at the same time <code>enter-start</code> is removed), removed when transition/animation finishes.</td></tr><tr><td><code>:leave</code></td><td>Applied during the entire leaving phase.</td></tr><tr><td><code>:leave-start</code></td><td>Added immediately when a leaving transition is triggered, removed after one frame.</td></tr><tr><td><code>:leave-end</code></td><td>Added one frame after a leaving transition is triggered (at the same time <code>leave-start</code> is removed), removed when the transition/animation finishes.</td></tr></tbody></table>`,3);function g(b,f){const t=s("ExternalLinkIcon");return o(),d("div",null,[c,e("blockquote",null,[e("p",null,[u,e("a",v,[p,l(t)]),m])]),h])}var q=a(r,[["render",g],["__file","transition.html.vue"]]);export{q as default};
