---
subtitle: No homepage, yet.
date: 2018-08-22 12:24:50
layout: layouts/base.njk
---




## What you get

- the Eleventy static site generator
- access to the Visual Framework component system

To add a component you can use npm/Yarn or install it manually.

### Component installation

- installation: `yarn add @visual-framework/vf-logo`
- updating: `yarn upgrade-interactive --latest`

### Manual installation for customisation

1. Download a pattern
2. Copy it to `./src/components/vf-component-name`

In either case you'll need to re-run `gulp dev` to access the pattern.

### Add your own local component

You can add a custom VF-compatible component to `./src/components` and use it in
your site.

You'll find a `vf-sample` component there, we've used it below:

<div class="vf-box">
{% verbatim %}
Code: {% render "@vf-sample", {text: "with some text"} %}
{% endverbatim %}

Returns: {% render "@vf-sample", {text: "with some text"} %}
</div>
