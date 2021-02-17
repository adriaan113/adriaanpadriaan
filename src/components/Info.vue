<template>
  <div class="info" @mousemove="eyeMove">
    <div class="about-me">
      <h1>Adriaan van der Ploeg...</h1>
      <p>is a photographer and photo-editor at Dutch newspaper de Volkskrant.</p>
      <p>is a front-end development enthusiast.</p>
      <p>Sometimes makes a sculpture!</p>

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
            target="_blank">
            <p>LinkedIn</p></a>
            <a href="https://www.instagram.com/adriaanvanderploeg/" target="blank">
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 -40 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
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
      eyeLeft: require("../assets/eye-left3.png"),
      eyeRight: require("../assets/eye-right3.png"),
      tongueInOut: false
    };
  },
  methods: {
    isTouchDevice: function() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    },
    animateOnTouchDevice: function() { //IF TOUCH DEVICE: ANIMATE AUTOMATIICALY INSTEAD OF CURSOR BASED
      if (this.isTouchDevice()) {
        const eyeLeft = document.querySelector(".left");
        const eyeRight = document.querySelector(".right");
        const randomNumber =
          Math.floor(Math.random() * 100) + Math.floor(Math.random() * 200);

        gsap.to(eyeLeft, {
          duration: 1,
          rotation: randomNumber,
          repeat: -1,
          yoyo: true,
          delay: 1,
          repeatDelay: 3
        });
        gsap.to(eyeRight, {
          duration: 1,
          rotation: randomNumber,
          repeat: -1,
          yoyo: true,
          delay: 1,
          repeatDelay: 3
        });
      }
    },
    eyeMove: function(e) { //FOLLOW CURSOR WITH EYES
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

    tongue: function() { //STICK OUT TONGUE
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

    floatingHead: function() {
      const head = document.querySelector(".portrait");
      const shadow = document.querySelector(".face-shadow");
      const tl = gsap.timeline();

      tl.to(head, {
        y: "random(-10, 10)",
        duration: 1,
        repeat: -1,
        yoyo: true,
        rotation: "random(-5, 5)",
        repeatRefresh: true
      });
      tl.to(shadow, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        repeatRefresh: true
      });
    },
    // irregularText: function() { //SLIGHT TEXT DISTORTION
    //   const text = document.querySelectorAll("p");
    //   for (let i = 0; i < text.length; i++) {
    //     const string = text[i].textContent;
    //     text[i].innerHTML = "";
    //     string.split("").forEach(function(e) {
    //       const newtext = document.createElement("P");
    //       newtext.style.display = "inline";
    //       newtext.style.fontSize = Math.random() * (16 - 13) + 15 + "px";
    //       newtext.innerHTML = e;
    //       text[i].appendChild(newtext);
    //     });
    //   }
    // }
  },
  mounted() {
    this.tongue();
    this.floatingHead();
    //this.irregularText();
    this.animateOnTouchDevice();
  }
};
</script>

<style lang="scss" scoped>
@import "../global-scss/variables.scss";

.info {
  flex: 1;
  background-color: transparent;

  .about-me {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    h1{
      color: $text-color;
    }

    p {
      color: $text-color;
      margin: 0.2rem;
      &:nth-child(4) {
        margin-bottom: 2rem;
      }
    }

    .portrait {
      position: relative;
      margin: 3rem 0 6rem;
    }

    .face {
      width: 80%;
    }

    .eyes {
      position: absolute;
      top: 52%;
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

  .face-shadow {
    width: 80px;
    height: 30px;
    background-color: lighten(lightgray, 5%);
    z-index: 995;
    margin-top: -80px;
    border-radius: 40%;
    filter: blur(6px);
  }

  .contact {
    margin: 3rem 0 5rem;
    h1,
    p{
      color: $text-color;
    }
    .instagram{
      width: 20px;
    }
    @media (min-width: $breakpoint-medium) {
      margin: 3rem 0 30vh;
    }
  }
}
</style>
