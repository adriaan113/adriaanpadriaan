<template>
  <div id="app">

    <my-header></my-header>

    <!-- <svg class="background-image" width="337px" height="830px" viewBox="0 0 337 830" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M20.8840818,0 L337,0 C304.877503,67.1768872 286.846253,115.632616 282.90625,145.367188 C270.504756,238.959281 323.03125,313.124446 323.03125,380.390625 C323.03125,442.403973 278.487055,519.736079 282.90625,621.484375 C284.678722,662.294074 302.709972,731.799283 337,830 L20.8840818,830 C5.17395847,722.167299 -1.49443338,645.664694 0.87890625,600.492188 C5.95792158,503.821719 58.4414063,421.148294 58.4414063,360.746094 C58.4414063,298.736345 6.23186559,221.017837 0.87890625,145.367188 C-1.46508376,112.24077 5.20330809,63.7850408 20.8840818,0 Z" id="Rectangle" fill="green"></path>
      </g>
    </svg>

    <svg class="background-image" viewBox="0 0 274 223" xmlns="http://www.w3.org/2000/svg">
        <path d="M264.627 105.342C243.662 68.976 152.572 123.93 112.97 78.877 73.368 33.825 32.134 52.721 10.707 96.652c-21.426 43.93 57.862 37.4 107.865 52.61 50.004 15.209 167.02-7.553 146.055-43.92z" fill="#FF1952" fill-rule="evenodd"/>
    </svg>

    <svg class="background-image" viewBox="0 0 233 233" xmlns="http://www.w3.org/2000/svg">
        <path d="M116.5 233C52.159 233 0 180.841 0 116.5 0 52.159 52.159 0 116.5 0 180.841 0 233 52.159 233 116.5c0 64.341-52.159 116.5-116.5 116.5zm0-28c48.877 0 88.5-39.623 88.5-88.5S165.377 28 116.5 28 28 67.623 28 116.5 67.623 205 116.5 205z" fill="#FAFF00" fill-rule="evenodd"/>
    </svg>

    <svg class="background-image" viewBox="0 0 469 469" xmlns="http://www.w3.org/2000/svg">
      <path fill="#8B572A" d="M.448 234.5L234.5.448 468.552 234.5 234.5 468.552z" fill-rule="evenodd"/>
    </svg> -->

      <router-view></router-view> 
 
    <my-footer></my-footer>

  </div>
</template>

<script>

import MyFooter from './components/MyFooter.vue'
import myHeader from './components/MyHeader.vue'

import work from './components/data.js';
//import gsap from 'gsap';

export default {
  name: 'App',
  data(){
    return{  
        work: work.data 
    }   
  },
  
  components: {
    myHeader,
    MyFooter, 
  },
  methods:{
    // animateBackgroundImages: function(){
    //   const img = document.querySelectorAll('.background-image');
    //   // const rd = Math.floor(Math.random() * 20 );
      
    //     for(let i =0;i<img.length;i++){

    //       gsap.to(img[i],{
    //         x: "random(-80, 60, 5)", 
    //         y: "random(-80, 100, 3)",
    //         scaleX:"random(.2, 1.3)",
    //         scaleY:"random(.1, 1.4)",
    //         skewX:"random(10, 30)",
    //         skewY:"random(10, 30)",
    //         rotation:"random(-30, 30)",
    //         duration:50,
    //         ease:"none",
    //         repeat:-1,
    //         repeatRefresh:true 
    //         })
    //     }
      
    // }
  },
  // mounted(){
  //   this.animateBackgroundImages();
  // }

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;900&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');


$text-color: #1212d4;
$work-nav-btn: $text-color;
$secondary-color: #ff005d;
$ternary-color: greenyellow;

$breakpoint-medium: 624px;

$breakpoint-large: 1024px;


html{
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
  height: 100%; 
  margin: 0;
  padding: 0;
  }

  body{
    min-height: 100%;
    box-sizing: border-box;
  }

#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;

  // min-height: 100%;
  // display: grid;
  // grid-template-rows: 1fr auto;

  text-align: center;
  font-weight: 100;
  margin-top: 0;
  min-height: 100vh;
 
 h1,h2,h3,h4,h5,h6{
  font-family: 'Catamaran', sans-serif;
 }

 p,small{
  font-family: 'Montserrat', sans-serif;
 }

 a{
   text-decoration: none;
 }

//  footer {
//   grid-row: -1;
//   justify-self: center;
//   }
}



/***********MOBILE MENU STYLES***********/

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

   .bm-burger-button {
      // position: absolute;
      width: 36px;
      height: 30px;
      left: 16px;
      top: 16px;
      cursor: pointer;
      .bm-burger-bars{
        background-color: $text-color;
      }
    }

#home{
  a{
    color: white;
  }
  .router-link-active{
    text-decoration: underline;
  }
}

.background-image{
    position: absolute;
    z-index: -1;
    &:nth-child(2){
        width: 100px;
        top: 10%;
        left: 10%;
        opacity: .2;
    }
    &:nth-child(3){
        width: 200px;
        top: 80%;
        left: 90%;
        opacity: .3;
    }
    &:nth-child(4){
        width: 100px;
        top: 60%;
        left: 10%;
        opacity: .4;
    }
    &:nth-child(5){
        width: 150px;
        top: 90%;
        left: 50%;
        opacity: .2;
    }
}

// .intro-gallery,
// .work-gallery,
// .info{
//   flex: 1;
// }

</style>
