import Vue from 'vue'
import App from './App.vue'

import Header from './components/MyHeader.vue'
import Aside from './components/MyAside.vue'
import IntroGal from './components/IntroGal.vue'
import Info from './components/Info.vue'
import Footer from './components/MyFooter.vue'

import VueKinesis from 'vue-kinesis'
Vue.use(VueKinesis)

import 'animate.css';



Vue.component('MyHeader', Header);
Vue.component('MyAside', Aside);
Vue.component('IntroGal', IntroGal);
Vue.component('Info', Info);
Vue.component('MyFooter',Footer)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
