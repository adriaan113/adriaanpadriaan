<template>
  <header class="header-container">
    <div id="nav" :class="{ sticky: active }">
      <router-link to="/home">
        <kinesis-container class="adriaan" tag="div">
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
      </router-link>

      <div class="mobile-menu" v-if="mobileWidth">
        <Slide right width="300" closeOnNavigation>
          <a id="home" href="#" @click="menuItems">
            <span
              ><router-link to="/home"><h2>home</h2></router-link></span
            >
            <span
              ><router-link to="/work"><h2>work</h2></router-link></span
            >
            <span
              ><router-link to="/info"><h2>info</h2></router-link></span
            >
          </a>
        </Slide>
      </div>

      <div class="desktop-menu" v-else>
        <nav>
          <ul @click="menuItems">
            <li class="desktop-menu--item">
              <router-link to="/work"><h2>work</h2></router-link>
            </li>
            <li class="desktop-menu--item">
              <router-link to="/info"><h2>info</h2></router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import gsap from "gsap"; //MOET DIT NIET GEWOON GLOBAL?
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide
  },
  data() {
    return {
      active: false,
      mobileWidth: true
    };
  },
  methods: {
    isTouchDevice: function() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    },
    animateOnTouchDevice: function() {
      if (this.isTouchDevice()) {
        const h1 = document.querySelectorAll("h1");
        const h2 = document.querySelector("h2");
        for (let i = 0; i < h1.length; i++) {
          if (i === 0) {
            gsap.to(h1[i], {
              duration: 1,
              rotation: 10,
              repeat: -1,
              yoyo: true,
              delay: 1,
              repeatDelay: 4
            });
          } else if (i === 1) {
            gsap.to(h1[i], {
              duration: 0.8,
              rotateY: 30,
              repeat: -1,
              yoyo: true,
              repeatDelay: 4
            });
          } else if (i === 2) {
            gsap.to(h1[i], {
              duration: 0.6,
              rotateY: -20,
              rotation: -10,
              scale: 0.8,
              repeat: -1,
              yoyo: true,
              repeatDelay: 1
            });
          } else if (i === 3) {
            gsap.to(h1[i], {
              duration: 0.4,
              y: -3,
              scale: 1.1,
              repeat: -1,
              yoyo: true,
              delay: 2,
              repeatDelay: 6
            });
          } else if (i === 4) {
            gsap.to(h1[i], {
              duration: 0.7,
              y: 5,
              repeat: -1,
              rotateY: -20,
              skewX: -10,
              yoyo: true,
              delay: 4,
              repeatDelay: 5
            });
          }
        }
        gsap.to(h2, {
          duration: 1,
          y: 7,
          scale: 0.8,
          yoyo: true,
          delay: 0.3,
          repeatDelay: 5,
          skewY: 5
        });
      }
    },
    menuItems: function(e) {
      console.log(e.target.textContent);
      this.$emit("item", e);
    }
  },
  mounted() { // STICKY HEADER 
    window.document.onscroll = () => {
      let navBar = document.getElementById("nav");
      if (window.scrollY > navBar.offsetTop + 60) {
        // navBar.style.top = '28px';
        this.active = true;
      } else {
        // navBar.style.top = '0';
        this.active = false;
      }
    };

    window.addEventListener("resize", () => { //STICKY HEADER
      //HIER ZIT EEN GLITCH. ON LOAD GEEFT IE EERST ALTIJD EEN FRACTIE VAN EEN SECONDE HET MOBILE MENU
      if (window.innerWidth > 624) {
        this.mobileWidth = false;
      } else if (window.innerWidth < 624) {
        this.mobileWidth = true;
      }
    });
    this.animateOnTouchDevice();
  },
  created() { //STICKY HEADER
    window.addEventListener("load", () => {
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
@import "../global-scss/variables.scss";

.header-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  // margin-bottom: 4rem;
  margin-bottom: 0;
  @media (min-width: $breakpoint-medium) {
    margin-bottom: 2rem;
  }
}

.adriaan {
  margin: 0 auto;
  font-size: 6vw;
  display: flex;
  justify-content: center;
  color: $text-color;
  max-width: 600px;
  @media (min-width: $breakpoint-medium) {
      margin: -30px auto 0;
    }
}
h1,
h2 {
  margin: 0.5rem 0;
  @media (min-width: $breakpoint-large) {
      font-size: 8rem;
    }
}
h3 {
  margin: 2rem;
}

.nav {
  .adriaan {
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
  @media screen and (min-width: $breakpoint-medium) {
    flex-direction: column;
  }
}

#nav.sticky {
  transition: 150ms;
  background-color: $sticky-header-color;
  position: fixed;
  justify-content: flex-start;
  height: 60px;
  z-index: 999;
  top: 0;
  // padding: 1rem 0;
  // margin-top: 1rem; // ZOU DIT WERKEN???
  @media screen and (min-width: $breakpoint-medium) {
    flex-direction: row;
    h2,
    a {
      color: white;
      .router-link-active {
        text-decoration: underline;
      }
    }
    .desktop-menu nav {
      top: 0;
      ul {
        justify-content: flex-end;
      }
    }
  }
  .adriaan {
    transition: 0.3s;
    font-size: 1rem;
    margin-left: 1.5rem;
    color: white;
     @media (min-width: $breakpoint-medium) {
      margin: 0 1rem;
    }
    h1,
    h2 {
      @media (min-width: $breakpoint-large) {
        font-size: 1.5rem;
      }
    }
  }
  .bm-burger-bars {
    background-color: white;
  }
}

.desktop-menu {
  width: 100%;
  nav {
    position: relative;
    top: -50px;
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 0 1rem;
        a {
          color: $text-color;
        }
        .router-link-active {
          text-decoration: underline !important;
        }
      }
    }
  }
}
</style>
