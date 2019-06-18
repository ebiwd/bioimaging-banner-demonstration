# BioImaging banner demonstration

This is built with the VF 2.0 architecture for a high level of compatibility with
other site CSS and JS

[View a demo](https://ebiwd.github.io/bioimaging-banner-demonstration)

## Adding the banner to your site

### Option 1. Manually

```
<script src="https://ebiwd.github.io/bioimaging-banner-demonstration/scripts/scripts.js"></script>
<link rel="stylesheet" media="all" href="https://ebiwd.github.io/bioimaging-banner-demonstration/css/styles.css" />
```

```
<!-- You can set custom colours for BioImaging banner,
     this must come before the html snippet -->
<style>
/*
:root {
--vf-bioimaging-banner__color--background: var(--vf-color-gray-dark);
--vf-bioimaging-banner__color--foreground: var(--vf-ui-color-white);
}
*/
</style>
<div data-vf-js-bioimaging-banner class="vf-banner vf-bioimaging-banner vf-banner--static vf-banner--notice">
  <div class="vf-banner__content vf-bioimaging-banner__content" data-vf-js-bioimaging-banner-text>
  </div>
</div>
```

The JS will then add the appropriate content.

### Option 2. As a VF 2.0 component

```
⚠️ Coming soon: This pattern is     ⚠️
⚠️ not yet available from `vf-core` ⚠️
⚠️ Use option 1 for now             ⚠️
```

If you're using the full Visual Framework ecosystem.

1. Install this component
   ```
   yarn add @visual-framework/vf-bioimaging-banner`
   ```
2. Import the JS:
   ```
   import { vfBioimagingBanner } from 'vf-bioimaging-banner/vf-bioimaging-banner';
   vfBioimagingBanner();
   ```
3. Import the CSS:
   ```
   /* Euro-BioImaging banner */
   @import 'vf-bioimaging-banner/vf-bioimaging-banner.scss';
   ```
4. Insert the HTML template:
   ```
   {% render "@vf-bioimaging-banner" %}
   ```
   or with optional theming:
   ```
   {% render "@vf-bioimaging-banner", {color_background: "blue", color_foreground: "orange"} %}
   ```


## Local development

You'll need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then:

1. If you don't have `yarn`, install it
   - https://yarnpkg.com/lang/en/docs/install/
2. Install all the things
   - `yarn install`
3. Generate the site in `/build`
   - `gulp dev` renders and serves
   - `gulp build` build static assets
