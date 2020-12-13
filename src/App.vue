<template>
  <div id="app">

    <my-header></my-header>

    <my-aside></my-aside>

    <intro-gal></intro-gal>

    <info></info>

  </div>
</template>

<script>
import IntroGal from './components/IntroGal.vue'
import MyAside from './components/MyAside.vue'
import myHeader from './components/MyHeader.vue'

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    myHeader,
    MyAside,
    IntroGal,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
