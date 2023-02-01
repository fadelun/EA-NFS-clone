<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from "./views/MyHeader.vue";
import Main from "./views/MyMain.vue";
import Footer from "./views/MyFooter.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "PT Sans", Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* width: 100vw; */
  color: #2c3e50;
  position: relative;
}
</style>
