[![NPM](https://img.shields.io/npm/v/netlify-cms-widget-range.svg)](https://www.npmjs.com/package/netlify-cms-widget-range)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/netlify-cms-widget-range.svg)
[![npm](https://img.shields.io/npm/dw/netlify-cms-widget-range.svg)](https://www.npmjs.com/package/netlify-cms-widget-range)

# netlify-cms-widget-range


## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-range
```

```js
import {
  netlifyCmsRangeControl,
  netlifyCmsRangePreview
} from 'netlify-cms-widget-range'

CMS.registerWidget('range', netlifyCmsRangeControl, netlifyCmsRangePreview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-range@^1.0.0"></script>

<script>
  CMS.registerWidget('range', netlifyCmsRangeControl, netlifyCmsRangePreview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
fields:
  - { name: <fieldname>, label: <fieldlabel>, widget: range }
```
