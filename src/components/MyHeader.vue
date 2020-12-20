<template>
    <header class="header-container">

      <div> 
        <kinesis-container class="name" tag="div">
            <kinesis-element :strength="10" tag="span" type="rotate" axis="x">
                <h1>A</h1>
            </kinesis-element>
            <kinesis-element :strength="20" tag="span" axis="y">
                <h1>d</h1>
            </kinesis-element>
            <kinesis-element :strength="5" tag="span" axis="x">
                <h1>r</h1>
            </kinesis-element> 
            <kinesis-element :strength="20" tag="span" type="rotate">
                <h1>i</h1>
            </kinesis-element>  
            <kinesis-element :strength="2" tag="span" type="scaleY" :maxY="15">
                <h2>aa</h2>
            </kinesis-element>  
            <kinesis-element :strength="15" tag="span" type="rotate">
                <h1>n</h1>
            </kinesis-element>        
        </kinesis-container>
      </div>

    <Slide right width="300">
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

.header-container{
  background-color: burlywood;
  display: flex;
  flex-flow: row nowrap;
}

.name{
       margin: 0 auto;
       font-size: 15vw;
       display: flex;
   }
   h1,
   h2{
       margin: .5rem 0;
   }
   h3{
       margin: 2rem;
   }

</style>