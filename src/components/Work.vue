<template>
    <div class="work-container">

        <!-- <svg class="background-image" width="337px" height="830px" viewBox="0 0 337 830" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle</title>
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

        <ul class="work-gallery">

            <li v-for="person in work" 
            :key="person.name" 
            class="work-gallery--item" 
            :class="{bigger: person.hover}" 
            @mouseenter="hoverName(person)" 
            @mouseleave="person.hover=false"
            >
                
                <p class="job"  @mouseenter="person.hover=true">{{person.job}}</p>
                <h2 class="name" @click="showMoreOnClick(person)"  @mouseenter="person.hover=true">{{person.name}}</h2> <!--@mouseover="hoverName(person)" @mouseleave="person.hover=false"-->

                <div v-show="person.hover" class="animate__animated" :class="person.animate" @click="showMoreOnClick(person)">
                    <v-lazy-image :src="person.thumb" alt="" class="hover-thumb" :class="{'hide-thumb': person.showMore}" :style="{top:person.top, left:person.left}"/>
                </div>
                
                <transition 
                @before-enter="beforeOpen"
                @enter="enterProject"
                @leave="leaveProject"
                :css="false"
                >
                    <div class="is-selected" v-if="person.showMore">
                        <VueSlickCarousel v-bind="settings">
                        <div class="slide" v-for="img in person.extraImg" :key="img.id"> 
                            <v-lazy-image :src="img"  alt=""/>     
                        </div>
                        </VueSlickCarousel>
                    <p class="story">{{person.story}}</p>
                    </div>
                </transition>   

            </li>
        </ul>

    </div>
</template>


<script>
import gsap from 'gsap';


import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import work from './data.js';

// import {eventBus} from '../main';

export default {

  components:{
    VueSlickCarousel
   
  },
  data() {
    return {
        settings:{
            dots: true,
            dotsClass: "slick-dots custom-dot-class",
            edgeFriction: 0.35,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
            },
        work: work.data
        }
    },
    methods:{
        // isTouchDevice: function() {
        //     return (('ontouchstart' in window) ||
        //     (navigator.maxTouchPoints > 0) ||
        //     (navigator.msMaxTouchPoints > 0));
        //     },
        checkOpenLi: function(){
            for(let i=0;i<this.work.length;i++){
                this.work[i].showMore = false;
            }
        },
        hoverName:function(person){
            person.hover = !person.hover; 
        },
        preventClosing: function(person){ 
            console.log(person.name);
        },
        showMoreOnClick: function(person){
            // if(this.isTouchDevice()){
            //     console.log('oeoeoe');
            //     //person.showMore = false;
            // }else if(!this.isTouchDevice()){
                this.checkOpenLi();
                person.showMore = !person.showMore;
            //}
        },
        // touchClick: function(person){
        //     person.showMore = true;
        //     console.log('een twee drie');
        // },
        beforeOpen: function (el){
            el.style.transform ='scaleY(0)';
            el.style.transformOrigin ='top';
            el.style.transform = 'translateY(-50)';
        },
        enterProject: function(el, done) {
            gsap.to(el,{duration:.3,y:0, scaleY:1,onComplete: done});
        },
        leaveProject: function(el, done) {
            gsap.to(el,{duration:.3, scaleY:0,onComplete: done});
        },
        pushAnimation: function(){
            for(let i=0;i<this.work.length;i++){   
                this.work[i].animate = this.calculateAnimation();
                this.work[i].top = `-${this.calculateTop()}px`;
                this.work[i].left = `${this.calculateLeft()}px`;
            }
        },
        calculateAnimation: function(){
            const animation1 = 'animate__bounceInLeft';
            const animation2 = 'animate__fadeInUp';
            const animation3 = 'animate__jello';
            const animation4 = 'animate__bounceInRight';
            const x = Math.floor(Math.random() * 4);

            switch(x){
                case 0:
                    return animation1;   
                case 1:
                    return animation2;     
                case 2:
                    return animation3;     
                case 3:
                    return animation4;             
                default:
                    console.log('hahhahaah');
            }
        },
        calculateTop: function(){
            const top = Math.floor(Math.random() * 100);
            // console.log(top);
            return top;
        },
        calculateLeft: function(){
            const left = Math.floor(Math.random() * 100);
            // console.log(left);
            return left;
        }
    },
    mounted(){
        this.pushAnimation();
    },
}
</script>

<style lang="scss">

$text-color: #1212d4;
$secondary-color: #ff005d;
$ternary-color: greenyellow;

// $breakpoint-large: 1024px;
$breakpoint-large: 1200px;


@mixin shadow-text($x,$y){
    color: #ff005d;
    text-shadow: $x $y #ff005d;
}

.work-container{
    height: 100%;
    flex: 1;
    .work-gallery{
        display: flex;
        flex-flow: column wrap;
        list-style: none;
        padding: 0;
        max-width: 1200px;
        &--item{
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            cursor: pointer;
        }
    }   
}

.name{
    margin: 0 auto;
    font-size: 8vw;
    display: flex;
    justify-content: center;
    color: $text-color;
    @media(min-width: $breakpoint-large){
        font-size: 6.5rem;
    }
}

.is-selected{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media(min-width: $breakpoint-large){
        display: block;
    }
}

.story{
    background-color: white;
    border: 2px solid $text-color;
    position: relative;
    box-shadow: 5px 5px $ternary-color;
    margin:  1rem;
    padding: 1.5rem;
    text-align: left;
    z-index: 1;
    width: fit-content;
    text-align: center;
    @media(min-width: $breakpoint-large){
        margin: 1rem auto;
    }
}

.job{
    position: relative;
    top: 30px;
    font-size: 1rem;
    font-weight: lighter;
    text-transform: uppercase;
    z-index: -1;
    @include shadow-text(1px,1px);
}

.hover-thumb{
    position: absolute;
    width: 30vw;
    z-index: 2;
    @media(min-width: 930px){
    width: 20vw;
    }
     @media(min-width: 1700px){
    width: 10vw;
    }
}

.hide-thumb{
    opacity: 0;
}

// .background-image{
//     position: absolute;
//     z-index: -1;
//     &:nth-child(1){
//         width: 100px;
//         top: 50%;
//         left: 30%;
//         opacity: .2;
//     }
//     &:nth-child(2){
//         width: 200px;
//         top: 150%;
//         left: 70%;
//         opacity: .3;
//     }
//     &:nth-child(3){
//         width: 100px;
//         top: 200%;
//         left: 10%;
//         opacity: .4;
//     }
//     &:nth-child(4){
//         width: 150px;
//         top: 250%;
//         left: 50%;
//         opacity: .2;
//     }
// }


.slick-slider{
  width: 100vw;
  margin-bottom: 3rem;
  @media(min-width: $breakpoint-large){
      width: auto;
  }
}

.slide{
    width: 80% !important;
    max-width: 800px !important;
    margin: 0 auto;
    img{
        width: 100%;
        margin: 0 auto;
        @media(min-width: $breakpoint-large){
            width: 60%;
        }
    }
}

.slick-prev{
    left: 1rem;
    transform: scale(2);
    z-index: 999;
    &::before{
        color: $secondary-color;
    }
     @media(min-width: $breakpoint-large){
       left: 10rem; 
    }
}

.slick-next{
    // background-color: red;
    transform: scale(2);
    right: 1rem;
    &::before{
        color: $secondary-color;
    }
    @media(min-width: $breakpoint-large){
       right: 10rem; 
    }
}

.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.3s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

</style>