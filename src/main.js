import Vue from 'vue'
import App from './App.vue'

import Header from './components/MyHeader.vue'
import Aside from './components/MyAside.vue'
import IntroGal from './components/IntroGal.vue'
import Info from './components/Info.vue'



Vue.component('MyHeader', Header);
Vue.component('MyAside', Aside);
Vue.component('IntroGal', IntroGal);
Vue.component('Info', Info);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
