<template>
    <header class="header-container">

    <div id="nav" :class="{sticky:active}">
      <div id="nav-container" :class="toggleNavClass()"> 
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

    <div class="mobile-menu" v-if="mobileWidth">
        <Slide right width="300" closeOnNavigation>
        <a id="home" href="#" @click="menuItems">
            <span><a>home</a></span>
            <span><a>work</a></span>
            <span><a>info</a></span>
        </a>
        </Slide>
    </div>


    <div class="desktop-menu" v-else>
        <a id="home" href="#" @click="menuItems">
            <span><a>home</a></span>
            <span><a>work</a></span>
            <span><a>info</a></span>
        </a>
    </div>

</div>
    </header>
</template>



<script>

  import { Slide } from 'vue-burger-menu' 
  

  
  export default {
      components: {
          Slide,
      },
      data(){
          return{
              active: false,
              mobileWidth: true,
          }
      },
      methods: {
          menuItems: function(e){
            console.log(e.target.textContent);
            this.$emit('item',e);
          },
          toggleNavClass: function(){
            if(this.active == false){
                return 'nav'
            }else{
                return 'sticky-nav'
            }   
        }
    },
        mounted(){
            window.document.onscroll = () => {
                let navBar = document.getElementById('nav');
                if(window.scrollY > navBar.offsetTop + 100){
                    this.active = true;
                }else{
                    this.active = false;
                }       
            }
        },
        created() {
            window.addEventListener('resize',()=>{
               
                if(window.innerWidth>600){
                    this.mobileWidth = false;
                }else if(window.innerWidth<600){
                    this.mobileWidth = true;
                }
            }
            )
        }
}
    
</script>

<style lang="scss">

$text-color: #1212d4;
$sticky-header-color: $text-color;


.header-container{
    // background-color: burlywood;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
//   align-items: flex-end;   
    align-items: center;
    margin-bottom: 4rem;
}


.name{
       margin: 0 auto;
       font-size: 8vw;
       display: flex;
       justify-content: center;
       color: $text-color;
   }
   h1,
   h2{
       margin: .5rem 0;
   }
   h3{
       margin: 2rem;
   }


   .nav {
       .name{
        transition: .5s;
       }
}

.sticky-nav{
  transition: .5s;
  //padding: 20px;
}

#nav {
  display: flex;
  justify-content: center;
  width: 100%;
//   background-color: #55acee;
//   position: fixed;
  top: 0;
}

/* have to add the ID nav (#nav) otherwise the backgrnd color won't change as the previous background color is set in an ID and ID trumps class notation */
#nav.sticky{
  transition: 150ms;
  background-color: $sticky-header-color;
  position: fixed;
  justify-content: flex-start;
  height: 60px;
  z-index: 999;
    .name{
        transition: .3s;
        font-size: 1rem;
        margin-left: 1.5rem;
        color: white;
    }
    .bm-burger-bars{
    background-color: white;
    }
  }

</style>