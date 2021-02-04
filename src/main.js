import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import Header from './components/MyHeader.vue'
import Aside from './components/MyAside.vue'
import IntroGal from './components/IntroGal.vue'
import Work from './components/Work.vue'
import Info from './components/Info.vue'
import Footer from './components/MyFooter.vue'

import VueKinesis from 'vue-kinesis'


import 'animate.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.component('MyHeader', Header);
Vue.component('MyAside', Aside);
Vue.component('IntroGal', IntroGal);
Vue.component('Work',Work);
Vue.component('Info', Info);
Vue.component('MyFooter',Footer)

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueKinesis);



const routes = [
  { path: '/work', component: Work},
  { path: '/info', component: Info},
  {path: '/home', component:IntroGal}
]

const router = new VueRouter({
  routes : routes,
  scrollBehavior () {
  return { x: 0, y: 0, behavior: 'smooth' };
}
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
