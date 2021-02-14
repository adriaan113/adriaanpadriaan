<template>
  <div class="work-container">
    <aside @click="showStrangers" :class="{asideactive: sneakPeak}">
      <p :class="{pactive: sneakPeak}">i also make this</p>
      <div class="sneak-peak" v-show="sneakPeak" :class="{divactive:sneakPeak}">
        <v-lazy-image :src="stranger"/>
        <p class="see-more">I make sculptures. <a href="https://www.instagram.com/adriaanvanderploeg/" target="blank">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 -40 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        </a></p>
      </div>
    </aside>
    <ul class="work-gallery" id="work-gallery">
      <li
        v-for="person in work"
        :key="person.name"
        class="work-gallery--item"
        :class="{ bigger: person.hover }"
        @mouseenter="hoverName(person)"
        @mouseleave="person.hover = false"
      >
      <div><!--wrapper for grid animation-->
        <p class="job" @mouseenter="person.hover = true">{{ person.job }}</p>
        <h2
          class="name"
          @click="showMoreOnClick(person)"
          @mouseenter="person.hover = true"
          v-scroll-to="{
            el: `#${test(person)}`,
            container: 'body',
            offset: -300
          }"
        >
          {{ person.name }}
        </h2>

        <div
          v-show="person.hover"
          class="animate__animated"
          :class="person.animate"
          @click="showMoreOnClick(person)"
        >
          <v-lazy-image
            :src="person.thumb"
            alt=""
            class="hover-thumb"
            :class="{ 'hide-thumb': person.showMore }"
            :style="{ top: person.top, left: person.left }"
          />
        </div>

        <transition
          @before-enter="beforeOpen"
          @enter="enterProject"
          @leave="leaveProject"
          :css="false"
        >
          <div class="is-selected" :id="test(person)" v-if="person.showMore">
            <VueSlickCarousel v-bind="settings">
              <div class="slide" v-for="img in person.extraImg" :key="img.id">
                <v-lazy-image :src="img" alt="" />
              </div>
            </VueSlickCarousel>
            <p class="story">{{ person.story }}</p>
          </div>
        </transition>
        </div><!--wrapper for grid animation-->
      </li>
    </ul>
  </div>
</template>

<script>
import gsap from "gsap";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { wrapGrid } from 'animate-css-grid'


import work from "./data.js";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      work: work.data,
      sneakPeak: false,
      stranger: require('../assets/persons_thumb.jpg')
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
    checkOpenLi: function() { //CLOSE ALL LI --NOT IN USE
      for (let i = 0; i < this.work.length; i++) {
        this.work[i].showMore = false;
      }
    },
    hoverName: function(person) {
      person.hover = !person.hover;
    },
    showMoreOnClick: function(person) {
      if (this.isTouchDevice()) {
        person.hover = false;
        //this.checkOpenLi();
        person.showMore = !person.showMore;
      } else if (!this.isTouchDevice()) {
        //this.checkOpenLi();
        person.showMore = !person.showMore;
      }
    },
    //OPEN EN CLOSE ANIMATION OF THE WORK AND INTRO GALLERY
    beforeOpen: function(el) {
      el.style.transform = "scaleY(0)";
      el.style.transformOrigin = "top";
      el.style.transform = "translateY(-50)";
    },
    enterProject: function(el, done) {
      gsap.to(el, { duration: 0.3, y: 0, scaleY: 1, onComplete: done });
    },
    leaveProject: function(el, done) {
      gsap.to(el, { duration: 0.3, scaleY: 0, onComplete: done });
    },
    pushAnimation: function() {
      for (let i = 0; i < this.work.length; i++) {
        this.work[i].animate = this.calculateAnimation();
        this.work[i].top = `-${this.calculateTop()}px`;
        this.work[i].left = `${this.calculateLeft()}px`;
      }
    },
    calculateAnimation: function() {
      const animation1 = "animate__bounceInLeft";
      const animation2 = "animate__fadeInUp";
      const animation3 = "animate__jello";
      const animation4 = "animate__bounceInRight";
      const x = Math.floor(Math.random() * 4);

      switch (x) {
        case 0:
          return animation1;
        case 1:
          return animation2;
        case 2:
          return animation3;
        case 3:
          return animation4;
        default:
          console.log("hahhahaah");
      }
    },
    calculateTop: function() {
      const top = Math.floor(Math.random() * 100);
      return top;
    },
    calculateLeft: function() {
      const left = Math.floor(Math.random() * 500);
      return left;
    },
    closeGalleryOnLoad: function() {
      this.checkOpenLi()
    },
    showStrangers: function(){
      this.sneakPeak=!this.sneakPeak;
      // gsap.to('aside',{className:'asideactive', duration:1});
    },
    animateGrid: function(){
      const grid = document.querySelector(".work-gallery");
      wrapGrid(grid,{duration:250});
    },
    test: function(person){
      return person.name.split(" ").join("").toLowerCase();
    }
  },
  mounted() {
    this.pushAnimation();
    this.closeGalleryOnLoad();
    //this.animateGrid();
  }
};
</script>

