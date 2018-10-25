[![NPM](https://img.shields.io/npm/v/netlify-cms-widget-color.svg)](https://www.npmjs.com/package/netlify-cms-widget-color)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/netlify-cms-widget-color.svg)
[![npm](https://img.shields.io/npm/dw/netlify-cms-widget-color.svg)](https://www.npmjs.com/package/netlify-cms-widget-color)

# netlify-cms-widget-color


## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-color
```

```js
import {
  netlifyCmsColorControl,
  netlifyCmsColorPreview
} from 'netlify-cms-widget-color'

CMS.registerWidget('color', netlifyCmsColorControl, netlifyCmsColorPreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-color@^1.0.0"></script>

<script>
  CMS.registerWidget('color', netlifyCmsColorControl, netlifyCmsColorPreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: color }
```
