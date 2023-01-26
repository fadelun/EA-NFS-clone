<template>
  <Header />
  <div class="container">
    <!-- main -->
    <!-- footer -->
  </div>
</template>

<script>
import Header from "./views/MyHeader.vue";

export default {
  name: "App",
  components: {
    Header,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  color: #2c3e50;
  position: relative;
}
</style>
