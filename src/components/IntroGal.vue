<template>
    <div>
        <h2>fotografeerde bijvoorbeeld...</h2>
        <ul id="intro-gal" class="intro-gallery">
            <li class="intro-gallery--item" v-for="person in persons" :key="person.name">
                <a href="">
                    <p @mouseover="hoverName(person)" @mouseleave="person.show=false">{{person.name}}</p>
                </a>    
                <div v-if="person.show" class="animate__animated" :class="person.animate">
                        <img :src="person.img" alt="" class="hover-img" :style="{top:person.top, left:person.left}">
                </div>
            </li>
        </ul>
            <div class="cta" @click="showWork">
                <h2>
                    <a href="#">      
                        <svg width="70" height="74" viewBox="0 40 146 74" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3l70 68 70-68" stroke="#1212d4" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linejoin="bevel"/>
                        </svg>
                    </a>
                </h2>
            </div>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            persons:[
                {
                    name: 'John de Wolf',
                    img: require('../assets/john-de-wolf.jpg'),
                    show: false,
                    animate: 'animate__bounceInLeft',
                    top: '-40px',
                    left: '20px'
                },
                {
                    name:'Omar',
                    img: require('../assets/omar.jpg'),
                    show: false,
                    animate: 'animate__fadeInUp',
                    position: true,
                    top: '-40px',
                    left: '80px'
                },
                {
                    name:'Lubomyr Melnyk',
                    img: require('../assets/melnik.jpg'),
                    show: false,
                    animate: 'animate__jello',
                    top: '-200px',
                    left: '10px'
                }
            ],
        }
    },
    methods:{
        hoverName:function(person){
            person.show = !person.show;
        },
        // test: function(){
        //     const ctaText = document.querySelector('.cta');
        //     const string = ctaText.textContent;
        //     ctaText.innerHTML = '';
        //     string.split('').forEach(function(e){
        //         const newCtaText = document.createElement('H2');
        //         newCtaText.classList.add('cta');
        //         newCtaText.style.display = 'inline';
        //         // newCtaText.style.color = "#"+((1<<24)*Math.random()|0).toString(16)
        //         newCtaText.style.fontSize = (Math.random() * (36 - 30) + 20) + 'px';
        //         // newCtaText.style.transform = `rotate(${Math.floor(Math.random() * 50)}deg)`;
        //         newCtaText.innerHTML = e;
        //         ctaText.appendChild(newCtaText);
        //     });
        // }
        showWork: function(){
        //    this.$root.$emit('hoi vanuit introGal');
            this.$emit('work');
        }
    }
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

.intro-gallery{
    background-color: white;
    list-style: none;
    padding: 0;
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
    width: 150px;
    z-index: 2;
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


</style>