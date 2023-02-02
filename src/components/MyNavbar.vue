<template>
  <nav class="navbar">
    <div class="logo EA-icon">
      <img :src="require('@/assets/EA.svg')" alt="NFS logo" />
    </div>
    <button class="button-bar" @click="navbarHandler">
      <i v-show="!isActive" class="fa-solid fa-bars"></i>
    </button>

    <nav class="menu" :class="{ 'nav-mobile-active': isActive }">
      <button v-show="isActive" class="button-close" @click="navbarHandler">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <ul>
        <li><a href="#">Browser Games</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Forums</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <div class="sign-in">
        <a href="#">Sign in</a>
      </div>
    </nav>
  </nav>
</template>
<script>
export default {
  name: "MyNavbar",
  data() {
    return {
      width: 0,
      isActive: false,
    };
  },
  // karena di Vue gk ada event resize maka dibuatlah event-nya
  created() {
    window.addEventListener("resize", this.responsiveDevice);
  },
  // jangan lupa di-unmounted setiap ada perubahan
  unmounted() {
    window.removeEventListener("resize", this.responsiveDevice);
  },
  methods: {
    responsiveDevice() {
      this.width = window.innerWidth;
      if (this.width >= 768) {
        this.isActive = false;
      }
    },
    navbarHandler() {
      const navMenu = document.querySelector(".menu");

      if (!navMenu.classList.contains("nav-mobile-active")) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>
<style></style>
