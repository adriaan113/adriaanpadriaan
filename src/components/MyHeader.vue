<template>
  <header class="header-container">
    <div id="nav" :class="{ sticky: active }">
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
            <span><router-link to="/work">work</router-link></span>
            <span><router-link to="/info">info</router-link></span>
          </a>
        </Slide>
      </div>

      <div class="desktop-menu" v-else>
       <nav>
         <ul @click="menuItems">
           <li class="desktop-menu--item"><router-link to="/work"><h2>work</h2></router-link></li>
           <li class="desktop-menu--item"><router-link to="/info"><h2>info</h2></router-link></li>
         </ul>
       </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide,
  },
  data() {
    return {
      active: false,
      mobileWidth: true,
    };
  },
  methods: {
    menuItems: function (e) {
      console.log(e.target.textContent);
      this.$emit("item", e);
    },
    toggleNavClass: function () {
      if (this.active == false) {
        return "nav";
      } else {
        const nav= document.querySelector('.desktop-menu nav');
        const menuItems= document.querySelectorAll('.desktop-menu--item');
        nav.style.top= 0;
        nav.children[0].style.justifyContent = 'flex-end';
        for(let item of menuItems){
          item.children[0].style.color = 'white';
        }
        return "sticky-nav";
      }
    },
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav");
      if (window.scrollY > navBar.offsetTop + 100) {
        this.active = true;
      } else {
        this.active = false;
      }
    };
  },
  created() {
    window.addEventListener("load", () => {
      if (window.innerWidth > 624) {
        this.mobileWidth = false;
      } else if (window.innerWidth < 624) {
        this.mobileWidth = true;
      }
    });
  },
  updated(){
    window.addEventListener("resize", () => { //HIER ZIT EEN GLITCH. ON LOAD GEEFT IE EERST ALTIJD EEN FRACTIE VAN EEN SECONDE HET MOBILE MENU
      if (window.innerWidth > 624) {
        this.mobileWidth = false;
      } else if (window.innerWidth < 624) {
        this.mobileWidth = true;
      }
    });
  }
};
</script>

<style lang="scss">
$text-color: #1212d4;
$sticky-header-color: $text-color;
$breakpoint-medium: 624px;

.header-container {
  // background-color: burlywood;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  //   align-items: flex-end;
  align-items: center;
  margin-bottom: 4rem;
}

.name {
  margin: 0 auto;
  font-size: 8vw;
  display: flex;
  justify-content: center;
  color: $text-color;
}
h1,
h2 {
  margin: 0.5rem 0;
}
h3 {
  margin: 2rem;
}

.nav {
  .name {
    transition: 0.5s;
  }
}

.sticky-nav {
  transition: 0.5s;
  //padding: 20px;
}

#nav {
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  @media screen and (min-width: $breakpoint-medium){
    flex-direction: column;
  }
}

/* have to add the ID nav (#nav) otherwise the backgrnd color won't change as the previous background color is set in an ID and ID trumps class notation */
#nav.sticky {
  transition: 150ms;
  background-color: $sticky-header-color;
  position: fixed;
  justify-content: flex-start;
  height: 60px;
  z-index: 999;
   @media screen and (min-width: $breakpoint-medium){
    flex-direction: row;
  }
  .name {
    transition: 0.3s;
    font-size: 1rem;
    margin-left: 1.5rem;
    color: white;
  }
  .bm-burger-bars {
    background-color: white;
  }
}

.desktop-menu{
  width: 100%;
  nav{
    position: relative;
    top: -50px;
    ul{
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        margin: 0 1rem;
        a{
          text-decoration: none;
          color: $text-color;
        }
      }
    }
  }
}
</style>
