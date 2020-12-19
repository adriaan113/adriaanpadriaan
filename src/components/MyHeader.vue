<template>
    <header class="header-container">

    <Slide right>
      <a id="home" href="#">
        <span>home</span>
        <span>work</span>
        <span>info</span>
      </a>
    </Slide>


    </header>
</template>



<script>

  import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
  
  export default {
      components: {
          Slide // Register your component
      }
  }
    
</script>

<style lang="scss" scoped>

// header{
//   background-color: burlywood;
// }

</style>