<template>
    <div>
        <h2>fotografeerde bijvoorbeeld...</h2>
        <ul id="intro-gal" class="intro-gallery">
            <li class="intro-gallery--item" v-for="person in persons" :key="person.name">
                <a href="">
                    <p @mouseover="hoverName(person)" @mouseleave="person.show=false">{{person.name}}</p>
                    <div v-if="person.show" class="animate__animated" :class="person.animate">
                        <img :src="person.img" alt="" class="hover-img" :style="{top:person.top, left:person.left}">
                    </div>
                </a>    
            </li>
        </ul>
            <div class="cta" @click="showWork"><h2><a href="#">Maar nog veel meer!</a></h2></div>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            persons:[
                {
                    name: 'john de wolf',
                    img: require('../assets/john-de-wolf.jpg'),
                    show: false,
                    animate: 'animate__bounceInLeft',
                    top: '30px',
                    left: '20px'
                },
                {
                    name:'omar',
                    img: require('../assets/omar.jpg'),
                    show: false,
                    animate: 'animate__fadeInUp',
                    position: true
                },
                {
                    name:'lubovar melnik',
                    img: require('../assets/melnik.jpg'),
                    show: false,
                    animate: 'animate__jello'
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

.intro-gallery{
    background-color: yellowgreen;
    list-style: none;
    padding: 0;
    .intro-gallery--item{
        position: relative;
        a{
            text-decoration: none;
            &:hover{
                color:red;
            }
            p{
                font-size: 1.5rem;
                position: relative;
                z-index: 0;
            }
            .hover-img{
                position: absolute;
                width: 250px;
                z-index: 9999;
            }
        } 
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


</style>