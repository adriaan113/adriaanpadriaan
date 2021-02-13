<template>
  <div id="app">
    <my-header></my-header>

    <router-view></router-view>

    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import myHeader from "./components/MyHeader.vue";
import work from "./components/data.js";

export default {
  name: "App",
  data() {
    return {
      work: work.data
    };
  },

  components: {
    myHeader,
    MyFooter
  },
  methods: {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
@import "./global-scss/variables.scss";

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100%;
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;

  text-align: center;
  font-weight: 100;
  margin-top: 0;
  min-height: 100vh;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Catamaran", sans-serif;
  }

  p,
  small {
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
  }
}

/***********MOBILE MENU STYLES***********/

.bm-menu {
  background-color: #1212d4 !important;
}

.bm-item-list > * {
  flex-direction: column;
  justify-content: flex-start;
}

.bm-item-list > * > span {
  font-size: 3rem;
}

.bm-cross {
  background: white;
}

.bm-cross-button {
  height: 40px;
  width: 40px;
  span {
    height: 40px !important;
    width: 5px !important;
  }
}

.bm-burger-button {
  width: 36px;
  height: 30px;
  left: 16px;
  top: 16px;
  cursor: pointer;
  .bm-burger-bars {
    background-color: $text-color;
  }
}

#home {
  a {
    color: white;
  }
  .router-link-active {
    text-decoration: underline;
  }
}
</style>
