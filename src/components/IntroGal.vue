<template>
    <div>
        <h2>fotografeerde bijvoorbeeld...</h2>
        <ul id="intro-gal" class="intro-gallery">
            <li class="intro-gallery--item" v-for="person in persons" :key="person.name">
                <!-- <a href=""> -->
                    <p @mouseover="test(person)" @mouseleave="person.show=false">{{person.name}}</p>
                    <!-- <div v-show="active">
                        <img :src="person.img" alt="" >
                    </div> -->
                <!-- </a> -->
                <div v-if="person.show">
                    <img :src="person.img" alt="" class="hover-img">
                </div>
                
            </li>
            <!-- <li class="intro-gallery--item">
                <a href=""><p>{{names.omar}}</p></a>

                @mouseover="active=true" @mouseleave="active=false"

            </li>
            <li class="intro-gallery--item">
                <a href=""><p>{{names.melnik}}</p></a>
            </li> -->
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
                    show: false

                },
                {
                    name:'omar',
                    img: require('../assets/omar.jpg'),
                    show: false
                },
                {
                    name:'lubovar melnik',
                    img: require('../assets/melnik.jpg'),
                    show: false
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
}

.intro-gallery--item{
    position: relative;
}

.hover-img{
    position: absolute;
    width: 100px;
}

</style>