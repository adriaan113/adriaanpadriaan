<template>
    <div class="work-container">

        <svg width="337px" height="830px" viewBox="0 0 337 830" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Rectangle</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M20.8840818,0 L337,0 C304.877503,67.1768872 286.846253,115.632616 282.90625,145.367188 C270.504756,238.959281 323.03125,313.124446 323.03125,380.390625 C323.03125,442.403973 278.487055,519.736079 282.90625,621.484375 C284.678722,662.294074 302.709972,731.799283 337,830 L20.8840818,830 C5.17395847,722.167299 -1.49443338,645.664694 0.87890625,600.492188 C5.95792158,503.821719 58.4414063,421.148294 58.4414063,360.746094 C58.4414063,298.736345 6.23186559,221.017837 0.87890625,145.367188 C-1.46508376,112.24077 5.20330809,63.7850408 20.8840818,0 Z" id="Rectangle" fill="#FF0000"></path>
            </g>
        </svg>

        <ul class="work-gallery">
            <li v-for="person in work" 
            :key="person.name" 
            class="work-gallery--item" 
            :class="{bigger: person.hover}" 
            @click="showMoreOnClick(person)" 
            @mouseover="hoverName(person)" 
            @mouseleave="person.hover=false"
            >
                
                <p class="job">{{person.job}}</p>
                <h2 class="name">{{person.name}}</h2> <!--@mouseover="hoverName(person)" @mouseleave="person.hover=false"-->

                <div v-show="person.hover" class="animate__animated">
                    <img :src="person.thumb" alt="" class="hover-thumb" :class="{'hide-thumb': person.showMore}" :style="{top:person.top, left:person.left}">
                </div>
                
                <transition 
                @before-enter="beforeOpen"
                @enter="enterProject"
                @leave="leaveProject"
                :css="false"
                >
                    <div class="is-selected" v-if="person.showMore">
                        <ul>
                            <carousel :perPage="1">
                                <slide>  
                            <li v-for="img in person.extraImg" :key="img.id">
                            
                                
                                <img :src="img"  alt=""> 
                                
                            
                            </li>
                            </slide>
                            </carousel>
                        </ul>
                        <p class="story">{{person.story}}</p>
                    </div>
                </transition>   

            </li>
        </ul>

    </div>
</template>


<script>
import gsap from 'gsap';

import {Carousel, Slide} from 'vue-carousel';


export default {

  components:{
      Carousel,
      Slide
  },
  data() {
    return {
        work:[
            {
                name: 'Ronnie Flex',
                job: 'rapper',
                story: 'Mr. flex at home in Rotterdam. As you can see there’s a freshly made plate of pasta on the table. After the pictures he offered me some. Good sauce!',
                thumb: require('../assets/ronnieFlex1.jpg'),
                extraImg: [require('../assets/ronnieFlex2.jpg'),require('../assets/ronnieFlex1.jpg')],
                hover: false,
                showMore: false
            },
            {
                name: 'Claudia Cardinale',
                job: 'moviestar',
                story: 'is an true diva. In the best sense of the word.',
                thumb: require('../assets/claudiaCardinale1.jpg'),
                hover: false,
                showMore: false
            },
            {
                name: 'Theo Heuft',
                job: 'in these pictures...',
                story: "...you see Theo Heuft. Theo was the owner of a an establishment called Yab Yum. A well known brothel in Amsterdam. Theo has a thousand stories from that time. He told them all when i visited him in France for the Volkskrant. His wife started a Bed&Breakfast there. He's bored out of his mind.",
                thumb: require('../assets/theoHeuft1.jpg'),
                hover: false,
                showMore: false,
            },
            {
                name: 'Maarten Spruyt',
                job: 'stylist',
                story: 'favorite color appears to green. Both his house and his wardrobe was full of it. Quite remarkable. Besides that he’s also a really nice and talented guy.',
                thumb: require('../assets/maartenSpruyt1.jpg'),
                hover: false,
                showMore: false
            },
            {
                name: 'Fien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                thumb: require('../assets/fienTroch1.jpg'),
                hover: false,
                showMore: false
            },
             {
                name: 'Sien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                thumb: require('../assets/fienTroch1.jpg'),
                hover: false,
                showMore: false
            },
             {
                name: 'Pien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                thumb: require('../assets/fienTroch1.jpg'),
                hover: false,
                showMore: false
            },
             {
                name: 'Kien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                thumb: require('../assets/fienTroch1.jpg'),
                hover: false,
                showMore: false
            },
             {
                name: 'Lien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                thumb: require('../assets/fienTroch1.jpg'),
                hover: false,
                showMore: false
            },
             {
                name: 'Vien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                thumb: require('../assets/fienTroch1.jpg'),
                hover: false,
                showMore: false
            }
        ]
        }
    },
    methods:{

        // deleteHoverImgWhenOpen: function(person){
        //     if(person.showMore){
        //         return person.hover = false;
        //     }
            
        // },

        hoverName:function(person){
            person.hover = !person.hover;
            
        },
        showMoreOnClick: function(person){
            person.showMore = !person.showMore;
        },
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
    },
 }
</script>

<style lang="scss" scoped>

$text-color: #1212d4;
$secondary-color: #ff005d;
$ternary-color: greenyellow;


@mixin shadow-text($x,$y){
    color: #ff005d;
    text-shadow: $x $y #ff005d;
}

.work-container{
    .work-gallery{
        display: flex;
        flex-flow: column wrap;
        list-style: none;
        padding: 0;
        max-width: 1200px;
        &--item{
            cursor: pointer;
        }
    }   
}

.is-selected{
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        li{
            margin: 1rem .5rem;
            img{
                width: 100%;
            }
        }
    } 
}

.story{
    background-color: white;
    border: 2px solid $text-color;
    position: relative;
    box-shadow: 5px 5px $ternary-color;
    margin:  1rem .5rem;
    padding: 1.5rem;
    text-align: left;
    z-index: 1;
}

.job{
    position: relative;
    top: 30px;
    font-size: 1rem;
    font-weight: lighter;
    text-transform: uppercase;
    @include shadow-text(1px,1px);
}

.hover-thumb{
    position: absolute;
    width: 150px;
    z-index: 2;
}

.hide-thumb{
    opacity: 0;
}

svg{
    width: 100px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: -1;
    opacity: .2;
    path{
        fill:greenyellow;
    } 
}

</style>