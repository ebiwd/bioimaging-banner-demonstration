# Eleventy boilerplate for Visual Framework 2.0

This is built with the VF 2.0 architecture for a high level of compatibility with
other site CSS and JS

## Adding the banner to your site

### Option 1. Manually

```
<script src="/vf-eleventy/scripts/scripts.js"></script>
<link rel="stylesheet" media="all" href="/vf-eleventy/css/styles.css" />
```

```
<div data-vf-js-bioimaging-banner class="vf-banner vf-bioimaging-banner vf-banner--static vf-banner--notice">
  <div class="vf-banner__content vf-bioimaging-banner__content" data-vf-js-bioimaging-banner-text>
  </div>
</div>
```

The JS will then add the appropriate content.

### Option 2. As a VF 2.0 component

1. `yarn add @visual-framework/vf-bioimaging-banner`
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

## Local development

You'll need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then:

1. If you don't have `yarn`, install it
   - https://yarnpkg.com/lang/en/docs/install/
2. Install all the things
   - `yarn install`
3. Generate the site in `/build`
   - `gulp dev` renders and serves
   - `gulp build` build static assets
