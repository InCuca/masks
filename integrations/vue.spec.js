import VueTextMasks from './vue'
import Vue from 'vue'
import masks from '../masks'

describe('Vue integration', () => {
  it('should have expose plugin properties', done => {
    Vue.use(VueTextMasks)
    new Vue({
      render() {},
      mounted() {
        for (let maskName in masks) {
          expect(this.$masks).toHaveProperty(maskName)
          expect(this.$masks[maskName]).toEqual(masks[maskName].mask)
          expect(this.$unmask).toHaveProperty(maskName)
          expect(this.$unmask[maskName]).toEqual(masks[maskName].unmask)
          expect(this.$format).toHaveProperty(maskName)
          expect(this.$format[maskName]).toEqual(masks[maskName].format)
        }
        done()
      }
    }).$mount()
  })
})
