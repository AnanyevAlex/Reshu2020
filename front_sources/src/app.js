import Vue from 'vue'

import {
  resourcePath,
  screenWidth,
  injectAgreementDocs
} from '@/mixins/index'

new Vue({
  components: {
  },
  mixins: [
    resourcePath,
    screenWidth,
    injectAgreementDocs
  ]
}).$mount('#app')