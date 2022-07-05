import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as s,c as a,a as e,d as l,b as t,g as i}from"./app.674943b1.js";const r={},u=e("h1",{id:"x-teleport",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#x-teleport","aria-hidden":"true"},"#"),t(" x-teleport")],-1),c=e("p",null,[t("The "),e("code",null,"x-teleport"),t(" directive allows you to transport part of your Alpine template to another part of the DOM on the page entirely.")],-1),v=e("p",null,"This is useful for things like modals (especially nesting them), where it's helpful to break out of the z-index of the current Alpine component.",-1),m=t("Warning: if you are a "),p={href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"},g=t("Livewire"),b=t(" user, this functionality does not currently work inside Livewire components. Support for this is on the roadmap."),h=i('<p><a name="x-teleport"></a></p><h2 id="x-teleport-1" tabindex="-1"><a class="header-anchor" href="#x-teleport-1" aria-hidden="true">#</a> x-teleport</h2><p>By attaching <code>x-teleport</code> to a <code>&lt;template&gt;</code> element, you are telling Alpine to &quot;append&quot; that element to the provided selector.</p><blockquote><p>The <code>x-teleport</code> selector can be any string you would normally pass into something like <code>document.querySelector</code>. It will find the first element that matches, be it a tag name (<code>body</code>), class name (<code>.my-class</code>), ID (<code>#my-id</code>), or any other valid CSS selector.</p></blockquote>',4),q={href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",target:"_blank",rel:"noopener noreferrer"},f=t("\u2192 Read more about "),x=e("code",null,"document.querySelector",-1),y=i(`<p>Here&#39;s a contrived modal example:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;body&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
        &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Modal&lt;/button&gt;

        &lt;template x-teleport=&quot;body&quot;&gt;
            &lt;div x-show=&quot;open&quot;&gt;
                Modal contents...
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/div&gt;

    &lt;div&gt;Some other content placed AFTER the modal markup.&lt;/div&gt;

    ...

&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot; x-ref=&quot;root&quot; id=&quot;modal2&quot;&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
        &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Modal&lt;/button&gt;

        &lt;template x-teleport=&quot;#modal2&quot;&gt;
            &lt;div x-show=&quot;open&quot;&gt;
                Modal contents...
            &lt;/div&gt;
        &lt;/template&gt;

    &lt;/div&gt;

    &lt;div class=&quot;py-4&quot;&gt;Some other content placed AFTER the modal markup.&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how when toggling the modal, the actual modal contents show up AFTER the &quot;Some other content...&quot; element? This is because when Alpine is initializing, it sees <code>x-teleport=&quot;body&quot;</code> and appends and initializes that element to the provided element selector.</p><p><a name="forwarding-events"></a></p><h2 id="forwarding-events" tabindex="-1"><a class="header-anchor" href="#forwarding-events" aria-hidden="true">#</a> Forwarding events</h2><p>Alpine tries its best to make the experience of teleporting seamless. Anything you would normally do in a template, you should be able to do inside an <code>x-teleport</code> template. Teleported content can access the normal Alpine scope of the component as well as other features like <code>$refs</code>, <code>$root</code>, etc...</p><p>However, native DOM events have no concept of teleportation, so if, for example, you trigger a &quot;click&quot; event from inside a teleported element, that event will bubble up the DOM tree as it normally would.</p><p>To make this experience more seamless, you can &quot;forward&quot; events by simply registering event listeners on the <code>&lt;template x-teleport...&gt;</code> element itself like so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Modal&lt;/button&gt;

    &lt;template x-teleport=&quot;body&quot; @click=&quot;open = false&quot;&gt;
        &lt;div x-show=&quot;open&quot;&gt;
            Modal contents...
            (click to close)
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot; x-ref=&quot;root&quot; id=&quot;modal3&quot;&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
        &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Modal&lt;/button&gt;

        &lt;template x-teleport=&quot;#modal3&quot; @click=&quot;open = false&quot;&gt;
            &lt;div x-show=&quot;open&quot;&gt;
                Modal contents...
                &lt;div&gt;(click to close)&lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how we are now able to listen for events dispatched from within the teleported element from outside the <code>&lt;template&gt;</code> element itself?</p><p>Alpine does this by looking for event listeners registered on <code>&lt;template x-teleport...&gt;</code> and stops those events from propagating past the live, teleported, DOM element. Then, it creates a copy of that event and re-dispatches it from <code>&lt;template x-teleport...&gt;</code>.</p><p><a name="nesting"></a></p><h2 id="nesting" tabindex="-1"><a class="header-anchor" href="#nesting" aria-hidden="true">#</a> Nesting</h2><p>Teleporting is especially helpful if you are trying to nest one modal within another. Alpine makes it simple to do so:</p><div class="language-alpine ext-alpine line-numbers-mode"><pre class="language-alpine"><code>&lt;div x-data=&quot;{ open: false }&quot;&gt;
    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Modal&lt;/button&gt;

    &lt;template x-teleport=&quot;body&quot;&gt;
        &lt;div x-show=&quot;open&quot;&gt;
            Modal contents...
            
            &lt;div x-data=&quot;{ open: false }&quot;&gt;
                &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Nested Modal&lt;/button&gt;

                &lt;template x-teleport=&quot;body&quot;&gt;
                    &lt;div x-show=&quot;open&quot;&gt;
                        Nested modal contents...
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-alpinejs ext-alpinejs line-numbers-mode"><pre class="language-alpinejs"><code>&lt;div class=&quot;demo&quot; x-ref=&quot;root&quot; id=&quot;modal4&quot;&gt;
    &lt;div x-data=&quot;{ open: false }&quot;&gt;
        &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Modal&lt;/button&gt;

        &lt;template x-teleport=&quot;#modal4&quot;&gt;
            &lt;div x-show=&quot;open&quot;&gt;
                &lt;div class=&quot;py-4&quot;&gt;Modal contents...&lt;/div&gt;
                
                &lt;div x-data=&quot;{ open: false }&quot;&gt;
                    &lt;button @click=&quot;open = ! open&quot;&gt;Toggle Nested Modal&lt;/button&gt;

                    &lt;template x-teleport=&quot;#modal4&quot;&gt;
                        &lt;div class=&quot;pt-4&quot; x-show=&quot;open&quot;&gt;
                            Nested modal contents...
                        &lt;/div&gt;
                    &lt;/template&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/div&gt;

    &lt;template x-teleport-target=&quot;modals3&quot;&gt;&lt;/template&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After toggling &quot;on&quot; both modals, they are authored as children, but will be rendered as sibling elements on the page, not within one another.</p>`,19);function _(w,k){const n=d("ExternalLinkIcon");return s(),a("div",null,[u,c,v,e("blockquote",null,[e("p",null,[m,e("a",p,[g,l(n)]),b])]),h,e("p",null,[e("a",q,[f,x,l(n)])]),y])}var A=o(r,[["render",_],["__file","teleport.html.vue"]]);export{A as default};
