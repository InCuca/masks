import masks from '../masks';

// To be used with text-mask/text-mask
export default {
  install(Vue) {
    Vue.prototype.$masks = {};
    Vue.prototype.$unmask = {};
    Vue.prototype.$format = {};

    Object.keys(masks).forEach((maskName) => {
      Vue.prototype.$masks[maskName] = masks[maskName].mask;
      Vue.prototype.$unmask[maskName] = masks[maskName].unmask;
      Vue.prototype.$format[maskName] = masks[maskName].format;
    });
  },
};
