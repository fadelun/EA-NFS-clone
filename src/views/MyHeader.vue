<template>
  <header>
    <Navbar />
    <Hero />
  </header>
</template>
<script>
import Navbar from "../components/MyNavbar.vue";
import Hero from "../components/HeroSection.vue";

export default {
  name: "MyHeader",
  components: {
    Navbar,
    Hero,
  },
};
</script>
<style></style>
