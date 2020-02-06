import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('json', (value: any) => { return JSON.stringify(value, null, 2) } )

new Vue({
  render: h => h(App),
}).$mount('#app')