<style lang="scss">
@import "../global-scss/variables.scss";

@mixin shadow-text($x, $y) {
  color: #ff005d;
  text-shadow: $x $y #ff005d;
}

.work-container {
  height: 100%;
  flex: 1;
  @media(min-width: $breakpoint-large){
    max-width: none;
  }
  aside{
    position: absolute;
    left: 1rem;
    top: 6rem;
    background-color: $secondary-color;
    border-radius: 50%;
    transform: rotate(-10deg);
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    z-index: 997;
    @media(min-width: $breakpoint-medium){
      left: 4rem;
      top: 12rem;
    }
    @media(min-width: $breakpoint-large){
      left: 9rem;
      top: 13rem;
      width: 100px;
      height: 100px;
    }
    p{
      width: 50px;
      padding: 2rem .2rem;
      font-weight: bold;
    }
    .sneak-peak{
      display: flex;
      flex-direction: column;
      img{
        width: 100%;
      }
      .see-more{
        margin: 0;
        padding: .3rem;
        width: 100%;
        a{
          text-decoration: underline !important;
          color: black;
        }
      }
    } 
  }
  .asideactive{ //DEZE NAMEN MOETEN ECHT BETER. CAMELCASE KEBABCASE
      width: 100%;
      max-width: 250px;
      max-height: none;
      height: auto;
      padding: 2px;
      border-radius: 0;
      transform: scale(1.3) rotate(-10deg);
      transition: all linear .2s; //DIT KAN ELEGANTER MET GSAP
  }
  .pactive{
    display: none;
  }
  .divactive{
    width: 100%;
  }
  .work-gallery {
    display: flex;
    flex-flow: column wrap;
    list-style: none;
    padding: 0;
    max-width: 1200px;
    @media(min-width: $breakpoint-large){
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-gap: 2rem 4rem;
      max-width: none;
    }
    &--item {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      cursor: pointer;
      @media(min-width: $breakpoint-large){
         max-width: 800px;
         margin: unset;
      }
    }
  
  }
}

.name {
  margin: 0 auto;
  font-size: 6vw;
  display: flex;
  justify-content: center;
  color: $text-color;
  @media (min-width: $breakpoint-medium) {
    font-size: 4rem;
  }
  @media (min-width: $breakpoint-large) {
    font-size: 3rem;
  }
}

.is-selected {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (min-width: $breakpoint-large) {
     display: block;
  }
}

.story {
  background-color: white;
  border: 2px solid $text-color;
  position: relative;
  box-shadow: 5px 5px $ternary-color;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  z-index: 1;
  width: fit-content;
  text-align: center;
  @media(min-width: $breakpoint-large){
    width: 50%;
  }
  @media (min-width: $story) {
    margin: 1rem auto;
    max-width: 800px;
  }
}

.job {
  position: relative;
  top: 30px;
  font-size: 1rem;
  font-weight: lighter;
  text-transform: uppercase;
  z-index: -1;
  @include shadow-text(1px, 1px);
}

.hover-thumb {
  position: absolute;
  width: 30vw;
  z-index: 2;
  @media (min-width: 930px) {
    width: 8vw;
  }
  @media (min-width: 1700px) {
    width: 10vw;
  }
}

.hide-thumb {
  opacity: 0;
}

.slick-slider {
  width: 100vw;
  margin-bottom: 3rem;
  @media (min-width: $breakpoint-large) {
    width: auto;
  }
}

.slide {
  width: 80% !important;
  max-width: 800px !important;
  margin: 0 auto;
  img {
    width: 100%;
    margin: 0 auto;
    @media (min-width: $breakpoint-medium) {
      width: 50%;
    }
    @media (min-width: $breakpoint-large) {
      width: 40%;
    }
  }
}

.slick-prev {
  left: 1rem;
  transform: scale(2);
  z-index: 999;
  &::before {
    color: $secondary-color;
  }
  @media (min-width: $breakpoint-large) {
    left: 10rem;
  }
}

.slick-next {
  transform: scale(2);
  right: 1rem;
  &::before {
    color: $secondary-color;
  }
  @media (min-width: $breakpoint-large) {
    right: 10rem;
  }
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

.instagram{
  width: 15px;
  padding: 0 5px;
}
</style>
