<template>
  <div class="info" @mousemove="eyeMove">
    <div class="about-me">
      <h1>Adriaan van der Ploeg...</h1>
      <p>is fotograaf en beeldredacteur bij de Volkskrant</p>
      <p>maar ook enthousiast tekenaar van hoofden</p>
      <p>en front-end enthousiasteling</p>

    <div class="portrait">
        <img :src="portretNew" alt="portret van adriaan" class="face" />

        <div class="eyes">
          <img :src="eyeLeft" alt="" class="eye left" />
          <img :src="eyeRight" alt="" class="eye right" />
        </div>        

        <svg
          viewBox="0 0 37 0"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          id="tong"
        >
          <defs>
            <filter
              x="-31.1%"
              y="-23.5%"
              width="162.2%"
              height="146.9%"
              filterUnits="objectBoundingBox"
              id="b"
            >
              <feMorphology
                radius="3"
                in="SourceAlpha"
                result="shadowSpreadInner1"
              />
              <feGaussianBlur
                stdDeviation="6"
                in="shadowSpreadInner1"
                result="shadowBlurInner1"
              />
              <feOffset
                dy="8"
                in="shadowBlurInner1"
                result="shadowOffsetInner1"
              />
              <feComposite
                in="shadowOffsetInner1"
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                result="shadowInnerInner1"
              />
              <feColorMatrix
                values="0 0 0 0 0.506085247 0 0 0 0 0.066815074 0 0 0 0 0.301744044 0 0 0 0.5 0"
                in="shadowInnerInner1"
              />
            </filter>
            <filter
              x="-124.6%"
              y="-4.6%"
              width="349.1%"
              height="109.2%"
              filterUnits="objectBoundingBox"
              id="c"
            >
              <feGaussianBlur stdDeviation=".6" in="SourceGraphic" />
            </filter>
            <path
              d="M.787 0h35.426c.512 3.482.787 7.175.787 11 0 20.987-8.283 38-18.5 38S0 31.987 0 11C0 7.175.275 3.482.787 0z"
              id="a"
            />
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use fill="#EA0000" xlink:href="#a" />
            <use fill="#000" filter="url(#b)" xlink:href="#a" />
            <path
              d="M19 9.967C20.929 22.666 20.929 35.919 19 49"
              fill="#A00C0C"
              filter="url(#c)"
            />
          </g>
        </svg>

      </div>
       <div class="face-shadow"></div>
    </div>

    <div class="contact">
      <h1>contact</h1>
      <div class="contact-details">
        <div>
          <a href="mailto:adriaanvanderploeg@gmail.com"
            ><p>adriaanvanderploeg@gmail.com</p></a
          >
          <a href="tel: 0620966933"><p>0620966933</p></a>
          <a
            href="https://www.linkedin.com/in/adriaanvanderploeg"
            target="_blank"
            ><p>LinkedIn</p></a
          >
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      portret: require("../assets/adriaan-van-der-ploeg.jpg"),
      portretNew: require("../assets/adriaan-van-der-ploeg4.png"),
      eyeLeft: require("../assets/eye-left2.png"),
      eyeRight: require("../assets/eye-right2.png"),
      tongueInOut: false,
    };
  },
  methods: {
     isTouchDevice: function() {
      return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
    },
    animateOnTouchDevice: function(){
      if(this.isTouchDevice()){
        console.log('dit is een touchscreen');
        const eyeLeft = document.querySelector('.left');
        const eyeRight = document.querySelector('.right');
        const randomNumber = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 200);
        
        gsap.to(eyeLeft,{duration:1, rotation: randomNumber, repeat: -1, yoyo:true, delay:1,repeatDelay:3});
        gsap.to(eyeRight,{duration:1, rotation: randomNumber, repeat: -1, yoyo:true, delay:1,repeatDelay:3});
      }
    },
    eyeMove: function(e) {
      const eyes = document.querySelectorAll(".left, .right");

      for (let i = 0; i < eyes.length; i++) {
        const x =
          eyes[i].getBoundingClientRect().left + eyes[i].clientWidth / 2;
        const y =
          eyes[i].getBoundingClientRect().top + eyes[i].clientHeight / 2;
        const radian = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = radian * (180 / Math.PI) * -1 + 90; //was +90
        eyes[i].style.transform = `rotate(${rot}deg)`;
      }
    },

    tongue: function() {
      const tongue = document.querySelector("#tong");

      setInterval(() => {
        if (!this.tongueInOut) {
          gsap.to(tongue, {
            attr: { viewBox: "0 0 37 49" },
            duration: 2,
            delay: 4,
            ease: "bounce"
          });
          this.tongueInOut = true;
        } else if (this.tongueInOut) {
          gsap.to(tongue, { attr: { viewBox: "0 0 37 0" }, duration: 0.5 });
          this.tongueInOut = false;
        }
      }, 6000);
    },

    floatingHead: function(){
      const head= document.querySelector('.portrait');
      const shadow=document.querySelector('.face-shadow');
      const tl = gsap.timeline();
    
      tl.to(head,{y:"random(-10, 10)",duration:1,repeat:-1,yoyo:true, rotation:"random(-5, 5)",repeatRefresh:true,});
      tl.to(shadow,{scale:1.1,duration:1,repeat:-1,yoyo:true,repeatRefresh:true});

    },
      irregularText: function(){
            const text = document.querySelectorAll('p');
            for(let i =0; i<text.length; i++){
                const string = text[i].textContent;
                text[i].innerHTML = '';
                string.split('').forEach(function(e){
                    const newtext = document.createElement('P');
                    // newtext.classList.add('cta');
                    newtext.style.display = 'inline';
                    newtext.style.fontSize = (Math.random() * (16 - 13) + 15) + 'px';
                    // newtext.style.transform = `rotate(${Math.floor(Math.random() * 50)}deg)`;
                    newtext.innerHTML = e;
                    text[i].appendChild(newtext);
                });
            }
           
        }
  },
  mounted() {
    this.tongue();
    this.floatingHead();
    this.irregularText();
    this.animateOnTouchDevice();
    //this.makeMeBlush();
  }
};
</script>

<style lang="scss" scoped>

.info {
  background-color: white;

  .about-me {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    p{
      margin: .2rem;
      &:nth-child(4){
        margin-bottom: 2rem;
      }
    }

    .portrait {
      position: relative;
      margin-bottom: 6rem;
    }

    .face {
      width: 80%;
    }

    .eyes {
      position: absolute;
      top: 51%;
      left: -8%;
      width: 100%;
    }

    .eye {
      position: absolute;
      width: 6%;
    }
    .left {
      left: 39%;
    }
    .right {
      left: 66%;
    }
  }

  #tong {
    position: absolute;
    top: 82%;
    left: 45%;
    width: 9%;
    z-index: 999;
    opacity: 1;
  }

.blush-container{
    position: absolute;
    top: 60%;
    left: 28%;
    width: 43%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .blush-left,
    .blush-right{
        width: 30%;
        opacity: .2;
    }
}

.face-shadow{
  width:80px;
  height: 30px;
  background-color: lighten(lightgray,5%);
  z-index: 999;
  margin-top: -80px;
  border-radius: 40%;
  filter: blur(6px);
}


}
</style>
