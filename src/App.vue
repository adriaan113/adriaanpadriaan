<template>
  <div id="app">

    <my-header @item="showContent"></my-header>

    <!-- <my-aside></my-aside> -->

    <intro-gal @work="showMore" v-if="showIntro"></intro-gal>
  
    <info v-if="showInfo"></info>

    <work v-if="showWork"></work>

    <my-footer></my-footer>

  </div>
</template>

<script>
import IntroGal from './components/IntroGal.vue'
// import MyAside from './components/MyAside.vue'
import MyFooter from './components/MyFooter.vue'
import myHeader from './components/MyHeader.vue'
import Work from './components/Work.vue'

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      showIntro: true,
      showInfo: false,
      showWork: false,
    }
    
  },
  
  components: {
    myHeader,
    // MyAside,
    IntroGal,
    MyFooter,
    Work,
    
  },
  methods:{
    showContent: function(e){
      // console.log(e.target.textContent);
      if(e.target.textContent === 'home'){
        this.showIntro = true;
        this.showWork = false;
        this.showInfo = false;
      }else if(e.target.textContent === 'work'){
        // console.log('dit wordt de work page');
        this.showIntro = false;
        this.showWork = true;
        this.showInfo = false;

      }else if(e.target.textContent === 'info'){
        this.showIntro = false;
        this.showWork = false;
        this.showInfo = true;
      }
    },
    // irregularText: function(){
    //         const ctaText = document.querySelector('.cta');
    //         const string = ctaText.textContent;
    //         ctaText.innerHTML = '';
    //         string.split('').forEach(function(e){
    //             const newCtaText = document.createElement('H2');
    //             newCtaText.classList.add('cta');
    //             newCtaText.style.display = 'inline';
    //             // newCtaText.style.color = "#"+((1<<24)*Math.random()|0).toString(16)
    //             newCtaText.style.fontSize = (Math.random() * (36 - 30) + 20) + 'px';
    //             // newCtaText.style.transform = `rotate(${Math.floor(Math.random() * 50)}deg)`;
    //             newCtaText.innerHTML = e;
    //             ctaText.appendChild(newCtaText);
    //         });
    //     }
    showMore: function(){
        this.showIntro = false;
        this.showWork = true;
        this.showInfo = false;

    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;900&display=swap');

$text-color: #1212d4;
$work-nav-btn: $text-color;
$secondary-color: #ff005d;
$ternary-color: greenyellow;

$breakpoint-medium: 624px;


html{
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
  height: 100%; 
  margin: 0;
  padding: 0;
  }

  body{
    min-height: 100vh;
    box-sizing: border-box;
  }

#app {
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
 
  
  font-family: 'Catamaran', sans-serif;
  text-align: center;
  font-weight: 100;
  margin-top: 0;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  }

/***********MOBILE MENU STYLES***********/

.bm-menu{
  background-color:#1212d4 !important;
  }

.bm-item-list > * {
  flex-direction: column;
  justify-content: flex-start;
  }

.bm-item-list > * > span {
  /* text-align: left; */
  font-size: 3rem;
  }

.bm-cross {
  background: white;
  }

.bm-cross-button {
  height: 40px;
  width: 40px;
  span{
    height: 40px !important;
    width: 5px !important;
  }
  }

   .bm-burger-button {
      // position: absolute;
      width: 36px;
      height: 30px;
      left: 16px;
      top: 16px;
      cursor: pointer;
      .bm-burger-bars{
        background-color: $text-color;
      }
    }

/***********CAROUSEL STYLES***********/

    .agile {
    width: 100%;

    &__actions{
        margin: 20px 4px 0;
        @media (min-width: $breakpoint-medium) {
          margin: 20px 3rem 0;
        }
    }
		

	&__nav-button{
    background: transparent;
		border: none;
		color: red;
		cursor: pointer;
		font-size: 24px;
		transition-duration: .3s;
    // &--prev{
    //       border: 2px solid red;
    //     }
		&:hover{
            color: #888;
        }
    }
		

	&__dot{
        margin: 0 10px;
    }
		

		button{
      background-color: $work-nav-btn;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			display: block;
			height: 15px;
      width: 15px;
			font-size: 0;
			line-height: 0;
			margin: 0;
			padding: 0;
			transition-duration: .3s;
            &--current,
            &:hover{
                button{
                    background-color: #888;
                }  
            }             
        }	
}

.agile__nav-button--prev{
  background-color: white !important; //BETER MAKEN DIT
  width: 0 !important;
  height: 0 !important;
  border-radius: 0 !important;
  border-top: 10px solid transparent !important;
  border-right: 15px solid $secondary-color !important;
  border-bottom: 10px solid transparent !important;
}

.agile__nav-button--next{
  background-color: white !important; //BETER MAKEN DIT
  width: 0 !important;
  height: 0 !important;
  border-radius: 0 !important;
  border-top: 10px solid transparent !important;
  border-left: 15px solid $secondary-color !important;
  border-bottom: 10px solid transparent !important;
}


</style>
