<template>
  <nav class="navbar">
    <div class="logo EA-icon">
      <img :src="icons.EA" alt="EA logo" />
    </div>
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
</template>
<script>
import EA from "@/assets/EA.svg";
import NFS from "@/assets/NFS.svg";
import userIcon from "@/assets/user-regular.svg";

export default {
  name: "MyNavbar",
  data() {
    return {
      icons: {
        EA,
        NFS,
        userIcon,
      },
    };
  },
};
</script>
<style></style>
