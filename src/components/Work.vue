<template>
    <div class="work-container">
        <ul class="work-gallery">
            <li v-for="person in work" :key="person.name" class="work-gallery--item" :class="{bigger: person.hover}" @click="showMoreOnClick(person)">
                
                <p class="job">{{person.job}}</p>
                <h2 class="name">{{person.name}}</h2> <!--@mouseover="hoverName(person)" @mouseleave="person.hover=false"-->

                <!-- <div v-if="person.hover" class="animate__animated" :class="person.animate">
                    <thumb :src="person.thumb" alt="" class="hover-thumb" :style="{top:person.top, left:person.left}">
                </div> -->
                
                <transition 
                @before-enter="beforeTest"
                @enter="enterTest"
                @leave="leaveTest"
                :css="false"
                >
                    <div class="is-selected" v-if="person.showMore">
                        <ul>
                            <li v-for="img in person.extraImg" :key="img.id">
                                <img :src="img"  alt=""> 
                            </li>
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

//import { gsap } from "gsap";


export default {

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

        // hoverName:function(person){
        //     person.hover = !person.hover;
        // },
        showMoreOnClick: function(person){
            person.showMore = !person.showMore;
        },
        beforeTest: function (el){
            el.style.transform ='scaleY(0)';
            el.style.transformOrigin ='top';
            el.style.transform = 'translateY(-50)';
        },
        enterTest: function(el, done) {
            gsap.to(el,{duration:.3,y:0, scaleY:1,onComplete: done});
        },
        leaveTest: function(el, done) {
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

//ANIMATION

// @keyframes slide-in{
//     0% {transform: translateY(-90px);}
//     100%{transform: translateY(0px);}; 
// }

// @keyframes slide-out{
//     0% {transform: translateY(0px); }
//     100%{transform: translateY(-90px);}
// }

// .slide-in{
//     animation: slide-in 1s ease;
// }

// .slide-out{
//     animation: slide-out 2s ease;
// }

//TRANSITION

// .slide-enter-active{
//     transition: all 0.3s ease-in;
// }

// .slide-leave-active{
//     transition: all .3s ease-out; 
// }

// .slide-enter {
//     transform: translateY(-90px);
    
// }

// .slide-leave-to{
//     transform: translateY(-70px);
// }

</style>