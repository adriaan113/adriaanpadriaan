<template>
    <div class="work-container">
        <ul>
            <li v-for="person in work" :key="person.name" :class="{bigger: person.showMore}">
                <p class="job">{{person.job}}</p>
                <h2 class="name">{{person.name}}</h2>
                <!-- <agile :centerMode="true">
                    <img class="slide" :src="person.img" alt="" @click="showMeStory(person)"> -->

                    <!-- <img class="slide" :src="person.img" alt="" @click="showMeStory(person)"> -->
                     <!-- <i class="fas fa-chevron-left"></i>
                     <i class="fas fa-chevron-right"></i> -->

                <!-- </agile> -->


                <img :src="person.img" alt="" class="first-img"  @click="showWork(person); animateName(person)"> <!--test(); kan ik invoegen @click voor meerdere acties-->
                <div class="extra-info animate__animated" :class="{animate__fadeIn: person.showMore}" v-show="person.showMore">
                    <p class="story">{{person.story}}</p>
                </div>
            </li>
        </ul>

    </div>
</template>


<script>
// import { VueAgile } from 'vue-agile'
import { gsap } from "gsap";


export default {
    components: {
        // agile: VueAgile 
  },
  data() {
    return {
        work:[
            {
                name: 'Ronnie Flex',
                job: 'rapper',
                story: 'Mr. flex at home in Rotterdam. As you can see there’s a freshly made plate of pasta on the table. After the pictures he offered me some. Good sauce!',
                img: require('../assets/ronnieFlex1.jpg'),
                showMore: false
            },
            {
                name: 'Claudia Cardinale',
                job: 'moviestar',
                story: 'is an true diva. In the best sense of the word.',
                img: require('../assets/claudiaCardinale1.jpg'),
                showMore: false
            },
            {
                name: 'Theo Heuft',
                job: 'in these pictures...',
                story: "...you see Theo Heuft. Theo was the owner of a an establishment called Yab Yum. A well known brothel in Amsterdam. Theo has a thousand stories from that time. He told them all when i visited him in France for the Volkskrant. His wife started a Bed&Breakfast there. He's bored out of his mind.",
                img: require('../assets/theoHeuft1.jpg'),
                showMore: false
            },
            {
                name: 'Maarten Spruyt',
                job: 'stylist',
                story: 'favorite color appears to green. Both his house and his wardrobe was full of it. Quite remarkable. Besides that he’s also a really nice and talented guy.',
                img: require('../assets/maartenSpruyt1.jpg'),
                showMore: false
            },
            {
                name: 'Fien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showMore: false
            },
             {
                name: 'Sien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showMore: false
            },
             {
                name: 'Pien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showMore: false
            },
             {
                name: 'Kien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showMore: false
            },
             {
                name: 'Lien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showMore: false
            },
             {
                name: 'Vien Troch',
                job: 'Director',
                story: 'in her hotel room during the Rotterdam film festival.',
                img: require('../assets/fienTroch1.jpg'),
                showMore: false
            }
        ]
        }
    },
    methods:{
        // showMeStory: function(person){
        //     return person.showMore = !person.showMore; 
        // },
        // makeBigger: function(person){
        //     console.log(person); 
        // },

        // isSelected: function(person){
        //     if(person.showMore){
        //         for(let i=0;i<work.length;i++){
        //            if(){

        //            }
        //            work[i].showMore
        //         }
        //         this.work.showMore = false;
        //     }
        // },
        closeAll: function(){
            for(let i=0;i<this.work.length;i++){
                this.work[i].showMore= false;
            }
        },

        animateName: function(person){
            const DomNames = document.querySelectorAll('.work-container .name');
            const grid = document.querySelector('.work-container ul');

            setTimeout(()=>{
                for(let i =0;i<this.work.length;i++){
                    if(person.name === DomNames[i].innerHTML){
                        if(grid.children[i].classList.contains('bigger')){
                            gsap.to(DomNames[i],{duration:.6, y:grid.children[i].children[2].offsetHeight});
                        }else if(grid.children[i].classList.contains('bigger')===false){
                            gsap.to(DomNames[i],{duration:.3, y: 0});
                        }
                    }
                }
            },100);
        },
        showWork: function(person){
            this.closeAll();
            return person.showMore = !person.showMore; 
        },
        checkThirdGridItem: function(){ //DIT IS ENKEL RELEVANT VOOR DESKTOP SIZE. MISSCHIEN NOG EEN ANDERE FUNCTIE MAKEN VOOR TABLET EN TELEFOON?
            const grid = document.querySelector('.work-container ul');

            const mqDesktop = window.matchMedia("(min-width: 948px)");

            function growSelectedLi(i,x){//HOORT DAT HIER WEL? OF MOET IK ZE HELEMAAL BOVENAAN ZETTEN ONDER DE SCRIPT TAG OPENING?
                grid.children[i].style.gridColumn="2 / span 2";
                grid.children[i].style.gridRow =`${x}/ auto`;
            }

            function shrinkSelectedLi(i){
                grid.children[i].style.gridColumn = null;
                grid.children[i].style.gridRow = null;
            }
            
            if(mqDesktop.matches){
                for(let i = 0; i<grid.children.length; i++){
                    if(i === 2){ //HOE KAN IK HIER Modulus INZETTEN?
                        if(grid.children[i].classList.contains('bigger')){ 
                            growSelectedLi(i,1);
                        }else{
                            shrinkSelectedLi(i);
                        }
                    }else if(i === 5){
                        if(grid.children[i].classList.contains('bigger')){
                            growSelectedLi(i,2);
                        }else{
                            shrinkSelectedLi(i);
                        }
                    }else if(i === 8){
                        if(grid.children[i].classList.contains('bigger')){
                            growSelectedLi(i,2);
                        }else{
                            shrinkSelectedLi(i);
                        }
                    }
                }
            }

            
        },
        test: function(){ //SCROLL INTO VIEW. MOET NOG WORDEN GEFINETUNED. 
            const grid = document.querySelector('.work-container ul');//DUBBEL
            for(let i = 0; i<grid.children.length; i++){
                if(grid.children[i].classList.contains('bigger')){
                grid.children[i].scrollIntoView(); 
                }
            } 
        },
    },

    updated(){
        this.checkThirdGridItem();
    }
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
    width: 100%;
    ul{
        display: grid;
        grid: auto-flow / repeat(auto-fit, minmax(300px, 1fr)); //GEEN AUTO-FIT IPV 3?
        grid-gap: .5rem;
        justify-content: center;
        list-style: none;
        padding: 0;
        max-width: 1200px;
        margin: 0 auto;
        // position: relative;
        li{
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            z-index: 1;
            position: relative;
            
            .name{
                position: relative;
                top: 35px;
                font-size: .9rem;
                z-index: 1;
                background-color: $text-color;
                color: white;
                width: 60px;
                height: 60px;
                padding: .6rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .job{
                position: relative;
                top: 50px;
                font-size: 1rem;
                font-weight: lighter;
                text-transform: uppercase;
                @include shadow-text(1px,1px);
            }
            img{
                width: 100%;
                cursor: pointer;
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
            &:nth-child(3n+1){
                .name{
                    transform: rotate(4deg);
                }
            }
             &:nth-child(3n+2){
                .name{
                    transform: rotate(-5deg);
                }
            }
        }
    }
}

.bigger{
    grid-column: auto /span 2;
    order: 0;
    img{
        width: 70%;
    }
}

// .name-move{
//     transform: translateY(100%);
// }


</style>