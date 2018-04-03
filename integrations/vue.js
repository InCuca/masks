import * as decimalNumber from '../masks/decimalNumber';
import * as meters from '../masks/meters';
import * as centimeters from '../masks/centimeters';
import * as aream3 from '../masks/aream3';
import * as areacm3 from '../masks/areacm3';
import * as kilograms from '../masks/kilograms';
import * as dollars from '../masks/dollars';

// To be used with text-mask/text-mask
export default {
  install(Vue) {
    Vue.prototype.$masks = {
      decimalNumber: decimalNumber.mask,
      meters: meters.mask,
      centimeters: centimeters.mask,
      aream3: aream3.mask,
      areacm3: areacm3.mask,
      kilograms: kilograms.mask,
      dollars: dollars.mask,
    };

    Vue.prototype.$unmask = {
      decimalNumber: decimalNumber.unmask,
      meters: meters.unmask,
      centimeters: centimeters.unmask,
      areacm3: areacm3.unmask,
      kilograms: kilograms.unmask,
      dollars: dollars.unmask,
    };

    Vue.prototype.$format = {
      decimalNumber: decimalNumber.format,
      meters: meters.format,
      centimeters: centimeters.format,
      areacm3: areacm3.format,
      kilograms: kilograms.format,
      dollars: dollars.format,
    };
  },
};
