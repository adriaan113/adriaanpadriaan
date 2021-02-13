import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import Header from './components/MyHeader.vue'
import Aside from './components/MyAside.vue'
import IntroGal from './components/IntroGal.vue'
import Work from './components/Work.vue'
import Info from './components/Info.vue'
import Footer from './components/MyFooter.vue'

//LIBRARY FOR ANIMATING "ADRIAAN" LOGO ON NON TOUCH DEVICES"
import VueKinesis from 'vue-kinesis'
//LAZY LOADING IMAGES
import { VLazyImagePlugin } from "v-lazy-image";
//SCROLL TO THE RIGHT LI ON CLICK
import VueScrollTo from 'vue-scrollto'
//ANIMATING HOVER STATES OF IMAGES
import 'animate.css';

//ICONS
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
Vue.use(VLazyImagePlugin);
Vue.use(VueScrollTo);


//ROUTES FOR ROUTER
const routes = [
  { path: '/work', component: Work},
  { path: '/info', component: Info},
  {path: '/home', component:IntroGal},
  {path: '/', redirect: '/home'}
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
