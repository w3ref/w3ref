import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as d,c as s,a as i,d as a,g as o,b as e}from"./app.674943b1.js";const r={},c=o(`<h1 id="upgrade-from-v2" tabindex="-1"><a class="header-anchor" href="#upgrade-from-v2" aria-hidden="true">#</a> Upgrade from V2</h1><p>Below is an exhaustive guide on the breaking changes in Alpine V3, but if you&#39;d prefer something more lively, you can review all the changes as well as new features in V3 by watching the Alpine Day 2021 &quot;Future of Alpine&quot; keynote:</p><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;relative w-full&quot; style=&quot;padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden;&quot;&gt;
    &lt;iframe
            class=&quot;absolute top-0 left-0 right-0 bottom-0 w-full h-full&quot;
            src=&quot;https://www.youtube.com/embed/WixS4JXMwIQ?modestbranding=1&amp;autoplay=1&quot;
            allow=&quot;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture&quot;
            allowfullscreen
    &gt;&lt;/iframe&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Upgrading from Alpine V2 to V3 should be fairly painless. In many cases, NOTHING has to be done to your codebase to use V3. Below is an exhaustive list of breaking changes and deprecations in descending order of how likely users are to be affected by them:</p><blockquote><p>Note if you use Laravel Livewire and Alpine together, to use V3 of Alpine, you will need to upgrade to Livewire v2.5.1 or greater.</p></blockquote><p><a name="breaking-changes"></a></p><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking Changes</h2><ul><li><a href="#el-no-longer-root"><code>$el</code> is now always the current element</a></li><li><a href="#auto-init">Automatically evaluate <code>init()</code> functions defined on data object</a></li><li><a href="#need-to-call-alpine-start">Need to call <code>Alpine.start()</code> after import</a></li><li><a href="#removed-show-dot-transition"><code>x-show.transition</code> is now <code>x-transition</code></a></li><li><a href="#x-if-no-transitions"><code>x-if</code> no longer supports <code>x-transition</code></a></li><li><a href="#x-data-scope"><code>x-data</code> cascading scope</a></li><li><a href="#x-init-no-callback"><code>x-init</code> no longer accepts a callback return</a></li><li><a href="#no-false-return-from-event-handlers">Returning <code>false</code> from event handlers no longer implicitly &quot;preventDefault&quot;s</a></li><li><a href="#x-spread-now-x-bind"><code>x-spread</code> is now <code>x-bind</code></a></li><li><a href="#x-ref-no-more-dynamic"><code>x-ref</code> no longer supports binding</a></li><li><a href="#use-global-events-now">Use global lifecycle events instead of <code>Alpine.deferLoadingAlpine()</code></a></li><li><a href="#no-ie-11">IE11 no longer supported</a></li></ul><p><a name="el-no-longer-root"></a></p><h3 id="el-is-now-always-the-current-element" tabindex="-1"><a class="header-anchor" href="#el-is-now-always-the-current-element" aria-hidden="true">#</a> <code>$el</code> is now always the current element</h3><p><code>$el</code> now always represents the element that an expression was executed on, not the root element of the component. This will replace most usages of <code>x-ref</code> and in the cases where you still want to access the root of a component, you can do so using <code>$root</code>. For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data&gt;
    &lt;button @click=&quot;console.log($el)&quot;&gt;&lt;/button&gt;
    &lt;!-- In V2, $el would have been the &lt;div&gt;, now it&#39;s the &lt;button&gt; --&gt;
&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data&gt;
    &lt;button @click=&quot;console.log($root)&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For a smoother upgrade experience, you can replace all instances of <code>$el</code> with a custom magic called <code>$root</code>.</p><p><a href="./magics/el">\u2192 Read more about $el in V3</a><br><a href="./magics/root">\u2192 Read more about $root in V3</a></p><p><a name="auto-init"></a></p><h3 id="automatically-evaluate-init-functions-defined-on-data-object" tabindex="-1"><a class="header-anchor" href="#automatically-evaluate-init-functions-defined-on-data-object" aria-hidden="true">#</a> Automatically evaluate <code>init()</code> functions defined on data object</h3><p>A common pattern in V2 was to manually call an <code>init()</code> (or similarly named method) on an <code>x-data</code> object.</p><p>In V3, Alpine will automatically call <code>init()</code> methods on data objects.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data=&quot;foo()&quot; x-init=&quot;init()&quot;&gt;&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data=&quot;foo()&quot;&gt;&lt;/div&gt;

&lt;script&gt;
    function foo() {
        return {
            init() {
                //
            }
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./globals/alpine-data#init-functions">\u2192 Read more about auto-evaluating init functions</a></p><p><a name="need-to-call-alpine-start"></a></p><h3 id="need-to-call-alpine-start-after-import" tabindex="-1"><a class="header-anchor" href="#need-to-call-alpine-start-after-import" aria-hidden="true">#</a> Need to call Alpine.start() after import</h3><p>If you were importing Alpine V2 from NPM, you will now need to manually call <code>Alpine.start()</code> for V3. This doesn&#39;t affect you if you use Alpine&#39;s build file or CDN from a <code>&lt;template&gt;</code> tag.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u{1F6AB} Before</span>
<span class="token keyword">import</span> <span class="token string">&#39;alpinejs&#39;</span>

<span class="token comment">// \u2705 After</span>
<span class="token keyword">import</span> Alpine <span class="token keyword">from</span> <span class="token string">&#39;alpinejs&#39;</span>

window<span class="token punctuation">.</span>Alpine <span class="token operator">=</span> Alpine

Alpine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./essentials/installation#as-a-module">\u2192 Read more about initializing Alpine V3</a></p><p><a name="removed-show-dot-transition"></a></p><h3 id="x-show-transition-is-now-x-transition" tabindex="-1"><a class="header-anchor" href="#x-show-transition-is-now-x-transition" aria-hidden="true">#</a> <code>x-show.transition</code> is now <code>x-transition</code></h3><p>All of the conveniences provided by <code>x-show.transition...</code> helpers are still available, but now from a more unified API: <code>x-transition</code>:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-show.transition=&quot;open&quot;&gt;&lt;/div&gt;
&lt;!-- \u2705 After --&gt;
&lt;div x-show=&quot;open&quot; x-transition&gt;&lt;/div&gt;

&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-show.transition.duration.500ms=&quot;open&quot;&gt;&lt;/div&gt;
&lt;!-- \u2705 After --&gt;
&lt;div x-show=&quot;open&quot; x-transition.duration.500ms&gt;&lt;/div&gt;

&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-show.transition.in.duration.500ms.out.duration.750ms=&quot;open&quot;&gt;&lt;/div&gt;
&lt;!-- \u2705 After --&gt;
&lt;div
    x-show=&quot;open&quot;
    x-transition:enter.duration.500ms
    x-transition:leave.duration.750ms
&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/transition">\u2192 Read more about x-transition</a></p><p><a name="x-if-no-transitions"></a></p><h3 id="x-if-no-longer-supports-x-transition" tabindex="-1"><a class="header-anchor" href="#x-if-no-longer-supports-x-transition" aria-hidden="true">#</a> <code>x-if</code> no longer supports <code>x-transition</code></h3><p>The ability to transition elements in and add before/after being removed from the DOM is no longer available in Alpine.</p><p>This was a feature very few people even knew existed let alone used.</p><p>Because the transition system is complex, it makes more sense from a maintenance perspective to only support transitioning elements with <code>x-show</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;template x-if.transition=&quot;open&quot;&gt;
    &lt;div&gt;...&lt;/div&gt;
&lt;/template&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-show=&quot;open&quot; x-transition&gt;...&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/if">\u2192 Read more about x-if</a></p><p><a name="x-data-scope"></a></p><h3 id="x-data-cascading-scope" tabindex="-1"><a class="header-anchor" href="#x-data-cascading-scope" aria-hidden="true">#</a> <code>x-data</code> cascading scope</h3><p>Scope defined in <code>x-data</code> is now available to all children unless overwritten by a nested <code>x-data</code> expression.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data=&quot;{ foo: &#39;bar&#39; }&quot;&gt;
    &lt;div x-data=&quot;{}&quot;&gt;
        &lt;!-- foo is undefined --&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data=&quot;{ foo: &#39;bar&#39; }&quot;&gt;
    &lt;div x-data=&quot;{}&quot;&gt;
        &lt;!-- foo is &#39;bar&#39; --&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/data#scope">\u2192 Read more about x-data scoping</a></p><p><a name="x-init-no-callback"></a></p><h3 id="x-init-no-longer-accepts-a-callback-return" tabindex="-1"><a class="header-anchor" href="#x-init-no-longer-accepts-a-callback-return" aria-hidden="true">#</a> <code>x-init</code> no longer accepts a callback return</h3><p>Before V3, if <code>x-init</code> received a return value that is <code>typeof</code> &quot;function&quot;, it would execute the callback after Alpine finished initializing all other directives in the tree. Now, you must manually call <code>$nextTick()</code> to achieve that behavior. <code>x-init</code> is no longer &quot;return value aware&quot;.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data x-init=&quot;() =&gt; { ... }&quot;&gt;...&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data x-init=&quot;$nextTick(() =&gt; { ... })&quot;&gt;...&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./magics/next-tick">\u2192 Read more about $nextTick</a></p><p><a name="no-false-return-from-event-handlers"></a></p><h3 id="returning-false-from-event-handlers-no-longer-implicitly-preventdefault-s" tabindex="-1"><a class="header-anchor" href="#returning-false-from-event-handlers-no-longer-implicitly-preventdefault-s" aria-hidden="true">#</a> Returning <code>false</code> from event handlers no longer implicitly &quot;preventDefault&quot;s</h3><p>Alpine V2 observes a return value of <code>false</code> as a desire to run <code>preventDefault</code> on the event. This conforms to the standard behavior of native, inline listeners: <code>&lt;... oninput=&quot;someFunctionThatReturnsFalse()&quot;&gt;</code>. Alpine V3 no longer supports this API. Most people don&#39;t know it exists and therefore is surprising behavior.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data=&quot;{ blockInput() { return false } }&quot;&gt;
    &lt;input type=&quot;text&quot; @input=&quot;blockInput()&quot;&gt;
&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data=&quot;{ blockInput(e) { e.preventDefault() }&quot;&gt;
    &lt;input type=&quot;text&quot; @input=&quot;blockInput($event)&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/on">\u2192 Read more about x-on</a></p><p><a name="x-spread-now-x-bind"></a></p><h3 id="x-spread-is-now-x-bind" tabindex="-1"><a class="header-anchor" href="#x-spread-is-now-x-bind" aria-hidden="true">#</a> <code>x-spread</code> is now <code>x-bind</code></h3><p>One of Alpine&#39;s stories for re-using functionality is abstracting Alpine directives into objects and applying them to elements with <code>x-spread</code>. This behavior is still the same, except now <code>x-bind</code> (with no specified attribute) is the API instead of <code>x-spread</code>.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data=&quot;dropdown()&quot;&gt;
    &lt;button x-spread=&quot;trigger&quot;&gt;Toggle&lt;/button&gt;

    &lt;div x-spread=&quot;dialogue&quot;&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data=&quot;dropdown()&quot;&gt;
    &lt;button x-bind=&quot;trigger&quot;&gt;Toggle&lt;/button&gt;

    &lt;div x-bind=&quot;dialogue&quot;&gt;...&lt;/div&gt;
&lt;/div&gt;


&lt;script&gt;
    function dropdown() {
        return {
            open: false,

            trigger: {
                &#39;x-on:click&#39;() { this.open = ! this.open },
            },

            dialogue: {
                &#39;x-show&#39;() { return this.open },
                &#39;x-bind:class&#39;() { return &#39;foo bar&#39; },
            },
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./directives/bind#bind-directives">\u2192 Read more about binding directives using x-bind</a></p><p><a name="use-global-events-now"></a></p><h3 id="use-global-lifecycle-events-instead-of-alpine-deferloadingalpine" tabindex="-1"><a class="header-anchor" href="#use-global-lifecycle-events-instead-of-alpine-deferloadingalpine" aria-hidden="true">#</a> Use global lifecycle events instead of <code>Alpine.deferLoadingAlpine()</code></h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;script&gt;
    window.deferLoadingAlpine = startAlpine =&gt; {
        // Will be executed before initializing Alpine.

        startAlpine()

        // Will be executed after initializing Alpine.
    }
&lt;/script&gt;

&lt;!-- \u2705 After --&gt;
&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        // Will be executed before initializing Alpine.
    })

    document.addEventListener(&#39;alpine:initialized&#39;, () =&gt; {
        // Will be executed after initializing Alpine.
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="./essentials/lifecycle#alpine-initialization">\u2192 Read more about Alpine lifecycle events</a></p><p><a name="x-ref-no-more-dynamic"></a></p><h3 id="x-ref-no-longer-supports-binding" tabindex="-1"><a class="header-anchor" href="#x-ref-no-longer-supports-binding" aria-hidden="true">#</a> <code>x-ref</code> no longer supports binding</h3><p>In Alpine V2 for below code</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{options: [{value: 1}, {value: 2}, {value: 3}] }&quot;&gt;
    &lt;div x-ref=&quot;0&quot;&gt;0&lt;/div&gt;
    &lt;template x-for=&quot;option in options&quot;&gt;
        &lt;div :x-ref=&quot;option.value&quot; x-text=&quot;option.value&quot;&gt;&lt;/div&gt;
    &lt;/template&gt;

    &lt;button @click=&quot;console.log($refs[0], $refs[1], $refs[2], $refs[3]);&quot;&gt;Display $refs&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>after clicking button all <code>$refs</code> were displayed. However, in Alpine V3 it&#39;s possible to access only <code>$refs</code> for elements created statically, so only first ref will be returned as expected.</p><p><a name="no-ie-11"></a></p><h3 id="ie11-no-longer-supported" tabindex="-1"><a class="header-anchor" href="#ie11-no-longer-supported" aria-hidden="true">#</a> IE11 no longer supported</h3><p>Alpine will no longer officially support Internet Explorer 11. If you need support for IE11, we recommend still using Alpine V2.</p><h2 id="deprecated-apis" tabindex="-1"><a class="header-anchor" href="#deprecated-apis" aria-hidden="true">#</a> Deprecated APIs</h2><p>The following 2 APIs will still work in V3, but are considered deprecated and are likely to be removed at some point in the future.</p><p><a name="away-replace-with-outside"></a></p><h3 id="event-listener-modifier-away-should-be-replaced-with-outside" tabindex="-1"><a class="header-anchor" href="#event-listener-modifier-away-should-be-replaced-with-outside" aria-hidden="true">#</a> Event listener modifier <code>.away</code> should be replaced with <code>.outside</code></h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-show=&quot;open&quot; @click.away=&quot;open = false&quot;&gt;
    ...
&lt;/div&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-show=&quot;open&quot; @click.outside=&quot;open = false&quot;&gt;
    ...
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="alpine-data-instead-of-global-functions"></a></p><h3 id="prefer-alpine-data-to-global-alpine-function-data-providers" tabindex="-1"><a class="header-anchor" href="#prefer-alpine-data-to-global-alpine-function-data-providers" aria-hidden="true">#</a> Prefer <code>Alpine.data()</code> to global Alpine function data providers</h3><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- \u{1F6AB} Before --&gt;
&lt;div x-data=&quot;dropdown()&quot;&gt;
    ...
&lt;/div&gt;

&lt;script&gt;
    function dropdown() {
        return {
            ...
        }
    }
&lt;/script&gt;

&lt;!-- \u2705 After --&gt;
&lt;div x-data=&quot;dropdown&quot;&gt;
    ...
&lt;/div&gt;

&lt;script&gt;
    document.addEventListener(&#39;alpine:init&#39;, () =&gt; {
        Alpine.data(&#39;dropdown&#39;, () =&gt; ({
            ...
        }))
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),u=e("Note that you need to define "),v=i("code",null,"Alpine.data()",-1),p=e(" extensions BEFORE you call "),m=i("code",null,"Alpine.start()",-1),b=e(". For more information, refer to the "),g={href:"https://alpinejs.dev/advanced/extending#lifecycle-concerns",target:"_blank",rel:"noopener noreferrer"},h=e("Lifecycle Concerns"),f=e(" and "),x={href:"https://alpinejs.dev/essentials/installation#as-a-module",target:"_blank",rel:"noopener noreferrer"},w=e("Installation as a Module"),q=e(" documentation pages.");function y(A,k){const n=l("ExternalLinkIcon");return d(),s("div",null,[c,i("blockquote",null,[i("p",null,[u,v,p,m,b,i("a",g,[h,a(n)]),f,i("a",x,[w,a(n)]),q])])])}var I=t(r,[["render",y],["__file","upgrade-guide.html.vue"]]);export{I as default};
