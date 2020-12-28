<template>
    <div class="work-container">
      <ul>
            <li v-for="person in work" :key="person.name">
                <p class="job">{{person.job}}</p>
                <h2 class="name" @click="showMeStory(person)">{{person.name}}</h2>
                <carousel :per-page="1" :paginationSize="20" :paginationPadding="5">
                    <slide>
                        <img :src="person.img" alt="" @click="showMeStory(person)">
                    </slide>
                    <slide>
                        <img :src="person.img" alt="" @click="showMeStory(person)">
                    </slide>
                </carousel>
                <p class="story animate__animated" :class="{animate__fadeInDown: person.showStory}" v-show="person.showStory">{{person.story}}</p>
            </li>
      </ul>

    </div>
</template>

// :class="{bigger: person.showStory}"

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
    Carousel,
    Slide
  },
  data() {
    return {
        work:[
            {
                name: 'Ronnie Flex',
                job: 'rapper',
                story: 'at home in Rotterdam. As you can see there’s a freshly made plate of pasta on the table. After the pictures he offered me some. Good sauce!',
                img: require('../assets/ronnieFlex1.jpg'),
                showStory: false
            },
            {
                name: 'Claudia Cardinale',
                job: 'moviestar',
                story: 'is an true diva. In the best sense of the word.',
                img: require('../assets/claudiaCardinale1.jpg'),
                showStory: false
            },
            {
                name: 'Theo Heuft',
                job: 'in these pictures...',
                story: "...you see Theo Heuft. Theo was the owner of a an establishment called Yab Yum. A well known brothel in Amsterdam. Theo has a thousand stories from that time. He told them all when i visited him in France for the Volkskrant. His wife started a Bed&Breakfast there. He's bored out of his mind.",
                img: require('../assets/theoHeuft1.jpg'),
                showStory: false
            },
            {
                name: 'Maarten Spruyt',
                job: 'stylist',
                story: 'favorite color appears to green. Both his house and his wardrobe was full of it. Quite remarkable. Besides that he’s also a really nice and talented guy.',
                img: require('../assets/maartenSpruyt1.jpg'),
                showStory: false
            },
            {
                name: 'Fien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showStory: false
            }
        ]
        }
    },
    methods:{
        showMeStory: function(person){
            return person.showStory = !person.showStory; 
        },
        makeBigger: function(person){
            console.log(person); 
        },
    },
 }
</script>

<style lang="scss" scoped>

.work-container{
    ul{
        display: grid;
        grid: auto-flow / repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: .5rem;
        justify-content: center;
        list-style: none;
        padding: 0;
        li{
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            z-index: 1;
            // position: relative;
            .name{
                // margin-bottom: -30px;
                position: relative;
                top: 70px;
                font-size: 2.5rem;
                cursor: pointer;
                z-index: 1;

            }
            .job{
                position: relative;
                top: 120px;
                font-size: 1rem;
                text-transform: uppercase;
            }
            img{
                width: 100%;
                // margin: 1rem;
                cursor: pointer;
            }
            .story{
                background-color: lighten(lightgray, 5%);
                position: relative;
                margin-top: 0;
                padding: 1rem;
                text-align: left;
                z-index: -10;
            }
        }
    }
}

.VueCarousel-slide {
visibility: visible;
flex-basis: 100%;
width: 100%;
}

// .bigger{
//     width: 90vw !important;
//     border: 3px solid red;
//     // grid-column: 1/3;
//     &:nth-child(odd){
//         grid-column: 1/-1;
//         // position: absolute;
//     }
//     // &:nth-child(even){
//     //     grid-column: 3/1;
//     // }

// }

</style>