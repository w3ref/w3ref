import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as s,c as o,a as e,d,b as t,g as a}from"./app.674943b1.js";const u={},r=e("blockquote",null,[e("p",null,`Notice: This Plugin was previously called "Trap". Trap's functionality has been absorbed into this plugin along with additional functionality. You can swap Trap for Focus without any breaking changes.`)],-1),c=e("h1",{id:"focus-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#focus-plugin","aria-hidden":"true"},"#"),t(" Focus Plugin")],-1),v=e("p",null,"Alpine's Focus plugin allows you to manage focus on a page.",-1),p=t("This plugin internally makes heavy use of the open source tool: "),b={href:"https://github.com/focus-trap/tabbable",target:"_blank",rel:"noopener noreferrer"},m=t("Tabbable"),g=t(". Big thanks to that team for providing a much needed solution to this problem."),h=a(`<p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>You can use this plugin by either including it from a <code>&lt;script&gt;</code> tag or installing it via NPM:</p><h3 id="via-cdn" tabindex="-1"><a class="header-anchor" href="#via-cdn" aria-hidden="true">#</a> Via CDN</h3><p>You can include the CDN build of this plugin as a <code>&lt;script&gt;</code> tag, just make sure to include it BEFORE Alpine&#39;s core JS file.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- Alpine Plugins --&gt;
&lt;script defer src=&quot;https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- Alpine Core --&gt;
&lt;script defer src=&quot;https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="via-npm" tabindex="-1"><a class="header-anchor" href="#via-npm" aria-hidden="true">#</a> Via NPM</h3><p>You can install Focus from NPM for use inside your bundle like so:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @alpinejs/focus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then initialize it from your bundle:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Alpine <span class="token keyword">from</span> <span class="token string">&#39;alpinejs&#39;</span>
<span class="token keyword">import</span> focus <span class="token keyword">from</span> <span class="token string">&#39;@alpinejs/focus&#39;</span>

Alpine<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span>focus<span class="token punctuation">)</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="x-trap"></a></p><h2 id="x-trap" tabindex="-1"><a class="header-anchor" href="#x-trap" aria-hidden="true">#</a> x-trap</h2><p>Focus offers a dedicated API for trapping focus within an element: the <code>x-trap</code> directive.</p><p><code>x-trap</code> accepts a JS expression. If the result of that expression is true, then the focus will be trapped inside that element until the expression becomes false, then at that point, focus will be returned to where it was previously.</p><p>For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = true&quot;&gt;Open Dialog&lt;/button&gt;

    &lt;span x-show=&quot;open&quot; x-trap=&quot;open&quot;&gt;
        &lt;p&gt;...&lt;/p&gt;

        &lt;input type=&quot;text&quot; placeholder=&quot;Some input...&quot;&gt;

        &lt;input type=&quot;text&quot; placeholder=&quot;Some other input...&quot;&gt;

        &lt;button @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
    &lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;div :class=&quot;open &amp;&amp; &#39;opacity-50&#39;&quot;&gt;
        &lt;button x-on:click=&quot;open = true&quot;&gt;Open Dialog&lt;/button&gt;
    &lt;/div&gt;

    &lt;div x-show=&quot;open&quot; x-trap=&quot;open&quot; class=&quot;mt-4 space-y-4 p-4 border bg-yellow-100&quot; @keyup.escape.window=&quot;open = false&quot;&gt;
        &lt;strong&gt;
            &lt;div&gt;Focus is now &quot;trapped&quot; inside this dialog, meaning you can only click/focus elements within this yellow dialog. If you press tab repeatedly, the focus will stay within this dialog.&lt;/div&gt;
        &lt;/strong&gt;

        &lt;div&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;Some input...&quot;&gt;
        &lt;/div&gt;

        &lt;div&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;Some other input...&quot;&gt;
        &lt;/div&gt;

        &lt;div&gt;
            &lt;button @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="nesting"></a></p><h3 id="nesting-dialogs" tabindex="-1"><a class="header-anchor" href="#nesting-dialogs" aria-hidden="true">#</a> Nesting dialogs</h3><p>Sometimes you may want to nest one dialog inside another. <code>x-trap</code> makes this trivial and handles it automatically.</p><p><code>x-trap</code> keeps track of newly &quot;trapped&quot; elements and stores the last actively focused element. Once the element is &quot;untrapped&quot; then the focus will be returned to where it was originally.</p><p>This mechanism is recursive, so you can trap focus within an already trapped element infinite times, then &quot;untrap&quot; each element successively.</p><p>Here is nesting in action:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = true&quot;&gt;Open Dialog&lt;/button&gt;

    &lt;span x-show=&quot;open&quot; x-trap=&quot;open&quot;&gt;

        ...

        &lt;div x-data=&quot;{ open: false }&quot;&gt;
            &lt;button @click=&quot;open = true&quot;&gt;Open Nested Dialog&lt;/button&gt;

            &lt;span x-show=&quot;open&quot; x-trap=&quot;open&quot;&gt;

                ...

                &lt;button @click=&quot;open = false&quot;&gt;Close Nested Dialog&lt;/button&gt;
            &lt;/span&gt;
        &lt;/div&gt;

        &lt;button @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
    &lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div x-data=&quot;{ open: false }&quot; class=&quot;demo&quot;&gt;
    &lt;div :class=&quot;open &amp;&amp; &#39;opacity-50&#39;&quot;&gt;
        &lt;button x-on:click=&quot;open = true&quot;&gt;Open Dialog&lt;/button&gt;
    &lt;/div&gt;

    &lt;div x-show=&quot;open&quot; x-trap=&quot;open&quot; class=&quot;mt-4 space-y-4 p-4 border bg-yellow-100&quot; @keyup.escape.window=&quot;open = false&quot;&gt;
        &lt;div&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;Some input...&quot;&gt;
        &lt;/div&gt;

        &lt;div&gt;
            &lt;input type=&quot;text&quot; placeholder=&quot;Some other input...&quot;&gt;
        &lt;/div&gt;

        &lt;div x-data=&quot;{ open: false }&quot;&gt;
            &lt;div :class=&quot;open &amp;&amp; &#39;opacity-50&#39;&quot;&gt;
                &lt;button x-on:click=&quot;open = true&quot;&gt;Open Nested Dialog&lt;/button&gt;
            &lt;/div&gt;

            &lt;div x-show=&quot;open&quot; x-trap=&quot;open&quot; class=&quot;mt-4 space-y-4 p-4 border border-gray-500 bg-yellow-200&quot; @keyup.escape.window=&quot;open = false&quot;&gt;
                &lt;strong&gt;
                    &lt;div&gt;Focus is now &quot;trapped&quot; inside this nested dialog. You cannot focus anything inside the outer dialog while this is open. If you close this dialog, focus will be returned to the last known active element.&lt;/div&gt;
                &lt;/strong&gt;

                &lt;div&gt;
                    &lt;input type=&quot;text&quot; placeholder=&quot;Some input...&quot;&gt;
                &lt;/div&gt;

                &lt;div&gt;
                    &lt;input type=&quot;text&quot; placeholder=&quot;Some other input...&quot;&gt;
                &lt;/div&gt;

                &lt;div&gt;
                    &lt;button @click=&quot;open = false&quot;&gt;Close Nested Dialog&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div&gt;
            &lt;button @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="modifiers"></a></p><h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers" aria-hidden="true">#</a> Modifiers</h3><p><a name="inert"></a></p><h4 id="inert" tabindex="-1"><a class="header-anchor" href="#inert" aria-hidden="true">#</a> .inert</h4><p>When building things like dialogs/modals, it&#39;s recommended to hide all the other elements on the page from screen readers when trapping focus.</p><p>By adding <code>.inert</code> to <code>x-trap</code>, when focus is trapped, all other elements on the page will receive <code>aria-hidden=&quot;true&quot;</code> attributes, and when focus trapping is disabled, those attributes will also be removed.</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;!-- When \`open\` is \`false\`: --&gt;
&lt;body x-data=&quot;{ open: false }&quot;&gt;
    &lt;div x-trap.inert=&quot;open&quot; ...&gt;
        ...
    &lt;/div&gt;

    &lt;div&gt;
        ...
    &lt;/div&gt;
&lt;/body&gt;

&lt;!-- When \`open\` is \`true\`: --&gt;
&lt;body x-data=&quot;{ open: true }&quot;&gt;
    &lt;div x-trap.inert=&quot;open&quot; ...&gt;
        ...
    &lt;/div&gt;

    &lt;div aria-hidden=&quot;true&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="noscroll"></a></p><h4 id="noscroll" tabindex="-1"><a class="header-anchor" href="#noscroll" aria-hidden="true">#</a> .noscroll</h4><p>When building dialogs/modals with Alpine, it&#39;s recommended that you disable scrolling for the surrounding content when the dialog is open.</p><p><code>x-trap</code> allows you to do this automatically with the <code>.noscroll</code> modifiers.</p><p>By adding <code>.noscroll</code>, Alpine will remove the scrollbar from the page and block users from scrolling down the page while a dialog is open.</p><p>For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button&gt;Open Dialog&lt;/button&gt;

    &lt;div x-show=&quot;open&quot; x-trap.noscroll=&quot;open&quot;&gt;
        Dialog Contents

        &lt;button @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
        &lt;button @click=&quot;open = true&quot;&gt;Open Dialog&lt;/button&gt;

        &lt;div x-show=&quot;open&quot; x-trap.noscroll=&quot;open&quot; class=&quot;border mt-4 p-4&quot;&gt;
            &lt;div class=&quot;mb-4 text-bold&quot;&gt;Dialog Contents&lt;/div&gt;

            &lt;p class=&quot;mb-4 text-gray-600 text-sm&quot;&gt;Notice how you can no longer scroll on this page while this dialog is open.&lt;/p&gt;

            &lt;button class=&quot;mt-4&quot; @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="noreturn"></a></p><h4 id="noreturn" tabindex="-1"><a class="header-anchor" href="#noreturn" aria-hidden="true">#</a> .noreturn</h4><p>Sometimes you may not want focus to be returned to where it was previously. Consider a dropdown that&#39;s triggered upon focusing an input, returning focus to the input on close will just trigger the dropdown to open again.</p><p><code>x-trap</code> allows you to disable this behavior with the <code>.noreturn</code> modifier.</p><p>By adding <code>.noreturn</code>, Alpine will not return focus upon x-trap evaluating to false.</p><p>For example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot; x-trap.noreturn=&quot;open&quot;&gt;
    &lt;input type=&quot;search&quot; placeholder=&quot;search for something&quot; /&gt;

    &lt;div x-show=&quot;open&quot;&gt;
        Search results

        &lt;button @click=&quot;open = false&quot;&gt;Close&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
    &lt;div
        x-data=&quot;{ open: false }&quot;
        x-trap.noreturn=&quot;open&quot;
        @click.outside=&quot;open = false&quot;
        @keyup.escape.prevent.stop=&quot;open = false&quot;
    &gt;
        &lt;input type=&quot;search&quot; placeholder=&quot;search for something&quot;
            @focus=&quot;open = true&quot;
            @keyup.escape.prevent=&quot;$el.blur()&quot;
        /&gt;

        &lt;div x-show=&quot;open&quot;&gt;
            &lt;div class=&quot;mb-4 text-bold&quot;&gt;Search results&lt;/div&gt;

            &lt;p class=&quot;mb-4 text-gray-600 text-sm&quot;&gt;Notice when closing this dropdown, focus is not returned to the input.&lt;/p&gt;

            &lt;button class=&quot;mt-4&quot; @click=&quot;open = false&quot;&gt;Close Dialog&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="focus-magic"></a></p><h2 id="focus" tabindex="-1"><a class="header-anchor" href="#focus" aria-hidden="true">#</a> $focus</h2><p>This plugin offers many smaller utilities for managing focus within a page. These utilities are exposed via the <code>$focus</code> magic.</p><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td><code>focus(el)</code></td><td>Focus the passed element (handling annoyances internally: using nextTick, etc.)</td></tr><tr><td><code>focusable(el)</code></td><td>Detect weather or not an element is focusable</td></tr><tr><td><code>focusables()</code></td><td>Get all &quot;focusable&quot; elements within the current element</td></tr><tr><td><code>focused()</code></td><td>Get the currently focused element on the page</td></tr><tr><td><code>lastFocused()</code></td><td>Get the last focused element on the page</td></tr><tr><td><code>within(el)</code></td><td>Specify an element to scope the <code>$focus</code> magic to (the current element by default)</td></tr><tr><td><code>first()</code></td><td>Focus the first focusable element</td></tr><tr><td><code>last()</code></td><td>Focus the last focusable element</td></tr><tr><td><code>next()</code></td><td>Focus the next focusable element</td></tr><tr><td><code>previous()</code></td><td>Focus the previous focusable element</td></tr><tr><td><code>noscroll()</code></td><td>Prevent scrolling to the element about to be focused</td></tr><tr><td><code>wrap()</code></td><td>When retrieving &quot;next&quot; or &quot;previous&quot; use &quot;wrap around&quot; (ex. returning the first element if getting the &quot;next&quot; element of the last element)</td></tr><tr><td><code>getFirst()</code></td><td>Retrieve the first focusable element</td></tr><tr><td><code>getLast()</code></td><td>Retrieve the last focusable element</td></tr><tr><td><code>getNext()</code></td><td>Retrieve the next focusable element</td></tr><tr><td><code>getPrevious()</code></td><td>Retrieve the previous focusable element</td></tr></tbody></table><p>Let&#39;s walk through a few examples of these utilities in use. The example below allows the user to control focus within the group of buttons using the arrow keys. You can test this by clicking on a button, then using the arrow keys to move focus around:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div
    @keydown.right=&quot;$focus.next()&quot;
    @keydown.left=&quot;$focus.previous()&quot;
&gt;
    &lt;button&gt;First&lt;/button&gt;
    &lt;button&gt;Second&lt;/button&gt;
    &lt;button&gt;Third&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
&lt;div
    x-data
    @keydown.right=&quot;$focus.next()&quot;
    @keydown.left=&quot;$focus.previous()&quot;
&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;First&lt;/button&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;Second&lt;/button&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;Third&lt;/button&gt;
&lt;/div&gt;
(Click a button, then use the arrow keys to move left and right)
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how if the last button is focused, pressing &quot;right arrow&quot; won&#39;t do anything. Let&#39;s add the <code>.wrap()</code> method so that focus &quot;wraps around&quot;:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div
    @keydown.right=&quot;$focus.wrap().next()&quot;
    @keydown.left=&quot;$focus.wrap().previous()&quot;
&gt;
    &lt;button&gt;First&lt;/button&gt;
    &lt;button&gt;Second&lt;/button&gt;
    &lt;button&gt;Third&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot;&gt;
&lt;div
    x-data
    @keydown.right=&quot;$focus.wrap().next()&quot;
    @keydown.left=&quot;$focus.wrap().previous()&quot;
&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;First&lt;/button&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;Second&lt;/button&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;Third&lt;/button&gt;
&lt;/div&gt;
(Click a button, then use the arrow keys to move left and right)
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, let&#39;s add two buttons, one to focus the first element in the button group, and another focus the last element:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;button @click=&quot;$focus.within($refs.buttons).first()&quot;&gt;Focus &quot;First&quot;&lt;/button&gt;
&lt;button @click=&quot;$focus.within($refs.buttons).last()&quot;&gt;Focus &quot;Last&quot;&lt;/button&gt;

&lt;div
    x-ref=&quot;buttons&quot;
    @keydown.right=&quot;$focus.wrap().next()&quot;
    @keydown.left=&quot;$focus.wrap().previous()&quot;
&gt;
    &lt;button&gt;First&lt;/button&gt;
    &lt;button&gt;Second&lt;/button&gt;
    &lt;button&gt;Third&lt;/button&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot; x-data&gt;
&lt;button @click=&quot;$focus.within($refs.buttons).first()&quot;&gt;Focus &quot;First&quot;&lt;/button&gt;
&lt;button @click=&quot;$focus.within($refs.buttons).last()&quot;&gt;Focus &quot;Last&quot;&lt;/button&gt;

&lt;hr class=&quot;mt-2 mb-2&quot;/&gt;

&lt;div
    x-ref=&quot;buttons&quot;
    @keydown.right=&quot;$focus.wrap().next()&quot;
    @keydown.left=&quot;$focus.wrap().previous()&quot;
&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;First&lt;/button&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;Second&lt;/button&gt;
    &lt;button class=&quot;focus:outline-none focus:ring-2 focus:ring-cyan-400&quot;&gt;Third&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that we needed to add a <code>.within()</code> method for each button so that <code>$focus</code> knows to scope itself to a different element (the <code>div</code> wrapping the buttons).</p>`,63);function q(f,x){const n=l("ExternalLinkIcon");return s(),o("div",null,[r,c,v,e("blockquote",null,[e("p",null,[p,e("a",b,[m,d(n)]),g])]),h])}var k=i(u,[["render",q],["__file","focus.html.vue"]]);export{k as default};
