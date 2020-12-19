<template>
    <div>
        <h2>fotografeerde bijvoorbeeld...</h2>
        <ul id="intro-gal" class="intro-gallery">
            <li class="intro-gallery--item" v-for="person in persons" :key="person.name">
                <a href="">
                    <p @mouseover="test(person)" @mouseleave="person.show=false">{{person.name}}</p>
                    <div v-if="person.show" class="animate__animated" :class="person.animate">
                        <img :src="person.img" alt="" class="hover-img" :style="{top:person.top, left:person.left}">
                    </div>
                </a>    
            </li>
        </ul>
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
                    animate: 'animate__bounceInRight',
                    position: true
                },
                {
                    name:'lubovar melnik',
                    img: require('../assets/melnik.jpg'),
                    show: false,
                    animate: 'animate__bounceInUp'
                }
            ],
        }
    },
    methods:{
        test:function(person){
            person.show = !person.show;
        }
    }
}
</script>

<style lang="scss" scoped>

ul{
    background-color: yellowgreen;
    list-style: none;
    padding: 0;
}

.intro-gallery--item{
    position: relative;
}

.hover-img{
    position: absolute;
    width: 100px;
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