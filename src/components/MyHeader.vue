<template>
  <header class="relative h-screen">
    <nav
      class="navbar bg-black absolute top-0 left-0 w-screen h-16 flex justify-between px-11 items-center"
    >
      <span class="logo EA-icon">
        <img :src="logos.EA" alt="EA logo" />
      </span>
      <span class="logo NFS-icon">
        <img :src="logos.NFS" alt="NFS logo" />
      </span>
      <span class="user-icon"> user </span>
    </nav>
    <div class="hero-section p-20">
      <div class="title-logo">
        <h1>
          <img :src="logos.NFSUnbound" alt="NFS unbound logo" />
        </h1>
        <p>Start at the bottom, Race to the top</p>
      </div>

      <div class="button-section">
        <button>Watch Tailer</button><button>Buy Now</button>
      </div>
    </div>
  </header>
</template>
<script>
import EA from "../assets/images/EA.svg";
import NFS from "../assets/images/NFS.svg";
import NFSUnbound from "../assets/images/NFS-unbound-logo.svg";

export default {
  name: "MyHeader",

  data() {
    return {
      logos: {
        EA,
        NFS,
        NFSUnbound,
      },
    };
  },
};
</script>
<style>
.hero-section {
  width: 100vw;
  height: 100%;
  background-image: url(../assets/images/bg-hero.jpg);
  background-position: center;
  background-size: 80%;
}
</style>
