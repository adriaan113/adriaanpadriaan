<template>
  <div id="app">

    <my-header></my-header>

    <my-aside></my-aside>

    <intro-gal v-if="true"></intro-gal>

    <info v-else></info>

    <my-footer></my-footer>

  </div>
</template>

<script>
import IntroGal from './components/IntroGal.vue'
import MyAside from './components/MyAside.vue'
import MyFooter from './components/MyFooter.vue'
import myHeader from './components/MyHeader.vue'

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    myHeader,
    MyAside,
    IntroGal,
    MyFooter,
    
  },
  methods:{
   
  }
}
</script>

<style>

html{
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;
}
</style>
