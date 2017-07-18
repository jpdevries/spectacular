<h1>🎉&ensp;<span style="font-style: normal">spec</span><em>tacular</em>&nbsp;documentation</h1>

spec<em>tacular</em> is a silent Sass library that when strapped accordingly can be used with pure&nbsp;CSS. The Sass implementation empowers your workflow with helpful silent classes, mixins, and variables. The CSS implementation consists of several strap files that accumulatively add <code>3.8kB</code> to your CSS&nbsp;footprint.

Both implementations support CSS property based module&nbsp;styling that allow you to author semantic HTML, set some CSS&nbsp;Properties, and enjoy your new spec<em>tacularly</em> styled&nbsp;content.

<pre>
.my.spectacular.module {
  --module-background: rebeccapurple;
  --module-color: white;
}

.my.other.spectacular.module {
  --module-background: white;
  --module-color: rebeccapurple;
}
</pre>

## Getting Started

<p>spec<em>tacular</em> can be <a href="https://bower.io/#install-bower" target="_install-bower">installed with&nbsp;Bower</a>.</p>

<pre>
bower install spectacular --save
ls bower_components/spectacular/app/assets/stylesheets/spec</pre>

<div style="margin-top:1rem">
  <p>We recommend adding an <code>exportsOverride</code> to your <code>bower.json</code>.</p>
</div>
<div>
  <pre>
"exportsOverride": {
  "spectacular": {
    "": "app/assets/stylesheets/"
  }
}</pre>
</div>

<div style="margin-top: 1rem">
  <p>You'll find spec<em>tacular</em>’s Sass files in <code>app/assets/stylesheets/</code> and will want to load or copy them from&nbsp;there.</p>
</div>

## Straps

### Sass&nbsp;usage

<div>
  <p>spec<i>tacular</i>, shy as it is, remains initially silent but it will speak up when you ask it to. Import one or more straps to begin designing without having to write any styling&nbsp;code.</p>
</div>

```css
@import "spec/tacular";

/* optionally include one or more straps
@import "spec/straps/aria";
@import "spec/straps/base";
@import "spec/straps/contrast";
@import "spec/straps/effects";
@import "spec/straps/heading";
@import "spec/straps/layout";
@import "spec/straps/module";
@import "spec/straps/typography";
@import "spec/straps/visibility"; */

/* start writing spectacular Sass */
.my-custom-module {
  @extend %module;
  --module-background: rebeccapurple;
  --module-border-color: rebeccapurple;
  --module-color: white;
}
```

<p style="margin-top: 1rem">
Then get started with <a href="section-components.html">components</a>, <a href="">components</a>, <a href="section-mixins.html">mixins</a>, and <a href="section-variables.html">variables</a>.
</p>

### CSS&nbsp;usage

Include the spec<em>tacular</em> CSS in your&nbsp;page and <a href="section-straps.html">start using spec <em>tacular</em>’s Strap&nbsp;classes</a>.

<pre>
  &lt;link type="text/css" href="assets/css/spectacular.0.1.0.min.css" /&gt;
</pre>

<pre style="margin-top: 1rem">
&#x3C;div class=&#x22;my spectacular module&#x22;&#x3E;
  &#x3C;h2&#x3E;That&#x27;s all for now&#x3C;/h2&#x3E;
  &#x3C;p&#x3E;Check back later, and don&#x27;t forget &#x3C;a href=&#x22;https://github.com/jpdevries/spectacular&#x22; target=&#x22;_github&#x22;&#x3E;If you like it then you shoulda put a name on&#x26;nbsp;it&#x3C;/a&#x3E;.&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
</pre>

<div class="my spectacular module" style="margin-top: 1rem">
  <h2>That's all for now</h2>
  <p>Check back later, and remember <a href="https://github.com/jpdevries/spectacular" target="_github">If you like it then you shoulda put a star on&nbsp;it</a>.</p>
</div>
