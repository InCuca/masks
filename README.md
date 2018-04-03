# text-mask-collection
Repository of pre-made input masks

To be used with [text-mask](https://github.com/text-mask/text-mask) with support for Vanilla, Vue, Angular, React and more.

## Usage with Vue

The plugin exposes three properties `$mask`, `$unmask` and `$format` with functions mask/unmask and transform according each respective mask.

```js
import Vue from 'vue';
import {VueTextMasks} from 'text-mask-collection';
import VueTextMask from 'vue-text-mask';

Vue.use(VueTextMasks);

Vue.component('m-input', VueTextMask);

new Vue({
  template: `
  <div>Value: {{$format.centimeters(rawValue)}}</div>
  <m-input
    :value="$mask.centimeters"
    @input="rawValue = $unmask.centimeters($event) />
  `,
  data() {
    return {rawValue: 100}
  },
});
```

