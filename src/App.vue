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

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;900&display=swap');

html{
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
  height: 100%; 
  }

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  
  font-family: 'Catamaran', sans-serif;
  text-align: center;
  font-weight: 100;
  margin-top: 60px;
  


  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  }

.bm-menu{
  background-color:#1212d4 !important;
  }

.bm-item-list > * {
  flex-direction: column;
  justify-content: flex-start;
  }

.bm-item-list > * > span {
  /* text-align: left; */
  font-size: 3rem;
  }

.bm-cross {
  background: white;
  }

.bm-cross-button {
  height: 40px;
  width: 40px;
  span{
    height: 40px !important;
    width: 5px !important;
  }
  }

</style>
