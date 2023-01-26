<template>
  <div class="hero-section">
    <div class="titel-section">
      <h1>
        <img
          :src="NFSUnboundLogo"
          alt="NFS unbound logo"
          class="w-[500px] drop-shadow-xl"
        />
      </h1>
      <p class="title">Start at the bottom, Race to the top</p>
    </div>

    <div class="button-section">
      <button class="btn btn-secondary">
        Watch Trailer
        <!-- import svg play --></button
      ><button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</template>
<script>
import NFSUnboundLogo from "../assets/NFS-unbound-logo.svg";

export default {
  name: "HeroSection",
  data() {
    return {
      NFSUnboundLogo,
    };
  },
};
</script>
<style scoped></style>
