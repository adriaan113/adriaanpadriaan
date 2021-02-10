<template>
    <div class="intro-container">
        <h2>fotografeerde bijvoorbeeld...</h2>
        <ul id="intro-gal" class="intro-gallery">

            <li v-for="person in introWork" 
            :key="person.name" 
            class="intro-gallery--item" 
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

        <div class="cta">
            <router-link to="work">
                <h2>meer</h2>
            </router-link>  
        </div>

    </div> 
</template>

<script>
import gsap from 'gsap';

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import work from './data.js';

export default {
    components:{
    VueSlickCarousel
   
  },
    data(){
        return{
            settings:{
            dots: true,
            dotsClass: "slick-dots custom-dot-class",
            edgeFriction: 0.35,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
            },

            work: work.data,
            introWork: [],
        }
    },
    methods:{
        // isTouchDevice: function() {
        //     return (('ontouchstart' in window) ||
        //     (navigator.maxTouchPoints > 0) ||
        //     (navigator.msMaxTouchPoints > 0));
        //     },
        selectRandomPerson: function(){
                const randomPerson = Math.floor(Math.random() * this.work.length); 
                this.introWork.push(this.work[randomPerson]);
                console.log(this.introWork[0].name);
        },
        hoverName:function(person){
            person.hover = !person.hover; 
        },
        showMoreOnClick: function(person){
            // if(this.isTouchDevice()){
            //     console.log('hahaha');
            //     person.showMore = false;
            // }else if(!this.isTouchDevice()){
                person.showMore = !person.showMore;
            //}
        },
        // touchClick: function(person){
        //     person.showMore = true;
        //     console.log('hallo');
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
            const top = Math.floor(Math.random() * -300);
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
        this.selectRandomPerson();
    },
        // hoverName:function(person){
        //     person.show = !person.show;
        // },

        // irregularTextSize: function(){ // HIERMEE VERRANDER JE DUS DE FONTSIZE PER LETTER. MAAR DE ROTATE WIL NOG NIET VLOTTEN
        //     const ctaText = document.querySelector('.cta');
        //     const string = ctaText.textContent;
        //     ctaText.innerHTML = '';
        //     string.split('').forEach(function(e){
        //         const newCtaText = document.createElement('H2');
        //         newCtaText.classList.add('cta');
        //         newCtaText.style.display = 'inline';
        //         // newCtaText.style.color = "#"+((1<<24)*Math.random()|0).toString(16)
        //         newCtaText.style.fontSize = (Math.random() * (4 - 1) + 20) + 'px';
        //         newCtaText.style.transform = 'rotate(180deg)'; //WAAROM DOET DIT HET NIET???
        //         newCtaText.innerHTML = e;
        //         ctaText.appendChild(newCtaText);
        //     });
        // },

        // showWork: function(){
        // //    this.$root.$emit('hoi vanuit introGal');
        //     this.$emit('work');
        // }
    }

</script>

<style lang="scss" scoped>

$text-color: #1212d4;

@mixin shadow-text($x,$y){
    color: #ff005d;
    text-shadow: $x $y #ff005d;
}

h2{
    color: $text-color;
}

.intro-container{
    flex: 1;
}

.intro-gallery{
    background-color: transparent;
    list-style: none;
    padding: 0;
    height: 100%;
    .intro-gallery--item{
        // position: relative;
        a{
            text-decoration: none;
            &:hover{
                color:red;
            }
            p{
                font-size: 2rem;
                font-weight: lighter;
                // position: relative;
                z-index: 0;
                @include shadow-text(3px, 3px);
                // &:hover{

                // }
            }
        } 
    }
}

 .hover-img{
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

.cta{
    h2{
        display: inline;
    }
}

.firstPos{
    top: 10px;
    left: 40px;
}

.secondPos{
    top: 50px;
    left: 50px;
}

.intro-gallery--item:nth-child(2){
    .hover-img{
        width: 170px; //middle hover thumbnail is smaller
    }
    
}

.intro-gallery--item:nth-child(3){
    .hover-img{
        width: 100px; //last hover thumbnail is smaller
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